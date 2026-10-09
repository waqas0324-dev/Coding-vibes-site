import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { UserProgress, BookmarkedModule } from '../types';
import { activeCourses } from '../data/courses';
import { BADGE_DEFINITIONS, BadgeDefinition, getCompletedChallengeCount } from '../data/badges';
import { calculateStreakDetails } from '../utils/streakUtils';

interface LearningContextType {
  progress: UserProgress;
  markLessonComplete: (lessonId: string) => void;
  toggleLessonComplete: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  saveQuizResult: (quizId: string, score: number, total: number) => void;
  markPracticeComplete: (practiceId: string) => void;
  markChallengeComplete: (challengeId: string) => void;
  isChallengeCompleted: (challengeId: string) => boolean;
  markProjectComplete: (projectId: string) => void;
  isProjectCompleted: (projectId: string) => boolean;
  getCourseProgressPercentage: (courseSlug: string) => number;
  getCourseProgress: (courseIdOrSlug: string) => { completed: number; total: number; percentage: number };
  totalLessonsCompleted: number;
  totalProjectsCompleted: number;
  totalChallengesCompleted: number;
  totalQuizzesPassed: number;
  // Badge System
  unlockedBadges: Record<string, string>;
  unlockedBadgesCount: number;
  totalBadgesCount: number;
  recentUnlockedBadge: BadgeDefinition | null;
  dismissBadgeNotification: () => void;
  triggerBadgeCheck: () => void;
  // Daily Goal & 7-day Activity
  setDailyGoal: (goal: number) => void;
  logSimulatedCompletion: () => void;
  // Bookmark Modules System ('Saved for Later')
  bookmarkedModules: BookmarkedModule[];
  toggleBookmarkModule: (moduleId: string, courseSlug: string, note?: string) => boolean;
  isModuleBookmarked: (moduleId: string, courseSlug: string) => boolean;
  removeBookmarkModule: (moduleId: string, courseSlug: string) => void;
  updateBookmarkNote: (moduleId: string, courseSlug: string, note: string) => void;
  totalBookmarksCount: number;
  bookmarkNotification: { text: string; courseSlug: string; moduleId: string; action: 'added' | 'removed' } | null;
  dismissBookmarkNotification: () => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

const LOCAL_STORAGE_PROGRESS_KEY = 'codingvibes_learning_progress';

const getTodayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const generateInitialDailyCompletions = (): Record<string, number> => {
  const result: Record<string, number> = {};
  const today = new Date();
  // Realistic initial activity over last 7 days (6 days ago -> today)
  const pattern = [1, 2, 0, 2, 3, 2, 1];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    result[key] = pattern[6 - i];
  }
  return result;
};

const initialDaily = generateInitialDailyCompletions();
const initialStreakInfo = calculateStreakDetails(initialDaily, 7);

const initialProgress: UserProgress = {
  completedLessons: ['html-m1-l1'], // Start with first lesson completed as starter
  completedProjects: [],
  completedChallenges: [],
  quizScores: {},
  practiceAttempts: {},
  unlockedBadges: {},
  bookmarkedModules: [
    {
      moduleId: 'html-m2',
      courseSlug: 'html',
      savedAt: new Date(Date.now() - 86400000).toISOString(),
      note: 'Review HTML semantic elements and text formatting tags before practice challenge'
    }
  ],
  streakDays: initialStreakInfo.currentStreak,
  longestStreak: initialStreakInfo.longestStreak,
  lastActiveDate: new Date().toISOString(),
  xp: 150,
  dailyGoal: 3,
  dailyLessonCompletions: initialDaily
};

// Clean Web Audio chime for badge unlocks (muted by default to respect student concentration)
const playBadgeUnlockSound = () => {
  try {
    const soundEnabled = localStorage.getItem('codingvibes_sound_fx') === 'true';
    if (!soundEnabled) return; // Silent by default

    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;
    // Ascending celebratory notes: C5, E5, G5, C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      gain.gain.setValueAtTime(0.08, now + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 0.4);
    });
  } catch {
    // Graceful fallback
  }
};

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_PROGRESS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const completions = parsed.dailyLessonCompletions && Object.keys(parsed.dailyLessonCompletions).length > 0
          ? parsed.dailyLessonCompletions
          : initialDaily;
        const streakInfo = calculateStreakDetails(completions, 7, parsed.longestStreak || parsed.streakDays || 0);

        return {
          ...initialProgress,
          ...parsed,
          completedChallenges: parsed.completedChallenges || [],
          unlockedBadges: parsed.unlockedBadges || {},
          bookmarkedModules: parsed.bookmarkedModules !== undefined ? parsed.bookmarkedModules : initialProgress.bookmarkedModules,
          dailyGoal: parsed.dailyGoal || 3,
          dailyLessonCompletions: completions,
          streakDays: streakInfo.currentStreak,
          longestStreak: streakInfo.longestStreak
        };
      }
      return initialProgress;
    } catch {
      return initialProgress;
    }
  });

  const [recentUnlockedBadge, setRecentUnlockedBadge] = useState<BadgeDefinition | null>(null);
  const badgeQueueRef = useRef<BadgeDefinition[]>([]);

  const dismissBadgeNotification = useCallback(() => {
    setRecentUnlockedBadge(null);
    if (badgeQueueRef.current.length > 0) {
      const nextBadge = badgeQueueRef.current.shift()!;
      setTimeout(() => {
        setRecentUnlockedBadge(nextBadge);
        playBadgeUnlockSound();
      }, 300);
    }
  }, []);

  // Internal function to evaluate any newly unlocked badges and grant rewards
  const evaluateAndAwardBadges = useCallback((currentProgress: UserProgress) => {
    const unlockedMap = { ...(currentProgress.unlockedBadges || {}) };
    const newlyUnlocked: BadgeDefinition[] = [];
    let bonusXp = 0;

    for (const badge of BADGE_DEFINITIONS) {
      if (!unlockedMap[badge.id]) {
        const { unlocked } = badge.getProgress(currentProgress);
        if (unlocked) {
          unlockedMap[badge.id] = new Date().toISOString();
          newlyUnlocked.push(badge);
          bonusXp += badge.xpReward;
        }
      }
    }

    if (newlyUnlocked.length > 0) {
      const updated: UserProgress = {
        ...currentProgress,
        unlockedBadges: unlockedMap,
        xp: currentProgress.xp + bonusXp
      };

      setProgress(updated);

      // Queue notifications
      newlyUnlocked.forEach(b => badgeQueueRef.current.push(b));
      if (!recentUnlockedBadge && badgeQueueRef.current.length > 0) {
        const firstBadge = badgeQueueRef.current.shift()!;
        setRecentUnlockedBadge(firstBadge);
        playBadgeUnlockSound();
      }

      return updated;
    }

    return currentProgress;
  }, [recentUnlockedBadge]);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  const markLessonComplete = (lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const todayKey = getTodayIso();
      const currentDaily = { ...(prev.dailyLessonCompletions || {}) };
      currentDaily[todayKey] = (currentDaily[todayKey] || 0) + 1;
      const streakInfo = calculateStreakDetails(currentDaily, 7, prev.longestStreak || prev.streakDays || 0);

      const updated: UserProgress = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        dailyLessonCompletions: currentDaily,
        streakDays: streakInfo.currentStreak,
        longestStreak: streakInfo.longestStreak,
        xp: prev.xp + 25,
        lastActiveDate: new Date().toISOString()
      };
      // Check badges
      setTimeout(() => evaluateAndAwardBadges(updated), 50);
      return updated;
    });
  };

  const toggleLessonComplete = (lessonId: string) => {
    setProgress(prev => {
      const exists = prev.completedLessons.includes(lessonId);
      const todayKey = getTodayIso();
      const currentDaily = { ...(prev.dailyLessonCompletions || {}) };
      if (exists && currentDaily[todayKey]) {
        currentDaily[todayKey] = Math.max(0, currentDaily[todayKey] - 1);
      } else if (!exists) {
        currentDaily[todayKey] = (currentDaily[todayKey] || 0) + 1;
      }
      const streakInfo = calculateStreakDetails(currentDaily, 7, prev.longestStreak || prev.streakDays || 0);

      const updated: UserProgress = {
        ...prev,
        completedLessons: exists
          ? prev.completedLessons.filter(id => id !== lessonId)
          : [...prev.completedLessons, lessonId],
        dailyLessonCompletions: currentDaily,
        streakDays: streakInfo.currentStreak,
        longestStreak: streakInfo.longestStreak,
        xp: exists ? Math.max(0, prev.xp - 25) : prev.xp + 25,
        lastActiveDate: new Date().toISOString()
      };
      setTimeout(() => evaluateAndAwardBadges(updated), 50);
      return updated;
    });
  };

  const setDailyGoal = (goal: number) => {
    setProgress(prev => ({
      ...prev,
      dailyGoal: Math.max(1, Math.min(20, goal))
    }));
  };

  const logSimulatedCompletion = () => {
    setProgress(prev => {
      const todayKey = getTodayIso();
      const currentDaily = { ...(prev.dailyLessonCompletions || {}) };
      currentDaily[todayKey] = (currentDaily[todayKey] || 0) + 1;
      const streakInfo = calculateStreakDetails(currentDaily, 7, prev.longestStreak || prev.streakDays || 0);

      const updated: UserProgress = {
        ...prev,
        dailyLessonCompletions: currentDaily,
        streakDays: streakInfo.currentStreak,
        longestStreak: streakInfo.longestStreak,
        xp: prev.xp + 25,
        lastActiveDate: new Date().toISOString()
      };
      setTimeout(() => evaluateAndAwardBadges(updated), 50);
      return updated;
    });
  };

  const isLessonCompleted = (lessonId: string) => {
    return (progress.completedLessons || []).includes(lessonId);
  };

  const saveQuizResult = (quizId: string, score: number, total: number) => {
    const passed = (score / total) >= 0.7;
    setProgress(prev => {
      const updated: UserProgress = {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: { score, total, passed, completedAt: new Date().toISOString() }
        },
        xp: prev.xp + (passed ? 50 : 15),
        lastActiveDate: new Date().toISOString()
      };
      setTimeout(() => evaluateAndAwardBadges(updated), 50);
      return updated;
    });
  };

  const markPracticeComplete = (practiceId: string) => {
    setProgress(prev => {
      if (prev.practiceAttempts && prev.practiceAttempts[practiceId]) return prev;
      const updated: UserProgress = {
        ...prev,
        practiceAttempts: { ...(prev.practiceAttempts || {}), [practiceId]: true },
        xp: prev.xp + 15,
        lastActiveDate: new Date().toISOString()
      };
      setTimeout(() => evaluateAndAwardBadges(updated), 50);
      return updated;
    });
  };

  const markChallengeComplete = (challengeId: string) => {
    setProgress(prev => {
      const currentChallenges = prev.completedChallenges || [];
      if (currentChallenges.includes(challengeId)) return prev;
      const updated: UserProgress = {
        ...prev,
        completedChallenges: [...currentChallenges, challengeId],
        practiceAttempts: { ...(prev.practiceAttempts || {}), [challengeId]: true },
        xp: prev.xp + 35,
        lastActiveDate: new Date().toISOString()
      };
      setTimeout(() => evaluateAndAwardBadges(updated), 50);
      return updated;
    });
  };

  const isChallengeCompleted = (challengeId: string) => {
    const inChallenges = (progress.completedChallenges || []).includes(challengeId);
    const inPractice = !!(progress.practiceAttempts && progress.practiceAttempts[challengeId]);
    return inChallenges || inPractice;
  };

  const markProjectComplete = (projectId: string) => {
    setProgress(prev => {
      const currentProjects = prev.completedProjects || [];
      if (currentProjects.includes(projectId)) return prev;
      const updated: UserProgress = {
        ...prev,
        completedProjects: [...currentProjects, projectId],
        xp: prev.xp + 100,
        lastActiveDate: new Date().toISOString()
      };
      setTimeout(() => evaluateAndAwardBadges(updated), 50);
      return updated;
    });
  };

  const isProjectCompleted = (projectId: string) => {
    return (progress.completedProjects || []).includes(projectId);
  };

  const triggerBadgeCheck = () => {
    evaluateAndAwardBadges(progress);
  };

  const getCourseProgress = (courseIdOrSlug: string): { completed: number; total: number; percentage: number } => {
    const course = activeCourses.find(c => c.id === courseIdOrSlug || c.slug === courseIdOrSlug);
    if (!course) return { completed: 0, total: 0, percentage: 0 };

    let totalLessons = 0;
    let completedLessons = 0;

    course.modules.forEach(m => {
      (m.lessons || []).forEach(l => {
        totalLessons++;
        if ((progress.completedLessons || []).includes(l.id)) {
          completedLessons++;
        }
      });
    });

    const percentage = totalLessons === 0 ? 0 : Math.min(100, Math.round((completedLessons / totalLessons) * 100));
    return { completed: completedLessons, total: totalLessons, percentage };
  };

  const getCourseProgressPercentage = (courseSlug: string): number => {
    return getCourseProgress(courseSlug).percentage;
  };

  const [bookmarkNotification, setBookmarkNotification] = useState<{
    text: string;
    courseSlug: string;
    moduleId: string;
    action: 'added' | 'removed';
  } | null>(null);

  const bookmarkTimerRef = useRef<any>(null);

  const dismissBookmarkNotification = useCallback(() => {
    setBookmarkNotification(null);
    if (bookmarkTimerRef.current) {
      clearTimeout(bookmarkTimerRef.current);
      bookmarkTimerRef.current = null;
    }
  }, []);

  const isModuleBookmarked = useCallback((moduleId: string, courseSlug: string): boolean => {
    const list = progress.bookmarkedModules || [];
    return list.some(
      b => b.moduleId.toLowerCase() === moduleId.toLowerCase() && b.courseSlug.toLowerCase() === courseSlug.toLowerCase()
    );
  }, [progress.bookmarkedModules]);

  const toggleBookmarkModule = useCallback((moduleId: string, courseSlug: string, note?: string): boolean => {
    let nowBookmarked = false;
    let targetModuleTitle = moduleId;
    const course = activeCourses.find(c => c.slug.toLowerCase() === courseSlug.toLowerCase());
    const foundModule = course?.modules.find(m => m.id.toLowerCase() === moduleId.toLowerCase());
    if (foundModule) targetModuleTitle = foundModule.title;

    setProgress(prev => {
      const list = prev.bookmarkedModules || [];
      const index = list.findIndex(
        b => b.moduleId.toLowerCase() === moduleId.toLowerCase() && b.courseSlug.toLowerCase() === courseSlug.toLowerCase()
      );

      let updatedList: BookmarkedModule[];
      if (index >= 0) {
        nowBookmarked = false;
        updatedList = list.filter((_, i) => i !== index);
      } else {
        nowBookmarked = true;
        updatedList = [
          {
            moduleId,
            courseSlug: courseSlug.toLowerCase(),
            savedAt: new Date().toISOString(),
            note: note || undefined
          },
          ...list
        ];
      }

      return {
        ...prev,
        bookmarkedModules: updatedList,
        lastActiveDate: new Date().toISOString()
      };
    });

    if (bookmarkTimerRef.current) {
      clearTimeout(bookmarkTimerRef.current);
    }
    setBookmarkNotification({
      text: nowBookmarked
        ? `Saved "${targetModuleTitle}" to your Profile!`
        : `Removed "${targetModuleTitle}" from Saved for Later`,
      courseSlug,
      moduleId,
      action: nowBookmarked ? 'added' : 'removed'
    });
    bookmarkTimerRef.current = setTimeout(() => {
      setBookmarkNotification(null);
    }, 4000);

    return nowBookmarked;
  }, []);

  const removeBookmarkModule = useCallback((moduleId: string, courseSlug: string) => {
    let targetModuleTitle = moduleId;
    const course = activeCourses.find(c => c.slug.toLowerCase() === courseSlug.toLowerCase());
    const foundModule = course?.modules.find(m => m.id.toLowerCase() === moduleId.toLowerCase());
    if (foundModule) targetModuleTitle = foundModule.title;

    setProgress(prev => ({
      ...prev,
      bookmarkedModules: (prev.bookmarkedModules || []).filter(
        b => !(b.moduleId.toLowerCase() === moduleId.toLowerCase() && b.courseSlug.toLowerCase() === courseSlug.toLowerCase())
      ),
      lastActiveDate: new Date().toISOString()
    }));

    if (bookmarkTimerRef.current) {
      clearTimeout(bookmarkTimerRef.current);
    }
    setBookmarkNotification({
      text: `Removed "${targetModuleTitle}" from Saved for Later`,
      courseSlug,
      moduleId,
      action: 'removed'
    });
    bookmarkTimerRef.current = setTimeout(() => {
      setBookmarkNotification(null);
    }, 3000);
  }, []);

  const updateBookmarkNote = useCallback((moduleId: string, courseSlug: string, note: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarkedModules: (prev.bookmarkedModules || []).map(b => {
        if (b.moduleId.toLowerCase() === moduleId.toLowerCase() && b.courseSlug.toLowerCase() === courseSlug.toLowerCase()) {
          return { ...b, note: note.trim() || undefined };
        }
        return b;
      })
    }));
  }, []);

  const bookmarkedModules = progress.bookmarkedModules || [];
  const totalBookmarksCount = bookmarkedModules.length;

  const totalLessonsCompleted = (progress.completedLessons || []).length;
  const totalProjectsCompleted = (progress.completedProjects || []).length;
  const totalChallengesCompleted = getCompletedChallengeCount(progress);
  const totalQuizzesPassed = Object.values(progress.quizScores || {}).filter((q: any) => q && q.passed).length;
  const unlockedBadges = progress.unlockedBadges || {};
  const unlockedBadgesCount = Object.keys(unlockedBadges).length;
  const totalBadgesCount = BADGE_DEFINITIONS.length;

  return (
    <LearningContext.Provider
      value={{
        progress,
        markLessonComplete,
        toggleLessonComplete,
        isLessonCompleted,
        saveQuizResult,
        markPracticeComplete,
        markChallengeComplete,
        isChallengeCompleted,
        markProjectComplete,
        isProjectCompleted,
        getCourseProgressPercentage,
        getCourseProgress,
        totalLessonsCompleted,
        totalProjectsCompleted,
        totalChallengesCompleted,
        totalQuizzesPassed,
        unlockedBadges,
        unlockedBadgesCount,
        totalBadgesCount,
        recentUnlockedBadge,
        dismissBadgeNotification,
        triggerBadgeCheck,
        setDailyGoal,
        logSimulatedCompletion,
        bookmarkedModules,
        toggleBookmarkModule,
        isModuleBookmarked,
        removeBookmarkModule,
        updateBookmarkNote,
        totalBookmarksCount,
        bookmarkNotification,
        dismissBookmarkNotification
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) throw new Error('useLearning must be used within a LearningProvider');
  return context;
};
