import React, { useState, useMemo } from 'react';
import { useLearning } from '../context/LearningContext';
import { useNavigation } from '../context/NavigationContext';
import {
  calculateStreakDetails,
  StreakDayInfo
} from '../utils/streakUtils';
import {
  Flame,
  Zap,
  Trophy,
  Target,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  Plus,
  TrendingUp,
  ShieldCheck,
  Info
} from 'lucide-react';

interface StreakTrackerProps {
  className?: string;
  variant?: 'card' | 'compact' | 'hero';
  showMilestones?: boolean;
  showAction?: boolean;
}

export const StreakTracker: React.FC<StreakTrackerProps> = ({
  className = '',
  variant = 'card',
  showMilestones = true,
  showAction = true
}) => {
  const { progress, logSimulatedCompletion } = useLearning();
  const { navigateTo } = useNavigation();

  const [daysRange, setDaysRange] = useState<7 | 14>(7);
  const [hoveredDay, setHoveredDay] = useState<StreakDayInfo | null>(null);
  const [justLogged, setJustLogged] = useState(false);

  // Compute streak details and consecutive days active
  const streakDetails = useMemo(() => {
    return calculateStreakDetails(
      progress.dailyLessonCompletions || {},
      daysRange,
      progress.longestStreak || progress.streakDays || 0
    );
  }, [progress.dailyLessonCompletions, daysRange, progress.longestStreak, progress.streakDays]);

  const {
    currentStreak,
    longestStreak,
    isActiveToday,
    todayCompletions,
    totalActiveDays,
    daysWindowList,
    atRisk,
    nextMilestone,
    milestoneProgressPercent,
    daysToNextMilestone
  } = streakDetails;

  const dailyGoal = progress.dailyGoal || 3;

  const handleQuickLog = () => {
    logSimulatedCompletion();
    setJustLogged(true);
    setTimeout(() => setJustLogged(false), 2200);
  };

  // Compact variant for narrow columns or navigation headers
  if (variant === 'compact') {
    return (
      <div
        id="streak-tracker-compact"
        className={`p-4 rounded-2xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] shadow-sm flex items-center justify-between gap-4 ${className}`}
      >
        <div className="flex items-center space-x-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center relative ${
            isActiveToday
              ? 'bg-gradient-to-br from-orange-500/20 to-amber-500/30 text-orange-500 border border-orange-500/40 shadow-xs'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-400 border border-gray-300 dark:border-gray-700'
          }`}>
            <Flame className={`w-6 h-6 ${isActiveToday ? 'fill-orange-500 animate-pulse' : ''}`} />
            {currentStreak > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-black flex items-center justify-center">
                {currentStreak}
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-sm font-black text-gray-900 dark:text-white">
                {currentStreak} Day Streak
              </span>
              {isActiveToday ? (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              ) : (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  Pending
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {isActiveToday
                ? 'Streak secured for today!'
                : 'Complete a lesson to extend streak'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          {daysWindowList.slice(-5).map((d) => (
            <div
              key={d.dateKey}
              title={`${d.dayShort}: ${d.completions} lessons`}
              className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                d.isActive
                  ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30'
                  : d.isToday
                  ? 'border border-dashed border-amber-500/60 text-amber-500'
                  : 'bg-gray-100 dark:bg-gray-800/60 text-gray-400'
              }`}
            >
              {d.dayShort.charAt(0)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      id="streak-tracker-widget"
      className={`rounded-3xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-7 shadow-xl transition-all duration-200 relative overflow-hidden ${className}`}
    >
      {/* Ambient background glow for active streaks */}
      {currentStreak > 0 && (
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      )}

      {/* 1. TOP HEADER & STREAK STATUS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-100 dark:border-[#1e293b] relative z-10">
        <div className="flex items-start sm:items-center space-x-3.5">
          {/* Flame Icon with burning aura */}
          <div className="relative">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 ${
              isActiveToday
                ? 'bg-gradient-to-tr from-amber-500 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                : atRisk
                ? 'bg-gradient-to-tr from-amber-500/20 to-orange-500/20 text-orange-500 border-2 border-dashed border-orange-500/50'
                : 'bg-gray-100 dark:bg-[#141d2e] text-gray-400 border border-gray-200 dark:border-[#1e293b]'
            }`}>
              <Flame
                className={`w-8 h-8 transition-all ${
                  isActiveToday
                    ? 'fill-white animate-bounce'
                    : atRisk
                    ? 'fill-orange-500/50 animate-pulse'
                    : 'stroke-gray-400'
                }`}
              />
            </div>
            {isActiveToday && (
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-black border-2 border-white dark:border-[#0d131f] flex items-center gap-0.5 shadow-xs">
                <CheckCircle2 className="w-2.5 h-2.5" />
              </span>
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                {currentStreak > 0 ? (
                  <>
                    <span className="text-orange-500">{currentStreak} Day</span> Coding Streak
                  </>
                ) : (
                  'Start Your Coding Streak'
                )}
              </h2>

              {/* Status Pill */}
              {isActiveToday ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Streak Active Today
                </span>
              ) : atRisk ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold animate-pulse">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  Action Required Today
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-[#141d2e] text-gray-500 text-xs font-bold border border-gray-200 dark:border-gray-800">
                  <Flame className="w-3.5 h-3.5" />
                  Ready to Start
                </span>
              )}
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {isActiveToday
                ? `Fantastic momentum! You completed ${todayCompletions} ${todayCompletions === 1 ? 'lesson' : 'lessons'} today. Return tomorrow to push to Day ${currentStreak + 1}!`
                : atRisk
                ? `Your ${currentStreak}-day streak is pending! Complete at least 1 lesson today to keep your unbroken streak alive.`
                : 'Code every day to form unstoppable developer muscle memory and unlock exclusive streak badges.'}
            </p>
          </div>
        </div>

        {/* Quick controls: Range toggle & Log action */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
          {/* 7 vs 14 Day Toggle */}
          <div className="inline-flex items-center p-0.5 rounded-xl bg-gray-100 dark:bg-[#141d2e] border border-gray-200 dark:border-[#1e293b] text-xs">
            <button
              onClick={() => setDaysRange(7)}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                daysRange === 7
                  ? 'bg-white dark:bg-orange-500 text-gray-900 dark:text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setDaysRange(14)}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                daysRange === 14
                  ? 'bg-white dark:bg-orange-500 text-gray-900 dark:text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              14 Days
            </button>
          </div>

          {/* Quick Log Action */}
          {showAction && (
            <button
              onClick={handleQuickLog}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 text-white font-bold text-xs transition shadow-md shadow-orange-500/20 cursor-pointer"
              title="Record a lesson completion for today to extend your streak"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{justLogged ? 'Streak Extended! 🔥' : '+ Extend Streak'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. STATISTIC HIGHLIGHT CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5 relative z-10">
        {/* Current Streak */}
        <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/80 dark:border-[#1e293b] space-y-1">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
            <span>Current Streak</span>
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">
            {currentStreak} <span className="text-xs font-normal text-gray-500">days</span>
          </div>
          <div className="text-[11px] font-semibold text-orange-600 dark:text-orange-400">
            {isActiveToday ? 'Secured today' : 'Needs 1 lesson'}
          </div>
        </div>

        {/* Longest Record */}
        <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/80 dark:border-[#1e293b] space-y-1">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
            <span>Longest Streak</span>
            <Trophy className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">
            {longestStreak} <span className="text-xs font-normal text-gray-500">days</span>
          </div>
          <div className="text-[11px] text-gray-500">
            Personal best record
          </div>
        </div>

        {/* Total Active Days */}
        <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/80 dark:border-[#1e293b] space-y-1">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
            <span>Total Active Days</span>
            <Calendar className="w-4 h-4 text-[#04AA6D]" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">
            {totalActiveDays} <span className="text-xs font-normal text-gray-500">days</span>
          </div>
          <div className="text-[11px] font-semibold text-[#04AA6D]">
            Lifelong coding habit
          </div>
        </div>

        {/* Today's Daily Target */}
        <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/80 dark:border-[#1e293b] space-y-1">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
            <span>Today's Target</span>
            <Target className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">
            {todayCompletions} <span className="text-xs font-normal text-gray-500">/ {dailyGoal}</span>
          </div>
          <div className="text-[11px] font-semibold text-sky-600 dark:text-sky-400">
            {todayCompletions >= dailyGoal ? 'Goal achieved! 🎉' : `${dailyGoal - todayCompletions} lessons to goal`}
          </div>
        </div>
      </div>

      {/* 3. VISUAL INDICATOR FOR CONSECUTIVE DAYS ACTIVE (Streak Chain / Timeline) */}
      <div className="my-6 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-800 dark:text-gray-200">
              Consecutive Days Active Track ({daysRange} Days)
            </h3>
          </div>

          <div className="flex items-center space-x-3 text-[11px] text-gray-500">
            <span className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white text-[8px] font-bold">
                🔥
              </span>
              <span>Consecutive Active</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-dashed border-amber-500"></span>
              <span>Today (Pending)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></span>
              <span>Rest Day</span>
            </span>
          </div>
        </div>

        {/* Consecutive Days Rail / Chain */}
        <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-[#141d2e]/70 border border-gray-200/90 dark:border-[#1e293b]">
          <div className="grid grid-flow-col auto-cols-fr gap-2 relative">
            {daysWindowList.map((day, idx) => {
              const prevDay = idx > 0 ? daysWindowList[idx - 1] : null;
              const nextDay = idx < daysWindowList.length - 1 ? daysWindowList[idx + 1] : null;

              // Connected streak line logic: link if both current and next day are active
              const connectsToNext = nextDay && day.isActive && nextDay.isActive;
              const connectsFromPrev = prevDay && prevDay.isActive && day.isActive;

              return (
                <div
                  key={day.dateKey}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  className="flex flex-col items-center relative group cursor-pointer"
                >
                  {/* Connected Horizontal Flame Bar between consecutive active nodes */}
                  {idx < daysWindowList.length - 1 && (
                    <div
                      className={`absolute top-8 left-1/2 w-full h-1 -translate-y-1/2 z-0 transition-colors ${
                        connectsToNext
                          ? 'bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 shadow-xs shadow-orange-500/30'
                          : 'bg-gray-200 dark:bg-gray-800'
                      }`}
                    />
                  )}

                  {/* Day Name Label */}
                  <span className={`text-[11px] font-bold mb-1.5 truncate ${
                    day.isToday
                      ? 'text-orange-600 dark:text-orange-400 font-extrabold'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {day.isToday ? 'Today' : day.dayShort}
                  </span>

                  {/* Main Node Circle */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex flex-col items-center justify-center relative z-10 transition-all duration-200 ${
                      day.isActive && day.isInConsecutiveStreak
                        ? 'bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-400/40 scale-105'
                        : day.isActive
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500/40'
                        : day.isToday
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-2 border-dashed border-amber-500/80 animate-pulse'
                        : 'bg-white dark:bg-[#0d131f] text-gray-400 border border-gray-200 dark:border-[#1e293b] hover:border-gray-400'
                    }`}
                  >
                    {day.isActive ? (
                      <>
                        <Flame className="w-5 h-5 fill-white text-white drop-shadow-xs" />
                        <span className="text-[9px] font-mono font-black -mt-0.5 leading-none">
                          {day.completions}
                        </span>
                      </>
                    ) : day.isToday ? (
                      <>
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span className="text-[8px] font-bold uppercase tracking-tighter text-amber-600 dark:text-amber-400">
                          Pending
                        </span>
                      </>
                    ) : (
                      <span className="text-xs font-mono text-gray-400 font-semibold">
                        {day.dayNumber}
                      </span>
                    )}

                    {/* Today indicator pip */}
                    {day.isToday && (
                      <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-white dark:ring-[#0d131f]" />
                    )}
                  </div>

                  {/* Date & XP sub-label */}
                  <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 mt-2">
                    {day.monthShort} {day.dayNumber}
                  </span>
                  {day.xpEarned > 0 && (
                    <span className="text-[9px] font-bold font-mono text-orange-500 dark:text-orange-400 mt-0.5">
                      +{day.xpEarned} XP
                    </span>
                  )}

                  {/* Day Detail Hover Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 absolute bottom-full mb-2 bg-gray-900/95 text-white text-[11px] p-2.5 rounded-xl shadow-xl backdrop-blur-sm border border-gray-700 min-w-[150px] z-30 space-y-1">
                    <div className="font-bold flex items-center justify-between border-b border-gray-800 pb-1">
                      <span>{day.dayFull}</span>
                      <span className="text-gray-400 text-[10px]">{day.dateKey}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                      <span>Completions:</span>
                      <span className="font-mono font-bold text-orange-400">
                        {day.completions} {day.completions === 1 ? 'lesson' : 'lessons'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                      <span>XP Earned:</span>
                      <span className="font-mono font-bold text-yellow-400">+{day.xpEarned} XP</span>
                    </div>
                    <div className="text-[10px] pt-1 border-t border-gray-800 text-gray-400">
                      {day.isInConsecutiveStreak ? (
                        <span className="text-orange-400 font-bold flex items-center gap-1">
                          🔥 Part of active streak!
                        </span>
                      ) : day.isActive ? (
                        <span className="text-emerald-400">Active session</span>
                      ) : day.isToday ? (
                        <span className="text-amber-400">Click '+ Extend Streak' to log</span>
                      ) : (
                        <span>Rest day</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. MILESTONE PROGRESSION BAR */}
      {showMilestones && (
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 relative z-10 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-500 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">
                  Next Milestone: {nextMilestone.days}-Day {nextMilestone.title}
                </span>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {nextMilestone.description}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-mono font-bold text-orange-500">
                +{nextMilestone.xpReward} XP Reward
              </span>
              <div className="text-[10px] text-gray-500">
                {daysToNextMilestone === 0
                  ? 'Milestone Reached! 🏆'
                  : `${daysToNextMilestone} ${daysToNextMilestone === 1 ? 'day' : 'days'} remaining`}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 shadow-xs"
              style={{ width: `${milestoneProgressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
            <span>Current: {currentStreak} days</span>
            <span className="font-bold text-orange-600 dark:text-orange-400">{milestoneProgressPercent}% Complete</span>
            <span>Target: {nextMilestone.days} days</span>
          </div>
        </div>
      )}

      {/* 5. FOOTER & CALL TO ACTION */}
      <div className="mt-5 pt-4 border-t border-gray-100 dark:border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs relative z-10">
        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <Info className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span>
            Streak updates automatically when you finish lessons, solve challenges, or take quizzes.
          </span>
        </div>

        <button
          onClick={() => navigateTo('courses')}
          className="flex items-center space-x-1.5 font-bold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition cursor-pointer shrink-0"
        >
          <span>Continue Learning</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
