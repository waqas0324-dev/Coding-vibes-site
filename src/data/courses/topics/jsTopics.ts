import { TopicDefinition } from '../topicData';

export const JS_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: JS Introduction & Basics
  'javascript-introduction': {
    heroTagline: "The dynamic programming language of the web that brings pages to life",
    introduction: "JavaScript is the world's most popular programming language. It is the language of the Web, powering interactivity, dynamic content updates, games, animations, and backend servers via Node.js.",
    definition: {
      term: "JavaScript",
      explanation: "A high-level, interpreted (JIT-compiled) scripting language conforming to the ECMAScript specification that enables interactive web pages."
    },
    syntaxStructure: `console.log("Hello, World!");
document.getElementById("demo").innerHTML = "Updated!";`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
    .box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }
    button { background: #04AA6D; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-size: 16px; }
  </style>
</head>
<body>

<div class="box">
  <h2>Welcome to JavaScript!</h2>
  <p id="demo">JavaScript can change HTML content and styles dynamically.</p>
  <button type="button" onclick="changeContent()">Click to Run JavaScript</button>
</div>

<script>
function changeContent() {
  const el = document.getElementById("demo");
  el.innerHTML = "🎉 JavaScript successfully updated the DOM!";
  el.style.color = "#04AA6D";
  el.style.fontWeight = "bold";
}
</script>

</body>
</html>`,
    codeAnnotations: [
      { lineOrToken: "document.getElementById(\"demo\")", description: "Selects an HTML DOM element by its unique id attribute." },
      { lineOrToken: ".innerHTML = ...", description: "Dynamically updates the inner HTML content of the selected element." }
    ],
    tips: [
      "JavaScript statements are executed by the browser engine (such as Google V8).",
      "Always use modern let and const instead of legacy var."
    ],
    practice: [
      {
        id: "js-intro-p1",
        type: "multiple_choice",
        question: "What is the primary role of JavaScript in web development?",
        options: [
          "To program client-side interactivity and behavior on web pages",
          "To format printed stylesheets only",
          "To define the HTML document skeleton",
          "To configure domain names"
        ],
        correctAnswer: 0,
        explanation: "JavaScript provides client-side programmability and dynamic interactivity."
      }
    ],
    quiz: [
      {
        id: "js-intro-q1",
        question: "Which HTML tag is used to embed JavaScript code directly inside an HTML file?",
        options: ["<script>", "<javascript>", "<js>", "<code>"],
        correctAnswerIndex: 0,
        explanation: "The <script> tag is the standard HTML element for inline and external JavaScript."
      }
    ]
  },

  'javascript-variables-let-const': {
    heroTagline: "Block-scoped let (reassignable) and const (immutable binding)",
    introduction: "In modern JavaScript (ES6+), variables are declared with `let` and `const`. Use `const` by default unless you know the value will be reassigned, in which case use `let`. Avoid using the legacy `var` keyword.",
    definition: {
      term: "let vs const",
      explanation: "let allows reassignment within block scope; const prevents reassignment of the variable binding within block scope."
    },
    syntaxStructure: `const PI = 3.14159;
let count = 0;
count = 1; // Valid
// PI = 3.14; // TypeError: Assignment to constant variable`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h3>JavaScript let and const in Action</h3>
  <div id="output" style="font-family: monospace; font-size: 16px; background: #1e293b; color: #38bdf8; padding: 16px; border-radius: 8px;"></div>

<script>
  const student = "Alex Rivera";
  let score = 75;
  
  let logText = "Initial score for " + student + ": " + score + "<br>";
  
  // Reassigning let
  score += 15;
  logText += "Updated score after bonus: " + score + "<br>";
  
  // Block scope demonstration
  if (score > 80) {
    let honors = "Honors Student";
    logText += "Status: " + honors;
  }
  
  document.getElementById("output").innerHTML = logText;
</script>

</body>
</html>`,
    practice: [
      {
        id: "js-var-p1",
        type: "multiple_choice",
        question: "What happens if you try to reassign a variable declared with const?",
        options: [
          "A TypeError: Assignment to constant variable is thrown",
          "The variable updates without issues",
          "The variable changes type to let",
          "The variable becomes undefined"
        ],
        correctAnswer: 0,
        explanation: "const identifiers cannot be reassigned; doing so throws a TypeError."
      }
    ]
  },

  'javascript-functions': {
    heroTagline: "Standard function declarations vs ES6 Arrow functions (() => {})",
    introduction: "A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when 'something' invokes it (calls it).",
    definition: {
      term: "Function",
      explanation: "A reusable subprogram called to perform a task and optionally return a calculated value."
    },
    syntaxStructure: `// Function declaration
function greet(name) {
  return "Hello " + name;
}

// ES6 Arrow function
const square = (x) => x * x;`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h3>JavaScript Functions</h3>
  <div id="result" style="font-family: sans-serif; padding: 15px; background: #f1f5f9; border-radius: 6px;"></div>

<script>
  // Standard function
  function calculateTotal(price, taxRate = 0.08) {
    return price + (price * taxRate);
  }

  // Modern Arrow Function
  const formatCurrency = (amount) => "$" + amount.toFixed(2);

  const subtotal = 120.00;
  const total = calculateTotal(subtotal);

  document.getElementById("result").innerHTML = 
    "<strong>Subtotal:</strong> " + formatCurrency(subtotal) + "<br>" +
    "<strong>Total with Tax:</strong> " + formatCurrency(total);
</script>

</body>
</html>`,
    practice: [
      {
        id: "js-fn-p1",
        type: "multiple_choice",
        question: "What is the concise syntax for an ES6 arrow function returning x doubled?",
        options: ["(x) => x * 2", "function(x) => x * 2", "x -> x * 2", "def(x) => x * 2"],
        correctAnswer: 0,
        explanation: "(x) => x * 2 is standard ES6 arrow function syntax with an implicit return."
      }
    ]
  },

  'javascript-array-methods': {
    heroTagline: "Transforming data with .map(), .filter(), .reduce(), and .forEach()",
    introduction: "Modern JavaScript array methods provide functional paradigms for transforming, filtering, and aggregating arrays of data without mutating the original source.",
    definition: {
      term: "Array Methods",
      explanation: "Higher-order functions like map and filter that accept callback functions to manipulate array collections."
    },
    syntaxStructure: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h3>JavaScript Array Methods (.map and .filter)</h3>
  <ul id="list" style="font-family: Arial; line-height: 1.8;"></ul>

<script>
  const courses = [
    { name: "Python 3", rating: 4.9, active: true },
    { name: "Java Enterprise", rating: 4.8, active: true },
    { name: "Legacy COBOL", rating: 3.2, active: false },
    { name: "C++ Systems", rating: 4.9, active: true }
  ];

  // Filter only active courses with rating >= 4.5
  const topCourses = courses
    .filter(c => c.active && c.rating >= 4.5)
    .map(c => "<li><strong>" + c.name + "</strong> - ★ " + c.rating + "</li>");

  document.getElementById("list").innerHTML = topCourses.join("");
</script>

</body>
</html>`,
    practice: [
      {
        id: "js-arr-p1",
        type: "multiple_choice",
        question: "Which array method returns a new array with elements that pass a test condition?",
        options: [".filter()", ".map()", ".forEach()", ".find()"],
        correctAnswer: 0,
        explanation: ".filter() creates a new array with all elements that pass the test implemented by the provided function."
      }
    ]
  }
};
