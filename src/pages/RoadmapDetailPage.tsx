import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft, ArrowRight, Clock, Check, Lightbulb,
  RotateCcw, Monitor, Server, Layers, Sprout, Flag,
} from 'lucide-react';
import { useNavigation, AppRoute } from '../context/NavigationContext';
import { getRoadmapById, roadmapStorageKey, RoadmapStep } from '../data/roadmaps';
import { activeCourses } from '../data/courses';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sprout,
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

/* A "trail camp": one checkpoint on the glowing expedition path. */
function CampBlock({
  step,
  isDone,
  isNext,
  isLast,
  onToggle,
}: {
  step: RoadmapStep;
  isDone: boolean;
  isNext: boolean;
  isLast: boolean;
  onToggle: () => void;
}) {
  const { navigateTo } = useNavigation();
  const course = step.courseId
    ? activeCourses.find(c => c.id === step.courseId)
    : undefined;

  return (
    <div className="relative pl-16 sm:pl-20 pb-10 last:pb-0">
      {/* glowing connector down to the next camp */}
      {!isLast && (
        <div className="absolute left-[26px] sm:left-[30px] top-16 bottom-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#22c55e] to-[#22c55e]/25 shadow-[0_0_12px_rgba(34,197,94,0.55)]" />
      )}

      {/* checkpoint node — tap to plant your flag */}
      <button
        onClick={onToggle}
        aria-pressed={isDone}
        aria-label={`${isDone ? 'Unmark' : 'Mark complete'}: ${step.title}`}
        className={`absolute left-0 top-1 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-extrabold text-lg border-[3px] transition-all ${
          isDone
            ? 'bg-[#22c55e] border-[#4ade80] text-white shadow-[0_0_28px_rgba(34,197,94,0.65)]'
            : 'bg-[#0d131f] border-[#22c55e]/70 text-[#4ade80] shadow-[0_0_18px_rgba(34,197,94,0.35)] hover:shadow-[0_0_28px_rgba(34,197,94,0.6)] hover:scale-105'
        }`}
      >
        {isDone ? <Check className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={3.5} /> : step.stepNumber}
        {isNext && !isDone && (
          <span className="absolute inset-0 rounded-full bg-[#22c55e] opacity-30 animate-ping pointer-events-none" />
        )}
      </button>

      {/* camp details */}
      <div
        className={`rounded-2xl border p-5 sm:p-6 transition-all backdrop-blur ${
          isDone
            ? 'border-[#22c55e]/50 bg-[#0f1f16] shadow-[0_0_28px_rgba(34,197,94,0.12)]'
            : 'border-[#22c55e]/20 bg-[#141d2e]/95 shadow-[0_0_20px_rgba(34,197,94,0.06)]'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#22c55e]">
            ⛺ Trail camp {step.stepNumber}
          </span>
          <span className="inline-flex items-center text-[11px] font-bold text-gray-400">
            <Clock className="w-3 h-3 mr-1" />
            {step.estimatedTime}
          </span>
        </div>

        <h3 className={`mt-2 text-lg sm:text-xl font-extrabold ${isDone ? 'text-gray-400' : 'text-white'}`}>
          {step.title}
        </h3>

        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          {step.description}
        </p>

        <div className="mt-3 flex items-start space-x-2 text-sm rounded-xl bg-amber-950/40 border border-amber-800/40 px-3.5 py-2.5">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-amber-200/90">
            <span className="font-bold">Trail tip: </span>
            {step.whyItMatters}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {step.skills.map(skill => (
            <span
              key={skill}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1e293b] text-gray-300 border border-[#2a3a55]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {step.customRoute ? (
            <button
              onClick={() => navigateTo(step.customRoute as AppRoute)}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-bold transition shadow-[0_0_16px_rgba(34,197,94,0.35)]"
            >
              <span>{step.customRouteLabel || 'Start'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            course && (
              <button
                onClick={() => navigateTo('course-detail', { courseSlug: course.slug })}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-bold transition shadow-[0_0_16px_rgba(34,197,94,0.35)]"
              >
                <span>Start learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )
          )}
          <button
            onClick={onToggle}
            className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-bold border transition ${
              isDone
                ? 'bg-[#22c55e]/15 border-[#22c55e] text-[#4ade80]'
                : 'border-[#2a3a55] text-gray-300 hover:border-[#22c55e] hover:text-[#4ade80]'
            }`}
            aria-pressed={isDone}
          >
            {isDone ? <Check className="w-4 h-4" strokeWidth={3} /> : null}
            <span>{isDone ? 'Checkpoint reached' : 'Mark checkpoint'}</span>
          </button>
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
      <div className="px-4 py-20 text-center bg-[#0d131f]">
        <p className="text-gray-400 font-semibold">Roadmap not found.</p>
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
  const nextIndex = roadmap.steps.findIndex(s => !completedIds.includes(s.id));

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
    <div className="w-full bg-[#0d131f]">
      {/* Mountain header */}
      <div className="relative overflow-hidden border-b border-[#1e293b]">
        <svg
          viewBox="0 0 800 240"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="rd-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a1424" />
              <stop offset="100%" stopColor="#0d131f" />
            </linearGradient>
          </defs>
          <rect x={0} y={0} width={800} height={240} fill="url(#rd-sky)" />
          {[
            [60, 40], [150, 90], [260, 30], [350, 110], [470, 50],
            [560, 100], [660, 36], [740, 90], [200, 140], [600, 150],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={1.4} fill="#fff" opacity={0.5} />
          ))}
          <circle cx={690} cy={52} r={22} fill="#f1f5f9" opacity={0.9} />
          <circle cx={690} cy={52} r={36} fill="#f1f5f9" opacity={0.1} />
          <path d="M0 240 L140 130 L260 200 L400 90 L560 195 L700 120 L800 180 L800 240 Z" fill="#101d33" />
          <path d="M0 240 L180 170 L340 215 L520 140 L680 210 L800 165 L800 240 Z" fill="#0a1322" />
        </svg>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <button
            onClick={() => navigateTo('roadmaps')}
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-gray-300 hover:text-[#22c55e] transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Roadmaps</span>
          </button>

          <div className="flex items-start space-x-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 shadow-[0_0_24px_rgba(34,197,94,0.25)]"
              style={{ backgroundColor: `${roadmap.color}26`, color: roadmap.color }}
            >
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {roadmap.title}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-2xl">
                {roadmap.description}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-gray-500">
                <span className="inline-flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  {roadmap.totalTime}
                </span>
                <span>{totalCount} checkpoints</span>
              </div>
            </div>
          </div>

          {/* Expedition progress */}
          <div className="mt-8 rounded-2xl border border-[#22c55e]/25 bg-[#0f1a2e]/90 p-5 shadow-[0_0_24px_rgba(34,197,94,0.08)]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">
                ⛰️ Your climb
              </span>
              <span className="text-sm font-extrabold text-[#22c55e]">{pct}%</span>
            </div>
            <div className="mt-3 h-3 rounded-full bg-[#1e293b] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#16a34a] to-[#4ade80] shadow-[0_0_12px_rgba(34,197,94,0.7)] transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {doneCount} of {totalCount} checkpoints reached
              </span>
              {doneCount > 0 && (
                <button
                  onClick={resetProgress}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-400 hover:text-red-400 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart climb</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* The expedition trail */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {roadmap.steps.map((step, idx) => (
          <CampBlock
            key={step.id}
            step={step}
            isDone={completedIds.includes(step.id)}
            isNext={idx === nextIndex}
            isLast={idx === roadmap.steps.length - 1}
            onToggle={() => toggleStep(step.id)}
          />
        ))}

        {/* Summit */}
        <div className="relative pl-16 sm:pl-20 pt-2">
          <div className="absolute left-0 top-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0d131f] border-[3px] border-dashed border-[#22c55e]/50 flex items-center justify-center text-[#22c55e] shadow-[0_0_18px_rgba(34,197,94,0.25)]">
            <Flag className="w-6 h-6" />
          </div>
          <div className={`rounded-2xl border p-5 sm:p-6 text-center ${pct === 100 ? 'border-[#22c55e] bg-[#0f2417] shadow-[0_0_36px_rgba(34,197,94,0.25)]' : 'border-[#1e293b] bg-[#141d2e]'}`}>
            {pct === 100 ? (
              <>
                <div className="text-3xl">🏁</div>
                <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-white">Summit reached!</h2>
                <p className="mt-1 text-sm text-gray-300">
                  You finished the {roadmap.title} climb. Now build something real and show it off.
                </p>
                <button
                  onClick={() => navigateTo('projects')}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm transition"
                >
                  Browse Projects
                </button>
              </>
            ) : (
              <>
                <h2 className="text-lg font-extrabold text-white">The summit awaits</h2>
                <p className="mt-1 text-sm text-gray-400">
                  Reach every checkpoint to plant your flag at the top of the {roadmap.title} climb.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
