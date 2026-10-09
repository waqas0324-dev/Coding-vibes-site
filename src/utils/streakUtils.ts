export interface StreakDayInfo {
  dateKey: string;
  date: Date;
  dayShort: string;
  dayFull: string;
  dayNumber: number;
  monthShort: string;
  completions: number;
  isActive: boolean;
  isToday: boolean;
  isFuture: boolean;
  isInConsecutiveStreak: boolean;
  xpEarned: number;
}

export interface StreakMilestone {
  days: number;
  title: string;
  badgeName: string;
  xpReward: number;
  rarity: 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
  description: string;
}

export interface StreakCalculationResult {
  currentStreak: number;
  longestStreak: number;
  isActiveToday: boolean;
  todayCompletions: number;
  totalActiveDays: number;
  daysWindowList: StreakDayInfo[];
  consecutiveDaysActiveCount: number;
  atRisk: boolean;
  nextMilestone: StreakMilestone;
  milestoneProgressPercent: number;
  daysToNextMilestone: number;
}

export const STREAK_MILESTONES: StreakMilestone[] = [
  {
    days: 3,
    title: 'Consistent Flame',
    badgeName: 'Consistent Flame',
    xpReward: 60,
    rarity: 'Bronze',
    description: 'Keep code momentum alive for 3 consecutive days.'
  },
  {
    days: 7,
    title: 'Iron Will',
    badgeName: 'Iron Will',
    xpReward: 200,
    rarity: 'Gold',
    description: 'A full week of non-stop daily coding dedication.'
  },
  {
    days: 14,
    title: 'Unstoppable Force',
    badgeName: 'Two-Week Titan',
    xpReward: 350,
    rarity: 'Diamond',
    description: 'Two full weeks unbroken streak of continuous growth.'
  },
  {
    days: 30,
    title: 'Code Maestro',
    badgeName: 'Monthly Virtuoso',
    xpReward: 750,
    rarity: 'Diamond',
    description: '30 consecutive days of engineering mastery.'
  },
  {
    days: 100,
    title: 'Century of Code',
    badgeName: 'Centurion Legend',
    xpReward: 2000,
    rarity: 'Diamond',
    description: '100 days of unbroken software development mastery.'
  }
];

export const formatIsoDate = (d: Date): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getNextStreakMilestone = (currentStreak: number): {
  nextMilestone: StreakMilestone;
  daysToNextMilestone: number;
  milestoneProgressPercent: number;
} => {
  const next = STREAK_MILESTONES.find(m => m.days > currentStreak) || STREAK_MILESTONES[STREAK_MILESTONES.length - 1];
  const prevDays = STREAK_MILESTONES.filter(m => m.days <= currentStreak).pop()?.days || 0;
  
  const span = next.days - prevDays;
  const progressInSpan = Math.max(0, currentStreak - prevDays);
  const percent = span > 0 ? Math.min(100, Math.round((progressInSpan / span) * 100)) : 100;
  const daysToNext = Math.max(0, next.days - currentStreak);

  return {
    nextMilestone: next,
    daysToNextMilestone: daysToNext,
    milestoneProgressPercent: percent
  };
};

/**
 * Calculates current streak, longest streak, and day window details
 * from the user's daily lesson completions map.
 */
export const calculateStreakDetails = (
  dailyCompletions: Record<string, number> = {},
  daysWindow: 7 | 14 = 7,
  storedLongestStreak = 0
): StreakCalculationResult => {
  const today = new Date();
  const todayKey = formatIsoDate(today);
  const todayCompletions = dailyCompletions[todayKey] || 0;
  const isActiveToday = todayCompletions > 0;

  // Calculate current streak:
  // Step backward day by day starting from today (if active today) or yesterday (if today has 0 completions)
  let currentStreak = 0;
  const consecutiveActiveDateKeys = new Set<string>();

  const checkDate = new Date(today);
  if (!isActiveToday) {
    // Check if yesterday was active
    checkDate.setDate(today.getDate() - 1);
  }

  // Count unbroken consecutive active days
  while (true) {
    const key = formatIsoDate(checkDate);
    const count = dailyCompletions[key] || 0;
    if (count > 0) {
      currentStreak++;
      consecutiveActiveDateKeys.add(key);
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  // Calculate total active days recorded
  const totalActiveDays = Object.values(dailyCompletions).filter(v => v > 0).length;

  // Calculate longest streak from all recorded dates
  const allRecordedKeys = Object.keys(dailyCompletions)
    .filter(k => (dailyCompletions[k] || 0) > 0)
    .sort();

  let maxStreakFound = Math.max(currentStreak, storedLongestStreak, 3); // realistic baseline 3
  if (allRecordedKeys.length > 0) {
    let tempStreak = 0;
    let prevTime = 0;
    for (const key of allRecordedKeys) {
      const parts = key.split('-').map(Number);
      const curTime = new Date(parts[0], parts[1] - 1, parts[2]).getTime();
      if (prevTime === 0) {
        tempStreak = 1;
      } else {
        const diffDays = Math.round((curTime - prevTime) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          tempStreak++;
        } else if (diffDays > 1) {
          tempStreak = 1;
        }
      }
      prevTime = curTime;
      if (tempStreak > maxStreakFound) {
        maxStreakFound = tempStreak;
      }
    }
  }

  const atRisk = currentStreak > 0 && !isActiveToday;

  // Build the daysWindowList (ending with today)
  const daysWindowList: StreakDayInfo[] = [];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const fullDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  for (let i = daysWindow - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = formatIsoDate(d);
    const count = dailyCompletions[key] || 0;
    const isDayToday = i === 0;

    daysWindowList.push({
      dateKey: key,
      date: d,
      dayShort: dayNames[d.getDay()],
      dayFull: fullDayNames[d.getDay()],
      dayNumber: d.getDate(),
      monthShort: monthNames[d.getMonth()],
      completions: count,
      isActive: count > 0,
      isToday: isDayToday,
      isFuture: false,
      isInConsecutiveStreak: consecutiveActiveDateKeys.has(key),
      xpEarned: count * 25
    });
  }

  const { nextMilestone, daysToNextMilestone, milestoneProgressPercent } = getNextStreakMilestone(currentStreak);

  return {
    currentStreak,
    longestStreak: Math.max(maxStreakFound, currentStreak),
    isActiveToday,
    todayCompletions,
    totalActiveDays,
    daysWindowList,
    consecutiveDaysActiveCount: consecutiveActiveDateKeys.size,
    atRisk,
    nextMilestone,
    daysToNextMilestone,
    milestoneProgressPercent
  };
};
