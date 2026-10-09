import React, { useState } from 'react';
import { Sparkles, RotateCcw, HelpCircle } from 'lucide-react';

interface SlotItem {
  id: number;
  expected: string;
  current: string | null;
}

const INITIAL_TAGS = [
  '<body>',
  '<h1>',
  '</p>',
  '</html>',
  '<p>',
  '</body>',
  '<html>',
  '</h1>'
];

export const HtmlTagSlotExercise: React.FC = () => {
  // 8 slots matching Screenshot 4
  const [slots, setSlots] = useState<SlotItem[]>([
    { id: 1, expected: '<html>', current: null },
    { id: 2, expected: '<body>', current: null },
    { id: 3, expected: '<h1>', current: null },
    { id: 4, expected: '</h1>', current: null },
    { id: 5, expected: '<p>', current: null },
    { id: 6, expected: '</p>', current: null },
    { id: 7, expected: '</body>', current: null },
    { id: 8, expected: '</html>', current: null }
  ]);

  // Remaining tags in pool
  const [tagPool, setTagPool] = useState<string[]>(INITIAL_TAGS);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Click tag to place into first empty slot
  const handleSelectTag = (tag: string, indexInPool: number) => {
    if (submitted && isCorrect) return;

    // Find first empty slot
    const emptySlotIndex = slots.findIndex(s => s.current === null);
    if (emptySlotIndex === -1) return; // All slots filled

    // Remove from pool
    const newPool = [...tagPool];
    newPool.splice(indexInPool, 1);
    setTagPool(newPool);

    // Place into slot
    const newSlots = [...slots];
    newSlots[emptySlotIndex] = {
      ...newSlots[emptySlotIndex],
      current: tag
    };
    setSlots(newSlots);
    setSubmitted(false);
  };

  // Click slot to remove tag and put back into pool
  const handleRemoveFromSlot = (slotIndex: number) => {
    if (submitted && isCorrect) return;
    const tag = slots[slotIndex].current;
    if (!tag) return;

    // Add back to pool
    setTagPool(prev => [...prev, tag]);

    // Clear slot
    const newSlots = [...slots];
    newSlots[slotIndex] = {
      ...newSlots[slotIndex],
      current: null
    };
    setSlots(newSlots);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    // Check all slots
    const allFilled = slots.every(s => s.current !== null);
    if (!allFilled) {
      alert('Please fill all slots before submitting your answer!');
      return;
    }

    const correct = slots.every(s => s.current === s.expected);
    setIsCorrect(correct);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSlots([
      { id: 1, expected: '<html>', current: null },
      { id: 2, expected: '<body>', current: null },
      { id: 3, expected: '<h1>', current: null },
      { id: 4, expected: '</h1>', current: null },
      { id: 5, expected: '<p>', current: null },
      { id: 6, expected: '</p>', current: null },
      { id: 7, expected: '</body>', current: null },
      { id: 8, expected: '</html>', current: null }
    ]);
    setTagPool(INITIAL_TAGS);
    setSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  return (
    <div className="my-8 rounded-2xl bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-8 shadow-xl transition-all relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1 mb-5 pb-3 border-b border-gray-200 dark:border-[#1e293b]">
        <div className="flex items-center space-x-2 text-[#04AA6D] font-extrabold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Exercise</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#282A35] dark:text-white">
          Test Yourself With Exercises
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Insert the missing HTML tags to complete the basic structure of an HTML document:
        </p>
      </div>

      {/* SUCCESS CELEBRATION MODAL / OVERLAY (Matches Screenshot 3) */}
      {submitted && isCorrect ? (
        <div className="relative rounded-2xl bg-[#04AA6D] text-white p-8 sm:p-12 text-center shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* Decorative Confetti Dots matching Screenshot 3 */}
          <div className="absolute top-4 left-8 w-4 h-4 rounded-full bg-yellow-300 opacity-90 animate-bounce" />
          <div className="absolute top-12 left-1/4 w-3 h-3 rounded-full bg-purple-300 opacity-80" />
          <div className="absolute top-6 right-16 w-5 h-5 rounded-full bg-pink-300 opacity-85" />
          <div className="absolute bottom-8 left-12 w-3.5 h-3.5 rounded-full bg-cyan-200 opacity-80" />
          <div className="absolute bottom-10 right-20 w-4 h-4 rounded-full bg-yellow-200 opacity-90" />
          <div className="absolute top-1/2 right-8 w-3 h-3 rounded-full bg-indigo-200 opacity-75" />

          {/* Celebration Content */}
          <div className="relative z-10 max-w-lg mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Correct Answer!
            </h2>
            <p className="text-base sm:text-lg text-emerald-50 font-medium">
              Nice work. That one was spot on.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  const quizEl = document.getElementById('quiz') || document.getElementById('takeaways');
                  if (quizEl) {
                    quizEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-7 py-3 rounded-full bg-[#282A35] hover:bg-[#1a1c24] text-white font-extrabold text-sm sm:text-base shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center space-x-2"
              >
                <span>Continue to Quiz »</span>
              </button>

              <button
                onClick={handleReset}
                className="px-5 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-sm transition flex items-center space-x-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Practice Again</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* The Interactive Code Editor Area matching Screenshot 4 */
        <div className="space-y-6">
          {/* Incorrect Banner */}
          {submitted && !isCorrect && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-200 text-sm flex items-center justify-between">
              <div>
                <strong className="font-bold">Not quite right.</strong> Some tags are out of position. Click any slot to remove the tag and try again!
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="ml-3 px-3 py-1 rounded bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-100 text-xs font-bold shrink-0 hover:opacity-80"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Code Layout Box */}
          <div className="bg-[#f1f5f9] dark:bg-[#070b12] border border-gray-300 dark:border-[#1e293b] rounded-xl p-5 sm:p-7 font-mono text-sm sm:text-base space-y-3 shadow-inner">
            {/* Line 1: <!DOCTYPE html> */}
            <div className="text-gray-500 dark:text-gray-400 select-none">
              &lt;!DOCTYPE html&gt;
            </div>

            {/* Line 2: Slot 1 (<html>) */}
            <div className="flex items-center">
              <SlotBox
                slot={slots[0]}
                onClick={() => handleRemoveFromSlot(0)}
                isSubmitted={submitted}
              />
            </div>

            {/* Line 3: Slot 2 (<body>) */}
            <div className="flex items-center">
              <SlotBox
                slot={slots[1]}
                onClick={() => handleRemoveFromSlot(1)}
                isSubmitted={submitted}
              />
            </div>

            {/* Blank separator */}
            <div className="h-2" />

            {/* Line 4: Slot 3 (<h1>) My First Heading Slot 4 (</h1>) */}
            <div className="flex flex-wrap items-center gap-2">
              <SlotBox
                slot={slots[2]}
                onClick={() => handleRemoveFromSlot(2)}
                isSubmitted={submitted}
              />
              <span className="text-gray-900 dark:text-white font-bold select-none">
                My First Heading
              </span>
              <SlotBox
                slot={slots[3]}
                onClick={() => handleRemoveFromSlot(3)}
                isSubmitted={submitted}
              />
            </div>

            {/* Blank separator */}
            <div className="h-2" />

            {/* Line 5: Slot 5 (<p>) My first paragraph. Slot 6 (</p>) */}
            <div className="flex flex-wrap items-center gap-2">
              <SlotBox
                slot={slots[4]}
                onClick={() => handleRemoveFromSlot(4)}
                isSubmitted={submitted}
              />
              <span className="text-gray-900 dark:text-white select-none">
                My first paragraph.
              </span>
              <SlotBox
                slot={slots[5]}
                onClick={() => handleRemoveFromSlot(5)}
                isSubmitted={submitted}
              />
            </div>

            {/* Blank separator */}
            <div className="h-2" />

            {/* Line 6: Slot 7 (</body>) */}
            <div className="flex items-center">
              <SlotBox
                slot={slots[6]}
                onClick={() => handleRemoveFromSlot(6)}
                isSubmitted={submitted}
              />
            </div>

            {/* Line 7: Slot 8 (</html>) */}
            <div className="flex items-center">
              <SlotBox
                slot={slots[7]}
                onClick={() => handleRemoveFromSlot(7)}
                isSubmitted={submitted}
              />
            </div>
          </div>

          {/* Clickable Tag Pill Buttons */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider flex items-center justify-between">
              <span>Available Tags (Click to place in next empty slot):</span>
              <span className="text-gray-500 font-normal">
                {tagPool.length} of {INITIAL_TAGS.length} remaining
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1 min-h-[44px]">
              {tagPool.map((tag, idx) => (
                <button
                  key={`${tag}-${idx}`}
                  onClick={() => handleSelectTag(tag, idx)}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-[#141d2e] hover:bg-gray-100 dark:hover:bg-[#1e293b] border-2 border-gray-300 dark:border-[#1e293b] text-gray-900 dark:text-white font-mono font-bold text-sm shadow-xs transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {tag}
                </button>
              ))}

              {tagPool.length === 0 && (
                <span className="text-xs text-gray-500 italic py-2">
                  All tags have been placed into the slots above! Click 'Submit Answer »' or click any slot to remove a tag.
                </span>
              )}
            </div>
          </div>

          {/* Submit & Reset Controls matching Screenshot 4 */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={handleSubmit}
              className="px-6 py-2.5 rounded bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm shadow-sm transition inline-flex items-center space-x-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Submit Answer »</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowHint(prev => !prev)}
                className="px-3.5 py-2 rounded bg-gray-100 dark:bg-[#141d2e] hover:bg-gray-200 dark:hover:bg-[#1e293b] text-gray-700 dark:text-gray-300 font-bold text-xs transition flex items-center space-x-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
              </button>

              <button
                onClick={handleReset}
                className="px-3.5 py-2 rounded bg-gray-100 dark:bg-[#141d2e] hover:bg-gray-200 dark:hover:bg-[#1e293b] text-gray-700 dark:text-gray-300 font-bold text-xs transition flex items-center space-x-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Optional Hint */}
          {showHint && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <div className="font-bold">💡 Hint:</div>
              <p>
                An HTML page begins with the root <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code>.
                The visible content sits inside <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code>.
                Headlines use <code>&lt;h1&gt;</code> / <code>&lt;/h1&gt;</code>, and paragraphs use <code>&lt;p&gt;</code> / <code>&lt;/p&gt;</code>.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface SlotBoxProps {
  slot: SlotItem;
  onClick: () => void;
  isSubmitted: boolean;
}

const SlotBox: React.FC<SlotBoxProps> = ({ slot, onClick, isSubmitted }) => {
  const isFilled = slot.current !== null;
  const isRight = slot.current === slot.expected;

  return (
    <button
      onClick={onClick}
      disabled={!isFilled}
      title={isFilled ? 'Click to remove tag' : 'Empty slot'}
      className={`min-w-[90px] h-[36px] px-3 rounded border-2 font-mono font-bold text-sm inline-flex items-center justify-center transition-all ${
        !isFilled
          ? 'border-dashed border-gray-400 dark:border-gray-600 bg-white/50 dark:bg-white/5 text-gray-400 cursor-default'
          : isSubmitted
          ? isRight
            ? 'border-[#04AA6D] bg-[#04AA6D]/15 text-[#04AA6D]'
            : 'border-rose-500 bg-rose-500/15 text-rose-500 hover:bg-rose-500/25 cursor-pointer'
          : 'border-gray-400 dark:border-gray-500 bg-white dark:bg-[#141d2e] text-gray-900 dark:text-white shadow-xs hover:border-[#04AA6D] hover:text-[#04AA6D] cursor-pointer'
      }`}
    >
      {slot.current ? slot.current : ''}
    </button>
  );
};
