import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { activeCourses, upcomingCourses } from '../data/courses';
import { practiceCatalog } from '../data/practice';
import { quizzesCatalog } from '../data/quizzes';
import { resourcesCatalog } from '../data/resources';
import { tutorialsCatalog } from '../data/tutorials';
import { TechBadge } from '../components/TechBadge';
import { Search, BookOpen, Trophy, HelpCircle, Rocket, FileText, ArrowRight } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const { params, navigateTo } = useNavigation();
  const [query, setQuery] = useState(params.searchQuery || '');

  // Search Results aggregation
  const cleanQ = query.trim().toLowerCase();

  const matchingCourses = cleanQ
    ? activeCourses.filter(
        c =>
          c.title.toLowerCase().includes(cleanQ) ||
          c.description.toLowerCase().includes(cleanQ) ||
          c.category.toLowerCase().includes(cleanQ)
      )
    : [];

  const matchingLessons: {
    courseSlug: string;
    courseTitle: string;
    lessonSlug: string;
    lessonTitle: string;
    description: string;
  }[] = [];

  if (cleanQ) {
    activeCourses.forEach(c => {
      c.modules.forEach(m => {
        m.lessons.forEach(l => {
          if (
            l.title.toLowerCase().includes(cleanQ) ||
            l.description.toLowerCase().includes(cleanQ)
          ) {
            matchingLessons.push({
              courseSlug: c.slug,
              courseTitle: c.title,
              lessonSlug: l.slug,
              lessonTitle: l.title,
              description: l.description
            });
          }
        });
      });
    });
  }

  const matchingProjects: { id: string; title: string; description: string; courseTitle: string }[] = [];
  if (cleanQ) {
    activeCourses.forEach(c => {
      c.projects?.forEach(p => {
        if (
          p.title.toLowerCase().includes(cleanQ) ||
          p.description.toLowerCase().includes(cleanQ)
        ) {
          matchingProjects.push({
            id: p.id,
            title: p.title,
            description: p.description,
            courseTitle: c.title
          });
        }
      });
    });
  }

  const matchingQuizzes = cleanQ
    ? quizzesCatalog.filter(
        q =>
          q.title.toLowerCase().includes(cleanQ) ||
          q.description.toLowerCase().includes(cleanQ)
      )
    : [];

  const matchingResources = cleanQ
    ? resourcesCatalog.filter(
        r =>
          r.title.toLowerCase().includes(cleanQ) ||
          r.description.toLowerCase().includes(cleanQ) ||
          r.tags?.some(t => t.toLowerCase().includes(cleanQ))
      )
    : [];

  const totalResultsCount =
    matchingCourses.length +
    matchingLessons.length +
    matchingProjects.length +
    matchingQuizzes.length +
    matchingResources.length;

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Search Input Hero */}
      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-white">Search Coding Vibes</h1>
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search all lessons, tracks, quizzes, projects, or cheatsheets (e.g. flexbox, forms, react, loop)..."
            className="w-full bg-[#0d131f] border border-[#1e293b] rounded-2xl pl-12 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-gray-500 focus:border-[#22c55e] focus:outline-none shadow-xl"
            autoFocus
          />
        </div>

        {cleanQ && (
          <p className="text-xs text-gray-400">
            Found <span className="text-[#22c55e] font-bold">{totalResultsCount}</span> result
            {totalResultsCount !== 1 ? 's' : ''} for "{query}"
          </p>
        )}
      </div>

      {/* Results Sections */}
      {cleanQ ? (
        <div className="space-y-8">
          {/* Lessons */}
          {matchingLessons.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-[#22c55e] uppercase tracking-wider flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Lessons ({matchingLessons.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingLessons.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      navigateTo('lesson', {
                        courseSlug: item.courseSlug,
                        lessonSlug: item.lessonSlug
                      })
                    }
                    className="p-4 rounded-xl bg-[#0d131f] border border-[#1e293b] hover:border-[#22c55e]/50 cursor-pointer transition flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase">
                        {item.courseTitle}
                      </span>
                      <h3 className="text-sm font-bold text-white mb-1">{item.lessonTitle}</h3>
                      <p className="text-xs text-gray-400 line-clamp-2">{item.description}</p>
                    </div>
                    <span className="text-[11px] text-[#22c55e] font-semibold mt-3 flex items-center space-x-1">
                      <span>Open Lesson</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Courses */}
          {matchingCourses.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-[#22c55e] uppercase tracking-wider flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Courses ({matchingCourses.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingCourses.map(c => (
                  <div
                    key={c.id}
                    onClick={() => navigateTo('course-detail', { courseSlug: c.slug })}
                    className="p-4 rounded-xl bg-[#0d131f] border border-[#1e293b] hover:border-[#22c55e]/50 cursor-pointer transition flex items-center space-x-4"
                  >
                    <TechBadge type={c.badgeType} size="md" />
                    <div>
                      <h3 className="text-sm font-bold text-white">{c.title} Course</h3>
                      <p className="text-xs text-gray-400 line-clamp-1">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {matchingProjects.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-[#22c55e] uppercase tracking-wider flex items-center space-x-2">
                <Rocket className="w-4 h-4" />
                <span>Projects ({matchingProjects.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingProjects.map(p => (
                  <div
                    key={p.id}
                    onClick={() => navigateTo('project-detail', { projectId: p.id })}
                    className="p-4 rounded-xl bg-[#0d131f] border border-[#1e293b] hover:border-[#22c55e]/50 cursor-pointer transition"
                  >
                    <span className="text-[10px] font-mono text-gray-500 uppercase">{p.courseTitle}</span>
                    <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quizzes */}
          {matchingQuizzes.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-[#22c55e] uppercase tracking-wider flex items-center space-x-2">
                <HelpCircle className="w-4 h-4" />
                <span>Quizzes ({matchingQuizzes.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingQuizzes.map(q => (
                  <div
                    key={q.id}
                    onClick={() => navigateTo('practice')}
                    className="p-4 rounded-xl bg-[#0d131f] border border-[#1e293b] hover:border-[#22c55e]/50 cursor-pointer transition"
                  >
                    <span className="text-[10px] font-mono text-gray-500 uppercase">{q.category}</span>
                    <h3 className="text-sm font-bold text-white mb-1">{q.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">{q.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources */}
          {matchingResources.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-[#22c55e] uppercase tracking-wider flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Resources & Cheatsheets ({matchingResources.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchingResources.map(r => (
                  <div
                    key={r.id}
                    onClick={() => navigateTo('resources')}
                    className="p-4 rounded-xl bg-[#0d131f] border border-[#1e293b] hover:border-[#22c55e]/50 cursor-pointer transition"
                  >
                    <span className="text-[10px] font-mono text-gray-500 uppercase">{r.category}</span>
                    <h3 className="text-sm font-bold text-white mb-1">{r.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-2">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {totalResultsCount === 0 && (
            <div className="py-12 text-center text-gray-500 space-y-2">
              <p className="text-base">No results found for "{query}".</p>
              <p className="text-xs">Try searching for keywords like "HTML", "CSS", "Flexbox", "Grid", "DOM", or "Quiz".</p>
            </div>
          )}
        </div>
      ) : (
        <div className="py-12 text-center space-y-4">
          <p className="text-sm text-gray-400">Popular searches right now:</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['HTML Crash Course', 'Flexbox', 'CSS Grid', 'JavaScript Basics', 'DOM Events', 'Cheatsheet'].map(tag => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-3 py-1.5 rounded-lg bg-[#0d131f] border border-[#1e293b] hover:border-[#22c55e]/40 text-xs text-gray-300 hover:text-white transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
