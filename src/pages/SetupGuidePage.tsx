import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CodeBlock } from '../components/CodeBlock';
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
      {/* SECTION 1 — DOWNLOAD VS CODE                                   */}
      {/* ============================================================ */}
      <SectionShell
        kicker="Section 1"
        icon={<Download className="w-5 h-5" />}
        title="Download & Install VS Code"
        blurb="Visual Studio Code is the free code editor made by Microsoft. It runs on Windows, Mac, and Linux."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="space-y-6">
            {/* Step 1.1 */}
            <div className="flex space-x-4">
              <StepNumber n={1} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">Visit the official download page</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Open your browser and go to{' '}
                  <a
                    href="https://code.visualstudio.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#4ade80] font-semibold hover:underline inline-flex items-center space-x-1"
                  >
                    <span>code.visualstudio.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  . The site automatically detects your operating system and shows the
                  <strong className="text-white"> correct Download button</strong> for it.
                </p>
              </div>
            </div>

            {/* Step 1.2 */}
            <div className="flex space-x-4">
              <StepNumber n={2} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">Click Download for your OS</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Click the big <strong className="text-white">Download</strong> button. The installer
                  downloads to your computer — on Windows it is a <strong className="text-white">.exe</strong> file,
                  on Mac a <strong className="text-white">.zip</strong> file, on Linux a
                  <strong className="text-white"> .deb</strong> or <strong className="text-white">.rpm</strong> package,
                  depending on your distribution.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center space-x-1.5 text-xs text-gray-300 bg-[#141d2e] border border-[#1e293b] rounded-lg px-3 py-1.5">
                    <AppWindow className="w-3.5 h-3.5 text-sky-400" />
                    <span>Windows</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs text-gray-300 bg-[#141d2e] border border-[#1e293b] rounded-lg px-3 py-1.5">
                    <Apple className="w-3.5 h-3.5 text-gray-300" />
                    <span>macOS</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs text-gray-300 bg-[#141d2e] border border-[#1e293b] rounded-lg px-3 py-1.5">
                    <Monitor className="w-3.5 h-3.5 text-amber-400" />
                    <span>Linux</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Step 1.3 */}
            <div className="flex space-x-4">
              <StepNumber n={3} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">Run the installer</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Open the downloaded file and follow the setup wizard. Accept the license agreement
                  and <strong className="text-white">keep the default settings</strong> — they work
                  fine for beginners. Click through <strong className="text-white">Next</strong> until
                  the installation finishes, then launch VS Code.
                </p>
                <TipBox>
                  On Windows, the installer offers an <strong className="text-white">“Add to PATH”</strong> option —
                  leave it checked. It lets you type <code className="text-[#4ade80] font-mono">code</code> in the
                  terminal later to open VS Code from any folder.
                </TipBox>
              </div>
            </div>
          </div>

          <DownloadFlowIllustration />
        </div>
      </SectionShell>

      {/* ============================================================ */}
      {/* SECTION 2 — FIRST-TIME SETUP                                   */}
      {/* ============================================================ */}
      <SectionShell
        kicker="Section 2"
        icon={<Settings className="w-5 h-5" />}
        title="First-Time Setup"
        blurb="Two extensions and a color theme turn a fresh install into a comfortable coding environment. Install these once — they stay forever."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="space-y-6">
            {/* Step 2.1 */}
            <div className="flex space-x-4">
              <StepNumber n={1} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">Open the Extensions panel</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  In VS Code, press <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Ctrl</kbd>
                  {' + '}
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Shift</kbd>
                  {' + '}
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">X</kbd>
                  {' '} (on Mac: <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Cmd</kbd>
                  {' + '}
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Shift</kbd>
                  {' + '}
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">X</kbd>).
                  This opens the <strong className="text-white">Extensions sidebar</strong> — the same panel
                  as the puzzle-piece icon on the left activity bar.
                </p>
              </div>
            </div>

            {/* Step 2.2 */}
            <div className="flex space-x-4">
              <StepNumber n={2} />
              <div className="space-y-3 flex-1">
                <h3 className="text-base font-bold text-white">Install Live Server</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Search for <strong className="text-white">“Live Server”</strong> and install the one
                  by <strong className="text-white">Ritwick Dey</strong> (extension ID:
                  <code className="text-[#4ade80] font-mono text-xs"> ritwickdey.LiveServer</code>).
                  It opens your HTML files in the browser and <strong className="text-white">reloads automatically</strong> every
                  time you save — you see your changes instantly without pressing refresh.
                </p>
                <div className="flex items-start space-x-3 rounded-xl bg-[#141d2e] border border-[#1e293b] px-4 py-3">
                  <Puzzle className="w-4 h-4 text-[#4ade80] mt-0.5 shrink-0" />
                  <div className="text-xs text-gray-400 leading-relaxed">
                    <span className="text-white font-semibold">Live Server</span> — publisher{' '}
                    <span className="text-white font-semibold">Ritwick Dey</span>
                    <span className="text-gray-500"> • ID: </span>
                    <code className="text-[#4ade80] font-mono">ritwickdey.LiveServer</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2.3 */}
            <div className="flex space-x-4">
              <StepNumber n={3} />
              <div className="space-y-3 flex-1">
                <h3 className="text-base font-bold text-white">Install Prettier</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Search for <strong className="text-white">“Prettier”</strong> and install
                  <strong className="text-white"> Prettier – Code formatter</strong> by
                  <strong className="text-white"> Prettier</strong> (extension ID:
                  <code className="text-[#4ade80] font-mono text-xs"> esbenp.prettier-vscode</code>).
                  It <strong className="text-white">auto-formats your code</strong> — proper indentation
                  and spacing on every save, so your code always looks clean.
                </p>
                <div className="flex items-start space-x-3 rounded-xl bg-[#141d2e] border border-[#1e293b] px-4 py-3">
                  <Puzzle className="w-4 h-4 text-[#4ade80] mt-0.5 shrink-0" />
                  <div className="text-xs text-gray-400 leading-relaxed">
                    <span className="text-white font-semibold">Prettier – Code formatter</span> — publisher{' '}
                    <span className="text-white font-semibold">Prettier</span>
                    <span className="text-gray-500"> • ID: </span>
                    <code className="text-[#4ade80] font-mono">esbenp.prettier-vscode</code>
                  </div>
                </div>
                <TipBox>
                  After installing Prettier, press <strong className="text-white">Ctrl + ,</strong> (comma) to open
                  Settings, search <strong className="text-white">“format on save”</strong>, and check
                  <strong className="text-white"> Editor: Format On Save</strong>. From now on, VS Code
                  tidies your code every time you press save.
                </TipBox>
              </div>
            </div>

            {/* Step 2.4 */}
            <div className="flex space-x-4">
              <StepNumber n={4} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">Pick a color theme</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Go to <strong className="text-white">File → Preferences → Color Theme</strong> (or press
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white"> Ctrl</kbd>
                  {' + '}
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">K</kbd>
                  {' '} then <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Ctrl</kbd>
                  {' + '}
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">T</kbd>)
                  and pick a theme you like. <strong className="text-white">Dark (Visual Studio)</strong> is
                  the classic choice most developers use.
                </p>
              </div>
            </div>
          </div>

          <ExtensionsIllustration />
        </div>
      </SectionShell>

      {/* ============================================================ */}
      {/* SECTION 3 — FIRST PROJECT                                      */}
      {/* ============================================================ */}
      <SectionShell
        kicker="Section 3"
        icon={<FolderOpen className="w-5 h-5" />}
        title="Your First Project"
        blurb="Create a folder, write real HTML, and see it live in your browser. This takes about five minutes."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="space-y-6">
            {/* Step 3.1 */}
            <div className="flex space-x-4">
              <StepNumber n={1} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">Create a folder on your computer</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Make a new folder anywhere — for example on your Desktop or in Documents — and name
                  it <strong className="text-white">my-first-website</strong>. This folder holds all
                  the files of your project.
                </p>
              </div>
            </div>

            {/* Step 3.2 */}
            <div className="flex space-x-4">
              <StepNumber n={2} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">Open the folder in VS Code</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  In VS Code, go to <strong className="text-white">File → Open Folder</strong>, select
                  <strong className="text-white"> my-first-website</strong>, and click
                  <strong className="text-white"> Select Folder</strong>. VS Code trusts the folder and
                  shows it in the <strong className="text-white">Explorer panel</strong> on the left —
                  everything you create now lives inside it.
                </p>
              </div>
            </div>

            {/* Step 3.3 */}
            <div className="flex space-x-4">
              <StepNumber n={3} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">
                  Create <code className="text-[#4ade80] font-mono text-sm">index.html</code>
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  In the Explorer, hover over the folder and click the
                  <strong className="text-white"> New File</strong> icon (or right-click → New File).
                  Name the file <strong className="text-white">index.html</strong>. Browsers always look
                  for a file named <strong className="text-white">index.html</strong> first — that is why
                  every website starts with it.
                </p>
                <TipBox>
                  VS Code has a shortcut for boilerplate code: in an empty <strong className="text-white">index.html</strong>,
                  type <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">!</kbd> and
                  press <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">Tab</kbd> —
                  VS Code (via Emmet) generates the whole basic HTML structure for you.
                </TipBox>
              </div>
            </div>

            {/* Step 3.4 */}
            <div className="flex space-x-4">
              <StepNumber n={4} />
              <div className="space-y-3 flex-1">
                <h3 className="text-base font-bold text-white">Write the basic HTML boilerplate</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Paste this code into <strong className="text-white">index.html</strong> and save with
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white"> Ctrl</kbd>
                  {' + '}
                  <kbd className="px-1.5 py-0.5 rounded bg-[#141d2e] border border-[#1e293b] font-mono text-xs text-white">S</kbd>.
                </p>
                <CodeBlock code={boilerplate} language="html" filename="index.html" />
              </div>
            </div>

            {/* Step 3.5 */}
            <div className="flex space-x-4">
              <StepNumber n={5} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">Open it with Live Server</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-white">Right-click</strong> anywhere in the editor and choose
                  <strong className="text-white"> “Open with Live Server”</strong> — or click the
                  <strong className="text-white"> Go Live</strong> button in the
                  <strong className="text-white"> bottom-right corner</strong> of the VS Code status bar.
                  Your page opens in the browser at{' '}
                  <code className="text-[#4ade80] font-mono text-xs">http://127.0.0.1:5500</code>.
                </p>
                <TipBox>
                  Change the text inside <code className="text-[#4ade80] font-mono">&lt;h1&gt;</code>,
                  press <strong className="text-white">Ctrl + S</strong>, and watch the browser
                  <strong className="text-white"> update automatically</strong> — no refresh needed. That is
                  Live Server doing its job.
                </TipBox>
              </div>
            </div>

            {/* Step 3.6 */}
            <div className="flex space-x-4">
              <StepNumber n={6} />
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-white">See it in the browser</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  You should now see <strong className="text-white">“Hello, World!”</strong> in your browser.
                  Congratulations — you just built your first webpage. From here, the
                  <strong className="text-white"> HTML tutorial</strong> teaches you what every line
                  of that code actually means.
                </p>
              </div>
            </div>
          </div>

          <ProjectFlowIllustration />
        </div>
      </SectionShell>

      {/* ============================================================ */}
      {/* NEXT STEPS                                                     */}
      {/* ============================================================ */}
      <section className="rounded-2xl bg-gradient-to-br from-[#062419] to-[#0d131f] border border-[#04AA6D]/40 px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <span className="w-12 h-12 rounded-xl bg-[#04AA6D] flex items-center justify-center text-white shrink-0">
              <CheckCircle className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">Setup complete. What next?</h2>
              <p className="text-sm text-gray-400 mt-1 leading-relaxed max-w-xl">
                Your environment is ready. Learn what the HTML boilerplate means, or try editing it
                live in the playground.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => navigateTo('lesson', { courseSlug: 'html', lessonSlug: 'introduction-to-html' })}
              className="inline-flex items-center space-x-2 bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm px-6 py-3 rounded-full transition shadow-md shadow-[#04AA6D]/25"
            >
              <Code2 className="w-4 h-4" />
              <span>Start HTML Tutorial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openTryit(boilerplate, 'html', 'My First Webpage — Setup Guide')}
              className="inline-flex items-center space-x-2 bg-[#141d2e] hover:bg-[#1c283f] border border-[#1e293b] text-white font-bold text-sm px-6 py-3 rounded-full transition"
            >
              <Play className="w-4 h-4 text-[#4ade80]" />
              <span>Try This Code Live</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick recap */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: <Download className="w-5 h-5" />,
            title: 'Download',
            text: 'code.visualstudio.com — the correct installer for your OS, defaults accepted.'
          },
          {
            icon: <Puzzle className="w-5 h-5" />,
            title: 'Extensions',
            text: 'Ctrl+Shift+X — Live Server (Ritwick Dey) and Prettier installed once.'
          },
          {
            icon: <Globe className="w-5 h-5" />,
            title: 'First project',
            text: 'Open Folder → index.html → boilerplate → Go Live → see it in the browser.'
          }
        ].map((c, i) => (
          <div key={i} className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-5 space-y-3">
            <span className="w-10 h-10 rounded-xl bg-[#062419] border border-[#04AA6D]/40 flex items-center justify-center text-[#4ade80]">
              {c.icon}
            </span>
            <h3 className="text-base font-bold text-white">{c.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{c.text}</p>
          </div>
        ))}
      </section>

    </div>
  );
};
