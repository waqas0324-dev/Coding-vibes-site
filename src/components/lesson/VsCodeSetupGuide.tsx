import React, { useState } from 'react';
import {
  Download,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Check,
  FileCode,
  Laptop,
  Maximize2
} from 'lucide-react';

interface SetupStep {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  keyAction: string;
  tip?: string;
  button?: {
    text: string;
    url: string;
  };
}

export const VsCodeSetupGuide: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const steps: SetupStep[] = [
    {
      number: 1,
      title: 'Step 1: Go to the Official Website',
      description: 'Open your web browser (Google Chrome, Microsoft Edge, or Mozilla Firefox) and navigate to the official Visual Studio Code website.',
      imageSrc: '/assets/vscode/step1_official_site.svg',
      imageAlt: 'Visual Studio Code official website homepage showing Download for Windows button',
      keyAction: 'Navigate to code.visualstudio.com and locate the blue "Download for Windows" button.',
      tip: 'Always download from the official Microsoft domain (code.visualstudio.com) to protect your computer from unofficial copies.',
      button: {
        text: 'Visit code.visualstudio.com',
        url: 'https://code.visualstudio.com/'
      }
    },
    {
      number: 2,
      title: 'Step 2: Choose Your Operating System Version',
      description: 'The website will automatically detect your OS. If you are on Windows 10 or 11, choose the "User Installer (64 bit)" option.',
      imageSrc: '/assets/vscode/step2_download_installer.svg',
      imageAlt: 'Download options for Windows, Linux, and macOS',
      keyAction: 'Click on "User Installer (64 bit)" under the Windows logo, or choose Linux / macOS if you are using another system.',
      tip: 'The User Installer does not require administrator privileges and installs directly into your user profile.'
    },
    {
      number: 3,
      title: 'Step 3: Download the Installer File',
      description: 'Your browser will start downloading the setup installer (VSCodeUserSetup-x64-x.xx.x.exe). Wait for the download to reach 100%.',
      imageSrc: '/assets/vscode/step3_browser_download.svg',
      imageAlt: 'Browser downloads tray showing VSCodeUserSetup.exe completed',
      keyAction: 'When the download finishes, click "Open file" directly in your browser downloads flyout, or double-click the file in your PC\'s Downloads folder.',
      tip: 'The file size is approximately 95 MB. Make sure the file extension ends with .exe.'
    },
    {
      number: 4,
      title: 'Step 4: Accept the License Agreement',
      description: 'The Windows Setup Wizard will open and display the Microsoft Software License Terms for Visual Studio Code.',
      imageSrc: '/assets/vscode/step4_license_agreement.svg',
      imageAlt: 'Setup Wizard License Agreement screen with I accept the agreement option',
      keyAction: 'Select the radio button labeled "I accept the agreement", then click the "Next >" button at the bottom right.',
      tip: 'You must accept the terms before the "Next >" button becomes clickable.'
    },
    {
      number: 5,
      title: 'Step 5: Select Additional Tasks (Important Checkboxes)',
      description: 'This screen configures helpful Windows Explorer shortcuts. Setting these up now will make opening HTML projects fast and effortless.',
      imageSrc: '/assets/vscode/step5_select_tasks.svg',
      imageAlt: 'Setup Wizard Select Additional Tasks screen with recommended checkboxes',
      keyAction: 'Check the following recommended boxes:\n• Create a desktop icon\n• Add "Open with Code" action to Windows Explorer file context menu\n• Add "Open with Code" action to Windows Explorer directory context menu\n• Register Code as an editor for supported file types\n• Add to PATH\nThen click "Next >".',
      tip: 'Checking "Open with Code" lets you right-click any HTML, CSS, or JS file and open it immediately in VS Code!'
    },
    {
      number: 6,
      title: 'Step 6: Review Summary & Click Install',
      description: 'The Setup Wizard will show a summary of the destination directory (C:\\Users\\...\\AppData\\Local\\Programs\\Microsoft VS Code) and selected tasks.',
      imageSrc: '/assets/vscode/step6_ready_to_install.svg',
      imageAlt: 'Setup Wizard Ready to Install summary screen',
      keyAction: 'Review the settings and click the blue "Install" button. Setup will extract and install the files on your PC.',
      tip: 'Installation usually takes only 10 to 30 seconds on modern computers.'
    },
    {
      number: 7,
      title: 'Step 7: Finish the Setup Wizard',
      description: 'Setup has successfully installed Visual Studio Code on your machine!',
      imageSrc: '/assets/vscode/step7_finish_setup.svg',
      imageAlt: 'Setup Wizard Completing installation screen with Launch checkbox',
      keyAction: 'Keep the checkbox labeled "[✓] Launch Visual Studio Code" checked, and click the "Finish" button.',
      tip: 'Visual Studio Code will launch immediately.'
    },
    {
      number: 8,
      title: 'Step 8: Desktop Shortcut & Security Permission',
      description: 'A blue Visual Studio Code ribbon icon is now on your Windows Desktop.',
      imageSrc: '/assets/vscode/step8_desktop_icon_uac.svg',
      imageAlt: 'Windows Desktop with VS Code shortcut and User Account Control prompt',
      keyAction: 'Double-click the desktop shortcut. If Windows displays a User Account Control prompt asking "Do you want to allow this app to make changes?", click "Yes".',
      tip: 'You can also search for "VS Code" anytime in your Windows Start Menu.'
    },
    {
      number: 9,
      title: 'Step 9: Visual Studio Code is Ready to Use!',
      description: 'Welcome to Visual Studio Code! The Get Started page will open in the modern dark theme.',
      imageSrc: '/assets/vscode/step9_vscode_interface.svg',
      imageAlt: 'Visual Studio Code Welcome screen with Get Started tab and sidebar',
      keyAction: 'Click "New File..." or "Open Folder..." to start building your HTML, CSS, and JavaScript projects.',
      tip: 'Press Ctrl+N (or ⌘N on Mac) to create a new file, and save it as index.html.'
    }
  ];

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-[#1e293b] bg-white dark:bg-[#0c121e] overflow-hidden shadow-sm">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-xs text-white border border-white/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recommended Professional Code Editor</span>
          </span>
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/30 text-emerald-200 border border-emerald-400/40">
            <Check className="w-3 h-3" />
            <span>100% Free & Open Source</span>
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          Visual Studio Code (VS Code) Complete Setup Guide
        </h3>
        <p className="text-blue-100 text-sm sm:text-base max-w-3xl leading-relaxed">
          While simple text editors like Notepad and TextEdit help you understand raw HTML files, professional web developers worldwide rely on <strong>Visual Studio Code</strong>. Follow this exact step-by-step visual tutorial to download, install, and configure VS Code on your computer.
        </p>
      </div>

      {/* Steps List */}
      <div className="p-4 sm:p-8 space-y-10">
        {steps.map(step => (
          <div
            key={step.number}
            className="border border-gray-200 dark:border-[#1e293b] rounded-xl overflow-hidden bg-white dark:bg-[#080d14] shadow-xs"
          >
            {/* Step Header */}
            <div className="p-4 sm:p-5 border-b border-gray-200 dark:border-[#1e293b] flex flex-wrap items-center justify-between gap-3 bg-gray-50/80 dark:bg-[#0f172a]/60">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#0078d4] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-xs">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>

              {step.button && (
                <a
                  href={step.button.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#0078d4] hover:bg-[#005a9e] text-white font-bold text-xs sm:text-sm shadow-xs transition shrink-0"
                >
                  <span>{step.button.text}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Step Body */}
            <div className="p-4 sm:p-6 space-y-4">
              {/* Key Action Instruction Box */}
              <div className="p-3.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-blue-900 dark:text-blue-100 text-xs sm:text-sm">
                <strong className="block text-blue-800 dark:text-blue-300 font-bold mb-1">
                  What to do in this step:
                </strong>
                <div className="whitespace-pre-line leading-relaxed">
                  {step.keyAction}
                </div>
              </div>

              {/* Exact Visual Image */}
              <div className="relative group rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-gray-900 shadow-sm">
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="w-full h-auto max-h-[520px] object-contain mx-auto block cursor-pointer transition duration-200 hover:brightness-105"
                  onClick={() => setSelectedImage(step.imageSrc)}
                  loading="lazy"
                />
                <button
                  onClick={() => setSelectedImage(step.imageSrc)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black text-white text-xs font-semibold flex items-center space-x-1.5 backdrop-blur-xs opacity-90 hover:opacity-100 transition"
                  title="View full size"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Image</span>
                </button>
              </div>

              {/* Tip Callout */}
              {step.tip && (
                <div className="flex items-start space-x-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Tip: </strong>
                    <span>{step.tip}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Essential HTML Extensions for VS Code */}
        <div className="rounded-xl border border-gray-200 dark:border-[#1e293b] p-5 sm:p-6 bg-gray-50/50 dark:bg-[#080d14]/40 space-y-4">
          <h4 className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white flex items-center space-x-2">
            <FileCode className="w-5 h-5 text-[#04AA6D]" />
            <span>Recommended VS Code Extensions for HTML Beginners</span>
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Open the Extensions tab in VS Code (or press <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded font-mono text-xs">Ctrl+Shift+X</kbd>) and install these free extensions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b]">
              <div className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Live Server</div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                Launches a local development server with live reload for static &amp; dynamic pages.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b]">
              <div className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Auto Rename Tag</div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                Automatically renames paired HTML/XML tags when you modify either the opening or closing tag.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b]">
              <div className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Prettier - Code Formatter</div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                Formats your HTML indentation and spacing automatically on save.
              </p>
            </div>
          </div>
        </div>

        {/* Documentation Links */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            Need more information on Visual Studio Code?
          </span>
          <div className="flex items-center space-x-4">
            <a
              href="https://code.visualstudio.com/docs"
              target="_blank"
              rel="noreferrer"
              className="text-[#0078d4] hover:underline font-bold flex items-center space-x-1"
            >
              <span>VS Code Official Docs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://code.visualstudio.com/docs/languages/html"
              target="_blank"
              rel="noreferrer"
              className="text-[#0078d4] hover:underline font-bold flex items-center space-x-1"
            >
              <span>VS Code HTML Guide</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full-Size Image Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
        >
          <div className="relative max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl p-2">
            <div className="flex justify-end p-2">
              <button
                onClick={() => setSelectedImage(null)}
                className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white font-bold text-xs"
              >
                Close ✕
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Full Size Step Preview"
              className="w-full h-auto max-h-[80vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};
