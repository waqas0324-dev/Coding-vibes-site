import React, { useState } from 'react';
import { tutorialsCatalog } from '../data/tutorials';
import { useNavigation } from '../context/NavigationContext';
import { TechBadge } from '../components/TechBadge';
import { Search, BookOpen, Clock, ArrowRight } from 'lucide-react';

export const TutorialsPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'React'];

  const filtered = tutorialsCatalog.filter(tut => {
    const matchCat = selectedCategory === 'All' || tut.category === selectedCategory;
    const matchSearch =
      tut.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tut.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleTutorialClick = (tut: typeof tutorialsCatalog[0]) => {
    if (tut.courseSlug === 'courses') {
      navigateTo('courses');
    } else {
      navigateTo('lesson', {
        courseSlug: tut.courseSlug,
        lessonSlug: tut.startLessonSlug
      });
    }
  };

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2 pb-6 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">
            TUTORIALS
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-gray-400">Step-by-step guides</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Web Development Tutorials
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          Master the fundamentals of frontend development with curated step-by-step tutorials and interactive exercises.
        </p>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search tutorials..."
            className="w-full bg-[#0d131f] border border-[#1e293b] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:border-[#22c55e] focus:outline-none"
          />
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(tut => (
          <div
            key={tut.id}
            onClick={() => handleTutorialClick(tut)}
            className="group rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 flex flex-col justify-between cursor-pointer hover:border-[#22c55e]/50 hover:bg-[#111a2c] transition duration-300 shadow-lg hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <TechBadge type={tut.badgeType} size="md" />
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  {tut.difficulty}
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#22c55e] transition mb-2">
                {tut.title}
              </h3>
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                {tut.description}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs text-gray-400 py-3 border-t border-[#1e293b]/80 mb-3">
                <div className="flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-gray-500" />
                  <span>{tut.lessonsCount} Lessons</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-gray-500" />
                  <span>{tut.readTime}</span>
                </div>
              </div>

              <button className="w-full py-2.5 bg-[#141d2e] group-hover:bg-[#22c55e] text-gray-200 group-hover:text-black font-semibold text-xs rounded-lg transition flex items-center justify-center space-x-1.5">
                <span>Start Tutorial</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
