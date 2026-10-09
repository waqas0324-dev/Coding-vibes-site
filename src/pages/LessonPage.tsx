import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useLearning } from '../context/LearningContext';
import { getCourseBySlug, getLessonBySlug } from '../data/courses';
import { htmlLesson1Content } from '../data/courses/htmlContent';
import { LessonSidebar } from '../components/lesson/LessonSidebar';
import { LessonRenderer } from '../components/lesson/LessonRenderer';

export const LessonPage: React.FC = () => {
  const { params, navigateTo, isSidebarOpen, setIsSidebarOpen } = useNavigation();
  const { isLessonCompleted, toggleLessonComplete, markLessonComplete } = useLearning();

  const courseSlug = params.courseSlug || 'html';
  const lessonSlug = params.lessonSlug || 'introduction-to-html';

  const lookup = getLessonBySlug(courseSlug, lessonSlug);
  const course = lookup?.course || getCourseBySlug(courseSlug);
  const currentModule = lookup?.module || course?.modules?.[0];
  const currentLesson = lookup?.lesson || course?.modules?.[0]?.lessons?.[0];

  if (!course || !currentLesson) {
    return (
      <div className="py-20 text-center space-y-4 max-w-md mx-auto px-4 bg-white dark:bg-[#080d14]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Lesson Not Found</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          The requested lesson could not be loaded. Please return to the course catalog.
        </p>
        <button
          onClick={() => navigateTo('courses')}
          className="px-5 py-2.5 bg-[#04AA6D] text-white font-bold rounded-lg text-xs"
        >
          Browse All Courses
        </button>
      </div>
    );
  }

  // Load lesson content
  const content = currentLesson.content || (currentLesson.id === 'html-m1-l1' ? htmlLesson1Content : {});
  const isCompleted = isLessonCompleted(currentLesson.id);

  // Flattened list for next/prev navigation
  const allLessons: { courseSlug: string; lessonSlug: string; title: string; id: string }[] = [];
  course.modules.forEach(m => {
    (m.lessons || []).forEach(l => {
      allLessons.push({
        courseSlug: course.slug,
        lessonSlug: l.slug,
        title: l.title,
        id: l.id
      });
    });
  });

  const currentIndex = allLessons.findIndex(l => l.lessonSlug === currentLesson.slug);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const handleNextLesson = () => {
    markLessonComplete(currentLesson.id);
    if (nextLesson) {
      navigateTo('lesson', {
        courseSlug: nextLesson.courseSlug,
        lessonSlug: nextLesson.lessonSlug
      });
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-6.5rem)] relative bg-white dark:bg-[#080d14] text-gray-900 dark:text-gray-100 transition-colors">
      {/* 1. Left Sidebar (Docked on Tablet/Desktop md+, Drawer on Mobile <md) */}
      <div
        className={`transition-all duration-200 ease-in-out shrink-0 ${
          isSidebarOpen
            ? 'fixed inset-y-0 left-0 z-40 md:static md:z-auto block'
            : 'hidden md:block md:static'
        }`}
      >
        <div className="h-full pt-24 sm:pt-26 md:pt-0">
          <LessonSidebar
            course={course}
            currentLessonId={currentLesson.id}
            onSelectLesson={() => {
              // On mobile screens (<768px), auto-close sidebar so lesson content is immediately visible
              if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
              }
            }}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
      </div>

      {/* Mobile-only Backdrop (<md) when Sidebar Drawer is Open */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* 2. Main Educational Article Reading Canvas (Authentic W3Schools Light Styling) */}
      <main className="flex-1 w-full max-w-5xl mx-auto py-6 sm:py-10 px-4 sm:px-8 lg:px-12 overflow-y-auto">
        <LessonRenderer
          lesson={currentLesson}
          course={course}
          currentModule={currentModule}
          content={content}
          lessonIndex={currentIndex >= 0 ? currentIndex : 0}
          totalLessons={allLessons.length}
          prevLesson={prevLesson}
          nextLesson={nextLesson}
          isCompleted={isCompleted}
          onToggleComplete={() => toggleLessonComplete(currentLesson.id)}
          onNextLesson={handleNextLesson}
          onNavigate={navigateTo}
        />
      </main>
    </div>
  );
};
