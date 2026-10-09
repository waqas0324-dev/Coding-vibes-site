// CSS Course content — part 2 of 4
// Modules 1-3: CSS Fundamentals, CSS Selectors, Colors and Backgrounds
import { LessonContent } from '../../types';

// ==============================
// MODULE 1: CSS Fundamentals
// ==============================

// LESSON: Introduction to CSS
export const cssIntroductionToCssContent: LessonContent = {
  heroTagline: "Meet the language that paints every website",
  introduction: "Imagine every website looking like a plain school notebook — black text on white paper, no colors, no style, nothing to catch your eye.\n\nThat is the web without **CSS**. **HTML** builds the skeleton of a page, but **CSS** is the artist: it paints the colors, picks the fonts, arranges the spacing, and decides where everything sits.",
  definition: {
    term: "Introduction to CSS",
    explanation: "Think of **CSS** as the personal stylist for your **HTML**. It is the language browsers read to decide exactly how each element should look on screen — from the shade of a heading to the space around a button."
  },
  whyItMatters: "Here is the exciting part: **CSS** is what separates a page people glance at from a page people remember.\n\nWithout it, text is hard to read and the page looks unfinished — like a house with no paint on the walls.",
  realWorldAnalogy: {
    title: "HTML is the skeleton, CSS is the outfit",
    story: "Think of a webpage as a person. **HTML** is the skeleton — the bones, the basic body. **CSS** is the clothes, the hairstyle, the makeup, the whole vibe.\n\nSame person, different outfit — totally different impression.",
    comparison: [
      { item: "HTML", meaning: "The bones and body underneath — the raw **text**, **buttons**, and **images**, with zero style." },
      { item: "CSS", meaning: "The full makeover — **colors**, **fonts**, **spacing**, and **layout** that make the page look stunning." }
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
    { wrong: "h1 { color: blue }", correct: "h1 { color: blue; }", reason: "Think of the **semicolon** as a full stop in a sentence — without it, the browser cannot tell where one instruction ends and the next begins." }
  ],
  tryItYourself: {
    html: `<h1>Hello CSS</h1>`,
    css: `h1 {\n  color: blue;\n}`,
    instructions: "Change the color from blue to green and see the heading update."
  },
  takeaways: [
    "**CSS** controls the look of a webpage: colors, fonts, spacing, and layout.",
    "Every **CSS rule** has two parts: a **selector** that picks the target, and **declarations** that describe its new look.",
    "You write **CSS** in a stylesheet or a style block — never mixed into plain HTML text."
  ],
  quizQuestions: [
    { id: "css-m1l1-q1", question: "What does CSS control on a webpage?", options: ["The visual style: colors, fonts, layout", "The database of the website", "The internet connection speed", "The browser's download history"], correctAnswerIndex: 0, explanation: "**CSS** is all about **presentation** — the look and feel. Databases and internet speed are somebody else's job entirely." },
    { id: "css-m1l1-q2", question: "Which two parts make up a basic CSS rule?", options: ["A link and a script", "A selector and a declaration", "A header and a footer", "A tag and an attribute"], correctAnswerIndex: 1, explanation: "The **selector** picks who gets styled, and the **declarations** describe the new look. Remember it as: target first, style second." }
  ]
};

// LESSON: What is CSS?
export const cssWhatIsCssContent: LessonContent = {
  heroTagline: "Cascading Style Sheets — what it is, exactly",
  introduction: "**CSS** stands for **Cascading Style Sheets**. 'Style sheets' is the easy part — just a list of style rules.\n\nBut **cascading**? That is the secret sauce: the set of rules the browser follows to decide which style wins when several rules argue over the same element.",
  definition: {
    term: "CSS",
    explanation: "**CSS** is the language that tells the browser how to show your **HTML** — the colors, sizes, positions, and even animations. And the **cascading** part means that when rules disagree, they settle the argument in a predictable way."
  },
  whyItMatters: "The **cascade** is the most powerful idea in CSS, and once it clicks, so many mysteries disappear.\n\nEver wonder why your style did not apply? The answer is almost always hiding somewhere in the cascade.",
  realWorldAnalogy: {
    title: "Layers of paint on a canvas",
    story: "Imagine painting a wall: you roll on one coat, then another, then a final careful stroke on top. The last stroke decides the color you actually see.\n\n**CSS rules** behave the same way — later or more specific rules paint over the earlier ones.",
    comparison: [
      { item: "Cascade", meaning: "Rules flow down like paint layers — when rules clash, the later or more specific one **wins**." },
      { item: "Style sheet", meaning: "Your personal paint catalog: one **document** holding every style rule in a single place." }
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
    { wrong: "h1 { colour: red; }", correct: "h1 { color: red; }", reason: "**CSS** speaks American English, so it is **color**, not colour — one sneaky letter is all it takes to break a rule." }
  ],
  tryItYourself: {
    html: `<p>Which color wins?</p>`,
    css: `p { color: red; }\np { color: purple; }`,
    instructions: "Swap the two rules and notice which color the browser shows."
  },
  takeaways: [
    "**CSS** stands for Cascading Style Sheets.",
    "The **cascade** is how the browser settles disagreements between rules — there is always a clear winner.",
    "**CSS** only changes how HTML looks; it never touches the actual content."
  ],
  quizQuestions: [
    { id: "css-m1l2-q1", question: "What does CSS stand for?", options: ["Computer Styled Sections", "Cascading Style Sheets", "Creative Style Syntax", "Colored Screen Styles"], correctAnswerIndex: 1, explanation: "**Cascading Style Sheets** — say it a few times and you will be saying it in your sleep." },
    { id: "css-m1l2-q2", question: "If two CSS rules set different colors on the same element, what happens?", options: ["The page breaks", "One rule wins based on cascade order", "Both colors mix together", "The browser ignores both"], correctAnswerIndex: 1, explanation: "The **cascade** acts like a referee: when two rules clash, it picks the winner by a fixed order, so the result is never random." }
  ]
};

// LESSON: Why CSS is Used
export const cssWhyCssIsUsedContent: LessonContent = {
  heroTagline: "One stylesheet can style a thousand pages",
  introduction: "Here is a scary thought: before **CSS** existed, designers styled every single HTML tag by hand. Want all your headings blue? Edit every heading, on every page, one by one.\n\n**CSS** changed everything by moving all styling into one place — now a single edit can restyle an entire website in seconds.",
  definition: {
    term: "Why CSS is used",
    explanation: "**CSS** keeps your design separate from your content. That separation is what makes websites easy to maintain, lightning-fast to restyle, and perfectly consistent from the first page to the last."
  },
  whyItMatters: "Real websites have hundreds of pages. Without **CSS**, changing the brand color would take days of boring edits.\n\nWith **CSS**, it takes one line. That is not just convenient — it is the reason big websites can exist at all.",
  realWorldAnalogy: {
    title: "One dress code for the whole school",
    story: "Think of a school with a uniform dress code: the principal announces one rule, and every student shows up matching.\n\n**CSS** is the dress code for your website — one rule, and every matching element falls in line instantly.",
    comparison: [
      { item: "Without CSS", meaning: "Styling every element by hand, one tag at a time — like dressing each student individually every morning." },
      { item: "With CSS", meaning: "One rule styles every matching element at once — announce it once, and the whole school matches." }
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
    { wrong: "<button style='background:navy'>Save</button> on 50 pages", correct: "button { background: navy; } in one stylesheet", reason: "Copy-pasting the same inline style across pages works fine until the day you need to change it — then you are editing fifty pages instead of one file, and future you will not be happy about it." }
  ],
  tryItYourself: {
    html: `<button>Save</button>\n<button>Delete</button>`,
    css: `button {\n  background: navy;\n  color: white;\n  padding: 8px 16px;\n}`,
    instructions: "Change navy to crimson and watch both buttons update together."
  },
  takeaways: [
    "**CSS** keeps design separate from HTML content, so each can change without breaking the other.",
    "A single **rule** can style hundreds of matching elements in one go.",
    "Shared **stylesheets** keep every page looking consistent — and updates become a one-minute job."
  ],
  quizQuestions: [
    { id: "css-m1l3-q1", question: "What is the main benefit of CSS for a large website?", options: ["It makes pages load slower", "One stylesheet can style every page at once", "It replaces the need for HTML", "It stores user passwords"], correctAnswerIndex: 1, explanation: "One **stylesheet** ruling hundreds of pages — that is the whole magic of CSS in a single sentence." },
    { id: "css-m1l3-q2", question: "What problem did CSS solve?", options: ["Styling was mixed into every HTML tag", "Websites had too many images", "Browsers were too fast", "HTML had no paragraphs"], correctAnswerIndex: 0, explanation: "**CSS** rescued styling from inside HTML tags and gave it a home of its own. Your HTML has never been cleaner." }
  ]
};

// LESSON: How CSS Works
export const cssHowCssWorksContent: LessonContent = {
  heroTagline: "From stylesheet to pixels: the browser's job",
  introduction: "What actually happens between you writing **CSS** and the browser showing a pretty page? It is a little behind-the-scenes magic.\n\nThe browser reads your **HTML** to build the structure, then reads your **CSS**, matches each rule to the right elements, and paints the final picture on screen.",
  definition: {
    term: "How CSS works",
    explanation: "Here is the browser's routine, step by step: find your **CSS rules**, match each **selector** to the HTML elements it targets, compute the final style for every element, and render the styled page. Like a careful chef, it never skips a step."
  },
  whyItMatters: "Knowing this flow turns you into a style detective.\n\nWhen a style goes missing, you will know exactly where to look: either the **CSS** never loaded, or the **selector** never matched its target.",
  realWorldAnalogy: {
    title: "The browser is an interior designer",
    story: "Think of building a house: **HTML** is the blueprint showing where each room goes, and **CSS** is the interior designer who paints the walls, hangs the curtains, and places the furniture.\n\nThe browser plays both roles, one right after the other.",
    comparison: [
      { item: "HTML parsing", meaning: "The browser reads the blueprint — the raw **structure** of the page." },
      { item: "CSS matching", meaning: "Then it brings in the designer: every **rule** finds its matching elements, and the styled page gets painted." }
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
    { wrong: "<link rel='stylesheet' href='styles.css'> when file is style.css", correct: "<link rel='stylesheet' href='style.css'>", reason: "A wrong **file name** is like giving the designer the wrong address — the CSS never arrives, and the page stays plain and unstyled." }
  ],
  tryItYourself: {
    html: `<h1>Paint me</h1>`,
    css: `h1 {\n  color: darkblue;\n  background: lightyellow;\n}`,
    instructions: "Change darkblue to teal and notice the heading repaint instantly."
  },
  takeaways: [
    "The browser reads your **HTML** first to build the structure, then reads your **CSS** for the styling.",
    "**Selectors** are matchmakers — they pair each rule with the elements it should style.",
    "Styles missing? Play detective: check the **file link** first, then the **selector** spelling."
  ],
  quizQuestions: [
    { id: "css-m1l4-q1", question: "What does the browser do with CSS?", options: ["Matches selectors to HTML elements and paints styles", "Deletes the HTML file", "Sends emails to users", "Compresses images"], correctAnswerIndex: 0, explanation: "The browser is a diligent worker: it matches **selectors** to elements, computes the final styles, and renders everything beautifully." },
    { id: "css-m1l4-q2", question: "Your page shows no styles at all. What should you check first?", options: ["The stylesheet link and selector spelling", "Your keyboard batteries", "The website's logo", "Your screen brightness"], correctAnswerIndex: 0, explanation: "Nine times out of ten, a missing style means a broken **file link** or a misspelled **selector**. Check those first and save yourself a headache." }
  ]
};

// LESSON: CSS Syntax
export const cssCssSyntaxContent: LessonContent = {
  heroTagline: "Selectors, braces, properties, and colons",
  introduction: "**CSS** has a strict little grammar, and browsers are picky readers — one misplaced colon and they pretend your rule does not exist.\n\nThe good news? The pattern is tiny: a **selector**, curly braces, and **property-value** pairs inside. Learn it once, and you will write it forever.",
  definition: {
    term: "CSS syntax",
    explanation: "The exact grammar of a **CSS rule** looks like this: selector { property: value; }. Think of it as a sentence the browser understands — the **selector** is who you are talking to, and each **property-value** pair is an instruction."
  },
  whyItMatters: "One missing brace or one wrong colon can silently kill a whole rule. Browsers show no error messages for **CSS** — they just ignore the broken part.\n\nLearning the pattern precisely now will save you hours of confused staring later.",
  realWorldAnalogy: {
    title: "A CSS rule reads like a recipe",
    story: "Think of a recipe card: the dish name at the top (the **selector**), then each ingredient with its amount (**property**: **value**).\n\nJust like a recipe falls apart if you scramble the format, a CSS rule needs its colons and semicolons in exactly the right places.",
    comparison: [
      { item: "Property", meaning: "The ingredient — **what** you want to change, like color." },
      { item: "Value", meaning: "The amount — **how** you want to change it, like red." }
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
    { wrong: "h2 { color = red; }", correct: "h2 { color: red; }", reason: "**CSS** pairs property and value with a **colon**, not an equals sign — it is a label and a setting, not a math equation." }
  ],
  tryItYourself: {
    html: `<h2>Syntax practice</h2>`,
    css: `h2 {\n  color: #333;\n  font-size: 24px;\n}`,
    instructions: "Add a new line text-align: center; and watch the heading move."
  },
  takeaways: [
    "A **colon** sits between the property and its value — like a label and its setting.",
    "Every **declaration** ends with a semicolon, so the browser knows one instruction is finished.",
    "**Declarations** live inside curly braces, right after the selector."
  ],
  quizQuestions: [
    { id: "css-m1l5-q1", question: "Which character separates a CSS property from its value?", options: ["=", ":", ";", ","], correctAnswerIndex: 1, explanation: "The **colon** is the middleman: it introduces the value right after the property." },
    { id: "css-m1l5-q2", question: "Which ends a CSS declaration?", options: ["A period", "A semicolon", "A comma", "A slash"], correctAnswerIndex: 1, explanation: "The **semicolon** is the full stop of CSS — it tells the browser one instruction is done and the next one begins." }
  ]
};

// LESSON: CSS Rules
export const cssCssRulesContent: LessonContent = {
  heroTagline: "One rule, many declarations, endless styling",
  introduction: "A **CSS rule** is the complete package: a **selector** plus its **declaration block**.\n\nYou can pack many declarations into one rule, and stack many rules into one stylesheet. Once you start thinking in rules, stylesheets stop looking like chaos and start looking like a tidy to-do list.",
  definition: {
    term: "CSS rule",
    explanation: "A **CSS rule** is one complete instruction to the browser: the **selector** says which elements to style, and the **declaration block** says exactly how to style them. The selector picks the target, the declarations dress it up."
  },
  whyItMatters: "Thinking in **rules** is how you keep a stylesheet organized as it grows.\n\nEach rule does one clear job for one group of elements — like giving every team member exactly one task. No confusion, no overlap.",
  realWorldAnalogy: {
    title: "One clear instruction per classroom row",
    story: "Imagine a teacher saying: everyone in **row 3** (the selector), please stand up and face the board (the declarations). One instruction, one clear audience, one clear action.\n\nThat is a **CSS rule** — precise and impossible to misunderstand.",
    comparison: [
      { item: "Selector", meaning: "Who the instruction is for — which **elements** should listen up." },
      { item: "Declarations", meaning: "What they should do — the exact **styling** orders to follow." }
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
    { wrong: ".note background: yellow; }", correct: ".note { background: yellow; }", reason: "The declaration block must open with a **curly brace** — without it, the browser cannot tell where the selector ends and the instructions begin." }
  ],
  tryItYourself: {
    html: `<div class="note">Remember this</div>`,
    css: `.note {\n  background: lightyellow;\n  padding: 12px;\n}`,
    instructions: "Add border-left: 4px solid gold; inside the rule."
  },
  takeaways: [
    "A **rule** is simply a selector plus its declaration block — the two always travel together.",
    "One rule can carry as many **declarations** as you like.",
    "A **stylesheet** is nothing more than a list of rules, one after another."
  ],
  quizQuestions: [
    { id: "css-m1l6-q1", question: "What are the two parts of a CSS rule?", options: ["A selector and a declaration block", "A link and an image", "A table and a row", "A div and a span"], correctAnswerIndex: 0, explanation: "**Selector** and **declaration block** — the two halves of every rule, always together, never apart." },
    { id: "css-m1l6-q2", question: "How many declarations can one rule contain?", options: ["Only one", "As many as needed", "Exactly two", "Zero"], correctAnswerIndex: 1, explanation: "A rule can hold one **declaration** or fifty. The browser does not mind either way." }
  ]
};

// LESSON: Inline CSS
export const cssInlineCssContent: LessonContent = {
  heroTagline: "Styling one element, right inside its tag",
  introduction: "Need to style exactly one element, right now, with zero setup? **Inline CSS** is your shortcut: you write the styles directly inside the element's **style attribute**.\n\nIt works instantly — but it only ever affects that one lonely element.",
  definition: {
    term: "Inline CSS",
    explanation: "**Inline CSS** means writing your styles inside an HTML element's **style attribute**. It is the fastest way to style something — and also the fastest way to make a mess, because nothing about it can be reused anywhere else."
  },
  whyItMatters: "**Inline styles** are brilliant for quick experiments and tiny one-off tweaks.\n\nBut the moment you repeat the same style twice, you have created future work for yourself — every copy will need updating separately.",
  realWorldAnalogy: {
    title: "A sticky note on a single box",
    story: "**Inline CSS** is like sticking a note on one moving box that says fragile. The message applies to that box and that box only — every other box in the room has no idea the note even exists.",
    comparison: [
      { item: "style attribute", meaning: "The sticky note itself — the **style attribute** carrying the style." },
      { item: "Element", meaning: "The one box the note is stuck to — the only **element** that gets styled." }
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
    { wrong: '<p style="color: red">Text</p>', correct: '<p style="color: red;">Text</p>', reason: "Even inside a **style attribute**, declarations need their **semicolons** — the browser's grammar rules apply everywhere." }
  ],
  tryItYourself: {
    html: `<p style="color: red;">One red paragraph</p>\n<p>A normal paragraph</p>`,
    css: ``,
    instructions: "Change red to blue and notice only the first paragraph changes."
  },
  takeaways: [
    "**Inline CSS** lives in the style attribute of a single element.",
    "It styles that element and nothing else — no sharing, no reuse.",
    "Perfect for quick tests, but a nightmare to maintain at scale."
  ],
  quizQuestions: [
    { id: "css-m1l7-q1", question: "How do you write inline CSS?", options: ["In the style attribute of an element", "In a separate .js file", "Inside the <title> tag", "In the browser address bar"], correctAnswerIndex: 0, explanation: "**Inline CSS** never leaves home — it lives right inside the element's own **style attribute**." },
    { id: "css-m1l7-q2", question: "What is the main drawback of inline CSS?", options: ["It styles too many elements", "It cannot be reused and gets messy", "Browsers cannot read it", "It only works on phones"], correctAnswerIndex: 1, explanation: "One element, one style, zero sharing. Repeat it ten times and you have ten separate updates waiting for you later." }
  ]
};

// LESSON: Internal CSS
export const cssInternalCssContent: LessonContent = {
  heroTagline: "A style block for one whole page",
  introduction: "What if you want to style a whole page, but keep those styles private to that page? Enter **internal CSS**: a style block sitting in the page's head.\n\nIt styles every matching element on that page — and politely ignores all other pages.",
  definition: {
    term: "Internal CSS",
    explanation: "**Internal CSS** means writing your rules inside a **style block** in the document's head. It is the comfortable middle ground: more organized than inline styles, but the styles never leave that one page."
  },
  whyItMatters: "**Internal CSS** is perfect for single-page demos, experiments, or a page that needs its own unique look.\n\nBut for a multi-page site you would end up copy-pasting the same block everywhere — which is exactly the problem **external stylesheets** were invented to solve.",
  realWorldAnalogy: {
    title: "House rules on the kitchen fridge",
    story: "**Internal CSS** is like house rules stuck on your kitchen fridge: everyone in this house follows them, but the neighbors across the street have never even seen them.\n\nOne page, one set of rules.",
    comparison: [
      { item: "<style> block", meaning: "The fridge door — the **style block** where the house rules are posted." },
      { item: "One page", meaning: "Your house — the **one page** the rules apply to. Other pages are different houses." }
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
    { wrong: "Putting <style> inside <body> content randomly", correct: "Place <style> inside the <head> section", reason: "Browsers expect page styles in the **head**, so keep your style block there — a stray style tag in the body is invalid and confuses both browsers and future readers." }
  ],
  tryItYourself: {
    html: `<h1>Page title</h1>\n<p>Page text</p>`,
    css: `h1 {\n  color: purple;\n}\np {\n  line-height: 1.6;\n}`,
    instructions: "Change purple to darkorange and see the heading update."
  },
  takeaways: [
    "**Internal CSS** sits in a style block inside the head of the page.",
    "It styles every matching element on the page it lives on.",
    "It never affects any other page — the styles stay home."
  ],
  quizQuestions: [
    { id: "css-m1l8-q1", question: "Where does internal CSS go?", options: ["Inside a <style> block in <head>", "Inside the <footer>", "In a .png image", "In the browser settings"], correctAnswerIndex: 0, explanation: "The **style element** lives in the document head — that is internal CSS's official address." },
    { id: "css-m1l8-q2", question: "Which pages does internal CSS affect?", options: ["Every page on the internet", "Only the page it is written in", "Only printed pages", "Only mobile pages"], correctAnswerIndex: 1, explanation: "**Internal styles** are homebodies: they style their own page and never visit other pages." }
  ]
};

// LESSON: External CSS
export const cssExternalCssContent: LessonContent = {
  heroTagline: "One file that styles your entire website",
  introduction: "Imagine running a website with fifty pages and a separate copy of your styles hiding inside each one. Now imagine changing the brand color. Nightmare, right?\n\n**External CSS** is the escape: one standalone **.css file** holding all your rules, linked by every page. Change it once, and the whole site updates.",
  definition: {
    term: "External CSS",
    explanation: "**External CSS** is simply your styles living in their own **.css file**, separate from any HTML page. Any number of pages can link to it and share the exact same look."
  },
  whyItMatters: "This is how professional websites are built. One **stylesheet** for the whole site means one place to fix bugs, one place to redesign, and one place to keep everything consistent.\n\nIt is the difference between a hobby project and a real product.",
  realWorldAnalogy: {
    title: "One brand guide for every branch office",
    story: "Think of a big company with fifty branch offices: headquarters sends out one **brand guide**, and every office uses the same colors, the same fonts, the same logo.\n\nYour **.css file** is that brand guide — one document, and every linked page follows it.",
    comparison: [
      { item: ".css file", meaning: "The **brand guide** itself — every style rule gathered in one document." },
      { item: "Linked pages", meaning: "The **branch offices** — each linked page follows the same guide." }
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
    { wrong: "Writing <style> tags inside the .css file", correct: "Write plain CSS rules only, no <style> tags", reason: "A **.css file** is pure CSS territory — HTML tags like <style> inside it will break the entire stylesheet." }
  ],
  tryItYourself: {
    html: `<a href="#">A link</a>`,
    css: `a {\n  color: #0066cc;\n  text-decoration: none;\n}`,
    instructions: "Change the color to #cc0000 and remove the underline effect stays."
  },
  takeaways: [
    "**External CSS** is a standalone .css file holding all your rules.",
    "Any number of pages can **link** to the same stylesheet.",
    "Never put **HTML tags** inside a .css file — it holds pure CSS only."
  ],
  quizQuestions: [
    { id: "css-m1l9-q1", question: "What is external CSS?", options: ["CSS in a separate .css file", "CSS written on paper", "CSS inside an image", "CSS that only works offline"], correctAnswerIndex: 0, explanation: "**External CSS** lives in its own .css file, and pages simply link to it to borrow its styles." },
    { id: "css-m1l9-q2", question: "Can a .css file contain <style> tags?", options: ["Yes, always", "No, only plain CSS rules", "Only on weekends", "Only for headings"], correctAnswerIndex: 1, explanation: "A **.css file** speaks pure CSS — sneaking HTML tags in there will break the whole stylesheet." }
  ]
};

// LESSON: Linking CSS
export const cssLinkingCssContent: LessonContent = {
  heroTagline: "The <link> tag that connects page to stylesheet",
  introduction: "You can write the world's most beautiful stylesheet, but if the page never links to it, the browser will never know it exists.\n\nThe tiny **link element** is the bridge between your HTML page and your CSS file — miss it or mistype it, and your page shows up naked.",
  definition: {
    term: "Linking CSS",
    explanation: "**Linking CSS** means placing a **link element** in the document's head that points to your external **.css file**. It is the browser's invitation to come and fetch the styles."
  },
  whyItMatters: "A missing or mistyped **link** is the number one reason a page looks unstyled.\n\nBefore you panic about broken CSS, always check this little tag first — it takes five seconds and solves the mystery most of the time.",
  realWorldAnalogy: {
    title: "The power cord that lights the lamp",
    story: "The **link tag** is like a power cord: the lamp (your page) only lights up when the cord is plugged into the socket (your stylesheet).\n\nBeautiful lamp, no cord — no light.",
    comparison: [
      { item: "rel=\"stylesheet\"", meaning: "The label on the cord saying 'this plugs into a **stylesheet**'." },
      { item: "href=\"style.css\"", meaning: "The address of the socket — exactly where the **stylesheet file** lives." }
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
    { wrong: '<link rel="stylesheet" href="style.css"> in <body>', correct: 'Place <link> inside <head>', reason: "**Stylesheets** belong in the head so they load before the page renders — nobody wants to watch a page get dressed." }
  ],
  tryItYourself: {
    html: `<h1>Styled page</h1>`,
    css: `h1 {\n  color: darkgreen;\n}`,
    instructions: "Imagine this CSS is in style.css — change darkgreen to navy."
  },
  takeaways: [
    "Attach a stylesheet with a **link element** using rel=\"stylesheet\" and an href.",
    "The **link element** always goes inside the head.",
    "Styles not showing? Check the **href** spelling before anything else."
  ],
  quizQuestions: [
    { id: "css-m1l10-q1", question: "Which element links an external stylesheet?", options: ["<link>", "<style>", "<css>", "<attach>"], correctAnswerIndex: 0, explanation: "The **link element** is the bridge — it connects the page to its stylesheet." },
    { id: "css-m1l10-q2", question: "Where does the <link> element belong?", options: ["Inside <head>", "Inside <footer>", "After </html>", "Inside <p>"], correctAnswerIndex: 0, explanation: "**Stylesheet links** live in the document head, where the browser looks for them first." }
  ]
};

// LESSON: CSS Comments
export const cssCssCommentsContent: LessonContent = {
  heroTagline: "Notes for humans that browsers ignore",
  introduction: "Here is a secret about professional stylesheets: they are full of little notes the browser never reads.\n\n**CSS comments** — text wrapped in /* */ — are your private messages to yourself and your teammates. The browser skips them completely, so you can label sections, explain tricky rules, or even switch code off temporarily.",
  definition: {
    term: "CSS comments",
    explanation: "A **CSS comment** is any text wrapped in **/* and */**. The browser ignores it entirely — it exists only for the humans reading the code."
  },
  whyItMatters: "Stylesheets grow fast, and six months from now you will not remember why you wrote that strange rule.\n\n**Comments** are signposts for your future self — and for teammates who inherit your code. A well-commented stylesheet is a genuine gift.",
  realWorldAnalogy: {
    title: "Margin notes in a textbook",
    story: "**CSS comments** are like margin notes in a textbook: they help the reader understand what is going on, but they are completely invisible on the exam.\n\nThe browser reads only the real rules.",
    comparison: [
      { item: "/* comment */", meaning: "Your **margin note** — a hint for whoever reads the code next." },
      { item: "Browser", meaning: "Skips the notes and reads only the real **rules**, every single time." }
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
    { wrong: "<!-- comment --> inside a .css file", correct: "/* comment */ inside a .css file", reason: "**HTML comments** do not work inside CSS — in stylesheet land, comments always wear the /* */ outfit." }
  ],
  tryItYourself: {
    html: `<h1>Notes</h1>`,
    css: `/* Change the color below */\nh1 {\n  color: blue;\n}`,
    instructions: "Add your own comment above the rule describing what it does."
  },
  takeaways: [
    "**CSS comments** are wrapped in /* and */.",
    "Browsers ignore everything inside comments — they are for humans only.",
    "Use comments to **label sections**, explain tricky bits, or temporarily switch code off."
  ],
  quizQuestions: [
    { id: "css-m1l11-q1", question: "How do you write a CSS comment?", options: ["/* comment */", "<!-- comment -->", "// comment", "# comment"], correctAnswerIndex: 0, explanation: "**CSS comments** always wear their /* */ brackets — no exceptions, no shortcuts." },
    { id: "css-m1l11-q2", question: "What does the browser do with CSS comments?", options: ["Ignores them completely", "Shows them on the page", "Treats them as errors", "Prints them in the console"], correctAnswerIndex: 0, explanation: "**Comments** are love letters to humans; browsers skip right over them." }
  ]
};

// ==============================
// MODULE 2: CSS Selectors
// ==============================

// LESSON: Introduction to Selectors
export const cssIntroToSelectorsContent: LessonContent = {
  heroTagline: "Selectors point at exactly what to style",
  introduction: "Everything in **CSS** begins with a choice: which elements get styled? That choice is made by the **selector** — the first part of every rule.\n\nPick the right selector and your styles land exactly where you want; pick the wrong one and your rule styles nothing at all — or worse, the wrong things.",
  definition: {
    term: "CSS selector",
    explanation: "A **selector** is a pattern that matches **HTML elements**, telling the browser exactly which ones a rule should style. Think of it as the rule's targeting system."
  },
  whyItMatters: "Choosing the right **selector** is the single most basic CSS skill.\n\nGet it right and everything else feels easy; get it wrong and you will spend hours wondering why nothing is changing.",
  realWorldAnalogy: {
    title: "Calling names in a classroom",
    story: "A **selector** is like a teacher calling out names: everyone named Ahmed, stand up! Only the students whose names are called stand up — everyone else stays seated.\n\nYour selector decides who stands.",
    comparison: [
      { item: "Selector", meaning: "The **names** being called out." },
      { item: "Matched elements", meaning: "The students who stand up — the **elements** that get styled." }
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
    { wrong: ".main { color: red; } for <div id='main'>", correct: "#main { color: red; }", reason: "**Classes** wear a dot, **IDs** wear a hash — mix them up and the browser matches nothing at all." }
  ],
  tryItYourself: {
    html: `<h1>Title</h1>\n<p class="highlight">Note</p>`,
    css: `h1 {\n  color: blue;\n}\n.highlight {\n  background: yellow;\n}`,
    instructions: "Change .highlight to #highlight and watch the style stop matching."
  },
  takeaways: [
    "**Selectors** decide which elements a rule styles — they are the targeting system.",
    "**Element**, **class**, and **ID** selectors are the three basics you will use daily.",
    "The selector must match the **HTML** exactly, or nothing happens."
  ],
  quizQuestions: [
    { id: "css-m2l1-q1", question: "What does a CSS selector do?", options: ["Chooses which HTML elements to style", "Loads images faster", "Creates new HTML tags", "Deletes old styles"], correctAnswerIndex: 0, explanation: "A **selector** matches elements so the rule knows exactly what to style — no match, no style." },
    { id: "css-m2l1-q2", question: "Which symbol starts a class selector?", options: [".", "#", "*", "&"], correctAnswerIndex: 0, explanation: "**Class selectors** begin with a dot. No dot, no match." }
  ]
};

// LESSON: Element Selector
export const cssElementSelectorContent: LessonContent = {
  heroTagline: "Style every <p>, <h1>, or <div> at once",
  introduction: "The **element selector** is the simplest selector in all of CSS: just write the tag name — p, h1, div — and your rule styles every matching element on the page at once.\n\nNo dots, no hashes, no fuss.",
  definition: {
    term: "Element selector",
    explanation: "An **element selector** is a plain **HTML tag name** used as a selector. It matches every element with that tag — all of them, everywhere on the page."
  },
  whyItMatters: "It is the fastest way to set **base styles** for your whole page: readable paragraphs, matching heading colors, consistent spacing.\n\nOne short rule, and dozens of elements fall in line.",
  realWorldAnalogy: {
    title: "One rule for every red shirt",
    story: "An **element selector** is like announcing: everyone wearing a red shirt, step forward! It does not care who you are — only what you are.\n\nEvery paragraph, every heading of that type steps forward at once.",
    comparison: [
      { item: "Tag name", meaning: "The shirt color everyone shares — like **p** or **h1**." },
      { item: "All matching elements", meaning: "Everyone wearing that shirt — every **element** with that tag, all styled at once." }
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
    { wrong: "<p> { color: blue; }", correct: "p { color: blue; }", reason: "Write the **bare tag name** only — angle brackets stay in HTML land and have no business in a selector." }
  ],
  tryItYourself: {
    html: `<p>First</p>\n<p>Second</p>`,
    css: `p {\n  color: red;\n}`,
    instructions: "Change the color to green and watch both paragraphs change."
  },
  takeaways: [
    "**Element selectors** use the plain tag name — nothing added, nothing fancy.",
    "They style every matching element on the page in one go.",
    "Perfect for **base styles** that should apply everywhere."
  ],
  quizQuestions: [
    { id: "css-m2l2-q1", question: "What does the selector p target?", options: ["Every <p> element on the page", "Only the first paragraph", "The page title", "Images only"], correctAnswerIndex: 0, explanation: "An **element selector** matches every element with that tag name — all of them, no exceptions." },
    { id: "css-m2l2-q2", question: "How do you write an element selector for headings?", options: ["h1", ".h1", "#h1", "<h1>"], correctAnswerIndex: 0, explanation: "Just the **tag name**, plain and simple: no dot, no hash, no brackets." }
  ]
};

// LESSON: Class Selector
export const cssClassSelectorContent: LessonContent = {
  heroTagline: "Reusable styles for any group of elements",
  introduction: "What if you want to style some paragraphs but not all of them? The element selector is too broad — you need the **class selector**.\n\nAdd class=\"card\" to any elements you like, then write **.card** once, and every member of that club gets styled — even if they are completely different tag types.",
  definition: {
    term: "Class selector",
    explanation: "A **class selector** starts with a dot and matches every element carrying that **class name**. It is how you style groups of elements that belong together, no matter what tags they happen to use."
  },
  whyItMatters: "**Classes** are the workhorse of real-world CSS. They are reusable, you can combine several on one element, and they are the standard way to style components like cards, buttons, and alerts.\n\nMaster classes and you can build anything.",
  realWorldAnalogy: {
    title: "Join the club, get the style",
    story: "**Classes** are like club memberships: anyone can join the 'highlight' club, and a single rule styles every member at once.\n\nParagraphs, buttons, divs — the club does not discriminate.",
    comparison: [
      { item: "class=\"card\"", meaning: "Signing up for the card club — any **element** can join, whatever its tag." },
      { item: ".card", meaning: "The club's dress code — one **rule** styling every member." }
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
    { wrong: "card { color: red; } for class='card'", correct: ".card { color: red; }", reason: "The **leading dot** is not optional — without it, the browser goes looking for a <card> tag that does not exist." }
  ],
  tryItYourself: {
    html: `<div class="card">Box one</div>\n<p class="card">Box two</p>`,
    css: `.card {\n  border: 2px solid #333;\n  padding: 12px;\n}`,
    instructions: "Change the border color to blue and see both boxes update."
  },
  takeaways: [
    "**Class selectors** start with a dot — .card, .highlight, .btn.",
    "One **class** can style many elements, even of different tag types.",
    "An element can wear several **classes** at once, collecting styles from each."
  ],
  quizQuestions: [
    { id: "css-m2l3-q1", question: "Which selector matches class=\"btn\"?", options: [".btn", "#btn", "btn", "*btn"], correctAnswerIndex: 0, explanation: "**Classes** always start with a dot. That little dot is doing all the heavy lifting." },
    { id: "css-m2l3-q2", question: "Can a <div> and a <p> share the same class?", options: ["Yes, classes work on any element", "No, never", "Only on weekends", "Only inside forms"], correctAnswerIndex: 0, explanation: "**Classes** are reusable across any tag types — that flexibility is exactly why they run the show in real stylesheets." }
  ]
};

// LESSON: ID Selector
export const cssIdSelectorContent: LessonContent = {
  heroTagline: "One unique element, one precise style",
  introduction: "Some page parts exist exactly once: the header, the main banner, the footer. For these one-of-a-kind elements, CSS offers the **ID selector**.\n\nGive the element a unique id, target it with **#name**, and your style lands on that element and on no other.",
  definition: {
    term: "ID selector",
    explanation: "An **ID selector** starts with a hash (**#**) and matches the single element carrying that **id**. IDs are unique — only one element per page may use a given id."
  },
  whyItMatters: "**IDs** are perfect for styling the unique landmarks of your page — the header, the hero banner, the footer.\n\nOne element, one style, zero ambiguity about what gets styled.",
  realWorldAnalogy: {
    title: "A passport number finds one person",
    story: "An **ID** is like a passport number: it belongs to exactly one person, and looking it up finds that person instantly.\n\nNo duplicates, no confusion — **#header** means the header, full stop.",
    comparison: [
      { item: 'id="header"', meaning: "The **passport number** — unique to one element on the page." },
      { item: "#header", meaning: "Looking someone up by passport number — it finds exactly **one match**." }
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
    { wrong: "Using id='box' on three different divs", correct: "Use id='box' once; use class='box' for repeats", reason: "**IDs** must be unique on each page — duplicates confuse the browser and break scripts that look elements up by id." }
  ],
  tryItYourself: {
    html: `<div id="banner">Sale!</div>`,
    css: `#banner {\n  background: gold;\n  padding: 16px;\n  text-align: center;\n}`,
    instructions: "Change gold to tomato and watch the banner update."
  },
  takeaways: [
    "**ID selectors** start with a hash — #header, #hero, #footer.",
    "Each **id** may appear on only one element per page — uniqueness is the rule.",
    "Use **IDs** for unique page sections; use **classes** for anything that repeats."
  ],
  quizQuestions: [
    { id: "css-m2l4-q1", question: "Which selector matches id=\"menu\"?", options: ["#menu", ".menu", "menu", "*menu"], correctAnswerIndex: 0, explanation: "**IDs** use a leading hash. Think of the hash as the 'one and only' symbol." },
    { id: "css-m2l4-q2", question: "How many elements may share the same id on one page?", options: ["Only one", "As many as you like", "Exactly ten", "Two"], correctAnswerIndex: 0, explanation: "One **id**, one element. Duplicates are not just sloppy — they break things." }
  ]
};

// LESSON: Universal Selector
export const cssUniversalSelectorContent: LessonContent = {
  heroTagline: "One star that selects everything",
  introduction: "What if you could style every element on the page with a single character? Meet the **universal selector**: *****.\n\nIt matches everything — and it is most famous for **CSS resets**, where one rule wipes out inconsistent browser defaults across the whole page.",
  definition: {
    term: "Universal selector",
    explanation: "The **universal selector** is the ***** symbol, and it matches **all HTML elements** on the page. Every single one."
  },
  whyItMatters: "A single ***** rule can wipe out inconsistent **browser defaults**, giving you a clean, predictable starting point.\n\nEvery browser ships with its own default styles — the universal selector lets you take control back.",
  realWorldAnalogy: {
    title: "An announcement over the loudspeaker",
    story: "The **universal selector** is like a school announcement over the loudspeaker: every student hears it at the same time.\n\nOne message, entire school.",
    comparison: [
      { item: "*", meaning: "The **loudspeaker** — one selector reaching everywhere." },
      { item: "Every element", meaning: "**Every student** in the school — every element on the page." }
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
    { wrong: "* { font-size: 20px; } as a base style", correct: "body { font-size: 16px; } for base text", reason: "Styling ***** with heavy properties hits every element and can accidentally override **inheritance** you actually wanted." }
  ],
  tryItYourself: {
    html: `<h1>Title</h1>\n<p>Text with default spacing removed.</p>`,
    css: `* {\n  margin: 0;\n  padding: 0;\n}`,
    instructions: "Remove the * rule and notice the default spacing return."
  },
  takeaways: [
    "***** selects every element on the page.",
    "Commonly used for **resets** and box-sizing.",
    "Use it lightly — heavy ***** rules affect everything."
  ],
  quizQuestions: [
    { id: "css-m2l5-q1", question: "What does the * selector match?", options: ["Every element on the page", "Only images", "Only the body", "Nothing"], correctAnswerIndex: 0, explanation: "The **universal selector** matches all elements — no exceptions, no favorites." },
    { id: "css-m2l5-q2", question: "What is the most common use of *?", options: ["CSS resets", "Playing videos", "Sending forms", "Drawing charts"], correctAnswerIndex: 0, explanation: "***** is typically used to **reset** default margins and padding, giving every browser the same starting line." }
  ]
};

// LESSON: Group Selector
export const cssGroupSelectorContent: LessonContent = {
  heroTagline: "Style several selectors with one rule",
  introduction: "Tired of writing the same color in three separate rules? The **group selector** lets you apply the same declarations to multiple selectors at once.\n\nSeparate selectors with **commas**, and one rule styles them all.",
  definition: {
    term: "Group selector",
    explanation: "The **group selector** joins multiple selectors with **commas** so they share a single **declaration block**. One rule, many targets."
  },
  whyItMatters: "It keeps stylesheets **short** and **consistent**.\n\nInstead of repeating the same color in three rules, you write it once — and when the design changes, you update it in exactly one place.",
  realWorldAnalogy: {
    title: "One email to three people",
    story: "**Grouping selectors** is like sending one email to three people — the same message reaches everyone on the recipient list.\n\nWrite once, reach many.",
    comparison: [
      { item: "h1, h2, h3", meaning: "The email's **recipient list** — h1, h2, h3." },
      { item: "Shared declarations", meaning: "The **message** everyone receives — the shared declarations." }
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
    { wrong: "h1 h2 { color: red; }", correct: "h1, h2 { color: red; }", reason: "A **space** means descendant; a **comma** means group — mix them up and your styles land in the wrong place." }
  ],
  tryItYourself: {
    html: `<h1>One</h1>\n<h2>Two</h2>\n<h3>Three</h3>`,
    css: `h1, h2, h3 {\n  color: navy;\n}`,
    instructions: "Add p to the group and watch a paragraph join in."
  },
  takeaways: [
    "**Commas** group selectors into one rule.",
    "Grouped selectors **share** all declarations.",
    "A **space** between selectors is NOT grouping — it means descendant."
  ],
  quizQuestions: [
    { id: "css-m2l6-q1", question: "How do you group selectors?", options: ["Separate them with commas", "Separate them with spaces", "Put them in brackets", "Stack them on lines without punctuation"], correctAnswerIndex: 0, explanation: "**Commas** group selectors into one shared rule." },
    { id: "css-m2l6-q2", question: "Why group selectors?", options: ["To avoid repeating the same declarations", "To make pages slower", "To hide content", "To break the layout"], correctAnswerIndex: 0, explanation: "**Grouping** keeps stylesheets short, consistent, and much easier to update." }
  ]
};

// LESSON: Attribute Selector
export const cssAttributeSelectorContent: LessonContent = {
  heroTagline: "Select elements by their attributes",
  introduction: "What if you want to style all **text inputs** but not the checkboxes? Or every link that opens in a new tab?\n\n**Attribute selectors** match elements by the attributes they carry — no extra classes needed. Just point at the attribute and style away.",
  definition: {
    term: "Attribute selector",
    explanation: "An **attribute selector** uses square brackets to match elements carrying a specific **attribute** — optionally with a specific **value**, like [type=\"text\"]."
  },
  whyItMatters: "It lets you style elements by what they are **configured to do** — password fields, required inputs, new-tab links — without cluttering your HTML with extra classes.\n\nCleaner HTML, smarter CSS.",
  realWorldAnalogy: {
    title: "Sorting mail by stamp type",
    story: "**Attribute selectors** are like sorting mail by stamp type: you pick envelopes by a property they carry, not by who they are addressed to.\n\nThe stamp — not the name — decides.",
    comparison: [
      { item: "[type=\"text\"]", meaning: "Envelopes with a **first-class stamp** — matching a specific attribute value." },
      { item: "input", meaning: "All **envelopes** regardless of stamp — the plain tag, no filtering." }
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
    { wrong: "input[type=text] with quotes missing sometimes breaks", correct: "input[type=\"text\"]", reason: "**Quoting** attribute values is safer and works in every case — make it a habit." }
  ],
  tryItYourself: {
    html: `<input type="text" placeholder="Name">\n<input type="password" placeholder="Secret">`,
    css: `input[type="text"] {\n  border: 2px solid #4a90d9;\n}`,
    instructions: "Add a rule for input[type=\"password\"] with a red border."
  },
  takeaways: [
    "**Attribute selectors** use square brackets — [type=\"text\"].",
    "They match by **attribute presence** or by exact **value**.",
    "**Quote** attribute values for safety."
  ],
  quizQuestions: [
    { id: "css-m2l7-q1", question: "Which selector matches <input type=\"email\">?", options: ["input[type=\"email\"]", "input.email", "#email input", "input > email"], correctAnswerIndex: 0, explanation: "**Attribute selectors** always wear square brackets: [attribute=\"value\"]." },
    { id: "css-m2l7-q2", question: "What do attribute selectors match on?", options: ["Attributes and their values", "Element positions only", "Screen size", "Mouse clicks"], correctAnswerIndex: 0, explanation: "They match elements by the **attributes** they carry — by what they are configured to do, not by their tag." }
  ]
};

// LESSON: Descendant Selector
export const cssDescendantSelectorContent: LessonContent = {
  heroTagline: "Style elements nested inside others",
  introduction: "The **descendant selector** — written with a simple space — matches elements nested anywhere inside another element.\n\n**div p** styles every paragraph inside a div, no matter how deep it is buried. Context is everything.",
  definition: {
    term: "Descendant selector",
    explanation: "The **descendant selector** is two selectors separated by a **space**. It matches the second selector's elements **anywhere inside** the first — no matter how deeply nested."
  },
  whyItMatters: "It lets you style content by **context**: links inside the footer can look completely different from links inside the article.\n\nSame tag, different neighborhood, different outfit.",
  realWorldAnalogy: {
    title: "Everyone living in the city",
    story: "A **descendant selector** is like saying 'everyone living in this city' — it includes people in every neighborhood, every street, every house inside it.\n\nDepth does not matter; belonging does.",
    comparison: [
      { item: "article p", meaning: "**Everyone** living in the city — every paragraph inside the article." },
      { item: "Nested depth", meaning: "**Neighborhoods and streets** — nesting depth is irrelevant, all are included." }
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
    { wrong: "article, p { color: red; } when you meant nested", correct: "article p { color: red; }", reason: "A **comma** groups; a **space** means descendant. They look similar but do very different things." }
  ],
  tryItYourself: {
    html: `<article>\n  <p>Inside</p>\n</article>\n<p>Outside</p>`,
    css: `article p {\n  color: teal;\n}`,
    instructions: "Change teal to brown and confirm only the inside paragraph changes."
  },
  takeaways: [
    "A **space** between selectors means descendant.",
    "It matches at **any nesting depth**.",
    "Use it to style by **context** — where an element lives."
  ],
  quizQuestions: [
    { id: "css-m2l8-q1", question: "What does div p select?", options: ["Every <p> inside a <div>, at any depth", "Only direct child paragraphs", "The div itself", "Paragraphs outside divs"], correctAnswerIndex: 0, explanation: "**Descendant selectors** match at any nesting depth — shallow or buried, all count." },
    { id: "css-m2l8-q2", question: "Which character creates a descendant selector?", options: ["A space", "A comma", "A plus sign", "A slash"], correctAnswerIndex: 0, explanation: "A **space** between selectors means descendant. That tiny space does a big job." }
  ]
};

// LESSON: Child Selector
export const cssChildSelectorContent: LessonContent = {
  heroTagline: "Only direct children, not grandchildren",
  introduction: "The **descendant selector** grabs everything nested inside — but what if you only want the direct children?\n\nThe **child selector** — written with **>** — matches only elements sitting exactly one level below the parent. Grandchildren need not apply.",
  definition: {
    term: "Child selector",
    explanation: "The **child selector** joins two selectors with **>** and matches only elements that are **direct children** of the parent. One level down, never deeper."
  },
  whyItMatters: "It gives you surgical precision in nested structures like **menus** and **lists**.\n\nTop-level items can look completely different from nested ones — and the CSS stays clean and readable.",
  realWorldAnalogy: {
    title: "My own children only — no grandchildren",
    story: "The **child selector** is like saying 'my own children only' at a family reunion — the grandchildren playing in the corner are not included.\n\nDirect kids, nothing deeper.",
    comparison: [
      { item: "ul > li", meaning: "**My own children** — direct children only." },
      { item: "ul li", meaning: "**Children, grandchildren, everyone** in the family — the plain space selector." }
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
    { wrong: "ul > li expecting nested sub-items to be styled", correct: "ul li for all levels, ul > li for direct only", reason: "**>** skips grandchildren — use a space instead if you want every level." }
  ],
  tryItYourself: {
    html: `<ul>\n  <li>Top item\n    <ul><li>Nested item</li></ul>\n  </li>\n</ul>`,
    css: `ul > li {\n  color: darkred;\n}`,
    instructions: "Change > to a space and watch the nested item get styled too."
  },
  takeaways: [
    "**>** means **direct child** only.",
    "Grandchildren and deeper levels are skipped.",
    "Perfect for styling **nested menus** precisely."
  ],
  quizQuestions: [
    { id: "css-m2l9-q1", question: "What does ul > li select?", options: ["Only <li> elements directly inside <ul>", "All <li> at any depth", "The <ul> itself", "Paragraphs inside lists"], correctAnswerIndex: 0, explanation: "**>** selects **direct children** only — one level down, that is it." },
    { id: "css-m2l9-q2", question: "How is the child selector different from the descendant selector?", options: ["Child (>) is direct only; descendant (space) is any depth", "They are identical", "Child is slower", "Descendant needs a dot"], correctAnswerIndex: 0, explanation: "**>** limits matching to direct children; deeper levels are politely ignored." }
  ]
};

// LESSON: Pseudo-classes
export const cssPseudoClassesContent: LessonContent = {
  heroTagline: "Style elements in special states",
  introduction: "How do buttons change color when you hover? How do inputs glow when you click into them?\n\n**Pseudo-classes** style elements based on their **state** or **position** — hovered, focused, first child, and more. They start with a single colon.",
  definition: {
    term: "Pseudo-class",
    explanation: "A **pseudo-class** is a keyword added to a selector with a **single colon** — like :hover or :first-child — that matches elements in a particular **state** or position."
  },
  whyItMatters: "All **interactive feedback** — buttons changing on hover, inputs glowing on focus — comes from pseudo-classes.\n\nThey are what make a page feel alive instead of frozen.",
  realWorldAnalogy: {
    title: "Moods of an element",
    story: "**Pseudo-classes** are like moods: the same person (element) looks different when happy (**:hover**) versus alert (**:focus**).\n\nSame element, different state, different style.",
    comparison: [
      { item: ":hover", meaning: "The **happy mood** — the mouse is over it." },
      { item: ":focus", meaning: "The **alert mood** — the keyboard is on it." }
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
    { wrong: "a :hover (with a space)", correct: "a:hover (no space)", reason: "A **space** before the pseudo-class would target hovered descendants of the link — not the link itself. Keep them glued together." }
  ],
  tryItYourself: {
    html: `<button>Hover me</button>`,
    css: `button {\n  background: #2563eb;\n  color: white;\n  padding: 10px 20px;\n}\nbutton:hover {\n  background: #1d4ed8;\n}`,
    instructions: "Change the hover color to darkgreen."
  },
  takeaways: [
    "**Pseudo-classes** use a single colon — :hover, :focus, :active.",
    "**:hover**, **:focus**, and **:active** handle interaction states.",
    "No space between the **selector** and the pseudo-class."
  ],
  quizQuestions: [
    { id: "css-m2l10-q1", question: "Which pseudo-class applies when the mouse is over an element?", options: [":hover", ":visited", ":first-child", ":empty"], correctAnswerIndex: 0, explanation: "**:hover** matches while the pointer is over the element — the moment it leaves, the style leaves too." },
    { id: "css-m2l10-q2", question: "How many colons does a pseudo-class use?", options: ["One", "Two", "Three", "Zero"], correctAnswerIndex: 0, explanation: "**Pseudo-classes** use one colon; **pseudo-elements** use two. Count the colons and you will never confuse them." }
  ]
};

// LESSON: Pseudo-elements
export const cssPseudoElementsContent: LessonContent = {
  heroTagline: "Style virtual parts of an element",
  introduction: "Want a fancy **drop cap** on your first letter? Custom bullets? Quotation marks that appear by magic?\n\n**Pseudo-elements** style specific parts of an element — first letter, first line — or insert content before and after it. They use a double colon (**::**).",
  definition: {
    term: "Pseudo-element",
    explanation: "A **pseudo-element** is a keyword with a **double colon** — like ::first-letter or ::before — that styles a specific **part** of an element, or inserts decorative content around it."
  },
  whyItMatters: "They create **decorative effects** — drop caps, custom bullets, quotation marks — without adding a single extra HTML tag.\n\nYour HTML stays clean while your design gets fancier.",
  realWorldAnalogy: {
    title: "Accessories on an outfit",
    story: "**Pseudo-elements** are like accessories on an outfit: **::before** is a hat added on top, **::first-letter** is a fancy decorative initial on a book page.\n\nSame element, brand-new details.",
    comparison: [
      { item: "::before", meaning: "A **hat** — content added before the element's own content." },
      { item: "::first-letter", meaning: "A **decorative initial** — the first letter, styled like a storybook." }
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
    { wrong: "p:first-letter (single colon in modern CSS)", correct: "p::first-letter", reason: "Modern **CSS** uses double colons for pseudo-elements — precisely to distinguish them from single-colon pseudo-classes." }
  ],
  tryItYourself: {
    html: `<p>Once upon a time in a stylesheet...</p>`,
    css: `p::first-letter {\n  font-size: 3em;\n  color: #b91c1c;\n}`,
    instructions: "Change the color to darkblue."
  },
  takeaways: [
    "**Pseudo-elements** use a double colon (::).",
    "**::before** and **::after** insert decorative content.",
    "**::first-letter** and **::first-line** style parts of text."
  ],
  quizQuestions: [
    { id: "css-m2l11-q1", question: "Which creates a drop-cap effect?", options: ["p::first-letter", "p:hover", "p:first-child", "p::hover"], correctAnswerIndex: 0, explanation: "**::first-letter** styles the first letter of the element — perfect for storybook drop caps." },
    { id: "css-m2l11-q2", question: "How many colons does a pseudo-element use?", options: ["Two", "One", "Four", "None"], correctAnswerIndex: 0, explanation: "**Pseudo-elements** use a double colon. Two colons, two little style assistants." }
  ]
};

// LESSON: Selector Specificity
export const cssSelectorSpecificityContent: LessonContent = {
  heroTagline: "When rules fight, specificity decides",
  introduction: "Ever written a style, refreshed, and… nothing happened? Then you changed one tiny thing and suddenly it worked?\n\nYou just met **specificity** — the scoring system browsers use when rules fight over the same element. **IDs** beat classes, classes beat element selectors, and inline styles beat them all.",
  definition: {
    term: "Selector specificity",
    explanation: "**Specificity** is the scoring system browsers use when several rules target the same element. Think of it as a weight: heavier selectors overrule lighter ones."
  },
  whyItMatters: "Those mysterious 'my style is not applying' bugs? They are almost always **specificity** losses in disguise.\n\nOnce you know the score order, the guessing game ends — and debugging gets dramatically faster.",
  realWorldAnalogy: {
    title: "A card game where the ace always wins",
    story: "**Specificity** is like a card game: an **ID** is an ace, a **class** is a king, and an **element selector** is a low number card.\n\nWhen cards clash, the ace wins — every time.",
    comparison: [
      { item: "ID (#)", meaning: "The **ace** — beats classes and elements." },
      { item: "Class (.)", meaning: "The **king** — beats plain element selectors." }
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
    { wrong: "Adding !important everywhere to win fights", correct: "Use a more specific selector instead", reason: "**!important** breaks the natural cascade and makes future overrides painful. Treat it as a last resort, not a habit." }
  ],
  tryItYourself: {
    html: `<h1 id="title" class="title">Hello</h1>`,
    css: `#title {\n  color: red;\n}\n.title {\n  color: blue;\n}\nh1 {\n  color: green;\n}`,
    instructions: "Delete the #title rule and see which color wins next."
  },
  takeaways: [
    "**Specificity** order: inline style > ID > class > element.",
    "When scores tie, the **later rule** wins.",
    "Avoid **!important** — write better selectors instead."
  ],
  quizQuestions: [
    { id: "css-m2l12-q1", question: "Which selector has the highest specificity?", options: ["#header", ".header", "header", "*"], correctAnswerIndex: 0, explanation: "**IDs** outrank classes, elements, and the universal selector — the ace beats everything below it." },
    { id: "css-m2l12-q2", question: "Two rules have equal specificity. Which wins?", options: ["The one written later", "The one written first", "Neither applies", "The shorter one"], correctAnswerIndex: 0, explanation: "When specificity ties, **source order** decides — the later rule wins." }
  ]
};

// ==============================
// MODULE 3: Colors and Backgrounds
// ==============================

// LESSON: CSS Colors
export const cssColorsContent: LessonContent = {
  heroTagline: "Give every element its perfect color",
  introduction: "**CSS** offers several ways to describe color:\n\n- **Names** like red\n- **HEX** codes like #ff0000\n- **RGB** like rgb(255, 0, 0)\n- **HSL** like hsl(0, 100%, 50%)\n\nThey all paint the same pixels — you just pick the format you like.",
  definition: {
    term: "CSS colors",
    explanation: "**Colors** are values that set the color of **text**, **backgrounds**, and **borders** — written as **names**, **HEX**, **RGB**, or **HSL**. Different formats, same paint."
  },
  whyItMatters: "**Color** is the very first thing visitors notice on your page.\n\nGetting comfortable with color formats is step one of real design work — and the most fun step, too.",
  realWorldAnalogy: {
    title: "Miles or kilometers — same road",
    story: "**Color formats** are like measuring distance in miles or kilometers — different numbers, same road.\n\nPick whichever unit feels natural; you will arrive at the same color.",
    comparison: [
      { item: "red", meaning: "**Miles** — simple words everyone knows." },
      { item: "#ff0000", meaning: "**Kilometers** — precise numbers designers prefer." }
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
    { wrong: "color: #ff000;", correct: "color: #ff0000;", reason: "**HEX codes** need exactly 3 or 6 digits — 5 digits is invalid and the browser will ignore it." }
  ],
  tryItYourself: {
    html: `<h1>Colorful heading</h1>`,
    css: `h1 {\n  color: tomato;\n  background-color: #fff3e0;\n  padding: 16px;\n}`,
    instructions: "Change tomato to steelblue and see the heading recolor."
  },
  takeaways: [
    "**CSS** supports named, HEX, RGB, and HSL colors.",
    "**color** sets text; **background-color** paints behind it.",
    "All formats describe the **same colors** — pick your favorite."
  ],
  quizQuestions: [
    { id: "css-m3l1-q1", question: "Which property sets text color?", options: ["color", "text-paint", "font-color", "paint"], correctAnswerIndex: 0, explanation: "The **color** property is like picking an outfit for your text — it sets the **text color**." },
    { id: "css-m3l1-q2", question: "Which property paints behind the text?", options: ["background-color", "behind-color", "fill", "canvas"], correctAnswerIndex: 0, explanation: "**background-color** paints the area behind the element — the wall behind your text." }
  ]
};

// LESSON: Color Names
export const cssColorNamesContent: LessonContent = {
  heroTagline: "140 ready-made colors, no codes needed",
  introduction: "**CSS** includes **140 named colors** — red, tomato, steelblue, papayawhip — that you can type directly.\n\nThey are easy to remember and perfect while learning: no codes, no numbers, just words.",
  definition: {
    term: "Color names",
    explanation: "**Named colors** are predefined English color keywords — like **crimson** or **teal** — that browsers translate into exact colors. **CSS** ships with 140 of them."
  },
  whyItMatters: "**Names** make your first stylesheets wonderfully readable — color: tomato says exactly what it means.\n\nLater you can switch to **HEX** for precision without changing your approach at all.",
  realWorldAnalogy: {
    title: "Crayon labels, not pigment mixing",
    story: "**Named colors** are like crayon labels: grabbing 'burnt sienna' is much faster than mixing the exact pigment yourself.\n\nQuick to pick, easy to read.",
    comparison: [
      { item: "tomato", meaning: "The **crayon label** — quick to grab and easy to read." },
      { item: "#ff6347", meaning: "The **exact pigment mix** — precise, but harder to remember." }
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
    { wrong: "color: dark red;", correct: "color: darkred;", reason: "Multi-word names are written as **one word** — darkred, not 'dark red'. CSS does not allow spaces in color names." }
  ],
  tryItYourself: {
    html: `<div class="alert">Warning!</div>`,
    css: `.alert {\n  background-color: mistyrose;\n  color: darkred;\n  padding: 12px;\n}`,
    instructions: "Change mistyrose to lightcyan and darkred to darkblue."
  },
  takeaways: [
    "**CSS** has 140 built-in color names.",
    "Names are **readable** but less precise than HEX.",
    "Write multi-word names as one word: **darkred**."
  ],
  quizQuestions: [
    { id: "css-m3l2-q1", question: "Which is a valid CSS color name?", options: ["tomato", "ketchup", "pizza", "laptop"], correctAnswerIndex: 0, explanation: "**tomato** is one of the 140 standard named colors — yes, it is a real CSS color." },
    { id: "css-m3l2-q2", question: "How do you write the dark red name?", options: ["darkred", "dark red", "dark-red", "red dark"], correctAnswerIndex: 0, explanation: "**Color names** are always single words: darkred, never 'dark red'." }
  ]
};

// LESSON: HEX Colors
export const cssHexColorsContent: LessonContent = {
  heroTagline: "The #rrggbb code designers use daily",
  introduction: "**HEX colors** describe red, green, and blue light as hexadecimal numbers after a hash sign: **#ff0000** is pure red.\n\nFeeling lazy? The shorthand **#f00** means exactly the same thing.",
  definition: {
    term: "HEX color",
    explanation: "A **HEX color** is written as **#** followed by 3 or 6 **hexadecimal** digits, describing the **red**, **green**, and **blue** light channels. **#ff0000** is pure red."
  },
  whyItMatters: "**HEX** is the standard in design tools and code.\n\nWhen a designer hands you a color, it will almost always arrive as a HEX code — speaking HEX means speaking designer.",
  realWorldAnalogy: {
    title: "A paint-mixing recipe",
    story: "A **HEX code** is like a paint-mixing recipe: **#ff0000** means 'full red, no green, no blue'.\n\nThree pairs of digits, three light channels.",
    comparison: [
      { item: "ff", meaning: "How much **red** light — from 00 (none) to ff (full)." },
      { item: "00 00", meaning: "How much **green** and **blue** light — same 00 to ff scale." }
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
    { wrong: "color: ff0000;", correct: "color: #ff0000;", reason: "**HEX codes** must start with the **#** sign — without it, the browser has no idea you mean a color." }
  ],
  tryItYourself: {
    html: `<div class="brand">Brand box</div>`,
    css: `.brand {\n  background-color: #1a73e8;\n  color: #ffffff;\n  padding: 16px;\n}`,
    instructions: "Change #1a73e8 to #e81a73 and see the box turn pink."
  },
  takeaways: [
    "**HEX** = # plus 3 or 6 hex digits.",
    "**#f00** is shorthand for #ff0000.",
    "Design tools and mockups use **HEX** everywhere."
  ],
  quizQuestions: [
    { id: "css-m3l3-q1", question: "What does #00ff00 represent?", options: ["Pure green", "Pure red", "Pure blue", "Black"], correctAnswerIndex: 0, explanation: "The **middle pair** controls green — ff means full green light." },
    { id: "css-m3l3-q2", question: "Which is valid shorthand HEX?", options: ["#f00", "#ff000", "#gg0000", "ff0000"], correctAnswerIndex: 0, explanation: "**#f00** is the 3-digit shorthand for #ff0000 — same color, fewer characters." }
  ]
};

// LESSON: RGB Colors
export const cssRgbColorsContent: LessonContent = {
  heroTagline: "Mix red, green, and blue light by number",
  introduction: "**RGB colors** mix three light channels, each from **0 to 255**: rgb(255, 0, 0) is pure red.\n\nThink of it as a recipe: bigger numbers mean more of that light in the mix.",
  definition: {
    term: "RGB color",
    explanation: "An **RGB color** is written as **rgb(red, green, blue)**, with each channel ranging from **0 to 255**. Bigger numbers mean more of that light."
  },
  whyItMatters: "**RGB** makes color math beautifully obvious: adding equal amounts of all three channels always moves toward gray, then white.\n\nOnce you see the pattern, you can predict colors before you even refresh the page.",
  realWorldAnalogy: {
    title: "Three dimmer switches for stage lights",
    story: "**RGB** is like three dimmer switches for red, green, and blue stage lights — turn them up and down to mix any color.\n\nFull blast on all three? Pure white.",
    comparison: [
      { item: "255", meaning: "**Dimmer** at full brightness — 255." },
      { item: "0", meaning: "**Dimmer** switched off — 0." }
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
    { wrong: "rgb(300, 0, 0)", correct: "rgb(255, 0, 0)", reason: "Each **channel** caps at 255 — higher values are invalid and the browser will reject them." }
  ],
  tryItYourself: {
    html: `<div class="swatch">Green box</div>`,
    css: `.swatch {\n  background-color: rgb(34, 197, 94);\n  color: white;\n  padding: 16px;\n}`,
    instructions: "Change the first number to 200 and watch the green shift toward yellow."
  },
  takeaways: [
    "**rgb()** takes three numbers from 0 to 255.",
    "**Equal values** make grays; all 255 makes white.",
    "All **zeros** makes black."
  ],
  quizQuestions: [
    { id: "css-m3l4-q1", question: "What color is rgb(0, 0, 0)?", options: ["Black", "White", "Red", "Blue"], correctAnswerIndex: 0, explanation: "No light in any channel means **black** — all dimmers off, total darkness." },
    { id: "css-m3l4-q2", question: "What is the maximum value of one RGB channel?", options: ["255", "100", "360", "1000"], correctAnswerIndex: 0, explanation: "Each **channel** ranges from 0 to 255. Memorize that range and RGB becomes easy." }
  ]
};

// LESSON: RGBA Colors
export const cssRgbaColorsContent: LessonContent = {
  heroTagline: "RGB plus a transparency dial",
  introduction: "What if you want a color you can partially see through? **RGBA** adds a fourth value — **alpha** — to RGB.\n\n**Alpha** runs from **0** (fully transparent) to **1** (fully solid), letting whatever is behind show through.",
  definition: {
    term: "RGBA color",
    explanation: "**RGBA** adds a fourth value — **alpha** — to RGB: rgba(red, green, blue, alpha). **Alpha** runs from **0** (fully transparent) to **1** (fully solid), letting backgrounds show through."
  },
  whyItMatters: "**Overlays**, **shadows**, and tinted panels all need see-through color — and **RGBA** is exactly how you make them.\n\nIt is the secret behind those sleek dark overlays on hero images.",
  realWorldAnalogy: {
    title: "Sunglasses tint for your colors",
    story: "**Alpha** is like sunglasses tint: **0** is clear glass, **1** is a blindfold, and **0.5** is a light shade.\n\nSame color, different see-through-ness.",
    comparison: [
      { item: "alpha 0", meaning: "**Clear glass** — completely invisible." },
      { item: "alpha 0.5", meaning: "**Sunglasses** — half see-through, half solid." }
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
    { wrong: "rgba(0, 0, 0, 60%)", correct: "rgba(0, 0, 0, 0.6)", reason: "**Alpha** is a decimal from **0 to 1** — not a percentage. Write 0.5, not 50%." }
  ],
  tryItYourself: {
    html: `<div class="overlay">See-through panel</div>`,
    css: `.overlay {\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 24px;\n}`,
    instructions: "Change 0.6 to 0.2 and watch the panel become nearly transparent."
  },
  takeaways: [
    "**RGBA** = RGB + alpha transparency.",
    "**Alpha 0** is invisible; **alpha 1** is solid.",
    "Use **RGBA** for overlays and tinted panels."
  ],
  quizQuestions: [
    { id: "css-m3l5-q1", question: "What does the 'a' in rgba() control?", options: ["Transparency", "Text size", "Animation speed", "Border width"], correctAnswerIndex: 0, explanation: "**Alpha** controls how transparent the color is — the see-through dial." },
    { id: "css-m3l5-q2", question: "Which alpha value is fully transparent?", options: ["0", "1", "0.5", "255"], correctAnswerIndex: 0, explanation: "**Alpha 0** means fully transparent — the color becomes invisible." }
  ]
};

// LESSON: HSL Colors
export const cssHslColorsContent: LessonContent = {
  heroTagline: "Pick colors the human way: hue, saturation, lightness",
  introduction: "**HSL** describes color the human way:\n\n- **Hue** — the color wheel angle (0–360)\n- **Saturation** — how vivid (0–100%)\n- **Lightness** — how bright (0–100%)\n\nNo memorizing hex digits — just three intuitive dials.",
  definition: {
    term: "HSL color",
    explanation: "**HSL** describes color as **hue** (the color-wheel angle, 0–360), **saturation** (how vivid, 0–100%), and **lightness** (how bright, 0–100%). It matches how humans actually think about color."
  },
  whyItMatters: "Need a lighter version of your brand color? In **HSL** you just raise the **lightness** — done.\n\nIn RGB you would be guessing at three numbers. HSL turns color tweaking into a one-second job.",
  realWorldAnalogy: {
    title: "Shopping at a paint store",
    story: "**HSL** is like shopping at a paint store: pick a **color family** (hue), choose how intense it is (saturation), then decide how light or dark (lightness).\n\nThree friendly dials, zero guesswork.",
    comparison: [
      { item: "Hue", meaning: "The **color family** — red, blue, green, and everything between." },
      { item: "Lightness", meaning: "How much **white or black** is mixed in — from pitch dark to paper white." }
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
    { wrong: "hsl(210, 80, 45)", correct: "hsl(210, 80%, 45%)", reason: "**Saturation** and **lightness** need their **%** signs — without them, the values are invalid." }
  ],
  tryItYourself: {
    html: `<div class="brand">Brand blue</div>`,
    css: `.brand {\n  background-color: hsl(210, 80%, 45%);\n  color: white;\n  padding: 16px;\n}`,
    instructions: "Raise 45% to 70% and watch the blue get lighter."
  },
  takeaways: [
    "**HSL** = hue (0–360), saturation %, lightness %.",
    "Adjusting **lightness** creates color shades easily.",
    "**Hue 0** is red, 120 is green, 240 is blue."
  ],
  quizQuestions: [
    { id: "css-m3l6-q1", question: "In hsl(), what does the first number set?", options: ["The hue (color family)", "The font size", "The opacity", "The border radius"], correctAnswerIndex: 0, explanation: "**Hue** picks the position on the **color wheel** — 0 is red, 120 is green, 240 is blue." },
    { id: "css-m3l6-q2", question: "How do you make an HSL color lighter?", options: ["Raise the lightness %", "Raise the hue", "Lower the saturation to 0 and hue to 0", "Remove the % signs"], correctAnswerIndex: 0, explanation: "**Lightness** directly controls how light or dark the color is. Turn it up, and colors glow." }
  ]
};

// LESSON: Background Color
export const cssBackgroundColorContent: LessonContent = {
  heroTagline: "Paint the area behind your content",
  introduction: "**background-color** fills an element's entire box — content, padding, everything inside the border — with a solid color.\n\nThe default is **transparent**, so elements show whatever sits behind them until you paint them.",
  definition: {
    term: "background-color",
    explanation: "**background-color** sets the solid background color of an element's **box** — covering the content and padding areas, right up to the border."
  },
  whyItMatters: "**Section backgrounds** are the backbone of page design.\n\nCards, banners, and footers all start with background-color — it is the first brushstroke of every layout.",
  realWorldAnalogy: {
    title: "Painting a room's walls",
    story: "**background-color** is like painting a room's walls: everything inside the room sits against the new color.\n\nThe furniture (content) stays — only the walls change.",
    comparison: [
      { item: "Element box", meaning: "The **room** — the element's box." },
      { item: "background-color", meaning: "The **wall paint** — the background color filling it." }
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
    { wrong: "Expecting background-color to fill the margin area", correct: "Background covers content + padding, not margin", reason: "**Margins** are always transparent — backgrounds stop at the border, never beyond it." }
  ],
  tryItYourself: {
    html: `<div class="card">Card content</div>`,
    css: `.card {\n  background-color: #f0f4ff;\n  padding: 20px;\n}`,
    instructions: "Change #f0f4ff to #e8f5e9 and watch the card turn pale green."
  },
  takeaways: [
    "**background-color** paints content and padding areas.",
    "**Margins** stay transparent — backgrounds stop at the border.",
    "The default background is **transparent**."
  ],
  quizQuestions: [
    { id: "css-m3l7-q1", question: "Which areas does background-color paint?", options: ["Content and padding", "Only the text itself", "The margin area", "Other elements"], correctAnswerIndex: 0, explanation: "The **background** covers the content and padding boxes, stopping at the border — margins stay transparent." },
    { id: "css-m3l7-q2", question: "What is the default background-color?", options: ["transparent", "white", "black", "gray"], correctAnswerIndex: 0, explanation: "Elements are **transparent** by default, showing whatever is behind them like clear glass." }
  ]
};

// LESSON: Background Image
export const cssBackgroundImageContent: LessonContent = {
  heroTagline: "Place a picture behind your content",
  introduction: "Want a photo behind your hero banner? **background-image** puts an image behind an element's content using **url()**.\n\nThe image sits on top of any **background-color** — so the color still peeks through wherever the image is transparent or fails to load.",
  definition: {
    term: "background-image",
    explanation: "**background-image** places an image behind an element's content using **url()**. The image layers on top of any **background-color**, so the color still shows wherever the image is transparent or missing."
  },
  whyItMatters: "**Hero banners**, textured cards, and photo headers all rely on background images rather than <img> tags.\n\nIt keeps your HTML clean while your visuals get dramatically richer.",
  realWorldAnalogy: {
    title: "Wallpaper behind the furniture",
    story: "A **background image** is like wallpaper: it decorates the wall (element) while the furniture (content) sits comfortably in front of it.\n\nDecoration behind, content in front.",
    comparison: [
      { item: "url()", meaning: "Choosing which **wallpaper roll** to hang — url() picks the image." },
      { item: "background-color", meaning: "The **paint under** the wallpaper — background-color shows through gaps." }
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
    { wrong: "background-image: url(banner.jpg) with a wrong path", correct: "background-image: url(\"images/banner.jpg\")", reason: "A wrong **path** silently shows nothing — always include a fallback **background-color** so the design survives." }
  ],
  tryItYourself: {
    html: `<div class="hero">Welcome</div>`,
    css: `.hero {\n  background-color: #1a1a2e;\n  color: white;\n  padding: 60px 20px;\n  text-align: center;\n}`,
    instructions: "Add background-image: url(\"mountains.jpg\"); and see the fallback color idea in action."
  },
  takeaways: [
    "**background-image** uses url() to load a picture.",
    "The image layers **above** background-color.",
    "Always set a **fallback** background-color."
  ],
  quizQuestions: [
    { id: "css-m3l8-q1", question: "How do you set a background image?", options: ["background-image: url(\"pic.jpg\");", "image: pic.jpg;", "background: <img>;", "picture: url(pic.jpg);"], correctAnswerIndex: 0, explanation: "**background-image** with **url()** loads the picture and hangs it behind the content." },
    { id: "css-m3l8-q2", question: "Why set a background-color with a background-image?", options: ["As a fallback if the image fails", "It is required by law", "It makes images load faster", "It deletes the image"], correctAnswerIndex: 0, explanation: "The **color** shows wherever the image is missing or transparent — your safety net." }
  ]
};

// LESSON: Background Size
export const cssBackgroundSizeContent: LessonContent = {
  heroTagline: "Control how big the background image is",
  introduction: "**background-size** decides how large the background image appears:\n\n- **cover** — fills the whole box, cropping the edges\n- **contain** — fits the entire image inside, leaving empty space\n- **exact sizes** — like 200px 100px\n\nThree options, three very different results.",
  definition: {
    term: "background-size",
    explanation: "**background-size** controls the displayed size of a **background image**: **cover** fills the box (cropping edges), **contain** fits the whole image inside (leaving space), or you set exact dimensions."
  },
  whyItMatters: "A **hero banner** needs cover so no gaps show; a **logo watermark** needs contain so it never gets cropped.\n\nPicking wrong leaves ugly gaps or cut-off images — this property makes or breaks full-screen designs.",
  realWorldAnalogy: {
    title: "Fitting a poster on a wall",
    story: "**background-size** is like fitting a poster on a wall: **cover** trims the poster's edges so the wall is completely filled; **contain** shrinks the poster so the whole thing shows, wall gaps and all.\n\nFill the wall, or show the whole poster — you cannot have both.",
    comparison: [
      { item: "cover", meaning: "**Trim** the poster so it fills the wall completely — edges get cropped." },
      { item: "contain", meaning: "Show the **whole poster** — wall gaps are allowed." }
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
    { wrong: "Using contain for a full-bleed hero banner", correct: "Use cover for full-bleed banners", reason: "**contain** leaves empty gaps; **cover** fills every pixel. Choose based on what matters more: the whole image, or no gaps." }
  ],
  tryItYourself: {
    html: `<div class="hero">Banner</div>`,
    css: `.hero {\n  background-color: #334155;\n  background-size: cover;\n  height: 200px;\n  color: white;\n}`,
    instructions: "Change cover to contain and think about which suits a full-width banner."
  },
  takeaways: [
    "**cover** fills the box, cropping the image.",
    "**contain** shows the whole image, possibly leaving gaps.",
    "You can also use exact sizes like **200px 100px**."
  ],
  quizQuestions: [
    { id: "css-m3l9-q1", question: "What does background-size: cover do?", options: ["Fills the box completely, cropping the image", "Shows the whole image with gaps", "Hides the image", "Tiles the image"], correctAnswerIndex: 0, explanation: "**cover** scales the image to fill the box completely, cropping the edges without mercy." },
    { id: "css-m3l9-q2", question: "When would you use contain?", options: ["When the whole image must stay visible", "For full-screen banners", "To hide backgrounds", "To blur images"], correctAnswerIndex: 0, explanation: "**contain** fits the entire image inside the box — nothing gets cropped, but gaps may appear." }
  ]
};

// LESSON: Background Position
export const cssBackgroundPositionContent: LessonContent = {
  heroTagline: "Aim the background image exactly where you want it",
  introduction: "**background-position** moves the background image inside its box: **center**, **top right**, or exact coordinates like **20px 50px**.\n\nIt decides which part of the image shows when the box crops it — the face, or the empty sky.",
  definition: {
    term: "background-position",
    explanation: "**background-position** sets where the **background image** sits inside the element, using keywords like **center** or lengths like **20px 50px**."
  },
  whyItMatters: "With **cover** cropping the image, position decides whether the photo shows the person's face or cuts it off.\n\nA tiny property with a huge visual impact — aim it carefully.",
  realWorldAnalogy: {
    title: "Sliding a photo inside its frame",
    story: "**background-position** is like sliding a photo inside a picture frame: the frame stays put while you aim the photo.\n\nSlide it until the best part shows.",
    comparison: [
      { item: "center", meaning: "Slide the photo to the **middle** of the frame." },
      { item: "top right", meaning: "Push it into the **top-right corner** of the frame." }
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
    { wrong: "background-position: top, center;", correct: "background-position: top center;", reason: "Position values are **space-separated**, not comma-separated — commas mean something else entirely in CSS." }
  ],
  tryItYourself: {
    html: `<div class="hero">Team photo</div>`,
    css: `.hero {\n  background-color: #475569;\n  background-position: center;\n  height: 200px;\n  color: white;\n}`,
    instructions: "Change center to top right and picture the image sliding."
  },
  takeaways: [
    "**Keywords**: top, bottom, left, right, center.",
    "You can mix keywords with lengths like **20px 50%**.",
    "**Position** matters most when the image is cropped."
  ],
  quizQuestions: [
    { id: "css-m3l10-q1", question: "What does background-position: center do?", options: ["Centers the image in the box", "Deletes the image", "Stretches the image", "Repeats the image"], correctAnswerIndex: 0, explanation: "**background-position: center** places the image in the middle of the element." },
    { id: "css-m3l10-q2", question: "How are position values separated?", options: ["With a space", "With a comma", "With a slash", "With a semicolon"], correctAnswerIndex: 0, explanation: "Position values like 'top center' are **space-separated** — no commas allowed." }
  ]
};

// LESSON: Background Repeat
export const cssBackgroundRepeatContent: LessonContent = {
  heroTagline: "Tile it, or show it just once",
  introduction: "By default, a background image **repeats** — it tiles itself to fill the whole box.\n\n**background-repeat: no-repeat** shows it just once, **repeat-x** tiles horizontally, and **repeat-y** tiles vertically. One property, four personalities.",
  definition: {
    term: "background-repeat",
    explanation: "**background-repeat** controls whether and how a **background image** tiles across the element: **repeat**, **no-repeat**, **repeat-x**, or **repeat-y**."
  },
  whyItMatters: "A small **pattern** should tile seamlessly; a hero **photo** must never tile.\n\nOne property switches between the two behaviors — pick wrong and the design falls apart.",
  realWorldAnalogy: {
    title: "Bathroom tiles versus a wall mural",
    story: "**background-repeat** is like choosing between bathroom tiles and a wall mural: tiles repeat in a grid to cover the wall, while a mural appears exactly once.\n\nSame wall, two totally different looks.",
    comparison: [
      { item: "repeat", meaning: "**Bathroom tiles** — the pattern repeats to fill the whole wall." },
      { item: "no-repeat", meaning: "A **mural** — one image, placed exactly once." }
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
    { wrong: "Forgetting no-repeat on a hero image, getting a tiled mess", correct: "background-repeat: no-repeat; with background-size: cover;", reason: "The default is **repeat** — hero images need **no-repeat** written explicitly, or they will tile." }
  ],
  tryItYourself: {
    html: `<div class="hero">One image</div>`,
    css: `.hero {\n  background-color: #64748b;\n  background-repeat: no-repeat;\n  height: 200px;\n  color: white;\n}`,
    instructions: "Change no-repeat to repeat-x and imagine a strip tiling sideways."
  },
  takeaways: [
    "The default value is **repeat** — images tile automatically.",
    "**no-repeat** shows the image once.",
    "**repeat-x** and **repeat-y** tile in one direction."
  ],
  quizQuestions: [
    { id: "css-m3l11-q1", question: "What is the default background-repeat value?", options: ["repeat", "no-repeat", "repeat-x", "space"], correctAnswerIndex: 0, explanation: "**Background images** tile by default — repeat is the browser's starting assumption." },
    { id: "css-m3l11-q2", question: "Which value tiles only horizontally?", options: ["repeat-x", "repeat-y", "no-repeat", "repeat-z"], correctAnswerIndex: 0, explanation: "**repeat-x** tiles along the horizontal axis; repeat-y goes vertical." }
  ]
};

// LESSON: CSS Gradients
export const cssGradientsContent: LessonContent = {
  heroTagline: "Smooth color blends with zero images",
  introduction: "**Gradients** blend two or more colors smoothly, and CSS generates them on the spot:\n\n- **linear-gradient()** — blends along a line (top to bottom, or at an angle)\n- **radial-gradient()** — blends outward from a center point\n\nNo Photoshop, no downloads — just code.",
  definition: {
    term: "CSS gradient",
    explanation: "A **gradient** is a background image generated by **CSS** that smoothly transitions between two or more colors — with no image file needed."
  },
  whyItMatters: "**Gradients** create modern, rich backgrounds — buttons, banners, overlays — without downloading a single image file.\n\nFaster pages, prettier designs: the rare win-win.",
  realWorldAnalogy: {
    title: "A sunset sky with no hard lines",
    story: "A **gradient** is like a sunset sky: blue melts into orange with no hard line between them.\n\nPure color magic, zero image files.",
    comparison: [
      { item: "linear-gradient", meaning: "The **sunset** — colors blend along a direction." },
      { item: "radial-gradient", meaning: "A **spotlight** — colors blend outward from the center." }
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
    { wrong: "background-color: linear-gradient(red, blue);", correct: "background: linear-gradient(red, blue);", reason: "**Gradients** are images, so they belong in **background** or **background-image** — never in background-color." }
  ],
  tryItYourself: {
    html: `<div class="banner">Gradient banner</div>`,
    css: `.banner {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  padding: 40px;\n  text-align: center;\n}`,
    instructions: "Change 135deg to 90deg and watch the blend direction rotate."
  },
  takeaways: [
    "**Gradients** are generated images — no files needed.",
    "**linear-gradient** blends along a line; **radial-gradient** blends from a center.",
    "Put gradients in **background**, not background-color."
  ],
  quizQuestions: [
    { id: "css-m3l12-q1", question: "Which creates a smooth color blend?", options: ["linear-gradient()", "rgb()", "url()", "solid()"], correctAnswerIndex: 0, explanation: "**linear-gradient()** generates a smooth blend between colors along a direction." },
    { id: "css-m3l12-q2", question: "Where do you place a gradient?", options: ["In background or background-image", "In background-color", "In color", "In font-family"], correctAnswerIndex: 0, explanation: "**Gradients** count as images, so they belong in background properties — not in background-color." }
  ]
};
