import React from 'react';
import { Lightbulb, AlertTriangle, BookOpen, Info, ShieldAlert, Check, X } from 'lucide-react';
import { FormattedText } from './FormattedText';
import { CalloutBox } from '../../types';

interface CalloutProps {
  callout?: CalloutBox;
  box?: CalloutBox;
}

export const Callout: React.FC<CalloutProps> = ({ callout, box }) => {
  const activeCallout = callout || box;
  if (!activeCallout) return null;

  const { type, title, content, term, wrongCode, correctCode, explanation } = activeCallout;

  if (type === 'definition') {
    return (
      <div className="my-6 rounded-lg bg-[#D9EEE1] dark:bg-[#0c2419] border-l-4 border-[#04AA6D] p-5 sm:p-6 shadow-xs transition-colors">
        <div className="flex items-start space-x-3">
          <div className="p-1.5 rounded bg-[#04AA6D] text-white shrink-0 mt-0.5">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold tracking-wider uppercase text-[#04AA6D] dark:text-[#4ade80]">
                DEFINITION
              </span>
              {term && (
                <span className="text-sm sm:text-base font-extrabold text-[#282A35] dark:text-white">
                  — {term}
                </span>
              )}
            </div>
            <div className="text-sm sm:text-base text-[#282A35] dark:text-gray-100 font-normal leading-relaxed">
              <FormattedText text={content} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'tip') {
    return (
      <div className="my-6 rounded-lg bg-[#FFF4A3] dark:bg-[#231e08] border-l-4 border-[#ff9800] p-5 sm:p-6 shadow-xs transition-colors">
        <div className="flex items-start space-x-3">
          <div className="p-1.5 rounded bg-[#ff9800] text-white shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-[#b25e00] dark:text-[#fbbf24] flex items-center space-x-1.5">
              <span>TIP / BEST PRACTICE</span>
              {title && <span className="text-[#282A35] dark:text-white normal-case font-bold">• {title}</span>}
            </h4>
            <div className="text-sm sm:text-base text-[#282A35] dark:text-gray-100 leading-relaxed font-normal">
              <FormattedText text={content} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'warning') {
    return (
      <div className="my-6 rounded-lg bg-[#ffdddd] dark:bg-[#250d11] border-l-4 border-[#f44336] p-5 sm:p-6 shadow-xs transition-colors">
        <div className="flex items-start space-x-3">
          <div className="p-1.5 rounded bg-[#f44336] text-white shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-[#d32f2f] dark:text-rose-400">
              WARNING: {title || 'IMPORTANT NOTE'}
            </h4>
            <div className="text-sm sm:text-base text-[#282A35] dark:text-gray-100 leading-relaxed font-normal">
              <FormattedText text={content} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'pitfall' && wrongCode && correctCode) {
    return (
      <div className="my-6 rounded-lg bg-gray-50 dark:bg-[#0c121e] border-l-4 border-rose-500 p-5 sm:p-6 space-y-4 shadow-xs transition-colors">
        <div className="flex items-center space-x-2 text-rose-700 dark:text-rose-400 font-extrabold text-sm sm:text-base">
          <ShieldAlert className="w-5 h-5" />
          <span>{title || 'Avoid This Common Mistake'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-rose-300 dark:border-rose-500/30 bg-rose-50 dark:bg-rose-950/20 p-4 space-y-2">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-rose-700 dark:text-rose-400 font-mono uppercase">
              <X className="w-4 h-4" />
              <span>DON&apos;T DO THIS (WRONG)</span>
            </div>
            <pre className="text-xs font-mono text-rose-950 dark:text-rose-200 p-3 rounded bg-white dark:bg-rose-950/40 overflow-x-auto border border-rose-200 dark:border-rose-800/30">
              {wrongCode}
            </pre>
          </div>

          <div className="rounded-lg border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/20 p-4 space-y-2">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono uppercase">
              <Check className="w-4 h-4" />
              <span>DO THIS INSTEAD (CORRECT)</span>
            </div>
            <pre className="text-xs font-mono text-emerald-950 dark:text-emerald-200 p-3 rounded bg-white dark:bg-emerald-950/40 overflow-x-auto border border-emerald-200 dark:border-emerald-800/30">
              {correctCode}
            </pre>
          </div>
        </div>

        {explanation && (
          <div className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed pt-1">
            <strong className="text-[#282A35] dark:text-white">Explanation: </strong>
            <FormattedText text={explanation} />
          </div>
        )}
      </div>
    );
  }

  // Default note
  return (
    <div className="my-6 rounded-lg bg-[#e7e9eb] dark:bg-[#141d2e] border-l-4 border-[#282A35] dark:border-gray-400 p-5 sm:p-6 shadow-xs transition-colors">
      <div className="flex items-start space-x-3">
        <div className="p-1.5 rounded bg-[#282A35] dark:bg-gray-400 text-white dark:text-gray-900 shrink-0 mt-0.5">
          <Info className="w-4 h-4" />
        </div>
        <div className="space-y-1.5 flex-1">
          <h4 className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-[#282A35] dark:text-white">
            NOTE: {title || 'IMPORTANT INFORMATION'}
          </h4>
          <div className="text-sm sm:text-base text-[#282A35] dark:text-gray-100 leading-relaxed font-normal">
            <FormattedText text={content} />
          </div>
        </div>
      </div>
    </div>
  );
};
