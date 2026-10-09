import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLearning } from '../context/LearningContext';
import { useNavigation } from '../context/NavigationContext';
import { activeCourses } from '../data/courses';
import { BADGE_DEFINITIONS, BadgeDefinition } from '../data/badges';
import { TechBadge } from '../components/TechBadge';
import { BadgeCard } from '../components/badges/BadgeCard';
import { BadgeDetailModal } from '../components/badges/BadgeDetailModal';
import { DashboardWidget } from '../components/DashboardWidget';
import { StreakTracker } from '../components/StreakTracker';
import { SavedForLaterSection } from '../components/bookmarks/SavedForLaterSection';
import {
  User,
  Award,
  Flame,
  Zap,
  BookOpen,
  Rocket,
  Calendar,
  Sparkles,
  Trophy,
  Target,
  Search,
  CheckCircle2,
  Lock,
  ArrowRight,
  LogIn,
  Bookmark
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user, openAuthModal, isAuthenticated } = useAuth();
  const {
    progress,
    totalLessonsCompleted,
    totalProjectsCompleted,
    totalChallengesCompleted,
    totalQuizzesPassed,
    unlockedBadges,
    unlockedBadgesCount,
    totalBadgesCount,
    getCourseProgressPercentage,
    totalBookmarksCount
  } = useLearning();
  const { navigateTo } = useNavigation();

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'lessons' | 'challenges' | 'projects' | 'milestones' | 'unlocked' | 'locked'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBadge, setSelectedBadge] = useState<BadgeDefinition | null>(null);

  // Compute status for all badges
  const badgeStatuses = useMemo(() => {
    return BADGE_DEFINITIONS.map(badge => {
      const isExplicitlyUnlocked = !!unlockedBadges[badge.id];
      const prog = badge.getProgress(progress);
      const unlocked = isExplicitlyUnlocked || prog.unlocked;
      const unlockedAt = unlockedBadges[badge.id] || (unlocked ? progress.lastActiveDate : undefined);
      return {
        badge,
        unlocked,
        unlockedAt,
        currentProgress: prog.current,
        maxProgress: prog.max,
        percentage: Math.min(100, Math.round((prog.current / prog.max) * 100))
      };
    });
  }, [progress, unlockedBadges]);

  // Filtered badges
  const filteredBadges = useMemo(() => {
    return badgeStatuses.filter(item => {
      // Category filter
      if (selectedCategory === 'unlocked' && !item.unlocked) return false;
      if (selectedCategory === 'locked' && item.unlocked) return false;
      if (selectedCategory !== 'all' && selectedCategory !== 'unlocked' && selectedCategory !== 'locked') {
        if (item.badge.category !== selectedCategory) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.badge.name.toLowerCase().includes(q);
        const matchDesc = item.badge.description.toLowerCase().includes(q);
        const matchRarity = item.badge.rarity.toLowerCase().includes(q);
        return matchName || matchDesc || matchRarity;
      }

      return true;
    });
  }, [badgeStatuses, selectedCategory, searchQuery]);

  // Badges closest to being unlocked
  const nextAchievableBadges = useMemo(() => {
    return badgeStatuses
      .filter(item => !item.unlocked && item.percentage > 0)
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);
  }, [badgeStatuses]);

  // Rarity Counts
  const rarityCounts = useMemo(() => {
    const counts = { Diamond: 0, Gold: 0, Silver: 0, Bronze: 0 };
    badgeStatuses.forEach(item => {
      if (item.unlocked) {
        counts[item.badge.rarity] = (counts[item.badge.rarity] || 0) + 1;
      }
    });
    return counts;
  }, [badgeStatuses]);

  const selectedBadgeStatus = useMemo(() => {
    if (!selectedBadge) return null;
    return badgeStatuses.find(b => b.badge.id === selectedBadge.id) || null;
  }, [selectedBadge, badgeStatuses]);

  // Calculate total XP earned solely from unlocked badges
  const totalBadgeXpEarned = useMemo(() => {
    return badgeStatuses
      .filter(b => b.unlocked)
      .reduce((sum, b) => sum + b.badge.xpReward, 0);
  }, [badgeStatuses]);

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* 1. GUEST NOTICE BANNER (When not authenticated) */}
      {!isAuthenticated && (
        <div className="rounded-2xl bg-gradient-to-r from-[#04AA6D]/15 via-emerald-500/10 to-[#141d2e] border border-[#04AA6D]/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#04AA6D]/20 text-[#04AA6D] border border-[#04AA6D]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                Guest Learner Mode — Progress Saved Locally
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Your earned badges, challenges, and lesson completions are saved on this browser. Sign in anytime to sync your achievements across devices.
              </p>
            </div>
          </div>
          <button
            onClick={() => openAuthModal('signin')}
            className="px-4 py-2 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold text-xs flex items-center space-x-1.5 transition shrink-0 shadow-sm cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In to Sync</span>
          </button>
        </div>
      )}

      {/* 2. USER PROFILE HEADER (When authenticated or Guest) */}
      <div className="rounded-3xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left shadow-xl transition-colors">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gray-100 dark:bg-[#141d2e] border-2 border-[#04AA6D] flex items-center justify-center text-3xl font-extrabold text-[#04AA6D] shadow-lg shadow-[#04AA6D]/20 shrink-0 overflow-hidden">
          {isAuthenticated && user?.avatarUrl ? (
            <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
          ) : isAuthenticated && user?.name ? (
            user.name.charAt(0).toUpperCase()
          ) : (
            <User className="w-10 h-10 text-[#04AA6D]" />
          )}
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl font-black text-gray-900 dark:text-white">
              {isAuthenticated && user ? user.name : 'Student Learner'}
            </h1>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] dark:text-emerald-400 border border-[#04AA6D]/30 uppercase font-bold">
              {isAuthenticated ? 'Verified Student' : 'Guest Scholar'}
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {isAuthenticated && user ? user.email : 'Local Browser Profile • Ready to build great software'}
          </p>
          <div className="flex items-center justify-center sm:justify-start space-x-4 text-xs text-gray-500 pt-1">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {isAuthenticated && user
                  ? `Member since ${new Date(user.createdAt || Date.now()).toLocaleDateString()}`
                  : 'Active this session'}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-[#04AA6D] dark:text-emerald-400 font-bold">
              <Trophy className="w-3.5 h-3.5" />
              <span>{unlockedBadgesCount} Badges Earned</span>
            </div>
            <a
              href="#saved-for-later-section"
              className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>{totalBookmarksCount} Saved for Later</span>
            </a>
          </div>
        </div>

        {isAuthenticated && (
          <button
            onClick={() => navigateTo('settings')}
            className="px-4 py-2 bg-gray-100 dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] hover:border-gray-500 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-xl transition cursor-pointer"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* 3. GAMIFIED STAT CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Badges Earned */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Badges</span>
            <Trophy className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            {unlockedBadgesCount} <span className="text-sm font-normal text-gray-500">/ {totalBadgesCount}</span>
          </div>
          <span className="text-[11px] font-bold text-[#04AA6D] dark:text-emerald-400">
            {Math.round((unlockedBadgesCount / totalBadgesCount) * 100)}% Complete
          </span>
        </div>

        {/* Total XP */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Total XP</span>
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">{progress.xp}</div>
          <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
            +{totalBadgeXpEarned} from Badges
          </span>
        </div>

        {/* Day Streak */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Day Streak</span>
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">{progress.streakDays} Days</div>
          <span className="text-[11px] text-orange-600 dark:text-orange-400 font-semibold">Active Streak</span>
        </div>

        {/* Lessons Completed */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Lessons</span>
            <BookOpen className="w-4 h-4 text-[#04AA6D]" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">{totalLessonsCompleted}</div>
          <span className="text-[11px] text-gray-500">Structured lessons</span>
        </div>

        {/* Challenges & Projects Shipped */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] col-span-2 lg:col-span-1 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Challenges & Projects</span>
            <Rocket className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            {totalChallengesCompleted} <span className="text-sm font-normal text-gray-500">ch</span> • {totalProjectsCompleted} <span className="text-sm font-normal text-gray-500">proj</span>
          </div>
          <span className="text-[11px] text-sky-600 dark:text-sky-400 font-semibold">
            {totalQuizzesPassed} Quizzes Passed
          </span>
        </div>
      </div>

      {/* 4. DAILY CODING STREAK TRACKER */}
      <StreakTracker />

      {/* 5. LEARNING VELOCITY & 7-DAY PROGRESS RECHARTS WIDGET */}
      <DashboardWidget />

      {/* 5. NEXT ACHIEVABLE BADGES (Motivation Strip) */}
      {nextAchievableBadges.length > 0 && (
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent border border-amber-500/30 p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider">
                Almost Unlocked — Keep Going!
              </h3>
            </div>
            <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold hidden sm:inline">
              Complete these to level up your dashboard
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {nextAchievableBadges.map(item => (
              <div
                key={item.badge.id}
                onClick={() => setSelectedBadge(item.badge)}
                className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#0c121e]/80 border border-gray-200 dark:border-[#1e293b] hover:border-amber-500/60 cursor-pointer transition space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 dark:text-white truncate">
                    {item.badge.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">
                    +{item.badge.xpReward} XP
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-[#162032] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>{item.currentProgress} of {item.maxProgress}</span>
                  <span>{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. SAVED FOR LATER (BOOKMARKED MODULES) */}
      <SavedForLaterSection />

      {/* 6. BADGES & ACHIEVEMENTS SHOWCASE HUB */}
      <div className="rounded-3xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-8 space-y-6 shadow-xl transition-colors">
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-[#1e293b]">
          <div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-black text-gray-900 dark:text-white">
                Badges & Achievements Showcase
              </h2>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Earn distinctive badges by completing structured lessons, solving interactive challenges, and shipping portfolio projects.
            </p>
          </div>

          {/* Rarity Distribution Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-300 dark:border-cyan-800/40 text-[11px]">
              💎 Diamond: {rarityCounts.Diamond}
            </span>
            <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/40 px-2.5 py-1 rounded-full border border-yellow-300 dark:border-yellow-800/40 text-[11px]">
              🥇 Gold: {rarityCounts.Gold}
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-300 dark:border-slate-700 text-[11px]">
              🥈 Silver: {rarityCounts.Silver}
            </span>
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-300 dark:border-amber-800/40 text-[11px]">
              🥉 Bronze: {rarityCounts.Bronze}
            </span>
          </div>
        </div>

        {/* Filter Pills and Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            {[
              { key: 'all', label: `All (${badgeStatuses.length})` },
              { key: 'lessons', label: 'Lessons' },
              { key: 'challenges', label: 'Challenges' },
              { key: 'projects', label: 'Projects' },
              { key: 'milestones', label: 'Milestones' },
              { key: 'unlocked', label: `Unlocked (${unlockedBadgesCount})` },
              { key: 'locked', label: 'Locked' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key as any)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === tab.key
                    ? 'bg-[#04AA6D] text-white shadow-xs'
                    : 'bg-gray-100 dark:bg-[#141d2e] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-[#1e293b]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative shrink-0 w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search badges..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-gray-50 dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] text-xs text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#04AA6D] transition"
            />
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Badges Grid */}
        {filteredBadges.length === 0 ? (
          <div className="text-center py-12 space-y-3">
            <Award className="w-10 h-10 text-gray-400 mx-auto" />
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              No badges match the selected filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#04AA6D] font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBadges.map(item => (
              <BadgeCard
                key={item.badge.id}
                badge={item.badge}
                unlocked={item.unlocked}
                unlockedAt={item.unlockedAt}
                currentProgress={item.currentProgress}
                maxProgress={item.maxProgress}
                onClick={() => setSelectedBadge(item.badge)}
              />
            ))}
          </div>
        )}
      </div>

      {/* 6. LEARNING TRACKS PROGRESS */}
      <div className="rounded-3xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-8 space-y-6 shadow-xl transition-colors">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-[#04AA6D]" />
            <span>Development Tracks Progress</span>
          </h3>
          <button
            onClick={() => navigateTo('courses')}
            className="text-xs text-[#04AA6D] dark:text-emerald-400 font-bold hover:underline flex items-center space-x-1"
          >
            <span>Explore All Tracks</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeCourses.map(course => {
            const pct = getCourseProgressPercentage(course.slug);
            return (
              <div
                key={course.id}
                onClick={() => navigateTo('course-detail', { courseSlug: course.slug })}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-[#080d14] border border-gray-200 dark:border-[#1e293b] hover:border-[#04AA6D]/50 cursor-pointer transition space-y-3 group shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <TechBadge type={course.badgeType} size="sm" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#04AA6D] transition">
                        {course.title}
                      </h4>
                      <span className="text-[10px] text-gray-500 font-mono">
                        {course.lessonsCount} lessons • {course.estimatedHours}h
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#04AA6D] dark:text-emerald-400">
                    {pct}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-[#1e293b] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#04AA6D] dark:bg-emerald-500 h-full transition-all duration-500 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1">
                  <span>{pct === 100 ? 'Completed' : pct > 0 ? 'In Progress' : 'Not Started'}</span>
                  <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:underline flex items-center gap-1">
                    Continue →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 7. BADGE DETAIL MODAL */}
      <BadgeDetailModal
        badge={selectedBadge}
        isOpen={!!selectedBadge}
        onClose={() => setSelectedBadge(null)}
        unlocked={selectedBadgeStatus?.unlocked || false}
        unlockedAt={selectedBadgeStatus?.unlockedAt}
        currentProgress={selectedBadgeStatus?.currentProgress || 0}
        maxProgress={selectedBadgeStatus?.maxProgress || 1}
      />
    </div>
  );
};
