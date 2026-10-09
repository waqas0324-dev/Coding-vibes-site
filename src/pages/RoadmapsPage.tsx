import React, { useEffect, useState } from 'react';
import { Sprout, Monitor, Server, Layers, Clock, ArrowRight, Route, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { roadmaps, roadmapStorageKey } from '../data/roadmaps';
import { RoadmapMiniPath } from '../components/VisualRoadmap';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sprout,
  Monitor,
  Server,
  Layers,
};

function getCompletedIds(roadmapId: string): string[] {
  try {
    const raw = localStorage.getItem(roadmapStorageKey(roadmapId));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const RoadmapsPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [doneMap, setDoneMap] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const p: Record<string, string[]> = {};
    roadmaps.forEach(r => {
      p[r.id] = getCompletedIds(r.id);
    });
    setDoneMap(p);
  }, []);

  return (
    <div className="w-full bg-[#0d131f]">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center border-b border-[#1e293b] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(600px 260px at 20% 0%, rgba(34,197,94,0.10), transparent 70%), radial-gradient(500px 240px at 85% 20%, rgba(56,189,248,0.08), transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-950/60 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-900/60">
            <Route className="w-4 h-4" />
            <span>Guided Learning Paths</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Know what to learn <span className="text-[#22c55e]">next.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Stop guessing what comes after the basics. Each roadmap is a step-by-step climb —
            every checkpoint explains what to learn, why it matters, and links you straight to the course.
          </p>
        </div>
      </section>

      {/* Roadmap expedition cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#0d131f]">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {roadmaps.map(roadmap => {
            const Icon = ICONS[roadmap.icon] || Layers;
            const doneIds = doneMap[roadmap.id] || [];
            const total = roadmap.steps.length;
            const pct = total > 0 ? Math.round((doneIds.length / total) * 100) : 0;
            const open = () => navigateTo('roadmap-detail', { roadmapId: roadmap.id });
            return (
              <div
                key={roadmap.id}
                className="rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#101a2e] to-[#0d131f] p-6 sm:p-7 hover:border-[#22c55e]/60 hover:shadow-[0_0_36px_rgba(34,197,94,0.12)] transition-all flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${roadmap.color}1f`, color: roadmap.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                    {total} checkpoints
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-extrabold text-white">
                  {roadmap.title}
                </h2>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {roadmap.description}
                </p>

                {/* visual trail — tap a checkpoint to open the path */}
                <div className="mt-4 -mx-1">
                  <RoadmapMiniPath
                    steps={roadmap.steps.map(s => ({
                      label: `Step ${s.stepNumber}: ${s.title}`,
                      done: doneIds.includes(s.id),
                      onClick: open,
                    }))}
                  />
                </div>

                <div className="mt-2 flex items-center text-xs font-semibold text-gray-400">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  <span>{roadmap.totalTime}</span>
                  {doneIds.length > 0 && (
                    <span className="ml-3 inline-flex items-center text-[#22c55e]">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      {doneIds.length}/{total} complete
                    </span>
                  )}
                </div>

                {/* Progress bar */}
                <div className="mt-3 h-2 rounded-full bg-[#1e293b] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#22c55e] transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <button
                  onClick={open}
                  className="mt-5 inline-flex items-center font-bold text-sm text-[#22c55e] hover:gap-2.5 gap-2 transition-all self-start"
                >
                  <span>Climb this path</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-[#0d131f]">
        <div className="max-w-6xl mx-auto rounded-2xl border border-[#1e293b] bg-[#141d2e] p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white text-center">
            How roadmaps work
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {[
              { n: '01', t: 'Pick your climb', d: 'Choose the path that matches your goal.' },
              { n: '02', t: 'Reach each checkpoint', d: 'Every stop tells you what to learn and why.' },
              { n: '03', t: 'Jump to the course', d: 'Open the linked course in one click.' },
              { n: '04', t: 'Plant your flag', d: 'Tick checkpoints off and track your climb.' },
            ].map(s => (
              <div key={s.n} className="text-center px-2">
                <div className="text-2xl font-extrabold text-[#22c55e]">{s.n}</div>
                <div className="mt-1 font-bold text-sm text-white">{s.t}</div>
                <div className="mt-1 text-xs text-gray-400">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
