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
            With the world&apos;s largest web developer site.
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

      {/* Learning Roadmaps CTA */}
      <section className="bg-[#0d131f] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1e293b]">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Pick Your <span className="text-[#22c55e]">Roadmap</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              A clear, ordered path from zero to job-ready. Every step tells you what to learn,
              why it matters, and links you straight to the course.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 text-left">
            {roadmaps.map(roadmap => (
              <button
                key={roadmap.id}
                onClick={() => navigateTo('roadmap-detail', { roadmapId: roadmap.id })}
                className="rounded-2xl border border-[#1e293b] bg-[#141d2e] p-5 hover:border-[#22c55e]/60 hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                    {roadmap.steps.length} steps
                  </span>
                  <span className="text-xs font-semibold text-gray-500">{roadmap.totalTime}</span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold text-white">{roadmap.title}</h3>
                <p className="mt-1.5 text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {roadmap.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-bold text-[#22c55e] group-hover:gap-2.5 gap-2 transition-all">
                  Start the path <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => navigateTo('roadmaps')}
            className="text-sm font-bold text-gray-300 hover:text-[#22c55e] underline underline-offset-4 transition"
          >
            View all roadmaps with progress tracking
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

            {/* Step 4: Python & SQL */}
            <div className="p-6 rounded-2xl bg-[#96D4D4]/30 dark:bg-[#071f24] border-2 border-cyan-400/40 space-y-4 flex flex-col justify-between shadow-xs hover:border-cyan-400 transition">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    4
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase text-teal-700 dark:text-teal-400">
                    Backend &amp; DB
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#282A35] dark:text-white">Python &amp; SQL</h3>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Build server APIs, automation logic, and manage relational database records.
                </p>
              </div>
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'python', lessonSlug: 'introduction-to-python' })}
                className="w-full py-2.5 px-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs transition shadow-xs flex items-center justify-center space-x-1.5"
              >
                <span>Start Python</span>
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

      {/* 5. W3SCHOOLS ICONIC PYTHON SECTION (#F3ECEA Signature Soft Tan) */}
      <section className="bg-[#F3ECEA] text-[#282A35] py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              Python
            </h2>
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              A popular programming language for web servers, machine learning, and automation
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 max-w-xs mx-auto lg:mx-0">
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'python', lessonSlug: 'introduction-to-python' })}
                className="w-full py-3 px-6 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm sm:text-base transition shadow-sm text-center flex items-center justify-center space-x-2"
              >
                <span>Learn Python</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => navigateTo('resources')}
                className="w-full py-3 px-6 rounded-full bg-[#282A35] hover:bg-[#1a1b22] text-white font-semibold text-sm transition text-center shadow-xs"
              >
                Python Reference
              </button>
              <button
                onClick={() => navigateTo('courses')}
                className="w-full py-3 px-6 rounded-full bg-[#FFC0C7] hover:bg-[#ffabb6] text-black font-extrabold text-sm transition text-center shadow-xs"
              >
                Get Certified
              </button>
            </div>
          </div>

          {/* Right Column: Code Example Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#E7E9EB] rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 border border-gray-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-[#282A35] tracking-wide">
                  Python Example:
                </h3>
                <span className="text-xs font-mono text-gray-600 font-bold">Python 3</span>
              </div>

              <div className="p-4 rounded-lg bg-white border-l-4 border-[#04AA6D] font-mono text-xs sm:text-sm text-gray-800 overflow-x-auto shadow-xs leading-relaxed whitespace-pre">
                {samplePythonCode}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => openTryit(samplePythonRunnerHtml, 'python', 'Python Tryit Editor')}
                  className="px-6 py-3 rounded-full bg-[#04AA6D] hover:bg-[#03945f] active:scale-95 text-white font-extrabold text-sm transition shadow-sm flex items-center space-x-2 cursor-pointer"
                  title="Try it Yourself in Tryit Editor"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try it Yourself »</span>
                </button>
                <span className="text-xs text-gray-600 font-semibold">Interactive Python Console</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. W3SCHOOLS ICONIC SQL SECTION (#96D4D4 Signature Pastel Cyan/Turquoise) */}
      <section className="bg-[#96D4D4] text-[#282A35] py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-300/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              SQL
            </h2>
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              A standard language for accessing and manipulating databases
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 max-w-xs mx-auto lg:mx-0">
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'sql', lessonSlug: 'introduction-to-sql' })}
                className="w-full py-3 px-6 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm sm:text-base transition shadow-sm text-center flex items-center justify-center space-x-2"
              >
                <span>Learn SQL</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => navigateTo('resources')}
                className="w-full py-3 px-6 rounded-full bg-[#282A35] hover:bg-[#1a1b22] text-white font-semibold text-sm transition text-center shadow-xs"
              >
                SQL Reference
              </button>
              <button
                onClick={() => navigateTo('courses')}
                className="w-full py-3 px-6 rounded-full bg-[#FFC0C7] hover:bg-[#ffabb6] text-black font-extrabold text-sm transition text-center shadow-xs"
              >
                Get Certified
              </button>
            </div>
          </div>

          {/* Right Column: Code Example Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#E7E9EB] rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 border border-gray-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-[#282A35] tracking-wide">
                  SQL Example:
                </h3>
                <span className="text-xs font-mono text-gray-600 font-bold">Relational Database</span>
              </div>

              <div className="p-4 rounded-lg bg-white border-l-4 border-[#04AA6D] font-mono text-xs sm:text-sm text-gray-800 overflow-x-auto shadow-xs leading-relaxed whitespace-pre">
                {sampleSqlCode}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => openTryit(sampleSqlRunnerHtml, 'sql', 'SQL Tryit Editor')}
                  className="px-6 py-3 rounded-full bg-[#04AA6D] hover:bg-[#03945f] active:scale-95 text-white font-extrabold text-sm transition shadow-sm flex items-center space-x-2 cursor-pointer"
                  title="Try it Yourself in Tryit Editor"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try it Yourself »</span>
                </button>
                <span className="text-xs text-gray-600 font-semibold">Interactive SQL Query Engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. W3SCHOOLS ICONIC JAVA SECTION (#FFF4A3 Soft Yellow / Light Warm) */}
      <section className="bg-[#FFF4A3] text-[#282A35] py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-300/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              Java
            </h2>
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              A programming language used for Android apps, enterprise systems, and desktop applications
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 max-w-xs mx-auto lg:mx-0">
              <button
                onClick={() => navigateTo('lesson', { courseSlug: 'java', lessonSlug: 'introduction-to-java' })}
                className="w-full py-3 px-6 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm sm:text-base transition shadow-sm text-center flex items-center justify-center space-x-2"
              >
                <span>Learn Java</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => navigateTo('resources')}
                className="w-full py-3 px-6 rounded-full bg-[#282A35] hover:bg-[#1a1b22] text-white font-semibold text-sm transition text-center shadow-xs"
              >
                Java Reference
              </button>
              <button
                onClick={() => navigateTo('courses')}
                className="w-full py-3 px-6 rounded-full bg-[#FFC0C7] hover:bg-[#ffabb6] text-black font-extrabold text-sm transition text-center shadow-xs"
              >
                Get Certified
              </button>
            </div>
          </div>

          {/* Right Column: Code Example Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#E7E9EB] rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 border border-gray-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-[#282A35] tracking-wide">
                  Java Example:
                </h3>
                <span className="text-xs font-mono text-gray-600 font-bold">Java 17</span>
              </div>

              <div className="p-4 rounded-lg bg-white border-l-4 border-[#04AA6D] font-mono text-xs sm:text-sm text-gray-800 overflow-x-auto shadow-xs leading-relaxed whitespace-pre">
                {sampleJavaCode}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveSandbox(activeSandbox === 'java' ? null : 'java')}
                  className="px-6 py-3 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm transition shadow-sm flex items-center space-x-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{activeSandbox === 'java' ? 'Close Editor' : 'Try it Yourself »'}</span>
                </button>
                <span className="text-xs text-gray-600 font-semibold">Interactive Java Virtual Output</span>
              </div>

              {activeSandbox === 'java' && (
                <div className="pt-4 border-t border-gray-300 rounded-xl overflow-hidden">
                  <LiveEditor initialHtml={sampleJavaRunnerHtml} initialCss="" initialJs="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. W3SCHOOLS MULTI-LANGUAGE GRID (C++, C#, PHP, React, W3.CSS, TypeScript) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
            Curated Language Directory
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#282A35] dark:text-white tracking-tight">
            Explore More Technologies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Click any technology to open full step-by-step documentation, interactive code editors, and exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* C++ Card */}
          <div className="p-6 rounded-2xl bg-[#F3ECEA] text-[#282A35] border border-stone-300 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-[#282A35]">C++</h3>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-[#282A35] border border-stone-300">
                  Performance
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                A high-performance programming language used for games, graphics, operating systems, and robotics.
              </p>
              <pre className="p-3 rounded-lg bg-white border border-stone-300 text-xs font-mono text-gray-800 overflow-x-auto leading-relaxed whitespace-pre">
{`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}`}
              </pre>
            </div>
            <button
              onClick={() => navigateTo('lesson', { courseSlug: 'cpp', lessonSlug: 'introduction-to-cpp' })}
              className="w-full py-2.5 rounded-full bg-[#282A35] hover:bg-black text-white font-extrabold text-xs transition flex items-center justify-center space-x-1.5 shadow-xs"
            >
              <span>Learn C++</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* C# Card */}
          <div className="p-6 rounded-2xl bg-[#E2EEF9] text-[#282A35] border border-blue-200 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-[#282A35]">C#</h3>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-blue-700 border border-blue-200">
                  .NET &amp; Unity
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                A modern, object-oriented language developed by Microsoft for web apps, services, and Unity game development.
              </p>
              <pre className="p-3 rounded-lg bg-white border border-blue-200 text-xs font-mono text-gray-800 overflow-x-auto leading-relaxed whitespace-pre">
{`using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello C#!");
  }
}`}
              </pre>
            </div>
            <button
              onClick={() => navigateTo('courses')}
              className="w-full py-2.5 rounded-full bg-[#282A35] hover:bg-black text-white font-extrabold text-xs transition flex items-center justify-center space-x-1.5 shadow-xs"
            >
              <span>Learn C#</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* PHP Card */}
          <div className="p-6 rounded-2xl bg-[#D9EEE1] text-[#282A35] border border-emerald-300 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-[#282A35]">PHP</h3>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-emerald-800 border border-emerald-300">
                  Server Scripting
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                A server-side programming language for dynamic web pages, powering platforms like WordPress, Drupal, and Wikipedia.
              </p>
              <pre className="p-3 rounded-lg bg-white border border-emerald-200 text-xs font-mono text-gray-800 overflow-x-auto leading-relaxed whitespace-pre">
{`<?php
$txt = "PHP";
echo "I love $txt!";
?>`}
              </pre>
            </div>
            <button
              onClick={() => navigateTo('courses')}
              className="w-full py-2.5 rounded-full bg-[#282A35] hover:bg-black text-white font-extrabold text-xs transition flex items-center justify-center space-x-1.5 shadow-xs"
            >
              <span>Learn PHP</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* React JS Card */}
          <div className="p-6 rounded-2xl bg-[#E2EEF9] text-[#282A35] border border-blue-200 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-[#282A35]">React JS</h3>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-sky-700 border border-blue-200">
                  UI Library
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                The world&apos;s most popular JavaScript front-end library for building responsive interactive user interfaces.
              </p>
              <pre className="p-3 rounded-lg bg-white border border-blue-200 text-xs font-mono text-gray-800 overflow-x-auto leading-relaxed whitespace-pre">
{`function MyButton() {
  return <button>Click me</button>;
}`}
              </pre>
            </div>
            <button
              onClick={() => navigateTo('lesson', { courseSlug: 'react-js', lessonSlug: 'introduction-to-react' })}
              className="w-full py-2.5 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-xs transition flex items-center justify-center space-x-1.5 shadow-xs"
            >
              <span>Learn React</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* W3.CSS & Tailwind Card */}
          <div className="p-6 rounded-2xl bg-[#FFF4A3] text-[#282A35] border border-amber-300 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-[#282A35]">W3.CSS</h3>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-amber-900 border border-amber-300">
                  CSS Framework
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                A modern, clean, mobile-first CSS framework with built-in responsiveness and speed.
              </p>
              <pre className="p-3 rounded-lg bg-white border border-amber-300 text-xs font-mono text-gray-800 overflow-x-auto leading-relaxed whitespace-pre">
{`<div class="w3-container w3-green">
  <h1>W3.CSS Header</h1>
  <p>Faster and easier styling.</p>
</div>`}
              </pre>
            </div>
            <button
              onClick={() => navigateTo('tutorials')}
              className="w-full py-2.5 rounded-full bg-[#282A35] hover:bg-black text-white font-extrabold text-xs transition flex items-center justify-center space-x-1.5 shadow-xs"
            >
              <span>Learn W3.CSS</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* TypeScript Card */}
          <div className="p-6 rounded-2xl bg-[#E0F2FE] text-[#282A35] border border-sky-300 space-y-4 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-[#282A35]">TypeScript</h3>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-sky-800 border border-sky-300">
                  Typed JS
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                JavaScript with syntax for types, catching errors early in development and scaling enterprise web applications.
              </p>
              <pre className="p-3 rounded-lg bg-white border border-sky-200 text-xs font-mono text-gray-800 overflow-x-auto leading-relaxed whitespace-pre">
{`let user: string = "Jane";
let age: number = 25;
console.log(user, age);`}
              </pre>
            </div>
            <button
              onClick={() => navigateTo('courses')}
              className="w-full py-2.5 rounded-full bg-[#282A35] hover:bg-black text-white font-extrabold text-xs transition flex items-center justify-center space-x-1.5 shadow-xs"
            >
              <span>Learn TypeScript</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. W3SCHOOLS "HOW TO" SECTION (INTERACTIVE UI DEMO) */}
      <section className="bg-gray-50 dark:bg-[#0c121e] border-t border-gray-200 dark:border-[#1e293b] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#04AA6D] tracking-wider">
                Code Snippets & Recipes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#282A35] dark:text-white tracking-tight">
                W3.CSS & How To Guides
              </h2>
            </div>
            <button
              onClick={() => navigateTo('tutorials')}
              className="px-5 py-2.5 rounded-full bg-white dark:bg-[#141d2e] hover:bg-gray-100 dark:hover:bg-[#1c283f] border border-gray-300 dark:border-[#1e293b] text-xs font-semibold text-gray-800 dark:text-white transition flex items-center space-x-1 shadow-xs"
            >
              <span>View All How To&apos;s</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive How-To Sandbox */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0a101d] border border-gray-200 dark:border-[#1e293b] grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm">
            <div className="lg:col-span-4 space-y-2">
              <button
                onClick={() => setActiveHowToTab('accordion')}
                className={`w-full text-left p-3.5 rounded-xl font-bold text-xs transition flex items-center justify-between ${
                  activeHowToTab === 'accordion'
                    ? 'bg-[#04AA6D] text-white shadow-xs'
                    : 'bg-gray-100 dark:bg-[#0f172a] text-gray-800 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                <span>How To: Accordion</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveHowToTab('modal')}
                className={`w-full text-left p-3.5 rounded-xl font-bold text-xs transition flex items-center justify-between ${
                  activeHowToTab === 'modal'
                    ? 'bg-[#04AA6D] text-white shadow-xs'
                    : 'bg-gray-100 dark:bg-[#0f172a] text-gray-800 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                <span>How To: Modal Dialog Box</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveHowToTab('tabs')}
                className={`w-full text-left p-3.5 rounded-xl font-bold text-xs transition flex items-center justify-between ${
                  activeHowToTab === 'tabs'
                    ? 'bg-[#04AA6D] text-white shadow-xs'
                    : 'bg-gray-100 dark:bg-[#0f172a] text-gray-800 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                <span>How To: Responsive Tabs</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Live Interactive Component Display */}
            <div className="lg:col-span-8 p-6 rounded-xl bg-gray-50 dark:bg-[#060a12] border border-gray-200 dark:border-[#1e293b] flex flex-col justify-center items-center min-h-[200px]">
              {activeHowToTab === 'accordion' && (
                <div className="w-full max-w-md space-y-2">
                  <div
                    onClick={() => setIsAccordionOpen(prev => !prev)}
                    className="p-3.5 rounded-lg bg-white dark:bg-[#141d2e] border border-gray-200 dark:border-[#1e293b] hover:bg-gray-50 cursor-pointer flex items-center justify-between text-xs font-bold text-gray-900 dark:text-white transition shadow-xs"
                  >
                    <span>Section 1: What is Coding Vibes?</span>
                    <span>{isAccordionOpen ? '−' : '+'}</span>
                  </div>
                  {isAccordionOpen && (
                    <div className="p-3.5 rounded-lg bg-white dark:bg-[#0d1422] text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#1e293b]">
                      Coding Vibes provides comprehensive web development tutorials, interactive sandboxes, exercises, and real-world projects designed for modern hands-on learning.
                    </div>
                  )}
                </div>
              )}

              {activeHowToTab === 'modal' && (
                <div className="text-center space-y-4">
                  <button
                    onClick={() => setIsHowToModalOpen(true)}
                    className="px-6 py-2.5 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-xs shadow-xs"
                  >
                    Open Modal Box
                  </button>

                  {isHowToModalOpen && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
                      <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-[#1e293b] rounded-2xl p-6 max-w-sm w-full space-y-4 text-center shadow-2xl">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">Modal Header</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">This is an interactive modal built with pure JavaScript logic!</p>
                        <button
                          onClick={() => setIsHowToModalOpen(false)}
                          className="w-full py-2 rounded-lg bg-[#04AA6D] text-white font-bold text-xs"
                        >
                          Close Modal
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeHowToTab === 'tabs' && (
                <div className="w-full max-w-md space-y-3">
                  <div className="flex border-b border-gray-200 dark:border-[#1e293b]">
                    {['London', 'Paris', 'Tokyo'].map((city, idx) => (
                      <button
                        key={city}
                        onClick={() => setTabIndex(idx)}
                        className={`px-4 py-2 text-xs font-bold transition ${
                          tabIndex === idx ? 'border-b-2 border-[#04AA6D] text-[#04AA6D]' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-[#0e1626] border border-gray-200 dark:border-[#1e293b] text-xs text-gray-700 dark:text-gray-300">
                    {tabIndex === 0 && 'London is the capital city of England.'}
                    {tabIndex === 1 && 'Paris is the capital of France, known for art, fashion, and culture.'}
                    {tabIndex === 2 && 'Tokyo is the bustling capital of Japan, blending modern tech with rich history.'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. W3SCHOOLS "BECOME A CERTIFIED DEVELOPER" SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF4A3] text-[#282A35] border border-amber-300 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold tracking-wider uppercase">
              <Award className="w-4 h-4 text-[#04AA6D]" />
              <span>Industry Recognized Credentials</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Become a Certified Developer
            </h2>

            <p className="text-sm sm:text-base text-gray-800 leading-relaxed max-w-xl">
              Validate your coding skills with an official Coding Vibes certificate. Share your credential with recruiters on LinkedIn, resumes, and portfolios.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-gray-800 max-w-md mx-auto lg:mx-0 text-left">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#04AA6D] shrink-0" />
                <span>Verified Online Certificate URL with QR code</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#04AA6D] shrink-0" />
                <span>HTML, CSS, JavaScript, Python, and SQL certifications</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#04AA6D] shrink-0" />
                <span>Permanent public verification link</span>
              </li>
            </ul>

            <button
              onClick={() => navigateTo('courses')}
              className="px-8 py-3.5 rounded-full bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm transition shadow-sm flex items-center space-x-2 mx-auto lg:mx-0"
            >
              <span>Get Certified Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Right: Visual Certificate Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm p-6 rounded-2xl bg-white border-2 border-amber-300 shadow-xl space-y-4">
              <div className="text-center space-y-1">
                <div className="font-mono text-xs font-bold text-[#04AA6D]">&lt;/&gt; CODING VIBES</div>
                <h3 className="text-base font-extrabold text-[#282A35] tracking-wider uppercase font-serif">
                  Certificate of Achievement
                </h3>
                <p className="text-[10px] text-gray-500">This is to certify that</p>
              </div>

              <div className="border-b border-gray-300 pb-1 text-center">
                <span className="text-lg font-bold text-gray-900 font-serif">Verified Developer</span>
              </div>

              <p className="text-[10px] text-center text-gray-600 leading-normal">
                has successfully demonstrated proficiency in Web Development including HTML5, CSS3, JavaScript, and Modern Web Architecture.
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <div className="text-left">
                  <div className="text-[9px] text-gray-500 font-mono">ID: CV-2026-9810</div>
                  <div className="text-[9px] text-[#04AA6D] font-bold">STATUS: HONORS</div>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#04AA6D] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. W3SCHOOLS INTERACTIVE TEST YOUR SKILLS QUIZ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#0b1322] border-2 border-gray-200 dark:border-[#22c55e]/30 shadow-md space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 dark:border-[#1e293b] pb-6">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#04AA6D] tracking-wider">
                Test Your Skills
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#282A35] dark:text-white">
                Exercises & Quizzes
              </h2>
            </div>
            <button
              onClick={() => navigateTo('practice')}
              className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-[#141d2e] hover:bg-gray-200 text-xs font-semibold text-gray-800 dark:text-white transition"
            >
              Browse All Quizzes &rarr;
            </button>
          </div>

          {/* Interactive Live Sample Question */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-200">
              Question: What does HTML stand for?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 0, text: 'Hyper Text Markup Language', correct: true },
                { id: 1, text: 'High Text Machine Language', correct: false },
                { id: 2, text: 'Hyperlinks and Text Management Language', correct: false },
                { id: 3, text: 'Home Tool Markup Language', correct: false }
              ].map(opt => {
                const isSelected = quizSelected === opt.id;
                let btnStyle = 'bg-gray-50 dark:bg-[#080d17] border-gray-200 dark:border-[#1e293b] text-gray-800 dark:text-gray-300 hover:border-gray-400';

                if (quizSubmitted) {
                  if (opt.correct) {
                    btnStyle = 'bg-[#d9eee1] border-[#04AA6D] text-[#04AA6D] font-bold';
                  } else if (isSelected && !opt.correct) {
                    btnStyle = 'bg-rose-50 border-rose-500 text-rose-700';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-[#d9eee1] border-[#04AA6D] text-gray-900 font-bold';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      if (!quizSubmitted) setQuizSelected(opt.id);
                    }}
                    className={`p-4 rounded-xl border text-left text-xs font-medium transition flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt.text}</span>
                    {quizSubmitted && opt.correct && <Check className="w-4 h-4 text-[#04AA6D]" />}
                    {quizSubmitted && isSelected && !opt.correct && <X className="w-4 h-4 text-rose-600" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between">
              {!quizSubmitted ? (
                <button
                  onClick={() => {
                    if (quizSelected !== null) setQuizSubmitted(true);
                  }}
                  disabled={quizSelected === null}
                  className="px-6 py-2.5 rounded-full bg-[#04AA6D] hover:bg-[#03945f] disabled:opacity-50 text-white font-extrabold text-xs transition shadow-sm"
                >
                  Submit Answer
                </button>
              ) : (
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-[#04AA6D]">
                    {quizSelected === 0 ? '✓ Correct! HTML stands for Hyper Text Markup Language.' : '✕ Incorrect! The correct answer is Hyper Text Markup Language.'}
                  </span>
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizSelected(null);
                    }}
                    className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Try Again
                  </button>
                </div>
              )}
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
