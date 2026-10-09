// CSS Course content — part 3 of 4
// Modules 4-6: Text and Fonts, CSS Box Model, Display and Positioning
import { LessonContent } from '../../types';

// ==============================
// MODULE 4: Text and Fonts
// ==============================

// LESSON: Text Color
export const cssTextColorContent: LessonContent = {
  heroTagline: "Paint your words any color",
  introduction: "The **color** property is like picking an outfit for your text! Just like you would not wear neon green to a formal dinner, choosing the right text color makes your website look sharp instead of shocking.\n\nIt is **inherited** too — set it on a container, and all the text inside dresses the same unless told otherwise.",
  definition: {
    term: "color",
    explanation: "The **color** property sets the **text color** inside an element — like picking an outfit for your text. It is **inherited**, so setting it on a container colors all the text inside, unless a child overrides it."
  },
  whyItMatters: "Readable text color against the background is the **foundation** of every design.\n\nPoor contrast does not just look bad — it makes your site genuinely unusable for real people.",
  realWorldAnalogy: {
    title: "Ink in a pen",
    story: "**color** is like ink in a pen: everything you write with that pen comes out in the ink's color.\n\nChange the ink, and every word you write changes with it.",
    comparison: [
      { item: "color", meaning: "The **ink color** in the pen — what every word will look like." },
      { item: "Inheritance", meaning: "**Lending the pen** to everyone inside the container — children inherit the color." }
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
    { wrong: "color: lightyellow; on a white background", correct: "color: #333; on a white background", reason: "**Light text** on a light background is unreadable — always check **contrast** before you ship." }
  ],
  tryItYourself: {
    html: `<p>Normal text</p>\n<p class="warning">Warning text</p>`,
    css: `p {\n  color: #222222;\n}\n.warning {\n  color: #b91c1c;\n}`,
    instructions: "Change #b91c1c to darkorange."
  },
  takeaways: [
    "**color** sets text color and is **inherited**.",
    "Children can **override** an inherited color.",
    "Always keep **strong contrast** with the background."
  ],
  quizQuestions: [
    { id: "css-m4l1-q1", question: "Which property sets text color?", options: ["color", "text-color", "font-color", "ink"], correctAnswerIndex: 0, explanation: "**color** sets the **foreground text color** — the color of the words themselves." },
    { id: "css-m4l1-q2", question: "Is color inherited by child elements?", options: ["Yes, unless overridden", "No, never", "Only on Mondays", "Only for headings"], correctAnswerIndex: 0, explanation: "**color** inherits down the tree until a rule overrides it — children borrow the parent's color for free." }
  ]
};

// LESSON: Text Alignment
export const cssTextAlignmentContent: LessonContent = {
  heroTagline: "Line up text left, right, center, or justified",
  introduction: "**text-align** controls the horizontal alignment of text inside its container: **left**, **right**, **center**, or **justify**.\n\nImportant: it aligns the text within the box — it does not move the box itself.",
  definition: {
    term: "text-align",
    explanation: "**text-align** aligns inline text **horizontally** within its container: **left**, **right**, **center**, or **justify**. It moves the text — not the box."
  },
  whyItMatters: "**Centered** headings, **right-aligned** prices, **justified** articles — all come from this one property.\n\nIt is small, but it shapes the entire rhythm of your page.",
  realWorldAnalogy: {
    title: "Arranging chairs in a room",
    story: "**text-align** is like arranging chairs in a room: **left** pushes them against the wall, **center** lines them up in the middle, **justify** spreads them to touch both walls.\n\nSame chairs, different arrangement.",
    comparison: [
      { item: "center", meaning: "**Chairs** lined up in the middle of the room." },
      { item: "justify", meaning: "**Chairs** spread out to touch both walls evenly." }
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
    { wrong: "text-align: center; expecting the div box itself to center", correct: "margin: 0 auto; to center the box", reason: "**text-align** centers text *inside* the box — it does not center the box on the page. That is a different job entirely." }
  ],
  tryItYourself: {
    html: `<h1>Centered title</h1>\n<p class="price">$49</p>`,
    css: `h1 {\n  text-align: center;\n}\n.price {\n  text-align: right;\n}`,
    instructions: "Change right to left and watch the price jump."
  },
  takeaways: [
    "**text-align** aligns text inside its container.",
    "Values: **left**, **right**, **center**, **justify**.",
    "It does **not** move the container box itself."
  ],
  quizQuestions: [
    { id: "css-m4l2-q1", question: "Which value centers text?", options: ["center", "middle", "centered", "align-center"], correctAnswerIndex: 0, explanation: "**text-align: center** centers the inline content inside its container." },
    { id: "css-m4l2-q2", question: "Does text-align move the block box itself?", options: ["No, only the text inside it", "Yes, it centers the box", "It deletes the box", "It rotates the box"], correctAnswerIndex: 0, explanation: "**text-align** affects inline content only — the box itself stays exactly where it was." }
  ]
};

// LESSON: Text Decoration
export const cssTextDecorationContent: LessonContent = {
  heroTagline: "Underlines, overlines, and strike-throughs",
  introduction: "**text-decoration** adds lines to text: **underline**, **overline**, or **line-through**.\n\nFun fact: links are underlined by default — and removing that underline with **text-decoration: none** is one of the most common CSS tasks in existence.",
  definition: {
    term: "text-decoration",
    explanation: "**text-decoration** draws decorative lines on text: **underline**, **overline**, or **line-through**. Set it to **none** to remove them."
  },
  whyItMatters: "Clean **link styling** and sale-price **strike-throughs** both depend on controlling text decoration.\n\nIt is a tiny property that shows up in almost every real stylesheet.",
  realWorldAnalogy: {
    title: "A teacher's red pen",
    story: "**text-decoration** is like a teacher's red pen: underlining key words, striking through mistakes.\n\nSame pen, two very different messages.",
    comparison: [
      { item: "underline", meaning: "**Underlining** a key word — pay attention to this." },
      { item: "line-through", meaning: "**Striking through** a mistake — this is gone." }
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
    { wrong: "text-decoration: no-underline;", correct: "text-decoration: none;", reason: "The keyword to remove decoration is **'none'** — short, sweet, and easy to forget under pressure." }
  ],
  tryItYourself: {
    html: `<a href="#">A clean link</a>\n<p class="old-price">$99</p>`,
    css: `a {\n  text-decoration: none;\n}\n.old-price {\n  text-decoration: line-through;\n}`,
    instructions: "Change none to underline and watch the link underline return."
  },
  takeaways: [
    "Values: **none**, **underline**, **overline**, **line-through**.",
    "Links are **underlined** by default — none removes it.",
    "**line-through** is perfect for old prices."
  ],
  quizQuestions: [
    { id: "css-m4l3-q1", question: "How do you remove a link's underline?", options: ["text-decoration: none;", "underline: off;", "text-style: plain;", "link: none;"], correctAnswerIndex: 0, explanation: "**text-decoration: none** removes the underline — the classic link cleanup move." },
    { id: "css-m4l3-q2", question: "Which value strikes through text?", options: ["line-through", "strike", "cross-out", "delete"], correctAnswerIndex: 0, explanation: "**line-through** draws a line through the text — perfect for showing old, discounted prices." }
  ]
};

// LESSON: Text Transformation
export const cssTextTransformationContent: LessonContent = {
  heroTagline: "UPPERCASE, lowercase, or Capitalized — via CSS",
  introduction: "**text-transform** changes the capitalization of text without touching your HTML: **uppercase**, **lowercase**, or **capitalize**.\n\nYour HTML stays clean and searchable in its original case — only the rendering changes.",
  definition: {
    term: "text-transform",
    explanation: "**text-transform** changes the **capitalization** of text without editing the HTML: **uppercase**, **lowercase**, or **capitalize** (first letter of each word)."
  },
  whyItMatters: "Buttons and headings often need that bold **uppercase** look.\n\nDoing it in **CSS** keeps your HTML content clean, searchable, and honest about what it really says.",
  realWorldAnalogy: {
    title: "A name badge printer",
    story: "**text-transform** is like a name badge printer: the name stays the same in the database, but the badge prints it in ALL CAPS.\n\nSame data, different outfit.",
    comparison: [
      { item: "uppercase", meaning: "**Badge** printed in ALL CAPS — the rendered look." },
      { item: "HTML content", meaning: "The **name** stored normally in the database — the untouched HTML." }
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
    { wrong: "Expecting screen readers to read transformed case", correct: "Screen readers read the original HTML text", reason: "**text-transform** only changes how text *looks* — the underlying content is never modified." }
  ],
  tryItYourself: {
    html: `<h2>sale ends sunday</h2>`,
    css: `h2 {\n  text-transform: uppercase;\n}`,
    instructions: "Change uppercase to capitalize and watch each word's first letter rise."
  },
  takeaways: [
    "Values: **uppercase**, **lowercase**, **capitalize**, **none**.",
    "It changes **rendering**, not the HTML content.",
    "Great for **headings** and **buttons**."
  ],
  quizQuestions: [
    { id: "css-m4l4-q1", question: "Which value makes text ALL CAPS?", options: ["uppercase", "big", "caps-lock", "upper"], correctAnswerIndex: 0, explanation: "**text-transform: uppercase** renders every letter as a capital — SHOUTING, but polite." },
    { id: "css-m4l4-q2", question: "Does text-transform change the HTML content?", options: ["No, only how it renders", "Yes, it rewrites the HTML", "It deletes the text", "It copies the text"], correctAnswerIndex: 0, explanation: "It only affects **rendering**; the source text stays exactly as you typed it." }
  ]
};

// LESSON: Letter Spacing
export const cssLetterSpacingContent: LessonContent = {
  heroTagline: "Spread letters out or pull them tight",
  introduction: "**letter-spacing** adds space between characters. A little extra spacing gives headings an elegant, airy feel — like a luxury brand logo.\n\nNegative values do the opposite, pulling letters tighter for a compact look.",
  definition: {
    term: "letter-spacing",
    explanation: "**letter-spacing** sets the space between **characters** in text. Positive values spread letters apart; negative values pull them closer together."
  },
  whyItMatters: "Wide-tracked uppercase headings look **premium** and are easier to scan.\n\nIt is a classic designer trick — and it takes exactly one property to pull off.",
  realWorldAnalogy: {
    title: "Letters on a shop signboard",
    story: "**letter-spacing** is like arranging letters on a shop signboard: spread them out for elegance, squeeze them together to fit more words.\n\nSame letters, completely different mood.",
    comparison: [
      { item: "2px", meaning: "**Letters** standing with room to breathe between them." },
      { item: "-1px", meaning: "**Letters** standing shoulder to shoulder, tightly packed." }
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
    { wrong: "letter-spacing: 3; (no unit)", correct: "letter-spacing: 3px;", reason: "**Letter spacing** needs a length unit like px or em — a bare number means nothing to the browser." }
  ],
  tryItYourself: {
    html: `<p class="eyebrow">New collection</p>`,
    css: `.eyebrow {\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}`,
    instructions: "Change 3px to 8px and watch the letters spread dramatically."
  },
  takeaways: [
    "**letter-spacing** controls space between characters.",
    "**Positive** values spread letters; **negative** values tighten them.",
    "Always include a **unit** like px."
  ],
  quizQuestions: [
    { id: "css-m4l5-q1", question: "What does letter-spacing: 4px do?", options: ["Adds 4px between characters", "Makes the font 4px tall", "Adds 4px of padding", "Moves text 4px right"], correctAnswerIndex: 0, explanation: "**letter-spacing: 4px** inserts 4px of space between each character — every single one." },
    { id: "css-m4l5-q2", question: "Which value tightens letters together?", options: ["A negative value like -1px", "A huge positive value", "The word tight", "auto"], correctAnswerIndex: 0, explanation: "**Negative** letter-spacing pulls characters closer together. Use it sparingly — crowded letters get hard to read." }
  ]
};

// LESSON: Word Spacing
export const cssWordSpacingContent: LessonContent = {
  heroTagline: "Control the gaps between words",
  introduction: "**word-spacing** sets the space between words — the word-level cousin of letter-spacing.\n\nIt is perfect for stylized headlines and for fine-tuning justified text, creating that distinctive editorial look.",
  definition: {
    term: "word-spacing",
    explanation: "**word-spacing** sets the space between **words** in text. It is the word-level cousin of **letter-spacing** — same idea, bigger unit."
  },
  whyItMatters: "Display headlines with stretched word gaps create a **distinctive editorial look** — the kind you see in magazines.\n\nYou simply cannot get that effect with letter-spacing alone.",
  realWorldAnalogy: {
    title: "Gaps between train cars",
    story: "**word-spacing** is like the gaps between train cars: **letter-spacing** adjusts the seats inside one car, while **word-spacing** adjusts the couplings between cars.\n\nDifferent gaps, different scale.",
    comparison: [
      { item: "word-spacing", meaning: "The **gaps between train cars** — space between words." },
      { item: "letter-spacing", meaning: "The **space between seats** inside one car — space between letters." }
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
    { wrong: "Using word-spacing to indent a paragraph", correct: "Use text-indent or padding for indentation", reason: "**word-spacing** affects *every* word gap in the text — not just the first line." }
  ],
  tryItYourself: {
    html: `<h1 class="display">Big bold statement</h1>`,
    css: `.display {\n  word-spacing: 12px;\n}`,
    instructions: "Change 12px to -4px and watch the words squeeze together."
  },
  takeaways: [
    "**word-spacing** adjusts gaps between words only.",
    "It is different from **letter-spacing** — words, not characters.",
    "Useful for **stylized headlines**."
  ],
  quizQuestions: [
    { id: "css-m4l6-q1", question: "What does word-spacing affect?", options: ["Gaps between words", "Gaps between letters", "Line height", "Paragraph margins"], correctAnswerIndex: 0, explanation: "**word-spacing** sets the space between words — nothing more, nothing less." },
    { id: "css-m4l6-q2", question: "How is word-spacing different from letter-spacing?", options: ["Word-spacing targets word gaps; letter-spacing targets character gaps", "They are the same", "Word-spacing only works on images", "Letter-spacing is deprecated"], correctAnswerIndex: 0, explanation: "**word-spacing** and **letter-spacing** target different levels: words versus characters. Do not mix them up." }
  ]
};

// LESSON: Line Height
export const cssLineHeightContent: LessonContent = {
  heroTagline: "Give your text room to breathe",
  introduction: "**line-height** sets the vertical space between lines of text — and it is secretly the most powerful readability tool in CSS.\n\nCramped lines strain eyes; generous line-height makes long articles a pleasure to read. Designers obsess over this number for good reason.",
  definition: {
    term: "line-height",
    explanation: "**line-height** sets the vertical space between lines of text. A value like **1.6** means each line is 1.6 times the font size tall — the single biggest readability lever in CSS."
  },
  whyItMatters: "**Cramped** lines strain eyes; **generous** line-height makes long articles comfortable to read.\n\nIt is a one-line change that can transform a wall of text into an inviting article.",
  realWorldAnalogy: {
    title: "Spacing between bookshelves",
    story: "**line-height** is like the spacing between bookshelves: too tight and the books jam; well-spaced and everything is easy to grab.\n\nYour eyes deserve breathing room too.",
    comparison: [
      { item: "1.6", meaning: "**Comfortably spaced** shelves — easy to browse." },
      { item: "1.0", meaning: "**Jammed** shelves with no breathing room — painful to use." }
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
    { wrong: "line-height: 24px; on a parent with varying font sizes", correct: "line-height: 1.5; (unitless)", reason: "**Unitless** values scale with each element's font size; fixed px values do not — prefer unitless." }
  ],
  tryItYourself: {
    html: `<p>Line one of a paragraph.<br>Line two of a paragraph.<br>Line three of a paragraph.</p>`,
    css: `p {\n  line-height: 1.7;\n}`,
    instructions: "Change 1.7 to 1.0 and feel how cramped the text becomes."
  },
  takeaways: [
    "**line-height** controls vertical space between lines.",
    "Prefer **unitless** values like 1.5 or 1.6.",
    "Body text reads best around **1.5–1.7**."
  ],
  quizQuestions: [
    { id: "css-m4l7-q1", question: "What does line-height: 1.6 mean?", options: ["Each line is 1.6× the font size tall", "The font is 1.6px", "There are 1.6 lines", "The margin is 1.6px"], correctAnswerIndex: 0, explanation: "Unitless **line-height** multiplies the element's own font size — 1.6 means 1.6× the text size." },
    { id: "css-m4l7-q2", question: "Why prefer unitless line-height over px?", options: ["It scales with each font size", "It loads faster", "It works only on mobile", "It changes colors"], correctAnswerIndex: 0, explanation: "**Unitless** values adapt when font sizes change; fixed px values stubbornly do not." }
  ]
};

// LESSON: Font Size
export const cssFontSizeContent: LessonContent = {
  heroTagline: "How big your text appears",
  introduction: "**font-size** sets the size of text, and you have three favorite units to choose from:\n\n- **px** — fixed size, never changes\n- **em** — relative to the parent element's size\n- **rem** — relative to the root (<html>) size\n\n**rem** is the modern favorite: it keeps whole-page scaling predictable.",
  definition: {
    term: "font-size",
    explanation: "**font-size** sets how large text renders. Use **px** for fixed sizes, **em** for sizes relative to the parent, and **rem** for sizes relative to the root — rem keeps whole-page scaling predictable."
  },
  whyItMatters: "**Type hierarchy** — big headings, medium subheads, small body text — is built entirely from font-size choices.\n\nGet your sizes right and readers will glide through your page; get them wrong and everything blurs together.",
  realWorldAnalogy: {
    title: "Clothing sizes for text",
    story: "Font units are like clothing sizes: **px** is a fixed size-10 shoe, **em** is 'relative to your parent's size', and **rem** is 'relative to the store's standard mannequin'.\n\nOne scales with the family, one with the whole store.",
    comparison: [
      { item: "px", meaning: "**Fixed size**, like a size-10 shoe — px never changes." },
      { item: "rem", meaning: "Relative to the **root size** — rem scales the whole outfit together." }
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
    { wrong: "Setting every size in px, breaking user zoom preferences", correct: "Use rem for text sizes", reason: "**rem** respects the user's browser font settings; **px** stubbornly does not scale." }
  ],
  tryItYourself: {
    html: `<h1>Heading</h1>\n<p>Body text</p>`,
    css: `h1 {\n  font-size: 2.5rem;\n}\np {\n  font-size: 1rem;\n}`,
    instructions: "Change 2.5rem to 4rem and watch the heading grow."
  },
  takeaways: [
    "**font-size** sets text size.",
    "**px** is fixed; **rem** scales with the root size.",
    "Use **rem** for accessible, scalable typography."
  ],
  quizQuestions: [
    { id: "css-m4l8-q1", question: "What is 1rem relative to?", options: ["The root element's font size", "The parent's padding", "The screen width", "The image size"], correctAnswerIndex: 0, explanation: "**rem** units are relative to the root (<html>) font size — one ruler for the whole page." },
    { id: "css-m4l8-q2", question: "Why is rem better than px for body text?", options: ["It respects user font-size settings", "It loads faster", "It uses less code", "It works offline"], correctAnswerIndex: 0, explanation: "**rem** scales with browser settings, keeping text accessible for everyone." }
  ]
};

// LESSON: Font Family
export const cssFontFamilyContent: LessonContent = {
  heroTagline: "Choose the typeface personality",
  introduction: "**font-family** picks the typeface for your text. But here is the catch: you cannot guarantee the visitor has your font installed.\n\nSo you list **fallbacks** separated by commas — if the first choice is missing, the browser tries the next one. Always end with a generic family like **serif** or **sans-serif**.",
  definition: {
    term: "font-family",
    explanation: "**font-family** picks the **typeface** — Arial, Georgia, or a custom web font. List **fallbacks** separated by commas, so text still looks right if the first choice is missing."
  },
  whyItMatters: "**Typography** defines a site's personality — playful, serious, elegant, or bold.\n\nA solid font stack guarantees your design survives on any device, anywhere in the world.",
  realWorldAnalogy: {
    title: "A guest list with backups",
    story: "A **font stack** is like a dinner guest list with backups: invite **Arial** first, but if she cannot come, **Georgia** steps in — and **sans-serif** always shows up.\n\nAlways have a backup plan.",
    comparison: [
      { item: "First font", meaning: "The **preferred guest** — your first-choice font." },
      { item: "sans-serif", meaning: "The **reliable backup** who always shows up — the generic family." }
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
    { wrong: "font-family: Arial; with no fallback", correct: "font-family: Arial, Helvetica, sans-serif;", reason: "Without **fallbacks**, a missing font drops to the browser default unpredictably — your design at the mercy of chance." }
  ],
  tryItYourself: {
    html: `<p>Try different typefaces</p>`,
    css: `p {\n  font-family: Georgia, serif;\n}`,
    instructions: "Change Georgia to Verdana and compare the look."
  },
  takeaways: [
    "**font-family** sets the typeface.",
    "Always list **fallback fonts**, ending with a generic family.",
    "**Quote** font names that contain spaces — 'Times New Roman'."
  ],
  quizQuestions: [
    { id: "css-m4l9-q1", question: "Why list multiple fonts in font-family?", options: ["As fallbacks if a font is missing", "To make text rainbow", "To speed up loading", "It is required by HTML"], correctAnswerIndex: 0, explanation: "The browser tries each **font** in order until one is available — first match wins." },
    { id: "css-m4l9-q2", question: "What should a font stack end with?", options: ["A generic family like sans-serif", "A color", "A URL", "A number"], correctAnswerIndex: 0, explanation: "**Generic families** always exist on every device, guaranteeing a usable font no matter what." }
  ]
};

// LESSON: Font Weight
export const cssFontWeightContent: LessonContent = {
  heroTagline: "From thin whispers to bold shouts",
  introduction: "**font-weight** controls text thickness — and it is more subtle than just 'bold or not':\n\n- **normal** (400) — regular text\n- **bold** (700) — strong emphasis\n- **100–900** — fine steps from hairline thin to extra bold\n\nNumbers give you finer control than the keywords ever could.",
  definition: {
    term: "font-weight",
    explanation: "**font-weight** controls how **thick or thin** text strokes appear: **normal**, **bold**, or numeric values from **100** (thin) to **900** (extra bold). Numbers give finer control than keywords."
  },
  whyItMatters: "**Weight** creates hierarchy: bold headings, medium subheads, regular body.\n\nIt guides the reader's eye through your page without changing a single font size.",
  realWorldAnalogy: {
    title: "How hard you press the pen",
    story: "**font-weight** is like pen pressure: press lightly for thin, elegant lines (**300**), press hard for bold marker strokes (**700**).\n\nSame pen, wildly different impact.",
    comparison: [
      { item: "400", meaning: "**Normal** pen pressure — regular, everyday text." },
      { item: "700", meaning: "**Heavy marker** pressure — same as bold." }
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
    { wrong: "font-weight: bold; expecting fine control", correct: "font-weight: 600; for semibold", reason: "**Numeric values** offer steps between normal and bold that keywords simply cannot express." }
  ],
  tryItYourself: {
    html: `<p class="heavy">Heavy text</p>`,
    css: `.heavy {\n  font-weight: 700;\n}`,
    instructions: "Change 700 to 300 and watch the text go thin."
  },
  takeaways: [
    "**font-weight** sets text thickness.",
    "Keywords: **normal** (400) and **bold** (700).",
    "Numbers **100–900** give finer steps."
  ],
  quizQuestions: [
    { id: "css-m4l10-q1", question: "Which number equals bold?", options: ["700", "100", "400", "9000"], correctAnswerIndex: 0, explanation: "**700** is the numeric equivalent of bold — same weight, more precise." },
    { id: "css-m4l10-q2", question: "What is the normal font-weight number?", options: ["400", "0", "1000", "50"], correctAnswerIndex: 0, explanation: "**400** is the normal weight — the everyday default." }
  ]
};

// LESSON: Font Style
export const cssFontStyleContent: LessonContent = {
  heroTagline: "Italic, oblique, or proudly upright",
  introduction: "**font-style** gives your text a slant: **italic** for that classic elegant lean, **oblique** for a simpler mechanical tilt, or **normal** to force text back upright.\n\nQuotes, book titles, and foreign words are conventionally italic — this property applies that convention in one line.",
  definition: {
    term: "font-style",
    explanation: "**font-style** slants text into **italic** or **oblique**, or forces it back to **normal**. Italic is the classic choice for quotes, citations, and emphasis."
  },
  whyItMatters: "Quotes, book titles, and foreign words are **conventionally italic** across all of publishing.\n\n**font-style** applies that centuries-old convention to your website in a single line.",
  realWorldAnalogy: {
    title: "The slant of handwriting",
    story: "**font-style** is like handwriting slant: upright is neat print, **italic** is a flowing cursive lean.\n\nSame words, different personality.",
    comparison: [
      { item: "italic", meaning: "**Cursive-leaning** designed letterforms — true italic." },
      { item: "normal", meaning: "**Upright** print letters — the normal style." }
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
    { wrong: "Using <i> tags everywhere for italics", correct: "Use font-style: italic in CSS", reason: "**Styling** belongs in CSS — using <i> in HTML mixes presentation into your content." }
  ],
  tryItYourself: {
    html: `<blockquote>To be, or not to be.</blockquote>`,
    css: `blockquote {\n  font-style: italic;\n}`,
    instructions: "Change italic to normal and watch the slant disappear."
  },
  takeaways: [
    "**font-style: italic** slants text elegantly.",
    "**oblique** is a simpler mechanical slant.",
    "**normal** forces upright text."
  ],
  quizQuestions: [
    { id: "css-m4l11-q1", question: "Which value slants text like handwriting?", options: ["italic", "bold", "underline", "slanty"], correctAnswerIndex: 0, explanation: "**font-style: italic** renders true slanted letterforms — the elegant classic." },
    { id: "css-m4l11-q2", question: "How do you force text back to upright?", options: ["font-style: normal;", "font-style: straight;", "font-style: off;", "font-style: plain;"], correctAnswerIndex: 0, explanation: "**normal** resets any inherited italic styling, standing the text back upright." }
  ]
};

// LESSON: Web Fonts
export const cssWebFontsContent: LessonContent = {
  heroTagline: "Use any typeface from the internet",
  introduction: "Tired of the same old Arial and Times New Roman? **Web fonts** let you load custom typefaces — like Google Fonts — over the internet.\n\nOne **link** in the head unlocks thousands of typefaces for every visitor, on every device.",
  definition: {
    term: "Web fonts",
    explanation: "**Web fonts** are custom font files loaded over the internet and applied with **font-family**. Your site is no longer limited to fonts installed on the visitor's computer."
  },
  whyItMatters: "**Brand typography** is a huge part of modern design — it is often what makes a site recognizable.\n\n**Web fonts** put any typeface within reach of every visitor. That is real design freedom.",
  realWorldAnalogy: {
    title: "Streaming music for your text",
    story: "**Web fonts** are like streaming music: instead of only playing CDs you own (**system fonts**), you stream any song (**typeface**) on demand.\n\nThousands of typefaces, one link away.",
    comparison: [
      { item: "Google Fonts link", meaning: "The **streaming service** — a font provider like Google Fonts." },
      { item: "font-family", meaning: "**Pressing play** on a chosen song — applying it with font-family." }
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
    { wrong: "Loading 8 font families and 10 weights on one page", correct: "Load only the families and weights you use", reason: "Every **font file** adds download time — load only the weights you use and keep it lean." }
  ],
  tryItYourself: {
    html: `<h1>Beautiful type</h1>`,
    css: `h1 {\n  font-family: Georgia, serif;\n}`,
    instructions: "Imagine swapping Georgia for a Google Font — change the stack and compare."
  },
  takeaways: [
    "**Web fonts** load custom typefaces over the internet.",
    "**Google Fonts** is the easiest free source.",
    "Load only the **weights** you actually use."
  ],
  quizQuestions: [
    { id: "css-m4l12-q1", question: "What do web fonts allow?", options: ["Using custom typefaces not installed on the visitor's device", "Faster internet", "Bigger images", "Free hosting"], correctAnswerIndex: 0, explanation: "**Web fonts** download the typeface so anyone can see it — no installation needed." },
    { id: "css-m4l12-q2", question: "Where does a Google Fonts <link> go?", options: ["In the document <head>", "At the end of <body>", "Inside a <p>", "In the CSS file"], correctAnswerIndex: 0, explanation: "**Font links** load in the head so the text renders correctly from the very first paint." }
  ]
};

// ==============================
// MODULE 5: CSS Box Model
// ==============================

// LESSON: Introduction to Box Model
export const cssBoxModelIntroContent: LessonContent = {
  heroTagline: "Every element is a box with four layers",
  introduction: "Here is the most important idea in CSS layout: every HTML element is a rectangular **box** made of four layers.\n\nFrom the inside out:\n\n- **Content** — the actual text or image\n- **Padding** — space inside, around the content\n- **Border** — the edge of the box\n- **Margin** — space outside, separating it from neighbors",
  definition: {
    term: "CSS box model",
    explanation: "The **box model** describes how every element's total size is built from four layers: **content**, **padding**, **border**, and **margin** — from the inside out."
  },
  whyItMatters: "Those classic layout bugs — elements mysteriously too wide, gaps you never asked for — almost always come from misunderstanding these four layers.\n\nLearn the box model once, and half of all CSS confusion disappears.",
  realWorldAnalogy: {
    title: "A framed photo on a wall",
    story: "An **element** is like a framed photo on a wall: the **photo** is the content, the **mat** is padding, the **frame** is the border, and the **wall space** around it is margin.\n\nFour layers, one tidy picture.",
    comparison: [
      { item: "Padding", meaning: "The **mat** between the photo and the frame — space inside." },
      { item: "Margin", meaning: "The **empty wall space** around the frame — space outside." }
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
    { wrong: "Thinking width: 200px includes padding", correct: "By default, padding adds on top of width", reason: "With the default **box-sizing: content-box**, width counts the content only — padding and border get added on top." }
  ],
  tryItYourself: {
    html: `<div class="box">Box layers</div>`,
    css: `.box {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 10px;\n  background: #eef;\n}`,
    instructions: "Double the padding to 40px and watch the box grow."
  },
  takeaways: [
    "Four layers: **content**, **padding**, **border**, **margin**.",
    "**Padding** is inside the border; **margin** is outside.",
    "**Total size** = all layers combined."
  ],
  quizQuestions: [
    { id: "css-m5l1-q1", question: "What are the four box model layers, inside out?", options: ["Content, padding, border, margin", "Margin, border, padding, content", "Border, content, margin, padding", "Padding, margin, content, border"], correctAnswerIndex: 0, explanation: "Inside out, the order is: **content**, **padding**, **border**, **margin**. Tattoo this on your brain." },
    { id: "css-m5l1-q2", question: "Which layer sits outside the border?", options: ["Margin", "Padding", "Content", "Outline"], correctAnswerIndex: 0, explanation: "**Margin** is the outermost layer — it lives beyond the border, pushing other elements away." }
  ]
};

// LESSON: Width
export const cssWidthContent: LessonContent = {
  heroTagline: "How wide an element stretches",
  introduction: "**width** sets the horizontal size of an element — and you have three tools for the job:\n\n- **px** — fixed widths that never budge\n- **%** — widths relative to the parent, great for responsive layouts\n- **max-width** — a ceiling that stops elements growing too wide\n\nMix them wisely and your layouts behave on every screen.",
  definition: {
    term: "width",
    explanation: "**width** sets the horizontal size of an element's content area. Use **px** for fixed widths, **%** for widths relative to the parent, and **max-width** to stop elements growing too wide."
  },
  whyItMatters: "Readable layouts need **controlled widths**.\n\nText lines stretching across a huge monitor are exhausting to read — width is how you keep lines comfortable and designs intentional.",
  realWorldAnalogy: {
    title: "Choosing a table size",
    story: "**width** is like choosing a table size: a fixed **px** table never changes, while a **%** table grows and shrinks with the dining room.\n\nPick the table that fits the room.",
    comparison: [
      { item: "300px", meaning: "A **fixed-size** table — always 300px, whatever the room." },
      { item: "50%", meaning: "A table **half as wide** as the room — it grows with the space." }
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
    { wrong: "width: 100%; plus padding causing overflow", correct: "Add box-sizing: border-box;", reason: "Without **border-box**, padding adds to a 100% width and overflows — the classic beginner trap." }
  ],
  tryItYourself: {
    html: `<div class="box">Fixed box</div>`,
    css: `.box {\n  width: 300px;\n  background: #dbeafe;\n  padding: 16px;\n}`,
    instructions: "Change 300px to 50% and watch the box become relative."
  },
  takeaways: [
    "**px** gives fixed widths; **%** gives relative widths.",
    "**max-width** caps growth on large screens.",
    "Pair **%** widths with box-sizing: border-box."
  ],
  quizQuestions: [
    { id: "css-m5l2-q1", question: "What does width: 50% mean?", options: ["Half the parent's width", "50 pixels", "Half the screen always", "50 characters"], correctAnswerIndex: 0, explanation: "**Percentage** widths are relative to the parent element — 50% means half the parent." },
    { id: "css-m5l2-q2", question: "What does max-width do?", options: ["Caps how wide an element can grow", "Sets the minimum width", "Hides the element", "Centers the element"], correctAnswerIndex: 0, explanation: "**max-width** limits growth on huge screens while still allowing smaller sizes." }
  ]
};

// LESSON: Height
export const cssHeightContent: LessonContent = {
  heroTagline: "How tall an element stands",
  introduction: "**height** sets the vertical size of an element — but here is the twist: unlike width, you usually should not set it.\n\n**Hero banners** and fixed-size cards need explicit heights; text containers should stay at **auto** so content decides. Fixed heights on text are how words get cruelly cut off.",
  definition: {
    term: "height",
    explanation: "**height** sets the vertical size of an element. Unlike width, it is often left at **auto** so the content decides the size — fixed heights risk cutting text off."
  },
  whyItMatters: "**Hero banners** and fixed-size cards genuinely need explicit heights.\n\nBut text containers? Let them breathe — content-driven height is how you avoid the dreaded clipped-text bug.",
  realWorldAnalogy: {
    title: "Fixed shelf height for books",
    story: "**height** is like a bookshelf's fixed shelf height: set it too short and tall books stick out or get hidden.\n\nLet the books decide whenever you can.",
    comparison: [
      { item: "height: 200px", meaning: "A **fixed** shelf height — tall books may stick out." },
      { item: "height: auto", meaning: "An **adjustable** shelf that grows to fit the books." }
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
    { wrong: "height: 100px; on a text box, cutting off content", correct: "min-height: 100px;", reason: "**Fixed heights** clip overflowing content; **min-height** lets the box grow gracefully instead." }
  ],
  tryItYourself: {
    html: `<div class="hero">Tall banner</div>`,
    css: `.hero {\n  height: 200px;\n  background: #1e293b;\n  color: white;\n}`,
    instructions: "Change 200px to 100px and see the banner shrink."
  },
  takeaways: [
    "**height** sets vertical size.",
    "**auto** (default) lets content decide the height.",
    "Prefer **min-height** over height for text containers."
  ],
  quizQuestions: [
    { id: "css-m5l3-q1", question: "What is the default height behavior?", options: ["auto — content decides the height", "100px", "Full screen", "Zero"], correctAnswerIndex: 0, explanation: "The default **height** is auto — the box grows naturally with its content." },
    { id: "css-m5l3-q2", question: "Why prefer min-height over height for text?", options: ["Content can grow instead of being cut off", "It loads faster", "It changes colors", "It hides scrollbars"], correctAnswerIndex: 0, explanation: "**min-height** sets a floor while still allowing growth — the best of both worlds." }
  ]
};

// LESSON: Padding
export const cssPaddingContent: LessonContent = {
  heroTagline: "Breathing room inside the border",
  introduction: "**padding** adds space between an element's content and its border — the breathing room inside the box.\n\nIt is transparent but shows the element's **background**, which is exactly why padded buttons and cards feel so comfortable to look at and tap.",
  definition: {
    term: "padding",
    explanation: "**padding** adds space between an element's **content** and its **border**. It is transparent but shows the element's background — the reason buttons and cards feel roomy instead of cramped."
  },
  whyItMatters: "Text jammed against edges looks broken — like a printing error.\n\n**Padding** is what makes buttons comfortably tappable and cards genuinely readable. Never skip it.",
  realWorldAnalogy: {
    title: "Cushioning inside a shipping box",
    story: "**Padding** is like the cushioning inside a shipping box: it keeps the item (**content**) from touching the box walls (**border**).\n\nNo cushioning, damaged goods.",
    comparison: [
      { item: "padding: 16px", meaning: "**Thick cushioning** all around the content." },
      { item: "padding: 8px 16px", meaning: "**Thin** top/bottom, **thick** left/right cushioning." }
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
    { wrong: "padding: 10px 20px 10px; misreading the order", correct: "Order is top, right, bottom, left (clockwise)", reason: "**Shorthand** values follow clockwise order starting at the top: top, right, bottom, left." }
  ],
  tryItYourself: {
    html: `<button class="btn">Click me</button>`,
    css: `.btn {\n  padding: 10px 20px;\n  background: #2563eb;\n  color: white;\n  border: none;\n}`,
    instructions: "Change to padding: 20px 40px; and feel the button grow."
  },
  takeaways: [
    "**Padding** is inner space; it shows the background.",
    "Shorthand order: **top, right, bottom, left** — clockwise.",
    "Padding makes **touch targets** bigger and friendlier."
  ],
  quizQuestions: [
    { id: "css-m5l4-q1", question: "In padding: 10px 20px 30px 40px, which side is 30px?", options: ["Bottom", "Top", "Left", "Right"], correctAnswerIndex: 0, explanation: "Shorthand order is **top, right, bottom, left** — clockwise, starting at the top. Remember the clock." },
    { id: "css-m5l4-q2", question: "Does padding show the element's background?", options: ["Yes", "No, it is always white", "Only on hover", "Only in Firefox"], correctAnswerIndex: 0, explanation: "**Padding** sits inside the background painting area — backgrounds stretch to cover it." }
  ]
};

// LESSON: Border
export const cssBorderContent: LessonContent = {
  heroTagline: "Outlines that frame your elements",
  introduction: "**border** draws a line around an element's padding box, and the shorthand packs three things into one line: **border: 2px solid #333**.\n\nStyles include **solid**, **dashed**, **dotted**, and **double** — pick the personality that fits your design.",
  definition: {
    term: "border",
    explanation: "**border** draws a visible line around an element, defined by three ingredients: **width**, **style**, and **color** — like border: 2px solid #333."
  },
  whyItMatters: "**Borders** define cards, separate table rows, and highlight focused inputs.\n\nThey are the fundamental visual structure — the lines that organize your page.",
  realWorldAnalogy: {
    title: "A picture frame in three parts",
    story: "A **border** is like a picture frame: **width** is how thick the frame is, **style** is the frame design, **color** is the paint.\n\nAll three together make the frame real.",
    comparison: [
      { item: "2px", meaning: "**Frame thickness** — how bold the line is." },
      { item: "dashed", meaning: "A frame made of **dashes** instead of solid wood." }
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
    { wrong: "border: 2px #333; (missing style)", correct: "border: 2px solid #333;", reason: "A border needs a **style** keyword — without one, the browser renders nothing, no matter the width." }
  ],
  tryItYourself: {
    html: `<div class="card">Framed card</div>`,
    css: `.card {\n  border: 2px solid #333;\n  padding: 16px;\n}`,
    instructions: "Change solid to dashed and watch the frame style change."
  },
  takeaways: [
    "Shorthand: **border: width style color**.",
    "**Style** is required — solid, dashed, dotted, double.",
    "You can also set each **side** separately."
  ],
  quizQuestions: [
    { id: "css-m5l5-q1", question: "Which border declaration is complete?", options: ["border: 2px solid red;", "border: 2px red;", "border: solid;", "border: red;"], correctAnswerIndex: 0, explanation: "**Width**, **style**, and **color** together make a complete border — all three ingredients." },
    { id: "css-m5l5-q2", question: "What happens if you omit the border style?", options: ["No border appears", "It defaults to solid", "It defaults to dotted", "The page breaks"], correctAnswerIndex: 0, explanation: "The default style is **none**, so without a style keyword, nothing renders at all." }
  ]
};

// LESSON: Margin
export const cssMarginContent: LessonContent = {
  heroTagline: "Space between elements",
  introduction: "**margin** adds transparent space outside an element's border, pushing neighbors away — it is the whitespace rhythm of your page.\n\nAnd it hides a famous trick: **margin: 0 auto** on a fixed-width block centers it horizontally. Zero top/bottom, automatic sides, perfect centering.",
  definition: {
    term: "margin",
    explanation: "**margin** adds transparent space **outside** an element's border, pushing neighbors away. **margin: 0 auto** on a fixed-width block centers it horizontally — the classic centering trick."
  },
  whyItMatters: "**Margins** create the whitespace rhythm of a page — the breathing gaps between headings, paragraphs, and sections.\n\nGood margins are invisible; bad margins make everything feel cramped and chaotic.",
  realWorldAnalogy: {
    title: "Personal space in a queue",
    story: "**Margin** is like personal space in a queue: invisible, but everyone can feel it when it is missing.\n\nNobody likes being squished.",
    comparison: [
      { item: "margin: 20px", meaning: "A comfortable **arm's length** of space around the element." },
      { item: "margin: 0 auto", meaning: "**Equal space** left and right — perfectly centered." }
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
    { wrong: "Adding margins that collapse unexpectedly between stacked blocks", correct: "Remember vertical margins collapse to the larger one", reason: "Adjacent **vertical margins** merge — two 20px margins make a 20px gap, not 40px. Surprising, but true." }
  ],
  tryItYourself: {
    html: `<div class="box">Centered</div>`,
    css: `.box {\n  width: 300px;\n  margin: 0 auto;\n  background: #fef3c7;\n  padding: 16px;\n  text-align: center;\n}`,
    instructions: "Change auto to 0 and watch the box snap to the left."
  },
  takeaways: [
    "**Margin** is outer, transparent space.",
    "**margin: 0 auto** centers fixed-width blocks.",
    "**Vertical margins** collapse into one."
  ],
  quizQuestions: [
    { id: "css-m5l6-q1", question: "How do you horizontally center a fixed-width block?", options: ["margin: 0 auto;", "text-align: center;", "padding: 0 auto;", "align: middle;"], correctAnswerIndex: 0, explanation: "**Auto** side margins split the leftover space equally, centering the block like magic." },
    { id: "css-m5l6-q2", question: "What happens to adjacent vertical margins?", options: ["They collapse to the larger value", "They always add up", "They cancel to zero", "They become padding"], correctAnswerIndex: 0, explanation: "**Vertical margins collapse** — when two meet, only the bigger one counts. It is not a bug; it is the spec." }
  ]
};

// LESSON: Border Radius
export const cssBorderRadiusContent: LessonContent = {
  heroTagline: "Round those sharp corners",
  introduction: "**border-radius** rounds element corners — and it is the trick behind some of the web's most beloved shapes:\n\n- **8px** — subtle, friendly rounding\n- **50%** on a square — a perfect circle (hello, round avatars)\n- **999px** — pill-shaped buttons\n\nSharp corners are so last decade.",
  definition: {
    term: "border-radius",
    explanation: "**border-radius** rounds the corners of an element's border box. **8px** gives subtle rounding; **50%** on a square makes a perfect circle."
  },
  whyItMatters: "**Rounded corners** soften designs and are everywhere: avatars, buttons, cards, badges.\n\nOne property, instant friendliness — sharp boxes suddenly feel approachable.",
  realWorldAnalogy: {
    title: "Sanding sharp corners off wood",
    story: "**border-radius** is like sanding the sharp corners off a wooden block: a little sanding softens the edges, heavy sanding turns it into a ball.\n\nSame block, brand-new feel.",
    comparison: [
      { item: "8px", meaning: "**Light sanding** — softly rounded corners." },
      { item: "50%", meaning: "**Fully sanded** into a perfect circle." }
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
    { wrong: "border-radius: 50%; on a rectangle expecting a circle", correct: "Use equal width and height for a circle", reason: "**50%** on a rectangle makes an oval — true circles need square boxes." }
  ],
  tryItYourself: {
    html: `<div class="avatar"></div>`,
    css: `.avatar {\n  width: 80px;\n  height: 80px;\n  background: #8b5cf6;\n  border-radius: 50%;\n}`,
    instructions: "Change 50% to 8px and watch the circle become a rounded square."
  },
  takeaways: [
    "**border-radius** rounds corners.",
    "**50%** on a square = perfect circle.",
    "**999px** makes pill shapes."
  ],
  quizQuestions: [
    { id: "css-m5l7-q1", question: "How do you make a circular avatar?", options: ["Equal width/height with border-radius: 50%;", "border-radius: 5px;", "border: circle;", "shape: round;"], correctAnswerIndex: 0, explanation: "**50%** radius on a square box produces a perfect circle — the avatar trick." },
    { id: "css-m5l7-q2", question: "What does border-radius: 999px do to a button?", options: ["Makes a pill shape", "Hides the button", "Makes it square", "Nothing"], correctAnswerIndex: 0, explanation: "An oversized radius like **999px** fully rounds both ends into a pill shape." }
  ]
};

// LESSON: Box Sizing
export const cssBoxSizingContent: LessonContent = {
  heroTagline: "Make width mean what you think",
  introduction: "**box-sizing** answers a deceptively simple question: when you say width: 300px, what exactly is 300px?\n\n- **content-box** (default) — only the content is 300px; padding and border pile on top\n- **border-box** — the whole box is 300px, padding and border included\n\nborder-box is what you almost always want.",
  definition: {
    term: "box-sizing",
    explanation: "**box-sizing** decides what **width** actually measures. **content-box** (the default) counts only content, so padding makes the box wider. **border-box** includes padding and border — what you set is what you get."
  },
  whyItMatters: "**border-box** ends the classic 'why is my 100% box overflowing?!' bug that has haunted beginners for decades.\n\nModern sites set it globally — one line, and width finally means what you think it means.",
  realWorldAnalogy: {
    title: "Airline luggage limits",
    story: "**box-sizing** is like airline luggage limits: **content-box** weighs only your clothes (the suitcase adds extra), while **border-box** weighs clothes plus suitcase together.\n\nThe limit applies to the total — no surprises at the gate.",
    comparison: [
      { item: "content-box", meaning: "The **limit** applies to clothes only; the suitcase adds extra on top." },
      { item: "border-box", meaning: "The **limit** applies to everything together — what you set is what you get." }
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
    { wrong: "width: 100%; padding: 20px; without border-box, overflowing the parent", correct: "Add box-sizing: border-box;", reason: "**content-box** adds padding on top of 100%, pushing the box past its parent — the infamous overflow bug." }
  ],
  tryItYourself: {
    html: `<div class="box">Exact 300px</div>`,
    css: `.box {\n  box-sizing: border-box;\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #333;\n  background: #e0f2fe;\n}`,
    instructions: "Remove the box-sizing line and notice the box grow wider."
  },
  takeaways: [
    "**border-box** includes padding and border in width.",
    "**content-box** (default) adds them on top.",
    "Set *** { box-sizing: border-box; }** globally — modern best practice."
  ],
  quizQuestions: [
    { id: "css-m5l8-q1", question: "With box-sizing: border-box and width: 300px, padding: 20px — total width?", options: ["300px", "340px", "260px", "320px"], correctAnswerIndex: 0, explanation: "**border-box** keeps the total at exactly 300px — padding squeezes inside, never beyond." },
    { id: "css-m5l8-q2", question: "What is the default box-sizing value?", options: ["content-box", "border-box", "padding-box", "margin-box"], correctAnswerIndex: 0, explanation: "The default is **content-box** — the classic source of overflow surprises." }
  ]
};

// LESSON: Box Shadow
export const cssBoxShadowContent: LessonContent = {
  heroTagline: "Lift elements off the page with shadows",
  introduction: "**box-shadow** adds a shadow behind an element, built from up to five values:\n\n- **x-offset, y-offset** — where the shadow sits\n- **blur** — how soft it is\n- **spread** — how far it reaches\n- **color** — usually a soft dark with low opacity\n\nSoft shadows are the signature look of modern cards.",
  definition: {
    term: "box-shadow",
    explanation: "**box-shadow** draws a shadow behind an element's box: **horizontal offset**, **vertical offset**, **blur**, **spread**, and **color**. Soft shadows create depth — the signature look of modern cards."
  },
  whyItMatters: "**Shadows** signal elevation: raised cards, floating buttons, modal dialogs.\n\nDepth makes interfaces feel tactile — like you could reach out and lift the card off the screen.",
  realWorldAnalogy: {
    title: "A desk lamp casting shadows",
    story: "**box-shadow** is like a desk lamp casting an object's shadow on the table: lift the object higher (**bigger blur**) and the shadow gets softer and larger.\n\nHeight creates softness.",
    comparison: [
      { item: "0 4px 12px", meaning: "**Object hovering slightly** — a soft, small shadow." },
      { item: "0 20px 40px", meaning: "**Object held high** — a big, diffused shadow." }
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
    { wrong: "box-shadow: black; (color only)", correct: "box-shadow: 0 2px 6px rgba(0,0,0,0.3);", reason: "A shadow needs **offsets** and **blur** — color alone draws nothing visible." }
  ],
  tryItYourself: {
    html: `<div class="card">Shadow card</div>`,
    css: `.card {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}`,
    instructions: "Change 12px blur to 30px and watch the shadow soften."
  },
  takeaways: [
    "Syntax: **x-offset**, **y-offset**, **blur**, **spread**, **color**.",
    "Soft dark shadows with **low opacity** look modern.",
    "Bigger **blur** = higher elevation feel."
  ],
  quizQuestions: [
    { id: "css-m5l9-q1", question: "In box-shadow: 0 4px 12px black, what is 4px?", options: ["Vertical offset", "Blur radius", "Horizontal offset", "Spread"], correctAnswerIndex: 0, explanation: "The **second value** is the vertical offset — how far down the shadow drops." },
    { id: "css-m5l9-q2", question: "What does a larger blur radius do?", options: ["Makes the shadow softer and more spread", "Makes it darker", "Moves it left", "Deletes it"], correctAnswerIndex: 0, explanation: "**Blur** softens and diffuses the shadow — bigger blur, dreamier shadow." }
  ]
};

// LESSON: Overflow
export const cssOverflowContent: LessonContent = {
  heroTagline: "Decide what happens to overflowing content",
  introduction: "What happens when content is too big for its box? **overflow** decides:\n\n- **visible** — spills out (the default)\n- **hidden** — clipped, gone\n- **scroll** — scrollbars, always\n- **auto** — scrollbars only when needed\n\nFour values, four personalities.",
  definition: {
    term: "overflow",
    explanation: "**overflow** controls content that is too big for its box: **visible** (default, spills out), **hidden** (clipped), **scroll** (always shows scrollbars), or **auto** (scrollbars only when needed)."
  },
  whyItMatters: "Long text in fixed cards, scrollable **chat windows**, and clipped image corners all depend on overflow.\n\nIt is the property that keeps oversized content from wrecking your layout.",
  realWorldAnalogy: {
    title: "Managing a fish tank",
    story: "**overflow** is like managing a fish tank: **visible** lets water spill on the floor, **hidden** seals the tank shut, and **scroll** adds a window you can slide.\n\nSame tank, four very different outcomes.",
    comparison: [
      { item: "hidden", meaning: "**Sealed tank** — extra water is cut off and gone." },
      { item: "auto", meaning: "A **sliding window** appears, but only when the tank overflows." }
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
    { wrong: "overflow: scroll; on everything, showing disabled scrollbars", correct: "overflow: auto;", reason: "**scroll** forces empty scrollbars even when unneeded; **auto** shows them only when necessary — prefer auto." }
  ],
  tryItYourself: {
    html: `<div class="preview">Long text. Long text. Long text. Long text. Long text. Long text. Long text. Long text.</div>`,
    css: `.preview {\n  width: 250px;\n  height: 80px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  padding: 12px;\n}`,
    instructions: "Change auto to hidden and watch the extra text get clipped."
  },
  takeaways: [
    "**visible** is the default — content spills out.",
    "**hidden** clips overflow; **auto** scrolls when needed.",
    "**overflow** needs a constrained width or height to matter."
  ],
  quizQuestions: [
    { id: "css-m5l10-q1", question: "Which overflow value clips content with no scrollbars?", options: ["hidden", "visible", "auto", "scroll"], correctAnswerIndex: 0, explanation: "**hidden** clips overflowing content silently — no scrollbars, no mercy." },
    { id: "css-m5l10-q2", question: "What is the difference between scroll and auto?", options: ["scroll always shows scrollbars; auto only when needed", "They are identical", "auto never scrolls", "scroll hides content"], correctAnswerIndex: 0, explanation: "**auto** is the smart choice — scrollbars appear only when content actually overflows." }
  ]
};

// ==============================
// MODULE 6: Display and Positioning
// ==============================

// LESSON: Display Property
export const cssDisplayPropertyContent: LessonContent = {
  heroTagline: "The master switch of layout behavior",
  introduction: "**display** is the master switch of CSS layout. It decides how an element behaves:\n\n- **block** — full width, own line\n- **inline** — flows inside text\n- **flex / grid** — powerful layout modes\n- **none** — removed entirely\n\nWhen layout looks wrong, check display first.",
  definition: {
    term: "display",
    explanation: "The **display** property decides how an element behaves in layout: **block**, **inline**, **inline-block**, **flex**, **grid**, or **none**. It is the first property to reach for when layout looks wrong."
  },
  whyItMatters: "Almost every layout technique — **flexbox**, **grid**, hiding elements — starts by setting display.\n\nIt is the foundation everything else builds on. Master it, and layouts stop feeling like magic.",
  realWorldAnalogy: {
    title: "Assigning roles in a play",
    story: "**display** is like assigning roles in a play: **block** actors take the whole stage width, **inline** actors share a line, and **none** means the actor stays backstage.\n\nSame actors, completely different performance.",
    comparison: [
      { item: "block", meaning: "**Solo performer** — full stage width, own line." },
      { item: "inline", meaning: "**Chorus line** — sharing the stage row with others." }
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
    { wrong: "display: flexbox;", correct: "display: flex;", reason: "The value is **'flex'**, not 'flexbox' — one wrong word and the browser ignores the whole declaration." }
  ],
  tryItYourself: {
    html: `<span class="badge">New</span>`,
    css: `.badge {\n  display: inline-block;\n  background: #22c55e;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 999px;\n}`,
    instructions: "Change inline-block to block and watch the badge take the full width."
  },
  takeaways: [
    "**display** controls layout behavior.",
    "Common values: **block**, **inline**, **inline-block**, **flex**, **grid**, **none**.",
    "Changing **display** is step one of most layout fixes."
  ],
  quizQuestions: [
    { id: "css-m6l1-q1", question: "Which display value removes an element from layout?", options: ["none", "block", "inline", "flex"], correctAnswerIndex: 0, explanation: "**display: none** removes the element as if it were not there — gone from layout completely." },
    { id: "css-m6l1-q2", question: "Which value activates flexbox on a container?", options: ["flex", "flexbox", "flexible", "row"], correctAnswerIndex: 0, explanation: "**display: flex** creates a flex formatting context, unlocking flexbox superpowers." }
  ]
};

// LESSON: Block
export const cssBlockContent: LessonContent = {
  heroTagline: "Full-width stackers",
  introduction: "**Block elements** — div, p, h1, section — take the full available width and stack vertically, each starting on a new line.\n\nThey are the bricks of page layout: respectful of **width**, **height**, and all **margins**, and always claiming their own row.",
  definition: {
    term: "display: block",
    explanation: "**Block** makes an element occupy the **full width** of its parent and start on a **new line**. Think div, p, h1, section — the building blocks of page structure."
  },
  whyItMatters: "**Page structure** is built from blocks: headers, sections, paragraphs, footers.\n\nUnderstanding block flow explains the default layout of every page you have ever seen.",
  realWorldAnalogy: {
    title: "Shipping containers on a dock",
    story: "**Block elements** are like shipping containers stacked on a dock: each takes the full width of its row and piles vertically.\n\nNo sharing rows — every container gets its own.",
    comparison: [
      { item: "Full width", meaning: "Each **container** spans its full row." },
      { item: "Vertical stacking", meaning: "Containers pile **one on top of another**, never side by side." }
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
    { wrong: "Expecting two divs to sit side by side", correct: "Use display: flex on the parent or inline-block", reason: "**Blocks** always stack vertically — if you want side-by-side, you need a different display value." }
  ],
  tryItYourself: {
    html: `<div class="panel">Panel one</div>\n<div class="panel">Panel two</div>`,
    css: `.panel {\n  background: #f1f5f9;\n  padding: 20px;\n  margin-bottom: 16px;\n}`,
    instructions: "Add width: 300px; and see blocks keep stacking vertically."
  },
  takeaways: [
    "**Blocks** take full width and stack vertically.",
    "**div**, **p**, **h1–h6**, **section** are block by default.",
    "Blocks respect **width**, **height**, and vertical margins."
  ],
  quizQuestions: [
    { id: "css-m6l2-q1", question: "How do block elements arrange themselves?", options: ["Stacked vertically, full width", "Side by side", "Overlapping", "In a circle"], correctAnswerIndex: 0, explanation: "**Blocks** take full width and stack top to bottom — each on its own line." },
    { id: "css-m6l2-q2", question: "Which is a block element by default?", options: ["<div>", "<span>", "<a>", "<img>"], correctAnswerIndex: 0, explanation: "**div** is block-level; span, a, and img are inline. Know which is which and layouts start making sense." }
  ]
};

// LESSON: Inline
export const cssInlineContent: LessonContent = {
  heroTagline: "Flow-with-the-text elements",
  introduction: "**Inline elements** — span, a, strong — sit inside text lines and take only as much width as their content needs.\n\nThe catch? They **ignore** width, height, and vertical margins. That is why setting width on a span sometimes appears to 'do nothing'.",
  definition: {
    term: "display: inline",
    explanation: "**Inline** makes an element flow **within text**, sized by its content, without breaking to a new line. Think span, a, strong — the words inside your paragraphs."
  },
  whyItMatters: "**Links** and highlighted words inside paragraphs are inline.\n\nKnowing their limits explains one of the most confusing beginner moments: why width sometimes does absolutely nothing.",
  realWorldAnalogy: {
    title: "Words in a sentence",
    story: "**Inline elements** are like words in a sentence: they flow left to right and wrap naturally.\n\nAnd just like you cannot set a word's height, inline elements ignore height too.",
    comparison: [
      { item: "span", meaning: "A **word** in the sentence — flowing with the text." },
      { item: "Ignoring width", meaning: "You cannot **stretch** a single word wider — width is ignored." }
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
    { wrong: "span { width: 200px; height: 50px; } expecting a box", correct: "Use display: inline-block for sized boxes", reason: "**Inline** elements ignore width and height completely — it is not a bug, it is their nature." }
  ],
  tryItYourself: {
    html: `<p>Some <span class="highlight">highlighted</span> text here.</p>`,
    css: `.highlight {\n  background: yellow;\n  padding: 0 4px;\n}`,
    instructions: "Add width: 200px; and notice the span ignores it."
  },
  takeaways: [
    "**Inline** elements flow within text lines.",
    "They ignore **width**, **height**, and vertical margins.",
    "**span**, **a**, **strong** are inline by default."
  ],
  quizQuestions: [
    { id: "css-m6l3-q1", question: "Which properties do inline elements ignore?", options: ["width and height", "color", "background", "font-size"], correctAnswerIndex: 0, explanation: "**Inline boxes** are sized by content — width and height have no effect whatsoever." },
    { id: "css-m6l3-q2", question: "Which element is inline by default?", options: ["<span>", "<div>", "<p>", "<section>"], correctAnswerIndex: 0, explanation: "**span** is the classic inline container — the go-to for styling words inside text." }
  ]
};

// LESSON: Inline-block
export const cssInlineBlockContent: LessonContent = {
  heroTagline: "The best of both worlds",
  introduction: "**inline-block** is the best of both worlds: elements flow **side by side** like inline elements, but respect **width**, **height**, **padding**, and **margins** like blocks.\n\nPerfect for buttons, badges, and nav links in a row — before flexbox, this was how developers built horizontal menus.",
  definition: {
    term: "display: inline-block",
    explanation: "**inline-block** flows side by side like **inline**, but respects **width**, **height**, **padding**, and **margins** like **block**. The hybrid that does both jobs."
  },
  whyItMatters: "Before **flexbox** existed, inline-block was how developers built horizontal menus and button rows.\n\nIt is still the simplest tool for the job — small, predictable, and easy to understand.",
  realWorldAnalogy: {
    title: "Photo prints laid in a row",
    story: "**inline-block** elements are like photo prints laid in a row: they sit **side by side**, but each has its own **exact size** and frame.\n\nThe best of both worlds.",
    comparison: [
      { item: "Side-by-side flow", meaning: "**Prints laid in a row** — flowing side by side like inline." },
      { item: "Respects width/height", meaning: "Each print has **exact dimensions** — sized like a block." }
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
    { wrong: "Mystery gaps between inline-block items", correct: "Remove whitespace between tags or set parent font-size: 0", reason: "**HTML whitespace** between inline-blocks renders as small gaps — a notorious surprise for beginners." }
  ],
  tryItYourself: {
    html: `<a class="btn" href="#">One</a>\n<a class="btn" href="#">Two</a>`,
    css: `.btn {\n  display: inline-block;\n  width: 120px;\n  padding: 10px;\n  background: #2563eb;\n  color: white;\n  text-align: center;\n}`,
    instructions: "Change inline-block to block and watch the buttons stack."
  },
  takeaways: [
    "**inline-block** flows horizontally like inline.",
    "It respects **width**, **height**, and all margins.",
    "Ideal for **buttons** and items in a row."
  ],
  quizQuestions: [
    { id: "css-m6l4-q1", question: "What makes inline-block special?", options: ["Flows inline but respects width/height", "It is invisible", "It only works on divs", "It disables padding"], correctAnswerIndex: 0, explanation: "It combines **inline flow** with **block sizing** — side by side, but fully dimensioned." },
    { id: "css-m6l4-q2", question: "What causes small gaps between inline-block items?", options: ["Whitespace in the HTML", "The border property", "The color property", "JavaScript"], correctAnswerIndex: 0, explanation: "**Spaces and line breaks** between tags render as tiny gaps — the classic inline-block gotcha." }
  ]
};

// LESSON: None
export const cssDisplayNoneContent: LessonContent = {
  heroTagline: "Completely remove an element",
  introduction: "**display: none** removes an element from the page entirely — no space, no visibility, nothing. As if it were never in the HTML.\n\nToggle it with JavaScript (or a class) and you have the engine behind dropdowns, modals, and tabs.",
  definition: {
    term: "display: none",
    explanation: "**display: none** removes an element from **rendering and layout** completely — it takes no space and is invisible, as if it were never in the HTML."
  },
  whyItMatters: "**Dropdown menus**, **modals**, **tabs**, and mobile navs all hide and show with display: none.\n\nIt is the invisible workhorse behind nearly every interactive component.",
  realWorldAnalogy: {
    title: "An actor leaving the stage",
    story: "**display: none** is like an actor leaving the stage: the scene rearranges as if they were never there.\n\nCompare that to hiding behind a curtain (**visibility**) — the spot stays reserved.",
    comparison: [
      { item: "display: none", meaning: "**Actor exits** — the stage reflows to fill the gap." },
      { item: "visibility: hidden", meaning: "**Actor hides** behind a curtain — the spot stays reserved." }
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
    { wrong: "display: none; expecting animations to run", correct: "Animate opacity/visibility for transitions", reason: "**display** cannot be animated — the element simply pops in or out. For fades, use opacity." }
  ],
  tryItYourself: {
    html: `<p>Before</p>\n<p class="gone">Hidden paragraph</p>\n<p>After</p>`,
    css: `.gone {\n  display: none;\n}`,
    instructions: "Change none to block and watch the paragraph reappear, pushing content down."
  },
  takeaways: [
    "**display: none** removes the element from layout.",
    "It takes **zero space** — neighbors reflow.",
    "Toggle it with a **class** for show/hide UI."
  ],
  quizQuestions: [
    { id: "css-m6l5-q1", question: "What does display: none do?", options: ["Removes the element from layout entirely", "Makes it transparent but keeps its space", "Moves it off-screen", "Blurs it"], correctAnswerIndex: 0, explanation: "The element is **removed** as if it were not in the HTML — neighbors rush in to fill the space." },
    { id: "css-m6l5-q2", question: "Can display be smoothly animated?", options: ["No — it switches instantly", "Yes, always", "Only on mobile", "Only with JavaScript"], correctAnswerIndex: 0, explanation: "**display** has no intermediate states, so it cannot transition or animate — it just pops." }
  ]
};

// LESSON: Visibility
export const cssVisibilityContent: LessonContent = {
  heroTagline: "Hide it, but keep its parking spot",
  introduction: "**visibility: hidden** makes an element invisible while keeping its space in the layout — neighbors do not move a pixel.\n\nCompare that to **display: none**, which removes the element entirely. Invisible versus gone: choose wisely.",
  definition: {
    term: "visibility",
    explanation: "**visibility** controls whether an element is **visible**, without removing its layout space. **hidden** makes it invisible but keeps its spot; **visible** shows it again."
  },
  whyItMatters: "Use it when hiding something **must not shift** the page — like a placeholder keeping a layout stable while content loads.\n\nNo jumpy layouts, no reflowing neighbors — just clean, stable hiding.",
  realWorldAnalogy: {
    title: "An invisible chair",
    story: "**visibility: hidden** is like an invisible chair: you cannot see it, but nobody can sit in its spot — the space stays reserved.\n\nGone from sight, still holding its place.",
    comparison: [
      { item: "hidden", meaning: "**Invisible chair** — hidden, but the space is reserved." },
      { item: "visible", meaning: "**Chair reappears** in its exact spot — nothing shifted." }
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
    { wrong: "visibility: hidden; expecting the space to collapse", correct: "Use display: none to collapse space", reason: "**visibility** keeps the box in layout — only **display: none** truly removes it." }
  ],
  tryItYourself: {
    html: `<p>Before</p>\n<p class="ghost">Ghost paragraph</p>\n<p>After</p>`,
    css: `.ghost {\n  visibility: hidden;\n}`,
    instructions: "Change hidden to visible and see the text appear in its reserved gap."
  },
  takeaways: [
    "**visibility: hidden** hides but keeps layout space.",
    "Neighbors do **not** reflow.",
    "Use **display: none** when the space should collapse."
  ],
  quizQuestions: [
    { id: "css-m6l6-q1", question: "How is visibility: hidden different from display: none?", options: ["It keeps the element's space in layout", "It deletes the element", "It is faster", "There is no difference"], correctAnswerIndex: 0, explanation: "**visibility** preserves layout space; **display: none** removes it — the key difference to memorize." },
    { id: "css-m6l6-q2", question: "Which value makes the element visible again?", options: ["visible", "show", "block", "true"], correctAnswerIndex: 0, explanation: "**visibility: visible** restores the element, right back into its reserved spot." }
  ]
};

// LESSON: Position
export const cssPositionContent: LessonContent = {
  heroTagline: "Take control of exactly where things sit",
  introduction: "**position** is the property that unlocks real placement power. It offers five schemes:\n\n- **static** — normal flow (the default)\n- **relative** — nudged from its normal spot\n- **absolute** — pinned to an ancestor\n- **fixed** — glued to the viewport\n- **sticky** — scrolls, then sticks\n\nEach one completely changes how offsets behave.",
  definition: {
    term: "position",
    explanation: "The **position** property unlocks placement schemes: **static** (default flow), **relative**, **absolute**, **fixed**, and **sticky**. Each one changes how the **top**, **right**, **bottom**, and **left** offsets behave."
  },
  whyItMatters: "**Overlays**, **dropdowns**, **sticky headers**, and **tooltips** are all impossible without changing position from its static default.\n\nThis one property unlocks an entire universe of interface patterns.",
  realWorldAnalogy: {
    title: "Seating rules at an event",
    story: "**position** is like seating rules at an event: **static** means 'sit in arrival order', **absolute** means 'sit at these exact coordinates', **fixed** means 'stay by the door no matter what'.\n\nDifferent rules, totally different seating.",
    comparison: [
      { item: "static", meaning: "**Sit in arrival order** — the default, no special treatment." },
      { item: "absolute", meaning: "**Sit at exact assigned coordinates** — precise placement." }
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
    { wrong: "Setting top: 20px on a static element expecting movement", correct: "Change position to relative first", reason: "**Offsets** only work on positioned elements — static ignores top, left, and friends entirely." }
  ],
  tryItYourself: {
    html: `<div class="box">Moved box</div>`,
    css: `.box {\n  position: relative;\n  top: 10px;\n  left: 20px;\n  background: #fde68a;\n  padding: 16px;\n  width: 200px;\n}`,
    instructions: "Change relative to static and watch the offsets stop working."
  },
  takeaways: [
    "**static** is the default — offsets do nothing.",
    "**relative**, **absolute**, **fixed**, **sticky** enable offsets.",
    "Each value creates a different **placement scheme**."
  ],
  quizQuestions: [
    { id: "css-m6l7-q1", question: "Which position value is the default?", options: ["static", "relative", "absolute", "fixed"], correctAnswerIndex: 0, explanation: "Elements are **static** by default, following normal flow like everyone else." },
    { id: "css-m6l7-q2", question: "Why does top: 20px do nothing on some elements?", options: ["Their position is static", "Top only works on images", "20px is too small", "Browsers ignore top"], correctAnswerIndex: 0, explanation: "**Offsets** only work with a non-static position — static elements ignore them completely." }
  ]
};

// LESSON: Relative
export const cssRelativeContent: LessonContent = {
  heroTagline: "Nudge from your normal spot",
  introduction: "**position: relative** does two jobs at once, which makes it secretly one of the most useful values:\n\n1. **Nudge** the element from its normal spot with offsets — neighbors never move\n2. Become the **anchor** for absolutely positioned children inside it\n\nSmall shifts, big responsibilities.",
  definition: {
    term: "position: relative",
    explanation: "**position: relative** moves an element from its **normal position** using offsets — without disturbing neighbors. It also becomes the **anchor** for absolutely positioned children."
  },
  whyItMatters: "It does **double duty**: gentle nudges for the element itself, and serving as the reference frame for **dropdowns** and **badges** inside it.\n\nYou will use relative positioning constantly — it is everywhere in real code.",
  realWorldAnalogy: {
    title: "Stepping sideways in a queue",
    story: "**relative** is like stepping two paces left from your place in line: you move, but your spot in line stays reserved.\n\nYou shift — nobody else budges.",
    comparison: [
      { item: "top: 10px", meaning: "**Stepping** 10px from your spot — the element moves." },
      { item: "Anchor for children", meaning: "Your spot becomes the **meeting point** for friends (absolute children)." }
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
    { wrong: "Absolutely positioned child flying to the page corner", correct: "Add position: relative to the intended parent", reason: "**Absolute** elements anchor to the nearest positioned ancestor — which is why relative parents are everywhere." }
  ],
  tryItYourself: {
    html: `<div class="card">Card <span class="badge">3</span></div>`,
    css: `.card {\n  position: relative;\n  background: #f1f5f9;\n  padding: 20px;\n  width: 220px;\n}\n.badge {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background: red;\n  color: white;\n  border-radius: 50%;\n  padding: 4px 8px;\n}`,
    instructions: "Remove position: relative from .card and watch the badge jump."
  },
  takeaways: [
    "**relative** offsets from the normal position.",
    "Neighbors are **not affected** by the move.",
    "It **anchors** absolutely positioned children."
  ],
  quizQuestions: [
    { id: "css-m6l8-q1", question: "What does position: relative do to neighbors?", options: ["Nothing — they stay put", "They move along", "They disappear", "They shrink"], correctAnswerIndex: 0, explanation: "**Relative** moves only the element itself — its original space stays reserved, like a saved seat." },
    { id: "css-m6l8-q2", question: "Why add position: relative to a parent?", options: ["To anchor absolutely positioned children", "To hide the parent", "To center text", "To load fonts"], correctAnswerIndex: 0, explanation: "**Absolute children** position themselves against the nearest positioned ancestor — often a relative parent." }
  ]
};

// LESSON: Absolute
export const cssAbsoluteContent: LessonContent = {
  heroTagline: "Pin elements to exact coordinates",
  introduction: "**position: absolute** removes an element from normal flow and pins it at exact offsets — relative to its nearest **positioned ancestor**.\n\nIt is the secret behind notification dots, close buttons on modals, and tooltips: anything floating over other content.",
  definition: {
    term: "position: absolute",
    explanation: "**position: absolute** removes an element from normal flow and places it at **offsets** relative to its nearest **positioned ancestor** — perfect for badges, tooltips, and overlays."
  },
  whyItMatters: "Anything **floating over** other content — close buttons on modals, notification dots, image captions — uses absolute positioning.\n\nIt is how interfaces get their layered, polished feel.",
  realWorldAnalogy: {
    title: "A sticky note on a whiteboard",
    story: "**absolute** is like a sticky note on a whiteboard: it sits at exact coordinates on the board (the positioned parent), completely ignoring the text lines below.\n\nPinned precisely, floating freely.",
    comparison: [
      { item: "Sticky note", meaning: "The **sticky note** — the absolutely positioned element." },
      { item: "Whiteboard", meaning: "The **whiteboard** — the positioned ancestor it sticks to." }
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
    { wrong: "Forgetting the parent needs position: relative", correct: "Give the intended parent position: relative", reason: "Without a **positioned ancestor**, absolute uses the whole page as its reference — usually not what you wanted." }
  ],
  tryItYourself: {
    html: `<div class="modal">Modal <button class="close">×</button></div>`,
    css: `.modal {\n  position: relative;\n  background: #f8fafc;\n  padding: 32px;\n  width: 240px;\n}\n.close {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}`,
    instructions: "Change top: 8px to bottom: 8px and watch the button move."
  },
  takeaways: [
    "**absolute** removes the element from flow.",
    "It anchors to the nearest **positioned ancestor**.",
    "Use **offsets** to pin it precisely."
  ],
  quizQuestions: [
    { id: "css-m6l9-q1", question: "What does position: absolute position against?", options: ["The nearest positioned ancestor", "Always the browser window", "The next sibling", "The footer"], correctAnswerIndex: 0, explanation: "It anchors to the **closest ancestor** with a non-static position — the nearest positioned parent wins." },
    { id: "css-m6l9-q2", question: "Does an absolute element affect neighbors' layout?", options: ["No — it is out of normal flow", "Yes, it pushes them", "It deletes them", "Only on mobile"], correctAnswerIndex: 0, explanation: "**Absolute** elements are removed from flow entirely — neighbors act like they do not exist." }
  ]
};

// LESSON: Fixed
export const cssFixedContent: LessonContent = {
  heroTagline: "Glue elements to the viewport",
  introduction: "**position: fixed** pins an element to the browser viewport — it stays glued to the same screen spot no matter how far you scroll.\n\nClassic uses: sticky **navbars**, floating **chat buttons**, **cookie banners**, back-to-top buttons.",
  definition: {
    term: "position: fixed",
    explanation: "**position: fixed** pins an element to the browser **viewport** — it stays in the same screen spot even when the page scrolls."
  },
  whyItMatters: "**Persistent UI** — always-visible navs, chat widgets, back-to-top buttons — relies on fixed positioning.\n\nIt keeps key controls one tap away, wherever the user is on the page.",
  realWorldAnalogy: {
    title: "A sticker on your windshield",
    story: "**fixed** is like a sticker on your car windshield: the scenery scrolls past outside, but the sticker never moves.\n\nScroll all you want — it stays put.",
    comparison: [
      { item: "Viewport", meaning: "The **windshield** — the viewport you look through." },
      { item: "Fixed element", meaning: "The **sticker** that never moves, whatever the scenery." }
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
    { wrong: "Fixed navbar covering page content at the top", correct: "Add padding-top to the body equal to navbar height", reason: "**Fixed** elements leave the flow, so page content slides underneath them — add padding to compensate." }
  ],
  tryItYourself: {
    html: `<div class="bar">Fixed bar</div>\n<p>Scroll past me...</p>`,
    css: `.bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #0f172a;\n  color: white;\n  padding: 12px;\n}`,
    instructions: "Change top: 0 to bottom: 0 and imagine it glued to the screen bottom."
  },
  takeaways: [
    "**fixed** positions against the viewport.",
    "The element **never scrolls away**.",
    "Add body **padding** so content is not hidden underneath."
  ],
  quizQuestions: [
    { id: "css-m6l10-q1", question: "What happens to a fixed element when you scroll?", options: ["It stays in the same screen spot", "It scrolls with the page", "It disappears", "It grows"], correctAnswerIndex: 0, explanation: "**Fixed** elements are glued to the viewport — scrolling cannot move them." },
    { id: "css-m6l10-q2", question: "What is fixed positioning relative to?", options: ["The browser viewport", "Its parent div", "The nearest image", "The footer"], correctAnswerIndex: 0, explanation: "**Fixed** uses the viewport as its reference, not any parent element." }
  ]
};

// LESSON: Sticky
export const cssStickyContent: LessonContent = {
  heroTagline: "Scrolls normally, then sticks",
  introduction: "**position: sticky** is the clever hybrid of the position family: the element scrolls normally with the page until it hits an offset like **top: 0**.\n\nThen it sticks there — like a fixed element — until its container scrolls past. Sticky section headers, here we come.",
  definition: {
    term: "position: sticky",
    explanation: "**position: sticky** is a hybrid: the element scrolls with the page until it hits an offset like **top: 0**, then sticks there like a fixed element — but only within its container."
  },
  whyItMatters: "**Sticky** section headers and table headers stay visible while scrolling — better UX than fixed, with zero layout hacks.\n\nIt is the modern, elegant answer to 'keep this visible while scrolling'.",
  realWorldAnalogy: {
    title: "A fridge magnet on a whiteboard",
    story: "**sticky** is like a fridge magnet sliding up a whiteboard: it moves with your hand until it hits the top edge — then it stays put.\n\nBest of both behaviors.",
    comparison: [
      { item: "Before the edge", meaning: "**Magnet sliding** with your hand — behaving like relative." },
      { item: "At the edge", meaning: "**Magnet held** at the top edge — behaving like fixed, within its board." }
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
    { wrong: "position: sticky; with no top/offset value", correct: "Always set an offset like top: 0", reason: "Without a **threshold offset** like top: 0, sticky has nothing to stick to — it just scrolls normally." }
  ],
  tryItYourself: {
    html: `<div class="toc">Sticky menu</div>\n<p>Content below...</p>`,
    css: `.toc {\n  position: sticky;\n  top: 0;\n  background: #f8fafc;\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}`,
    instructions: "Change top: 0 to top: 20px and note the stick point moves."
  },
  takeaways: [
    "**sticky** flows until a scroll threshold, then sticks.",
    "It needs an **offset** like top: 0.",
    "It never leaves its **container**."
  ],
  quizQuestions: [
    { id: "css-m6l11-q1", question: "How does sticky behave?", options: ["Scrolls normally, then sticks at an offset", "Never moves", "Always floats", "Disappears on scroll"], correctAnswerIndex: 0, explanation: "**Sticky** behaves like relative until the threshold, then like fixed — the smooth operator of positioning." },
    { id: "css-m6l11-q2", question: "What does sticky require to work?", options: ["An offset like top: 0", "JavaScript", "A background image", "A fixed height"], correctAnswerIndex: 0, explanation: "The **offset** (like top: 0) defines exactly where the sticking begins." }
  ]
};

// LESSON: Z-index
export const cssZIndexContent: LessonContent = {
  heroTagline: "Control which element sits on top",
  introduction: "When elements overlap, who wins? **z-index** sets the stacking order: higher numbers paint on top of lower ones.\n\nOne catch: it only works on **positioned** elements (or flex/grid children). Static elements cannot play the stacking game.",
  definition: {
    term: "z-index",
    explanation: "**z-index** sets the **stacking order** of positioned elements: higher numbers paint on top of lower ones. It only works on **positioned** elements (or flex/grid children)."
  },
  whyItMatters: "**Modals** must cover pages, **dropdowns** must cover content — z-index decides who wins every overlap battle.\n\nWithout it, your popup would hide shyly behind the page it is supposed to cover.",
  realWorldAnalogy: {
    title: "Layers of paper on a desk",
    story: "**z-index** is like layers of paper on a desk: the sheet with the **highest number** sits on top of the pile.\n\nBigger number, higher up.",
    comparison: [
      { item: "z-index: 10", meaning: "A sheet **near the top** of the pile — z-index: 10." },
      { item: "z-index: 1", meaning: "A sheet **buried underneath** — z-index: 1." }
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
    { wrong: "z-index: 9999; on a static element doing nothing", correct: "Add position: relative (or absolute/fixed)", reason: "**z-index** only applies to positioned elements — on a static element it does absolutely nothing." }
  ],
  tryItYourself: {
    html: `<div class="a">A</div>\n<div class="b">B</div>`,
    css: `.a, .b {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 8px;\n}\n.a {\n  background: #fca5a5;\n  z-index: 1;\n  top: 20px;\n  left: 20px;\n}\n.b {\n  background: #93c5fd;\n  z-index: 2;\n  top: 50px;\n  left: 50px;\n}`,
    instructions: "Swap the z-index values and watch which box lands on top."
  },
  takeaways: [
    "**Higher z-index** paints on top.",
    "It needs a **positioned** element to work.",
    "Use a **scale** (10, 50, 100) to stay organized."
  ],
  quizQuestions: [
    { id: "css-m6l12-q1", question: "Which element appears on top?", options: ["The one with the higher z-index", "The one with the lower z-index", "The wider one", "The first in HTML"], correctAnswerIndex: 0, explanation: "**Higher z-index** values stack above lower ones — the bigger the number, the closer to your eyes." },
    { id: "css-m6l12-q2", question: "Why might z-index have no effect?", options: ["The element is not positioned", "The number is too small", "z-index is deprecated", "It needs a color"], correctAnswerIndex: 0, explanation: "**z-index** requires a non-static position — static elements are locked out of stacking." }
  ]
};
