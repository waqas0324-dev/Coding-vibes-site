import React, { useState } from 'react';
import { practiceCatalog } from '../data/practice';
import { quizzesCatalog } from '../data/quizzes';
import { useLearning } from '../context/LearningContext';
import { LiveEditor } from '../components/LiveEditor';
import { TechBadge } from '../components/TechBadge';
import { VoiceCodeExplainer } from '../components/practice/VoiceCodeExplainer';
import {
  Trophy,
  HelpCircle,
  Code2,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Mic,
  Volume2
} from 'lucide-react';

export const PracticePage: React.FC = () => {
  const {
    progress,
    markPracticeComplete,
    saveQuizResult
  } = useLearning();

  const [activeTab, setActiveTab] = useState<'challenges' | 'quizzes' | 'voice' | 'sandbox'>('challenges');
  const [selectedTech, setSelectedTech] = useState<'all' | 'html' | 'css' | 'javascript'>('all');
  const [customVoiceCode, setCustomVoiceCode] = useState<{ title: string; code: string; language: string; category?: string } | undefined>(undefined);

  // Active Quiz State
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  // Active Exercise State
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [exerciseStatus, setExerciseStatus] = useState<Record<string, 'correct' | 'incorrect'>>({});

  const filteredExercises = practiceCatalog.filter(ex => {
    if (selectedTech === 'all') return true;
    return ex.course === selectedTech;
  });

  const filteredQuizzes = quizzesCatalog.filter(q => {
    if (selectedTech === 'all') return true;
    return q.courseId === selectedTech;
  });

  const activeQuiz = quizzesCatalog.find(q => q.id === activeQuizId);

  const handleQuizOptionSelect = (questionId: string, optionIndex: number) => {
    if (isQuizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const submitQuiz = () => {
    if (!activeQuiz) return;
    let score = 0;
    activeQuiz.questions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswerIndex) {
        score += 1;
      }
    });

    saveQuizResult(activeQuiz.id, score, activeQuiz.questions.length);
    setIsQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setIsQuizSubmitted(false);
  };

  const handleExerciseSubmit = (exId: string, correctAnswer: string | number | string[]) => {
    const userVal = (userAnswers[exId] || '').trim().toLowerCase();
    const correctVal = Array.isArray(correctAnswer)
      ? correctAnswer.map(c => String(c).toLowerCase())
      : [String(correctAnswer).toLowerCase()];

    const isCorrect = correctVal.includes(userVal);

    setExerciseStatus(prev => ({
      ...prev,
      [exId]: isCorrect ? 'correct' : 'incorrect'
    }));

    if (isCorrect) {
      markPracticeComplete(exId);
    }
  };

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2 pb-6 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">
            PRACTICE & QUIZZES
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-gray-400">Sharpen Your Skills</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Interactive Practice Lab
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          Test your knowledge with hands-on challenges, graded quizzes, and an open-ended code playground.
        </p>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2 bg-[#0d131f] p-1.5 rounded-xl border border-[#1e293b]">
          <button
            onClick={() => {
              setActiveTab('challenges');
              setActiveQuizId(null);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'challenges'
                ? 'bg-[#22c55e] text-black shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Challenges & Exercises</span>
          </button>

          <button
            onClick={() => setActiveTab('quizzes')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'quizzes'
                ? 'bg-[#22c55e] text-black shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Quizzes</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('voice');
              setActiveQuizId(null);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'voice'
                ? 'bg-[#22c55e] text-black shadow-sm font-bold'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Voice Code Talk</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold ${
              activeTab === 'voice' ? 'bg-black/25 text-black' : 'bg-[#22c55e]/20 text-[#22c55e]'
            }`}>
              Mic
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('sandbox');
              setActiveQuizId(null);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'sandbox'
                ? 'bg-[#22c55e] text-black shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Open Sandbox</span>
          </button>
        </div>

        {/* Tech Filter */}
        {activeTab !== 'sandbox' && activeTab !== 'voice' && (
          <div className="flex items-center space-x-2">
            {(['all', 'html', 'css', 'javascript'] as const).map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase font-mono transition ${
                  selectedTech === tech
                    ? 'bg-[#141d2e] text-[#22c55e] border border-[#22c55e]/40'
                    : 'text-gray-400 hover:text-white bg-[#0d131f] border border-[#1e293b]'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 1. CHALLENGES & EXERCISES TAB */}
      {activeTab === 'challenges' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredExercises.map(ex => {
              const status = exerciseStatus[ex.id];
              const isCompleted = !!progress.practiceAttempts[ex.id];

              return (
                <div
                  key={ex.id}
                  className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <TechBadge type={ex.course === 'javascript' ? 'js' : (ex.course as any)} size="sm" />
                        <span className="text-xs font-bold text-gray-300">{ex.category}</span>
                      </div>
                      {isCompleted && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3 text-[#22c55e]" />
                          <span>Solved</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">{ex.title}</h3>
                    <p className="text-xs text-gray-400 mb-3">{ex.question.question}</p>

                    {ex.question.instructions && (
                      <div className="p-3 bg-[#080d14] border border-[#1e293b] rounded-xl text-xs font-mono text-gray-300 mb-4">
                        {ex.question.instructions}
                      </div>
                    )}

                    {/* Multiple Choice Format */}
                    {ex.question.type === 'multiple_choice' && ex.question.options && (
                      <div className="space-y-2 mb-4">
                        {ex.question.options.map((opt, optIdx) => (
                          <button
                            key={optIdx}
                            onClick={() => {
                              setUserAnswers(prev => ({ ...prev, [ex.id]: String(optIdx) }));
                              handleExerciseSubmit(ex.id, ex.question.correctAnswer);
                            }}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition ${
                              userAnswers[ex.id] === String(optIdx)
                                ? optIdx === ex.question.correctAnswer
                                  ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                                  : 'bg-rose-950/40 border-rose-500 text-rose-200'
                                : 'bg-[#080d14] border-[#1e293b] text-gray-300 hover:border-gray-500'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Fill in Blank Format */}
                    {ex.question.type === 'fill_in_blank' && (
                      <div className="flex items-center space-x-3 mb-3">
                        <input
                          type="text"
                          value={userAnswers[ex.id] || ''}
                          onChange={e => setUserAnswers(prev => ({ ...prev, [ex.id]: e.target.value }))}
                          placeholder="Your answer..."
                          className="bg-[#080d14] border border-[#1e293b] rounded-xl px-3 py-2 text-xs text-white focus:border-[#22c55e] focus:outline-none font-mono flex-1"
                        />
                        <button
                          onClick={() => handleExerciseSubmit(ex.id, ex.question.correctAnswer)}
                          className="px-4 py-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-xs rounded-xl transition"
                        >
                          Check
                        </button>
                      </div>
                    )}
                  </div>

                  {status && (
                    <div
                      className={`p-3 rounded-xl text-xs flex items-center space-x-2 ${
                        status === 'correct'
                          ? 'bg-emerald-950/50 border border-emerald-800 text-emerald-300'
                          : 'bg-rose-950/50 border border-rose-800 text-rose-300'
                      }`}
                    >
                      {status === 'correct' ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                          <span>Correct! {ex.question.explanation}</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                          <span>Incorrect. Try again!</span>
                        </>
                      )}
                    </div>
                  )}

                  {/* Verbal Technical Communication Launcher */}
                  <div className="pt-3 border-t border-[#1e293b]/70 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500 font-mono">Practice Out Loud:</span>
                    <button
                      onClick={() => {
                        setCustomVoiceCode({
                          title: ex.title,
                          code: ex.question.instructions || ex.question.question,
                          language: ex.course === 'javascript' ? 'javascript' : ex.course,
                          category: ex.category
                        });
                        setActiveTab('voice');
                      }}
                      className="inline-flex items-center space-x-1.5 text-xs text-[#22c55e] hover:text-[#16a34a] font-medium transition cursor-pointer"
                      title="Practice explaining this challenge out loud with your microphone"
                    >
                      <Mic className="w-3.5 h-3.5" />
                      <span>Record Voice Walkthrough</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. QUIZZES TAB */}
      {activeTab === 'quizzes' && (
        <div className="space-y-6">
          {!activeQuiz ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map(quiz => {
                const prevScore = progress.quizScores[quiz.id];

                return (
                  <div
                    key={quiz.id}
                    className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 flex flex-col justify-between hover:border-[#22c55e]/50 hover:bg-[#111a2c] transition duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#141d2e] text-[#22c55e] border border-[#22c55e]/30">
                          {quiz.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {quiz.questions.length} Questions
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">{quiz.title}</h3>
                      <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                        {quiz.description}
                      </p>
                    </div>

                    <div>
                      {prevScore && (
                        <div className="flex items-center justify-between text-xs py-2 px-3 bg-[#080d14] rounded-lg border border-[#1e293b] mb-4">
                          <span className="text-gray-400">Previous Score</span>
                          <span className={`font-bold ${prevScore.passed ? 'text-[#22c55e]' : 'text-amber-400'}`}>
                            {prevScore.score}/{prevScore.total} ({Math.round((prevScore.score / prevScore.total) * 100)}%)
                          </span>
                        </div>
                      )}

                      <button
                        onClick={() => {
                          setActiveQuizId(quiz.id);
                          resetQuiz();
                        }}
                        className="w-full py-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-xs rounded-xl transition"
                      >
                        {prevScore ? 'Retake Quiz' : 'Take Quiz'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ACTIVE QUIZ RUNNER */
            <div className="space-y-6 max-w-3xl mx-auto">
              <button
                onClick={() => setActiveQuizId(null)}
                className="text-xs text-gray-400 hover:text-white transition flex items-center space-x-1"
              >
                <span>← Back to all quizzes</span>
              </button>

              <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#22c55e] uppercase">
                      {activeQuiz.category} Quiz
                    </span>
                    <span className="text-xs text-gray-400">
                      {activeQuiz.questions.length} Questions Total
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{activeQuiz.title}</h2>
                  <p className="text-xs text-gray-400 mt-1">{activeQuiz.description}</p>
                </div>

                {/* Questions List */}
                <div className="space-y-8 divide-y divide-[#1e293b]/60">
                  {activeQuiz.questions.map((q, qIdx) => {
                    const selected = quizAnswers[q.id];

                    return (
                      <div key={q.id} className="pt-6 first:pt-0 space-y-3">
                        <div className="flex items-start space-x-3">
                          <span className="w-6 h-6 rounded-full bg-[#141d2e] border border-[#1e293b] text-xs font-mono font-bold text-[#22c55e] flex items-center justify-center shrink-0">
                            {qIdx + 1}
                          </span>
                          <h4 className="text-sm font-semibold text-white">{q.question}</h4>
                        </div>

                        <div className="space-y-2 pl-9">
                          {q.options.map((opt, optIdx) => {
                            const isOptionSelected = selected === optIdx;
                            let style = 'bg-[#080d14] border-[#1e293b] text-gray-300 hover:border-gray-500';

                            if (isQuizSubmitted) {
                              if (optIdx === q.correctAnswerIndex) {
                                style = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold';
                              } else if (isOptionSelected && optIdx !== q.correctAnswerIndex) {
                                style = 'bg-rose-950/40 border-rose-500 text-rose-200';
                              }
                            } else if (isOptionSelected) {
                              style = 'bg-[#141d2e] border-[#22c55e] text-white';
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleQuizOptionSelect(q.id, optIdx)}
                                disabled={isQuizSubmitted}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition flex items-center justify-between ${style}`}
                              >
                                <span>{opt}</span>
                                {isQuizSubmitted && optIdx === q.correctAnswerIndex && (
                                  <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {isQuizSubmitted && (
                          <div className="ml-9 p-3 bg-[#141d2e] border border-[#1e293b] rounded-xl text-xs text-gray-300">
                            <span className="font-bold text-[#22c55e]">Explanation: </span>
                            <span>{q.explanation}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Submit & Score */}
                <div className="pt-6 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
                  {isQuizSubmitted ? (
                    <button
                      onClick={resetQuiz}
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#141d2e] hover:bg-[#1e293b] text-white text-xs font-semibold"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Retake Quiz</span>
                    </button>
                  ) : (
                    <button
                      onClick={submitQuiz}
                      disabled={Object.keys(quizAnswers).length < activeQuiz.questions.length}
                      className="px-6 py-3 bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-50 text-black font-bold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-[#22c55e]/20"
                    >
                      Submit Quiz Answers
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. VOICE CODE TALK (TECHNICAL COMMUNICATION) TAB */}
      {activeTab === 'voice' && (
        <VoiceCodeExplainer
          customCode={customVoiceCode}
          onBackToExercises={() => setActiveTab('challenges')}
        />
      )}

      {/* 4. OPEN CODE SANDBOX TAB */}
      {activeTab === 'sandbox' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Full-Stack HTML/CSS/JS Sandbox</h2>
              <p className="text-xs text-gray-400">Experiment freely with frontend markup, styles, and scripts.</p>
            </div>
          </div>

          <LiveEditor
            title="Coding Vibes Playground"
            initialHtml={`<div class="welcome-box">\n  <h1>Welcome to Coding Vibes Sandbox</h1>\n  <p>Write your HTML, CSS, and JS code here to test ideas in real time.</p>\n  <button id="btn">Click for Interactive Vibes</button>\n</div>`}
            initialCss={`body {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background: #080d14;\n  color: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  margin: 0;\n}\n.welcome-box {\n  text-align: center;\n  padding: 30px;\n  background: #0d131f;\n  border: 1px solid #1e293b;\n  border-radius: 16px;\n  max-width: 450px;\n}\nh1 {\n  color: #22c55e;\n  font-size: 24px;\n}\nbutton {\n  background: #22c55e;\n  color: #000;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n  margin-top: 15px;\n}\nbutton:hover {\n  background: #16a34a;\n}`}
            initialJs={`document.getElementById('btn').addEventListener('click', () => {\n  alert('✨ Coding Vibes interactive code running smoothly!');\n});`}
          />
        </div>
      )}
    </div>
  );
};
