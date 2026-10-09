import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, ChevronRight, BookOpen, Home, RotateCcw } from 'lucide-react';

export const NavigationBreadcrumbs: React.FC = () => {
  const {
    currentRoute,
    params,
    navigateTo,
    goBack,
    canGoBack,
    lastVisitedLesson,
    resumeLastLesson
  } = useNavigation();

  // Don't show on home page or full-screen tryit editor
  if (currentRoute === 'home' || currentRoute === 'tryit') {
    return null;
  }

  const getBreadcrumbs = () => {
    const crumbs: { label: string; onClick: () => void }[] = [
      { label: 'Home', onClick: () => navigateTo('home') }
    ];

    if (currentRoute === 'courses') {
      crumbs.push({ label: 'All Courses', onClick: () => navigateTo('courses') });
    } else if (currentRoute === 'course-detail') {
      crumbs.push({ label: 'Courses', onClick: () => navigateTo('courses') });
      if (params.courseSlug) {
        crumbs.push({
          label: params.courseSlug.toUpperCase(),
          onClick: () => navigateTo('course-detail', { courseSlug: params.courseSlug })
        });
      }
    } else if (currentRoute === 'lesson') {
      crumbs.push({ label: 'Tutorials', onClick: () => navigateTo('tutorials') });
      if (params.courseSlug) {
        crumbs.push({
          label: `${params.courseSlug.toUpperCase()} Tutorial`,
          onClick: () => navigateTo('course-detail', { courseSlug: params.courseSlug })
        });
      }
      if (params.lessonSlug) {
        const readable = params.lessonSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        crumbs.push({
          label: readable,
          onClick: () => {}
        });
      }
    } else if (currentRoute === 'tutorials') {
      crumbs.push({ label: 'Tutorials & How-To', onClick: () => navigateTo('tutorials') });
    } else if (currentRoute === 'practice') {
      crumbs.push({ label: 'Exercises & Quizzes', onClick: () => navigateTo('practice') });
    } else if (currentRoute === 'projects') {
      crumbs.push({ label: 'Code Projects', onClick: () => navigateTo('projects') });
    } else if (currentRoute === 'project-detail') {
      crumbs.push({ label: 'Projects', onClick: () => navigateTo('projects') });
      crumbs.push({ label: 'Project Workspace', onClick: () => {} });
    } else if (currentRoute === 'resources') {
      crumbs.push({ label: 'Cheat Sheets & References', onClick: () => navigateTo('resources') });
    } else if (currentRoute === 'search') {
      crumbs.push({ label: 'Search Results', onClick: () => {} });
    } else if (currentRoute === 'profile' || currentRoute === 'dashboard') {
      crumbs.push({ label: 'Student Dashboard & Badges', onClick: () => {} });
    } else if (currentRoute === 'settings') {
      crumbs.push({ label: 'Settings', onClick: () => {} });
    }

    return crumbs;
  };

  const crumbs = getBreadcrumbs();
  const isCurrentlyInLesson = currentRoute === 'lesson';
  const showResumeButton = lastVisitedLesson && (!isCurrentlyInLesson || lastVisitedLesson.lessonSlug !== params.lessonSlug);

  return (
    <div className="w-full bg-[#f8f9fa] dark:bg-[#0c121e] border-b border-gray-200 dark:border-[#1e293b] px-3 sm:px-6 py-2 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
        {/* Left: Quick Back Button & Path */}
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-0.5">
          {canGoBack && (currentRoute as string) !== 'home' && (
            <button
              onClick={goBack}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] hover:bg-gray-100 dark:hover:bg-[#1c283f] text-gray-800 dark:text-gray-100 font-bold text-xs transition shadow-xs shrink-0"
              title="Return to previous screen"
            >
              <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Back</span>
            </button>
          )}

          {/* Breadcrumb Links */}
          <nav aria-label="Breadcrumbs" className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 shrink-0 font-medium">
            {crumbs.map((c, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />}
                  {isLast ? (
                    <span className="font-bold text-gray-900 dark:text-white px-1 truncate max-w-[160px] sm:max-w-xs">
                      {c.label}
                    </span>
                  ) : (
                    <button
                      onClick={c.onClick}
                      className="hover:text-[#04AA6D] hover:underline transition px-1"
                    >
                      {c.label}
                    </button>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>

        {/* Right: Resume Last Studied Lesson */}
        {showResumeButton && (
          <button
            onClick={resumeLastLesson}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#d9eee1] hover:bg-[#c2e4cf] dark:bg-[#04AA6D]/20 dark:hover:bg-[#04AA6D]/30 border border-[#04AA6D]/40 text-[#04AA6D] dark:text-[#22c55e] font-extrabold text-xs transition shadow-xs ml-auto shrink-0"
            title="Jump back to where you left off"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume:</span>
            <span className="truncate max-w-[130px] sm:max-w-[180px] font-bold">
              {lastVisitedLesson.title || lastVisitedLesson.lessonSlug}
            </span>
            <span>»</span>
          </button>
        )}
      </div>
    </div>
  );
};
