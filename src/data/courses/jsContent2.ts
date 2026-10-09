import { LessonContent } from '../../types';

// ============================================================
// MODULE 1: JavaScript Fundamentals (unique lessons)
// ============================================================

// LESSON: What is JavaScript?
export const jsWhatIsJsContent: LessonContent = {
  heroTagline: "The programming language that makes web pages come alive",
  introduction: "JavaScript is a programming language created in 1995 to make web pages interactive. It runs in every modern browser, so it works on any computer or phone without installing anything. Today it is also used on servers and in mobile apps.",
  definition: {
    term: "JavaScript",
    explanation: "A lightweight scripting language that runs in web browsers and lets pages respond to users. It can update content, handle clicks, and run calculations instantly."
  },
  whyItMatters: "Almost every interactive website you use — maps, chats, games, shopping carts — runs on JavaScript. Learning it is the first step toward building anything dynamic on the web.",
  realWorldAnalogy: {
    title: "Understanding JavaScript",
    story: "Think of a house: HTML builds the rooms, CSS paints them, and JavaScript wires up the light switches and doorbells.",
    comparison: [
      { item: "HTML alone", meaning: "A page that just sits there — you can read it but not use it." },
      { item: "JavaScript added", meaning: "Buttons work, menus open, and the page reacts to you." }
    ]
  },
  syntaxStructure: `console.log("Hello, world!");`,
  codeExample: `// Your first JavaScript program
let message = "Hello, world!";
console.log(message);`,
  codeAnnotations: [
    { lineOrToken: "let message =", description: "Stores text inside a variable called message." },
    { lineOrToken: "console.log(message);", description: "Prints the value to the browser console for you to see." }
  ],
  commonMistakes: [
    {
      wrong: "JavaScript and Java are the same thing.",
      correct: "They are two completely different languages. Only the name is similar.",
      reason: "Java runs on the Java Virtual Machine; JavaScript was designed for web browsers."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let greeting = "Hello from JavaScript!";
document.getElementById("out").textContent = greeting;`,
    instructions: "Change the greeting text, then click 'Run »' to see the page update."
  },
  takeaways: [
    "JavaScript is a programming language that makes web pages interactive.",
    "It runs in every modern browser with nothing to install.",
    "JavaScript and Java are different languages with different purposes."
  ],
  quizQuestions: [
    { id: "js-whatisjs-1", question: "What is JavaScript?", options: ["A programming language that makes web pages interactive", "A styling language for colors and layouts", "A markup language for page structure", "A database for storing user data"], correctAnswerIndex: 0, explanation: "JavaScript is the programming language that adds interactivity and logic to web pages." },
    { id: "js-whatisjs-2", question: "Where does JavaScript code normally run?", options: ["In the user's web browser", "Only on special servers", "Inside image files", "In the printer driver"], correctAnswerIndex: 0, explanation: "JavaScript runs in the browser's JavaScript engine, on the user's device." }
  ]
};

// LESSON: Why JavaScript is Used
export const jsWhyJsUsedContent: LessonContent = {
  heroTagline: "One language for buttons, apps, games, and servers",
  introduction: "JavaScript is used because it is already in every browser. A developer writes one language and it runs on phones, tablets, and desktops. Companies also use it on servers with Node.js, so teams can build the whole product with JavaScript.",
  definition: {
    term: "Use cases of JavaScript",
    explanation: "The areas where JavaScript shines: interactive websites, mobile apps, games, chatbots, and even back-end servers that send data to the browser."
  },
  whyItMatters: "Learning one language unlocks front-end pages, back-end APIs, and mobile apps. That is why JavaScript developers are in such high demand.",
  realWorldAnalogy: {
    title: "Understanding Why JavaScript",
    story: "A Swiss Army knife handles many small jobs; JavaScript handles many kinds of software with one tool.",
    comparison: [
      { item: "Front-end JS", meaning: "Runs in the browser — menus, forms, sliders, games." },
      { item: "Back-end JS (Node.js)", meaning: "Runs on a server — saving data, sending emails, APIs." }
    ]
  },
  syntaxStructure: `// One language, many jobs
button.addEventListener("click", () => alert("Front-end!"));
// server side: app.get("/users", handler) — back-end`,
  codeExample: `// Front-end: react to a click
const btn = document.getElementById("buy");
btn.addEventListener("click", () => {
  alert("Added to cart!");
});`,
  codeAnnotations: [
    { lineOrToken: 'addEventListener("click", ...)', description: "Waits for the user to click the button, then runs the code inside." },
    { lineOrToken: 'alert("Added to cart!")', description: "Shows a small pop-up message to the shopper." }
  ],
  commonMistakes: [
    {
      wrong: "JavaScript can only make small animations.",
      correct: "JavaScript powers full applications like Gmail, Google Maps, and Netflix's interface.",
      reason: "Modern JavaScript builds complete apps, not just effects."
    }
  ],
  tryItYourself: {
    html: `<p id="out">Press the button:</p>\n<button id="btn">Greet me</button>`,
    js: `document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("out").textContent = "JavaScript says hello!";
});`,
    instructions: "Click the button to run your JavaScript, then change the message."
  },
  takeaways: [
    "JavaScript works everywhere because every browser runs it.",
    "It is used for front-end pages and, with Node.js, for servers too.",
    "Big real-world apps like Gmail and Google Maps are built with JavaScript."
  ],
  quizQuestions: [
    { id: "js-whyjs-1", question: "Why do companies choose JavaScript?", options: ["It runs in every browser and can also run on servers", "It is the only language that exists", "Browsers need it to display images", "It is faster than every other language"], correctAnswerIndex: 0, explanation: "JavaScript runs natively in all browsers and, with Node.js, on servers — one language for the whole product." },
    { id: "js-whyjs-2", question: "Which of these can be built with JavaScript?", options: ["Interactive websites, mobile apps, games, and servers", "Only static text pages", "Only database backups", "Only operating systems"], correctAnswerIndex: 0, explanation: "JavaScript is versatile: browsers, servers, mobile apps, and games all use it." }
  ]
};

// LESSON: How JavaScript Works
export const jsHowJsWorksContent: LessonContent = {
  heroTagline: "From your code to a running page in milliseconds",
  introduction: "When you open a page, the browser reads your JavaScript with an engine (like V8 in Chrome). The engine reads the code line by line, executes it, and updates the page. Errors stop only the broken part — the page usually keeps working.",
  definition: {
    term: "JavaScript engine",
    explanation: "A program inside the browser that reads JavaScript code and runs it. Chrome uses V8, Firefox uses SpiderMonkey, and Safari uses JavaScriptCore."
  },
  whyItMatters: "Knowing how code runs helps you find bugs faster. If the console shows an error, you know exactly which line the engine stopped on.",
  realWorldAnalogy: {
    title: "Understanding How JavaScript Runs",
    story: "The engine is like a chef following a recipe: read each step, do it, move on — and report clearly if a step is impossible.",
    comparison: [
      { item: "Your code", meaning: "The recipe — instructions you wrote." },
      { item: "The engine", meaning: "The chef — reads and executes each instruction." },
      { item: "The console", meaning: "The kitchen log — shows results and errors." }
    ]
  },
  syntaxStructure: `// 1. Browser loads the script
// 2. Engine reads top to bottom
// 3. Each line runs immediately
console.log("Line 1 runs first");
console.log("Line 2 runs next");`,
  codeExample: `console.log("First");
console.log("Second");
console.log("Third");`,
  codeAnnotations: [
    { lineOrToken: 'console.log("First");', description: "The engine runs this line before anything below it." },
    { lineOrToken: 'console.log("Second");', description: "This waits until the line above finishes." }
  ],
  commonMistakes: [
    {
      wrong: "console.Log('hi');  // capital L",
      correct: "console.log('hi');  // lowercase l",
      reason: "JavaScript is case-sensitive. 'Log' and 'log' are two different names, and only 'log' exists."
    }
  ],
  tryItYourself: {
    html: `<p>Open the console to see the order:</p>\n<p id="out"></p>`,
    js: `console.log("A");
console.log("B");
document.getElementById("out").textContent = "Check the console: A printed before B.";`,
    instructions: "Swap the two console.log lines and observe the order change."
  },
  takeaways: [
    "The browser's JavaScript engine reads and runs code top to bottom.",
    "Each line finishes before the next one starts.",
    "JavaScript is case-sensitive — log and Log are different."
  ],
  quizQuestions: [
    { id: "js-howjs-1", question: "What runs your JavaScript code in Chrome?", options: ["The V8 JavaScript engine", "The CSS parser", "The image decoder", "The spell checker"], correctAnswerIndex: 0, explanation: "Chrome's V8 engine reads and executes JavaScript code." },
    { id: "js-howjs-2", question: "In what order does the engine run your code?", options: ["Top to bottom, one line at a time", "Bottom to top", "Random order", "Longest lines first"], correctAnswerIndex: 0, explanation: "JavaScript executes statements in order, from the first line to the last." }
  ]
};

// LESSON: Adding JavaScript to HTML
export const jsAddingJsToHtmlContent: LessonContent = {
  heroTagline: "Three ways to connect your code to your page",
  introduction: "JavaScript lives in or next to your HTML file. You can write it directly inside an event attribute, inside a <script> block, or in a separate .js file linked to the page. All three work — but some are cleaner than others.",
  definition: {
    term: "Script tag",
    explanation: "The HTML element <script> that tells the browser 'JavaScript code starts here'. It can hold code directly or link to an external file with the src attribute."
  },
  whyItMatters: "Every project needs its code attached to its page correctly. Choosing the right method keeps your code organized and your pages fast.",
  realWorldAnalogy: {
    title: "Understanding Script Placement",
    story: "Like organizing a kitchen: quick tools on the counter (inline), everyday tools in a drawer (internal), and the full toolbox in the garage (external file).",
    comparison: [
      { item: "Inline", meaning: "Code written right inside an HTML tag — fast to try, messy to maintain." },
      { item: "Internal", meaning: "A <script> block in the page — good for small pages." },
      { item: "External", meaning: "A separate .js file — cleanest, reusable across pages." }
    ]
  },
  syntaxStructure: `<!-- internal -->
<script>
  console.log("Hi from this page");
</script>

<!-- external -->
<script src="app.js"></script>`,
  codeExample: `<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
  document.getElementById("demo").textContent = "Script is connected!";
</script>
</body>
</html>`,
  codeAnnotations: [
    { lineOrToken: "<script>", description: "Marks the start of JavaScript inside the HTML." },
    { lineOrToken: 'document.getElementById("demo")', description: "Grabs the paragraph so the script can change it." }
  ],
  commonMistakes: [
    {
      wrong: "<script src=\"app.js\">\n  alert('hi');\n</script>",
      correct: "<script src=\"app.js\"></script>",
      reason: "When a <script> has a src attribute, any code written inside it is ignored."
    }
  ],
  tryItYourself: {
    html: `<p id="out">Before script</p>\n<script>\n  document.getElementById("out").textContent = "After script ran";\n<\/script>`,
    js: `// This sandbox runs the JS panel for you`,
    instructions: "Edit the text inside the script block and press 'Run »'."
  },
  takeaways: [
    "Use <script> blocks for code written directly in the page.",
    "Use <script src=\"file.js\"> to link an external JavaScript file.",
    "Never put code inside a <script> tag that already has a src attribute."
  ],
  quizQuestions: [
    { id: "js-addingjs-1", question: "Which tag adds JavaScript to an HTML page?", options: ["<script>", "<style>", "<link>", "<meta>"], correctAnswerIndex: 0, explanation: "The <script> tag holds JavaScript code or links to a .js file." },
    { id: "js-addingjs-2", question: "How do you link an external file named app.js?", options: ["<script src=\"app.js\"></script>", "<script>app.js</script>", "<js src=\"app.js\">", "<link rel=\"js\" href=\"app.js\">"], correctAnswerIndex: 0, explanation: "The src attribute on the <script> tag points to the external file." }
  ]
};

// LESSON: Inline JavaScript
export const jsInlineJsContent: LessonContent = {
  heroTagline: "Quick JavaScript written directly inside an HTML tag",
  introduction: "Inline JavaScript means writing small code inside an HTML attribute, usually starting with 'on' — like onclick or onmouseover. It is the fastest way to test an idea, but it gets messy in big projects.",
  definition: {
    term: "Inline JavaScript",
    explanation: "JavaScript code placed inside an HTML element's event attribute, such as onclick. It runs when that event happens on that element."
  },
  whyItMatters: "Inline handlers are perfect for quick demos and single-button pages. Every beginner should know them before moving to cleaner techniques.",
  realWorldAnalogy: {
    title: "Understanding Inline JavaScript",
    story: "It is like a sticky note on a lamp: 'flip this switch'. Fast for one lamp, chaos if every lamp in the house has sticky notes.",
    comparison: [
      { item: "onclick attribute", meaning: "The sticky note — code right on the element." },
      { item: "The event", meaning: "Flipping the switch — the click that triggers it." }
    ]
  },
  syntaxStructure: `<button onclick="alert('Hello!')">Say Hello</button>`,
  codeExample: `<button onclick="document.getElementById('demo').textContent = 'Clicked!'">
  Click Me
</button>
<p id="demo">Not clicked yet.</p>`,
  codeAnnotations: [
    { lineOrToken: 'onclick="..."', description: "The attribute that holds the code to run on click." },
    { lineOrToken: "document.getElementById('demo')", description: "Finds the paragraph and changes its text." }
  ],
  commonMistakes: [
    {
      wrong: "<button onclick='alert(\"hi)'>Click</button>  <!-- missing quote -->",
      correct: "<button onclick=\"alert('hi')\">Click</button>",
      reason: "Quotes must be balanced. Use double quotes for the attribute and single quotes inside."
    }
  ],
  tryItYourself: {
    html: `<button onclick="document.getElementById('out').textContent = 'You clicked me!'">Click Me</button>\n<p id="out">Waiting...</p>`,
    js: `// inline code lives in the onclick attribute above`,
    instructions: "Click the button, then change the message inside onclick and run again."
  },
  takeaways: [
    "Inline JavaScript lives in event attributes like onclick.",
    "It is quick for small demos and tests.",
    "For bigger projects, move code into a <script> block or file instead."
  ],
  quizQuestions: [
    { id: "js-inline-1", question: "Where does inline JavaScript live?", options: ["Inside an HTML element's event attribute", "In a separate .css file", "Inside the browser settings", "In the database"], correctAnswerIndex: 0, explanation: "Inline code sits in attributes like onclick on the element itself." },
    { id: "js-inline-2", question: "What happens when you click <button onclick=\"alert('Hi')\">?", options: ["A pop-up shows 'Hi'", "The page reloads", "Nothing ever happens", "The button deletes itself"], correctAnswerIndex: 0, explanation: "The onclick code runs on click, showing an alert with 'Hi'." }
  ]
};

// LESSON: Internal JavaScript
export const jsInternalJsContent: LessonContent = {
  heroTagline: "A <script> block inside your page keeps code tidy",
  introduction: "Internal JavaScript means placing all your code inside one <script> block in the HTML file — usually just before </body>. It keeps behavior separate from the markup, so the page is easier to read and fix.",
  definition: {
    term: "Internal JavaScript",
    explanation: "JavaScript written inside a <script>...</script> block in the same HTML file. It has full access to the page and runs when the browser reaches it."
  },
  whyItMatters: "Most small projects and class exercises use internal scripts. It is the natural step up from inline code before you split code into files.",
  realWorldAnalogy: {
    title: "Understanding Internal JavaScript",
    story: "Like keeping your recipe cards in the kitchen drawer: everything you need is in one place, organized in its own section.",
    comparison: [
      { item: "HTML markup", meaning: "The kitchen itself — structure and furniture." },
      { item: "The <script> block", meaning: "The recipe drawer — all instructions in one labeled spot." }
    ]
  },
  syntaxStructure: `<!DOCTYPE html>
<html>
<body>
  <p id="demo"></p>
  <script>
    document.getElementById("demo").textContent = "Hello!";
  <\/script>
</body>
</html>`,
  codeExample: `<p id="price">Total: ?</p>
<script>
  const price = 120;
  const tax = 18;
  document.getElementById("price").textContent = "Total: " + (price + tax);
<\/script>`,
  codeAnnotations: [
    { lineOrToken: "<script>", description: "Everything between the tags is JavaScript, not HTML." },
    { lineOrToken: 'document.getElementById("price")', description: "Finds the element; it exists because the script is after it." }
  ],
  commonMistakes: [
    {
      wrong: "<head>\n<script>\n  document.getElementById('demo').textContent = 'hi';\n</script>\n</head>\n<p id=\"demo\"></p>",
      correct: "Place the <script> at the bottom of <body>, after the elements it uses.",
      reason: "A script in <head> runs before the body exists, so getElementById finds nothing."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const user = "Ali";
document.getElementById("out").textContent = "Welcome, " + user + "!";`,
    instructions: "Change the user name and watch the greeting update."
  },
  takeaways: [
    "Internal JavaScript lives in a <script> block in the same file.",
    "Put the block at the bottom of <body> so elements exist when it runs.",
    "It keeps code separate from HTML, unlike inline handlers."
  ],
  quizQuestions: [
    { id: "js-internal-1", question: "Where should an internal <script> block usually go?", options: ["Just before the closing </body> tag", "Inside the <title> tag", "After the closing </html> tag", "Inside an image src"], correctAnswerIndex: 0, explanation: "At the bottom of <body>, all page elements exist before the script runs." },
    { id: "js-internal-2", question: "What is internal JavaScript?", options: ["Code inside a <script> block in the same HTML file", "Code in a separate .js file", "Code written in the browser address bar", "Code inside a CSS file"], correctAnswerIndex: 0, explanation: "Internal means the code is embedded in the HTML file itself." }
  ]
};

// LESSON: External JavaScript
export const jsExternalJsContent: LessonContent = {
  heroTagline: "One .js file shared across your whole website",
  introduction: "External JavaScript lives in its own file, like app.js, linked with <script src=\"app.js\">. Every page on your site can use the same file, so you write code once and fix bugs in one place.",
  definition: {
    term: "External JavaScript file",
    explanation: "A separate file ending in .js that contains only JavaScript — no HTML tags. The browser downloads it once and can reuse it for every page."
  },
  whyItMatters: "Real websites have dozens of pages. External files keep code reusable, cached, and fast — this is how professional projects are built.",
  realWorldAnalogy: {
    title: "Understanding External JavaScript",
    story: "Like a shared toolbox: instead of buying tools for every room, one toolbox serves the whole house.",
    comparison: [
      { item: "app.js file", meaning: "The toolbox — all your code in one place." },
      { item: "src attribute", meaning: "Carrying the toolbox to whichever page needs it." },
      { item: "Browser cache", meaning: "The toolbox stays on the truck — downloaded once, reused." }
    ]
  },
  syntaxStructure: `<!-- index.html -->
<script src="app.js"></script>

/* app.js — only JavaScript, no HTML */
console.log("Loaded from app.js");`,
  codeExample: `/* app.js */
function greet(name) {
  return "Hello, " + name + "!";
}

const heading = document.getElementById("title");
heading.textContent = greet("Waqas");`,
  codeAnnotations: [
    { lineOrToken: "function greet(name)", description: "Defines reusable logic once in the file." },
    { lineOrToken: 'document.getElementById("title")', description: "Any linked page with id=\"title\" gets the greeting." }
  ],
  commonMistakes: [
    {
      wrong: "<script src=\"app.js\">\n  console.log('extra code');\n</script>",
      correct: "<script src=\"app.js\"></script>",
      reason: "A script tag with src ignores anything written inside it."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `// imagine this code lives in app.js, linked to the page
function double(n) {
  return n * 2;
}
document.getElementById("out").textContent = "Double of 21 is " + double(21);`,
    instructions: "Change the number passed to double() and re-run."
  },
  takeaways: [
    "External code lives in a .js file linked with <script src=\"...\">.",
    "One file can be shared by every page on the site.",
    "External files are cached by the browser, making sites faster."
  ],
  quizQuestions: [
    { id: "js-external-1", question: "How do you attach an external file named main.js?", options: ["<script src=\"main.js\"></script>", "<script>main.js</script>", "<link href=\"main.js\">", "<style src=\"main.js\">"], correctAnswerIndex: 0, explanation: "The src attribute on <script> links the external JavaScript file." },
    { id: "js-external-2", question: "What is the main benefit of external JavaScript?", options: ["Reuse the same code on many pages", "It runs without a browser", "It hides code from users", "It makes CSS load faster"], correctAnswerIndex: 0, explanation: "One .js file serves every page — write once, fix once, reuse everywhere." }
  ]
};

// LESSON: JavaScript Syntax
export const jsSyntaxContent: LessonContent = {
  heroTagline: "The grammar rules every JavaScript program follows",
  introduction: "Syntax is the set of rules for writing correct JavaScript — like grammar for a language. You must spell keywords exactly, close brackets, and end statements with care. Break a rule and the engine reports an error.",
  definition: {
    term: "Syntax",
    explanation: "The exact rules about how code must be written: keyword spelling, bracket pairs, quotes, and statement endings. Valid syntax runs; invalid syntax throws an error."
  },
  whyItMatters: "Almost every beginner bug is a syntax mistake — a missing bracket or a wrong letter. Learning the rules helps you spot and fix these in seconds.",
  realWorldAnalogy: {
    title: "Understanding Syntax",
    story: "Grammar in a letter: 'Dear sir' opens politely, a period ends a sentence — break the pattern and the reader is confused.",
    comparison: [
      { item: "Keywords", meaning: "Grammar words like let and function — must be spelled exactly." },
      { item: "Brackets and quotes", meaning: "Punctuation — every opener needs its closer." },
      { item: "Semicolons", meaning: "Periods that mark the end of a statement." }
    ]
  },
  syntaxStructure: `let name = "Sara";        // statement ends with ;
if (name === "Sara") {     // condition in ( )
  console.log("Hi!");      // block in { }
}`,
  codeExample: `let age = 20;
if (age >= 18) {
  console.log("Adult");
}`,
  codeAnnotations: [
    { lineOrToken: "let age = 20;", description: "A complete statement: keyword, name, value, semicolon." },
    { lineOrToken: "if (age >= 18) {", description: "The condition sits in parentheses; the block opens with a brace." }
  ],
  commonMistakes: [
    {
      wrong: "if age >= 18 {\n  console.log('Adult')\n}",
      correct: "if (age >= 18) {\n  console.log('Adult');\n}",
      reason: "The condition must be wrapped in parentheses."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let score = 85;
if (score >= 50) {
  document.getElementById("out").textContent = "Passed!";
}`,
    instructions: "Remove a parenthesis or semicolon, run, and read the error. Then fix it."
  },
  takeaways: [
    "Syntax is the rulebook: spelling, brackets, quotes, semicolons.",
    "Conditions go in parentheses, code blocks go in braces.",
    "Most beginner errors are small syntax slips — easy to fix."
  ],
  quizQuestions: [
    { id: "js-syntax-1", question: "Which line has correct syntax?", options: ["let age = 20;", "let age = ;", "let = 20 age;", "let age 20"], correctAnswerIndex: 0, explanation: "A proper declaration needs keyword, name, equals sign, and value." },
    { id: "js-syntax-2", question: "What is wrong with: if age > 18 { }", options: ["The condition needs parentheses", "The braces are wrong", "if must be capitalized", "Nothing is wrong"], correctAnswerIndex: 0, explanation: "if conditions must be wrapped in parentheses: if (age > 18) { }." }
  ]
};

// LESSON: Comments
export const jsCommentsContent: LessonContent = {
  heroTagline: "Notes for humans that the engine politely ignores",
  introduction: "Comments are lines of text inside your code that JavaScript skips. Use // for one line and /* */ for many lines. They explain why code exists — future you will thank present you.",
  definition: {
    term: "Comment",
    explanation: "Text in your code that the JavaScript engine ignores. It is written for people reading the code, to explain what or why something does."
  },
  whyItMatters: "Code without comments is a mystery after two weeks. Good comments make teamwork possible and debugging much faster.",
  realWorldAnalogy: {
    title: "Understanding Comments",
    story: "Margin notes in a textbook: the book works without them, but the notes explain the tricky parts to the next reader.",
    comparison: [
      { item: "// single line", meaning: "A quick sticky note on one line." },
      { item: "/* multi line */", meaning: "A full paragraph explaining a whole section." }
    ]
  },
  syntaxStructure: `// This line is ignored
let total = 100; // totals the cart

/* This block is ignored too.
   Useful for longer explanations. */`,
  codeExample: `// Calculate the final price with discount
let price = 200;
let discount = 20; // 20% off today
let finalPrice = price - (price * discount / 100);
console.log(finalPrice); // 160`,
  codeAnnotations: [
    { lineOrToken: "// Calculate the final price", description: "Tells the reader what the next lines do." },
    { lineOrToken: "let discount = 20; // 20% off", description: "A trailing note explaining this specific value." }
  ],
  commonMistakes: [
    {
      wrong: "/* start of comment\nlet x = 5;   // oops, x is inside the comment!",
      correct: "/* start of comment */\nlet x = 5;",
      reason: "An unclosed /* */ swallows the code after it — always close the comment."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `// Change the values below and re-run
let a = 7;
let b = 3;
// the result:
document.getElementById("out").textContent = "a + b = " + (a + b);`,
    instructions: "Add your own // comment explaining the math, then run."
  },
  takeaways: [
    "Use // for single-line comments and /* */ for multi-line comments.",
    "Comments are ignored by the engine — they are for humans.",
    "Explain the why, not just the what, in your comments."
  ],
  quizQuestions: [
    { id: "js-comments-1", question: "Which is a valid single-line comment?", options: ["// hello", "<!-- hello -->", "# hello", "** hello"], correctAnswerIndex: 0, explanation: "JavaScript uses // for single-line comments." },
    { id: "js-comments-2", question: "What does the engine do with comments?", options: ["Ignores them completely", "Runs them slowly", "Shows them to users", "Saves them to a file"], correctAnswerIndex: 0, explanation: "Comments are skipped during execution — they exist only for readers." }
  ]
};

// LESSON: Statements
export const jsStatementsContent: LessonContent = {
  heroTagline: "One instruction at a time, ending with a semicolon",
  introduction: "A statement is a single instruction: create a variable, print a value, call a function. JavaScript reads statements one by one. Ending each with a semicolon keeps your meaning crystal clear.",
  definition: {
    term: "Statement",
    explanation: "One complete instruction that the engine can execute, like let x = 5; or console.log(x);. Most statements end with a semicolon."
  },
  whyItMatters: "Programs are built from statements like sentences are built from words. Clean, separated statements are easy to read, test, and debug.",
  realWorldAnalogy: {
    title: "Understanding Statements",
    story: "A recipe's steps: 'chop the onions.' 'heat the pan.' Each step is separate and clear — combine them and the cook gets confused.",
    comparison: [
      { item: "One statement per line", meaning: "One recipe step per line — easy to follow." },
      { item: "Semicolon", meaning: "The period at the end of the step." }
    ]
  },
  syntaxStructure: `let name = "Ali";      // statement 1
let age = 22;         // statement 2
console.log(name);    // statement 3`,
  codeExample: `let item = "Book";
let qty = 3;
let price = 15;
let total = qty * price;
console.log(item + ": " + total);`,
  codeAnnotations: [
    { lineOrToken: "let qty = 3;", description: "Statement 2: stores how many items were bought." },
    { lineOrToken: "let total = qty * price;", description: "Statement 4: multiplies the two earlier values." }
  ],
  commonMistakes: [
    {
      wrong: "let x = 5 let y = 10",
      correct: "let x = 5;\nlet y = 10;",
      reason: "Two statements on one line without a semicolon confuse the engine."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let city = "Lahore";
let country = "Pakistan";
document.getElementById("out").textContent = city + ", " + country;`,
    instructions: "Add a third statement with a new variable, then use it in the text."
  },
  takeaways: [
    "A statement is one instruction the engine executes.",
    "Write one statement per line for readability.",
    "End statements with a semicolon to avoid surprises."
  ],
  quizQuestions: [
    { id: "js-statements-1", question: "What is a JavaScript statement?", options: ["A single instruction the engine executes", "A question asked to the user", "A type of HTML tag", "A browser setting"], correctAnswerIndex: 0, explanation: "A statement is one complete instruction, like declaring a variable." },
    { id: "js-statements-2", question: "Which marks the end of a statement?", options: [";", ":", ".", ","], correctAnswerIndex: 0, explanation: "The semicolon ends a statement." }
  ]
};

// LESSON: Console
export const jsConsoleContent: LessonContent = {
  heroTagline: "Your detective's notebook for seeing what code really does",
  introduction: "The console is a hidden panel in your browser (press F12) where console.log() prints values. It shows errors with line numbers, so it is the first tool you reach for when something breaks.",
  definition: {
    term: "Console",
    explanation: "A developer panel in the browser that displays messages from console.log(), warnings, and errors. Open it with F12 or right-click > Inspect > Console."
  },
  whyItMatters: "You cannot fix what you cannot see. Logging values to the console reveals exactly what your code is doing at each step.",
  realWorldAnalogy: {
    title: "Understanding the Console",
    story: "A doctor's checkup screen: sensors report what is happening inside the patient, so the doctor knows where to treat.",
    comparison: [
      { item: "console.log()", meaning: "A sensor reading — prints the current value." },
      { item: "Error messages", meaning: "Alarms — point to the exact line that failed." }
    ]
  },
  syntaxStructure: `console.log("plain text");
console.log(42);
console.log("Age:", age);`,
  codeExample: `let username = "Sara";
let loginCount = 3;
console.log("User:", username);
console.log("Logins:", loginCount);
console.log("Next login will be number", loginCount + 1);`,
  codeAnnotations: [
    { lineOrToken: 'console.log("User:", username);', description: "Prints a label plus the variable's value — easy to read." },
    { lineOrToken: "console.log(loginCount + 1);", description: "You can log calculations directly, not just variables." }
  ],
  commonMistakes: [
    {
      wrong: "consol.log('hi');  // missing e",
      correct: "console.log('hi');",
      reason: "Misspelling console gives 'consol is not defined'. Spell it exactly."
    }
  ],
  tryItYourself: {
    html: `<p>Open the browser console (F12), then run:</p>\n<p id="out"></p>`,
    js: `let fruit = "Mango";
console.log("My favorite fruit is", fruit);
document.getElementById("out").textContent = "Message sent to console!";`,
    instructions: "Change the fruit, run, and find your message in the console."
  },
  takeaways: [
    "console.log() prints values so you can inspect your code's behavior.",
    "Open the console with F12 or right-click > Inspect > Console.",
    "Errors appear in the console with the exact line number."
  ],
  quizQuestions: [
    { id: "js-console-1", question: "What does console.log(\"hi\") do?", options: ["Prints 'hi' to the browser console", "Shows 'hi' on the page", "Saves 'hi' to a file", "Deletes the page"], correctAnswerIndex: 0, explanation: "console.log sends the value to the console panel, not the page." },
    { id: "js-console-2", question: "How do you open the console in most browsers?", options: ["Press F12", "Press Ctrl+P", "Click the address bar", "Restart the computer"], correctAnswerIndex: 0, explanation: "F12 (or right-click > Inspect > Console) opens developer tools." }
  ]
};

// ============================================================
// MODULE 2: Variables and Data (unique lessons)
// ============================================================

// LESSON: let
export const jsLetContent: LessonContent = {
  heroTagline: "A variable that is allowed to change its value",
  introduction: "The let keyword creates a variable whose value can be updated later. Use it for things that change: counters, scores, user input, and loop numbers.",
  definition: {
    term: "let keyword",
    explanation: "Declares a block-scoped variable that can be reassigned. Write let once to create it, then assign new values without let."
  },
  whyItMatters: "Real programs track changing values — a game score goes up, a cart total grows. let is the tool for anything that updates.",
  realWorldAnalogy: {
    title: "Understanding let",
    story: "A whiteboard: you write a number, erase it, and write a new one. The board stays the same; the value changes.",
    comparison: [
      { item: "let score = 0", meaning: "Mounting a fresh whiteboard labeled score." },
      { item: "score = 10", meaning: "Erasing 0 and writing 10 on the same board." }
    ]
  },
  syntaxStructure: `let age = 25;
age = 26; // updating is allowed`,
  codeExample: `let score = 0;
score = score + 10;
score = score + 5;
console.log(score); // 15`,
  codeAnnotations: [
    { lineOrToken: "let score = 0;", description: "Creates the variable once, starting at 0." },
    { lineOrToken: "score = score + 10;", description: "Updates it — no let the second time." }
  ],
  commonMistakes: [
    {
      wrong: "let x = 5;\nlet x = 10;  // SyntaxError",
      correct: "let x = 5;\nx = 10;",
      reason: "You cannot redeclare a let variable in the same scope — just assign."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let name = "Sara";
name = "Ali";
document.getElementById("out").textContent = "Hello, " + name;`,
    instructions: "Change the name values and see which one appears."
  },
  takeaways: [
    "let creates a variable that can be reassigned.",
    "Declare once with let; update later without it.",
    "You cannot declare the same let name twice in one scope."
  ],
  quizQuestions: [
    { id: "js-let-1", question: "What does let allow that const does not?", options: ["Reassigning the variable later", "Storing text", "Using the variable", "Deleting the variable"], correctAnswerIndex: 0, explanation: "let variables can be reassigned; const variables cannot." },
    { id: "js-let-2", question: "What is wrong with: let x = 1; let x = 2; ?", options: ["Redeclaring x in the same scope", "Using numbers", "Missing semicolons", "Nothing is wrong"], correctAnswerIndex: 0, explanation: "let cannot be redeclared in the same scope — assign with x = 2 instead." }
  ]
};

// LESSON: const
export const jsConstContent: LessonContent = {
  heroTagline: "A variable locked to its first value forever",
  introduction: "The const keyword creates a variable that can never be reassigned. Use it for values that should stay fixed: tax rates, API keys, page titles, and configuration.",
  definition: {
    term: "const keyword",
    explanation: "Declares a block-scoped variable whose binding cannot change. You must give it a value immediately, and any later assignment throws an error."
  },
  whyItMatters: "Locking values prevents accidental changes — the most common source of strange bugs. Modern JavaScript uses const by default.",
  realWorldAnalogy: {
    title: "Understanding const",
    story: "A name carved in stone: it is permanent. You can read it anytime, but you cannot rewrite it.",
    comparison: [
      { item: "const PI = 3.14", meaning: "Carved in stone — always 3.14." },
      { item: "PI = 3", meaning: "Trying to re-carve — the engine refuses with an error." }
    ]
  },
  syntaxStructure: `const siteName = "Coding Vibes";
// siteName = "Other"; // TypeError!`,
  codeExample: `const birthYear = 2002;
const currentYear = 2026;
const age = currentYear - birthYear;
console.log(age); // 24`,
  codeAnnotations: [
    { lineOrToken: "const birthYear = 2002;", description: "A fixed fact — your birth year never changes." },
    { lineOrToken: "const age = currentYear - birthYear;", description: "Derived once from constants; also locked." }
  ],
  commonMistakes: [
    {
      wrong: "const taxRate;\ntaxRate = 0.18;  // SyntaxError",
      correct: "const taxRate = 0.18;",
      reason: "const must be assigned a value at the moment it is declared."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const courseName = "JavaScript Basics";
document.getElementById("out").textContent = "Course: " + courseName;`,
    instructions: "Try adding courseName = \"Other\"; on the next line and see the error."
  },
  takeaways: [
    "const creates a variable that cannot be reassigned.",
    "Always assign its value in the same line you declare it.",
    "Use const by default; switch to let only when the value must change."
  ],
  quizQuestions: [
    { id: "js-const-1", question: "What happens with: const x = 5; x = 10; ?", options: ["TypeError: Assignment to constant variable", "x becomes 10", "x becomes 15", "Nothing happens"], correctAnswerIndex: 0, explanation: "Reassigning a const throws a TypeError." },
    { id: "js-const-2", question: "Which is correct?", options: ["const rate = 0.05;", "const rate;", "const = 0.05;", "constant rate = 0.05;"], correctAnswerIndex: 0, explanation: "const needs a name and an immediate value." }
  ]
};

// LESSON: var
export const jsVarContent: LessonContent = {
  heroTagline: "The old way to declare variables — know it, don't use it",
  introduction: "The var keyword is the original way to declare variables, from before 2015. It still works, but it has surprising scoping rules that cause bugs. Modern code uses let and const instead.",
  definition: {
    term: "var keyword",
    explanation: "The legacy variable declaration. Unlike let, var is function-scoped (not block-scoped) and can be redeclared — both are sources of subtle bugs."
  },
  whyItMatters: "You will meet var in old tutorials and old codebases. Knowing how it behaves lets you read that code — and rewrite it safely with let or const.",
  realWorldAnalogy: {
    title: "Understanding var",
    story: "An old leaky bucket: water (the value) can escape its block and show up where you did not expect it.",
    comparison: [
      { item: "var in a block", meaning: "Leaks out — visible after the block ends." },
      { item: "let in a block", meaning: "Stays sealed inside the block." }
    ]
  },
  syntaxStructure: `var oldStyle = "works, but avoid";
if (true) {
  var leaked = "visible outside!";
}
console.log(leaked); // no error — leaked!`,
  codeExample: `var count = 1;
var count = 2; // allowed with var — confusing!
console.log(count); // 2`,
  codeAnnotations: [
    { lineOrToken: "var count = 1;", description: "Declares the variable the old way." },
    { lineOrToken: "var count = 2;", description: "var allows redeclaration — let would throw an error here." }
  ],
  commonMistakes: [
    {
      wrong: "if (true) { var temp = 'x'; }\nconsole.log(temp); // works — but surprising",
      correct: "if (true) { let temp = 'x'; }\n// temp is not visible here — predictable",
      reason: "var ignores block scope. Prefer let so variables stay where you defined them."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `if (true) {
  var message = "I leaked out!";
}
document.getElementById("out").textContent = message;`,
    instructions: "Change var to let and see the difference in behavior."
  },
  takeaways: [
    "var is the old declaration keyword — function-scoped, not block-scoped.",
    "It allows redeclaration, which hides mistakes.",
    "Always prefer let and const in modern code."
  ],
  quizQuestions: [
    { id: "js-var-1", question: "How does var differ from let in a block?", options: ["var leaks out of the block; let stays inside", "var is faster", "var cannot store numbers", "There is no difference"], correctAnswerIndex: 0, explanation: "var is function-scoped, so it escapes blocks; let is block-scoped." },
    { id: "js-var-2", question: "Should you use var in new code?", options: ["No — use let or const", "Yes, always", "Only on Mondays", "Only for strings"], correctAnswerIndex: 0, explanation: "var is legacy; let and const are safer and clearer." }
  ]
};

// LESSON: Variable Naming
export const jsVariableNamingContent: LessonContent = {
  heroTagline: "Good names make code read like plain English",
  introduction: "Variable names must start with a letter, _ or $, and can contain letters, digits, _ and $. By convention we use camelCase — firstName, totalPrice — and descriptive names that explain the value.",
  definition: {
    term: "Identifier",
    explanation: "The name you give a variable or function. It must start with a letter, underscore, or dollar sign, and cannot be a reserved word like let or function."
  },
  whyItMatters: "You read code far more than you write it. A name like userAge is instantly clear; a name like x forces every reader to guess.",
  realWorldAnalogy: {
    title: "Understanding Variable Names",
    story: "Labels on storage boxes: 'winter clothes' tells you the contents; 'box 7' tells you nothing.",
    comparison: [
      { item: "totalPrice", meaning: "A clear label — the final price to pay." },
      { item: "tp", meaning: "A cryptic label — only the writer knows." }
    ]
  },
  syntaxStructure: `let firstName = "Sara";   // camelCase
let _private = 1;          // underscore ok
let $price = 99;           // dollar ok
// let 2fast = 1;          // Error: cannot start with a digit`,
  codeExample: `let userAge = 25;
let isLoggedIn = true;
let cartTotal = 149.99;
console.log(userAge, isLoggedIn, cartTotal);`,
  codeAnnotations: [
    { lineOrToken: "let userAge = 25;", description: "camelCase: every new word starts with a capital." },
    { lineOrToken: "let isLoggedIn = true;", description: "Booleans read well starting with is, has, or can." }
  ],
  commonMistakes: [
    {
      wrong: "let user-name = 'Sara';  // SyntaxError",
      correct: "let userName = 'Sara';",
      reason: "Hyphens are not allowed in names — the engine reads user-name as subtraction."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let favoriteColor = "green";
let luckyNumber = 7;
document.getElementById("out").textContent = favoriteColor + " " + luckyNumber;`,
    instructions: "Rename the variables to your own clear names and re-run."
  },
  takeaways: [
    "Names start with a letter, _ or $ — never a digit.",
    "Use camelCase and descriptive names: totalPrice, not tp.",
    "Reserved words like let, const, and function cannot be used as names."
  ],
  quizQuestions: [
    { id: "js-naming-1", question: "Which is a valid variable name?", options: ["userName", "user-name", "2users", "let"], correctAnswerIndex: 0, explanation: "userName is valid camelCase. Hyphens, leading digits, and reserved words are not allowed." },
    { id: "js-naming-2", question: "Why use descriptive names like cartTotal?", options: ["Code reads clearly without guessing", "It runs faster", "The browser requires it", "It uses less memory"], correctAnswerIndex: 0, explanation: "Clear names make code self-explanatory for you and your team." }
  ]
};

// LESSON: Data Types
export const jsDataTypesContent: LessonContent = {
  heroTagline: "Text, numbers, true/false — the kinds of values JavaScript holds",
  introduction: "Every value in JavaScript has a type. The main ones are String (text), Number, Boolean (true/false), Null, Undefined, Object, and Array. The typeof operator tells you a value's type.",
  definition: {
    term: "Data type",
    explanation: "A category of value. The type decides what you can do with the value — you can add numbers, but adding two pieces of text joins them."
  },
  whyItMatters: "Most bugs come from mixing types — like adding a number to text. Knowing the types helps you predict what your code will actually do.",
  realWorldAnalogy: {
    title: "Understanding Data Types",
    story: "Ingredients in a kitchen: flour, sugar, eggs. Each behaves differently — you cannot whip flour like cream.",
    comparison: [
      { item: "String '5'", meaning: "Sugar labeled 'flour' — looks numeric, behaves like text." },
      { item: "Number 5", meaning: "Real flour — math works on it." }
    ]
  },
  syntaxStructure: `typeof "hello";   // "string"
typeof 42;        // "number"
typeof true;      // "boolean"
typeof undefined; // "undefined"`,
  codeExample: `let name = "Ali";      // string
let age = 30;          // number
let member = true;     // boolean
console.log(typeof name);   // string
console.log(typeof age);    // number
console.log(typeof member); // boolean`,
  codeAnnotations: [
    { lineOrToken: "typeof name", description: "Asks the engine: what kind of value is this?" },
    { lineOrToken: "let member = true;", description: "A boolean — only ever true or false." }
  ],
  commonMistakes: [
    {
      wrong: "let total = '5' + 5;  // '55' — string wins!",
      correct: "let total = Number('5') + 5;  // 10",
      reason: "Adding text and a number joins them as text. Convert first with Number()."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let a = "10";
let b = 20;
document.getElementById("out").textContent = typeof (a + b) + ": " + (a + b);`,
    instructions: "Change a to a real number and watch the result change."
  },
  takeaways: [
    "JavaScript has String, Number, Boolean, Null, Undefined, Object, and Array types.",
    "typeof reveals a value's type.",
    "Mixing text and numbers in + joins them as text — convert with Number() first."
  ],
  quizQuestions: [
    { id: "js-datatypes-1", question: "What is typeof \"hello\"?", options: ["string", "number", "boolean", "undefined"], correctAnswerIndex: 0, explanation: "Text in quotes is a String." },
    { id: "js-datatypes-2", question: "What is '5' + 5 in JavaScript?", options: ["'55' (text)", "10", "Error", "0"], correctAnswerIndex: 0, explanation: "The + joins text and number into the string '55'." }
  ]
};

// LESSON: Strings
export const jsStringsContent: LessonContent = {
  heroTagline: "Text in quotes — names, messages, and sentences",
  introduction: "A string is text wrapped in quotes: 'hello', \"hello\", or `hello`. Strings hold names, messages, and any characters you need. You can join them with + and check their length with .length.",
  definition: {
    term: "String",
    explanation: "A sequence of characters enclosed in single, double, or backtick quotes. Strings represent all text in JavaScript."
  },
  whyItMatters: "Programs constantly handle text — usernames, messages, addresses. Strings are how you store and shape every word your app shows.",
  realWorldAnalogy: {
    title: "Understanding Strings",
    story: "Beads on a thread: each character is a bead, and the string holds them in order.",
    comparison: [
      { item: "'Sara'", meaning: "Four beads: S, a, r, a." },
      { item: ".length", meaning: "Counting the beads — 4." }
    ]
  },
  syntaxStructure: `let first = "Sara";
let last = 'Khan';
let full = first + " " + last; // "Sara Khan"
full.length; // 9`,
  codeExample: `let city = "Karachi";
let message = "Welcome to " + city + "!";
console.log(message);          // Welcome to Karachi!
console.log(message.length);   // 19`,
  codeAnnotations: [
    { lineOrToken: '"Welcome to " + city', description: "The + operator joins strings together." },
    { lineOrToken: "message.length", description: "Counts the characters, including spaces and !." }
  ],
  commonMistakes: [
    {
      wrong: "let quote = 'It's sunny';  // SyntaxError",
      correct: "let quote = \"It's sunny\";",
      reason: "The apostrophe ends the string early. Use double quotes when the text contains one."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let firstName = "Your";
let lastName = "Name";
document.getElementById("out").textContent = firstName + " " + lastName;`,
    instructions: "Put your real name in the quotes and re-run."
  },
  takeaways: [
    "Strings are text wrapped in single, double, or backtick quotes.",
    "Join strings with the + operator.",
    ".length tells you how many characters a string has."
  ],
  quizQuestions: [
    { id: "js-strings-1", question: "Which is a valid string?", options: ["\"hello\"", "hello", "(hello)", "{hello}"], correctAnswerIndex: 0, explanation: "Strings must be wrapped in quotes." },
    { id: "js-strings-2", question: "What is \"Hi\" + \"!\" ?", options: ["\"Hi!\"", "\"Hi !\"", "Error", "Hi"], correctAnswerIndex: 0, explanation: "+ joins the two strings into \"Hi!\"." }
  ]
};

// LESSON: Numbers
export const jsNumbersContent: LessonContent = {
  heroTagline: "Math-ready values — integers, decimals, and calculations",
  introduction: "JavaScript has one number type for both integers (42) and decimals (3.14). You can add, subtract, multiply, and divide directly. Watch out for decimal precision — 0.1 + 0.2 is not exactly 0.3.",
  definition: {
    term: "Number",
    explanation: "A numeric value without quotes. JavaScript uses one type for whole numbers and decimals, stored as double-precision floating point."
  },
  whyItMatters: "Prices, scores, distances, ages — numbers run every calculation your app makes. Knowing the quirks prevents money-math bugs.",
  realWorldAnalogy: {
    title: "Understanding Numbers",
    story: "A calculator with tiny rounding dust: fine for everyday math, but count coins carefully.",
    comparison: [
      { item: "42", meaning: "An integer — exact and simple." },
      { item: "0.1 + 0.2", meaning: "Decimal dust — gives 0.30000000000000004, not 0.3." }
    ]
  },
  syntaxStructure: `let whole = 42;      // integer
let decimal = 3.14;    // float
let sum = whole + 10;  // 52`,
  codeExample: `let price = 250;
let quantity = 4;
let total = price * quantity;
let average = total / quantity;
console.log(total);    // 1000
console.log(average);  // 250`,
  codeAnnotations: [
    { lineOrToken: "let total = price * quantity;", description: "* multiplies the two numbers." },
    { lineOrToken: "let average = total / quantity;", description: "/ divides to get the per-item price." }
  ],
  commonMistakes: [
    {
      wrong: "let change = 0.3 - 0.1; // 0.19999999999999998",
      correct: "let change = (0.3 - 0.1).toFixed(2); // \"0.20\"",
      reason: "Decimal math has tiny precision errors. Use toFixed(2) for money."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let a = 0.1;
let b = 0.2;
document.getElementById("out").textContent = "0.1 + 0.2 = " + (a + b);`,
    instructions: "See the famous precision quirk, then try toFixed(2)."
  },
  takeaways: [
    "JavaScript uses one number type for integers and decimals.",
    "+ - * / work directly on numbers.",
    "Decimal math can have tiny errors — use toFixed() for money."
  ],
  quizQuestions: [
    { id: "js-numbers-1", question: "What is typeof 42?", options: ["number", "string", "integer", "digit"], correctAnswerIndex: 0, explanation: "All numeric values — integers and decimals — are type number." },
    { id: "js-numbers-2", question: "What does 7 / 2 give?", options: ["3.5", "3", "4", "Error"], correctAnswerIndex: 0, explanation: "Division keeps decimals: 7 / 2 is 3.5." }
  ]
};

// LESSON: Booleans
export const jsBooleansContent: LessonContent = {
  heroTagline: "Just true or false — the language of decisions",
  introduction: "A boolean is the simplest type: it holds only true or false. Every if statement, every login check, every 'is it done?' question runs on booleans.",
  definition: {
    term: "Boolean",
    explanation: "A value that is either true or false. Booleans are the result of comparisons and the input to if statements."
  },
  whyItMatters: "Programs make decisions constantly — is the user logged in? Is the cart empty? Booleans are how code answers yes-or-no questions.",
  realWorldAnalogy: {
    title: "Understanding Booleans",
    story: "A light switch: it is either ON or OFF. No halfway, no maybe.",
    comparison: [
      { item: "true", meaning: "Switch ON — yes, go ahead." },
      { item: "false", meaning: "Switch OFF — no, stop." }
    ]
  },
  syntaxStructure: `let isRaining = true;
let isSunny = false;
let canDrive = age >= 18; // comparison gives a boolean`,
  codeExample: `let age = 20;
let canVote = age >= 18;
console.log(canVote); // true

let cartEmpty = true;
if (cartEmpty) {
  console.log("Your cart is empty.");
}`,
  codeAnnotations: [
    { lineOrToken: "let canVote = age >= 18;", description: "The comparison produces true or false, stored in canVote." },
    { lineOrToken: "if (cartEmpty) {", description: "if runs its block only when the boolean is true." }
  ],
  commonMistakes: [
    {
      wrong: "let done = 'true';  // this is text, not a boolean!",
      correct: "let done = true;",
      reason: "Quotes make it a string. A string 'false' is actually truthy — use real booleans."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let temperature = 32;
let isHot = temperature > 30;
document.getElementById("out").textContent = "Is it hot? " + isHot;`,
    instructions: "Change the temperature and watch the boolean flip."
  },
  takeaways: [
    "A boolean is only ever true or false — no quotes.",
    "Comparisons like >= produce booleans.",
    "if statements run their block when the boolean is true."
  ],
  quizQuestions: [
    { id: "js-booleans-1", question: "What values can a boolean hold?", options: ["true or false", "Any number", "Any text", "true, false, or maybe"], correctAnswerIndex: 0, explanation: "Booleans have exactly two possible values." },
    { id: "js-booleans-2", question: "What is the value of 10 > 5?", options: ["true", "false", "\"true\"", "10"], correctAnswerIndex: 0, explanation: "10 > 5 is a comparison that evaluates to the boolean true." }
  ]
};

// LESSON: Null
export const jsNullContent: LessonContent = {
  heroTagline: "An intentional empty — 'nothing here, on purpose'",
  introduction: "null means 'no value, deliberately'. A programmer assigns null to say: this box exists, but I emptied it on purpose. It is different from undefined, which means 'never filled'.",
  definition: {
    term: "null",
    explanation: "A special value representing intentional absence of data. You assign it yourself when you want to clear or reset a variable."
  },
  whyItMatters: "Forms, logouts, and resets use null to mean 'cleared'. Knowing it helps you tell 'user chose nothing' apart from 'we never asked'.",
  realWorldAnalogy: {
    title: "Understanding null",
    story: "An empty parking spot with a 'reserved' sign: the spot exists and someone deliberately left it empty.",
    comparison: [
      { item: "null", meaning: "The signed empty spot — emptied on purpose." },
      { item: "undefined", meaning: "A spot nobody built yet." }
    ]
  },
  syntaxStructure: `let selectedSeat = null; // nothing chosen yet
selectedSeat = "A12";     // user picks a seat
selectedSeat = null;      // user clears the choice`,
  codeExample: `let currentUser = null; // logged out

function login(name) {
  currentUser = name;
}
login("Sara");
console.log(currentUser); // Sara

currentUser = null; // logged out again
console.log(currentUser); // null`,
  codeAnnotations: [
    { lineOrToken: "let currentUser = null;", description: "Starts empty on purpose — nobody is logged in." },
    { lineOrToken: "currentUser = null;", description: "Logging out empties it again, deliberately." }
  ],
  commonMistakes: [
    {
      wrong: "let user = null;\nconsole.log(user.name); // TypeError!",
      correct: "if (user !== null) {\n  console.log(user.name);\n}",
      reason: "You cannot read properties of null. Check for null first."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let coupon = null;
document.getElementById("out").textContent = "Coupon: " + coupon;
coupon = "SAVE20";
document.getElementById("out").textContent += " -> " + coupon;`,
    instructions: "Set the coupon back to null and see the reset."
  },
  takeaways: [
    "null means 'no value, on purpose' — you assign it yourself.",
    "It is different from undefined ('never assigned').",
    "Always check for null before reading properties."
  ],
  quizQuestions: [
    { id: "js-null-1", question: "What does null represent?", options: ["Intentional absence of a value", "The number zero", "An error", "Empty text"], correctAnswerIndex: 0, explanation: "null is assigned deliberately to mean 'nothing here'." },
    { id: "js-null-2", question: "How is null different from undefined?", options: ["null is assigned on purpose; undefined means never assigned", "They are identical", "null is a number", "undefined is intentional"], correctAnswerIndex: 0, explanation: "null = emptied deliberately; undefined = never given a value." }
  ]
};

// LESSON: Undefined
export const jsUndefinedContent: LessonContent = {
  heroTagline: "'Never given a value' — JavaScript's default empty",
  introduction: "undefined means a variable exists but was never given a value. JavaScript assigns it automatically. If you see undefined, it usually means you forgot to assign something or misspelled a name.",
  definition: {
    term: "undefined",
    explanation: "The default value of a declared-but-unassigned variable, a missing function argument, or a missing object property. It means 'no value was ever set'."
  },
  whyItMatters: "undefined is JavaScript's way of waving a red flag: 'you expected a value here, but there is none.' Reading it correctly saves hours of debugging.",
  realWorldAnalogy: {
    title: "Understanding undefined",
    story: "A mailbox that was installed but never received a letter — it exists, it is just empty by default.",
    comparison: [
      { item: "let x;", meaning: "The mailbox installed, no letter yet — undefined." },
      { item: "let x = null;", meaning: "Someone put an 'empty' note inside on purpose." }
    ]
  },
  syntaxStructure: `let nickname;              // undefined
console.log(nickname);        // undefined

function greet(name) {
  console.log("Hi " + name);  // undefined if no argument
}
greet();`,
  codeExample: `let score;
console.log(score); // undefined — never assigned

score = 95;
console.log(score); // 95 — now it has a value`,
  codeAnnotations: [
    { lineOrToken: "let score;", description: "Declared with no value — automatically undefined." },
    { lineOrToken: "score = 95;", description: "Assigning replaces undefined with a real value." }
  ],
  commonMistakes: [
    {
      wrong: "let userName = 'Sara';\nconsole.log(username); // undefined — wrong case!",
      correct: "console.log(userName);",
      reason: "A misspelled variable name creates a new undefined reference instead of an error in some cases — check spelling."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let mystery;
document.getElementById("out").textContent = "Value: " + mystery + " (" + typeof mystery + ")";`,
    instructions: "Assign mystery a value and watch undefined disappear."
  },
  takeaways: [
    "undefined means 'declared but never assigned a value'.",
    "It also appears for missing function arguments and properties.",
    "Seeing undefined usually means a forgotten assignment or a typo."
  ],
  quizQuestions: [
    { id: "js-undefined-1", question: "What is the value of: let x; ?", options: ["undefined", "null", "0", "\"\""], correctAnswerIndex: 0, explanation: "Declared without assignment, x is automatically undefined." },
    { id: "js-undefined-2", question: "What is typeof undefined?", options: ["\"undefined\"", "\"null\"", "\"empty\"", "\"void\""], correctAnswerIndex: 0, explanation: "typeof undefined returns the string \"undefined\"." }
  ]
};

// LESSON: Objects (intro)
export const jsObjectsIntroContent: LessonContent = {
  heroTagline: "One variable that holds many labeled values",
  introduction: "An object groups related data under one name using key: value pairs inside { }. A person has a name, age, and city — an object stores all three together instead of in three loose variables.",
  definition: {
    term: "Object",
    explanation: "A container that stores multiple values as named properties. You read a property with dot notation, like person.name."
  },
  whyItMatters: "Real data comes in bundles — a user, a product, an order. Objects keep each bundle together so code stays organized and readable.",
  realWorldAnalogy: {
    title: "Understanding Objects",
    story: "A labeled filing folder: instead of loose papers everywhere, one folder holds the name form, age form, and address form.",
    comparison: [
      { item: "person.name", meaning: "Opening the folder and reading the name form." },
      { item: "{ }", meaning: "The folder itself." }
    ]
  },
  syntaxStructure: `const person = {
  name: "Sara",
  age: 25,
  city: "Lahore"
};
person.name; // "Sara"`,
  codeExample: `const product = {
  title: "Laptop",
  price: 85000,
  inStock: true
};
console.log(product.title);   // Laptop
console.log(product.price);   // 85000
product.price = 80000;        // update one property
console.log(product.price);   // 80000`,
  codeAnnotations: [
    { lineOrToken: "title: \"Laptop\",", description: "A property: the key 'title' holds the value 'Laptop'." },
    { lineOrToken: "product.price = 80000;", description: "Dot notation updates a single property." }
  ],
  commonMistakes: [
    {
      wrong: "const person = {\n  name = 'Sara'\n};  // SyntaxError",
      correct: "const person = {\n  name: 'Sara'\n};",
      reason: "Object properties use a colon between key and value, not =."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const student = {
  name: "Ali",
  grade: "A"
};
document.getElementById("out").textContent = student.name + " got grade " + student.grade;`,
    instructions: "Add a third property (like age) and display it."
  },
  takeaways: [
    "Objects store related values as key: value pairs inside { }.",
    "Read and update properties with dot notation: person.name.",
    "Properties are separated by commas and use colons, not =."
  ],
  quizQuestions: [
    { id: "js-objectsintro-1", question: "How do you read the name property of person?", options: ["person.name", "person[name]", "name.person", "person->name"], correctAnswerIndex: 0, explanation: "Dot notation person.name reads the property." },
    { id: "js-objectsintro-2", question: "Which is a valid object?", options: ["{ name: \"Sara\", age: 25 }", "{ name = \"Sara\" }", "[ name: \"Sara\" ]", "( name: \"Sara\" )"], correctAnswerIndex: 0, explanation: "Objects use curly braces with key: value pairs." }
  ]
};

// LESSON: Arrays (intro)
export const jsArraysIntroContent: LessonContent = {
  heroTagline: "An ordered list that keeps many values in one place",
  introduction: "An array stores an ordered list of values inside [ ]. A shopping cart holds many items; a class has many students. Arrays keep them together, and each item gets a position number starting at 0.",
  definition: {
    term: "Array",
    explanation: "An ordered collection of values in square brackets. Items are accessed by their index — a position number starting from 0."
  },
  whyItMatters: "Lists are everywhere: products, messages, search results. Arrays plus their methods (push, pop, map) are the backbone of real apps.",
  realWorldAnalogy: {
    title: "Understanding Arrays",
    story: "A row of numbered lockers: locker 0, locker 1, locker 2 — each holds one item, and you open them by number.",
    comparison: [
      { item: "fruits[0]", meaning: "Opening locker 0 — the first item." },
      { item: ".length", meaning: "Counting how many lockers are used." }
    ]
  },
  syntaxStructure: `const fruits = ["apple", "mango", "banana"];
fruits[0];      // "apple" — first item
fruits.length;  // 3`,
  codeExample: `const scores = [85, 92, 78];
console.log(scores[0]);      // 85 — first score
console.log(scores[2]);      // 78 — third score
console.log(scores.length);  // 3 — how many scores`,
  codeAnnotations: [
    { lineOrToken: "scores[0]", description: "Index 0 is always the first item, not index 1." },
    { lineOrToken: "scores.length", description: "The count of items — 3 here." }
  ],
  commonMistakes: [
    {
      wrong: "fruits[3]  // undefined — there are only 3 items!",
      correct: "fruits[fruits.length - 1]  // last item safely",
      reason: "Indexes start at 0, so the last index is always length - 1."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const colors = ["red", "green", "blue"];
document.getElementById("out").textContent = "First: " + colors[0] + ", count: " + colors.length;`,
    instructions: "Add a fourth color and display the last item."
  },
  takeaways: [
    "Arrays hold ordered lists inside [ ].",
    "Indexes start at 0; the first item is arr[0].",
    ".length tells you how many items the array holds."
  ],
  quizQuestions: [
    { id: "js-arraysintro-1", question: "What is [\"a\", \"b\", \"c\"][1]?", options: ["\"b\"", "\"a\"", "\"c\"", "1"], correctAnswerIndex: 0, explanation: "Index 1 is the second item: \"b\"." },
    { id: "js-arraysintro-2", question: "What does [10, 20, 30].length return?", options: ["3", "30", "2", "0"], correctAnswerIndex: 0, explanation: "length counts the items: three." }
  ]
};