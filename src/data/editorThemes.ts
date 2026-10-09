export interface EditorThemeTokenColors {
  comment: string;
  keyword: string;
  string: string;
  number: string;
  function: string;
  tag: string;
  attrName: string;
  attrValue: string;
  operator: string;
  punctuation: string;
  boolean: string;
  property: string;
  selector: string;
  variable: string;
  regex: string;
  className?: string;
}

export interface EditorThemeColors {
  bg: string;
  fg: string;
  gutterBg: string;
  gutterBorder: string;
  gutterText: string;
  selectionBg: string;
  caretColor: string;
  headerBg: string;
  headerBorder: string;
  activeLineBg?: string;
  swatches: [string, string, string, string]; // [bg, keyword/accent, string, function/tag]
}

export interface EditorTheme {
  id: string;
  name: string;
  mode: 'dark' | 'light';
  description: string;
  author?: string;
  colors: EditorThemeColors;
  tokens: EditorThemeTokenColors;
}

export const EDITOR_THEMES: EditorTheme[] = [
  {
    id: 'dracula',
    name: 'Dracula',
    mode: 'dark',
    description: 'Iconic dark theme with gothic purples, pinks, and cyan accents.',
    author: 'Zeno Rocha',
    colors: {
      bg: '#282a36',
      fg: '#f8f8f2',
      gutterBg: '#21222c',
      gutterBorder: '#383a59',
      gutterText: '#6272a4',
      selectionBg: '#44475a',
      caretColor: '#f8f8f2',
      headerBg: '#1e1f29',
      headerBorder: '#383a59',
      activeLineBg: '#2f3242',
      swatches: ['#282a36', '#ff79c6', '#f1fa8c', '#50fa7b'],
    },
    tokens: {
      comment: '#6272a4',
      keyword: '#ff79c6',
      string: '#f1fa8c',
      number: '#bd93f9',
      function: '#50fa7b',
      tag: '#ff79c6',
      attrName: '#50fa7b',
      attrValue: '#f1fa8c',
      operator: '#ff79c6',
      punctuation: '#f8f8f2',
      boolean: '#bd93f9',
      property: '#66d9ef',
      selector: '#50fa7b',
      variable: '#f8f8f2',
      regex: '#ffb86c',
      className: '#8be9fd',
    },
  },
  {
    id: 'monokai',
    name: 'Monokai Pro',
    mode: 'dark',
    description: 'Classic, warm high-contrast dark theme with vivid yellow and magenta.',
    author: 'Wimer Hazenberg',
    colors: {
      bg: '#272822',
      fg: '#f8f8f2',
      gutterBg: '#1e1f1c',
      gutterBorder: '#3e3d32',
      gutterText: '#75715e',
      selectionBg: '#49483e',
      caretColor: '#f8f8f0',
      headerBg: '#1b1c19',
      headerBorder: '#3e3d32',
      activeLineBg: '#34352d',
      swatches: ['#272822', '#f92672', '#e6db74', '#a6e22e'],
    },
    tokens: {
      comment: '#75715e',
      keyword: '#f92672',
      string: '#e6db74',
      number: '#ae81ff',
      function: '#a6e22e',
      tag: '#f92672',
      attrName: '#a6e22e',
      attrValue: '#e6db74',
      operator: '#f92672',
      punctuation: '#f8f8f2',
      boolean: '#ae81ff',
      property: '#66d9ef',
      selector: '#a6e22e',
      variable: '#fd971f',
      regex: '#e6db74',
      className: '#66d9ef',
    },
  },
  {
    id: 'github-light',
    name: 'GitHub Light',
    mode: 'light',
    description: 'Clean, crisp white canvas with official GitHub syntax highlighting.',
    author: 'GitHub',
    colors: {
      bg: '#ffffff',
      fg: '#24292e',
      gutterBg: '#f6f8fa',
      gutterBorder: '#e1e4e8',
      gutterText: '#959da5',
      selectionBg: '#c8e1ff',
      caretColor: '#24292e',
      headerBg: '#f6f8fa',
      headerBorder: '#e1e4e8',
      activeLineBg: '#f1f8ff',
      swatches: ['#ffffff', '#d73a49', '#032f62', '#6f42c1'],
    },
    tokens: {
      comment: '#6a737d',
      keyword: '#d73a49',
      string: '#032f62',
      number: '#005cc5',
      function: '#6f42c1',
      tag: '#22863a',
      attrName: '#6f42c1',
      attrValue: '#032f62',
      operator: '#d73a49',
      punctuation: '#24292e',
      boolean: '#005cc5',
      property: '#005cc5',
      selector: '#22863a',
      variable: '#e36209',
      regex: '#032f62',
      className: '#6f42c1',
    },
  },
  {
    id: 'github-dark',
    name: 'GitHub Dark',
    mode: 'dark',
    description: 'The elegant slate dark theme utilized across GitHub repositories.',
    author: 'GitHub',
    colors: {
      bg: '#0d1117',
      fg: '#c9d1d9',
      gutterBg: '#090d13',
      gutterBorder: '#21262d',
      gutterText: '#6e7681',
      selectionBg: '#1f3556',
      caretColor: '#58a6ff',
      headerBg: '#090d13',
      headerBorder: '#21262d',
      activeLineBg: '#161b22',
      swatches: ['#0d1117', '#ff7b72', '#a5d6ff', '#d2a8ff'],
    },
    tokens: {
      comment: '#8b949e',
      keyword: '#ff7b72',
      string: '#a5d6ff',
      number: '#79c0ff',
      function: '#d2a8ff',
      tag: '#7ee787',
      attrName: '#79c0ff',
      attrValue: '#a5d6ff',
      operator: '#ff7b72',
      punctuation: '#c9d1d9',
      boolean: '#79c0ff',
      property: '#79c0ff',
      selector: '#7ee787',
      variable: '#ffa657',
      regex: '#7ee787',
      className: '#ffa657',
    },
  },
  {
    id: 'vscode-dark',
    name: 'VS Code Dark+',
    mode: 'dark',
    description: 'The default modern dark theme from Visual Studio Code.',
    author: 'Microsoft',
    colors: {
      bg: '#1e1e1e',
      fg: '#d4d4d4',
      gutterBg: '#181818',
      gutterBorder: '#2d2d2d',
      gutterText: '#858585',
      selectionBg: '#264f78',
      caretColor: '#ffffff',
      headerBg: '#141414',
      headerBorder: '#2d2d2d',
      activeLineBg: '#282828',
      swatches: ['#1e1e1e', '#569cd6', '#ce9178', '#dcdcaa'],
    },
    tokens: {
      comment: '#6a9955',
      keyword: '#569cd6',
      string: '#ce9178',
      number: '#b5cea8',
      function: '#dcdcaa',
      tag: '#569cd6',
      attrName: '#9cdcfe',
      attrValue: '#ce9178',
      operator: '#d4d4d4',
      punctuation: '#d4d4d4',
      boolean: '#569cd6',
      property: '#9cdcfe',
      selector: '#d7ba7d',
      variable: '#9cdcfe',
      regex: '#d16969',
      className: '#4ec9b0',
    },
  },
  {
    id: 'solarized-light',
    name: 'Solarized Light',
    mode: 'light',
    description: 'Scientifically designed warm cream palette crafted for reduced eye strain.',
    author: 'Ethan Schoonover',
    colors: {
      bg: '#fdf6e3',
      fg: '#657b83',
      gutterBg: '#eee8d5',
      gutterBorder: '#d5ceba',
      gutterText: '#93a1a1',
      selectionBg: '#ebdcb9',
      caretColor: '#657b83',
      headerBg: '#eee8d5',
      headerBorder: '#e0d8c3',
      activeLineBg: '#f7edd3',
      swatches: ['#fdf6e3', '#859900', '#2aa198', '#268bd2'],
    },
    tokens: {
      comment: '#93a1a1',
      keyword: '#859900',
      string: '#2aa198',
      number: '#d33682',
      function: '#268bd2',
      tag: '#268bd2',
      attrName: '#b58900',
      attrValue: '#2aa198',
      operator: '#859900',
      punctuation: '#657b83',
      boolean: '#b58900',
      property: '#b58900',
      selector: '#b58900',
      variable: '#268bd2',
      regex: '#dc322f',
      className: '#cb4b16',
    },
  },
  {
    id: 'one-dark',
    name: 'One Dark Pro',
    mode: 'dark',
    description: 'Atom’s flagship theme featuring balanced pastels and cool gray tones.',
    author: 'Binaryify',
    colors: {
      bg: '#282c34',
      fg: '#abb2bf',
      gutterBg: '#21252b',
      gutterBorder: '#353b45',
      gutterText: '#5c6370',
      selectionBg: '#3e4451',
      caretColor: '#528bff',
      headerBg: '#1e2227',
      headerBorder: '#353b45',
      activeLineBg: '#2c313c',
      swatches: ['#282c34', '#c678dd', '#98c379', '#61afef'],
    },
    tokens: {
      comment: '#5c6370',
      keyword: '#c678dd',
      string: '#98c379',
      number: '#d19a66',
      function: '#61afef',
      tag: '#e06c75',
      attrName: '#d19a66',
      attrValue: '#98c379',
      operator: '#56b6c2',
      punctuation: '#abb2bf',
      boolean: '#d19a66',
      property: '#e06c75',
      selector: '#e06c75',
      variable: '#e06c75',
      regex: '#98c379',
      className: '#e5c07b',
    },
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    mode: 'dark',
    description: 'Tuned specifically for deep evening coding sessions with radiant pastels.',
    author: 'Sarah Drasner',
    colors: {
      bg: '#011627',
      fg: '#d6deeb',
      gutterBg: '#01111e',
      gutterBorder: '#0b2942',
      gutterText: '#4b6479',
      selectionBg: '#1d3b53',
      caretColor: '#7e57c2',
      headerBg: '#010d18',
      headerBorder: '#0b2942',
      activeLineBg: '#0b253a',
      swatches: ['#011627', '#c792ea', '#ecc48d', '#82aaff'],
    },
    tokens: {
      comment: '#637777',
      keyword: '#c792ea',
      string: '#ecc48d',
      number: '#f78c6c',
      function: '#82aaff',
      tag: '#7fdbca',
      attrName: '#addb67',
      attrValue: '#ecc48d',
      operator: '#c792ea',
      punctuation: '#d6deeb',
      boolean: '#ff5874',
      property: '#80cbc4',
      selector: '#c792ea',
      variable: '#d6deeb',
      regex: '#ecc48d',
      className: '#ffcb8b',
    },
  },
  {
    id: 'nord',
    name: 'Nord',
    mode: 'dark',
    description: 'An arctic, north-bluish clean color palette with frosty accents.',
    author: 'Arctic Ice Studio',
    colors: {
      bg: '#2e3440',
      fg: '#d8dee9',
      gutterBg: '#242933',
      gutterBorder: '#3b4252',
      gutterText: '#4c566a',
      selectionBg: '#434c5e',
      caretColor: '#d8dee9',
      headerBg: '#1e222a',
      headerBorder: '#3b4252',
      activeLineBg: '#353c4a',
      swatches: ['#2e3440', '#81a1c1', '#a3be8c', '#88c0d0'],
    },
    tokens: {
      comment: '#616e88',
      keyword: '#81a1c1',
      string: '#a3be8c',
      number: '#b48ead',
      function: '#88c0d0',
      tag: '#81a1c1',
      attrName: '#8fbcbb',
      attrValue: '#a3be8c',
      operator: '#81a1c1',
      punctuation: '#eceff4',
      boolean: '#b48ead',
      property: '#88c0d0',
      selector: '#88c0d0',
      variable: '#d8dee9',
      regex: '#ebcb8b',
      className: '#8fbcbb',
    },
  },
  {
    id: 'vscode-light',
    name: 'VS Code Light+',
    mode: 'light',
    description: 'Classic Microsoft high-visibility light theme with strong blue keywords.',
    author: 'Microsoft',
    colors: {
      bg: '#ffffff',
      fg: '#1e1e1e',
      gutterBg: '#f3f3f3',
      gutterBorder: '#e5e5e5',
      gutterText: '#6e6e6e',
      selectionBg: '#add6ff',
      caretColor: '#000000',
      headerBg: '#f3f3f3',
      headerBorder: '#e5e5e5',
      activeLineBg: '#f8f9fa',
      swatches: ['#ffffff', '#0000ff', '#a31515', '#795e26'],
    },
    tokens: {
      comment: '#008000',
      keyword: '#0000ff',
      string: '#a31515',
      number: '#098658',
      function: '#795e26',
      tag: '#800000',
      attrName: '#ff0000',
      attrValue: '#0000ff',
      operator: '#000000',
      punctuation: '#000000',
      boolean: '#0000ff',
      property: '#001080',
      selector: '#800000',
      variable: '#001080',
      regex: '#811f3f',
      className: '#267f99',
    },
  },
];

export const DEFAULT_DARK_THEME_ID = 'dracula';
export const DEFAULT_LIGHT_THEME_ID = 'github-light';

export function getThemeById(id: string): EditorTheme {
  const found = EDITOR_THEMES.find(t => t.id === id);
  if (found) return found;
  return EDITOR_THEMES[0];
}

/**
 * Generates an isolated CSS string for syntax tokens for a specific theme.
 */
export function generateThemeCss(theme: EditorTheme, scopeSelector: string = '.tryit-editor-surface'): string {
  const { tokens, colors } = theme;
  return `
    ${scopeSelector} {
      --editor-bg: ${colors.bg};
      --editor-fg: ${colors.fg};
      --editor-gutter-bg: ${colors.gutterBg};
      --editor-gutter-border: ${colors.gutterBorder};
      --editor-gutter-text: ${colors.gutterText};
      --editor-selection-bg: ${colors.selectionBg};
      --editor-caret-color: ${colors.caretColor};
      --editor-header-bg: ${colors.headerBg};
      --editor-header-border: ${colors.headerBorder};
      background-color: ${colors.bg};
      color: ${colors.fg};
    }
    ${scopeSelector} ::selection {
      background-color: ${colors.selectionBg} !important;
    }
    ${scopeSelector} .token.comment,
    ${scopeSelector} .token.prolog,
    ${scopeSelector} .token.doctype,
    ${scopeSelector} .token.cdata {
      color: ${tokens.comment} !important;
      font-style: italic;
    }
    ${scopeSelector} .token.punctuation {
      color: ${tokens.punctuation} !important;
    }
    ${scopeSelector} .token.property,
    ${scopeSelector} .token.tag,
    ${scopeSelector} .token.constant,
    ${scopeSelector} .token.symbol,
    ${scopeSelector} .token.deleted {
      color: ${tokens.tag} !important;
    }
    ${scopeSelector} .token.boolean,
    ${scopeSelector} .token.number {
      color: ${tokens.number} !important;
    }
    ${scopeSelector} .token.selector,
    ${scopeSelector} .token.attr-name,
    ${scopeSelector} .token.string,
    ${scopeSelector} .token.char,
    ${scopeSelector} .token.builtin,
    ${scopeSelector} .token.inserted {
      color: ${tokens.string} !important;
    }
    ${scopeSelector} .token.attr-name {
      color: ${tokens.attrName} !important;
    }
    ${scopeSelector} .token.attr-value {
      color: ${tokens.attrValue} !important;
    }
    ${scopeSelector} .token.operator,
    ${scopeSelector} .token.entity,
    ${scopeSelector} .token.url {
      color: ${tokens.operator} !important;
    }
    ${scopeSelector} .token.keyword {
      color: ${tokens.keyword} !important;
      font-weight: 600;
    }
    ${scopeSelector} .token.function,
    ${scopeSelector} .token.class-name {
      color: ${tokens.function} !important;
    }
    ${scopeSelector} .token.regex,
    ${scopeSelector} .token.important,
    ${scopeSelector} .token.variable {
      color: ${tokens.variable} !important;
    }
  `;
}
