import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { activeCourses } from '../data/courses';
import {
  ArrowRight, BookOpen, Braces, Code2, Compass, GraduationCap,
  Layers3, MonitorSmartphone, Rocket, Search, ShieldCheck, Sparkles,
  Terminal, Zap
} from 'lucide-react';

const learningPaths = [
  { title: 'HTML', slug: 'html', icon: Code2, tone: 'text-orange-300', glow: 'from-orange-400/20 to-transparent', description: 'Build accessible page structure with semantic HTML, links, media, tables, and forms.', tags: ['Structure', 'Semantics'], active: true },
  { title: 'CSS', slug: 'css', icon: PaletteIcon, tone: 'text-sky-300', glow: 'from-sky-400/20 to-transparent', description: 'Create responsive layouts, polished interfaces, animations, and modern design systems.', tags: ['Responsive', 'Layout'], active: true },
  { title: 'JavaScript', slug: 'javascript', icon: Braces, tone: 'text-amber-300', glow: 'from-amber-400/20 to-transparent', description: 'Make pages interactive with logic, functions, DOM events, APIs, and real data.', tags: ['Logic', 'Interaction'], active: true },
  { title: 'React', slug: 'react-js', icon: Layers3, tone: 'text-cyan-300', glow: 'from-cyan-400/20 to-transparent', description: 'Build reusable components and modern interfaces with state, props, and hooks.', tags: ['Components', 'Hooks'], active: true },
  { title: 'Node.js', slug: 'node-js', icon: Terminal, tone: 'text-emerald-300', glow: 'from-emerald-400/20 to-transparent', description: 'Learn server-side JavaScript, APIs, routing, and backend fundamentals.', tags: ['Backend', 'APIs'], active: false },
  { title: 'Full Stack', slug: 'full-stack-development', icon: Rocket, tone: 'text-violet-300', glow: 'from-violet-400/20 to-transparent', description: 'Connect frontend, backend, databases, authentication, and deployment into one product.', tags: ['End to end', 'Projects'], active: false },
];

function PaletteIcon(props: React.ComponentProps<typeof Code2>) {
  return <MonitorSmartphone {...props} />;
}

export const HomePage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) navigateTo('search', { searchQuery: searchQuery.trim() });
  };

  const openPath = (path: typeof learningPaths[number]) => {
    if (path.title === 'Full Stack') {
      navigateTo('roadmap-detail', { roadmapId: 'fullstack' });
      return;
    }
    if (path.active) {
      navigateTo('course-detail', { courseSlug: path.slug });
      return;
    }
    navigateTo('courses');
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#080d14] text-white">
      <section className="relative isolate border-b border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_12%,rgba(22,163,74,0.16),transparent_42%),radial-gradient(ellipse_at_85%_42%,rgba(34,211,238,0.08),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-5 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3.5 py-2 text-[11px] font-bold tracking-[0.18em] text-emerald-300 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.9)]" />
              LEARN <span className="text-white/35">•</span> PRACTICE <span className="text-white/35">•</span> BUILD <span className="text-white/35">•</span> GROW
            </div>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.25rem]">
              Start Your <span className="text-emerald-400">Coding</span> Journey Today
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Learn step by step, practise with real code, and build projects that turn new skills into confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigateTo('courses')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-[#03120a] shadow-[0_10px_32px_rgba(16,185,129,.22)] transition hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#080d14]">
                Start Learning <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => navigateTo('roadmaps')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/50 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300">
                <Compass className="h-4 w-4 text-emerald-300" /> Explore Roadmaps
              </button>
            </div>
            <form onSubmit={submitSearch} className="mt-8 flex max-w-lg items-center gap-3 rounded-xl border border-white/10 bg-[#101824]/90 p-2 pl-4 shadow-xl shadow-black/20 focus-within:border-emerald-400/50">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Search HTML, CSS, JavaScript..." className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500" aria-label="Search learning content" />
              <button type="submit" className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:bg-emerald-500 hover:text-black">Search</button>
            </form>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Beginner-friendly lessons</span>
              <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-emerald-400" /> Learn by building</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[85px]" />
            <img src="/images/coding-vibes-hero.svg" alt="Coding Vibes learner in an emerald hoodie building a project on a laptop, surrounded by web development icons" className="relative z-10 mx-auto w-full drop-shadow-[0_26px_55px_rgba(0,0,0,.45)]" />
            <div className="absolute bottom-4 left-0 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0e1722]/95 p-3 shadow-2xl backdrop-blur sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300"><Code2 className="h-5 w-5" /></div>
              <div><p className="text-xs font-bold text-white">Your next skill starts here</p><p className="mt-1 text-[11px] text-slate-400">Read · Try · Build</p></div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 px-4 pb-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-center"><p className="text-2xl font-extrabold text-white">{activeCourses.length}</p><p className="mt-1 text-xs text-slate-400">Learning courses</p></div>
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-center"><p className="text-2xl font-extrabold text-white">100<span className="text-emerald-400">+</span></p><p className="mt-1 text-xs text-slate-400">Lessons and practice topics</p></div>
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-center"><p className="text-2xl font-extrabold text-white">Build<span className="text-emerald-400">.</span></p><p className="mt-1 text-xs text-slate-400">Portfolio-ready projects</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-emerald-400">CHOOSE YOUR PATH</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Learning Paths</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">Follow a clear route from the first line of code to building complete applications.</p>
          </div>
          <button onClick={() => navigateTo('courses')} className="inline-flex items-center gap-2 self-start text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 sm:self-auto">Browse all courses <ArrowRight className="h-4 w-4" /></button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map(path => {
            const Icon = path.icon;
            return <button key={path.title} onClick={() => openPath(path)} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1520] p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-emerald-400/35 hover:bg-[#101b28] focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${path.glow} opacity-70`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 ${path.tone}`}><Icon className="h-6 w-6" /></div>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${path.active ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300' : 'border-white/10 bg-white/[0.04] text-slate-400'}`}>{path.active ? 'AVAILABLE' : 'ROADMAP'}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{path.title}</h3>
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-400">{path.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{path.tags.map(tag => <span key={tag} className="rounded-md border border-white/[0.07] bg-black/20 px-2 py-1 text-[10px] font-medium text-slate-300">{tag}</span>)}</div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">Explore path <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
              </div>
            </button>;
          })}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#0b121b]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-emerald-400">WHY CODING VIBES</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">Learn a concept. Practise it. Build something real.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">No disconnected snippets or copy-paste learning. Every step is designed to help you understand the idea, see it in code, and use it in a practical project.</p>
            <button onClick={() => navigateTo('projects')} className="mt-7 inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/[0.08] px-4 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/[0.14]">Explore projects <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: BookOpen, title: 'Clear explanations', text: 'Topic-by-topic lessons with definitions, examples, common mistakes, and summaries.' },
              { icon: Terminal, title: 'Practice as you learn', text: 'Use code examples, browser previews, exercises, and quick knowledge checks.' },
              { icon: Compass, title: 'Structured roadmaps', text: 'Know what to learn next and how each skill connects to the bigger picture.' },
              { icon: GraduationCap, title: 'Projects that teach', text: 'Use starter code and build checklists to turn concepts into practical experience.' },
            ].map(item => { const Icon = item.icon; return <div key={item.title} className="rounded-2xl border border-white/[0.07] bg-[#0e1722] p-5"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><Icon className="h-5 w-5" /></div><h3 className="mt-4 text-sm font-bold text-white">{item.title}</h3><p className="mt-2 text-xs leading-6 text-slate-400">{item.text}</p></div>; })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-[#10241d] via-[#0c171b] to-[#0c1220] px-6 py-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div><p className="text-xs font-bold tracking-[0.2em] text-emerald-300">YOUR NEXT CHAPTER</p><h2 className="mt-3 max-w-2xl text-2xl font-extrabold sm:text-3xl">Turn curiosity into code you can be proud of.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Choose your first lesson, follow the path, and keep building one skill at a time.</p></div>
            <button onClick={() => navigateTo('courses')} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-[#03120a] transition hover:bg-emerald-400">Start now <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>
    </div>
  );
};
