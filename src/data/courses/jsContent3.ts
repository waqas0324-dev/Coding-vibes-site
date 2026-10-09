import { LessonContent } from '../../types';

// ============================================================
// MODULE 3: Operators (unique lessons)
// ============================================================

// LESSON: Arithmetic Operators
export const jsArithmeticOperatorsContent: LessonContent = {
  heroTagline: "Math in code: add, subtract, multiply, divide, and more",
  introduction: "Meet the **math crew**: `+` adds, `-` subtracts, `*` multiplies, `/` divides, and `%` hands you the **remainder**. These five (plus `**` for powers) run **every total, average, discount, and score** in your apps.\n\nIf your program handles numbers at all — and it will — these operators are your **daily drivers**.",
  definition: {
    term: "Arithmetic operators",
    explanation: "**Symbols that do math** on numbers: `+` **adds**, `-` **subtracts**, `*` **multiplies**, `/` **divides**, `%` gives the **remainder**, and `**` raises to a **power**. They turn values into calculated results."
  },
  whyItMatters: "Shopping totals, game scores, discounts, averages, split bills — **all math in all apps** flows through these operators. They are the **most-used operators** in programming, full stop. Learn them cold.",
  realWorldAnalogy: {
    title: "The Cash Register Buttons",
    story: "A **cash register** has one button per math job: add the items, subtract the discount, divide the bill. Each **operator** is one of those buttons — press it, and the numbers obey instantly. No calculator app needed; the buttons **are** the program.",
    comparison: [
      { item: "% (modulo)", meaning: "The 'leftover slice' button — 7 % 3 is 1, what remains after sharing." },
      { item: "** (power)", meaning: "The 'times itself' button — 2 ** 3 is 8." }
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
      reason: "JavaScript division **keeps decimals**: `7 / 2` is `3.5`, not `3`. Need a whole number? Wrap it: `Math.floor(7 / 2)` gives `3`."
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
    "**`+ - * /`** do basic math; **`%`** gives the remainder; **`**`** raises to a power.",
    "Division **keeps decimal places** — `7 / 2` is `3.5`.",
    "Operators combine into full expressions like `bill - discount + tax`."
  ],
  quizQuestions: [
    { id: "js-arith-1", question: "What is 10 % 3?", options: ["1", "3", "0", "3.33"], correctAnswerIndex: 0, explanation: "Right — `10 / 3` is 3 with **1 left over**, and `%` reports exactly that leftover: `1`." },
    { id: "js-arith-2", question: "What does 2 ** 4 evaluate to?", options: ["16", "8", "6", "24"], correctAnswerIndex: 0, explanation: "Correct — `**` is the **power** operator: `2 ** 4` means 2 × 2 × 2 × 2 = `16`." }
  ]
};

// LESSON: Assignment Operators
export const jsAssignmentOperatorsContent: LessonContent = {
  heroTagline: "Shortcuts that update a variable in one step",
  introduction: "Tired of writing `total = total + price`? Meet the **shortcut crew**: `x += 5` means exactly the same thing — **add and store in one move**.\n\nThese little operators make **counters, totals, and accumulators** short, clean, and much harder to mess up.",
  definition: {
    term: "Assignment operators",
    explanation: "**Shortcuts** that combine math with storing the result: `x += 5` means `x = x + 5`. Available for every operation — **`+=`**, **`-=`**, **`*=`**, **`/=`**, **`%=`** — they update a variable **in one short step**."
  },
  whyItMatters: "Running totals and scores update **constantly** — every cart add, every point scored. Writing `total += price` is cleaner, shorter, and **less error-prone** than the long form. Pros use these everywhere.",
  realWorldAnalogy: {
    title: "The Magic Piggy Bank",
    story: "A **piggy bank** that updates itself: every time you drop in a coin, it recounts automatically. `total += price` is that magic piggy bank — **add and store in one move**, instead of the long-winded `total = total + price`.",
    comparison: [
      { item: "total += price", meaning: "Tossing another coin into the jar — the jar remembers the new total." },
      { item: "total = total + price", meaning: "Emptying the jar, counting everything again, putting it back — same result, more work." }
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
      reason: "`=+` is a trap! It just assigns **positive 3** (`x = +3`). The plus must come **first**: `x += 3`. Order matters!"
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
    "**`+= -= *= /= %=`** update a variable in one short step.",
    "`x += 5` is **identical** to `x = x + 5` — just shorter and cleaner.",
    "Watch the order: **`+=`** works, but **`=+`** does something completely different!"
  ],
  quizQuestions: [
    { id: "js-assign-1", question: "If x = 10, what is x after x *= 3?", options: ["30", "13", "7", "103"], correctAnswerIndex: 0, explanation: "Correct — `x *= 3` means `x = x * 3`, so `10 * 3` = `30`. Multiply and store, one step." },
    { id: "js-assign-2", question: "What does x -= 4 do?", options: ["Subtracts 4 from x and stores it", "Sets x to -4", "Compares x with 4", "Nothing"], correctAnswerIndex: 0, explanation: "Right — `-=` **subtracts and reassigns** in one move. `x -= 2` shrinks x by 2." }
  ]
};

// LESSON: Comparison Operators
export const jsComparisonOperatorsContent: LessonContent = {
  heroTagline: "Asking questions that answer true or false",
  introduction: "Comparison operators are how code **asks questions**: Is the password correct? Is the user old enough? Is stock available? Each answer is a **boolean** — `true` or `false`.\n\nThe star of the show is **`===`** (strict equality): it checks **value AND type**. Its sloppy cousin `==` causes legendary bugs — you'll learn why.",
  definition: {
    term: "Comparison operators",
    explanation: "**Operators that ask yes/no questions** and answer with a **boolean**: `==` checks value, **`===`** checks value **AND** type, `> < >= <=` compare size, `!==` means 'not equal'. Every `if` statement runs on these."
  },
  whyItMatters: "Every `if` statement depends on comparisons — is the password correct? Is the user old enough? Getting **`===`** right prevents the **sneakiest bugs** in JavaScript. This lesson alone will save you hours of debugging.",
  realWorldAnalogy: {
    title: "The Two Bouncers",
    story: "Two **bouncers** guard a club. **Loose** `==` asks 'close enough?' and waves in `\"5\"` when expecting `5`. **Strict** `===` checks ID **and** face — value **and** type must match. Guess which bouncer the pros hire?",
    comparison: [
      { item: "== (loose)", meaning: "'Close enough?' — converts types to match. \"5\" == 5 is true. Sneaky!" },
      { item: "=== (strict)", meaning: "'Exactly the same?' — value AND type must match. \"5\" === 5 is false. Honest." }
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
      reason: "One `=` **assigns**; `===` **compares**. Writing `if (x = 5)` assigns 5 (truthy!) instead of testing — a **classic** bug. Triple-check your equals signs."
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
    "Comparisons return **`true`** or **`false`** — answers to yes/no questions.",
    "Always prefer **`===`** over `==` to avoid type surprises.",
    "**Never** use a single `=` inside an `if` condition — it assigns instead of comparing."
  ],
  quizQuestions: [
    { id: "js-compare-1", question: "What is 5 === \"5\"?", options: ["false", "true", "Error", "undefined"], correctAnswerIndex: 0, explanation: "Correct — **`===`** checks type too: number `5` vs string `\"5\"` is **`false`**." },
    { id: "js-compare-2", question: "What does !== mean?", options: ["Strictly not equal (value or type differs)", "Roughly equal", "Greater than", "Assign and compare"], correctAnswerIndex: 0, explanation: "Right — **`!==`** is `true` when the value **or** the type doesn't match." }
  ]
};

// LESSON: Logical Operators
export const jsLogicalOperatorsContent: LessonContent = {
  heroTagline: "Combining conditions with AND, OR, and NOT",
  introduction: "Real rules are **compound**: 'weekend **AND** sunny' for a picnic, 'admin **OR** owner' for access, '**NOT** banned' for posting.\n\n**Logical operators** join booleans into those rules: **`&&`** needs both true, **`||`** needs at least one, **`!`** flips the result.",
  definition: {
    term: "Logical operators",
    explanation: "**Operators that join booleans**: **`&&`** (AND) needs **both** sides true, **`||`** (OR) needs **at least one** true, **`!`** (NOT) **flips** true to false. They build real-world rules like 'logged in AND has credit'."
  },
  whyItMatters: "Real rules are **compound**: 'weekend AND sunny', 'admin OR owner', 'logged in AND has credit'. Logical operators express these **directly** — they're the grammar of real-world decision-making.",
  realWorldAnalogy: {
    title: "The Vault, the Building, and the Switch",
    story: "A **bank vault** needs **two keys** turned together (`&&` — both true). A building has **two entrances** (`||` — either one gets you in). And a **light switch** (`!`) flips whatever state it's in. Three tiny symbols, endless real-world rules.",
    comparison: [
      { item: "&& (AND)", meaning: "Both keys needed — like a safe needing two keys turned together." },
      { item: "|| (OR)", meaning: "Either key works — like two entrances to the same building." },
      { item: "! (NOT)", meaning: "Flipping the switch — ON becomes OFF." }
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
      reason: "Each side of `||` needs its **own full comparison**! `day === \"Sat\" || \"Sun\"` is wrong — `\"Sun\"` alone is truthy text. Write `day === \"Sat\" || day === \"Sun\"`."
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
    "**`&&`** needs all true; **`||`** needs at least one true; **`!`** flips a boolean.",
    "Each side of `&&` and `||` must be a **complete condition**.",
    "Use **parentheses** to make combined logic readable."
  ],
  quizQuestions: [
    { id: "js-logical-1", question: "What is true && false?", options: ["false", "true", "Error", "undefined"], correctAnswerIndex: 0, explanation: "Correct — **AND** needs **both** sides true. One false spoils it." },
    { id: "js-logical-2", question: "What is !false?", options: ["true", "false", "0", "Error"], correctAnswerIndex: 0, explanation: "Right — **`!`** flips the boolean: not-false is **`true`**." }
  ]
};

// LESSON: Increment
export const jsIncrementContent: LessonContent = {
  heroTagline: "Adding one — the shortcut every counter uses",
  introduction: "**`++`** adds exactly **1** to a variable: `count++` is the short, sweet way of writing `count = count + 1`.\n\nIt powers **loops**, **scores**, **likes**, **page views** — anywhere a number ticks upward, `++` is there.",
  definition: {
    term: "Increment operator (++)",
    explanation: "The **increment operator**: `count++` is shorthand for `count = count + 1` — it adds **exactly 1** and stores the result. The go-to for **counters** of every kind."
  },
  whyItMatters: "**Counters appear everywhere** — loop iterations, cart quantities, game scores, page views. `++` is the idiom **every developer recognizes instantly**. Not knowing it is like not knowing what a stop sign means.",
  realWorldAnalogy: {
    title: "The Gym Tally Counter",
    story: "A **gym tally counter**: each rep, you click — **+1**, instantly. **`++`** is that clicker: `count++` adds exactly **1**, no ceremony. Scores, likes, loop rounds, page views — anything that **ticks upward** runs on this tiny operator.",
    comparison: [
      { item: "count++", meaning: "One more rep — the tally grows by exactly one." },
      { item: "count = count + 1", meaning: "The long way of saying the same thing — works, but nobody writes it." }
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
      reason: "`x++` returns the **OLD** value first, then increments; `++x` increments **first**. Confusing! Prefer **separate lines**: increment, then use."
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
    "**`++`** adds **exactly 1** to a variable.",
    "It is shorthand for `x = x + 1`.",
    "`x++` uses the **old** value first; `++x` uses the **new** value."
  ],
  quizQuestions: [
    { id: "js-inc-1", question: "If x = 7, what is x after x++?", options: ["8", "7", "9", "6"], correctAnswerIndex: 0, explanation: "Correct — `++` adds **1**: `7` becomes `8`. One click of the tally counter." },
    { id: "js-inc-2", question: "What does x++ do?", options: ["Increases x by 1", "Doubles x", "Sets x to 0", "Deletes x"], correctAnswerIndex: 0, explanation: "Right — the increment operator adds **exactly one**. Not two, not ten — one." }
  ]
};

// LESSON: Decrement
export const jsDecrementContent: LessonContent = {
  heroTagline: "Subtracting one — countdowns and stock levels",
  introduction: "If `++` is the **cheerleader** (adding one), `--` is the **countdown** (subtracting one). `stock--` means one item sold; `attempts--` means one try used up.\n\nIt drives **countdown timers**, **remaining attempts**, and **inventory counts** — anything that drains.",
  definition: {
    term: "Decrement operator (--)",
    explanation: "The **decrement operator**: `x--` is shorthand for `x = x - 1` — it subtracts **exactly 1** and stores the result. The mirror image of **`++`** (which adds 1)."
  },
  whyItMatters: "Anything that **counts down** uses `--`: OTP attempts left, items in stock, seconds on a timer, lives in a game. It's the operator behind every 'only 3 left!' urgency message.",
  realWorldAnalogy: {
    title: "The Countdown Ticker",
    story: "A **countdown timer** doesn't count up — it **ticks down**: 10, 9, 8... **`--`** is that ticking: each use subtracts exactly **1**. OTP attempts, items in stock, lives in a game — anything that **drains** runs on `--`.",
    comparison: [
      { item: "stock--", meaning: "One item sold — the shelf loses one." },
      { item: "attempts--", meaning: "One wrong OTP — one fewer try remaining." }
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
      reason: "`n--` inside `console.log` prints the **old** value first, then decrements — double confusion! **Decrement once, then print** on a separate line."
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
    "**`--`** subtracts **exactly 1** from a variable.",
    "It is shorthand for `x = x - 1`.",
    "Perfect for **countdowns**, **attempts**, and **inventory**."
  ],
  quizQuestions: [
    { id: "js-dec-1", question: "If stock = 5, what is stock after stock--?", options: ["4", "5", "6", "0"], correctAnswerIndex: 0, explanation: "Correct — `--` subtracts **1**: `5` becomes `4`." },
    { id: "js-dec-2", question: "Which is equivalent to n--?", options: ["n = n - 1", "n = n + 1", "n = 0", "n = -n"], correctAnswerIndex: 0, explanation: "Right — decrement **subtracts one** and stores the result back in the variable." }
  ]
};

// LESSON: Ternary Operator
export const jsTernaryOperatorContent: LessonContent = {
  heroTagline: "An if-else squeezed into a single line",
  introduction: "Constantly picking between **two options** — 'Login' vs 'Logout', green vs red, singular vs plural? Writing a full `if-else` every time is overkill.\n\nThe **ternary operator** squeezes if-else into **one line**: `condition ? valueIfTrue : valueIfFalse`.",
  definition: {
    term: "Ternary operator (? :)",
    explanation: "A **one-line if-else** for picking between **two values**: `condition ? valueIfTrue : valueIfFalse`. When the condition is true you get the **first** value; otherwise the **second**. Perfect for labels, classes, and messages."
  },
  whyItMatters: "UI code **constantly** picks between two options — 'Login' vs 'Logout', green vs red, 'item' vs 'items'. The ternary keeps these choices on **one readable line** instead of five. Small tool, huge daily use.",
  realWorldAnalogy: {
    title: "The Coin Flip",
    story: "A **coin flip** decides between two prizes: **heads** → prize A, **tails** → prize B. The **`ternary`** is that coin flip in code — `condition ? valueIfTrue : valueIfFalse` picks **one of two values** in a single line. Three parts, zero ceremony.",
    comparison: [
      { item: "condition ? a : b", meaning: "The coin flip — heads you get A, tails you get B. One line, one result." },
      { item: "Full if-else", meaning: "The committee meeting — same decision, five lines of ceremony." }
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
      reason: "**Nested ternaries** need parentheses and get **unreadable fast** — a coin flip inside a coin flip inside a coin flip! For three or more branches, use `if-else` or `switch`."
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
    "`condition ? a : b` returns **`a`** when true, **`b`** when false.",
    "It is a compact replacement for **simple** if-else assignments.",
    "**Avoid nesting** ternaries — use if-else for complex logic."
  ],
  quizQuestions: [
    { id: "js-ternary-1", question: "What is 10 > 5 ? \"yes\" : \"no\"?", options: ["\"yes\"", "\"no\"", "true", "Error"], correctAnswerIndex: 0, explanation: "Correct — the condition is **true**, so the value after **`?`** is returned." },
    { id: "js-ternary-2", question: "How many parts does the ternary operator have?", options: ["Three: condition, ? value, : value", "Two", "Four", "One"], correctAnswerIndex: 0, explanation: "Right — ternary means **three parts**: `condition ? trueValue : falseValue`." }
  ]
};

// LESSON: Operator Precedence
export const jsOperatorPrecedenceContent: LessonContent = {
  heroTagline: "Which operation runs first when they share a line",
  introduction: "`2 + 3 * 4` — is it `20` or `14`? It's **14**, because `*` runs **before** `+`. When operators share a line, **precedence** decides the order.\n\nJust like school math: **`*` and `/`** before **`+` and `-`**, and **parentheses** beat everything.",
  definition: {
    term: "Operator precedence",
    explanation: "The **rules deciding which operation runs first** when a line has several: **`*`, `/`, `%`** run before **`+` and `-`** (like school math), and **parentheses always win**. When in doubt, **add parentheses** — they're free and make intent obvious."
  },
  whyItMatters: "**Wrong order means wrong totals** — a discount applied at the wrong step changes the price. In money math, precedence bugs are **expensive** bugs. Know the order, or parenthesize.",
  realWorldAnalogy: {
    title: "The Emergency Room Triage",
    story: "An **emergency room** doesn't treat patients in arrival order — **critical cases go first**. Operators have the same triage: **`*` and `/`** are treated before **`+` and `-`**, and **parentheses** are the VIP pass that **skips every queue**. `2 + 3 * 4` is `14`, not `20` — multiplication got treated first.",
    comparison: [
      { item: "* and /", meaning: "The express lane — always served before + and -." },
      { item: "( )", meaning: "The VIP pass — jumps the entire queue, no matter what." }
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
      reason: "`/` runs **before** `+`! `10 + 20 / 2` is `20`, not `15`. Want the addition first? **Parentheses**: `(10 + 20) / 2`."
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
    "**`* / %`** run before **`+`** and **`-`** — the express lane.",
    "**Parentheses** override everything — use them for clarity.",
    "When unsure, **add parentheses** even if they're not strictly needed."
  ],
  quizQuestions: [
    { id: "js-precedence-1", question: "What is 2 + 3 * 4?", options: ["14", "20", "24", "9"], correctAnswerIndex: 0, explanation: "Correct — `*` runs first: `3 * 4 = 12`, then `+ 2` = **`14`**." },
    { id: "js-precedence-2", question: "What is (2 + 3) * 4?", options: ["20", "14", "24", "10"], correctAnswerIndex: 0, explanation: "Right — **parentheses first**: `(2 + 3) * 4` = `5 * 4` = **`20`**." }
  ]
};

// ============================================================
// MODULE 4: Conditions (unique lessons)
// ============================================================

// LESSON: Introduction to Conditions
export const jsConditionsIntroContent: LessonContent = {
  heroTagline: "Teaching your code to make decisions",
  introduction: "**`if` the user is logged in**, show the dashboard. **Otherwise**, show the login page. That tiny word — **if** — is the most powerful word in programming.\n\n**Conditions** let code **choose** what to do. Without them, every program would do the exact same thing every time — like a theme park with only one ride.",
  definition: {
    term: "Condition",
    explanation: "**Code that chooses** what to do based on data: `if` tests a condition, and the program takes **different paths** for `true` vs `false`. Conditions turn fixed scripts into **smart programs** that react."
  },
  whyItMatters: "**Decisions are the heart of software**: discounts for members, access for admins, warnings for empty carts. Conditions make apps feel **smart** — like they actually understand the user. This is where programming gets exciting.",
  realWorldAnalogy: {
    title: "The Theme Park Rulebook",
    story: "A **theme park** doesn't give everyone the same ride: ticket holders enter, VIPs skip lines, kids get the gentle coaster. **Conditions** are the park's rulebook — **different visitors, different paths**. Without them, every program would do the **exact same thing** every time. Boring — and useless.",
    comparison: [
      { item: "Logged in", meaning: "The VIP entrance — straight to the dashboard." },
      { item: "Not logged in", meaning: "The main gate — please show your ticket (login page)." }
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
      reason: "The condition must wear **parentheses**: `if age > 18` is a syntax error. It's `if (age > 18)` — the uniform is mandatory."
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
    "**Conditions** let code take **different paths** based on data.",
    "The test inside `if ( )` must be **`true`** or **`false`**.",
    "**`else`** provides the fallback when the test fails."
  ],
  quizQuestions: [
    { id: "js-condsintro-1", question: "What is a condition?", options: ["A true/false test that picks which code runs", "A type of loop", "A variable declaration", "An HTML tag"], correctAnswerIndex: 0, explanation: "Correct — conditions **test booleans** to choose between code paths. True goes left, false goes right." },
    { id: "js-condsintro-2", question: "Why do programs need conditions?", options: ["To react differently to different data and users", "To run faster", "To use less memory", "To load images"], correctAnswerIndex: 0, explanation: "Right — conditions make programs **dynamic** instead of fixed. Same code, different behavior per user." }
  ]
};

// LESSON: if Statement
export const jsIfStatementContent: LessonContent = {
  heroTagline: "Run this code — but only when the test is true",
  introduction: "The **`if` statement** is the atom of decision-making: it runs its block **only when** the condition in parentheses is `true`. Test false? The block is **skipped silently**.\n\nEvery guard clause, every validation, every feature check starts with a plain `if`. Master this, and every other conditional builds on it.",
  definition: {
    term: "if statement",
    explanation: "The **simplest decision** in programming: `if (condition) { ... }` runs its block **only when** the condition in parentheses is **`true`**. A `false` test **skips the block silently** — no error, no message."
  },
  whyItMatters: "**Guard clauses**, **validations**, and **feature checks** all start with a plain `if`. It's the foundation every other conditional builds on — get fluent here and `else`, `switch`, and ternaries feel natural.",
  realWorldAnalogy: {
    title: "The Concert Ticket Check",
    story: "A **concert ticket check**: if your ticket is valid, you enter and enjoy the show (the block runs). If not — no drama, no announcement — you're simply **not let in** (the block is skipped silently). That quiet skip is the `if` statement's signature move.",
    comparison: [
      { item: "Condition true", meaning: "Ticket accepted — the show (block) begins." },
      { item: "Condition false", meaning: "No ticket — the show is skipped silently, life goes on." }
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
      reason: "`=` **assigns**; `===` **compares**. Inside `if`, you almost always want **`===`** — `if (x = 5)` assigns 5 (truthy!) instead of testing."
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
    "**`if`** runs its block **only** when the condition is `true`.",
    "A `false` condition **skips the block silently**.",
    "Code **after** the `if` block always runs."
  ],
  quizQuestions: [
    { id: "js-if-1", question: "When does the if block execute?", options: ["Only when the condition is true", "Always", "Only when false", "Never"], correctAnswerIndex: 0, explanation: "Correct — the block runs **exclusively** for a true condition. False means silent skip." },
    { id: "js-if-2", question: "What is wrong with if (x = 5)?", options: ["It assigns instead of comparing", "Nothing", "Missing braces", "x must be a string"], correctAnswerIndex: 0, explanation: "Right — single `=` **assigns** 5 (truthy), so the block runs! Use **`===`** to compare." }
  ]
};

// LESSON: else Statement
export const jsElseStatementContent: LessonContent = {
  heroTagline: "The backup plan when the if test fails",
  introduction: "`if` handles the **true** case — but what about when the test is **false**? Silence isn't an answer users accept.\n\n**`else`** catches the false case: `if` runs when the test is true, `else` runs when it's false. Together they cover **every possibility** — one of the two blocks **always** runs.",
  definition: {
    term: "else statement",
    explanation: "The **fallback branch** of an `if`: when the `if` condition is `false`, the `else` block runs **instead**. It takes **no condition** of its own — it simply means '**otherwise**'. Exactly one of the two blocks always executes."
  },
  whyItMatters: "Users need **feedback in both cases** — 'access granted' **or** 'access denied'. `else` guarantees the program **always responds** instead of going silent. No silent failures.",
  realWorldAnalogy: {
    title: "The GPS Detour",
    story: "A **GPS** always has a plan B: if the main road is open, take it; **otherwise**, take the detour. **`else`** is the detour — it needs **no condition of its own**, because it's defined by the `if` failing. One of the two **always** runs.",
    comparison: [
      { item: "if", meaning: "The main road — taken when the condition is true." },
      { item: "else", meaning: "The detour — automatically taken when the main road is closed (false)." }
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
      reason: "`else` takes **no condition** — writing `else (x > 5)` is a syntax error. For another test, use **`else if`**."
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
    "**`else`** runs when the `if` condition is **`false`**.",
    "`else` takes **no condition** of its own.",
    "Exactly **one** of the two blocks always executes."
  ],
  quizQuestions: [
    { id: "js-else-1", question: "When does the else block run?", options: ["When the if condition is false", "Always", "When the if condition is true", "Never"], correctAnswerIndex: 0, explanation: "Correct — `else` is the **false-branch** of the `if`. True goes to `if`, false goes to `else`." },
    { id: "js-else-2", question: "Can else have its own condition?", options: ["No — use else if for that", "Yes, always", "Only on Fridays", "Only with numbers"], correctAnswerIndex: 0, explanation: "Right — plain `else` takes **no condition**; `else if` adds another test." }
  ]
};

// LESSON: else if
export const jsElseIfContent: LessonContent = {
  heroTagline: "Chain as many tests as you need, in order",
  introduction: "What about **three or more** outcomes — grade bands A/B/C/D/F, shipping tiers, age groups? Nesting `if` inside `else` gets ugly fast.\n\n**`else if`** chains tests **in order**: the engine checks each condition top to bottom and runs the **FIRST** one that's true.",
  definition: {
    term: "else if",
    explanation: "A **chain of tests** after an `if`: `if (...) { } else if (...) { } else if (...) { }`. The engine checks each condition **in order** and runs only the **first true branch** — then skips the rest."
  },
  whyItMatters: "Real decisions have **many outcomes** — grade bands, shipping tiers, age groups, discount levels. `else if` handles them **cleanly** without nesting, keeping multi-way decisions readable.",
  realWorldAnalogy: {
    title: "The Marathon Checkpoints",
    story: "A **marathon with checkpoints**: runners are checked at **checkpoint 1** first — if they qualify, they stop there. Only the rest continue to checkpoint 2. **`else if`** works the same: the engine checks each condition **top to bottom** and runs the **FIRST** one that's true.",
    comparison: [
      { item: "score >= 90", meaning: "First checkpoint — A grade. 95 stops here, never sees the rest." },
      { item: "score >= 80", meaning: "Second checkpoint — B grade, only for scores that missed the first." }
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
      reason: "**Order matters** — the first true test wins! Check the **strictest** condition first (`>= 90` before `>= 80`), or the strict one never gets reached."
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
    "**`else if`** chains multiple tests **in order**.",
    "Only the **first true** branch runs — the rest are skipped.",
    "Check the **strictest** condition first."
  ],
  quizQuestions: [
    { id: "js-elseif-1", question: "With score 85, which branch runs in: if(>=90)A else if(>=80)B else C?", options: ["B", "A", "C", "All"], correctAnswerIndex: 0, explanation: "Correct — `85` fails `>= 90` but passes `>= 80`. **First true branch wins**." },
    { id: "js-elseif-2", question: "Why test the highest range first?", options: ["The first true branch wins, so lower tests would catch high values too", "It runs faster", "The engine requires it", "No reason"], correctAnswerIndex: 0, explanation: "Right — `>= 80` is also true for `95`, so it must come **after** `>= 90`. Strictest first!" }
  ]
};

// LESSON: Nested Conditions
export const jsNestedConditionsContent: LessonContent = {
  heroTagline: "Decisions inside decisions for layered rules",
  introduction: "Some rules are **layered**: 'is it a weekend?' — and only then — 'is it sunny?' A **nested condition** (an `if` inside another `if`) expresses layers that flat chains can't.\n\nThe outer test must **pass** before the inner test is even **checked**.",
  definition: {
    term: "Nested condition",
    explanation: "An **`if` inside another `if`**: the **inner test** is only checked when the **outer test passes**. Use it when a second decision **only matters** after the first — like checking a password only after the username matches."
  },
  whyItMatters: "Some rules are genuinely **layered** — and nesting expresses layers that flat chains cannot. But it's also the fastest way to write **unreadable** code, so learning to nest **shallowly** is a real professional skill.",
  realWorldAnalogy: {
    title: "The Bank Vault's Two Doors",
    story: "A **bank vault** has two doors: the **front door** (outer `if`) must open before you even **see** the inner door (inner `if`). Checking the password only matters **after** the username matches — that's a **nested condition**: a decision inside a decision.",
    comparison: [
      { item: "Outer if", meaning: "The front door — must open before you even see the inner door." },
      { item: "Inner if", meaning: "The inner door — only checked when the front door opened." }
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
      reason: "**Deep nesting** with sloppy indentation becomes unreadable fast — keep it to **2 levels max**. Deeper? Flatten with `&&` or early returns."
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
    "**Nested `if`s** check the inner test **only** when the outer passes.",
    "Keep nesting **shallow** — two levels is usually enough.",
    "**Indent carefully** so each brace matches its `if`."
  ],
  quizQuestions: [
    { id: "js-nested-1", question: "When is the inner if evaluated?", options: ["Only when the outer if is true", "Always", "Only when the outer if is false", "Never"], correctAnswerIndex: 0, explanation: "Correct — the inner block is **unreachable** unless the outer condition passes. Front door first!" },
    { id: "js-nested-2", question: "What is the risk of deep nesting?", options: ["Hard-to-read code", "Faster execution", "Better security", "Smaller files"], correctAnswerIndex: 0, explanation: "Right — many nested levels **hurt readability**. Flatten with `&&` or early returns instead." }
  ]
};

// LESSON: Comparison (in conditions)
export const jsComparisonConditionsContent: LessonContent = {
  heroTagline: "The tests that drive every if statement",
  introduction: "An `if` statement is only as smart as its **test**. `age >= 18`, `password === input`, `stock > 0` — each comparison is a **yes/no question** guarding a block of code.\n\nThis lesson is about choosing the **right** comparison so your decisions behave **exactly** as intended — no surprises.",
  definition: {
    term: "Conditional comparison",
    explanation: "Using **comparison operators** (`===`, `>`, `<`, `>=`, `<=`, `!==`) as the **tests inside `if` statements**. The comparison you choose decides **exactly** when the block runs — precision here means precise behavior."
  },
  whyItMatters: "A wrong comparison **flips decisions**: users locked out, discounts misapplied, admins blocked. Precise comparisons mean **precise behavior** — and in production, precision is everything.",
  realWorldAnalogy: {
    title: "The Bouncer's Checklist",
    story: "Every `if` statement has a **bouncer** at its door: the **comparison**. `age >= 18` measures your height; `password === input` scans your fingerprint. Pick the **wrong test** and the wrong people get in — a wrong comparison **flips the decision**.",
    comparison: [
      { item: "age >= 18", meaning: "The bouncer's measuring tape — tall enough? You enter." },
      { item: "password === input", meaning: "The fingerprint scanner — exact match or no entry." }
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
      reason: "`==` hides **type mismatches** that become bugs later (`\"5\" == 5` is true!). Compare with **`===`** and matching types — strict and honest."
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
    "`if` conditions are built from **comparison operators** — the bouncer's checklist.",
    "Use **`===`** with matching types for reliable decisions.",
    "Combine comparisons with **`&&`** and **`||`** for range checks."
  ],
  quizQuestions: [
    { id: "js-compcond-1", question: "Which comparison is safest in an if?", options: ["===", "==", "=", "!="], correctAnswerIndex: 0, explanation: "Correct — **`===`** checks value AND type, dodging all loose-equality surprises." },
    { id: "js-compcond-2", question: "How do you test 'score between 50 and 90'?", options: ["score >= 50 && score <= 90", "score == 50-90", "50 < score > 90", "score = 50 && 90"], correctAnswerIndex: 0, explanation: "Right — two comparisons joined with **`&&`** express a range: `age >= 13 && age <= 19`." }
  ]
};

// LESSON: Logical Conditions
export const jsLogicalConditionsContent: LessonContent = {
  heroTagline: "Real-world rules need AND, OR, and NOT together",
  introduction: "Almost **no real rule** is a single check. Entry needs `age >= 18 && hasId`. A day off needs `isWeekend || isHoliday`.\n\n**Logical conditions** combine multiple tests into **one decision** — this lesson is about building those compound rules correctly.",
  definition: {
    term: "Logical condition",
    explanation: "**Combining multiple tests** into one decision with **`&&`** (AND — all must be true), **`||`** (OR — at least one true), and **`!`** (NOT — flips the result). This is how real-world rules like 'member AND minimum spend' are written."
  },
  whyItMatters: "Discounts need **membership AND minimum spend**; access needs a **role OR ownership**. Compound logic is **daily work** — and getting the grouping wrong silently breaks rules. This is precision that matters.",
  realWorldAnalogy: {
    title: "The Nightclub's Two Bouncers",
    story: "A **nightclub with two bouncers**: the first checks your **ID** (`age >= 18`), the second checks the **guest list** (`hasId`). With **`&&`**, you need **both** stamps. With **`||`**, **either** stamp gets you in. Real rules are **compound** — and logical operators speak them fluently.",
    comparison: [
      { item: "age >= 18 && hasId", meaning: "Both stamps required — miss one, no entry." },
      { item: "isWeekend || isHoliday", meaning: "Either stamp works — one day off is enough." }
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
      reason: "**`&&` runs before `||`** — just like `*` runs before `+`. Use **parentheses** to make your intended grouping explicit: `(a || b) && c`."
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
    "**`&&`** combines requirements; **`||`** combines alternatives; **`!`** negates.",
    "**`&&`** binds tighter than `||` — use **parentheses** to be explicit.",
    "**Read compound conditions out loud** to check the logic — ears catch what eyes miss."
  ],
  quizQuestions: [
    { id: "js-logiccond-1", question: "In a && b || c, which evaluates first?", options: ["a && b", "b || c", "All at once", "c first"], correctAnswerIndex: 0, explanation: "Correct — **`&&`** has higher precedence than `||`. Group with parentheses to be explicit." },
    { id: "js-logiccond-2", question: "What does if (!ready) mean?", options: ["Run when ready is false", "Run when ready is true", "Delete ready", "Always run"], correctAnswerIndex: 0, explanation: "Right — **`!`** negates: the block runs when `ready` is **falsy**." }
  ]
};

// LESSON: switch
export const jsSwitchContent: LessonContent = {
  heroTagline: "A clean menu of choices instead of long if-chains",
  introduction: "Five `else if` branches on the **same variable** get noisy. There's a cleaner tool: **`switch`**.\n\nIt compares **one value** against many **cases** — perfect for days of the week, menu options, or status codes. Each case runs its block; **`break`** stops the fall-through.",
  definition: {
    term: "switch statement",
    explanation: "A **clean multi-way branch**: `switch (value)` compares **one value** against many **`case`** labels. Each matching case runs its block; **`break`** stops the fall-through to the next case; **`default`** handles unmatched values."
  },
  whyItMatters: "Five or more `else if` branches on the same variable get **noisy**. `switch` lays the options out **like a menu** — easier to scan, easier to extend. Readability is a feature.",
  realWorldAnalogy: {
    title: "The Restaurant Menu",
    story: "Ordering at a **restaurant**: you name **one dish**, the waiter matches it against the **menu** — pizza? pasta? burger? Each match has its recipe. **`switch`** is that menu: it compares **one value** against many **cases**, cleanly laid out. And **`break`** is saying 'I'll have that one!' — it stops the listing.",
    comparison: [
      { item: "switch", meaning: "The restaurant menu — one dish name, many options laid out clearly." },
      { item: "Long if-else chain", meaning: "Interrogating the waiter: 'do you have pizza? no? pasta? no? burger?...' — noisy!" },
      { item: "break", meaning: "'I'll have that one!' — stops the waiter listing further dishes." }
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
      reason: "Without **`break`**, execution **'falls through'** into the next case — like the waiter continuing to list dishes after you ordered! End each case with `break`."
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
    "**`switch`** matches one value against many **`case`** labels.",
    "Always end each case with **`break`** to stop fall-through.",
    "**`default`** handles values no case covers."
  ],
  quizQuestions: [
    { id: "js-switch-1", question: "What does break do in a switch?", options: ["Exits the switch after the matched case", "Restarts the switch", "Skips to default", "Ends the program"], correctAnswerIndex: 0, explanation: "Correct — **`break`** stops fall-through, so **only the matched case** runs." },
    { id: "js-switch-2", question: "When does default run?", options: ["When no case matches", "Always first", "Only on errors", "Never"], correctAnswerIndex: 0, explanation: "Right — **`default`** is the fallback for unmatched values. The 'anything else' option." }
  ]
};

// LESSON: Real-world Conditions
export const jsRealWorldConditionsContent: LessonContent = {
  heroTagline: "Putting decisions together like a real app does",
  introduction: "Tutorials teach **pieces**; jobs need **wholes**. Real features combine everything: validate input, check membership, apply discounts, handle edge cases.\n\nThis lesson builds a small **checkout rule** the way production code does — step by step. This is where it all comes together.",
  definition: {
    term: "Real-world conditional logic",
    explanation: "**Combining everything** — validation, membership checks, discounts, edge cases — into one **complete real-world rule**. Tutorials teach pieces; this is the **whole**: guard clauses first, best branches first, `else` last."
  },
  whyItMatters: "Tutorials teach pieces; **jobs need wholes**. Practicing a complete rule builds the **judgment** to write conditions that survive real users — messy input, edge cases, and all.",
  realWorldAnalogy: {
    title: "The Store Checkout",
    story: "A **store checkout** is conditions in the wild: the cashier first rejects **expired coupons** (guard clause), then checks **VIP discount** before regular discount (best first), and **every customer** gets a total (final `else`). This lesson builds that checkout — **production-style**, step by step.",
    comparison: [
      { item: "Guard clause", meaning: "The bouncer at the door — bad input never enters the club." },
      { item: "Ordered branches", meaning: "The VIP list — best deals checked first, so nobody steals them." },
      { item: "Final else", meaning: "The closing announcement — every guest gets an answer." }
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
      reason: "The **first true branch wins** — so a smaller deal tested earlier would **steal** the better one! Order branches from **best/most-specific** to least."
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
    "**Validate inputs first** with a guard clause — bouncer at the door.",
    "Order branches from **best/most-specific** to least.",
    "Always end with an **`else`** so every path produces a result."
  ],
  quizQuestions: [
    { id: "js-realcond-1", question: "Why check cartTotal <= 0 first?", options: ["To handle the invalid case before any math", "It runs faster", "The engine requires it", "No reason"], correctAnswerIndex: 0, explanation: "Correct — **guard clauses** reject bad input early, keeping later logic **simple and clean**." },
    { id: "js-realcond-2", question: "Why put the biggest discount first?", options: ["The first true branch wins", "It looks nicer", "Discounts must be sorted", "No reason"], correctAnswerIndex: 0, explanation: "Right — `else if` stops at the **first match**, so the **best deal** must be tested first." }
  ]
};

// ============================================================
// MODULE 5: Loops (unique lessons)
// ============================================================

// LESSON: Introduction to Loops
export const jsLoopsIntroContent: LessonContent = {
  heroTagline: "Repeat work without repeating code",
  introduction: "Print numbers 1 to 100. List every product. Retry a failed request. Doing these by **copy-paste** would take hundreds of lines.\n\nA **loop** runs the **same block** many times instead. It's one of the most powerful ideas in programming — small code, massive output.",
  definition: {
    term: "Loop",
    explanation: "A **loop** runs the **same block of code many times** — once per item, per number, per round — instead of copy-pasting. Every loop needs a **start**, a **stop condition**, and **progress** toward stopping."
  },
  whyItMatters: "**Data comes in bulk** — hundreds of products, thousands of users, millions of rows. Loops process collections with a **few lines instead of a few thousand**. This is how small code handles big data.",
  realWorldAnalogy: {
    title: "The Factory Robot Arm",
    story: "A **factory robot arm** stamps 1,000 boxes: same motion, perfect every time, never bored. A **loop** is that arm — it runs the **same block** as many times as needed. Without it, you'd **copy-paste code** hundreds of times like stamping boxes by hand.",
    comparison: [
      { item: "A loop", meaning: "The robot arm — tireless, exact, never bored." },
      { item: "Copy-paste", meaning: "Doing it by hand — 100 lines for 100 items, and one typo ruins everything." }
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
      reason: "The counter **must move toward the stop condition** — or the loop runs **forever** (an infinite loop), freezing your page. Always check: does something change each round?"
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
    "**Loops** repeat a block instead of **copy-pasting** code.",
    "Every loop needs a **start**, a **stop condition**, and **progress** toward stopping.",
    "A loop that never stops is an **infinite loop** — avoid it!"
  ],
  quizQuestions: [
    { id: "js-loopsintro-1", question: "What is a loop?", options: ["Code that repeats a block multiple times", "A type of variable", "An HTML element", "A function that never runs"], correctAnswerIndex: 0, explanation: "Correct — loops **repeat their block** while a condition holds. Same block, many rounds." },
    { id: "js-loopsintro-2", question: "What makes a loop stop?", options: ["Its condition becoming false", "Running out of memory only", "A timer of 10 seconds", "Nothing stops it"], correctAnswerIndex: 0, explanation: "Right — the loop **exits** when its condition is no longer true. The condition is the brake." }
  ]
};

// LESSON: for Loop
export const jsForLoopContent: LessonContent = {
  heroTagline: "The classic counter loop: start, test, step",
  introduction: "Need to do something **exactly 5 times**? Print numbers 1 to 100? Walk through every item in a list? The **`for` loop** is built for counting.\n\nIts three parts — **start**, **condition**, **step** — sit together in **one line**, making counted repetition beautifully compact.",
  definition: {
    term: "for loop",
    explanation: "The **counting loop**: `for (let i = 0; i < 5; i++)` packs **start** (`let i = 0`), **condition** (`i < 5`), and **step** (`i++`) into one line. It runs the block once per count, with `i` going `0 → 4`."
  },
  whyItMatters: "**Numbered repetition** — table rows, pagination, countdowns, rendering lists — is the **most common loop pattern** in programming. `for` expresses it in one compact, instantly-recognizable line.",
  realWorldAnalogy: {
    title: "The 100-Meter Sprint",
    story: "A **100-meter sprint**: the starter sets your position (`let i = 0`), the finish line says when to stop (`i < 5`), and each stride moves you forward (`i++`). The **`for` loop** packs the entire race — **start, test, step** — into one line.",
    comparison: [
      { item: "let i = 0", meaning: "Lacing up at the start line — where counting begins." },
      { item: "i < 5", meaning: "The finish line — keep running while you haven't crossed it." },
      { item: "i++", meaning: "Each stride — one step forward per round." }
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
      reason: "Indexes end at **`length - 1`**, so the condition is `i < length` — **not** `i <= length`. One `=` too many and you read past the end!"
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
    "**`for`** packs **start**, **condition**, and **step** into one line.",
    "`i < length` is the standard way to **walk an array**.",
    "Indexes run `0` to `length - 1` — use **`<`**, not `<=`."
  ],
  quizQuestions: [
    { id: "js-for-1", question: "How many times does for (let i = 0; i < 5; i++) run?", options: ["5", "4", "6", "Infinite"], correctAnswerIndex: 0, explanation: "Correct — `i` takes values `0, 1, 2, 3, 4`: **five** rounds, then `i < 5` fails." },
    { id: "js-for-2", question: "What are the three parts of a for header?", options: ["Start, condition, step", "If, else, end", "Var, let, const", "Open, loop, close"], correctAnswerIndex: 0, explanation: "Right — **initialization**; **condition**; **update** — always in that order." }
  ]
};

// LESSON: while Loop
export const jsWhileLoopContent: LessonContent = {
  heroTagline: "Keep going until something changes",
  introduction: "What if you **don't know** how many rounds you need? Retry a request **until it succeeds**. Wait **until** the user types something. Drain a queue **until** it's empty.\n\nThe **`while` loop** repeats its block **as long as** the condition is true — 'repeat until done'.",
  definition: {
    term: "while loop",
    explanation: "A loop that repeats its block **as long as** its condition is `true`: `while (battery > 0) { ... }`. Use it when you **don't know in advance** how many rounds you need — the condition decides."
  },
  whyItMatters: "**Retry logic**, **waiting for input**, **draining a queue** — `while` handles 'repeat until done' situations where **counting rounds makes no sense**. It's the loop for the unpredictable real world.",
  realWorldAnalogy: {
    title: "Stir Until Smooth",
    story: "A **soup recipe** says '**stir until smooth**' — not 'stir 47 times'. You repeat **until a condition changes**, and nobody knows how many stirs it'll take. **`while`** is that instruction: it repeats its block **as long as** the condition stays true.",
    comparison: [
      { item: "while", meaning: "'Keep stirring until smooth' — no count, just a condition." },
      { item: "for", meaning: "'Stir exactly 50 times' — counted in advance." }
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
      reason: "If **nothing inside** changes the condition, `while` **never stops** — an infinite loop! Every `while` needs something inside that moves the condition toward `false`."
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
    "**`while`** repeats while its condition stays **`true`**.",
    "The block **must move** the condition toward `false`.",
    "Use `while` when the **number of rounds is unknown** upfront."
  ],
  quizQuestions: [
    { id: "js-while-1", question: "When does a while loop stop?", options: ["When its condition becomes false", "After exactly 10 rounds", "When it feels like it", "Never"], correctAnswerIndex: 0, explanation: "Correct — the condition is **re-checked each round**; `false` exits the loop." },
    { id: "js-while-2", question: "What causes an infinite while loop?", options: ["Nothing inside changes the condition", "Using let", "Too many lines", "A long condition"], correctAnswerIndex: 0, explanation: "Right — without progress toward `false`, the condition stays true **forever**. Infinite loop!" }
  ]
};

// LESSON: do while Loop
export const jsDoWhileLoopContent: LessonContent = {
  heroTagline: "Run first, ask questions later — at least once",
  introduction: "What if the task **must happen at least once** — show a menu, ask for a password, roll the dice? A regular `while` might skip it entirely.\n\n**`do...while`** flips the order: run the block **first**, ask questions **later**. One execution is **guaranteed**.",
  definition: {
    term: "do...while loop",
    explanation: "A loop that runs its **block FIRST** and **then** checks the condition — guaranteeing **at least one execution**. Written as `do { ... } while (condition);` — note the **semicolon** at the end!"
  },
  whyItMatters: "Some tasks **must happen at least once**: show a menu, ask for a password, roll the dice. `do...while` models '**try it, then decide** whether to repeat' — a pattern `while` alone can't express.",
  realWorldAnalogy: {
    title: "The Waiter Who Always Shows the Menu",
    story: "A **restaurant menu**: the waiter shows it to you **first**, then asks 'anything else?' — the menu appears **at least once**, guaranteed. **`do...while`** works the same: the block runs **first**, and **then** the condition decides whether to repeat.",
    comparison: [
      { item: "do...while", meaning: "Taste first, then decide — the menu always appears at least once." },
      { item: "while", meaning: "Check the fridge first — the menu might never appear." }
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
      reason: "`do...while` is a **statement** — it needs the trailing **semicolon**: `} while (x > 0);`. Forget it and the engine complains."
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
    "**`do...while`** always runs its block **at least once**.",
    "The condition is checked **after** each round.",
    "End the statement with a **semicolon** after `while (...)`."
  ],
  quizQuestions: [
    { id: "js-dowhile-1", question: "How many times does do...while run if the condition starts false?", options: ["Once", "Zero", "Infinite", "Twice"], correctAnswerIndex: 0, explanation: "Correct — the block runs **first**, the check happens **after** — so at least one round is guaranteed." },
    { id: "js-dowhile-2", question: "How is do...while different from while?", options: ["It checks the condition after running the block", "It is faster", "It cannot loop", "It needs no condition"], correctAnswerIndex: 0, explanation: "Right — `while` checks **before**; `do...while` checks **after**, guaranteeing one run." }
  ]
};

// LESSON: for...of
export const jsForOfContent: LessonContent = {
  heroTagline: "Walk through every item in a list, simply",
  introduction: "Tired of index bookkeeping — `arr[i]`, `i < arr.length`, `i++` — just to touch every item? There's a cleaner way.\n\n**`for...of`** hands you each **value** directly: `for (const fruit of fruits)`. No indexes. No length checks. Just the items.",
  definition: {
    term: "for...of loop",
    explanation: "A loop that gives you each **VALUE** in an array directly: `for (const fruit of fruits)`. No indexes, no `.length` checks — the **cleanest** way to process every item in a list."
  },
  whyItMatters: "Most array work is '**do something with each item**'. `for...of` says exactly that — with **none of the index bookkeeping** that causes off-by-one bugs. Cleaner code, fewer 3 AM debugging sessions.",
  realWorldAnalogy: {
    title: "The Sushi Conveyor Belt",
    story: "A **sushi conveyor belt**: dishes glide past and you just **pick each one up** — no walking, no counting plates. **`for...of`** is that belt: it hands you each **value** directly. No indexes, no length checks, no off-by-one bugs.",
    comparison: [
      { item: "for...of", meaning: "The conveyor belt — each item arrives in your hands, no reaching." },
      { item: "classic for", meaning: "Walking the shelves yourself — needed when you want the shelf numbers too." }
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
      reason: "`const` in `for...of` gives a **fresh read-only binding** each round — you can't reassign the loop variable itself. (You can still mutate object properties inside!)"
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
    "**`for...of`** hands you each value directly — **no indexes** needed.",
    "It works on **arrays**, **strings**, and other iterables.",
    "Use it for **values**; use a classic `for` when you need **indexes**."
  ],
  quizQuestions: [
    { id: "js-forof-1", question: "What does the loop variable hold in for...of?", options: ["Each value in the array", "Each index number", "The array length", "Nothing"], correctAnswerIndex: 0, explanation: "Correct — `for...of` iterates **values**, not indexes. The items come to you." },
    { id: "js-forof-2", question: "When is for...of better than a classic for?", options: ["When you only need the values", "When you need the index", "When counting backwards", "Never"], correctAnswerIndex: 0, explanation: "Right — it is **cleaner** when indexes aren't needed. Less bookkeeping, fewer bugs." }
  ]
};

// LESSON: for...in
export const jsForInContent: LessonContent = {
  heroTagline: "Walk through every key of an object",
  introduction: "Objects don't have indexes — they have **keys**. So how do you visit **every property** of a user profile or settings object?\n\n**`for...in`** hands you each **key**, one by one. Pair it with `person[key]` and you can read **every value** — perfect for objects with unknown shapes.",
  definition: {
    term: "for...in loop",
    explanation: "A loop that gives you each **KEY** of an object: `for (const key in person)`. Pair it with **bracket notation** (`person[key]`) to read every value — ideal for **inspecting or copying** objects."
  },
  whyItMatters: "Objects have **unknown shapes** — user profiles, settings, API responses. `for...in` lets you handle **every property** without knowing the keys in advance. It's how you process data you didn't design.",
  realWorldAnalogy: {
    title: "Reading the Locker Name Tags",
    story: "A row of **school lockers** with name tags. **`for...in`** walks down the row **reading each name tag** (the **key**). To see inside a locker, you use the tag with **brackets**: `person[key]`. Tags first, contents second.",
    comparison: [
      { item: "for...in", meaning: "Reading the name tags — you get each key." },
      { item: "person[key]", meaning: "Opening each locker — brackets turn the key into its value." }
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
      reason: "**Plain objects are not iterable** — `for...of` on an object throws! Use **`for...in`** for objects, **`for...of`** for arrays. Different tools, different jobs."
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
    "**`for...in`** iterates over an object's **keys**.",
    "Use **`obj[key]`** with brackets to read each value.",
    "Don't use `for...of` on plain objects — they **aren't iterable**."
  ],
  quizQuestions: [
    { id: "js-forin-1", question: "What does for...in give you for an object?", options: ["Its keys", "Its values directly", "Its length", "Its methods only"], correctAnswerIndex: 0, explanation: "Correct — `for...in` yields **property names**; use `obj[key]` (brackets!) to get values." },
    { id: "js-forin-2", question: "Which loop fits a plain object best?", options: ["for...in", "for...of", "do...while", "None"], correctAnswerIndex: 0, explanation: "Right — objects need **`for...in`**; `for...of` works on arrays, **not** plain objects." }
  ]
};

// LESSON: break
export const jsBreakContent: LessonContent = {
  heroTagline: "Exit the loop immediately when you're done",
  introduction: "Imagine searching a list of **10,000 products** for one match — and finding it at position **3**. Should the loop check the other 9,997? Absolutely not!\n\n**`break`** stops a loop **instantly** — the moment you've found what you were looking for.",
  definition: {
    term: "break",
    explanation: "A statement that **exits a loop immediately** — no more rounds, no finishing the current iteration. Execution jumps to the **line after the loop**. Use it when you've **found what you wanted** or a stop condition hits."
  },
  whyItMatters: "Searching 10,000 items shouldn't check all 10,000 after finding a match at position 3. `break` **saves time** and expresses intent clearly: 'stop, we're done.' It's both a performance win and a readability win.",
  realWorldAnalogy: {
    title: "Found the Keys — Stop Searching",
    story: "You're **hunting for your keys** room by room. The moment you find them — do you keep searching the rest of the house? Of course not! **`break`** is that moment of 'found it, we're done' — it **stops the loop instantly**, no more rounds, no more checks.",
    comparison: [
      { item: "break", meaning: "Finding your keys and walking out — the search ends instantly." },
      { item: "No break", meaning: "Finding your keys, then pointlessly checking every remaining room." }
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
      reason: "`break` needs a **loop** (or `switch`) to break out of. Using it alone in a function is like yelling 'stop searching!' when nobody is searching."
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
    "**`break`** exits the innermost loop **immediately** — search over.",
    "Use it to **stop searching** once you've found a match.",
    "It also exits **`switch`** statements — same 'we're done' idea."
  ],
  quizQuestions: [
    { id: "js-break-1", question: "What does break do in a loop?", options: ["Stops the loop immediately", "Skips one round", "Restarts the loop", "Pauses for 1 second"], correctAnswerIndex: 0, explanation: "Correct — `break` **exits the loop**, and execution continues on the line **after** it." },
    { id: "js-break-2", question: "Why break after finding a match?", options: ["To avoid pointless extra checks", "It runs faster to continue", "The engine requires it", "No reason"], correctAnswerIndex: 0, explanation: "Right — continuing after success is **wasted work**. `break` says 'we're done here.'" }
  ]
};

// LESSON: continue
export const jsContinueContent: LessonContent = {
  heroTagline: "Skip this round and jump to the next one",
  introduction: "Sometimes you don't want to **stop** the loop — you just want to **skip** one boring round. Listing products but skipping the out-of-stock ones? Processing orders but ignoring the cancelled ones?\n\n**`continue`** jumps to the **next iteration**, leaving the current round unfinished.",
  definition: {
    term: "continue",
    explanation: "A statement that **skips the rest of the current iteration** and jumps to the **next round** of the loop. The loop itself **keeps going** — only this round is abandoned. Perfect for **ignoring items** you don't care about."
  },
  whyItMatters: "**Filtering inside a loop** is constant work: process valid orders, skip cancelled ones. `continue` keeps the 'skip' logic at the **top** and the main logic clean — no deep nesting, no mess.",
  realWorldAnalogy: {
    title: "The Remote's 'Next' Button",
    story: "You're **channel surfing**: boring show? Hit **next** — you don't turn off the TV, you just **skip to the next channel**. **`continue`** is the remote's 'next' button: it **skips the rest of the current round** and jumps to the next iteration. The loop keeps running.",
    comparison: [
      { item: "continue", meaning: "'Nope, next!' — flipping past a boring channel." },
      { item: "break", meaning: "Turning the TV off entirely — show's over." }
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
      reason: "`continue` and `break` look similar but do **opposite-scale** things: `continue` skips **one round**, `break` exits the **whole loop**. Mix them up and your logic flips!"
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
    "**`continue`** skips to the **next round**; the loop keeps going.",
    "**`break`** stops the loop entirely — different job, don't confuse them.",
    "Put **skip-checks at the top** of the loop for clarity."
  ],
  quizQuestions: [
    { id: "js-continue-1", question: "What does continue do?", options: ["Skips the rest of the current round", "Stops the loop", "Restarts from round 1", "Pauses the loop"], correctAnswerIndex: 0, explanation: "Correct — `continue` **jumps to the next iteration**. Current round abandoned, loop continues." },
    { id: "js-continue-2", question: "How does continue differ from break?", options: ["continue skips one round; break ends the loop", "They are identical", "break skips one round", "continue ends the program"], correctAnswerIndex: 0, explanation: "Right — **`continue`** = next round; **`break`** = exit loop. Different jobs!" }
  ]
};

// LESSON: Nested Loops
export const jsNestedLoopsContent: LessonContent = {
  heroTagline: "A loop inside a loop — rows and columns",
  introduction: "A **loop inside another loop** — sounds simple, but the rhythm surprises beginners: the **inner** loop completes **ALL** its rounds for **each single round** of the outer loop.\n\nThis pattern builds **tables**, **grids**, **calendars**, and **game boards** — all two-dimensional things.",
  definition: {
    term: "Nested loop",
    explanation: "A **loop inside another loop**: the **inner loop completes ALL its rounds** for each single round of the **outer loop**. Total rounds = **outer count × inner count**. The pattern behind tables, grids, and timetables."
  },
  whyItMatters: "**Two-dimensional data is everywhere**: seating charts, calendars, multiplication tables, game boards, spreadsheets. Nested loops **generate and process grids** naturally — it's the 2D superpower.",
  realWorldAnalogy: {
    title: "The Hotel Floors and Rooms",
    story: "A **hotel**: the elevator visits **floor 1**, and the cleaner visits **every room** on that floor. Then floor 2 — **every room** again. The inner loop (rooms) **completes fully** for each single round of the outer loop (floors). That's the nested-loop rhythm.",
    comparison: [
      { item: "Outer loop (i)", meaning: "The floors — the elevator visits each one." },
      { item: "Inner loop (j)", meaning: "The rooms — EVERY room is visited on EACH floor." }
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
      reason: "**Reusing `i`** for the inner loop makes the outer counter unpredictable — it gets reset and scrambled! Use **different names** (`i` and `j`)."
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
    "The **inner loop** finishes fully for **each outer round**.",
    "Use **different counter names** (`i`, `j`) for each level.",
    "Total rounds = **outer count × inner count**."
  ],
  quizQuestions: [
    { id: "js-nestedloops-1", question: "How many total rounds for 3 outer × 4 inner?", options: ["12", "7", "34", "9"], correctAnswerIndex: 0, explanation: "Correct — **3 × 4 = 12** total inner executions. Every room on every floor!" },
    { id: "js-nestedloops-2", question: "Why use different counter names?", options: ["Reusing one name corrupts the outer counter", "It looks nicer", "The engine requires j", "No reason"], correctAnswerIndex: 0, explanation: "Right — the inner declaration would **shadow and reset** the outer counter. Use `j` for the inner loop." }
  ]
};
