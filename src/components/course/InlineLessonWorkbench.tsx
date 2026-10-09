import React, { useState, useEffect, useRef } from 'react';
import { Course, Lesson } from '../../types';
import { executeCode, CodeExecutionResult } from '../../utils/codeRunner';
import { getInlineExerciseForLesson, InlineLessonExercise } from '../../data/courses/lessonExerciseMatcher';
import { useLearning } from '../../context/LearningContext';
import { useNavigation } from '../../context/NavigationContext';
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Terminal,
  Code2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Trophy,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Monitor,
  Tablet,
  Smartphone,
  Layers,
  Zap,
  AlertCircle,
  CheckCircle,
  X
} from 'lucide-react';

interface InlineLessonWorkbenchProps {
  course: Course;
  lesson: Lesson;
  allLessons?: Lesson[];
  onSelectLesson?: (lesson: Lesson) => void;
  onClose?: () => void;
}

export const InlineLessonWorkbench: React.FC<InlineLessonWorkbenchProps> = ({
  course,
  lesson,
  allLessons = [],
  onSelectLesson,
  onClose
}) => {
  const { navigateTo } = useNavigation();
  const { isLessonCompleted, markLessonComplete, markChallengeComplete } = useLearning();

  // Active tab inside workbench
  const [activeTab, setActiveTab] = useState<'editor' | 'exercise' | 'quiz' | 'syntax'>('editor');
  
  // Exercise definition
  const [exercise, setExercise] = useState<InlineLessonExercise>(() =>
    getInlineExerciseForLesson(course.slug, lesson)
  );

  // Editable code state
  const [code, setCode] = useState<string>(() => {
    return (
      lesson.content?.codeExample ||
      exercise.starterCode ||
      '// Start coding here\n'
    );
  });

  // Execution state
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<CodeExecutionResult | null>(null);
  const [copied, setCopied] = useState(false);
  
  // Exercise verification state
  const [verificationStatus, setVerificationStatus] = useState<{
    tested: boolean;
    allPassed: boolean;
    passedIndices: boolean[];
    feedback: string;
  }>({
    tested: false,
    allPassed: false,
    passedIndices: [],
    feedback: ''
  });

  // Hint & Solution disclosure
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  // Responsive device view for Web preview
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Quiz state for practice tab
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizChecked, setQuizChecked] = useState<Record<number, boolean>>({});

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Update exercise and starter code whenever lesson changes
  useEffect(() => {
    const newEx = getInlineExerciseForLesson(course.slug, lesson);
    setExercise(newEx);
    setCode(lesson.content?.codeExample || newEx.starterCode || '');
    setVerificationStatus({ tested: false, allPassed: false, passedIndices: [], feedback: '' });
    setShowHint(false);
    setShowSolution(false);
    setSelectedAnswers({});
    setQuizChecked({});

    // Auto execute initial code so student sees live preview/output immediately
    const initialRun = executeCode(
      lesson.content?.codeExample || newEx.starterCode || '',
      course.slug,
      lesson.title
    );
    setExecutionResult(initialRun);
  }, [lesson.id, course.slug]);

  // Handle Run Code
  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      const res = executeCode(code, course.slug, lesson.title);
      setExecutionResult(res);
      setIsRunning(false);
    }, 120);
  };

  // Keyboard shortcut Ctrl/Cmd + Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRunCode();
    }
    // Handle tab key indent
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  // Handle Exercise Verification
  const handleVerifyExercise = () => {
    const passed = exercise.requirements.map(req => req.check(code));
    const allPassed = passed.every(Boolean);

    if (allPassed) {
      setVerificationStatus({
        tested: true,
        allPassed: true,
        passedIndices: passed,
        feedback: '🎉 Perfect! Your code strictly satisfies all language rules and exercise requirements!'
      });
      // Reward progress and mark complete
      markChallengeComplete(exercise.id);
      markLessonComplete(lesson.id);
    } else {
      const failedReqIndex = passed.findIndex(p => !p);
      const failedText = failedReqIndex >= 0 ? exercise.requirements[failedReqIndex].text : '';
      setVerificationStatus({
        tested: true,
        allPassed: false,
        passedIndices: passed,
        feedback: `Almost there! Requirement pending: "${failedText}". Check the hint if you need guidance.`
      });
    }

    // Also run the code so output reflects the latest run
    handleRunCode();
  };

  // Copy code
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset to original lesson code
  const handleReset = () => {
    const original = lesson.content?.codeExample || exercise.starterCode || '';
    setCode(original);
    setVerificationStatus({ tested: false, allPassed: false, passedIndices: [], feedback: '' });
    const res = executeCode(original, course.slug, lesson.title);
    setExecutionResult(res);
  };

  // Load Exercise Starter Code
  const handleLoadExerciseStarter = () => {
    setCode(exercise.starterCode);
    setVerificationStatus({ tested: false, allPassed: false, passedIndices: [], feedback: '' });
    const res = executeCode(exercise.starterCode, course.slug, lesson.title);
    setExecutionResult(res);
  };

  // Load Solution Code
  const handleLoadSolution = () => {
    setCode(exercise.solutionCode);
    handleRunCode();
  };

  // Next and Previous lesson navigation
  const currentIndex = allLessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex >= 0 && currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // Language Runtime Badge Styling
  const getLanguageDetails = () => {
    const slug = course.slug.toLowerCase();
    switch (slug) {
      case 'python':
        return { name: 'Python 3.12 Engine', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30', type: 'terminal' };
      case 'java':
        return { name: 'OpenJDK 21 JVM', color: 'text-orange-400 bg-orange-500/10 border-orange-500/30', type: 'terminal' };
      case 'cpp':
        return { name: 'Gnu C++20 (GCC)', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30', type: 'terminal' };
      case 'c':
        return { name: 'Gnu C17 Runtime', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30', type: 'terminal' };
      case 'csharp':
        return { name: '.NET 9.0 CLR', color: 'text-purple-400 bg-purple-500/10 border-purple-500/30', type: 'terminal' };
      case 'sql':
        return { name: 'PostgreSQL & SQLite RDBMS', color: 'text-sky-400 bg-sky-500/10 border-sky-500/30', type: 'terminal' };
      case 'php':
        return { name: 'PHP 8.3 Server Engine', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30', type: 'terminal' };
      case 'react':
      case 'react-js':
        return { name: 'React 18 + Babel JSX', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30', type: 'web' };
      case 'bootstrap':
        return { name: 'Bootstrap 5.3 Responsive', color: 'text-purple-400 bg-purple-500/10 border-purple-500/30', type: 'web' };
      default:
        return { name: `${course.title} Runtime`, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', type: 'web' };
    }
  };

  const langInfo = getLanguageDetails();
  const isWeb = langInfo.type === 'web';
  const isLessonDone = isLessonCompleted(lesson.id);

  // Line count for editor
  const lineCount = code.split('\n').length;

  return (
    <div
      id={`inline-workbench-${lesson.id}`}
      className="w-full rounded-2xl bg-[#090d16] border-2 border-emerald-500/40 shadow-2xl overflow-hidden transition-all my-6"
    >
      {/* Workbench Header */}
      <div className="bg-[#0f172a] border-b border-[#1e293b] px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
            {isWeb ? <Code2 className="w-5 h-5" /> : <Terminal className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${langInfo.color}`}>
                {langInfo.name}
              </span>
              <span className="text-[11px] text-gray-400 font-mono">
                {course.title} &bull; Lesson {lesson.title}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center space-x-2 mt-0.5">
              <span>Inline Code Studio & Practice Lab</span>
              {isLessonDone && (
                <span className="inline-flex items-center text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  <CheckCircle className="w-3 h-3 mr-1" /> Completed
                </span>
              )}
            </h3>
          </div>
        </div>

        {/* Top Actions & Navigation */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Previous / Next Lesson */}
          {prevLesson && onSelectLesson && (
            <button
              onClick={() => onSelectLesson(prevLesson)}
              title={`Previous: ${prevLesson.title}`}
              className="px-2.5 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] text-gray-300 hover:text-white hover:border-gray-500 transition text-xs font-medium flex items-center space-x-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev</span>
            </button>
          )}

          {nextLesson && onSelectLesson && (
            <button
              onClick={() => onSelectLesson(nextLesson)}
              title={`Next: ${nextLesson.title}`}
              className="px-2.5 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] text-gray-300 hover:text-white hover:border-gray-500 transition text-xs font-medium flex items-center space-x-1"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Full Lesson Article Link */}
          <button
            onClick={() =>
              navigateTo('lesson', {
                courseSlug: course.slug,
                lessonSlug: lesson.slug
              })
            }
            className="px-3 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] text-gray-300 hover:text-white hover:border-sky-500 transition text-xs font-medium flex items-center space-x-1.5"
            title="Read Full Theoretical Article"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>Full Article</span>
          </button>

          {/* Open in Tryit Page */}
          <button
            onClick={() =>
              navigateTo('tryit', {
                editorLanguage: course.slug,
                editorCode: code
              })
            }
            className="px-3 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] text-gray-300 hover:text-white hover:border-emerald-500 transition text-xs font-medium flex items-center space-x-1.5"
            title="Open in Dedicated Tryit Editor"
          >
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Full Tryit</span>
          </button>

          {/* Mark Complete Button */}
          <button
            onClick={() => markLessonComplete(lesson.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
              isLessonDone
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isLessonDone ? 'Completed (+30 XP)' : 'Mark Complete'}</span>
          </button>

          {/* Close button if modal or collapsible */}
          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1e293b] transition"
              title="Collapse Inline Workbench"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-[#0b101b] border-b border-[#1e293b] px-4 sm:px-6 flex items-center justify-between overflow-x-auto">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab('editor')}
            className={`py-2.5 px-3 text-xs font-bold border-b-2 flex items-center space-x-2 transition ${
              activeTab === 'editor'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Code & Output</span>
          </button>

          <button
            onClick={() => setActiveTab('exercise')}
            className={`py-2.5 px-3 text-xs font-bold border-b-2 flex items-center space-x-2 transition ${
              activeTab === 'exercise'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Lesson Exercise & Verification</span>
            {verificationStatus.allPassed && (
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`py-2.5 px-3 text-xs font-bold border-b-2 flex items-center space-x-2 transition ${
              activeTab === 'quiz'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>Theory Practice & Quiz</span>
          </button>

          <button
            onClick={() => setActiveTab('syntax')}
            className={`py-2.5 px-3 text-xs font-bold border-b-2 flex items-center space-x-2 transition ${
              activeTab === 'syntax'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>Syntax & Common Pitfalls</span>
          </button>
        </div>

        {/* Quick Toolbar (Run, Reset, Copy) */}
        <div className="flex items-center space-x-2 py-1.5">
          <button
            onClick={handleCopy}
            title="Copy Code"
            className="p-1.5 rounded-lg bg-[#141d2e] text-gray-400 hover:text-white border border-[#1e293b] transition"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleReset}
            title="Reset to Original Code"
            className="p-1.5 rounded-lg bg-[#141d2e] text-gray-400 hover:text-white border border-[#1e293b] transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-950/40 transition"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : 'fill-current'}`} />
            <span>Run Code</span>
          </button>

          <button
            onClick={handleVerifyExercise}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-950/40 transition"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Verify Exercise</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6">
        {/* ==================================================== */}
        {/* TAB 1: CODE EDITOR & LIVE EXECUTION / TERMINAL       */}
        {/* ==================================================== */}
        {activeTab === 'editor' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch min-h-[460px]">
            {/* Left: Code Editor */}
            <div className="flex flex-col rounded-xl bg-[#030712] border border-[#1e293b] overflow-hidden shadow-inner">
              <div className="bg-[#0f172a] px-3.5 py-2 border-b border-[#1e293b] flex items-center justify-between text-xs text-gray-400 font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-bold text-gray-300">
                    {course.slug === 'python' ? 'main.py' :
                     course.slug === 'java' ? 'Main.java' :
                     course.slug === 'cpp' ? 'main.cpp' :
                     course.slug === 'c' ? 'main.c' :
                     course.slug === 'csharp' ? 'Program.cs' :
                     course.slug === 'sql' ? 'query.sql' :
                     course.slug === 'php' ? 'index.php' :
                     'index.html'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[11px]">
                  <span>Tab: 4 spaces</span>
                  <span>&bull;</span>
                  <span>Ctrl + Enter to Run</span>
                </div>
              </div>

              {/* Code Area with line numbers */}
              <div className="relative flex-1 flex bg-[#030712] text-gray-200 font-mono text-xs sm:text-sm">
                {/* Line numbers gutter */}
                <div className="select-none py-3 px-2 text-right text-gray-600 bg-[#090d16] border-r border-[#1e293b] w-10 shrink-0 font-mono text-[11px] leading-5">
                  {Array.from({ length: Math.max(lineCount, 16) }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                {/* Textarea */}
                <textarea
                  ref={textareaRef}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  className="flex-1 w-full h-full min-h-[380px] p-3 bg-transparent text-emerald-300 font-mono text-xs sm:text-sm leading-5 resize-none outline-none focus:ring-1 focus:ring-emerald-500/50"
                  placeholder="Write or edit code here..."
                />
              </div>

              {/* Editor bottom bar */}
              <div className="bg-[#0b101b] px-3.5 py-1.5 border-t border-[#1e293b] flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span>{lineCount} lines &bull; {code.length} characters</span>
                <button
                  onClick={handleLoadExerciseStarter}
                  className="text-emerald-400 hover:underline flex items-center space-x-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Load Exercise Template</span>
                </button>
              </div>
            </div>

            {/* Right: Live Output or Virtual Terminal */}
            <div className="flex flex-col rounded-xl bg-[#030712] border border-[#1e293b] overflow-hidden shadow-inner">
              {/* Output Top Header */}
              <div className="bg-[#0f172a] px-3.5 py-2 border-b border-[#1e293b] flex items-center justify-between text-xs text-gray-300 font-mono">
                <div className="flex items-center space-x-2">
                  {isWeb ? (
                    <Monitor className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Terminal className="w-4 h-4 text-emerald-400" />
                  )}
                  <span className="font-bold">
                    {isWeb ? 'Interactive DOM Live Preview' : 'Interactive Terminal Shell'}
                  </span>
                </div>

                {/* Device switches for web */}
                {isWeb ? (
                  <div className="flex items-center space-x-1 bg-[#141d2e] rounded-lg p-0.5 border border-[#1e293b]">
                    <button
                      onClick={() => setDeviceView('desktop')}
                      className={`p-1 rounded ${deviceView === 'desktop' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'}`}
                      title="Desktop Preview"
                    >
                      <Monitor className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setDeviceView('tablet')}
                      className={`p-1 rounded ${deviceView === 'tablet' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'}`}
                      title="Tablet (768px)"
                    >
                      <Tablet className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setDeviceView('mobile')}
                      className={`p-1 rounded ${deviceView === 'mobile' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'}`}
                      title="Mobile (375px)"
                    >
                      <Smartphone className="w-3 h-3" />
                    </button>
                  </div>
                ) : (
                  <div className="text-[11px] text-gray-400">
                    Exit code: <span className="text-emerald-400 font-bold">{executionResult?.exitCode ?? 0}</span> ({executionResult?.executionTimeMs ?? 18}ms)
                  </div>
                )}
              </div>

              {/* Output body */}
              <div className="flex-1 bg-[#090d16] flex items-center justify-center min-h-[380px] overflow-auto">
                {isWeb ? (
                  <div
                    className={`h-full transition-all mx-auto bg-white flex flex-col ${
                      deviceView === 'mobile'
                        ? 'w-[375px] my-4 rounded-xl shadow-2xl border-4 border-[#1e293b]'
                        : deviceView === 'tablet'
                        ? 'w-[768px] my-4 rounded-xl shadow-2xl border-4 border-[#1e293b]'
                        : 'w-full'
                    }`}
                  >
                    <iframe
                      title="Live Preview Sandbox"
                      srcDoc={executionResult?.webSrcDoc || '<div style="padding:20px; font-family:sans-serif;">Click Run Code to see live preview.</div>'}
                      className="w-full h-full min-h-[380px] border-none rounded-none"
                      sandbox="allow-scripts allow-modals"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full p-4 font-mono text-xs sm:text-sm text-gray-200 overflow-y-auto space-y-2 leading-relaxed">
                    {/* Compilation logs if any */}
                    {executionResult?.compilationLogs?.map((log, i) => (
                      <div key={i} className="text-emerald-400 font-bold">
                        {log}
                      </div>
                    ))}

                    {/* Output Text */}
                    <pre className="text-gray-100 whitespace-pre-wrap font-mono leading-relaxed bg-[#030712] p-3.5 rounded-lg border border-[#1e293b]">
                      {executionResult?.output || 'No output generated yet. Click "Run Code" above.'}
                    </pre>

                    <div className="pt-2 text-[11px] text-gray-500 border-t border-[#1e293b] flex items-center justify-between">
                      <span>Process finished with exit code {executionResult?.exitCode ?? 0}</span>
                      <span className="text-emerald-400">Status: OK</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 2: EXERCISE CHALLENGE & REQUIREMENTS VERIFICATION */}
        {/* ==================================================== */}
        {activeTab === 'exercise' && (
          <div className="space-y-6">
            {/* Challenge Hero Box */}
            <div className="rounded-xl bg-gradient-to-r from-[#0d1527] to-[#0a1120] border border-amber-500/30 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                      THEORETICAL EXERCISE &bull; {exercise.conceptTag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {exercise.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLoadExerciseStarter}
                    className="px-3 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] text-gray-300 hover:text-white hover:border-emerald-500 text-xs font-semibold flex items-center space-x-1.5 transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Load Exercise Starter</span>
                  </button>
                  <button
                    onClick={handleVerifyExercise}
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/40 flex items-center space-x-1.5 transition"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verify My Solution</span>
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-200 leading-relaxed bg-[#060a12]/60 p-4 rounded-lg border border-[#1e293b]">
                {exercise.instruction}
              </div>

              {/* Requirements Checklist */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Exercise Verification Checklist:</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exercise.requirements.map((req, idx) => {
                    const isPassed = verificationStatus.tested && verificationStatus.passedIndices[idx];
                    return (
                      <div
                        key={idx}
                        className={`flex items-start space-x-2.5 p-3 rounded-lg border text-xs transition ${
                          isPassed
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                            : verificationStatus.tested
                            ? 'bg-red-500/10 border-red-500/30 text-red-200'
                            : 'bg-[#0b101b] border-[#1e293b] text-gray-300'
                        }`}
                      >
                        {isPassed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-gray-500 shrink-0 mt-0.5" />
                        )}
                        <span className="font-mono">{req.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Feedback status banner */}
              {verificationStatus.tested && (
                <div
                  className={`p-4 rounded-xl border flex items-start space-x-3 text-sm ${
                    verificationStatus.allPassed
                      ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                      : 'bg-amber-950/30 border-amber-500/50 text-amber-200'
                  }`}
                >
                  {verificationStatus.allPassed ? (
                    <Trophy className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <strong className="block font-bold mb-0.5">
                      {verificationStatus.allPassed ? 'Exercise Passed! (+30 XP)' : 'Needs Revision:'}
                    </strong>
                    <span>{verificationStatus.feedback}</span>
                  </div>
                </div>
              )}

              {/* Hints and Solution Drawers */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-3 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] text-xs font-semibold text-sky-400 hover:border-sky-500 transition flex items-center space-x-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{showHint ? 'Hide Hint' : 'Show Syntax Hint'}</span>
                </button>

                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="px-3 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] text-xs font-semibold text-amber-400 hover:border-amber-500 transition flex items-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{showSolution ? 'Hide Canonical Solution' : 'Reveal Model Solution'}</span>
                </button>

                <button
                  onClick={handleLoadSolution}
                  className="px-3 py-1.5 rounded-lg bg-[#141d2e] border border-[#1e293b] text-xs font-semibold text-emerald-400 hover:border-emerald-500 transition flex items-center space-x-1.5"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Load & Run Solution in Editor</span>
                </button>
              </div>

              {/* Hint Box */}
              {showHint && (
                <div className="p-4 rounded-lg bg-sky-950/20 border border-sky-500/30 text-xs text-sky-200 space-y-1">
                  <div className="font-bold text-sky-400 flex items-center space-x-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Syntax Guidance:</span>
                  </div>
                  <p>{exercise.hint}</p>
                </div>
              )}

              {/* Solution Box */}
              {showSolution && (
                <div className="p-4 rounded-lg bg-[#030712] border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-400">
                    <span>Canonical Model Solution:</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(exercise.solutionCode);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      }}
                      className="text-gray-400 hover:text-white text-[11px]"
                    >
                      {copied ? 'Copied!' : 'Copy Solution'}
                    </button>
                  </div>
                  <pre className="p-3 rounded bg-[#090d16] text-amber-200 font-mono text-xs overflow-x-auto whitespace-pre-wrap">
                    {exercise.solutionCode}
                  </pre>
                  <p className="text-[11px] text-gray-400 italic">
                    {exercise.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Quick Editor Access within Exercise Tab */}
            <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e293b] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Ready to implement or test?</span>
                <span className="text-[11px] text-gray-400">Switch to the Interactive Code tab or click Verify to validate your solution.</span>
              </div>
              <button
                onClick={() => setActiveTab('editor')}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition"
              >
                Go to Code Editor
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 3: THEORY PRACTICE & QUIZ QUESTIONS              */}
        {/* ==================================================== */}
        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <div className="rounded-xl bg-[#0d1422] border border-[#1e293b] p-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">
                    CONCEPT VALIDATION
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Theoretical Knowledge Checks for {lesson.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-gray-300">
                Reinforce your understanding of core concepts in {course.title}. Select the correct option and check your answer.
              </p>
            </div>

            {/* Practice Questions List */}
            {lesson.practice && lesson.practice.length > 0 ? (
              lesson.practice.map((q, qIdx) => {
                const isChecked = quizChecked[qIdx];
                const selected = selectedAnswers[qIdx];
                const isCorrect = selected === Number(q.correctAnswer);

                return (
                  <div key={q.id || qIdx} className="p-5 rounded-xl bg-[#0a0f1d] border border-[#1e293b] space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 font-bold">
                      <span>Question {qIdx + 1}:</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      {q.question}
                    </h4>

                    {q.options && q.options.length > 0 && (
                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
                                setQuizChecked(prev => ({ ...prev, [qIdx]: false }));
                              }}
                              className={`w-full text-left p-3 rounded-lg border text-xs font-mono transition flex items-center justify-between ${
                                isOptionSelected
                                  ? 'bg-purple-600/20 border-purple-500 text-purple-200'
                                  : 'bg-[#141d2e] border-[#1e293b] text-gray-300 hover:border-gray-500'
                              }`}
                            >
                              <span>{opt}</span>
                              {isOptionSelected && <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex items-center space-x-3 pt-2">
                      <button
                        onClick={() => setQuizChecked(prev => ({ ...prev, [qIdx]: true }))}
                        disabled={selected === undefined}
                        className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold disabled:opacity-50 transition"
                      >
                        Check Answer
                      </button>
                    </div>

                    {isChecked && (
                      <div
                        className={`p-3.5 rounded-lg border text-xs ${
                          isCorrect
                            ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                            : 'bg-red-950/30 border-red-500/40 text-red-200'
                        }`}
                      >
                        <div className="font-bold mb-1 flex items-center space-x-1.5">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              <span>Correct! Great work.</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-red-400" />
                              <span>Incorrect option selected.</span>
                            </>
                          )}
                        </div>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-gray-400 text-xs rounded-xl bg-[#0a0f1d] border border-[#1e293b]">
                No multiple choice questions for this specific lesson. Please complete the coding challenge in the Exercise tab!
              </div>
            )}
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 4: SYNTAX & COMMON MISTAKES                      */}
        {/* ==================================================== */}
        {activeTab === 'syntax' && (
          <div className="space-y-6">
            {/* Syntax Structure */}
            {lesson.content?.syntaxStructure && (
              <div className="p-5 rounded-xl bg-[#0a0f1d] border border-[#1e293b] space-y-3">
                <div className="flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                    Official Syntax Structure
                  </h4>
                </div>
                <pre className="p-4 rounded-lg bg-[#030712] border border-[#1e293b] text-emerald-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap">
                  {lesson.content.syntaxStructure}
                </pre>
              </div>
            )}

            {/* Definition */}
            {lesson.content?.definition && (
              <div className="p-5 rounded-xl bg-[#0a0f1d] border border-[#1e293b] space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Concept Definition: {lesson.content.definition.term}
                </h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  {lesson.content.definition.explanation}
                </p>
              </div>
            )}

            {/* Common Mistakes */}
            {lesson.content?.commonMistakes && lesson.content.commonMistakes.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Common Syntax Pitfalls & How to Avoid Them:</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.content.commonMistakes.map((mistake, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-xl bg-[#0a0f1d] border border-red-500/20 space-y-2 text-xs">
                      <div className="text-red-400 font-mono font-bold">❌ Common Error:</div>
                      <pre className="p-2 rounded bg-[#030712] text-red-300 font-mono text-[11px] overflow-x-auto">
                        {mistake.wrong}
                      </pre>
                      <div className="text-emerald-400 font-mono font-bold pt-1">✓ Correct Standard:</div>
                      <pre className="p-2 rounded bg-[#030712] text-emerald-300 font-mono text-[11px] overflow-x-auto">
                        {mistake.correct}
                      </pre>
                      <p className="text-gray-400 text-[11px] pt-1">{mistake.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Takeaways */}
            {lesson.content?.takeaways && (
              <div className="p-5 rounded-xl bg-[#0a0f1d] border border-[#1e293b] space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Key Takeaways
                </h4>
                <ul className="list-disc pl-5 text-xs text-gray-300 space-y-1">
                  {lesson.content.takeaways.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
