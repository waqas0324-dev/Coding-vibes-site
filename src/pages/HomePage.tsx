import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LiveEditor, buildWebDocument } from '../components/LiveEditor';
import { DashboardWidget } from '../components/DashboardWidget';
import { StreakTracker } from '../components/StreakTracker';
import {
  Search,
  ArrowRight,
  Code2,
  CheckCircle2,
  Play,
  HelpCircle,
  Laptop,
  Award,
  BookOpen,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Layers,
  Check,
  X,
  Zap,
  Globe,
  Database,
  Terminal,
  Cpu,
  Palette,
  Sliders,
  Maximize2,
  Eye,
  Rocket
} from 'lucide-react';

import { roadmaps } from '../data/roadmaps';
import { VisualRoadmap } from '../components/VisualRoadmap';
import { Sprout, Monitor, Server } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, openTryit } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSandbox, setActiveSandbox] = useState<string | null>(null);

  // Light Bulb Demo State (W3Schools Iconic JavaScript example)
  const [isLightOn, setIsLightOn] = useState(true);

  // CSS Live Customizer State
  const [cssTheme, setCssTheme] = useState<'emerald' | 'sky' | 'purple'>('emerald');
  const [cssBorderRadius, setCssBorderRadius] = useState<'sm' | 'md' | 'full'>('md');

  // Interactive Quiz State
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Interactive "How To" Tab State
  const [activeHowToTab, setActiveHowToTab] = useState<'accordion' | 'modal' | 'tabs'>('accordion');
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [isHowToModalOpen, setIsHowToModalOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  // Color Picker State
  const [selectedColor, setSelectedColor] = useState('#04AA6D');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('search', { searchQuery: searchQuery.trim() });
    }
  };

  const sampleJsRunnerHtml = `<button onclick="document.getElementById('demo').innerHTML = Date()" style="padding: 10px 20px; background: #04AA6D; color: #fff; font-weight: bold; border-radius: 4px; border: none; cursor: pointer;">Show Current Time</button>
<p id="demo" style="margin-top: 16px; font-size: 18px; color: #000; font-family: sans-serif;">Click the button to show the date and time.</p>`;

  const samplePythonRunnerHtml = `<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px;">
  <div style="color: #6a9955; margin-bottom: 8px;"># Python 3 Execution Simulation</div>
  <div style="color: #9cdcfe;">fruits = [<span style="color: #ce9178;">"apple"</span>, <span style="color: #ce9178;">"banana"</span>, <span style="color: #ce9178;">"cherry"</span>]</div>
  <div style="color: #c586c0;">for</span> <span style="color: #9cdcfe;">x</span> <span style="color: #c586c0;">in</span> fruits:</div>
  <div style="padding-left: 16px; color: #dcdcaa;">print</span>(<span style="color: #9cdcfe;">x</span>)</div>
  <div style="margin-top: 14px; padding: 10px; background: #252526; border-left: 3px solid #04AA6D; border-radius: 4px; font-size: 13px;">
    <strong style="color: #04AA6D;">Terminal Output:</strong><br>
    apple<br>banana<br>cherry
  </div>
</div>`;

  const sampleSqlRunnerHtml = `<div style="font-family: sans-serif; padding: 16px; background: #ffffff; color: #282A35; border-radius: 8px;">
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
    <span style="font-size: 12px; font-weight: bold; color: #04AA6D; font-family: monospace;">QUERY: SELECT * FROM Customers WHERE Country='Germany';</span>
    <span style="font-size: 11px; background: #d9eee1; color: #04AA6D; font-weight: bold; padding: 2px 8px; border-radius: 9999px;">2 rows in set</span>
  </div>
  <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; font-size: 12px; border-color: #e5e7eb;">
    <tr style="background: #f3f4f6; text-align: left;">
      <th>CustomerID</th><th>CustomerName</th><th>City</th><th>Country</th>
    </tr>
    <tr>
      <td>1</td><td style="font-weight: bold;">Alfreds Futterkiste</td><td>Berlin</td><td style="color: #04AA6D; font-weight: bold;">Germany</td>
    </tr>
    <tr style="background: #fafafa;">
      <td>2</td><td style="font-weight: bold;">Königlich Essen</td><td>Brandenburg</td><td style="color: #04AA6D; font-weight: bold;">Germany</td>
    </tr>
  </table>
</div>`;

  const sampleReactRunnerHtml = `<div style="font-family: sans-serif; padding: 20px; background: #ffffff; color: #1e293b; border-radius: 8px; text-align: center;">
  <div style="display: inline-block; padding: 4px 12px; background: #e0f2fe; color: #0284c7; border-radius: 9999px; font-size: 12px; font-weight: bold; margin-bottom: 12px;">React Live Counter Demo</div>
  <h2 id="count" style="font-size: 36px; margin: 8px 0; color: #04AA6D; font-weight: 800;">0</h2>
  <div style="display: flex; gap: 8px; justify-content: center;">
    <button onclick="let el = document.getElementById('count'); el.innerText = parseInt(el.innerText) + 1;" style="padding: 8px 20px; background: #04AA6D; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Increment +</button>
    <button onclick="document.getElementById('count').innerText = 0;" style="padding: 8px 16px; background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: bold; cursor: pointer;">Reset</button>
  </div>
</div>`;

  const sampleJavaRunnerHtml = `<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px;">
  <div style="color: #6a9955; margin-bottom: 8px;">// Java Output Simulation</div>
  <div style="color: #569cd6;">public class <span style="color: #4ec9b0;">Main</span> {</div>
  <div style="padding-left: 16px; color: #569cd6;">public static void <span style="color: #dcdcaa;">main</span>(<span style="color: #4ec9b0;">String</span>[] args) {</div>
  <div style="padding-left: 32px;"><span style="color: #4ec9b0;">System</span>.out.<span style="color: #dcdcaa;">println</span>(<span style="color: #ce9178;">"Hello World from Java!"</span>);</div>
  <div style="padding-left: 16px;">}</div>
  <div>}</div>
  <div style="margin-top: 14px; padding: 10px; background: #252526; border-left: 3px solid #04AA6D; border-radius: 4px; font-size: 13px;">
    <strong style="color: #04AA6D;">Program Output:</strong><br>
    Hello World from Java!
  </div>
</div>`;

  const sampleHtmlCode = `<!DOCTYPE html>
<html>
<head>
<title>HTML Tutorial</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
<button class="btn">Click Me</button>

</body>
</html>`;

  const sampleCssCode = `body {
  background-color: #f1f1f1;
  font-family: Arial, sans-serif;
  color: #282A35;
  text-align: center;
  padding: 20px;
}

h1 {
  color: ${cssTheme === 'emerald' ? '#04AA6D' : cssTheme === 'sky' ? '#0ea5e9' : '#a855f7'};
  font-size: 26px;
}

.card {
  border-radius: ${cssBorderRadius === 'sm' ? '4px' : cssBorderRadius === 'md' ? '12px' : '9999px'};
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}`;

  const samplePythonCode = `# Python 3 Example
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)

# Function in Python
def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")`;

  const sampleSqlCode = `-- SQL Query Example
SELECT CustomerName, City, Country
FROM Customers
WHERE Country = 'Germany';`;

  const sampleJavaCode = `// Java Example
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`;

  return (
    <div className="w-full bg-white dark:bg-[#080d14] text-gray-900 dark:text-gray-100 overflow-x-hidden transition-colors">
      {/* 1. W3SCHOOLS HERO BANNER (Authentic Charcoal #282A35 Background) */}
      <section className="bg-[#282A35] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Learn to Code
          </h1>
          <p className="text-lg sm:text-2xl text-[#FFF4A3] font-bold tracking-wide">
            Learn HTML, CSS & JavaScript step by step.
          </p>

          {/* Big Rounded Search Bar with Green #04AA6D Button */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto pt-4">
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-2xl p-1 border-2 border-transparent focus-within:border-[#04AA6D] transition">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search our tutorials, e.g. HTML"
                className="flex-1 px-5 py-3 text-sm sm:text-base text-gray-900 placeholder-gray-500 focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                className="bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold px-6 sm:px-8 py-3 rounded-full flex items-center space-x-2 transition shrink-0 shadow-sm"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                <span className="hidden sm:inline text-sm font-bold">Search</span>
              </button>
            </div>
          </form>

          <div className="pt-3">
            <button
              onClick={() => navigateTo('roadmaps')}
              className="text-sm font-bold text-white hover:text-[#04AA6D] underline underline-offset-4 transition inline-flex items-center space-x-1"
            >
              <span>Not Sure Where To Begin? Follow a Step-by-Step Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Visual Roadmap Journey */}
      <section className="bg-[#0d131f] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1e293b]">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Follow a <span className="text-[#22c55e]">Structured Roadmap</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            From beginner to pro, follow step by step roadmaps designed by experts.
            Tap any checkpoint to open its path.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-4">
          <VisualRoadmap
            height={600}
            showFlag
            nodes={[
              {
                label: 'Beginner',
                sub: (() => {
                  const r = roadmaps.find(x => x.id === 'beginner');
                  return r ? `${r.steps.length} steps · ${r.totalTime}` : undefined;
                })(),
                icon: Sprout,
                onClick: () => navigateTo('roadmap-detail', { roadmapId: 'beginner' }),
              },
              {
                label: 'Frontend',
                sub: (() => {
                  const r = roadmaps.find(x => x.id === 'frontend');
                  return r ? `${r.steps.length} steps · ${r.totalTime}` : undefined;
                })(),
                icon: Monitor,
                onClick: () => navigateTo('roadmap-detail', { roadmapId: 'frontend' }),
              },
              {
                label: 'Backend',
                sub: (() => {
                  const r = roadmaps.find(x => x.id === 'backend');
                  return r ? `${r.steps.length} steps · ${r.totalTime}` : undefined;
                })(),
                icon: Server,
                onClick: () => navigateTo('roadmap-detail', { roadmapId: 'backend' }),
              },
              {
                label: 'Full Stack',
                sub: (() => {
                  const r = roadmaps.find(x => x.id === 'fullstack');
                  return r ? `${r.steps.length} steps · ${r.totalTime}` : undefined;
                })(),
                icon: Layers,
                onClick: () => navigateTo('roadmap-detail', { roadmapId: 'fullstack' }),
              },
            ]}
          />
        </div>
        <div className="text-center mt-2">
          <button
            onClick={() => navigateTo('roadmaps')}
            className="inline-flex items-center space-x-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-sm px-7 py-3 rounded-full transition shadow-[0_0_24px_rgba(34,197,94,0.35)]"
          >
            <span>Explore Roadmaps</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 1.5 GETTING STARTED BANNER — VS Code setup guide */}
      <section className="bg-white dark:bg-[#0c121e] px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigateTo('setup-guide')}
            className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#062419] to-[#0d131f] border-2 border-[#04AA6D]/50 hover:border-[#04AA6D] transition group text-left shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <span className="w-11 h-11 rounded-xl bg-[#04AA6D] flex items-center justify-center text-white shrink-0">
                <Rocket className="w-5 h-5" />
              </span>
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-extrabold text-[#282A35] dark:text-white">
                  New here? Start with the Setup Guide
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Install VS Code, set it up in minutes, and open your first project — step by step.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center space-x-2 bg-[#04AA6D] group-hover:bg-[#03945f] text-white font-extrabold text-xs px-5 py-2.5 rounded-full transition shrink-0">
              <span>Open Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </section>

      {/* 2. BEGINNER'S ROADMAP (Where To Start) */}
      <section className="bg-white dark:bg-[#0c121e] border-b border-gray-200 dark:border-[#1e293b] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3 py-1 rounded-full bg-[#D9EEE1] text-[#04AA6D] dark:bg-[#062419] dark:text-[#4ade80] text-xs font-extrabold uppercase tracking-wider">
              Beginner Learning Roadmap
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#282A35] dark:text-white tracking-tight">
              Where To Start?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              To become a modern web developer, follow these core topics in the recommended order:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Step 1: HTML */}
            <div className="p-6 rounded-2xl bg-[#D9EEE1]/50 dark:bg-[#081e14] border-2 border-[#04AA6D]/40 space-y-4 flex flex-col justify-between shadow-xs hover:border-[#04AA6D] transition">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#04AA6D] text-white font-black text-sm flex items-center justify-center shadow-xs">
                    1
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase text-[#04AA6D] dark:text-[#4ade80]">
                    Structure
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#282A35] dark:text-white">HTML</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  The foundational language for building web page skeleton, text, links, and forms.
                </p>
              </div>
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'html', lessonSlug: 'introduction-to-html' })}
                className="w-full py-2.5 px-4 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-xs transition shadow-xs flex items-center justify-center space-x-1.5"
              >
                <span>Start HTML</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Step 2: CSS */}
            <div className="p-6 rounded-2xl bg-[#FFF4A3]/40 dark:bg-[#201c05] border-2 border-amber-400/40 space-y-4 flex flex-col justify-between shadow-xs hover:border-amber-400 transition">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    2
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
                    Styling
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#282A35] dark:text-white">CSS</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  The design language to format colors, typography, layout grids, and responsiveness.
                </p>
              </div>
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'css', lessonSlug: 'css-syntax' })}
                className="w-full py-2.5 px-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs transition shadow-xs flex items-center justify-center space-x-1.5"
              >
                <span>Start CSS</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Step 3: JavaScript */}
            <div className="p-6 rounded-2xl bg-stone-100 dark:bg-[#141926] border-2 border-gray-300 dark:border-[#1e293b] space-y-4 flex flex-col justify-between shadow-xs hover:border-gray-400 transition">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-yellow-400 text-black font-black text-sm flex items-center justify-center shadow-xs">
                    3
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase text-yellow-700 dark:text-yellow-400">
                    Logic &amp; DOM
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#282A35] dark:text-white">JavaScript</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  The programming language to make web pages dynamic, interactive, and responsive.
                </p>
              </div>
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'javascript', lessonSlug: 'js-variables' })}
                className="w-full py-2.5 px-4 rounded-full bg-[#282A35] dark:bg-yellow-400 hover:bg-black text-white dark:text-black font-extrabold text-xs transition shadow-xs flex items-center justify-center space-x-1.5"
              >
                <span>Start JavaScript</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5. LEARNING PROGRESS & VELOCITY DASHBOARD (Recharts Widget) */}
      <section className="bg-gray-50 dark:bg-[#070b12] py-10 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-[#1e293b]">
        <div className="max-w-6xl mx-auto space-y-6">
          <StreakTracker />
          <DashboardWidget />
        </div>
      </section>

      {/* 3. W3SCHOOLS ICONIC HTML SECTION (#D9EEE1 Signature Pastel Mint) */}
      <section className="bg-[#D9EEE1] text-[#282A35] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              HTML
            </h2>
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              The language for building web pages
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 max-w-xs mx-auto lg:mx-0">
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'html', lessonSlug: 'introduction-to-html' })}
                className="w-full py-3 px-6 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm sm:text-base transition shadow-sm text-center flex items-center justify-center space-x-2"
              >
                <span>Learn HTML</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => navigateTo('tutorials')}
                className="w-full py-3 px-6 rounded-full bg-[#FFF4A3] hover:bg-[#ffe866] text-black font-extrabold text-sm transition text-center shadow-xs"
              >
                Video Tutorial
              </button>
              <button
                onClick={() => navigateTo('resources')}
                className="w-full py-3 px-6 rounded-full bg-[#282A35] hover:bg-[#1a1b22] text-white font-semibold text-sm transition text-center shadow-xs"
              >
                HTML Reference
              </button>
              <button
                onClick={() => navigateTo('courses')}
                className="w-full py-3 px-6 rounded-full bg-[#FFC0C7] hover:bg-[#ffabb6] text-black font-extrabold text-sm transition text-center shadow-xs"
              >
                Get Certified
              </button>
            </div>
          </div>

          {/* Right Column: Authentic W3Schools Code Example Card with White Box */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#E7E9EB] rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 border border-gray-300">
              <h3 className="text-base font-extrabold text-[#282A35] tracking-wide">
                HTML Example:
              </h3>

              {/* White Code Window with Green Left Border */}
              <div className="p-4 rounded-lg bg-white border-l-4 border-[#04AA6D] font-mono text-xs sm:text-sm text-gray-800 overflow-x-auto shadow-xs leading-relaxed whitespace-pre">
                {sampleHtmlCode}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => openTryit(sampleHtmlCode, 'html', 'HTML Tryit Editor')}
                  className="px-6 py-3 rounded-full bg-[#04AA6D] hover:bg-[#03945f] active:scale-95 text-white font-extrabold text-sm transition shadow-sm flex items-center space-x-2 cursor-pointer"
                  title="Try it Yourself in Tryit Editor"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try it Yourself »</span>
                </button>
                <span className="text-xs text-gray-600 font-semibold">Interactive Code Editor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. W3SCHOOLS ICONIC CSS SECTION (#FFF4A3 Signature Soft Yellow) */}
      <section className="bg-[#FFF4A3] text-[#282A35] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              CSS
            </h2>
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              The language for styling web pages
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 max-w-xs mx-auto lg:mx-0">
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'css', lessonSlug: 'css-syntax' })}
                className="w-full py-3 px-6 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm sm:text-base transition shadow-sm text-center flex items-center justify-center space-x-2"
              >
                <span>Learn CSS</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => navigateTo('resources')}
                className="w-full py-3 px-6 rounded-full bg-[#282A35] hover:bg-[#1a1b22] text-white font-semibold text-sm transition text-center shadow-xs"
              >
                CSS Reference
              </button>
              <button
                onClick={() => navigateTo('courses')}
                className="w-full py-3 px-6 rounded-full bg-[#FFC0C7] hover:bg-[#ffabb6] text-black font-extrabold text-sm transition text-center shadow-xs"
              >
                Get Certified
              </button>
            </div>
          </div>

          {/* Right Column: Code Example Card + Interactive Visual Styler */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#E7E9EB] rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 border border-gray-300">
              <h3 className="text-base font-extrabold text-[#282A35] tracking-wide">
                CSS Example:
              </h3>

              <div className="p-4 rounded-lg bg-white border-l-4 border-[#04AA6D] font-mono text-xs sm:text-sm text-gray-800 overflow-x-auto shadow-xs leading-relaxed whitespace-pre">
                {sampleCssCode}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() =>
                    openTryit(
                      "<div class='card'>\n  <h1>Styled Web Component</h1>\n  <p>Live CSS styling from Coding Vibes</p>\n</div>",
                      'css',
                      'CSS Tryit Editor'
                    )
                  }
                  className="px-6 py-3 rounded-full bg-[#04AA6D] hover:bg-[#03945f] active:scale-95 text-white font-extrabold text-sm transition shadow-sm flex items-center space-x-2 cursor-pointer"
                  title="Try it Yourself in Tryit Editor"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try it Yourself »</span>
                </button>
                <span className="text-xs text-gray-600 font-semibold">Live CSS Styling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. W3SCHOOLS JAVASCRIPT SECTION (#282A35 Dark Slate with Iconic Lightbulb) */}
      <section className="bg-[#282A35] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              JavaScript
            </h2>
            <p className="text-base sm:text-lg text-amber-200 font-medium leading-relaxed">
              The language for programming web pages
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 max-w-xs mx-auto lg:mx-0">
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'javascript', lessonSlug: 'js-variables' })}
                className="w-full py-3 px-6 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm sm:text-base transition shadow-sm text-center flex items-center justify-center space-x-2"
              >
                <span>Learn JavaScript</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => navigateTo('resources')}
                className="w-full py-3 px-6 rounded-full bg-[#FFF4A3] hover:bg-[#ffe866] text-black font-semibold text-sm transition text-center shadow-xs"
              >
                JavaScript Reference
              </button>
              <button
                onClick={() => navigateTo('courses')}
                className="w-full py-3 px-6 rounded-full bg-[#FFC0C7] hover:bg-[#ffabb6] text-black font-extrabold text-sm transition text-center shadow-xs"
              >
                Get Certified
              </button>
            </div>
          </div>

          {/* Right Column: Code Example Card + Iconic Lightbulb Interactive Demo */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#1f202a] rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4 border border-[#3a3d4a]">
              <h3 className="text-base font-extrabold text-white tracking-wide">
                JavaScript Example:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <pre className="p-4 rounded-lg bg-[#14151b] border border-[#3a3d4a] font-mono text-xs text-amber-200 overflow-x-auto leading-relaxed whitespace-pre">
{`<button onclick="light(1)">
  Turn on the light
</button>

<img id="myImage" src="pic_bulbon.gif">

<button onclick="light(0)">
  Turn off the light
</button>`}
                </pre>

                {/* The Classic W3Schools Light Bulb Simulator */}
                <div className="rounded-lg bg-[#14151b] border border-[#3a3d4a] p-4 flex flex-col items-center justify-center space-y-3 text-center">
                  <span className="text-xs text-amber-300 font-bold">JavaScript Changes HTML</span>

                  <div className="py-2">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isLightOn
                          ? 'bg-amber-400 text-amber-950 shadow-[0_0_40px_rgba(251,191,36,0.9)] scale-105'
                          : 'bg-gray-700 text-gray-400 shadow-none scale-95'
                      }`}
                    >
                      <Zap className={`w-8 h-8 ${isLightOn ? 'fill-amber-900' : ''}`} />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsLightOn(true)}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition ${
                        isLightOn ? 'bg-amber-400 text-black' : 'bg-gray-800 text-gray-300 hover:text-white'
                      }`}
                    >
                      Turn on
                    </button>
                    <button
                      onClick={() => setIsLightOn(false)}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition ${
                        !isLightOn ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-300 hover:text-white'
                      }`}
                    >
                      Turn off
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => openTryit(sampleJsRunnerHtml, 'javascript', 'JavaScript Tryit Editor')}
                  className="px-6 py-3 rounded-full bg-[#04AA6D] hover:bg-[#03945f] active:scale-95 text-white font-extrabold text-sm transition shadow-sm flex items-center space-x-2 cursor-pointer"
                  title="Try it Yourself in Tryit Editor"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try it Yourself »</span>
                </button>
                <span className="text-xs text-gray-400 font-mono">Live JavaScript Sandbox</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. W3SCHOOLS COLOR PICKER TOOL */}
      <section className="bg-gray-50 dark:bg-[#050912] border-t border-gray-200 dark:border-[#1e293b] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#282A35] dark:text-white">
            Color Picker
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Click on any color to inspect its HEX and RGB value for your CSS stylesheets.
          </p>

          {/* Palette Swatches */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto pt-2">
            {[
              '#04AA6D', '#22c55e', '#10b981', '#06b6d4', '#0ea5e9', '#3b82f6',
              '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e',
              '#ef4444', '#f97316', '#f59e0b', '#eab308', '#282A35'
            ].map(col => (
              <button
                key={col}
                onClick={() => setSelectedColor(col)}
                style={{ backgroundColor: col }}
                className={`w-9 h-9 rounded-lg transition transform hover:scale-110 shadow-xs ${
                  selectedColor === col ? 'ring-4 ring-[#04AA6D]' : ''
                }`}
                aria-label={`Select color ${col}`}
              />
            ))}
          </div>

          {/* Color Display Card */}
          <div className="inline-flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-[#0e1626] border border-gray-200 dark:border-[#1e293b] shadow-sm">
            <div
              className="w-10 h-10 rounded-lg shadow-inner border border-black/10"
              style={{ backgroundColor: selectedColor }}
            />
            <div className="text-left font-mono text-xs space-y-0.5">
              <div className="text-gray-900 dark:text-white font-bold">HEX: {selectedColor.toUpperCase()}</div>
              <div className="text-gray-500">Ready to use in CSS</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
