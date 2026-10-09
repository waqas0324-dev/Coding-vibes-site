import React from 'react';

interface TechBadgeProps {
  type: 'html' | 'css' | 'js' | 'react' | 'tailwind' | 'node' | 'python' | 'git' | 'ts' | 'default';
  size?: 'sm' | 'md' | 'lg';
}

export const TechBadge: React.FC<TechBadgeProps> = ({ type, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-14 h-14 text-lg'
  };

  switch (type) {
    case 'html':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#e34f26]/15 border border-[#e34f26]/40 text-[#e34f26] font-extrabold flex items-center justify-center shrink-0 shadow-sm shadow-[#e34f26]/10`}>
          <span className="leading-none">5</span>
        </div>
      );
    case 'css':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#1572b6]/15 border border-[#1572b6]/40 text-[#3b82f6] font-extrabold flex items-center justify-center shrink-0 shadow-sm shadow-[#1572b6]/10`}>
          <span className="leading-none">3</span>
        </div>
      );
    case 'js':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#f7df1e]/15 border border-[#f7df1e]/40 text-[#eab308] font-bold flex items-center justify-center shrink-0 shadow-sm shadow-[#f7df1e]/10`}>
          <span className="leading-none text-[11px] sm:text-[13px] tracking-tighter">JS</span>
        </div>
      );
    case 'react':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#61dafb]/15 border border-[#61dafb]/40 text-[#38bdf8] flex items-center justify-center shrink-0 shadow-sm shadow-[#61dafb]/10`}>
          <svg className="w-5 h-5 animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/>
          </svg>
        </div>
      );
    case 'tailwind':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#06b6d4]/15 border border-[#06b6d4]/40 text-[#22d3ee] flex items-center justify-center shrink-0`}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.337,13.382,7.976,12,6.001,12z"/>
          </svg>
        </div>
      );
    case 'node':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#22c55e]/15 border border-[#22c55e]/40 text-[#4ade80] font-bold flex items-center justify-center shrink-0`}>
          <span className="leading-none text-[10px] tracking-tighter">JS</span>
        </div>
      );
    case 'ts':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#3178c6]/15 border border-[#3178c6]/40 text-[#60a5fa] font-bold flex items-center justify-center shrink-0`}>
          <span className="leading-none text-[11px] font-bold">TS</span>
        </div>
      );
    case 'python':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#38bdf8]/15 border border-[#38bdf8]/40 text-[#38bdf8] font-bold flex items-center justify-center shrink-0`}>
          <span className="leading-none text-[11px] font-bold">PY</span>
        </div>
      );
    case 'git':
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#f05032]/15 border border-[#f05032]/40 text-[#f87171] font-bold flex items-center justify-center shrink-0`}>
          <span className="leading-none text-[10px] font-bold">GIT</span>
        </div>
      );
    default:
      return (
        <div className={`${sizeClasses[size]} rounded bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#22c55e] flex items-center justify-center shrink-0`}>
          <span className="text-xs font-mono font-bold">&lt;/&gt;</span>
        </div>
      );
  }
};
