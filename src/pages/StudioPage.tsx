import React, { useEffect, useMemo, useState } from 'react';
import JSZip from 'jszip';
import { useNavigation } from '../context/NavigationContext';
import {
  ArrowLeft,
  Check,
  Eye,
  FileCode2,
  FilePlus2,
  FolderOpen,
  LayoutDashboard,
  Lock,
  LogIn,
  LogOut,
  Pencil,
  Plus,
  RotateCcw,
  Upload,
  X,
} from 'lucide-react';
import {
  dbConfigured,
  getAllAdminProjects,
  getProjectFiles,
  saveProject as saveDbProject,
  saveProjectFiles as saveDbProjectFiles,
  deleteProject as deleteDbProject,
  signInAdmin,
  getSessionUser,
  signOutAdmin,
  isDeveloperUser,
  uploadProjectAsset,
} from '../lib/supabase';

/* ------------------------------------------------------------------ */
/* Data model + storage helpers (shared with ProjectsPage)            */
/* ------------------------------------------------------------------ */

export interface StudioProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tech: string;
  category?: 'html' | 'css' | 'javascript' | 'fullstack';
  thumbnail?: string; // data URL
  files: Record<string, string>; // filename -> code
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

const PROJECTS_KEY = 'cv-studio-projects';

export function inferProjectCategory(title: string, tech: string, existing?: string): 'html' | 'css' | 'javascript' | 'fullstack' {
  if (existing === 'html' || existing === 'css' || existing === 'javascript' || existing === 'fullstack') return existing;
  const titleText = title.toLowerCase();
  const text = (title + ' ' + tech).toLowerCase();
  if (/full.?stack|node|express|rest api|auth|capstone|backend|server|database/.test(text)) return 'fullstack';
  if (/\bcss\b|layout|styling/.test(titleText) && !/html/.test(titleText)) return 'css';
  if (/\bhtml\b|semantic|form|table|markup/.test(titleText)) return 'html';
  return 'javascript';
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getStudioProjects(): StudioProject[] {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Build a standalone HTML document from a file map (HTML + linked CSS/JS). */
export function studioProjectToHtml(files: Record<string, string>): string {
  const names = Object.keys(files);
  const htmlName =
    names.find(n => /(^|\/)index\.html?$/i.test(n)) ||
    names.find(n => /\.html?$/i.test(n));
  let doc = htmlName ? files[htmlName] : '<main><h1>Project preview</h1></main>';

  const css = names.filter(n => /\.css$/i.test(n)).map(n => files[n]).join('\n');
  const js = names.filter(n => /\.js$/i.test(n)).map(n => files[n]).join('\n');

  if (css) {
    const tag = '<style>' + css + '</style>';
    doc = /<\/head>/i.test(doc) ? doc.replace(/<\/head>/i, tag + '</head>') : tag + doc;
  }
  if (js) {
    const tag = '<scr' + 'ipt>' + js + '</scr' + 'ipt>';
    doc = /<\/body>/i.test(doc) ? doc.replace(/<\/body>/i, tag + '</body>') : doc + tag;
  }
  return doc;
}

const STARTER_FILES: Record<string, string> = {
  'index.html':
    '<main>\n  <h1>My Coding Vibes Project</h1>\n  <p>Edit the code and watch the preview update.</p>\n</main>',
  'style.css': 'body { font-family: system-ui, sans-serif; background: #0d131f; color: #fff; padding: 2rem; }',
  'app.js': 'console.log("Coding Vibes");',
};

const ACCEPTED_EXT = /\.(html?|css|js|jsx|ts|tsx|json|md|txt)$/i;

/* ------------------------------------------------------------------ */
/* Studio page                                                         */
/* ------------------------------------------------------------------ */

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function mapDbProjectToStudio(project: any, files: any[]): StudioProject {
  return {
    id: project.id,
    title: project.title,
    slug: project.slug,
    category: inferProjectCategory(project.title, (project.technologies || []).join(' · '), project.category),
    description: project.full_description || project.short_description || '',
    level: project.difficulty === 'advanced' ? 'Advanced' : project.difficulty === 'intermediate' ? 'Intermediate' : 'Beginner',
    tech: Array.isArray(project.technologies) && project.technologies.length ? project.technologies.join(' · ') : 'HTML · CSS · JavaScript',
    thumbnail: project.thumbnail_url || undefined,
    files: Object.fromEntries(files.map(file => [file.file_name, file.content])),
    status: project.status === 'published' ? 'published' : 'draft',
    createdAt: project.created_at || new Date().toISOString(),
    updatedAt: project.updated_at || new Date().toISOString(),
  };
}

export const StudioPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [authState, setAuthState] = useState<'checking' | 'signed-out' | 'signed-in'>('checking');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    let active = true;
    (async () => {
      if (!dbConfigured()) {
        if (active) setAuthState('signed-out');
        return;
      }
      try {
        const user = await getSessionUser();
        const authorized = user ? await isDeveloperUser(user.id) : false;
        if (!authorized && user) await signOutAdmin();
        if (active) setAuthState(authorized ? 'signed-in' : 'signed-out');
      } catch {
        if (active) setAuthState('signed-out');
      }
    })();
    return () => { active = false; };
  }, []);

  const handleLogin = async (email: string, password: string) => {
    setAuthError('');
    try {
      await signInAdmin(email, password);
      setAuthState('signed-in');
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Sign-in failed. Check your authorized admin account.');
    }
  };

  if (authState === 'checking') {
    return <div className="min-h-[60vh] flex items-center justify-center text-sm text-gray-400">Checking secure Developer Studio access…</div>;
  }
  if (!dbConfigured()) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-xl rounded-2xl border border-amber-500/30 bg-[#0d131f] p-6">
          <h1 className="text-xl font-bold text-white">Developer Studio needs configuration</h1>
          <p className="mt-2 text-sm leading-6 text-gray-300">Connect the Supabase project using VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY before admin access can be enabled. The old shared password has been removed.</p>
          <button onClick={() => navigateTo('home')} className="mt-5 rounded-lg bg-[#22c55e] px-4 py-2 text-sm font-semibold text-black">Back to Coding Vibes</button>
        </div>
      </div>
    );
  }
  if (authState !== 'signed-in') {
    return <StudioLogin onLogin={handleLogin} externalError={authError} />;
  }

  return (
    <StudioShell
      onSignOut={async () => { await signOutAdmin(); setAuthState('signed-out'); }}
      navigateTo={navigateTo}
    />
  );
};

const StudioLogin: React.FC<{
  onLogin: (email: string, password: string) => Promise<void>;
  externalError: string;
}> = ({ onLogin, externalError }) => {
  const { navigateTo } = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try { await onLogin(email.trim(), password); }
    catch (err) { setError(err instanceof Error ? err.message : 'Sign-in failed.'); }
    finally { setBusy(false); }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-[#0d131f] border border-[#1e293b] p-8">
        <div className="flex items-center space-x-2 mb-6">
          <span className="font-mono text-xl font-bold text-[#22c55e]">&lt;/&gt;</span>
          <div className="flex items-baseline space-x-1">
            <span className="font-bold text-sm tracking-wider text-white">CODING</span>
            <span className="font-bold text-sm tracking-wider text-[#22c55e]">VIBES</span>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">Developer Studio</span>
        <h1 className="text-2xl font-extrabold text-white mt-2 mb-2">Private project workspace.</h1>
        <p className="text-sm text-gray-400 mb-6">Sign in with the authorized Developer Studio account. Public visitors cannot access project management.</p>
        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <span className="text-xs font-semibold text-gray-300 mb-1.5 block">Admin email</span>
            <input type="email" required autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@example.com" className="w-full bg-[#141d2e] border border-[#1e293b] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-300 mb-1.5 block">Password</span>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="password" required autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Admin account password" className="w-full bg-[#141d2e] border border-[#1e293b] rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]" />
            </div>
          </label>
          {(error || externalError) && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">{error || externalError}</p>}
          <button type="submit" disabled={busy} className="w-full py-2.5 bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-60 text-black font-semibold text-sm rounded-lg transition flex items-center justify-center space-x-2">
            <span>{busy ? 'Signing in…' : 'Sign in securely'}</span><LogIn className="w-4 h-4" />
          </button>
        </form>
        <button onClick={() => navigateTo('home')} className="mt-6 text-xs text-gray-500 hover:text-white transition flex items-center space-x-1"><ArrowLeft className="w-3.5 h-3.5" /><span>Back to Coding Vibes</span></button>
      </div>
    </div>
  );
};

/* ---------------- authenticated shell ---------------- */

type Tab = 'overview' | 'projects' | 'create';

const StudioShell: React.FC<{
  onSignOut: () => void;
  navigateTo: (route: any, params?: any) => void;
}> = ({ onSignOut, navigateTo }) => {
  const [tab, setTab] = useState<Tab>('overview');
  const [projects, setProjects] = useState<StudioProject[]>(getStudioProjects);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formResetKey, setFormResetKey] = useState(0);
  const [syncStatus, setSyncStatus] = useState('Loading projects from cloud…');

  useEffect(() => {
    let active = true;
    (async () => {
      const rows = await getAllAdminProjects();
      const cloudProjects = await Promise.all(rows.map(async row => mapDbProjectToStudio(row, await getProjectFiles(row.id))));
      const cached = getStudioProjects();
      const normalizedCache = cached.map(item => ({ ...item, category: inferProjectCategory(item.title, item.tech, item.category) }));
      const merged = [...cloudProjects, ...normalizedCache.filter(item => !cloudProjects.some(cloud => cloud.slug === item.slug))];
      if (!active) return;
      setProjects(merged);
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(merged));
      setSyncStatus('Cloud database connected · changes sync across devices.');
    })().catch(error => {
      if (active) setSyncStatus('Cloud sync failed: ' + (error instanceof Error ? error.message : 'Check Supabase configuration and access policies.'));
    });
    return () => { active = false; };
  }, []);

  const persist = (next: StudioProject[]) => {
    const previous = projects;
    setProjects(next);
    try { localStorage.setItem(PROJECTS_KEY, JSON.stringify(next)); } catch {}
    setSyncStatus('Saving changes to cloud…');
    void (async () => {
      const removed = previous.filter(item => !next.some(candidate => candidate.id === item.id));
      for (const item of removed) {
        if (isUuid(item.id)) await deleteDbProject(item.id);
      }
      let resolved = [...next];
      const changed = next.filter(item => {
        const before = previous.find(candidate => candidate.id === item.id);
        return !before || JSON.stringify(before) !== JSON.stringify(item);
      });
      for (const item of changed) {
        const saved = await saveDbProject({
          ...(isUuid(item.id) ? { id: item.id } : {}),
          title: item.title,
          slug: item.slug,
          short_description: item.description || item.title,
          full_description: item.description || item.title,
          category: inferProjectCategory(item.title, item.tech, item.category),
          difficulty: item.level.toLowerCase() as 'beginner' | 'intermediate' | 'advanced',
          technologies: item.tech.split(/[·,|]/).map(value => value.trim()).filter(Boolean),
          thumbnail_url: item.thumbnail || null,
          status: item.status,
          featured: false,
        });
        await saveDbProjectFiles(saved.id, Object.entries(item.files).map(([file_name, content], index) => ({
          file_name,
          language: /\.css$/i.test(file_name) ? 'css' : /\.js$/i.test(file_name) ? 'javascript' : /\.tsx?$/i.test(file_name) ? 'typescript' : /\.json$/i.test(file_name) ? 'json' : 'html',
          content,
          sort_order: index,
        })));
        if (saved.id !== item.id) resolved = resolved.map(candidate => candidate.id === item.id ? { ...candidate, id: saved.id, thumbnail: saved.thumbnail_url || candidate.thumbnail } : candidate);
      }
      setProjects(resolved);
      try { localStorage.setItem(PROJECTS_KEY, JSON.stringify(resolved)); } catch {}
      setSyncStatus('Saved to cloud database.');
    })().catch(error => {
      setSyncStatus('Cloud save failed: ' + (error instanceof Error ? error.message : 'Please retry; local edits remain on this device.'));
    });
  };

  const published = projects.filter(p => p.status === 'published').length;
  const drafts = projects.filter(p => p.status === 'draft').length;

  const tabs: { id: Tab; label: string; Icon: any }[] = [
    { id: 'overview', label: 'Overview', Icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', Icon: FolderOpen },
    { id: 'create', label: 'Create Project', Icon: Plus },
  ];

  const openCreate = (project?: StudioProject) => {
    setEditingId(project ? project.id : null);
    setFormResetKey(k => k + 1);
    setTab('create');
  };

  const deleteProject = (id: string) => {
    if (!window.confirm('Delete this project? This cannot be undone.')) return;
    persist(projects.filter(p => p.id !== id));
  };

  const toggleStatus = (id: string) => {
    persist(
      projects.map(p =>
        p.id === id
          ? { ...p, status: p.status === 'published' ? 'draft' : 'published', updatedAt: new Date().toISOString() }
          : p
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1e293b]">
        <div>
          <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">
            Developer Studio
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Studio Workspace</h1>
        </div>
        <button
          onClick={onSignOut}
          className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-gray-300 bg-[#141d2e] border border-[#1e293b] rounded-lg hover:text-white hover:border-gray-600 transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign out</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              tab === id
                ? 'bg-[#22c55e] text-black'
                : 'bg-[#0d131f] text-gray-300 border border-[#1e293b] hover:text-white hover:border-gray-600'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <p className="text-xs text-gray-400 rounded-lg border border-[#1e293b] bg-[#0d131f] px-3 py-2" role="status">{syncStatus}</p>

      {tab === 'overview' && (
        <OverviewTab
          total={projects.length}
          published={published}
          drafts={drafts}
          onCreate={() => openCreate()}
          onProjects={() => setTab('projects')}
          onViewSite={() => navigateTo('projects')}
        />
      )}

      {tab === 'projects' && (
        <ProjectsTab
          projects={projects}
          onEdit={p => openCreate(p)}
          onDelete={deleteProject}
          onToggle={toggleStatus}
          onCreate={() => openCreate()}
        />
      )}

      {tab === 'create' && (
        <CreateProjectForm
          key={formResetKey}
          editing={projects.find(p => p.id === editingId) || null}
          onSaved={persist}
          allProjects={projects}
        />
      )}
    </div>
  );
};

/* ---------------- overview tab ---------------- */

const OverviewTab: React.FC<{
  total: number;
  published: number;
  drafts: number;
  onCreate: () => void;
  onProjects: () => void;
  onViewSite: () => void;
}> = ({ total, published, drafts, onCreate, onProjects, onViewSite }) => {
  const cards = [
    { label: 'Total projects', value: total },
    { label: 'Published', value: published },
    { label: 'Drafts', value: drafts },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map(c => (
          <div key={c.label} className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{c.label}</span>
            <div className="text-4xl font-extrabold text-white mt-2">{c.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 sm:p-8">
        <h2 className="text-lg font-bold text-white mb-2">Publish a project in minutes</h2>
        <p className="text-sm text-gray-400 mb-6 max-w-2xl leading-relaxed">
          Give the project a title and description, upload a thumbnail, import a ZIP or add
          files directly in the editor, then save it to your personal Projects page (stored in this browser).
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onCreate}
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-sm rounded-lg transition"
          >
            <Plus className="w-4 h-4" />
            <span>Create a project</span>
          </button>
          <button
            onClick={onProjects}
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#141d2e] border border-[#1e293b] text-gray-200 hover:text-white hover:border-gray-600 font-semibold text-sm rounded-lg transition"
          >
            <FolderOpen className="w-4 h-4" />
            <span>Manage projects</span>
          </button>
          <button
            onClick={onViewSite}
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#141d2e] border border-[#1e293b] text-gray-200 hover:text-white hover:border-gray-600 font-semibold text-sm rounded-lg transition"
          >
            <Eye className="w-4 h-4" />
            <span>View live Projects page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- projects tab ---------------- */

const ProjectsTab: React.FC<{
  projects: StudioProject[];
  onEdit: (p: StudioProject) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onCreate: () => void;
}> = ({ projects, onEdit, onDelete, onToggle, onCreate }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold text-white">Project library</h2>
        <p className="text-xs text-gray-400 mt-1">{projects.length} project(s) stored in this browser</p>
      </div>
      <button
        onClick={onCreate}
        className="flex items-center space-x-2 px-4 py-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-xs rounded-lg transition"
      >
        <Plus className="w-4 h-4" />
        <span>New project</span>
      </button>
    </div>

    {projects.length === 0 ? (
      <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-12 text-center">
        <FolderOpen className="w-10 h-10 text-gray-600 mx-auto mb-4" />
        <h3 className="text-white font-bold mb-1">No projects yet</h3>
        <p className="text-sm text-gray-400">Create the first project above.</p>
      </div>
    ) : (
      <div className="space-y-3">
        {projects.map(p => (
          <article
            key={p.id}
            className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            {p.thumbnail ? (
              <img
                src={p.thumbnail}
                alt=""
                className="w-full sm:w-28 h-36 sm:h-16 rounded-lg object-cover border border-[#1e293b] shrink-0"
              />
            ) : (
              <div className="w-full sm:w-28 h-36 sm:h-16 rounded-lg bg-[#141d2e] border border-[#1e293b] flex items-center justify-center shrink-0">
                <FileCode2 className="w-6 h-6 text-gray-600" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-bold text-white truncate">{p.title}</h3>
                <span
                  className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${
                    p.status === 'published'
                      ? 'bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/40'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-xs text-gray-400 truncate mt-1">{p.level} · {p.tech}</p>
              <p className="text-[11px] text-gray-500 mt-1">
                Updated {new Date(p.updatedAt).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              <button
                onClick={() => onEdit(p)}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-gray-200 bg-[#141d2e] border border-[#1e293b] rounded-lg hover:text-white hover:border-gray-600 transition"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => onToggle(p.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                  p.status === 'published'
                    ? 'text-yellow-300 bg-yellow-500/10 border-yellow-500/40 hover:border-yellow-400'
                    : 'text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/40 hover:border-[#22c55e]'
                }`}
              >
                {p.status === 'published' ? <Eye className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                <span>{p.status === 'published' ? 'Unpublish' : 'Publish'}</span>
              </button>
              <button
                onClick={() => onDelete(p.id)}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-red-300 bg-red-500/10 border border-red-500/40 rounded-lg hover:border-red-400 transition"
              >
                <X className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    )}
  </div>
);

/* ---------------- create tab ---------------- */

const CreateProjectForm: React.FC<{
  editing: StudioProject | null;
  onSaved: (projects: StudioProject[]) => void;
  allProjects: StudioProject[];
}> = ({ editing, onSaved, allProjects }) => {
  const [title, setTitle] = useState(editing?.title || '');
  const [slug, setSlug] = useState(editing?.slug || '');
  const [slugTouched, setSlugTouched] = useState(!!editing);
  const [description, setDescription] = useState(editing?.description || '');
  const [level, setLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced'>(editing?.level || 'Beginner');
  const [category, setCategory] = useState<'html' | 'css' | 'javascript' | 'fullstack'>(inferProjectCategory(editing?.title || '', editing?.tech || '', editing?.category));
  const [tech, setTech] = useState(editing?.tech || 'HTML · CSS · JavaScript');
  const [thumbnail, setThumbnail] = useState<string>(editing?.thumbnail || '');
  const [fileMap, setFileMap] = useState<Record<string, string>>(
    editing?.files || { ...STARTER_FILES }
  );
  const [selected, setSelected] = useState<string>(
    Object.keys(editing?.files || {})[0] || 'index.html'
  );
  const [newFileName, setNewFileName] = useState('');
  const [status, setStatus] = useState('');

  const previewDoc = useMemo(() => studioProjectToHtml(fileMap), [fileMap]);
  const fileNames = Object.keys(fileMap);

  const handleThumbnail = async (file: File | null) => {
    if (!file) return;
    setStatus('Uploading thumbnail to cloud storage…');
    try {
      const url = await uploadProjectAsset(file, slugify(slug || title) || 'project', 'thumbnail');
      setThumbnail(url);
      setStatus('Thumbnail uploaded and ready to save.');
    } catch (error) {
      setStatus('Thumbnail upload failed: ' + (error instanceof Error ? error.message : 'Check storage permissions.'));
    }
  };

  const handleFiles = (list: FileList | null) => {
    if (!list) return;
    Array.from(list).forEach(file => {
      if (file.name.toLowerCase().endsWith('.zip')) {
        JSZip.loadAsync(file)
          .then(async zip => {
            const imported: Record<string, string> = {};
            const entries = Object.values(zip.files).filter(x => !x.dir);
            for (const entry of entries) {
              if (ACCEPTED_EXT.test(entry.name)) {
                imported[entry.name] = await entry.async('string');
              }
            }
            const count = Object.keys(imported).length;
            setFileMap(prev => ({ ...prev, ...imported }));
            if (count > 0) setSelected(Object.keys(imported)[0]);
            setStatus(count > 0 ? `ZIP imported: ${count} file(s).` : 'No supported files found in the ZIP.');
          })
          .catch(() => setStatus('Could not read the ZIP file.'));
        return;
      }
      if (ACCEPTED_EXT.test(file.name)) {
        const reader = new FileReader();
        reader.onload = () => {
          setFileMap(prev => ({ ...prev, [file.name]: String(reader.result || '') }));
          setSelected(file.name);
        };
        reader.readAsText(file);
      }
    });
  };

  const addFile = () => {
    const name = newFileName.trim();
    if (!name) {
      setStatus('Type a file name first.');
      return;
    }
    if (fileMap[name]) {
      setStatus('A file with that name already exists.');
      return;
    }
    setFileMap(prev => ({ ...prev, [name]: '' }));
    setSelected(name);
    setNewFileName('');
    setStatus('');
  };

  const removeFile = (name: string) => {
    const next = { ...fileMap };
    delete next[name];
    setFileMap(next);
    const remaining = Object.keys(next);
    if (selected === name) setSelected(remaining[0] || '');
  };

  const updateCurrent = (value: string) =>
    setFileMap(prev => ({ ...prev, [selected]: value }));

  const reset = () => {
    setTitle('');
    setSlug('');
    setSlugTouched(false);
    setDescription('');
    setLevel('Beginner');
    setCategory('html');
    setTech('HTML · CSS · JavaScript');
    setThumbnail('');
    setFileMap({ ...STARTER_FILES });
    setSelected('index.html');
    setNewFileName('');
    setStatus('Form cleared.');
  };

  const save = (publish: boolean) => {
    if (!title.trim()) {
      setStatus('Project title is required.');
      return;
    }
    if (publish && !thumbnail) {
      setStatus('Upload a project thumbnail before publishing. You can still save this project as a draft.');
      return;
    }
    const slugValue = slugify(slug || title) || 'project-' + Date.now();
    const id = editing?.id || slugValue;
    const now = new Date().toISOString();
    const project: StudioProject = {
      id,
      title: title.trim(),
      slug: slugValue,
      description: description.trim(),
      level,
      category,
      tech: tech.trim() || 'HTML · CSS · JavaScript',
      thumbnail: thumbnail || undefined,
      files: fileMap,
      status: publish ? 'published' : 'draft',
      createdAt: editing?.createdAt || now,
      updatedAt: now,
    };
    const next = [project, ...allProjects.filter(p => p.id !== id)];
    onSaved(next);
    setStatus(publish ? 'Publishing to the shared project library…' : 'Saving draft to the shared project library…');
  };

  const inputClass =
    'w-full bg-[#141d2e] border border-[#1e293b] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]';
  const labelClass = 'text-xs font-semibold text-gray-300 mb-1.5 block';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Form */}
      <section className="lg:col-span-2 space-y-5 rounded-2xl bg-[#0d131f] border border-[#1e293b] p-5 sm:p-6">
        <h2 className="text-lg font-bold text-white">
          {editing ? 'Edit project' : 'Create a new project'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className={labelClass}>Project title</span>
            <input
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                if (!slugTouched) setSlug(slugify(e.target.value));
              }}
              placeholder="e.g. Neon Portfolio"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>URL slug</span>
            <input
              value={slug}
              onChange={e => {
                setSlugTouched(true);
                setSlug(slugify(e.target.value));
              }}
              placeholder="neon-portfolio"
              className={inputClass}
            />
          </label>
        </div>

        <label className="block">
          <span className={labelClass}>Description</span>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
            placeholder="What will students build in this project?"
            className={inputClass}
          />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className={labelClass}>Level</span>
            <select
              value={level}
              onChange={e => setLevel(e.target.value as 'Beginner' | 'Intermediate' | 'Advanced')}
              className={inputClass}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>Project category</span>
            <select value={category} onChange={e => setCategory(e.target.value as 'html' | 'css' | 'javascript' | 'fullstack')} className={inputClass}>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="fullstack">Full Stack</option>
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>Technology</span>
            <input
              value={tech}
              onChange={e => setTech(e.target.value)}
              placeholder="HTML · CSS · JavaScript"
              className={inputClass}
            />
          </label>
        </div>

        {/* Thumbnail */}
        <div>
          <span className={labelClass}>Thumbnail</span>
          <label className="flex items-center justify-center gap-2 border border-dashed border-[#1e293b] hover:border-[#22c55e]/60 rounded-lg px-4 py-5 cursor-pointer transition bg-[#141d2e]/50">
            <Upload className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400">
              {thumbnail ? 'Replace thumbnail' : 'Upload thumbnail image (PNG, JPG, WebP)'}
            </span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={e => handleThumbnail(e.target.files?.[0] || null)}
            />
          </label>
          {thumbnail && (
            <div className="mt-3 relative inline-block">
              <img
                src={thumbnail}
                alt="Project thumbnail preview"
                className="w-48 h-28 rounded-lg object-cover border border-[#1e293b]"
              />
              <button
                onClick={() => setThumbnail('')}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-500"
                title="Remove thumbnail"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* File import */}
        <div>
          <span className={labelClass}>Import code</span>
          <label className="flex items-center justify-center gap-2 border border-dashed border-[#1e293b] hover:border-[#22c55e]/60 rounded-lg px-4 py-5 cursor-pointer transition bg-[#141d2e]/50">
            <Upload className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-400">
              Upload a ZIP (auto-extracted) or individual HTML, CSS, JS files
            </span>
            <input
              type="file"
              multiple
              accept=".zip,.html,.htm,.css,.js,.jsx,.ts,.tsx,.json,.md,.txt"
              className="hidden"
              onChange={e => handleFiles(e.target.files)}
            />
          </label>
        </div>

        {/* Code editor with file tabs */}
        <div>
          <span className={labelClass}>Code editor</span>
          <div className="flex flex-wrap items-center gap-1.5 bg-[#141d2e] border border-[#1e293b] rounded-t-lg px-2 py-2">
            {fileNames.map(name => (
              <span
                key={name}
                className={`group inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1.5 rounded-md text-xs font-mono cursor-pointer transition ${
                  selected === name
                    ? 'bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/40'
                    : 'text-gray-400 border border-transparent hover:text-white hover:bg-slate-800'
                }`}
                onClick={() => setSelected(name)}
              >
                <FileCode2 className="w-3.5 h-3.5" />
                <span className="max-w-[140px] truncate">{name}</span>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    removeFile(name);
                  }}
                  className="opacity-0 group-hover:opacity-100 hover:text-red-400 transition p-0.5"
                  title={`Remove ${name}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <div className="flex items-center gap-1.5 ml-1">
              <input
                value={newFileName}
                onChange={e => setNewFileName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addFile()}
                placeholder="new-file.js"
                className="w-28 bg-[#0d131f] border border-[#1e293b] rounded-md px-2 py-1.5 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#22c55e]"
              />
              <button
                onClick={addFile}
                className="p-1.5 rounded-md bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/40 hover:bg-[#22c55e]/25 transition"
                title="Add file"
              >
                <FilePlus2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <textarea
            value={selected ? fileMap[selected] || '' : ''}
            onChange={e => updateCurrent(e.target.value)}
            spellCheck={false}
            placeholder={fileNames.length === 0 ? 'Add a file to start writing code.' : 'Write code here.'}
            className="w-full h-72 bg-[#0a0f18] border border-t-0 border-[#1e293b] rounded-b-lg p-4 font-mono text-[13px] leading-relaxed text-gray-100 focus:outline-none resize-y"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2.5 pt-1">
          <button
            onClick={() => save(false)}
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#141d2e] border border-[#1e293b] text-gray-200 hover:text-white hover:border-gray-600 font-semibold text-sm rounded-lg transition"
          >
            <Check className="w-4 h-4" />
            <span>Save Draft</span>
          </button>
          <button
            onClick={() => save(true)}
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-sm rounded-lg transition"
          >
            <Upload className="w-4 h-4" />
            <span>Publish</span>
          </button>
          <button
            onClick={reset}
            className="flex items-center space-x-2 px-5 py-2.5 bg-[#141d2e] border border-[#1e293b] text-gray-400 hover:text-white hover:border-gray-600 font-semibold text-sm rounded-lg transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>

        {status && (
          <div className="text-xs text-gray-200 bg-[#141d2e] border border-[#1e293b] rounded-lg px-4 py-3">
            {status}
          </div>
        )}
      </section>

      {/* Preview panel */}
      <aside className="space-y-5">
        <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-5">
          <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">
            Live preview
          </span>
          <h3 className="text-base font-bold text-white mt-2">{title || 'Untitled project'}</h3>
          <p className="text-xs text-gray-400 mt-1">
            {level} · {tech}
          </p>
          {thumbnail && (
            <img
              src={thumbnail}
              alt=""
              className="w-full h-32 rounded-lg object-cover border border-[#1e293b] mt-3"
            />
          )}
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            {description || 'Add a description to explain what students will build.'}
          </p>
          <div className="mt-4">
            <span className="text-[11px] font-mono text-gray-500 uppercase">
              Files ({fileNames.length})
            </span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {fileNames.map(name => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-300 bg-[#141d2e] border border-[#1e293b] rounded-md px-2 py-1"
                >
                  <FileCode2 className="w-3 h-3 text-gray-500" />
                  <span className="max-w-[140px] truncate">{name}</span>
                </span>
              ))}
              {fileNames.length === 0 && (
                <span className="text-[11px] text-gray-600">No files yet.</span>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1e293b]">
            <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
              Browser preview
            </span>
            <Eye className="w-4 h-4 text-gray-500" />
          </div>
          <iframe
            title="Project live preview"
            srcDoc={previewDoc}
            sandbox="allow-scripts"
            className="w-full h-80 bg-white"
          />
        </div>
      </aside>
    </div>
  );
};
