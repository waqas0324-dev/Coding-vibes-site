import React, { useState, useMemo } from 'react';
import { useLearning } from '../../context/LearningContext';
import { useNavigation } from '../../context/NavigationContext';
import { activeCourses, getCourseBySlug } from '../../data/courses';
import { TechBadge } from '../TechBadge';
import {
  Bookmark,
  BookmarkCheck,
  Search,
  BookOpen,
  CheckCircle2,
  Clock,
  Play,
  Trash2,
  ArrowRight,
  Sparkles,
  Edit3,
  Check,
  X,
  ExternalLink,
  Plus
} from 'lucide-react';

export const SavedForLaterSection: React.FC = () => {
  const {
    bookmarkedModules,
    removeBookmarkModule,
    updateBookmarkNote,
    toggleBookmarkModule,
    isLessonCompleted
  } = useLearning();
  const { navigateTo } = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState<string>('all');
  const [editingNoteModuleId, setEditingNoteModuleId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState<string>('');

  // Enrich bookmarked items with course and module metadata
  const resolvedBookmarks = useMemo(() => {
    return bookmarkedModules.map(item => {
      const course = getCourseBySlug(item.courseSlug);
      const courseModule = course?.modules.find(
        m => m.id.toLowerCase() === item.moduleId.toLowerCase()
      );

      let totalLessons = 0;
      let completedLessons = 0;
      let firstUncompletedLesson = courseModule?.lessons?.[0];

      if (courseModule) {
        totalLessons = courseModule.lessons.length;
        courseModule.lessons.forEach(l => {
          if (isLessonCompleted(l.id)) {
            completedLessons++;
          }
        });

        const uncompleted = courseModule.lessons.find(l => !isLessonCompleted(l.id));
        if (uncompleted) {
          firstUncompletedLesson = uncompleted;
        }
      }

      const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

      return {
        ...item,
        course,
        module: courseModule,
        totalLessons,
        completedLessons,
        progressPercent,
        firstUncompletedLesson
      };
    });
  }, [bookmarkedModules, isLessonCompleted]);

  // Unique course filters from saved items
  const courseFilterOptions = useMemo(() => {
    const courseSlugs = Array.from(new Set(resolvedBookmarks.map(b => b.courseSlug)));
    return courseSlugs.map(slug => {
      const course = getCourseBySlug(slug);
      const count = resolvedBookmarks.filter(b => b.courseSlug === slug).length;
      return {
        slug,
        title: course?.title || slug.toUpperCase(),
        count
      };
    });
  }, [resolvedBookmarks]);

  // Filtered bookmarks based on category and search query
  const filteredBookmarks = useMemo(() => {
    return resolvedBookmarks.filter(item => {
      // Course filter
      if (selectedCourseFilter !== 'all' && item.courseSlug !== selectedCourseFilter) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.module?.title.toLowerCase().includes(q);
        const matchDesc = item.module?.description.toLowerCase().includes(q);
        const matchCourse = item.course?.title.toLowerCase().includes(q);
        const matchNote = item.note?.toLowerCase().includes(q);
        return matchTitle || matchDesc || matchCourse || matchNote;
      }

      return true;
    });
  }, [resolvedBookmarks, selectedCourseFilter, searchQuery]);

  const handleStartEditingNote = (moduleId: string, currentNote?: string) => {
    setEditingNoteModuleId(moduleId);
    setNoteDraft(currentNote || '');
  };

  const handleSaveNote = (moduleId: string, courseSlug: string) => {
    updateBookmarkNote(moduleId, courseSlug, noteDraft);
    setEditingNoteModuleId(null);
  };

  const handleCancelEditingNote = () => {
    setEditingNoteModuleId(null);
    setNoteDraft('');
  };

  // Curated module recommendations for the empty state
  const recommendedModules = [
    {
      courseSlug: 'html',
      moduleId: 'html-m2',
      title: 'HTML Text Formatting & Semantics',
      courseTitle: 'HTML',
      desc: 'Master semantic layout, headings, paragraphs, and modern accessible markup.'
    },
    {
      courseSlug: 'css',
      moduleId: 'css-m3',
      title: 'CSS Box Model & Display',
      courseTitle: 'CSS',
      desc: 'Understand margins, borders, padding, and block vs inline flow mechanics.'
    },
    {
      courseSlug: 'javascript',
      moduleId: 'js-m2',
      title: 'JavaScript Data Types & Operators',
      courseTitle: 'JavaScript',
      desc: 'Deep dive into primitives, dynamic typing, operators, and type coercion.'
    }
  ];

  return (
    <section
      id="saved-for-later-section"
      className="rounded-3xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-8 space-y-6 shadow-xl transition-colors"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-[#1e293b]">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-[#04AA6D] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-current" />
            </div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white">
              Saved for Later
            </h2>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] dark:text-emerald-400 font-bold border border-[#04AA6D]/30">
              {bookmarkedModules.length} {bookmarkedModules.length === 1 ? 'Module' : 'Modules'}
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 max-w-2xl">
            Your personal queue of bookmarked curriculum modules. Save challenging topics, study objectives, and resume lessons at your own pace.
          </p>
        </div>

        {/* Quick stat & action */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigateTo('courses')}
            className="text-xs text-[#04AA6D] dark:text-emerald-400 font-bold hover:underline flex items-center space-x-1 cursor-pointer"
          >
            <span>Explore Course Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      {bookmarkedModules.length > 0 && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Course filter pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedCourseFilter('all')}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCourseFilter === 'all'
                  ? 'bg-[#04AA6D] text-white shadow-xs'
                  : 'bg-gray-100 dark:bg-[#141d2e] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-[#1e293b]'
              }`}
            >
              All Tracks ({resolvedBookmarks.length})
            </button>

            {courseFilterOptions.map(option => (
              <button
                key={option.slug}
                onClick={() => setSelectedCourseFilter(option.slug)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCourseFilter === option.slug
                    ? 'bg-[#04AA6D] text-white shadow-xs'
                    : 'bg-gray-100 dark:bg-[#141d2e] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-[#1e293b]'
                }`}
              >
                {option.title} ({option.count})
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative shrink-0 w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search saved modules & notes..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-gray-50 dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] text-xs text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#04AA6D] transition"
            />
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-2.5 top-2.5" />
          </div>
        </div>
      )}

      {/* Bookmarks Grid or Empty State */}
      {bookmarkedModules.length === 0 ? (
        /* Empty State */
        <div className="rounded-2xl border-2 border-dashed border-gray-200 dark:border-[#1e293b] p-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-[#04AA6D] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 mx-auto flex items-center justify-center shadow-inner">
            <Bookmark className="w-7 h-7" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
              Your 'Saved for Later' list is currently empty
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              When exploring course tracks or reading through lessons, tap the <Bookmark className="w-3 h-3 inline text-[#04AA6D] fill-[#04AA6D]" /> bookmark button on any module to save it here for convenient study sessions.
            </p>
          </div>

          {/* Recommended Modules to Quick Save */}
          <div className="pt-2 max-w-2xl mx-auto text-left space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-gray-700 dark:text-gray-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Recommended Modules to Get Started:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {recommendedModules.map(rec => (
                <div
                  key={rec.moduleId}
                  className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#080d14] border border-gray-200 dark:border-[#1e293b] flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#04AA6D] dark:text-emerald-400">
                      {rec.courseTitle}
                    </span>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">
                      {rec.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2">
                      {rec.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleBookmarkModule(rec.moduleId, rec.courseSlug, 'Recommended fundamental topic')}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-[#04AA6D]/15 hover:bg-[#04AA6D] text-[#04AA6D] hover:text-white dark:text-emerald-400 dark:hover:text-black font-bold text-[11px] transition flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Bookmark Module</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : filteredBookmarks.length === 0 ? (
        /* No Search Filter Results */
        <div className="text-center py-12 space-y-3">
          <Bookmark className="w-10 h-10 text-gray-400 mx-auto" />
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            No saved modules match "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCourseFilter('all');
            }}
            className="text-xs text-[#04AA6D] font-bold hover:underline cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        /* Grid of Bookmarked Modules */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBookmarks.map(item => {
            if (!item.module || !item.course) return null;

            const isEditingNote = editingNoteModuleId === item.moduleId;
            const isCompleted = item.progressPercent === 100;

            return (
              <div
                key={`${item.courseSlug}-${item.moduleId}`}
                className="rounded-2xl bg-gray-50 dark:bg-[#080d14] border border-gray-200 dark:border-[#1e293b] hover:border-[#04AA6D]/50 transition-all p-5 flex flex-col justify-between space-y-4 shadow-xs group"
              >
                {/* Card Top: Tech Badge, Title & Delete Bookmark Button */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <TechBadge type={item.course.badgeType} size="sm" />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-mono uppercase font-bold text-[#04AA6D] dark:text-emerald-400">
                            {item.course.title} Track
                          </span>
                          <span className="text-[10px] text-gray-400">•</span>
                          <span className="text-[10px] text-gray-500 font-mono">
                            Module {item.module.order}
                          </span>
                        </div>
                        <h3 className="text-sm font-extrabold text-gray-900 dark:text-white leading-snug group-hover:text-[#04AA6D] transition">
                          {item.module.title}
                        </h3>
                      </div>
                    </div>

                    {/* Remove Bookmark Icon Button */}
                    <button
                      onClick={() => removeBookmarkModule(item.moduleId, item.courseSlug)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer shrink-0"
                      title="Remove from Saved for Later"
                      aria-label="Remove Bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Module Description */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {item.module.description}
                  </p>

                  {/* Progress Bar & Status */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gray-500 flex items-center space-x-1">
                        <BookOpen className="w-3 h-3 text-[#04AA6D]" />
                        <span>
                          {item.completedLessons} of {item.totalLessons} lessons finished
                        </span>
                      </span>
                      <span className={`font-mono font-bold ${isCompleted ? 'text-[#04AA6D]' : 'text-gray-600 dark:text-gray-300'}`}>
                        {item.progressPercent}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-[#1e293b] h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isCompleted ? 'bg-[#04AA6D]' : 'bg-[#04AA6D]/80'
                        }`}
                        style={{ width: `${item.progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Student Study Note Feature */}
                  <div className="pt-1">
                    {isEditingNote ? (
                      <div className="space-y-2 p-2.5 rounded-xl bg-white dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b]">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                          Study Note / Goal:
                        </label>
                        <textarea
                          value={noteDraft}
                          onChange={e => setNoteDraft(e.target.value)}
                          placeholder="e.g., Review flex-wrap & align-items before interview..."
                          rows={2}
                          className="w-full p-2 text-xs rounded-lg bg-gray-50 dark:bg-[#080d14] border border-gray-200 dark:border-[#1e293b] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#04AA6D]"
                          autoFocus
                        />
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={handleCancelEditingNote}
                            className="px-2.5 py-1 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSaveNote(item.moduleId, item.courseSlug)}
                            className="px-3 py-1 text-xs bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold rounded-lg transition flex items-center space-x-1 cursor-pointer"
                          >
                            <Check className="w-3 h-3" />
                            <span>Save Note</span>
                          </button>
                        </div>
                      </div>
                    ) : item.note ? (
                      <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block font-mono">
                            My Note:
                          </span>
                          <p className="leading-snug text-[11px] italic">
                            "{item.note}"
                          </p>
                        </div>
                        <button
                          onClick={() => handleStartEditingNote(item.moduleId, item.note)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-1 rounded transition shrink-0 cursor-pointer"
                          title="Edit Note"
                        >
                          <Edit3 className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleStartEditingNote(item.moduleId)}
                        className="text-[11px] text-gray-400 hover:text-[#04AA6D] transition flex items-center space-x-1 cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Add a personal study note...</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Bottom: Navigation actions */}
                <div className="pt-2 border-t border-gray-200 dark:border-[#1e293b]/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => navigateTo('course-detail', { courseSlug: item.courseSlug })}
                    className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 font-semibold flex items-center space-x-1 transition cursor-pointer"
                  >
                    <span>Curriculum</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => {
                      if (item.firstUncompletedLesson) {
                        navigateTo('lesson', {
                          courseSlug: item.courseSlug,
                          lessonSlug: item.firstUncompletedLesson.slug
                        });
                      } else {
                        navigateTo('course-detail', { courseSlug: item.courseSlug });
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold text-xs flex items-center space-x-1.5 transition shadow-xs cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>
                      {isCompleted ? 'Review Module' : item.progressPercent > 0 ? 'Resume Module' : 'Start Module'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
