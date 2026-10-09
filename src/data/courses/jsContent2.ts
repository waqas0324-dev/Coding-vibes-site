import { LessonContent } from '../../types';

// ============================================================
// MODULE 1: JavaScript Fundamentals (unique lessons)
// ============================================================

// LESSON: What is JavaScript?
export const jsWhatIsJsContent: LessonContent = {
  heroTagline: "The programming language that makes web pages come alive",
  introduction: "Imagine a web page as a **puppet**. **HTML** builds the puppet's body, **CSS** paints its costume — but without **JavaScript**, it just hangs there, lifeless. JavaScript is the **strings that make it dance**: buttons respond, menus slide open, games come alive.\n\nFun fact: JavaScript was created in **1995** in just 10 days! It runs in **every modern browser** — no installation needed — and today it also powers **servers**, **mobile apps**, and even **robots**.",
  definition: {
    term: "JavaScript",
    explanation: "A **lightweight programming language** that runs in web browsers and gives pages a **brain**. It listens for what users do — **clicks**, **typing**, **scrolling** — and responds instantly by updating content, running calculations, or talking to servers."
  },
  whyItMatters: "Think of the last website that impressed you — a live map, a chat app, an online game. **JavaScript was doing the magic** behind every click. It is the **most-used programming language on Earth**, and learning it is your ticket to building anything **interactive** — from a simple button to the next big startup.",
  realWorldAnalogy: {
    title: "The Puppet Master",
    story: "Picture a puppet show. **HTML** carves the wooden puppet, **CSS** sews its colorful costume — but the show only starts when the **puppet master** (JavaScript) picks up the strings. Every wave, jump, and bow happens because JavaScript pulls a string at exactly the right moment.",
    comparison: [
      { item: "HTML + CSS only", meaning: "A puppet lying on a table — nice to look at, but it never moves." },
      { item: "JavaScript added", meaning: "The puppet master arrives — now the puppet dances, talks, and reacts to the audience." }
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
      reason: "Fun fact: the name was pure **marketing** — Java was popular in 1995, so they borrowed the name. Under the hood, the two languages have almost nothing in common."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let greeting = "Hello from JavaScript!";
document.getElementById("out").textContent = greeting;`,
    instructions: "Change the greeting text, then click 'Run »' to see the page update."
  },
  takeaways: [
    "**JavaScript** is the programming language that makes web pages **interactive** — the puppet master pulling the strings.",
    "It runs in **every modern browser** with nothing to install — write code, open the page, done.",
    "**JavaScript** and **Java** are completely different languages — they just share part of a name."
  ],
  quizQuestions: [
    { id: "js-whatisjs-1", question: "What is JavaScript?", options: ["A programming language that makes web pages interactive", "A styling language for colors and layouts", "A markup language for page structure", "A database for storing user data"], correctAnswerIndex: 0, explanation: "Exactly — JavaScript is the **brain** that adds interactivity and logic. Styling is CSS's job, structure is HTML's." },
    { id: "js-whatisjs-2", question: "Where does JavaScript code normally run?", options: ["In the user's web browser", "Only on special servers", "Inside image files", "In the printer driver"], correctAnswerIndex: 0, explanation: "Right! Your browser has a built-in **JavaScript engine** (like V8 in Chrome) that runs code right on your device — no server round-trip needed." }
  ]
};

// LESSON: Why JavaScript is Used
export const jsWhyJsUsedContent: LessonContent = {
  heroTagline: "One language for buttons, apps, games, and servers",
  introduction: "Why do developers still choose JavaScript after 30 years? One word: **everywhere**. It is already inside every browser on every phone, tablet, and laptop — your code runs instantly, no setup, no installs.\n\nAnd here is the twist: with **Node.js**, the same language also runs on **servers**. Learn one language and you can build the **whole product** — the buttons users see AND the servers behind them.",
  definition: {
    term: "Use cases of JavaScript",
    explanation: "The reason JavaScript dominates: **one language for the entire stack**. In the browser it builds **interactive pages**; on servers (via **Node.js**) it handles **data**, **logins**, and **APIs**; it even builds **mobile apps** and **games**. Learn once, build anywhere."
  },
  whyItMatters: "Companies love hiring **one developer** who can build both the website and the server behind it — that is the JavaScript developer. It is among the **most in-demand languages** for web jobs, and products you admire — **Gmail**, **Google Maps**, **Netflix** — lean on JavaScript heavily. Learn it once, and doors open everywhere.",
  realWorldAnalogy: {
    title: "The Swiss Army Knife",
    story: "A **Swiss Army knife** is not the world's best screwdriver or the world's best scissors — but it is the tool you actually carry everywhere, because it handles **dozens of jobs** with one handle. JavaScript is the Swiss Army knife of programming: buttons, servers, apps, games — one tool, endless jobs.",
    comparison: [
      { item: "Front-end JS", meaning: "The knife's blade — runs in the browser: menus, forms, sliders, games." },
      { item: "Back-end JS (Node.js)", meaning: "The screwdriver attachment — runs on a server: saving data, sending emails, APIs." }
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
      reason: "JavaScript grew up long ago — today it powers **full applications**, not just fancy button effects. Never underestimate it!"
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
    "JavaScript runs **everywhere** because every browser already speaks it — zero installation.",
    "With **Node.js**, the same language powers **servers** too — one language, whole product.",
    "Real giants like **Gmail** and **Google Maps** are built with JavaScript — you are learning the real deal."
  ],
  quizQuestions: [
    { id: "js-whyjs-1", question: "Why do companies choose JavaScript?", options: ["It runs in every browser and can also run on servers", "It is the only language that exists", "Browsers need it to display images", "It is faster than every other language"], correctAnswerIndex: 0, explanation: "Spot on — browsers run it **natively**, and **Node.js** takes it to servers. One language, front to back." },
    { id: "js-whyjs-2", question: "Which of these can be built with JavaScript?", options: ["Interactive websites, mobile apps, games, and servers", "Only static text pages", "Only database backups", "Only operating systems"], correctAnswerIndex: 0, explanation: "Exactly! Browsers, servers, mobile apps, games — JavaScript's resume is ridiculously long." }
  ]
};

// LESSON: How JavaScript Works
export const jsHowJsWorksContent: LessonContent = {
  heroTagline: "From your code to a running page in milliseconds",
  introduction: "What actually happens when you open a page? Your browser's **JavaScript engine** (like **V8** in Chrome) grabs your code and runs it **line by line, top to bottom** — like reading a recipe out loud and cooking each step.\n\nEach line **finishes completely** before the next one starts. And if one line has an error, the engine points at **exactly that line** — which is why the **console** is a debugger's best friend.",
  definition: {
    term: "JavaScript engine",
    explanation: "The **step-by-step execution** of your code by the browser's **JavaScript engine**. It reads each **statement** in order, runs it to completion, updates the page, then moves on — reporting the **exact line number** if something breaks."
  },
  whyItMatters: "Here is the payoff: when your code breaks (and it will — everyone's does), you won't panic. You'll open the **console**, read the **line number**, and know **exactly** where the engine stopped. Understanding how code runs turns mysterious bugs into 30-second fixes.",
  realWorldAnalogy: {
    title: "The Robot Chef",
    story: "Imagine a **robot chef** that follows your recipe with zero creativity: it reads **step 1**, finishes it completely, then reads **step 2**. If step 3 says 'add salt' but there is no salt, it stops and flashes the **exact step number**. That robot is the JavaScript engine — literal, orderly, and wonderfully predictable.",
    comparison: [
      { item: "Top-to-bottom", meaning: "The robot never skips ahead — line 1 finishes before line 2 begins." },
      { item: "Errors", meaning: "One bad step stops that dish — but the rest of the kitchen (page) usually keeps working." }
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
      reason: "JavaScript is **case-sensitive** — `Log` and `log` are as different as 'cat' and 'Cat'. The built-in one is lowercase `console.log`."
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
    "The browser's **JavaScript engine** reads and runs code **top to bottom**, one line at a time.",
    "Each statement **finishes fully** before the next one starts — no skipping ahead.",
    "JavaScript is **case-sensitive** — `log` and `Log` are two completely different names."
  ],
  quizQuestions: [
    { id: "js-howjs-1", question: "What runs your JavaScript code in Chrome?", options: ["The V8 JavaScript engine", "The CSS parser", "The image decoder", "The spell checker"], correctAnswerIndex: 0, explanation: "Correct — **V8** is Chrome's engine, the robot chef that reads and runs your code." },
    { id: "js-howjs-2", question: "In what order does the engine run your code?", options: ["Top to bottom, one line at a time", "Bottom to top", "Random order", "Longest lines first"], correctAnswerIndex: 0, explanation: "Right! JavaScript is strictly **top-to-bottom** — line 2 never runs before line 1 finishes." }
  ]
};

// LESSON: Adding JavaScript to HTML
export const jsAddingJsToHtmlContent: LessonContent = {
  heroTagline: "Three ways to connect your code to your page",
  introduction: "Your JavaScript needs a way to **meet** your HTML page. Luckily there are **three doors** in: tiny code inside an **event attribute**, a **`<script>` block** inside the page, or a separate **`.js` file** linked to the page.\n\nAll three doors work — but just like real doors, some are **grand entrances** and some are **service exits**. This lesson shows you all three so you can pick like a pro.",
  definition: {
    term: "Script tag",
    explanation: "The **three ways** to connect JavaScript to a page: **inline** (code inside an HTML attribute like `onclick`), **internal** (a `<script>` block in the same file), and **external** (a separate `.js` file linked with `<script src=\"...\">`)."
  },
  whyItMatters: "Every project you'll ever build needs this connection — and picking the **right method** is what separates messy beginner pages from **clean, fast, professional** sites. Get this right once, and every project after feels easy.",
  realWorldAnalogy: {
    title: "Three Doors Into the House",
    story: "Your HTML page is a **house** and JavaScript is a **guest**. Inline code is slipping a note under the door (quick but messy). An internal `<script>` is inviting the guest into the living room (tidy for small visits). An external file is giving them their **own apartment next door** with a key (clean, reusable, professional).",
    comparison: [
      { item: "Inline", meaning: "A note under the door — fastest for tiny tests, messiest for real work." },
      { item: "External", meaning: "Their own apartment — one file shared by every page, cached and fast." }
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
      reason: "Think of `src` as an **either/or** switch: when the browser sees it, it fetches the file and **ignores** anything written between the tags."
    }
  ],
  tryItYourself: {
    html: `<p id="out">Before script</p>\n<script>\n  document.getElementById("out").textContent = "After script ran";\n<\/script>`,
    js: `// This sandbox runs the JS panel for you`,
    instructions: "Edit the text inside the script block and press 'Run »'."
  },
  takeaways: [
    "Use **`<script>` blocks** for code written directly inside the page.",
    "Use **`<script src=\"file.js\">`** to link an external JavaScript file — the pro move.",
    "Never put code inside a `<script>` tag that already has a **`src`** — the browser ignores it."
  ],
  quizQuestions: [
    { id: "js-addingjs-1", question: "Which tag adds JavaScript to an HTML page?", options: ["<script>", "<style>", "<link>", "<meta>"], correctAnswerIndex: 0, explanation: "Yes — the **`<script>`** tag is the doorway: it either holds code directly or links to a `.js` file." },
    { id: "js-addingjs-2", question: "How do you link an external file named app.js?", options: ["<script src=\"app.js\"></script>", "<script>app.js</script>", "<js src=\"app.js\">", "<link rel=\"js\" href=\"app.js\">"], correctAnswerIndex: 0, explanation: "Exactly — **`src`** is the address label telling the browser which `.js` file to fetch." }
  ]
};

// LESSON: Inline JavaScript
export const jsInlineJsContent: LessonContent = {
  heroTagline: "Quick JavaScript written directly inside an HTML tag",
  introduction: "Need a button to do something **right now**, in 10 seconds flat? **Inline JavaScript** is your shortcut: tiny code written directly inside an HTML attribute like `onclick` — no `<script>` tag needed.\n\nIt is the **sticky note** of JavaScript: perfect for quick experiments, terrible as a filing system. Great to know, dangerous to overuse.",
  definition: {
    term: "Inline JavaScript",
    explanation: "JavaScript written **directly inside an HTML event attribute** — like `onclick=\"alert('Hi')\"`. The code runs when that **event** fires on that element. Fast for demos, messy at scale."
  },
  whyItMatters: "Every pro started here — inline handlers are the **fastest way to see JavaScript actually do something**, which makes them perfect for your first experiments. Learn them, enjoy the instant gratification, then graduate to cleaner techniques.",
  realWorldAnalogy: {
    title: "The Sticky Note",
    story: "Inline JavaScript is a **sticky note** slapped on the fridge: instant, visible, gets the job done for one reminder. But try running your whole life on sticky notes and your kitchen becomes chaos. Same with code — one note is charming, five hundred is a disaster.",
    comparison: [
      { item: "onclick=\"...\"", meaning: "The sticky note — code stuck right on the element it controls." },
      { item: "Big projects", meaning: "The note-covered kitchen — time to move code into a proper file." }
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
      reason: "Quotes are like **brackets** — every opener needs a closer. Use **double quotes** for the attribute and **single quotes** inside, and they won't fight."
    }
  ],
  tryItYourself: {
    html: `<button onclick="document.getElementById('out').textContent = 'You clicked me!'">Click Me</button>\n<p id="out">Waiting...</p>`,
    js: `// inline code lives in the onclick attribute above`,
    instructions: "Click the button, then change the message inside onclick and run again."
  },
  takeaways: [
    "**Inline JavaScript** lives in event attributes like **`onclick`** — code on the element itself.",
    "It is the **fastest** way to test an idea or build a tiny demo.",
    "For bigger projects, move code into a **`<script>` block** or a **`.js` file** instead."
  ],
  quizQuestions: [
    { id: "js-inline-1", question: "Where does inline JavaScript live?", options: ["Inside an HTML element's event attribute", "In a separate .css file", "Inside the browser settings", "In the database"], correctAnswerIndex: 0, explanation: "Right — the code sits **inside the attribute** on the element itself, like a sticky note on the fridge." },
    { id: "js-inline-2", question: "What happens when you click <button onclick=\"alert('Hi')\">?", options: ["A pop-up shows 'Hi'", "The page reloads", "Nothing ever happens", "The button deletes itself"], correctAnswerIndex: 0, explanation: "Exactly — the `onclick` code **waits patiently** and runs the moment the button is clicked." }
  ]
};

// LESSON: Internal JavaScript
export const jsInternalJsContent: LessonContent = {
  heroTagline: "A <script> block inside your page keeps code tidy",
  introduction: "Ready to graduate from sticky notes? **Internal JavaScript** means writing all your code inside one **`<script>` block** in the HTML file — usually right before **`</body>`**.\n\nYour HTML keeps its job (structure), your JavaScript gets its **own room**, and the page becomes dramatically easier to read and fix.",
  definition: {
    term: "Internal JavaScript",
    explanation: "All your JavaScript living in a **`<script>` block** inside the same HTML file. Placing it at the **bottom of `<body>`** guarantees every element exists before the code runs."
  },
  whyItMatters: "This is the **sweet spot** for learning: your code is organized enough to grow, but everything still lives in **one file** you can open and understand. Most class projects and small sites live happily right here.",
  realWorldAnalogy: {
    title: "Their Own Room",
    story: "Inline code was a sticky note on the fridge. Internal JavaScript gives the code **its own bedroom** in the same house: it still lives with the HTML, but it has walls, a door, and space to grow. You can find things again — no more note-covered kitchen.",
    comparison: [
      { item: "Bottom of <body>", meaning: "The bedroom near the entrance — code 'wakes up' after all elements exist." },
      { item: "<head> placement", meaning: "Waking up before the house is built — getElementById finds nothing!" }
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
      reason: "A script in `<head>` runs **before** the body exists — like calling roll before students enter class. Move it to the bottom of `<body>` so the elements are there."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const user = "Ali";
document.getElementById("out").textContent = "Welcome, " + user + "!";`,
    instructions: "Change the user name and watch the greeting update."
  },
  takeaways: [
    "**Internal JavaScript** lives in a **`<script>` block** in the same file — code gets its own room.",
    "Put the block at the **bottom of `<body>`** so elements exist before your code runs.",
    "It keeps behavior **separate from markup** — much cleaner than inline handlers."
  ],
  quizQuestions: [
    { id: "js-internal-1", question: "Where should an internal <script> block usually go?", options: ["Just before the closing </body> tag", "Inside the <title> tag", "After the closing </html> tag", "Inside an image src"], correctAnswerIndex: 0, explanation: "Correct — at the bottom of `<body>`, every element **already exists**, so your code can grab them all." },
    { id: "js-internal-2", question: "What is internal JavaScript?", options: ["Code inside a <script> block in the same HTML file", "Code in a separate .js file", "Code written in the browser address bar", "Code inside a CSS file"], correctAnswerIndex: 0, explanation: "Right — **internal** means the code is **embedded** in the HTML file itself, in its own `<script>` room." }
  ]
};

// LESSON: External JavaScript
export const jsExternalJsContent: LessonContent = {
  heroTagline: "One .js file shared across your whole website",
  introduction: "Big websites have **dozens of pages** — and they all need the same menu code, the same login logic, the same cart. Copy-pasting that into every page would be madness.\n\n**External JavaScript** solves it beautifully: code lives in its **own `.js` file**, and every page links to it with **`<script src=\"app.js\">`**. Write once, fix once, use everywhere.",
  definition: {
    term: "External JavaScript file",
    explanation: "JavaScript stored in a **separate `.js` file** and linked into pages with **`<script src=\"app.js\">`**. The browser **downloads it once** and reuses it on every page — this is how professional sites are built."
  },
  whyItMatters: "This is the **professional standard** — and it comes with a free speed boost: browsers **cache** external files, so page 2, 3, and 50 load **faster**. Plus, one bug fix in `app.js` heals your entire site at once. That's leverage.",
  realWorldAnalogy: {
    title: "The Shared Kitchen",
    story: "Imagine an apartment building where every flat has its **own tiny kitchen** (internal scripts) — 50 stoves to maintain! Now imagine one **shared professional kitchen** every flat orders from (external file): one place to cook, one place to fix, and everyone eats faster. That is external JavaScript.",
    comparison: [
      { item: "One .js file", meaning: "The shared kitchen — every page 'orders' the same code." },
      { item: "Browser cache", meaning: "Leftovers saved — the browser reuses the file instead of re-downloading." }
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
      reason: "Remember the **either/or** rule: a `<script>` with `src` fetches the file and **ignores** anything typed inside the tags."
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
    "**External code** lives in a **`.js` file** linked with **`<script src=\"...\">`**.",
    "**One file** serves every page — write once, fix once, reuse everywhere.",
    "Browsers **cache** external files, making your whole site **faster**."
  ],
  quizQuestions: [
    { id: "js-external-1", question: "How do you attach an external file named main.js?", options: ["<script src=\"main.js\"></script>", "<script>main.js</script>", "<link href=\"main.js\">", "<style src=\"main.js\">"], correctAnswerIndex: 0, explanation: "Yes — **`src`** is the address label pointing the browser to your `.js` file." },
    { id: "js-external-2", question: "What is the main benefit of external JavaScript?", options: ["Reuse the same code on many pages", "It runs without a browser", "It hides code from users", "It makes CSS load faster"], correctAnswerIndex: 0, explanation: "Exactly — **one file, every page**. Fix a bug once and the whole site is healed." }
  ]
};

// LESSON: JavaScript Syntax
export const jsSyntaxContent: LessonContent = {
  heroTagline: "The grammar rules every JavaScript program follows",
  introduction: "Every language has **grammar** — and JavaScript's grammar is called **syntax**. Spell a keyword wrong, forget a bracket, misplace a quote, and the engine throws an error instead of running your code.\n\nHere is the good news: **almost every beginner bug is a syntax slip**, and syntax slips are the **easiest bugs to fix**. Learn the rules once, and you'll spot them in seconds.",
  definition: {
    term: "Syntax",
    explanation: "The **rulebook** for writing valid JavaScript: exact keyword spelling, **matched brackets** `()`, `{}`, `[]`, quoted text, and clear statement endings. Break a rule and the engine **refuses to run** the code — loudly telling you which rule broke."
  },
  whyItMatters: "Syntax errors are the **#1 beginner frustration** — but also the **fastest to fix** once you know the rules. This lesson pays for itself every single day you code, because you'll read error messages like a detective reading clues.",
  realWorldAnalogy: {
    title: "The Strict Grammar Teacher",
    story: "Write 'their going to the store' in an essay and your teacher circles it — the **meaning** is clear, but the **grammar** is wrong. JavaScript's engine is a **strict grammar teacher**: one misplaced bracket and it stops reading. The difference? It tells you the **exact line** of your mistake.",
    comparison: [
      { item: "Correct syntax", meaning: "Clean grammar — the engine reads smoothly, line after line." },
      { item: "Syntax error", meaning: "A red circle on your essay — the engine stops and points at the line." }
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
      reason: "`if` is picky: its condition **must** wear parentheses — `if (age > 18)`. Think of them as the condition's uniform."
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
    "**Syntax** is the rulebook: spelling, brackets, quotes, semicolons — get them right.",
    "**Conditions** go in parentheses `()`, **code blocks** go in braces `{}`.",
    "Most beginner errors are tiny **syntax slips** — and tiny slips are quick to fix."
  ],
  quizQuestions: [
    { id: "js-syntax-1", question: "Which line has correct syntax?", options: ["let age = 20;", "let age = ;", "let = 20 age;", "let age 20"], correctAnswerIndex: 0, explanation: "Right — keyword, name, `=`, value. Miss any piece and the **grammar** breaks." },
    { id: "js-syntax-2", question: "What is wrong with: if age > 18 { }", options: ["The condition needs parentheses", "The braces are wrong", "if must be capitalized", "Nothing is wrong"], correctAnswerIndex: 0, explanation: "Exactly — `if` demands its condition in **parentheses**. No parentheses, no deal." }
  ]
};

// LESSON: Comments
export const jsCommentsContent: LessonContent = {
  heroTagline: "Notes for humans that the engine politely ignores",
  introduction: "What if you could leave **notes** inside your code that JavaScript politely **ignores**? You can — they are called **comments**. Use `//` for one line, `/* */` for many.\n\nSix months from now, **future you** will open this code with zero memory of writing it. Comments are the **letter you write to that stranger**.",
  definition: {
    term: "Comment",
    explanation: "Human-readable **notes** embedded in code that the engine **skips entirely**. **Single-line** comments start with `//`; **multi-line** comments wrap in `/* */`. They explain the **why** behind the code — for humans, not machines."
  },
  whyItMatters: "Code without comments is a **mystery novel with the last chapter torn out**. In team projects, comments are how developers **talk to each other** through time. The 10 seconds you spend commenting today saves 30 minutes of head-scratching later.",
  realWorldAnalogy: {
    title: "Margin Notes in a Textbook",
    story: "Think of a **textbook**: the printed text is the code, and your **pencil notes in the margins** are the comments — 'this formula is used for X', 'tricky part, read twice'. The printer (engine) ignores your pencil; the next student (future you) treasures it.",
    comparison: [
      { item: "// single line", meaning: "A quick pencil note in the margin — one thought, one line." },
      { item: "/* multi-line */", meaning: "A sticky note covering a whole paragraph — longer explanations." }
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
      reason: "An unclosed `/*` is like an **open umbrella indoors** — it swallows everything after it. Always close with `*/`."
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
    "Use **`//`** for single-line comments and **`/* */`** for multi-line comments.",
    "Comments are **ignored by the engine** — they exist purely for humans.",
    "Explain the **why**, not just the what — 'why' is what future you forgets."
  ],
  quizQuestions: [
    { id: "js-comments-1", question: "Which is a valid single-line comment?", options: ["// hello", "<!-- hello -->", "# hello", "** hello"], correctAnswerIndex: 0, explanation: "Correct — **`//`** tells the engine 'ignore the rest of this line, it's for humans.'" },
    { id: "js-comments-2", question: "What does the engine do with comments?", options: ["Ignores them completely", "Runs them slowly", "Shows them to users", "Saves them to a file"], correctAnswerIndex: 0, explanation: "Right — comments are **invisible to the engine**. They are margin notes for readers only." }
  ]
};

// LESSON: Statements
export const jsStatementsContent: LessonContent = {
  heroTagline: "One instruction at a time, ending with a semicolon",
  introduction: "A program is just a **list of instructions** — and each single instruction is called a **statement**. `let score = 0;` is a statement. `console.log(score);` is a statement.\n\nThe engine reads them **one by one**, like a to-do list. Keep each statement on its **own line**, end it with a **semicolon**, and your to-do list stays crystal clear.",
  definition: {
    term: "Statement",
    explanation: "One **complete instruction** the engine executes — creating a variable, printing a value, calling a function. Statements are the **sentences** of JavaScript; programs are paragraphs built from them."
  },
  whyItMatters: "Every program you'll ever write is **built from statements** — master this tiny unit and the big picture gets easy. Clean, separated statements are also dramatically easier to **debug**: when something breaks, you know exactly which sentence is guilty.",
  realWorldAnalogy: {
    title: "The To-Do List",
    story: "A **statement** is one item on a to-do list: 'buy milk'. The **semicolon** is checking it off. Write 'buy milk buy eggs' on one line with no checkmarks and nobody knows where one task ends and the next begins — that is what missing semicolons feel like to the engine.",
    comparison: [
      { item: "One per line + ;", meaning: "A tidy checklist — each task separate and checkable." },
      { item: "Crammed together", meaning: "One long scribble — the engine has to guess where tasks split." }
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
      reason: "Two statements on one line without a semicolon is like **two to-do items scribbled as one** — the engine can't tell where the first ends. Separate them!"
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
    "A **statement** is one instruction the engine executes — one to-do item.",
    "Write **one statement per line** for readability.",
    "End statements with a **semicolon** to avoid nasty surprises."
  ],
  quizQuestions: [
    { id: "js-statements-1", question: "What is a JavaScript statement?", options: ["A single instruction the engine executes", "A question asked to the user", "A type of HTML tag", "A browser setting"], correctAnswerIndex: 0, explanation: "Exactly — `let x = 5;` is **one complete instruction**, one checked-off to-do item." },
    { id: "js-statements-2", question: "Which marks the end of a statement?", options: [";", ":", ".", ","], correctAnswerIndex: 0, explanation: "Right — the **semicolon** is the checkmark that says 'this instruction is done.'" }
  ]
};

// LESSON: Console
export const jsConsoleContent: LessonContent = {
  heroTagline: "Your detective's notebook for seeing what code really does",
  introduction: "How do you **see** what your code is actually doing? Meet the **console** — a hidden detective's panel in your browser (press **F12**). With **`console.log()`**, you can print any value there and spy on your code step by step.\n\nIt also shows **errors with exact line numbers**. When something breaks, the console is the **first place** every developer looks.",
  definition: {
    term: "Console",
    explanation: "The browser's **developer panel** (opened with **F12**) where `console.log()` **prints values** for inspection. It is part X-ray, part diary — showing what your code did and **where it failed**."
  },
  whyItMatters: "You **cannot fix what you cannot see**. Logging values reveals exactly what your variables hold at each step — turning 'why is this broken?!' into 'oh, the value is wrong on line 12'. This one tool will save you **hundreds of hours**.",
  realWorldAnalogy: {
    title: "The Detective's Notebook",
    story: "A **detective** doesn't guess — she collects evidence. `console.log()` is your evidence bag: drop a variable in, and the console shows you **exactly** what it contained at that moment. No guessing, no 'maybe' — just facts, line by line.",
    comparison: [
      { item: "console.log(x)", meaning: "Bagging the evidence — 'what was x right here, right now?'" },
      { item: "Red error text", meaning: "The detective's red flag — what broke and the exact line number." }
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
      reason: "`consol` doesn't exist — it's **`console`**, double-n, like 'console table'. One missing letter and JavaScript says 'who?'"
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
    "**`console.log()`** prints values so you can **inspect** your code's behavior like a detective.",
    "Open the console with **F12** or right-click → **Inspect** → **Console**.",
    "**Errors** appear in the console with the **exact line number** — read them first, panic never."
  ],
  quizQuestions: [
    { id: "js-console-1", question: "What does console.log(\"hi\") do?", options: ["Prints 'hi' to the browser console", "Shows 'hi' on the page", "Saves 'hi' to a file", "Deletes the page"], correctAnswerIndex: 0, explanation: "Correct — `console.log` sends the value to the **console panel**, not onto the visible page. It's a private diary, not a billboard." },
    { id: "js-console-2", question: "How do you open the console in most browsers?", options: ["Press F12", "Press Ctrl+P", "Click the address bar", "Restart the computer"], correctAnswerIndex: 0, explanation: "Right — **F12** (or right-click → Inspect → Console) opens the detective's office." }
  ]
};

// ============================================================
// MODULE 2: Variables and Data (unique lessons)
// ============================================================

// LESSON: let
export const jsLetContent: LessonContent = {
  heroTagline: "A variable that is allowed to change its value",
  introduction: "Some things in life **change** — your game score goes up, items get added to a cart, a timer counts down. For values that change, JavaScript gives you **`let`**.\n\nDeclare it **once** with `let`, then update it freely. `let` is your go-to for anything that **moves**.",
  definition: {
    term: "let keyword",
    explanation: "The keyword that creates a **reassignable variable** — a labeled box whose contents you can **swap later**. Declare once with `let score = 0;`, then update with plain `score = 10;` (no `let` the second time)."
  },
  whyItMatters: "Real programs are **full of changing values**: scores climb, totals grow, users type. Without `let`, you'd be stuck with frozen values — and frozen values can't build games, carts, or counters.",
  realWorldAnalogy: {
    title: "The Whiteboard",
    story: "`let` is a **whiteboard** with your name on it: you write a number, erase it, write a new one — the board stays yours, the content changes. (Its cousin `const` is a **carved stone tablet**: what you chisel first is final.)",
    comparison: [
      { item: "let score = 0", meaning: "Mounting the whiteboard and writing the first number." },
      { item: "score = 10", meaning: "Erasing and rewriting — no need to remount the board (no second let)." }
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
      reason: "Redeclaring is like **mounting a second whiteboard** with the same name — confusing! Just erase and rewrite: `x = 2`."
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
    "**`let`** creates a variable that **can be reassigned** — a whiteboard, not stone.",
    "Declare **once** with `let`; update later **without** it.",
    "You **cannot** declare the same `let` name twice in one scope — the engine will complain."
  ],
  quizQuestions: [
    { id: "js-let-1", question: "What does let allow that const does not?", options: ["Reassigning the variable later", "Storing text", "Using the variable", "Deleting the variable"], correctAnswerIndex: 0, explanation: "Exactly — **`let`** is the whiteboard (changeable), **`const`** is the stone tablet (locked)." },
    { id: "js-let-2", question: "What is wrong with: let x = 1; let x = 2; ?", options: ["Redeclaring x in the same scope", "Using numbers", "Missing semicolons", "Nothing is wrong"], correctAnswerIndex: 0, explanation: "Right — one whiteboard per name! To change the value, just **assign**: `x = 2`." }
  ]
};

// LESSON: const
export const jsConstContent: LessonContent = {
  heroTagline: "A variable locked to its first value forever",
  introduction: "Some values should **never** change — the tax rate, your app's name, an API key. For those, JavaScript gives you **`const`**: a variable **locked** to its first value forever.\n\nTry to reassign it and JavaScript doesn't just warn you — it throws a **TypeError** and stops. That strictness is a **feature**, not a bug.",
  definition: {
    term: "const keyword",
    explanation: "The keyword that creates a **permanent binding** — a labeled box **sealed** after the first value goes in. You must assign the value **on the same line** you declare it, and reassignment is **forbidden**."
  },
  whyItMatters: "Accidentally changing a value is one of the **sneakiest bug sources** in programming. `const` makes accidents **impossible** — the engine guards your value like a vault. Modern JavaScript uses `const` **by default** for exactly this reason.",
  realWorldAnalogy: {
    title: "The Sealed Envelope",
    story: "`const` is a **sealed envelope**: you write the letter, seal it, and it can be read forever — but never rewritten. If someone tries to sneak a new letter in, the seal **breaks loudly** (a TypeError). `let`, by contrast, is an open notebook.",
    comparison: [
      { item: "const TAX = 0.15", meaning: "Sealing the envelope — the tax rate is locked in." },
      { item: "TAX = 0.20", meaning: "Trying to reseal it — the engine refuses with a TypeError." }
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
      reason: "`const` with no value is a **sealed empty envelope** — pointless and illegal. Always assign when you declare: `const x = 5`."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const courseName = "JavaScript Basics";
document.getElementById("out").textContent = "Course: " + courseName;`,
    instructions: "Try adding courseName = \"Other\"; on the next line and see the error."
  },
  takeaways: [
    "**`const`** creates a variable that **cannot be reassigned** — sealed envelope, not notebook.",
    "Always assign its value **on the same line** you declare it.",
    "Use **`const` by default**; switch to `let` only when the value truly must change."
  ],
  quizQuestions: [
    { id: "js-const-1", question: "What happens with: const x = 5; x = 10; ?", options: ["TypeError: Assignment to constant variable", "x becomes 10", "x becomes 15", "Nothing happens"], correctAnswerIndex: 0, explanation: "Correct — reassigning a `const` throws a **TypeError**. The seal holds!" },
    { id: "js-const-2", question: "Which is correct?", options: ["const rate = 0.05;", "const rate;", "const = 0.05;", "constant rate = 0.05;"], correctAnswerIndex: 0, explanation: "Right — a `const` needs its value **immediately**, on the declaration line. No value, no deal." }
  ]
};

// LESSON: var
export const jsVarContent: LessonContent = {
  heroTagline: "The old way to declare variables — know it, don't use it",
  introduction: "Before 2015, there was only **`var`** — the original way to declare variables. It still works today, but it has **surprising rules** (like ignoring block boundaries) that cause real bugs.\n\nModern code uses **`let`** and **`const`** instead. So why learn `var`? Because you'll **meet it in the wild** — old tutorials, old codebases, Stack Overflow answers from 2012.",
  definition: {
    term: "var keyword",
    explanation: "The **legacy** variable keyword from JavaScript's early days. Unlike `let`, `var` is **function-scoped** (it leaks out of `if` blocks and loops) and allows **redeclaration** — two quirks that hide mistakes instead of catching them."
  },
  whyItMatters: "The internet is full of `var` — tutorials, legacy company code, copy-pasted snippets. Knowing how it behaves lets you **read old code confidently** and **rewrite it safely** with `let`/`const`. It's a history lesson that pays rent.",
  realWorldAnalogy: {
    title: "The Leaky Bucket",
    story: "`var` is a **leaky bucket**: pour water (declare a variable) inside an `if` block, and it **drips out** into the surrounding code where you didn't expect it. `let` and `const` are **sealed bottles** — the water stays exactly where you poured it.",
    comparison: [
      { item: "var (leaky)", meaning: "Water escapes the if-block — the variable is visible outside it. Surprise!" },
      { item: "let (sealed)", meaning: "Water stays in the block — the variable exists only where you defined it." }
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
      reason: "`var` **ignores block walls** — a `var` inside an `if` is visible after it. Switch to `let` and your variables stay where you put them."
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
    "**`var`** is the old keyword — **function-scoped**, not block-scoped (the leaky bucket).",
    "It allows **redeclaration**, which quietly hides mistakes.",
    "Always prefer **`let`** and **`const`** in modern code — know `var`, don't use it."
  ],
  quizQuestions: [
    { id: "js-var-1", question: "How does var differ from let in a block?", options: ["var leaks out of the block; let stays inside", "var is faster", "var cannot store numbers", "There is no difference"], correctAnswerIndex: 0, explanation: "Exactly — `var` **leaks out of blocks** (function scope), while `let` stays **inside** them (block scope)." },
    { id: "js-var-2", question: "Should you use var in new code?", options: ["No — use let or const", "Yes, always", "Only on Mondays", "Only for strings"], correctAnswerIndex: 0, explanation: "Right — `var` is **legacy**. `let` and `const` are safer, clearer, and modern." }
  ]
};

// LESSON: Variable Naming
export const jsVariableNamingContent: LessonContent = {
  heroTagline: "Good names make code read like plain English",
  introduction: "Quick quiz: which is clearer — `x` or `userAge`? Good names make code **read like plain English**; bad names turn it into a puzzle.\n\nJavaScript has a few **naming rules** (no leading digits, no hyphens, no reserved words) and one big **convention**: **camelCase** — `firstName`, `totalPrice`, `isLoggedIn`.",
  definition: {
    term: "Identifier",
    explanation: "The **rules and conventions** for naming variables: start with a **letter, `_`, or `$`**; use **camelCase** (`myScore`); make names **descriptive** (`userAge`, not `x`); and never use **reserved words** like `let` or `function`."
  },
  whyItMatters: "You will **read code 10x more** than you write it — your own code included, three months later. A name like `cartTotal` explains itself instantly; a name like `ct` forces every reader to play detective. Naming is a **superpower** disguised as a chore.",
  realWorldAnalogy: {
    title: "Labeling Boxes in a Warehouse",
    story: "Variables are **labeled boxes** in a warehouse. Label one '**kitchen knives**' and anyone can find it. Label it '**x**' and good luck. And just like warehouses ban certain labels, JavaScript bans **reserved words** — you can't label a box 'let', because the warehouse needs that word itself.",
    comparison: [
      { item: "totalPrice", meaning: "A clear label — anyone opening the box knows what's inside." },
      { item: "tp / x", meaning: "A mystery label — every future reader has to guess." }
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
      reason: "Hyphens are **banned** in names — the engine reads `user-name` as 'user **minus** name'. Use camelCase: `userName`."
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
    "Names start with a **letter, `_`, or `$`** — never a digit.",
    "Use **camelCase** and descriptive names: `totalPrice`, not `tp`.",
    "**Reserved words** like `let`, `const`, and `function` cannot be used as names."
  ],
  quizQuestions: [
    { id: "js-naming-1", question: "Which is a valid variable name?", options: ["userName", "user-name", "2users", "let"], correctAnswerIndex: 0, explanation: "Correct — **`userName`** is valid camelCase. Hyphens, leading digits, and reserved words are all rejected at the door." },
    { id: "js-naming-2", question: "Why use descriptive names like cartTotal?", options: ["Code reads clearly without guessing", "It runs faster", "The browser requires it", "It uses less memory"], correctAnswerIndex: 0, explanation: "Exactly — clear names make code **self-explanatory**. Your future self will thank you." }
  ]
};

// LESSON: Data Types
export const jsDataTypesContent: LessonContent = {
  heroTagline: "Text, numbers, true/false — the kinds of values JavaScript holds",
  introduction: "Every value in JavaScript has a **type** — a kind. Text is a **String**, all numbers are **Number**, yes/no answers are **Boolean**, and there are special empties: **Null** and **Undefined**.\n\nTypes matter because JavaScript treats each kind **differently**. Mix them carelessly — like adding a number to text — and you'll get **surprising results**.",
  definition: {
    term: "Data type",
    explanation: "The **categories of values** JavaScript understands: **String** (text), **Number** (all numbers), **Boolean** (`true`/`false`), **Null** (intentional empty), **Undefined** (never assigned), plus **Object** and **Array** for collections. The **`typeof`** operator reveals any value's type."
  },
  whyItMatters: "Most **weird bugs** come from type mix-ups — `\"5\" + 5` gives `\"55\"` (text!), not `10`. Knowing the types lets you **predict** what your code will actually do instead of being surprised by it.",
  realWorldAnalogy: {
    title: "The Ingredient Labels",
    story: "A kitchen labels every ingredient: **flour**, **sugar**, **salt**. Grab the wrong jar and the cake is ruined — sugar and salt look alike but behave differently. **Data types** are JavaScript's labels: text and numbers may look similar, but the engine **cooks them differently**.",
    comparison: [
      { item: "5 + 5", meaning: "Flour + flour — two numbers bake into 10." },
      { item: "\"5\" + 5", meaning: "A look-alike mix-up — text glues into \"55\". Convert first with Number()!" }
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
      reason: "Adding text and a number **glues them as text**. Convert first: `Number(\"5\") + 5` gives `10`."
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
    "JavaScript has **String**, **Number**, **Boolean**, **Null**, **Undefined**, **Object**, and **Array** types.",
    "**`typeof`** reveals any value's type — your ingredient-label reader.",
    "Mixing text and numbers with **`+`** joins them as text — convert with **`Number()`** first."
  ],
  quizQuestions: [
    { id: "js-datatypes-1", question: "What is typeof \"hello\"?", options: ["string", "number", "boolean", "undefined"], correctAnswerIndex: 0, explanation: "Right — text in quotes is always a **String**, no matter what it contains." },
    { id: "js-datatypes-2", question: "What is '5' + 5 in JavaScript?", options: ["'55' (text)", "10", "Error", "0"], correctAnswerIndex: 0, explanation: "Exactly — **`+`** with text **glues** instead of adding: `\"5\" + 5` becomes `\"55\"`." }
  ]
};

// LESSON: Strings
export const jsStringsContent: LessonContent = {
  heroTagline: "Text in quotes — names, messages, and sentences",
  introduction: "Names, messages, addresses, passwords — programs are **full of text**, and text in JavaScript is called a **string**. Wrap it in quotes: `'hello'`, `\"hello\"`, or backticks.\n\nStrings come with **superpowers**: join them with **`+`**, measure them with **`.length`** — and soon you'll slice, search, and transform them like a pro.",
  definition: {
    term: "String",
    explanation: "Text wrapped in **quotes** — single `'...'`, double `\"...\"`, or backticks. Strings store **words, sentences, and characters**, and offer handy tools like **`.length`** (how many characters) and **`+`** (joining two strings together)."
  },
  whyItMatters: "Almost **everything users see** is a string — usernames, product names, error messages, chat texts. If your app talks to humans (it does), you live in **string land**. Master them early.",
  realWorldAnalogy: {
    title: "Beads on a String",
    story: "A **string** is beads on a thread: each **character** is a bead, **`.length`** counts the beads, and **`+`** ties two necklaces together into one. An **apostrophe** inside single quotes? That's a bead shaped like scissors — it **cuts the thread early** unless you use double quotes.",
    comparison: [
      { item: "\"Hi\" + \"!\"", meaning: "Tying two necklaces together — one longer string: \"Hi!\"." },
      { item: "Apostrophes", meaning: "Scissor-beads need the right thread — double quotes handle them safely: \"It's\"." }
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
      reason: "An **apostrophe** inside single quotes cuts the string early — `'It's'` breaks! Wrap the text in **double quotes**: `\"It's\"`."
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
    "**Strings** are text wrapped in **single, double, or backtick** quotes.",
    "Join strings with the **`+`** operator — like tying necklaces together.",
    "**`.length`** tells you how many characters (beads) a string has."
  ],
  quizQuestions: [
    { id: "js-strings-1", question: "Which is a valid string?", options: ["\"hello\"", "hello", "(hello)", "{hello}"], correctAnswerIndex: 0, explanation: "Correct — **quotes** are what make text a string. No quotes, no string." },
    { id: "js-strings-2", question: "What is \"Hi\" + \"!\" ?", options: ["\"Hi!\"", "\"Hi !\"", "Error", "Hi"], correctAnswerIndex: 0, explanation: "Right — **`+`** ties them into one: `\"Hi\" + \"!\"` becomes `\"Hi!\"`." }
  ]
};

// LESSON: Numbers
export const jsNumbersContent: LessonContent = {
  heroTagline: "Math-ready values — integers, decimals, and calculations",
  introduction: "JavaScript keeps math **simple**: there is just **one** number type for everything — `42`, `3.14`, `-7`, all **Number**. Add, subtract, multiply, divide directly.\n\nBut beware one famous quirk: **`0.1 + 0.2`** is not exactly `0.3` — it's `0.30000000000000004`. Tiny, weird, and very real. You'll learn the fix.",
  definition: {
    term: "Number",
    explanation: "The single **Number** type covering **integers** (`42`) and **decimals** (`3.14`). All math operators (`+ - * / %`) work directly — but decimal math can have **tiny precision errors**, so money calculations use **`.toFixed(2)`**."
  },
  whyItMatters: "Prices, scores, distances, ages, ratings — **numbers run every calculation** your app makes. And money math with a precision bug can literally **cost money**. Knowing the quirks keeps your math honest.",
  realWorldAnalogy: {
    title: "The Slightly Wobbly Ruler",
    story: "JavaScript's numbers are like a **ruler that's perfect for whole inches** but wobbles a hair on fractions: measure `0.1 + 0.2` and you get `0.30000000000000004` instead of `0.3`. The wobble is **microscopic** — but for money, you straighten it with **`.toFixed(2)`**.",
    comparison: [
      { item: "7 / 2", meaning: "Clean division — JavaScript keeps decimals: 3.5, not 3." },
      { item: "0.1 + 0.2", meaning: "The wobble shows — 0.30000000000000004. Use toFixed(2) for money." }
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
      reason: "Decimal math **wobbles** by microscopic amounts. For money, straighten it: `(0.1 + 0.2).toFixed(2)` gives `\"0.30\"`."
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
    "JavaScript uses **one number type** for integers and decimals — beautifully simple.",
    "**`+ - * /`** work directly on numbers; division **keeps decimals**.",
    "Decimal math can have **tiny errors** — use **`.toFixed(2)`** for money."
  ],
  quizQuestions: [
    { id: "js-numbers-1", question: "What is typeof 42?", options: ["number", "string", "integer", "digit"], correctAnswerIndex: 0, explanation: "Correct — integers and decimals are all type **`number`**. One type, no fuss." },
    { id: "js-numbers-2", question: "What does 7 / 2 give?", options: ["3.5", "3", "4", "Error"], correctAnswerIndex: 0, explanation: "Right — JavaScript division keeps decimals: `7 / 2` is **`3.5`**." }
  ]
};

// LESSON: Booleans
export const jsBooleansContent: LessonContent = {
  heroTagline: "Just true or false — the language of decisions",
  introduction: "The simplest type in JavaScript holds just **two** possible values: **`true`** or **`false`**. That's it. No quotes, no decimals — just yes or no.\n\nDon't let the simplicity fool you: **every decision** your code makes — every login check, every 'is it done?' — runs on booleans.",
  definition: {
    term: "Boolean",
    explanation: "A value that is only ever **`true`** or **`false`** — the language of **decisions**. Comparisons like `age >= 18` **produce** booleans, and **`if` statements** consume them: the block runs only when the value is `true`."
  },
  whyItMatters: "Programs **decide constantly**: is the user logged in? Is the cart empty? Is the password strong? Booleans are how code answers **yes-or-no questions** — the tiny switches behind every smart behavior.",
  realWorldAnalogy: {
    title: "The Light Switch",
    story: "A **boolean** is a light switch: **ON** (`true`) or **OFF** (`false`) — nothing in between. Every `if` statement is just asking 'is the switch ON?' If yes, the room (code block) lights up. If no, it stays dark.",
    comparison: [
      { item: "isLoggedIn = true", meaning: "Switch ON — the dashboard lights up." },
      { item: "\"false\" (in quotes)", meaning: "A photo of a switch — it's text, not a real switch! Always truthy. Sneaky bug." }
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
      reason: "Quotes turn it into **text** — and the string `\"false\"` is actually **truthy** (non-empty text is always truthy)! Use real booleans: `true` / `false` with no quotes."
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
    "A **boolean** is only ever **`true`** or **`false`** — no quotes, ever.",
    "Comparisons like **`>=`** produce booleans.",
    "**`if` statements** run their block when the boolean is `true`."
  ],
  quizQuestions: [
    { id: "js-booleans-1", question: "What values can a boolean hold?", options: ["true or false", "Any number", "Any text", "true, false, or maybe"], correctAnswerIndex: 0, explanation: "Correct — booleans have **exactly two** values: `true` and `false`. That's the whole type." },
    { id: "js-booleans-2", question: "What is the value of 10 > 5?", options: ["true", "false", "\"true\"", "10"], correctAnswerIndex: 0, explanation: "Right — `10 > 5` asks a yes/no question, and the answer is the boolean **`true`**." }
  ]
};

// LESSON: Null
export const jsNullContent: LessonContent = {
  heroTagline: "An intentional empty — 'nothing here, on purpose'",
  introduction: "**`null`** means 'no value — **deliberately**'. It's the programmer saying: 'this box exists, and I **emptied it on purpose**.'\n\nThink of logging out: the app doesn't delete your `currentUser` variable — it sets it to **`null`**, announcing 'nobody is logged in, and that's intentional.'",
  definition: {
    term: "null",
    explanation: "A special value meaning **'nothing here, on purpose'** — assigned **deliberately** by the programmer. It differs from **`undefined`** ('never filled in'): `null` is an **emptied box**, `undefined` is a box that was **never filled**."
  },
  whyItMatters: "Real apps constantly distinguish '**user chose nothing**' from '**we never asked**'. Forms, logouts, and resets use `null` for 'cleared'. Getting this right means your code **handles empty states gracefully** instead of crashing.",
  realWorldAnalogy: {
    title: "The Emptied Jar",
    story: "`null` is a **jar you deliberately emptied** and put back on the shelf — the jar exists, it's just intentionally empty. `undefined` is a **jar that was never filled** — maybe you forgot. Same shelf, very different stories — and your code needs to tell them apart.",
    comparison: [
      { item: "user = null", meaning: "The emptied jar — 'logged out on purpose'." },
      { item: "let user;", meaning: "The never-filled jar — 'we never got around to it' (undefined)." }
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
      reason: "You **can't read properties of `null`** — it's an empty jar, there's nothing to open! Check first: `if (user !== null)`."
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
    "**`null`** means 'no value, **on purpose**' — you assign it yourself.",
    "It differs from **`undefined`** ('never assigned') — emptied jar vs never-filled jar.",
    "Always **check for `null`** before reading properties — or the engine throws."
  ],
  quizQuestions: [
    { id: "js-null-1", question: "What does null represent?", options: ["Intentional absence of a value", "The number zero", "An error", "Empty text"], correctAnswerIndex: 0, explanation: "Correct — `null` is **deliberate emptiness**. The programmer emptied the jar on purpose." },
    { id: "js-null-2", question: "How is null different from undefined?", options: ["null is assigned on purpose; undefined means never assigned", "They are identical", "null is a number", "undefined is intentional"], correctAnswerIndex: 0, explanation: "Right — **`null`** = emptied deliberately; **`undefined`** = never given a value. Two different stories!" }
  ]
};

// LESSON: Undefined
export const jsUndefinedContent: LessonContent = {
  heroTagline: "'Never given a value' — JavaScript's default empty",
  introduction: "**`undefined`** is JavaScript waving a **red flag**: 'you expected a value here, but there is **none**.' It appears when a variable was **declared but never assigned**, or when you **misspell** a name.\n\nBeginners fear it. Pros **read** it — because `undefined` almost always tells you exactly what went wrong.",
  definition: {
    term: "undefined",
    explanation: "The **automatic** 'no value yet' that JavaScript assigns to **declared-but-unassigned** variables, **missing function arguments**, and **nonexistent properties**. Seeing it usually means a **forgotten assignment** or a **typo**."
  },
  whyItMatters: "`undefined` is JavaScript's **built-in debugging hint**. Instead of panicking, learn to ask: 'did I forget to assign this, or did I **misspell** the name?' That one question resolves most `undefined` mysteries in seconds.",
  realWorldAnalogy: {
    title: "The Unfilled Form",
    story: "`undefined` is a **form field left blank**: the form (variable) exists, the field is there — but nobody wrote anything in it yet. When code reads a blank field expecting an answer, JavaScript shrugs: `undefined`. Usually it means you **forgot to fill it** or grabbed the **wrong form** (typo).",
    comparison: [
      { item: "let score;", meaning: "The blank field — declared, never filled. Reading it gives undefined." },
      { item: "user.nam", meaning: "Grabbing the wrong form — 'nam' doesn't exist, so: undefined. Check spelling!" }
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
      reason: "A **misspelled** variable name doesn't always error — it may just give `undefined` instead. When you see it, **check your spelling first**."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let mystery;
document.getElementById("out").textContent = "Value: " + mystery + " (" + typeof mystery + ")";`,
    instructions: "Assign mystery a value and watch undefined disappear."
  },
  takeaways: [
    "**`undefined`** means '**declared but never assigned** a value' — the blank field.",
    "It also appears for **missing function arguments** and **nonexistent properties**.",
    "Seeing `undefined` usually means a **forgotten assignment** or a **typo** — check both."
  ],
  quizQuestions: [
    { id: "js-undefined-1", question: "What is the value of: let x; ?", options: ["undefined", "null", "0", "\"\""], correctAnswerIndex: 0, explanation: "Correct — declared without assignment, `x` is automatically **`undefined`**. Blank field!" },
    { id: "js-undefined-2", question: "What is typeof undefined?", options: ["\"undefined\"", "\"null\"", "\"empty\"", "\"void\""], correctAnswerIndex: 0, explanation: "Right — `typeof undefined` returns the string **`\"undefined\"`**. Yes, the type of 'no value' is literally called 'undefined'." }
  ]
};

// LESSON: Objects (intro)
export const jsObjectsIntroContent: LessonContent = {
  heroTagline: "One variable that holds many labeled values",
  introduction: "A person isn't **one** value — they have a **name**, an **age**, a **city**. Storing those in three loose variables gets chaotic fast.\n\n**Objects** bundle related data under **one name** using `key: value` pairs inside **`{ }`**. One variable, many labeled values — beautifully organized.",
  definition: {
    term: "Object",
    explanation: "A **container** that groups related data as **`key: value` pairs** inside curly braces `{ }`. Read values with **dot notation** (`person.name`), update them the same way (`person.age = 26`), and separate pairs with **commas**."
  },
  whyItMatters: "Real data comes in **bundles** — a user, a product, an order, a game character. Objects keep each bundle **together**, so your code mirrors the real world instead of scattering it across fifty loose variables.",
  realWorldAnalogy: {
    title: "The Filing Cabinet",
    story: "Loose variables are **papers scattered on a desk**. An **object** is a **labeled filing cabinet**: one drawer marked `name`, one marked `age`, one marked `city` — all inside the cabinet called `person`. Need the age? Open the cabinet, pull the `age` drawer: `person.age`.",
    comparison: [
      { item: "person.name", meaning: "Opening the 'name' drawer of the person cabinet." },
      { item: "{ name: \"Sara\" }", meaning: "A cabinet with one labeled drawer — key: value, separated by commas." }
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
      reason: "Object properties use a **colon** (`name: \"Sara\"`), not `=`. The `=` sign is for variables; `:` is for object drawers."
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
    "**Objects** store related values as **`key: value`** pairs inside **`{ }`** — a filing cabinet.",
    "Read and update properties with **dot notation**: `person.name`.",
    "Properties use **colons** (`name: \"Sara\"`) and are separated by **commas** — not `=`."
  ],
  quizQuestions: [
    { id: "js-objectsintro-1", question: "How do you read the name property of person?", options: ["person.name", "person[name]", "name.person", "person->name"], correctAnswerIndex: 0, explanation: "Correct — **dot notation** `person.name` opens the 'name' drawer directly." },
    { id: "js-objectsintro-2", question: "Which is a valid object?", options: ["{ name: \"Sara\", age: 25 }", "{ name = \"Sara\" }", "[ name: \"Sara\" ]", "( name: \"Sara\" )"], correctAnswerIndex: 0, explanation: "Right — objects use **curly braces** with `key: value` pairs. Square brackets are for arrays!" }
  ]
};

// LESSON: Arrays (intro)
export const jsArraysIntroContent: LessonContent = {
  heroTagline: "An ordered list that keeps many values in one place",
  introduction: "A shopping cart holds **many** items. A class has **many** students. When you need an **ordered list** of values, JavaScript gives you **arrays** — one variable holding many values inside **`[ ]`**.\n\nEach item gets a **position number** (an **index**) starting at **0**. And with methods like **`push`** and **`pop`**, arrays grow and shrink as your app lives.",
  definition: {
    term: "Array",
    explanation: "An **ordered collection** of values inside square brackets `[ ]`. Items sit at numbered **positions** starting at **0** (`fruits[0]` is the first), and **`.length`** tells you how many items there are."
  },
  whyItMatters: "**Lists are everywhere**: products, messages, search results, playlist songs. Arrays — plus their methods (`push`, `pop`, `map`) — are the **backbone of real apps**. Master lists and you can build feeds, carts, and chats.",
  realWorldAnalogy: {
    title: "The Numbered Train",
    story: "An **array** is a **train with numbered cars**: car `0`, car `1`, car `2`. Want the second passenger? Check car `1` (arrays start counting at **0**!). **`.length`** counts the cars. **`push()`** attaches a new car at the end; **`pop()`** detaches the last one.",
    comparison: [
      { item: "fruits[1]", meaning: "Peeking into car 1 — the SECOND item (counting starts at 0!)." },
      { item: "fruits.length", meaning: "Counting the cars — how many items are on the train." }
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
      reason: "Indexes start at **0**, so the last index is always **`length - 1`** — not `length`. `arr[arr.length]` is an empty car: `undefined`."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const colors = ["red", "green", "blue"];
document.getElementById("out").textContent = "First: " + colors[0] + ", count: " + colors.length;`,
    instructions: "Add a fourth color and display the last item."
  },
  takeaways: [
    "**Arrays** hold **ordered lists** inside **`[ ]`** — a numbered train.",
    "**Indexes start at 0** — the first item is `arr[0]`, the last is `arr[arr.length - 1]`.",
    "**`.length`** tells you how many items the array holds."
  ],
  quizQuestions: [
    { id: "js-arraysintro-1", question: "What is [\"a\", \"b\", \"c\"][1]?", options: ["\"b\"", "\"a\"", "\"c\"", "1"], correctAnswerIndex: 0, explanation: "Correct — index `1` is the **second** car: `\"b\"`. (Counting starts at 0!)" },
    { id: "js-arraysintro-2", question: "What does [10, 20, 30].length return?", options: ["3", "30", "2", "0"], correctAnswerIndex: 0, explanation: "Right — **`.length`** counts the cars: three items." }
  ]
};
