// CSS Course content — part 3 of 4
// Modules 4-6: Text and Fonts, CSS Box Model, Display and Positioning
import { LessonContent } from '../../types';

// ==============================
// MODULE 4: Text and Fonts
// ==============================

// LESSON: Text Color
export const cssTextColorContent: LessonContent = {
  heroTagline: "Paint your words any color",
  introduction: "The color property sets the color of text inside an element. It is inherited, so setting it on a container colors all the text inside unless a child overrides it.",
  definition: {
    term: "color",
    explanation: "The CSS property that sets the foreground text color of an element."
  },
  whyItMatters: "Readable text color against the background is the foundation of every design — poor contrast makes sites unusable.",
  realWorldAnalogy: {
    title: "Understanding text color",
    story: "color is like ink in a pen: everything you write with that pen comes out in the ink's color.",
    comparison: [
      { item: "color", meaning: "The ink color in the pen." },
      { item: "Inheritance", meaning: "Lending the pen to everyone inside the container." }
    ]
  },
  syntaxStructure: `p {
  color: #222222;
}`,
  codeExample: `body {
  color: #222222;
}

.warning {
  color: #b91c1c;
}`,
  codeAnnotations: [
    { lineOrToken: "body { color: #222222; }", description: "Sets a readable dark gray as the default text color." },
    { lineOrToken: ".warning", description: "Overrides to red for warning messages only." }
  ],
  commonMistakes: [
    { wrong: "color: lightyellow; on a white background", correct: "color: #333; on a white background", reason: "Light text on a light background is unreadable — always check contrast." }
  ],
  tryItYourself: {
    html: `<p>Normal text</p>\n<p class="warning">Warning text</p>`,
    css: `p {\n  color: #222222;\n}\n.warning {\n  color: #b91c1c;\n}`,
    instructions: "Change #b91c1c to darkorange."
  },
  takeaways: [
    "color sets text color and is inherited.",
    "Children can override an inherited color.",
    "Always keep strong contrast with the background."
  ],
  quizQuestions: [
    { id: "css-m4l1-q1", question: "Which property sets text color?", options: ["color", "text-color", "font-color", "ink"], correctAnswerIndex: 0, explanation: "color sets the foreground text color." },
    { id: "css-m4l1-q2", question: "Is color inherited by child elements?", options: ["Yes, unless overridden", "No, never", "Only on Mondays", "Only for headings"], correctAnswerIndex: 0, explanation: "color inherits down the tree until a rule overrides it." }
  ]
};

// LESSON: Text Alignment
export const cssTextAlignmentContent: LessonContent = {
  heroTagline: "Line up text left, right, center, or justified",
  introduction: "text-align controls the horizontal alignment of text inside its container: left, right, center, or justify. It affects inline content, not the block box itself.",
  definition: {
    term: "text-align",
    explanation: "The property that aligns inline text horizontally within its containing block."
  },
  whyItMatters: "Centered headings, right-aligned prices, and justified articles all come from this one property.",
  realWorldAnalogy: {
    title: "Understanding text alignment",
    story: "text-align is like arranging chairs in a room: left pushes them to the wall, center lines them up in the middle.",
    comparison: [
      { item: "center", meaning: "Chairs lined up in the middle of the room." },
      { item: "justify", meaning: "Chairs spread to touch both walls evenly." }
    ]
  },
  syntaxStructure: `h1 {
  text-align: center;
}`,
  codeExample: `h1 {
  text-align: center;
}

.price {
  text-align: right;
}

.article {
  text-align: justify;
}`,
  codeAnnotations: [
    { lineOrToken: "text-align: center;", description: "Centers heading text within its container." },
    { lineOrToken: "text-align: justify;", description: "Stretches lines to fill the full width." }
  ],
  commonMistakes: [
    { wrong: "text-align: center; expecting the div box itself to center", correct: "margin: 0 auto; to center the box", reason: "text-align centers text inside the box, not the box on the page." }
  ],
  tryItYourself: {
    html: `<h1>Centered title</h1>\n<p class="price">$49</p>`,
    css: `h1 {\n  text-align: center;\n}\n.price {\n  text-align: right;\n}`,
    instructions: "Change right to left and watch the price jump."
  },
  takeaways: [
    "text-align aligns text inside its container.",
    "Values: left, right, center, justify.",
    "It does not move the container box itself."
  ],
  quizQuestions: [
    { id: "css-m4l2-q1", question: "Which value centers text?", options: ["center", "middle", "centered", "align-center"], correctAnswerIndex: 0, explanation: "text-align: center centers inline content." },
    { id: "css-m4l2-q2", question: "Does text-align move the block box itself?", options: ["No, only the text inside it", "Yes, it centers the box", "It deletes the box", "It rotates the box"], correctAnswerIndex: 0, explanation: "text-align affects inline content, not the box position." }
  ]
};

// LESSON: Text Decoration
export const cssTextDecorationContent: LessonContent = {
  heroTagline: "Underlines, overlines, and strike-throughs",
  introduction: "text-decoration adds lines to text: underline, overline, or line-through. Links are underlined by default, and removing that underline is one of the most common CSS tasks.",
  definition: {
    term: "text-decoration",
    explanation: "The property that draws decorative lines on text — under, over, or through it."
  },
  whyItMatters: "Clean link styling and sale-price strike-throughs both depend on controlling text decoration.",
  realWorldAnalogy: {
    title: "Understanding text decoration",
    story: "text-decoration is like a teacher's red pen: underlining key words, striking through mistakes.",
    comparison: [
      { item: "underline", meaning: "Underlining a key word." },
      { item: "line-through", meaning: "Striking through a mistake." }
    ]
  },
  syntaxStructure: `a {
  text-decoration: none;
}`,
  codeExample: `a {
  text-decoration: none;
  color: #2563eb;
}

.old-price {
  text-decoration: line-through;
  color: #999;
}`,
  codeAnnotations: [
    { lineOrToken: "text-decoration: none;", description: "Removes the default link underline." },
    { lineOrToken: "text-decoration: line-through;", description: "Strikes through the old price." }
  ],
  commonMistakes: [
    { wrong: "text-decoration: no-underline;", correct: "text-decoration: none;", reason: "The keyword to remove decoration is 'none'." }
  ],
  tryItYourself: {
    html: `<a href="#">A clean link</a>\n<p class="old-price">$99</p>`,
    css: `a {\n  text-decoration: none;\n}\n.old-price {\n  text-decoration: line-through;\n}`,
    instructions: "Change none to underline and watch the link underline return."
  },
  takeaways: [
    "Values: none, underline, overline, line-through.",
    "Links are underlined by default — none removes it.",
    "line-through is perfect for old prices."
  ],
  quizQuestions: [
    { id: "css-m4l3-q1", question: "How do you remove a link's underline?", options: ["text-decoration: none;", "underline: off;", "text-style: plain;", "link: none;"], correctAnswerIndex: 0, explanation: "text-decoration: none removes the underline." },
    { id: "css-m4l3-q2", question: "Which value strikes through text?", options: ["line-through", "strike", "cross-out", "delete"], correctAnswerIndex: 0, explanation: "line-through draws a line through the text." }
  ]
};

// LESSON: Text Transformation
export const cssTextTransformationContent: LessonContent = {
  heroTagline: "UPPERCASE, lowercase, or Capitalized — via CSS",
  introduction: "text-transform changes the capitalization of text without editing the HTML: uppercase, lowercase, or capitalize (first letter of each word).",
  definition: {
    term: "text-transform",
    explanation: "The property that controls text capitalization rendering."
  },
  whyItMatters: "Buttons and headings often need uppercase styling. Doing it in CSS keeps the HTML content clean and searchable in its original case.",
  realWorldAnalogy: {
    title: "Understanding text transform",
    story: "text-transform is like a name badge printer: the name stays the same in the database, but the badge prints it in ALL CAPS.",
    comparison: [
      { item: "uppercase", meaning: "Badge printed in ALL CAPS." },
      { item: "HTML content", meaning: "The name stored normally in the database." }
    ]
  },
  syntaxStructure: `h2 {
  text-transform: uppercase;
}`,
  codeExample: `h2 {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.product-name {
  text-transform: capitalize;
}`,
  codeAnnotations: [
    { lineOrToken: "text-transform: uppercase;", description: "Renders the heading in all caps." },
    { lineOrToken: "text-transform: capitalize;", description: "Capitalizes the first letter of each word." }
  ],
  commonMistakes: [
    { wrong: "Expecting screen readers to read transformed case", correct: "Screen readers read the original HTML text", reason: "text-transform only changes rendering, not the underlying content." }
  ],
  tryItYourself: {
    html: `<h2>sale ends sunday</h2>`,
    css: `h2 {\n  text-transform: uppercase;\n}`,
    instructions: "Change uppercase to capitalize and watch each word's first letter rise."
  },
  takeaways: [
    "Values: uppercase, lowercase, capitalize, none.",
    "It changes rendering, not the HTML content.",
    "Great for headings and buttons."
  ],
  quizQuestions: [
    { id: "css-m4l4-q1", question: "Which value makes text ALL CAPS?", options: ["uppercase", "big", "caps-lock", "upper"], correctAnswerIndex: 0, explanation: "text-transform: uppercase renders all capital letters." },
    { id: "css-m4l4-q2", question: "Does text-transform change the HTML content?", options: ["No, only how it renders", "Yes, it rewrites the HTML", "It deletes the text", "It copies the text"], correctAnswerIndex: 0, explanation: "It only affects rendering; the source text is untouched." }
  ]
};

// LESSON: Letter Spacing
export const cssLetterSpacingContent: LessonContent = {
  heroTagline: "Spread letters out or pull them tight",
  introduction: "letter-spacing adds space between characters. A little extra spacing gives headings an elegant, airy feel; negative values pull letters tighter.",
  definition: {
    term: "letter-spacing",
    explanation: "The property that sets the space between characters in text."
  },
  whyItMatters: "Wide-tracked uppercase headings look premium and are easier to scan — a classic designer trick with one property.",
  realWorldAnalogy: {
    title: "Understanding letter spacing",
    story: "letter-spacing is like spacing out letters on a signboard: spread them for elegance, squeeze them to fit more words.",
    comparison: [
      { item: "2px", meaning: "Letters standing with room between them." },
      { item: "-1px", meaning: "Letters standing shoulder to shoulder." }
    ]
  },
  syntaxStructure: `h1 {
  letter-spacing: 4px;
}`,
  codeExample: `.eyebrow {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  color: #666;
}`,
  codeAnnotations: [
    { lineOrToken: "letter-spacing: 3px;", description: "Adds 3px between every character." },
    { lineOrToken: "text-transform: uppercase;", description: "Pairs beautifully with wide tracking." }
  ],
  commonMistakes: [
    { wrong: "letter-spacing: 3; (no unit)", correct: "letter-spacing: 3px;", reason: "Letter spacing needs a length unit like px or em." }
  ],
  tryItYourself: {
    html: `<p class="eyebrow">New collection</p>`,
    css: `.eyebrow {\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}`,
    instructions: "Change 3px to 8px and watch the letters spread dramatically."
  },
  takeaways: [
    "letter-spacing controls space between characters.",
    "Positive values spread letters; negative tighten them.",
    "Always include a unit like px."
  ],
  quizQuestions: [
    { id: "css-m4l5-q1", question: "What does letter-spacing: 4px do?", options: ["Adds 4px between characters", "Makes the font 4px tall", "Adds 4px of padding", "Moves text 4px right"], correctAnswerIndex: 0, explanation: "It inserts 4px of space between each character." },
    { id: "css-m4l5-q2", question: "Which value tightens letters together?", options: ["A negative value like -1px", "A huge positive value", "The word tight", "auto"], correctAnswerIndex: 0, explanation: "Negative letter-spacing pulls characters closer." }
  ]
};

// LESSON: Word Spacing
export const cssWordSpacingContent: LessonContent = {
  heroTagline: "Control the gaps between words",
  introduction: "word-spacing sets the space between words. It is the word-level cousin of letter-spacing, useful for stylized headlines and justified text fine-tuning.",
  definition: {
    term: "word-spacing",
    explanation: "The property that sets the space between words in text."
  },
  whyItMatters: "Display headlines with stretched word gaps create a distinctive editorial look you cannot get with letter-spacing alone.",
  realWorldAnalogy: {
    title: "Understanding word spacing",
    story: "word-spacing is like the gaps between train cars: letter-spacing adjusts seats inside a car, word-spacing adjusts the couplings between cars.",
    comparison: [
      { item: "word-spacing", meaning: "Gaps between train cars." },
      { item: "letter-spacing", meaning: "Space between seats inside one car." }
    ]
  },
  syntaxStructure: `h1 {
  word-spacing: 10px;
}`,
  codeExample: `.display {
  font-size: 48px;
  word-spacing: 12px;
  text-transform: uppercase;
}`,
  codeAnnotations: [
    { lineOrToken: "word-spacing: 12px;", description: "Adds 12px between each word." },
    { lineOrToken: "font-size: 48px;", description: "Large display type where word gaps are visible." }
  ],
  commonMistakes: [
    { wrong: "Using word-spacing to indent a paragraph", correct: "Use text-indent or padding for indentation", reason: "word-spacing affects every word gap, not just the first line." }
  ],
  tryItYourself: {
    html: `<h1 class="display">Big bold statement</h1>`,
    css: `.display {\n  word-spacing: 12px;\n}`,
    instructions: "Change 12px to -4px and watch the words squeeze together."
  },
  takeaways: [
    "word-spacing adjusts gaps between words only.",
    "It is different from letter-spacing.",
    "Useful for stylized headlines."
  ],
  quizQuestions: [
    { id: "css-m4l6-q1", question: "What does word-spacing affect?", options: ["Gaps between words", "Gaps between letters", "Line height", "Paragraph margins"], correctAnswerIndex: 0, explanation: "word-spacing sets the space between words." },
    { id: "css-m4l6-q2", question: "How is word-spacing different from letter-spacing?", options: ["Word-spacing targets word gaps; letter-spacing targets character gaps", "They are the same", "Word-spacing only works on images", "Letter-spacing is deprecated"], correctAnswerIndex: 0, explanation: "Each property targets a different level of spacing." }
  ]
};

// LESSON: Line Height
export const cssLineHeightContent: LessonContent = {
  heroTagline: "Give your text room to breathe",
  introduction: "line-height sets the vertical space between lines of text. A value like 1.6 means each line is 1.6 times the font size tall — the single biggest readability lever in CSS.",
  definition: {
    term: "line-height",
    explanation: "The property that sets the height of each line box, controlling vertical rhythm of text."
  },
  whyItMatters: "Cramped lines strain eyes; generous line-height makes long articles comfortable to read. Designers obsess over this number.",
  realWorldAnalogy: {
    title: "Understanding line height",
    story: "line-height is like the spacing between shelves: too tight and books jam; well-spaced and everything is easy to grab.",
    comparison: [
      { item: "1.6", meaning: "Comfortably spaced shelves." },
      { item: "1.0", meaning: "Shelves jammed with no breathing room." }
    ]
  },
  syntaxStructure: `p {
  line-height: 1.6;
}`,
  codeExample: `article p {
  font-size: 18px;
  line-height: 1.7;
  max-width: 65ch;
}`,
  codeAnnotations: [
    { lineOrToken: "line-height: 1.7;", description: "Unitless multiplier — 1.7 × the font size." },
    { lineOrToken: "max-width: 65ch;", description: "Limits line length for comfortable reading." }
  ],
  commonMistakes: [
    { wrong: "line-height: 24px; on a parent with varying font sizes", correct: "line-height: 1.5; (unitless)", reason: "Unitless values scale with each element's font size; fixed px does not." }
  ],
  tryItYourself: {
    html: `<p>Line one of a paragraph.<br>Line two of a paragraph.<br>Line three of a paragraph.</p>`,
    css: `p {\n  line-height: 1.7;\n}`,
    instructions: "Change 1.7 to 1.0 and feel how cramped the text becomes."
  },
  takeaways: [
    "line-height controls vertical space between lines.",
    "Prefer unitless values like 1.5 or 1.6.",
    "Body text reads best around 1.5–1.7."
  ],
  quizQuestions: [
    { id: "css-m4l7-q1", question: "What does line-height: 1.6 mean?", options: ["Each line is 1.6× the font size tall", "The font is 1.6px", "There are 1.6 lines", "The margin is 1.6px"], correctAnswerIndex: 0, explanation: "Unitless line-height multiplies the element's font size." },
    { id: "css-m4l7-q2", question: "Why prefer unitless line-height over px?", options: ["It scales with each font size", "It loads faster", "It works only on mobile", "It changes colors"], correctAnswerIndex: 0, explanation: "Unitless values adapt when font sizes change." }
  ]
};

// LESSON: Font Size
export const cssFontSizeContent: LessonContent = {
  heroTagline: "How big your text appears",
  introduction: "font-size sets the size of text. Use px for fixed sizes, em for sizes relative to the parent, and rem for sizes relative to the root — rem keeps whole-page scaling predictable.",
  definition: {
    term: "font-size",
    explanation: "The property that sets how large text renders, in units like px, em, or rem."
  },
  whyItMatters: "Type hierarchy — big headings, medium subheads, small body — is built entirely from font-size choices.",
  realWorldAnalogy: {
    title: "Understanding font size units",
    story: "Font units are like clothing sizes: px is a fixed size, em is 'relative to your parent's size', rem is 'relative to the store's standard mannequin'.",
    comparison: [
      { item: "px", meaning: "Fixed size, like a size-10 shoe." },
      { item: "rem", meaning: "Relative to the root size — scales the whole outfit together." }
    ]
  },
  syntaxStructure: `h1 {
  font-size: 32px;
}`,
  codeExample: `h1 {
  font-size: 2.5rem;
}

p {
  font-size: 1rem;
}

small {
  font-size: 0.875rem;
}`,
  codeAnnotations: [
    { lineOrToken: "font-size: 2.5rem;", description: "2.5 × the root font size — a large heading." },
    { lineOrToken: "font-size: 1rem;", description: "Exactly the root size — standard body text." }
  ],
  commonMistakes: [
    { wrong: "Setting every size in px, breaking user zoom preferences", correct: "Use rem for text sizes", reason: "rem respects the user's browser font settings; px does not scale." }
  ],
  tryItYourself: {
    html: `<h1>Heading</h1>\n<p>Body text</p>`,
    css: `h1 {\n  font-size: 2.5rem;\n}\np {\n  font-size: 1rem;\n}`,
    instructions: "Change 2.5rem to 4rem and watch the heading grow."
  },
  takeaways: [
    "font-size sets text size.",
    "px is fixed; rem scales with the root size.",
    "Use rem for accessible, scalable typography."
  ],
  quizQuestions: [
    { id: "css-m4l8-q1", question: "What is 1rem relative to?", options: ["The root element's font size", "The parent's padding", "The screen width", "The image size"], correctAnswerIndex: 0, explanation: "rem units are relative to the root (<html>) font size." },
    { id: "css-m4l8-q2", question: "Why is rem better than px for body text?", options: ["It respects user font-size settings", "It loads faster", "It uses less code", "It works offline"], correctAnswerIndex: 0, explanation: "rem scales with browser settings, keeping text accessible." }
  ]
};

// LESSON: Font Family
export const cssFontFamilyContent: LessonContent = {
  heroTagline: "Choose the typeface personality",
  introduction: "font-family picks the typeface — Arial, Georgia, or a custom web font. List fallbacks separated by commas so text still looks right if the first choice is missing.",
  definition: {
    term: "font-family",
    explanation: "The property that sets the typeface, with a fallback list in case a font is unavailable."
  },
  whyItMatters: "Typography defines a site's personality. A font stack guarantees your design survives on any device.",
  realWorldAnalogy: {
    title: "Understanding font stacks",
    story: "A font stack is like a dinner guest list with backups: invite Arial first, but if she cannot come, Georgia steps in.",
    comparison: [
      { item: "First font", meaning: "The preferred guest." },
      { item: "sans-serif", meaning: "The reliable backup who always shows up." }
    ]
  },
  syntaxStructure: `body {
  font-family: Arial, Helvetica, sans-serif;
}`,
  codeExample: `body {
  font-family: "Segoe UI", system-ui, sans-serif;
}

code {
  font-family: "Courier New", monospace;
}`,
  codeAnnotations: [
    { lineOrToken: '"Segoe UI", system-ui, sans-serif', description: "Tries each font in order, ending with a generic family." },
    { lineOrToken: "monospace", description: "Generic family where every character has equal width." }
  ],
  commonMistakes: [
    { wrong: "font-family: Arial; with no fallback", correct: "font-family: Arial, Helvetica, sans-serif;", reason: "Without fallbacks, missing fonts drop to the browser default unpredictably." }
  ],
  tryItYourself: {
    html: `<p>Try different typefaces</p>`,
    css: `p {\n  font-family: Georgia, serif;\n}`,
    instructions: "Change Georgia to Verdana and compare the look."
  },
  takeaways: [
    "font-family sets the typeface.",
    "Always list fallback fonts ending with a generic family.",
    "Quote font names that contain spaces."
  ],
  quizQuestions: [
    { id: "css-m4l9-q1", question: "Why list multiple fonts in font-family?", options: ["As fallbacks if a font is missing", "To make text rainbow", "To speed up loading", "It is required by HTML"], correctAnswerIndex: 0, explanation: "The browser tries each font in order until one is available." },
    { id: "css-m4l9-q2", question: "What should a font stack end with?", options: ["A generic family like sans-serif", "A color", "A URL", "A number"], correctAnswerIndex: 0, explanation: "Generic families always exist, guaranteeing a usable font." }
  ]
};

// LESSON: Font Weight
export const cssFontWeightContent: LessonContent = {
  heroTagline: "From thin whispers to bold shouts",
  introduction: "font-weight controls text thickness: normal, bold, or numeric values from 100 (thin) to 900 (extra bold). Numbers give finer control than the keywords.",
  definition: {
    term: "font-weight",
    explanation: "The property that sets how thick or thin text strokes appear."
  },
  whyItMatters: "Weight creates hierarchy: bold headings, medium subheads, regular body. It guides the reader's eye without changing size.",
  realWorldAnalogy: {
    title: "Understanding font weight",
    story: "font-weight is like pen pressure: press lightly for thin elegant lines (300), press hard for bold marker strokes (700).",
    comparison: [
      { item: "400", meaning: "Normal pen pressure — regular text." },
      { item: "700", meaning: "Heavy marker — same as bold." }
    ]
  },
  syntaxStructure: `strong {
  font-weight: 700;
}`,
  codeExample: `h1 {
  font-weight: 800;
}

.subtitle {
  font-weight: 500;
}

p {
  font-weight: 400;
}`,
  codeAnnotations: [
    { lineOrToken: "font-weight: 800;", description: "Extra-bold heading." },
    { lineOrToken: "font-weight: 400;", description: "Normal body text weight." }
  ],
  commonMistakes: [
    { wrong: "font-weight: bold; expecting fine control", correct: "font-weight: 600; for semibold", reason: "Numeric values offer steps between normal and bold that keywords cannot." }
  ],
  tryItYourself: {
    html: `<p class="heavy">Heavy text</p>`,
    css: `.heavy {\n  font-weight: 700;\n}`,
    instructions: "Change 700 to 300 and watch the text go thin."
  },
  takeaways: [
    "font-weight sets text thickness.",
    "Keywords: normal (400) and bold (700).",
    "Numbers 100–900 give finer steps."
  ],
  quizQuestions: [
    { id: "css-m4l10-q1", question: "Which number equals bold?", options: ["700", "100", "400", "9000"], correctAnswerIndex: 0, explanation: "700 is the numeric equivalent of bold." },
    { id: "css-m4l10-q2", question: "What is the normal font-weight number?", options: ["400", "0", "1000", "50"], correctAnswerIndex: 0, explanation: "400 is the normal weight." }
  ]
};

// LESSON: Font Style
export const cssFontStyleContent: LessonContent = {
  heroTagline: "Italic, oblique, or proudly upright",
  introduction: "font-style makes text italic or oblique, or forces it back to normal. Italic is the classic choice for quotes, citations, and emphasis.",
  definition: {
    term: "font-style",
    explanation: "The property that slants text into italic or oblique, or resets it to normal."
  },
  whyItMatters: "Quotes, book titles, and foreign words are conventionally italic — font-style applies that convention in one line.",
  realWorldAnalogy: {
    title: "Understanding font style",
    story: "font-style is like handwriting slant: upright is print, italic is a flowing cursive lean.",
    comparison: [
      { item: "italic", meaning: "Cursive-leaning designed letterforms." },
      { item: "normal", meaning: "Upright print letters." }
    ]
  },
  syntaxStructure: `em {
  font-style: italic;
}`,
  codeExample: `blockquote {
  font-style: italic;
  border-left: 3px solid #ccc;
  padding-left: 16px;
  color: #555;
}`,
  codeAnnotations: [
    { lineOrToken: "font-style: italic;", description: "Slants the quote text." },
    { lineOrToken: "border-left: 3px solid #ccc;", description: "Visual quote marker alongside the italic." }
  ],
  commonMistakes: [
    { wrong: "Using <i> tags everywhere for italics", correct: "Use font-style: italic in CSS", reason: "Styling belongs in CSS; <i> in HTML mixes presentation into content." }
  ],
  tryItYourself: {
    html: `<blockquote>To be, or not to be.</blockquote>`,
    css: `blockquote {\n  font-style: italic;\n}`,
    instructions: "Change italic to normal and watch the slant disappear."
  },
  takeaways: [
    "font-style: italic slants text.",
    "oblique is a simpler mechanical slant.",
    "normal forces upright text."
  ],
  quizQuestions: [
    { id: "css-m4l11-q1", question: "Which value slants text like handwriting?", options: ["italic", "bold", "underline", "slanty"], correctAnswerIndex: 0, explanation: "font-style: italic renders slanted letterforms." },
    { id: "css-m4l11-q2", question: "How do you force text back to upright?", options: ["font-style: normal;", "font-style: straight;", "font-style: off;", "font-style: plain;"], correctAnswerIndex: 0, explanation: "normal resets any inherited italic styling." }
  ]
};

// LESSON: Web Fonts
export const cssWebFontsContent: LessonContent = {
  heroTagline: "Use any typeface from the internet",
  introduction: "Web fonts let you load custom typefaces — like Google Fonts — so your site is not limited to fonts installed on the visitor's computer. One <link> in the head unlocks thousands of typefaces.",
  definition: {
    term: "Web fonts",
    explanation: "Custom font files loaded over the internet and applied with font-family."
  },
  whyItMatters: "Brand typography is a huge part of modern design. Web fonts make any typeface available to every visitor.",
  realWorldAnalogy: {
    title: "Understanding web fonts",
    story: "Web fonts are like streaming music: instead of only playing CDs you own (system fonts), you stream any song (typeface) on demand.",
    comparison: [
      { item: "Google Fonts link", meaning: "The streaming service." },
      { item: "font-family", meaning: "Pressing play on a chosen song." }
    ]
  },
  syntaxStructure: `<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet">`,
  codeExample: `/* In <head>: Google Fonts link for Roboto */
body {
  font-family: "Roboto", Arial, sans-serif;
}

h1 {
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 700;
}`,
  codeAnnotations: [
    { lineOrToken: "Google Fonts link", description: "Loads the Roboto font files in the document head." },
    { lineOrToken: '"Roboto", Arial, sans-serif', description: "Uses Roboto first, with system fallbacks." }
  ],
  commonMistakes: [
    { wrong: "Loading 8 font families and 10 weights on one page", correct: "Load only the families and weights you use", reason: "Every font file adds download time — keep it lean." }
  ],
  tryItYourself: {
    html: `<h1>Beautiful type</h1>`,
    css: `h1 {\n  font-family: Georgia, serif;\n}`,
    instructions: "Imagine swapping Georgia for a Google Font — change the stack and compare."
  },
  takeaways: [
    "Web fonts load custom typefaces over the internet.",
    "Google Fonts is the easiest free source.",
    "Load only the weights you actually use."
  ],
  quizQuestions: [
    { id: "css-m4l12-q1", question: "What do web fonts allow?", options: ["Using custom typefaces not installed on the visitor's device", "Faster internet", "Bigger images", "Free hosting"], correctAnswerIndex: 0, explanation: "Web fonts download the typeface so anyone can see it." },
    { id: "css-m4l12-q2", question: "Where does a Google Fonts <link> go?", options: ["In the document <head>", "At the end of <body>", "Inside a <p>", "In the CSS file"], correctAnswerIndex: 0, explanation: "Font links load in the head so text renders correctly." }
  ]
};

// ==============================
// MODULE 5: CSS Box Model
// ==============================

// LESSON: Introduction to Box Model
export const cssBoxModelIntroContent: LessonContent = {
  heroTagline: "Every element is a box with four layers",
  introduction: "The box model says every HTML element is a rectangular box made of four layers: content in the middle, then padding, then border, then margin on the outside.",
  definition: {
    term: "CSS box model",
    explanation: "The model describing how every element's total size is built from content, padding, border, and margin."
  },
  whyItMatters: "Layout bugs — elements too wide, gaps you did not expect — almost always come from misunderstanding these four layers.",
  realWorldAnalogy: {
    title: "Understanding the box layers",
    story: "An element is like a framed photo on a wall: the photo is the content, the mat is padding, the frame is the border, and the wall space around it is margin.",
    comparison: [
      { item: "Padding", meaning: "The mat between photo and frame." },
      { item: "Margin", meaning: "Empty wall space around the frame." }
    ]
  },
  syntaxStructure: `.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}`,
  codeExample: `.box {
  width: 200px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
  background: #eef;
}`,
  codeAnnotations: [
    { lineOrToken: "padding: 20px;", description: "Inner space between content and border." },
    { lineOrToken: "margin: 10px;", description: "Outer space between this box and neighbors." }
  ],
  commonMistakes: [
    { wrong: "Thinking width: 200px includes padding", correct: "By default, padding adds on top of width", reason: "Default box-sizing: content-box means width counts content only." }
  ],
  tryItYourself: {
    html: `<div class="box">Box layers</div>`,
    css: `.box {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 10px;\n  background: #eef;\n}`,
    instructions: "Double the padding to 40px and watch the box grow."
  },
  takeaways: [
    "Four layers: content, padding, border, margin.",
    "Padding is inside the border; margin is outside.",
    "Total size = all layers combined."
  ],
  quizQuestions: [
    { id: "css-m5l1-q1", question: "What are the four box model layers, inside out?", options: ["Content, padding, border, margin", "Margin, border, padding, content", "Border, content, margin, padding", "Padding, margin, content, border"], correctAnswerIndex: 0, explanation: "Inside out: content, padding, border, margin." },
    { id: "css-m5l1-q2", question: "Which layer sits outside the border?", options: ["Margin", "Padding", "Content", "Outline"], correctAnswerIndex: 0, explanation: "Margin is the outermost layer, beyond the border." }
  ]
};

// LESSON: Width
export const cssWidthContent: LessonContent = {
  heroTagline: "How wide an element stretches",
  introduction: "width sets the horizontal size of an element's content area. Use px for fixed widths, % for widths relative to the parent, and max-width to keep elements from growing too wide.",
  definition: {
    term: "width",
    explanation: "The property that sets the horizontal size of an element."
  },
  whyItMatters: "Readable layouts need controlled widths — text lines that stretch across a huge monitor are exhausting to read.",
  realWorldAnalogy: {
    title: "Understanding width",
    story: "width is like choosing a table size: a fixed px table never changes, a % table grows with the dining room.",
    comparison: [
      { item: "300px", meaning: "A fixed-size table." },
      { item: "50%", meaning: "A table half as wide as the room." }
    ]
  },
  syntaxStructure: `.box {
  width: 300px;
}`,
  codeExample: `.sidebar {
  width: 250px;
}

.content {
  width: 70%;
  max-width: 800px;
}`,
  codeAnnotations: [
    { lineOrToken: "width: 250px;", description: "Fixed 250px wide sidebar." },
    { lineOrToken: "max-width: 800px;", description: "Content grows to 70% but never past 800px." }
  ],
  commonMistakes: [
    { wrong: "width: 100%; plus padding causing overflow", correct: "Add box-sizing: border-box;", reason: "Without border-box, padding adds to the 100% width and overflows." }
  ],
  tryItYourself: {
    html: `<div class="box">Fixed box</div>`,
    css: `.box {\n  width: 300px;\n  background: #dbeafe;\n  padding: 16px;\n}`,
    instructions: "Change 300px to 50% and watch the box become relative."
  },
  takeaways: [
    "px gives fixed widths; % gives relative widths.",
    "max-width caps growth on large screens.",
    "Pair % widths with box-sizing: border-box."
  ],
  quizQuestions: [
    { id: "css-m5l2-q1", question: "What does width: 50% mean?", options: ["Half the parent's width", "50 pixels", "Half the screen always", "50 characters"], correctAnswerIndex: 0, explanation: "Percentage widths are relative to the parent element." },
    { id: "css-m5l2-q2", question: "What does max-width do?", options: ["Caps how wide an element can grow", "Sets the minimum width", "Hides the element", "Centers the element"], correctAnswerIndex: 0, explanation: "max-width limits growth while allowing smaller sizes." }
  ]
};

// LESSON: Height
export const cssHeightContent: LessonContent = {
  heroTagline: "How tall an element stands",
  introduction: "height sets the vertical size of an element. Unlike width, height is often left to auto so content decides the size — fixed heights risk cutting off text.",
  definition: {
    term: "height",
    explanation: "The property that sets the vertical size of an element."
  },
  whyItMatters: "Hero banners and fixed-size cards need explicit heights; text containers usually should not have one.",
  realWorldAnalogy: {
    title: "Understanding height",
    story: "height is like a bookshelf's fixed shelf height: set it too short and tall books stick out or get hidden.",
    comparison: [
      { item: "height: 200px", meaning: "A fixed shelf height." },
      { item: "height: auto", meaning: "An adjustable shelf that fits the books." }
    ]
  },
  syntaxStructure: `.hero {
  height: 400px;
}`,
  codeExample: `.hero {
  height: 400px;
  background: #1e293b;
  color: white;
}

.card {
  min-height: 150px;
}`,
  codeAnnotations: [
    { lineOrToken: "height: 400px;", description: "Fixed 400px tall banner." },
    { lineOrToken: "min-height: 150px;", description: "At least 150px, growing if content needs more." }
  ],
  commonMistakes: [
    { wrong: "height: 100px; on a text box, cutting off content", correct: "min-height: 100px;", reason: "Fixed heights clip overflowing content; min-height lets it grow." }
  ],
  tryItYourself: {
    html: `<div class="hero">Tall banner</div>`,
    css: `.hero {\n  height: 200px;\n  background: #1e293b;\n  color: white;\n}`,
    instructions: "Change 200px to 100px and see the banner shrink."
  },
  takeaways: [
    "height sets vertical size.",
    "auto (default) lets content decide the height.",
    "Prefer min-height over height for text containers."
  ],
  quizQuestions: [
    { id: "css-m5l3-q1", question: "What is the default height behavior?", options: ["auto — content decides the height", "100px", "Full screen", "Zero"], correctAnswerIndex: 0, explanation: "Default height is auto, growing with content." },
    { id: "css-m5l3-q2", question: "Why prefer min-height over height for text?", options: ["Content can grow instead of being cut off", "It loads faster", "It changes colors", "It hides scrollbars"], correctAnswerIndex: 0, explanation: "min-height sets a floor while allowing growth." }
  ]
};

// LESSON: Padding
export const cssPaddingContent: LessonContent = {
  heroTagline: "Breathing room inside the border",
  introduction: "padding adds space between an element's content and its border. It is transparent but shows the element's background, making buttons and cards feel roomy.",
  definition: {
    term: "padding",
    explanation: "Inner spacing between content and border, part of the element's background area."
  },
  whyItMatters: "Text jammed against edges looks broken. Padding is what makes buttons tappable and cards readable.",
  realWorldAnalogy: {
    title: "Understanding padding",
    story: "Padding is like the cushioning inside a shipping box: it keeps the item (content) from touching the box walls (border).",
    comparison: [
      { item: "padding: 16px", meaning: "Thick cushioning all around." },
      { item: "padding: 8px 16px", meaning: "Thin top/bottom, thick left/right cushioning." }
    ]
  },
  syntaxStructure: `.btn {
  padding: 10px 20px;
}`,
  codeExample: `.btn {
  padding: 10px 20px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
}`,
  codeAnnotations: [
    { lineOrToken: "padding: 10px 20px;", description: "10px top/bottom, 20px left/right." },
    { lineOrToken: "border-radius: 6px;", description: "Rounded corners on the padded button." }
  ],
  commonMistakes: [
    { wrong: "padding: 10px 20px 10px; misreading the order", correct: "Order is top, right, bottom, left (clockwise)", reason: "Shorthand values follow a clockwise order starting at the top." }
  ],
  tryItYourself: {
    html: `<button class="btn">Click me</button>`,
    css: `.btn {\n  padding: 10px 20px;\n  background: #2563eb;\n  color: white;\n  border: none;\n}`,
    instructions: "Change to padding: 20px 40px; and feel the button grow."
  },
  takeaways: [
    "Padding is inner space; it shows the background.",
    "Shorthand order: top, right, bottom, left.",
    "Padding makes touch targets bigger."
  ],
  quizQuestions: [
    { id: "css-m5l4-q1", question: "In padding: 10px 20px 30px 40px, which side is 30px?", options: ["Bottom", "Top", "Left", "Right"], correctAnswerIndex: 0, explanation: "Order is top, right, bottom, left — clockwise." },
    { id: "css-m5l4-q2", question: "Does padding show the element's background?", options: ["Yes", "No, it is always white", "Only on hover", "Only in Firefox"], correctAnswerIndex: 0, explanation: "Padding is inside the background painting area." }
  ]
};

// LESSON: Border
export const cssBorderContent: LessonContent = {
  heroTagline: "Outlines that frame your elements",
  introduction: "border draws a line around an element's padding box. The shorthand sets width, style, and color together: border: 2px solid #333. Styles include solid, dashed, dotted, and double.",
  definition: {
    term: "border",
    explanation: "A visible line surrounding an element, defined by width, style, and color."
  },
  whyItMatters: "Borders define cards, separate table rows, and highlight focused inputs — fundamental visual structure.",
  realWorldAnalogy: {
    title: "Understanding borders",
    story: "A border is like a picture frame: width is how thick the frame is, style is the frame design, color is the paint.",
    comparison: [
      { item: "2px", meaning: "Frame thickness." },
      { item: "dashed", meaning: "A frame made of dashes instead of solid wood." }
    ]
  },
  syntaxStructure: `.card {
  border: 1px solid #ddd;
}`,
  codeExample: `.card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
}

input:focus {
  border: 2px solid #2563eb;
  outline: none;
}`,
  codeAnnotations: [
    { lineOrToken: "border: 1px solid #e2e8f0;", description: "Thin light-gray solid border." },
    { lineOrToken: "input:focus", description: "Border changes color when the input is focused." }
  ],
  commonMistakes: [
    { wrong: "border: 2px #333; (missing style)", correct: "border: 2px solid #333;", reason: "A border needs a style keyword — without one, no border renders." }
  ],
  tryItYourself: {
    html: `<div class="card">Framed card</div>`,
    css: `.card {\n  border: 2px solid #333;\n  padding: 16px;\n}`,
    instructions: "Change solid to dashed and watch the frame style change."
  },
  takeaways: [
    "Shorthand: border: width style color.",
    "Style is required — solid, dashed, dotted, double.",
    "You can also set each side separately."
  ],
  quizQuestions: [
    { id: "css-m5l5-q1", question: "Which border declaration is complete?", options: ["border: 2px solid red;", "border: 2px red;", "border: solid;", "border: red;"], correctAnswerIndex: 0, explanation: "Width, style, and color together make a full border." },
    { id: "css-m5l5-q2", question: "What happens if you omit the border style?", options: ["No border appears", "It defaults to solid", "It defaults to dotted", "The page breaks"], correctAnswerIndex: 0, explanation: "The default style is none, so nothing renders." }
  ]
};

// LESSON: Margin
export const cssMarginContent: LessonContent = {
  heroTagline: "Space between elements",
  introduction: "margin adds transparent space outside an element's border, pushing neighbors away. margin: 0 auto on a fixed-width block centers it horizontally — the classic centering trick.",
  definition: {
    term: "margin",
    explanation: "Outer spacing outside the border that separates an element from its neighbors."
  },
  whyItMatters: "Margins create the whitespace rhythm of a page — the gaps between headings, paragraphs, and sections.",
  realWorldAnalogy: {
    title: "Understanding margin",
    story: "Margin is like personal space in a queue: invisible, but everyone can feel when it is missing.",
    comparison: [
      { item: "margin: 20px", meaning: "A comfortable arm's length of space." },
      { item: "margin: 0 auto", meaning: "Equal space left and right — centered." }
    ]
  },
  syntaxStructure: `.box {
  margin: 20px auto;
}`,
  codeExample: `.container {
  width: 800px;
  margin: 0 auto;
}

p {
  margin-bottom: 16px;
}`,
  codeAnnotations: [
    { lineOrToken: "margin: 0 auto;", description: "Zero top/bottom margin; auto sides center the block." },
    { lineOrToken: "margin-bottom: 16px;", description: "Space below each paragraph." }
  ],
  commonMistakes: [
    { wrong: "Adding margins that collapse unexpectedly between stacked blocks", correct: "Remember vertical margins collapse to the larger one", reason: "Adjacent vertical margins merge — two 20px margins make a 20px gap, not 40px." }
  ],
  tryItYourself: {
    html: `<div class="box">Centered</div>`,
    css: `.box {\n  width: 300px;\n  margin: 0 auto;\n  background: #fef3c7;\n  padding: 16px;\n  text-align: center;\n}`,
    instructions: "Change auto to 0 and watch the box snap to the left."
  },
  takeaways: [
    "Margin is outer, transparent space.",
    "margin: 0 auto centers fixed-width blocks.",
    "Vertical margins collapse into one."
  ],
  quizQuestions: [
    { id: "css-m5l6-q1", question: "How do you horizontally center a fixed-width block?", options: ["margin: 0 auto;", "text-align: center;", "padding: 0 auto;", "align: middle;"], correctAnswerIndex: 0, explanation: "Auto side margins split leftover space equally, centering the block." },
    { id: "css-m5l6-q2", question: "What happens to adjacent vertical margins?", options: ["They collapse to the larger value", "They always add up", "They cancel to zero", "They become padding"], correctAnswerIndex: 0, explanation: "Vertical margins collapse — only the bigger one counts." }
  ]
};

// LESSON: Border Radius
export const cssBorderRadiusContent: LessonContent = {
  heroTagline: "Round those sharp corners",
  introduction: "border-radius rounds element corners. 8px gives subtle rounding, 50% on a square makes a perfect circle — the trick behind round avatars and pill buttons.",
  definition: {
    term: "border-radius",
    explanation: "The property that rounds the corners of an element's border box."
  },
  whyItMatters: "Rounded corners soften designs and are everywhere: avatars, buttons, cards, badges.",
  realWorldAnalogy: {
    title: "Understanding border radius",
    story: "border-radius is like sanding the sharp corners off a wooden block: a little sanding softens edges, heavy sanding makes a ball.",
    comparison: [
      { item: "8px", meaning: "Light sanding — softly rounded corners." },
      { item: "50%", meaning: "Fully sanded into a circle." }
    ]
  },
  syntaxStructure: `.avatar {
  border-radius: 50%;
}`,
  codeExample: `.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.pill {
  border-radius: 999px;
  padding: 8px 24px;
}`,
  codeAnnotations: [
    { lineOrToken: "border-radius: 50%;", description: "On a square, makes a perfect circle." },
    { lineOrToken: "border-radius: 999px;", description: "Huge radius = pill shape on any rectangle." }
  ],
  commonMistakes: [
    { wrong: "border-radius: 50%; on a rectangle expecting a circle", correct: "Use equal width and height for a circle", reason: "50% on a rectangle makes an oval — circles need square boxes." }
  ],
  tryItYourself: {
    html: `<div class="avatar"></div>`,
    css: `.avatar {\n  width: 80px;\n  height: 80px;\n  background: #8b5cf6;\n  border-radius: 50%;\n}`,
    instructions: "Change 50% to 8px and watch the circle become a rounded square."
  },
  takeaways: [
    "border-radius rounds corners.",
    "50% on a square = perfect circle.",
    "999px makes pill shapes."
  ],
  quizQuestions: [
    { id: "css-m5l7-q1", question: "How do you make a circular avatar?", options: ["Equal width/height with border-radius: 50%;", "border-radius: 5px;", "border: circle;", "shape: round;"], correctAnswerIndex: 0, explanation: "50% radius on a square box produces a circle." },
    { id: "css-m5l7-q2", question: "What does border-radius: 999px do to a button?", options: ["Makes a pill shape", "Hides the button", "Makes it square", "Nothing"], correctAnswerIndex: 0, explanation: "An oversized radius fully rounds both ends into a pill." }
  ]
};

// LESSON: Box Sizing
export const cssBoxSizingContent: LessonContent = {
  heroTagline: "Make width mean what you think",
  introduction: "box-sizing decides what width measures. content-box (default) counts only content, so padding makes the box wider. border-box includes padding and border in the width — what you set is what you get.",
  definition: {
    term: "box-sizing",
    explanation: "The property choosing whether width/height include padding and border (border-box) or content only (content-box)."
  },
  whyItMatters: "border-box ends the classic 'why is my 100% box overflowing?' bug. Modern sites set it globally.",
  realWorldAnalogy: {
    title: "Understanding box sizing",
    story: "box-sizing is like luggage limits: content-box weighs only your clothes, border-box weighs clothes plus the suitcase — the airline's limit applies to the total.",
    comparison: [
      { item: "content-box", meaning: "Limit applies to clothes only; suitcase adds extra." },
      { item: "border-box", meaning: "Limit applies to everything together." }
    ]
  },
  syntaxStructure: `* {
  box-sizing: border-box;
}`,
  codeExample: `.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
  /* Total width stays exactly 300px */
}`,
  codeAnnotations: [
    { lineOrToken: "box-sizing: border-box;", description: "Padding and border are drawn inside the 300px." },
    { lineOrToken: "width: 300px;", description: "Total box width — exactly 300px, guaranteed." }
  ],
  commonMistakes: [
    { wrong: "width: 100%; padding: 20px; without border-box, overflowing the parent", correct: "Add box-sizing: border-box;", reason: "content-box adds padding on top of 100%, pushing past the parent." }
  ],
  tryItYourself: {
    html: `<div class="box">Exact 300px</div>`,
    css: `.box {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #333;\n  background: #e0f2fe;\n}`,
    instructions: "Remove the box-sizing line and notice the box grow wider."
  },
  takeaways: [
    "border-box includes padding and border in width.",
    "content-box (default) adds them on top.",
    "Set * { box-sizing: border-box; } globally."
  ],
  quizQuestions: [
    { id: "css-m5l8-q1", question: "With box-sizing: border-box and width: 300px, padding: 20px — total width?", options: ["300px", "340px", "260px", "320px"], correctAnswerIndex: 0, explanation: "border-box keeps the total at exactly 300px." },
    { id: "css-m5l8-q2", question: "What is the default box-sizing value?", options: ["content-box", "border-box", "padding-box", "margin-box"], correctAnswerIndex: 0, explanation: "The default is content-box." }
  ]
};

// LESSON: Box Shadow
export const cssBoxShadowContent: LessonContent = {
  heroTagline: "Lift elements off the page with shadows",
  introduction: "box-shadow adds a shadow behind an element: horizontal offset, vertical offset, blur, spread, and color. Soft shadows create depth — the signature look of modern cards.",
  definition: {
    term: "box-shadow",
    explanation: "The property that draws a shadow behind an element's box."
  },
  whyItMatters: "Shadows signal elevation: raised cards, floating buttons, modal dialogs. Depth makes interfaces feel tactile.",
  realWorldAnalogy: {
    title: "Understanding box shadow",
    story: "box-shadow is like a desk lamp casting an object's shadow on the table: lift the object higher (bigger blur) and the shadow gets softer and larger.",
    comparison: [
      { item: "0 4px 12px", meaning: "Object hovering slightly — soft small shadow." },
      { item: "0 20px 40px", meaning: "Object held high — big diffused shadow." }
    ]
  },
  syntaxStructure: `.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}`,
  codeExample: `.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}`,
  codeAnnotations: [
    { lineOrToken: "0 4px 12px rgba(0, 0, 0, 0.1)", description: "No horizontal shift, 4px down, 12px blur, faint black." },
    { lineOrToken: ".card:hover", description: "Deeper shadow on hover — the card feels lifted." }
  ],
  commonMistakes: [
    { wrong: "box-shadow: black; (color only)", correct: "box-shadow: 0 2px 6px rgba(0,0,0,0.3);", reason: "A shadow needs offsets and blur — color alone draws nothing visible." }
  ],
  tryItYourself: {
    html: `<div class="card">Shadow card</div>`,
    css: `.card {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}`,
    instructions: "Change 12px blur to 30px and watch the shadow soften."
  },
  takeaways: [
    "Syntax: x-offset, y-offset, blur, spread, color.",
    "Soft dark shadows with low opacity look modern.",
    "Bigger blur = higher elevation feel."
  ],
  quizQuestions: [
    { id: "css-m5l9-q1", question: "In box-shadow: 0 4px 12px black, what is 4px?", options: ["Vertical offset", "Blur radius", "Horizontal offset", "Spread"], correctAnswerIndex: 0, explanation: "The second value is the vertical offset." },
    { id: "css-m5l9-q2", question: "What does a larger blur radius do?", options: ["Makes the shadow softer and more spread", "Makes it darker", "Moves it left", "Deletes it"], correctAnswerIndex: 0, explanation: "Blur softens and diffuses the shadow." }
  ]
};

// LESSON: Overflow
export const cssOverflowContent: LessonContent = {
  heroTagline: "Decide what happens to overflowing content",
  introduction: "overflow controls content that is too big for its box: visible (default, spills out), hidden (clipped), scroll (always shows scrollbars), or auto (scrollbars only when needed).",
  definition: {
    term: "overflow",
    explanation: "The property deciding how content that exceeds its container's box is handled."
  },
  whyItMatters: "Long text in fixed cards, scrollable chat windows, and clipped image corners all depend on overflow.",
  realWorldAnalogy: {
    title: "Understanding overflow",
    story: "overflow is like a fish tank: visible lets water spill on the floor, hidden seals the tank, scroll adds a viewing window you can slide.",
    comparison: [
      { item: "hidden", meaning: "Sealed tank — extra water is cut off." },
      { item: "auto", meaning: "A sliding window appears only when needed." }
    ]
  },
  syntaxStructure: `.box {
  overflow: hidden;
}`,
  codeExample: `.preview {
  width: 250px;
  height: 120px;
  overflow: auto;
  border: 1px solid #ddd;
  padding: 12px;
}`,
  codeAnnotations: [
    { lineOrToken: "height: 120px;", description: "Fixed height the content may exceed." },
    { lineOrToken: "overflow: auto;", description: "Adds scrollbars only if content overflows." }
  ],
  commonMistakes: [
    { wrong: "overflow: scroll; on everything, showing disabled scrollbars", correct: "overflow: auto;", reason: "scroll forces empty scrollbars; auto shows them only when needed." }
  ],
  tryItYourself: {
    html: `<div class="preview">Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text.</div>`,
    css: `.preview {\n  width: 250px;\n  height: 80px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  padding: 12px;\n}`,
    instructions: "Change auto to hidden and watch the extra text get clipped."
  },
  takeaways: [
    "visible is the default — content spills out.",
    "hidden clips overflow; auto scrolls when needed.",
    "overflow needs a constrained width or height to matter."
  ],
  quizQuestions: [
    { id: "css-m5l10-q1", question: "Which overflow value clips content with no scrollbars?", options: ["hidden", "visible", "auto", "scroll"], correctAnswerIndex: 0, explanation: "hidden clips overflowing content silently." },
    { id: "css-m5l10-q2", question: "What is the difference between scroll and auto?", options: ["scroll always shows scrollbars; auto only when needed", "They are identical", "auto never scrolls", "scroll hides content"], correctAnswerIndex: 0, explanation: "auto is the smart choice — scrollbars appear only when content overflows." }
  ]
};

// ==============================
// MODULE 6: Display and Positioning
// ==============================

// LESSON: Display Property
export const cssDisplayPropertyContent: LessonContent = {
  heroTagline: "The master switch of layout behavior",
  introduction: "The display property decides how an element behaves in layout: block, inline, inline-block, flex, grid, or none. It is the first property to reach for when layout looks wrong.",
  definition: {
    term: "display",
    explanation: "The property that sets an element's layout behavior and formatting context."
  },
  whyItMatters: "Almost every layout technique — flexbox, grid, hiding elements — starts by setting display.",
  realWorldAnalogy: {
    title: "Understanding display",
    story: "display is like assigning roles in a play: block actors take the whole stage width, inline actors share a line, and none means the actor stays backstage.",
    comparison: [
      { item: "block", meaning: "Solo performer — full stage width." },
      { item: "inline", meaning: "Chorus line — sharing the stage row." }
    ]
  },
  syntaxStructure: `.box {
  display: block;
}`,
  codeExample: `.menu {
  display: flex;
}

.hidden {
  display: none;
}

.badge {
  display: inline-block;
}`,
  codeAnnotations: [
    { lineOrToken: "display: flex;", description: "Turns the menu into a flex container." },
    { lineOrToken: "display: none;", description: "Removes the element from layout entirely." }
  ],
  commonMistakes: [
    { wrong: "display: flexbox;", correct: "display: flex;", reason: "The value is 'flex', not 'flexbox'." }
  ],
  tryItYourself: {
    html: `<span class="badge">New</span>`,
    css: `.badge {\n  display: inline-block;\n  background: #22c55e;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 999px;\n}`,
    instructions: "Change inline-block to block and watch the badge take the full width."
  },
  takeaways: [
    "display controls layout behavior.",
    "Common values: block, inline, inline-block, flex, grid, none.",
    "Changing display is step one of most layout fixes."
  ],
  quizQuestions: [
    { id: "css-m6l1-q1", question: "Which display value removes an element from layout?", options: ["none", "block", "inline", "flex"], correctAnswerIndex: 0, explanation: "display: none removes the element as if it were not there." },
    { id: "css-m6l1-q2", question: "Which value activates flexbox on a container?", options: ["flex", "flexbox", "flexible", "row"], correctAnswerIndex: 0, explanation: "display: flex creates a flex formatting context." }
  ]
};

// LESSON: Block
export const cssBlockContent: LessonContent = {
  heroTagline: "Full-width stackers",
  introduction: "Block elements — div, p, h1, section — take the full available width and stack vertically, each starting on a new line. They respect width, height, and all margins.",
  definition: {
    term: "display: block",
    explanation: "Makes an element occupy the full width of its parent and start on a new line."
  },
  whyItMatters: "Page structure is built from blocks: headers, sections, paragraphs. Understanding block flow explains default page layout.",
  realWorldAnalogy: {
    title: "Understanding block elements",
    story: "Block elements are like shipping containers stacked on a dock: each takes the full width of its row and piles vertically.",
    comparison: [
      { item: "Full width", meaning: "Each container spans its row." },
      { item: "Vertical stacking", meaning: "Containers pile one on top of another." }
    ]
  },
  syntaxStructure: `div {
  display: block;
}`,
  codeExample: `.panel {
  display: block;
  width: 400px;
  margin: 0 auto 16px;
  padding: 20px;
  background: #f1f5f9;
}`,
  codeAnnotations: [
    { lineOrToken: "display: block;", description: "Explicit block behavior (divs are block by default)." },
    { lineOrToken: "margin: 0 auto 16px;", description: "Centers the block with space below it." }
  ],
  commonMistakes: [
    { wrong: "Expecting two divs to sit side by side", correct: "Use display: flex on the parent or inline-block", reason: "Blocks always stack vertically — side-by-side needs a different display." }
  ],
  tryItYourself: {
    html: `<div class="panel">Panel one</div>\n<div class="panel">Panel two</div>`,
    css: `.panel {\n  background: #f1f5f9;\n  padding: 20px;\n  margin-bottom: 16px;\n}`,
    instructions: "Add width: 300px; and see blocks keep stacking vertically."
  },
  takeaways: [
    "Blocks take full width and stack vertically.",
    "div, p, h1–h6, section are block by default.",
    "Blocks respect width, height, and vertical margins."
  ],
  quizQuestions: [
    { id: "css-m6l2-q1", question: "How do block elements arrange themselves?", options: ["Stacked vertically, full width", "Side by side", "Overlapping", "In a circle"], correctAnswerIndex: 0, explanation: "Blocks take full width and stack top to bottom." },
    { id: "css-m6l2-q2", question: "Which is a block element by default?", options: ["<div>", "<span>", "<a>", "<img>"], correctAnswerIndex: 0, explanation: "div is block-level; span, a, and img are inline." }
  ]
};

// LESSON: Inline
export const cssInlineContent: LessonContent = {
  heroTagline: "Flow-with-the-text elements",
  introduction: "Inline elements — span, a, strong — sit inside text lines and take only as much width as their content. They ignore width, height, and vertical margins.",
  definition: {
    term: "display: inline",
    explanation: "Makes an element flow within text, sized by its content, without breaking to a new line."
  },
  whyItMatters: "Links and highlighted words inside paragraphs are inline. Knowing their limits explains why width sometimes 'does nothing'.",
  realWorldAnalogy: {
    title: "Understanding inline elements",
    story: "Inline elements are like words in a sentence: they flow left to right and wrap naturally — you cannot set a word's height.",
    comparison: [
      { item: "span", meaning: "A word in the sentence." },
      { item: "Ignoring width", meaning: "You cannot stretch a single word wider." }
    ]
  },
  syntaxStructure: `span {
  display: inline;
}`,
  codeExample: `p {
  font-size: 18px;
}

.highlight {
  display: inline;
  background: yellow;
  padding: 0 4px;
}`,
  codeAnnotations: [
    { lineOrToken: "display: inline;", description: "Flows inside the paragraph's text line." },
    { lineOrToken: "padding: 0 4px;", description: "Horizontal padding works; vertical is limited." }
  ],
  commonMistakes: [
    { wrong: "span { width: 200px; height: 50px; } expecting a box", correct: "Use display: inline-block for sized boxes", reason: "Inline elements ignore width and height completely." }
  ],
  tryItYourself: {
    html: `<p>Some <span class="highlight">highlighted</span> text here.</p>`,
    css: `.highlight {\n  background: yellow;\n  padding: 0 4px;\n}`,
    instructions: "Add width: 200px; and notice the span ignores it."
  },
  takeaways: [
    "Inline elements flow within text lines.",
    "They ignore width, height, and vertical margins.",
    "span, a, strong are inline by default."
  ],
  quizQuestions: [
    { id: "css-m6l3-q1", question: "Which properties do inline elements ignore?", options: ["width and height", "color", "background", "font-size"], correctAnswerIndex: 0, explanation: "Inline boxes are sized by content; width/height have no effect." },
    { id: "css-m6l3-q2", question: "Which element is inline by default?", options: ["<span>", "<div>", "<p>", "<section>"], correctAnswerIndex: 0, explanation: "span is the classic inline container." }
  ]
};

// LESSON: Inline-block
export const cssInlineBlockContent: LessonContent = {
  heroTagline: "The best of both worlds",
  introduction: "inline-block elements flow side by side like inline elements but respect width, height, padding, and margins like blocks. Perfect for buttons, badges, and nav links in a row.",
  definition: {
    term: "display: inline-block",
    explanation: "Flows inline with neighbors while honoring box dimensions like a block."
  },
  whyItMatters: "Before flexbox, inline-block was how developers built horizontal menus and button rows. It is still the simplest tool for the job.",
  realWorldAnalogy: {
    title: "Understanding inline-block",
    story: "inline-block elements are like photo prints laid in a row: they sit side by side, but each has its own exact size and frame.",
    comparison: [
      { item: "Side-by-side flow", meaning: "Prints laid in a row (inline behavior)." },
      { item: "Respects width/height", meaning: "Each print has exact dimensions (block behavior)." }
    ]
  },
  syntaxStructure: `.btn {
  display: inline-block;
}`,
  codeExample: `.btn {
  display: inline-block;
  width: 120px;
  padding: 10px;
  background: #2563eb;
  color: white;
  text-align: center;
  border-radius: 6px;
  margin-right: 8px;
}`,
  codeAnnotations: [
    { lineOrToken: "display: inline-block;", description: "Buttons sit in a row yet keep their width." },
    { lineOrToken: "width: 120px;", description: "Honored — unlike plain inline." }
  ],
  commonMistakes: [
    { wrong: "Mystery gaps between inline-block items", correct: "Remove whitespace between tags or set parent font-size: 0", reason: "HTML whitespace between inline-blocks renders as small gaps." }
  ],
  tryItYourself: {
    html: `<a class="btn" href="#">One</a>\n<a class="btn" href="#">Two</a>`,
    css: `.btn {\n  display: inline-block;\n  width: 120px;\n  padding: 10px;\n  background: #2563eb;\n  color: white;\n  text-align: center;\n}`,
    instructions: "Change inline-block to block and watch the buttons stack."
  },
  takeaways: [
    "inline-block flows horizontally like inline.",
    "It respects width, height, and all margins.",
    "Ideal for buttons and items in a row."
  ],
  quizQuestions: [
    { id: "css-m6l4-q1", question: "What makes inline-block special?", options: ["Flows inline but respects width/height", "It is invisible", "It only works on divs", "It disables padding"], correctAnswerIndex: 0, explanation: "It combines inline flow with block sizing." },
    { id: "css-m6l4-q2", question: "What causes small gaps between inline-block items?", options: ["Whitespace in the HTML", "The border property", "The color property", "JavaScript"], correctAnswerIndex: 0, explanation: "Spaces and line breaks between tags render as gaps." }
  ]
};

// LESSON: None
export const cssDisplayNoneContent: LessonContent = {
  heroTagline: "Completely remove an element",
  introduction: "display: none removes an element from the page entirely — it takes no space and is invisible, as if it were never in the HTML. Toggling it with JavaScript shows and hides content.",
  definition: {
    term: "display: none",
    explanation: "Removes an element from rendering and layout completely."
  },
  whyItMatters: "Dropdown menus, modals, tabs, and mobile navs all hide and show with display: none.",
  realWorldAnalogy: {
    title: "Understanding display none",
    story: "display: none is like an actor leaving the stage: the scene rearranges as if they were never there — unlike hiding behind a curtain (visibility).",
    comparison: [
      { item: "display: none", meaning: "Actor exits — the stage reflows." },
      { item: "visibility: hidden", meaning: "Actor hides behind a curtain — the spot stays reserved." }
    ]
  },
  syntaxStructure: `.popup {
  display: none;
}`,
  codeExample: `.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal.open {
  display: block;
}`,
  codeAnnotations: [
    { lineOrToken: "display: none;", description: "Modal hidden and taking no space." },
    { lineOrToken: ".modal.open", description: "Adding the 'open' class reveals it." }
  ],
  commonMistakes: [
    { wrong: "display: none; expecting animations to run", correct: "Animate opacity/visibility for transitions", reason: "display cannot be animated — the element just pops in or out." }
  ],
  tryItYourself: {
    html: `<p>Before</p>\n<p class="gone">Hidden paragraph</p>\n<p>After</p>`,
    css: `.gone {\n  display: none;\n}`,
    instructions: "Change none to block and watch the paragraph reappear, pushing content down."
  },
  takeaways: [
    "display: none removes the element from layout.",
    "It takes zero space — neighbors reflow.",
    "Toggle it with a class for show/hide UI."
  ],
  quizQuestions: [
    { id: "css-m6l5-q1", question: "What does display: none do?", options: ["Removes the element from layout entirely", "Makes it transparent but keeps its space", "Moves it off-screen", "Blurs it"], correctAnswerIndex: 0, explanation: "The element is removed as if it were not in the HTML." },
    { id: "css-m6l5-q2", question: "Can display be smoothly animated?", options: ["No — it switches instantly", "Yes, always", "Only on mobile", "Only with JavaScript"], correctAnswerIndex: 0, explanation: "display has no intermediate states, so it cannot transition." }
  ]
};

// LESSON: Visibility
export const cssVisibilityContent: LessonContent = {
  heroTagline: "Hide it, but keep its parking spot",
  introduction: "visibility: hidden makes an element invisible while keeping its space in the layout — neighbors do not move. visibility: visible shows it again, and collapse hides table rows.",
  definition: {
    term: "visibility",
    explanation: "Controls whether an element is visible, without removing its layout space."
  },
  whyItMatters: "Use it when hiding something must not shift the page — like a placeholder keeping a layout stable while content loads.",
  realWorldAnalogy: {
    title: "Understanding visibility",
    story: "visibility: hidden is like an invisible chair: you cannot see it, but nobody can sit in its spot because the space is still reserved.",
    comparison: [
      { item: "hidden", meaning: "Invisible chair — space reserved." },
      { item: "visible", meaning: "Chair reappears in its spot." }
    ]
  },
  syntaxStructure: `.ghost {
  visibility: hidden;
}`,
  codeExample: `.skeleton {
  visibility: hidden;
}

.skeleton.loaded {
  visibility: visible;
}`,
  codeAnnotations: [
    { lineOrToken: "visibility: hidden;", description: "Invisible, but layout space is preserved." },
    { lineOrToken: ".skeleton.loaded", description: "Reveals content without shifting neighbors." }
  ],
  commonMistakes: [
    { wrong: "visibility: hidden; expecting the space to collapse", correct: "Use display: none to collapse space", reason: "visibility keeps the box in layout — only display: none removes it." }
  ],
  tryItYourself: {
    html: `<p>Before</p>\n<p class="ghost">Ghost paragraph</p>\n<p>After</p>`,
    css: `.ghost {\n  visibility: hidden;\n}`,
    instructions: "Change hidden to visible and see the text appear in its reserved gap."
  },
  takeaways: [
    "visibility: hidden hides but keeps layout space.",
    "Neighbors do not reflow.",
    "Use display: none when the space should collapse."
  ],
  quizQuestions: [
    { id: "css-m6l6-q1", question: "How is visibility: hidden different from display: none?", options: ["It keeps the element's space in layout", "It deletes the element", "It is faster", "There is no difference"], correctAnswerIndex: 0, explanation: "visibility preserves layout space; display: none removes it." },
    { id: "css-m6l6-q2", question: "Which value makes the element visible again?", options: ["visible", "show", "block", "true"], correctAnswerIndex: 0, explanation: "visibility: visible restores the element." }
  ]
};

// LESSON: Position
export const cssPositionContent: LessonContent = {
  heroTagline: "Take control of exactly where things sit",
  introduction: "The position property unlocks placement schemes: static (default flow), relative, absolute, fixed, and sticky. Each changes how top, right, bottom, and left offsets behave.",
  definition: {
    term: "position",
    explanation: "The property selecting the positioning scheme used to place an element."
  },
  whyItMatters: "Overlays, dropdowns, sticky headers, and tooltips are all impossible without changing position from its static default.",
  realWorldAnalogy: {
    title: "Understanding position",
    story: "position is like seating rules at an event: static means 'sit in arrival order', absolute means 'sit at these exact coordinates', fixed means 'stay by the door no matter what'.",
    comparison: [
      { item: "static", meaning: "Sit in arrival order (default)." },
      { item: "absolute", meaning: "Sit at exact assigned coordinates." }
    ]
  },
  syntaxStructure: `.box {
  position: relative;
  top: 10px;
  left: 20px;
}`,
  codeExample: `.tooltip {
  position: absolute;
  top: 100%;
  left: 0;
}

.navbar {
  position: sticky;
  top: 0;
}`,
  codeAnnotations: [
    { lineOrToken: "position: absolute;", description: "Removed from flow, placed by offsets." },
    { lineOrToken: "position: sticky;", description: "Flows normally until scrolled to the top edge." }
  ],
  commonMistakes: [
    { wrong: "Setting top: 20px on a static element expecting movement", correct: "Change position to relative first", reason: "Offsets only work on positioned elements — static ignores them." }
  ],
  tryItYourself: {
    html: `<div class="box">Moved box</div>`,
    css: `.box {\n  position: relative;\n  top: 10px;\n  left: 20px;\n  background: #fde68a;\n  padding: 16px;\n  width: 200px;\n}`,
    instructions: "Change relative to static and watch the offsets stop working."
  },
  takeaways: [
    "static is the default — offsets do nothing.",
    "relative, absolute, fixed, sticky enable offsets.",
    "Each value creates a different placement scheme."
  ],
  quizQuestions: [
    { id: "css-m6l7-q1", question: "Which position value is the default?", options: ["static", "relative", "absolute", "fixed"], correctAnswerIndex: 0, explanation: "Elements are static by default, following normal flow." },
    { id: "css-m6l7-q2", question: "Why does top: 20px do nothing on some elements?", options: ["Their position is static", "Top only works on images", "20px is too small", "Browsers ignore top"], correctAnswerIndex: 0, explanation: "Offsets require a non-static position value." }
  ]
};

// LESSON: Relative
export const cssRelativeContent: LessonContent = {
  heroTagline: "Nudge from your normal spot",
  introduction: "position: relative moves an element from its normal position using offsets, without disturbing neighbors. It also becomes the anchor for absolutely positioned children.",
  definition: {
    term: "position: relative",
    explanation: "Positions an element relative to its normal spot, and establishes a positioning context for children."
  },
  whyItMatters: "It does double duty: small nudges for the element itself, and serving as the reference frame for dropdowns and badges inside it.",
  realWorldAnalogy: {
    title: "Understanding relative positioning",
    story: "relative is like stepping two paces left from your place in line: you move, but your spot in line stays reserved.",
    comparison: [
      { item: "top: 10px", meaning: "Stepping down 10px from your spot." },
      { item: "Anchor for children", meaning: "Your spot becomes the meeting point for friends (absolute children)." }
    ]
  },
  syntaxStructure: `.badge {
  position: relative;
  top: -8px;
}`,
  codeExample: `.card {
  position: relative;
  padding: 20px;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
}`,
  codeAnnotations: [
    { lineOrToken: "position: relative;", description: "Card stays in flow but anchors the badge." },
    { lineOrToken: "position: absolute;", description: "Badge positions against the card, not the page." }
  ],
  commonMistakes: [
    { wrong: "Absolutely positioned child flying to the page corner", correct: "Add position: relative to the intended parent", reason: "Absolute elements anchor to the nearest positioned ancestor." }
  ],
  tryItYourself: {
    html: `<div class="card">Card <span class="badge">3</span></div>`,
    css: `.card {\n  position: relative;\n  background: #f1f5f9;\n  padding: 20px;\n  width: 220px;\n}\n.badge {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background: red;\n  color: white;\n  border-radius: 50%;\n  padding: 4px 8px;\n}`,
    instructions: "Remove position: relative from .card and watch the badge jump."
  },
  takeaways: [
    "relative offsets from the normal position.",
    "Neighbors are not affected by the move.",
    "It anchors absolutely positioned children."
  ],
  quizQuestions: [
    { id: "css-m6l8-q1", question: "What does position: relative do to neighbors?", options: ["Nothing — they stay put", "They move along", "They disappear", "They shrink"], correctAnswerIndex: 0, explanation: "Relative moves only the element; its original space is preserved." },
    { id: "css-m6l8-q2", question: "Why add position: relative to a parent?", options: ["To anchor absolutely positioned children", "To hide the parent", "To center text", "To load fonts"], correctAnswerIndex: 0, explanation: "Absolute children position against the nearest positioned ancestor." }
  ]
};

// LESSON: Absolute
export const cssAbsoluteContent: LessonContent = {
  heroTagline: "Pin elements to exact coordinates",
  introduction: "position: absolute removes an element from normal flow and places it at offsets relative to its nearest positioned ancestor — perfect for badges, tooltips, and overlays.",
  definition: {
    term: "position: absolute",
    explanation: "Removes an element from flow and positions it by offsets against its nearest positioned ancestor."
  },
  whyItMatters: "Anything floating over other content — close buttons on modals, notification dots — uses absolute positioning.",
  realWorldAnalogy: {
    title: "Understanding absolute positioning",
    story: "absolute is like a sticky note on a whiteboard: it sits at exact coordinates on the board (positioned parent), ignoring the text lines below.",
    comparison: [
      { item: "Sticky note", meaning: "The absolutely positioned element." },
      { item: "Whiteboard", meaning: "The positioned ancestor it sticks to." }
    ]
  },
  syntaxStructure: `.close {
  position: absolute;
  top: 8px;
  right: 8px;
}`,
  codeExample: `.modal {
  position: relative;
  padding: 32px;
  background: white;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: #eee;
  border-radius: 50%;
  width: 32px;
  height: 32px;
}`,
  codeAnnotations: [
    { lineOrToken: "position: absolute;", description: "Out of flow — placed by top/right offsets." },
    { lineOrToken: "top: 12px; right: 12px;", description: "Pinned to the modal's top-right corner." }
  ],
  commonMistakes: [
    { wrong: "Forgetting the parent needs position: relative", correct: "Give the intended parent position: relative", reason: "Without a positioned ancestor, absolute uses the whole page as reference." }
  ],
  tryItYourself: {
    html: `<div class="modal">Modal <button class="close">×</button></div>`,
    css: `.modal {\n  position: relative;\n  background: #f8fafc;\n  padding: 32px;\n  width: 240px;\n}\n.close {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}`,
    instructions: "Change top: 8px to bottom: 8px and watch the button move."
  },
  takeaways: [
    "absolute removes the element from flow.",
    "It anchors to the nearest positioned ancestor.",
    "Use offsets to pin it precisely."
  ],
  quizQuestions: [
    { id: "css-m6l9-q1", question: "What does position: absolute position against?", options: ["The nearest positioned ancestor", "Always the browser window", "The next sibling", "The footer"], correctAnswerIndex: 0, explanation: "It uses the closest ancestor with a non-static position." },
    { id: "css-m6l9-q2", question: "Does an absolute element affect neighbors' layout?", options: ["No — it is out of normal flow", "Yes, it pushes them", "It deletes them", "Only on mobile"], correctAnswerIndex: 0, explanation: "Absolute elements are removed from flow entirely." }
  ]
};

// LESSON: Fixed
export const cssFixedContent: LessonContent = {
  heroTagline: "Glue elements to the viewport",
  introduction: "position: fixed pins an element to the browser viewport — it stays in the same screen spot even when the page scrolls. Classic uses: navbars, chat buttons, cookie banners.",
  definition: {
    term: "position: fixed",
    explanation: "Positions an element relative to the viewport, keeping it fixed during scrolling."
  },
  whyItMatters: "Persistent UI — always-visible navs and back-to-top buttons — relies on fixed positioning.",
  realWorldAnalogy: {
    title: "Understanding fixed positioning",
    story: "fixed is like a sticker on your car windshield: the scenery scrolls past outside, but the sticker never moves.",
    comparison: [
      { item: "Viewport", meaning: "The windshield." },
      { item: "Fixed element", meaning: "The sticker that never moves." }
    ]
  },
  syntaxStructure: `.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}`,
  codeExample: `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #0f172a;
  color: white;
  padding: 16px;
}

.chat-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  border-radius: 50%;
}`,
  codeAnnotations: [
    { lineOrToken: "position: fixed; top: 0;", description: "Navbar glued to the top of the screen." },
    { lineOrToken: "bottom: 24px; right: 24px;", description: "Chat button floats at the bottom-right corner." }
  ],
  commonMistakes: [
    { wrong: "Fixed navbar covering page content at the top", correct: "Add padding-top to the body equal to navbar height", reason: "Fixed elements leave the flow, so content slides underneath them." }
  ],
  tryItYourself: {
    html: `<div class="bar">Fixed bar</div>\n<p>Scroll past me...</p>`,
    css: `.bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #0f172a;\n  color: white;\n  padding: 12px;\n}`,
    instructions: "Change top: 0 to bottom: 0 and imagine it glued to the screen bottom."
  },
  takeaways: [
    "fixed positions against the viewport.",
    "The element never scrolls away.",
    "Add body padding so content is not hidden underneath."
  ],
  quizQuestions: [
    { id: "css-m6l10-q1", question: "What happens to a fixed element when you scroll?", options: ["It stays in the same screen spot", "It scrolls with the page", "It disappears", "It grows"], correctAnswerIndex: 0, explanation: "Fixed elements are glued to the viewport." },
    { id: "css-m6l10-q2", question: "What is fixed positioning relative to?", options: ["The browser viewport", "Its parent div", "The nearest image", "The footer"], correctAnswerIndex: 0, explanation: "Fixed uses the viewport as its reference." }
  ]
};

// LESSON: Sticky
export const cssStickyContent: LessonContent = {
  heroTagline: "Scrolls normally, then sticks",
  introduction: "position: sticky is a hybrid: the element scrolls with the page until it hits an offset like top: 0, then sticks there like a fixed element until its container scrolls past.",
  definition: {
    term: "position: sticky",
    explanation: "Behaves like relative until a scroll threshold, then sticks like fixed within its container."
  },
  whyItMatters: "Sticky section headers and table headers stay visible while scrolling — better UX than fixed, with no layout hacks.",
  realWorldAnalogy: {
    title: "Understanding sticky positioning",
    story: "sticky is like a fridge magnet sliding up a whiteboard: it moves with your hand until it hits the top edge, then stays put.",
    comparison: [
      { item: "Before the edge", meaning: "Magnet sliding with your hand (relative)." },
      { item: "At the edge", meaning: "Magnet held at the top (fixed within its board)." }
    ]
  },
  syntaxStructure: `.toc {
  position: sticky;
  top: 0;
}`,
  codeExample: `.toc {
  position: sticky;
  top: 16px;
  background: #f8fafc;
  padding: 16px;
  border: 1px solid #e2e8f0;
}`,
  codeAnnotations: [
    { lineOrToken: "position: sticky;", description: "Hybrid behavior: flows, then sticks." },
    { lineOrToken: "top: 16px;", description: "The scroll point where sticking begins." }
  ],
  commonMistakes: [
    { wrong: "position: sticky; with no top/offset value", correct: "Always set an offset like top: 0", reason: "Without a threshold offset, sticky has nothing to stick to." }
  ],
  tryItYourself: {
    html: `<div class="toc">Sticky menu</div>\n<p>Content below...</p>`,
    css: `.toc {\n  position: sticky;\n  top: 0;\n  background: #f8fafc;\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}`,
    instructions: "Change top: 0 to top: 20px and note the stick point moves."
  },
  takeaways: [
    "sticky flows until a scroll threshold, then sticks.",
    "It needs an offset like top: 0.",
    "It never leaves its container."
  ],
  quizQuestions: [
    { id: "css-m6l11-q1", question: "How does sticky behave?", options: ["Scrolls normally, then sticks at an offset", "Never moves", "Always floats", "Disappears on scroll"], correctAnswerIndex: 0, explanation: "Sticky is relative until the threshold, then fixed-like." },
    { id: "css-m6l11-q2", question: "What does sticky require to work?", options: ["An offset like top: 0", "JavaScript", "A background image", "A fixed height"], correctAnswerIndex: 0, explanation: "The offset defines where sticking begins." }
  ]
};

// LESSON: Z-index
export const cssZIndexContent: LessonContent = {
  heroTagline: "Control which element sits on top",
  introduction: "z-index sets the stacking order of positioned elements: higher numbers paint on top of lower ones. It only works on positioned elements (or flex/grid children).",
  definition: {
    term: "z-index",
    explanation: "The property controlling the front-to-back stacking order of overlapping elements."
  },
  whyItMatters: "Modals must cover pages, dropdowns must cover content — z-index decides who wins every overlap.",
  realWorldAnalogy: {
    title: "Understanding z-index",
    story: "z-index is like layers of paper on a desk: the sheet with the highest number sits on top of the pile.",
    comparison: [
      { item: "z-index: 10", meaning: "A sheet near the top of the pile." },
      { item: "z-index: 1", meaning: "A sheet buried underneath." }
    ]
  },
  syntaxStructure: `.modal {
  z-index: 100;
}`,
  codeExample: `.dropdown {
  position: absolute;
  z-index: 50;
}

.modal {
  position: fixed;
  z-index: 100;
}

.tooltip {
  position: absolute;
  z-index: 200;
}`,
  codeAnnotations: [
    { lineOrToken: "z-index: 50;", description: "Dropdown above normal content." },
    { lineOrToken: "z-index: 200;", description: "Tooltip above everything, including the modal." }
  ],
  commonMistakes: [
    { wrong: "z-index: 9999; on a static element doing nothing", correct: "Add position: relative (or absolute/fixed)", reason: "z-index only applies to positioned elements." }
  ],
  tryItYourself: {
    html: `<div class="a">A</div>\n<div class="b">B</div>`,
    css: `.a, .b {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 8px;\n}\n.a {\n  background: #fca5a5;\n  z-index: 1;\n  top: 20px;\n  left: 20px;\n}\n.b {\n  background: #93c5fd;\n  z-index: 2;\n  top: 50px;\n  left: 50px;\n}`,
    instructions: "Swap the z-index values and watch which box lands on top."
  },
  takeaways: [
    "Higher z-index paints on top.",
    "It needs a positioned element to work.",
    "Use a scale (10, 50, 100) to stay organized."
  ],
  quizQuestions: [
    { id: "css-m6l12-q1", question: "Which element appears on top?", options: ["The one with the higher z-index", "The one with the lower z-index", "The wider one", "The first in HTML"], correctAnswerIndex: 0, explanation: "Higher z-index values stack above lower ones." },
    { id: "css-m6l12-q2", question: "Why might z-index have no effect?", options: ["The element is not positioned", "The number is too small", "z-index is deprecated", "It needs a color"], correctAnswerIndex: 0, explanation: "z-index requires a non-static position." }
  ]
};