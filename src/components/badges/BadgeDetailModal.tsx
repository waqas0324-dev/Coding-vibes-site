import React from 'react';
import { BadgeDefinition } from '../../data/badges';
import { BadgeIcon } from './BadgeIcon';
import { X, CheckCircle2, Lock, Zap, Calendar, Sparkles, ArrowRight, Share2 } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

interface BadgeDetailModalProps {
  badge: BadgeDefinition | null;
  isOpen: boolean;
  onClose: () => void;
  unlocked: boolean;
  unlockedAt?: string;
  currentProgress: number;
  maxProgress: number;
}

export const BadgeDetailModal: React.FC<BadgeDetailModalProps> = ({
  badge,
  isOpen,
  onClose,
  unlocked,
  unlockedAt,
  currentProgress,
  maxProgress
}) => {
  const { navigateTo } = useNavigation();
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !badge) return null;

  const percentage = Math.min(100, Math.round((currentProgress / maxProgress) * 100));

  const handleActionClick = () => {
    onClose();
    if (badge.category === 'lessons') {
      navigateTo('tutorials');
    } else if (badge.category === 'challenges') {
      navigateTo('practice');
    } else if (badge.category === 'projects') {
      navigateTo('projects');
    } else {
      navigateTo('courses');
    }
  };

  const handleShare = () => {
    const text = `🏆 I earned the "${badge.name}" badge (${badge.rarity} tier, +${badge.xpReward} XP) on Coding Vibes! Master web dev with interactive tutorials and projects.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] shadow-2xl overflow-hidden text-gray-900 dark:text-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Gradient Banner */}
        <div className={`h-28 w-full relative flex items-center justify-center ${
          badge.rarity === 'Diamond'
            ? 'bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600'
            : badge.rarity === 'Gold'
            ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500'
            : badge.rarity === 'Silver'
            ? 'bg-gradient-to-r from-slate-500 via-gray-600 to-slate-700'
            : 'bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800'
        }`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="absolute -bottom-8">
            <BadgeIcon name={badge.iconName} rarity={badge.rarity} unlocked={unlocked} size="xl" />
          </div>
        </div>

        {/* Content Body */}
        <div className="pt-12 px-6 pb-6 text-center space-y-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-gray-100 dark:bg-[#141d2e] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-[#1e293b]">
              <span>{badge.category}</span>
              <span>•</span>
              <span className={
                badge.rarity === 'Diamond' ? 'text-cyan-500 font-bold' :
                badge.rarity === 'Gold' ? 'text-amber-500 font-bold' :
                badge.rarity === 'Silver' ? 'text-slate-400 font-bold' :
                'text-amber-700 dark:text-amber-400 font-bold'
              }>{badge.rarity} Tier</span>
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <span>{badge.name}</span>
              {unlocked && <CheckCircle2 className="w-5 h-5 text-[#04AA6D] dark:text-emerald-400" />}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-sm mx-auto">
              {badge.description}
            </p>
          </div>

          {/* Lore Quote */}
          <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-[#090e17] border border-gray-200 dark:border-[#162032] text-xs text-gray-600 dark:text-gray-400 italic text-left relative">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 absolute top-3 right-3" />
            <p className="pr-4">"{badge.lore}"</p>
          </div>

          {/* Progress / Status Block */}
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#141d2e]/60 border border-gray-200 dark:border-[#1e293b] space-y-2.5 text-left">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-500 dark:text-gray-400">Unlock Condition</span>
              <span className="text-amber-500 dark:text-amber-400 font-bold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-amber-400" />
                +{badge.xpReward} XP Reward
              </span>
            </div>

            {unlocked ? (
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs">
                <span className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#04AA6D] dark:text-emerald-400" />
                  <span>Achievement Unlocked</span>
                </span>
                <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {unlockedAt ? new Date(unlockedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Achieved'}
                </span>
              </div>
            ) : (
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-xs font-mono text-gray-600 dark:text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Current Progress</span>
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {currentProgress} / {maxProgress} ({percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-[#1e293b] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#04AA6D] dark:bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            {unlocked ? (
              <button
                onClick={handleShare}
                className="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-[#141d2e] hover:bg-gray-200 dark:hover:bg-[#1e293b] border border-gray-300 dark:border-[#1e293b] text-xs font-bold text-gray-800 dark:text-white flex items-center justify-center space-x-1.5 transition cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-amber-500" />
                <span>{copied ? 'Copied to Clipboard!' : 'Share Achievement'}</span>
              </button>
            ) : (
              <button
                onClick={handleActionClick}
                className="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition shadow-sm cursor-pointer"
              >
                <span>Make Progress Towards Badge</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 dark:border-[#1e293b] text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#141d2e] transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
