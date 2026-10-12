import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useAuth } from '../context/AuthContext';
import { Code2, Search, Sun, Moon, Menu, X, LogIn, UserRound, LogOut, BookOpen, Route, FolderGit2, Library, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentRoute, navigateTo, isDarkMode, toggleDarkMode } = useNavigation();
  const { user, isAuthenticated, openAuthModal, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const links = [
    { label: 'Home', route: 'home' as const, icon: Code2 },
    { label: 'Learning Paths', route: 'courses' as const, icon: BookOpen },
    { label: 'Roadmaps', route: 'roadmaps' as const, icon: Route },
    { label: 'Projects', route: 'projects' as const, icon: FolderGit2 },
    { label: 'Resources', route: 'resources' as const, icon: Library },
  ];
  const go = (route: any, params?: any) => {
    navigateTo(route, params);
    setMobileOpen(false);
  };
  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      go('search', { searchQuery: searchQuery.trim() });
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080d14]/90 text-white shadow-[0_8px_32px_rgba(0,0,0,.12)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <button onClick={() => go('home')} aria-label="Coding Vibes home" className="group flex shrink-0 items-center gap-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,.08)]"><Code2 className="h-5 w-5" /></span>
          <span className="text-left leading-none"><span className="block text-sm font-extrabold tracking-[0.08em] text-white">CODING <span className="text-emerald-400">VIBES</span></span><span className="mt-1.5 block text-[9px] font-semibold tracking-[0.2em] text-slate-500">LEARN · BUILD · GROW</span></span>
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map(({ label, route, icon: Icon }) => {
            const active = currentRoute === route || (route === 'courses' && currentRoute === 'course-detail');
            return <button key={label} onClick={() => go(route)} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-400 ${active ? 'bg-emerald-400/10 text-emerald-300' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'}`}><Icon className="h-4 w-4 opacity-80" />{label}</button>;
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <button onClick={() => setSearchOpen(value => !value)} aria-label="Search lessons" className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"><Search className="h-4.5 w-4.5" /></button>
          <button onClick={toggleDarkMode} aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400">{isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
          {isAuthenticated ? <div className="hidden items-center gap-2 md:flex"><button onClick={() => go('profile')} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400/30"><UserRound className="h-4 w-4" />{user?.name || 'My Account'}</button><button onClick={signOut} aria-label="Sign out" className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white"><LogOut className="h-4 w-4" /></button></div> : <div className="hidden items-center gap-2 md:flex"><button onClick={() => openAuthModal('signin')} className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 transition hover:text-white">Log in</button><button onClick={() => openAuthModal('signup')} className="rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-bold text-[#03120a] transition hover:bg-emerald-400">Sign up</button></div>}
          <button onClick={() => setMobileOpen(value => !value)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:hidden">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>

      {searchOpen && <div className="border-t border-white/[0.06] bg-[#0b121b] px-4 py-3"><form onSubmit={submitSearch} className="mx-auto flex max-w-3xl items-center gap-2 rounded-xl border border-white/10 bg-[#101824] p-2"><Search className="ml-2 h-4 w-4 text-slate-400" /><input autoFocus value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Search courses, lessons, projects..." className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500" /><button type="submit" className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-black">Search</button></form></div>}

      {mobileOpen && <div className="border-t border-white/[0.07] bg-[#0b121b] px-4 py-4 lg:hidden"><nav aria-label="Mobile navigation" className="mx-auto grid max-w-2xl gap-1 sm:grid-cols-2">{links.map(({ label, route, icon: Icon }) => <button key={label} onClick={() => go(route)} className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold ${currentRoute === route ? 'bg-emerald-400/10 text-emerald-300' : 'text-slate-200 hover:bg-white/[0.05]'}`}><span className="flex items-center gap-3"><Icon className="h-4 w-4" />{label}</span><ChevronRight className="h-4 w-4 text-slate-500" /></button>)}</nav><div className="mt-4 flex gap-2 border-t border-white/[0.07] pt-4">{isAuthenticated ? <><button onClick={() => go('profile')} className="flex-1 rounded-lg border border-white/10 px-3 py-2.5 text-sm font-semibold">My Account</button><button onClick={() => { signOut(); setMobileOpen(false); }} className="rounded-lg border border-white/10 px-3 py-2.5 text-sm">Sign out</button></> : <><button onClick={() => { openAuthModal('signin'); setMobileOpen(false); }} className="flex-1 rounded-lg border border-white/10 px-3 py-2.5 text-sm font-semibold">Log in</button><button onClick={() => { openAuthModal('signup'); setMobileOpen(false); }} className="flex-1 rounded-lg bg-emerald-500 px-3 py-2.5 text-sm font-bold text-black">Sign up</button></>}</div></div>}
    </header>
  );
};
