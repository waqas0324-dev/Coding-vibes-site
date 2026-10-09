import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  Cell
} from 'recharts';
import { useLearning } from '../context/LearningContext';
import { useNavigation } from '../context/NavigationContext';
import {
  BookOpen,
  Flame,
  Zap,
  TrendingUp,
  Award,
  Target,
  BarChart2,
  Activity,
  Plus,
  Calendar,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface DayDataPoint {
  dateKey: string;
  dayShort: string;
  dayFull: string;
  fullDate: string;
  completedLessons: number;
  goal: number;
  xpEarned: number;
  cumulative: number;
  isToday: boolean;
}

interface DashboardWidgetProps {
  className?: string;
  showHeaderAction?: boolean;
}

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({
  className = '',
  showHeaderAction = true
}) => {
  const { progress, setDailyGoal, logSimulatedCompletion } = useLearning();
  const { navigateTo } = useNavigation();

  // Chart view mode
  const [chartType, setChartType] = useState<'bar' | 'area' | 'cumulative'>('bar');
  const [timeRange, setTimeRange] = useState<7 | 14>(7);
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [justLogged, setJustLogged] = useState(false);

  const dailyGoal = progress.dailyGoal || 3;

  // Build 7 or 14 days of progress data
  const chartData: DayDataPoint[] = useMemo(() => {
    const daysCount = timeRange;
    const result: DayDataPoint[] = [];
    const today = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fullDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const completionsMap = progress.dailyLessonCompletions || {};

    let runningTotal = 0;

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateKey = `${year}-${month}-${day}`;

      const isToday = i === 0;
      const count = completionsMap[dateKey] || 0;
      runningTotal += count;

      result.push({
        dateKey,
        dayShort: isToday ? 'Today' : dayNames[d.getDay()],
        dayFull: fullDayNames[d.getDay()],
        fullDate: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
        completedLessons: count,
        goal: dailyGoal,
        xpEarned: count * 25,
        cumulative: runningTotal,
        isToday
      });
    }

    return result;
  }, [timeRange, progress.dailyLessonCompletions, dailyGoal]);

  // Aggregate stats over selected period
  const totalLessonsInPeriod = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.completedLessons, 0);
  }, [chartData]);

  const dailyAverage = useMemo(() => {
    return (totalLessonsInPeriod / chartData.length).toFixed(1);
  }, [totalLessonsInPeriod, chartData.length]);

  const todayData = useMemo(() => {
    return chartData.find(d => d.isToday) || chartData[chartData.length - 1];
  }, [chartData]);

  const totalGoalForPeriod = dailyGoal * chartData.length;
  const goalCompletionRate = Math.min(100, Math.round((totalLessonsInPeriod / totalGoalForPeriod) * 100));

  const bestDay = useMemo(() => {
    return chartData.reduce(
      (best, curr) => (curr.completedLessons > best.completedLessons ? curr : best),
      chartData[0]
    );
  }, [chartData]);

  const daysGoalMetCount = useMemo(() => {
    return chartData.filter(d => d.completedLessons >= dailyGoal).length;
  }, [chartData, dailyGoal]);

  // Handler for quick log action
  const handleQuickLog = () => {
    logSimulatedCompletion();
    setJustLogged(true);
    setTimeout(() => setJustLogged(false), 2000);
  };

  // Custom Tooltip component for Recharts
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as DayDataPoint;
      const isGoalMet = data.completedLessons >= data.goal;

      return (
        <div className="bg-gray-900/95 text-white border border-gray-700/80 rounded-xl p-3 shadow-2xl backdrop-blur-md text-xs space-y-2 min-w-[180px] pointer-events-none">
          <div className="flex items-center justify-between border-b border-gray-800 pb-1.5">
            <span className="font-bold text-gray-200">
              {data.dayFull} {data.isToday ? '(Today)' : ''}
            </span>
            <span className="text-[10px] font-mono text-gray-400">{data.fullDate}</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#04AA6D]" />
                Completed:
              </span>
              <span className="font-extrabold text-[#04AA6D] font-mono">
                {data.completedLessons} {data.completedLessons === 1 ? 'lesson' : 'lessons'}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                Target Goal:
              </span>
              <span className="font-mono text-gray-300">{data.goal} lessons</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                XP Earned:
              </span>
              <span className="font-mono font-bold text-yellow-400">+{data.xpEarned} XP</span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-gray-800 flex items-center justify-between text-[11px]">
            <span className="text-gray-400">Daily Status:</span>
            {isGoalMet ? (
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Target Met
              </span>
            ) : (
              <span className="text-amber-400 font-medium">
                {data.goal - data.completedLessons} more to target
              </span>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      id="user-learning-progress-widget"
      className={`rounded-3xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-7 shadow-xl transition-all duration-200 ${className}`}
    >
      {/* 1. WIDGET TOP HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-gray-100 dark:border-[#1e293b]">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#04AA6D]/15 text-[#04AA6D] border border-[#04AA6D]/30 flex items-center justify-center shrink-0">
              <Activity className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                Learning Progress & Velocity
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] dark:text-emerald-400 border border-[#04AA6D]/30 font-bold uppercase">
                  Last {timeRange} Days
                </span>
              </h2>
            </div>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Visualizing your daily lesson completions, learning momentum, and daily targets.
          </p>
        </div>

        {/* Action Controls & View Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {/* 7 vs 14 Day Toggle */}
          <div className="inline-flex items-center p-0.5 rounded-xl bg-gray-100 dark:bg-[#141d2e] border border-gray-200 dark:border-[#1e293b] text-xs">
            <button
              onClick={() => setTimeRange(7)}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                timeRange === 7
                  ? 'bg-white dark:bg-[#04AA6D] text-gray-900 dark:text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setTimeRange(14)}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                timeRange === 14
                  ? 'bg-white dark:bg-[#04AA6D] text-gray-900 dark:text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              14 Days
            </button>
          </div>

          {/* Chart Type Selector */}
          <div className="inline-flex items-center p-0.5 rounded-xl bg-gray-100 dark:bg-[#141d2e] border border-gray-200 dark:border-[#1e293b] text-xs">
            <button
              onClick={() => setChartType('bar')}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                chartType === 'bar'
                  ? 'bg-[#04AA6D] text-white shadow-xs'
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
              title="Bar Chart (Daily Volume)"
            >
              <BarChart2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setChartType('area')}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                chartType === 'area'
                  ? 'bg-[#04AA6D] text-white shadow-xs'
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
              title="Area Chart (Activity Waves)"
            >
              <Activity className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setChartType('cumulative')}
              className={`p-1.5 rounded-lg transition cursor-pointer ${
                chartType === 'cumulative'
                  ? 'bg-[#04AA6D] text-white shadow-xs'
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
              }`}
              title="Cumulative Progression"
            >
              <TrendingUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Log / Simulate Lesson Complete Action */}
          <button
            onClick={handleQuickLog}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] active:scale-95 text-white font-bold text-xs transition shadow-sm cursor-pointer"
            title="Log a lesson completion for today to test live chart responsiveness"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{justLogged ? 'Lesson Logged! ✨' : '+ Log Lesson'}</span>
          </button>
        </div>
      </div>

      {/* 2. STATISTIC METRIC TILES */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        {/* Total in Period */}
        <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/80 dark:border-[#1e293b] space-y-1">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
            <span>{timeRange}-Day Total</span>
            <BookOpen className="w-3.5 h-3.5 text-[#04AA6D]" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            {totalLessonsInPeriod} <span className="text-xs font-normal text-gray-500">lessons</span>
          </div>
          <div className="text-[11px] font-semibold text-[#04AA6D]">
            +{totalLessonsInPeriod * 25} XP earned
          </div>
        </div>

        {/* Daily Velocity */}
        <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/80 dark:border-[#1e293b] space-y-1">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
            <span>Daily Velocity</span>
            <TrendingUp className="w-3.5 h-3.5 text-sky-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            {dailyAverage} <span className="text-xs font-normal text-gray-500">/ day</span>
          </div>
          <div className="text-[11px] text-gray-500">
            Target: {dailyGoal} / day
          </div>
        </div>

        {/* Days Goal Met */}
        <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/80 dark:border-[#1e293b] space-y-1">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
            <span>Goal Consistency</span>
            <Target className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            {daysGoalMetCount} <span className="text-xs font-normal text-gray-500">/ {chartData.length} days</span>
          </div>
          <div className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
            {goalCompletionRate}% of target met
          </div>
        </div>

        {/* Day Streak */}
        <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/80 dark:border-[#1e293b] space-y-1">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs">
            <span>Active Streak</span>
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">
            {progress.streakDays} <span className="text-xs font-normal text-gray-500">days</span>
          </div>
          <div className="text-[11px] font-semibold text-orange-600 dark:text-orange-400">
            {todayData.completedLessons > 0 ? '🔥 Active today' : 'Learn today to keep streak!'}
          </div>
        </div>
      </div>

      {/* 3. RECHARTS INTERACTIVE CANVAS */}
      <div className="relative pt-2 pb-1">
        <div className="w-full h-64 sm:h-72 min-h-[256px]">
          <ResponsiveContainer width="100%" height="100%" minHeight={240}>
            {chartType === 'bar' ? (
              <BarChart
                data={chartData}
                margin={{ top: 15, right: 10, left: -20, bottom: 0 }}
                onMouseMove={(state: any) => {
                  if (state && state.activePayload && state.activePayload[0]) {
                    setHoveredDay(state.activePayload[0].payload.dateKey);
                  }
                }}
                onMouseLeave={() => setHoveredDay(null)}
              >
                <defs>
                  <linearGradient id="barGradientStandard" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#04AA6D" stopOpacity={0.95} />
                    <stop offset="100%" stopColor="#028656" stopOpacity={0.7} />
                  </linearGradient>
                  <linearGradient id="barGradientToday" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                    <stop offset="100%" stopColor="#04AA6D" stopOpacity={0.9} />
                  </linearGradient>
                  <linearGradient id="barGradientZero" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#64748b" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#475569" stopOpacity={0.15} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#374151"
                  strokeOpacity={0.2}
                />
                <XAxis
                  dataKey="dayShort"
                  stroke="#6b7280"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#374151', strokeOpacity: 0.3 }}
                />
                <YAxis
                  allowDecimals={false}
                  stroke="#6b7280"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine
                  y={dailyGoal}
                  stroke="#f59e0b"
                  strokeDasharray="4 4"
                  strokeWidth={1.5}
                  label={{
                    value: `Daily Goal (${dailyGoal})`,
                    fill: '#f59e0b',
                    fontSize: 10,
                    position: 'insideTopRight'
                  }}
                />
                <Bar
                  dataKey="completedLessons"
                  name="Lessons Completed"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={44}
                  animationDuration={800}
                >
                  {chartData.map((entry, index) => {
                    const isToday = entry.isToday;
                    const isHovered = hoveredDay === entry.dateKey;
                    const fill = entry.completedLessons === 0
                      ? 'url(#barGradientZero)'
                      : isToday
                      ? 'url(#barGradientToday)'
                      : 'url(#barGradientStandard)';

                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={fill}
                        stroke={isHovered || isToday ? '#10b981' : 'transparent'}
                        strokeWidth={isHovered || isToday ? 2 : 0}
                        className="transition-all duration-200"
                      />
                    );
                  })}
                </Bar>
              </BarChart>
            ) : chartType === 'area' ? (
              <AreaChart
                data={chartData}
                margin={{ top: 15, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#04AA6D" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#04AA6D" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#374151"
                  strokeOpacity={0.2}
                />
                <XAxis
                  dataKey="dayShort"
                  stroke="#6b7280"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#374151', strokeOpacity: 0.3 }}
                />
                <YAxis
                  allowDecimals={false}
                  stroke="#6b7280"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine
                  y={dailyGoal}
                  stroke="#f59e0b"
                  strokeDasharray="4 4"
                  strokeWidth={1.5}
                />
                <Area
                  type="monotone"
                  dataKey="completedLessons"
                  stroke="#04AA6D"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#areaGradient)"
                  dot={{ r: 4, fill: '#04AA6D', strokeWidth: 2, stroke: '#ffffff' }}
                  activeDot={{ r: 6, fill: '#10b981', stroke: '#ffffff', strokeWidth: 2 }}
                />
              </AreaChart>
            ) : (
              <LineChart
                data={chartData}
                margin={{ top: 15, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#374151"
                  strokeOpacity={0.2}
                />
                <XAxis
                  dataKey="dayShort"
                  stroke="#6b7280"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#374151', strokeOpacity: 0.3 }}
                />
                <YAxis
                  allowDecimals={false}
                  stroke="#6b7280"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="cumulative"
                  name="Cumulative Lessons"
                  stroke="#04AA6D"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#04AA6D', strokeWidth: 2, stroke: '#ffffff' }}
                  activeDot={{ r: 6, fill: '#10b981', stroke: '#ffffff', strokeWidth: 2 }}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* 4. DAY-BY-DAY MOMENTUM STRIP */}
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-[#1e293b]">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-gray-700 dark:text-gray-300">
            <Calendar className="w-3.5 h-3.5 text-[#04AA6D]" />
            <span>Daily Breakdown ({timeRange} Days)</span>
          </div>
          <div className="flex items-center space-x-2 text-[11px] text-gray-500">
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#04AA6D]"></span>
              <span>Goal Met</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
              <span>In Progress</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {chartData.slice(-7).map((day) => {
            const isMet = day.completedLessons >= day.goal;
            const isToday = day.isToday;

            return (
              <div
                key={day.dateKey}
                onMouseEnter={() => setHoveredDay(day.dateKey)}
                onMouseLeave={() => setHoveredDay(null)}
                className={`p-2 rounded-xl text-center border transition cursor-default ${
                  isToday
                    ? 'bg-[#04AA6D]/10 border-[#04AA6D]/40 text-gray-900 dark:text-white ring-1 ring-[#04AA6D]/50'
                    : isMet
                    ? 'bg-emerald-500/5 border-emerald-500/20 text-gray-800 dark:text-gray-200'
                    : 'bg-gray-50 dark:bg-[#141d2e]/50 border-gray-200/60 dark:border-[#1e293b] text-gray-600 dark:text-gray-400'
                }`}
              >
                <div className="text-[10px] font-semibold truncate">
                  {day.dayShort}
                </div>
                <div className="text-sm font-black my-0.5 font-mono">
                  {day.completedLessons}
                </div>
                <div className="flex items-center justify-center">
                  {isMet ? (
                    <CheckCircle2 className="w-3 h-3 text-[#04AA6D]" />
                  ) : day.completedLessons > 0 ? (
                    <Clock className="w-3 h-3 text-amber-500" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. FOOTER: TARGET SETTING & LEARN MORE */}
      <div className="mt-5 pt-4 border-t border-gray-100 dark:border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Daily Target Setting */}
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
          <span>Set Daily Target:</span>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 5].map(g => (
              <button
                key={g}
                onClick={() => setDailyGoal(g)}
                className={`px-2 py-0.5 rounded-md font-mono text-xs font-bold transition cursor-pointer ${
                  dailyGoal === g
                    ? 'bg-[#04AA6D] text-white'
                    : 'bg-gray-100 dark:bg-[#141d2e] hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {g}
              </button>
            ))}
            <span className="text-[11px] text-gray-500">lessons/day</span>
          </div>
        </div>

        {/* Continue Learning CTA */}
        {showHeaderAction && (
          <button
            onClick={() => navigateTo('courses')}
            className="flex items-center space-x-1.5 font-bold text-[#04AA6D] hover:text-[#03945f] transition cursor-pointer"
          >
            <span>Explore Next Lesson</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
