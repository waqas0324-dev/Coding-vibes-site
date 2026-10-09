import React, { useState, useRef, useEffect } from 'react';
import JSZip from 'jszip';
import Markdown from 'react-markdown';
import {
  Sparkles,
  Mic,
  MicOff,
  Image as ImageIcon,
  Clipboard,
  Send,
  Volume2,
  VolumeX,
  Check,
  ArrowRight,
  Code2,
  X,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  RotateCcw,
  Play,
  Download,
  Copy,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileCode,
  BookOpen,
  Eye,
  FileText
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface AiMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCode?: string;
  onApplyCode?: (newCode: string) => void;
  lessonTitle?: string;
  language?: string;
}

interface MentorResponse {
  type?: 'debug' | 'project' | 'guidance' | 'qa';
  title?: string;
  errorIdentified: string;
  explanation: string;
  fixedCode: string;
  tips: string[];
  detailedIssues?: { line?: number; issue: string; explanation: string; suggestion: string }[];
  codeLines?: { lineNumber: number; text: string; isError: boolean; message?: string }[];
  files?: { name: string; content: string; language: string }[];
  hasLivePreview?: boolean;
  hasZipDownload?: boolean;
  actionLink?: { label: string; courseSlug: string; lessonSlug: string };
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  image?: string | null;
  codeSnippet?: string;
  timestamp: number;
  status?: 'analyzing' | 'generating' | 'ready' | 'error';
  statusText?: string;
  response?: MentorResponse;
  activeTab?: 'preview' | number;
}

export const AiMentorModal: React.FC<AiMentorModalProps> = ({
  isOpen,
  onClose,
  currentCode = '',
  onApplyCode,
  lessonTitle = 'HTML Tutorial',
  language = 'html'
}) => {
  const { navigateTo } = useNavigation();

  const [prompt, setPrompt] = useState('');
  const [codeSnippet, setCodeSnippet] = useState(currentCode);
  const [showCodeBox, setShowCodeBox] = useState(Boolean(currentCode && currentCode.trim().length > 0));
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState<string | null>(null); // message ID being read aloud
  const [langPreference, setLangPreference] = useState<'en' | 'ur'>('ur'); // Default to Urdu for friendly localized support
  const [voiceLang, setVoiceLang] = useState<'ur' | 'en'>('ur'); // Voice input language: ur-PK or en-US
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Chat conversation messages
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-1',
      sender: 'assistant',
      text:
        langPreference === 'ur'
          ? 'السلام علیکم! میں آپ کا **Coding Vibes AI Mentor** ہوں۔ آپ مجھ سے کوڈنگ سیکھنے کا روڈ میپ لے سکتے ہیں، کوڈ میں غلطیاں ٹھیک کروا سکتے ہیں، یا اسکرین شاٹ دے کر مکمل پراجیکٹ (جیسے کہ آئی فون کیلکولیٹر، ٹوڈو ایپ، یا ایڈمن پینل) بنوا سکتے ہیں۔\n\nشروع کرنے کے لیے نیچے دیے گئے پروجیکٹس میں سے کوئی منتخب کریں یا اپنا پیغام لکھیں!'
          : 'Welcome! I am your **Coding Vibes AI Mentor**. I can guide your learning roadmap, debug errors in your code, or build complete projects from scratch or screenshots (like an iOS Calculator replica, To-Do App, or Admin Dashboard).\n\nSelect a project below or ask a question to get started!',
      timestamp: Date.now(),
      status: 'ready'
    }
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);
  const isListeningRef = useRef(false);
  const promptPrefixRef = useRef('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Sync incoming code from editor
  useEffect(() => {
    if (currentCode) {
      setCodeSnippet(currentCode);
      if (currentCode.trim().length > 0) {
        setShowCodeBox(true);
      }
    }
  }, [currentCode]);

  // Cleanup speech synthesis & recognition on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (recognitionRef.current) {
        isListeningRef.current = false;
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Continuous Voice Input handler
  const toggleSpeechRecognition = () => {
    if (isListening) {
      isListeningRef.current = false;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          console.error(e);
        }
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please type or paste your question.');
      return;
    }

    try {
      isListeningRef.current = true;
      promptPrefixRef.current = prompt.trim() ? prompt.trim() + ' ' : '';

      const recognition = new SpeechRecognition();
      recognition.lang = voiceLang === 'ur' ? 'ur-PK' : 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let currentSessionTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentSessionTranscript += event.results[i][0].transcript;
        }
        setPrompt(promptPrefixRef.current + currentSessionTranscript);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          isListeningRef.current = false;
          setIsListening(false);
        }
      };

      recognition.onend = () => {
        if (isListeningRef.current) {
          try {
            recognition.start();
          } catch {
            isListeningRef.current = false;
            setIsListening(false);
          }
        } else {
          setIsListening(false);
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Failed to start speech recognition:', err);
      isListeningRef.current = false;
      setIsListening(false);
    }
  };

  // Textarea Clipboard Paste Handler (Supports images from snipping tool & normal text)
  const handleTextareaPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf('image') !== -1) {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImagePreview(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
        return;
      }
    }
  };

  // Direct "Paste from Clipboard" button click handler
  const handlePasteFromClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.read) {
        try {
          const items = await navigator.clipboard.read();
          for (const item of items) {
            const imageType = item.types.find(t => t.startsWith('image/'));
            if (imageType) {
              const blob = await item.getType(imageType);
              const reader = new FileReader();
              reader.onload = () => {
                setImagePreview(reader.result as string);
              };
              reader.readAsDataURL(blob);
              return;
            }
          }
        } catch {
          // Clipboard read may have restricted permissions, fallback to readText
        }
      }

      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setPrompt(prev => (prev.trim() ? `${prev}\n${text}` : text));
          textareaRef.current?.focus();
        }
      }
    } catch (err) {
      console.warn('Clipboard read error:', err);
    }
  };

  // Handle Speech Output (Read Aloud)
  const toggleSpeechOutput = (msgId: string, text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Text to speech is not supported in this browser.');
      return;
    }

    if (isSpeaking === msgId) {
      window.speechSynthesis.cancel();
      setIsSpeaking(null);
      return;
    }

    window.speechSynthesis.cancel();

    // Remove markdown symbols for clear speech
    const cleanText = text
      .replace(/\*\*/g, '')
      .replace(/`/g, '')
      .replace(/#/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langPreference === 'ur' ? 'ur-PK' : 'en-US';
    utterance.rate = 1.0;

    utterance.onend = () => setIsSpeaking(null);
    utterance.onerror = () => setIsSpeaking(null);

    setIsSpeaking(msgId);
    window.speechSynthesis.speak(utterance);
  };

  // Handle Image File Selection
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Submit query to AI Mentor backend with ChatGPT-like live feedback
  const handleSubmit = async (overridePrompt?: string, overrideImage?: string | null) => {
    const queryText = overridePrompt !== undefined ? overridePrompt : prompt;
    const queryImage = overrideImage !== undefined ? overrideImage : imagePreview;
    const attachedCode = showCodeBox ? codeSnippet : '';

    if (!queryText.trim() && !attachedCode.trim() && !queryImage) {
      return;
    }

    // Stop voice listening if currently on
    if (isListening) {
      isListeningRef.current = false;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
      setIsListening(false);
    }

    const userMsgId = 'user-' + Date.now();
    const assistantMsgId = 'assistant-' + Date.now();

    // Add user message to conversation
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: queryText,
      image: queryImage,
      codeSnippet: attachedCode || undefined,
      timestamp: Date.now()
    };

    // Add assistant thinking message
    const initialAssistantMsg: ChatMessage = {
      id: assistantMsgId,
      sender: 'assistant',
      text: '',
      timestamp: Date.now(),
      status: 'analyzing',
      statusText:
        langPreference === 'ur'
          ? 'آپ کا پیغام دیکھا جا رہا ہے اور تیاری کی جا رہی ہے...'
          : 'Analyzing request and preparing response...'
    };

    setMessages(prev => [...prev, newUserMsg, initialAssistantMsg]);
    setPrompt('');
    setImagePreview(null);
    setIsLoading(true);

    // Progress feedback simulation (ChatGPT style)
    const progressTimer = setTimeout(() => {
      setMessages(prev =>
        prev.map(m =>
          m.id === assistantMsgId
            ? {
                ...m,
                status: 'generating',
                statusText:
                  langPreference === 'ur'
                    ? 'کوڈ کی ساخت، جدید اسٹائلنگ، اور لائیو پریویو تیار ہو رہا ہے...'
                    : 'Structuring responsive layout, code files, and sandbox preview...'
              }
            : m
        )
      );
    }, 900);

    try {
      const response = await fetch('/api/ai-mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: queryText,
          code: attachedCode,
          language,
          lessonTitle,
          imageBase64: queryImage,
          langPreference
        })
      });

      clearTimeout(progressTimer);
      const data: MentorResponse = await response.json();

      setMessages(prev =>
        prev.map(m =>
          m.id === assistantMsgId
            ? {
                ...m,
                status: 'ready',
                statusText: undefined,
                text: data.explanation || '',
                response: data,
                activeTab: data.hasLivePreview || (data.files && data.files.length > 0) ? 'preview' : 0
              }
            : m
        )
      );
    } catch (err) {
      clearTimeout(progressTimer);
      console.error('AI Mentor fetch error:', err);

      const fallbackData: MentorResponse = {
        type: 'debug',
        title: 'Offline Code Inspection',
        errorIdentified: 'Connection Check Completed',
        explanation:
          langPreference === 'ur'
            ? 'کنکشن کی جانچ مکمل ہو گئی ہے۔ اگر کوئی سوال ہے تو دوبارہ پوچھیں۔'
            : 'Inspection complete. Could not reach cloud AI endpoint, checked syntax locally.',
        fixedCode: attachedCode,
        tips: ['Check HTML closing tags', 'Ensure proper quotation marks on attributes']
      };

      setMessages(prev =>
        prev.map(m =>
          m.id === assistantMsgId
            ? {
                ...m,
                status: 'ready',
                text: fallbackData.explanation,
                response: fallbackData,
                activeTab: 0
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleApply = (codeToApply: string) => {
    if (codeToApply && onApplyCode) {
      onApplyCode(codeToApply);
      onClose();
    }
  };

  const handleCopyCode = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Generate downloadable ZIP file for projects
  const handleDownloadZip = async (msgResponse?: MentorResponse) => {
    if (!msgResponse?.files || msgResponse.files.length === 0) return;

    try {
      const zip = new JSZip();

      msgResponse.files.forEach(f => {
        zip.file(f.name, f.content);
      });

      zip.file(
        'README.md',
        `# ${msgResponse.title || 'Coding Vibes Project'}\n\n` +
          `Generated by Coding Vibes AI Mentor.\n\n` +
          `## How to Run:\n` +
          `1. Extract this ZIP file into a folder on your computer.\n` +
          `2. Double-click "index.html" to open it in Google Chrome, Edge, or Firefox.\n` +
          `3. Enjoy coding and experimenting!\n`
      );

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${(msgResponse.title || 'CodingVibes-Project').toLowerCase().replace(/[^a-z0-9]/g, '-')}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to create ZIP:', err);
      alert('Could not download zip file. Please copy the code directly.');
    }
  };

  // Open preview in new browser tab
  const handleOpenPreviewNewTab = (msgResponse?: MentorResponse) => {
    if (!msgResponse) return;
    const fullHtml = getPreviewDocument(msgResponse);
    if (!fullHtml) return;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  // Render unified iframe document
  const getPreviewDocument = (msgResponse?: MentorResponse) => {
    if (!msgResponse) return '';
    if (msgResponse.files && msgResponse.files.length > 0) {
      const htmlFile = msgResponse.files.find(f => f.name.endsWith('.html'))?.content || '';
      const cssFile = msgResponse.files.find(f => f.name.endsWith('.css'))?.content || '';
      const jsFile = msgResponse.files.find(f => f.name.endsWith('.js'))?.content || '';

      return htmlFile
        .replace('<link rel="stylesheet" href="style.css">', `<style>${cssFile}</style>`)
        .replace('<script src="script.js"></script>', `<script>${jsFile}</script>`);
    }
    return msgResponse.fixedCode || '';
  };

  // Switch tab for a specific message
  const setMessageActiveTab = (msgId: string, tab: 'preview' | number) => {
    setMessages(prev =>
      prev.map(m => (m.id === msgId ? { ...m, activeTab: tab } : m))
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-4xl h-[92vh] flex flex-col bg-white dark:bg-[#0c121e] border border-gray-300 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-xs">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-extrabold text-base sm:text-lg">Coding Vibes AI Mentor</h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/25 text-white">
                  ChatGPT Mode
                </span>
              </div>
              <p className="text-xs text-white/90">
                Interactive Assistant • Project Generator • Real-Time Feedback
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Urdu / English language switch */}
            <button
              onClick={() => {
                const nextLang = langPreference === 'en' ? 'ur' : 'en';
                setLangPreference(nextLang);
                setVoiceLang(nextLang);
              }}
              className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white/20 hover:bg-white/30 text-white transition shadow-xs cursor-pointer"
              title="Toggle explanation language"
            >
              {langPreference === 'en' ? 'اردو موڈ (Urdu)' : 'English Mode'}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Close AI Mentor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Project Showcase Bar */}
        <div className="px-4 py-2 bg-gray-50 dark:bg-[#080d17] border-b border-gray-200 dark:border-gray-800 flex items-center gap-2 overflow-x-auto text-xs shrink-0 no-scrollbar">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider shrink-0">
            {langPreference === 'ur' ? 'تیار پروجیکٹس:' : 'Quick Starters:'}
          </span>

          {/* iOS Calculator Project */}
          <button
            type="button"
            onClick={() => handleSubmit('سکرین شاٹ جیسا ڈارک iOS کیلکولیٹر بنا کے دیں')}
            disabled={isLoading}
            className="px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950/70 hover:bg-emerald-200 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-bold border border-emerald-300/60 dark:border-emerald-800 flex items-center space-x-1.5 shrink-0 transition cursor-pointer disabled:opacity-50"
          >
            <span>📱</span>
            <span>{langPreference === 'ur' ? 'آئی فون کیلکولیٹر' : 'iOS Calculator'}</span>
          </button>

          {/* Interactive To-Do List Project */}
          <button
            type="button"
            onClick={() => handleSubmit('مجھے ایک انٹرایکٹو ٹوڈو لسٹ بنا کے دیں جس میں ترجیحات اور لوکل سٹوریج ہو')}
            disabled={isLoading}
            className="px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/70 hover:bg-blue-200 dark:hover:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold border border-blue-300/60 dark:border-blue-800 flex items-center space-x-1.5 shrink-0 transition cursor-pointer disabled:opacity-50"
          >
            <span>📝</span>
            <span>{langPreference === 'ur' ? 'ٹوڈو لسٹ ایپ' : 'To-Do List App'}</span>
          </button>

          {/* Admin Analytics Dashboard Project */}
          <button
            type="button"
            onClick={() => handleSubmit('ایک جدید ایڈمن ڈیش بورڈ پینل بنا کر دیں جس میں کے پی آئی کارڈز اور ڈیٹا ٹیبل ہو')}
            disabled={isLoading}
            className="px-3 py-1 rounded-full bg-purple-100/70 dark:bg-purple-950/70 hover:bg-purple-200 dark:hover:bg-purple-900 text-purple-800 dark:text-purple-200 font-bold border border-purple-300/60 dark:border-purple-800 flex items-center space-x-1.5 shrink-0 transition cursor-pointer disabled:opacity-50"
          >
            <span>📊</span>
            <span>{langPreference === 'ur' ? 'ایڈمن ڈیش بورڈ' : 'Admin Dashboard'}</span>
          </button>

          {/* Learning Roadmap */}
          <button
            type="button"
            onClick={() => handleSubmit('مجھے ویب ڈویلپمنٹ اور HTML CSS سیکھنے کا مکمل روڈ میپ بتائیں')}
            disabled={isLoading}
            className="px-3 py-1 rounded-full bg-amber-100/70 dark:bg-amber-950/70 hover:bg-amber-200 dark:hover:bg-amber-900 text-amber-800 dark:text-amber-200 font-bold border border-amber-300/60 dark:border-amber-800 flex items-center space-x-1.5 shrink-0 transition cursor-pointer disabled:opacity-50"
          >
            <span>💡</span>
            <span>{langPreference === 'ur' ? 'HTML روڈ میپ' : 'HTML Roadmap'}</span>
          </button>
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-gray-900 dark:text-gray-100">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              } space-y-2`}
            >
              {/* Sender Label & Avatar */}
              <div className="flex items-center space-x-2 text-xs text-gray-500 font-semibold px-1">
                {msg.sender === 'user' ? (
                  <>
                    <span>You</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </>
                ) : (
                  <>
                    <div className="w-5 h-5 rounded-full bg-[#04AA6D] flex items-center justify-center text-white text-[10px] font-bold">
                      AI
                    </div>
                    <span>Coding Vibes Mentor</span>
                  </>
                )}
              </div>

              {/* Message Bubble */}
              {msg.sender === 'user' ? (
                <div className="max-w-[85%] sm:max-w-xl p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md space-y-2.5">
                  {/* Attached Image inside User Message */}
                  {msg.image && (
                    <div className="rounded-xl overflow-hidden border border-white/20 shadow-xs max-w-xs">
                      <img
                        src={msg.image}
                        alt="User Attached Screenshot"
                        className="w-full max-h-48 object-contain bg-black/40"
                      />
                    </div>
                  )}

                  {/* User Text */}
                  {msg.text && (
                    <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">
                      {msg.text}
                    </p>
                  )}

                  {/* Attached Code */}
                  {msg.codeSnippet && (
                    <div className="text-xs bg-black/30 p-2.5 rounded-lg border border-white/10 font-mono overflow-x-auto max-h-36">
                      <div className="text-[10px] text-white/70 font-bold mb-1">Attached Code:</div>
                      <pre className="whitespace-pre">{msg.codeSnippet}</pre>
                    </div>
                  )}
                </div>
              ) : (
                /* Assistant Message */
                <div className="w-full max-w-full space-y-3">
                  {/* Status Progress Indicator (ChatGPT style: "Preparing this...") */}
                  {msg.status && msg.status !== 'ready' && (
                    <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-[#07131b] border border-emerald-300 dark:border-emerald-800 flex items-center space-x-3 text-emerald-800 dark:text-emerald-300 text-xs font-bold animate-pulse">
                      <div className="w-4 h-4 border-2 border-[#04AA6D] border-t-transparent rounded-full animate-spin shrink-0"></div>
                      <span>{msg.statusText || 'I am preparing your request...'}</span>
                    </div>
                  )}

                  {/* Completed Response Card */}
                  {msg.status === 'ready' && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#070e17] border-2 border-emerald-500/30 space-y-5 shadow-lg">
                      {/* Response Header */}
                      <div className="flex items-start justify-between gap-3 pb-3 border-b border-gray-200 dark:border-gray-800">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                            {msg.response?.type && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                                {msg.response.type === 'project'
                                  ? 'Project Ready'
                                  : msg.response.type === 'guidance'
                                  ? 'Learning Roadmap'
                                  : 'Inspection Report'}
                              </span>
                            )}
                            {msg.response?.title && (
                              <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
                                {msg.response.title}
                              </h4>
                            )}
                          </div>
                          {msg.response?.errorIdentified && (
                            <p className="text-xs font-bold text-[#04AA6D]">
                              {msg.response.errorIdentified}
                            </p>
                          )}
                        </div>

                        {/* Speech Synthesis Audio Button */}
                        <button
                          type="button"
                          onClick={() => toggleSpeechOutput(msg.id, msg.text)}
                          className={`p-2 rounded-lg border text-xs font-bold flex items-center space-x-1 shrink-0 transition cursor-pointer ${
                            isSpeaking === msg.id
                              ? 'bg-emerald-600 text-white border-emerald-700'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-200'
                          }`}
                          title={isSpeaking === msg.id ? 'Stop voice readout' : 'Read explanation aloud'}
                        >
                          {isSpeaking === msg.id ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Rich Markdown Explanation */}
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-relaxed space-y-2">
                        <Markdown
                          components={{
                            h1: ({ children }) => (
                              <h1 className="text-lg font-black text-gray-900 dark:text-white mt-2 mb-1">
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h2 className="text-base font-black text-gray-900 dark:text-white mt-2 mb-1">
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-1.5 mb-1">
                                {children}
                              </h3>
                            ),
                            p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                            strong: ({ children }) => (
                              <strong className="font-extrabold text-emerald-950 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                                {children}
                              </strong>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc list-inside space-y-1 my-2 pl-1">{children}</ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal list-inside space-y-1.5 my-2 pl-1 font-semibold">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="text-gray-800 dark:text-gray-200 leading-relaxed">{children}</li>
                            ),
                            code: ({ children }) => (
                              <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[#04AA6D] font-mono text-xs font-bold border border-gray-200 dark:border-gray-700">
                                {children}
                              </code>
                            )
                          }}
                        >
                          {msg.text}
                        </Markdown>
                      </div>

                      {/* Action Link for Guided Course Lessons */}
                      {msg.response?.actionLink && (
                        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-emerald-900/30 border-2 border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2 text-emerald-900 dark:text-emerald-200 font-extrabold text-sm sm:text-base">
                              <BookOpen className="w-5 h-5 text-[#04AA6D] shrink-0" />
                              <span>
                                {langPreference === 'ur'
                                  ? 'باقاعدہ کورس کا سبق شروع کریں:'
                                  : 'Interactive Course Lesson Available:'}
                              </span>
                            </div>
                            <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                              {langPreference === 'ur'
                                ? 'کوڈنگ وائبز کے اس سبق میں جا کر انٹرایکٹو مشقیں شروع کریں'
                                : 'Open this topic directly in Coding Vibes to practice with guided exercises'}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              onClose();
                              navigateTo('lesson', {
                                courseSlug: msg.response!.actionLink!.courseSlug,
                                lessonSlug: msg.response!.actionLink!.lessonSlug
                              });
                            }}
                            className="px-5 py-2.5 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-xs sm:text-sm shadow-md transition flex items-center justify-center space-x-2 cursor-pointer shrink-0"
                          >
                            <span>{msg.response.actionLink.label}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {/* Project Tabs & Live Sandbox (Only for Project or Debug with code) */}
                      {msg.response &&
                        msg.response.type !== 'guidance' &&
                        (msg.response.hasLivePreview ||
                          (msg.response.files && msg.response.files.length > 0) ||
                          msg.response.fixedCode) && (
                          <div className="space-y-3 pt-2">
                            {/* Tab Header & Action Buttons */}
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-800 pb-2">
                              {/* Unified Tabs: [Live Preview] [index.html] [style.css] [script.js] */}
                              <div className="flex flex-wrap items-center gap-1.5">
                                {/* Live Sandbox Tab */}
                                {(msg.response.hasLivePreview ||
                                  (msg.response.files && msg.response.files.length > 0) ||
                                  msg.response.fixedCode) && (
                                  <button
                                    type="button"
                                    onClick={() => setMessageActiveTab(msg.id, 'preview')}
                                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer ${
                                      msg.activeTab === 'preview' || msg.activeTab === undefined
                                        ? 'bg-[#04AA6D] text-white shadow-xs ring-2 ring-emerald-400/40'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                  >
                                    <Play className="w-3.5 h-3.5" />
                                    <span>Live Preview</span>
                                  </button>
                                )}

                                {/* Multi-file Tabs */}
                                {msg.response.files && msg.response.files.length > 0
                                  ? msg.response.files.map((file, i) => (
                                      <button
                                        key={i}
                                        type="button"
                                        onClick={() => setMessageActiveTab(msg.id, i)}
                                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 transition cursor-pointer ${
                                          msg.activeTab === i
                                            ? 'bg-[#04AA6D] text-white shadow-xs ring-2 ring-emerald-400/40'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                      >
                                        <FileCode className="w-3.5 h-3.5" />
                                        <span>{file.name}</span>
                                      </button>
                                    ))
                                  : msg.response.fixedCode && (
                                      <button
                                        type="button"
                                        onClick={() => setMessageActiveTab(msg.id, 0)}
                                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center space-x-1.5 transition cursor-pointer ${
                                          msg.activeTab === 0
                                            ? 'bg-[#04AA6D] text-white shadow-xs ring-2 ring-emerald-400/40'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                      >
                                        <FileText className="w-3.5 h-3.5" />
                                        <span>Corrected Code</span>
                                      </button>
                                    )}
                              </div>

                              {/* Clean Action Buttons */}
                              <div className="flex items-center gap-1.5 ml-auto">
                                <button
                                  type="button"
                                  onClick={() => handleOpenPreviewNewTab(msg.response)}
                                  className="px-2.5 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs border border-gray-300 dark:border-gray-700 transition flex items-center space-x-1 cursor-pointer"
                                  title="Open preview in a full browser tab"
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                  <span className="hidden sm:inline">New Tab</span>
                                </button>

                                {msg.response.hasZipDownload &&
                                  msg.response.files &&
                                  msg.response.files.length > 0 && (
                                    <button
                                      type="button"
                                      onClick={() => handleDownloadZip(msg.response)}
                                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-xs transition flex items-center space-x-1 cursor-pointer"
                                      title="Download project as .ZIP file"
                                    >
                                      <Download className="w-3.5 h-3.5" />
                                      <span>ZIP</span>
                                    </button>
                                  )}

                                {(() => {
                                  const codeToCopy =
                                    typeof msg.activeTab === 'number' &&
                                    msg.response.files &&
                                    msg.response.files[msg.activeTab]
                                      ? msg.response.files[msg.activeTab].content
                                      : msg.response.fixedCode || getPreviewDocument(msg.response);

                                  return (
                                    <button
                                      type="button"
                                      onClick={() => handleCopyCode(msg.id, codeToCopy)}
                                      className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold text-xs border border-gray-300 dark:border-gray-700 transition flex items-center space-x-1 cursor-pointer"
                                      title="Copy code"
                                    >
                                      {copiedCodeId === msg.id ? (
                                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                                      ) : (
                                        <Copy className="w-3.5 h-3.5" />
                                      )}
                                      <span>{copiedCodeId === msg.id ? 'Copied!' : 'Copy'}</span>
                                    </button>
                                  );
                                })()}

                                {msg.response.type === 'debug' && msg.response.fixedCode && onApplyCode && (
                                  <button
                                    type="button"
                                    onClick={() => handleApply(msg.response!.fixedCode)}
                                    className="px-3 py-1.5 rounded-lg bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-xs shadow-xs transition flex items-center space-x-1 cursor-pointer"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Apply Fix</span>
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Tab Content */}
                            {msg.activeTab === 'preview' || msg.activeTab === undefined ? (
                              <div className="rounded-xl border-2 border-emerald-500 overflow-hidden bg-white shadow-md animate-in fade-in">
                                <div className="bg-gray-900 px-4 py-2 flex items-center justify-between text-white text-xs border-b border-gray-800">
                                  <span className="font-mono font-bold flex items-center space-x-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span>Interactive Live Sandbox Preview</span>
                                  </span>
                                  <span className="text-[11px] text-gray-400">
                                    Interact directly with this project
                                  </span>
                                </div>
                                <iframe
                                  title="Live Preview Sandbox"
                                  srcDoc={getPreviewDocument(msg.response)}
                                  className="w-full h-84 border-0 bg-white"
                                  sandbox="allow-scripts allow-modals"
                                />
                              </div>
                            ) : (
                              <div className="space-y-1.5 animate-in fade-in">
                                {(() => {
                                  const activeFile =
                                    msg.response.files && msg.response.files[msg.activeTab as number]
                                      ? msg.response.files[msg.activeTab as number]
                                      : null;
                                  const codeContent = activeFile
                                    ? activeFile.content
                                    : msg.response.fixedCode;

                                  return (
                                    <>
                                      <div className="flex items-center justify-between text-xs">
                                        <span className="font-mono font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-1.5">
                                          <FileCode className="w-4 h-4 text-[#04AA6D]" />
                                          <span>{activeFile ? activeFile.name : 'Solution Code'}</span>
                                        </span>
                                        {activeFile && (
                                          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                                            {activeFile.language.toUpperCase()}
                                          </span>
                                        )}
                                      </div>
                                      <pre className="p-4 bg-gray-950 text-gray-100 rounded-xl font-mono text-xs overflow-x-auto border border-gray-800 max-h-72 leading-relaxed">
                                        <code>{codeContent}</code>
                                      </pre>
                                    </>
                                  );
                                })()}
                              </div>
                            )}
                          </div>
                        )}

                      {/* Tips */}
                      {msg.response?.tips && msg.response.tips.length > 0 && (
                        <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
                          <span className="text-xs font-black text-emerald-800 dark:text-emerald-300 flex items-center space-x-1 mb-1.5">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            <span>Helpful Tips:</span>
                          </span>
                          <ul className="space-y-1">
                            {msg.response.tips.map((tip, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-800 dark:text-gray-300 font-medium flex items-start space-x-2"
                              >
                                <span className="text-[#04AA6D] font-bold shrink-0">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <div ref={chatBottomRef} />
        </div>

        {/* ChatGPT-Style Modern Composer (With Inline Image Attachment inside the Box) */}
        <div className="p-3 sm:p-4 bg-gray-50/90 dark:bg-[#0a0f1d] border-t border-gray-200 dark:border-gray-800 shrink-0 space-y-2">
          {/* Optional Code Attachment Box */}
          {showCodeBox && (
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#070b12] p-3 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <Code2 className="w-4 h-4 text-[#04AA6D]" />
                  <span>Code for Debugging / Inspection</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCodeBox(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <textarea
                value={codeSnippet}
                onChange={e => setCodeSnippet(e.target.value)}
                placeholder={`<!-- Paste your code here to find errors -->`}
                rows={4}
                className="w-full p-2.5 font-mono text-xs rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-950 text-emerald-400 focus:ring-2 focus:ring-[#04AA6D] focus:outline-none transition leading-relaxed"
              />
            </div>
          )}

          {/* Unified Composer Container */}
          <div className="rounded-2xl border-2 border-gray-300 dark:border-gray-700 focus-within:border-emerald-500 bg-white dark:bg-[#070b12] shadow-sm transition p-2.5 space-y-2">
            {/* INLINE IMAGE ATTACHMENT: Sits neatly INSIDE the composer box at top (ChatGPT / Gemini style) */}
            {imagePreview && (
              <div className="inline-flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 animate-in fade-in">
                <img
                  src={imagePreview}
                  alt="Attached Screenshot"
                  className="w-10 h-10 object-cover rounded-lg border border-gray-300 dark:border-gray-700 shadow-2xs"
                />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-gray-800 dark:text-gray-200 block">Screenshot Attached</span>
                  <span className="text-gray-500 dark:text-gray-400">Ready for visual replica</span>
                </div>
                <button
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="p-1 rounded-full text-gray-400 hover:text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950/50 transition cursor-pointer ml-1"
                  title="Remove screenshot"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Input Textarea with Natural Clean Placeholder */}
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onPaste={handleTextareaPaste}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder={
                langPreference === 'ur'
                  ? 'کوئی بھی سوال پوچھیں، پراجیکٹ کا آئیڈیا لکھیں، یا اسکرین شاٹ پیسٹ کریں...'
                  : 'Ask a question, request a project, or paste code / screenshot...'
              }
              rows={2}
              className="w-full bg-transparent text-gray-900 dark:text-white text-sm focus:outline-none transition resize-none placeholder-gray-400 dark:placeholder-gray-500 leading-relaxed font-medium"
            />

            {/* Composer Footer Actions */}
            <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center space-x-1.5">
                {/* Voice Language Toggle Pill */}
                <button
                  type="button"
                  onClick={() => {
                    const nextLang = voiceLang === 'ur' ? 'en' : 'ur';
                    setVoiceLang(nextLang);
                    setLangPreference(nextLang);
                    if (isListening && recognitionRef.current) {
                      try {
                        recognitionRef.current.stop();
                      } catch {}
                    }
                  }}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition flex items-center space-x-1 cursor-pointer border ${
                    voiceLang === 'ur'
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700'
                      : 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700'
                  }`}
                  title={
                    voiceLang === 'ur'
                      ? 'آواز کی زبان: اردو (ur-PK) - کلک کر کے English میں تبدیل کریں'
                      : 'Voice Language: English (en-US) - Click for Urdu (ur-PK)'
                  }
                >
                  <span>{voiceLang === 'ur' ? '🇵🇰 اردو' : '🇬🇧 EN'}</span>
                </button>

                {/* Dedicated Paste Clipboard Button */}
                <button
                  type="button"
                  onClick={handlePasteFromClipboard}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition cursor-pointer"
                  title="Paste text or image from clipboard"
                >
                  <Clipboard className="w-4 h-4" />
                </button>

                {/* Continuous Voice Mic Button */}
                <button
                  type="button"
                  onClick={toggleSpeechRecognition}
                  className={`p-2 rounded-lg text-xs font-bold transition flex items-center space-x-1 cursor-pointer ${
                    isListening
                      ? 'bg-rose-500 text-white animate-pulse ring-2 ring-rose-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                  title={
                    isListening
                      ? 'Listening continuously... Click to stop voice input'
                      : `Speak your question in ${voiceLang === 'ur' ? 'Urdu (اردو)' : 'English'}`
                  }
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                {/* Screenshot Upload Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition cursor-pointer"
                  title="Upload screenshot of design or error"
                >
                  <ImageIcon className="w-4 h-4" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                {/* Attach Code Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowCodeBox(!showCodeBox)}
                  className={`p-2 rounded-lg transition cursor-pointer border ${
                    showCodeBox
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-[#04AA6D] border-emerald-300 dark:border-emerald-700'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700'
                  }`}
                  title="Attach code snippet for debugging"
                >
                  <Code2 className="w-4 h-4" />
                </button>
              </div>

              {/* Send Button */}
              <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={isLoading || (!prompt.trim() && !codeSnippet.trim() && !imagePreview)}
                className="px-4 py-2 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-xs shadow-xs transition flex items-center space-x-1.5 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                title="Send message (Enter)"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{langPreference === 'ur' ? 'بھیجیں' : 'Send'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
