import { createClient, type User } from '@supabase/supabase-js';

export const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined) || '';
export const SUPABASE_PUBLISHABLE_KEY = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) || '';

export const supabase = SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: true, autoRefreshToken: true } })
  : null;

export type DbProject = {
  id:string;
  title:string;
  slug:string;
  short_description:string;
  full_description:string|null;
  category:string|null;
  difficulty:'beginner'|'intermediate'|'advanced';
  technologies:string[];
  what_you_will_learn:string[];
  how_it_works:any;
  challenges:string[];
  thumbnail_url:string|null;
  live_demo_url:string|null;
  github_url:string|null;
  tutorial_url:string|null;
  sandbox_url:string|null;
  status:'draft'|'published';
  featured:boolean;
  seo_title:string|null;
  seo_description:string|null;
  created_at:string;
  updated_at:string;
  published_at:string|null;
};

export type DbProjectFile = {
  id?:string;
  project_id?:string;
  file_name:string;
  language:string;
  content:string;
  sort_order:number;
};

export function dbConfigured(){ return Boolean(supabase); }

export async function getPublishedProjects(){
  if(!supabase) return [];
  const {data,error}=await supabase.from('projects').select('*').eq('status','published').order('created_at',{ascending:true});
  if(error) throw error;
  return (data||[]) as DbProject[];
}

export async function getProjectBySlug(slug:string){
  if(!supabase) return null;
  const {data,error}=await supabase.from('projects').select('*').eq('slug',slug).maybeSingle();
  if(error) throw error;
  return data as DbProject|null;
}

export async function getProjectFiles(projectId:string){
  if(!supabase) return [];
  const {data,error}=await supabase.from('project_files').select('*').eq('project_id',projectId).order('sort_order',{ascending:true});
  if(error) throw error;
  return (data||[]) as DbProjectFile[];
}

export async function getAllAdminProjects(){
  if(!supabase) return [];
  const {data,error}=await supabase.from('projects').select('*').order('updated_at',{ascending:false});
  if(error) throw error;
  return (data||[]) as DbProject[];
}

export async function saveProject(input:{
  id?:string;
  title:string;
  slug:string;
  short_description:string;
  full_description?:string;
  category?:string;
  difficulty:'beginner'|'intermediate'|'advanced';
  technologies:string[];
  what_you_will_learn?:string[];
  how_it_works?:any;
  challenges?:string[];
  thumbnail_url?:string|null;
  live_demo_url?:string|null;
  github_url?:string|null;
  tutorial_url?:string|null;
  sandbox_url?:string|null;
  status:'draft'|'published';
  featured?:boolean;
  seo_title?:string;
  seo_description?:string;
}){
  if(!supabase) throw new Error('Supabase is not configured.');
  const payload:any={...input,updated_at:new Date().toISOString(),published_at:input.status==='published'?new Date().toISOString():null};
  const query=input.id
    ? supabase.from('projects').update(payload).eq('id',input.id).select().single()
    : supabase.from('projects').insert(payload).select().single();
  const {data,error}=await query;
  if(error) throw error;
  return data as DbProject;
}

export async function saveProjectFiles(projectId:string,files:DbProjectFile[]){
  if(!supabase) throw new Error('Supabase is not configured.');
  const {error:delError}=await supabase.from('project_files').delete().eq('project_id',projectId);
  if(delError) throw delError;
  if(!files.length) return;
  const rows=files.map((f,i)=>({project_id:projectId,file_name:f.file_name,language:f.language,content:f.content,sort_order:i}));
  const {error}=await supabase.from('project_files').insert(rows);
  if(error) throw error;
}

export async function deleteProject(projectId:string){
  if(!supabase) throw new Error('Supabase is not configured.');
  const {error}=await supabase.from('projects').delete().eq('id',projectId);
  if(error) throw error;
}

export async function uploadProjectAsset(file:File,projectSlug:string,kind:'thumbnail'|'zip'){
  if(!supabase) throw new Error('Supabase is not configured.');
  const ext=file.name.split('.').pop()?.toLowerCase()||'bin';
  const path=projectSlug+'/'+kind+'-'+Date.now()+'.'+ext;
  const {error}=await supabase.storage.from('project-assets').upload(path,file,{upsert:true,cacheControl:'31536000'});
  if(error) throw error;
  const {data}=supabase.storage.from('project-assets').getPublicUrl(path);
  return data.publicUrl;
}

export async function signInAdmin(email:string,password:string){
  if(!supabase) throw new Error('Supabase is not configured.');
  const {data,error}=await supabase.auth.signInWithPassword({email,password});
  if(error) throw error;
  if(!data.user) throw new Error('Login failed.');
  const {data:developer,error:roleError}=await supabase.from('developer_users').select('id').eq('user_id',data.user.id).maybeSingle();
  if(roleError) throw roleError;
  if(!developer){await supabase.auth.signOut();throw new Error('This account is not authorized for Developer Studio.');}
  return data.user as User;
}

export async function getSessionUser(){
  if(!supabase) return null;
  const {data}=await supabase.auth.getSession();
  return data.session?.user||null;
}

export async function signOutAdmin(){ if(supabase) await supabase.auth.signOut(); }


/** Confirm the signed-in user is authorized for the private Developer Studio. */
export async function isDeveloperUser(userId:string){
  if(!supabase) return false;
  const {data,error}=await supabase.from('developer_users').select('id').eq('user_id',userId).maybeSingle();
  if(error) throw error;
  return Boolean(data);
}
