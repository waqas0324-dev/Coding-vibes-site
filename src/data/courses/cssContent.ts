import { LessonContent, PracticeQuestion, QuizQuestion, ChallengeTask } from '../../types';

// LESSON: CSS Introduction & How CSS Works
export const cssIntroContent: LessonContent = {
  heroTagline: "Styling, colors, layouts, and visual design for the web",
  introduction: "While HTML provides the raw bones and structure of a page, **CSS (Cascading Style Sheets)** is the styling brush that transforms plain text into engaging, responsive visual designs.",
  
  definition: {
    term: "CSS (Cascading Style Sheets)",
    explanation: "A style sheet language used to describe the presentation (appearance, colors, fonts, margins, animations, and layouts) of a document written in HTML."
  },

  diagram: {
    type: "box-model",
    title: "The CSS Visual Pipeline",
    caption: "CSS rules select HTML elements and apply properties (color, background, font, layout) to draw styled pixels."
  },

  comparisonTable: {
    title: "Ways to Add CSS to HTML",
    headers: ["Method", "Syntax Location", "Example", "Recommendation"],
    rows: [
      { values: ["External CSS", "<link rel=\"stylesheet\" href=\"style.css\">", "In `<head>` tag", "Best Practice (Clean & Scalable)"], isCode: [false, true, true, false] },
      { values: ["Internal CSS", "<style> body { color: #fff; } </style>", "In `<head>` tag", "Good for single-page styles"], isCode: [false, true, true, false] },
      { values: ["Inline CSS", "<p style=\"color: #22c55e;\">Hello</p>", "Directly on element", "Avoid (hard to maintain)"], isCode: [false, true, true, false] }
    ]
  },

  syntaxStructure: `/* CSS Rule Structure */
selector {
  property: value;
  another-property: value;
}`,

  codeAnnotations: [
    {
      lineOrToken: "selector",
      description: "Points to the HTML element(s) you want to style (e.g. `h1`, `.btn`, `#header`)."
    },
    {
      lineOrToken: "property: value;",
      description: "A declaration consisting of a style property (like `color`) and a value (like `#22c55e`) ending with a semicolon."
    }
  ],

  codeExample: `/* Global Styles */
body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #080d14;
  color: #f8fafc;
  line-height: 1.6;
}

h1 {
  color: #22c55e;
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 24px;
}`,

  commonMistakes: [
    {
      wrong: "h1 { color: red } /* Missing semicolon */\np { font-size: 16px; }",
      correct: "h1 { color: red; }\np { font-size: 16px; }",
      reason: "Every CSS property declaration must end with a semicolon (`;`)."
    }
  ],

  tips: [
    "Always separate your CSS into dedicated stylesheets (`styles.css`) for clean organization.",
    "Use semantic class names that describe what the component is rather than its color (e.g., `.btn-primary` rather than `.green-button`)."
  ],

  tryItYourself: {
    html: `<div class="vibes-card">
  <h1>Coding Vibes CSS Sandbox</h1>
  <p>Modify the CSS properties on the right to style this card in real time!</p>
  <button class="vibes-btn">Click to Vibe</button>
</div>`,
    css: `.vibes-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
}

h1 {
  color: #22c55e;
  margin-top: 0;
}

p {
  color: #94a3b8;
}

.vibes-btn {
  background: #22c55e;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}`,
    instructions: "Change the button background color to `#38bdf8` and increase the border radius to `20px`."
  },

  takeaways: [
    "CSS controls colors, fonts, spacing, and layout across HTML elements.",
    "A CSS rule consists of a selector and a declaration block enclosed in curly braces.",
    "External stylesheets linked with `<link>` are standard best practice."
  ]
};

// LESSON: CSS Box Model
export const cssBoxModelContent: LessonContent = {
  heroTagline: "The core layout concept behind every element rendered in the browser",
  introduction: "In CSS, every single element on a webpage is treated as a **rectangular box**. Understanding the **CSS Box Model** is the most critical milestone in mastering CSS layouts.",
  
  definition: {
    term: "CSS Box Model",
    explanation: "A box that wraps around every HTML element. It consists of four distinct layers: **Content**, **Padding**, **Border**, and **Margin**."
  },

  diagram: {
    type: "box-model",
    title: "Interactive Box Model Diagram",
    caption: "Margin creates outer space, Border outlines the box, Padding cushions inner content, and Content holds text/media."
  },

  comparisonTable: {
    title: "The 4 Layers of the Box Model",
    headers: ["Layer", "Position", "Transparent?", "Purpose"],
    rows: [
      { values: ["Margin", "Outermost layer", "Yes", "Clears space outside the border between neighboring elements."], isCode: [true, false, false, false] },
      { values: ["Border", "Between margin & padding", "No (styled)", "A visible line surrounding the padding and content."], isCode: [true, false, false, false] },
      { values: ["Padding", "Inside border", "Yes (shows background)", "Cushions space between the content and the border."], isCode: [true, false, false, false] },
      { values: ["Content", "Core center", "No", "The actual text, image, or child element."], isCode: [true, false, false, false] }
    ]
  },

  syntaxStructure: `/* Always use border-box in modern projects! */
* {
  box-sizing: border-box;
}

.box {
  width: 300px;
  padding: 20px;
  border: 2px solid #22c55e;
  margin: 16px auto;
}`,

  codeAnnotations: [
    {
      lineOrToken: "box-sizing: border-box;",
      description: "Includes padding and border in the element's total width and height, preventing unexpected overflows."
    },
    {
      lineOrToken: "margin: 16px auto;",
      description: "Adds 16px top/bottom margin and automatically centers the block element horizontally."
    }
  ],

  codeExample: `.box-standard {
  box-sizing: border-box;
  width: 320px;
  padding: 24px;
  background-color: #0f172a;
  border: 2px solid #22c55e;
  border-radius: 12px;
  margin: 20px auto;
  color: white;
}`,

  commonMistakes: [
    {
      wrong: "/* Without box-sizing: border-box */\n.box { width: 100%; padding: 20px; /* Causes horizontal page overflow! */ }",
      correct: "/* With border-box */\n* { box-sizing: border-box; }\n.box { width: 100%; padding: 20px; }",
      reason: "Without `box-sizing: border-box`, adding padding increases the total width beyond 100%, causing horizontal scrollbars."
    }
  ],

  tryItYourself: {
    html: `<div class="box-preview">
  <h2>Box Model Demo</h2>
  <p>Inspect the margin, border, and padding in this element.</p>
</div>`,
    css: `.box-preview {
  box-sizing: border-box;
  width: 100%;
  max-width: 320px;
  padding: 24px;
  margin: 20px auto;
  background: #0f172a;
  border: 3px solid #22c55e;
  border-radius: 12px;
  color: #fff;
  text-align: center;
}`,
    instructions: "Change the padding to `40px` and the border color to `#38bdf8`."
  },

  takeaways: [
    "Every HTML element is a rectangular box.",
    "The 4 layers from inside out are: Content -> Padding -> Border -> Margin.",
    "Always declare `box-sizing: border-box;` in your CSS resets."
  ]
};

// LESSON: CSS Flexbox Layout
export const cssFlexboxContent: LessonContent = {
  heroTagline: "Modern, dynamic 1-dimensional layouts with auto-alignment",
  introduction: "Before Flexbox, aligning elements in CSS was difficult and required hacks. **Flexbox (Flexible Box Layout)** provides an intuitive way to distribute space and align items along a row or column.",
  
  definition: {
    term: "CSS Flexbox (display: flex)",
    explanation: "A 1-dimensional CSS layout model that gives containers the ability to alter their items' width, height, and order to best fill available space."
  },

  diagram: {
    type: "flexbox",
    title: "Interactive Flexbox Playground",
    caption: "Use the interactive controls above to switch between row/column and test justify-content alignments."
  },

  comparisonTable: {
    title: "Flexbox Container vs Item Properties",
    headers: ["Target", "Property", "Values", "Purpose"],
    rows: [
      { values: ["Container", "display: flex", "flex, inline-flex", "Enables flex context on children"], isCode: [false, true, true, false] },
      { values: ["Container", "flex-direction", "row, column, row-reverse", "Defines the main axis direction"], isCode: [false, true, true, false] },
      { values: ["Container", "justify-content", "flex-start, center, space-between", "Aligns items along the main axis"], isCode: [false, true, true, false] },
      { values: ["Container", "align-items", "stretch, center, flex-start", "Aligns items along the cross axis"], isCode: [false, true, true, false] },
      { values: ["Container", "gap", "16px, 1rem, 24px", "Adds space between flex items"], isCode: [false, true, true, false] },
      { values: ["Item", "flex: 1", "1, auto, none", "Allows item to grow and fill available space"], isCode: [false, true, true, false] }
    ]
  },

  syntaxStructure: `.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`,

  codeExample: `<nav class="navbar">
  <div class="brand">Coding Vibes</div>
  <div class="links">
    <a href="#">Home</a>
    <a href="#">Courses</a>
    <a href="#">Practice</a>
  </div>
  <button class="cta">Sign In</button>
</nav>`,

  commonMistakes: [
    {
      wrong: "/* Trying to use justify-content without display: flex */\n.nav { justify-content: space-between; }",
      correct: ".nav { display: flex; justify-content: space-between; }",
      reason: "`justify-content` and `align-items` only work on elements with `display: flex` or `display: grid`."
    }
  ],

  tryItYourself: {
    html: `<div class="flex-demo">
  <div class="card">Box 1</div>
  <div class="card">Box 2</div>
  <div class="card">Box 3</div>
</div>`,
    css: `.flex-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  background: #080d14;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #1e293b;
}

.card {
  flex: 1;
  background: #0f172a;
  border: 1px solid #22c55e;
  color: #22c55e;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}`,
    instructions: "Change `justify-content: space-between` to `center` and change `flex-direction` to `column`."
  },

  takeaways: [
    "`display: flex;` activates the flexible box layout on child elements.",
    "`justify-content` controls alignment on the main axis.",
    "`align-items` controls alignment on the cross axis.",
    "`gap` cleanly separates flex items without messy margin resets."
  ]
};
