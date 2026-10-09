import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { useNavigation } from '../../context/NavigationContext';
import { Bookmark, Check, X, ArrowRight } from 'lucide-react';

export const BookmarkToast: React.FC = () => {
  const { bookmarkNotification, dismissBookmarkNotification } = useLearning();
  const { navigateTo } = useNavigation();

  if (!bookmarkNotification) return null;

  const isAdded = bookmarkNotification.action === 'added';

  const handleViewBookmarks = () => {
    dismissBookmarkNotification();
    navigateTo('profile');
    // Smooth scroll down to Saved for Later section if on profile
    setTimeout(() => {
      const el = document.getElementById('saved-for-later-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-4 fade-in-50 duration-200">
      <div className="relative rounded-2xl bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] shadow-2xl p-4 overflow-hidden text-gray-900 dark:text-white">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center space-x-3 min-w-0">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                isAdded
                  ? 'bg-[#04AA6D]/20 text-[#04AA6D] border border-[#04AA6D]/40'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 border border-gray-300 dark:border-gray-700'
              }`}
            >
              {isAdded ? (
                <Bookmark className="w-4 h-4 fill-[#04AA6D]" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center space-x-1.5">
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isAdded ? 'text-[#04AA6D] dark:text-emerald-400' : 'text-gray-500'
                  }`}
                >
                  {isAdded ? 'Saved for Later' : 'Bookmark Removed'}
                </span>
                {isAdded && <Check className="w-3 h-3 text-[#04AA6D]" />}
              </div>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate mt-0.5">
                {bookmarkNotification.text}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1 shrink-0">
            {isAdded && (
              <button
                onClick={handleViewBookmarks}
                className="px-2.5 py-1 rounded-lg bg-[#04AA6D]/15 hover:bg-[#04AA6D]/25 text-[#04AA6D] dark:text-emerald-400 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                title="View in Profile"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
            <button
              onClick={dismissBookmarkNotification}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#141d2e] transition cursor-pointer"
              aria-label="Dismiss Notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
