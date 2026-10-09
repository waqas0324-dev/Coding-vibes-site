import React, { useState } from 'react';
import { PracticeQuestion } from '../../types';
import { Dumbbell, CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { FormattedText } from './FormattedText';

interface LessonPracticeProps {
  practiceList?: PracticeQuestion[];
  practice?: PracticeQuestion;
  index?: number;
  title?: string;
}

export const LessonPractice: React.FC<LessonPracticeProps> = ({
  practiceList,
  practice,
  index,
  title = 'Hands-On Practice Exercises'
}) => {
  const effectiveList = practiceList && practiceList.length > 0
    ? practiceList
    : (practice ? [practice] : []);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInputs, setUserInputs] = useState<Record<number, string>>({});
  const [selectedChoices, setSelectedChoices] = useState<Record<number, number>>({});
  const [checkedStatus, setCheckedStatus] = useState<Record<number, { isChecked: boolean; isCorrect: boolean }>>({});
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});

  if (!effectiveList || effectiveList.length === 0) return null;

  const currentQ = effectiveList[currentIdx];
  const currentStatus = checkedStatus[currentIdx] || { isChecked: false, isCorrect: false };
  const currentInput = userInputs[currentIdx] || '';
  const currentChoice = selectedChoices[currentIdx];

  const handleCheckAnswer = () => {
    let correct = false;

    if (currentQ.type === 'multiple_choice') {
      if (currentChoice !== undefined) {
        correct = currentChoice === Number(currentQ.correctAnswer);
      }
    } else {
      const trimmedUser = currentInput.trim().toLowerCase();
      if (Array.isArray(currentQ.correctAnswer)) {
        correct = currentQ.correctAnswer.some(ans => ans.trim().toLowerCase() === trimmedUser);
      } else {
        correct = String(currentQ.correctAnswer).trim().toLowerCase() === trimmedUser;
      }
    }

    setCheckedStatus(prev => ({
      ...prev,
      [currentIdx]: { isChecked: true, isCorrect: correct }
    }));
  };

  const handleResetCurrent = () => {
    setCheckedStatus(prev => ({
      ...prev,
      [currentIdx]: { isChecked: false, isCorrect: false }
    }));
    setUserInputs(prev => ({ ...prev, [currentIdx]: '' }));
    setSelectedChoices(prev => {
      const copy = { ...prev };
      delete copy[currentIdx];
      return copy;
    });
  };

  return (
    <div className="my-8 rounded-2xl bg-[#080d17] border border-[#1e293b] p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-emerald-500/15 text-[#22c55e] border border-[#22c55e]/30">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-gray-400">
              Apply what you have learned with quick interactive practice drills.
            </p>
          </div>
        </div>

        {effectiveList.length > 1 && (
          <div className="flex items-center space-x-1">
            {effectiveList.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition flex items-center justify-center ${
                  i === currentIdx
                    ? 'bg-[#22c55e] text-black shadow-md'
                    : checkedStatus[i]?.isChecked && checkedStatus[i]?.isCorrect
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-700/50'
                    : 'bg-[#141d2e] text-gray-400 border border-[#1e293b] hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Question Canvas */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-sm sm:text-base font-semibold text-white">
            {currentQ.question}
          </h4>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#141d2e] text-gray-400 border border-[#1e293b] shrink-0">
            {currentQ.type.replace(/_/g, ' ')}
          </span>
        </div>

        {currentQ.instructions && (
          <p className="text-xs text-gray-400 leading-relaxed font-mono bg-[#0d1422] p-3 rounded-xl border border-[#1e293b]">
            💡 {currentQ.instructions}
          </p>
        )}

        {/* 1. Multiple Choice */}
        {currentQ.type === 'multiple_choice' && currentQ.options && (
          <div className="space-y-2 pt-2">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = currentChoice === optIdx;
              const isSubmitted = currentStatus.isChecked;
              const isTargetCorrect = optIdx === Number(currentQ.correctAnswer);

              let optionStyle = 'bg-[#0c121e] border-[#1e293b] text-gray-300 hover:border-gray-600 hover:bg-[#111928]';
              if (isSubmitted) {
                if (isTargetCorrect) {
                  optionStyle = 'bg-emerald-950/50 border-[#22c55e] text-emerald-200';
                } else if (isSelected && !currentStatus.isCorrect) {
                  optionStyle = 'bg-rose-950/50 border-rose-500 text-rose-200';
                }
              } else if (isSelected) {
                optionStyle = 'bg-[#22c55e]/15 border-[#22c55e] text-white';
              }

              return (
                <button
                  key={optIdx}
                  disabled={currentStatus.isChecked}
                  onClick={() => setSelectedChoices(prev => ({ ...prev, [currentIdx]: optIdx }))}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between ${optionStyle}`}
                >
                  <span className="font-medium">{opt}</span>
                  {isSubmitted && isTargetCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                  )}
                  {isSubmitted && isSelected && !currentStatus.isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* 2. Text / Code Input */}
        {currentQ.type !== 'multiple_choice' && (
          <div className="space-y-3 pt-2">
            <input
              type="text"
              disabled={currentStatus.isChecked}
              value={currentInput}
              onChange={e => setUserInputs(prev => ({ ...prev, [currentIdx]: e.target.value }))}
              onKeyDown={e => {
                if (e.key === 'Enter' && !currentStatus.isChecked && currentInput.trim()) {
                  handleCheckAnswer();
                }
              }}
              placeholder="Type your answer here..."
              className="w-full bg-[#0d1422] border border-[#1e293b] rounded-xl px-4 py-3 text-xs sm:text-sm font-mono text-white placeholder-gray-500 focus:border-[#22c55e] focus:outline-none"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
          <div className="flex items-center space-x-2">
            {!currentStatus.isChecked ? (
              <button
                onClick={handleCheckAnswer}
                disabled={currentQ.type === 'multiple_choice' ? currentChoice === undefined : !currentInput.trim()}
                className="px-5 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-40 disabled:hover:bg-[#22c55e] text-black font-bold text-xs transition shadow-lg shadow-[#22c55e]/20 flex items-center space-x-1.5 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>Check Answer</span>
              </button>
            ) : (
              <button
                onClick={handleResetCurrent}
                className="px-4 py-2 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-gray-200 text-xs font-semibold transition flex items-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            )}

            {currentQ.hint && !currentStatus.isCorrect && (
              <button
                onClick={() => setShowHint(prev => ({ ...prev, [currentIdx]: !prev[currentIdx] }))}
                className="px-3 py-2 rounded-xl bg-[#0c121e] border border-[#1e293b] text-gray-400 hover:text-white text-xs transition flex items-center space-x-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHint[currentIdx] ? 'Hide Hint' : 'Hint'}</span>
              </button>
            )}
          </div>

          {effectiveList.length > 1 && currentIdx < effectiveList.length - 1 && (
            <button
              onClick={() => setCurrentIdx(prev => prev + 1)}
              className="px-4 py-2 rounded-xl bg-[#141d2e] hover:bg-[#1e293b] text-white text-xs font-semibold transition flex items-center space-x-1"
            >
              <span>Next Exercise</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Hint Box */}
        {showHint[currentIdx] && currentQ.hint && (
          <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200">
            <span className="font-bold">Hint: </span>
            <span>{currentQ.hint}</span>
          </div>
        )}

        {/* Explanation & Result Banner */}
        {currentStatus.isChecked && (
          <div
            className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
              currentStatus.isCorrect
                ? 'bg-emerald-950/40 border-[#22c55e]/50 text-emerald-200'
                : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
            }`}
          >
            <div className="flex items-center space-x-2 font-bold mb-1.5">
              {currentStatus.isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-[#22c55e]">Correct! Great job!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span className="text-rose-400">Not quite right.</span>
                </>
              )}
            </div>
            <FormattedText text={currentQ.explanation} />
          </div>
        )}
      </div>
    </div>
  );
};
