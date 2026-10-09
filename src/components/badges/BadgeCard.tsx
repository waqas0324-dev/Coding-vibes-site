import React from 'react';
import { BadgeDefinition } from '../../data/badges';
import { BadgeIcon } from './BadgeIcon';
import { CheckCircle2, Lock, Zap } from 'lucide-react';

interface BadgeCardProps {
  badge: BadgeDefinition;
  unlocked: boolean;
  unlockedAt?: string;
  currentProgress: number;
  maxProgress: number;
  onClick: () => void;
}

export const BadgeCard: React.FC<BadgeCardProps> = ({
  badge,
  unlocked,
  unlockedAt,
  currentProgress,
  maxProgress,
  onClick
}) => {
  const percentage = Math.min(100, Math.round((currentProgress / maxProgress) * 100));

  const rarityPill = {
    Bronze: 'bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700/50',
    Silver: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600',
    Gold: 'bg-yellow-100 dark:bg-yellow-950/50 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-600/50',
    Diamond: 'bg-cyan-100 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-300 border-cyan-300 dark:border-cyan-600/50 font-bold'
  }[badge.rarity];

  const categoryLabel = {
    lessons: 'Lesson',
    challenges: 'Challenge',
    projects: 'Project',
    milestones: 'Milestone'
  }[badge.category];

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none ${
        unlocked
          ? 'bg-white dark:bg-[#0c121e] border-gray-200 dark:border-[#1e293b] hover:border-[#04AA6D]/60 dark:hover:border-emerald-500/60 shadow-xs hover:shadow-md'
          : 'bg-gray-50/70 dark:bg-[#090e17]/80 border-gray-200/60 dark:border-[#162032] opacity-85 hover:opacity-100 hover:border-gray-300 dark:hover:border-gray-700'
      }`}
    >
      <div>
        {/* Top Badges & Rarity */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 dark:bg-[#141d2e] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#1e293b]">
            {categoryLabel}
          </span>
          <div className="flex items-center space-x-1.5">
            <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${rarityPill}`}>
              {badge.rarity}
            </span>
            <span className="flex items-center text-[10px] font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-1.5 py-0.5 rounded-md border border-amber-200 dark:border-amber-800/40">
              <Zap className="w-2.5 h-2.5 mr-0.5 fill-amber-400" />
              +{badge.xpReward} XP
            </span>
          </div>
        </div>

        {/* Center: Badge Icon and Details */}
        <div className="flex items-start space-x-3.5 mb-3">
          <div className="transform group-hover:scale-105 transition-transform duration-200">
            <BadgeIcon name={badge.iconName} rarity={badge.rarity} unlocked={unlocked} size="md" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5 truncate">
              <span>{badge.name}</span>
              {unlocked ? (
                <CheckCircle2 className="w-4 h-4 text-[#04AA6D] dark:text-emerald-400 shrink-0" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-gray-400 dark:text-gray-600 shrink-0" />
              )}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mt-0.5 leading-relaxed">
              {badge.description}
            </p>
          </div>
        </div>
      </div>

      {/* Footer: Progress or Unlocked Time */}
      <div className="pt-3 border-t border-gray-100 dark:border-[#162032] mt-1">
        {unlocked ? (
          <div className="flex items-center justify-between text-[11px] text-[#04AA6D] dark:text-emerald-400 font-semibold">
            <span className="flex items-center gap-1">
              <span>✓ Unlocked</span>
            </span>
            <span className="text-[10px] text-gray-600 dark:text-gray-300 font-mono">
              {unlockedAt ? new Date(unlockedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'Achieved'}
            </span>
          </div>
        ) : (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-600 dark:text-gray-300">
              <span>Progress</span>
              <span className="font-bold text-gray-800 dark:text-gray-200">
                {currentProgress} / {maxProgress} ({percentage}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-[#162032] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#04AA6D] dark:bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
