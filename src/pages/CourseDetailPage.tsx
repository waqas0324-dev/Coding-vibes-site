import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useLearning } from '../context/LearningContext';
import { getCourseBySlug } from '../data/courses';
import { TechBadge } from '../components/TechBadge';
import { InlineLessonWorkbench } from '../components/course/InlineLessonWorkbench';
import { Lesson } from '../types';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  Play,
  ArrowLeft,
  Award,
  ChevronDown,
  ChevronUp,
  FileCode2,
  HelpCircle,
  Rocket,
  Bookmark,
  Code2,
  Terminal,
  Sparkles,
  Laptop
} from 'lucide-react';

export const CourseDetailPage: React.FC = () => {
  const { params, navigateTo } = useNavigation();
  const { isLessonCompleted, getCourseProgressPercentage, isModuleBookmarked, toggleBookmarkModule } = useLearning();

  const courseSlug = params.courseSlug || 'html';
  const course = getCourseBySlug(courseSlug);

  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({
    0: true,
    1: true
  });

  // Track which lesson is currently expanded inline in the curriculum
  const [inlineWorkbenchLessonId, setInlineWorkbenchLessonId] = useState<string | null>(null);

  // Studio lesson selector at the top
  const [selectedStudioLessonId, setSelectedStudioLessonId] = useState<string | null>(null);
  const [showStudioWorkbench, setShowStudioWorkbench] = useState<boolean>(true);

  if (!course) {
    return (
      <div className="py-16 text-center space-y-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white">Course Not Found</h2>
        <p className="text-xs text-gray-400">The requested course track does not exist or is currently being prepared.</p>
        <button
          onClick={() => navigateTo('courses')}
          className="px-4 py-2 bg-[#22c55e] text-black font-semibold rounded-lg text-xs"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  const allLessons = course.modules.flatMap(m => m.lessons);

  const toggleModule = (idx: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const progressPercent = getCourseProgressPercentage(course.slug);

  // Find first uncompleted lesson
  let firstUncompletedLesson = course.modules[0]?.lessons[0];
  for (const m of course.modules) {
    const uncompleted = m.lessons.find(l => !isLessonCompleted(l.id));
    if (uncompleted) {
      firstUncompletedLesson = uncompleted;
      break;
    }
  }

  // Active studio lesson
  const activeStudioLesson: Lesson =
    allLessons.find(l => l.id === selectedStudioLessonId) ||
    firstUncompletedLesson ||
    course.modules[0]?.lessons[0];

  const handleToggleInlineWorkbench = (lessonId: string) => {
    setInlineWorkbenchLessonId(prev => (prev === lessonId ? null : lessonId));
  };

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigateTo('courses')}
        className="inline-flex items-center space-x-2 text-xs text-gray-400 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Courses</span>
      </button>

      {/* Hero Card */}
      <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start space-x-5">
            <TechBadge type={course.badgeType} size="lg" />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
                  {course.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {course.difficulty}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {course.title} Course
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>

          {/* Action & Stats */}
          <div className="flex flex-col items-start md:items-end justify-between gap-4 shrink-0 bg-[#080d14] border border-[#1e293b] p-4 rounded-xl">
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <div className="flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-gray-500" />
                <span>{course.modulesCount} Modules</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                <span>{course.lessonsCount} Lessons</span>
              </div>
            </div>

            <div className="w-full md:w-48 space-y-1">
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>Progress</span>
                <span className="text-[#22c55e] font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full bg-[#1e293b] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#22c55e] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (firstUncompletedLesson) {
                  navigateTo('lesson', {
                    courseSlug: course.slug,
                    lessonSlug: firstUncompletedLesson.slug
                  });
                }
              }}
              className="w-full flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-xs transition duration-200 shadow-md shadow-[#22c55e]/20"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>{progressPercent > 0 ? 'Resume Learning' : 'Start Course'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Interactive Code Studio & Exercise Lab */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0d131f] border border-[#1e293b] p-4 rounded-xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Interactive Lab
                </span>
                <span className="text-xs text-gray-500">&bull;</span>
                <span className="text-xs text-gray-400">Live Code Execution & Exercises</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Course Code Studio & Exercise Lab
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Quick Lesson Selector */}
            <div className="relative">
              <select
                aria-label="Select lesson to practice"
                value={activeStudioLesson.id}
                onChange={(e) => setSelectedStudioLessonId(e.target.value)}
                className="bg-[#141d2e] border border-[#1e293b] text-gray-200 text-xs rounded-lg px-3 py-2 pr-8 outline-none focus:border-emerald-500 cursor-pointer font-mono"
              >
                {course.modules.map(m => (
                  <optgroup key={m.id} label={`Module ${m.order}: ${m.title}`}>
                    {m.lessons.map(l => (
                      <option key={l.id} value={l.id}>
                        {isLessonCompleted(l.id) ? '✓ ' : '○ '} {l.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <button
              onClick={() => setShowStudioWorkbench(!showStudioWorkbench)}
              className="px-3 py-2 bg-[#141d2e] hover:bg-[#1a253a] border border-[#1e293b] text-gray-300 hover:text-white rounded-lg text-xs font-semibold transition"
            >
              {showStudioWorkbench ? 'Hide Studio' : 'Open Studio'}
            </button>
          </div>
        </div>

        {/* Studio Inline Workbench */}
        {showStudioWorkbench && (
          <InlineLessonWorkbench
            course={course}
            lesson={activeStudioLesson}
            allLessons={allLessons}
            onSelectLesson={(l) => setSelectedStudioLessonId(l.id)}
          />
        )}
      </div>

      {/* Course Curriculum & Modules */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Course Curriculum</h2>
            <p className="text-xs text-gray-400">
              Click any lesson to open its inline execution environment or view the full theoretical lesson.
            </p>
          </div>
          <span className="text-xs text-gray-400 font-mono">
            {course.modules.length} Modules &bull; {course.lessonsCount} Total Lessons
          </span>
        </div>

        <div className="space-y-4">
          {course.modules.map((mod, modIdx) => {
            const isExpanded = !!expandedModules[modIdx];
            const completedCount = mod.lessons.filter(l => isLessonCompleted(l.id)).length;
            const isModCompleted = completedCount === mod.lessons.length && mod.lessons.length > 0;
            const isBookmarked = isModuleBookmarked(mod.id, course.slug);

            return (
              <div
                key={mod.id}
                className="rounded-xl bg-[#0d131f] border border-[#1e293b] overflow-hidden"
              >
                {/* Module Header Toggle */}
                <div
                  onClick={() => toggleModule(modIdx)}
                  className="flex items-center justify-between p-4 bg-[#0a0f18] cursor-pointer hover:bg-[#111a2c] transition"
                >
                  <div className="flex items-center space-x-3 min-w-0 pr-2">
                    <div className="w-7 h-7 rounded-lg bg-[#141d2e] border border-[#1e293b] flex items-center justify-center text-xs font-mono font-bold text-gray-300 shrink-0">
                      {mod.order}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white truncate">{mod.title}</h3>
                      <p className="text-[11px] text-gray-400 line-clamp-1">{mod.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmarkModule(mod.id, course.slug);
                      }}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer flex items-center space-x-1 ${
                        isBookmarked
                          ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-[#04AA6D]/40'
                          : 'bg-[#141d2e] text-gray-400 hover:text-white border-[#1e293b] hover:border-gray-500'
                      }`}
                      title={isBookmarked ? 'Bookmarked in Profile (Saved for Later) - Click to remove' : 'Save Module for Later in Profile'}
                      aria-label={isBookmarked ? 'Remove Bookmark' : 'Save for Later'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#04AA6D]' : ''}`} />
                      <span className="text-[10px] font-bold hidden md:inline">
                        {isBookmarked ? 'Saved' : 'Save'}
                      </span>
                    </button>

                    <span className="text-xs text-gray-400 hidden sm:inline">
                      {completedCount}/{mod.lessons.length} Completed
                    </span>
                    {isModCompleted && (
                      <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                    )}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Lessons List */}
                {isExpanded && (
                  <div className="divide-y divide-[#1e293b]/60 px-2 py-1">
                    {mod.lessons.map((lesson, lessonIdx) => {
                      const completed = isLessonCompleted(lesson.id);
                      const isInlineOpen = inlineWorkbenchLessonId === lesson.id;

                      return (
                        <div key={lesson.id} className="transition-all">
                          <div
                            className={`flex flex-col sm:flex-row sm:items-center justify-between py-3 px-3 rounded-lg hover:bg-[#141d2e] transition text-xs group gap-2 ${
                              isInlineOpen ? 'bg-[#141d2e]/80 border border-emerald-500/40' : ''
                            }`}
                          >
                            <div
                              onClick={() => handleToggleInlineWorkbench(lesson.id)}
                              className="flex items-center space-x-3 cursor-pointer flex-1 min-w-0"
                            >
                              {completed ? (
                                <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-gray-600 group-hover:text-gray-400 shrink-0" />
                              )}
                              <span className="font-mono text-gray-500 w-5">
                                {mod.order}.{lessonIdx + 1}
                              </span>
                              <span className={`font-medium truncate ${completed ? 'text-gray-300' : 'text-gray-200'} group-hover:text-[#22c55e]`}>
                                {lesson.title}
                              </span>
                            </div>

                            <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                              <span className="text-gray-500 text-[11px] hidden md:inline">{lesson.duration}</span>

                              {/* Toggle Inline Practice Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleToggleInlineWorkbench(lesson.id);
                                }}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border flex items-center space-x-1.5 transition ${
                                  isInlineOpen
                                    ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                                    : 'bg-[#0f172a] text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10'
                                }`}
                                title="Run code and solve exercises inline"
                              >
                                <Code2 className="w-3.5 h-3.5" />
                                <span>{isInlineOpen ? 'Close Editor' : 'Try Code & Exercise'}</span>
                              </button>

                              {/* Full Article Link */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigateTo('lesson', {
                                    courseSlug: course.slug,
                                    lessonSlug: lesson.slug
                                  });
                                }}
                                className="px-2.5 py-1 rounded-md text-[11px] text-gray-300 hover:text-white bg-[#0f172a] hover:bg-[#1e293b] border border-[#1e293b] flex items-center space-x-1 transition"
                                title="Open full lesson page with deep theory"
                              >
                                <span>Full Article</span>
                                <span>&rarr;</span>
                              </button>
                            </div>
                          </div>

                          {/* Expanded Inline Workbench for this specific lesson */}
                          {isInlineOpen && (
                            <div className="px-2 py-3">
                              <InlineLessonWorkbench
                                course={course}
                                lesson={lesson}
                                allLessons={allLessons}
                                onSelectLesson={(l) => {
                                  setInlineWorkbenchLessonId(l.id);
                                  setSelectedStudioLessonId(l.id);
                                }}
                                onClose={() => setInlineWorkbenchLessonId(null)}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Projects in Course */}
      {course.projects && course.projects.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-[#1e293b]">
          <div className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-[#22c55e]" />
            <h2 className="text-xl font-bold text-white">Real-World Projects in this Track</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.projects.map(proj => (
              <div
                key={proj.id}
                onClick={() => navigateTo('project-detail', { projectId: proj.id })}
                className="rounded-xl bg-[#0d131f] border border-[#1e293b] p-4 cursor-pointer hover:border-[#22c55e]/50 hover:bg-[#111a2c] transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                      {proj.difficulty}
                    </span>
                    <span className="text-xs text-gray-400">{proj.estimatedTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{proj.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2">{proj.description}</p>
                </div>
                <button className="mt-4 w-full py-2 bg-[#141d2e] hover:bg-[#22c55e] text-gray-200 hover:text-black font-semibold text-xs rounded-lg transition">
                  Build Project →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
