import {
  LessonContent,
  PracticeQuestion,
  QuizQuestion,
  ChallengeTask,
  LessonSection,
  CalloutBox,
  ComparisonTable,
  StepItem,
  CodeSnippet,
  CodeAnnotation,
  DiagramConfig
} from '../../types';

// ============================================================================
// PEDAGOGICAL CURRICULUM SCHEMA & TYPES
// ============================================================================

export interface PedagogicalTheory {
  conceptName: string;
  mentalModel: string;
  whyItMatters: string;
  underTheHood: string;
  realWorldAnalogy: {
    title: string;
    story: string;
    comparison: Array<{ item: string; meaning: string }>;
  };
  comparisonTable?: ComparisonTable;
  diagram?: DiagramConfig;
  stepByStep?: StepItem[];
  commonPitfalls: Array<{
    title: string;
    wrongCode: string;
    correctCode: string;
    explanation: string;
  }>;
  proBestPractices: string[];
  keyTakeaways: string[];
}

export interface ExampleTiers {
  foundation: CodeSnippet;
  practical: CodeSnippet;
  production: CodeSnippet;
  syntaxStructure: string;
  codeAnnotations: CodeAnnotation[];
}

export interface DeepLessonCurriculum {
  id: string;
  courseSlug: 'javascript' | 'python' | 'cpp' | string;
  topicTitle: string;
  aliases: string[];
  heroTagline: string;
  pedagogy: PedagogicalTheory;
  examples: ExampleTiers;
  exercises: {
    practice: PracticeQuestion[];
    quiz: QuizQuestion[];
    challenge: ChallengeTask;
    verificationCriteria: Array<{
      description: string;
      check: (code: string) => boolean;
    }>;
  };
}

// ============================================================================
// 1. JAVASCRIPT DEEP CURRICULUM REPOSITORY
// ============================================================================

export const JAVASCRIPT_DEEP_CURRICULUM: Record<string, DeepLessonCurriculum> = {
  'javascript-fundamentals': {
    id: 'js-curriculum-fundamentals',
    courseSlug: 'javascript',
    topicTitle: 'JavaScript Fundamentals & Execution Model',
    aliases: ['introduction to javascript', 'what is javascript', 'how javascript works', 'javascript syntax', 'js intro'],
    heroTagline: 'Master the V8 engine, Call Stack, Event Loop, and single-threaded asynchronous execution.',
    pedagogy: {
      conceptName: 'JavaScript Engine & Runtime Architecture',
      mentalModel: 'JavaScript is like a master chef in a single-burner kitchen (single-threaded). When a dish takes long (like waiting for the oven or a delivery truck), the chef hands the timer to kitchen assistants (Web APIs) and keeps chopping other ingredients until the timer rings (Task Queue).',
      whyItMatters: 'Understanding that JavaScript is single-threaded, non-blocking, and event-driven prevents critical performance bottlenecks, race conditions, and unresponsive web interfaces.',
      underTheHood: 'Modern browsers execute JavaScript using high-performance engines like Google V8. The engine parses source code into an Abstract Syntax Tree (AST), translates it into bytecode with an interpreter (Ignition), and dynamically optimizes hot functions into machine code via a Just-In-Time (JIT) compiler (TurboFan). Memory is allocated in the Memory Heap and execution contexts are managed in the Call Stack.',
      realWorldAnalogy: {
        title: 'The Single-Window Bank Teller',
        story: 'Imagine a bank with only one teller window (The Call Stack). Fast transactions (cash withdrawals) are handled immediately. When a customer needs a loan approval that takes 30 minutes, they do not block the queue; they step aside to the lounge (Web APIs). When their paperwork is ready, they join the return queue (Callback Queue), and the teller takes them as soon as the window is free (Event Loop).',
        comparison: [
          { item: 'Call Stack', meaning: 'The single thread where currently executing functions run sequentially.' },
          { item: 'Memory Heap', meaning: 'Unstructured memory region where objects, arrays, and functions are stored.' },
          { item: 'Web APIs / Libuv', meaning: 'Background browser/Node threads handling timers, network fetch, and disk I/O.' },
          { item: 'Event Loop', meaning: 'The continuous coordinator that pushes waiting callbacks onto the call stack once it is empty.' }
        ]
      },
      comparisonTable: {
        title: 'JavaScript vs Compiled Languages (C++ / Java)',
        headers: ['Feature', 'JavaScript (V8)', 'C++', 'Java (JVM)'],
        rows: [
          { values: ['Execution Model', 'JIT Compiled & Interpreted', 'AOT Native Machine Binary', 'Bytecode to JVM via JIT'], isCode: [false, false, false, false] },
          { values: ['Memory Management', 'Automatic Garbage Collection (Mark & Sweep)', 'Manual (RAII, new/delete, smart pointers)', 'Automatic Garbage Collection'], isCode: [false, false, false, false] },
          { values: ['Type System', 'Dynamic & Weakly Typed (TypeScript adds static)', 'Static & Strongly Typed', 'Static & Strongly Typed'], isCode: [false, false, false, false] },
          { values: ['Concurrency', 'Single-Threaded Event Loop with Worker Threads', 'Multi-Threaded (pthreads, std::thread)', 'Multi-Threaded (OS Thread Pool)'], isCode: [false, false, false, false] }
        ]
      },
      commonPitfalls: [
        {
          title: 'Blocking the Main Thread with CPU-Intensive Loops',
          wrongCode: '// Freezes the entire browser tab UI!\nfunction heavyCalculation() {\n  for (let i = 0; i < 1e10; i++) {}\n  console.log("Done");\n}\nheavyCalculation();',
          correctCode: '// Delegate to Web Workers or chunk with requestIdleCallback / setTimeout\nfunction asyncChunkedCalculation(total, chunkSize = 1e6) {\n  let current = 0;\n  function step() {\n    const limit = Math.min(current + chunkSize, total);\n    while (current < limit) current++;\n    if (current < total) {\n      setTimeout(step, 0); // Yield to Event Loop\n    } else {\n      console.log("Done without UI freeze!");\n    }\n  }\n  step();\n}\nasyncChunkedCalculation(1e7);',
          explanation: 'Because JavaScript is single-threaded, any synchronous execution that takes longer than 16ms causes dropped frames (UI jank) and freezes user interactions.'
        },
        {
          title: 'Relying on Type Coercion with Loose Equality (==)',
          wrongCode: 'console.log("" == false); // true\nconsole.log(0 == "");     // true\nconsole.log(null == undefined); // true',
          correctCode: 'console.log("" === false); // false\nconsole.log(0 === "");     // false\nconsole.log(null === undefined); // false',
          explanation: 'Always use strict equality (===) to prevent JavaScript from applying complex, unpredictable type conversion algorithms behind the scenes.'
        }
      ],
      proBestPractices: [
        'Always default to strict equality (===) and avoid implicit type coercion.',
        'Use modern ECMAScript features (ES6+ modules, destructuring, optional chaining `?.`, nullish coalescing `??`).',
        'Profile memory leaks by checking detached DOM nodes in DevTools heap snapshots.'
      ],
      keyTakeaways: [
        'JavaScript is a high-level, single-threaded, garbage-collected language with a non-blocking asynchronous event loop.',
        'Code runs through JIT compilation inside engines like V8, SpiderMonkey, and JavaScriptCore.',
        'The Call Stack handles synchronous execution, while Web APIs and the Task Queue handle asynchronous work.'
      ]
    },
    examples: {
      syntaxStructure: `// Modern Standard JavaScript ES Modules & Async Execution
export function computeOrderTotal(items, discountRate = 0) {
  if (!Array.isArray(items)) throw new TypeError("Expected an array of items");
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return Number((subtotal * (1 - discountRate)).toFixed(2));
}`,
      codeAnnotations: [
        { lineOrToken: 'export function computeOrderTotal', description: 'ES Module named export declaration providing encapsulated reusable logic.' },
        { lineOrToken: 'discountRate = 0', description: 'ES6 Default parameter value, evaluated at call time if the argument is undefined.' },
        { lineOrToken: 'items.reduce(...)', description: 'Higher-order array accumulator function executing cleanly without mutating external state.' }
      ],
      foundation: {
        language: 'javascript',
        code: `// Foundational JavaScript: Variables, Arrays, and Functions
const studentName = "Alex Rivera";
const scores = [88, 92, 79, 95];

function calculateAverage(grades) {
  const sum = grades.reduce((acc, curr) => acc + curr, 0);
  return sum / grades.length;
}

console.log(\`Student: \${studentName}\`);
console.log(\`Average Score: \${calculateAverage(scores)}\`);`,
        explanation: 'Shows variable assignment with const, template literals, and pure function calculation.',
        output: 'Student: Alex Rivera\nAverage Score: 88.5'
      },
      practical: {
        language: 'javascript',
        code: `// Practical Web Application: Event Listener and DOM Mutation
const cart = {
  items: [],
  addItem(name, price) {
    this.items.push({ id: Date.now(), name, price });
    this.render();
  },
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
  render() {
    console.log(\`Cart has \${this.items.length} items. Total: $\${this.getTotal().toFixed(2)}\`);
  }
};

cart.addItem("Mechanical Keyboard", 129.99);
cart.addItem("Ergonomic Mouse", 69.50);`,
        explanation: 'Demonstrates object methods, state accumulation, and formatted string output.',
        output: 'Cart has 1 items. Total: $129.99\nCart has 2 items. Total: $199.49'
      },
      production: {
        language: 'javascript',
        code: `// Production Pattern: Async Data Fetcher with AbortController & Exponential Backoff
async function fetchWithRetry(url, maxRetries = 3, delayMs = 500) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      if (!response.ok) throw new Error(\`HTTP error status: \${response.status}\`);
      return await response.json();
    } catch (err) {
      if (attempt === maxRetries) throw err;
      console.warn(\`Attempt \${attempt} failed. Retrying in \${delayMs}ms...\`);
      await new Promise(resolve => setTimeout(resolve, delayMs));
      delayMs *= 2; // Exponential backoff
    }
  }
}`,
        explanation: 'Industrial-strength asynchronous pipeline incorporating timeouts, retry logic, and exponential backoff.'
      }
    },
    exercises: {
      practice: [
        {
          id: 'js-fund-p1',
          type: 'multiple_choice',
          question: 'What happens when JavaScript encounters an asynchronous operation like setTimeout or fetch?',
          options: [
            'It blocks the entire thread and freezes all code until the timer or network completes.',
            'It offloads the operation to browser Web APIs and immediately proceeds to the next line in the call stack.',
            'It spawns an automatic OS kernel thread for each line of code.',
            'It throws a synchronous concurrency exception.'
          ],
          correctAnswer: 1,
          explanation: 'JavaScript offloads asynchronous APIs to browser/host threads, allowing the main call stack to continue executing uninterrupted.'
        },
        {
          id: 'js-fund-p2',
          type: 'code_writing',
          question: 'Write a JavaScript function named `formatPrice` that takes a number and returns a string with a dollar sign and 2 decimal places (e.g., formatPrice(24.5) -> "$24.50").',
          instructions: 'Define `function formatPrice(amount)` returning `$` followed by `amount.toFixed(2)`.',
          correctAnswer: 'function formatPrice(amount) { return "$" + amount.toFixed(2); }',
          explanation: 'Number.prototype.toFixed(2) formats decimal precision into a standard string representation.'
        }
      ],
      quiz: [
        {
          id: 'js-fund-q1',
          question: 'Which component of the JavaScript runtime is responsible for placing waiting callback tasks onto the Call Stack when it is empty?',
          options: ['The Event Loop', 'The Memory Heap', 'The Garbage Collector', 'The JIT Compiler'],
          correctAnswerIndex: 0,
          explanation: 'The Event Loop continually checks if the Call Stack is empty; once empty, it pushes the first task from the Task/Microtask Queue.'
        },
        {
          id: 'js-fund-q2',
          question: 'What is the primary difference between `null` and `undefined` in JavaScript?',
          options: [
            '`undefined` means a variable has been declared but not assigned a value; `null` is an intentional assignment representing absence of an object.',
            '`null` and `undefined` are completely identical in both type and value.',
            '`undefined` is only for numbers; `null` is only for strings.',
            '`null` is a syntax error in strict mode.'
          ],
          correctAnswerIndex: 0,
          explanation: '`undefined` is initialized by the engine for unassigned bindings, whereas `null` is an intentional primitive value representing "no value".'
        }
      ],
      challenge: {
        id: 'js-fund-c1',
        title: 'Build a Pure Order Pipeline Accumulator',
        description: 'Create a function that processes an array of order items, filters out out-of-stock items, applies a 10% discount, and calculates the final sales tax (8%).',
        requirements: [
          'Filter items where inStock === true',
          'Calculate total price after 10% discount',
          'Add 8% sales tax to the discounted total',
          'Return a rounded number with 2 decimal places'
        ],
        starterCode: {
          js: `function processOrder(items) {\n  // Your code here\n}`
        },
        solutionCode: {
          js: `function processOrder(items) {\n  const activeItems = items.filter(i => i.inStock);\n  const subtotal = activeItems.reduce((sum, i) => sum + (i.price * i.qty), 0);\n  const discounted = subtotal * 0.90;\n  const finalTotal = discounted * 1.08;\n  return Number(finalTotal.toFixed(2));\n}`
        },
        hint: 'Use array methods .filter() and .reduce() to maintain pure, non-mutating transformation pipelines.'
      },
      verificationCriteria: [
        {
          description: 'Code contains a function named processOrder',
          check: (code: string) => /function\s+processOrder|const\s+processOrder\s*=/.test(code)
        },
        {
          description: 'Code utilizes array filtering or reduction',
          check: (code: string) => /\.filter|\.reduce|for\s*\(/.test(code)
        },
        {
          description: 'Code returns a calculated numeric value',
          check: (code: string) => /return\s+/.test(code)
        }
      ]
    }
  },

  'javascript-variables-and-scope': {
    id: 'js-curriculum-variables',
    courseSlug: 'javascript',
    topicTitle: 'Variables, Lexical Scope & Closures',
    aliases: ['variables', 'let', 'const', 'var', 'variable naming', 'scope', 'closures', 'hoisting', 'javascript variables'],
    heroTagline: 'Unpack the Temporal Dead Zone, block vs function scope, and persistent lexical closures.',
    pedagogy: {
      conceptName: 'Scope Chain, Variable Lifecycles, and Closures',
      mentalModel: 'Think of scopes like nested glass boxes. Code inside an inner box can look outward and see everything in outer boxes. But code standing outside cannot reach inside an inner box. A closure is a backpack that an inner function packs with all variables from outer boxes, keeping them alive even after the outer function finishes.',
      whyItMatters: 'Variable leakage, accidental globals, and misunderstood asynchronous loops have caused thousands of production security bugs and memory leaks. Mastering closures is essential for React hooks, data privacy, and functional programming.',
      underTheHood: 'When an execution context is created, the engine builds an Environment Record. Variables declared with `var` are initialized to `undefined` during creation (hoisting). In contrast, `let` and `const` are hoisted into an uninitialized state called the Temporal Dead Zone (TDZ); accessing them before assignment throws a `ReferenceError`. When an inner function references an outer binding, the engine preserves that outer Environment Record on the heap, creating a Closure.',
      realWorldAnalogy: {
        title: 'The Bank Vault Keycard (Data Encapsulation)',
        story: 'If a bank vault had no walls, any customer could modify balances directly. Instead, the balance is sealed inside a secure backroom (outer function scope). The bank teller only hands you two specific buttons: "deposit" and "withdraw" (the inner closure functions). You can interact with your balance only through these approved closures.',
        comparison: [
          { item: 'Outer Scope Variable', meaning: 'Private state hidden from global pollution and external modification.' },
          { item: 'Inner Returned Function', meaning: 'The closure that remembers and retains access to the private state.' },
          { item: 'Temporal Dead Zone', meaning: 'The window between scope entry and variable declaration where access is strictly blocked.' }
        ]
      },
      comparisonTable: {
        title: 'var vs let vs const',
        headers: ['Property', 'var (Legacy)', 'let (Modern)', 'const (Modern)'],
        rows: [
          { values: ['Scope', 'Function Scope', 'Block Scope { }', 'Block Scope { }'], isCode: [false, true, true, true] },
          { values: ['Hoisting Behavior', 'Hoisted to undefined', 'Hoisted in TDZ (Throws error)', 'Hoisted in TDZ (Throws error)'], isCode: [false, false, false, false] },
          { values: ['Re-declaration', 'Allowed in same scope (Risky)', 'SyntaxError if re-declared', 'SyntaxError if re-declared'], isCode: [false, false, false, false] },
          { values: ['Re-assignment', 'Allowed', 'Allowed', 'Forbidden (TypeError)'], isCode: [false, false, false, false] }
        ]
      },
      commonPitfalls: [
        {
          title: 'The Classic Async var Loop Bug',
          wrongCode: '// Prints "3, 3, 3" instead of "0, 1, 2"!\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}',
          correctCode: '// With let, a fresh lexical binding is created for every iteration:\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}',
          explanation: '`var` is function-scoped, meaning there is only one shared variable `i` across all loop iterations. By the time the timeout fires, `i` has reached 3. `let` is block-scoped, binding a fresh copy per iteration.'
        },
        {
          title: 'Assuming const Makes Objects Immutable',
          wrongCode: 'const user = { name: "Alice" };\n// Developers think const prevents property changes:\nuser.name = "Bob"; // Works completely fine! const only prevents reassigning the identifier.',
          correctCode: 'const user = Object.freeze({ name: "Alice" });\n// Now property mutation is blocked in strict mode:\n// user.name = "Bob"; // Throws TypeError in strict mode',
          explanation: '`const` guarantees that the variable reference cannot be rebound to a new address. It does NOT make the object properties read-only. Use Object.freeze() for shallow immutability.'
        }
      ],
      proBestPractices: [
        'Default to `const` for all variable declarations. Only switch to `let` when you explicitly intend to reassign.',
        'Never use `var` in modern codebases. It lacks block scoping and enables silent bugs.',
        'Leverage closures to encapsulate private instance variables in modules instead of exposing global state.'
      ],
      keyTakeaways: [
        '`let` and `const` provide block-scoping, eliminating variable leakage outside `{ }` blocks.',
        'The Temporal Dead Zone (TDZ) prevents using variables before their declaration line.',
        'Closures allow functions to maintain access to their outer lexical environment even after that outer function has returned.'
      ]
    },
    examples: {
      syntaxStructure: `// Encapsulation with Closures
function createBankCounter(initialBalance = 0) {
  let balance = initialBalance; // Private state
  
  return {
    deposit(amount) {
      if (amount <= 0) throw new Error("Invalid deposit");
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}`,
      codeAnnotations: [
        { lineOrToken: 'let balance = initialBalance;', description: 'Private variable enclosed inside the lexical scope of createBankCounter.' },
        { lineOrToken: 'deposit(amount)', description: 'Closure method holding a persistent reference to the private balance variable.' }
      ],
      foundation: {
        language: 'javascript',
        code: `// Scope Demonstration
const globalMessage = "I am global";

function testScope() {
  const localMessage = "I am local to function";
  if (true) {
    const blockMessage = "I am inside the if-block";
    console.log(blockMessage);
    console.log(localMessage);
  }
  // console.log(blockMessage); // ReferenceError! Block scoped.
}

testScope();`,
        explanation: 'Shows block scoping hierarchy and variable availability rules.',
        output: 'I am inside the if-block\nI am local to function'
      },
      practical: {
        language: 'javascript',
        code: `// Practical Closure: Rate Limiter / Debounce Generator
function createLimiter(limitMs) {
  let lastCall = 0;
  return function(actionName) {
    const now = Date.now();
    if (now - lastCall >= limitMs) {
      lastCall = now;
      console.log(\`[SUCCESS] Action executed: \${actionName}\`);
      return true;
    } else {
      console.log(\`[BLOCKED] Rate limited. Wait \${limitMs - (now - lastCall)}ms\`);
      return false;
    }
  };
}

const limiter = createLimiter(500);
limiter("Send Message 1");
limiter("Spam Click");`,
        explanation: 'Uses a closure to track elapsed timestamps across successive invocations.',
        output: '[SUCCESS] Action executed: Send Message 1\n[BLOCKED] Rate limited. Wait 500ms'
      },
      production: {
        language: 'javascript',
        code: `// Production Pattern: Memoization with Map & Closures
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveSquare = memoize((n) => {
  return n * n;
});

console.log("Square 12:", expensiveSquare(12));`,
        explanation: 'Caches pure computation results across calls using an enclosed persistent Map.'
      }
    },
    exercises: {
      practice: [
        {
          id: 'js-var-p1',
          type: 'multiple_choice',
          question: 'What is the Temporal Dead Zone (TDZ) in JavaScript?',
          options: [
            'The phase between entering scope and reaching the variable declaration where accessing a let/const variable throws a ReferenceError.',
            'A browser error that occurs when a tab remains open for more than 24 hours.',
            'A memory cleanup cycle where all variables are converted to null.',
            'The time period where setTimeout callbacks are paused.'
          ],
          correctAnswer: 0,
          explanation: 'The TDZ ensures variables cannot be accessed prior to their initial declaration line.'
        },
        {
          id: 'js-var-p2',
          type: 'code_writing',
          question: 'Write a closure function named `createCounter` that starts at 0 and increments by 1 on every invocation.',
          instructions: 'Define `function createCounter() { let count = 0; return function() { return ++count; }; }`',
          correctAnswer: 'function createCounter() { let count = 0; return function() { return ++count; }; }',
          explanation: 'Enclosing `let count` creates private state preserved between invocations.'
        }
      ],
      quiz: [
        {
          id: 'js-var-q1',
          question: 'Why does `const arr = [1, 2]; arr.push(3);` succeed without an error?',
          options: [
            'Because `const` prevents re-assigning the variable identifier to another memory reference, but does not freeze internal object mutations.',
            'Because arrays are exempt from JavaScript const rules.',
            'Because push() automatically converts const variables to let.',
            'Because numbers inside arrays are primitives.'
          ],
          correctAnswerIndex: 0,
          explanation: '`const` guards the reference binding; internal mutations on objects and arrays are permitted unless frozen with Object.freeze().'
        }
      ],
      challenge: {
        id: 'js-var-c1',
        title: 'Construct a Secure Password Storage Closure',
        description: 'Build a closure factory `createSecretStore` that holds a private secret string. Expose only two methods: `verify(guess)` returning a boolean, and `update(oldSecret, newSecret)` which updates only if oldSecret matches.',
        requirements: [
          'The private secret must not be accessible as an object property',
          'verify(guess) must return true if guess === secret, otherwise false',
          'update(oldSecret, newSecret) must update secret if oldSecret matches and return true'
        ],
        starterCode: {
          js: `function createSecretStore(initialSecret) {\n  // Your closure code here\n}`
        },
        solutionCode: {
          js: `function createSecretStore(initialSecret) {\n  let secret = initialSecret;\n  return {\n    verify(guess) {\n      return guess === secret;\n    },\n    update(oldSecret, newSecret) {\n      if (oldSecret === secret) {\n        secret = newSecret;\n        return true;\n      }\n      return false;\n    }\n  };\n}`
        }
      },
      verificationCriteria: [
        {
          description: 'Factory function createSecretStore exists',
          check: (code: string) => /function\s+createSecretStore/.test(code)
        },
        {
          description: 'Returns verify and update methods',
          check: (code: string) => /verify\s*[:(]/.test(code) && /update\s*[:(]/.test(code)
        }
      ]
    }
  }
};

// ============================================================================
// 2. PYTHON DEEP CURRICULUM REPOSITORY
// ============================================================================

export const PYTHON_DEEP_CURRICULUM: Record<string, DeepLessonCurriculum> = {
  'python-fundamentals': {
    id: 'py-curriculum-fundamentals',
    courseSlug: 'python',
    topicTitle: 'Python Architecture & The CPython Interpreter',
    aliases: ['introduction to python', 'what is python', 'python getting started', 'python syntax and indentation', 'python comments', 'python intro'],
    heroTagline: 'Understand PyObject representations, reference counting, the GIL, and bytecode execution.',
    pedagogy: {
      conceptName: 'The CPython Virtual Machine & Execution Pipeline',
      mentalModel: 'In Python, everything you touch is an object stored on the heap with a reference counter badge. When you write `x = 42`, Python does not put the number 42 directly into a memory box named x; it creates a PyObject for 42 on the heap and attaches an x name-tag pointing to it.',
      whyItMatters: 'Writing idiomatic, high-performance Python requires understanding that Python uses dynamic typing, automatic garbage collection via reference counting, and significant indentation for block scoping.',
      underTheHood: 'When you execute a `.py` script, CPython first compiles human-readable source code into platform-independent bytecode (stored as `.pyc` in `__pycache__`). This bytecode is then executed by the CPython virtual machine loop (eval loop). Memory is managed automatically: every object tracks an internal `ob_refcnt`. When reference count drops to 0, memory is immediately deallocated. A cyclic garbage collector periodically sweeps for circular references.',
      realWorldAnalogy: {
        title: 'The Parcel Delivery System (Variables as Labels)',
        story: 'In C++, declaring an integer `int x = 5` is like carving the number 5 into a specific locker labeled x. In Python, `x = 5` is like sticking a sticky-note named "x" onto a package containing 5. If you later say `y = x`, you are simply placing a second sticky-note "y" onto the exact same package. No duplicate package is created.',
        comparison: [
          { item: 'PyObject', meaning: 'The universal C struct backing all Python values (types, functions, integers, strings).' },
          { item: 'Reference Counting', meaning: 'The primary memory cleanup mechanism; deallocates objects the moment references reach 0.' },
          { item: 'Global Interpreter Lock (GIL)', meaning: 'A mutex protecting Python object memory from simultaneous multi-core CPython mutations.' },
          { item: 'Bytecode (.pyc)', meaning: 'Intermediate opcodes (e.g., LOAD_CONST, BINARY_ADD) executed by the Python VM.' }
        ]
      },
      comparisonTable: {
        title: 'Python vs JavaScript vs C++',
        headers: ['Property', 'Python (CPython)', 'JavaScript (V8)', 'C++ (Clang/GCC)'],
        rows: [
          { values: ['Indentation', 'Syntactically Significant (PEP 8: 4 spaces)', 'Whitespace ignored (Uses { })', 'Whitespace ignored (Uses { })'], isCode: [false, false, false] },
          { values: ['Typing System', 'Dynamic & Strongly Typed', 'Dynamic & Weakly Typed', 'Static & Strongly Typed'], isCode: [false, false, false] },
          { values: ['Compilation', 'Source -> Bytecode -> VM Interpreter', 'Source -> AST -> JIT Native Machine Code', 'Source -> Native Machine Executable Binary'], isCode: [false, false, false] },
          { values: ['Execution Speed', 'Moderate (Interpreted overhead)', 'Fast (JIT optimization)', 'Maximum (Direct hardware instructions)'], isCode: [false, false, false] }
        ]
      },
      commonPitfalls: [
        {
          title: 'Mutable Default Arguments in Functions',
          wrongCode: '# BUG: The list is created ONCE at function definition time, not call time!\ndef append_to(item, target_list=[]):\n    target_list.append(item)\n    return target_list\n\nprint(append_to("A")) # ["A"]\nprint(append_to("B")) # ["A", "B"]! Unexpected shared state!',
          correctCode: '# Use None as sentinel value and instantiate inside the call:\ndef append_to(item, target_list=None):\n    if target_list is None:\n        target_list = []\n    target_list.append(item)\n    return target_list\n\nprint(append_to("A")) # ["A"]\nprint(append_to("B")) # ["B"]',
          explanation: 'Default argument expressions in Python are evaluated once when the function definition is executed, leading to dangerous shared state when using mutable collections like lists or dictionaries.'
        },
        {
          title: 'Mixing Tabs and Spaces',
          wrongCode: 'def calculate():\n\tprint("Tab here")\n    print("4 spaces here") # IndentationError: unindent does not match any outer indentation level',
          correctCode: 'def calculate():\n    print("Strict 4 spaces")\n    print("Strict 4 spaces")',
          explanation: 'PEP 8 strictly mandates using 4 spaces per indentation level. Never mix tabs and spaces.'
        }
      ],
      proBestPractices: [
        'Adhere strictly to PEP 8 style guide: 4 spaces per indent, snake_case for functions and variables, PascalCase for classes.',
        'Use Type Hints (e.g., `def calculate(amount: float) -> str:`) to enhance IDE autocomplete and static type checkers like mypy.',
        'Prefer list comprehensions and generator expressions over manual loop accumulation for cleaner, faster execution.'
      ],
      keyTakeaways: [
        'Python uses significant indentation (4 spaces) instead of curly braces to delineate code blocks.',
        'Variables in Python are object references, not fixed memory slots.',
        'Python is strongly typed: it will never silently convert strings to numbers during operations without explicit casting.'
      ]
    },
    examples: {
      syntaxStructure: `# Idiomatic Python 3: Type Hints, List Comprehensions & Context Managers
from typing import List, Optional

def filter_active_users(users: List[dict], min_score: int = 70) -> List[str]:
    """Filters active users scoring above the threshold."""
    return [
        user["name"].strip().title()
        for user in users
        if user.get("is_active", False) and user.get("score", 0) >= min_score
    ]`,
      codeAnnotations: [
        { lineOrToken: 'from typing import List', description: 'Imports static type hints to clarify parameter expectations.' },
        { lineOrToken: '[user["name"]... for user in users if ...]', description: 'Pythonic list comprehension delivering optimized bytecode execution over manual loops.' },
        { lineOrToken: 'user.get("is_active", False)', description: 'Safe dictionary retrieval with default fallback avoiding KeyError exceptions.' }
      ],
      foundation: {
        language: 'python',
        code: `# Python Foundation: Variables, F-Strings, and Loops
course_name = "Python Mastery"
modules_completed = 4
total_modules = 6

progress_pct = (modules_completed / total_modules) * 100

print(f"Course: {course_name}")
print(f"Progress: {progress_pct:.1f}%")

topics = ["Syntax", "Data Structures", "Functions", "OOP"]
print("Key Topics:")
for idx, topic in enumerate(topics, start=1):
    print(f"  {idx}. {topic}")`,
        explanation: 'Shows variable assignment, formatted f-strings with numeric formatting, and enumerate loops.',
        output: 'Course: Python Mastery\nProgress: 66.7%\nKey Topics:\n  1. Syntax\n  2. Data Structures\n  3. Functions\n  4. OOP'
      },
      practical: {
        language: 'python',
        code: `# Practical Script: Data Aggregator with Dictionary Grouping
transactions = [
    {"category": "Food", "amount": 15.50},
    {"category": "Tech", "amount": 120.00},
    {"category": "Food", "amount": 24.00},
    {"category": "Travel", "amount": 45.00}
]

category_totals = {}
for t in transactions:
    cat = t["category"]
    category_totals[cat] = category_totals.get(cat, 0.0) + t["amount"]

print("--- Expense Breakdown ---")
for cat, total in sorted(category_totals.items(), key=lambda x: x[1], reverse=True):
    print(f"{cat:<10}: \${total:.2f}")`,
        explanation: 'Demonstrates dictionary accumulation, lambda sorting, and formatted column printing.',
        output: '--- Expense Breakdown ---\nTech      : $120.00\nTravel    : $45.00\nFood      : $39.50'
      },
      production: {
        language: 'python',
        code: `# Production Pattern: Thread-Safe Custom Decorator with Timing & Logging
import time
from functools import wraps

def time_execution(threshold_sec: float = 0.5):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            start = time.perf_counter()
            result = func(*args, **kwargs)
            elapsed = time.perf_counter() - start
            if elapsed > threshold_sec:
                print(f"[PERF WARNING] {func.__name__} took {elapsed:.4f}s (exceeded {threshold_sec}s)")
            else:
                print(f"[PERF OK] {func.__name__} executed in {elapsed:.4f}s")
            return result
        return wrapper
    return decorator

@time_execution(threshold_sec=0.01)
def process_data_matrix(size: int):
    return sum(i * i for i in range(size))

print("Total:", process_data_matrix(100000))`,
        explanation: 'High-level functional decorator with arguments and functools.wraps preserving docstrings.'
      }
    },
    exercises: {
      practice: [
        {
          id: 'py-fund-p1',
          type: 'multiple_choice',
          question: 'In Python, what is the consequence of passing a mutable object (like a list) as a default argument value in a function definition?',
          options: [
            'The default list is created only once when the function is defined, causing all subsequent calls without that argument to share the exact same mutated list.',
            'Python throws an immediate SyntaxError on function declaration.',
            'A fresh copy of the list is automatically cloned on every function call.',
            'The list becomes read-only and throws an AttributeError on .append().'
          ],
          correctAnswer: 0,
          explanation: 'Default arguments are evaluated once at definition time, so mutable objects retain modifications across calls.'
        },
        {
          id: 'py-fund-p2',
          type: 'code_writing',
          question: 'Write a Python function named `calculate_squares` that takes a list of numbers and returns a new list containing only the squares of even numbers using a list comprehension.',
          instructions: 'Define `def calculate_squares(numbers): return [n**2 for n in numbers if n % 2 == 0]`',
          correctAnswer: 'def calculate_squares(numbers):\n    return [n ** 2 for n in numbers if n % 2 == 0]',
          explanation: 'List comprehension `[n**2 for n in numbers if n % 2 == 0]` concisely maps and filters.'
        }
      ],
      quiz: [
        {
          id: 'py-fund-q1',
          question: 'How does CPython determine when to immediately free an object from memory?',
          options: [
            'When the object reference count (ob_refcnt) drops to 0.',
            'Only when the computer reboots.',
            'When the script finishes running completely.',
            'Whenever an exception is thrown.'
          ],
          correctAnswerIndex: 0,
          explanation: 'CPython uses reference counting as its primary GC mechanism; memory is released as soon as an object has 0 active references.'
        }
      ],
      challenge: {
        id: 'py-fund-c1',
        title: 'Word Frequency Analyzer with Normalization',
        description: 'Create a function `count_word_frequencies(text)` that splits a string of text into words, converts them to lowercase, strips punctuation, and returns a dictionary with word counts sorted by highest frequency.',
        requirements: [
          'Convert all words to lowercase',
          'Count occurrences of each distinct word',
          'Return a dictionary or list of (word, count) pairs'
        ],
        starterCode: {
          js: `def count_word_frequencies(text):\n    # Write Python code here\n    pass`
        },
        solutionCode: {
          js: `import re\nfrom collections import Counter\n\ndef count_word_frequencies(text):\n    words = re.findall(r'\\b\\w+\\b', text.lower())\n    return dict(Counter(words).most_common())`
        }
      },
      verificationCriteria: [
        {
          description: 'Function count_word_frequencies is defined',
          check: (code: string) => /def\s+count_word_frequencies/.test(code)
        },
        {
          description: 'Uses lower() for case normalization',
          check: (code: string) => /\.lower\(\)/.test(code)
        },
        {
          description: 'Calculates frequencies and returns result',
          check: (code: string) => /return\s+/.test(code)
        }
      ]
    }
  },

  'python-collections': {
    id: 'py-curriculum-collections',
    courseSlug: 'python',
    topicTitle: 'Python Lists, Tuples, Sets & Dictionaries',
    aliases: ['python lists', 'python tuples', 'python sets', 'python dictionaries', 'collections', 'lists', 'dictionaries'],
    heroTagline: 'Master hash map lookups O(1), dynamic array resizing, and immutability guarantees.',
    pedagogy: {
      conceptName: 'Python Built-in Sequence & Mapping Types',
      mentalModel: 'Lists are like expanding spiral notebooks where you can add, cross out, or reorder pages. Tuples are like stone tablets: once etched, they cannot be altered. Sets are velvet bags of unique marbles: no duplicates allowed. Dictionaries are indexed phonebooks: looking up any name gives you instant access without searching page by page.',
      whyItMatters: 'Selecting the appropriate collection directly dictates algorithmic time and space complexity. Looking up an item in a list is O(N), whereas looking up an item in a set or dictionary is O(1) average time.',
      underTheHood: 'Python lists are implemented in C as dynamic arrays of pointers (`PyListObject`). When capacity is exceeded, Python over-allocates geometric headroom to ensure amortized O(1) appends. Dictionaries and Sets are open-addressed hash tables with quadratic probing and perturbation, storing hash, key, and value entries in contiguous memory.',
      realWorldAnalogy: {
        title: 'The Supermarket Checkout & Locker Room',
        story: 'A list is a conveyor belt line (items stay in order of arrival). A tuple is a sealed grocery bag ready for delivery. A dictionary is a wall of numbered post office boxes: every key matches exactly one mailbox door, so you jump straight to the box without checking the rest.',
        comparison: [
          { item: 'List [ ]', meaning: 'Ordered, mutable sequence allowing duplicates with O(1) append and O(N) search.' },
          { item: 'Tuple ( )', meaning: 'Ordered, immutable sequence; hashable, safe for dictionary keys.' },
          { item: 'Set { }', meaning: 'Unordered collection of unique hashable elements with O(1) membership tests.' },
          { item: 'Dict {k: v}', meaning: 'Key-value associative mapping powered by high-speed hash tables.' }
        ]
      },
      comparisonTable: {
        title: 'Python Collections Time Complexity Comparison',
        headers: ['Collection', 'Mutable?', 'Ordered? (3.7+)', 'Index Access', 'Membership Test (in)'],
        rows: [
          { values: ['List', 'Yes', 'Yes', 'O(1)', 'O(N) (Linear search)'], isCode: [true, false, false, true, true] },
          { values: ['Tuple', 'No', 'Yes', 'O(1)', 'O(N) (Linear search)'], isCode: [true, false, false, true, true] },
          { values: ['Set', 'Yes', 'No', 'N/A', 'O(1) (Hash lookup)'], isCode: [true, false, false, false, true] },
          { values: ['Dict', 'Yes', 'Yes (Insertion order)', 'O(1) by Key', 'O(1) by Key'], isCode: [true, false, false, true, true] }
        ]
      },
      commonPitfalls: [
        {
          title: 'Modifying a List While Iterating Over It',
          wrongCode: '# BUG: Skips elements because indices shift dynamically!\nnums = [1, 2, 2, 3, 4]\nfor n in nums:\n    if n == 2:\n        nums.remove(n)\nprint(nums) # [1, 2, 3, 4] -- missed one 2!',
          correctCode: '# Iterate over a slice copy or use list comprehension:\nnums = [1, 2, 2, 3, 4]\nnums = [n for n in nums if n != 2]\nprint(nums) # [1, 3, 4] -- Clean!',
          explanation: 'Removing elements from a list during iteration shifts subsequent indices backward, causing the iterator to skip items.'
        }
      ],
      proBestPractices: [
        'Use Sets for membership checks (`item in set`) instead of Lists when dealing with large datasets.',
        'Use `.get(key, default)` or `defaultdict` to prevent `KeyError` exceptions.',
        'Use Tuple unpacking for clean multiple variable assignments: `x, y = get_coordinates()`.'
      ],
      keyTakeaways: [
        'Lists are dynamic arrays; tuples are immutable sequences.',
        'Dictionaries provide O(1) key lookups via internal hash tables.',
        'List comprehensions offer concise, optimized syntax for transforming collections.'
      ]
    },
    examples: {
      syntaxStructure: `# List Comprehensions and Dictionary Grouping
even_squares = [x**2 for x in range(10) if x % 2 == 0]
lookup = {f"item_{i}": i * 10 for i in range(5)}`,
      codeAnnotations: [
        { lineOrToken: '[x**2 for x in range(10) if x % 2 == 0]', description: 'Combined filter and transform expression producing a list.' },
        { lineOrToken: '{f"item_{i}": i * 10...}', description: 'Dictionary comprehension constructing dynamic key-value pairs.' }
      ],
      foundation: {
        language: 'python',
        code: `# Python Collections Basics
inventory = ["Laptop", "Mouse", "Keyboard"]
inventory.append("Monitor")

specs = {
    "brand": "CodingVibes Pro",
    "ram_gb": 32,
    "storage_ssd": 1000
}

print("Inventory items:", len(inventory))
print("RAM:", specs["ram_gb"], "GB")`,
        explanation: 'Shows list appending and dictionary field access.',
        output: 'Inventory items: 4\nRAM: 32 GB'
      },
      practical: {
        language: 'python',
        code: `# Practical Data Deduplication and Frequency
votes = ["Python", "JavaScript", "Python", "C++", "Python", "JavaScript"]

unique_languages = set(votes)
tally = {lang: votes.count(lang) for lang in unique_languages}

print("Unique options:", sorted(list(unique_languages)))
print("Tally results:", tally)`,
        explanation: 'Combines Sets for deduplication and dictionary comprehensions for tallying.',
        output: "Unique options: ['C++', 'JavaScript', 'Python']\nTally results: {'Python': 3, 'JavaScript': 2, 'C++': 1}"
      },
      production: {
        language: 'python',
        code: `# Production Pattern: In-Memory LRU Cache with OrderedDict
from collections import OrderedDict

class SimpleLRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: str):
        if key not in self.cache:
            return None
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: str, value: any):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

cache = SimpleLRUCache(2)
cache.put("a", 1)
cache.put("b", 2)
cache.get("a")
cache.put("c", 3)
print("Cache keys remaining:", list(cache.cache.keys()))`,
        explanation: 'LRU cache combining hash table speed with doubly linked list eviction.'
      }
    },
    exercises: {
      practice: [
        {
          id: 'py-col-p1',
          type: 'multiple_choice',
          question: 'What is the average time complexity of checking if an element exists in a Python set (`item in my_set`)?',
          options: ['O(1)', 'O(N)', 'O(N^2)', 'O(log N)'],
          correctAnswer: 0,
          explanation: 'Python Sets are implemented using hash tables, offering constant O(1) average lookup times.'
        }
      ],
      quiz: [
        {
          id: 'py-col-q1',
          question: 'Which built-in Python collection type is immutable and can safely be used as a dictionary key?',
          options: ['Tuple', 'List', 'Dictionary', 'Set'],
          correctAnswerIndex: 0,
          explanation: 'Tuples are immutable; if all their elements are hashable, the tuple itself is hashable and can serve as a dict key.'
        }
      ],
      challenge: {
        id: 'py-col-c1',
        title: 'Group Anagrams Using Dictionaries',
        description: 'Given a list of words, group anagrams together into sublists using a Python dictionary.',
        requirements: [
          'Group words having identical character counts together',
          'Return a list of grouped word lists'
        ],
        starterCode: {
          js: `def group_anagrams(words):\n    # Write Python code here\n    pass`
        },
        solutionCode: {
          js: `from collections import defaultdict\n\ndef group_anagrams(words):\n    groups = defaultdict(list)\n    for w in words:\n        key = "".join(sorted(w))\n        groups[key].append(w)\n    return list(groups.values())`
        }
      },
      verificationCriteria: [
        {
          description: 'Function group_anagrams is defined',
          check: (code: string) => /def\s+group_anagrams/.test(code)
        }
      ]
    }
  }
};

// ============================================================================
// 3. C++ DEEP CURRICULUM REPOSITORY
// ============================================================================

export const CPP_DEEP_CURRICULUM: Record<string, DeepLessonCurriculum> = {
  'cpp-fundamentals': {
    id: 'cpp-curriculum-fundamentals',
    courseSlug: 'cpp',
    topicTitle: 'C++ Architecture, Memory Model & The Compilation Pipeline',
    aliases: ['introduction to c++', 'what is c++', 'c++ tutorial', 'c++ get started', 'c++ syntax', 'c++ output and cout', 'c++ comments', 'cpp intro'],
    heroTagline: 'Unpack the 4-stage compilation pipeline, Stack vs Heap memory layouts, RAII, and zero-cost abstractions.',
    pedagogy: {
      conceptName: 'Direct Hardware Abstraction, Pointer Mechanics & Compilation Stages',
      mentalModel: 'If Python is renting a fully furnished apartment with a cleaning crew (garbage collection), C++ is buying an empty plot of land with bricks and blueprints. You have complete freedom to build a skyscraper with zero wasted materials, but if you leave a gas valve open (memory leak or dangling pointer), nobody will shut it off for you.',
      whyItMatters: 'C++ powers the infrastructure of modern computing: operating system kernels (Windows, macOS), game engines (Unreal Engine), high-frequency trading platforms, web browser rendering engines (Chromium V8/Blink), and autonomous vehicles. It delivers maximum runtime throughput and deterministic latency.',
      underTheHood: 'C++ source code undergoes a 4-stage compilation pipeline:\n1. Preprocessor: Expands `#include` directives, `#define` macros, and conditional `#ifdef` blocks.\n2. Compiler: Translates C++ code into assembly instructions specific to the target CPU architecture.\n3. Assembler: Converts assembly text into machine code stored in binary object files (`.o` / `.obj`).\n4. Linker: Combines object files with system libraries into a single executable binary.\nMemory is explicitly divided: the Stack manages ultra-fast automatic local variables with LIFO allocation, while the Heap (free store) provides dynamic memory managed via `new`/`delete` or modern smart pointers (`std::unique_ptr`, `std::shared_ptr`).',
      realWorldAnalogy: {
        title: 'The Blueprint and Construction Site (Compile Time vs Runtime)',
        story: 'In C++, everything that can possibly be decided is figured out before the building ever opens. Types are checked, template code is generated, and optimizations are finalized during the blueprint stage (compile time). When the application runs, there is no interpreter overhead; the CPU simply executes raw machine instructions at maximum speed.',
        comparison: [
          { item: 'The Stack', meaning: 'Extremely fast memory with automated allocation and deallocation tied to scope `{}`.' },
          { item: 'The Heap', meaning: 'Large dynamic memory pool requiring explicit lifetime tracking or smart pointers.' },
          { item: 'RAII', meaning: 'Resource Acquisition Is Initialization: tying resource lifecycle to stack object destructors.' },
          { item: 'Pointers (*)', meaning: 'Direct hardware memory address variables pointing to specific bytes in RAM.' }
        ]
      },
      comparisonTable: {
        title: 'C++ vs C vs Python',
        headers: ['Dimension', 'C++', 'C', 'Python'],
        rows: [
          { values: ['Paradigm', 'Multi-paradigm (OOP, Generic, Procedural)', 'Procedural Structured', 'Object-Oriented & Dynamic Scripting'], isCode: [false, false, false] },
          { values: ['Memory Handling', 'RAII & Smart Pointers (Deterministic)', 'Manual (malloc/free)', 'Automatic Garbage Collector (Non-deterministic)'], isCode: [false, false, false] },
          { values: ['Standard Library', 'C++ STL (vector, map, algorithm, chrono)', 'Minimal standard libc', 'Rich batteries-included standard library'], isCode: [false, false, false] },
          { values: ['Runtime Speed', 'Highest possible native execution', 'Highest possible native execution', 'Interpreted bytecode overhead (10-50x slower)'], isCode: [false, false, false] }
        ]
      },
      commonPitfalls: [
        {
          title: 'Dangling Pointers & Use-After-Free',
          wrongCode: '// FATAL: Returning pointer to local stack variable that gets destroyed!\nint* createNumber() {\n    int val = 42;\n    return &val; // UNDEFINED BEHAVIOR: stack frame destroyed on return!\n}\n\nint main() {\n    int* ptr = createNumber();\n    std::cout << *ptr << std::endl; // Accessing dead memory!\n}',
          correctCode: '// Return by value or use dynamic memory with smart pointers:\n#include <memory>\n#include <iostream>\n\nstd::unique_ptr<int> createNumberSafe() {\n    return std::make_unique<int>(42);\n}\n\nint main() {\n    auto ptr = createNumberSafe();\n    std::cout << *ptr << std::endl; // Safe and automatically freed!\n}',
          explanation: 'Stack variables are destroyed the moment execution leaves their containing scope. Returning pointers or references to local variables causes undefined behavior and crash exploits.'
        },
        {
          title: 'Memory Leaks with Raw new without delete',
          wrongCode: 'void processData() {\n    int* buffer = new int[1000];\n    // If an exception occurs or developer forgets delete[], memory is leaked forever!\n}',
          correctCode: '#include <vector>\nvoid processDataSafe() {\n    std::vector<int> buffer(1000); // Automatically deallocated when going out of scope!\n}',
          explanation: 'Modern C++ strongly discourages raw `new` and `delete`. Always use standard library containers like `std::vector` or smart pointers (`std::unique_ptr`).'
        }
      ],
      proBestPractices: [
        'Embrace RAII (Resource Acquisition Is Initialization): resources should be owned by objects whose destructors release them.',
        'Pass large objects by `const &` (const reference) to avoid expensive deep copies: `void analyze(const std::vector<int>& data)`.',
        'Use `nullptr` instead of `0` or `NULL` for null pointer assignments.'
      ],
      keyTakeaways: [
        'C++ translates directly into native machine code without virtual machines or garbage collection pauses.',
        'The Stack provides high-speed automated storage, while the Heap allows dynamic runtime allocation.',
        'Modern C++ (C++11 through C++23) prioritizes RAII, smart pointers, and range-based loops to deliver safety alongside performance.'
      ]
    },
    examples: {
      syntaxStructure: `// Modern C++: Namespaces, STL Containers, Range-based For Loops
#include <iostream>
#include <vector>
#include <string>
#include <numeric>

namespace Engine {
    void printLeaderboard(const std::vector<std::pair<std::string, int>>& scores) {
        std::cout << "--- High Scores ---" << std::endl;
        for (const auto& [player, score] : scores) {
            std::cout << player << ": " << score << " pts" << std::endl;
        }
    }
}`,
      codeAnnotations: [
        { lineOrToken: '#include <vector>', description: 'Preprocessor directive embedding the Standard Template Library dynamic array header.' },
        { lineOrToken: 'const auto& [player, score]', description: 'C++17 Structured binding with const reference avoiding deep object copying.' },
        { lineOrToken: 'namespace Engine { ... }', description: 'Namespacing preventing global symbol collisions in enterprise codebases.' }
      ],
      foundation: {
        language: 'cpp',
        code: `// C++ Foundation: I/O Streams, Standard Types, and Calculation
#include <iostream>
#include <string>

int main() {
    std::string courseTitle = "C++ Systems Mastery";
    int modulesCount = 5;
    double estimatedHours = 12.5;

    std::cout << "Course: " << courseTitle << std::endl;
    std::cout << "Total Modules: " << modulesCount << std::endl;
    std::cout << "Hours: " << estimatedHours << " hrs" << std::endl;

    int totalScore = 0;
    int quizScores[3] = {95, 88, 92};
    for (int i = 0; i < 3; ++i) {
        totalScore += quizScores[i];
    }
    double average = static_cast<double>(totalScore) / 3;
    std::cout << "Average Quiz Score: " << average << std::endl;

    return 0;
}`,
        explanation: 'Shows standard types, array iteration, explicit static_cast type conversion, and std::cout streaming.',
        output: 'Course: C++ Systems Mastery\nTotal Modules: 5\nHours: 12.5 hrs\nAverage Quiz Score: 91.6667'
      },
      practical: {
        language: 'cpp',
        code: `// Practical C++: Custom Class with Encapsulation & Vectors
#include <iostream>
#include <vector>
#include <string>

class BankAccount {
private:
    std::string owner;
    double balance;

public:
    BankAccount(std::string name, double initialDeposit)
        : owner(std::move(name)), balance(initialDeposit) {}

    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }

    void display() const {
        std::cout << "Account [" << owner << "] Balance: $" << balance << std::endl;
    }
};

int main() {
    BankAccount account("Alex Rivera", 500.00);
    account.deposit(250.00);
    account.withdraw(120.00);
    account.display();
    return 0;
}`,
        explanation: 'Demonstrates member initialization lists, private fields, const member methods, and move semantics.',
        output: 'Account [Alex Rivera] Balance: $630'
      },
      production: {
        language: 'cpp',
        code: `// Production Pattern: RAII File Handler Resource Guard
#include <iostream>
#include <fstream>
#include <string>
#include <memory>
#include <stdexcept>

class SafeFileLogger {
private:
    std::ofstream fileStream;

public:
    explicit SafeFileLogger(const std::string& filename) {
        fileStream.open(filename, std::ios::out | std::ios::app);
        if (!fileStream.is_open()) {
            throw std::runtime_error("Failed to open log file: " + filename);
        }
    }

    ~SafeFileLogger() {
        if (fileStream.is_open()) {
            fileStream.close(); // RAII guarantee: file is always closed on destruction
        }
    }

    void log(const std::string& message) {
        fileStream << "[LOG] " << message << std::endl;
    }
};

int main() {
    try {
        SafeFileLogger logger("system_events.log");
        logger.log("Kernel initialized successfully.");
        std::cout << "Event logged safely with RAII." << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Exception caught: " << e.what() << std::endl;
    }
    return 0;
}`,
        explanation: 'Implements the core RAII idiom: resources are acquired in the constructor and guaranteed released in the destructor.'
      }
    },
    exercises: {
      practice: [
        {
          id: 'cpp-fund-p1',
          type: 'multiple_choice',
          question: 'What is the core principle of RAII (Resource Acquisition Is Initialization) in C++?',
          options: [
            'Binding the lifecycle of a resource (memory, file, mutex) to the lifetime of a stack-allocated object whose destructor automatically cleans it up.',
            'Initializing all variables to 0 before running main().',
            'Compiling code using a Java Virtual Machine.',
            'Disabling pointers to ensure maximum garbage collection speed.'
          ],
          correctAnswer: 0,
          explanation: 'RAII ensures that when an object leaves its scope, its destructor is automatically called, preventing resource and memory leaks.'
        },
        {
          id: 'cpp-fund-p2',
          type: 'code_writing',
          question: 'Write a C++ function named `swapNumbers` that accepts two integer references and swaps their values without returning anything.',
          instructions: 'Define `void swapNumbers(int& a, int& b) { int temp = a; a = b; b = temp; }`',
          correctAnswer: 'void swapNumbers(int& a, int& b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}',
          explanation: 'Passing by reference (`int&`) allows the function to directly modify the caller arguments in place.'
        }
      ],
      quiz: [
        {
          id: 'cpp-fund-q1',
          question: 'Which area of memory in C++ allocates and deallocates variables automatically in LIFO order with zero fragmentation overhead?',
          options: ['The Stack', 'The Heap', 'The Free Store', 'Virtual Disk Swap'],
          correctAnswerIndex: 0,
          explanation: 'The Stack uses a single stack-pointer register to allocate and pop local scope variables at hardware speed.'
        }
      ],
      challenge: {
        id: 'cpp-fund-c1',
        title: 'Build a Dynamic Integer Vector Wrapper',
        description: 'Implement a minimal custom dynamic array class `IntArray` that manages dynamic memory on the heap with automatic reallocation when capacity is reached, adhering to the Rule of Three.',
        requirements: [
          'Store elements in a dynamically allocated int array pointer',
          'Implement a push_back(int value) method that expands capacity when full',
          'Implement a destructor that frees the allocated memory with delete[]'
        ],
        starterCode: {
          js: `class IntArray {\nprivate:\n    int* data;\n    size_t size;\n    size_t capacity;\npublic:\n    // Implement constructor, destructor, and push_back\n};`
        },
        solutionCode: {
          js: `class IntArray {\nprivate:\n    int* data;\n    size_t size;\n    size_t capacity;\npublic:\n    IntArray() : size(0), capacity(2) { data = new int[capacity]; }\n    ~IntArray() { delete[] data; }\n    void push_back(int val) {\n        if (size == capacity) {\n            capacity *= 2;\n            int* next = new int[capacity];\n            for (size_t i = 0; i < size; ++i) next[i] = data[i];\n            delete[] data;\n            data = next;\n        }\n        data[size++] = val;\n    }\n    size_t getSize() const { return size; }\n};`
        }
      },
      verificationCriteria: [
        {
          description: 'Class IntArray is declared',
          check: (code: string) => /class\s+IntArray/.test(code)
        },
        {
          description: 'Contains destructor with delete[]',
          check: (code: string) => /~IntArray[\s\S]*delete\s*\[\]/.test(code)
        },
        {
          description: 'Implements push_back method',
          check: (code: string) => /push_back\s*\(/.test(code)
        }
      ]
    }
  },

  'cpp-pointers-and-memory': {
    id: 'cpp-curriculum-pointers',
    courseSlug: 'cpp',
    topicTitle: 'C++ Pointers, References & Memory Layout',
    aliases: ['c++ pointers', 'pointers', 'references', 'c++ references & pointers', 'c++ user input cin', 'memory addresses'],
    heroTagline: 'Demystify raw memory addresses, dereferencing, pointer arithmetic, and modern smart pointers.',
    pedagogy: {
      conceptName: 'Direct RAM Address Manipulation & Smart Pointer Ownership',
      mentalModel: 'A variable is a home with an address and furniture inside. A pointer is a GPS coordinate written on a slip of paper that tells you where that home is located in RAM. Dereferencing `*ptr` is walking into the home to inspect or modify the furniture. If the home gets demolished but you still hold the address paper, you have a dangerous Dangling Pointer.',
      whyItMatters: 'Pointers allow C++ programs to manipulate hardware memory buffers directly, build complex dynamic data structures (trees, graphs, linked lists), avoid multi-megabyte object copying, and interact directly with OS APIs.',
      underTheHood: 'In 64-bit systems, a pointer is an 8-byte unsigned integer representing a byte offset in virtual address space. The address-of operator (`&`) extracts the physical/virtual location of a variable. Modern C++ replaces raw pointers with smart pointers: `std::unique_ptr` provides zero-overhead exclusive ownership, while `std::shared_ptr` provides reference-counted shared ownership.',
      realWorldAnalogy: {
        title: 'The Library Book vs The Call Number Card',
        story: 'If you want to read a heavy 2,000-page encyclopedia, you do not photocopy all 2,000 pages to carry around (pass-by-value). You simply write down the catalog number on an index card (the pointer). Whenever you need to read a page, you go directly to that shelf (dereferencing).',
        comparison: [
          { item: 'Variable (int x)', meaning: 'The actual memory location storing the binary value.' },
          { item: 'Address (&x)', meaning: 'The byte offset in system RAM where the variable begins.' },
          { item: 'Pointer (int* ptr)', meaning: 'A variable whose value is the memory address of another variable.' },
          { item: 'Dereference (*ptr)', meaning: 'Accessing the value located at the address stored in the pointer.' }
        ]
      },
      comparisonTable: {
        title: 'Pointer vs Reference vs Value in C++',
        headers: ['Characteristic', 'Pointer (int*)', 'Reference (int&)', 'Pass-by-Value (int)'],
        rows: [
          { values: ['Can be Null?', 'Yes (nullptr)', 'No (Must refer to valid object)', 'No (Direct copy)'], isCode: [true, false, false] },
          { values: ['Rebindable?', 'Yes (Can point to another address)', 'No (Permanent alias once bound)', 'N/A'], isCode: [false, false, false] },
          { values: ['Syntax', 'Explicit * and ->', 'Implicit transparent access', 'Direct variable name'], isCode: [true, false, false] },
          { values: ['Copy Cost', '8 bytes (Address size)', '8 bytes under the hood (Zero copy)', 'Full deep copy of object size'], isCode: [false, false, false] }
        ]
      },
      commonPitfalls: [
        {
          title: 'Dereferencing a nullptr or Uninitialized Pointer',
          wrongCode: 'int* ptr = nullptr;\n*ptr = 100; // CRASH! Segmentation Fault (SIGSEGV)',
          correctCode: 'int* ptr = nullptr;\nint actualValue = 42;\nptr = &actualValue;\nif (ptr != nullptr) {\n    *ptr = 100; // Safe modification\n}',
          explanation: 'Always check if a raw pointer is non-null before attempting to dereference it, or use references when nullability is not permitted.'
        }
      ],
      proBestPractices: [
        'Prefer references (`const T&`) for read-only function arguments instead of raw pointers.',
        'Use `std::unique_ptr` for exclusive heap allocation ownership to guarantee no memory leaks.',
        'Never return a pointer or reference to a local stack variable.'
      ],
      keyTakeaways: [
        'The `&` operator retrieves a memory address; the `*` operator dereferences a pointer to access its target value.',
        'References act as non-null, permanent aliases to existing objects.',
        'Modern C++ avoids manual `new`/`delete` in favor of STL containers and smart pointers.'
      ]
    },
    examples: {
      syntaxStructure: `// Pointer and Reference Syntax
int score = 100;
int* ptr = &score;    // ptr holds address of score
int& ref = score;    // ref is an alias to score

*ptr = 150;          // updates score to 150
ref += 50;           // updates score to 200`,
      codeAnnotations: [
        { lineOrToken: 'int* ptr = &score;', description: 'Declares an integer pointer and initializes it with the address of score.' },
        { lineOrToken: '*ptr = 150;', description: 'Dereferences ptr to overwrite the value in the pointed-to memory location.' }
      ],
      foundation: {
        language: 'cpp',
        code: `#include <iostream>

int main() {
    int count = 25;
    int* pCount = &count;

    std::cout << "Value of count: " << count << std::endl;
    std::cout << "Address of count (&count): " << &count << std::endl;
    std::cout << "Pointer value (pCount): " << pCount << std::endl;
    std::cout << "Dereferenced (*pCount): " << *pCount << std::endl;

    *pCount = 50;
    std::cout << "Updated count: " << count << std::endl;

    return 0;
}`,
        explanation: 'Demonstrates address retrieval, pointer storage, and dereferencing.',
        output: 'Value of count: 25\nAddress of count (&count): 0x7ffd9a8b1234\nPointer value (pCount): 0x7ffd9a8b1234\nDereferenced (*pCount): 25\nUpdated count: 50'
      },
      practical: {
        language: 'cpp',
        code: `#include <iostream>
#include <vector>

void doubleValues(std::vector<int>& numbers) {
    for (int& val : numbers) {
        val *= 2;
    }
}

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};
    doubleValues(data);

    std::cout << "Doubled vector: ";
    for (int n : data) {
        std::cout << n << " ";
    }
    std::cout << std::endl;
    return 0;
}`,
        explanation: 'Uses reference passing to modify vector items in-place with zero copying.',
        output: 'Doubled vector: 2 4 6 8 10'
      },
      production: {
        language: 'cpp',
        code: `#include <iostream>
#include <memory>
#include <string>

struct Node {
    std::string data;
    std::unique_ptr<Node> next;

    explicit Node(std::string val) : data(std::move(val)), next(nullptr) {}
};

int main() {
    auto head = std::make_unique<Node>("Packet 1");
    head->next = std::make_unique<Node>("Packet 2");
    head->next->next = std::make_unique<Node>("Packet 3");

    Node* current = head.get();
    while (current != nullptr) {
        std::cout << "Processing: " << current->data << std::endl;
        current = current->next.get();
    }
    return 0;
}`,
        explanation: 'Implements a self-cleaning singly-linked list using std::unique_ptr.'
      }
    },
    exercises: {
      practice: [
        {
          id: 'cpp-ptr-p1',
          type: 'multiple_choice',
          question: 'What is printed by: int x = 10; int* p = &x; *p = 20; std::cout << x; ?',
          options: ['20', '10', 'The memory address of x', 'A compilation error'],
          correctAnswer: 0,
          explanation: 'Dereferencing `*p` writes 20 directly into the memory location occupied by x.'
        }
      ],
      quiz: [
        {
          id: 'cpp-ptr-q1',
          question: 'What happens if a function returns a pointer to an ordinary local variable allocated on the stack?',
          options: [
            'It creates a dangling pointer pointing to destroyed stack memory, resulting in undefined behavior.',
            'The compiler automatically migrates the variable to the heap.',
            'The variable remains alive until the entire program terminates.',
            'The variable is cloned into a global registry.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Stack memory is reclaimed upon function return; keeping a pointer to that address leads to use-after-free corruption.'
        }
      ],
      challenge: {
        id: 'cpp-ptr-c1',
        title: 'Safe Smart Pointer Linked Chain',
        description: 'Create a function that builds a chain of unique_ptr nodes and counts the total elements without leaking any memory.',
        requirements: [
          'Use std::unique_ptr to manage node allocation',
          'Traverse the list cleanly using raw non-owning pointers'
        ],
        starterCode: {
          js: `#include <memory>\n#include <string>\n\n// Write node chain code`
        },
        solutionCode: {
          js: `#include <iostream>\n#include <memory>\n#include <string>\n\nstruct Node {\n    std::string val;\n    std::unique_ptr<Node> next;\n    Node(std::string v) : val(v), next(nullptr) {}\n};\n\nint countNodes(const Node* head) {\n    int count = 0;\n    while (head) {\n        count++;\n        head = head->next.get();\n    }\n    return count;\n}`
        }
      },
      verificationCriteria: [
        {
          description: 'Uses unique_ptr for node ownership',
          check: (code: string) => /unique_ptr/.test(code)
        }
      ]
    }
  }
};

// ============================================================================
// 4. MASTER RESOLVER & PEDAGOGICAL CONTENT GENERATOR
// ============================================================================

/**
 * Searches the deep curriculum repositories by course slug and lesson title or slug.
 */
export function getDeepCurriculumTopic(courseSlug: string, lessonTitleOrSlug: string): DeepLessonCurriculum | null {
  const cSlug = (courseSlug || '').toLowerCase();
  const target = lessonTitleOrSlug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  let repo: Record<string, DeepLessonCurriculum> | null = null;
  if (cSlug === 'javascript' || cSlug === 'js') {
    repo = JAVASCRIPT_DEEP_CURRICULUM;
  } else if (cSlug === 'python' || cSlug === 'py') {
    repo = PYTHON_DEEP_CURRICULUM;
  } else if (cSlug === 'cpp' || cSlug === 'c++') {
    repo = CPP_DEEP_CURRICULUM;
  }

  if (!repo) return null;

  // 1. Direct key match
  if (repo[target]) return repo[target];

  // 2. Alias match
  for (const item of Object.values(repo)) {
    if (item.aliases.some(alias => {
      const normAlias = alias.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return normAlias === target || target.includes(normAlias) || normAlias.includes(target);
    })) {
      return item;
    }
  }

  // 3. Keyword heuristic match
  if (cSlug === 'javascript') {
    if (target.includes('variable') || target.includes('let') || target.includes('const') || target.includes('scope')) {
      return repo['javascript-variables-and-scope'];
    }
    return repo['javascript-fundamentals'];
  }

  if (cSlug === 'python') {
    if (target.includes('list') || target.includes('dict') || target.includes('tuple') || target.includes('set') || target.includes('collection')) {
      return repo['python-collections'];
    }
    return repo['python-fundamentals'];
  }

  if (cSlug === 'cpp') {
    if (target.includes('pointer') || target.includes('reference') || target.includes('memory') || target.includes('cin')) {
      return repo['cpp-pointers-and-memory'];
    }
    return repo['cpp-fundamentals'];
  }

  return null;
}

/**
 * Constructs an authentic, comprehensive, pedagogical LessonContent object.
 * Integrates theory, multiple examples, common mistakes, takeaways, quizzes, and practice.
 */
export function buildPedagogicalLessonContent(
  courseSlug: string,
  lessonTitle: string,
  baseContent?: Partial<LessonContent>
): LessonContent {
  const deepItem = getDeepCurriculumTopic(courseSlug, lessonTitle);

  if (!deepItem) {
    // Return standard enriched defaults if not in specialized registry
    return {
      heroTagline: baseContent?.heroTagline || `Mastering ${lessonTitle} in ${courseSlug.toUpperCase()}`,
      introduction: baseContent?.introduction || `In this lesson, you will master **${lessonTitle}**. You will understand the underlying language mechanics, practical syntax, and test your code live.`,
      ...baseContent
    };
  }

  const { pedagogy, examples, exercises } = deepItem;

  // Convert deep curriculum into LessonSection items
  const sections: LessonSection[] = [
    {
      title: `The Architecture of ${lessonTitle}`,
      level: 2,
      paragraphs: [
        pedagogy.underTheHood,
        pedagogy.mentalModel
      ]
    },
    {
      title: 'Industry Best Practices & Guidelines',
      level: 3,
      bulletPoints: pedagogy.proBestPractices
    }
  ];

  // Format pitfalls into CalloutBox objects
  const callouts: CalloutBox[] = pedagogy.commonPitfalls.map(p => ({
    type: 'pitfall',
    title: p.title,
    wrongCode: p.wrongCode,
    correctCode: p.correctCode,
    explanation: p.explanation,
    content: p.explanation
  }));

  const mistakesFormatted = pedagogy.commonPitfalls.map(p => ({
    wrong: p.wrongCode,
    correct: p.correctCode,
    reason: p.explanation
  }));

  return {
    heroTagline: baseContent?.heroTagline || deepItem.heroTagline,
    introduction: baseContent?.introduction || `${pedagogy.underTheHood}\n\n**Mental Model:** ${pedagogy.mentalModel}`,
    definition: baseContent?.definition || {
      term: pedagogy.conceptName,
      explanation: pedagogy.whyItMatters
    },
    whyItMatters: baseContent?.whyItMatters || pedagogy.whyItMatters,
    realWorldAnalogy: baseContent?.realWorldAnalogy || pedagogy.realWorldAnalogy,
    comparisonTable: baseContent?.comparisonTable || pedagogy.comparisonTable,
    diagram: baseContent?.diagram || pedagogy.diagram,
    stepByStep: baseContent?.stepByStep || pedagogy.stepByStep,
    sections,
    syntaxStructure: baseContent?.syntaxStructure || examples.syntaxStructure,
    codeAnnotations: baseContent?.codeAnnotations || examples.codeAnnotations,
    codeExample: baseContent?.codeExample || examples.foundation.code,
    codeExamples: [examples.foundation, examples.practical, examples.production],
    commonMistakes: baseContent?.commonMistakes || mistakesFormatted,
    callouts: baseContent?.callouts || callouts,
    pitfalls: pedagogy.commonPitfalls.map(p => ({
      mistake: p.title,
      wrongCode: p.wrongCode,
      correctCode: p.correctCode,
      explanation: p.explanation
    })),
    tips: baseContent?.tips || pedagogy.proBestPractices,
    bestPractices: pedagogy.proBestPractices,
    takeaways: baseContent?.takeaways || pedagogy.keyTakeaways,
    keyPoints: pedagogy.keyTakeaways,
    tryItYourself: baseContent?.tryItYourself || {
      html: `<div style="font-family: monospace; padding: 16px; background: #18181b; color: #f4f4f5; border-radius: 8px;">\n  <strong style="color: #22c55e;">// ${courseSlug.toUpperCase()} Pedagogical Studio</strong><br><br>\n  ${lessonTitle} environment initialized.<br>\n  Review the theoretical principles and run the code.<br>\n</div>`,
      css: '',
      js: examples.foundation.code,
      instructions: `Run and experiment with the code for ${lessonTitle}. Observe the output.`
    },
    practiceQuestions: exercises.practice,
    quizQuestions: exercises.quiz,
    challenge: exercises.challenge,
    ...baseContent
  };
}

/**
 * Returns architectural overview and language execution facts.
 */
export function getLanguagePedagogyGuide(courseSlug: string): {
  language: string;
  paradigm: string;
  memoryModel: string;
  compilerOrRuntime: string;
  bestPractices: string[];
} {
  switch (courseSlug.toLowerCase()) {
    case 'javascript':
    case 'js':
      return {
        language: 'JavaScript (ECMAScript)',
        paradigm: 'Multi-paradigm: Event-driven, functional, prototype-based object-oriented',
        memoryModel: 'Heap-allocated objects with generational mark-and-sweep garbage collection',
        compilerOrRuntime: 'V8 / SpiderMonkey / JavaScriptCore (JIT compiled with Ignition & TurboFan)',
        bestPractices: [
          'Use const by default, let when reassigning; avoid var',
          'Prefer pure functions and immutable array methods (.map, .filter, .reduce)',
          'Avoid blocking the main thread; leverage async/await and Web Workers'
        ]
      };
    case 'python':
    case 'py':
      return {
        language: 'Python 3',
        paradigm: 'Multi-paradigm: Object-oriented, imperative, functional, procedural',
        memoryModel: 'PyObject pointers on heap with Reference Counting & Cyclic Garbage Collector',
        compilerOrRuntime: 'CPython Virtual Machine (Bytecode interpreter with Global Interpreter Lock)',
        bestPractices: [
          'Adhere strictly to PEP 8 style guide (4 spaces indent)',
          'Never use mutable objects as default arguments',
          'Use list comprehensions, generators, and context managers (with statements)'
        ]
      };
    case 'cpp':
    case 'c++':
      return {
        language: 'C++ (ISO Standard C++17/C++20/C++23)',
        paradigm: 'Multi-paradigm: Procedural, object-oriented, generic (templates), functional',
        memoryModel: 'Manual Stack (LIFO automatic) and Heap (free store via RAII/smart pointers)',
        compilerOrRuntime: 'Ahead-Of-Time (AOT) compiler (GCC, Clang, MSVC) producing native machine binaries',
        bestPractices: [
          'Enforce RAII: wrap raw resources in smart pointers (std::unique_ptr, std::shared_ptr)',
          'Pass large data structures by const reference (const std::string&)',
          'Prefer std::vector and STL algorithms over raw C arrays and raw loops'
        ]
      };
    default:
      return {
        language: courseSlug.toUpperCase(),
        paradigm: 'Structured Programming',
        memoryModel: 'Managed Runtime Memory',
        compilerOrRuntime: 'Host Compiler / Interpreter',
        bestPractices: [
          'Follow official syntax guidelines and indentation',
          'Test code iteratively in the live execution environment'
        ]
      };
  }
}
