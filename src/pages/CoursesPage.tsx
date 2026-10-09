import React, { useState } from 'react';
import { activeCourses, upcomingCourses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { useNavigation } from '../context/NavigationContext';
import { useLearning } from '../context/LearningContext';
import { TechBadge } from '../components/TechBadge';
import { Search, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const { params, navigateTo } = useNavigation();
  const { totalLessonsCompleted, getCourseProgressPercentage } = useLearning();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    params.categoryFilter || 'All'
  );

  const categories = [
    'All',
    'Web Development',
    'Programming',
    'Tools',
    'Future Technologies'
  ];

  const filteredActive = activeCourses.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredUpcoming = upcomingCourses.filter(course => {
    const matchesSearch =
      (course.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (course.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-10 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1e293b]">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">
              CURRICULUM
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-xs text-gray-400">Structured Learning Tracks</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Explore All Courses
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl">
            Master web development and software engineering with interactive, beginner-friendly courses built with deep modularity and real-world projects.
          </p>
        </div>

        {/* Quick Stats overview */}
        <div className="flex items-center space-x-4 bg-[#0d131f] border border-[#1e293b] rounded-xl p-3 px-5 shrink-0">
          <div className="text-left">
            <span className="text-xs text-gray-400">Your Completed Lessons</span>
            <div className="text-lg font-bold text-[#22c55e] flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{totalLessonsCompleted} Lessons</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
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

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search courses or topics..."
            className="w-full bg-[#0d131f] border border-[#1e293b] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:border-[#22c55e] focus:outline-none"
          />
        </div>
      </div>

      {/* 1. ACTIVE COURSES */}
      {filteredActive.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></div>
            <h2 className="text-xl font-bold text-white">Active Learning Tracks</h2>
            <span className="text-xs text-gray-400">({filteredActive.length} Ready)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActive.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* 2. UPCOMING TRACKS (FUTURE ROADMAP) */}
      {filteredUpcoming.length > 0 && (
        <section className="space-y-5 pt-6 border-t border-[#1e293b]/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#22c55e]" />
              <h2 className="text-xl font-bold text-white">Upcoming & Future Tracks</h2>
              <span className="text-xs text-gray-400 font-mono">Phase 2 Roadmap</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredUpcoming.map(track => (
              <div
                key={track.id}
                className="rounded-xl bg-[#0a0f18] border border-[#1e293b]/80 p-4.5 flex flex-col justify-between hover:border-slate-700 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <TechBadge type={(track.badgeType as any) || 'default'} size="sm" />
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-200 mb-1">{track.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {track.description}
                  </p>
                </div>
                <div className="text-[11px] text-gray-500 pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span>{track.category}</span>
                  <span className="text-gray-600">{track.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
