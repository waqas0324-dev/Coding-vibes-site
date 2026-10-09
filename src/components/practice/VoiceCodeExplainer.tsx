import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  Square,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Download,
  CheckCircle2,
  AlertCircle,
  Clock,
  Award,
  ChevronRight,
  Code2,
  BookOpen,
  HelpCircle,
  Layers,
  Flame,
  Info,
  Edit3,
  Lightbulb,
  Share2,
  RefreshCw
} from 'lucide-react';
import {
  CODE_EXPLORATION_SNIPPETS,
  CodeExplorationSnippet
} from '../../data/codeExplorationSnippets';

interface VoicePracticeSession {
  id: string;
  timestamp: number;
  snippetTitle: string;
  durationSeconds: number;
  wordCount: number;
  overallScore: number;
  clarityScore: number;
  accuracyScore: number;
  pacingStatus: 'Slow' | 'Optimal' | 'Fast';
  transcript: string;
}

interface VoiceCodeExplainerProps {
  initialSnippetId?: string;
  customCode?: { title: string; code: string; language: string; category?: string };
  onBackToExercises?: () => void;
}

export const VoiceCodeExplainer: React.FC<VoiceCodeExplainerProps> = ({
  initialSnippetId,
  customCode,
  onBackToExercises
}) => {
  // Snippet Selection
  const [snippets] = useState<CodeExplorationSnippet[]>(CODE_EXPLORATION_SNIPPETS);
  const [selectedSnippetId, setSelectedSnippetId] = useState<string>(
    customCode ? 'custom' : (initialSnippetId || CODE_EXPLORATION_SNIPPETS[0].id)
  );
  const [customSnippetCode, setCustomSnippetCode] = useState(
    customCode?.code || `function calculateDiscount(price, isMember) {\n  if (price <= 0) return 0;\n  const rate = isMember ? 0.2 : 0.05;\n  return price * (1 - rate);\n}`
  );
  const [customSnippetTitle, setCustomSnippetTitle] = useState(
    customCode?.title || 'Custom Function: Discount Calculation'
  );

  const activeSnippet = selectedSnippetId === 'custom'
    ? {
        id: 'custom',
        title: customSnippetTitle,
        difficulty: 'Intermediate' as const,
        language: 'javascript' as const,
        category: 'Custom Practice',
        interviewQuestion: 'Walk through this logic out loud. Explain parameters, edge cases, conditions, and return value clearly.',
        targetDurationSeconds: 60,
        targetKeywords: ['parameter', 'condition', 'return', 'discount', 'edge case'],
        keyConceptSummary: 'Practice clear verbal walk-through: input validation, branching logic, and calculation output.',
        suggestedOutline: [
          '1. State function goal and inputs',
          '2. Explain edge case check (price <= 0)',
          '3. Explain conditional discount rate assignment',
          '4. Explain computed return value'
        ],
        code: customSnippetCode,
        modelExplanation: 'This function computes an adjusted price based on membership status, first validating that the price is positive before applying a ternary discount rate.'
      }
    : (snippets.find(s => s.id === selectedSnippetId) || snippets[0]);

  // Audio Recording & Microphone State
  const [micPermission, setMicPermission] = useState<'prompt' | 'granted' | 'denied' | 'unsupported'>('prompt');
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioLevel, setAudioLevel] = useState(0); // 0 to 100 for mic volume bar

  // Speech to text & Transcript State
  const [transcript, setTranscript] = useState('');
  const [isLiveTranscribing, setIsLiveTranscribing] = useState(false);
  const [isEditingTranscript, setIsEditingTranscript] = useState(false);

  // Audio Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);

  // AI Evaluation State
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<any | null>(null);
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  // Local storage history
  const [pastSessions, setPastSessions] = useState<VoicePracticeSession[]>(() => {
    try {
      const saved = localStorage.getItem('coding_vibes_voice_sessions_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Refs for Web Audio API & MediaRecorder
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timerIntervalRef = useRef<number | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const speechRecognitionRef = useRef<any>(null);

  // Initial check for browser support
  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMicPermission('unsupported');
    }
  }, []);

  // Update custom code if passed in props
  useEffect(() => {
    if (customCode) {
      setSelectedSnippetId('custom');
      setCustomSnippetCode(customCode.code);
      setCustomSnippetTitle(customCode.title);
    }
  }, [customCode]);

  // Clean up recording stream on unmount
  useEffect(() => {
    return () => {
      stopAllMedia();
    };
  }, []);

  const stopAllMedia = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (speechRecognitionRef.current) {
      try {
        speechRecognitionRef.current.stop();
      } catch {}
      speechRecognitionRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      try {
        audioContextRef.current.close();
      } catch {}
      audioContextRef.current = null;
    }
  };

  // Canvas visualizer rendering loop
  const startVisualizer = (analyser: AnalyserNode) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      animationFrameRef.current = requestAnimationFrame(render);
      analyser.getByteFrequencyData(dataArray);

      // Compute average volume for meter
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const avg = sum / bufferLength;
      setAudioLevel(Math.min(Math.round((avg / 128) * 100), 100));

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Subtle background grid
      ctx.fillStyle = 'rgba(13, 19, 31, 0.4)';
      ctx.fillRect(0, 0, width, height);

      const barWidth = (width / (bufferLength / 2)) * 1.5;
      let x = 0;

      for (let i = 0; i < bufferLength / 2; i++) {
        const barHeight = (dataArray[i] / 255) * (height * 0.85);

        // Gradient from vibrant green to cyan
        const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
        gradient.addColorStop(0, '#22c55e');
        gradient.addColorStop(0.5, '#38bdf8');
        gradient.addColorStop(1, '#059669');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, height - barHeight, barWidth - 1.5, barHeight);

        x += barWidth;
      }
    };

    render();
  };

  // Start Voice Recording with Microphone API
  const handleStartRecording = async () => {
    try {
      stopAllMedia();
      setEvaluationResult(null);
      setTranscript('');
      setDuration(0);
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
        setAudioBlob(null);
      }

      // 1. Request Microphone access via navigator.mediaDevices
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      streamRef.current = stream;
      setMicPermission('granted');

      // 2. Setup AudioContext and AnalyserNode for audio visualization
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass();
      audioContextRef.current = audioCtx;

      if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
      }

      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;
      source.connect(analyser);
      analyserRef.current = analyser;

      startVisualizer(analyser);

      // 3. Setup MediaRecorder
      audioChunksRef.current = [];
      const mimeTypes = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'];
      let selectedMime = '';
      for (const m of mimeTypes) {
        if (MediaRecorder.isTypeSupported(m)) {
          selectedMime = m;
          break;
        }
      }

      const options = selectedMime ? { mimeType: selectedMime } : undefined;
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const finalBlob = new Blob(audioChunksRef.current, {
          type: selectedMime || 'audio/webm'
        });
        setAudioBlob(finalBlob);
        const url = URL.createObjectURL(finalBlob);
        setAudioUrl(url);
      };

      mediaRecorder.start(250); // collect 250ms chunks
      setIsRecording(true);
      setIsPaused(false);

      // 4. Timer
      timerIntervalRef.current = window.setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);

      // 5. Speech Recognition for live transcript
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          const recognition = new SpeechRecognition();
          recognition.continuous = true;
          recognition.interimResults = true;
          recognition.lang = 'en-US';

          let accumulatedTranscript = '';

          recognition.onresult = (event: any) => {
            let interim = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                accumulatedTranscript += event.results[i][0].transcript + ' ';
              } else {
                interim += event.results[i][0].transcript;
              }
            }
            setTranscript((accumulatedTranscript + interim).trim());
          };

          recognition.onerror = (e: any) => {
            console.warn('Speech recognition warning:', e.error);
          };

          recognition.onend = () => {
            if (isRecording && !isPaused) {
              try {
                recognition.start();
              } catch {}
            }
          };

          recognition.start();
          speechRecognitionRef.current = recognition;
          setIsLiveTranscribing(true);
        } catch (recErr) {
          console.warn('SpeechRecognition start failed:', recErr);
        }
      }
    } catch (err: any) {
      console.error('Microphone access denied or error:', err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setMicPermission('denied');
      } else {
        alert(`Could not start microphone: ${err.message || 'Unknown error'}`);
      }
      stopAllMedia();
      setIsRecording(false);
    }
  };

  // Pause / Resume Recording
  const handleTogglePause = () => {
    if (!mediaRecorderRef.current) return;

    if (isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      timerIntervalRef.current = window.setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
      if (speechRecognitionRef.current) {
        try {
          speechRecognitionRef.current.start();
        } catch {}
      }
    } else {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
      if (speechRecognitionRef.current) {
        try {
          speechRecognitionRef.current.stop();
        } catch {}
      }
    }
  };

  // Stop Recording
  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
    stopAllMedia();
    setIsRecording(false);
    setIsPaused(false);
    setAudioLevel(0);
  };

  // Discard & Re-record
  const handleResetRecording = () => {
    stopAllMedia();
    setIsRecording(false);
    setIsPaused(false);
    setDuration(0);
    setAudioLevel(0);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setAudioBlob(null);
    setTranscript('');
    setEvaluationResult(null);
  };

  // Audio Playback Controls
  const togglePlayAudio = () => {
    if (!audioElementRef.current) return;

    if (isPlaying) {
      audioElementRef.current.pause();
      setIsPlaying(false);
    } else {
      audioElementRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (time: number) => {
    if (!audioElementRef.current) return;
    audioElementRef.current.currentTime = time;
    setPlaybackTime(time);
  };

  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    if (audioElementRef.current) {
      audioElementRef.current.playbackRate = rate;
    }
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Download Audio File
  const handleDownloadRecording = () => {
    if (!audioUrl || !audioBlob) return;
    const a = document.createElement('a');
    a.href = audioUrl;
    const safeTitle = activeSnippet.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    a.download = `voice-explanation-${safeTitle}-${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Send explanation to AI Evaluator API
  const handleEvaluateExplanation = async () => {
    if (!transcript || transcript.trim().length === 0) {
      alert('Please speak your explanation into the microphone or type what you said into the transcript box before requesting an evaluation.');
      return;
    }

    setIsEvaluating(true);
    try {
      const response = await fetch('/api/voice-eval', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          codeSnippet: activeSnippet.code,
          title: activeSnippet.title,
          language: activeSnippet.language,
          transcript: transcript,
          durationSeconds: Math.max(duration, 15),
          targetKeywords: activeSnippet.targetKeywords
        })
      });

      if (!response.ok) {
        throw new Error(`Evaluation failed with status ${response.status}`);
      }

      const result = await response.json();
      setEvaluationResult(result);

      // Save to practice history
      const newSession: VoicePracticeSession = {
        id: `sess-${Date.now()}`,
        timestamp: Date.now(),
        snippetTitle: activeSnippet.title,
        durationSeconds: duration,
        wordCount: transcript.trim().split(/\s+/).length,
        overallScore: result.overallScore,
        clarityScore: result.clarityScore,
        accuracyScore: result.accuracyScore,
        pacingStatus: result.pacingStatus,
        transcript: transcript
      };

      const updated = [newSession, ...pastSessions.slice(0, 19)];
      setPastSessions(updated);
      try {
        localStorage.setItem('coding_vibes_voice_sessions_v1', JSON.stringify(updated));
      } catch {}
    } catch (err: any) {
      console.error('Error evaluating voice explanation:', err);
      alert('Could not complete evaluation. A local assessment will be loaded.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Studio Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-[#0d131f] via-[#111927] to-[#0d131f] border border-[#1e293b] p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 text-xs font-mono font-bold text-[#22c55e]">
                <Mic className="w-3.5 h-3.5 animate-pulse" />
                <span>TECHNICAL COMMUNICATION LAB</span>
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs text-gray-400">Microphone API Audio Studio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Explain Code Out Loud
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              Ace technical interviews and code reviews. Record your voice with the browser Microphone API, analyze real-time audio waveforms, review speech transcripts, and receive immediate coaching on clarity, pacing, and keyword precision.
            </p>
          </div>

          {/* Quick Stats or Action */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            {onBackToExercises && (
              <button
                onClick={onBackToExercises}
                className="px-4 py-2 rounded-xl bg-[#141d2e] hover:bg-[#1e293b] text-gray-300 hover:text-white text-xs font-semibold border border-[#1e293b] transition cursor-pointer"
              >
                ← Back to Challenges
              </button>
            )}
            <div className="px-4 py-3 rounded-xl bg-[#080d14] border border-[#1e293b] flex items-center space-x-3">
              <Award className="w-5 h-5 text-[#22c55e]" />
              <div>
                <p className="text-[10px] uppercase font-mono text-gray-400">Recorded Sessions</p>
                <p className="text-sm font-bold text-white">{pastSessions.length} Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left (Code Snippet & Question) | Right (Mic Recorder & Visualizer & Feedback) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Snippet Selector & Code Display */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Snippet Picker Tabs */}
          <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase font-bold text-gray-400 flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-[#22c55e]" />
                <span>Select Code Challenge</span>
              </label>
              <button
                onClick={() => setSelectedSnippetId('custom')}
                className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition cursor-pointer ${
                  selectedSnippetId === 'custom'
                    ? 'bg-[#22c55e] text-black font-bold border-[#22c55e]'
                    : 'bg-[#080d14] text-gray-300 border-[#1e293b] hover:border-gray-500'
                }`}
              >
                + Paste Custom Code
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {snippets.map(s => {
                const isSelected = selectedSnippetId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedSnippetId(s.id);
                      handleResetRecording();
                    }}
                    className={`text-left p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#141d2e] border-[#22c55e] text-white shadow-sm'
                        : 'bg-[#080d14] border-[#1e293b] text-gray-400 hover:text-white hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-[#22c55e]">
                        {s.language.toUpperCase()}
                      </span>
                      <span className={`text-[10px] ${
                        s.difficulty === 'Beginner' ? 'text-emerald-400' : s.difficulty === 'Intermediate' ? 'text-amber-400' : 'text-rose-400'
                      }`}>
                        {s.difficulty}
                      </span>
                    </div>
                    <p className="font-semibold text-white truncate">{s.title}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Snippet Details & Code Block */}
          <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] overflow-hidden">
            {/* Header */}
            <div className="p-5 border-b border-[#1e293b] bg-[#080d14]/60 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#141d2e] text-[#22c55e] border border-[#22c55e]/20 font-bold">
                    {activeSnippet.category}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">
                    Target: ~{activeSnippet.targetDurationSeconds}s
                  </span>
                </div>
                <span className="text-xs text-emerald-400 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Interview Prompt</span>
                </span>
              </div>

              {selectedSnippetId === 'custom' ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={customSnippetTitle}
                    onChange={e => setCustomSnippetTitle(e.target.value)}
                    placeholder="Enter custom snippet title..."
                    className="w-full bg-[#141d2e] border border-[#1e293b] rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#22c55e]"
                  />
                </div>
              ) : (
                <h3 className="text-base font-bold text-white">{activeSnippet.title}</h3>
              )}

              <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl">
                <p className="text-xs text-amber-200 leading-relaxed font-medium">
                  <span className="font-bold">Prompt: </span>
                  {activeSnippet.interviewQuestion}
                </p>
              </div>
            </div>

            {/* Code Box */}
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Code to Explain:</span>
                <span>Language: {activeSnippet.language}</span>
              </div>

              {selectedSnippetId === 'custom' ? (
                <textarea
                  value={customSnippetCode}
                  onChange={e => setCustomSnippetCode(e.target.value)}
                  rows={8}
                  className="w-full bg-[#080d14] border border-[#1e293b] rounded-xl p-4 font-mono text-xs text-emerald-300 focus:outline-none focus:border-[#22c55e] leading-relaxed resize-y"
                  placeholder="Paste JavaScript, Python, CSS, or HTML code here..."
                />
              ) : (
                <div className="relative group">
                  <pre className="bg-[#080d14] border border-[#1e293b] rounded-xl p-4 overflow-x-auto text-xs font-mono text-emerald-300 leading-relaxed max-h-72">
                    <code>{activeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Suggested Verbal Structure Guide */}
              <div className="p-4 rounded-xl bg-[#080d14] border border-[#1e293b] space-y-2.5">
                <h4 className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>Recommended Speaking Structure (PREP Method)</span>
                </h4>
                <ul className="text-xs text-gray-400 space-y-1.5 list-none pl-1">
                  {activeSnippet.suggestedOutline.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#22c55e] font-mono font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Keywords Checklist Target */}
              <div className="space-y-1.5">
                <p className="text-[11px] font-mono uppercase text-gray-400">Target Terminology to Mention:</p>
                <div className="flex flex-wrap gap-1.5">
                  {activeSnippet.targetKeywords.map(kw => {
                    const isMentioned = transcript.toLowerCase().includes(kw.toLowerCase());
                    return (
                      <span
                        key={kw}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md border flex items-center space-x-1 transition ${
                          isMentioned
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold'
                            : 'bg-[#141d2e] border-[#1e293b] text-gray-400'
                        }`}
                      >
                        {isMentioned && <CheckCircle2 className="w-3 h-3 text-[#22c55e]" />}
                        <span>{kw}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Microphone Recording Console & Visualizer & AI Feedback */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Active Audio Recording Studio Card */}
          <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 space-y-6 relative overflow-hidden">
            
            {/* Top Status & Duration Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1e293b]">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className={`w-3.5 h-3.5 rounded-full ${
                    isRecording && !isPaused ? 'bg-rose-500 animate-ping' : isPaused ? 'bg-amber-400' : 'bg-gray-600'
                  }`} />
                  <div className={`w-3.5 h-3.5 rounded-full absolute inset-0 ${
                    isRecording && !isPaused ? 'bg-rose-500' : isPaused ? 'bg-amber-400' : 'bg-gray-600'
                  }`} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                  {isRecording && !isPaused ? 'Live Recording' : isPaused ? 'Recording Paused' : audioUrl ? 'Recording Ready' : 'Standby (Mic Ready)'}
                </span>
              </div>

              {/* Timer Counter */}
              <div className="flex items-center space-x-2 font-mono text-sm bg-[#080d14] px-3 py-1 rounded-lg border border-[#1e293b]">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span className={`font-bold ${isRecording ? 'text-rose-400' : 'text-gray-300'}`}>
                  {formatTime(duration)}
                </span>
                <span className="text-gray-600">/</span>
                <span className="text-gray-500 text-xs">
                  {formatTime(activeSnippet.targetDurationSeconds)}
                </span>
              </div>
            </div>

            {/* Audio Waveform Canvas Visualizer */}
            <div className="space-y-2">
              <div className="relative rounded-xl overflow-hidden bg-[#080d14] border border-[#1e293b] h-32 flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  width={480}
                  height={128}
                  className="w-full h-full block"
                />

                {/* Overlay when not recording */}
                {!isRecording && !audioUrl && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[2px] p-4 text-center space-y-2">
                    <Mic className="w-7 h-7 text-[#22c55e]" />
                    <p className="text-xs font-semibold text-white">Microphone Input Visualizer</p>
                    <p className="text-[11px] text-gray-400 max-w-xs">
                      Press "Start Recording" to speak your code walkthrough out loud.
                    </p>
                  </div>
                )}

                {/* Live Mic Level Bar */}
                {isRecording && (
                  <div className="absolute bottom-2 left-3 right-3 flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md border border-gray-800">
                    <Volume2 className="w-3.5 h-3.5 text-[#22c55e]" />
                    <div className="flex-1 bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 via-[#22c55e] to-rose-500 transition-all duration-75"
                        style={{ width: `${audioLevel}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">{audioLevel}%</span>
                  </div>
                )}
              </div>

              {micPermission === 'denied' && (
                <div className="p-3 bg-rose-950/40 border border-rose-800 rounded-xl text-xs text-rose-300 flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <span className="font-bold">Microphone access blocked: </span>
                    <span>Please allow microphone permissions in your browser URL bar or settings to record your technical explanation.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Recording Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {!isRecording ? (
                <button
                  onClick={handleStartRecording}
                  className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-black font-extrabold text-xs sm:text-sm shadow-lg shadow-[#22c55e]/25 transition active:scale-95 cursor-pointer"
                >
                  <Mic className="w-4 h-4" />
                  <span>{audioUrl ? 'Record Again (New Take)' : 'Start Voice Recording'}</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={handleTogglePause}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#141d2e] hover:bg-[#1e293b] text-white font-semibold text-xs border border-[#1e293b] transition cursor-pointer"
                  >
                    {isPaused ? <Play className="w-4 h-4 text-[#22c55e]" /> : <Pause className="w-4 h-4 text-amber-400" />}
                    <span>{isPaused ? 'Resume' : 'Pause'}</span>
                  </button>

                  <button
                    onClick={handleStopRecording}
                    className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-900/30 transition active:scale-95 cursor-pointer"
                  >
                    <Square className="w-4 h-4 fill-white" />
                    <span>Stop Recording</span>
                  </button>
                </>
              )}

              {audioUrl && !isRecording && (
                <button
                  onClick={handleResetRecording}
                  className="p-3 rounded-xl bg-[#141d2e] hover:bg-[#1e293b] text-gray-400 hover:text-white border border-[#1e293b] transition cursor-pointer"
                  title="Discard Recording"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Audio Playback Player (when audio is recorded) */}
            {audioUrl && !isRecording && (
              <div className="p-4 rounded-xl bg-[#080d14] border border-[#1e293b] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Listen Back to Your Explanation</span>
                  </span>
                  <div className="flex items-center space-x-1">
                    {[0.75, 1, 1.25, 1.5].map(rate => (
                      <button
                        key={rate}
                        onClick={() => changePlaybackRate(rate)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded cursor-pointer transition ${
                          playbackRate === rate
                            ? 'bg-[#22c55e] text-black font-bold'
                            : 'bg-[#141d2e] text-gray-400 hover:text-white'
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hidden Audio element for controlled playback */}
                <audio
                  ref={audioElementRef}
                  src={audioUrl}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onTimeUpdate={(e) => setPlaybackTime(e.currentTarget.currentTime)}
                  onLoadedMetadata={(e) => setPlaybackDuration(e.currentTarget.duration)}
                />

                {/* Scrubber & Player Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlayAudio}
                    className="w-9 h-9 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-black flex items-center justify-center font-bold shrink-0 transition cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
                  </button>

                  <div className="flex-1 space-y-1">
                    <input
                      type="range"
                      min={0}
                      max={playbackDuration || duration || 1}
                      step={0.1}
                      value={playbackTime}
                      onChange={(e) => handleSeek(parseFloat(e.target.value))}
                      className="w-full accent-[#22c55e] cursor-pointer h-1.5 bg-gray-700 rounded-lg appearance-none"
                    />
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                      <span>{formatTime(playbackTime)}</span>
                      <span>{formatTime(playbackDuration || duration)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleDownloadRecording}
                    className="p-2 rounded-lg bg-[#141d2e] hover:bg-[#1e293b] text-gray-300 hover:text-white border border-[#1e293b] transition cursor-pointer"
                    title="Download Audio (.webm)"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Speech-to-Text Transcript Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase font-bold text-gray-400 flex items-center space-x-1.5">
                  <Edit3 className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>Speech Transcript</span>
                  {isLiveTranscribing && isRecording && (
                    <span className="text-[10px] font-normal text-[#22c55e] animate-pulse">(Listening...)</span>
                  )}
                </label>
                <button
                  onClick={() => setIsEditingTranscript(!isEditingTranscript)}
                  className="text-[11px] text-gray-400 hover:text-white transition cursor-pointer"
                >
                  {isEditingTranscript ? 'Done Editing' : 'Edit Transcript'}
                </button>
              </div>

              {isEditingTranscript || !transcript ? (
                <textarea
                  value={transcript}
                  onChange={e => setTranscript(e.target.value)}
                  placeholder="Your words will be automatically transcribed here using the browser speech recognition API while you speak into the microphone. You can also manually type or polish your transcript here."
                  rows={4}
                  className="w-full bg-[#080d14] border border-[#1e293b] rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e] leading-relaxed resize-y"
                />
              ) : (
                <div
                  onClick={() => setIsEditingTranscript(true)}
                  className="p-3.5 bg-[#080d14] border border-[#1e293b] rounded-xl text-xs text-gray-200 leading-relaxed min-h-20 cursor-pointer hover:border-gray-600 transition"
                  title="Click to edit transcript"
                >
                  {transcript}
                </div>
              )}

              <div className="flex items-center justify-between text-[11px] text-gray-500">
                <span>Words spoken: {transcript.trim() ? transcript.trim().split(/\s+/).length : 0}</span>
                <span>Pacing metric: ~{duration > 0 ? Math.round((transcript.trim().split(/\s+/).filter(Boolean).length / Math.max(duration / 60, 0.1))) : 0} WPM</span>
              </div>
            </div>

            {/* Submit for AI Communication Analysis */}
            <button
              onClick={handleEvaluateExplanation}
              disabled={isEvaluating || isRecording || !transcript.trim()}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#22c55e] to-emerald-600 hover:from-[#16a34a] hover:to-emerald-700 disabled:opacity-50 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#22c55e]/20 transition cursor-pointer"
            >
              {isEvaluating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  <span>Evaluating Technical Communication...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Analyze My Verbal Explanation</span>
                </>
              )}
            </button>
          </div>

          {/* AI Communication Evaluation Results Card */}
          {evaluationResult && (
            <div className="rounded-2xl bg-[#0d131f] border border-[#22c55e]/40 p-6 space-y-6 animate-fadeIn">
              
              {/* Scorecard Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1e293b]">
                <div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#22c55e]/20 text-[#22c55e] font-bold border border-[#22c55e]/40">
                    COMMUNICATION SCORECARD
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">Verbal Evaluation Report</h3>
                </div>

                {/* Overall Score Badge */}
                <div className="flex items-center space-x-3 bg-[#080d14] px-4 py-2.5 rounded-xl border border-[#1e293b]">
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-mono text-gray-400">Overall Score</p>
                    <p className="text-xs font-semibold text-emerald-400">
                      {evaluationResult.overallScore >= 80 ? 'Interview Ready' : evaluationResult.overallScore >= 60 ? 'Proficient' : 'Needs Polish'}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#22c55e] text-black font-black text-xl flex items-center justify-center shadow-md">
                    {evaluationResult.overallScore}
                  </div>
                </div>
              </div>

              {/* Metric Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#080d14] border border-[#1e293b] space-y-1">
                  <span className="text-[10px] uppercase font-mono text-gray-400">Technical Accuracy</span>
                  <p className="text-lg font-bold text-white">{evaluationResult.accuracyScore}%</p>
                  <p className="text-[11px] text-gray-400">Correctness & flow</p>
                </div>
                <div className="p-3 rounded-xl bg-[#080d14] border border-[#1e293b] space-y-1">
                  <span className="text-[10px] uppercase font-mono text-gray-400">Clarity & Structure</span>
                  <p className="text-lg font-bold text-white">{evaluationResult.clarityScore}%</p>
                  <p className="text-[11px] text-gray-400">Articulate framing</p>
                </div>
                <div className="p-3 rounded-xl bg-[#080d14] border border-[#1e293b] space-y-1">
                  <span className="text-[10px] uppercase font-mono text-gray-400">Pace & Delivery</span>
                  <p className={`text-lg font-bold ${
                    evaluationResult.pacingStatus === 'Optimal' ? 'text-[#22c55e]' : 'text-amber-400'
                  }`}>
                    {evaluationResult.wordsPerMinute} WPM
                  </p>
                  <p className="text-[11px] text-gray-400">{evaluationResult.pacingStatus} Cadence</p>
                </div>
              </div>

              {/* Pacing Advice */}
              <div className="p-3.5 rounded-xl bg-[#141d2e] border border-[#1e293b] text-xs text-gray-300 flex items-start space-x-2">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{evaluationResult.pacingFeedback}</span>
              </div>

              {/* Strengths & Improvement Tips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Communication Strengths</span>
                  </h4>
                  <ul className="text-xs text-gray-300 space-y-1.5">
                    {evaluationResult.strengths?.map((str: string, idx: number) => (
                      <li key={idx} className="p-2 rounded-lg bg-[#080d14] border border-emerald-900/30">
                        {str}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 flex items-center space-x-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Pro Interviewer Tips</span>
                  </h4>
                  <ul className="text-xs text-gray-300 space-y-1.5">
                    {evaluationResult.improvementTips?.map((tip: string, idx: number) => (
                      <li key={idx} className="p-2 rounded-lg bg-[#080d14] border border-amber-900/30">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Model Senior Explanation Accordion */}
              <div className="rounded-xl border border-[#1e293b] bg-[#080d14] overflow-hidden">
                <button
                  onClick={() => setShowModelAnswer(!showModelAnswer)}
                  className="w-full p-3.5 flex items-center justify-between text-xs font-bold text-gray-200 hover:text-white transition cursor-pointer"
                >
                  <span className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-[#22c55e]" />
                    <span>Model Senior Engineer Explanation (45s Benchmark)</span>
                  </span>
                  <span className="text-xs font-mono text-[#22c55e]">
                    {showModelAnswer ? 'Hide' : 'Reveal'}
                  </span>
                </button>

                {showModelAnswer && (
                  <div className="p-4 border-t border-[#1e293b] bg-[#0a0f18] text-xs text-gray-300 leading-relaxed space-y-2">
                    <p className="italic text-gray-400 font-mono text-[11px]">
                      "How an engineer would verbally answer in a live technical interview:"
                    </p>
                    <p className="whitespace-pre-line text-emerald-200/90 font-sans">
                      {evaluationResult.modelExplanation || activeSnippet.modelExplanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Past Voice Practice Sessions History */}
          {pastSessions.length > 0 && (
            <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase font-mono text-gray-400 flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>Recent Verbal Practice Takes</span>
                </h4>
                <button
                  onClick={() => {
                    setPastSessions([]);
                    localStorage.removeItem('coding_vibes_voice_sessions_v1');
                  }}
                  className="text-[10px] text-gray-500 hover:text-rose-400 transition cursor-pointer"
                >
                  Clear History
                </button>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {pastSessions.map(session => (
                  <div
                    key={session.id}
                    className="p-3 rounded-xl bg-[#080d14] border border-[#1e293b] flex items-center justify-between text-xs"
                  >
                    <div className="space-y-0.5">
                      <p className="font-semibold text-white truncate max-w-xs">{session.snippetTitle}</p>
                      <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400">
                        <span>{formatTime(session.durationSeconds)}</span>
                        <span>•</span>
                        <span>{session.wordCount} words</span>
                        <span>•</span>
                        <span>{new Date(session.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        session.pacingStatus === 'Optimal' ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'
                      }`}>
                        {session.pacingStatus}
                      </span>
                      <span className="font-mono font-bold text-sm text-[#22c55e] bg-[#141d2e] px-2 py-0.5 rounded border border-[#22c55e]/30">
                        {session.overallScore}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
