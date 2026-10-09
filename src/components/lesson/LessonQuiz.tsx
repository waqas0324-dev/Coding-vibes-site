import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';
import { FormattedText } from './FormattedText';

interface LessonQuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
  title?: string;
}

export const LessonQuiz: React.FC<LessonQuizProps> = ({
  questions,
  onComplete,
  title = 'Knowledge Check Quiz'
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIdx];
  const selectedOption = selectedAnswers[currentIdx];
  const hasSubmittedCurrent = isSubmitted[currentIdx];
  const isCurrentCorrect = selectedOption === currentQ.correctAnswerIndex;

  const handleSelect = (optionIdx: number) => {
    if (hasSubmittedCurrent) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const handleSubmitQuestion = () => {
    if (selectedOption === undefined) return;
    setIsSubmitted(prev => ({ ...prev, [currentIdx]: true }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
      // Calculate score
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctAnswerIndex) {
          correctCount++;
        }
      });
      if (onComplete) {
        onComplete(correctCount, questions.length);
      }
    }
  };

  const handleRetryCurrent = () => {
    setIsSubmitted(prev => ({ ...prev, [currentIdx]: false }));
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIdx];
      return copy;
    });
  };

  const handleRetryAll = () => {
    setSelectedAnswers({});
    setIsSubmitted({});
    setCurrentIdx(0);
    setIsFinished(false);
  };

  const calculateScore = () => {
    let count = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) count++;
    });
    return count;
  };

  return (
    <div className="my-8 rounded-2xl bg-[#080d17] border border-[#1e293b] p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Quiz Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-gray-400">
              Test your understanding of the concepts taught in this lesson.
            </p>
          </div>
        </div>

        {!isFinished && (
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#141d2e] text-sky-400 border border-sky-500/30">
            Question {currentIdx + 1} of {questions.length}
          </span>
        )}
      </div>

      {isFinished ? (
        /* Quiz Finished View */
        <div className="text-center py-8 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#22c55e]/20 border-2 border-[#22c55e] flex items-center justify-center text-[#22c55e] shadow-xl shadow-[#22c55e]/20">
            <Award className="w-8 h-8" />
          </div>

          <h4 className="text-xl font-bold text-white">Quiz Completed!</h4>

          <p className="text-sm text-gray-300">
            You scored <strong className="text-[#22c55e] font-mono text-base">{calculateScore()}</strong> out of{' '}
            <strong className="text-white font-mono">{questions.length}</strong> correct (
            {Math.round((calculateScore() / questions.length) * 100)}%).
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={handleRetryAll}
              className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-[#141d2e] border border-[#1e293b] hover:border-[#22c55e] text-gray-200 hover:text-white text-xs font-bold transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Quiz</span>
            </button>
          </div>
        </div>
      ) : hasSubmittedCurrent && isCurrentCorrect ? (
        /* SCREENSHOT 3 CELEBRATION CARD */
        <div className="relative rounded-2xl bg-[#04AA6D] text-white p-8 sm:p-12 text-center shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Confetti Dots */}
          <div className="absolute top-4 left-8 w-4 h-4 rounded-full bg-yellow-300 opacity-90 animate-bounce" />
          <div className="absolute top-12 left-1/4 w-3 h-3 rounded-full bg-purple-300 opacity-80" />
          <div className="absolute top-6 right-16 w-5 h-5 rounded-full bg-pink-300 opacity-85" />
          <div className="absolute bottom-8 left-12 w-3.5 h-3.5 rounded-full bg-cyan-200 opacity-80" />
          <div className="absolute bottom-10 right-20 w-4 h-4 rounded-full bg-yellow-200 opacity-90" />
          <div className="absolute top-1/2 right-8 w-3 h-3 rounded-full bg-indigo-200 opacity-75" />

          <div className="relative z-10 max-w-md mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Correct Answer!
            </h2>
            <p className="text-base text-emerald-50 font-medium">
              Nice work. That one was spot on.
            </p>

            {currentQ.explanation && (
              <p className="text-xs text-emerald-100/90 pt-1 pb-2">
                <FormattedText text={currentQ.explanation} />
              </p>
            )}

            <div className="pt-3 flex justify-center">
              <button
                onClick={handleNext}
                className="px-8 py-3 rounded-full bg-[#282A35] hover:bg-[#1a1c24] text-white font-extrabold text-sm sm:text-base shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {currentIdx < questions.length - 1 ? 'Next Question »' : 'View Results »'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Regular Question and Options View */
        <div className="space-y-5">
          <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
            <FormattedText text={currentQ.question} />
          </h4>

          <div className="space-y-2.5">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedOption === optIdx;
              const isTargetCorrect = optIdx === currentQ.correctAnswerIndex;

              let style = 'border-[#1e293b] bg-[#0c1320] text-gray-300 hover:border-gray-500';

              if (hasSubmittedCurrent) {
                if (isTargetCorrect) {
                  style = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold ring-1 ring-emerald-500';
                } else if (isSelected && !isTargetCorrect) {
                  style = 'border-rose-500 bg-rose-950/40 text-rose-300 line-through';
                } else {
                  style = 'border-[#1e293b] bg-[#080d14] text-gray-500 opacity-60';
                }
              } else if (isSelected) {
                style = 'border-sky-500 bg-sky-950/30 text-white ring-1 ring-sky-500 font-medium';
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelect(optIdx)}
                  disabled={hasSubmittedCurrent}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition cursor-pointer disabled:cursor-default ${style}`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-[#141d2e] border border-[#1e293b] text-gray-400 font-mono text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>
                      <FormattedText text={opt} />
                    </span>
                  </div>

                  {hasSubmittedCurrent && isTargetCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" />
                  )}
                  {hasSubmittedCurrent && isSelected && !isTargetCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* If submitted and INCORRECT: show explanation and retry */}
          {hasSubmittedCurrent && !isCurrentCorrect && (
            <div className="p-4 rounded-xl border border-rose-800 bg-rose-950/30 text-rose-200 text-xs sm:text-sm space-y-2">
              <div className="font-bold flex items-center space-x-1.5 text-rose-400">
                <XCircle className="w-4 h-4" />
                <span>Not quite right</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <FormattedText text={currentQ.explanation} />
              </p>
              <div className="pt-2 flex items-center space-x-3">
                <button
                  onClick={handleRetryCurrent}
                  className="px-4 py-1.5 rounded-lg bg-rose-900 hover:bg-rose-800 text-white text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-1.5 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-gray-200 text-xs font-bold transition cursor-pointer"
                >
                  <span>Skip Question »</span>
                </button>
              </div>
            </div>
          )}

          {/* Centered Bold Submit Button */}
          {!hasSubmittedCurrent && (
            <div className="flex justify-center pt-3">
              <button
                onClick={handleSubmitQuestion}
                disabled={selectedOption === undefined}
                className="px-8 py-3 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed shadow-md cursor-pointer"
              >
                Submit Answer »
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
