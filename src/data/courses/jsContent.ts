import { LessonContent, PracticeQuestion, QuizQuestion, ChallengeTask } from '../../types';

// LESSON: JavaScript Introduction & How It Works
export const jsIntroContent: LessonContent = {
  heroTagline: "Programming logic, interactivity, and dynamic web applications",
  introduction: "If HTML is the structure and CSS is the presentation, **JavaScript is the brain** of the web. JavaScript enables interactive menus, form validation, real-time updates, animations, and full web applications.",
  
  definition: {
    term: "JavaScript (JS)",
    explanation: "A versatile, high-level programming language that allows developers to implement complex logic, handle user events, manipulate the DOM, and communicate with web servers."
  },

  diagram: {
    type: "dom-tree",
    title: "JavaScript Event-Driven Architecture",
    caption: "User clicks -> JavaScript Event Listener -> DOM Manipulation -> Instant UI Update."
  },

  comparisonTable: {
    title: "The Web Development Trinity",
    headers: ["Technology", "Role", "Analogy", "Example"],
    rows: [
      { values: ["HTML", "Structure & Content", "Skeleton / Walls", "<h1>Welcome</h1>"], isCode: [true, false, false, true] },
      { values: ["CSS", "Design & Appearance", "Paint / Lighting", "color: #22c55e;"], isCode: [true, false, false, true] },
      { values: ["JavaScript", "Behavior & Logic", "Wiring / Smart Controls", "btn.addEventListener(...)"], isCode: [true, false, false, true] }
    ]
  },

  syntaxStructure: `// Defining a variable and attaching an event
const button = document.querySelector("#my-btn");

button.addEventListener("click", () => {
  console.log("Button clicked!");
  alert("Welcome to Coding Vibes!");
});`,

  codeAnnotations: [
    {
      lineOrToken: "const button =",
      description: "Creates an immutable variable holding a reference to an element in the browser DOM."
    },
    {
      lineOrToken: "document.querySelector(...)",
      description: "Finds and selects an HTML element on the page using a standard CSS selector."
    },
    {
      lineOrToken: "addEventListener(\"click\", ...)",
      description: "Listens for user interaction (like a mouse click) and triggers the associated callback function."
    }
  ],

  codeExample: `<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>
  Click Me!
</button>

</body>
</html>`,

  commonMistakes: [
    {
      wrong: "/* Trying to run JS before the HTML elements exist */\nconst el = document.getElementById('btn'); // null if script is in <head>!",
      correct: "<!-- Use defer or place <script> at bottom of <body> -->\n<script src=\"app.js\" defer></script>",
      reason: "Always ensure the HTML DOM has parsed before JavaScript attempts to select elements."
    }
  ],

  tryItYourself: {
    html: `<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>
  Click Me!
</button>

</body>
</html>`,
    js: ``,
    instructions: "Click 'Click Me!' in the preview, or change the message in the editor and click 'Run »'!"
  },

  takeaways: [
    "JavaScript adds logic, interactivity, and dynamic behavior to websites.",
    "JavaScript manipulates HTML elements using the Document Object Model (DOM).",
    "Events (clicks, typing, scrolling) trigger JavaScript functions to update the interface."
  ]
};

// LESSON: Variables & Data Types
export const jsVariablesContent: LessonContent = {
  heroTagline: "Storing, updating, and manipulating data in code",
  introduction: "In programming, **variables** act as labeled storage boxes that hold values. In modern JavaScript, we declare variables using `const` (for constants) and `let` (for values that change).",
  
  definition: {
    term: "JavaScript Variable",
    explanation: "A named container for storing data values. In ES6+, `const` is used by default, and `let` is used when a variable's value needs to be reassigned."
  },

  comparisonTable: {
    title: "const vs let vs var",
    headers: ["Keyword", "Reassignable?", "Scope", "Modern Recommendation"],
    rows: [
      { values: ["const", "No (Immutable reference)", "Block Scope", "Use by default for everything"], isCode: [true, false, false, false] },
      { values: ["let", "Yes", "Block Scope", "Use only when value must change (counters, loops)"], isCode: [true, false, false, false] },
      { values: ["var", "Yes", "Function Scope", "Deprecated in modern JavaScript (avoid)"], isCode: [true, false, false, false] }
    ]
  },

  syntaxStructure: `// Modern Variable Declarations
const siteName = "Coding Vibes"; // String
const courseCount = 12;          // Number
let isStudentEnrolled = true;    // Boolean

// Updating a 'let' variable
isStudentEnrolled = false;`,

  codeAnnotations: [
    {
      lineOrToken: "const",
      description: "Prevents accidental reassignment of the variable identifier."
    },
    {
      lineOrToken: "let",
      description: "Allows the variable to be reassigned later in the program execution."
    }
  ],

  codeExample: `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>In this example, x, y, and z are variables:</p>

<p id="demo"></p>

<script>
let x = 5;
let y = 6;
let z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;
</script>

</body>
</html>`,

  commonMistakes: [
    {
      wrong: "const score = 10;\nscore = 20; // TypeError: Assignment to constant variable",
      correct: "let score = 10;\nscore = 20; // Valid reassignment",
      reason: "`const` variables cannot be reassigned. Use `let` if you need to modify the value later."
    }
  ],

  tryItYourself: {
    html: `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Variables</h2>

<p>In this example, x, y, and z are variables:</p>

<p id="demo"></p>

<script>
let x = 5;
let y = 6;
let z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;
</script>

</body>
</html>`,
    js: ``,
    instructions: "Change the values of x and y, then click 'Run »' to see the calculated sum update."
  },

  takeaways: [
    "Always use `const` by default unless you know the value needs to change, in which case use `let`.",
    "Never use `var` in modern JavaScript.",
    "Common primitive data types: String, Number, Boolean, Null, and Undefined."
  ]
};

// LESSON: DOM Manipulation
export const jsDomContent: LessonContent = {
  heroTagline: "Selecting elements, modifying text, and altering styles dynamically",
  introduction: "The **Document Object Model (DOM)** is the programming interface for web documents. JavaScript uses the DOM to change text, update HTML attributes, add CSS styles, and create new elements on the fly.",
  
  definition: {
    term: "The DOM (Document Object Model)",
    explanation: "A tree-like representation of the HTML document created by the browser. Each HTML tag becomes a node/object in this tree that JavaScript can inspect and alter."
  },

  diagram: {
    type: "dom-tree",
    title: "Document Object Model Tree",
    caption: "The document object connects down to the html node, head, body, headings, and paragraph nodes."
  },

  comparisonTable: {
    title: "Essential DOM Methods",
    headers: ["Method", "Target", "Example"],
    rows: [
      { values: ["document.querySelector()", "First matching CSS selector", "document.querySelector('.btn')"], isCode: [true, false, true] },
      { values: ["document.querySelectorAll()", "All matching elements", "document.querySelectorAll('p')"], isCode: [true, false, true] },
      { values: ["element.textContent", "Change plain text", "title.textContent = 'New Title'"], isCode: [true, false, true] },
      { values: ["element.classList.add()", "Add a CSS class", "card.classList.add('active')"], isCode: [true, false, true] },
      { values: ["element.style.color", "Direct inline CSS", "heading.style.color = '#22c55e'"], isCode: [true, false, true] }
    ]
  },

  syntaxStructure: `// Selecting an element and updating its content
const heading = document.querySelector("#main-title");
heading.textContent = "Welcome, Developer!";
heading.style.color = "#22c55e";`,

  codeExample: `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick="changeContent()" style="background: #04AA6D; color: white; padding: 10px 18px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  Transform Text
</button>

<script>
function changeContent() {
  const el = document.getElementById("demo");
  el.innerHTML = "🚀 DOM Manipulated Successfully!";
  el.style.color = "#04AA6D";
  el.style.fontWeight = "bold";
}
</script>

</body>
</html>`,

  commonMistakes: [
    {
      wrong: "element.innerHTML = userInput; // Danger: Cross-Site Scripting (XSS) vulnerability!",
      correct: "element.textContent = userInput; // Safe: Escapes text safely",
      reason: "Never assign unsanitized user inputs to `innerHTML`. Use `textContent` for safe plain text insertion."
    }
  ],

  tryItYourself: {
    html: `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick="changeContent()" style="background: #04AA6D; color: white; padding: 10px 18px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  Transform Text
</button>

<script>
function changeContent() {
  const el = document.getElementById("demo");
  el.innerHTML = "🚀 DOM Manipulated Successfully!";
  el.style.color = "#04AA6D";
  el.style.fontWeight = "bold";
}
</script>

</body>
</html>`,
    js: ``,
    instructions: "Click 'Transform Text' in the preview, then modify the text in the script and click 'Run »'!"
  },

  takeaways: [
    "The DOM is the bridge connecting JavaScript to HTML elements.",
    "Use `querySelector` and `getElementById` to select elements.",
    "Use `textContent` to safely change text and `classList` to manage CSS classes."
  ]
};
