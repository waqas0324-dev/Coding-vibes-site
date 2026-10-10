import React, { useEffect, useState } from 'react';
import { activeCourses } from '../data/courses';
import { Project } from '../types';
import { useNavigation } from '../context/NavigationContext';
import { useLearning } from '../context/LearningContext';
import { TechBadge } from '../components/TechBadge';
import { StudioProject, studioProjectToHtml } from './StudioPage';
import { Rocket, Clock, CheckCircle2, ArrowRight, Code2 } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { navigateTo, openTryit } = useNavigation();
  const { progress } = useLearning();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [studioProjects, setStudioProjects] = useState<StudioProject[]>([]);
  const [studioProjectsLoading, setStudioProjectsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch('/api/projects', { cache: 'no-store' })
      .then(async response => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.error || 'Could not load published projects.');
        return Array.isArray(data.projects) ? data.projects as StudioProject[] : [];
      })
      .then(remoteProjects => { if (active) setStudioProjects(remoteProjects.filter(project => project.status === 'published')); })
      .catch(() => { if (active) setStudioProjects([]); })
      .finally(() => { if (active) setStudioProjectsLoading(false); });
    return () => { active = false; };
  }, []);

  // Collect all projects across all active courses
  const allProjects: (Project & { courseTitle: string; badgeType: any; studioProject?: StudioProject })[] = [];
  activeCourses.forEach(c => {
    c.projects?.forEach(p => {
      allProjects.push({
        ...p,
        courseTitle: c.title,
        badgeType: c.badgeType
      });
    });
  });

  // Append projects published through the private Developer Studio API
  studioProjects.forEach(sp => {
    allProjects.push({
      id: sp.id,
      title: sp.title,
      slug: sp.slug,
      category: 'fullstack',
      difficulty: sp.level,
      description: sp.description || 'A Coding Vibes Studio project. Open it in the sandbox to explore and remix the code.',
      skills: sp.tech.split(/[·,|]/).map(s => s.trim()).filter(Boolean),
      requirements: Object.keys(sp.files).map(f => 'Explore source file: ' + f),
      estimatedTime: '1-2 hours',
      starterFiles: { html: studioProjectToHtml(sp.files) },
      courseTitle: 'Coding Vibes Studio',
      badgeType: 'default',
      studioProject: sp
    });
  });

  const categories = ['All', 'HTML', 'CSS', 'JavaScript'];

  const filtered = allProjects.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.courseTitle.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2 pb-6 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">
            PORTFOLIO BUILDER
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-gray-400">Real-World Applications</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Hands-On Real-World Projects
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          Apply what you learn by creating functional, production-ready web projects with starter code, guidance checklists, and live sandboxes.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              selectedCategory === cat
                ? 'bg-[#22c55e] text-black shadow-md shadow-[#22c55e]/20'
                : 'bg-[#0d131f] text-gray-300 hover:text-white border border-[#1e293b] hover:bg-[#141d2e]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {studioProjectsLoading && <p className="text-xs text-gray-500" role="status">Loading published community projects…</p>}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => {
          const isCompleted = progress.completedProjects.includes(project.id);

          return (
            <div
              key={project.id}
              onClick={() => {
                if (project.studioProject) {
                  openTryit(studioProjectToHtml(project.studioProject.files), 'html', project.studioProject.title);
                } else {
                  navigateTo('project-detail', { projectId: project.id });
                }
              }}
              className="group rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 flex flex-col justify-between cursor-pointer hover:border-[#22c55e]/50 hover:bg-[#111a2c] transition duration-300 shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {project.studioProject?.thumbnail ? (
                    <img
                      src={project.studioProject.thumbnail}
                      alt=""
                      className="w-9 h-9 rounded object-cover border border-[#1e293b]"
                    />
                  ) : (
                    <TechBadge type={project.badgeType} size="md" />
                  )}
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {project.difficulty}
                    </span>
                    {isCompleted && (
                      <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#22c55e] transition mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Requirements preview */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-mono text-gray-500 uppercase">Key Features:</span>
                  <ul className="space-y-1 text-xs text-gray-400">
                    {project.requirements.slice(0, 2).map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-[#22c55e]">•</span>
                        <span className="truncate">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 py-3 border-t border-[#1e293b]/80 mb-3">
                  <div className="flex items-center space-x-1.5">
                    <Code2 className="w-3.5 h-3.5 text-gray-500" />
                    <span>{project.courseTitle}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>{project.estimatedTime}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-[#141d2e] group-hover:bg-[#22c55e] text-gray-200 group-hover:text-black font-semibold text-xs rounded-lg transition flex items-center justify-center space-x-1.5">
                  <span>{project.studioProject ? 'Open in Sandbox' : (isCompleted ? 'Open Completed Project' : 'Build Project in Sandbox')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
