import React, { useEffect, useState } from 'react';
import { Monitor, Server, Layers, Clock, ArrowRight, Route, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { roadmaps, roadmapStorageKey } from '../data/roadmaps';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Layers,
};

function getCompletedCount(roadmapId: string): number {
  try {
    const raw = localStorage.getItem(roadmapStorageKey(roadmapId));
    if (!raw) return 0;
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}

export const RoadmapsPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const p: Record<string, number> = {};
    roadmaps.forEach(r => {
      p[r.id] = getCompletedCount(r.id);
    });
    setProgress(p);
  }, []);

  return (
    <div className="w-full bg-white dark:bg-[#0d131f]">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center border-b border-gray-200 dark:border-[#1e293b]">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Route className="w-4 h-4" />
            <span>Guided Learning Paths</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Know what to learn <span className="text-[#22c55e]">next.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stop guessing what comes after the basics. Each roadmap is a step-by-step route —
            every step explains what to learn, why it matters, and links you straight to the course.
          </p>
        </div>
      </section>

      {/* Roadmap cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map(roadmap => {
            const Icon = ICONS[roadmap.icon] || Layers;
            const done = progress[roadmap.id] || 0;
            const total = roadmap.steps.length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            return (
              <button
                key={roadmap.id}
                onClick={() => navigateTo('roadmap-detail', { roadmapId: roadmap.id })}
                className="text-left rounded-2xl border border-gray-200 dark:border-[#1e293b] bg-white dark:bg-[#141d2e] p-6 sm:p-7 hover:border-[#22c55e]/60 dark:hover:border-[#22c55e]/60 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${roadmap.color}1f`, color: roadmap.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {total} steps
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-extrabold text-gray-900 dark:text-white">
                  {roadmap.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {roadmap.description}
                </p>

                <div className="mt-4 flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  <span>{roadmap.totalTime}</span>
                  {done > 0 && (
                    <span className="ml-3 inline-flex items-center text-[#22c55e]">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      {done}/{total} complete
                    </span>
                  )}
                </div>

                {/* Progress bar */}
                <div className="mt-3 h-2 rounded-full bg-gray-100 dark:bg-[#1e293b] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#22c55e] transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="mt-5 inline-flex items-center font-bold text-sm text-[#22c55e] group-hover:gap-2.5 gap-2 transition-all">
                  <span>Open roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto rounded-2xl border border-gray-200 dark:border-[#1e293b] bg-gray-50 dark:bg-[#141d2e] p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white text-center">
            How roadmaps work
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {[
              { n: '01', t: 'Learn the concept', d: 'Each step tells you exactly what to learn.' },
              { n: '02', t: 'Know why it matters', d: 'Understand the reason before you start.' },
              { n: '03', t: 'Jump to the course', d: 'Open the linked course in one click.' },
              { n: '04', t: 'Mark complete', d: 'Tick steps off and track your progress.' },
            ].map(s => (
              <div key={s.n} className="text-center px-2">
                <div className="text-2xl font-extrabold text-[#22c55e]">{s.n}</div>
                <div className="mt-1 font-bold text-sm text-gray-900 dark:text-white">{s.t}</div>
                <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
