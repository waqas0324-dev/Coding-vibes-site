import { LessonContent } from '../../types';

// ============================================================
// MODULE 3: Operators (unique lessons)
// ============================================================

// LESSON: Arithmetic Operators
export const jsArithmeticOperatorsContent: LessonContent = {
  heroTagline: "Math in code: add, subtract, multiply, divide, and more",
  introduction: "Arithmetic operators do math on numbers: + adds, - subtracts, * multiplies, / divides, and % gives the remainder. They power every total, average, and score in your apps.",
  definition: {
    term: "Arithmetic operators",
    explanation: "Symbols that perform mathematical calculations: + (add), - (subtract), * (multiply), / (divide), % (remainder), ** (power)."
  },
  whyItMatters: "Shopping totals, game scores, discounts, and averages all use these operators. They are the most-used operators in any program.",
  realWorldAnalogy: {
    title: "Understanding Arithmetic Operators",
    story: "A cash register's buttons: each key performs one math job on the numbers you type.",
    comparison: [
      { item: "% (modulo)", meaning: "The 'leftover' key — 7 % 3 is 1, the remainder." },
      { item: "** (power)", meaning: "The 'times itself' key — 2 ** 3 is 8." }
    ]
  },
  syntaxStructure: `let a = 10, b = 3;
a + b;  // 13
a - b;  // 7
a * b;  // 30
a / b;  // 3.333...
a % b;  // 1 — remainder
a ** b; // 1000 — 10 to the power 3`,
  codeExample: `let bill = 500;
let discount = 50;
let tax = 80;
let final = bill - discount + tax;
console.log(final); // 530`,
  codeAnnotations: [
    { lineOrToken: "bill - discount + tax", description: "Subtraction and addition combine into the final amount." },
    { lineOrToken: "let final = ...", description: "The whole calculation resolves to one number, 530." }
  ],
  commonMistakes: [
    {
      wrong: "let half = 7 / 2;  // expecting 3",
      correct: "let half = 7 / 2;  // 3.5 — decimals are kept",
      reason: "JavaScript division keeps decimals. Use Math.floor() if you need a whole number."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let x = 17;
let y = 5;
document.getElementById("out").textContent =
  "Remainder of 17 / 5 is " + (x % y);`,
    instructions: "Change x and y, and try ** for powers."
  },
  takeaways: [
    "+ - * / do basic math; % gives the remainder; ** raises to a power.",
    "Division keeps decimal places.",
    "Operators combine into full expressions like bill - discount + tax."
  ],
  quizQuestions: [
    { id: "js-arith-1", question: "What is 10 % 3?", options: ["1", "3", "0", "3.33"], correctAnswerIndex: 0, explanation: "10 divided by 3 leaves a remainder of 1." },
    { id: "js-arith-2", question: "What does 2 ** 4 evaluate to?", options: ["16", "8", "6", "24"], correctAnswerIndex: 0, explanation: "** is the power operator: 2 × 2 × 2 × 2 = 16." }
  ]
};

// LESSON: Assignment Operators
export const jsAssignmentOperatorsContent: LessonContent = {
  heroTagline: "Shortcuts that update a variable in one step",
  introduction: "Assignment operators combine math with storing the result: x += 5 means x = x + 5. They make counters, totals, and accumulators short and readable.",
  definition: {
    term: "Assignment operators",
    explanation: "Shorthand that performs an operation and stores the result back: +=, -=, *=, /=, %= update the variable in place."
  },
  whyItMatters: "Running totals and scores update constantly. Writing total += price is cleaner and less error-prone than total = total + price.",
  realWorldAnalogy: {
    title: "Understanding Assignment Operators",
    story: "Topping up a prepaid phone balance: 'add 500 to my current balance' — one action, not 'read balance, add 500, save balance'.",
    comparison: [
      { item: "balance += 500", meaning: "Top up: add 500 to the existing balance." },
      { item: "balance = balance + 500", meaning: "The long manual version of the same top-up." }
    ]
  },
  syntaxStructure: `let x = 10;
x += 5;  // 15 — same as x = x + 5
x -= 3;  // 12
x *= 2;  // 24
x /= 4;  // 6
x %= 4;  // 2`,
  codeExample: `let cartTotal = 0;
cartTotal += 250; // add a shirt
cartTotal += 120; // add socks
cartTotal -= 50;  // apply coupon
console.log(cartTotal); // 320`,
  codeAnnotations: [
    { lineOrToken: "cartTotal += 250;", description: "Adds 250 to the running total in one step." },
    { lineOrToken: "cartTotal -= 50;", description: "Subtracts the coupon discount from the total." }
  ],
  commonMistakes: [
    {
      wrong: "let x = 5;\nx =+ 3;  // x is 3, not 8!",
      correct: "x += 3;  // x is 8",
      reason: "=+ is just assignment of positive 3. The plus must come first: +=."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let points = 100;
points += 25;
points *= 2;
document.getElementById("out").textContent = "Points: " + points;`,
    instructions: "Add a points -= 10 line and re-run."
  },
  takeaways: [
    "+= -= *= /= %= update a variable in one short step.",
    "x += 5 is identical to x = x + 5.",
    "Watch the order: += works, =+ does something different."
  ],
  quizQuestions: [
    { id: "js-assign-1", question: "If x = 10, what is x after x *= 3?", options: ["30", "13", "7", "103"], correctAnswerIndex: 0, explanation: "x *= 3 means x = x * 3 = 30." },
    { id: "js-assign-2", question: "What does x -= 4 do?", options: ["Subtracts 4 from x and stores it", "Sets x to -4", "Compares x with 4", "Nothing"], correctAnswerIndex: 0, explanation: "-= subtracts and reassigns in one step." }
  ]
};

// LESSON: Comparison Operators
export const jsComparisonOperatorsContent: LessonContent = {
  heroTagline: "Asking questions that answer true or false",
  introduction: "Comparison operators compare two values and return a boolean: == checks value, === checks value AND type, > < >= <= compare size, and !== means 'not equal'.",
  definition: {
    term: "Comparison operators",
    explanation: "Operators that test relationships between values and return true or false: ==, ===, !=, !==, >, <, >=, <."
  },
  whyItMatters: "Every if statement depends on comparisons — is the password correct? Is the user old enough? Getting === right prevents sneaky bugs.",
  realWorldAnalogy: {
    title: "Understanding Comparison Operators",
    story: "A bouncer checking IDs: 'Are you 18 or older?' (≥), 'Does this name match the list exactly?' (===).",
    comparison: [
      { item: "==", meaning: "Loose check — '5' == 5 is true (types ignored)." },
      { item: "===", meaning: "Strict check — '5' === 5 is false (types matter)." }
    ]
  },
  syntaxStructure: `5 == "5";   // true — loose
5 === "5";  // false — strict
5 !== "5";  // true
10 > 7;     // true
10 <= 10;   // true`,
  codeExample: `let age = 20;
console.log(age >= 18);   // true — can vote
console.log(age === "20"); // false — number vs string
console.log(age !== 18);   // true`,
  codeAnnotations: [
    { lineOrToken: "age >= 18", description: "Asks: is age 18 or more? Answer: true." },
    { lineOrToken: 'age === "20"', description: "Strict: number 20 is not string '20' — false." }
  ],
  commonMistakes: [
    {
      wrong: "if (password = 'secret') { }  // assigns, always truthy!",
      correct: "if (password === 'secret') { }",
      reason: "One = assigns; === compares. Using = inside if is a classic bug."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let score = 75;
let result = score >= 50;
document.getElementById("out").textContent = "Passed? " + result;`,
    instructions: "Change the score and the threshold, then re-run."
  },
  takeaways: [
    "Comparisons return true or false.",
    "Always prefer === over == to avoid type surprises.",
    "Never use a single = inside an if condition."
  ],
  quizQuestions: [
    { id: "js-compare-1", question: "What is 5 === \"5\"?", options: ["false", "true", "Error", "undefined"], correctAnswerIndex: 0, explanation: "=== checks type too: number vs string is false." },
    { id: "js-compare-2", question: "What does !== mean?", options: ["Strictly not equal (value or type differs)", "Roughly equal", "Greater than", "Assign and compare"], correctAnswerIndex: 0, explanation: "!== is true when value or type does not match." }
  ]
};

// LESSON: Logical Operators
export const jsLogicalOperatorsContent: LessonContent = {
  heroTagline: "Combining conditions with AND, OR, and NOT",
  introduction: "Logical operators join booleans: && (AND) needs both sides true, || (OR) needs at least one true, and ! (NOT) flips true to false. They build real-world rules like 'logged in AND has credit'.",
  definition: {
    term: "Logical operators",
    explanation: "Operators that combine or invert boolean values: && (and), || (or), ! (not). They return true or false based on the combination."
  },
  whyItMatters: "Real rules are compound: 'weekend AND sunny' for a picnic, 'admin OR owner' for access. Logical operators express these directly.",
  realWorldAnalogy: {
    title: "Understanding Logical Operators",
    story: "Club entry rules: 'member AND over 18' (both required), 'VIP OR guest-list' (either works), 'NOT banned' (flips the check).",
    comparison: [
      { item: "&&", meaning: "The strict bouncer — every condition must pass." },
      { item: "||", meaning: "The friendly bouncer — one pass is enough." },
      { item: "!", meaning: "The reversal — flips yes to no." }
    ]
  },
  syntaxStructure: `true && true;    // true
true && false;   // false
false || true;   // true
!true;           // false`,
  codeExample: `let age = 22;
let hasTicket = true;
let canEnter = age >= 18 && hasTicket;
console.log(canEnter); // true

let isBanned = false;
console.log(!isBanned); // true — not banned`,
  codeAnnotations: [
    { lineOrToken: "age >= 18 && hasTicket", description: "Both must be true — age passes and ticket exists." },
    { lineOrToken: "!isBanned", description: "NOT flips false to true." }
  ],
  commonMistakes: [
    {
      wrong: "if (day === 'Sat' || 'Sun') { }  // always true!",
      correct: "if (day === 'Sat' || day === 'Sun') { }",
      reason: "Each side of || needs its own full comparison — 'Sun' alone is truthy text."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let age = 16;
let withParent = true;
let canWatch = age >= 18 || withParent;
document.getElementById("out").textContent = "Can watch movie? " + canWatch;`,
    instructions: "Set withParent to false and see the result change."
  },
  takeaways: [
    "&& needs all true; || needs at least one true; ! flips a boolean.",
    "Each side of && and || must be a complete condition.",
    "Use parentheses to make combined logic readable."
  ],
  quizQuestions: [
    { id: "js-logical-1", question: "What is true && false?", options: ["false", "true", "Error", "undefined"], correctAnswerIndex: 0, explanation: "AND needs both sides true." },
    { id: "js-logical-2", question: "What is !false?", options: ["true", "false", "0", "Error"], correctAnswerIndex: 0, explanation: "! flips the boolean: not-false is true." }
  ]
};

// LESSON: Increment
export const jsIncrementContent: LessonContent = {
  heroTagline: "Adding one — the shortcut every counter uses",
  introduction: "The ++ operator adds 1 to a variable: count++ is the short way of writing count = count + 1. It is used in loops, scores, likes, and any counter.",
  definition: {
    term: "Increment operator (++)",
    explanation: "Adds 1 to a variable and stores the result. count++ increases count by exactly one."
  },
  whyItMatters: "Counters appear everywhere — loop iterations, cart quantities, game scores, page views. ++ is the idiom every developer recognizes instantly.",
  realWorldAnalogy: {
    title: "Understanding Increment",
    story: "A turnstile at a stadium: each person passing clicks the counter up by exactly one.",
    comparison: [
      { item: "count++", meaning: "One person passes — click, counter goes up by 1." },
      { item: "count = count + 1", meaning: "The manual way of clicking the same turnstile." }
    ]
  },
  syntaxStructure: `let likes = 10;
likes++;       // 11
console.log(likes);`,
  codeExample: `let score = 0;
score++; // +1 — answered correctly
score++; // +1 — another correct answer
score++; // +1 — streak!
console.log("Final score: " + score); // 3`,
  codeAnnotations: [
    { lineOrToken: "score++;", description: "Adds 1 to score and saves it back." },
    { lineOrToken: '"Final score: " + score', description: "Shows 3 after three increments." }
  ],
  commonMistakes: [
    {
      wrong: "let x = 5;\nlet y = x++;  // y is 5, x becomes 6",
      correct: "let x = 5;\nlet y = ++x;  // y is 6, x is 6",
      reason: "x++ returns the OLD value first; ++x increments before returning. Prefer separate lines to avoid confusion."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let clicks = 0;
clicks++;
clicks++;
document.getElementById("out").textContent = "Clicks: " + clicks;`,
    instructions: "Add more clicks++ lines and re-run."
  },
  takeaways: [
    "++ adds exactly 1 to a variable.",
    "It is shorthand for x = x + 1.",
    "x++ uses the old value first; ++x uses the new value."
  ],
  quizQuestions: [
    { id: "js-inc-1", question: "If x = 7, what is x after x++?", options: ["8", "7", "9", "6"], correctAnswerIndex: 0, explanation: "++ adds 1: 7 becomes 8." },
    { id: "js-inc-2", question: "What does x++ do?", options: ["Increases x by 1", "Doubles x", "Sets x to 0", "Deletes x"], correctAnswerIndex: 0, explanation: "The increment operator adds exactly one." }
  ]
};

// LESSON: Decrement
export const jsDecrementContent: LessonContent = {
  heroTagline: "Subtracting one — countdowns and stock levels",
  introduction: "The -- operator subtracts 1 from a variable: stock-- is shorthand for stock = stock - 1. It drives countdown timers, remaining attempts, and inventory counts.",
  definition: {
    term: "Decrement operator (--)",
    explanation: "Subtracts 1 from a variable and stores the result. stock-- reduces stock by exactly one."
  },
  whyItMatters: "Anything that counts down uses --: OTP attempts left, items in stock, seconds on a timer, lives in a game.",
  realWorldAnalogy: {
    title: "Understanding Decrement",
    story: "Taking cookies from a jar: each cookie removed drops the count by one until the jar is empty.",
    comparison: [
      { item: "cookies--", meaning: "Take one cookie — count drops by 1." },
      { item: "cookies = cookies - 1", meaning: "The longhand version of the same grab." }
    ]
  },
  syntaxStructure: `let lives = 3;
lives--;       // 2
console.log(lives);`,
  codeExample: `let attemptsLeft = 3;
attemptsLeft--; // wrong OTP entered
attemptsLeft--; // wrong again
console.log("Attempts left: " + attemptsLeft); // 1`,
  codeAnnotations: [
    { lineOrToken: "attemptsLeft--;", description: "Each wrong try removes one attempt." },
    { lineOrToken: '"Attempts left: " + attemptsLeft', description: "Shows 1 after two decrements." }
  ],
  commonMistakes: [
    {
      wrong: "let n = 5;\nn--;\nconsole.log(n--); // prints 4, n becomes 3!",
      correct: "let n = 5;\nn--;\nconsole.log(n); // prints 4",
      reason: "n-- inside console.log prints the old value, then decrements again. Decrement once, then print."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let stock = 5;
stock--;
stock--;
document.getElementById("out").textContent = "Stock left: " + stock;`,
    instructions: "Keep decrementing until stock hits 0."
  },
  takeaways: [
    "-- subtracts exactly 1 from a variable.",
    "It is shorthand for x = x - 1.",
    "Perfect for countdowns, attempts, and inventory."
  ],
  quizQuestions: [
    { id: "js-dec-1", question: "If stock = 5, what is stock after stock--?", options: ["4", "5", "6", "0"], correctAnswerIndex: 0, explanation: "-- subtracts 1: 5 becomes 4." },
    { id: "js-dec-2", question: "Which is equivalent to n--?", options: ["n = n - 1", "n = n + 1", "n = 0", "n = -n"], correctAnswerIndex: 0, explanation: "Decrement subtracts one and stores the result." }
  ]
};

// LESSON: Ternary Operator
export const jsTernaryOperatorContent: LessonContent = {
  heroTagline: "An if-else squeezed into a single line",
  introduction: "The ternary operator is a shortcut for simple if-else: condition ? valueIfTrue : valueIfFalse. It picks one of two values based on a condition — perfect for labels, classes, and messages.",
  definition: {
    term: "Ternary operator (? :)",
    explanation: "A three-part operator: a condition, a ? with the value for true, and a : with the value for false. It returns one of the two values."
  },
  whyItMatters: "UI code constantly picks between two options — 'Login' vs 'Logout', green vs red. The ternary keeps these choices on one readable line.",
  realWorldAnalogy: {
    title: "Understanding the Ternary",
    story: "A fork in the road with two signs: 'raining? take the covered path : take the sunny path' — one quick decision.",
    comparison: [
      { item: "condition ?", meaning: "Checking the sky — is it raining?" },
      { item: ": value", meaning: "The sunny-path sign — the fallback choice." }
    ]
  },
  syntaxStructure: `let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
// same as: if (age >= 18) { status = "Adult"; } else { status = "Minor"; }`,
  codeExample: `let hour = 14;
let greeting = hour < 12 ? "Good morning" : "Good afternoon";
console.log(greeting); // Good afternoon

let stock = 0;
let label = stock > 0 ? "In stock" : "Sold out";
console.log(label); // Sold out`,
  codeAnnotations: [
    { lineOrToken: 'hour < 12 ? "Good morning" : "Good afternoon"', description: "Picks the morning text if true, afternoon text if false." },
    { lineOrToken: 'stock > 0 ? "In stock" : "Sold out"', description: "stock is 0, so the false-branch 'Sold out' wins." }
  ],
  commonMistakes: [
    {
      wrong: "let x = age > 18 ? 'Adult' : 'Teen' : 'Child';  // SyntaxError",
      correct: "let x = age > 18 ? 'Adult' : (age > 12 ? 'Teen' : 'Child');",
      reason: "Nested ternaries need parentheses and get unreadable fast — use if-else for three or more branches."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let score = 85;
let result = score >= 50 ? "Pass" : "Fail";
document.getElementById("out").textContent = "Result: " + result;`,
    instructions: "Change the score below 50 and see the label flip."
  },
  takeaways: [
    "condition ? a : b returns a when true, b when false.",
    "It is a compact replacement for simple if-else assignments.",
    "Avoid nesting ternaries — use if-else for complex logic."
  ],
  quizQuestions: [
    { id: "js-ternary-1", question: "What is 10 > 5 ? \"yes\" : \"no\"?", options: ["\"yes\"", "\"no\"", "true", "Error"], correctAnswerIndex: 0, explanation: "The condition is true, so the value after ? is returned." },
    { id: "js-ternary-2", question: "How many parts does the ternary operator have?", options: ["Three: condition, ? value, : value", "Two", "Four", "One"], correctAnswerIndex: 0, explanation: "Ternary means three parts: condition ? trueValue : falseValue." }
  ]
};

// LESSON: Operator Precedence
export const jsOperatorPrecedenceContent: LessonContent = {
  heroTagline: "Which operation runs first when they share a line",
  introduction: "When a line has several operators, precedence decides the order: * and / run before + and -, and parentheses always win. Just like in school math: 2 + 3 * 4 is 14, not 20.",
  definition: {
    term: "Operator precedence",
    explanation: "The ranking that decides which operations execute first. Multiplication and division outrank addition and subtraction; parentheses outrank everything."
  },
  whyItMatters: "Wrong order means wrong totals — a discount applied at the wrong step changes the price. Knowing precedence keeps your math correct.",
  realWorldAnalogy: {
    title: "Understanding Precedence",
    story: "Emergency room triage: critical patients are treated before routine checkups, no matter who arrived first.",
    comparison: [
      { item: "Parentheses ( )", meaning: "The critical patient — treated first, always." },
      { item: "* and /", meaning: "Urgent cases — before + and -." },
      { item: "+ and -", meaning: "Routine checkups — handled last." }
    ]
  },
  syntaxStructure: `2 + 3 * 4;      // 14 — * first
(2 + 3) * 4;    // 20 — parentheses first
10 - 4 / 2;     // 8 — / first`,
  codeExample: `let price = 100;
let qty = 3;
let discount = 20;
let total = price * qty - discount;
console.log(total); // 280 — (100*3) first, then -20`,
  codeAnnotations: [
    { lineOrToken: "price * qty - discount", description: "Multiplication wins: 300, then minus 20 gives 280." },
    { lineOrToken: "// 280", description: "Without precedence rules this could wrongly be 100 * 280." }
  ],
  commonMistakes: [
    {
      wrong: "let avg = 80 + 90 / 2;  // 125 — wrong average!",
      correct: "let avg = (80 + 90) / 2;  // 85",
      reason: "/ runs before +. Parentheses force the addition first."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let a = 2 + 3 * 4;
let b = (2 + 3) * 4;
document.getElementById("out").textContent = "a=" + a + ", b=" + b;`,
    instructions: "Predict the values before running, then check."
  },
  takeaways: [
    "* / % run before + and -.",
    "Parentheses override everything — use them for clarity.",
    "When unsure, add parentheses even if they are not strictly needed."
  ],
  quizQuestions: [
    { id: "js-precedence-1", question: "What is 2 + 3 * 4?", options: ["14", "20", "24", "9"], correctAnswerIndex: 0, explanation: "* runs first: 3 * 4 = 12, then + 2 = 14." },
    { id: "js-precedence-2", question: "What is (2 + 3) * 4?", options: ["20", "14", "24", "10"], correctAnswerIndex: 0, explanation: "Parentheses first: 5 * 4 = 20." }
  ]
};

// ============================================================
// MODULE 4: Conditions (unique lessons)
// ============================================================

// LESSON: Introduction to Conditions
export const jsConditionsIntroContent: LessonContent = {
  heroTagline: "Teaching your code to make decisions",
  introduction: "Conditions let code choose what to do: if the user is logged in, show the dashboard; otherwise, show the login page. Without conditions, every program would do the exact same thing every time.",
  definition: {
    term: "Condition",
    explanation: "A true/false test that decides which code runs. Conditions turn a fixed script into a program that reacts to data and users."
  },
  whyItMatters: "Decisions are the heart of software: discounts for members, access for admins, warnings for empty carts. Conditions make apps feel smart.",
  realWorldAnalogy: {
    title: "Understanding Conditions",
    story: "A traffic light: green means go, red means stop — the same road behaves differently based on the signal.",
    comparison: [
      { item: "The signal", meaning: "The boolean test — is it green?" },
      { item: "Go / Stop", meaning: "The two code paths that run." }
    ]
  },
  syntaxStructure: `if (isLoggedIn) {
  showDashboard();
} else {
  showLoginPage();
}`,
  codeExample: `let temperature = 35;

if (temperature > 30) {
  console.log("It's hot — drink water!");
} else {
  console.log("Nice weather!");
}`,
  codeAnnotations: [
    { lineOrToken: "if (temperature > 30) {", description: "The decision point — tests the boolean." },
    { lineOrToken: "} else {", description: "The fallback path when the test is false." }
  ],
  commonMistakes: [
    {
      wrong: "if temperature > 30 { }  // SyntaxError",
      correct: "if (temperature > 30) { }",
      reason: "The condition must be wrapped in parentheses."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let hour = 9;
if (hour < 12) {
  document.getElementById("out").textContent = "Good morning!";
} else {
  document.getElementById("out").textContent = "Good day!";
}`,
    instructions: "Change hour to 15 and see the other branch run."
  },
  takeaways: [
    "Conditions let code take different paths based on data.",
    "The test inside if ( ) must be true or false.",
    "else provides the fallback when the test fails."
  ],
  quizQuestions: [
    { id: "js-condsintro-1", question: "What is a condition?", options: ["A true/false test that picks which code runs", "A type of loop", "A variable declaration", "An HTML tag"], correctAnswerIndex: 0, explanation: "Conditions test booleans to choose between code paths." },
    { id: "js-condsintro-2", question: "Why do programs need conditions?", options: ["To react differently to different data and users", "To run faster", "To use less memory", "To load images"], correctAnswerIndex: 0, explanation: "Conditions make programs dynamic instead of fixed." }
  ]
};

// LESSON: if Statement
export const jsIfStatementContent: LessonContent = {
  heroTagline: "Run this code — but only when the test is true",
  introduction: "The if statement runs its block only when the condition in parentheses is true. If the test is false, the block is skipped silently. It is the simplest decision in programming.",
  definition: {
    term: "if statement",
    explanation: "A control structure: if (condition) { ... }. The code inside the braces executes only when the condition evaluates to true."
  },
  whyItMatters: "Guard clauses, validations, and feature checks all start with a plain if. Master it and every other conditional builds on it.",
  realWorldAnalogy: {
    title: "Understanding if",
    story: "An umbrella rule: IF it is raining, take the umbrella. Not raining? The rule does nothing.",
    comparison: [
      { item: "if (raining)", meaning: "Checking the sky before deciding." },
      { item: "{ take umbrella }", meaning: "The action, done only when needed." }
    ]
  },
  syntaxStructure: `if (condition) {
  // runs only when condition is true
}`,
  codeExample: `let battery = 15;

if (battery < 20) {
  console.log("Low battery warning!");
}
console.log("Phone is on.");`,
  codeAnnotations: [
    { lineOrToken: "if (battery < 20) {", description: "15 < 20 is true, so the block runs." },
    { lineOrToken: 'console.log("Phone is on.");', description: "Outside the if — always runs." }
  ],
  commonMistakes: [
    {
      wrong: "if (age = 18) { }  // assigns 18 — always truthy",
      correct: "if (age === 18) { }",
      reason: "= assigns; === compares. Inside if, you almost always want ===."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let score = 95;
let msg = "Score: " + score;
if (score > 90) {
  msg += " — Excellent!";
}
document.getElementById("out").textContent = msg;`,
    instructions: "Lower the score below 90 and watch the bonus message vanish."
  },
  takeaways: [
    "if runs its block only when the condition is true.",
    "A false condition skips the block silently.",
    "Code after the if block always runs."
  ],
  quizQuestions: [
    { id: "js-if-1", question: "When does the if block execute?", options: ["Only when the condition is true", "Always", "Only when false", "Never"], correctAnswerIndex: 0, explanation: "The block runs exclusively for a true condition." },
    { id: "js-if-2", question: "What is wrong with if (x = 5)?", options: ["It assigns instead of comparing", "Nothing", "Missing braces", "x must be a string"], correctAnswerIndex: 0, explanation: "Single = assigns 5 (truthy); use === to compare." }
  ]
};

// LESSON: else Statement
export const jsElseStatementContent: LessonContent = {
  heroTagline: "The backup plan when the if test fails",
  introduction: "else catches the false case: if runs when the test is true, else runs when it is false. Together they cover every possibility — one of the two blocks always runs.",
  definition: {
    term: "else statement",
    explanation: "The fallback branch of an if: else { ... } executes when the if condition is false. It takes no condition of its own."
  },
  whyItMatters: "Users need feedback in both cases — 'access granted' or 'access denied'. else guarantees the program always responds.",
  realWorldAnalogy: {
    title: "Understanding else",
    story: "A coin toss bet: heads you win, otherwise (else) you lose. Every toss ends with exactly one outcome.",
    comparison: [
      { item: "if (heads)", meaning: "The win branch." },
      { item: "else", meaning: "Everything that is not heads — the loss branch." }
    ]
  },
  syntaxStructure: `if (condition) {
  // true path
} else {
  // false path — always one of them runs
}`,
  codeExample: `let password = "secret123";
let input = "wrong";

if (input === password) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}`,
  codeAnnotations: [
    { lineOrToken: "if (input === password) {", description: "'wrong' !== 'secret123', so this block is skipped." },
    { lineOrToken: "} else {", description: "The false path runs: access denied." }
  ],
  commonMistakes: [
    {
      wrong: "if (x > 10) {\n} else (x < 5) { }  // SyntaxError",
      correct: "if (x > 10) {\n} else if (x < 5) { }",
      reason: "else takes no condition. For another test, use else if."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let isMember = false;
if (isMember) {
  document.getElementById("out").textContent = "Member price: $80";
} else {
  document.getElementById("out").textContent = "Regular price: $100";
}`,
    instructions: "Flip isMember to true and see the price change."
  },
  takeaways: [
    "else runs when the if condition is false.",
    "else takes no condition of its own.",
    "Exactly one of the two blocks always executes."
  ],
  quizQuestions: [
    { id: "js-else-1", question: "When does the else block run?", options: ["When the if condition is false", "Always", "When the if condition is true", "Never"], correctAnswerIndex: 0, explanation: "else is the false-branch of the if." },
    { id: "js-else-2", question: "Can else have its own condition?", options: ["No — use else if for that", "Yes, always", "Only on Fridays", "Only with numbers"], correctAnswerIndex: 0, explanation: "Plain else takes no condition; else if adds another test." }
  ]
};

// LESSON: else if
export const jsElseIfContent: LessonContent = {
  heroTagline: "Chain as many tests as you need, in order",
  introduction: "else if adds more tests after an if: the engine checks each condition top to bottom and runs the FIRST one that is true. It is how you handle three or more cases — like grading A, B, C, D, F.",
  definition: {
    term: "else if",
    explanation: "Additional conditions chained after an if. Each is tested in order; the first true one runs and the rest are skipped."
  },
  whyItMatters: "Real decisions have many outcomes — grade bands, shipping tiers, age groups. else if handles them cleanly without nesting.",
  realWorldAnalogy: {
    title: "Understanding else if",
    story: "Trying keys on a lock: try key 1, else try key 2, else try key 3 — stop at the first one that turns.",
    comparison: [
      { item: "Each else if", meaning: "The next key on the ring." },
      { item: "First match wins", meaning: "Stop trying keys once one works." }
    ]
  },
  syntaxStructure: `if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}`,
  codeExample: `let marks = 82;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else {
  grade = "F";
}
console.log(grade); // B`,
  codeAnnotations: [
    { lineOrToken: "if (marks >= 90) {", description: "82 >= 90 is false — skip." },
    { lineOrToken: "} else if (marks >= 80) {", description: "82 >= 80 is true — grade becomes B, rest skipped." }
  ],
  commonMistakes: [
    {
      wrong: "if (score >= 80) { grade = 'B'; }\nelse if (score >= 90) { grade = 'A'; }  // 95 gets B!",
      correct: "Test the highest band first: >= 90 before >= 80.",
      reason: "Order matters — the first true test wins, so check strictest conditions first."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let temp = 22;
let advice;
if (temp > 30) advice = "Hot day!";
else if (temp > 20) advice = "Pleasant day.";
else advice = "Cold day.";
document.getElementById("out").textContent = advice;`,
    instructions: "Try temp values 35, 25, and 10."
  },
  takeaways: [
    "else if chains multiple tests in order.",
    "Only the first true branch runs.",
    "Check the strictest condition first."
  ],
  quizQuestions: [
    { id: "js-elseif-1", question: "With score 85, which branch runs in: if(>=90)A else if(>=80)B else C?", options: ["B", "A", "C", "All"], correctAnswerIndex: 0, explanation: "85 fails >= 90 but passes >= 80 — first true branch wins." },
    { id: "js-elseif-2", question: "Why test the highest range first?", options: ["The first true branch wins, so lower tests would catch high values too", "It runs faster", "The engine requires it", "No reason"], correctAnswerIndex: 0, explanation: ">= 80 is also true for 95, so it must come after >= 90." }
  ]
};

// LESSON: Nested Conditions
export const jsNestedConditionsContent: LessonContent = {
  heroTagline: "Decisions inside decisions for layered rules",
  introduction: "A nested condition is an if inside another if. The outer test must pass before the inner test is even checked. Use it when a second decision only matters after the first — like checking a password only after the username matches.",
  definition: {
    term: "Nested condition",
    explanation: "An if statement placed inside another if's block. The inner condition is evaluated only when the outer one is true."
  },
  whyItMatters: "Some rules are layered: 'is it a weekend?' then 'is it sunny?'. Nesting expresses layers that flat chains cannot.",
  realWorldAnalogy: {
    title: "Understanding Nested Conditions",
    story: "Airport security: first check the boarding pass; only then check the luggage. No pass, no luggage check.",
    comparison: [
      { item: "Outer if", meaning: "The boarding-pass gate." },
      { item: "Inner if", meaning: "The luggage scan — only reached with a pass." }
    ]
  },
  syntaxStructure: `if (hasTicket) {
  if (isVip) {
    seat = "Front row";
  } else {
    seat = "Regular";
  }
} else {
  seat = "No entry";
}`,
  codeExample: `let username = "admin";
let password = "secret123";
let message;

if (username === "admin") {
  if (password === "secret123") {
    message = "Welcome, admin!";
  } else {
    message = "Wrong password.";
  }
} else {
  message = "Unknown user.";
}
console.log(message); // Welcome, admin!`,
  codeAnnotations: [
    { lineOrToken: 'if (username === "admin") {', description: "Outer gate: username matches, so we go inside." },
    { lineOrToken: 'if (password === "secret123") {', description: "Inner gate: only checked because the outer passed." }
  ],
  commonMistakes: [
    {
      wrong: "if (a) {\nif (b) {\nconsole.log('x');\n}\n}  // which if does this close?",
      correct: "Always indent nested blocks so each closing brace lines up with its if.",
      reason: "Deep nesting with bad indentation becomes unreadable — keep it to 2 levels."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let age = 20;
let hasId = true;
let result;
if (age >= 18) {
  if (hasId) {
    result = "Entry allowed";
  } else {
    result = "Show your ID";
  }
} else {
  result = "Too young";
}
document.getElementById("out").textContent = result;`,
    instructions: "Try age 16, and age 20 with hasId false."
  },
  takeaways: [
    "Nested ifs check the inner test only when the outer passes.",
    "Keep nesting shallow — two levels is usually enough.",
    "Indent carefully so each brace matches its if."
  ],
  quizQuestions: [
    { id: "js-nested-1", question: "When is the inner if evaluated?", options: ["Only when the outer if is true", "Always", "Only when the outer if is false", "Never"], correctAnswerIndex: 0, explanation: "The inner block is unreachable unless the outer condition passes." },
    { id: "js-nested-2", question: "What is the risk of deep nesting?", options: ["Hard-to-read code", "Faster execution", "Better security", "Smaller files"], correctAnswerIndex: 0, explanation: "Many nested levels hurt readability — flatten with && or early returns." }
  ]
};

// LESSON: Comparison (in conditions)
export const jsComparisonConditionsContent: LessonContent = {
  heroTagline: "The tests that drive every if statement",
  introduction: "Conditions run on comparisons: age >= 18, password === input, stock > 0. This lesson focuses on choosing the right comparison inside if tests so decisions behave exactly as intended.",
  definition: {
    term: "Conditional comparison",
    explanation: "Using comparison operators (===, !==, >, <, >=, <=) inside if conditions to produce the true/false value that steers the program."
  },
  whyItMatters: "A wrong comparison flips decisions: users locked out, discounts misapplied. Precise comparisons mean precise behavior.",
  realWorldAnalogy: {
    title: "Understanding Conditional Comparisons",
    story: "A scale at the market: the reading decides the price — but only if you read the right scale in the right units.",
    comparison: [
      { item: "===", meaning: "The calibrated scale — exact match, type included." },
      { item: "==", meaning: "The wobbly scale — close enough, types ignored." }
    ]
  },
  syntaxStructure: `if (role === "admin") { /* exact match */ }
if (attempts !== 0) { /* not equal */ }
if (score >= 50 && score < 90) { /* in a range */ }`,
  codeExample: `let enteredPin = "1234";
let realPin = "1234";
let triesLeft = 2;

if (enteredPin === realPin) {
  console.log("PIN correct — welcome!");
} else if (triesLeft > 0) {
  console.log("Wrong PIN. Tries left: " + triesLeft);
} else {
  console.log("Card blocked.");
}`,
  codeAnnotations: [
    { lineOrToken: "enteredPin === realPin", description: "Strict string comparison — both type and value match." },
    { lineOrToken: "triesLeft > 0", description: "Numeric comparison guarding the retry path." }
  ],
  commonMistakes: [
    {
      wrong: "if (userAge == '18') { }  // works by accident",
      correct: "if (userAge === 18) { }",
      reason: "== hides type mismatches that become bugs later. Compare with === and matching types."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let height = 140;
let msg;
if (height >= 150) {
  msg = "You can ride!";
} else {
  msg = "Too short for this ride.";
}
document.getElementById("out").textContent = msg;`,
    instructions: "Change height to 160 and re-run."
  },
  takeaways: [
    "if conditions are built from comparison operators.",
    "Use === with matching types for reliable decisions.",
    "Combine comparisons with && and || for range checks."
  ],
  quizQuestions: [
    { id: "js-compcond-1", question: "Which comparison is safest in an if?", options: ["===", "==", "=", "!="], correctAnswerIndex: 0, explanation: "=== checks value and type, avoiding loose-equality surprises." },
    { id: "js-compcond-2", question: "How do you test 'score between 50 and 90'?", options: ["score >= 50 && score <= 90", "score == 50-90", "50 < score > 90", "score = 50 && 90"], correctAnswerIndex: 0, explanation: "Two comparisons joined with && express a range." }
  ]
};

// LESSON: Logical Conditions
export const jsLogicalConditionsContent: LessonContent = {
  heroTagline: "Real-world rules need AND, OR, and NOT together",
  introduction: "Logical conditions combine multiple tests into one decision: age >= 18 && hasId for entry, isWeekend || isHoliday for a day off. This lesson is about building correct compound rules.",
  definition: {
    term: "Logical condition",
    explanation: "An if test that joins several comparisons with &&, ||, or ! to model a real rule with multiple requirements."
  },
  whyItMatters: "Almost no real rule is a single check. Discounts need membership AND minimum spend; access needs a role OR ownership. Compound logic is daily work.",
  realWorldAnalogy: {
    title: "Understanding Logical Conditions",
    story: "A loan approval: income high enough AND credit clean AND not already defaulting — every clause must hold.",
    comparison: [
      { item: "&& chain", meaning: "Every clause must pass — one failure rejects." },
      { item: "|| options", meaning: "Any single pass approves." }
    ]
  },
  syntaxStructure: `if (age >= 18 && hasTicket) { /* both */ }
if (isAdmin || isOwner) { /* either */ }
if (!isBanned) { /* not banned */ }`,
  codeExample: `let isMember = true;
let cartTotal = 120;
let hasCoupon = false;

if ((isMember || hasCoupon) && cartTotal >= 100) {
  console.log("Free shipping unlocked!");
} else {
  console.log("Shipping: $5");
}`,
  codeAnnotations: [
    { lineOrToken: "(isMember || hasCoupon)", description: "Either perk qualifies — parentheses group it." },
    { lineOrToken: "&& cartTotal >= 100", description: "Plus the minimum spend — both parts must hold." }
  ],
  commonMistakes: [
    {
      wrong: "if (isMember || hasCoupon && cartTotal >= 100)  // && binds tighter!",
      correct: "if ((isMember || hasCoupon) && cartTotal >= 100)",
      reason: "&& runs before ||. Parentheses make your intended grouping explicit."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let sunny = true;
let weekend = false;
let goPicnic = sunny && weekend;
document.getElementById("out").textContent = "Picnic? " + goPicnic;`,
    instructions: "Flip weekend to true, then try || instead of &&."
  },
  takeaways: [
    "&& combines requirements; || combines alternatives; ! negates.",
    "&& binds tighter than || — use parentheses to be explicit.",
    "Read compound conditions out loud to check the logic."
  ],
  quizQuestions: [
    { id: "js-logiccond-1", question: "In a && b || c, which evaluates first?", options: ["a && b", "b || c", "All at once", "c first"], correctAnswerIndex: 0, explanation: "&& has higher precedence than ||." },
    { id: "js-logiccond-2", question: "What does if (!ready) mean?", options: ["Run when ready is false", "Run when ready is true", "Delete ready", "Always run"], correctAnswerIndex: 0, explanation: "! negates: the block runs when ready is falsy." }
  ]
};

// LESSON: switch
export const jsSwitchContent: LessonContent = {
  heroTagline: "A clean menu of choices instead of long if-chains",
  introduction: "switch compares one value against many cases: perfect for days of the week, menu options, or status codes. Each case runs its block; break stops the fall-through to the next case.",
  definition: {
    term: "switch statement",
    explanation: "A control structure that matches a single expression against multiple case values. The matching case runs; default runs when nothing matches."
  },
  whyItMatters: "Five or more else-if branches on the same variable get noisy. switch lays the options out like a menu — easier to scan and extend.",
  realWorldAnalogy: {
    title: "Understanding switch",
    story: "A restaurant menu: you pick dish number 3 and the kitchen makes exactly that — no need to ask about dishes 1, 2, 4, 5.",
    comparison: [
      { item: "switch(dish)", meaning: "Handing your order number to the kitchen." },
      { item: "case 3:", meaning: "The recipe for dish 3." },
      { item: "break;", meaning: "'Stop here — order complete.'" }
    ]
  },
  syntaxStructure: `switch (day) {
  case "Mon":
    plan = "Gym";
    break;
  case "Fri":
    plan = "Movie";
    break;
  default:
    plan = "Work";
}`,
  codeExample: `let trafficLight = "yellow";
let action;

switch (trafficLight) {
  case "red":
    action = "Stop";
    break;
  case "yellow":
    action = "Slow down";
    break;
  case "green":
    action = "Go";
    break;
  default:
    action = "Light broken — be careful";
}
console.log(action); // Slow down`,
  codeAnnotations: [
    { lineOrToken: 'case "yellow":', description: "Matches the value — this block runs." },
    { lineOrToken: "break;", description: "Exits the switch so lower cases don't run too." },
    { lineOrToken: "default:", description: "The safety net when no case matches." }
  ],
  commonMistakes: [
    {
      wrong: "case 'red':\n  action = 'Stop';\ncase 'yellow':\n  action = 'Slow';  // both run!",
      correct: "Add break; at the end of every case.",
      reason: "Without break, execution 'falls through' into the next case."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let grade = "B";
let message;
switch (grade) {
  case "A": message = "Excellent!"; break;
  case "B": message = "Good job!"; break;
  case "C": message = "Keep trying!"; break;
  default: message = "See your teacher.";
}
document.getElementById("out").textContent = message;`,
    instructions: "Change the grade to A, C, and Z."
  },
  takeaways: [
    "switch matches one value against many case labels.",
    "Always end each case with break to stop fall-through.",
    "default handles values no case covers."
  ],
  quizQuestions: [
    { id: "js-switch-1", question: "What does break do in a switch?", options: ["Exits the switch after the matched case", "Restarts the switch", "Skips to default", "Ends the program"], correctAnswerIndex: 0, explanation: "break stops fall-through so only the matched case runs." },
    { id: "js-switch-2", question: "When does default run?", options: ["When no case matches", "Always first", "Only on errors", "Never"], correctAnswerIndex: 0, explanation: "default is the fallback for unmatched values." }
  ]
};

// LESSON: Real-world Conditions
export const jsRealWorldConditionsContent: LessonContent = {
  heroTagline: "Putting decisions together like a real app does",
  introduction: "Real features combine everything: validate input, check membership, apply discounts, handle edge cases. This lesson builds a small checkout rule the way production code does — step by step.",
  definition: {
    term: "Real-world conditional logic",
    explanation: "Combining if/else-if, comparisons, and logical operators to implement an actual business rule, with a safe fallback for unexpected data."
  },
  whyItMatters: "Tutorials teach pieces; jobs need wholes. Practicing a complete rule builds the judgment to write conditions that survive real users.",
  realWorldAnalogy: {
    title: "Understanding Real-World Conditions",
    story: "A shopkeeper's mental checklist: member? big order? coupon valid? Each answer adjusts the final price — and 'no sale' is never an option.",
    comparison: [
      { item: "Validation first", meaning: "Check the inputs are sane before calculating." },
      { item: "Rules in order", meaning: "Best discount first, smaller ones after." },
      { item: "Final else", meaning: "A safe default so every path produces an answer." }
    ]
  },
  syntaxStructure: `if (invalid input) { error }
else if (best case) { best deal }
else if (good case) { good deal }
else { standard }`,
  codeExample: `let cartTotal = 350;
let isMember = true;
let coupon = "SAVE20";
let finalPrice = cartTotal;

if (cartTotal <= 0) {
  console.log("Cart is empty.");
} else if (isMember && cartTotal >= 300) {
  finalPrice = cartTotal * 0.8; // 20% member discount
  console.log("Member deal: " + finalPrice);
} else if (coupon === "SAVE20") {
  finalPrice = cartTotal - 20;
  console.log("Coupon applied: " + finalPrice);
} else {
  console.log("Total: " + finalPrice);
}`,
  codeAnnotations: [
    { lineOrToken: "if (cartTotal <= 0) {", description: "Guard clause: handle the invalid case first." },
    { lineOrToken: "} else if (isMember && cartTotal >= 300) {", description: "Best deal checked before the smaller coupon deal." }
  ],
  commonMistakes: [
    {
      wrong: "Checking the coupon before the bigger member discount.",
      correct: "Order branches from most valuable/specific to least.",
      reason: "The first true branch wins — a smaller deal earlier would steal the better one."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let cartTotal = 120;
let isMember = false;
let price = cartTotal;
if (cartTotal <= 0) price = 0;
else if (isMember && cartTotal >= 300) price = cartTotal * 0.8;
else if (cartTotal >= 100) price = cartTotal - 10;
document.getElementById("out").textContent = "Pay: $" + price;`,
    instructions: "Try totals 0, 80, 150, and 400 as a member."
  },
  takeaways: [
    "Validate inputs first with a guard clause.",
    "Order branches from best/most-specific to least.",
    "Always end with an else so every path produces a result."
  ],
  quizQuestions: [
    { id: "js-realcond-1", question: "Why check cartTotal <= 0 first?", options: ["To handle the invalid case before any math", "It runs faster", "The engine requires it", "No reason"], correctAnswerIndex: 0, explanation: "Guard clauses reject bad input early, keeping later logic simple." },
    { id: "js-realcond-2", question: "Why put the biggest discount first?", options: ["The first true branch wins", "It looks nicer", "Discounts must be sorted", "No reason"], correctAnswerIndex: 0, explanation: "else-if stops at the first match, so the best deal must be tested first." }
  ]
};

// ============================================================
// MODULE 5: Loops (unique lessons)
// ============================================================

// LESSON: Introduction to Loops
export const jsLoopsIntroContent: LessonContent = {
  heroTagline: "Repeat work without repeating code",
  introduction: "A loop runs the same block many times: print numbers 1 to 100, list every product, retry a request. Without loops you would copy-paste code hundreds of times.",
  definition: {
    term: "Loop",
    explanation: "A control structure that repeats a block of code while a condition holds (or a set number of times), instead of writing the code out repeatedly."
  },
  whyItMatters: "Data comes in bulk — hundreds of products, thousands of users. Loops process collections with a few lines instead of a few thousand.",
  realWorldAnalogy: {
    title: "Understanding Loops",
    story: "A washing machine cycle: fill, wash, rinse, spin — repeated automatically instead of doing each load by hand.",
    comparison: [
      { item: "The loop", meaning: "The machine's cycle program." },
      { item: "Each iteration", meaning: "One full wash of the current load." },
      { item: "The stop condition", meaning: "The timer — the machine stops, it doesn't flood." }
    ]
  },
  syntaxStructure: `for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// prints Count: 1 ... Count: 5`,
  codeExample: `// Without a loop: 5 copy-pasted lines
// With a loop:
for (let i = 1; i <= 5; i++) {
  console.log("Hello " + i);
}`,
  codeAnnotations: [
    { lineOrToken: "let i = 1;", description: "Start the counter at 1." },
    { lineOrToken: "i <= 5;", description: "Keep going while this is true." },
    { lineOrToken: "i++", description: "Add 1 after each round." }
  ],
  commonMistakes: [
    {
      wrong: "for (let i = 1; i <= 5; i--) { }  // infinite loop!",
      correct: "for (let i = 1; i <= 5; i++) { }",
      reason: "The counter must move toward the stop condition, or the loop never ends."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let text = "";
for (let i = 1; i <= 5; i++) {
  text += "Round " + i + " ";
}
document.getElementById("out").textContent = text;`,
    instructions: "Change 5 to 10 and re-run."
  },
  takeaways: [
    "Loops repeat a block instead of copy-pasting code.",
    "Every loop needs a start, a stop condition, and progress toward stopping.",
    "A loop that never stops is an infinite loop — avoid it."
  ],
  quizQuestions: [
    { id: "js-loopsintro-1", question: "What is a loop?", options: ["Code that repeats a block multiple times", "A type of variable", "An HTML element", "A function that never runs"], correctAnswerIndex: 0, explanation: "Loops repeat their block while a condition holds." },
    { id: "js-loopsintro-2", question: "What makes a loop stop?", options: ["Its condition becoming false", "Running out of memory only", "A timer of 10 seconds", "Nothing stops it"], correctAnswerIndex: 0, explanation: "The loop exits when its condition is no longer true." }
  ]
};

// LESSON: for Loop
export const jsForLoopContent: LessonContent = {
  heroTagline: "The classic counter loop: start, test, step",
  introduction: "The for loop is built for counting: for (let i = 0; i < 5; i++) runs the block 5 times with i going 0→4. Its three parts — start, condition, step — sit together in one line.",
  definition: {
    term: "for loop",
    explanation: "A loop with three expressions in its header: initialization (runs once), condition (checked each round), and update (runs after each round)."
  },
  whyItMatters: "Numbered repetition — table rows, pagination, countdowns — is the most common loop pattern. for expresses it in one compact line.",
  realWorldAnalogy: {
    title: "Understanding the for Loop",
    story: "Climbing stairs: start at step 0, keep going while below step 5, take one step each time.",
    comparison: [
      { item: "let i = 0", meaning: "Standing at the bottom step." },
      { item: "i < 5", meaning: "Checking: have I reached the top?" },
      { item: "i++", meaning: "Taking the next step up." }
    ]
  },
  syntaxStructure: `for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}`,
  codeExample: `const fruits = ["apple", "mango", "banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}
// 0: apple
// 1: mango
// 2: banana`,
  codeAnnotations: [
    { lineOrToken: "i < fruits.length", description: "Stops after the last item — works for any array size." },
    { lineOrToken: "fruits[i]", description: "Reads the item at the current position." }
  ],
  commonMistakes: [
    {
      wrong: "for (let i = 0; i <= fruits.length; i++)  // one too many!",
      correct: "for (let i = 0; i < fruits.length; i++)",
      reason: "Indexes end at length - 1, so use < not <=."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let result = "";
for (let i = 1; i <= 7; i++) {
  result += i * 2 + " ";
}
document.getElementById("out").textContent = "Doubles: " + result;`,
    instructions: "Change the loop to count from 10 down to 1."
  },
  takeaways: [
    "for packs start, condition, and step into one line.",
    "i < length is the standard way to walk an array.",
    "Indexes run 0 to length - 1, so use < not <=."
  ],
  quizQuestions: [
    { id: "js-for-1", question: "How many times does for (let i = 0; i < 5; i++) run?", options: ["5", "4", "6", "Infinite"], correctAnswerIndex: 0, explanation: "i takes values 0,1,2,3,4 — five rounds." },
    { id: "js-for-2", question: "What are the three parts of a for header?", options: ["Start, condition, step", "If, else, end", "Var, let, const", "Open, loop, close"], correctAnswerIndex: 0, explanation: "Initialization; condition; update — in that order." }
  ]
};

// LESSON: while Loop
export const jsWhileLoopContent: LessonContent = {
  heroTagline: "Keep going until something changes",
  introduction: "The while loop repeats its block as long as the condition is true: while (battery > 0) { ... }. Use it when you don't know in advance how many rounds you need.",
  definition: {
    term: "while loop",
    explanation: "A loop that checks its condition before every round and repeats the block while it stays true. The block must change something toward stopping."
  },
  whyItMatters: "Retry logic, waiting for input, draining a queue — while handles 'repeat until done' situations where counting rounds makes no sense.",
  realWorldAnalogy: {
    title: "Understanding while",
    story: "Bailing water from a boat: keep scooping WHILE water remains. You don't count scoops in advance — you stop when the boat is dry.",
    comparison: [
      { item: "while (water > 0)", meaning: "Checking the boat before each scoop." },
      { item: "The scoop", meaning: "The block — removes some water each round." }
    ]
  },
  syntaxStructure: `let n = 3;
while (n > 0) {
  console.log(n);
  n--; // progress toward stopping!
}
// 3, 2, 1`,
  codeExample: `let balance = 100;
let days = 0;

while (balance > 0) {
  balance -= 30; // daily expense
  days++;
}
console.log("Money lasted " + days + " days."); // 4`,
  codeAnnotations: [
    { lineOrToken: "while (balance > 0) {", description: "Checked before every round — stops when balance hits 0 or less." },
    { lineOrToken: "balance -= 30;", description: "The progress step: without it, the loop never ends." }
  ],
  commonMistakes: [
    {
      wrong: "let n = 5;\nwhile (n > 0) {\n  console.log(n);\n}  // infinite!",
      correct: "Add n--; inside the block.",
      reason: "If nothing inside changes the condition, while never stops."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let countdown = 5;
let text = "";
while (countdown > 0) {
  text += countdown + "... ";
  countdown--;
}
document.getElementById("out").textContent = text + "Go!";`,
    instructions: "Start the countdown from 10 instead."
  },
  takeaways: [
    "while repeats while its condition stays true.",
    "The block must move the condition toward false.",
    "Use while when the number of rounds is unknown upfront."
  ],
  quizQuestions: [
    { id: "js-while-1", question: "When does a while loop stop?", options: ["When its condition becomes false", "After exactly 10 rounds", "When it feels like it", "Never"], correctAnswerIndex: 0, explanation: "The condition is re-checked each round; false exits the loop." },
    { id: "js-while-2", question: "What causes an infinite while loop?", options: ["Nothing inside changes the condition", "Using let", "Too many lines", "A long condition"], correctAnswerIndex: 0, explanation: "Without progress toward false, the condition stays true forever." }
  ]
};

// LESSON: do while Loop
export const jsDoWhileLoopContent: LessonContent = {
  heroTagline: "Run first, ask questions later — at least once",
  introduction: "The do...while loop runs its block FIRST and then checks the condition. That guarantees at least one execution — perfect for menus and prompts that must show at least once.",
  definition: {
    term: "do...while loop",
    explanation: "A loop that executes its block once, then repeats while the condition is true. The condition is checked after each round, not before."
  },
  whyItMatters: "Some tasks must happen at least once: show a menu, ask for a password, roll the dice. do...while models 'try it, then decide whether to repeat'.",
  realWorldAnalogy: {
    title: "Understanding do...while",
    story: "Tasting soup before deciding to add salt: you always taste once, then repeat only if it still needs salt.",
    comparison: [
      { item: "do { taste }", meaning: "The guaranteed first taste." },
      { item: "while (needsSalt)", meaning: "The decision to taste again." }
    ]
  },
  syntaxStructure: `let i = 10;
do {
  console.log(i); // runs once even though i > 5 is false
  i++;
} while (i < 5);`,
  codeExample: `let password;
let attempts = 0;

do {
  attempts++;
  password = attempts === 2 ? "secret123" : "wrong";
  console.log("Try " + attempts + ": " + password);
} while (password !== "secret123");

console.log("Logged in after " + attempts + " tries.");`,
  codeAnnotations: [
    { lineOrToken: "do {", description: "The block runs immediately — no check first." },
    { lineOrToken: '} while (password !== "secret123");', description: "Now the engine decides whether to repeat." }
  ],
  commonMistakes: [
    {
      wrong: "do {\n  console.log('hi');\n} while (true)   // missing semicolon",
      correct: "do {\n  console.log('hi');\n} while (true);",
      reason: "do...while is a statement — it needs the trailing semicolon."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let n = 1;
let text = "";
do {
  text += "Step " + n + " ";
  n++;
} while (n <= 3);
document.getElementById("out").textContent = text;`,
    instructions: "Set n = 99 before the loop and notice it still runs once."
  },
  takeaways: [
    "do...while always runs its block at least once.",
    "The condition is checked after each round.",
    "End the statement with a semicolon after while (...)."
  ],
  quizQuestions: [
    { id: "js-dowhile-1", question: "How many times does do...while run if the condition starts false?", options: ["Once", "Zero", "Infinite", "Twice"], correctAnswerIndex: 0, explanation: "The block runs first; the check happens after — so at least one round." },
    { id: "js-dowhile-2", question: "How is do...while different from while?", options: ["It checks the condition after running the block", "It is faster", "It cannot loop", "It needs no condition"], correctAnswerIndex: 0, explanation: "while checks before; do...while checks after, guaranteeing one run." }
  ]
};

// LESSON: for...of
export const jsForOfContent: LessonContent = {
  heroTagline: "Walk through every item in a list, simply",
  introduction: "The for...of loop gives you each VALUE in an array directly: for (const fruit of fruits). No indexes, no length checks — the cleanest way to process every item in a list.",
  definition: {
    term: "for...of loop",
    explanation: "A loop that iterates over the values of an iterable (like an array). Each round, the variable holds the next item itself."
  },
  whyItMatters: "Most array work is 'do something with each item'. for...of says exactly that, with none of the index bookkeeping that causes off-by-one bugs.",
  realWorldAnalogy: {
    title: "Understanding for...of",
    story: "Handing out flyers on a street: you take each flyer (value) from the stack and hand it out — you never count stack positions.",
    comparison: [
      { item: "const flyer of stack", meaning: "Each round you hold one actual flyer." },
      { item: "for (i...) + stack[i]", meaning: "Counting positions to find each flyer — extra work." }
    ]
  },
  syntaxStructure: `const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
  console.log(fruit); // the value itself
}`,
  codeExample: `const prices = [250, 120, 80];
let total = 0;

for (const price of prices) {
  total += price;
}
console.log("Cart total: " + total); // 450`,
  codeAnnotations: [
    { lineOrToken: "for (const price of prices) {", description: "price is the actual number each round: 250, then 120, then 80." },
    { lineOrToken: "total += price;", description: "Adds each value straight to the total." }
  ],
  commonMistakes: [
    {
      wrong: "for (const fruit of fruits) {\n  fruit = 'x';  // TypeError",
      correct: "Use let instead of const if you must reassign the loop variable.",
      reason: "const in for...of gives a fresh read-only binding each round."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const names = ["Sara", "Ali", "Usman"];
let text = "";
for (const name of names) {
  text += "Hello, " + name + "! ";
}
document.getElementById("out").textContent = text;`,
    instructions: "Add your own name to the array and re-run."
  },
  takeaways: [
    "for...of hands you each value directly — no indexes needed.",
    "It works on arrays, strings, and other iterables.",
    "Use it when you need values; use a classic for when you need indexes."
  ],
  quizQuestions: [
    { id: "js-forof-1", question: "What does the loop variable hold in for...of?", options: ["Each value in the array", "Each index number", "The array length", "Nothing"], correctAnswerIndex: 0, explanation: "for...of iterates values, not indexes." },
    { id: "js-forof-2", question: "When is for...of better than a classic for?", options: ["When you only need the values", "When you need the index", "When counting backwards", "Never"], correctAnswerIndex: 0, explanation: "It is cleaner when indexes are not needed." }
  ]
};

// LESSON: for...in
export const jsForInContent: LessonContent = {
  heroTagline: "Walk through every key of an object",
  introduction: "The for...in loop gives you each KEY of an object: for (const key in person). Pair it with person[key] to read every property — ideal for inspecting or copying objects.",
  definition: {
    term: "for...in loop",
    explanation: "A loop that iterates over the enumerable property names (keys) of an object. Each round, the variable holds the next key as a string."
  },
  whyItMatters: "Objects have unknown shapes — user profiles, settings, API responses. for...in lets you handle every property without knowing the keys in advance.",
  realWorldAnalogy: {
    title: "Understanding for...in",
    story: "Checking every labeled drawer in a filing cabinet: you read each label (key), then open the drawer (value).",
    comparison: [
      { item: "const key in cabinet", meaning: "Reading the next drawer label." },
      { item: "cabinet[key]", meaning: "Opening that drawer to see the contents." }
    ]
  },
  syntaxStructure: `const person = { name: "Sara", age: 25 };
for (const key in person) {
  console.log(key + ": " + person[key]);
}
// name: Sara
// age: 25`,
  codeExample: `const settings = { theme: "dark", volume: 80, wifi: true };

for (const key in settings) {
  console.log(key + " is set to " + settings[key]);
}`,
  codeAnnotations: [
    { lineOrToken: "for (const key in settings) {", description: "key becomes 'theme', then 'volume', then 'wifi'." },
    { lineOrToken: "settings[key]", description: "Bracket notation reads the value for the current key." }
  ],
  commonMistakes: [
    {
      wrong: "for (const v of user) { }  // TypeError: user is not iterable",
      correct: "for (const key in user) { }",
      reason: "Plain objects are not iterable — use for...in for objects, for...of for arrays."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const car = { brand: "Toyota", model: "Corolla", year: 2022 };
let text = "";
for (const key in car) {
  text += key + "=" + car[key] + " ";
}
document.getElementById("out").textContent = text;`,
    instructions: "Add a color property to the car and re-run."
  },
  takeaways: [
    "for...in iterates over an object's keys.",
    "Use obj[key] with brackets to read each value.",
    "Don't use for...of on plain objects — they aren't iterable."
  ],
  quizQuestions: [
    { id: "js-forin-1", question: "What does for...in give you for an object?", options: ["Its keys", "Its values directly", "Its length", "Its methods only"], correctAnswerIndex: 0, explanation: "for...in yields property names; use obj[key] for values." },
    { id: "js-forin-2", question: "Which loop fits a plain object best?", options: ["for...in", "for...of", "do...while", "None"], correctAnswerIndex: 0, explanation: "Objects need for...in; for...of works on arrays, not plain objects." }
  ]
};

// LESSON: break
export const jsBreakContent: LessonContent = {
  heroTagline: "Exit the loop immediately when you're done",
  introduction: "The break statement stops a loop instantly — no more rounds, no more checks. Use it when you've found what you were looking for, like the first matching product in a list.",
  definition: {
    term: "break",
    explanation: "A statement that exits the innermost loop immediately. Execution jumps to the first line after the loop."
  },
  whyItMatters: "Searching a list of 10,000 items shouldn't check all 10,000 after finding a match at position 3. break saves time and expresses 'stop, we're done'.",
  realWorldAnalogy: {
    title: "Understanding break",
    story: "Finding your friend in a crowd: once you spot them, you stop scanning faces — you don't keep looking at everyone else.",
    comparison: [
      { item: "The scan", meaning: "The loop checking each face." },
      { item: "break", meaning: "Stopping the scan the moment you recognize your friend." }
    ]
  },
  syntaxStructure: `for (let i = 0; i < 100; i++) {
  if (i === 7) {
    break; // stop — found it
  }
}`,
  codeExample: `const users = ["Ali", "Sara", "Usman", "Hina"];
let found = "not found";

for (const user of users) {
  if (user === "Usman") {
    found = user;
    break; // stop searching
  }
}
console.log(found); // Usman`,
  codeAnnotations: [
    { lineOrToken: 'if (user === "Usman") {', description: "The match we're searching for." },
    { lineOrToken: "break;", description: "Exits the loop — 'Hina' is never checked." }
  ],
  commonMistakes: [
    {
      wrong: "Using break outside any loop or switch.  // SyntaxError",
      correct: "break only works inside for, while, do...while, or switch.",
      reason: "There must be something to break out of."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const nums = [3, 8, 12, 5, 20];
let firstBig = "none";
for (const n of nums) {
  if (n > 10) { firstBig = n; break; }
}
document.getElementById("out").textContent = "First over 10: " + firstBig;`,
    instructions: "Change the threshold to 15 and re-run."
  },
  takeaways: [
    "break exits the innermost loop immediately.",
    "Use it to stop searching once you've found a match.",
    "It also exits switch statements."
  ],
  quizQuestions: [
    { id: "js-break-1", question: "What does break do in a loop?", options: ["Stops the loop immediately", "Skips one round", "Restarts the loop", "Pauses for 1 second"], correctAnswerIndex: 0, explanation: "break exits the loop; execution continues after it." },
    { id: "js-break-2", question: "Why break after finding a match?", options: ["To avoid pointless extra checks", "It runs faster to continue", "The engine requires it", "No reason"], correctAnswerIndex: 0, explanation: "Continuing after success wastes work." }
  ]
};

// LESSON: continue
export const jsContinueContent: LessonContent = {
  heroTagline: "Skip this round and jump to the next one",
  introduction: "The continue statement skips the rest of the current round and jumps to the next iteration. Use it to ignore items you don't care about — like skipping out-of-stock products while listing the rest.",
  definition: {
    term: "continue",
    explanation: "A statement that skips the remaining code in the current loop round and moves to the next iteration."
  },
  whyItMatters: "Filtering inside a loop is constant work: process valid orders, skip cancelled ones. continue keeps the 'skip' logic at the top and the main logic clean.",
  realWorldAnalogy: {
    title: "Understanding continue",
    story: "Sorting mail: junk flyer? Toss it and move to the next envelope — you don't open it, you just continue.",
    comparison: [
      { item: "continue", meaning: "Tossing the junk mail, moving on." },
      { item: "break", meaning: "Stopping mail sorting entirely." }
    ]
  },
  syntaxStructure: `for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  console.log(i); // 1, 2, 4, 5
}`,
  codeExample: `const orders = [120, -20, 85, 0, 200];
let total = 0;

for (const amount of orders) {
  if (amount <= 0) continue; // skip refunds and zeros
  total += amount;
}
console.log("Valid sales total: " + total); // 405`,
  codeAnnotations: [
    { lineOrToken: "if (amount <= 0) continue;", description: "Refunds and zeros are skipped instantly." },
    { lineOrToken: "total += amount;", description: "Only valid positive amounts reach this line." }
  ],
  commonMistakes: [
    {
      wrong: "Confusing continue with break — the loop ended early!",
      correct: "continue = skip one round; break = stop the whole loop.",
      reason: "They look similar but do opposite-scale things."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let text = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // skip evens
  text += i + " ";
}
document.getElementById("out").textContent = "Odd numbers: " + text;`,
    instructions: "Flip the condition to skip odd numbers instead."
  },
  takeaways: [
    "continue skips to the next round; the loop keeps going.",
    "break stops the loop entirely — different job.",
    "Put skip-checks at the top of the loop for clarity."
  ],
  quizQuestions: [
    { id: "js-continue-1", question: "What does continue do?", options: ["Skips the rest of the current round", "Stops the loop", "Restarts from round 1", "Pauses the loop"], correctAnswerIndex: 0, explanation: "continue jumps to the next iteration." },
    { id: "js-continue-2", question: "How does continue differ from break?", options: ["continue skips one round; break ends the loop", "They are identical", "break skips one round", "continue ends the program"], correctAnswerIndex: 0, explanation: "continue = next round; break = exit loop." }
  ]
};

// LESSON: Nested Loops
export const jsNestedLoopsContent: LessonContent = {
  heroTagline: "A loop inside a loop — rows and columns",
  introduction: "A nested loop is a loop inside another loop. The inner loop completes ALL its rounds for each single round of the outer loop. This pattern builds tables, grids, and timetables.",
  definition: {
    term: "Nested loop",
    explanation: "A loop placed inside another loop's block. For every one iteration of the outer loop, the inner loop runs to completion."
  },
  whyItMatters: "Two-dimensional data is everywhere: seating charts, calendars, multiplication tables, game boards. Nested loops generate and process grids naturally.",
  realWorldAnalogy: {
    title: "Understanding Nested Loops",
    story: "A clock: the hour hand moves one tick, and the minute hand spins all 60 minutes — then the hour hand moves again.",
    comparison: [
      { item: "Outer loop", meaning: "The hour hand — slow, one step at a time." },
      { item: "Inner loop", meaning: "The minute hand — full cycle per hour step." }
    ]
  },
  syntaxStructure: `for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(row + "x" + col);
  }
}
// 9 lines: every row × every column`,
  codeExample: `let table = "";
for (let r = 1; r <= 3; r++) {
  for (let c = 1; c <= 3; c++) {
    table += (r * c) + " ";
  }
  table += "| ";
}
console.log(table); // 1 2 3 | 2 4 6 | 3 6 9 |`,
  codeAnnotations: [
    { lineOrToken: "for (let r = 1; r <= 3; r++) {", description: "Outer: picks the row — runs 3 times." },
    { lineOrToken: "for (let c = 1; c <= 3; c++) {", description: "Inner: fills all 3 columns for the current row." }
  ],
  commonMistakes: [
    {
      wrong: "for (let i = 0; i < 3; i++) {\n  for (let i = 0; i < 3; i++) { }  // inner i shadows outer!",
      correct: "Use different names: i for outer, j for inner.",
      reason: "Reusing i makes the outer counter unpredictable."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `let grid = "";
for (let r = 1; r <= 4; r++) {
  for (let c = 1; c <= 4; c++) {
    grid += "* ";
  }
  grid += "\\n";
}
document.getElementById("out").textContent = grid;`,
    instructions: "Change the sizes to make a 3x5 rectangle."
  },
  takeaways: [
    "The inner loop finishes fully for each outer round.",
    "Use different counter names (i, j) for each level.",
    "Total rounds = outer count × inner count."
  ],
  quizQuestions: [
    { id: "js-nestedloops-1", question: "How many total rounds for 3 outer × 4 inner?", options: ["12", "7", "34", "9"], correctAnswerIndex: 0, explanation: "3 × 4 = 12 total inner executions." },
    { id: "js-nestedloops-2", question: "Why use different counter names?", options: ["Reusing one name corrupts the outer counter", "It looks nicer", "The engine requires j", "No reason"], correctAnswerIndex: 0, explanation: "The inner declaration would shadow and reset the outer counter." }
  ]
};