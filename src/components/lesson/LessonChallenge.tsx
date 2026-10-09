import React, { useState } from 'react';
import { ChallengeTask } from '../../types';
import { LiveEditor } from '../LiveEditor';
import { FormattedText } from './FormattedText';
import { Trophy, CheckCircle2, HelpCircle, Eye, Sparkles } from 'lucide-react';
import { CodeBlock } from '../CodeBlock';
import { useLearning } from '../../context/LearningContext';

interface LessonChallengeProps {
  challenge: ChallengeTask;
}

export const LessonChallenge: React.FC<LessonChallengeProps> = ({ challenge }) => {
  const { title, description, requirements, starterCode, solutionCode, hint, expectedOutputPreview } = challenge;
  const { isChallengeCompleted, markChallengeComplete } = useLearning();

  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const isCompleted = isChallengeCompleted(challenge.id);

  return (
    <div className="my-8 rounded-2xl bg-[#080d17] border border-[#1e293b] p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1e293b]">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
              CODING CHALLENGE
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {title}
            </h3>
          </div>
        </div>

        <button
          onClick={() => markChallengeComplete(challenge.id)}
          className={`flex items-center space-x-2 px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
            isCompleted
              ? 'bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/40'
              : 'bg-[#141d2e] text-gray-300 border border-[#1e293b] hover:border-[#22c55e]'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isCompleted ? 'Challenge Completed ✓' : 'Mark Completed (+35 XP)'}</span>
        </button>
      </div>

      {/* Description */}
      <div className="text-xs sm:text-sm text-gray-200 leading-relaxed">
        <FormattedText text={description} />
      </div>

      {/* Requirements Checklist */}
      {requirements && requirements.length > 0 && (
        <div className="rounded-xl bg-[#0d1422] border border-[#1e293b] p-4 space-y-2.5">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Task Requirements</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-300">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-[#22c55e] font-bold">✓</span>
                <span>
                  <FormattedText text={req} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Interactive live editor workspace */}
      <div>
        <LiveEditor
          initialHtml={starterCode.html || ''}
          initialCss={starterCode.css || ''}
          initialJs={starterCode.js || ''}
          title={`Challenge Workspace: ${title}`}
          instructions="Write your solution in the code editor and click 'Run Code' to test your result in the live preview."
        />
      </div>

      {/* Hint and Solution toggles */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center space-x-2">
          {hint && (
            <button
              onClick={() => setShowHint(prev => !prev)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] hover:border-amber-500/50 text-xs text-amber-300 transition"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>{showHint ? 'Hide Hint' : 'Need a Hint?'}</span>
            </button>
          )}

          {solutionCode && (
            <button
              onClick={() => setShowSolution(prev => !prev)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] hover:border-sky-500/50 text-xs text-sky-300 transition"
            >
              <Eye className="w-3.5 h-3.5 text-sky-400" />
              <span>{showSolution ? 'Hide Solution' : 'View Solution'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Hint Drawer */}
      {showHint && hint && (
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-200 animate-in fade-in space-y-1">
          <span className="font-bold font-mono uppercase text-amber-400">💡 Hint: </span>
          <span>
            <FormattedText text={hint} />
          </span>
        </div>
      )}

      {/* Solution Drawer */}
      {showSolution && solutionCode && (
        <div className="space-y-3 p-4 rounded-xl bg-[#09111c] border border-sky-500/40 animate-in fade-in">
          <h4 className="text-xs font-mono font-bold uppercase text-sky-400">
            Official Solution Code
          </h4>
          {solutionCode.html && (
            <CodeBlock code={solutionCode.html} language="html" filename="solution.html" />
          )}
          {solutionCode.css && (
            <CodeBlock code={solutionCode.css} language="css" filename="solution.css" />
          )}
          {solutionCode.js && (
            <CodeBlock code={solutionCode.js} language="javascript" filename="solution.js" />
          )}
        </div>
      )}
    </div>
  );
};
