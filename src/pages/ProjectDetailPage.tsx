import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useLearning } from '../context/LearningContext';
import { activeCourses } from '../data/courses';
import { LiveEditor } from '../components/LiveEditor';
import { ProjectSourceViewer } from '../components/ProjectSourceViewer';
import { TechBadge } from '../components/TechBadge';
import {
  ArrowLeft,
  CheckCircle2,
  Rocket,
  Clock,
  Award,
  CheckSquare,
  Square
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { params, navigateTo } = useNavigation();
  const { progress, markProjectComplete } = useLearning();

  const projectId = params.projectId || 'proj-html-1';

  // Find project in courses
  let foundProject = null;
  let foundCourse = null;

  for (const c of activeCourses) {
    const proj = c.projects?.find(p => p.id === projectId);
    if (proj) {
      foundProject = proj;
      foundCourse = c;
      break;
    }
  }

  const [checkedRequirements, setCheckedRequirements] = useState<Record<number, boolean>>({});

  if (!foundProject || !foundCourse) {
    return (
      <div className="py-16 text-center space-y-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
        <p className="text-xs text-gray-400">The requested project could not be found.</p>
        <button
          onClick={() => navigateTo('projects')}
          className="px-4 py-2 bg-[#22c55e] text-black font-semibold rounded-lg text-xs"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const isCompleted = progress.completedProjects.includes(foundProject.id);

  const toggleReq = (idx: number) => {
    setCheckedRequirements(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigateTo('projects')}
        className="inline-flex items-center space-x-2 text-xs text-gray-400 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Projects</span>
      </button>

      {/* Project Banner Header */}
      <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 sm:p-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start space-x-4">
            <TechBadge type={foundCourse.badgeType} size="lg" />
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
                  {foundCourse.title} Project
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  {foundProject.difficulty}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {foundProject.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
                {foundProject.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
            <div className="flex items-center space-x-1.5 text-xs text-gray-400">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              <span>Est. {foundProject.estimatedTime}</span>
            </div>

            <button
              onClick={() => markProjectComplete(foundProject.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs transition duration-200 ${
                isCompleted
                  ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800'
                  : 'bg-[#22c55e] hover:bg-[#16a34a] text-black shadow-lg shadow-[#22c55e]/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Project Completed ✓' : 'Mark Project as Completed (+100 XP)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Project Requirements Checklist */}
      <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center space-x-2">
          <Rocket className="w-4 h-4 text-[#22c55e]" />
          <span>Project Acceptance Criteria & Requirements</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {foundProject.requirements.map((req, idx) => {
            const isChecked = !!checkedRequirements[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleReq(idx)}
                className={`p-3 rounded-xl border text-xs flex items-center space-x-3 cursor-pointer transition ${
                  isChecked
                    ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                    : 'bg-[#080d14] border-[#1e293b] text-gray-300 hover:border-gray-500'
                }`}
              >
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-[#22c55e] shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-gray-500 shrink-0" />
                )}
                <span className={isChecked ? 'line-through text-gray-400' : ''}>{req}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete Project Source (read-only, with live preview + downloads) */}
      {foundProject.starterFiles && (
        <ProjectSourceViewer
          starterFiles={foundProject.starterFiles}
          projectSlug={foundProject.id}
        />
      )}

      {/* Interactive Project IDE */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-white">Project Sandbox & Live Preview</h2>
          <span className="text-xs text-gray-400 font-mono">Live In-Browser IDE</span>
        </div>

        <LiveEditor
          title={foundProject.title}
          initialHtml={foundProject.starterCode?.html || '<h1>' + foundProject.title + '</h1>'}
          initialCss={foundProject.starterCode?.css || 'body { font-family: sans-serif; padding: 20px; background: #0b1120; color: #fff; }'}
          initialJs={foundProject.starterCode?.js || ''}
          instructions="Implement the requirements above using standard HTML, CSS, and JS."
        />
      </div>
    </div>
  );
};
