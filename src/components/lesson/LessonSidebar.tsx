import React, { useState } from 'react';
import { Course, CourseModule, Lesson } from '../../types';
import { useNavigation } from '../../context/NavigationContext';
import { useLearning } from '../../context/LearningContext';
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  Award,
  Layers,
  X
} from 'lucide-react';

interface LessonSidebarProps {
  course: Course;
  currentLessonId: string;
  onSelectLesson?: () => void;
  onClose?: () => void;
}

export const LessonSidebar: React.FC<LessonSidebarProps> = ({
  course,
  currentLessonId,
  onSelectLesson,
  onClose
}) => {
  const { navigateTo } = useNavigation();
  const { isLessonCompleted, getCourseProgress } = useLearning();

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    // By default, open all or current module
    const initial: Record<string, boolean> = {};
    course.modules.forEach(m => {
      initial[m.id] = true;
    });
    return initial;
  });

  const toggleModule = (modId: string) => {
    setExpandedModules(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  const progress = getCourseProgress(course.id);

  // Flattened or filtered modules
  const filteredModules = course.modules.map(mod => {
    if (!searchQuery.trim()) return mod;
    const query = searchQuery.toLowerCase();
    const matchingLessons = (mod.lessons || []).filter(
      l =>
        l.title.toLowerCase().includes(query) ||
        (l.description && l.description.toLowerCase().includes(query))
    );
    return {
      ...mod,
      lessons: matchingLessons
    };
  }).filter(mod => !searchQuery.trim() || mod.lessons.length > 0);

  const courseTitleUpper = course.title.toUpperCase() + ' TUTORIAL';

  return (
    <aside className="w-64 sm:w-72 bg-[#f1f1f1] dark:bg-[#0c121e] border-r border-gray-300 dark:border-[#1e293b] flex flex-col h-full overflow-hidden select-none transition-colors">
      {/* Sidebar Header (Matches Screenshot 1) */}
      <div className="p-4 border-b border-gray-300 dark:border-[#1e293b] bg-[#e7e9eb] dark:bg-[#080d14] space-y-3">
        <div className="flex items-center justify-between">
          <div className="truncate">
            <h2 className="text-sm font-extrabold text-[#282A35] dark:text-white tracking-wider truncate">
              {courseTitleUpper}
            </h2>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">
              {progress.completed} of {progress.total} completed ({progress.percentage}%)
            </span>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="md:hidden p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1e293b] cursor-pointer"
              aria-label="Close Sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Progress Line */}
        <div className="w-full h-1.5 bg-gray-300 dark:bg-[#1e293b] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#04AA6D] transition-all duration-300"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>

        {/* Quick Filter Search */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-gray-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Filter topics..."
            className="w-full pl-8 pr-2.5 py-1 bg-white dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] rounded text-xs text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#04AA6D]"
          />
        </div>
      </div>

      {/* Topics & Lessons Vertical List (Matches Screenshot 1 W3Schools Navigation) */}
      <div className="flex-1 overflow-y-auto py-2 divide-y divide-gray-200 dark:divide-[#1e293b]/40">
        {filteredModules.map((module) => {
          const isExpanded = !!expandedModules[module.id] || searchQuery.trim().length > 0;

          return (
            <div key={module.id} className="py-1">
              {/* Module Header / Category */}
              {course.modules.length > 1 && (
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full px-4 py-1.5 text-left flex items-center justify-between text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition uppercase tracking-wider"
                >
                  <span className="truncate">{module.title}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-3 h-3 shrink-0 ml-1 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-3 h-3 shrink-0 ml-1 text-gray-500" />
                  )}
                </button>
              )}

              {/* Lessons in this Section */}
              {isExpanded && (
                <div className="space-y-0.5">
                  {(module.lessons || []).map((lesson) => {
                    const isCurrent = lesson.id === currentLessonId;
                    const isCompleted = isLessonCompleted(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          navigateTo('lesson', {
                            courseSlug: course.slug,
                            lessonSlug: lesson.slug
                          });
                          if (onSelectLesson) onSelectLesson();
                        }}
                        className={`w-full text-left py-1.5 px-4 text-[13px] flex items-center justify-between transition ${
                          isCurrent
                            ? 'bg-[#04AA6D] text-white font-bold shadow-xs'
                            : 'text-gray-800 dark:text-gray-200 hover:bg-[#e7e9eb] dark:hover:bg-[#141d2e] hover:text-black dark:hover:text-white'
                        }`}
                      >
                        <span className="truncate pr-2">{lesson.title}</span>

                        {isCompleted && (
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isCurrent ? 'text-white' : 'text-[#04AA6D]'
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
