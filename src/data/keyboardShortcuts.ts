export interface KeyboardShortcut {
  id: string;
  title: string;
  description: string;
  category: 'general' | 'navigation' | 'editor' | 'learning';
  keys: string[]; // default Windows/Linux keys
  macKeys?: string[]; // Mac-specific keys
  badge?: 'Essential' | 'Pro' | 'Editor' | 'Quiz';
  actionRoute?: string;
  actionType?: 'open-shortcuts' | 'toggle-theme' | 'open-ai-mentor' | 'open-tryit' | 'search' | 'go-back' | 'toggle-sidebar';
}

export interface ShortcutCategory {
  id: 'all' | 'general' | 'navigation' | 'editor' | 'learning';
  name: string;
  description: string;
  iconName: string;
}

export const SHORTCUT_CATEGORIES: ShortcutCategory[] = [
  {
    id: 'all',
    name: 'All Shortcuts',
    description: 'Complete list of navigation, editor, and learning hotkeys',
    iconName: 'Command'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Quickly move between lessons, courses, and pages',
    iconName: 'Compass'
  },
  {
    id: 'editor',
    name: 'Code Editor',
    description: 'Format, execute, save, and manipulate code in the Tryit Editor',
    iconName: 'Code'
  },
  {
    id: 'learning',
    name: 'Learning & Quizzes',
    description: 'Accelerate lesson reading, quiz answering, and AI assistance',
    iconName: 'GraduationCap'
  },
  {
    id: 'general',
    name: 'General & Interface',
    description: 'System-wide preferences, search, theme, and dialog controls',
    iconName: 'Sliders'
  }
];

export const KEYBOARD_SHORTCUTS: KeyboardShortcut[] = [
  // General
  {
    id: 'open-shortcuts',
    title: 'Open Keyboard Shortcuts',
    description: 'Toggle this keyboard shortcut overlay anytime, anywhere',
    category: 'general',
    keys: ['?'],
    macKeys: ['?'],
    badge: 'Essential',
    actionType: 'open-shortcuts'
  },
  {
    id: 'open-shortcuts-alternate',
    title: 'Alternate Shortcut Overlay',
    description: 'Alternative combination to bring up the keyboard shortcuts modal',
    category: 'general',
    keys: ['Ctrl', '/'],
    macKeys: ['⌘', '/'],
    actionType: 'open-shortcuts'
  },
  {
    id: 'global-search',
    title: 'Global Search',
    description: 'Quickly search tutorials, courses, tags, and documentation',
    category: 'general',
    keys: ['Ctrl', 'K'],
    macKeys: ['⌘', 'K'],
    badge: 'Essential',
    actionType: 'search'
  },
  {
    id: 'toggle-theme',
    title: 'Toggle Dark / Light Theme',
    description: 'Switch between sleek dark coding theme and high-contrast light mode',
    category: 'general',
    keys: ['Alt', 'M'],
    macKeys: ['⌥', 'M'],
    actionType: 'toggle-theme'
  },
  {
    id: 'close-modals',
    title: 'Close Modal / Dropdown / Menu',
    description: 'Dismiss any open dialog, mega menu, or overlay window',
    category: 'general',
    keys: ['Esc'],
    macKeys: ['Esc'],
    badge: 'Essential'
  },

  // Navigation
  {
    id: 'nav-home',
    title: 'Go to Home',
    description: 'Jump to the main learning dashboard and continue where you left off',
    category: 'navigation',
    keys: ['Alt', 'H'],
    macKeys: ['⌥', 'H'],
    actionRoute: 'home'
  },
  {
    id: 'nav-courses',
    title: 'Browse Courses & Tutorials',
    description: 'View the complete catalog of HTML, CSS, JavaScript, Python, and SQL courses',
    category: 'navigation',
    keys: ['Alt', 'C'],
    macKeys: ['⌥', 'C'],
    actionRoute: 'courses'
  },
  {
    id: 'nav-practice',
    title: 'Practice & Coding Exercises',
    description: 'Jump directly to coding challenges, quizzes, and exercises',
    category: 'navigation',
    keys: ['Alt', 'P'],
    macKeys: ['⌥', 'P'],
    actionRoute: 'practice'
  },
  {
    id: 'nav-tryit',
    title: 'Open Tryit Code Playground',
    description: 'Launch the live interactive web editor with HTML, CSS & JavaScript sandbox',
    category: 'navigation',
    keys: ['Alt', 'T'],
    macKeys: ['⌥', 'T'],
    badge: 'Pro',
    actionRoute: 'tryit'
  },
  {
    id: 'nav-profile',
    title: 'Profile & Achievements',
    description: 'View streak count, unlocked badges, learning statistics, and XP velocity',
    category: 'navigation',
    keys: ['Alt', 'U'],
    macKeys: ['⌥', 'U'],
    actionRoute: 'profile'
  },
  {
    id: 'nav-resources',
    title: 'Developer Cheat Sheets & Resources',
    description: 'Access HTML tags list, CSS properties, JavaScript methods, and interview prep',
    category: 'navigation',
    keys: ['Alt', 'R'],
    macKeys: ['⌥', 'R'],
    actionRoute: 'resources'
  },
  {
    id: 'nav-back',
    title: 'Go Back',
    description: 'Return to the previous screen in your learning history stack',
    category: 'navigation',
    keys: ['Alt', '←'],
    macKeys: ['⌥', '←'],
    actionType: 'go-back'
  },

  // Code Editor
  {
    id: 'editor-run',
    title: 'Run & Execute Code',
    description: 'Execute current HTML/CSS/JS and refresh the live browser sandbox',
    category: 'editor',
    keys: ['Ctrl', 'Enter'],
    macKeys: ['⌘', '↵'],
    badge: 'Editor'
  },
  {
    id: 'editor-run-alt',
    title: 'Alternate Run Code',
    description: 'Alternate hotkey to compile and re-render the preview sandbox',
    category: 'editor',
    keys: ['Ctrl', 'Alt', 'R'],
    macKeys: ['⌃', '⌥', 'R'],
    badge: 'Editor'
  },
  {
    id: 'editor-format',
    title: 'Auto-Format Code (Prettier)',
    description: 'Format HTML, CSS, JavaScript, and JSON with clean, consistent indentation',
    category: 'editor',
    keys: ['Shift', 'Alt', 'F'],
    macKeys: ['⇧', '⌥', 'F'],
    badge: 'Essential'
  },
  {
    id: 'editor-save',
    title: 'Save Code Snippet',
    description: 'Save current code into your local browser workspace and project files',
    category: 'editor',
    keys: ['Ctrl', 'S'],
    macKeys: ['⌘', 'S'],
    badge: 'Editor'
  },
  {
    id: 'editor-save-alt',
    title: 'Save Code Alternate',
    description: 'Secondary shortcut to save your project code',
    category: 'editor',
    keys: ['Ctrl', 'Alt', 'A'],
    macKeys: ['⌃', '⌥', 'A']
  },
  {
    id: 'editor-toggle-orientation',
    title: 'Toggle Editor Layout',
    description: 'Switch between Side-by-Side (Split) and Top-and-Bottom (Vertical) layout',
    category: 'editor',
    keys: ['Ctrl', 'Alt', 'O'],
    macKeys: ['⌃', '⌥', 'O'],
    badge: 'Pro'
  },
  {
    id: 'editor-toggle-theme',
    title: 'Toggle Editor Theme (Dark / Light)',
    description: 'Quickly toggle dark & light themes or open the theme switcher for Dracula, Monokai, GitHub, etc.',
    category: 'editor',
    keys: ['Ctrl', 'Alt', 'D'],
    macKeys: ['⌃', '⌥', 'D'],
    badge: 'Editor'
  },
  {
    id: 'editor-spaces',
    title: 'Save to Cloud Spaces / Zip',
    description: 'Export project code or push to cloud spaces repository',
    category: 'editor',
    keys: ['Ctrl', 'Alt', 'P'],
    macKeys: ['⌃', '⌥', 'P']
  },
  {
    id: 'editor-indent',
    title: 'Indent Code Block',
    description: 'Indent current line or selected code by 2 spaces',
    category: 'editor',
    keys: ['Tab'],
    macKeys: ['⇥']
  },
  {
    id: 'editor-outdent',
    title: 'Outdent Code Block',
    description: 'Outdent current line or selected code backward by 2 spaces',
    category: 'editor',
    keys: ['Shift', 'Tab'],
    macKeys: ['⇧', '⇥']
  },
  {
    id: 'editor-comment',
    title: 'Toggle Line Comment',
    description: 'Comment or uncomment the active line with language-specific syntax',
    category: 'editor',
    keys: ['Ctrl', '/'],
    macKeys: ['⌘', '/']
  },
  {
    id: 'editor-find',
    title: 'Find Text in Editor',
    description: 'Search for tags, variables, classes, or text inside the code editor',
    category: 'editor',
    keys: ['Ctrl', 'F'],
    macKeys: ['⌘', 'F']
  },

  // Learning & Lessons
  {
    id: 'learning-ai-mentor',
    title: 'Summon AI Coding Mentor',
    description: 'Open AI Mentor with voice assistance, code debugging, and step-by-step explanations',
    category: 'learning',
    keys: ['Ctrl', 'Shift', 'M'],
    macKeys: ['⌘', '⇧', 'M'],
    badge: 'Essential',
    actionType: 'open-ai-mentor'
  },
  {
    id: 'learning-toggle-sidebar',
    title: 'Toggle Lesson Syllabus Sidebar',
    description: 'Expand or collapse the course module outline and lessons checklist',
    category: 'learning',
    keys: ['Ctrl', 'B'],
    macKeys: ['⌘', 'B'],
    badge: 'Pro',
    actionType: 'toggle-sidebar'
  },
  {
    id: 'learning-next-lesson',
    title: 'Next Lesson',
    description: 'Advance to the next lesson or challenge in the active course curriculum',
    category: 'learning',
    keys: ['Alt', '→'],
    macKeys: ['⌥', '→']
  },
  {
    id: 'learning-prev-lesson',
    title: 'Previous Lesson',
    description: 'Return to the preceding lesson in the active course curriculum',
    category: 'learning',
    keys: ['Alt', '←'],
    macKeys: ['⌥', '←']
  },
  {
    id: 'quiz-options',
    title: 'Select Quiz Option (1 - 4)',
    description: 'Instantly select options A, B, C, or D in multiple-choice quizzes without using the mouse',
    category: 'learning',
    keys: ['1', '2', '3', '4'],
    macKeys: ['1', '2', '3', '4'],
    badge: 'Quiz'
  },
  {
    id: 'quiz-submit',
    title: 'Submit Answer / Check Code',
    description: 'Submit your selected quiz choice or trigger exercise validation',
    category: 'learning',
    keys: ['Enter'],
    macKeys: ['↵'],
    badge: 'Quiz'
  }
];
