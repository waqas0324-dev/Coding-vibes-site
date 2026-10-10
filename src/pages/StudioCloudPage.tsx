import React, { useEffect, useMemo, useState } from 'react';
import JSZip from 'jszip';
import { ArrowLeft, Check, Eye, FileCode2, FolderOpen, Lock, LogIn, LogOut, Pencil, Plus, Upload, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import type { StudioProject } from './StudioPage';
import { slugify, studioProjectToHtml } from './StudioPage';

const DRAFTS_KEY = 'cv-studio-local-drafts';
const STARTER_FILES: Record<string, string> = {
  'index.html': '<!doctype html>\\n<html lang="en">\\n<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>My Project</title></head>\\n<body>\\n  <main><h1>My Coding Vibes Project</h1><p>Start building here.</p></main>\\n</body></html>',
  'style.css': 'body { font-family: system-ui, sans-serif; padding: 2rem; }',
  'app.js': 'console.log("Coding Vibes");',
};
const ACCEPTED_EXT = /\\.(html?|css|js|jsx|ts|tsx|json|md|txt)$/i;

function readDrafts(): StudioProject[] {
  try { const data = JSON.parse(localStorage.getItem(DRAFTS_KEY) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; }
}

export const StudioCloudPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [projects, setProjects] = useState<StudioProject[]>([]);
  const [drafts, setDrafts] = useState<StudioProject[]>(readDrafts);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState<StudioProject['level']>('Beginner');
  const [tech, setTech] = useState('HTML · CSS · JavaScript');
  const [thumbnail, setThumbnail] = useState('');
  const [files, setFiles] = useState<Record<string, string>>({ ...STARTER_FILES });
  const [selectedFile, setSelectedFile] = useState('index.html');
  const [newFile, setNewFile] = useState('');

  const allProjects = useMemo(() => [...drafts, ...projects].filter((p, i, arr) => arr.findIndex(x => x.id === p.id) === i), [drafts, projects]);
  const inputClass = 'w-full rounded-xl border border-[#203047] bg-[#0a101b] px-3 py-2.5 text-sm text-white outline-none focus:border-[#22c55e]';
  const resetForm = () => {
    setEditingId(null); setTitle(''); setSlug(''); setDescription(''); setLevel('Beginner');
    setTech('HTML · CSS · JavaScript'); setThumbnail(''); setFiles({ ...STARTER_FILES }); setSelectedFile('index.html'); setNewFile('');
  };

  const requestLibrary = async (secret: string) => {
    const response = await fetch('/api/studio-projects', { headers: { 'x-studio-password': secret }, cache: 'no-store' });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Could not load the project library.');
    return Array.isArray(data.projects) ? data.projects as StudioProject[] : [];
  };

  const login = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true); setError(''); setMessage('');
    try {
      const remote = await requestLibrary(password);
      setProjects(remote); setSignedIn(true); setMessage('Signed in. Shared projects loaded.');
    } catch (err) { setError(err instanceof Error ? err.message : 'Sign-in failed.'); }
    finally { setBusy(false); }
  };

  const saveDraft = () => {
    if (!title.trim()) { setError('Project title is required.'); return; }
    const now = new Date().toISOString();
    const id = editingId || slugify(slug || title) || `project-${Date.now()}`;
    const item: StudioProject = {
      id, title: title.trim(), slug: slugify(slug || title), description: description.trim(), level,
      tech: tech.trim(), thumbnail: thumbnail || undefined, files, status: 'draft',
      createdAt: drafts.find(p => p.id === id)?.createdAt || now, updatedAt: now,
    };
    const next = [item, ...drafts.filter(p => p.id !== id)];
    setDrafts(next); localStorage.setItem(DRAFTS_KEY, JSON.stringify(next));
    setMessage('Draft saved in this browser. Publish it to share with all visitors.'); setError('');
  };

  const publishProject = async () => {
    if (!title.trim()) { setError('Project title is required.'); return; }
    setBusy(true); setError(''); setMessage('');
    const now = new Date().toISOString();
    const id = editingId || slugify(slug || title) || `project-${Date.now()}`;
    const item: StudioProject = {
      id, title: title.trim(), slug: slugify(slug || title), description: description.trim(), level,
      tech: tech.trim(), thumbnail: thumbnail || undefined, files, status: 'published',
      createdAt: projects.find(p => p.id === id)?.createdAt || drafts.find(p => p.id === id)?.createdAt || now, updatedAt: now,
    };
    const next = [item, ...projects.filter(p => p.id !== id)];
    try {
      const response = await fetch('/api/studio-projects', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-studio-password': password },
        body: JSON.stringify({ projects: next }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Publish failed.');
      setProjects(next); const nextDrafts = drafts.filter(p => p.id !== id);
      setDrafts(nextDrafts); localStorage.setItem(DRAFTS_KEY, JSON.stringify(nextDrafts));
      setMessage('Published to the shared project library. A Vercel deployment will update the public Projects page.');
      resetForm();
    } catch (err) { setError(err instanceof Error ? err.message : 'Publish failed.'); }
    finally { setBusy(false); }
  };

  const editProject = (project: StudioProject) => {
    setEditingId(project.id); setTitle(project.title); setSlug(project.slug); setDescription(project.description);
    setLevel(project.level); setTech(project.tech); setThumbnail(project.thumbnail || '');
    setFiles(project.files || { ...STARTER_FILES }); setSelectedFile(Object.keys(project.files || STARTER_FILES)[0] || 'index.html');
    setError(''); setMessage('');
  };

  const deleteProject = async (project: StudioProject) => {
    if (!window.confirm(`Delete "${project.title}" from the shared project library?`)) return;
    const next = projects.filter(p => p.id !== project.id);
    setBusy(true); setError(''); setMessage('');
    try {
      const response = await fetch('/api/studio-projects', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-studio-password': password },
        body: JSON.stringify({ projects: next }),
      });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || 'Delete failed.');
      setProjects(next); setMessage('Project removed from the shared library. Vercel will redeploy.');
    } catch (err) { setError(err instanceof Error ? err.message : 'Delete failed.'); }
    finally { setBusy(false); }
  };

  const importFiles = async (list: FileList | null) => {
    if (!list) return;
    for (const file of Array.from(list)) {
      if (file.name.toLowerCase().endsWith('.zip')) {
        try {
          const zip = await JSZip.loadAsync(file); const imported: Record<string, string> = {};
          for (const entry of Object.values(zip.files).filter(item => !item.dir)) {
            if (ACCEPTED_EXT.test(entry.name)) imported[entry.name] = await entry.async('string');
          }
          setFiles(prev => ({ ...prev, ...imported })); setSelectedFile(Object.keys(imported)[0] || selectedFile);
          setMessage(`Imported ${Object.keys(imported).length} supported file(s) from ZIP.`);
        } catch { setError('Could not read this ZIP file.'); }
      } else if (ACCEPTED_EXT.test(file.name)) {
        const content = await file.text(); setFiles(prev => ({ ...prev, [file.name]: content })); setSelectedFile(file.name);
      }
    }
  };

  const loadThumbnail = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader(); reader.onload = () => setThumbnail(String(reader.result || '')); reader.readAsDataURL(file);
  };

  if (!signedIn) return (
    <div className="min-h-[70vh] bg-[#080d14] px-4 py-14 flex items-center justify-center">
      <form onSubmit={login} className="w-full max-w-md rounded-3xl border border-[#1e293b] bg-[#0d131f] p-7 sm:p-9 shadow-2xl">
        <div className="mb-6 flex items-center gap-2"><span className="font-mono text-xl font-black text-[#22c55e]">&lt;/&gt;</span><strong className="text-white">CODING <span className="text-[#22c55e]">VIBES</span></strong></div>
        <span className="text-xs font-mono font-bold uppercase tracking-[.2em] text-[#22c55e]">Private admin workspace</span>
        <h1 className="mt-2 text-2xl font-extrabold text-white">Project Studio</h1>
        <p className="mt-2 mb-6 text-sm leading-6 text-gray-400">Manage project thumbnails, source files, drafts and public publishing from one private workspace.</p>
        <label className="mb-2 block text-xs font-semibold text-gray-300">Studio password</label>
        <div className="relative"><Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-500"/><input required type="password" value={password} onChange={e => setPassword(e.target.value)} className={inputClass + ' pl-10'} placeholder="Enter your admin password"/></div>
        {error && <p className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
        <button disabled={busy} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#22c55e] px-4 py-3 text-sm font-bold text-black disabled:opacity-60"><LogIn className="h-4 w-4"/>{busy ? 'Checking…' : 'Sign in securely'}</button>
        <button type="button" onClick={() => navigateTo('home')} className="mt-5 flex items-center gap-2 text-xs text-gray-500 hover:text-white"><ArrowLeft className="h-4 w-4"/>Back to site</button>
      </form>
    </div>
  );

  return (
    <div className="min-h-[75vh] bg-[#080d14] px-4 py-7 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px] space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e293b] pb-5">
          <div><span className="text-xs font-mono font-bold uppercase tracking-[.2em] text-[#22c55e]">Coding Vibes · Private</span><h1 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">Project Studio</h1><p className="mt-1 text-sm text-gray-400">Upload, preview, draft, publish and manage learning projects.</p></div>
          <button onClick={() => { setSignedIn(false); setPassword(''); setProjects([]); }} className="flex items-center gap-2 rounded-xl border border-[#263449] bg-[#111a28] px-4 py-2.5 text-sm text-gray-200 hover:text-white"><LogOut className="h-4 w-4"/>Sign out</button>
        </header>
        <div className="grid gap-3 sm:grid-cols-3">
          {[{label:'Shared projects',value:projects.length},{label:'Published',value:projects.filter(p => p.status === 'published').length},{label:'Local drafts',value:drafts.length}].map(card => <div key={card.label} className="rounded-2xl border border-[#1e293b] bg-[#0d131f] p-5"><p className="text-xs uppercase tracking-wider text-gray-500">{card.label}</p><p className="mt-2 text-3xl font-black text-white">{card.value}</p></div>)}
        </div>
        {(message || error) && <div className={`rounded-xl border px-4 py-3 text-sm ${error ? 'border-red-500/30 bg-red-500/10 text-red-300' : 'border-[#22c55e]/30 bg-[#22c55e]/10 text-emerald-200'}`}>{error || message}</div>}
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,.9fr)]">
          <section className="space-y-5 rounded-2xl border border-[#1e293b] bg-[#0d131f] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3"><h2 className="text-lg font-bold text-white">{editingId ? 'Edit project' : 'Create a project'}</h2><button onClick={resetForm} className="rounded-lg border border-[#263449] px-3 py-2 text-xs text-gray-300 hover:text-white"><Plus className="mr-1 inline h-3.5 w-3.5"/>New</button></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-semibold text-gray-300">Project title<input value={title} onChange={e => { setTitle(e.target.value); if (!editingId) setSlug(slugify(e.target.value)); }} className={inputClass + ' mt-1.5'} placeholder="Responsive portfolio"/></label>
              <label className="text-xs font-semibold text-gray-300">URL slug<input value={slug} onChange={e => setSlug(e.target.value)} className={inputClass + ' mt-1.5'} placeholder="responsive-portfolio"/></label>
              <label className="text-xs font-semibold text-gray-300">Difficulty<select value={level} onChange={e => setLevel(e.target.value as StudioProject['level'])} className={inputClass + ' mt-1.5'}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
              <label className="text-xs font-semibold text-gray-300">Technologies<input value={tech} onChange={e => setTech(e.target.value)} className={inputClass + ' mt-1.5'} placeholder="HTML · CSS · JavaScript"/></label>
            </div>
            <label className="block text-xs font-semibold text-gray-300">Description<textarea value={description} onChange={e => setDescription(e.target.value)} className={inputClass + ' mt-1.5 min-h-20 resize-y'} placeholder="What will students build and learn?"/></label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block rounded-xl border border-dashed border-[#263449] p-4 text-xs text-gray-400 hover:border-[#22c55e]/50">Project thumbnail<input type="file" accept="image/png,image/jpeg,image/webp" onChange={e => loadThumbnail(e.target.files?.[0] || null)} className="mt-3 block w-full text-xs"/></label>
              <label className="block rounded-xl border border-dashed border-[#263449] p-4 text-xs text-gray-400 hover:border-[#22c55e]/50">Import ZIP or source files<input type="file" multiple accept=".zip,.html,.htm,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt" onChange={e => void importFiles(e.target.files)} className="mt-3 block w-full text-xs"/></label>
            </div>
            {thumbnail && <img src={thumbnail} alt="Project thumbnail preview" className="h-36 w-full rounded-xl border border-[#263449] object-cover sm:w-64"/>}
            <div><div className="mb-2 flex flex-wrap items-center gap-2">{Object.keys(files).map(name => <button key={name} onClick={() => setSelectedFile(name)} className={`rounded-lg border px-3 py-1.5 text-xs font-mono ${selectedFile === name ? 'border-[#22c55e]/50 bg-[#22c55e]/10 text-[#4ade80]' : 'border-[#263449] text-gray-400'}`}>{name}</button>)}<input value={newFile} onChange={e => setNewFile(e.target.value)} className="w-32 rounded-lg border border-[#263449] bg-[#080d14] px-2 py-1.5 text-xs text-white" placeholder="new-file.js"/><button onClick={() => { const name = newFile.trim(); if (name && !(name in files)) { setFiles(prev => ({...prev,[name]:''})); setSelectedFile(name); setNewFile(''); } }} className="rounded-lg bg-[#172438] p-2 text-[#4ade80]" aria-label="Add file"><Plus className="h-4 w-4"/></button></div>
              <textarea spellCheck={false} value={files[selectedFile] || ''} onChange={e => setFiles(prev => ({...prev,[selectedFile]:e.target.value}))} className="min-h-72 w-full resize-y rounded-xl border border-[#263449] bg-[#070b12] p-4 font-mono text-xs leading-6 text-gray-100 outline-none focus:border-[#22c55e]" placeholder="Project source code"/></div>
            <div className="flex flex-wrap gap-3"><button disabled={busy} onClick={saveDraft} className="rounded-xl border border-[#263449] bg-[#121c2b] px-4 py-2.5 text-sm font-semibold text-gray-200 disabled:opacity-50"><Check className="mr-2 inline h-4 w-4"/>Save local draft</button><button disabled={busy} onClick={() => void publishProject()} className="rounded-xl bg-[#22c55e] px-5 py-2.5 text-sm font-bold text-black disabled:opacity-50"><Upload className="mr-2 inline h-4 w-4"/>{busy ? 'Saving…' : 'Publish to website'}</button></div>
          </section>
          <aside className="space-y-5">
            <section className="overflow-hidden rounded-2xl border border-[#1e293b] bg-[#0d131f]">
              <div className="flex items-center justify-between border-b border-[#1e293b] px-4 py-3"><h2 className="font-bold text-white">Live preview</h2><Eye className="h-4 w-4 text-[#22c55e]"/></div>
              <div className="bg-white"><iframe title="Project preview" sandbox="allow-scripts" srcDoc={studioProjectToHtml(files)} className="h-64 w-full border-0"/></div>
              <div className="p-4"><h3 className="font-bold text-white">{title || 'Untitled project'}</h3><p className="mt-1 text-xs text-gray-400">{level} · {tech}</p><p className="mt-2 text-sm text-gray-400">{description || 'Add a project description.'}</p></div>
            </section>
            <section className="rounded-2xl border border-[#1e293b] bg-[#0d131f] p-4"><div className="mb-3 flex items-center justify-between"><h2 className="font-bold text-white">Project library</h2><FolderOpen className="h-4 w-4 text-[#22c55e]"/></div>
              {allProjects.length === 0 ? <p className="text-sm text-gray-500">No projects loaded yet.</p> : <div className="space-y-3">{allProjects.map(project => <article key={project.id} className="flex items-start gap-3 rounded-xl border border-[#263449] p-3">{project.thumbnail ? <img src={project.thumbnail} alt="" className="h-12 w-12 rounded-lg object-cover"/> : <FileCode2 className="mt-1 h-5 w-5 text-gray-500"/>}<div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-white">{project.title}</p><p className="mt-1 text-[11px] text-gray-500">{project.status} · {project.level}</p><div className="mt-2 flex gap-2"><button onClick={() => editProject(project)} className="text-xs text-[#4ade80]"><Pencil className="mr-1 inline h-3 w-3"/>Edit</button>{project.status === 'published' && <button onClick={() => void deleteProject(project)} className="text-xs text-red-300"><X className="mr-1 inline h-3 w-3"/>Delete</button>}</div></div></article>)}</div>}
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};
