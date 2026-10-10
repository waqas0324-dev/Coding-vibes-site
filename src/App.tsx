/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { AuthProvider } from './context/AuthContext';
import { LearningProvider } from './context/LearningContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { EditorThemeProvider } from './context/EditorThemeContext';

import { Navbar } from './components/Navbar';
import { NavigationBreadcrumbs } from './components/NavigationBreadcrumbs';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { AiMentorModal } from './components/AiMentorModal';
import { BadgeUnlockToast } from './components/badges/BadgeUnlockToast';
import { BookmarkToast } from './components/bookmarks/BookmarkToast';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';

import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LessonPage } from './pages/LessonPage';
import { TutorialsPage } from './pages/TutorialsPage';
import { PracticePage } from './pages/PracticePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { SearchPage } from './pages/SearchPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { TryitPage } from './pages/TryitPage';
import { TagReferencePage } from './pages/TagReferencePage';
import { StudioPage } from './pages/StudioPage';
import { StudioCloudPage } from './pages/StudioCloudPage';
import { RoadmapsPage } from './pages/RoadmapsPage';
import { RoadmapDetailPage } from './pages/RoadmapDetailPage';
import { SetupGuidePage } from './pages/SetupGuidePage';

const MainAppContent: React.FC = () => {
  const {
    currentRoute,
    isAiMentorOpen,
    closeAiMentor,
    aiMentorInitialCode,
    aiMentorLessonTitle,
    aiMentorLanguage,
    openTryit
  } = useNavigation();

  // Full screen Tryit Editor route
  if (currentRoute === 'tryit') {
    return (
      <div className="h-screen w-screen overflow-hidden bg-white dark:bg-[#0c121e]">
        <TryitPage />
        <AuthModal />
        <KeyboardShortcutsModal />
        <AiMentorModal
          isOpen={isAiMentorOpen}
          onClose={closeAiMentor}
          currentCode={aiMentorInitialCode}
          lessonTitle={aiMentorLessonTitle}
          language={aiMentorLanguage}
          onApplyCode={(fixedCode) => {
            openTryit(fixedCode, aiMentorLanguage, `AI Mentor Solution - ${aiMentorLessonTitle}`);
            closeAiMentor();
          }}
        />
      </div>
    );
  }

  const renderActivePage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'tutorials':
        return <TutorialsPage />;
      case 'courses':
        return <CoursesPage />;
      case 'course-detail':
        return <CourseDetailPage />;
      case 'lesson':
        return <LessonPage />;
      case 'practice':
        return <PracticePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'project-detail':
        return <ProjectDetailPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'search':
        return <SearchPage />;
      case 'profile':
      case 'dashboard':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage />;
      case 'tag-reference':
        return <TagReferencePage />;
      case 'studio':
        return <StudioCloudPage />;
      case 'setup-guide':
        return <SetupGuidePage />;
      case 'roadmaps':
        return <RoadmapsPage />;
      case 'roadmap-detail':
        return <RoadmapDetailPage />;
      default:
        return <HomePage />;
    }
  };

  const isLearningRoute = currentRoute === 'lesson';

  return (
    <div className="min-h-screen bg-white dark:bg-[#080d14] text-gray-900 dark:text-gray-100 flex flex-col font-sans selection:bg-[#04AA6D] selection:text-white transition-colors">
      {/* Top Main Navbar */}
      <Navbar />

      {/* Global Navigation Breadcrumbs & Back Bar */}
      <NavigationBreadcrumbs />

      {/* Main Layout */}
      <div className="flex-1 flex w-full relative">
        {/* Content Area */}
        <main className="flex-1 min-w-0 flex flex-col justify-between">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex-1"
          >
            {renderActivePage()}
          </motion.div>
          <Footer />
        </main>
      </div>

      {/* Global Auth Modal */}
      <AuthModal />

      {/* Global Keyboard Shortcuts Overlay */}
      <KeyboardShortcutsModal />

      {/* Real-time Badge Unlock Notification Toast — hidden on lesson pages (distraction-free learning) */}
      {!isLearningRoute && <BadgeUnlockToast />}

      {/* Real-time Bookmark / Saved for Later Toast — hidden on lesson pages (distraction-free learning) */}
      {!isLearningRoute && <BookmarkToast />}

      {/* Global AI Mentor Modal */}
      <AiMentorModal
        isOpen={isAiMentorOpen}
        onClose={closeAiMentor}
        currentCode={aiMentorInitialCode}
        lessonTitle={aiMentorLessonTitle}
        language={aiMentorLanguage}
        onApplyCode={(fixedCode) => {
          openTryit(fixedCode, aiMentorLanguage, `AI Mentor Solution - ${aiMentorLessonTitle}`);
          closeAiMentor();
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <LearningProvider>
        <NavigationProvider>
          <EditorThemeProvider>
            <MainAppContent />
          </EditorThemeProvider>
        </NavigationProvider>
      </LearningProvider>
    </AuthProvider>
  );
}
