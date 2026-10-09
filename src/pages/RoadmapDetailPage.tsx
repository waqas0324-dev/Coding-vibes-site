import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft, ArrowRight, Clock, CheckCircle2, Circle, Lightbulb,
  RotateCcw, Monitor, Server, Layers,
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { getRoadmapById, roadmapStorageKey, RoadmapStep } from '../data/roadmaps';
import { activeCourses } from '../data/courses';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Layers,
};

function loadCompleted(roadmapId: string): string[] {
  try {
    const raw = localStorage.getItem(roadmapStorageKey(roadmapId));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCompleted(roadmapId: string, ids: string[]) {
  try {
    localStorage.setItem(roadmapStorageKey(roadmapId), JSON.stringify(ids));
  } catch {
    // storage unavailable — progress just won't persist
  }
}

function StepCard({
  step,
  isDone,
  isLast,
  onToggle,
}: {
  step: RoadmapStep;
  isDone: boolean;
  isLast: boolean;
  onToggle: () => void;
}) {
  const { navigateTo } = useNavigation();
  const course = step.courseId
    ? activeCourses.find(c => c.id === step.courseId)
    : undefined;

  return (
    <div className="relative pl-12 sm:pl-16 pb-8 last:pb-0">
      {/* Connecting line */}
      {!isLast && (
        <div
          className={`absolute left-[17px] sm:left-[23px] top-11 bottom-0 w-0.5 ${
            isDone ? 'bg-[#22c55e]' : 'bg-gray-200 dark:bg-[#1e293b]'
          }`}
        />
      )}
      {/* Number badge */}
      <div
        className={`absolute left-0 top-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-extrabold text-sm sm:text-base border-2 transition ${
          isDone
            ? 'bg-[#22c55e] border-[#22c55e] text-white'
            : 'bg-white dark:bg-[#141d2e] border-gray-300 dark:border-[#1e293b] text-gray-700 dark:text-gray-300'
        }`}
      >
        {isDone ? <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" /> : step.stepNumber}
      </div>

      <div
        className={`rounded-2xl border p-5 sm:p-6 transition ${
          isDone
            ? 'border-[#22c55e]/40 bg-emerald-50/40 dark:bg-[#22c55e]/5 dark:border-[#22c55e]/30'
            : 'border-gray-200 dark:border-[#1e293b] bg-white dark:bg-[#141d2e]'
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className={`text-lg sm:text-xl font-extrabold ${isDone ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
            {step.title}
          </h3>
          <button
            onClick={onToggle}
            className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border transition shrink-0 ${
              isDone
                ? 'bg-[#22c55e] border-[#22c55e] text-white'
                : 'border-gray-300 dark:border-[#1e293b] text-gray-600 dark:text-gray-300 hover:border-[#22c55e] hover:text-[#22c55e]'
            }`}
            aria-pressed={isDone}
          >
            {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5" />}
            <span>{isDone ? 'Completed' : 'Mark complete'}</span>
          </button>
        </div>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {step.description}
        </p>

        <div className="mt-3 flex items-start space-x-2 text-sm rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 px-3.5 py-2.5">
          <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-amber-900 dark:text-amber-200/90">
            <span className="font-bold">Why this matters: </span>
            {step.whyItMatters}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {step.skills.map(skill => (
            <span
              key={skill}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-[#1e293b] text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400">
            <Clock className="w-3.5 h-3.5 mr-1.5" />
            {step.estimatedTime}
          </span>
          {course && (
            <button
              onClick={() => navigateTo('course-detail', { courseSlug: course.slug })}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-bold transition"
            >
              <span>Start learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export const RoadmapDetailPage: React.FC = () => {
  const { navigateTo, params } = useNavigation();
  const roadmapId = params.roadmapId || 'frontend';
  const roadmap = useMemo(() => getRoadmapById(roadmapId), [roadmapId]);

  const [completedIds, setCompletedIds] = useState<string[]>(() => loadCompleted(roadmapId));

  useEffect(() => {
    setCompletedIds(loadCompleted(roadmapId));
  }, [roadmapId]);

  if (!roadmap) {
    return (
      <div className="px-4 py-20 text-center bg-white dark:bg-[#0d131f]">
        <p className="text-gray-600 dark:text-gray-400 font-semibold">Roadmap not found.</p>
        <button
          onClick={() => navigateTo('roadmaps')}
          className="mt-4 px-5 py-2.5 rounded-full bg-[#22c55e] text-white font-bold text-sm"
        >
          Back to Roadmaps
        </button>
      </div>
    );
  }

  const Icon = ICONS[roadmap.icon] || Layers;
  const doneCount = completedIds.length;
  const totalCount = roadmap.steps.length;
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  const toggleStep = (stepId: string) => {
    const next = completedIds.includes(stepId)
      ? completedIds.filter(id => id !== stepId)
      : [...completedIds, stepId];
    setCompletedIds(next);
    saveCompleted(roadmap.id, next);
  };

  const resetProgress = () => {
    setCompletedIds([]);
    saveCompleted(roadmap.id, []);
  };

  return (
    <div className="w-full bg-white dark:bg-[#0d131f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back */}
        <button
          onClick={() => navigateTo('roadmaps')}
          className="inline-flex items-center space-x-1.5 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-[#22c55e] transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Roadmaps</span>
        </button>

        {/* Header */}
        <div className="flex items-start space-x-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${roadmap.color}1f`, color: roadmap.color }}
          >
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {roadmap.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
              {roadmap.description}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                {roadmap.totalTime}
              </span>
              <span>{totalCount} steps</span>
            </div>
          </div>
        </div>

        {/* Overall progress */}
        <div className="mt-8 rounded-2xl border border-gray-200 dark:border-[#1e293b] bg-gray-50 dark:bg-[#141d2e] p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              Your progress
            </span>
            <span className="text-sm font-extrabold text-[#22c55e]">{pct}%</span>
          </div>
          <div className="mt-3 h-3 rounded-full bg-gray-200 dark:bg-[#1e293b] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#22c55e] transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {doneCount} of {totalCount} steps completed
            </span>
            {doneCount > 0 && (
              <button
                onClick={resetProgress}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset progress</span>
              </button>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-10">
          {roadmap.steps.map((step, idx) => (
            <StepCard
              key={step.id}
              step={step}
              isDone={completedIds.includes(step.id)}
              isLast={idx === roadmap.steps.length - 1}
              onToggle={() => toggleStep(step.id)}
            />
          ))}
        </div>

        {/* Completion callout */}
        {pct === 100 && (
          <div className="mt-10 rounded-2xl bg-[#22c55e] text-white p-6 sm:p-8 text-center">
            <CheckCircle2 className="w-10 h-10 mx-auto" />
            <h2 className="mt-3 text-xl sm:text-2xl font-extrabold">Roadmap complete</h2>
            <p className="mt-1 text-sm text-white/90">
              You finished the {roadmap.title} path. Now build something real and show it off.
            </p>
            <button
              onClick={() => navigateTo('projects')}
              className="mt-4 px-6 py-2.5 rounded-full bg-white text-[#16a34a] font-bold text-sm hover:bg-gray-100 transition"
            >
              Browse Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
