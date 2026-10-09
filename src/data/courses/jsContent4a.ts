import { LessonContent } from '../../types';

// ============================================================
// MODULE 6: Functions (unique lessons)
// ============================================================

// LESSON: What is a Function?
export const jsFunctionsWhatContent: LessonContent = {
  heroTagline: "A reusable machine: feed it input, get a result",
  introduction: "Imagine rebuilding your coffee machine **every morning** before brewing. Absurd — right? Yet that's what code without **functions** looks like: the same steps copied everywhere.\n\nA **function** is a named block of code that does **one job**. Define it **once**, run it **whenever** — like a recipe you write once and cook a hundred times.",
  definition: {
    term: "Function",
    explanation: "A **reusable, named unit of code** that performs one task. You **define** it with the `function` keyword (building the machine) and **execute** it by calling its name with **parentheses** (pressing the button)."
  },
  whyItMatters: "Without functions, programs become **long, unrepeatable scripts** — copy-pasted logic everywhere, and one bug fix means editing 50 places. Functions let you **name an idea once** (`calculateTax`) and reuse it everywhere.",
  realWorldAnalogy: {
    title: "The Coffee Machine",
    story: "A **coffee machine**: you build it **once** (define), then press the button **whenever** you want coffee (call). Each press runs the whole internal process — grind, brew, pour — and delivers the result. You'd never rebuild the machine per cup; that's exactly why **functions** exist.",
    comparison: [
      { item: "Defining", meaning: "Building the coffee machine — wiring it up once." },
      { item: "Calling", meaning: "Pressing the button — fresh coffee every time, zero rebuilding." }
    ]
  },
  syntaxStructure: `function sayHello() {
  console.log("Hello!");
}
sayHello(); // calling runs the block`,
  codeExample: `function showWelcome() {
  console.log("Welcome to Coding Vibes!");
}

showWelcome();
showWelcome(); // reuse — no rewriting`,
  codeAnnotations: [
    { lineOrToken: "function showWelcome() {", description: "Defines the function — nothing runs yet." },
    { lineOrToken: "showWelcome();", description: "Calling executes the block. Twice = two greetings." }
  ],
  commonMistakes: [
    {
      wrong: "function sayHello() { console.log('hi'); }  // defined but never called — silent",
      correct: "sayHello();  // call it to run",
      reason: "**Defining** a function does nothing by itself — it's just building the machine. You must **call** it (`makeCoffee()`) to get coffee!"
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `function cheer() {
  document.getElementById("out").textContent += "Go! ";
}
cheer();
cheer();
cheer();`,
    instructions: "Call cheer() two more times and re-run."
  },
  takeaways: [
    "A **function** is a named, **reusable** block of code — write once, run anywhere.",
    "**Defining** creates it; **calling** with `()` runs it.",
    "Functions **remove repetition** — the coffee machine you build once."
  ],
  quizQuestions: [
    { id: "js-funcwhat-1", question: "What happens when you only define a function?", options: ["Nothing runs until you call it", "It runs immediately", "It causes an error", "It deletes itself"], correctAnswerIndex: 0, explanation: "Correct — **definition stores** the code; the **call executes** it. Build vs brew." },
    { id: "js-funcwhat-2", question: "How do you run a function named greet?", options: ["greet()", "greet", "run greet", "call.greet"], correctAnswerIndex: 0, explanation: "Right — **parentheses** after the name invoke the function. That's the button press." }
  ]
};

// LESSON: Creating Functions
export const jsCreatingFunctionsContent: LessonContent = {
  heroTagline: "Three ways to build a function",
  introduction: "JavaScript offers **three** creation styles: **function declarations** (`function name() {}`), **function expressions** (`const name = function() {}`), and **arrow functions** (`const name = () => {}`).\n\nAll create callable functions — with **small but important** differences in when they're available.",
  definition: {
    term: "Function declaration vs expression",
    explanation: "The **three creation styles**: a **declaration** (`function add() {}`) is **hoisted** — callable before its line. An **expression** (`const add = function() {}`) assigns a function to a variable and runs only **after** that line. **Arrows** are the shortest form."
  },
  whyItMatters: "You will read **all three styles** in real code — tutorials, libraries, teammates' work. Knowing each lets you **read any codebase** and pick the right style for the job.",
  realWorldAnalogy: {
    title: "Three Ways to Get Pizza",
    story: "**Three ways to get pizza**: a named **pizzeria** (declaration — established, known early), a **food truck** parked at a spot (expression — exists once it arrives at its line), a **slice window** (arrow — quick and minimal). All serve pizza; they just **open** differently.",
    comparison: [
      { item: "Declaration", meaning: "The pizzeria — known by name, open early (hoisted)." },
      { item: "Expression", meaning: "The food truck — exists only once parked at its line." },
      { item: "Arrow", meaning: "The slice window — short and fast for small jobs." }
    ]
  },
  syntaxStructure: `function add1(a, b) { return a + b; }      // declaration
const add2 = function(a, b) { return a + b; }; // expression
const add3 = (a, b) => a + b;                  // arrow`,
  codeExample: `// 1. Declaration — hoisted
function double(n) { return n * 2; }

// 2. Expression — stored in a variable
const triple = function(n) { return n * 3; };

// 3. Arrow — compact
const quadruple = n => n * 4;

console.log(double(5), triple(5), quadruple(5)); // 10 15 20`,
  codeAnnotations: [
    { lineOrToken: "function double(n) { return n * 2; }", description: "Classic named function, usable before its line." },
    { lineOrToken: "const quadruple = n => n * 4;", description: "Arrow: no braces or return needed for one expression." }
  ],
  commonMistakes: [
    {
      wrong: "triple(5);\nconst triple = function(n) { return n * 3; };  // TypeError",
      correct: "Define the expression first, then call it.",
      reason: "**Function expressions are NOT hoisted** like declarations! Calling one before its line throws an error — the food truck hasn't parked yet."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `function square(n) { return n * n; }
const cube = n => n * n * n;
document.getElementById("out").textContent =
  "square(4)=" + square(4) + ", cube(3)=" + cube(3);`,
    instructions: "Add an arrow function that returns n * 5."
  },
  takeaways: [
    "**Declarations hoist**; expressions and arrows **do not**.",
    "**Expressions** store functions in variables.",
    "**Arrows** are the shortest form for small functions."
  ],
  quizQuestions: [
    { id: "js-funccreate-1", question: "Which can be called before its definition line?", options: ["Function declaration", "Function expression", "Arrow function", "None"], correctAnswerIndex: 0, explanation: "Correct — **declarations hoist** to the top of their scope. The pizzeria opens early." },
    { id: "js-funccreate-2", question: "What is const f = (a) => a * 2; ?", options: ["An arrow function", "A declaration", "A loop", "A class"], correctAnswerIndex: 0, explanation: "Right — the **`=>`** syntax defines an arrow function. The slice window." }
  ]
};

// LESSON: Calling Functions
export const jsCallingFunctionsContent: LessonContent = {
  heroTagline: "Parentheses make it happen — how invocation works",
  introduction: "**Defining** a function does nothing — it's just building the machine. **Calling** it is pressing the button: `greet()`.\n\nThe engine **jumps into** the function body, runs every line, then returns to the line **after** the call. Arguments go inside the parentheses.",
  definition: {
    term: "Function call (invocation)",
    explanation: "**Executing a function** by writing its name with **parentheses**: `greet()`. The engine **jumps into** the function body, runs it, then **returns** to the line after the call. Arguments go **inside** the parentheses; the call evaluates to the **return value**."
  },
  whyItMatters: "Programs are **conversations between functions**. Calling correctly — right name, right arguments, right order — is **how the pieces connect**. Get this fluent and programs start clicking together.",
  realWorldAnalogy: {
    title: "Ordering at the Counter",
    story: "**Ordering at a counter**: you say the dish name plus your choices — `orderPizza('large')` — the kitchen cooks, and the plate comes back. The **name + parentheses** is the order; the **arguments** are your choices; the **return value** is the plate.",
    comparison: [
      { item: "orderPizza('large')", meaning: "Placing the order — dish name plus your choices (arguments)." },
      { item: "The returned pizza", meaning: "What the call gives back to you (the return value)." }
    ]
  },
  syntaxStructure: `greet();            // no arguments
greet("Sara");     // one argument
const r = add(2, 3); // call used in an expression`,
  codeExample: `function multiply(a, b) {
  return a * b;
}

const result1 = multiply(4, 5);
const result2 = multiply(10, 10);
console.log(result1); // 20
console.log(result2); // 100`,
  codeAnnotations: [
    { lineOrToken: "multiply(4, 5)", description: "Calls with arguments 4 and 5 — the call becomes 20." },
    { lineOrToken: "const result1 = ...", description: "The return value is stored for later use." }
  ],
  commonMistakes: [
    {
      wrong: "const f = multiply;  // no () — f is the function itself!",
      correct: "const r = multiply(4, 5);  // r is 20",
      reason: "Without parentheses you only **reference** the function — like pointing at the machine. **With** parentheses you **run** it: `greet` vs `greet()`."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `function add(a, b) {
  return a + b;
}
document.getElementById("out").textContent =
  "2+3=" + add(2, 3) + ", 10+20=" + add(10, 20);`,
    instructions: "Call add() with your own numbers."
  },
  takeaways: [
    "**`name()`** runs the function; **`name`** alone just references it.",
    "**Arguments** go inside the parentheses.",
    "A call **evaluates to** whatever the function returns."
  ],
  quizQuestions: [
    { id: "js-funccall-1", question: "What is the difference between greet and greet()?", options: ["greet() runs it; greet only references it", "No difference", "greet() deletes it", "greet runs it"], correctAnswerIndex: 0, explanation: "Correct — **parentheses invoke** the function. No parentheses, no execution." },
    { id: "js-funccall-2", question: "Where do arguments go?", options: ["Inside the parentheses", "After a semicolon", "Inside the function name", "In comments"], correctAnswerIndex: 0, explanation: "Right — **arguments** are passed **inside** the call's parentheses." }
  ]
};

// LESSON: Parameters
export const jsParametersContent: LessonContent = {
  heroTagline: "Named slots that receive values when called",
  introduction: "**Parameters** are the named placeholders in a function's definition: `function greet(name)`.\n\nThey act as **local variables** that get filled when the function is called. One `greet(name)` works for Sara, Ali, and a million users — instead of a separate function per person.",
  definition: {
    term: "Parameter",
    explanation: "**Named placeholders** listed in a function's **definition**: `function greet(name)`. They act as **local variables** that get filled with argument values when the function is **called** — making one function work for infinite inputs."
  },
  whyItMatters: "Parameters turn **fixed scripts into flexible tools**: one `greet(name)` works for Sara, Ali, and a million users. Without them, you'd need a **separate function per person** — madness.",
  realWorldAnalogy: {
    title: "The Blank Form",
    story: "A **form with blank fields**: the form (function) defines the **fields** (parameters); each submitted form (call) **fills them in** with values. Same form, endless different submissions — that's the power of parameters.",
    comparison: [
      { item: "function greet(name)", meaning: "The blank form — with a 'name' field waiting." },
      { item: "greet(\"Sara\")", meaning: "A filled form — the name field now contains Sara." }
    ]
  },
  syntaxStructure: `function greet(name, time) { // two parameters
  console.log("Good " + time + ", " + name);
}`,
  codeExample: `function introduce(name, city) {
  return "Hi, I'm " + name + " from " + city + ".";
}

console.log(introduce("Sara", "Lahore"));
console.log(introduce("Ali", "Karachi"));`,
  codeAnnotations: [
    { lineOrToken: "function introduce(name, city) {", description: "Declares two parameter slots." },
    { lineOrToken: 'introduce("Sara", "Lahore")', description: "Fills the slots: name='Sara', city='Lahore'." }
  ],
  commonMistakes: [
    {
      wrong: "function add(a, b) { return a + b; }\nadd(5);  // NaN — b is undefined",
      correct: "add(5, 10);  // always pass every parameter",
      reason: "**Missing arguments** arrive as **`undefined`** — and math with `undefined` gives `NaN` (Not a Number). Either always pass the argument or add a default."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `function welcome(name, course) {
  return "Welcome " + name + " to " + course + "!";
}
document.getElementById("out").textContent = welcome("Ali", "JavaScript");`,
    instructions: "Call welcome() with your name and a different course."
  },
  takeaways: [
    "**Parameters** are placeholders in the **function definition**.",
    "They behave like **local variables** inside the function.",
    "**Missing arguments** arrive as `undefined`."
  ],
  quizQuestions: [
    { id: "js-params-1", question: "In function add(a, b), what are a and b?", options: ["Parameters", "Arguments", "Variables outside", "Return values"], correctAnswerIndex: 0, explanation: "Correct — names in the **definition** are parameters. The blank fields." },
    { id: "js-params-2", question: "What value does a missing argument get?", options: ["undefined", "0", "null", "Error"], correctAnswerIndex: 0, explanation: "Right — **unfilled** parameters default to `undefined`. Blank field, blank value." }
  ]
};

// LESSON: Arguments
export const jsArgumentsContent: LessonContent = {
  heroTagline: "The actual values you hand to a function",
  introduction: "**Parameters** are the labeled jars; **arguments** are what you actually pour in. In `greet('Sara')`, `'Sara'` is the argument filling the `name` parameter.\n\nThey match **by position**: first argument → first parameter. Mix up the order, and you get the salt in the sugar jar.",
  definition: {
    term: "Argument",
    explanation: "The **concrete values** supplied in a **function call**: in `greet('Sara')`, `'Sara'` is the argument. Arguments are **matched to parameters by position** — first to first, second to second."
  },
  whyItMatters: "Mixing up argument order is a **classic bug**: `createUser(email, name)` vs `createUser(name, email)` silently corrupts data. Knowing the position-mapping keeps your calls correct.",
  realWorldAnalogy: {
    title: "The Labeled Jars",
    story: "**Labeled jars** on a shelf: the first jar says **sugar**, the second says **salt**. Pour in the wrong order and the cake is ruined. **Arguments** fill **parameters by position** — first argument → first parameter — so order isn't a suggestion, it's the recipe.",
    comparison: [
      { item: "Parameters", meaning: "The labeled jars on the shelf — sugar jar, salt jar." },
      { item: "Arguments", meaning: "What you actually pour into each jar — order matters, or the cake tastes wrong!" }
    ]
  },
  syntaxStructure: `function greet(name, time) { /* ... */ }
greet("Sara", "morning"); // arguments fill parameters in order`,
  codeExample: `function describeCar(brand, year) {
  return brand + " (" + year + ")";
}

console.log(describeCar("Toyota", 2022)); // Toyota (2022)
console.log(describeCar(2022, "Toyota")); // 2022 (Toyota) — wrong order!`,
  codeAnnotations: [
    { lineOrToken: 'describeCar("Toyota", 2022)', description: "Correct order: brand first, year second." },
    { lineOrToken: 'describeCar(2022, "Toyota")', description: "Swapped — the output reads wrong." }
  ],
  commonMistakes: [
    {
      wrong: "login(password, username);  // swapped!",
      correct: "login(username, password);",
      reason: "Arguments map by **position**, not by name! `createUser(email, name)` vs `createUser(name, email)` are completely different calls. Match the definition's order."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `function orderSummary(item, qty) {
  return qty + " x " + item;
}
document.getElementById("out").textContent = orderSummary("Book", 3);`,
    instructions: "Swap the arguments and see the silly result."
  },
  takeaways: [
    "**Arguments** are the actual values in a **call**.",
    "They fill parameters **by position** — order matters!",
    "**Parameters** are the names; **arguments** are the values."
  ],
  quizQuestions: [
    { id: "js-args-1", question: "In greet(\"Sara\"), what is \"Sara\"?", options: ["An argument", "A parameter", "A return value", "A variable"], correctAnswerIndex: 0, explanation: "Correct — values in the **call** are arguments. The actual ingredients poured in." },
    { id: "js-args-2", question: "How do arguments match parameters?", options: ["By position, in order", "By name", "Randomly", "By type"], correctAnswerIndex: 0, explanation: "Right — **first argument → first parameter**, and so on. Position is everything." }
  ]
};

// LESSON: Return Values
export const jsReturnValuesContent: LessonContent = {
  heroTagline: "Sending an answer back to the caller",
  introduction: "A function that calculates but **keeps the answer to itself** is useless. **`return`** sends a value **back** to the caller — and stops the function immediately.\n\nWithout `return`, a function gives back **`undefined`**. With it, functions can **feed each other**: calculate, then format, then display.",
  definition: {
    term: "return statement",
    explanation: "**`return`** ends a function **immediately** and **passes a value back** to the caller. Code after `return` **never runs**. Without `return`, a function gives back **`undefined`** — the blank display."
  },
  whyItMatters: "Return values let functions **feed each other**: calculate total → format it → display it. This **chaining** is how real programs are built — small functions passing results along like a relay team.",
  realWorldAnalogy: {
    title: "The Calculator's = Button",
    story: "A **calculator**: you type `2 + 3`, press **`=`**, and the display shows `6`. That `=` is **`return`** — it **sends the answer back** to whoever asked. Without it, the calculator did the work but the display stays **blank** (`undefined`).",
    comparison: [
      { item: "return 6", meaning: "The display showing the answer — handed back to you." },
      { item: "No return", meaning: "Pressing buttons with a blank display — lots of work, nothing comes back." }
    ]
  },
  syntaxStructure: `function add(a, b) {
  return a + b; // sends the sum back
}
const sum = add(2, 3); // sum is 5`,
  codeExample: `function isAdult(age) {
  return age >= 18;
}

const check1 = isAdult(20); // true
const check2 = isAdult(15); // false
console.log(check1, check2);`,
  codeAnnotations: [
    { lineOrToken: "return age >= 18;", description: "Evaluates the comparison and sends true/false back." },
    { lineOrToken: "const check1 = isAdult(20);", description: "The call becomes its return value: true." }
  ],
  commonMistakes: [
    {
      wrong: "function add(a, b) {\n  console.log(a + b);  // prints, but returns undefined\n}\nconst x = add(2, 3); // x is undefined!",
      correct: "Use return a + b; when the caller needs the value.",
      reason: "**`console.log` shows YOU the value; only `return` gives it to the CALLER.** Logging is for your eyes; returning is for the program. Don't confuse the two!"
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `function square(n) {
  return n * n;
}
const result = square(7);
document.getElementById("out").textContent = "7 squared = " + result;`,
    instructions: "Use square() inside another calculation: square(3) + square(4)."
  },
  takeaways: [
    "**`return`** sends a value back **and ends** the function.",
    "Code **after** `return` never executes.",
    "Without `return`, a function gives back **`undefined`**."
  ],
  quizQuestions: [
    { id: "js-return-1", question: "What does a function give back with no return?", options: ["undefined", "0", "null", "An error"], correctAnswerIndex: 0, explanation: "Correct — functions without `return` evaluate to **`undefined`**. Blank display!" },
    { id: "js-return-2", question: "What happens to code after return?", options: ["It never runs", "It runs twice", "It runs first", "It causes an error"], correctAnswerIndex: 0, explanation: "Right — `return` **exits the function immediately**. Nothing after it runs." }
  ]
};

// LESSON: Default Parameters
export const jsDefaultParametersContent: LessonContent = {
  heroTagline: "Backup values when the caller skips an argument",
  introduction: "What if the caller **forgets** an argument? Without protection, the parameter becomes **`undefined`** — and your math or text breaks.\n\n**Default parameters** give a **fallback**: `function greet(name = 'Guest')`. No argument? No problem — the default steps in.",
  definition: {
    term: "Default parameter",
    explanation: "A **parameter with a fallback value** in the definition: `function greet(name = 'Guest')`. The default applies **only** when the argument is **missing** or explicitly **`undefined`** — a passed value (even `null`!) wins."
  },
  whyItMatters: "Defaults make functions **friendly**: `greet()` still works, settings merge cleanly, and `undefined` never crashes your math or text. It's **defensive programming** in one tiny syntax.",
  realWorldAnalogy: {
    title: "The Chef's Choice Fallback",
    story: "A restaurant's **'chef's choice'** fallback: order without choosing, and the kitchen serves the **default dish** — never an empty plate. **Default parameters** work the same: `function greet(name = 'Guest')` serves `'Guest'` whenever the caller passes **nothing**.",
    comparison: [
      { item: "name = 'Guest'", meaning: "The chef's-choice dish — printed right on the menu." },
      { item: "greet()", meaning: "Ordering without choosing — the kitchen serves the default, not an empty plate." }
    ]
  },
  syntaxStructure: `function greet(name = "Guest") {
  return "Hello, " + name;
}
greet();        // Hello, Guest
greet("Sara");  // Hello, Sara`,
  codeExample: `function calculateTotal(price, taxRate = 0.18, discount = 0) {
  return price + price * taxRate - discount;
}

console.log(calculateTotal(100));          // 118
console.log(calculateTotal(100, 0.1, 5));  // 105`,
  codeAnnotations: [
    { lineOrToken: "taxRate = 0.18", description: "Falls back to 18% tax when not specified." },
    { lineOrToken: "calculateTotal(100)", description: "Uses both defaults: 100 + 18 - 0 = 118." }
  ],
  commonMistakes: [
    {
      wrong: "function f(a = 1, b) { }  // b has no default but comes after",
      correct: "Put defaulted parameters last: function f(b, a = 1) { }",
      reason: "Arguments fill **left to right** — so a defaulted parameter followed by a required one is nearly unreachable. Put **defaults at the end** of the list."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `function welcome(name = "Guest", day = "today") {
  return "Welcome " + name + "! See you " + day + ".";
}
document.getElementById("out").textContent = welcome();`,
    instructions: "Call welcome(\"Ali\") and welcome(\"Ali\", \"tomorrow\")."
  },
  takeaways: [
    "**Defaults** apply when an argument is **missing** or `undefined`.",
    "They prevent `undefined` from **breaking** your logic.",
    "Place defaulted parameters at the **end** of the list."
  ],
  quizQuestions: [
    { id: "js-defaultparams-1", question: "In function f(x = 10), what is f()?", options: ["10", "undefined", "Error", "0"], correctAnswerIndex: 0, explanation: "Correct — the missing argument **falls back** to the default `10`. Chef's choice!" },
    { id: "js-defaultparams-2", question: "Where should default parameters go?", options: ["At the end of the parameter list", "At the start", "In the middle", "Anywhere"], correctAnswerIndex: 0, explanation: "Right — arguments fill **left to right**, so defaults belong **last**." }
  ]
};

// LESSON: Arrow Functions
export const jsArrowFunctionsContent: LessonContent = {
  heroTagline: "Tiny functions with the => syntax",
  introduction: "Meet the **shortest** way to write a function: **`(a, b) => a + b`**. With one expression, you skip the braces **and** the `return` — it returns automatically.\n\nArrows are the **standard** for callbacks and array methods. Modern JavaScript is full of them — reading them fluently is non-negotiable.",
  definition: {
    term: "Arrow function",
    explanation: "A **concise function** written with **`=>`**: `(a, b) => a + b`. Single-expression bodies **return automatically** (no `return` needed!); longer bodies use braces with an **explicit** return."
  },
  whyItMatters: "Modern JavaScript is **full of arrows** — event handlers, `map`/`filter` callbacks, promises. They're in every codebase, every tutorial, every job interview. Fluency here is **non-negotiable**.",
  realWorldAnalogy: {
    title: "Texting vs Writing a Letter",
    story: "**Texting vs writing a letter**: 'brb' carries real meaning in 3 characters; a formal letter takes a page. **Arrow functions** are texting — `(a, b) => a + b` does the same job as five lines of `function` ceremony. Shorter, for quick jobs.",
    comparison: [
      { item: "function(x) { return x * 2; }", meaning: "The formal letter — correct, complete, wordy." },
      { item: "x => x * 2", meaning: "The text message — same meaning, a fraction of the words." }
    ]
  },
  syntaxStructure: `const add = (a, b) => a + b;        // implicit return
const greet = name => "Hi " + name;   // one param, no parens
const log = () => console.log("hi");  // no params`,
  codeExample: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

const greet = (name) => {
  const msg = "Hello, " + name;
  return msg;
};
console.log(greet("Sara"));`,
  codeAnnotations: [
    { lineOrToken: "n => n * 2", description: "One expression: returned automatically, no braces needed." },
    { lineOrToken: "(name) => { ... return msg; }", description: "Multi-line body needs braces and an explicit return." }
  ],
  commonMistakes: [
    {
      wrong: "const f = () => { name: 'Sara' };  // {} is a block, not an object!",
      correct: "const f = () => ({ name: 'Sara' });",
      reason: "Returning an **object literal**? Wrap it in parentheses: `() => ({name: \"Sara\"})`. Without them, the engine reads `{` as a **code block**, not an object!"
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const triple = n => n * 3;
const shout = text => text.toUpperCase() + "!";
document.getElementById("out").textContent = triple(5) + " " + shout("wow");`,
    instructions: "Write an arrow that returns the square of a number."
  },
  takeaways: [
    "**`=>`** defines a compact function.",
    "Single expressions **return automatically** — no `return` keyword.",
    "Multi-line arrows need **`{ }`** and an **explicit** return."
  ],
  quizQuestions: [
    { id: "js-arrow-1", question: "What does n => n * 2 return?", options: ["n * 2", "undefined", "n", "Nothing"], correctAnswerIndex: 0, explanation: "Correct — single-expression arrows **implicitly return** the expression. No `return` needed." },
    { id: "js-arrow-2", question: "When do you need braces in an arrow?", options: ["For multi-line bodies", "Always", "Never", "Only with numbers"], correctAnswerIndex: 0, explanation: "Right — multiple statements need **braces** plus an **explicit** return." }
  ]
};

// LESSON: Scope
export const jsScopeContent: LessonContent = {
  heroTagline: "Where your variables are allowed to exist",
  introduction: "Declare a variable inside a function — can you use it **outside**? **No.** That boundary is called **scope**.\n\n**Global** scope = visible everywhere. **Function/block** scope = visible only inside. Scope is how big programs keep thousands of variables from colliding.",
  definition: {
    term: "Scope",
    explanation: "**Scope** decides **where a variable is visible**. `let` and `const` are **block-scoped**: they exist only inside the nearest **`{ }`**. Inner scopes can **read** outer variables — but never the reverse."
  },
  whyItMatters: "Scope **prevents name collisions**: two functions can each have their own `total` without interfering. It's how **big programs stay sane** — thousands of variables, zero mix-ups.",
  realWorldAnalogy: {
    title: "Books in Different Rooms",
    story: "**Rooms in a house**: a book in the **bedroom** can't be reached from the **kitchen**. **Global** variables are books left in the **hallway** — everyone grabs them (convenient, chaotic). **Scope** is simply: **where** is this variable allowed to exist?",
    comparison: [
      { item: "Local (block) scope", meaning: "The bedroom book — only usable in that room." },
      { item: "Global scope", meaning: "The hallway book — reachable everywhere (use sparingly!)." }
    ]
  },
  syntaxStructure: `let global = "everywhere";

function test() {
  let local = "only here";
  console.log(global); // works
}
console.log(local); // ReferenceError!`,
  codeExample: `let appName = "Shop"; // global

function showCart() {
  let items = 3; // local to showCart
  console.log(appName + " has " + items + " items");
}

showCart();
// console.log(items); // Error — items doesn't exist here`,
  codeAnnotations: [
    { lineOrToken: "let items = 3;", description: "Born inside the function — dies when it ends." },
    { lineOrToken: "console.log(appName ...)", description: "Inner code can read outer (global) variables." }
  ],
  commonMistakes: [
    {
      wrong: "function f() {\n  message = 'hi';  // no let/const — accidental global!\n}",
      correct: "Always declare with let or const inside functions.",
      reason: "**Assigning without declaring** (`x = 5` with no `let`) silently creates a **global** — the hallway book nobody asked for. A classic source of spooky bugs. Always declare!"
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let outer = "I am global";
function demo() {
  let inner = "I am local";
  return outer + " / " + inner;
}
document.getElementById("out").textContent = demo();`,
    instructions: "Try reading 'inner' outside the function and see the error."
  },
  takeaways: [
    "**`let`/`const`** live only inside their block **`{ }`**.",
    "**Inner** scopes can read **outer** variables — not the reverse.",
    "**Always declare** variables — never create accidental globals."
  ],
  quizQuestions: [
    { id: "js-scope-1", question: "Where is a let inside a function visible?", options: ["Only inside that function", "Everywhere", "Only in other functions", "Nowhere"], correctAnswerIndex: 0, explanation: "Correct — **block scope** confines it to the function body. The bedroom book stays in the bedroom." },
    { id: "js-scope-2", question: "Can inner code read a global variable?", options: ["Yes", "No", "Only once", "Only in loops"], correctAnswerIndex: 0, explanation: "Right — **inner scopes can read** outer-scope variables. The kitchen can borrow from the hallway, not vice versa." }
  ]
};

// LESSON: Callback Functions
export const jsCallbacksContent: LessonContent = {
  heroTagline: "Passing a function as an argument to another function",
  introduction: "A **callback** is a function you **hand to another function** to run later: `button.addEventListener('click', handleClick)`.\n\nThe outer function decides **WHEN**; your callback decides **WHAT**. This 'do this when that happens' pattern runs events, timers, and array methods.",
  definition: {
    term: "Callback function",
    explanation: "A **function passed as an argument** to another function, to be **invoked later** — after an event, a timer, or when data arrives. The outer function decides **when**; your callback decides **what**."
  },
  whyItMatters: "**Events, timers, and array methods** all run on callbacks. They are how JavaScript says '**do this when that happens**' — the single most important pattern in the language.",
  realWorldAnalogy: {
    title: "The 'Call Me Back' Deal",
    story: "You leave your **number with a shop**: 'call me back when my order is ready.' You decide **what** happens (the callback); the shop decides **when** (after the event, the timer, the data arrival). That 'call me back' deal is exactly how JavaScript callbacks work.",
    comparison: [
      { item: "Your number", meaning: "The callback — WHAT to run when the time comes." },
      { item: "The shop", meaning: "The outer function — it decides WHEN to run it." }
    ]
  },
  syntaxStructure: `function greet(name) { console.log("Hi " + name); }
function processUser(callback) {
  callback("Sara"); // runs the passed function
}
processUser(greet); // no () — passing, not calling`,
  codeExample: `function handleClick() {
  console.log("Button was clicked!");
}

// In a real page:
// document.getElementById("btn").addEventListener("click", handleClick);

setTimeout(() => {
  console.log("3 seconds passed!");
}, 3000);`,
  codeAnnotations: [
    { lineOrToken: "processUser(greet);", description: "Passes the function itself — no parentheses." },
    { lineOrToken: "() => { ... }, 3000", description: "An arrow callback that runs after 3 seconds." }
  ],
  commonMistakes: [
    {
      wrong: "btn.addEventListener('click', handleClick());  // runs NOW!",
      correct: "btn.addEventListener('click', handleClick);",
      reason: "**Parentheses call immediately**! `handleClick()` runs NOW. Pass the **name** (`handleClick`) so it runs later, on click."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `function runTwice(callback) {
  callback();
  callback();
}
runTwice(() => {
  document.getElementById("out").textContent += "Hi! ";
});`,
    instructions: "Change runTwice to run the callback three times."
  },
  takeaways: [
    "A **callback** is a function **passed to** another function.",
    "Pass the **name without `()`** to defer execution.",
    "**Events**, **timers**, and **array methods** all use callbacks."
  ],
  quizQuestions: [
    { id: "js-callback-1", question: "What is a callback?", options: ["A function passed to another function to run later", "A function that calls itself", "A syntax error", "A loop"], correctAnswerIndex: 0, explanation: "Correct — callbacks are **handed over** and invoked **later** by the receiver." },
    { id: "js-callback-2", question: "Why no () in addEventListener(\"click\", handleClick)?", options: ["To pass it for later instead of running now", "Parentheses are banned", "It runs faster", "No reason"], correctAnswerIndex: 0, explanation: "Right — `()` would execute **immediately**; the bare name **defers** it until the click." }
  ]
};

// ============================================================
// MODULE 7: Arrays and Objects (unique lessons)
// ============================================================

// LESSON: Arrays (module 7 deep dive)
export const jsArraysDeepContent: LessonContent = {
  heroTagline: "Mastering lists: the workhorse of JavaScript data",
  introduction: "You know arrays hold lists — but there's **more to master**. Mixed types are allowed, arrays are secretly **objects** under the hood, and `typeof` returns `'object'` (not helpful!).\n\nTime to go **deep**: the checks, the quirks, and the pro patterns that separate beginners from working developers.",
  definition: {
    term: "Array (deep dive)",
    explanation: "**Arrays under the microscope**: they're **special objects** optimized for ordered lists — `typeof []` is `'object'` (surprise!), so **`Array.isArray()`** is the real check. They hold a **`.length`** and dozens of built-in **methods**."
  },
  whyItMatters: "**APIs return arrays**, UIs render arrays, databases return arrays. **Deep array fluency** is what separates beginners from working developers — this is employable knowledge.",
  realWorldAnalogy: {
    title: "The Train Inspector",
    story: "A **train inspector** checks two things: 'is this actually a **train**?' (`Array.isArray` — because `typeof` just says 'object', which could be anything), and '**how many cars**?' (`.length`). Deep array knowledge is what separates tourists from inspectors.",
    comparison: [
      { item: "Array.isArray(x)", meaning: "Checking 'is this really a train?' — typeof says 'object' for both trains and buildings." },
      { item: ".length", meaning: "Counting the cars — how many items are aboard." }
    ]
  },
  syntaxStructure: `const mixed = ["text", 42, true]; // allowed
Array.isArray(mixed); // true
Array.isArray("hello"); // false`,
  codeExample: `const cart = ["Shirt", "Shoes"];
console.log(Array.isArray(cart)); // true
console.log(typeof cart);         // "object" — surprising!
console.log(cart.length);         // 2
cart[10] = "Hat";                 // avoid — creates holes!
console.log(cart.length);         // 11`,
  codeAnnotations: [
    { lineOrToken: "Array.isArray(cart)", description: "The reliable way to test for an array." },
    { lineOrToken: 'cart[10] = "Hat";', description: "Don't do this — it leaves empty holes in the array." }
  ],
  commonMistakes: [
    {
      wrong: "if (typeof items === 'array') { }  // never true!",
      correct: "if (Array.isArray(items)) { }",
      reason: "`typeof` an array is `'object'` — **useless** for checking! Only **`Array.isArray(x)`** tells the truth."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const data = [1, "two", true];
document.getElementById("out").textContent =
  "Is array? " + Array.isArray(data) + ", length: " + data.length;`,
    instructions: "Test Array.isArray on a string and a number."
  },
  takeaways: [
    "Arrays can hold **mixed types**, but keep them consistent anyway.",
    "`typeof []` is `'object'` — use **`Array.isArray()`** to check.",
    "Never assign far past the end — it creates **holes** in the array."
  ],
  quizQuestions: [
    { id: "js-arraysdeep-1", question: "What is typeof [1, 2, 3]?", options: ["\"object\"", "\"array\"", "\"list\"", "\"number\""], correctAnswerIndex: 0, explanation: "Correct — arrays **are** objects; `typeof` reports `'object'`. Sneaky!" },
    { id: "js-arraysdeep-2", question: "How do you reliably check for an array?", options: ["Array.isArray(x)", "typeof x === \"array\"", "x.isArray", "x.length > 0"], correctAnswerIndex: 0, explanation: "Right — **`Array.isArray`** is the correct test. The inspector's badge." }
  ]
};

// LESSON: Accessing Array Items
export const jsAccessingArrayItemsContent: LessonContent = {
  heroTagline: "Reading exactly the item you need by position",
  introduction: "You have the train (array) — now **peek inside a specific car**. `fruits[0]` grabs the first item, `fruits[fruits.length - 1]` grabs the last.\n\nIndexes can come from **variables and expressions** too — `arr[i + 1]` works. This is how you pluck **exactly** the item you need.",
  definition: {
    term: "Array access",
    explanation: "**Reading an element** via `array[index]`. The index is **zero-based**: `0` is first, `length - 1` is last. Indexes can come from **variables and expressions** (`arr[i + 1]`), and out-of-range indexes give **`undefined`** — not an error."
  },
  whyItMatters: "**Rendering lists**, reading **API results**, picking winners — every app constantly plucks **specific items** out of arrays. Precise indexing is a daily, everywhere skill.",
  realWorldAnalogy: {
    title: "The Library's Numbered Slots",
    story: "A **library** with numbered slots: ask for slot `0`, get the first book. Ask for a slot that doesn't exist, and the librarian just shrugs — **`undefined`**, no drama. And the slots can be named by **variables** too: `books[i]` works wherever `i` holds a number.",
    comparison: [
      { item: "books[2]", meaning: "Asking the librarian for the book in slot 2." },
      { item: "books[99]", meaning: "Asking for a slot that doesn't exist — you get undefined, not an error." }
    ]
  },
  syntaxStructure: `const colors = ["red", "green", "blue"];
colors[0];              // "red"
colors[colors.length - 1]; // "blue" — last
colors[5];              // undefined`,
  codeExample: `const leaderboard = ["Sara", "Ali", "Usman"];
const position = 1;

console.log("Winner: " + leaderboard[0]);
console.log("Runner-up: " + leaderboard[position]);
console.log("Last place: " + leaderboard[leaderboard.length - 1]);`,
  codeAnnotations: [
    { lineOrToken: "leaderboard[position]", description: "Indexes can be variables — position holds 1." },
    { lineOrToken: "leaderboard[leaderboard.length - 1]", description: "The safe pattern for the last item." }
  ],
  commonMistakes: [
    {
      wrong: "leaderboard[3]  // undefined — only 3 items (0,1,2)!",
      correct: "leaderboard[leaderboard.length - 1]",
      reason: "The last index is **`length - 1`**, not `length`. `arr[arr.length]` looks past the end and finds `undefined`."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
document.getElementById("out").textContent =
  "First: " + days[0] + ", Last: " + days[days.length - 1];`,
    instructions: "Display the middle day using an index."
  },
  takeaways: [
    "**`arr[i]`** reads the item at index `i`; indexes **start at 0**.",
    "**`arr[arr.length - 1]`** is always the last item — memorize this pattern.",
    "Out-of-range access returns **`undefined`**, not an error."
  ],
  quizQuestions: [
    { id: "js-accessarr-1", question: "What is [\"a\",\"b\",\"c\"][0]?", options: ["\"a\"", "\"b\"", "\"c\"", "0"], correctAnswerIndex: 0, explanation: "Correct — index `0` is the **first** item. Counting starts at zero!" },
    { id: "js-accessarr-2", question: "What does arr[100] give for a 3-item array?", options: ["undefined", "Error", "null", "The last item"], correctAnswerIndex: 0, explanation: "Right — out-of-range indexes return **`undefined`**, not an error. The librarian just shrugs." }
  ]
};

// LESSON: Adding Items
export const jsAddingItemsContent: LessonContent = {
  heroTagline: "Growing your list with push() and unshift()",
  introduction: "Lists **grow**: new chat messages, new cart items, new tasks. **`push()`** adds to the **end**, **`unshift()`** adds to the **start**.\n\nBoth change the original array, and both hand you back the **new length**. These two methods are how carts, chats, and feeds grow.",
  definition: {
    term: "push() and unshift()",
    explanation: "**`push(item)`** appends to the **end**; **`unshift(item)`** prepends to the **start**. Both **mutate** (change) the original array, and both **return the new length** — not the array!"
  },
  whyItMatters: "Lists grow **constantly** — new messages, new products, new tasks. `push()` is probably the **most-called array method in existence**. You'll type it thousands of times.",
  realWorldAnalogy: {
    title: "The Ticket Counter Queue",
    story: "A **queue at a ticket counter**: newcomers join at the **back** (`push`), while a VIP is ushered to the **front** (`unshift`). Either way, the line **grows by one** — and the method tells you the **new length**, like the counter display updating.",
    comparison: [
      { item: "queue.push('Ali')", meaning: "Ali joins the back of the line." },
      { item: "queue.unshift('VIP')", meaning: "The VIP is ushered straight to the front." }
    ]
  },
  syntaxStructure: `const list = ["a", "b"];
list.push("c");    // ["a", "b", "c"] — returns 3
list.unshift("z"); // ["z", "a", "b", "c"] — returns 4`,
  codeExample: `const cart = ["Shirt"];
cart.push("Shoes");
cart.push("Socks", "Cap"); // push accepts many at once
console.log(cart); // ["Shirt", "Shoes", "Socks", "Cap"]

const line = ["Ali"];
line.unshift("VIP Sara");
console.log(line); // ["VIP Sara", "Ali"]`,
  codeAnnotations: [
    { lineOrToken: 'cart.push("Socks", "Cap");', description: "push can add several items in one call." },
    { lineOrToken: 'line.unshift("VIP Sara");', description: "Inserts at index 0, shifting others right." }
  ],
  commonMistakes: [
    {
      wrong: "const newCart = cart.push('Hat');  // newCart is 4, not an array!",
      correct: "cart.push('Hat'); // use cart afterwards",
      reason: "`push` returns the **new length**, not the array! So `let x = arr.push(4)` stores the **length** in `x` — not the array. Only capture the result if you actually want the count."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const todos = ["Study"];
todos.push("Exercise");
todos.unshift("Wake up");
document.getElementById("out").textContent = todos.join(" -> ");`,
    instructions: "Push two more tasks and see the order."
  },
  takeaways: [
    "**`push()`** adds to the **end**; **`unshift()`** adds to the **start**.",
    "Both return the **new length**, not the array.",
    "**`push()`** can add **multiple items** in one call: `push(a, b, c)`."
  ],
  quizQuestions: [
    { id: "js-addingitems-1", question: "What does [1,2].push(3) return?", options: ["3 (the new length)", "[1,2,3]", "undefined", "2"], correctAnswerIndex: 0, explanation: "Correct — `push` returns the **new length** of the array, not the array itself." },
    { id: "js-addingitems-2", question: "How do you add to the START of an array?", options: ["unshift()", "push()", "append()", "addFirst()"], correctAnswerIndex: 0, explanation: "Right — `unshift` inserts at **index 0**, the very front of the line." }
  ]
};

// LESSON: Removing Items
export const jsRemovingItemsContent: LessonContent = {
  heroTagline: "Shrinking your list with pop() and shift()",
  introduction: "Lists **shrink** too: completed todos, dismissed notifications, served customers. **`pop()`** removes from the **end**, **`shift()`** removes from the **start**.\n\nBoth **return the removed item** — handy when you need to use it — and the array shrinks by one each time.",
  definition: {
    term: "pop() and shift()",
    explanation: "**`pop()`** removes and **returns** the **last** item; **`shift()`** removes and **returns** the **first** item. Both **mutate** the original array (it shrinks by one) — and both hand you the removed item to use."
  },
  whyItMatters: "**Undo stacks**, queues, and 'recent items' lists all remove from ends. `pop`/`shift` are the **mirror of `push`/`unshift`** — together, the four handle every end of every list.",
  realWorldAnalogy: {
    title: "Plates and Bank Queues",
    story: "A **stack of plates**: you take from the **top** (`pop`). A **queue at the bank**: the **front** person is served next (`shift`). Both remove **one item** — and hand it to you, so you can use it.",
    comparison: [
      { item: "plates.pop()", meaning: "Lifting the top plate off the stack." },
      { item: "line.shift()", meaning: "Serving the person at the front of the line." }
    ]
  },
  syntaxStructure: `const stack = ["a", "b", "c"];
stack.pop();   // "c" — removed from end
stack.shift(); // "a" — removed from start
// stack is now ["b"]`,
  codeExample: `const tasks = ["Email", "Report", "Call"];
const done = tasks.pop();
console.log("Finished: " + done); // Call
console.log("Left: " + tasks);     // Email,Report

const next = tasks.shift();
console.log("Now doing: " + next); // Email`,
  codeAnnotations: [
    { lineOrToken: "const done = tasks.pop();", description: "Removes 'Call' AND gives it to you in done." },
    { lineOrToken: "tasks.shift();", description: "Removes the first item, 'Email'." }
  ],
  commonMistakes: [
    {
      wrong: "const removed = arr.pop('x');  // pop takes NO arguments",
      correct: "arr.pop(); // always removes the last item",
      reason: "`pop()` and `shift()` take **no arguments** — they always target the ends! `arr.pop(2)` doesn't remove 2 items; the `2` is ignored. For middle removals, use `splice()`."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const playlist = ["Song A", "Song B", "Song C"];
const playing = playlist.shift();
document.getElementById("out").textContent =
  "Now playing: " + playing + " | Up next: " + playlist.join(", ");`,
    instructions: "Shift again to play the next song."
  },
  takeaways: [
    "**`pop()`** removes and returns the **last** item.",
    "**`shift()`** removes and returns the **first** item.",
    "They take **no arguments** — ends only."
  ],
  quizQuestions: [
    { id: "js-removingitems-1", question: "What does [1,2,3].pop() return?", options: ["3", "[1,2]", "1", "undefined"], correctAnswerIndex: 0, explanation: "Correct — `pop` **removes and returns** the last item. Top plate, lifted." },
    { id: "js-removingitems-2", question: "Which removes the FIRST item?", options: ["shift()", "pop()", "remove()", "delete()"], correctAnswerIndex: 0, explanation: "Right — `shift` takes from the **start**. Front of the line, served." }
  ]
};

// LESSON: Array Methods
export const jsArrayMethodsContent: LessonContent = {
  heroTagline: "The essential toolkit: slice, splice, join, and friends",
  introduction: "Beyond `push`/`pop`, arrays come with a **power toolkit**: **`slice()`** copies a portion, **`splice()`** adds/removes anywhere, **`join()`** glues items into text, **`includes()`** checks membership, **`indexOf()`** finds positions.\n\nTogether, these five handle **most list jobs** you'll ever face.",
  definition: {
    term: "Array utility methods",
    explanation: "**Built-in array functions** for everyday list work: **`slice`** copies a range, **`splice`** edits in place, **`join`** builds a string, **`includes`** tests membership, **`indexOf`** finds positions. The essential toolkit."
  },
  whyItMatters: "These five methods cover **80% of real list work**: pagination (`slice`), editing (`splice`), display (`join`), searching (`includes`/`indexOf`). Learn them and arrays stop being scary.",
  realWorldAnalogy: {
    title: "The Tailor's Toolkit",
    story: "A **tailor's toolkit**: **scissors** cut a piece to take home (`slice` — the original fabric untouched), **pins** alter the garment itself (`splice` — permanent changes), **thread** joins pieces (`join`), and a **checklist** verifies (`includes`). Five tools, 80% of all list jobs.",
    comparison: [
      { item: "slice()", meaning: "Cutting a copy — the original fabric is untouched." },
      { item: "splice()", meaning: "Altering the garment itself — pins, cuts, changes are permanent." }
    ]
  },
  syntaxStructure: `const arr = ["a", "b", "c", "d"];
arr.slice(1, 3);      // ["b", "c"] — copy, original safe
arr.splice(1, 2);     // removes "b","c" — arr is now ["a","d"]
["x","y"].join("-");  // "x-y"`,
  codeExample: `const products = ["Shirt", "Shoes", "Hat", "Socks"];

const page1 = products.slice(0, 2);
console.log(page1); // ["Shirt", "Shoes"] — first page

console.log(products.includes("Hat")); // true
console.log(products.indexOf("Socks")); // 3

console.log(products.join(", ")); // Shirt, Shoes, Hat, Socks`,
  codeAnnotations: [
    { lineOrToken: "products.slice(0, 2)", description: "Copies items 0-1; the original stays whole." },
    { lineOrToken: 'products.includes("Hat")', description: "true/false membership test — no loop needed." }
  ],
  commonMistakes: [
    {
      wrong: "arr.slice(1, 2);  // forgot slice doesn't change arr!",
      correct: "const part = arr.slice(1, 2);",
      reason: "`slice` returns a **new array** — the original is untouched! If you don't **capture the result** (`let part = arr.slice(0, 2)`), your copy vanishes into thin air."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const colors = ["red", "green", "blue", "yellow"];
const warm = colors.slice(0, 1).concat(colors.slice(3));
document.getElementById("out").textContent =
  "Warm colors: " + warm.join(" and ") + " | Has blue? " + colors.includes("blue");`,
    instructions: "Use splice to remove 'green' from colors."
  },
  takeaways: [
    "**`slice()`** copies a range **without touching** the original.",
    "**`splice()`** adds/removes items **in place**.",
    "**`join()`**, **`includes()`**, and **`indexOf()`** handle display and search."
  ],
  quizQuestions: [
    { id: "js-arrmethods-1", question: "Does slice() change the original array?", options: ["No — it returns a copy", "Yes", "Only sometimes", "It deletes it"], correctAnswerIndex: 0, explanation: "Correct — `slice` is **non-mutating**; it returns a new array and leaves the original alone." },
    { id: "js-arrmethods-2", question: "What does [\"a\",\"b\"].join(\"-\") give?", options: ["\"a-b\"", "\"ab\"", "[\"a-b\"]", "Error"], correctAnswerIndex: 0, explanation: "Right — `join` **glues** items into one string with your separator between them." }
  ]
};

// LESSON: map()
export const jsMapContent: LessonContent = {
  heroTagline: "Transform every item into something new",
  introduction: "Turn `[1, 2, 3]` into `[2, 4, 6]`? Convert prices to another currency? Extract names from user objects?\n\n**`map()`** runs your function on **each item** and collects the results into a **new array**. Same length in, same length out — transformed.",
  definition: {
    term: "map()",
    explanation: "An array method that **transforms each element** with your callback and returns a **new array** of the results — **one-to-one**, in the same order. The original array is **never changed**."
  },
  whyItMatters: "**Rendering product cards**, converting currencies, extracting names from user objects — `map()` is the standard '**transform a list**' tool. It's in virtually every real codebase.",
  realWorldAnalogy: {
    title: "The Photo Filter",
    story: "Apply a **photo filter** to every picture in an album: each original **stays exactly as it was**, and you get a **new album** of filtered copies — same count, transformed. **`map()`** is that filter: one function applied to **every item**, results collected into a **new array**.",
    comparison: [
      { item: "The callback", meaning: "The photo filter — applied to each picture, one by one." },
      { item: "The new array", meaning: "The new album — filtered copies. Originals untouched." }
    ]
  },
  syntaxStructure: `const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// doubled: [2, 4, 6], nums unchanged`,
  codeExample: `const prices = [100, 200, 300];
const withTax = prices.map(price => price * 1.18);
console.log(withTax); // [118, 236, 354]

const users = [{ name: "Sara" }, { name: "Ali" }];
const names = users.map(user => user.name);
console.log(names); // ["Sara", "Ali"]`,
  codeAnnotations: [
    { lineOrToken: "prices.map(price => price * 1.18)", description: "Each price is transformed; results collected in order." },
    { lineOrToken: "user => user.name", description: "Extracts one field from each object." }
  ],
  commonMistakes: [
    {
      wrong: "const r = arr.map(x => { x * 2; });  // [undefined, ...] — no return!",
      correct: "const r = arr.map(x => x * 2);",
      reason: "**Braces need an explicit return**! `nums.map(n => { n * 2 })` gives `[undefined, undefined]` — write `{ return n * 2; }` or skip the braces for the auto-return."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const tempsC = [0, 20, 30, 100];
const tempsF = tempsC.map(c => c * 9 / 5 + 32);
document.getElementById("out").textContent = tempsF.join("°F, ") + "°F";`,
    instructions: "Map the array to Celsius labels like '0°C'."
  },
  takeaways: [
    "**`map()`** transforms each item and returns a **new array**.",
    "The **original array** is never modified.",
    "Result length **always equals** the original length."
  ],
  quizQuestions: [
    { id: "js-map-1", question: "What does [1,2,3].map(n => n * 10) return?", options: ["[10, 20, 30]", "[1, 2, 3]", "60", "undefined"], correctAnswerIndex: 0, explanation: "Correct — each item is **transformed**, and a **new array** is returned." },
    { id: "js-map-2", question: "Does map() change the original array?", options: ["No", "Yes", "Only the first item", "It deletes it"], correctAnswerIndex: 0, explanation: "Right — `map` is **non-mutating**. It builds a new array; the original survives." }
  ]
};

// LESSON: filter()
export const jsFilterContent: LessonContent = {
  heroTagline: "Keep only the items that pass your test",
  introduction: "Need only the adults? Only the in-stock products? Only the active users? **`filter()`** keeps items where your callback returns **`true`** and drops the rest.\n\nIt returns a **new array** — possibly shorter — and never touches the original.",
  definition: {
    term: "filter()",
    explanation: "An array method that **tests each element** with your callback and returns a **new array** containing **only the elements that passed** (truthy result). Shorter or equal length — **never longer** — and the original is untouched."
  },
  whyItMatters: "**Search results**, 'in stock only' toggles, **active users**, valid orders — **filtering lists by a rule** is everyday work. It's the engine behind every search box and filter panel.",
  realWorldAnalogy: {
    title: "The Bouncer's Guest List",
    story: "A **bouncer with a guest list**: each person is checked against the rule (`age >= 18`); matches **enter the club** (the new array), the rest stay outside. The original crowd is **untouched** — `filter()` never rearranges the line, it just selects.",
    comparison: [
      { item: "The callback test", meaning: "Checking the guest list for each person at the door." },
      { item: "The new array", meaning: "Everyone who made it inside — the VIP list." }
    ]
  },
  syntaxStructure: `const ages = [15, 22, 17, 30];
const adults = ages.filter(age => age >= 18);
// adults: [22, 30]`,
  codeExample: `const products = [
  { name: "Shirt", inStock: true },
  { name: "Shoes", inStock: false },
  { name: "Hat", inStock: true }
];

const available = products.filter(p => p.inStock);
console.log(available.length); // 2
console.log(available[0].name); // Shirt`,
  codeAnnotations: [
    { lineOrToken: "p => p.inStock", description: "The test: keep the product only if inStock is true." },
    { lineOrToken: "available.length", description: "2 — the filtered array is shorter." }
  ],
  commonMistakes: [
    {
      wrong: "const adults = ages.filter(age => { age >= 18; });  // [] — no return!",
      correct: "const adults = ages.filter(age => age >= 18);",
      reason: "With **braces** you must **return** the test result explicitly! `ages.filter(a => { a >= 18 })` returns nothing — write `{ return a >= 18; }` or skip the braces."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const scores = [45, 82, 67, 91, 30];
const passed = scores.filter(s => s >= 50);
document.getElementById("out").textContent =
  "Passed: " + passed.join(", ") + " (" + passed.length + " students)";`,
    instructions: "Filter for scores above 80 instead."
  },
  takeaways: [
    "**`filter()`** keeps items whose test returns **`true`**.",
    "It returns a **new**, possibly shorter array.",
    "The **original array** is unchanged."
  ],
  quizQuestions: [
    { id: "js-filter-1", question: "What does [5, 12, 8].filter(n => n > 7) return?", options: ["[12, 8]", "[5]", "[5, 12, 8]", "12"], correctAnswerIndex: 0, explanation: "Correct — only `12` and `8` pass the `> 7` test. The bouncer is strict!" },
    { id: "js-filter-2", question: "Does filter() modify the original?", options: ["No", "Yes", "It empties it", "It sorts it"], correctAnswerIndex: 0, explanation: "Right — `filter` **builds and returns** a new array. Original untouched." }
  ]
};

// LESSON: find()
export const jsFindContent: LessonContent = {
  heroTagline: "Get the FIRST item that matches — just one",
  introduction: "Looking up **one** user by id? **One** product by SKU? You want the **item itself** — not a list.\n\n**`find()`** returns the **first** element passing your test and **stops** there. Unlike `filter()`, it gives you the item directly — or **`undefined`** if nothing matches.",
  definition: {
    term: "find()",
    explanation: "An array method that returns the **first element** whose callback returns `true` — the **item itself**, not an array. Returns **`undefined`** when nothing matches, and **stops searching** at the first hit (short-circuits)."
  },
  whyItMatters: "Looking up a **user by id**, a **product by SKU**, a **config by key** — you want the one item, not a list. `find()` is **the lookup tool**, and it stops early for speed.",
  realWorldAnalogy: {
    title: "Finding Your Car in the Lot",
    story: "**Searching a parking lot** for your car: you stop at the **FIRST** matching car — you don't keep checking every remaining spot! **`find()`** works the same: first match wins, search over. Need **all** matches? That's `filter()`'s job.",
    comparison: [
      { item: "find()", meaning: "Stopping at YOUR car — one result, search over." },
      { item: "filter()", meaning: "Listing EVERY red car in the lot — many results, full sweep." }
    ]
  },
  syntaxStructure: `const users = [{ id: 1, name: "Sara" }, { id: 2, name: "Ali" }];
users.find(u => u.id === 2); // { id: 2, name: "Ali" }
users.find(u => u.id === 9); // undefined`,
  codeExample: `const products = [
  { sku: "A1", name: "Shirt", price: 2500 },
  { sku: "B2", name: "Shoes", price: 6000 }
];

const item = products.find(p => p.sku === "B2");
console.log(item.name); // Shoes

const missing = products.find(p => p.sku === "Z9");
console.log(missing); // undefined`,
  codeAnnotations: [
    { lineOrToken: "p => p.sku === \"B2\"", description: "The test each product faces." },
    { lineOrToken: "products.find(...)", description: "Returns the matching object itself — not wrapped in an array." }
  ],
  commonMistakes: [
    {
      wrong: "const item = products.find(p => p.sku === 'Z9');\nconsole.log(item.name); // TypeError!",
      correct: "if (item) { console.log(item.name); }",
      reason: "`find()` returns **`undefined`** on no match — and reading properties of `undefined` **crashes**! Always check before using the result."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const students = [
  { name: "Sara", grade: "A" },
  { name: "Ali", grade: "B" }
];
const top = students.find(s => s.grade === "A");
document.getElementById("out").textContent = "Top student: " + top.name;`,
    instructions: "Search for grade \"C\" and handle the undefined result."
  },
  takeaways: [
    "**`find()`** returns the **first matching item** itself — not an array.",
    "It returns **`undefined`** when nothing matches — always check!",
    "Use **`find`** for one item, **`filter`** for many."
  ],
  quizQuestions: [
    { id: "js-find-1", question: "What does [3, 7, 9].find(n => n > 5) return?", options: ["7", "[7, 9]", "9", "undefined"], correctAnswerIndex: 0, explanation: "Correct — `find` **stops at the first match**: `7`. Search over!" },
    { id: "js-find-2", question: "What if nothing matches?", options: ["undefined", "An empty array", "null", "Error"], correctAnswerIndex: 0, explanation: "Right — `find` returns **`undefined`** when nothing matches. Always check." }
  ]
};

// LESSON: reduce()
export const jsReduceContent: LessonContent = {
  heroTagline: "Boil a whole array down to one value",
  introduction: "Turn a whole cart into **one total**? Count votes into **one number**? **`reduce()`** boils an entire array down to a **single value**.\n\nYou give it a function (`accumulator`, `item`) and a **starting value** — it folds the array step by step, like a snowball gathering snow.",
  definition: {
    term: "reduce()",
    explanation: "An array method that **combines all items into one result**: a total, an average, a merged object. Your callback receives **(accumulator, item)** each round, carrying the running result forward. The **second argument** is the starting value."
  },
  whyItMatters: "**Cart totals**, vote counts, word frequencies — '**many values → one answer**' is `reduce()`'s home turf. It's the most powerful array method, and interviewers love it.",
  realWorldAnalogy: {
    title: "The Rolling Snowball",
    story: "A **snowball rolling downhill**: it starts small (the **initial value**), gathers more snow with **each roll** (each item), and ends as **one big ball** (the result). **`reduce()`** folds a whole array — step by step — into a **single value**.",
    comparison: [
      { item: "The accumulator", meaning: "The snowball — grows bigger with every roll." },
      { item: "The initial value", meaning: "The starting snowball size — often 0." }
    ]
  },
  syntaxStructure: `const nums = [1, 2, 3, 4];
const sum = nums.reduce((total, n) => total + n, 0);
// 0+1=1, 1+2=3, 3+3=6, 6+4=10`,
  codeExample: `const cart = [
  { name: "Shirt", price: 2500 },
  { name: "Shoes", price: 6000 },
  { name: "Socks", price: 500 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log("Total: " + total); // 9000`,
  codeAnnotations: [
    { lineOrToken: "(sum, item) => sum + item.price", description: "Adds each price to the running sum." },
    { lineOrToken: ", 0)", description: "Starts the sum at 0 — always provide it." }
  ],
  commonMistakes: [
    {
      wrong: "[1, 2, 3].reduce((t, n) => t + n);  // works, but...",
      correct: "[1, 2, 3].reduce((t, n) => t + n, 0);",
      reason: "**Always pass the starting value**! Without it, `reduce` on an **empty array** throws a TypeError. `arr.reduce(fn, 0)` — the `0` is your safety net."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const marks = [80, 90, 70, 85];
const total = marks.reduce((sum, m) => sum + m, 0);
const average = total / marks.length;
document.getElementById("out").textContent = "Average: " + average;`,
    instructions: "Use reduce to find the highest mark instead."
  },
  takeaways: [
    "**`reduce()`** folds an array into a **single value**.",
    "The callback gets **(accumulator, currentItem)**.",
    "Always pass a **starting value** as the second argument."
  ],
  quizQuestions: [
    { id: "js-reduce-1", question: "What does [1,2,3,4].reduce((t,n) => t + n, 0) return?", options: ["10", "24", "4", "0"], correctAnswerIndex: 0, explanation: "Correct — `1+2+3+4` folds step by step into **`10`**. The snowball grows!" },
    { id: "js-reduce-2", question: "Why pass an initial value?", options: ["So empty arrays don't throw and the start is explicit", "It makes it faster", "The engine requires 3 args", "No reason"], correctAnswerIndex: 0, explanation: "Right — without a start value, `reduce` on an **empty array** throws a TypeError. Always pass it." }
  ]
};

// LESSON: Objects (module 7 deep dive)
