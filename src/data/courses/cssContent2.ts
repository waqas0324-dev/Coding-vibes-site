// CSS Course content — part 2 of 4
// Modules 1-3: CSS Fundamentals, CSS Selectors, Colors and Backgrounds
import { LessonContent } from '../../types';

// ==============================
// MODULE 1: CSS Fundamentals
// ==============================

// LESSON: Introduction to CSS
export const cssIntroductionToCssContent: LessonContent = {
  heroTagline: "Meet the language that paints every website",
  introduction: "Every website you visit has two main parts: structure and style. HTML builds the structure, and CSS paints the colors, fonts, spacing, and layout on top of it.",
  definition: {
    term: "Introduction to CSS",
    explanation: "A first look at CSS — the stylesheet language browsers read to decide how each HTML element should look on screen."
  },
  whyItMatters: "You cannot build a real website without CSS. Even the simplest page needs it for readable text, spacing, and color.",
  realWorldAnalogy: {
    title: "Understanding the role of CSS",
    story: "HTML is the skeleton of a person, CSS is their clothes, skin, and hairstyle.",
    comparison: [
      { item: "HTML", meaning: "The bones and body structure — text, buttons, images." },
      { item: "CSS", meaning: "The outfit and makeup — colors, fonts, spacing, layout." }
    ]
  },
  syntaxStructure: `selector {
  property: value;
}`,
  codeExample: `h1 {
  color: blue;
  font-size: 32px;
}`,
  codeAnnotations: [
    { lineOrToken: "h1", description: "The selector picks which HTML element to style." },
    { lineOrToken: "color: blue;", description: "A declaration that sets the text color to blue." }
  ],
  commonMistakes: [
    { wrong: "h1 { color: blue }", correct: "h1 { color: blue; }", reason: "Every CSS declaration must end with a semicolon." }
  ],
  tryItYourself: {
    html: `<h1>Hello CSS</h1>`,
    css: `h1 {\n  color: blue;\n}`,
    instructions: "Change the color from blue to green and see the heading update."
  },
  takeaways: [
    "CSS controls how a webpage looks: colors, fonts, spacing, and layout.",
    "A CSS rule has a selector and one or more declarations.",
    "You write CSS in a stylesheet or a style block, not in plain HTML text."
  ],
  quizQuestions: [
    { id: "css-m1l1-q1", question: "What does CSS control on a webpage?", options: ["The visual style: colors, fonts, layout", "The database of the website", "The internet connection speed", "The browser's download history"], correctAnswerIndex: 0, explanation: "CSS controls presentation — how things look, not data or networking." },
    { id: "css-m1l1-q2", question: "Which two parts make up a basic CSS rule?", options: ["A link and a script", "A selector and a declaration", "A header and a footer", "A tag and an attribute"], correctAnswerIndex: 1, explanation: "A selector targets elements, and declarations set their styles." }
  ]
};

// LESSON: What is CSS?
export const cssWhatIsCssContent: LessonContent = {
  heroTagline: "Cascading Style Sheets — what it is, exactly",
  introduction: "CSS stands for Cascading Style Sheets. A style sheet is a list of rules, and cascading describes how the browser decides which rule wins when several rules target the same element.",
  definition: {
    term: "CSS",
    explanation: "A language that tells the browser how to display HTML elements — their colors, sizes, positions, and animations."
  },
  whyItMatters: "The word 'cascading' is the key idea of CSS. Understanding it explains why a style from one place can override a style from another.",
  realWorldAnalogy: {
    title: "Understanding the cascade",
    story: "Think of CSS rules as layers of paint: the last careful stroke on top decides the final color you see.",
    comparison: [
      { item: "Cascade", meaning: "Rules flow down and later or more specific rules win." },
      { item: "Style sheet", meaning: "A document holding all your style rules in one place." }
    ]
  },
  syntaxStructure: `/* CSS = selector + declarations */
p {
  color: red;
}`,
  codeExample: `p {
  color: red;
  font-size: 18px;
}

p {
  color: green;
}`,
  codeAnnotations: [
    { lineOrToken: "color: red;", description: "First rule sets paragraphs red." },
    { lineOrToken: "color: green;", description: "The later rule wins, so paragraphs become green." }
  ],
  commonMistakes: [
    { wrong: "h1 { colour: red; }", correct: "h1 { color: red; }", reason: "CSS uses American spelling: 'color', not 'colour'." }
  ],
  tryItYourself: {
    html: `<p>Which color wins?</p>`,
    css: `p { color: red; }\np { color: purple; }`,
    instructions: "Swap the two rules and notice which color the browser shows."
  },
  takeaways: [
    "CSS = Cascading Style Sheets.",
    "The cascade means rules combine, and conflicts resolve in a predictable order.",
    "CSS never changes HTML content — it only changes its appearance."
  ],
  quizQuestions: [
    { id: "css-m1l2-q1", question: "What does CSS stand for?", options: ["Computer Styled Sections", "Cascading Style Sheets", "Creative Style Syntax", "Colored Screen Styles"], correctAnswerIndex: 1, explanation: "CSS stands for Cascading Style Sheets." },
    { id: "css-m1l2-q2", question: "If two CSS rules set different colors on the same element, what happens?", options: ["The page breaks", "One rule wins based on cascade order", "Both colors mix together", "The browser ignores both"], correctAnswerIndex: 1, explanation: "The cascade resolves conflicts so one rule wins predictably." }
  ]
};

// LESSON: Why CSS is Used
export const cssWhyCssIsUsedContent: LessonContent = {
  heroTagline: "One stylesheet can style a thousand pages",
  introduction: "Before CSS, styling lived inside every HTML tag, which was messy and hard to change. CSS moved all styling to one place, so a single edit can update an entire website.",
  definition: {
    term: "Why CSS is used",
    explanation: "CSS separates design from content, making websites easier to maintain, faster to restyle, and consistent across every page."
  },
  whyItMatters: "Real websites have hundreds of pages. CSS lets you change the look of all of them by editing one file instead of one tag at a time.",
  realWorldAnalogy: {
    title: "Understanding shared styling",
    story: "A school uniform dress code is like CSS: one rule changes what every student wears, instead of asking each student separately.",
    comparison: [
      { item: "Without CSS", meaning: "Styling each element by hand, one tag at a time." },
      { item: "With CSS", meaning: "One rule styles every matching element at once." }
    ]
  },
  syntaxStructure: `/* One rule, many elements */
button {
  background: navy;
  color: white;
}`,
  codeExample: `button {
  background: navy;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
}`,
  codeAnnotations: [
    { lineOrToken: "button", description: "Targets every <button> on the page at once." },
    { lineOrToken: "border-radius: 6px;", description: "Rounds every button's corners in one line." }
  ],
  commonMistakes: [
    { wrong: "<button style='background:navy'>Save</button> on 50 pages", correct: "button { background: navy; } in one stylesheet", reason: "Repeating inline styles on many pages makes updates slow and error-prone." }
  ],
  tryItYourself: {
    html: `<button>Save</button>\n<button>Delete</button>`,
    css: `button {\n  background: navy;\n  color: white;\n  padding: 8px 16px;\n}`,
    instructions: "Change navy to crimson and watch both buttons update together."
  },
  takeaways: [
    "CSS keeps design separate from HTML content.",
    "One rule can style hundreds of matching elements at once.",
    "Shared stylesheets make websites consistent and easy to update."
  ],
  quizQuestions: [
    { id: "css-m1l3-q1", question: "What is the main benefit of CSS for a large website?", options: ["It makes pages load slower", "One stylesheet can style every page at once", "It replaces the need for HTML", "It stores user passwords"], correctAnswerIndex: 1, explanation: "A single stylesheet keeps hundreds of pages consistent and easy to update." },
    { id: "css-m1l3-q2", question: "What problem did CSS solve?", options: ["Styling was mixed into every HTML tag", "Websites had too many images", "Browsers were too fast", "HTML had no paragraphs"], correctAnswerIndex: 0, explanation: "CSS moved styling out of HTML tags into dedicated stylesheets." }
  ]
};

// LESSON: How CSS Works
export const cssHowCssWorksContent: LessonContent = {
  heroTagline: "From stylesheet to pixels: the browser's job",
  introduction: "When a browser loads a page, it reads your HTML to build the structure, then reads your CSS to build the styling. It matches each CSS selector to HTML elements and paints the result on screen.",
  definition: {
    term: "How CSS works",
    explanation: "The browser finds your CSS rules, matches their selectors to HTML elements, computes the final style for each element, and renders the styled page."
  },
  whyItMatters: "Knowing this flow helps you debug: if a style is missing, either the CSS file did not load or the selector did not match.",
  realWorldAnalogy: {
    title: "Understanding the browser's workflow",
    story: "Building a house: the HTML is the blueprint of rooms, and CSS is the interior designer who paints walls and places furniture.",
    comparison: [
      { item: "HTML parsing", meaning: "Browser reads the structure of the page." },
      { item: "CSS matching", meaning: "Browser applies each rule to matching elements, then paints." }
    ]
  },
  syntaxStructure: `<!-- Browser links the two files -->
<link rel="stylesheet" href="style.css">`,
  codeExample: `/* style.css */
body {
  background: white;
}

h1 {
  color: darkblue;
}`,
  codeAnnotations: [
    { lineOrToken: "body", description: "Browser matches the <body> element and paints it white." },
    { lineOrToken: "h1", description: "Browser matches every <h1> and paints it dark blue." }
  ],
  commonMistakes: [
    { wrong: "<link rel='stylesheet' href='styles.css'> when file is style.css", correct: "<link rel='stylesheet' href='style.css'>", reason: "A wrong file name means the CSS never loads and the page stays unstyled." }
  ],
  tryItYourself: {
    html: `<h1>Paint me</h1>`,
    css: `h1 {\n  color: darkblue;\n  background: lightyellow;\n}`,
    instructions: "Change darkblue to teal and notice the heading repaint instantly."
  },
  takeaways: [
    "The browser reads HTML first, then CSS.",
    "Selectors match rules to elements; matched elements get styled.",
    "If styles are missing, check the file link and the selector spelling."
  ],
  quizQuestions: [
    { id: "css-m1l4-q1", question: "What does the browser do with CSS?", options: ["Matches selectors to HTML elements and paints styles", "Deletes the HTML file", "Sends emails to users", "Compresses images"], correctAnswerIndex: 0, explanation: "The browser matches selectors to elements, computes styles, and renders them." },
    { id: "css-m1l4-q2", question: "Your page shows no styles at all. What should you check first?", options: ["The stylesheet link and selector spelling", "Your keyboard batteries", "The website's logo", "Your screen brightness"], correctAnswerIndex: 0, explanation: "A broken link or a misspelled selector is the most common cause." }
  ]
};

// LESSON: CSS Syntax
export const cssCssSyntaxContent: LessonContent = {
  heroTagline: "Selectors, braces, properties, and colons",
  introduction: "CSS syntax is a strict pattern: a selector, an opening brace, one or more property-value pairs separated by colons and ended with semicolons, and a closing brace.",
  definition: {
    term: "CSS syntax",
    explanation: "The exact grammar of a CSS rule: selector { property: value; property: value; }."
  },
  whyItMatters: "One missing brace or colon breaks the whole rule. Learning the pattern precisely saves hours of debugging.",
  realWorldAnalogy: {
    title: "Understanding CSS grammar",
    story: "A CSS rule is like a recipe line: the dish name (selector), then ingredients (properties) with amounts (values).",
    comparison: [
      { item: "Property", meaning: "What to change, like color." },
      { item: "Value", meaning: "How to change it, like red." }
    ]
  },
  syntaxStructure: `selector {
  property: value;
  property: value;
}`,
  codeExample: `h2 {
  color: #333;
  font-size: 24px;
  text-align: center;
}`,
  codeAnnotations: [
    { lineOrToken: "color: #333;", description: "Property 'color' with value '#333' (dark gray)." },
    { lineOrToken: "text-align: center;", description: "Property 'text-align' with value 'center'." }
  ],
  commonMistakes: [
    { wrong: "h2 { color = red; }", correct: "h2 { color: red; }", reason: "CSS uses a colon between property and value, not an equals sign." }
  ],
  tryItYourself: {
    html: `<h2>Syntax practice</h2>`,
    css: `h2 {\n  color: #333;\n  font-size: 24px;\n}`,
    instructions: "Add a new line text-align: center; and watch the heading move."
  },
  takeaways: [
    "Property and value are separated by a colon.",
    "Each declaration ends with a semicolon.",
    "Declarations sit inside curly braces after the selector."
  ],
  quizQuestions: [
    { id: "css-m1l5-q1", question: "Which character separates a CSS property from its value?", options: ["=", ":", ";", ","], correctAnswerIndex: 1, explanation: "A colon separates the property from its value." },
    { id: "css-m1l5-q2", question: "Which ends a CSS declaration?", options: ["A period", "A semicolon", "A comma", "A slash"], correctAnswerIndex: 1, explanation: "Every declaration ends with a semicolon." }
  ]
};

// LESSON: CSS Rules
export const cssCssRulesContent: LessonContent = {
  heroTagline: "One rule, many declarations, endless styling",
  introduction: "A CSS rule is the complete unit: selector plus declaration block. You can put many declarations in one rule, and you can write many rules in one stylesheet.",
  definition: {
    term: "CSS rule",
    explanation: "A full statement made of a selector and a block of declarations, telling the browser exactly what to style and how."
  },
  whyItMatters: "Thinking in rules helps you organize stylesheets: each rule does one clear job for one group of elements.",
  realWorldAnalogy: {
    title: "Understanding rules as instructions",
    story: "A CSS rule is like a single classroom instruction: 'Everyone in row 3 (selector), stand up and face the board (declarations).'",
    comparison: [
      { item: "Selector", meaning: "Who the instruction applies to." },
      { item: "Declarations", meaning: "What they should do." }
    ]
  },
  syntaxStructure: `selector {
  declaration;
  declaration;
}`,
  codeExample: `.note {
  background: lightyellow;
  border-left: 4px solid gold;
  padding: 12px;
}`,
  codeAnnotations: [
    { lineOrToken: ".note", description: "Selector targets every element with class 'note'." },
    { lineOrToken: "border-left: 4px solid gold;", description: "One of three declarations inside this rule." }
  ],
  commonMistakes: [
    { wrong: ".note background: yellow; }", correct: ".note { background: yellow; }", reason: "The declaration block must open with a curly brace." }
  ],
  tryItYourself: {
    html: `<div class="note">Remember this</div>`,
    css: `.note {\n  background: lightyellow;\n  padding: 12px;\n}`,
    instructions: "Add border-left: 4px solid gold; inside the rule."
  },
  takeaways: [
    "A rule = selector + declaration block.",
    "One rule can hold many declarations.",
    "A stylesheet is simply a list of rules."
  ],
  quizQuestions: [
    { id: "css-m1l6-q1", question: "What are the two parts of a CSS rule?", options: ["A selector and a declaration block", "A link and an image", "A table and a row", "A div and a span"], correctAnswerIndex: 0, explanation: "Every rule pairs a selector with its declaration block." },
    { id: "css-m1l6-q2", question: "How many declarations can one rule contain?", options: ["Only one", "As many as needed", "Exactly two", "Zero"], correctAnswerIndex: 1, explanation: "A rule can hold any number of declarations." }
  ]
};

// LESSON: Inline CSS
export const cssInlineCssContent: LessonContent = {
  heroTagline: "Styling one element, right inside its tag",
  introduction: "Inline CSS applies styles directly to a single HTML element using the style attribute. It only affects that one element and nothing else.",
  definition: {
    term: "Inline CSS",
    explanation: "CSS written inside an HTML element's style attribute, styling just that element."
  },
  whyItMatters: "Inline styles are quick for testing or one-off tweaks, but they cannot be reused, so they get messy fast.",
  realWorldAnalogy: {
    title: "Understanding inline styles",
    story: "Inline CSS is like a sticky note on one box: the message only applies to that box, and no other box sees it.",
    comparison: [
      { item: "style attribute", meaning: "The sticky note carrying the style." },
      { item: "Element", meaning: "The one box the note is stuck to." }
    ]
  },
  syntaxStructure: `<p style="color: red; font-size: 20px;">Text</p>`,
  codeExample: `<p style="color: red; font-weight: bold;">
  This paragraph is red and bold.
</p>`,
  codeAnnotations: [
    { lineOrToken: 'style="..."', description: "The style attribute holds CSS for this element only." },
    { lineOrToken: "font-weight: bold;", description: "Makes just this paragraph's text bold." }
  ],
  commonMistakes: [
    { wrong: '<p style="color: red">Text</p>', correct: '<p style="color: red;">Text</p>', reason: "Declarations inside the style attribute still need semicolons." }
  ],
  tryItYourself: {
    html: `<p style="color: red;">One red paragraph</p>\n<p>A normal paragraph</p>`,
    css: ``,
    instructions: "Change red to blue and notice only the first paragraph changes."
  },
  takeaways: [
    "Inline CSS uses the style attribute on a single element.",
    "It affects only that element — nothing else.",
    "It is handy for quick tests but hard to maintain."
  ],
  quizQuestions: [
    { id: "css-m1l7-q1", question: "How do you write inline CSS?", options: ["In the style attribute of an element", "In a separate .js file", "Inside the <title> tag", "In the browser address bar"], correctAnswerIndex: 0, explanation: "Inline CSS lives in the style attribute of the element itself." },
    { id: "css-m1l7-q2", question: "What is the main drawback of inline CSS?", options: ["It styles too many elements", "It cannot be reused and gets messy", "Browsers cannot read it", "It only works on phones"], correctAnswerIndex: 1, explanation: "Inline styles apply to one element only, so repeating them is messy." }
  ]
};

// LESSON: Internal CSS
export const cssInternalCssContent: LessonContent = {
  heroTagline: "A style block for one whole page",
  introduction: "Internal CSS lives inside a <style> element in the page's <head>. It styles every matching element on that one page, but no other pages.",
  definition: {
    term: "Internal CSS",
    explanation: "CSS rules written inside a <style> block in the document head, applying to that single HTML page."
  },
  whyItMatters: "Internal CSS is perfect for single-page demos or when a page needs unique styles that should not leak into other pages.",
  realWorldAnalogy: {
    title: "Understanding internal styles",
    story: "Internal CSS is like house rules written on the kitchen fridge: they apply to everyone in this house, but not to the neighbors.",
    comparison: [
      { item: "<style> block", meaning: "The fridge where the house rules are posted." },
      { item: "One page", meaning: "The house — other pages are different houses." }
    ]
  },
  syntaxStructure: `<head>
  <style>
    h1 { color: purple; }
  </style>
</head>`,
  codeExample: `<head>
  <style>
    body { background: #f5f5f5; }
    h1 { color: purple; }
    p { line-height: 1.6; }
  </style>
</head>`,
  codeAnnotations: [
    { lineOrToken: "<style>", description: "Container for the page's internal CSS rules." },
    { lineOrToken: "p { line-height: 1.6; }", description: "Styles every paragraph on this page only." }
  ],
  commonMistakes: [
    { wrong: "Putting <style> inside <body> content randomly", correct: "Place <style> inside the <head> section", reason: "Browsers expect page styles in the head; stray style tags in the body are invalid and confusing." }
  ],
  tryItYourself: {
    html: `<h1>Page title</h1>\n<p>Page text</p>`,
    css: `h1 {\n  color: purple;\n}\np {\n  line-height: 1.6;\n}`,
    instructions: "Change purple to darkorange and see the heading update."
  },
  takeaways: [
    "Internal CSS sits in a <style> block inside <head>.",
    "It styles the whole page it lives on.",
    "It does not affect any other page."
  ],
  quizQuestions: [
    { id: "css-m1l8-q1", question: "Where does internal CSS go?", options: ["Inside a <style> block in <head>", "Inside the <footer>", "In a .png image", "In the browser settings"], correctAnswerIndex: 0, explanation: "Internal CSS lives in a <style> element within the document head." },
    { id: "css-m1l8-q2", question: "Which pages does internal CSS affect?", options: ["Every page on the internet", "Only the page it is written in", "Only printed pages", "Only mobile pages"], correctAnswerIndex: 1, explanation: "Internal styles apply to their own page only." }
  ]
};

// LESSON: External CSS
export const cssExternalCssContent: LessonContent = {
  heroTagline: "One file that styles your entire website",
  introduction: "External CSS is a separate .css file containing all your rules. Every page that links to it shares the same styles, so the whole site stays consistent.",
  definition: {
    term: "External CSS",
    explanation: "CSS written in its own .css file, shared across any number of HTML pages."
  },
  whyItMatters: "This is how professional websites work: one stylesheet for the whole site means one place to fix or redesign everything.",
  realWorldAnalogy: {
    title: "Understanding external stylesheets",
    story: "External CSS is like a company's brand guide: one document tells every branch office exactly which colors and fonts to use.",
    comparison: [
      { item: ".css file", meaning: "The brand guide document." },
      { item: "Linked pages", meaning: "Branch offices following the guide." }
    ]
  },
  syntaxStructure: `/* style.css */
body {
  font-family: Arial;
}`,
  codeExample: `/* style.css */
body {
  font-family: Arial, sans-serif;
  background: #fafafa;
}

a {
  color: #0066cc;
  text-decoration: none;
}`,
  codeAnnotations: [
    { lineOrToken: "/* style.css */", description: "Comment showing this code lives in an external file." },
    { lineOrToken: "a { ... }", description: "Styles every link on every page that loads this file." }
  ],
  commonMistakes: [
    { wrong: "Writing <style> tags inside the .css file", correct: "Write plain CSS rules only, no <style> tags", reason: "A .css file holds raw CSS; HTML tags like <style> inside it break the stylesheet." }
  ],
  tryItYourself: {
    html: `<a href="#">A link</a>`,
    css: `a {\n  color: #0066cc;\n  text-decoration: none;\n}`,
    instructions: "Change the color to #cc0000 and remove the underline effect stays."
  },
  takeaways: [
    "External CSS is a standalone .css file.",
    "Many pages can share one stylesheet.",
    "Never put HTML tags inside a .css file."
  ],
  quizQuestions: [
    { id: "css-m1l9-q1", question: "What is external CSS?", options: ["CSS in a separate .css file", "CSS written on paper", "CSS inside an image", "CSS that only works offline"], correctAnswerIndex: 0, explanation: "External CSS lives in its own .css file linked by pages." },
    { id: "css-m1l9-q2", question: "Can a .css file contain <style> tags?", options: ["Yes, always", "No, only plain CSS rules", "Only on weekends", "Only for headings"], correctAnswerIndex: 1, explanation: "A .css file contains raw CSS — HTML tags would break it." }
  ]
};

// LESSON: Linking CSS
export const cssLinkingCssContent: LessonContent = {
  heroTagline: "The <link> tag that connects page to stylesheet",
  introduction: "Linking CSS means connecting an HTML page to its external stylesheet with a <link> element. Without this link, the browser never finds your styles.",
  definition: {
    term: "Linking CSS",
    explanation: "Using the <link> element in the document head to attach an external .css file to a page."
  },
  whyItMatters: "A missing or mistyped link is the number one reason a page looks unstyled. This tiny tag does the whole connection job.",
  realWorldAnalogy: {
    title: "Understanding the link element",
    story: "The <link> tag is like a power cord: the lamp (page) only lights up when it is plugged into the socket (stylesheet).",
    comparison: [
      { item: "rel=\"stylesheet\"", meaning: "Tells the browser this file is a stylesheet." },
      { item: "href=\"style.css\"", meaning: "The address of the stylesheet file." }
    ]
  },
  syntaxStructure: `<link rel="stylesheet" href="style.css">`,
  codeExample: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Styled page</h1>
</body>
</html>`,
  codeAnnotations: [
    { lineOrToken: 'rel="stylesheet"', description: "Declares the relationship: this linked file is a stylesheet." },
    { lineOrToken: 'href="style.css"', description: "Points to the CSS file's location." }
  ],
  commonMistakes: [
    { wrong: '<link rel="stylesheet" href="style.css"> in <body>', correct: 'Place <link> inside <head>', reason: "Stylesheets belong in the head so styles load before the page renders." }
  ],
  tryItYourself: {
    html: `<h1>Styled page</h1>`,
    css: `h1 {\n  color: darkgreen;\n}`,
    instructions: "Imagine this CSS is in style.css — change darkgreen to navy."
  },
  takeaways: [
    "Use <link rel=\"stylesheet\" href=\"...\"> to attach a stylesheet.",
    "The <link> element goes inside <head>.",
    "Check href spelling when styles fail to appear."
  ],
  quizQuestions: [
    { id: "css-m1l10-q1", question: "Which element links an external stylesheet?", options: ["<link>", "<style>", "<css>", "<attach>"], correctAnswerIndex: 0, explanation: "The <link> element connects the page to its stylesheet." },
    { id: "css-m1l10-q2", question: "Where does the <link> element belong?", options: ["Inside <head>", "Inside <footer>", "After </html>", "Inside <p>"], correctAnswerIndex: 0, explanation: "Stylesheet links go in the document head." }
  ]
};

// LESSON: CSS Comments
export const cssCssCommentsContent: LessonContent = {
  heroTagline: "Notes for humans that browsers ignore",
  introduction: "CSS comments start with /* and end with */. The browser skips them completely, so you can use them to label sections, explain tricky rules, or temporarily disable code.",
  definition: {
    term: "CSS comments",
    explanation: "Text wrapped in /* */ that the browser ignores, used to document and organize stylesheets."
  },
  whyItMatters: "Stylesheets grow large. Comments act as signposts so you (and teammates) can find and understand sections months later.",
  realWorldAnalogy: {
    title: "Understanding comments",
    story: "CSS comments are like margin notes in a textbook: helpful for the reader, invisible to the exam.",
    comparison: [
      { item: "/* comment */", meaning: "The margin note." },
      { item: "Browser", meaning: "Skips the notes and reads only the real rules." }
    ]
  },
  syntaxStructure: `/* This is a comment */
h1 {
  color: blue; /* inline note */
}`,
  codeExample: `/* ===== Header styles ===== */
header {
  background: #222;
  color: white;
}

/* Temporarily disabled:
.hero { display: none; }
*/`,
  codeAnnotations: [
    { lineOrToken: "/* ===== Header styles ===== */", description: "A section label comment." },
    { lineOrToken: "/* Temporarily disabled: ... */", description: "Commenting out code to disable it without deleting." }
  ],
  commonMistakes: [
    { wrong: "<!-- comment --> inside a .css file", correct: "/* comment */ inside a .css file", reason: "HTML comments do not work in CSS files; CSS comments use /* */." }
  ],
  tryItYourself: {
    html: `<h1>Notes</h1>`,
    css: `/* Change the color below */\nh1 {\n  color: blue;\n}`,
    instructions: "Add your own comment above the rule describing what it does."
  },
  takeaways: [
    "CSS comments use /* and */.",
    "Browsers ignore everything inside comments.",
    "Use comments to label sections or disable code temporarily."
  ],
  quizQuestions: [
    { id: "css-m1l11-q1", question: "How do you write a CSS comment?", options: ["/* comment */", "<!-- comment -->", "// comment", "# comment"], correctAnswerIndex: 0, explanation: "CSS comments are wrapped in /* */." },
    { id: "css-m1l11-q2", question: "What does the browser do with CSS comments?", options: ["Ignores them completely", "Shows them on the page", "Treats them as errors", "Prints them in the console"], correctAnswerIndex: 0, explanation: "Comments are for humans; browsers skip them." }
  ]
};

// ==============================
// MODULE 2: CSS Selectors
// ==============================

// LESSON: Introduction to Selectors
export const cssIntroToSelectorsContent: LessonContent = {
  heroTagline: "Selectors point at exactly what to style",
  introduction: "A selector is the part of a CSS rule that chooses which HTML elements get styled. Everything in CSS starts with picking the right selector.",
  definition: {
    term: "CSS selector",
    explanation: "A pattern that matches HTML elements so the browser knows which ones a rule should style."
  },
  whyItMatters: "Picking the right selector is the most basic CSS skill. A wrong selector means your rule styles nothing — or styles the wrong things.",
  realWorldAnalogy: {
    title: "Understanding selectors",
    story: "A selector is like calling out names in a classroom: only the students whose names you call stand up.",
    comparison: [
      { item: "Selector", meaning: "The names you call out." },
      { item: "Matched elements", meaning: "The students who stand up." }
    ]
  },
  syntaxStructure: `selector {
  property: value;
}`,
  codeExample: `h1 { color: blue; }
.highlight { background: yellow; }
#main { width: 800px; }`,
  codeAnnotations: [
    { lineOrToken: "h1", description: "Element selector — matches all <h1> tags." },
    { lineOrToken: ".highlight", description: "Class selector — matches elements with class='highlight'." },
    { lineOrToken: "#main", description: "ID selector — matches the element with id='main'." }
  ],
  commonMistakes: [
    { wrong: ".main { color: red; } for <div id='main'>", correct: "#main { color: red; }", reason: "Classes use a dot, IDs use a hash — mixing them matches nothing." }
  ],
  tryItYourself: {
    html: `<h1>Title</h1>\n<p class="highlight">Note</p>`,
    css: `h1 {\n  color: blue;\n}\n.highlight {\n  background: yellow;\n}`,
    instructions: "Change .highlight to #highlight and watch the style stop matching."
  },
  takeaways: [
    "Selectors decide which elements a rule styles.",
    "Element, class, and ID selectors are the three basics.",
    "The selector must exactly match the HTML."
  ],
  quizQuestions: [
    { id: "css-m2l1-q1", question: "What does a CSS selector do?", options: ["Chooses which HTML elements to style", "Loads images faster", "Creates new HTML tags", "Deletes old styles"], correctAnswerIndex: 0, explanation: "A selector matches elements so the rule knows what to style." },
    { id: "css-m2l1-q2", question: "Which symbol starts a class selector?", options: [".", "#", "*", "&"], correctAnswerIndex: 0, explanation: "Class selectors begin with a dot." }
  ]
};

// LESSON: Element Selector
export const cssElementSelectorContent: LessonContent = {
  heroTagline: "Style every <p>, <h1>, or <div> at once",
  introduction: "The element selector targets all HTML elements of one type. Write the tag name — p, h1, div — and the rule styles every matching element on the page.",
  definition: {
    term: "Element selector",
    explanation: "A selector made of a plain HTML tag name that styles every element with that tag."
  },
  whyItMatters: "It is the fastest way to set base styles, like making all paragraphs readable or all headings the same color.",
  realWorldAnalogy: {
    title: "Understanding element selectors",
    story: "An element selector is like a rule for 'everyone wearing a red shirt' — it does not care who you are, only what you are.",
    comparison: [
      { item: "Tag name", meaning: "The shirt color everyone shares." },
      { item: "All matching elements", meaning: "Everyone wearing that shirt." }
    ]
  },
  syntaxStructure: `p {
  color: blue;
}`,
  codeExample: `p {
  color: #333;
  font-size: 16px;
  line-height: 1.5;
}`,
  codeAnnotations: [
    { lineOrToken: "p", description: "Selects every <p> element on the page." },
    { lineOrToken: "color", description: "Sets the text color." }
  ],
  commonMistakes: [
    { wrong: "<p> { color: blue; }", correct: "p { color: blue; }", reason: "Selectors use the bare tag name — no angle brackets." }
  ],
  tryItYourself: {
    html: `<p>First</p>\n<p>Second</p>`,
    css: `p {\n  color: red;\n}`,
    instructions: "Change the color to green and watch both paragraphs change."
  },
  takeaways: [
    "Element selectors use the plain tag name.",
    "They style every matching element at once.",
    "Great for base styles across a page."
  ],
  quizQuestions: [
    { id: "css-m2l2-q1", question: "What does the selector p target?", options: ["Every <p> element on the page", "Only the first paragraph", "The page title", "Images only"], correctAnswerIndex: 0, explanation: "An element selector matches all elements with that tag name." },
    { id: "css-m2l2-q2", question: "How do you write an element selector for headings?", options: ["h1", ".h1", "#h1", "<h1>"], correctAnswerIndex: 0, explanation: "Just the tag name, with no dot, hash, or brackets." }
  ]
};

// LESSON: Class Selector
export const cssClassSelectorContent: LessonContent = {
  heroTagline: "Reusable styles for any group of elements",
  introduction: "The class selector targets elements that share a class name. Add class=\"card\" to any elements, then style them all with .card — even if they are different tag types.",
  definition: {
    term: "Class selector",
    explanation: "A selector starting with a dot that matches every element carrying that class name."
  },
  whyItMatters: "Classes are the workhorse of real CSS: reusable, combinable, and the standard way to style components like cards and buttons.",
  realWorldAnalogy: {
    title: "Understanding class selectors",
    story: "Classes are like club memberships: anyone can join the 'highlight' club, and one rule styles all members.",
    comparison: [
      { item: "class=\"card\"", meaning: "Joining the card club." },
      { item: ".card", meaning: "The rule that styles all club members." }
    ]
  },
  syntaxStructure: `.card {
  border: 1px solid #ccc;
}`,
  codeExample: `<div class="card">Box one</div>
<p class="card">Box two</p>`,
  codeAnnotations: [
    { lineOrToken: 'class="card"', description: "HTML marks elements as members of the 'card' group." },
    { lineOrToken: ".card", description: "CSS selects all members, whatever their tag." }
  ],
  commonMistakes: [
    { wrong: "card { color: red; } for class='card'", correct: ".card { color: red; }", reason: "Class selectors need the leading dot; without it the browser looks for a <card> tag." }
  ],
  tryItYourself: {
    html: `<div class="card">Box one</div>\n<p class="card">Box two</p>`,
    css: `.card {\n  border: 2px solid #333;\n  padding: 12px;\n}`,
    instructions: "Change the border color to blue and see both boxes update."
  },
  takeaways: [
    "Class selectors start with a dot.",
    "One class can style many elements of different types.",
    "An element can carry several classes at once."
  ],
  quizQuestions: [
    { id: "css-m2l3-q1", question: "Which selector matches class=\"btn\"?", options: [".btn", "#btn", "btn", "*btn"], correctAnswerIndex: 0, explanation: "Classes use a leading dot." },
    { id: "css-m2l3-q2", question: "Can a <div> and a <p> share the same class?", options: ["Yes, classes work on any element", "No, never", "Only on weekends", "Only inside forms"], correctAnswerIndex: 0, explanation: "Classes are reusable across any tag types." }
  ]
};

// LESSON: ID Selector
export const cssIdSelectorContent: LessonContent = {
  heroTagline: "One unique element, one precise style",
  introduction: "The ID selector targets the single element with a matching id attribute. IDs must be unique — only one element per page may use a given id.",
  definition: {
    term: "ID selector",
    explanation: "A selector starting with a hash (#) that matches the one element carrying that unique id."
  },
  whyItMatters: "IDs are perfect for one-of-a-kind page parts like the header, main banner, or footer — places you style exactly once.",
  realWorldAnalogy: {
    title: "Understanding ID selectors",
    story: "An ID is like a passport number: it belongs to exactly one person, and using it finds that person instantly.",
    comparison: [
      { item: 'id="header"', meaning: "The passport number." },
      { item: "#header", meaning: "Looking someone up by passport number." }
    ]
  },
  syntaxStructure: `#header {
  background: #222;
}`,
  codeExample: `<header id="site-header">
  <h1>My Site</h1>
</header>`,
  codeAnnotations: [
    { lineOrToken: 'id="site-header"', description: "Unique identifier on this one header element." },
    { lineOrToken: "#site-header", description: "CSS selector matching that single element." }
  ],
  commonMistakes: [
    { wrong: "Using id='box' on three different divs", correct: "Use id='box' once; use class='box' for repeats", reason: "IDs must be unique per page — duplicates break matching and scripts." }
  ],
  tryItYourself: {
    html: `<div id="banner">Sale!</div>`,
    css: `#banner {\n  background: gold;\n  padding: 16px;\n  text-align: center;\n}`,
    instructions: "Change gold to tomato and watch the banner update."
  },
  takeaways: [
    "ID selectors start with a hash (#).",
    "Each id may appear on only one element per page.",
    "Use IDs for unique page sections, classes for repeats."
  ],
  quizQuestions: [
    { id: "css-m2l4-q1", question: "Which selector matches id=\"menu\"?", options: ["#menu", ".menu", "menu", "*menu"], correctAnswerIndex: 0, explanation: "IDs use a leading hash." },
    { id: "css-m2l4-q2", question: "How many elements may share the same id on one page?", options: ["Only one", "As many as you like", "Exactly ten", "Two"], correctAnswerIndex: 0, explanation: "IDs must be unique per page." }
  ]
};

// LESSON: Universal Selector
export const cssUniversalSelectorContent: LessonContent = {
  heroTagline: "One star that selects everything",
  introduction: "The universal selector * matches every element on the page. It is most famous for CSS resets, where it removes default margins and sets box-sizing on everything at once.",
  definition: {
    term: "Universal selector",
    explanation: "The * symbol, which matches all HTML elements on the page."
  },
  whyItMatters: "A single * rule can wipe out inconsistent browser defaults, giving you a clean, predictable starting point.",
  realWorldAnalogy: {
    title: "Understanding the universal selector",
    story: "The * selector is like a school announcement over the loudspeaker: every student hears it at the same time.",
    comparison: [
      { item: "*", meaning: "The loudspeaker." },
      { item: "Every element", meaning: "Every student in the school." }
    ]
  },
  syntaxStructure: `* {
  margin: 0;
  padding: 0;
}`,
  codeExample: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,
  codeAnnotations: [
    { lineOrToken: "*", description: "Matches every single element on the page." },
    { lineOrToken: "box-sizing: border-box;", description: "Makes width calculations predictable everywhere." }
  ],
  commonMistakes: [
    { wrong: "* { font-size: 20px; } as a base style", correct: "body { font-size: 16px; } for base text", reason: "Styling * with heavy properties hits every element and can override inheritance you wanted." }
  ],
  tryItYourself: {
    html: `<h1>Title</h1>\n<p>Text with default spacing removed.</p>`,
    css: `* {\n  margin: 0;\n  padding: 0;\n}`,
    instructions: "Remove the * rule and notice the default spacing return."
  },
  takeaways: [
    "* selects every element on the page.",
    "Commonly used for resets and box-sizing.",
    "Use it lightly — heavy * rules affect everything."
  ],
  quizQuestions: [
    { id: "css-m2l5-q1", question: "What does the * selector match?", options: ["Every element on the page", "Only images", "Only the body", "Nothing"], correctAnswerIndex: 0, explanation: "The universal selector matches all elements." },
    { id: "css-m2l5-q2", question: "What is the most common use of *?", options: ["CSS resets", "Playing videos", "Sending forms", "Drawing charts"], correctAnswerIndex: 0, explanation: "* is typically used to reset default margins and padding." }
  ]
};

// LESSON: Group Selector
export const cssGroupSelectorContent: LessonContent = {
  heroTagline: "Style several selectors with one rule",
  introduction: "The group selector lets you apply the same declarations to multiple selectors at once. Separate selectors with commas, and one rule styles them all.",
  definition: {
    term: "Group selector",
    explanation: "Multiple selectors joined by commas sharing a single declaration block."
  },
  whyItMatters: "It keeps stylesheets short and consistent: instead of repeating the same color in three rules, you write it once.",
  realWorldAnalogy: {
    title: "Understanding grouping",
    story: "Grouping selectors is like one email sent to three people — the same message reaches everyone on the list.",
    comparison: [
      { item: "h1, h2, h3", meaning: "The email's recipient list." },
      { item: "Shared declarations", meaning: "The message everyone receives." }
    ]
  },
  syntaxStructure: `h1, h2, h3 {
  color: navy;
}`,
  codeExample: `h1, h2, h3 {
  font-family: Georgia, serif;
  color: #1a1a2e;
  margin-bottom: 12px;
}`,
  codeAnnotations: [
    { lineOrToken: "h1, h2, h3", description: "Three selectors grouped with commas." },
    { lineOrToken: "color: #1a1a2e;", description: "Applied to all three heading levels." }
  ],
  commonMistakes: [
    { wrong: "h1 h2 { color: red; }", correct: "h1, h2 { color: red; }", reason: "A space means descendant; a comma means group — they do very different things." }
  ],
  tryItYourself: {
    html: `<h1>One</h1>\n<h2>Two</h2>\n<h3>Three</h3>`,
    css: `h1, h2, h3 {\n  color: navy;\n}`,
    instructions: "Add p to the group and watch a paragraph join in."
  },
  takeaways: [
    "Commas group selectors into one rule.",
    "Grouped selectors share all declarations.",
    "A space between selectors is NOT grouping — it means descendant."
  ],
  quizQuestions: [
    { id: "css-m2l6-q1", question: "How do you group selectors?", options: ["Separate them with commas", "Separate them with spaces", "Put them in brackets", "Stack them on lines without punctuation"], correctAnswerIndex: 0, explanation: "Commas group selectors into one shared rule." },
    { id: "css-m2l6-q2", question: "Why group selectors?", options: ["To avoid repeating the same declarations", "To make pages slower", "To hide content", "To break the layout"], correctAnswerIndex: 0, explanation: "Grouping keeps stylesheets short and consistent." }
  ]
};

// LESSON: Attribute Selector
export const cssAttributeSelectorContent: LessonContent = {
  heroTagline: "Select elements by their attributes",
  introduction: "Attribute selectors match elements based on their attributes and values — for example, all inputs of type text, or all links that open in a new tab.",
  definition: {
    term: "Attribute selector",
    explanation: "A selector using square brackets that matches elements carrying a specific attribute, optionally with a specific value."
  },
  whyItMatters: "It styles elements by what they are configured to do — like password fields or required inputs — without adding extra classes.",
  realWorldAnalogy: {
    title: "Understanding attribute selectors",
    story: "Attribute selectors are like sorting mail by stamp type: you pick envelopes by a property they carry, not by who they are addressed to.",
    comparison: [
      { item: "[type=\"text\"]", meaning: "Envelopes with a first-class stamp." },
      { item: "input", meaning: "All envelopes regardless of stamp." }
    ]
  },
  syntaxStructure: `input[type="text"] {
  border: 1px solid #999;
}`,
  codeExample: `input[type="text"] {
  border: 2px solid #4a90d9;
  padding: 8px;
  border-radius: 4px;
}

input[type="password"] {
  border: 2px solid #d94a4a;
}`,
  codeAnnotations: [
    { lineOrToken: '[type="text"]', description: "Matches only inputs whose type attribute is text." },
    { lineOrToken: '[type="password"]', description: "Matches only password inputs." }
  ],
  commonMistakes: [
    { wrong: "input[type=text] with quotes missing sometimes breaks", correct: "input[type=\"text\"]", reason: "Quoting attribute values is safer and works in every case." }
  ],
  tryItYourself: {
    html: `<input type="text" placeholder="Name">\n<input type="password" placeholder="Secret">`,
    css: `input[type="text"] {\n  border: 2px solid #4a90d9;\n}`,
    instructions: "Add a rule for input[type=\"password\"] with a red border."
  },
  takeaways: [
    "Attribute selectors use square brackets.",
    "They match by attribute presence or exact value.",
    "Quote attribute values for safety."
  ],
  quizQuestions: [
    { id: "css-m2l7-q1", question: "Which selector matches <input type=\"email\">?", options: ["input[type=\"email\"]", "input.email", "#email input", "input > email"], correctAnswerIndex: 0, explanation: "Attribute selectors use [attribute=\"value\"]." },
    { id: "css-m2l7-q2", question: "What do attribute selectors match on?", options: ["Attributes and their values", "Element positions only", "Screen size", "Mouse clicks"], correctAnswerIndex: 0, explanation: "They match elements by the attributes they carry." }
  ]
};

// LESSON: Descendant Selector
export const cssDescendantSelectorContent: LessonContent = {
  heroTagline: "Style elements nested inside others",
  introduction: "The descendant selector — written with a space — matches elements nested anywhere inside another element. div p styles every paragraph inside a div, no matter how deep.",
  definition: {
    term: "Descendant selector",
    explanation: "Two selectors separated by a space, matching the second selector's elements anywhere inside the first."
  },
  whyItMatters: "It lets you style content by context: links inside the footer can look different from links inside the article.",
  realWorldAnalogy: {
    title: "Understanding descendants",
    story: "A descendant selector is like 'everyone living in this city' — it includes people in every neighborhood, street, and house inside it.",
    comparison: [
      { item: "article p", meaning: "Everyone living in the city." },
      { item: "Nested depth", meaning: "Neighborhoods and streets — all included." }
    ]
  },
  syntaxStructure: `article p {
  color: #444;
}`,
  codeExample: `<article>
  <p>Styled by the rule.</p>
  <div>
    <p>Also styled — still a descendant.</p>
  </div>
</article>
<p>Not styled — outside the article.</p>`,
  codeAnnotations: [
    { lineOrToken: "article p", description: "Space means: p elements anywhere inside article." },
    { lineOrToken: "Not styled", description: "Paragraphs outside article are untouched." }
  ],
  commonMistakes: [
    { wrong: "article, p { color: red; } when you meant nested", correct: "article p { color: red; }", reason: "A comma groups; a space means descendant. They are different." }
  ],
  tryItYourself: {
    html: `<article>\n  <p>Inside</p>\n</article>\n<p>Outside</p>`,
    css: `article p {\n  color: teal;\n}`,
    instructions: "Change teal to brown and confirm only the inside paragraph changes."
  },
  takeaways: [
    "A space between selectors means descendant.",
    "It matches at any nesting depth.",
    "Use it to style by context."
  ],
  quizQuestions: [
    { id: "css-m2l8-q1", question: "What does div p select?", options: ["Every <p> inside a <div>, at any depth", "Only direct child paragraphs", "The div itself", "Paragraphs outside divs"], correctAnswerIndex: 0, explanation: "Descendant selectors match at any nesting depth." },
    { id: "css-m2l8-q2", question: "Which character creates a descendant selector?", options: ["A space", "A comma", "A plus sign", "A slash"], correctAnswerIndex: 0, explanation: "A space between selectors means descendant." }
  ]
};

// LESSON: Child Selector
export const cssChildSelectorContent: LessonContent = {
  heroTagline: "Only direct children, not grandchildren",
  introduction: "The child selector — written with > — matches only elements that are direct children of a parent. ul > li styles list items, but not items nested inside sub-lists.",
  definition: {
    term: "Child selector",
    explanation: "Two selectors joined by > matching only elements that are direct children of the parent selector."
  },
  whyItMatters: "It gives precise control in nested structures like menus and lists, where you want top-level items styled differently from nested ones.",
  realWorldAnalogy: {
    title: "Understanding child selectors",
    story: "The child selector is like 'my own children only' — grandchildren at the family reunion are not included.",
    comparison: [
      { item: "ul > li", meaning: "My own children." },
      { item: "ul li", meaning: "Children, grandchildren, everyone in the family." }
    ]
  },
  syntaxStructure: `ul > li {
  list-style: square;
}`,
  codeExample: `ul > li {
  border-top: 1px solid #ddd;
  padding: 8px;
}`,
  codeAnnotations: [
    { lineOrToken: "ul > li", description: "> means direct child only." },
    { lineOrToken: "border-top", description: "Applied to top-level items, not nested sub-items." }
  ],
  commonMistakes: [
    { wrong: "ul > li expecting nested sub-items to be styled", correct: "ul li for all levels, ul > li for direct only", reason: "> skips grandchildren — use a space if you want every level." }
  ],
  tryItYourself: {
    html: `<ul>\n  <li>Top item\n    <ul><li>Nested item</li></ul>\n  </li>\n</ul>`,
    css: `ul > li {\n  color: darkred;\n}`,
    instructions: "Change > to a space and watch the nested item get styled too."
  },
  takeaways: [
    "> means direct child only.",
    "Grandchildren and deeper levels are skipped.",
    "Perfect for styling nested menus precisely."
  ],
  quizQuestions: [
    { id: "css-m2l9-q1", question: "What does ul > li select?", options: ["Only <li> elements directly inside <ul>", "All <li> at any depth", "The <ul> itself", "Paragraphs inside lists"], correctAnswerIndex: 0, explanation: "> selects direct children only." },
    { id: "css-m2l9-q2", question: "How is the child selector different from the descendant selector?", options: ["Child (>) is direct only; descendant (space) is any depth", "They are identical", "Child is slower", "Descendant needs a dot"], correctAnswerIndex: 0, explanation: "> limits matching to direct children." }
  ]
};

// LESSON: Pseudo-classes
export const cssPseudoClassesContent: LessonContent = {
  heroTagline: "Style elements in special states",
  introduction: "Pseudo-classes style elements based on their state or position — like a link being hovered, an input being focused, or the first child in a list. They start with a single colon.",
  definition: {
    term: "Pseudo-class",
    explanation: "A keyword added to a selector with a single colon that matches elements in a particular state, such as :hover or :first-child."
  },
  whyItMatters: "Interactive feedback — buttons changing on hover, inputs glowing on focus — comes entirely from pseudo-classes.",
  realWorldAnalogy: {
    title: "Understanding pseudo-classes",
    story: "Pseudo-classes are like moods: the same person (element) looks different when happy (:hover) versus focused (:focus).",
    comparison: [
      { item: ":hover", meaning: "The happy mood — mouse is over it." },
      { item: ":focus", meaning: "The alert mood — keyboard is on it." }
    ]
  },
  syntaxStructure: `a:hover {
  color: orange;
}`,
  codeExample: `button {
  background: #2563eb;
  color: white;
  padding: 10px 20px;
}

button:hover {
  background: #1d4ed8;
}

button:active {
  transform: scale(0.97);
}`,
  codeAnnotations: [
    { lineOrToken: "button:hover", description: "Applies while the mouse pointer is over the button." },
    { lineOrToken: "button:active", description: "Applies while the button is being pressed." }
  ],
  commonMistakes: [
    { wrong: "a :hover (with a space)", correct: "a:hover (no space)", reason: "A space would target hovered descendants of the link, not the link itself." }
  ],
  tryItYourself: {
    html: `<button>Hover me</button>`,
    css: `button {\n  background: #2563eb;\n  color: white;\n  padding: 10px 20px;\n}\nbutton:hover {\n  background: #1d4ed8;\n}`,
    instructions: "Change the hover color to darkgreen."
  },
  takeaways: [
    "Pseudo-classes use a single colon.",
    ":hover, :focus, and :active handle interaction states.",
    "No space between the selector and the pseudo-class."
  ],
  quizQuestions: [
    { id: "css-m2l10-q1", question: "Which pseudo-class applies when the mouse is over an element?", options: [":hover", ":visited", ":first-child", ":empty"], correctAnswerIndex: 0, explanation: ":hover matches while the pointer is over the element." },
    { id: "css-m2l10-q2", question: "How many colons does a pseudo-class use?", options: ["One", "Two", "Three", "Zero"], correctAnswerIndex: 0, explanation: "Pseudo-classes use one colon; pseudo-elements use two." }
  ]
};

// LESSON: Pseudo-elements
export const cssPseudoElementsContent: LessonContent = {
  heroTagline: "Style virtual parts of an element",
  introduction: "Pseudo-elements style specific parts of an element — like its first letter, first line, or content inserted before and after it. They use a double colon (::).",
  definition: {
    term: "Pseudo-element",
    explanation: "A keyword with a double colon that styles a part of an element, such as ::first-letter or ::before."
  },
  whyItMatters: "They create decorative effects — drop caps, custom bullets, quotation marks — without adding extra HTML.",
  realWorldAnalogy: {
    title: "Understanding pseudo-elements",
    story: "Pseudo-elements are like accessories on an outfit: the ::before is a hat added on top, the ::first-letter is a fancy initial on a book page.",
    comparison: [
      { item: "::before", meaning: "A hat — content added before the element's own content." },
      { item: "::first-letter", meaning: "A decorative initial letter." }
    ]
  },
  syntaxStructure: `p::first-letter {
  font-size: 2em;
}`,
  codeExample: `p::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: #b91c1c;
  float: left;
  line-height: 1;
  margin-right: 6px;
}`,
  codeAnnotations: [
    { lineOrToken: "p::first-letter", description: "Targets only the first letter of each paragraph." },
    { lineOrToken: "font-size: 3em;", description: "Makes that letter three times normal size — a drop cap." }
  ],
  commonMistakes: [
    { wrong: "p:first-letter (single colon in modern CSS)", correct: "p::first-letter", reason: "Modern CSS uses double colons for pseudo-elements to distinguish them from pseudo-classes." }
  ],
  tryItYourself: {
    html: `<p>Once upon a time in a stylesheet...</p>`,
    css: `p::first-letter {\n  font-size: 3em;\n  color: #b91c1c;\n}`,
    instructions: "Change the color to darkblue."
  },
  takeaways: [
    "Pseudo-elements use a double colon (::).",
    "::before and ::after insert decorative content.",
    "::first-letter and ::first-line style parts of text."
  ],
  quizQuestions: [
    { id: "css-m2l11-q1", question: "Which creates a drop-cap effect?", options: ["p::first-letter", "p:hover", "p:first-child", "p::hover"], correctAnswerIndex: 0, explanation: "::first-letter styles the first letter of the element." },
    { id: "css-m2l11-q2", question: "How many colons does a pseudo-element use?", options: ["Two", "One", "Four", "None"], correctAnswerIndex: 0, explanation: "Pseudo-elements use a double colon." }
  ]
};

// LESSON: Selector Specificity
export const cssSelectorSpecificityContent: LessonContent = {
  heroTagline: "When rules fight, specificity decides",
  introduction: "Specificity is the scoring system browsers use when several rules target the same element. IDs beat classes, classes beat element selectors — and inline styles beat them all.",
  definition: {
    term: "Selector specificity",
    explanation: "A weight score for selectors that decides which conflicting CSS rule wins."
  },
  whyItMatters: "Mysterious 'my style is not applying' bugs are almost always specificity losses. Knowing the score order ends the guessing.",
  realWorldAnalogy: {
    title: "Understanding specificity",
    story: "Specificity is like a card game: an ID is an ace, a class is a king, and an element selector is a low number card — the ace wins.",
    comparison: [
      { item: "ID (#)", meaning: "The ace — beats classes and elements." },
      { item: "Class (.)", meaning: "The king — beats plain element selectors." }
    ]
  },
  syntaxStructure: `/* Specificity: ID > class > element */
#title { color: red; }    /* wins */
.title { color: blue; }
h1 { color: green; }`,
  codeExample: `<h1 id="title" class="title">Hello</h1>`,
  codeAnnotations: [
    { lineOrToken: 'id="title"', description: "Gives the #title rule the highest score." },
    { lineOrToken: 'class="title"', description: "The .title rule loses to the ID rule." }
  ],
  commonMistakes: [
    { wrong: "Adding !important everywhere to win fights", correct: "Use a more specific selector instead", reason: "!important breaks the natural cascade and makes future overrides painful." }
  ],
  tryItYourself: {
    html: `<h1 id="title" class="title">Hello</h1>`,
    css: `#title {\n  color: red;\n}\n.title {\n  color: blue;\n}\nh1 {\n  color: green;\n}`,
    instructions: "Delete the #title rule and see which color wins next."
  },
  takeaways: [
    "Specificity order: inline style > ID > class > element.",
    "When scores tie, the later rule wins.",
    "Avoid !important — write better selectors instead."
  ],
  quizQuestions: [
    { id: "css-m2l12-q1", question: "Which selector has the highest specificity?", options: ["#header", ".header", "header", "*"], correctAnswerIndex: 0, explanation: "IDs outrank classes, elements, and the universal selector." },
    { id: "css-m2l12-q2", question: "Two rules have equal specificity. Which wins?", options: ["The one written later", "The one written first", "Neither applies", "The shorter one"], correctAnswerIndex: 0, explanation: "Equal specificity falls back to source order — later wins." }
  ]
};

// ==============================
// MODULE 3: Colors and Backgrounds
// ==============================

// LESSON: CSS Colors
export const cssColorsContent: LessonContent = {
  heroTagline: "Give every element its perfect color",
  introduction: "CSS offers several ways to describe color: names like red, HEX codes like #ff0000, RGB, and HSL. They all end up painting the same pixels — you just pick the format you like.",
  definition: {
    term: "CSS colors",
    explanation: "Values that set the color of text, backgrounds, and borders, written as names, HEX, RGB, or HSL."
  },
  whyItMatters: "Color is the first thing visitors notice. Getting comfortable with color formats is step one of real design work.",
  realWorldAnalogy: {
    title: "Understanding color formats",
    story: "Color formats are like measuring distance in miles or kilometers — different numbers, same road.",
    comparison: [
      { item: "red", meaning: "Miles — simple words everyone knows." },
      { item: "#ff0000", meaning: "Kilometers — precise numbers designers prefer." }
    ]
  },
  syntaxStructure: `h1 {
  color: red;
}`,
  codeExample: `h1 {
  color: tomato;
  background-color: #fff3e0;
  border: 2px solid rgb(200, 60, 30);
}`,
  codeAnnotations: [
    { lineOrToken: "color: tomato;", description: "Text color using a named color." },
    { lineOrToken: "background-color: #fff3e0;", description: "Background using a HEX code." }
  ],
  commonMistakes: [
    { wrong: "color: #ff000;", correct: "color: #ff0000;", reason: "HEX codes need 3 or 6 digits — 5 digits is invalid." }
  ],
  tryItYourself: {
    html: `<h1>Colorful heading</h1>`,
    css: `h1 {\n  color: tomato;\n  background-color: #fff3e0;\n  padding: 16px;\n}`,
    instructions: "Change tomato to steelblue and see the heading recolor."
  },
  takeaways: [
    "CSS supports named, HEX, RGB, and HSL colors.",
    "color sets text; background-color paints behind it.",
    "All formats describe the same colors."
  ],
  quizQuestions: [
    { id: "css-m3l1-q1", question: "Which property sets text color?", options: ["color", "text-paint", "font-color", "paint"], correctAnswerIndex: 0, explanation: "The color property sets the text color." },
    { id: "css-m3l1-q2", question: "Which property paints behind the text?", options: ["background-color", "behind-color", "fill", "canvas"], correctAnswerIndex: 0, explanation: "background-color paints the element's background area." }
  ]
};

// LESSON: Color Names
export const cssColorNamesContent: LessonContent = {
  heroTagline: "140 ready-made colors, no codes needed",
  introduction: "CSS includes 140 named colors — red, tomato, steelblue, papayawhip — that you can type directly. They are easy to remember and perfect while learning.",
  definition: {
    term: "Color names",
    explanation: "Predefined English color keywords, like crimson or teal, that browsers translate into exact colors."
  },
  whyItMatters: "Names make your first stylesheets readable. Later you can switch to HEX for precision without changing your approach.",
  realWorldAnalogy: {
    title: "Understanding named colors",
    story: "Named colors are like crayon labels: 'burnt sienna' is faster to grab than mixing the exact pigment yourself.",
    comparison: [
      { item: "tomato", meaning: "The crayon label — quick and readable." },
      { item: "#ff6347", meaning: "The exact pigment mix — precise." }
    ]
  },
  syntaxStructure: `p {
  color: steelblue;
}`,
  codeExample: `.alert {
  background-color: mistyrose;
  color: darkred;
  border: 1px solid indianred;
  padding: 12px;
}`,
  codeAnnotations: [
    { lineOrToken: "mistyrose", description: "A soft pink named color for the background." },
    { lineOrToken: "darkred", description: "A deep red named color for the text." }
  ],
  commonMistakes: [
    { wrong: "color: dark red;", correct: "color: darkred;", reason: "Multi-word names are written as one word — darkred, not 'dark red'." }
  ],
  tryItYourself: {
    html: `<div class="alert">Warning!</div>`,
    css: `.alert {\n  background-color: mistyrose;\n  color: darkred;\n  padding: 12px;\n}`,
    instructions: "Change mistyrose to lightcyan and darkred to darkblue."
  },
  takeaways: [
    "CSS has 140 built-in color names.",
    "Names are readable but less precise than HEX.",
    "Write multi-word names as one word: darkred."
  ],
  quizQuestions: [
    { id: "css-m3l2-q1", question: "Which is a valid CSS color name?", options: ["tomato", "ketchup", "pizza", "laptop"], correctAnswerIndex: 0, explanation: "tomato is one of the 140 standard named colors." },
    { id: "css-m3l2-q2", question: "How do you write the dark red name?", options: ["darkred", "dark red", "dark-red", "red dark"], correctAnswerIndex: 0, explanation: "Color names are single words: darkred." }
  ]
};

// LESSON: HEX Colors
export const cssHexColorsContent: LessonContent = {
  heroTagline: "The #rrggbb code designers use daily",
  introduction: "HEX colors describe red, green, and blue light as hexadecimal numbers after a hash sign: #ff0000 is pure red. The shorthand #f00 means the same thing.",
  definition: {
    term: "HEX color",
    explanation: "A color written as # followed by 3 or 6 hexadecimal digits representing red, green, and blue channels."
  },
  whyItMatters: "HEX is the standard in design tools and code. Copying a color from a designer almost always means copying a HEX code.",
  realWorldAnalogy: {
    title: "Understanding HEX codes",
    story: "A HEX code is like a paint-mixing recipe: #ff0000 means 'full red, no green, no blue'.",
    comparison: [
      { item: "ff", meaning: "How much red light (00 to ff)." },
      { item: "00 00", meaning: "How much green and blue light." }
    ]
  },
  syntaxStructure: `h1 {
  color: #1a73e8;
}`,
  codeExample: `.brand {
  color: #ffffff;
  background-color: #1a73e8;
  border: 2px solid #0d47a1;
}`,
  codeAnnotations: [
    { lineOrToken: "#1a73e8", description: "A medium blue — 6-digit HEX." },
    { lineOrToken: "#ffffff", description: "Pure white — all channels at maximum." }
  ],
  commonMistakes: [
    { wrong: "color: ff0000;", correct: "color: #ff0000;", reason: "HEX codes must start with the # sign." }
  ],
  tryItYourself: {
    html: `<div class="brand">Brand box</div>`,
    css: `.brand {\n  background-color: #1a73e8;\n  color: #ffffff;\n  padding: 16px;\n}`,
    instructions: "Change #1a73e8 to #e81a73 and see the box turn pink."
  },
  takeaways: [
    "HEX = # plus 3 or 6 hex digits.",
    "#f00 is shorthand for #ff0000.",
    "Design tools and mockups use HEX everywhere."
  ],
  quizQuestions: [
    { id: "css-m3l3-q1", question: "What does #00ff00 represent?", options: ["Pure green", "Pure red", "Pure blue", "Black"], correctAnswerIndex: 0, explanation: "The middle pair controls green — ff means full green." },
    { id: "css-m3l3-q2", question: "Which is valid shorthand HEX?", options: ["#f00", "#ff000", "#gg0000", "ff0000"], correctAnswerIndex: 0, explanation: "#f00 is the 3-digit shorthand for #ff0000." }
  ]
};

// LESSON: RGB Colors
export const cssRgbColorsContent: LessonContent = {
  heroTagline: "Mix red, green, and blue light by number",
  introduction: "RGB colors mix three light channels, each from 0 to 255: rgb(255, 0, 0) is pure red. Bigger numbers mean more of that light.",
  definition: {
    term: "RGB color",
    explanation: "A color written as rgb(red, green, blue) with each channel ranging from 0 to 255."
  },
  whyItMatters: "RGB makes color math obvious — adding equal amounts of all three always moves toward gray and white.",
  realWorldAnalogy: {
    title: "Understanding RGB mixing",
    story: "RGB is like three dimmer switches for red, green, and blue stage lights — turn them up and down to mix any color.",
    comparison: [
      { item: "255", meaning: "Dimmer at full brightness." },
      { item: "0", meaning: "Dimmer switched off." }
    ]
  },
  syntaxStructure: `p {
  color: rgb(60, 60, 60);
}`,
  codeExample: `.swatch {
  background-color: rgb(34, 197, 94);
  color: rgb(255, 255, 255);
  padding: 16px;
}`,
  codeAnnotations: [
    { lineOrToken: "rgb(34, 197, 94)", description: "A vivid green — high green channel, low red and blue." },
    { lineOrToken: "rgb(255, 255, 255)", description: "White — all three channels at maximum." }
  ],
  commonMistakes: [
    { wrong: "rgb(300, 0, 0)", correct: "rgb(255, 0, 0)", reason: "Each channel caps at 255 — higher values are invalid." }
  ],
  tryItYourself: {
    html: `<div class="swatch">Green box</div>`,
    css: `.swatch {\n  background-color: rgb(34, 197, 94);\n  color: white;\n  padding: 16px;\n}`,
    instructions: "Change the first number to 200 and watch the green shift toward yellow."
  },
  takeaways: [
    "rgb() takes three numbers from 0 to 255.",
    "Equal values make grays; all 255 makes white.",
    "All zeros makes black."
  ],
  quizQuestions: [
    { id: "css-m3l4-q1", question: "What color is rgb(0, 0, 0)?", options: ["Black", "White", "Red", "Blue"], correctAnswerIndex: 0, explanation: "No light in any channel means black." },
    { id: "css-m3l4-q2", question: "What is the maximum value of one RGB channel?", options: ["255", "100", "360", "1000"], correctAnswerIndex: 0, explanation: "Each channel ranges from 0 to 255." }
  ]
};

// LESSON: RGBA Colors
export const cssRgbaColorsContent: LessonContent = {
  heroTagline: "RGB plus a transparency dial",
  introduction: "RGBA adds a fourth value — alpha — to RGB. Alpha runs from 0 (fully transparent) to 1 (fully solid), letting backgrounds show through.",
  definition: {
    term: "RGBA color",
    explanation: "An rgb() color with an added alpha channel: rgba(red, green, blue, alpha)."
  },
  whyItMatters: "Overlays, shadows, and tinted panels all need see-through color. RGBA is how you make them.",
  realWorldAnalogy: {
    title: "Understanding alpha",
    story: "Alpha is like sunglasses tint: 0 is clear glass, 1 is a blindfold, and 0.5 is a light shade.",
    comparison: [
      { item: "alpha 0", meaning: "Clear glass — invisible." },
      { item: "alpha 0.5", meaning: "Sunglasses — half see-through." }
    ]
  },
  syntaxStructure: `div {
  background: rgba(0, 0, 0, 0.5);
}`,
  codeExample: `.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 24px;
}`,
  codeAnnotations: [
    { lineOrToken: "rgba(0, 0, 0, 0.6)", description: "Black at 60% opacity — dark but see-through." },
    { lineOrToken: "0.6", description: "The alpha value; 1 would be fully solid black." }
  ],
  commonMistakes: [
    { wrong: "rgba(0, 0, 0, 60%)", correct: "rgba(0, 0, 0, 0.6)", reason: "Alpha is a decimal from 0 to 1, not a percentage." }
  ],
  tryItYourself: {
    html: `<div class="overlay">See-through panel</div>`,
    css: `.overlay {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 24px;\n}`,
    instructions: "Change 0.6 to 0.2 and watch the panel become nearly transparent."
  },
  takeaways: [
    "RGBA = RGB + alpha transparency.",
    "Alpha 0 is invisible; alpha 1 is solid.",
    "Use RGBA for overlays and tinted panels."
  ],
  quizQuestions: [
    { id: "css-m3l5-q1", question: "What does the 'a' in rgba() control?", options: ["Transparency", "Text size", "Animation speed", "Border width"], correctAnswerIndex: 0, explanation: "Alpha controls how transparent the color is." },
    { id: "css-m3l5-q2", question: "Which alpha value is fully transparent?", options: ["0", "1", "0.5", "255"], correctAnswerIndex: 0, explanation: "Alpha 0 means fully transparent." }
  ]
};

// LESSON: HSL Colors
export const cssHslColorsContent: LessonContent = {
  heroTagline: "Pick colors the human way: hue, saturation, lightness",
  introduction: "HSL describes color as hue (the color wheel angle, 0–360), saturation (how vivid, 0–100%), and lightness (how bright, 0–100%). It matches how people actually think about color.",
  definition: {
    term: "HSL color",
    explanation: "A color written as hsl(hue, saturation, lightness), describing a point on the color wheel."
  },
  whyItMatters: "Need a lighter version of your brand color? In HSL you just raise the lightness — no guessing at RGB numbers.",
  realWorldAnalogy: {
    title: "Understanding HSL",
    story: "HSL is like a paint store: pick a color family (hue), choose how intense (saturation), then how light or dark (lightness).",
    comparison: [
      { item: "Hue", meaning: "The color family — red, blue, green." },
      { item: "Lightness", meaning: "How much white or black is mixed in." }
    ]
  },
  syntaxStructure: `h1 {
  color: hsl(210, 80%, 45%);
}`,
  codeExample: `.brand {
  background-color: hsl(210, 80%, 45%);
  color: hsl(0, 0%, 100%);
}`,
  codeAnnotations: [
    { lineOrToken: "hsl(210, 80%, 45%)", description: "Hue 210 is blue; vivid and medium-bright." },
    { lineOrToken: "hsl(0, 0%, 100%)", description: "Zero saturation and full lightness = white." }
  ],
  commonMistakes: [
    { wrong: "hsl(210, 80, 45)", correct: "hsl(210, 80%, 45%)", reason: "Saturation and lightness need % signs." }
  ],
  tryItYourself: {
    html: `<div class="brand">Brand blue</div>`,
    css: `.brand {\n  background-color: hsl(210, 80%, 45%);\n  color: white;\n  padding: 16px;\n}`,
    instructions: "Raise 45% to 70% and watch the blue get lighter."
  },
  takeaways: [
    "HSL = hue (0–360), saturation %, lightness %.",
    "Adjusting lightness creates color shades easily.",
    "Hue 0 is red, 120 is green, 240 is blue."
  ],
  quizQuestions: [
    { id: "css-m3l6-q1", question: "In hsl(), what does the first number set?", options: ["The hue (color family)", "The font size", "The opacity", "The border radius"], correctAnswerIndex: 0, explanation: "Hue picks the position on the color wheel." },
    { id: "css-m3l6-q2", question: "How do you make an HSL color lighter?", options: ["Raise the lightness %", "Raise the hue", "Lower the saturation to 0 and hue to 0", "Remove the % signs"], correctAnswerIndex: 0, explanation: "Lightness directly controls how light or dark the color is." }
  ]
};

// LESSON: Background Color
export const cssBackgroundColorContent: LessonContent = {
  heroTagline: "Paint the area behind your content",
  introduction: "background-color fills an element's entire box — content, padding, everything inside the border — with a solid color. The default is transparent, showing whatever is behind.",
  definition: {
    term: "background-color",
    explanation: "The property that sets the solid background color of an element's box."
  },
  whyItMatters: "Section backgrounds are the backbone of page design: cards, banners, and footers all start with background-color.",
  realWorldAnalogy: {
    title: "Understanding background color",
    story: "background-color is like painting a room's walls: everything inside the room sits against the new color.",
    comparison: [
      { item: "Element box", meaning: "The room." },
      { item: "background-color", meaning: "The wall paint." }
    ]
  },
  syntaxStructure: `div {
  background-color: #f0f4ff;
}`,
  codeExample: `.card {
  background-color: #f0f4ff;
  padding: 20px;
  border-radius: 8px;
}`,
  codeAnnotations: [
    { lineOrToken: "background-color: #f0f4ff;", description: "Fills the card's box with pale blue." },
    { lineOrToken: "padding: 20px;", description: "Padding is inside the background area, so it gets painted too." }
  ],
  commonMistakes: [
    { wrong: "Expecting background-color to fill the margin area", correct: "Background covers content + padding, not margin", reason: "Margins are always transparent — backgrounds stop at the border." }
  ],
  tryItYourself: {
    html: `<div class="card">Card content</div>`,
    css: `.card {\n  background-color: #f0f4ff;\n  padding: 20px;\n}`,
    instructions: "Change #f0f4ff to #e8f5e9 and watch the card turn pale green."
  },
  takeaways: [
    "background-color paints content and padding areas.",
    "Margins stay transparent — backgrounds stop at the border.",
    "Default background is transparent."
  ],
  quizQuestions: [
    { id: "css-m3l7-q1", question: "Which areas does background-color paint?", options: ["Content and padding", "Only the text itself", "The margin area", "Other elements"], correctAnswerIndex: 0, explanation: "Background covers the content and padding boxes, stopping at the border." },
    { id: "css-m3l7-q2", question: "What is the default background-color?", options: ["transparent", "white", "black", "gray"], correctAnswerIndex: 0, explanation: "Elements are transparent by default, showing what is behind them." }
  ]
};

// LESSON: Background Image
export const cssBackgroundImageContent: LessonContent = {
  heroTagline: "Place a picture behind your content",
  introduction: "background-image puts an image behind an element's content using url(). The image sits on top of any background-color, so a color still shows where the image is transparent or missing.",
  definition: {
    term: "background-image",
    explanation: "The property that sets an image as an element's background via url(\"path\")."
  },
  whyItMatters: "Hero banners, textured cards, and photo headers all rely on background images rather than <img> tags.",
  realWorldAnalogy: {
    title: "Understanding background images",
    story: "A background image is like wallpaper: it decorates the wall (element) while furniture (content) sits in front of it.",
    comparison: [
      { item: "url()", meaning: "Choosing which wallpaper roll to hang." },
      { item: "background-color", meaning: "The paint under the wallpaper." }
    ]
  },
  syntaxStructure: `.hero {
  background-image: url("banner.jpg");
}`,
  codeExample: `.hero {
  background-image: url("mountains.jpg");
  background-color: #1a1a2e;
  color: white;
  padding: 60px 20px;
  text-align: center;
}`,
  codeAnnotations: [
    { lineOrToken: 'url("mountains.jpg")', description: "Path to the image file, in quotes." },
    { lineOrToken: "background-color: #1a1a2e;", description: "Fallback color shown if the image fails to load." }
  ],
  commonMistakes: [
    { wrong: "background-image: url(banner.jpg) with a wrong path", correct: "background-image: url(\"images/banner.jpg\")", reason: "A wrong path silently shows nothing — always include a fallback background-color." }
  ],
  tryItYourself: {
    html: `<div class="hero">Welcome</div>`,
    css: `.hero {\n  background-color: #1a1a2e;\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n}`,
    instructions: "Add background-image: url(\"mountains.jpg\"); and see the fallback color idea in action."
  },
  takeaways: [
    "background-image uses url() to load a picture.",
    "The image layers above background-color.",
    "Always set a fallback background-color."
  ],
  quizQuestions: [
    { id: "css-m3l8-q1", question: "How do you set a background image?", options: ["background-image: url(\"pic.jpg\");", "image: pic.jpg;", "background: <img>;", "picture: url(pic.jpg);"], correctAnswerIndex: 0, explanation: "background-image with url() loads the image." },
    { id: "css-m3l8-q2", question: "Why set a background-color with a background-image?", options: ["As a fallback if the image fails", "It is required by law", "It makes images load faster", "It deletes the image"], correctAnswerIndex: 0, explanation: "The color shows wherever the image is missing or transparent." }
  ]
};

// LESSON: Background Size
export const cssBackgroundSizeContent: LessonContent = {
  heroTagline: "Control how big the background image is",
  introduction: "background-size decides how large the background image appears. cover fills the whole box (cropping edges), contain fits the entire image inside (leaving empty space), and you can also set exact widths and heights.",
  definition: {
    term: "background-size",
    explanation: "The property that controls the displayed size of a background image: cover, contain, or explicit dimensions."
  },
  whyItMatters: "A hero banner needs cover so no gaps show; a logo watermark needs contain so it never gets cropped. Picking wrong leaves ugly gaps or cut-off images.",
  realWorldAnalogy: {
    title: "Understanding background size",
    story: "background-size is like fitting a poster on a wall: cover trims the poster edges to fill the wall; contain shrinks the poster so the whole thing shows with margins.",
    comparison: [
      { item: "cover", meaning: "Trim the poster to fill the wall completely." },
      { item: "contain", meaning: "Show the whole poster, wall gaps allowed." }
    ]
  },
  syntaxStructure: `.hero {
  background-size: cover;
}`,
  codeExample: `.hero {
  background-image: url("mountains.jpg");
  background-size: cover;
  height: 300px;
}`,
  codeAnnotations: [
    { lineOrToken: "background-size: cover;", description: "Scales the image to fill the box, cropping overflow." },
    { lineOrToken: "height: 300px;", description: "Gives the box a fixed height to fill." }
  ],
  commonMistakes: [
    { wrong: "Using contain for a full-bleed hero banner", correct: "Use cover for full-bleed banners", reason: "contain leaves empty gaps; cover fills every pixel." }
  ],
  tryItYourself: {
    html: `<div class="hero">Banner</div>`,
    css: `.hero {\n  background-color: #334155;\n  background-size: cover;\n  height: 200px;\n  color: white;\n}`,
    instructions: "Change cover to contain and think about which suits a full-width banner."
  },
  takeaways: [
    "cover fills the box, cropping the image.",
    "contain shows the whole image, possibly leaving gaps.",
    "You can also use exact sizes like 200px 100px."
  ],
  quizQuestions: [
    { id: "css-m3l9-q1", question: "What does background-size: cover do?", options: ["Fills the box completely, cropping the image", "Shows the whole image with gaps", "Hides the image", "Tiles the image"], correctAnswerIndex: 0, explanation: "cover scales the image to fill the box, cropping edges." },
    { id: "css-m3l9-q2", question: "When would you use contain?", options: ["When the whole image must stay visible", "For full-screen banners", "To hide backgrounds", "To blur images"], correctAnswerIndex: 0, explanation: "contain fits the entire image inside the box." }
  ]
};

// LESSON: Background Position
export const cssBackgroundPositionContent: LessonContent = {
  heroTagline: "Aim the background image exactly where you want it",
  introduction: "background-position moves the background image inside its box: center, top right, or exact coordinates like 20px 50px. It decides which part of the image shows when the box crops it.",
  definition: {
    term: "background-position",
    explanation: "The property that sets where the background image sits inside the element, using keywords or lengths."
  },
  whyItMatters: "With cover cropping the image, position decides whether the photo shows the person's face or cuts it off — a tiny property with big visual impact.",
  realWorldAnalogy: {
    title: "Understanding background position",
    story: "background-position is like sliding a photo inside a picture frame: the frame stays put while you aim the photo.",
    comparison: [
      { item: "center", meaning: "Slide the photo to the middle of the frame." },
      { item: "top right", meaning: "Push it into the top-right corner." }
    ]
  },
  syntaxStructure: `.hero {
  background-position: center;
}`,
  codeExample: `.hero {
  background-image: url("team.jpg");
  background-size: cover;
  background-position: center top;
  height: 300px;
}`,
  codeAnnotations: [
    { lineOrToken: "background-position: center top;", description: "Centers horizontally, pins to the top vertically." },
    { lineOrToken: "background-size: cover;", description: "Fills the box; position picks which part survives cropping." }
  ],
  commonMistakes: [
    { wrong: "background-position: top, center;", correct: "background-position: top center;", reason: "Position values are space-separated, not comma-separated." }
  ],
  tryItYourself: {
    html: `<div class="hero">Team photo</div>`,
    css: `.hero {\n  background-color: #475569;\n  background-position: center;\n  height: 200px;\n  color: white;\n}`,
    instructions: "Change center to top right and picture the image sliding."
  },
  takeaways: [
    "Keywords: top, bottom, left, right, center.",
    "You can mix keywords with lengths like 20px 50%.",
    "Position matters most when the image is cropped."
  ],
  quizQuestions: [
    { id: "css-m3l10-q1", question: "What does background-position: center do?", options: ["Centers the image in the box", "Deletes the image", "Stretches the image", "Repeats the image"], correctAnswerIndex: 0, explanation: "It places the background image in the middle of the element." },
    { id: "css-m3l10-q2", question: "How are position values separated?", options: ["With a space", "With a comma", "With a slash", "With a semicolon"], correctAnswerIndex: 0, explanation: "Values like 'top center' are space-separated." }
  ]
};

// LESSON: Background Repeat
export const cssBackgroundRepeatContent: LessonContent = {
  heroTagline: "Tile it, or show it just once",
  introduction: "By default a background image repeats (tiles) to fill the box. background-repeat: no-repeat shows it once, repeat-x tiles horizontally, and repeat-y tiles vertically.",
  definition: {
    term: "background-repeat",
    explanation: "The property that controls whether and how a background image tiles across the element."
  },
  whyItMatters: "A small pattern should tile seamlessly; a hero photo must not. One property switches between the two behaviors.",
  realWorldAnalogy: {
    title: "Understanding background repeat",
    story: "background-repeat is like bathroom tiles versus a wall mural: tiles repeat in a grid, a mural appears exactly once.",
    comparison: [
      { item: "repeat", meaning: "Bathroom tiles — the pattern fills the wall." },
      { item: "no-repeat", meaning: "A mural — one image, placed once." }
    ]
  },
  syntaxStructure: `.pattern {
  background-repeat: repeat;
}`,
  codeExample: `.pattern {
  background-image: url("dots.png");
  background-repeat: repeat;
  padding: 40px;
}

.hero {
  background-image: url("photo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}`,
  codeAnnotations: [
    { lineOrToken: "background-repeat: repeat;", description: "Tiles the small pattern across the whole box." },
    { lineOrToken: "background-repeat: no-repeat;", description: "Shows the photo exactly once." }
  ],
  commonMistakes: [
    { wrong: "Forgetting no-repeat on a hero image, getting a tiled mess", correct: "background-repeat: no-repeat; with background-size: cover;", reason: "The default is repeat — hero images need no-repeat explicitly." }
  ],
  tryItYourself: {
    html: `<div class="hero">One image</div>`,
    css: `.hero {\n  background-color: #64748b;\n  background-repeat: no-repeat;\n  height: 200px;\n  color: white;\n}`,
    instructions: "Change no-repeat to repeat-x and imagine a strip tiling sideways."
  },
  takeaways: [
    "Default value is repeat — images tile automatically.",
    "no-repeat shows the image once.",
    "repeat-x and repeat-y tile in one direction."
  ],
  quizQuestions: [
    { id: "css-m3l11-q1", question: "What is the default background-repeat value?", options: ["repeat", "no-repeat", "repeat-x", "space"], correctAnswerIndex: 0, explanation: "Background images tile by default." },
    { id: "css-m3l11-q2", question: "Which value tiles only horizontally?", options: ["repeat-x", "repeat-y", "no-repeat", "repeat-z"], correctAnswerIndex: 0, explanation: "repeat-x tiles along the horizontal axis." }
  ]
};

// LESSON: CSS Gradients
export const cssGradientsContent: LessonContent = {
  heroTagline: "Smooth color blends with zero images",
  introduction: "Gradients blend two or more colors smoothly. linear-gradient() blends along a line (top to bottom, or at an angle); radial-gradient() blends outward from a center point.",
  definition: {
    term: "CSS gradient",
    explanation: "A background image generated by CSS that smoothly transitions between colors, with no image file needed."
  },
  whyItMatters: "Gradients create modern, rich backgrounds — buttons, banners, overlays — without downloading a single image file.",
  realWorldAnalogy: {
    title: "Understanding gradients",
    story: "A gradient is like a sunset sky: blue melts into orange with no hard line between them.",
    comparison: [
      { item: "linear-gradient", meaning: "The sunset — colors blend along a direction." },
      { item: "radial-gradient", meaning: "A spotlight — colors blend outward from the center." }
    ]
  },
  syntaxStructure: `.banner {
  background: linear-gradient(blue, purple);
}`,
  codeExample: `.banner {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 60px 20px;
  text-align: center;
}`,
  codeAnnotations: [
    { lineOrToken: "linear-gradient(135deg, #667eea, #764ba2)", description: "Blends from blue to purple along a 135-degree angle." },
    { lineOrToken: "135deg", description: "The direction of the blend." }
  ],
  commonMistakes: [
    { wrong: "background-color: linear-gradient(red, blue);", correct: "background: linear-gradient(red, blue);", reason: "Gradients are images, so they belong in background or background-image, not background-color." }
  ],
  tryItYourself: {
    html: `<div class="banner">Gradient banner</div>`,
    css: `.banner {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  padding: 40px;\n  text-align: center;\n}`,
    instructions: "Change 135deg to 90deg and watch the blend direction rotate."
  },
  takeaways: [
    "Gradients are generated images — no files needed.",
    "linear-gradient blends along a line; radial-gradient from a center.",
    "Put gradients in background, not background-color."
  ],
  quizQuestions: [
    { id: "css-m3l12-q1", question: "Which creates a smooth color blend?", options: ["linear-gradient()", "rgb()", "url()", "solid()"], correctAnswerIndex: 0, explanation: "linear-gradient() generates a smooth blend between colors." },
    { id: "css-m3l12-q2", question: "Where do you place a gradient?", options: ["In background or background-image", "In background-color", "In color", "In font-family"], correctAnswerIndex: 0, explanation: "Gradients count as images, so they go in background properties." }
  ]
};