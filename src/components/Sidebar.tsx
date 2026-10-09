import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useAuth } from '../context/AuthContext';
import { TechBadge } from './TechBadge';
import {
  Trophy,
  HelpCircle,
  Code2,
  BookOpen,
  FileText,
  Wrench,
  Terminal,
  User,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Sparkles,
  X
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { currentRoute, params, navigateTo, isSidebarOpen, setIsSidebarOpen } = useNavigation();
  const { user, isAuthenticated, openAuthModal, signOut } = useAuth();
  const [isFutureExpanded, setIsFutureExpanded] = useState(false);

  const activeTechList = [
    { id: 'html', label: 'HTML', badgeType: 'html' as const, status: 'Active' },
    { id: 'css', label: 'CSS', badgeType: 'css' as const, status: 'Active' },
    { id: 'javascript', label: 'JavaScript', badgeType: 'js' as const, status: 'Active' },
    { id: 'tailwind-css', label: 'Tailwind CSS', badgeType: 'tailwind' as const, status: 'Soon' },
    { id: 'react-js', label: 'React JS', badgeType: 'react' as const, status: 'Soon' },
    { id: 'node-js', label: 'Node JS', badgeType: 'node' as const, status: 'Soon' },
  ];

  const futureTechList = [
    { id: 'python', label: 'Python', badgeType: 'python' as const },
    { id: 'java', label: 'Java', badgeType: 'default' as const },
    { id: 'c', label: 'C', badgeType: 'default' as const },
    { id: 'cpp', label: 'C++', badgeType: 'default' as const },
    { id: 'git-github', label: 'Git & GitHub', badgeType: 'git' as const },
    { id: 'typescript', label: 'TypeScript', badgeType: 'ts' as const },
    { id: 'sql', label: 'SQL & DB', badgeType: 'default' as const },
    { id: 'data-structures', label: 'DSA', badgeType: 'default' as const },
    { id: 'ai-machine-learning', label: 'AI & ML', badgeType: 'default' as const },
  ];

  const handleTechClick = (techId: string, status: string) => {
    setIsSidebarOpen(false);
    if (status === 'Active') {
      navigateTo('course-detail', { courseSlug: techId });
    } else {
      navigateTo('courses', { categoryFilter: 'Future Technologies' });
    }
  };

  if (!isSidebarOpen) return null;

  const handleLinkClick = (action: () => void) => {
    action();
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Global Backdrop */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 transition-opacity"
        aria-hidden="true"
      />

      <aside className="fixed top-0 left-0 z-50 w-80 max-w-[85vw] h-full bg-[#080d14] border-r border-[#1e293b] flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-200">
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#1e293b] flex items-center justify-between bg-[#0a101d]">
          <div
            onClick={() => handleLinkClick(() => navigateTo('home'))}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span className="font-mono text-xl font-extrabold text-[#22c55e]">&lt;/&gt;</span>
            <span className="font-extrabold text-base tracking-wider text-white">CODING</span>
            <span className="font-extrabold text-base tracking-wider text-[#22c55e]">VIBES</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#141d2e] transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto flex-1">
          {/* Section: LEARN */}
          <div>
            <div className="text-[11px] font-bold tracking-wider text-[#22c55e] uppercase px-3 mb-2 flex items-center justify-between">
              <span>LEARN</span>
              <span className="text-[9px] text-gray-500 font-mono">TRACKS</span>
            </div>

            <div className="space-y-1">
              {activeTechList.map(tech => {
                const isActive = (currentRoute === 'course-detail' || currentRoute === 'lesson') && params.courseSlug === tech.id;
                return (
                  <button
                    key={tech.id}
                    onClick={() => handleTechClick(tech.id, tech.status)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition ${
                      isActive
                        ? 'bg-[#141d2e] text-[#22c55e] border border-[#22c55e]/30'
                        : 'text-gray-300 hover:bg-[#0f172a] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <TechBadge type={tech.badgeType} size="sm" />
                      <span>{tech.label}</span>
                    </div>
                    {tech.status === 'Soon' && (
                      <span className="text-[9px] font-mono text-gray-500 bg-gray-900 px-1.5 py-0.5 rounded border border-gray-800">
                        Soon
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Expandable Future Languages */}
              <button
                onClick={() => setIsFutureExpanded(prev => !prev)}
                className="w-full flex items-center justify-between px-3 py-1.5 mt-1 rounded text-[11px] text-gray-400 hover:text-gray-200 transition"
              >
                <span className="flex items-center space-x-1.5">
                  <Sparkles className="w-3 h-3 text-[#22c55e]" />
                  <span>More Technologies ({futureTechList.length})</span>
                </span>
                {isFutureExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </button>

              {isFutureExpanded && (
                <div className="pl-2 space-y-1 pt-1 border-l border-[#1e293b] ml-4">
                  {futureTechList.map(tech => (
                    <button
                      key={tech.id}
                      onClick={() => navigateTo('courses', { categoryFilter: 'Future Technologies' })}
                      className="w-full flex items-center justify-between px-2 py-1.5 rounded text-xs text-gray-400 hover:bg-[#0f172a] hover:text-white"
                    >
                      <div className="flex items-center space-x-2">
                        <TechBadge type={tech.badgeType} size="sm" />
                        <span>{tech.label}</span>
                      </div>
                      <span className="text-[9px] text-gray-500">Soon</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section: PRACTICE */}
          <div>
            <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase px-3 mb-2">
              PRACTICE
            </div>
            <div className="space-y-1">
              <button
                onClick={() => navigateTo('practice')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                  currentRoute === 'practice'
                    ? 'bg-[#141d2e] text-[#22c55e]'
                    : 'text-gray-300 hover:bg-[#0f172a] hover:text-white'
                }`}
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Challenges</span>
              </button>

              <button
                onClick={() => navigateTo('practice')}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:bg-[#0f172a] hover:text-white transition"
              >
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>Quiz</span>
              </button>

              <button
                onClick={() => navigateTo('practice')}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:bg-[#0f172a] hover:text-white transition"
              >
                <Code2 className="w-4 h-4 text-[#22c55e]" />
                <span>Exercises</span>
              </button>
            </div>
          </div>

          {/* Section: RESOURCES */}
          <div>
            <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase px-3 mb-2">
              RESOURCES
            </div>
            <div className="space-y-1">
              <button
                onClick={() => navigateTo('resources')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                  currentRoute === 'resources'
                    ? 'bg-[#141d2e] text-[#22c55e]'
                    : 'text-gray-300 hover:bg-[#0f172a] hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Documentation</span>
              </button>

              <button
                onClick={() => navigateTo('resources')}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:bg-[#0f172a] hover:text-white transition"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Cheatsheets</span>
              </button>

              <button
                onClick={() => navigateTo('resources')}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:bg-[#0f172a] hover:text-white transition"
              >
                <Wrench className="w-4 h-4 text-indigo-400" />
                <span>Tools</span>
              </button>

              <button
                onClick={() => navigateTo('resources')}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:bg-[#0f172a] hover:text-white transition"
              >
                <Terminal className="w-4 h-4 text-yellow-400" />
                <span>Snippets</span>
              </button>
            </div>
          </div>

          {/* Section: ACCOUNT */}
          <div>
            <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase px-3 mb-2">
              ACCOUNT
            </div>
            <div className="space-y-1">
              <button
                onClick={() => {
                  if (isAuthenticated) navigateTo('profile');
                  else openAuthModal('signin');
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                  currentRoute === 'profile'
                    ? 'bg-[#141d2e] text-[#22c55e]'
                    : 'text-gray-300 hover:bg-[#0f172a] hover:text-white'
                }`}
              >
                <User className="w-4 h-4 text-gray-400" />
                <span>{isAuthenticated && user ? user.name : 'Profile'}</span>
              </button>

              <button
                onClick={() => navigateTo('settings')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium transition ${
                  currentRoute === 'settings'
                    ? 'bg-[#141d2e] text-[#22c55e]'
                    : 'text-gray-300 hover:bg-[#0f172a] hover:text-white'
                }`}
              >
                <Settings className="w-4 h-4 text-gray-400" />
                <span>Settings</span>
              </button>

              {isAuthenticated ? (
                <button
                  onClick={signOut}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-red-400 hover:bg-red-950/20 transition"
                >
                  <LogOut className="w-4 h-4 text-red-400" />
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => openAuthModal('signin')}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-xs font-medium text-[#22c55e] hover:bg-[#22c55e]/10 transition"
                >
                  <LogOut className="w-4 h-4 text-[#22c55e] rotate-180" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
