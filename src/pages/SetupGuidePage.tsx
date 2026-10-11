import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CodeBlock } from '../components/CodeBlock';
import { setupGuideImages } from '../data/setupGuideImages';
import {
  Download,
  Settings,
  FolderOpen,
  Code2,
  Globe,
  CheckCircle,
  Monitor,
  Apple,
  AppWindow,
  Puzzle,
  Lightbulb,
  ExternalLink,
  ArrowRight,
  Play
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Shared building blocks                                              */
/* ------------------------------------------------------------------ */

const StepNumber: React.FC<{ n: number }> = ({ n }) => (
  <span className="shrink-0 w-9 h-9 rounded-full bg-[#04AA6D] text-white font-black text-base flex items-center justify-center shadow-md shadow-[#04AA6D]/25">
    {n}
  </span>
);

const TipBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start space-x-3 rounded-xl bg-[#062419] border border-[#04AA6D]/30 px-4 py-3">
    <Lightbulb className="w-4 h-4 text-[#4ade80] mt-0.5 shrink-0" />
    <div className="text-xs text-gray-300 leading-relaxed">{children}</div>
  </div>
);

const SectionShell: React.FC<{
  kicker: string;
  icon: React.ReactNode;
  title: string;
  blurb: string;
  children: React.ReactNode;
}> = ({ kicker, icon, title, blurb, children }) => (
  <section className="rounded-2xl bg-[#0d131f] border border-[#1e293b] overflow-hidden">
    <div className="px-6 py-5 border-b border-[#1e293b] flex items-start space-x-4">
      <span className="w-11 h-11 rounded-xl bg-[#062419] border border-[#04AA6D]/40 flex items-center justify-center text-[#4ade80] shrink-0">
        {icon}
      </span>
      <div>
        <span className="text-[11px] font-mono font-bold text-[#4ade80] uppercase tracking-widest">
          {kicker}
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">{title}</h2>
        <p className="text-sm text-gray-400 mt-1 leading-relaxed max-w-3xl">{blurb}</p>
      </div>
    </div>
    <div className="px-6 py-6 space-y-8">{children}</div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Illustrations (abstract diagrams — not screenshots)                  */
/* ------------------------------------------------------------------ */

const DownloadFlowIllustration: React.FC = () => (
  <figure className="rounded-xl bg-[#06090e] border border-[#1e293b] p-6">
    <svg viewBox="0 0 520 150" className="w-full h-auto" role="img" aria-label="Diagram: visit the download site, pick your operating system, run the installer">
      <defs>
        <marker id="arrowG" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#04AA6D" />
        </marker>
      </defs>
      {/* Node 1 */}
      <rect x="10" y="35" width="140" height="80" rx="12" fill="#0d131f" stroke="#1e293b" />
      <circle cx="80" cy="58" r="10" fill="none" stroke="#4ade80" strokeWidth="2" />
      <path d="M80 54 L80 66 M76 62 L84 62" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
      <text x="80" y="92" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">code.visualstudio.com</text>
      <text x="80" y="105" textAnchor="middle" fill="#64748b" fontSize="9">Visit the site</text>
      {/* Arrow 1 */}
      <line x1="155" y1="75" x2="195" y2="75" stroke="#04AA6D" strokeWidth="2" markerEnd="url(#arrowG)" />
      {/* Node 2 */}
      <rect x="200" y="35" width="140" height="80" rx="12" fill="#0d131f" stroke="#1e293b" />
      <g transform="translate(245,52)">
        <rect x="0" y="0" width="26" height="16" rx="3" fill="none" stroke="#4ade80" strokeWidth="2" />
        <path d="M6 20 L6 24 M20 20 L20 24 M2 24 L24 24" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
      </g>
      <text x="270" y="92" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">Pick your OS</text>
      <text x="270" y="105" textAnchor="middle" fill="#64748b" fontSize="9">Windows • Mac • Linux</text>
      {/* Arrow 2 */}
      <line x1="345" y1="75" x2="385" y2="75" stroke="#04AA6D" strokeWidth="2" markerEnd="url(#arrowG)" />
      {/* Node 3 */}
      <rect x="390" y="35" width="120" height="80" rx="12" fill="#0d131f" stroke="#1e293b" />
      <path d="M442 50 L442 64 M436 58 L448 58" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
      <rect x="436" y="68" width="16" height="10" rx="2" fill="none" stroke="#4ade80" strokeWidth="2" />
      <text x="450" y="98" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">Run installer</text>
      <text x="450" y="110" textAnchor="middle" fill="#64748b" fontSize="9">Accept defaults</text>
    </svg>
    <figcaption className="text-center text-[10px] font-mono uppercase tracking-widest text-gray-600 mt-3">
      Illustration — the download flow
    </figcaption>
  </figure>
);

const ExtensionsIllustration: React.FC = () => (
  <figure className="rounded-xl bg-[#06090e] border border-[#1e293b] p-6">
    <svg viewBox="0 0 520 190" className="w-full h-auto" role="img" aria-label="Diagram: press Ctrl Shift X, search for the extension, click install">
      {/* Activity bar */}
      <rect x="10" y="10" width="44" height="170" rx="10" fill="#0d131f" stroke="#1e293b" />
      <circle cx="32" cy="34" r="8" fill="none" stroke="#4ade80" strokeWidth="2" />
      <circle cx="32" cy="60" r="8" fill="none" stroke="#64748b" strokeWidth="2" />
      <rect x="24" y="80" width="16" height="16" rx="4" fill="none" stroke="#04AA6D" strokeWidth="2.5" />
      <circle cx="32" cy="116" r="8" fill="none" stroke="#64748b" strokeWidth="2" />
      {/* Panel */}
      <rect x="64" y="10" width="446" height="170" rx="10" fill="#0d131f" stroke="#1e293b" />
      <text x="84" y="36" fill="#e2e8f0" fontSize="12" fontWeight="700">Extensions</text>
      {/* Shortcut badge */}
      <rect x="170" y="22" width="150" height="22" rx="11" fill="#062419" stroke="#04AA6D" strokeOpacity="0.5" />
      <text x="245" y="37" textAnchor="middle" fill="#4ade80" fontSize="11" fontFamily="monospace" fontWeight="700">Ctrl + Shift + X</text>
      {/* Search box */}
      <rect x="84" y="54" width="220" height="30" rx="8" fill="#06090e" stroke="#1e293b" />
      <text x="96" y="73" fill="#64748b" fontSize="11">Search: live server…</text>
      {/* Result row 1 */}
      <rect x="84" y="96" width="406" height="36" rx="8" fill="#141d2e" stroke="#04AA6D" strokeOpacity="0.4" />
      <rect x="96" y="105" width="18" height="18" rx="5" fill="none" stroke="#4ade80" strokeWidth="2" />
      <text x="124" y="118" fill="#e2e8f0" fontSize="11" fontWeight="700">Live Server</text>
      <text x="208" y="118" fill="#64748b" fontSize="10">Ritwick Dey</text>
      <rect x="410" y="103" width="64" height="22" rx="11" fill="#04AA6D" />
      <text x="442" y="118" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700">Install</text>
      {/* Result row 2 */}
      <rect x="84" y="140" width="406" height="30" rx="8" fill="none" stroke="#1e293b" />
      <rect x="96" y="147" width="16" height="16" rx="4" fill="none" stroke="#64748b" strokeWidth="2" />
      <text x="124" y="159" fill="#94a3b8" fontSize="11" fontWeight="600">Prettier</text>
      <text x="180" y="159" fill="#64748b" fontSize="10">Prettier</text>
    </svg>
    <figcaption className="text-center text-[10px] font-mono uppercase tracking-widest text-gray-600 mt-3">
      Illustration — finding and installing an extension
    </figcaption>
  </figure>
);

const ProjectFlowIllustration: React.FC = () => (
  <figure className="rounded-xl bg-[#06090e] border border-[#1e293b] p-6">
    <svg viewBox="0 0 520 170" className="w-full h-auto" role="img" aria-label="Diagram: folder goes into VS Code, file opens in the browser through live server">
      <defs>
        <marker id="arrowG2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#04AA6D" />
        </marker>
      </defs>
      {/* Folder node */}
      <rect x="10" y="45" width="140" height="80" rx="12" fill="#0d131f" stroke="#1e293b" />
      <path d="M62 62 h14 l4 5 h18 v22 h-36 Z" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinejoin="round" />
      <text x="80" y="108" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">my-first-website</text>
      <text x="80" y="120" textAnchor="middle" fill="#64748b" fontSize="9">A folder on your PC</text>
      <line x1="155" y1="85" x2="195" y2="85" stroke="#04AA6D" strokeWidth="2" markerEnd="url(#arrowG2)" />
      {/* VS Code node */}
      <rect x="200" y="45" width="140" height="80" rx="12" fill="#0d131f" stroke="#1e293b" />
      <rect x="238" y="62" width="64" height="40" rx="6" fill="none" stroke="#4ade80" strokeWidth="2" />
      <text x="270" y="80" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">index.html</text>
      <text x="270" y="94" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">&lt;h1&gt;Hello&lt;/h1&gt;</text>
      <text x="270" y="112" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="700">Open Folder</text>
      <text x="270" y="123" textAnchor="middle" fill="#64748b" fontSize="8">in VS Code</text>
      <line x1="345" y1="85" x2="385" y2="85" stroke="#04AA6D" strokeWidth="2" markerEnd="url(#arrowG2)" />
      {/* Browser node */}
      <rect x="390" y="45" width="120" height="80" rx="12" fill="#0d131f" stroke="#1e293b" />
      <rect x="406" y="62" width="88" height="42" rx="6" fill="none" stroke="#38bdf8" strokeWidth="2" />
      <line x1="406" y1="72" x2="494" y2="72" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="414" cy="67" r="2.5" fill="#64748b" />
      <circle cx="421" cy="67" r="2.5" fill="#64748b" />
      <text x="450" y="92" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">Go Live</text>
      <text x="450" y="104" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontWeight="700">Your page, in the browser</text>
      <text x="450" y="115" textAnchor="middle" fill="#64748b" fontSize="8">http://127.0.0.1:5500</text>
    </svg>
    <figcaption className="text-center text-[10px] font-mono uppercase tracking-widest text-gray-600 mt-3">
      Illustration — the project flow: folder → VS Code → browser
    </figcaption>
  </figure>
);

/* ------------------------------------------------------------------ */
/* Visual step-by-step guide (screenshot slides)                       */
/* ------------------------------------------------------------------ */

interface VisualStep {
  n: number;
  img: string;
  title: string;
  body: React.ReactNode;
}

const VISUAL_STEPS: VisualStep[] = [
  {
    n: 1,
    img: setupGuideImages[0],
    title: 'Open the VS Code website',
    body: (
      <>
        Open Google and go to <strong className="text-white">code.visualstudio.com</strong> — the official
        Visual Studio Code website. This is the only safe place to download it from.
      </>
    ),
  },
  {
    n: 2,
    img: setupGuideImages[1],
    title: 'Download for your operating system',
    body: (
      <>
        Click the <strong className="text-white">Download</strong> button for your system —
        <strong className="text-white"> Windows</strong>, <strong className="text-white">macOS</strong>, or{' '}
        <strong className="text-white">Linux</strong>. The site detects your OS automatically.
      </>
    ),
  },
  {
    n: 3,
    img: setupGuideImages[2],
    title: 'Double-click the downloaded file',
    body: (
      <>
        When the download finishes, open your <strong className="text-white">Downloads</strong> folder and{' '}
        <strong className="text-white">double-click</strong> the installer file
        (<code className="text-[#4ade80] font-mono text-xs">VSCodeUserSetup.exe</code> on Windows) to start setup.
      </>
    ),
  },
  {
    n: 4,
    img: setupGuideImages[3],
    title: 'Accept the license and click Next',
    body: (
      <>
        Select <strong className="text-white">“I accept the agreement”</strong> and click{' '}
        <strong className="text-white">Next</strong>. This is the standard software license — you must accept it to continue.
      </>
    ),
  },
  {
    n: 5,
    img: setupGuideImages[4],
    title: 'Tick the options and click Install',
    body: (
      <>
        Check <strong className="text-white">“Add to PATH”</strong> (recommended) so you can open VS Code from the
        terminal later. Click <strong className="text-white">Install</strong>, wait for it to finish, then click{' '}
        <strong className="text-white">Finish</strong>.
      </>
    ),
  },
  {
    n: 6,
    img: setupGuideImages[5],
    title: 'Open VS Code',
    body: (
      <>
        Open the <strong className="text-white">Start menu</strong>, type{' '}
        <strong className="text-white">Visual Studio Code</strong>, and click the app to launch it for the first time.
      </>
    ),
  },
  {
    n: 7,
    img: setupGuideImages[6],
    title: 'Create a new file and save it as index.html',
    body: (
      <>
        Go to <strong className="text-white">File → New Text File</strong>, then press{' '}
        <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Ctrl</kbd>
        {' + '}
        <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">S</kbd>{' '}
        and save it as <strong className="text-white">index.html</strong>. Browsers always look for{' '}
        <strong className="text-white">index.html</strong> first.
      </>
    ),
  },
  {
    n: 8,
    img: setupGuideImages[7],
    title: 'Write your first HTML code',
    body: (
      <>
        Type the basic HTML structure into the editor — <strong className="text-white">10 lines</strong> that make a
        complete webpage. Then press{' '}
        <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Ctrl</kbd>
        {' + '}
        <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">S</kbd>{' '}
        to save.
      </>
    ),
  },
  {
    n: 9,
    img: setupGuideImages[8],
    title: 'Click the Extensions icon',
    body: (
      <>
        Click the <strong className="text-white">Extensions icon</strong> in the left sidebar (or press{' '}
        <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Ctrl</kbd>
        {' + '}
        <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Shift</kbd>
        {' + '}
        <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">X</kbd>).
        This opens the Extensions panel.
      </>
    ),
  },
  {
    n: 10,
    img: setupGuideImages[9],
    title: 'Install Live Server',
    body: (
      <>
        Search for <strong className="text-white">“Live Server”</strong> and click{' '}
        <strong className="text-white">Install</strong> on the one by{' '}
        <strong className="text-white">Ritwick Dey</strong>. It opens your pages in the browser and reloads
        automatically on every save.
      </>
    ),
  },
  {
    n: 11,
    img: setupGuideImages[10],
    title: 'Click Go Live and see your website',
    body: (
      <>
        Click the <strong className="text-white">Go Live</strong> button in the bottom-right corner of VS Code.
        Your browser opens automatically at <code className="text-[#4ade80] font-mono text-xs">127.0.0.1:5500</code>{' '}
        showing <strong className="text-white">“Hello, World!”</strong> — your first website is live.
      </>
    ),
  },
];

const VisualStepGuide: React.FC = () => (
  <SectionShell
    kicker="Visual Guide"
    icon={<Monitor className="w-5 h-5" />}
    title="Step-by-Step with Pictures"
    blurb="Follow these 11 visual steps from start to finish — download, install, write code, and see your first website live in the browser."
  >
    <div className="space-y-10">
      {VISUAL_STEPS.map((s, i) => (
        <div
          key={s.n}
          className={`grid gap-6 items-center lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}
        >
          <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
            <img
              src={s.img}
              alt={`Step ${s.n}: ${s.title}`}
              loading="lazy"
              className="w-full rounded-2xl border border-[#1e293b] shadow-lg shadow-black/40"
            />
          </div>
          <div className={`space-y-3 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
            <div className="flex items-center space-x-3">
              <StepNumber n={s.n} />
              <h3 className="text-lg font-extrabold text-white">{s.title}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export const SetupGuidePage: React.FC = () => {
  const { navigateTo, openTryit } = useNavigation();

  const boilerplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>I built my first webpage.</p>
</body>
</html>`;

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2 pb-6 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-[#4ade80] uppercase tracking-wider">
            Setup Guide
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-gray-400">From zero to your first webpage</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Getting Started: VS Code to First Project
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
          A complete beginner setup guide: install VS Code, configure it with the essential
          extensions, then create and open your very first project. Every step is real —
          follow along and you will see your first webpage in the browser.
        </p>
      </div>

      {/* ============================================================ */}
      {/* VISUAL STEP-BY-STEP GUIDE                                  */}
      {/* ============================================================ */}
      <VisualStepGuide />
    </div>
  );
};
