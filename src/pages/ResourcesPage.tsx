import React, { useState } from 'react';
import { resourcesCatalog } from '../data/resources';
import { CodeBlock } from '../components/CodeBlock';
import {
  BookOpen,
  FileText,
  Wrench,
  Terminal,
  Search,
  Clock,
  Tag,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('res-html-cheatsheet');

  const categories = [
    'All',
    'Cheat Sheets',
    'JavaScript Reference',
    'Git & GitHub Guides',
    'VS Code Guides',
    'Developer Tools'
  ];

  const filtered = resourcesCatalog.filter(res => {
    const matchCat = selectedCategory === 'All' || res.category === selectedCategory;
    const matchSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2 pb-6 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">
            RESOURCES & GUIDES
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-gray-400">Developer Toolkit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Developer Resources & Cheatsheets
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          Quick reference sheets, syntax summaries, VS Code configurations, and developer toolkits to supercharge your daily coding workflow.
        </p>
      </div>

      {/* Filters & Search */}
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
            placeholder="Search cheatsheets & guides..."
            className="w-full bg-[#0d131f] border border-[#1e293b] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:border-[#22c55e] focus:outline-none"
          />
        </div>
      </div>

      {/* Resources Accordion / List */}
      <div className="space-y-4">
        {filtered.map(res => {
          const isExpanded = expandedId === res.id;

          return (
            <div
              key={res.id}
              className="rounded-2xl bg-[#0d131f] border border-[#1e293b] overflow-hidden transition"
            >
              <div
                onClick={() => toggleExpand(res.id)}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#111a2c] transition"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#141d2e] text-[#22c55e] border border-[#22c55e]/30">
                      {res.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{res.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{res.title}</h3>
                  <p className="text-xs text-gray-400">{res.description}</p>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <div className="flex flex-wrap gap-1.5 hidden md:flex">
                    {res.tags?.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button className="p-2 rounded-lg bg-[#141d2e] text-gray-300">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#22c55e]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {isExpanded && res.content && (
                <div className="p-5 border-t border-[#1e293b] bg-[#080d14] animate-in fade-in duration-200">
                  <div className="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300">
                    <pre className="p-4 bg-[#0d131f] border border-[#1e293b] rounded-xl font-mono text-xs overflow-x-auto text-emerald-400">
                      {res.content}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
