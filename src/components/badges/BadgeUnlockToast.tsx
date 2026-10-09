import React, { useEffect } from 'react';
import { useLearning } from '../../context/LearningContext';
import { useNavigation } from '../../context/NavigationContext';
import { BadgeIcon } from './BadgeIcon';
import { X, Trophy, Sparkles, ArrowRight, Zap } from 'lucide-react';

export const BadgeUnlockToast: React.FC = () => {
  const { recentUnlockedBadge, dismissBadgeNotification } = useLearning();
  const { navigateTo } = useNavigation();

  useEffect(() => {
    if (recentUnlockedBadge) {
      const timer = setTimeout(() => {
        dismissBadgeNotification();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [recentUnlockedBadge, dismissBadgeNotification]);

  if (!recentUnlockedBadge) return null;

  const handleViewDashboard = () => {
    dismissBadgeNotification();
    navigateTo('profile');
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 max-w-md w-full animate-in slide-in-from-bottom-5 duration-300">
      <div className="relative rounded-2xl bg-white dark:bg-[#0c121e] border-2 border-[#04AA6D] dark:border-emerald-500 shadow-2xl p-4 sm:p-5 overflow-hidden text-gray-900 dark:text-white">
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#04AA6D]/15 dark:bg-emerald-500/20 blur-2xl rounded-full pointer-events-none" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start space-x-3.5">
            <div className="relative">
              <BadgeIcon
                name={recentUnlockedBadge.iconName}
                rarity={recentUnlockedBadge.rarity}
                unlocked={true}
                size="md"
              />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#04AA6D] dark:text-emerald-400 flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  <span>BADGE UNLOCKED!</span>
                </span>
                <span className="text-[10px] font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.2 rounded border border-amber-200 dark:border-amber-800/40 flex items-center">
                  <Zap className="w-2.5 h-2.5 mr-0.5 fill-amber-400" />
                  +{recentUnlockedBadge.xpReward} XP
                </span>
              </div>

              <h4 className="text-sm font-black text-gray-900 dark:text-white flex items-center gap-1">
                <span>{recentUnlockedBadge.name}</span>
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              </h4>

              <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">
                {recentUnlockedBadge.description}
              </p>

              <div className="pt-2 flex items-center space-x-2">
                <button
                  onClick={handleViewDashboard}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#04AA6D] hover:bg-[#03945f] text-white text-xs font-bold transition shadow-xs cursor-pointer"
                >
                  <span>View in Dashboard</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={dismissBadgeNotification}
                  className="px-2.5 py-1.5 rounded-lg text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={dismissBadgeNotification}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#141d2e] transition shrink-0"
            aria-label="Close Toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
