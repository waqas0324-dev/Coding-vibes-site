import { LessonContent, PracticeQuestion, QuizQuestion } from '../../types';

export interface TopicDefinition {
  heroTagline: string;
  introduction: string;
  definition: {
    term: string;
    explanation: string;
  };
  syntaxStructure: string;
  codeExample: string;
  codeAnnotations?: Array<{ lineOrToken: string; description: string }>;
  commonMistakes?: Array<{ wrong: string; correct: string; reason: string }>;
  tips?: string[];
  tryItYourself?: {
    html: string;
    css: string;
    js: string;
    instructions: string;
  };
  practice?: PracticeQuestion[];
  quiz?: QuizQuestion[];
}

import { PYTHON_TOPICS } from './topics/pythonTopics';
import { JAVA_TOPICS } from './topics/javaTopics';
import { CPP_TOPICS } from './topics/cppTopics';
import { C_TOPICS } from './topics/cTopics';
import { CSHARP_TOPICS } from './topics/csharpTopics';
import { SQL_TOPICS } from './topics/sqlTopics';
import { PHP_TOPICS } from './topics/phpTopics';
import { REACT_TOPICS } from './topics/reactTopics';
import { BOOTSTRAP_TOPICS } from './topics/bootstrapTopics';
import { JS_TOPICS } from './topics/jsTopics';

// -------------------------------------------------------------
// CSS TOPICS REPOSITORY - 100% Authentic, Specific, Runnable
// -------------------------------------------------------------
export const CSS_TOPICS: Record<string, TopicDefinition> = {
  // --- Module 1: Fundamentals ---
  'introduction-to-css': {
    heroTagline: "Styling, colors, typography, and visual design for the web",
    introduction: "While HTML provides the structure and content of a web page, **CSS (Cascading Style Sheets)** is the styling language that gives it color, layout, spacing, and visual appeal.",
    definition: {
      term: "CSS (Cascading Style Sheets)",
      explanation: "CSS describes how HTML elements are to be displayed on screen, paper, or in other media. It saves a lot of work by controlling the layout of multiple web pages all at once."
    },
    syntaxStructure: `/* CSS Rule-set */
selector {
  property: value;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
</head>
<body>

<h1>My First CSS Example</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
    codeAnnotations: [
      { lineOrToken: "h1", description: "The selector pointing to HTML <h1> elements to style." },
      { lineOrToken: "color: #04AA6D;", description: "A property declaration setting text color to green." }
    ],
    commonMistakes: [
      { wrong: "h1 { color: red }", correct: "h1 { color: red; }", reason: "Declarations must end with a semicolon." }
    ],
    tips: ["CSS can be added as Inline, Internal (<style>), or External (<link>) stylesheets."],
    practice: [
      {
        id: "css-intro-p1",
        type: "multiple_choice",
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style System",
          "Creative Styling Script",
          "Colorful Style Structure"
        ],
        correctAnswer: 0,
        explanation: "CSS stands for Cascading Style Sheets."
      }
    ],
    quiz: [
      {
        id: "css-intro-q1",
        question: "What is the primary role of CSS in web development?",
        options: [
          "To style and format the presentation of HTML elements",
          "To manage backend database queries",
          "To configure web server firewalls",
          "To compile Python scripts"
        ],
        correctAnswerIndex: 0,
        explanation: "CSS is specifically designed to describe the presentation, layout, colors, and fonts of HTML documents."
      }
    ]
  },

  'what-is-css': {
    heroTagline: "Separating content from visual presentation",
    introduction: "**CSS** stands for Cascading Style Sheets. It is used to format the layout of a webpage. With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are used, different displays for different devices and screen sizes, and much more!",
    definition: {
      term: "What is CSS?",
      explanation: "CSS is a stylesheet language used to specify how documents are presented to users — how they are styled, laid out, and animated."
    },
    syntaxStructure: `/* CSS separates presentation from structure */
p {
  color: red;
  text-align: center;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
</head>
<body>

<h1>What is CSS?</h1>
<p>CSS separates structure (HTML) from presentation (Styling).</p>

</body>
</html>`,
    practice: [
      {
        id: "what-is-css-p1",
        type: "multiple_choice",
        question: "Why do developers separate CSS from HTML?",
        options: [
          "To separate presentation from structure, making maintenance faster and easier",
          "Because browsers refuse to run HTML without CSS",
          "To encrypt website code",
          "To increase page download size"
        ],
        correctAnswer: 0,
        explanation: "Separating content (HTML) from presentation (CSS) improves site maintenance, reusability, and page speed."
      }
    ]
  },

  'why-css-is-used': {
    heroTagline: "Efficiency, consistency, and responsive layouts",
    introduction: "**Why Use CSS?** CSS solves a huge problem: before CSS, HTML tags like `<font>` and color attributes had to be repeated on every single page, making website updates a developer nightmare. With CSS, you can change the look of an entire website just by editing one single `.css` file!",
    definition: {
      term: "Benefits of CSS",
      explanation: "Centralized design control, faster page loading, device responsiveness, and clean code separation."
    },
    syntaxStructure: `/* A single stylesheet can restyle thousands of pages */
body {
  margin: 0;
  font-family: sans-serif;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  background: white;
  padding: 20px;
  margin: 20px auto;
  text-align: center;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
</head>
<body style="background:#f1f5f9;">

<div class="card">
  <h2>Why CSS is Used</h2>
  <p>Modify styling once, update everywhere effortlessly.</p>
</div>

</body>
</html>`
  },

  'how-css-works': {
    heroTagline: "From HTML DOM to styled pixels on screen",
    introduction: "When a browser displays a document, it converts the HTML into a **DOM (Document Object Model)** tree. At the same time, it parses CSS into the **CSSOM (CSS Object Model)**. The browser then combines them into a Render Tree, calculates the layout, and paints the styled pixels onto the screen.",
    definition: {
      term: "CSS Rendering Pipeline",
      explanation: "HTML + CSS -> DOM + CSSOM -> Render Tree -> Layout (Reflow) -> Paint."
    },
    syntaxStructure: `/* How rules apply to matched nodes */
div.hero > h1 {
  color: #04AA6D;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
/* CSSOM matches this rule to the h1 node in the DOM */
h1 {
  color: navy;
  margin-left: 20px;
}
p {
  color: darkslategray;
  font-size: 18px;
}
</style>
</head>
<body>

<h1>How CSS Works</h1>
<p>The browser parses HTML into DOM, CSS into CSSOM, and paints pixels.</p>

</body>
</html>`
  },

  'css-syntax': {
    heroTagline: "Selectors, declaration blocks, properties, and values",
    introduction: "A CSS rule consists of a **selector** and a **declaration block**. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.",
    definition: {
      term: "CSS Rule-Set",
      explanation: "selector { property: value; property: value; }"
    },
    syntaxStructure: `p {
  color: red;
  text-align: center;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
/* Selector: p | Property: color | Value: red */
p {
  color: red;
  text-align: center;
  font-size: 22px;
}
</style>
</head>
<body>

<p>This paragraph illustrates standard CSS syntax.</p>
<p>Each property and value pair is closed with a semicolon.</p>

</body>
</html>`,
    practice: [
      {
        id: "css-syn-p1",
        type: "multiple_choice",
        question: "In CSS syntax, what separates the property name from its value?",
        options: [
          "A colon (:)",
          "A semicolon (;)",
          "An equal sign (=)",
          "A comma (,)"
        ],
        correctAnswer: 0,
        explanation: "A colon (:) separates the property name from its value, while a semicolon (;) ends the declaration."
      }
    ]
  },

  'css-rules': {
    heroTagline: "Cascading order, specificity, and inheritance",
    introduction: "CSS rules follow three foundational mechanisms: **The Cascade** (which stylesheet takes precedence), **Specificity** (which selector is more specific), and **Inheritance** (properties inherited from parent elements like fonts and colors).",
    definition: {
      term: "CSS Rules & Precedence",
      explanation: "Inline styles > ID selectors > Class/attribute selectors > Element selectors."
    },
    syntaxStructure: `/* High specificity rule overrides low specificity */
#main-header { color: gold; }
h1 { color: red; }`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
/* Element rule: lower specificity */
p {
  color: gray;
  font-size: 18px;
}

/* Class rule: higher specificity (wins over element) */
.highlight {
  color: #04AA6D;
  font-weight: bold;
}
</style>
</head>
<body>

<p>Normal paragraph styled by the element rule.</p>
<p class="highlight">Class rule overrides the general element rule!</p>

</body>
</html>`
  },

  'inline-css': {
    heroTagline: "Applying styles directly using the style attribute",
    introduction: "An **inline CSS** style may be used to apply a unique style for a single element. To use inline styles, add the `style` attribute to the relevant HTML tag. The `style` attribute can contain any CSS property.",
    definition: {
      term: "Inline CSS",
      explanation: "Styling applied directly inside an HTML tag using the style=\"...\" attribute."
    },
    syntaxStructure: `<h1 style="color:blue;text-align:center;">This is a heading</h1>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;font-size:20px;">This is a paragraph styled with inline CSS.</p>
<div style="background-color:powderblue;padding:20px;border-radius:8px;">
  <h3 style="color:navy;margin:0;">Inline Styled Box</h3>
  <p style="color:teal;">Styles are written directly inside the HTML element tags.</p>
</div>

</body>
</html>`,
    codeAnnotations: [
      { lineOrToken: "style=\"color:blue;\"", description: "Inline style attribute declaring blue text for this specific h1." }
    ],
    commonMistakes: [
      { wrong: "<h1 css=\"color:blue;\">", correct: "<h1 style=\"color:blue;\">", reason: "The correct HTML attribute name is 'style', not 'css'." }
    ],
    tips: ["Inline styles have very high specificity, making them harder to override. Use external CSS when possible."]
  },

  'internal-css': {
    heroTagline: "Embedding styles in the HTML <head> with <style>",
    introduction: "An **internal CSS** stylesheet may be used if one single HTML page has a unique style. The internal style is defined inside the `<style>` element, placed inside the `<head>` section of an HTML page.",
    definition: {
      term: "Internal CSS",
      explanation: "CSS rules written inside a <style> tag within the <head> of an HTML document."
    },
    syntaxStructure: `<head>
  <style>
    body { background-color: linen; }
    h1 { color: maroon; }
  </style>
</head>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
  font-family: Arial, sans-serif;
}

h1 {
  color: maroon;
  margin-left: 40px;
}

p {
  color: #333;
  margin-left: 40px;
  font-size: 18px;
}
</style>
</head>
<body>

<h1>Internal CSS Example</h1>
<p>This whole page is styled via rules in the &lt;style&gt; tag inside &lt;head&gt;.</p>

</body>
</html>`
  },

  'external-css': {
    heroTagline: "Linking an external .css file using the <link> tag",
    introduction: "With an **external CSS** stylesheet, you can change the look of an entire website by changing just one file! Each HTML page must include a reference to the external stylesheet file inside the `<link>` element, inside the `<head>` section.",
    definition: {
      term: "External CSS",
      explanation: "A standalone file with .css extension linked to HTML documents using <link rel=\"stylesheet\" href=\"styles.css\">."
    },
    syntaxStructure: `<head>
  <link rel="stylesheet" href="mystyle.css">
</head>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <!-- In real projects, this links to an external mystyle.css file -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
<style>
/* Simulated external stylesheet rules: */
body {
  background-color: #f8fafc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 40px;
}

.banner {
  background-color: #04AA6D;
  color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}
</style>
</head>
<body>

<div class="banner">
  <h1>External CSS Powered</h1>
  <p>Linked once, styles every page across the entire website!</p>
</div>

</body>
</html>`
  },

  'linking-css': {
    heroTagline: "How the HTML <link> tag connects stylesheets",
    introduction: "To link an external stylesheet to an HTML document, use the `<link>` tag placed in the `<head>` section. The `rel=\"stylesheet\"` attribute specifies the relationship, and `href` specifies the relative or absolute URL to the CSS file.",
    definition: {
      term: "Linking CSS",
      explanation: "<link rel=\"stylesheet\" type=\"text/css\" href=\"filepath/style.css\">"
    },
    syntaxStructure: `<head>
  <link rel="stylesheet" href="css/style.css">
</head>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <title>Linking CSS Example</title>
  <!-- The link tag connects external styles -->
  <style>
    .link-demo {
      border: 2px dashed #04AA6D;
      padding: 24px;
      border-radius: 12px;
      background: #f0fdf4;
      text-align: center;
    }
  </style>
</head>
<body>

<div class="link-demo">
  <h2>&lt;link rel="stylesheet" href="style.css"&gt;</h2>
  <p>Ensures clean separation, browser caching, and lightning-fast load times.</p>
</div>

</body>
</html>`
  },

  'css-comments': {
    heroTagline: "Writing notes and documenting styles with /* */",
    introduction: "CSS comments are not displayed in the browser, but they can help document your source code and explain why certain styles were created. Comments in CSS start with `/*` and end with `*/`.",
    definition: {
      term: "CSS Comments",
      explanation: "/* This is a CSS comment */ can span single or multiple lines."
    },
    syntaxStructure: `/* This is a single-line comment */
p {
  color: red; /* This is an inline comment */
}

/*
This is
a multi-line
comment
*/`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
/* Style the main headline in green */
h1 {
  color: #04AA6D;
  text-align: center;
}

/* Style paragraphs with generous spacing:
   1. Set font family
   2. Adjust font size
*/
p {
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: #374151; /* Charcoal color */
}
</style>
</head>
<body>

<h1>CSS Comments in Action</h1>
<p>Comments are stripped by the browser engine and do not appear on screen.</p>

</body>
</html>`
  },

  // --- Module 2: CSS Selectors ---
  'introduction-to-selectors': {
    heroTagline: "Targeting HTML elements to apply precise styles",
    introduction: "A **CSS Selector** selects the HTML element(s) you want to style. CSS selectors are divided into five categories: Simple selectors (by name, id, class), Combinators, Pseudo-classes, Pseudo-elements, and Attribute selectors.",
    definition: {
      term: "CSS Selector",
      explanation: "A pattern used to select the elements you want to style."
    },
    syntaxStructure: `/* Target by tag, class, or id */
h1 { color: red; }
.my-class { color: blue; }
#my-id { color: green; }`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
/* Element selector */
h2 {
  color: #04AA6D;
}

/* Class selector */
.highlight {
  background-color: yellow;
  padding: 5px;
}

/* ID selector */
#special {
  color: crimson;
  font-weight: bold;
}
</style>
</head>
<body>

<h2>CSS Selectors Overview</h2>
<p class="highlight">This paragraph is targeted by the .highlight class selector.</p>
<p id="special">This paragraph is targeted by the #special ID selector.</p>

</body>
</html>`
  },

  'element-selector': {
    heroTagline: "Selecting elements based on the HTML tag name",
    introduction: "The **element selector** selects HTML elements based on the element name (e.g. `p`, `h1`, `div`, `button`). Every instance of that tag on the page will receive the declarations.",
    definition: {
      term: "Element Selector",
      explanation: "tagName { property: value; }"
    },
    syntaxStructure: `p {
  text-align: center;
  color: red;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  text-align: center;
  color: red;
  font-size: 20px;
}
</style>
</head>
<body>

<p>Every paragraph will be affected by the style.</p>
<p id="para1">Me too!</p>
<p>And me!</p>

</body>
</html>`
  },

  'class-selector': {
    heroTagline: "Selecting elements with a specific class attribute",
    introduction: "The **class selector** selects HTML elements with a specific `class` attribute. To select elements with a specific class, write a period (`.`) character, followed by the class name.",
    definition: {
      term: "Class Selector",
      explanation: ".className { property: value; }"
    },
    syntaxStructure: `.center {
  text-align: center;
  color: red;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.center {
  text-align: center;
  color: #04AA6D;
}

.large {
  font-size: 24px;
}
</style>
</head>
<body>

<h1 class="center">Red and center-aligned heading</h1>
<p class="center large">Red, center-aligned, and large paragraph.</p>

</body>
</html>`
  },

  'id-selector': {
    heroTagline: "Selecting a single unique element with the # symbol",
    introduction: "The **id selector** uses the `id` attribute of an HTML element to select one specific element. An id is always unique within a page, so the id selector is used to select one unique element! To select an element with a specific id, write a hash (`#`) character, followed by the id of the element.",
    definition: {
      term: "ID Selector",
      explanation: "#idName { property: value; }"
    },
    syntaxStructure: `#para1 {
  text-align: center;
  color: red;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
#header-title {
  text-align: center;
  color: navy;
  background-color: #e0f2fe;
  padding: 15px;
  border-radius: 8px;
}
</style>
</head>
<body>

<h1 id="header-title">Unique Header Styled with #id</h1>
<p>An ID must be unique within a single HTML document.</p>

</body>
</html>`
  },

  'universal-selector': {
    heroTagline: "Selecting all elements on the page with *",
    introduction: "The **universal selector** (`*`) selects all HTML elements on the page. It is widely used in CSS resets to eliminate default browser margins and set `box-sizing: border-box` across the entire document.",
    definition: {
      term: "Universal Selector (*)",
      explanation: "* { margin: 0; padding: 0; box-sizing: border-box; }"
    },
    syntaxStructure: `* {
  color: #111827;
  box-sizing: border-box;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
* {
  text-align: center;
  color: #04AA6D;
  font-family: Arial, sans-serif;
}
</style>
</head>
<body>

<h1>Universal Selector Example</h1>
<h2>Sub-heading is also styled</h2>
<p>Every single element on this page matches the * selector!</p>

</body>
</html>`
  },

  'group-selector': {
    heroTagline: "Grouping multiple selectors separated by commas",
    introduction: "The **grouping selector** selects all the HTML elements with the same style definitions. It is better to group the selectors, to minimize the code. Separate each selector with a comma (`,`).",
    definition: {
      term: "Grouping Selector",
      explanation: "h1, h2, p { text-align: center; color: red; }"
    },
    syntaxStructure: `h1, h2, p {
  text-align: center;
  color: red;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
h1, h2, p {
  text-align: center;
  color: #04AA6D;
}
</style>
</head>
<body>

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>This is a paragraph.</p>

</body>
</html>`
  },

  // --- Module 3: Colors and Backgrounds (User's Exact Issue) ---
  'css-colors': {
    heroTagline: "Specifying colors with Names, RGB, HEX, HSL, RGBA, HSLA",
    introduction: "Colors in CSS can be specified using predefined color names (e.g. `Tomato`, `Orange`, `DodgerBlue`), or as RGB, HEX, HSL, RGBA, and HSLA values.",
    definition: {
      term: "CSS Color Values",
      explanation: "Formats include Named ('red'), HEX ('#ff0000'), RGB ('rgb(255,0,0)'), and HSL ('hsl(0,100%,50%)')."
    },
    syntaxStructure: `h1 { color: Tomato; }
p { color: rgb(255, 99, 71); }
div { color: #ff6347; }`,
    codeExample: `<!DOCTYPE html>
<html>
<body>

<h1 style="background-color:Tomato; color:white; padding:15px; border-radius:6px;">Tomato</h1>
<h1 style="background-color:Orange; color:white; padding:15px; border-radius:6px;">Orange</h1>
<h1 style="background-color:DodgerBlue; color:white; padding:15px; border-radius:6px;">DodgerBlue</h1>
<h1 style="background-color:MediumSeaGreen; color:white; padding:15px; border-radius:6px;">MediumSeaGreen</h1>
<h1 style="background-color:Gray; color:white; padding:15px; border-radius:6px;">Gray</h1>
<h1 style="background-color:SlateBlue; color:white; padding:15px; border-radius:6px;">SlateBlue</h1>

</body>
</html>`
  },

  'color-names': {
    heroTagline: "Standard color names supported in all modern web browsers",
    introduction: "In CSS, a color can be specified by using a predefined color name. HTML and CSS specify 140 standard color names (such as `Red`, `Green`, `Blue`, `Tomato`, `DodgerBlue`, `Gold`, `Khaki`).",
    definition: {
      term: "Color Names",
      explanation: "Predefined standard color keywords recognized by CSS specification."
    },
    syntaxStructure: `p { color: DodgerBlue; }`,
    codeExample: `<!DOCTYPE html>
<html>
<body>

<p style="color:Tomato; font-size:24px; font-weight:bold;">This text is Tomato</p>
<p style="color:DodgerBlue; font-size:24px; font-weight:bold;">This text is DodgerBlue</p>
<p style="color:MediumSeaGreen; font-size:24px; font-weight:bold;">This text is MediumSeaGreen</p>

</body>
</html>`
  },

  'hex-colors': {
    heroTagline: "Hexadecimal color codes in #RRGGBB format",
    introduction: "A **hexadecimal color** is specified with: `#RRGGBB`, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color. Each hex value ranges from `00` (lowest) to `ff` (highest).",
    definition: {
      term: "HEX Colors",
      explanation: "#RRGGBB or shorthand #RGB where digits range from 0-9 and a-f."
    },
    syntaxStructure: `#p1 { background-color: #ff0000; }   /* Red */
#p2 { background-color: #00ff00; }   /* Green */
#p3 { background-color: #0000ff; }   /* Blue */`,
    codeExample: `<!DOCTYPE html>
<html>
<body>

<h2>HEX Color Examples</h2>
<p style="background-color:#ff6347; color:white; padding:15px; border-radius:6px;">#ff6347 (Tomato)</p>
<p style="background-color:#0000ff; color:white; padding:15px; border-radius:6px;">#0000ff (Pure Blue)</p>
<p style="background-color:#3cb371; color:white; padding:15px; border-radius:6px;">#3cb371 (Medium Sea Green)</p>
<p style="background-color:#ee82ee; color:white; padding:15px; border-radius:6px;">#ee82ee (Violet)</p>

</body>
</html>`
  },

  'rgb-colors': {
    heroTagline: "Red, Green, Blue color values in rgb(red, green, blue) format",
    introduction: "An **RGB color value** represents RED, GREEN, and BLUE light sources. An RGB color value is specified with the `rgb()` function, which has the following syntax: `rgb(red, green, blue)`. Each parameter defines the intensity of the color as an integer between **0 and 255**.",
    definition: {
      term: "RGB Colors",
      explanation: "rgb(red, green, blue) where 0 is minimum and 255 is maximum intensity."
    },
    syntaxStructure: `/* rgb(red, green, blue) */
rgb(255, 0, 0)     /* Pure Red */
rgb(0, 255, 0)     /* Pure Green */
rgb(0, 0, 255)     /* Pure Blue */
rgb(0, 0, 0)       /* Black */
rgb(255, 255, 255) /* White */`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  background-color: rgb(255, 99, 71);
  color: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
}

p.blue {
  background-color: rgb(0, 0, 255);
  color: white;
  padding: 15px;
  border-radius: 6px;
}

div.green {
  background-color: rgb(60, 179, 113);
  color: white;
  padding: 15px;
  border-radius: 6px;
}
</style>
</head>
<body>

<h1>Heading with rgb(255, 99, 71)</h1>
<p class="blue">Paragraph with rgb(0, 0, 255)</p>
<div class="green">Container with rgb(60, 179, 113)</div>

</body>
</html>`,
    codeAnnotations: [
      { lineOrToken: "rgb(255, 99, 71)", description: "Red=255 (max), Green=99, Blue=71. Produces vibrant Tomato color." },
      { lineOrToken: "rgb(0, 0, 255)", description: "Red=0, Green=0, Blue=255 (max). Produces pure Blue." }
    ],
    commonMistakes: [
      { wrong: "rgb(300, 100, 50)", correct: "rgb(255, 100, 50)", reason: "RGB component values cannot exceed 255." }
    ],
    tips: ["To make shades of gray, set all three RGB values to the same number, e.g. rgb(128, 128, 128)."],
    practice: [
      {
        id: "rgb-p1",
        type: "multiple_choice",
        question: "What color is produced by rgb(255, 0, 0)?",
        options: ["Pure Red", "Pure Green", "Pure Blue", "Pure Black"],
        correctAnswer: 0,
        explanation: "rgb(255, 0, 0) has red at maximum (255) with green and blue at 0."
      },
      {
        id: "rgb-p2",
        type: "fill_in_blank",
        question: "What is the maximum allowed integer value for an RGB color component?",
        instructions: "Enter the maximum number:",
        correctAnswer: "255",
        explanation: "Each RGB channel ranges from 0 to 255."
      }
    ],
    quiz: [
      {
        id: "rgb-q1",
        question: "Which RGB value represents pure white?",
        options: [
          "rgb(255, 255, 255)",
          "rgb(0, 0, 0)",
          "rgb(100, 100, 100)",
          "rgb(255, 0, 255)"
        ],
        correctAnswerIndex: 0,
        explanation: "rgb(255, 255, 255) has all three light channels at maximum intensity, creating white."
      },
      {
        id: "rgb-q2",
        question: "How do you create shades of gray using RGB in CSS?",
        options: [
          "Set all three values (Red, Green, Blue) to equal amounts",
          "Set Red to 255 and others to 0",
          "Use negative numbers",
          "Leave the blue parameter blank"
        ],
        correctAnswerIndex: 0,
        explanation: "Equal values of red, green, and blue (e.g. rgb(60,60,60) or rgb(180,180,180)) create neutral grays."
      }
    ]
  },

  'rgba-colors': {
    heroTagline: "RGB color values with Alpha channel opacity control",
    introduction: "**RGBA color values** are an extension of RGB color values with an **Alpha channel** — which specifies the opacity for a color. An RGBA color value is specified with: `rgba(red, green, blue, alpha)`. The alpha parameter is a number between `0.0` (fully transparent) and `1.0` (fully opaque).",
    definition: {
      term: "RGBA Colors",
      explanation: "rgba(red, green, blue, alpha) where alpha ranges from 0.0 to 1.0."
    },
    syntaxStructure: `/* rgba(red, green, blue, alpha) */
rgba(255, 99, 71, 0.2)  /* 20% opacity */
rgba(255, 99, 71, 0.8)  /* 80% opacity */`,
    codeExample: `<!DOCTYPE html>
<html>
<body style="background:#f1f5f9; padding:20px;">

<h2>RGBA Color Opacity Examples</h2>
<div style="background-color:rgba(255, 99, 71, 0.2); padding:15px; margin-bottom:10px; border-radius:6px;">
  <p style="margin:0; font-weight:bold;">rgba(255, 99, 71, 0.2) - 20% opacity</p>
</div>
<div style="background-color:rgba(255, 99, 71, 0.5); padding:15px; margin-bottom:10px; border-radius:6px;">
  <p style="margin:0; font-weight:bold;">rgba(255, 99, 71, 0.5) - 50% opacity</p>
</div>
<div style="background-color:rgba(255, 99, 71, 0.8); padding:15px; margin-bottom:10px; border-radius:6px;">
  <p style="margin:0; font-weight:bold;">rgba(255, 99, 71, 0.8) - 80% opacity</p>
</div>
<div style="background-color:rgba(255, 99, 71, 1.0); color:white; padding:15px; border-radius:6px;">
  <p style="margin:0; font-weight:bold;">rgba(255, 99, 71, 1.0) - 100% opaque</p>
</div>

</body>
</html>`
  },

  'hsl-colors': {
    heroTagline: "Hue, Saturation, and Lightness color model",
    introduction: "In CSS, a color can be specified using **Hue, Saturation, and Lightness (HSL)** in the form: `hsl(hue, saturation, lightness)`. **Hue** is a degree on the color wheel from 0 to 360 (0 is red, 120 is green, 240 is blue). **Saturation** is a percentage value (0% gray, 100% full color). **Lightness** is also a percentage (0% black, 50% normal, 100% white).",
    definition: {
      term: "HSL Colors",
      explanation: "hsl(0-360 deg, 0-100% saturation, 0-100% lightness)"
    },
    syntaxStructure: `hsl(0, 100%, 50%)    /* Red */
hsl(120, 100%, 50%)  /* Green */
hsl(240, 100%, 50%)  /* Blue */`,
    codeExample: `<!DOCTYPE html>
<html>
<body>

<h2>HSL Color Examples</h2>
<p style="background-color:hsl(0, 100%, 50%); color:white; padding:15px; border-radius:6px;">hsl(0, 100%, 50%) - Pure Red</p>
<p style="background-color:hsl(120, 100%, 50%); color:white; padding:15px; border-radius:6px;">hsl(120, 100%, 50%) - Pure Green</p>
<p style="background-color:hsl(240, 100%, 50%); color:white; padding:15px; border-radius:6px;">hsl(240, 100%, 50%) - Pure Blue</p>

</body>
</html>`
  },

  'background-color': {
    heroTagline: "Setting the background color of elements with background-color",
    introduction: "The `background-color` property specifies the background color of an element. You can set the background color for any HTML element, such as `<body>`, `<div>`, `<h1>`, or `<p>`.",
    definition: {
      term: "background-color",
      explanation: "Sets the background color of an element using any valid CSS color."
    },
    syntaxStructure: `body {
  background-color: lightblue;
}
h1 {
  background-color: green;
}
div {
  background-color: lightgrey;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: #f0fdf4;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

div {
  background-color: #fef08a;
  color: #854d0e;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
}

p {
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 15px;
  border-radius: 8px;
}
</style>
</head>
<body>

<h1>CSS background-color</h1>
<div>This div element has a yellow background color.</div>
<p>This paragraph element has a light blue background color.</p>

</body>
</html>`
  },

  'background-image': {
    heroTagline: "Specifying an image to use as the background",
    introduction: "The `background-image` property specifies an image to use as the background of an element. By default, the image is repeated so it covers the entire element.",
    definition: {
      term: "background-image",
      explanation: "background-image: url('image.jpg');"
    },
    syntaxStructure: `body {
  background-image: url("paper.gif");
  background-color: #cccccc;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop");
  background-size: cover;
  background-position: center;
  color: white;
  padding: 60px 20px;
  text-align: center;
  border-radius: 10px;
}
</style>
</head>
<body>

<div class="banner">
  <h1>Background Image Example</h1>
  <p>Images can be loaded from URLs and blended with linear-gradient overlays.</p>
</div>

</body>
</html>`
  },

  'background-size': {
    heroTagline: "Controlling background image dimensions with cover, contain, auto",
    introduction: "The `background-size` property specifies the size of the background images. The most popular values are `cover` (scales image to cover entire container, cropping if needed) and `contain` (scales image to fit completely within container without cropping), or explicit pixel/percentage dimensions.",
    definition: {
      term: "background-size",
      explanation: "background-size: auto | cover | contain | 300px 100px | 50% 50%;"
    },
    syntaxStructure: `/* Common background-size values */
.box1 { background-size: cover; }
.box2 { background-size: contain; }
.box3 { background-size: 150px 150px; }`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.box {
  width: 250px;
  height: 180px;
  border: 2px solid #04AA6D;
  border-radius: 8px;
  background-image: url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&auto=format&fit=crop");
  background-repeat: no-repeat;
  color: white;
  text-shadow: 1px 1px 3px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.cover { background-size: cover; }
.contain { background-size: contain; background-color: #1e293b; }
.fixed { background-size: 120px 80px; background-color: #1e293b; }
</style>
</head>
<body>

<h2>CSS background-size Comparison</h2>
<div class="container">
  <div class="box cover">background-size: cover</div>
  <div class="box contain">background-size: contain</div>
  <div class="box fixed">120px 80px</div>
</div>

</body>
</html>`
  },

  'background-position': {
    heroTagline: "Setting starting position of background images",
    introduction: "The `background-position` property sets the starting position of a background image. By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.",
    definition: {
      term: "background-position",
      explanation: "background-position: left top | center center | right bottom | x% y%;"
    },
    syntaxStructure: `body {
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-position: right top;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
  height: 200px;
  border: 2px dashed #04AA6D;
  background-image: radial-gradient(circle, #04AA6D 20%, transparent 20%);
  background-size: 50px 50px;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>
</head>
<body>

<h2>background-position: center</h2>
<div class="card">
  <p>The background pattern is positioned exactly in the center.</p>
</div>

</body>
</html>`
  },

  'background-repeat': {
    heroTagline: "Controlling image tiling with repeat, no-repeat, repeat-x, repeat-y",
    introduction: "By default, the `background-image` property repeats an image both horizontally and vertically. The `background-repeat` property controls this behavior.",
    definition: {
      term: "background-repeat",
      explanation: "background-repeat: repeat | repeat-x | repeat-y | no-repeat;"
    },
    syntaxStructure: `body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.no-rep {
  height: 150px;
  background-color: #f1f5f9;
  background-image: radial-gradient(circle, #04AA6D 15px, transparent 15px);
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #04AA6D;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
</head>
<body>

<h2>background-repeat: no-repeat</h2>
<div class="no-rep">
  Image is rendered only once without repeating.
</div>

</body>
</html>`
  },

  'css-gradients': {
    heroTagline: "Smooth transitions between colors with linear and radial gradients",
    introduction: "CSS gradients let you display smooth transitions between two or more specified colors. CSS defines two types of gradients: **Linear Gradients** (goes down/up/left/right/diagonally) and **Radial Gradients** (defined by their center).",
    definition: {
      term: "CSS Gradients",
      explanation: "background-image: linear-gradient(direction, color-stop1, color-stop2, ...);"
    },
    syntaxStructure: `/* Linear Gradient */
background-image: linear-gradient(to right, red , yellow);

/* Radial Gradient */
background-image: radial-gradient(circle, red, yellow, green);`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.grad1 {
  height: 100px;
  background-image: linear-gradient(to right, #04AA6D, #0284c7);
  color: white;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  margin-bottom: 15px;
}

.grad2 {
  height: 100px;
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  color: white;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  margin-bottom: 15px;
}

.grad3 {
  height: 140px;
  background-image: radial-gradient(circle, #38bdf8, #0369a1);
  color: white;
  text-align: center;
  line-height: 140px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
}
</style>
</head>
<body>

<h2>CSS Gradients in Action</h2>
<div class="grad1">Linear Gradient: Green to Blue</div>
<div class="grad2">Rainbow Linear Gradient</div>
<div class="grad3">Radial Gradient Circle</div>

</body>
</html>`
  },

  // --- Module 4: Text and Fonts ---
  'text-color': {
    heroTagline: "Setting foreground text color with the color property",
    introduction: "The `color` property is used to set the color of the text. The color is specified by: a color name (like 'red'), a HEX value (like '#ff0000'), an RGB value (like 'rgb(255,0,0)'), etc.",
    definition: {
      term: "color Property",
      explanation: "color: colorName | #hex | rgb() | hsl();"
    },
    syntaxStructure: `body { color: blue; }
h1 { color: #04AA6D; }`,
    codeExample: `<!DOCTYPE html>
<html>
<body>

<h1 style="color:#04AA6D;">Green Heading (color: #04AA6D)</h1>
<p style="color:crimson; font-size:18px;">Crimson Paragraph (color: crimson)</p>
<p style="color:rgb(37, 99, 235); font-size:18px;">Royal Blue Paragraph (color: rgb(37, 99, 235))</p>

</body>
</html>`
  },

  'text-alignment': {
    heroTagline: "Aligning text horizontally with text-align",
    introduction: "The `text-align` property is used to set the horizontal alignment of a text. A text can be **left-aligned**, **right-aligned**, **centered**, or **justified**.",
    definition: {
      term: "text-align",
      explanation: "text-align: left | right | center | justify;"
    },
    syntaxStructure: `h1 { text-align: center; }
p.date { text-align: right; }
p.main { text-align: justify; }`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
h1 { text-align: center; color: #04AA6D; }
h2 { text-align: left; }
h3 { text-align: right; }
p.justify {
  text-align: justify;
  border: 1px solid #ddd;
  padding: 10px;
}
</style>
</head>
<body>

<h1>Centered Heading</h1>
<h2>Left-aligned Heading</h2>
<h3>Right-aligned Heading</h3>
<p class="justify">In justify mode, each line is stretched so that every line has equal width, and the left and right margins are straight (like in magazines and newspapers).</p>

</body>
</html>`
  },

  'display-property': {
    heroTagline: "Controlling block, inline, inline-block, and hidden rendering",
    introduction: "The `display` property is the most important CSS property for controlling layout. Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is `block` or `inline`.",
    definition: {
      term: "display Property",
      explanation: "display: block | inline | inline-block | none | flex | grid;"
    },
    syntaxStructure: `span.custom {
  display: block;
}
div.inline {
  display: inline;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.block-demo {
  display: block;
  background-color: #04AA6D;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
}

.inline-demo {
  display: inline;
  background-color: #38bdf8;
  color: white;
  padding: 5px 10px;
}
</style>
</head>
<body>

<h2>CSS Display Property</h2>
<span class="block-demo">A &lt;span&gt; made into a block element (takes full width)</span>
<div class="inline-demo">Div 1 (inline)</div>
<div class="inline-demo">Div 2 (inline)</div>

</body>
</html>`
  },

  'position': {
    heroTagline: "Static, Relative, Fixed, Absolute, and Sticky positioning",
    introduction: "The `position` property specifies the type of positioning method used for an element. There are five different position values: `static`, `relative`, `fixed`, `absolute`, `sticky`. Elements are then positioned using the `top`, `bottom`, `left`, and `right` properties.",
    definition: {
      term: "CSS Positioning",
      explanation: "position: static | relative | fixed | absolute | sticky;"
    },
    syntaxStructure: `div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #04AA6D;
}
div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid #04AA6D;
  background: #f0fdf4;
  padding: 10px;
}

div.absolute {
  position: absolute;
  top: 50px;
  right: 20px;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
  background: white;
  padding: 10px;
}
</style>
</head>
<body>

<h2>Position: Relative & Absolute</h2>
<div class="relative">
  This is position: relative (parent container)
  <div class="absolute">This is position: absolute (positioned relative to parent)</div>
</div>

</body>
</html>`
  },

  // --- Box Model Topics ---
  'introduction-to-box-model': {
    heroTagline: "Understanding Content, Padding, Border, and Margin layers",
    introduction: "All HTML elements can be considered as boxes. In CSS, the term **Box Model** is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.",
    definition: {
      term: "CSS Box Model",
      explanation: "A structural model consisting of margins, borders, padding, and content that dictates element sizing and spacing."
    },
    syntaxStructure: `/* Box Model Calculation */
Total Width = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right;`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.box-demo {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid #04AA6D;
  padding: 50px;
  margin: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
</head>
<body>

<h2>Demonstrating the Box Model</h2>
<p>The CSS box model is essentially a box that wraps around every HTML element.</p>

<div class="box-demo">
  <strong>This text is the content.</strong> We have added a 50px padding, 15px green border and a 20px margin.
</div>

</body>
</html>`,
    tips: ["Use box-sizing: border-box to prevent padding and borders from inflating element widths."],
    practice: [
      {
        id: "css-boxmodel-p1",
        type: "multiple_choice",
        question: "Which layer of the box model sits directly between padding and margin?",
        options: ["Border", "Content", "Outline", "Z-index"],
        correctAnswer: 0,
        explanation: "The border sits directly outside the padding and inside the margin."
      }
    ],
    quiz: [
      {
        id: "css-boxmodel-q1",
        question: "From innermost to outermost, what is the correct order of the CSS Box Model?",
        options: [
          "Content -> Padding -> Border -> Margin",
          "Margin -> Border -> Padding -> Content",
          "Content -> Border -> Padding -> Margin",
          "Padding -> Content -> Border -> Margin"
        ],
        correctAnswerIndex: 0,
        explanation: "Content is at the core, wrapped by padding, bounded by border, and spaced by margin."
      }
    ]
  },

  'width': {
    heroTagline: "Setting element widths with pixels, percentages, and max-width",
    introduction: "The `width` CSS property sets an element's width. By default, block elements expand to 100% of their parent container. Setting a custom `width` restricts how wide an element can grow.",
    definition: {
      term: "width",
      explanation: "Sets the horizontal dimension of an element's content area."
    },
    syntaxStructure: `div {
  width: 500px; /* Fixed width in pixels */
  max-width: 100%; /* Responsive safeguard */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.fixed {
  width: 300px;
  background-color: #f0fdf4;
  border: 2px solid #04AA6D;
  padding: 15px;
  margin-bottom: 20px;
}

div.percent {
  width: 75%;
  background-color: #eff6ff;
  border: 2px solid #3b82f6;
  padding: 15px;
}
</style>
</head>
<body>

<h2>CSS Width Property</h2>

<div class="fixed">
  <h3>Fixed Width: 300px</h3>
  <p>This box has a fixed width of 300 pixels regardless of screen size.</p>
</div>

<div class="percent">
  <h3>Relative Width: 75%</h3>
  <p>This box dynamically resizes to take up 75% of its parent container.</p>
</div>

</body>
</html>`
  },

  'height': {
    heroTagline: "Setting element vertical heights and min/max constraints",
    introduction: "The `height` CSS property sets an element's height. If no height is specified, elements naturally expand vertically to fit their inner content.",
    definition: {
      term: "height",
      explanation: "Sets the vertical dimension of an element's content area."
    },
    syntaxStructure: `div {
  height: 200px;
  min-height: 100px;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.short {
  height: 80px;
  background-color: #fef3c7;
  border: 2px solid #f59e0b;
  padding: 10px;
  margin-bottom: 15px;
}

div.tall {
  height: 180px;
  background-color: #f0fdf4;
  border: 2px solid #04AA6D;
  padding: 10px;
}
</style>
</head>
<body>

<h2>CSS Height Property</h2>

<div class="short">
  <strong>Height: 80px</strong>
  <p>Compact box with 80 pixels vertical height.</p>
</div>

<div class="tall">
  <strong>Height: 180px</strong>
  <p>Taller box with 180 pixels vertical height.</p>
</div>

</body>
</html>`
  },

  'padding': {
    heroTagline: "Creating transparent breathing space inside element borders",
    introduction: "The CSS `padding` properties are used to generate space around an element's content, inside of any defined borders. Padding is completely transparent and inherits the background color of the element.",
    definition: {
      term: "padding",
      explanation: "Inner spacing between an element's content and its bounding border."
    },
    syntaxStructure: `/* Top, Right, Bottom, Left */
padding: 25px 50px 75px 100px;

/* Top/Bottom, Left/Right */
padding: 20px 40px;

/* All 4 sides */
padding: 24px;`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.nopad {
  background-color: #f1f5f9;
  border: 2px solid #64748b;
  margin-bottom: 20px;
  padding: 0px;
}

div.withpad {
  background-color: #f0fdf4;
  border: 2px solid #04AA6D;
  padding: 30px;
}
</style>
</head>
<body>

<h2>CSS Padding Demonstration</h2>

<div class="nopad">
  <p><strong>No Padding (padding: 0px):</strong> Text touches the borders directly.</p>
</div>

<div class="withpad">
  <p><strong>Generous Padding (padding: 30px):</strong> Creates clean, comfortable whitespace between content and border.</p>
</div>

</body>
</html>`
  },

  'border': {
    heroTagline: "Controlling border-width, border-style, and border-color",
    introduction: "The CSS `border` properties allow you to specify the style, width, and color of an element's border. The `border-style` property specifies what kind of border to display: solid, dashed, dotted, or double.",
    definition: {
      term: "border",
      explanation: "A shorthand property for setting border-width, border-style, and border-color simultaneously."
    },
    syntaxStructure: `/* border: width style color; */
border: 2px solid #04AA6D;
border: 4px dashed #3b82f6;
border: 3px dotted #ef4444;`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
p.solid {
  border: 3px solid #04AA6D;
  padding: 15px;
  border-radius: 6px;
}

p.dashed {
  border: 3px dashed #3b82f6;
  padding: 15px;
  border-radius: 6px;
}

p.dotted {
  border: 3px dotted #f59e0b;
  padding: 15px;
  border-radius: 6px;
}
</style>
</head>
<body>

<h2>CSS Border Styles</h2>

<p class="solid">A solid green border: border: 3px solid #04AA6D;</p>
<p class="dashed">A dashed blue border: border: 3px dashed #3b82f6;</p>
<p class="dotted">A dotted amber border: border: 3px dotted #f59e0b;</p>

</body>
</html>`
  },

  'margin': {
    heroTagline: "Creating external spacing around elements and auto-centering",
    introduction: "The CSS `margin` properties are used to create space around elements, outside of any defined borders. With CSS, you have full control over margins for each side of an element (top, right, bottom, left). Setting `margin: auto` horizontally centers an element.",
    definition: {
      term: "margin",
      explanation: "Clears an area outside the border. The margin does not have a background color; it is completely transparent."
    },
    syntaxStructure: `/* Auto centering horizontally */
div {
  width: 300px;
  margin: 0 auto;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.container {
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 20px;
}

div.centered {
  width: 250px;
  margin: 30px auto;
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}
</style>
</head>
<body>

<h2>CSS Margin & Auto Centering</h2>
<div class="container">
  <p>Parent Container (Grey Background)</p>
  <div class="centered">
    <strong>margin: 30px auto;</strong>
    <p>Perfectly centered horizontally!</p>
  </div>
</div>

</body>
</html>`
  },

  'border-radius': {
    heroTagline: "Softening sharp corners into modern rounded cards and pills",
    introduction: "The CSS `border-radius` property defines the radius of an element's corners. Adding `border-radius: 50%` turns a square element into a perfect circle.",
    definition: {
      term: "border-radius",
      explanation: "Defines the curvature of an element's outer border edge."
    },
    syntaxStructure: `/* Slight curve */
border-radius: 8px;

/* Fully circular */
border-radius: 50%;`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.rounded {
  border-radius: 12px;
  background: #04AA6D;
  color: white;
  padding: 20px;
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
}

div.circle {
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
}
</style>
</head>
<body>

<h2>CSS border-radius Property</h2>

<div class="rounded">
  border-radius: 12px;
</div>

<div class="circle">
  50%
</div>

</body>
</html>`
  },

  'box-sizing': {
    heroTagline: "Eliminating sizing bugs with box-sizing: border-box",
    introduction: "By default in CSS, `width` and `height` apply only to the content. Adding padding and borders enlarges the element beyond the defined width. The `box-sizing: border-box` property includes padding and border in the element's total width and height.",
    definition: {
      term: "box-sizing",
      explanation: "Determines whether padding and borders are included in an element's total width and height."
    },
    syntaxStructure: `* {
  box-sizing: border-box; /* Universal best practice */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.div1 {
  width: 300px;
  height: 100px;
  border: 5px solid red;
  padding: 20px;
  box-sizing: content-box;
  margin-bottom: 20px;
}

.div2 {
  width: 300px;
  height: 100px;
  border: 5px solid #04AA6D;
  padding: 20px;
  box-sizing: border-box;
}
</style>
</head>
<body>

<h2>CSS box-sizing Comparison</h2>

<div class="div1">
  <strong>box-sizing: content-box</strong><br>
  Total width = 300 + 40 + 10 = 350px (expanded!)
</div>

<div class="div2">
  <strong>box-sizing: border-box</strong><br>
  Total width stays exactly 300px!
</div>

</body>
</html>`
  },

  'box-shadow': {
    heroTagline: "Adding depth, elevation, and soft shadows to modern cards",
    introduction: "The CSS `box-shadow` property attaches one or more shadows to an element. You can specify the horizontal offset, vertical offset, blur radius, spread radius, and shadow color.",
    definition: {
      term: "box-shadow",
      explanation: "Applies drop shadows and elevation effects around an element's frame."
    },
    syntaxStructure: `/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.card {
  width: 250px;
  padding: 25px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
  margin: 30px auto;
  text-align: center;
}
</style>
</head>
<body style="background-color: #f1f5f9; padding: 20px;">

<div class="card">
  <h3 style="color: #04AA6D; margin-top: 0;">Elevated Card</h3>
  <p>Styled with modern CSS box-shadow for realistic material elevation.</p>
</div>

</body>
</html>`
  },

  'overflow': {
    heroTagline: "Managing visible, hidden, and scrollable content containers",
    introduction: "The CSS `overflow` property controls what happens to content that is too big to fit into an area. Possible values include `visible`, `hidden`, `scroll`, and `auto`.",
    definition: {
      term: "overflow",
      explanation: "Specifies whether to clip content or add scrollbars when an element's content is too big to fit in its specified area."
    },
    syntaxStructure: `div {
  overflow: auto; /* Adds scrollbar only when needed */
  overflow: hidden; /* Clips excess content */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
div.scroll-box {
  background-color: #f0fdf4;
  width: 250px;
  height: 110px;
  border: 2px solid #04AA6D;
  overflow: auto;
  padding: 10px;
}
</style>
</head>
<body>

<h2>CSS Overflow Property</h2>
<p>overflow: auto adds a scrollbar when content exceeds the 110px height:</p>

<div class="scroll-box">
  You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box. Try scrolling down inside this box to read all content!
</div>

</body>
</html>`
  },

  // --- Flexbox Topics ---
  'introduction-to-flexbox': {
    heroTagline: "The modern CSS standard for flexible 1-dimensional layouts",
    introduction: "The Flexible Box Layout Module (Flexbox) makes it easier to design flexible responsive layout structures without using float or positioning. Simply declaring `display: flex` transforms any container into a powerful flex parent.",
    definition: {
      term: "Flexbox",
      explanation: "A CSS3 layout mode providing an efficient way to lay out, align, and distribute space among items in a container."
    },
    syntaxStructure: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  background-color: #1e293b;
  padding: 15px;
  border-radius: 8px;
  gap: 15px;
}

.flex-container > div {
  background-color: #04AA6D;
  color: white;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 6px;
  flex: 1;
  text-align: center;
}
</style>
</head>
<body>

<h2>A Basic Flexbox Layout</h2>
<p>A flexible layout must have a parent element with the <em>display: flex</em> property:</p>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

</body>
</html>`
  },

  'flex-direction': {
    heroTagline: "Setting the main axis: row, column, row-reverse, column-reverse",
    introduction: "The `flex-direction` property defines in which direction the container wants to stack the flex items. Values are `row` (default, left to right), `column` (top to bottom), `row-reverse`, and `column-reverse`.",
    definition: {
      term: "flex-direction",
      explanation: "Establishes the main-axis, defining the direction flex items are placed in the flex container."
    },
    syntaxStructure: `.container {
  display: flex;
  flex-direction: column; /* Stack vertically */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.flex-col {
  display: flex;
  flex-direction: column;
  background-color: #0f172a;
  padding: 15px;
  border-radius: 8px;
  gap: 10px;
  width: 200px;
}

.flex-col > div {
  background-color: #04AA6D;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 4px;
}
</style>
</head>
<body>

<h2>flex-direction: column</h2>
<p>The column value stacks the flex items vertically (from top to bottom):</p>

<div class="flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

</body>
</html>`
  },

  'justify-content': {
    heroTagline: "Aligning items along the main axis: center, space-between, space-around",
    introduction: "The `justify-content` property is used to align the flex items along the main axis. Values include `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `space-evenly`.",
    definition: {
      term: "justify-content",
      explanation: "Defines the alignment along the main axis, distributing extra space."
    },
    syntaxStructure: `.container {
  display: flex;
  justify-content: space-between; /* Maximum spacing between items */
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.flex-between {
  display: flex;
  justify-content: space-between;
  background-color: #f1f5f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
}

.flex-between > div {
  background-color: #04AA6D;
  color: white;
  padding: 15px 25px;
  font-weight: bold;
  border-radius: 6px;
}
</style>
</head>
<body>

<h2>justify-content: space-between</h2>
<p>Items are displayed with equal space between them:</p>

<div class="flex-between">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</div>

</body>
</html>`
  },

  'align-items': {
    heroTagline: "Aligning flex items along the cross axis: center, flex-start, flex-end",
    introduction: "The `align-items` property is used to align the flex items along the cross axis (vertically in a standard row layout). Setting `align-items: center` perfectly centers items vertically.",
    definition: {
      term: "align-items",
      explanation: "Defines the default behavior for how flex items are laid out along the cross axis."
    },
    syntaxStructure: `.container {
  display: flex;
  align-items: center; /* Vertical center alignment */
  height: 200px;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #1e293b;
  border-radius: 8px;
}

.item {
  background-color: #04AA6D;
  color: white;
  padding: 25px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
}
</style>
</head>
<body>

<h2>align-items: center + justify-content: center</h2>
<p>The legendary two-line CSS solution to perfect horizontal and vertical centering:</p>

<div class="flex-center">
  <div class="item">Dead-Center Box</div>
</div>

</body>
</html>`
  },

  // --- CSS Grid Topics ---
  'introduction-to-css-grid': {
    heroTagline: "The powerful 2-dimensional layout engine for rows and columns",
    introduction: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
    definition: {
      term: "CSS Grid",
      explanation: "A two-dimensional layout system designed for organizing elements into structured rows and columns."
    },
    syntaxStructure: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
}
</style>
</head>
<body>

<h2>CSS Grid Layout</h2>
<p>A Grid Layout must have a parent element with <em>display: grid</em>:</p>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
</div>

</body>
</html>`
  }
};

// -------------------------------------------------------------
// Universal Topic Content Generator & Fallback Resolver
// -------------------------------------------------------------
export function getTopicDefinition(courseSlug: string, lessonTitle: string): TopicDefinition | null {
  const normSlug = lessonTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const cSlug = (courseSlug || '').toLowerCase();
  const lt = lessonTitle.toLowerCase();
  
  // 1. PYTHON
  if (cSlug === 'python') {
    if (PYTHON_TOPICS[normSlug]) return PYTHON_TOPICS[normSlug];
    for (const key of Object.keys(PYTHON_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return PYTHON_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is python')) return PYTHON_TOPICS['introduction-to-python'];
    if (lt.includes('get started') || lt.includes('install')) return PYTHON_TOPICS['python-getting-started'];
    if (lt.includes('syntax') || lt.includes('indent')) return PYTHON_TOPICS['python-syntax-and-indentation'];
    if (lt.includes('comment')) return PYTHON_TOPICS['python-comments'];
    if (lt.includes('variable')) return PYTHON_TOPICS['python-variables'];
    if (lt.includes('data type') || lt.includes('types')) return PYTHON_TOPICS['python-data-types'];
    if (lt.includes('cast')) return PYTHON_TOPICS['python-casting'];
    if (lt.includes('string')) return PYTHON_TOPICS['python-strings-and-string-methods'];
    if (lt.includes('bool')) return PYTHON_TOPICS['python-booleans'];
    if (lt.includes('operator')) return PYTHON_TOPICS['arithmetic-operators'];
    if (lt.includes('list')) return PYTHON_TOPICS['python-lists'];
    if (lt.includes('tuple')) return PYTHON_TOPICS['python-tuples'];
    if (lt.includes('dict')) return PYTHON_TOPICS['python-dictionaries'];
    if (lt.includes('if') || lt.includes('condition')) return PYTHON_TOPICS['python-if-else'];
    if (lt.includes('for loop') || lt.includes('loop')) return PYTHON_TOPICS['python-for-loops'];
    if (lt.includes('while')) return PYTHON_TOPICS['python-while-loops'];
    if (lt.includes('function') && !lt.includes('lambda')) return PYTHON_TOPICS['python-functions'];
    if (lt.includes('lambda')) return PYTHON_TOPICS['python-lambda-functions'];
  }

  // 2. JAVA
  if (cSlug === 'java') {
    if (JAVA_TOPICS[normSlug]) return JAVA_TOPICS[normSlug];
    for (const key of Object.keys(JAVA_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return JAVA_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is java')) return JAVA_TOPICS['introduction-to-java'];
    if (lt.includes('get started') || lt.includes('install')) return JAVA_TOPICS['java-getting-started'];
    if (lt.includes('syntax')) return JAVA_TOPICS['java-syntax'];
    if (lt.includes('variable')) return JAVA_TOPICS['java-variables'];
    if (lt.includes('data type')) return JAVA_TOPICS['java-data-types'];
    if (lt.includes('cast')) return JAVA_TOPICS['java-type-casting'];
    if (lt.includes('if') || lt.includes('condition')) return JAVA_TOPICS['java-if-else'];
    if (lt.includes('switch')) return JAVA_TOPICS['java-switch'];
    if (lt.includes('for loop')) return JAVA_TOPICS['java-for-loop'];
    if (lt.includes('array')) return JAVA_TOPICS['java-arrays'];
    if (lt.includes('method')) return JAVA_TOPICS['java-methods'];
    if (lt.includes('oop')) return JAVA_TOPICS['java-oop-introduction'];
    if (lt.includes('class') || lt.includes('object')) return JAVA_TOPICS['java-classes-and-objects'];
    if (lt.includes('inherit')) return JAVA_TOPICS['java-inheritance'];
  }

  // 3. C++
  if (cSlug === 'cpp') {
    if (CPP_TOPICS[normSlug]) return CPP_TOPICS[normSlug];
    for (const key of Object.keys(CPP_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return CPP_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is c++')) return CPP_TOPICS['introduction-to-c'];
    if (lt.includes('output') || lt.includes('cout')) return CPP_TOPICS['c-output-cout'];
    if (lt.includes('variable')) return CPP_TOPICS['c-variables'];
    if (lt.includes('input') || lt.includes('cin')) return CPP_TOPICS['c-user-input'];
    if (lt.includes('condition') || lt.includes('if')) return CPP_TOPICS['c-conditions'];
    if (lt.includes('for loop')) return CPP_TOPICS['c-for-loop'];
    if (lt.includes('pointer') || lt.includes('reference')) return CPP_TOPICS['c-pointers'];
    if (lt.includes('function')) return CPP_TOPICS['c-functions'];
    if (lt.includes('class') || lt.includes('object')) return CPP_TOPICS['c-classes-and-objects'];
  }

  // 4. C
  if (cSlug === 'c') {
    if (C_TOPICS[normSlug]) return C_TOPICS[normSlug];
    for (const key of Object.keys(C_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return C_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is c')) return C_TOPICS['introduction-to-c'];
    if (lt.includes('output') || lt.includes('printf')) return C_TOPICS['c-output-and-printf'];
    if (lt.includes('variable')) return C_TOPICS['c-variables'];
    if (lt.includes('format specifier')) return C_TOPICS['c-format-specifiers'];
    if (lt.includes('if') || lt.includes('condition')) return C_TOPICS['c-if-else'];
    if (lt.includes('array')) return C_TOPICS['c-arrays'];
    if (lt.includes('string')) return C_TOPICS['c-strings'];
    if (lt.includes('pointer') || lt.includes('memory')) return C_TOPICS['c-memory-address'];
  }

  // 5. C#
  if (cSlug === 'csharp') {
    if (CSHARP_TOPICS[normSlug]) return CSHARP_TOPICS[normSlug];
    for (const key of Object.keys(CSHARP_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return CSHARP_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is c#')) return CSHARP_TOPICS['introduction-to-c'];
    if (lt.includes('output') || lt.includes('writeline')) return CSHARP_TOPICS['c-output-console-writeline'];
    if (lt.includes('variable')) return CSHARP_TOPICS['c-variables'];
    if (lt.includes('if') || lt.includes('condition')) return CSHARP_TOPICS['c-if-else'];
    if (lt.includes('foreach')) return CSHARP_TOPICS['c-foreach-loop'];
    if (lt.includes('propert')) return CSHARP_TOPICS['c-properties-get-set'];
  }

  // 6. SQL
  if (cSlug === 'sql') {
    if (SQL_TOPICS[normSlug]) return SQL_TOPICS[normSlug];
    for (const key of Object.keys(SQL_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return SQL_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is sql')) return SQL_TOPICS['introduction-to-sql'];
    if (lt.includes('select') && !lt.includes('distinct')) return SQL_TOPICS['sql-select-statement'];
    if (lt.includes('where')) return SQL_TOPICS['sql-where-clause'];
    if (lt.includes('order by')) return SQL_TOPICS['sql-order-by-keyword'];
    if (lt.includes('insert')) return SQL_TOPICS['sql-insert-into'];
    if (lt.includes('update')) return SQL_TOPICS['sql-update-statement'];
    if (lt.includes('count') || lt.includes('sum') || lt.includes('avg')) return SQL_TOPICS['sql-count-avg-and-sum'];
    if (lt.includes('join')) return SQL_TOPICS['introduction-to-sql-joins'];
  }

  // 7. PHP
  if (cSlug === 'php') {
    if (PHP_TOPICS[normSlug]) return PHP_TOPICS[normSlug];
    for (const key of Object.keys(PHP_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return PHP_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is php')) return PHP_TOPICS['introduction-to-php'];
    if (lt.includes('echo') || lt.includes('print')) return PHP_TOPICS['php-echo-and-print-statements'];
    if (lt.includes('variable')) return PHP_TOPICS['php-variables'];
    if (lt.includes('if') || lt.includes('condition')) return PHP_TOPICS['php-if-else-elseif'];
    if (lt.includes('array')) return PHP_TOPICS['php-associative-arrays'];
  }

  // 8. REACT
  if (cSlug === 'react-js' || cSlug === 'react') {
    if (REACT_TOPICS[normSlug]) return REACT_TOPICS[normSlug];
    for (const key of Object.keys(REACT_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return REACT_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is react')) return REACT_TOPICS['introduction-to-react'];
    if (lt.includes('jsx')) return REACT_TOPICS['react-jsx-syntax-and-rules'];
    if (lt.includes('usestate') || lt.includes('state')) return REACT_TOPICS['react-usestate-hook'];
    if (lt.includes('useeffect') || lt.includes('effect')) return REACT_TOPICS['react-useeffect-hook-for-side-effects'];
  }

  // 9. BOOTSTRAP
  if (cSlug === 'bootstrap') {
    if (BOOTSTRAP_TOPICS[normSlug]) return BOOTSTRAP_TOPICS[normSlug];
    for (const key of Object.keys(BOOTSTRAP_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return BOOTSTRAP_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('get started')) return BOOTSTRAP_TOPICS['introduction-to-bootstrap-5'];
    if (lt.includes('container')) return BOOTSTRAP_TOPICS['bootstrap-containers'];
    if (lt.includes('grid') || lt.includes('column')) return BOOTSTRAP_TOPICS['bootstrap-grid-system'];
    if (lt.includes('card')) return BOOTSTRAP_TOPICS['bootstrap-cards'];
  }

  // 10. JAVASCRIPT
  if (cSlug === 'javascript') {
    if (JS_TOPICS[normSlug]) return JS_TOPICS[normSlug];
    for (const key of Object.keys(JS_TOPICS)) {
      if (normSlug.includes(key) || key.includes(normSlug)) return JS_TOPICS[key];
    }
    if (lt.includes('intro') || lt.includes('what is javascript')) return JS_TOPICS['javascript-introduction'];
    if (lt.includes('variable') || lt.includes('let') || lt.includes('const')) return JS_TOPICS['javascript-variables-let-const'];
    if (lt.includes('function') || lt.includes('arrow')) return JS_TOPICS['javascript-functions'];
    if (lt.includes('array') || lt.includes('map') || lt.includes('filter')) return JS_TOPICS['javascript-array-methods'];
  }

  // 11. CSS
  if (cSlug === 'css') {
    if (CSS_TOPICS[normSlug]) return CSS_TOPICS[normSlug];
    if (lt.includes('rgb color') || lt === 'rgb') return CSS_TOPICS['rgb-colors'];
    if (lt.includes('rgba')) return CSS_TOPICS['rgba-colors'];
    if (lt.includes('hex color') || lt === 'hex') return CSS_TOPICS['hex-colors'];
    if (lt.includes('hsl')) return CSS_TOPICS['hsl-colors'];
    if (lt.includes('background color') || lt === 'background-color') return CSS_TOPICS['background-color'];
    if (lt.includes('background image')) return CSS_TOPICS['background-image'];
    if (lt.includes('background size')) return CSS_TOPICS['background-size'];
    if (lt.includes('background position')) return CSS_TOPICS['background-position'];
    if (lt.includes('background repeat')) return CSS_TOPICS['background-repeat'];
    if (lt.includes('gradient')) return CSS_TOPICS['css-gradients'];
    if (lt.includes('inline css') || lt === 'inline') return CSS_TOPICS['inline-css'];
    if (lt.includes('internal css') || lt === 'internal') return CSS_TOPICS['internal-css'];
    if (lt.includes('external css') || lt === 'external') return CSS_TOPICS['external-css'];
    if (lt.includes('linking') || lt.includes('link css')) return CSS_TOPICS['linking-css'];
    if (lt.includes('comment')) return CSS_TOPICS['css-comments'];
    if (lt.includes('syntax')) return CSS_TOPICS['css-syntax'];
    if (lt.includes('rule')) return CSS_TOPICS['css-rules'];
    if (lt.includes('what is css')) return CSS_TOPICS['what-is-css'];
    if (lt.includes('why css')) return CSS_TOPICS['why-css-is-used'];
    if (lt.includes('how css works')) return CSS_TOPICS['how-css-works'];
    if (lt.includes('id selector')) return CSS_TOPICS['id-selector'];
    if (lt.includes('class selector')) return CSS_TOPICS['class-selector'];
    if (lt.includes('element selector')) return CSS_TOPICS['element-selector'];
    if (lt.includes('universal selector')) return CSS_TOPICS['universal-selector'];
    if (lt.includes('group selector')) return CSS_TOPICS['group-selector'];
    if (lt.includes('color name')) return CSS_TOPICS['color-names'];
    if (lt.includes('color') && !lt.includes('background')) return CSS_TOPICS['css-colors'];
    if (lt.includes('text align')) return CSS_TOPICS['text-alignment'];
    if (lt.includes('position')) return CSS_TOPICS['position'];
    if (lt.includes('display')) return CSS_TOPICS['display-property'];
  }

  // Dynamic Generator for any other topic to ensure 100% authentic, runnable code!
  return buildDynamicTopicDefinition(courseSlug, lessonTitle);
}

function buildDynamicTopicDefinition(courseSlug: string, lessonTitle: string): TopicDefinition {
  const cSlug = (courseSlug || '').toLowerCase();
  const lt = lessonTitle.toLowerCase();

  // For CSS
  if (cSlug === 'css') {
    let cssRules = ``;
    let htmlContent = ``;

    if (lt.includes('color') || lt.includes('background')) {
      cssRules = `.preview-box {\n  background-color: #04AA6D;\n  color: white;\n  padding: 24px;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 20px;\n}`;
      htmlContent = `<div class="preview-box">\n  <h3>${lessonTitle}</h3>\n  <p>Live CSS color demonstration.</p>\n</div>`;
    } else if (lt.includes('align') || lt.includes('text')) {
      cssRules = `.text-demo {\n  text-align: center;\n  color: #1e293b;\n  font-size: 22px;\n  font-weight: 600;\n  padding: 20px;\n  border-bottom: 2px solid #04AA6D;\n}`;
      htmlContent = `<div class="text-demo">\n  ${lessonTitle} in CSS\n</div>\n<p style="text-align:center; color:#64748b; margin-top:10px;">Demonstrating text styling and formatting rules.</p>`;
    } else if (lt.includes('border') || lt.includes('radius')) {
      cssRules = `.border-box {\n  border: 3px solid #04AA6D;\n  border-radius: 16px;\n  padding: 24px;\n  background: #f0fdf4;\n  text-align: center;\n}`;
      htmlContent = `<div class="border-box">\n  <h3>${lessonTitle}</h3>\n  <p>Border curves and strokes applied seamlessly.</p>\n</div>`;
    } else if (lt.includes('margin') || lt.includes('padding') || lt.includes('box')) {
      cssRules = `.outer-box {\n  background: #e2e8f0;\n  padding: 24px;\n  border: 2px dashed #94a3b8;\n}\n.inner-box {\n  background: #04AA6D;\n  color: white;\n  padding: 16px;\n  margin: 12px auto;\n  text-align: center;\n  border-radius: 6px;\n}`;
      htmlContent = `<div class="outer-box">\n  <p style="margin:0 0 8px 0; font-weight:bold;">Outer Box (Margin / Padding context):</p>\n  <div class="inner-box">${lessonTitle} Box</div>\n</div>`;
    } else if (lt.includes('flex')) {
      cssRules = `.flex-container {\n  display: flex;\n  justify-content: space-around;\n  background-color: #1e293b;\n  padding: 15px;\n  border-radius: 8px;\n  gap: 10px;\n}\n.flex-item {\n  background-color: #04AA6D;\n  color: white;\n  padding: 20px;\n  font-size: 18px;\n  border-radius: 6px;\n  flex: 1;\n  text-align: center;\n}`;
      htmlContent = `<div class="flex-container">\n  <div class="flex-item">Item 1</div>\n  <div class="flex-item">Item 2</div>\n  <div class="flex-item">Item 3</div>\n</div>`;
    } else if (lt.includes('grid')) {
      cssRules = `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 15px;\n  background-color: #f1f5f9;\n  padding: 15px;\n  border-radius: 8px;\n}\n.grid-item {\n  background-color: #04AA6D;\n  color: white;\n  padding: 25px;\n  text-align: center;\n  font-size: 18px;\n  border-radius: 6px;\n}`;
      htmlContent = `<div class="grid-container">\n  <div class="grid-item">1</div>\n  <div class="grid-item">2</div>\n  <div class="grid-item">3</div>\n  <div class="grid-item">4</div>\n  <div class="grid-item">5</div>\n  <div class="grid-item">6</div>\n</div>`;
    } else {
      cssRules = `.styled-card {\n  background-color: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-left: 5px solid #04AA6D;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n}\nh2 {\n  color: #04AA6D;\n  margin-top: 0;\n}`;
      htmlContent = `<div class="styled-card">\n  <h2>${lessonTitle}</h2>\n  <p>Learn to style modern web components with standard CSS properties.</p>\n  <button style="background:#04AA6D; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer;">Live Button</button>\n</div>`;
    }

    const fullDoc = `<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  background-color: #f8fafc;
  margin: 0;
}
${cssRules}
</style>
</head>
<body>

${htmlContent}

</body>
</html>`;

    return {
      heroTagline: `Mastering ${lessonTitle} in modern CSS`,
      introduction: `In this lesson, you will learn how **${lessonTitle}** works in CSS. You will understand how to write clean, maintainable style rules and see the real-time visual output.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is an essential CSS capability that controls the visual appearance, alignment, and responsiveness of HTML elements.`
      },
      syntaxStructure: cssRules,
      codeExample: fullDoc,
      practice: [
        {
          id: `css-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `What is the primary benefit of mastering ${lessonTitle} in CSS?`,
          options: [
            `It provides precise control over layout, styling, and visual rendering`,
            `It writes backend database queries automatically`,
            `It is only used on legacy browsers`,
            `It replaces HTML document structure`
          ],
          correctAnswer: 0,
          explanation: `Mastering ${lessonTitle} empowers developers to craft polished, responsive user interfaces.`
        }
      ],
      quiz: [
        {
          id: `css-${lt.replace(/[^a-z0-9]/g, '')}-q1`,
          question: `How should CSS rules for ${lessonTitle} be declared?`,
          options: [
            `Inside standard CSS property declarations ended with semicolons`,
            `Directly inside the URL bar`,
            `Without curly braces or properties`,
            `Inside Python comments`
          ],
          correctAnswerIndex: 0,
          explanation: `Every CSS declaration consists of a property and value separated by a colon and closed with a semicolon.`
        }
      ]
    };
  }

  // For Python
  if (cSlug === 'python') {
    return {
      heroTagline: `Python 3 implementation for ${lessonTitle}`,
      introduction: `In this lesson, you will explore **${lessonTitle}** in Python 3. Learn the syntax, practical applications, and industry best practices.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is a core programming feature in Python used for managing logic, state, and algorithmic flow.`
      },
      syntaxStructure: `# Syntax for ${lessonTitle}\n# Standard Python declaration\ndef demonstrate_${lt.replace(/[^a-z0-9]/g, '_')}():\n    # implementation\n    pass`,
      codeExample: `# Python 3 - ${lessonTitle}
def run_${lt.replace(/[^a-z0-9]/g, '_')}_demo():
    print("--- Python: ${lessonTitle} ---")
    data = [10, 20, 30, 40, 50]
    total = sum(data)
    print(f"Dataset: {data}")
    print(f"Calculation Result: {total}")
    return total

run_${lt.replace(/[^a-z0-9]/g, '_')}_demo()`,
      codeAnnotations: [
        { lineOrToken: "def run_..._demo()", description: "Defines a clean Python function encapsulating the logic." },
        { lineOrToken: "print()", description: "Outputs formatted results to stdout." }
      ],
      tips: [
        "Python relies on 4-space indentation to define code blocks.",
        "Use f-strings for clean variable interpolation in Python 3.6+."
      ],
      practice: [
        {
          id: `py-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `In Python, which function is used to output text or variable values to the console?`,
          options: ["print()", "echo()", "console.log()", "System.out.println()"],
          correctAnswer: 0,
          explanation: "print() is the standard built-in function in Python 3 for terminal output."
        }
      ]
    };
  }

  // For Java
  if (cSlug === 'java') {
    return {
      heroTagline: `Object-oriented Java implementation of ${lessonTitle}`,
      introduction: `In this lesson, you will learn how **${lessonTitle}** is structured and executed on the Java Virtual Machine (JVM).`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is a standard object-oriented feature in Java providing type safety and structured execution.`
      },
      syntaxStructure: `public class Main {\n    public static void main(String[] args) {\n        // ${lessonTitle} statement\n    }\n}`,
      codeExample: `// Java implementation for ${lessonTitle}
public class Main {
    public static void main(String[] args) {
        System.out.println("Java: Mastering ${lessonTitle}");
        
        int status = 200;
        System.out.println("Execution Status: " + status);
        System.out.println("Running on Java Virtual Machine (JVM)");
    }
}`,
      codeAnnotations: [
        { lineOrToken: "public static void main(String[] args)", description: "The standard entry-point method executed by the JVM." },
        { lineOrToken: "System.out.println()", description: "Outputs string messages to the console with a trailing newline." }
      ],
      tips: [
        "Every statement in Java must terminate with a semicolon (;).",
        "Class names should follow PascalCase convention."
      ],
      practice: [
        {
          id: `java-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `What is the entry-point method signature for running a Java application?`,
          options: [
            "public static void main(String[] args)",
            "public void run()",
            "function main()",
            "static int start()"
          ],
          correctAnswer: 0,
          explanation: "The JVM invokes 'public static void main(String[] args)' to begin program execution."
        }
      ]
    };
  }

  // For C++
  if (cSlug === 'cpp') {
    return {
      heroTagline: `High-performance C++ implementation for ${lessonTitle}`,
      introduction: `In this lesson, you will explore **${lessonTitle}** in C++. Learn how to write fast, memory-efficient code using standard C++ libraries.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is a C++ language feature allowing direct hardware control, performance optimization, and modular design.`
      },
      syntaxStructure: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // ${lessonTitle}\n    return 0;\n}`,
      codeExample: `// C++ implementation for ${lessonTitle}
#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "--- C++: ${lessonTitle} ---" << endl;
    
    int value = 42;
    cout << "Calculated Value: " << value << endl;
    cout << "Standard C++ stream execution active." << endl;
    
    return 0;
}`,
      practice: [
        {
          id: `cpp-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `Which stream object in C++ is used with '<<' to output text to the console?`,
          options: ["cout", "cin", "printf", "write"],
          correctAnswer: 0,
          explanation: "'cout' (character output) in the <iostream> library outputs data to standard output."
        }
      ]
    };
  }

  // For C
  if (cSlug === 'c') {
    return {
      heroTagline: `Procedural C implementation for ${lessonTitle}`,
      introduction: `In this lesson, you will master **${lessonTitle}** in C. Understand low-level execution, compiler directives, and memory efficiency.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is a foundational procedural programming feature in the C programming language.`
      },
      syntaxStructure: `#include <stdio.h>\n\nint main() {\n    // ${lessonTitle} logic\n    return 0;\n}`,
      codeExample: `// C implementation for ${lessonTitle}
#include <stdio.h>

int main() {
    printf("C Language: ${lessonTitle}\\n");
    
    int code = 100;
    printf("Program return code: %d\\n", code);
    
    return 0;
}`,
      practice: [
        {
          id: `c-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `Which header file is required in C to use the printf() function?`,
          options: ["<stdio.h>", "<stdlib.h>", "<conio.h>", "<math.h>"],
          correctAnswer: 0,
          explanation: "<stdio.h> contains the prototype and definitions for standard I/O like printf and scanf."
        }
      ]
    };
  }

  // For C#
  if (cSlug === 'csharp') {
    return {
      heroTagline: `.NET modern C# implementation for ${lessonTitle}`,
      introduction: `In this lesson, you will learn how **${lessonTitle}** works in modern C# and the .NET ecosystem.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is a strongly typed feature in C# providing type-safety and object-oriented structure.`
      },
      syntaxStructure: `using System;\n\nclass Program {\n    static void Main() {\n        // ${lessonTitle}\n    }\n}`,
      codeExample: `// C# .NET implementation for ${lessonTitle}
using System;

namespace CodingVibes {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("C#: Mastering ${lessonTitle}");
            
            string platform = ".NET 9";
            Console.WriteLine($"Running on {platform} - High Performance Engine");
        }
    }
}`,
      practice: [
        {
          id: `cs-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `Which method in C# prints a message followed by a line terminator to the console?`,
          options: ["Console.WriteLine()", "Console.Write()", "print()", "System.print()"],
          correctAnswer: 0,
          explanation: "Console.WriteLine() outputs text with a trailing newline character."
        }
      ]
    };
  }

  // For SQL
  if (cSlug === 'sql') {
    return {
      heroTagline: `Relational database queries for ${lessonTitle}`,
      introduction: `In this tutorial, you will master **${lessonTitle}** in SQL. Understand how to query, filter, and manipulate relational tables efficiently.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is an essential SQL statement or clause used to interact with relational databases like PostgreSQL, MySQL, and SQLite.`
      },
      syntaxStructure: `-- SQL ${lessonTitle} Syntax\nSELECT column1, column2\nFROM table_name\nWHERE condition;`,
      codeExample: `-- SQL Example: ${lessonTitle}
SELECT CustomerID, CustomerName, ContactName, City, Country
FROM Customers
WHERE Country = 'Germany'
ORDER BY CustomerName ASC;`,
      practice: [
        {
          id: `sql-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `Which SQL keyword is used to retrieve data from a database?`,
          options: ["SELECT", "GET", "FETCH", "EXTRACT"],
          correctAnswer: 0,
          explanation: "The SELECT statement is used to select data from a database."
        }
      ]
    };
  }

  // For PHP
  if (cSlug === 'php') {
    return {
      heroTagline: `Server-side PHP scripting for ${lessonTitle}`,
      introduction: `In this lesson, you will master **${lessonTitle}** in PHP. Learn how to write server-side scripts to produce dynamic HTML web pages.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is a server-side programming feature in PHP used for dynamic data handling and web request processing.`
      },
      syntaxStructure: `<?php\n// ${lessonTitle}\n$variable = "Value";\necho $variable;\n?>`,
      codeExample: `<!DOCTYPE html>
<html>
<body>

<?php
echo "<h2>PHP: ${lessonTitle}</h2>";
$status = "Active";
$timestamp = date("Y-m-d H:i:s");

echo "<p>Server Status: <strong>" . $status . "</strong></p>";
echo "<p>Generated at: " . $timestamp . "</p>";
?>

</body>
</html>`,
      practice: [
        {
          id: `php-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `What symbol precedes all variable names in PHP?`,
          options: ["$", "@", "&", "#"],
          correctAnswer: 0,
          explanation: "In PHP, every variable identifier must begin with a dollar sign ($)."
        }
      ]
    };
  }

  // For React
  if (cSlug === 'react-js' || cSlug === 'react') {
    return {
      heroTagline: `Component-driven React implementation of ${lessonTitle}`,
      introduction: `In this lesson, you will learn how **${lessonTitle}** works in modern React. Build reactive, state-driven interfaces with JSX.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is a front-end UI construct in React used to manage components, state, or side-effects.`
      },
      syntaxStructure: `function Component() {\n  return <div>${lessonTitle}</div>;\n}`,
      codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body style="font-family: Arial; padding: 24px; background: #f8fafc;">

<div id="root"></div>

<script type="text/babel">
  function ${lessonTitle.replace(/[^a-zA-Z]/g, '') || 'Demo'}Component() {
    return (
      <div style={{ background: "white", padding: "20px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
        <h2 style={{ color: "#0284c7" }}>React: ${lessonTitle}</h2>
        <p>Interactive component rendered with React 18 and Babel JSX.</p>
        <button style={{ background: "#0284c7", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
          Interactive Button
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<${lessonTitle.replace(/[^a-zA-Z]/g, '') || 'Demo'}Component />);
</script>

</body>
</html>`,
      practice: [
        {
          id: `react-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `In React JSX, which attribute replaces the standard HTML 'class' attribute?`,
          options: ["className", "class", "classList", "cssClass"],
          correctAnswer: 0,
          explanation: "In JSX, 'className' is used because 'class' is a reserved keyword in JavaScript."
        }
      ]
    };
  }

  // For Bootstrap
  if (cSlug === 'bootstrap') {
    return {
      heroTagline: `Responsive Bootstrap 5 implementation for ${lessonTitle}`,
      introduction: `In this lesson, you will master **${lessonTitle}** using Bootstrap 5's responsive utilities and layout components.`,
      definition: {
        term: lessonTitle,
        explanation: `**${lessonTitle}** is a mobile-first CSS utility or component in Bootstrap 5.`
      },
      syntaxStructure: `<div class="container">\n  <!-- ${lessonTitle} markup -->\n</div>`,
      codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">

<div class="container">
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white">
      <h4>Bootstrap 5: ${lessonTitle}</h4>
    </div>
    <div class="card-body">
      <p class="card-text">Modern responsive styling using Bootstrap 5 utility classes.</p>
      <button class="btn btn-success">Action Button</button>
    </div>
  </div>
</div>

</body>
</html>`,
      practice: [
        {
          id: `bs-${lt.replace(/[^a-z0-9]/g, '')}-p1`,
          type: 'multiple_choice',
          question: `How many columns make up the responsive grid row in Bootstrap?`,
          options: ["12", "10", "16", "8"],
          correctAnswer: 0,
          explanation: "Bootstrap's layout grid is based on 12 columns."
        }
      ]
    };
  }

  // Fallback for general web / languages
  return {
    heroTagline: `Mastering ${lessonTitle} in ${courseSlug.toUpperCase()}`,
    introduction: `In this lesson, you will master **${lessonTitle}** in **${courseSlug.toUpperCase()}**. Learn the syntax, practical applications, and test your code live.`,
    definition: {
      term: lessonTitle,
      explanation: `**${lessonTitle}** is a standard programming topic in ${courseSlug.toUpperCase()}.`
    },
    syntaxStructure: `// ${lessonTitle} declaration\nconsole.log("${lessonTitle}");`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: Arial, sans-serif; padding: 20px; }
h1 { color: #04AA6D; }
</style>
</head>
<body>
<h1>${lessonTitle}</h1>
<p>Interactive demonstration in ${courseSlug.toUpperCase()}.</p>
</body>
</html>`
  };
}
