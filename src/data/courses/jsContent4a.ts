import { LessonContent } from '../../types';

// ============================================================
// MODULE 6: Functions (unique lessons)
// ============================================================

// LESSON: What is a Function?
export const jsFunctionsWhatContent: LessonContent = {
  heroTagline: "A reusable machine: feed it input, get a result",
  introduction: "A function is a named block of code that does one job. You define it once and run it whenever you need — like a kitchen appliance you switch on instead of rebuilding each time.",
  definition: {
    term: "Function",
    explanation: "A reusable, named unit of code that performs a task. You define it with the function keyword and execute it by calling its name with parentheses."
  },
  whyItMatters: "Without functions, programs become long unrepeatable scripts. Functions let you name an idea once — calculateTax — and reuse it everywhere.",
  realWorldAnalogy: {
    title: "Understanding Functions",
    story: "A coffee machine: press the button (call it) and it runs its whole internal process, delivering coffee (the result).",
    comparison: [
      { item: "Defining", meaning: "Building the coffee machine." },
      { item: "Calling", meaning: "Pressing the button to brew." }
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
      reason: "Defining a function does nothing by itself. You must call it."
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
    "A function is a named, reusable block of code.",
    "Defining creates it; calling with () runs it.",
    "Functions remove repetition — write once, run anywhere."
  ],
  quizQuestions: [
    { id: "js-funcwhat-1", question: "What happens when you only define a function?", options: ["Nothing runs until you call it", "It runs immediately", "It causes an error", "It deletes itself"], correctAnswerIndex: 0, explanation: "Definition stores the code; the call executes it." },
    { id: "js-funcwhat-2", question: "How do you run a function named greet?", options: ["greet()", "greet", "run greet", "call.greet"], correctAnswerIndex: 0, explanation: "Parentheses after the name invoke the function." }
  ]
};

// LESSON: Creating Functions
export const jsCreatingFunctionsContent: LessonContent = {
  heroTagline: "Three ways to build a function",
  introduction: "JavaScript offers three creation styles: function declarations (function name() {}), function expressions (const name = function() {}), and arrow functions (const name = () => {}). All create callable functions with small differences.",
  definition: {
    term: "Function declaration vs expression",
    explanation: "A declaration (function add() {}) is hoisted and can be called before its line. An expression assigns a function to a variable and runs only after that line executes."
  },
  whyItMatters: "You will read all three styles in real code. Knowing each lets you read any codebase and pick the right style for the job.",
  realWorldAnalogy: {
    title: "Understanding Function Creation",
    story: "Three ways to get a pizza: a named pizzeria (declaration), a food-truck assigned to a spot (expression), a quick slice window (arrow) — all serve pizza.",
    comparison: [
      { item: "Declaration", meaning: "The pizzeria — known by name, open early (hoisted)." },
      { item: "Expression", meaning: "The food truck — exists once parked at its line." },
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
      reason: "Function expressions are not hoisted like declarations are."
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
    "Declarations hoist; expressions and arrows do not.",
    "Expressions store functions in variables.",
    "Arrows are the shortest form for small functions."
  ],
  quizQuestions: [
    { id: "js-funccreate-1", question: "Which can be called before its definition line?", options: ["Function declaration", "Function expression", "Arrow function", "None"], correctAnswerIndex: 0, explanation: "Declarations are hoisted to the top of their scope." },
    { id: "js-funccreate-2", question: "What is const f = (a) => a * 2; ?", options: ["An arrow function", "A declaration", "A loop", "A class"], correctAnswerIndex: 0, explanation: "The => syntax defines an arrow function." }
  ]
};

// LESSON: Calling Functions
export const jsCallingFunctionsContent: LessonContent = {
  heroTagline: "Parentheses make it happen — how invocation works",
  introduction: "Calling a function means writing its name followed by parentheses: greet(). The engine jumps into the function body, runs it, then returns to the line after the call. Arguments go inside the parentheses.",
  definition: {
    term: "Function call (invocation)",
    explanation: "Executing a function by writing its name with parentheses, optionally passing values (arguments) inside. The call evaluates to the function's return value."
  },
  whyItMatters: "Programs are conversations between functions. Calling correctly — right name, right arguments, right order — is how pieces connect.",
  realWorldAnalogy: {
    title: "Understanding Function Calls",
    story: "Ordering at a counter: you say the dish name plus your choices (arguments), the kitchen cooks, and the plate comes back (return value).",
    comparison: [
      { item: "orderPizza('large')", meaning: "Placing the order with your size choice." },
      { item: "The returned pizza", meaning: "What the call gives back to you." }
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
      reason: "Without parentheses you reference the function; with them you run it."
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
    "name() runs the function; name alone just references it.",
    "Arguments go inside the parentheses.",
    "A call evaluates to whatever the function returns."
  ],
  quizQuestions: [
    { id: "js-funccall-1", question: "What is the difference between greet and greet()?", options: ["greet() runs it; greet only references it", "No difference", "greet() deletes it", "greet runs it"], correctAnswerIndex: 0, explanation: "Parentheses invoke the function." },
    { id: "js-funccall-2", question: "Where do arguments go?", options: ["Inside the parentheses", "After a semicolon", "Inside the function name", "In comments"], correctAnswerIndex: 0, explanation: "Arguments are passed inside the call's parentheses." }
  ]
};

// LESSON: Parameters
export const jsParametersContent: LessonContent = {
  heroTagline: "Named slots that receive values when called",
  introduction: "Parameters are the named placeholders listed in a function's definition: function greet(name). They act as local variables that get filled when the function is called.",
  definition: {
    term: "Parameter",
    explanation: "A named variable in a function's definition that receives a value when the function is called. Parameters make functions flexible and reusable."
  },
  whyItMatters: "Parameters turn fixed scripts into flexible tools: one greet(name) works for Sara, Ali, and a million users — instead of a separate function per person.",
  realWorldAnalogy: {
    title: "Understanding Parameters",
    story: "A form with blank fields: the form (function) defines the fields (parameters); each filled form (call) supplies the values.",
    comparison: [
      { item: "function greet(name)", meaning: "The blank form with a 'name' field." },
      { item: 'greet("Sara")', meaning: "A filled form — name field contains Sara." }
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
      reason: "Missing arguments become undefined, and math with undefined gives NaN."
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
    "Parameters are placeholders in the function definition.",
    "They behave like local variables inside the function.",
    "Missing arguments arrive as undefined."
  ],
  quizQuestions: [
    { id: "js-params-1", question: "In function add(a, b), what are a and b?", options: ["Parameters", "Arguments", "Variables outside", "Return values"], correctAnswerIndex: 0, explanation: "Names in the definition are parameters." },
    { id: "js-params-2", question: "What value does a missing argument get?", options: ["undefined", "0", "null", "Error"], correctAnswerIndex: 0, explanation: "Unfilled parameters default to undefined." }
  ]
};

// LESSON: Arguments
export const jsArgumentsContent: LessonContent = {
  heroTagline: "The actual values you hand to a function",
  introduction: "Arguments are the real values passed in a call: greet('Sara') — 'Sara' is the argument. They fill the parameters in order: first argument → first parameter, and so on.",
  definition: {
    term: "Argument",
    explanation: "A concrete value supplied in a function call. Arguments are matched to parameters by position."
  },
  whyItMatters: "Mixing up argument order is a classic bug: createUser(email, name) vs createUser(name, email). Knowing the mapping keeps calls correct.",
  realWorldAnalogy: {
    title: "Understanding Arguments",
    story: "Filling labeled jars on a shelf: the first jar gets sugar, the second gets salt — order matters, or the cake tastes wrong.",
    comparison: [
      { item: "Parameters", meaning: "The labeled jars on the shelf." },
      { item: "Arguments", meaning: "What you actually pour into each jar." }
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
      reason: "Arguments map by position, not by name. Order must match the definition."
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
    "Arguments are the actual values in a call.",
    "They fill parameters by position — order matters.",
    "Parameters are the names; arguments are the values."
  ],
  quizQuestions: [
    { id: "js-args-1", question: "In greet(\"Sara\"), what is \"Sara\"?", options: ["An argument", "A parameter", "A return value", "A variable"], correctAnswerIndex: 0, explanation: "Values in the call are arguments." },
    { id: "js-args-2", question: "How do arguments match parameters?", options: ["By position, in order", "By name", "Randomly", "By type"], correctAnswerIndex: 0, explanation: "First argument → first parameter, and so on." }
  ]
};

// LESSON: Return Values
export const jsReturnValuesContent: LessonContent = {
  heroTagline: "Sending an answer back to the caller",
  introduction: "The return statement sends a value back from a function and stops it immediately: return a + b. Without return, a function gives back undefined.",
  definition: {
    term: "return statement",
    explanation: "Ends a function and passes a value back to the caller. Code after return never runs."
  },
  whyItMatters: "Return values let functions feed each other: calculate total, then format it, then display it. This chaining builds real programs.",
  realWorldAnalogy: {
    title: "Understanding Return Values",
    story: "A calculator: you type 2 + 3, press =, and the display shows 6 — the machine returns the answer to you.",
    comparison: [
      { item: "return 6", meaning: "The display showing the answer." },
      { item: "No return", meaning: "Pressing buttons with a blank display — nothing comes back." }
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
      reason: "console.log shows you the value; only return gives it to the caller."
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
    "return sends a value back and ends the function.",
    "Code after return never executes.",
    "Without return, a function gives back undefined."
  ],
  quizQuestions: [
    { id: "js-return-1", question: "What does a function give back with no return?", options: ["undefined", "0", "null", "An error"], correctAnswerIndex: 0, explanation: "Functions without return evaluate to undefined." },
    { id: "js-return-2", question: "What happens to code after return?", options: ["It never runs", "It runs twice", "It runs first", "It causes an error"], correctAnswerIndex: 0, explanation: "return exits the function immediately." }
  ]
};

// LESSON: Default Parameters
export const jsDefaultParametersContent: LessonContent = {
  heroTagline: "Backup values when the caller skips an argument",
  introduction: "Default parameters give a parameter a fallback: function greet(name = 'Guest'). If the caller passes nothing, the default is used instead of undefined.",
  definition: {
    term: "Default parameter",
    explanation: "A parameter with an assigned fallback value in the definition. It applies only when the argument is missing or explicitly undefined."
  },
  whyItMatters: "Defaults make functions friendly: greet() still works, settings merge cleanly, and you avoid undefined crashing your math or text.",
  realWorldAnalogy: {
    title: "Understanding Default Parameters",
    story: "A restaurant's 'chef's choice' fallback: order without choosing and the kitchen serves the default dish instead of an empty plate.",
    comparison: [
      { item: "name = 'Guest'", meaning: "The chef's-choice dish on the menu." },
      { item: "greet()", meaning: "Ordering without choosing — you get the default." }
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
      reason: "Arguments fill left to right, so defaults belong at the end."
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
    "Defaults apply when an argument is missing or undefined.",
    "They prevent undefined from breaking your logic.",
    "Place defaulted parameters at the end of the list."
  ],
  quizQuestions: [
    { id: "js-defaultparams-1", question: "In function f(x = 10), what is f()?", options: ["10", "undefined", "Error", "0"], correctAnswerIndex: 0, explanation: "The missing argument falls back to the default 10." },
    { id: "js-defaultparams-2", question: "Where should default parameters go?", options: ["At the end of the parameter list", "At the start", "In the middle", "Anywhere"], correctAnswerIndex: 0, explanation: "Arguments fill left to right, so defaults belong last." }
  ]
};

// LESSON: Arrow Functions
export const jsArrowFunctionsContent: LessonContent = {
  heroTagline: "Tiny functions with the => syntax",
  introduction: "Arrow functions are a compact function style: (a, b) => a + b. With one expression, you can skip braces and return. They are the standard for callbacks and array methods.",
  definition: {
    term: "Arrow function",
    explanation: "A concise function written with =>. Single-expression bodies return automatically; longer bodies use braces with an explicit return."
  },
  whyItMatters: "Modern JavaScript is full of arrows — event handlers, map/filter callbacks, promises. Reading them fluently is non-negotiable.",
  realWorldAnalogy: {
    title: "Understanding Arrow Functions",
    story: "Texting vs writing a letter: 'brb' carries the same meaning as a formal note — shorter, for quick messages.",
    comparison: [
      { item: "function(x) { return x * 2; }", meaning: "The formal letter." },
      { item: "x => x * 2", meaning: "The text — same job, fewer words." }
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
      reason: "Wrap an object literal in parentheses so it isn't read as a block."
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
    "=> defines a compact function.",
    "Single expressions return automatically.",
    "Multi-line arrows need { } and an explicit return."
  ],
  quizQuestions: [
    { id: "js-arrow-1", question: "What does n => n * 2 return?", options: ["n * 2", "undefined", "n", "Nothing"], correctAnswerIndex: 0, explanation: "Single-expression arrows implicitly return the expression." },
    { id: "js-arrow-2", question: "When do you need braces in an arrow?", options: ["For multi-line bodies", "Always", "Never", "Only with numbers"], correctAnswerIndex: 0, explanation: "Multiple statements need braces plus an explicit return." }
  ]
};

// LESSON: Scope
export const jsScopeContent: LessonContent = {
  heroTagline: "Where your variables are allowed to exist",
  introduction: "Scope decides where a variable is visible. Global scope = everywhere; function/block scope = only inside. A variable declared inside a function cannot be used outside it.",
  definition: {
    term: "Scope",
    explanation: "The region of code where a variable is accessible. let and const are block-scoped: they exist only inside the nearest { }."
  },
  whyItMatters: "Scope prevents name collisions: two functions can each have their own 'total' without interfering. It is how big programs stay sane.",
  realWorldAnalogy: {
    title: "Understanding Scope",
    story: "Rooms in a house: a book in the bedroom isn't reachable from the kitchen. Global variables are like books left in the hallway — everyone can grab them.",
    comparison: [
      { item: "Local (block) scope", meaning: "The bedroom book — only usable in that room." },
      { item: "Global scope", meaning: "The hallway book — reachable everywhere (use sparingly)." }
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
      reason: "Assigning without declaration creates a global — a classic source of bugs."
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
    "let/const live only inside their block { }.",
    "Inner scopes can read outer variables, not the reverse.",
    "Always declare variables — never create accidental globals."
  ],
  quizQuestions: [
    { id: "js-scope-1", question: "Where is a let inside a function visible?", options: ["Only inside that function", "Everywhere", "Only in other functions", "Nowhere"], correctAnswerIndex: 0, explanation: "Block scope confines it to the function body." },
    { id: "js-scope-2", question: "Can inner code read a global variable?", options: ["Yes", "No", "Only once", "Only in loops"], correctAnswerIndex: 0, explanation: "Inner scopes can access outer-scope variables." }
  ]
};

// LESSON: Callback Functions
export const jsCallbacksContent: LessonContent = {
  heroTagline: "Passing a function as an argument to another function",
  introduction: "A callback is a function you hand to another function to run later: button.addEventListener('click', handleClick). The outer function decides WHEN; your callback decides WHAT.",
  definition: {
    term: "Callback function",
    explanation: "A function passed as an argument to another function, to be invoked later — after an event, a timer, or when data arrives."
  },
  whyItMatters: "Events, timers, and array methods all run on callbacks. They are how JavaScript says 'do this when that happens'.",
  realWorldAnalogy: {
    title: "Understanding Callbacks",
    story: "Leaving a voicemail number with a shop: 'call me back when my order is ready' — you decide what happens, they decide when.",
    comparison: [
      { item: "Your number", meaning: "The callback — what to run." },
      { item: "The shop", meaning: "The outer function — decides when to run it." }
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
      reason: "Parentheses call immediately. Pass the name so it runs on click."
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
    "A callback is a function passed to another function.",
    "Pass the name without () to defer execution.",
    "Events, timers, and array methods all use callbacks."
  ],
  quizQuestions: [
    { id: "js-callback-1", question: "What is a callback?", options: ["A function passed to another function to run later", "A function that calls itself", "A syntax error", "A loop"], correctAnswerIndex: 0, explanation: "Callbacks are handed over and invoked later by the receiver." },
    { id: "js-callback-2", question: "Why no () in addEventListener(\"click\", handleClick)?", options: ["To pass it for later instead of running now", "Parentheses are banned", "It runs faster", "No reason"], correctAnswerIndex: 0, explanation: "() would execute immediately; the name defers it until the click." }
  ]
};

// ============================================================
// MODULE 7: Arrays and Objects (unique lessons)
// ============================================================

// LESSON: Arrays (module 7 deep dive)
export const jsArraysDeepContent: LessonContent = {
  heroTagline: "Mastering lists: the workhorse of JavaScript data",
  introduction: "Arrays are ordered collections, but there's more to master: mixed types are allowed, arrays are objects under the hood, and typeof returns 'object' — so use Array.isArray() to check.",
  definition: {
    term: "Array (deep dive)",
    explanation: "A special object optimized for ordered lists. It has a length property and dozens of built-in methods for adding, removing, searching, and transforming items."
  },
  whyItMatters: "APIs return arrays, UIs render arrays, databases return arrays. Deep array fluency is what separates beginners from working developers.",
  realWorldAnalogy: {
    title: "Understanding Arrays Deeply",
    story: "A train with numbered cars: you can add cars, remove cars, check how many there are — and confirm 'is this actually a train?' before boarding.",
    comparison: [
      { item: "Array.isArray(x)", meaning: "Checking 'is this really a train?' — typeof says 'object' for both." },
      { item: ".length", meaning: "Counting the cars." }
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
      reason: "typeof an array is 'object'. Only Array.isArray tells the truth."
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
    "Arrays can hold mixed types, but keep them consistent.",
    "typeof [] is 'object' — use Array.isArray() to check.",
    "Never assign far past the end; it creates holes."
  ],
  quizQuestions: [
    { id: "js-arraysdeep-1", question: "What is typeof [1, 2, 3]?", options: ["\"object\"", "\"array\"", "\"list\"", "\"number\""], correctAnswerIndex: 0, explanation: "Arrays are objects; typeof reports 'object'." },
    { id: "js-arraysdeep-2", question: "How do you reliably check for an array?", options: ["Array.isArray(x)", "typeof x === \"array\"", "x.isArray", "x.length > 0"], correctAnswerIndex: 0, explanation: "Array.isArray is the correct test." }
  ]
};

// LESSON: Accessing Array Items
export const jsAccessingArrayItemsContent: LessonContent = {
  heroTagline: "Reading exactly the item you need by position",
  introduction: "Access items with brackets and an index: fruits[0] is the first, fruits[fruits.length - 1] is the last. Indexes can come from variables and expressions too — arr[i + 1] works.",
  definition: {
    term: "Array access",
    explanation: "Reading an element via array[index]. The index is zero-based: 0 is first, length - 1 is last. Out-of-range indexes give undefined."
  },
  whyItMatters: "Rendering lists, reading API results, picking winners — every app constantly plucks specific items out of arrays.",
  realWorldAnalogy: {
    title: "Understanding Array Access",
    story: "Library shelves: each book has a numbered slot. Ask for slot 0, get the first book; ask for a slot that doesn't exist, get nothing.",
    comparison: [
      { item: "books[2]", meaning: "Asking the librarian for the book in slot 2." },
      { item: "books[99]", meaning: "Asking for a slot that doesn't exist — undefined." }
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
      reason: "The last index is length - 1, not length."
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
    "arr[i] reads the item at index i; indexes start at 0.",
    "arr[arr.length - 1] is always the last item.",
    "Out-of-range access returns undefined, not an error."
  ],
  quizQuestions: [
    { id: "js-accessarr-1", question: "What is [\"a\",\"b\",\"c\"][0]?", options: ["\"a\"", "\"b\"", "\"c\"", "0"], correctAnswerIndex: 0, explanation: "Index 0 is the first item." },
    { id: "js-accessarr-2", question: "What does arr[100] give for a 3-item array?", options: ["undefined", "Error", "null", "The last item"], correctAnswerIndex: 0, explanation: "Out-of-range indexes return undefined." }
  ]
};

// LESSON: Adding Items
export const jsAddingItemsContent: LessonContent = {
  heroTagline: "Growing your list with push() and unshift()",
  introduction: "Add items to the end with push() or to the start with unshift(). push() returns the new length; both change the original array. These are how carts, chats, and feeds grow.",
  definition: {
    term: "push() and unshift()",
    explanation: "push(item) appends to the end; unshift(item) prepends to the start. Both mutate the array and return the new length."
  },
  whyItMatters: "Lists grow constantly — new messages, new products, new tasks. push() is probably the most-called array method in existence.",
  realWorldAnalogy: {
    title: "Understanding push and unshift",
    story: "A queue at a ticket counter: newcomers join at the back (push); a VIP is ushered to the front (unshift).",
    comparison: [
      { item: "queue.push('Ali')", meaning: "Ali joins the back of the line." },
      { item: "queue.unshift('VIP')", meaning: "VIP goes straight to the front." }
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
      reason: "push returns the new length, not the array."
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
    "push() adds to the end; unshift() adds to the start.",
    "Both return the new length, not the array.",
    "push() can add multiple items in one call."
  ],
  quizQuestions: [
    { id: "js-addingitems-1", question: "What does [1,2].push(3) return?", options: ["3 (the new length)", "[1,2,3]", "undefined", "2"], correctAnswerIndex: 0, explanation: "push returns the new length of the array." },
    { id: "js-addingitems-2", question: "How do you add to the START of an array?", options: ["unshift()", "push()", "append()", "addFirst()"], correctAnswerIndex: 0, explanation: "unshift inserts at index 0." }
  ]
};

// LESSON: Removing Items
export const jsRemovingItemsContent: LessonContent = {
  heroTagline: "Shrinking your list with pop() and shift()",
  introduction: "Remove from the end with pop() or from the start with shift(). Both RETURN the removed item — handy when you need to use it. The array shrinks by one each time.",
  definition: {
    term: "pop() and shift()",
    explanation: "pop() removes and returns the last item; shift() removes and returns the first item. Both mutate the original array."
  },
  whyItMatters: "Undo stacks, queues, and 'recent items' lists all remove from ends. pop/shift are the mirror of push/unshift.",
  realWorldAnalogy: {
    title: "Understanding pop and shift",
    story: "A stack of plates: you take from the top (pop). A queue at the bank: the front person is served next (shift).",
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
      reason: "pop() and shift() take no arguments — they always target the ends."
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
    "pop() removes and returns the last item.",
    "shift() removes and returns the first item.",
    "They take no arguments — ends only."
  ],
  quizQuestions: [
    { id: "js-removingitems-1", question: "What does [1,2,3].pop() return?", options: ["3", "[1,2]", "1", "undefined"], correctAnswerIndex: 0, explanation: "pop removes and returns the last item." },
    { id: "js-removingitems-2", question: "Which removes the FIRST item?", options: ["shift()", "pop()", "remove()", "delete()"], correctAnswerIndex: 0, explanation: "shift takes from the start." }
  ]
};

// LESSON: Array Methods
export const jsArrayMethodsContent: LessonContent = {
  heroTagline: "The essential toolkit: slice, splice, join, and friends",
  introduction: "Beyond push/pop, arrays offer slice() (copy a portion), splice() (add/remove anywhere), join() (glue into text), includes() (check membership), and indexOf() (find position). Together they handle most list jobs.",
  definition: {
    term: "Array utility methods",
    explanation: "Built-in functions on arrays: slice copies a range, splice edits in place, join builds a string, includes tests membership, indexOf finds positions."
  },
  whyItMatters: "These five methods cover 80% of real list work: pagination (slice), editing (splice), display (join), and searching (includes/indexOf).",
  realWorldAnalogy: {
    title: "Understanding Array Methods",
    story: "A tailor's toolkit: scissors cut a piece (slice), pins alter the garment (splice), thread joins pieces (join), a checklist verifies (includes).",
    comparison: [
      { item: "slice()", meaning: "Cutting a copy — the original fabric is untouched." },
      { item: "splice()", meaning: "Altering the garment itself — changes are permanent." }
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
      reason: "slice returns a new array; the original is untouched. Capture the result."
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
    "slice() copies a range without touching the original.",
    "splice() adds/removes items in place.",
    "join(), includes(), and indexOf() handle display and search."
  ],
  quizQuestions: [
    { id: "js-arrmethods-1", question: "Does slice() change the original array?", options: ["No — it returns a copy", "Yes", "Only sometimes", "It deletes it"], correctAnswerIndex: 0, explanation: "slice is non-mutating; it returns a new array." },
    { id: "js-arrmethods-2", question: "What does [\"a\",\"b\"].join(\"-\") give?", options: ["\"a-b\"", "\"ab\"", "[\"a-b\"]", "Error"], correctAnswerIndex: 0, explanation: "join glues items into one string with the separator." }
  ]
};

// LESSON: map()
export const jsMapContent: LessonContent = {
  heroTagline: "Transform every item into something new",
  introduction: "map() runs a function on each item and collects the results into a NEW array. [1,2,3].map(n => n * 2) gives [2,4,6]. The original array is never changed.",
  definition: {
    term: "map()",
    explanation: "An array method that transforms each element with a callback and returns a new array of the results, one-to-one, in the same order."
  },
  whyItMatters: "Rendering product cards, converting currencies, extracting names from user objects — map() is the standard 'transform a list' tool.",
  realWorldAnalogy: {
    title: "Understanding map()",
    story: "A photo filter applied to every picture in an album: each original stays, and you get a new album of filtered copies.",
    comparison: [
      { item: "The callback", meaning: "The filter — applied to each photo." },
      { item: "The new array", meaning: "The new album — originals untouched." }
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
      reason: "Braces need an explicit return. For one-liners, skip the braces."
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
    "map() transforms each item and returns a new array.",
    "The original array is never modified.",
    "Result length always equals the original length."
  ],
  quizQuestions: [
    { id: "js-map-1", question: "What does [1,2,3].map(n => n * 10) return?", options: ["[10, 20, 30]", "[1, 2, 3]", "60", "undefined"], correctAnswerIndex: 0, explanation: "Each item is transformed; a new array is returned." },
    { id: "js-map-2", question: "Does map() change the original array?", options: ["No", "Yes", "Only the first item", "It deletes it"], correctAnswerIndex: 0, explanation: "map is non-mutating — it builds a new array." }
  ]
};

// LESSON: filter()
export const jsFilterContent: LessonContent = {
  heroTagline: "Keep only the items that pass your test",
  introduction: "filter() keeps items where your callback returns true and drops the rest: ages.filter(a => a >= 18). It returns a NEW array — possibly shorter — and never touches the original.",
  definition: {
    term: "filter()",
    explanation: "An array method that tests each element with a callback and returns a new array containing only the elements that passed (truthy result)."
  },
  whyItMatters: "Search results, 'in stock only' toggles, active users, valid orders — filtering lists by a rule is everyday work.",
  realWorldAnalogy: {
    title: "Understanding filter()",
    story: "A bouncer with a guest list: each person is checked; matches enter the club (new array), others stay outside.",
    comparison: [
      { item: "The callback test", meaning: "Checking the guest list for each person." },
      { item: "The new array", meaning: "Everyone who made it inside." }
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
      reason: "With braces you must return the test result explicitly."
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
    "filter() keeps items whose test returns true.",
    "It returns a new, possibly shorter array.",
    "The original array is unchanged."
  ],
  quizQuestions: [
    { id: "js-filter-1", question: "What does [5, 12, 8].filter(n => n > 7) return?", options: ["[12, 8]", "[5]", "[5, 12, 8]", "12"], correctAnswerIndex: 0, explanation: "Only 12 and 8 pass the > 7 test." },
    { id: "js-filter-2", question: "Does filter() modify the original?", options: ["No", "Yes", "It empties it", "It sorts it"], correctAnswerIndex: 0, explanation: "filter builds and returns a new array." }
  ]
};

// LESSON: find()
export const jsFindContent: LessonContent = {
  heroTagline: "Get the FIRST item that matches — just one",
  introduction: "find() returns the first element passing your test, or undefined if none matches: users.find(u => u.id === 7). Unlike filter(), it stops at the first hit and gives you the item itself, not an array.",
  definition: {
    term: "find()",
    explanation: "An array method that returns the first element whose callback returns true, or undefined when nothing matches. It short-circuits on the first hit."
  },
  whyItMatters: "Looking up a user by id, a product by SKU, a config by key — you want the one item, not a list. find() is the lookup tool.",
  realWorldAnalogy: {
    title: "Understanding find()",
    story: "Searching a parking lot for your car: you stop at the FIRST matching car — you don't keep checking every remaining spot.",
    comparison: [
      { item: "find()", meaning: "Stopping at your car — one result." },
      { item: "filter()", meaning: "Listing every red car in the lot — many results." }
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
      reason: "find() returns undefined on no match — check before using it."
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
    "find() returns the first matching item itself.",
    "It returns undefined when nothing matches — always check.",
    "Use find for one item, filter for many."
  ],
  quizQuestions: [
    { id: "js-find-1", question: "What does [3, 7, 9].find(n => n > 5) return?", options: ["7", "[7, 9]", "9", "undefined"], correctAnswerIndex: 0, explanation: "find stops at the first match: 7." },
    { id: "js-find-2", question: "What if nothing matches?", options: ["undefined", "An empty array", "null", "Error"], correctAnswerIndex: 0, explanation: "find returns undefined on no match." }
  ]
};

// LESSON: reduce()
export const jsReduceContent: LessonContent = {
  heroTagline: "Boil a whole array down to one value",
  introduction: "reduce() combines all items into a single result: a total, an average, a merged object. You give it a function (accumulator, item) and a starting value — it folds the array step by step.",
  definition: {
    term: "reduce()",
    explanation: "An array method that runs a callback on each element, carrying an accumulator forward, and returns one final value. The second argument is the starting value."
  },
  whyItMatters: "Cart totals, vote counts, word frequencies — 'many values → one answer' is reduce()'s home turf.",
  realWorldAnalogy: {
    title: "Understanding reduce()",
    story: "A snowball rolling downhill: it starts small (initial value) and gathers more snow (each item) until it's one big ball (the result).",
    comparison: [
      { item: "The accumulator", meaning: "The snowball — grows each round." },
      { item: "The initial value", meaning: "The starting snowball size (often 0)." }
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
      reason: "Without a start value, an empty array throws. Always pass the initial value."
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
    "reduce() folds an array into a single value.",
    "The callback gets (accumulator, currentItem).",
    "Always pass a starting value as the second argument."
  ],
  quizQuestions: [
    { id: "js-reduce-1", question: "What does [1,2,3,4].reduce((t,n) => t + n, 0) return?", options: ["10", "24", "4", "0"], correctAnswerIndex: 0, explanation: "1+2+3+4 = 10." },
    { id: "js-reduce-2", question: "Why pass an initial value?", options: ["So empty arrays don't throw and the start is explicit", "It makes it faster", "The engine requires 3 args", "No reason"], correctAnswerIndex: 0, explanation: "Without it, reduce on an empty array throws a TypeError." }
  ]
};

// LESSON: Objects (module 7 deep dive)