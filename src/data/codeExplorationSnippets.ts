export interface CodeExplorationSnippet {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  language: 'javascript' | 'html' | 'css' | 'python' | 'react';
  category: string;
  code: string;
  interviewQuestion: string;
  targetDurationSeconds: number; // e.g., 60-90s
  targetKeywords: string[];
  keyConceptSummary: string;
  suggestedOutline: string[];
  modelExplanation: string;
}

export const CODE_EXPLORATION_SNIPPETS: CodeExplorationSnippet[] = [
  {
    id: 'js-closure-counter',
    title: 'JavaScript Closures & Encapsulation',
    difficulty: 'Intermediate',
    language: 'javascript',
    category: 'Core JavaScript',
    interviewQuestion: 'Explain how this counter function works, why the count variable is private, and what happens in memory when createCounter() is invoked.',
    targetDurationSeconds: 75,
    targetKeywords: ['closure', 'lexical scope', 'encapsulation', 'private variable', 'garbage collection', 'inner function', 'return'],
    keyConceptSummary: 'A closure is the combination of a function bundled together with references to its surrounding lexical state.',
    suggestedOutline: [
      '1. High-Level Overview: Define what createCounter does (factory function returning an object with methods).',
      '2. Lexical Scope: Explain how increment and get access count even after createCounter has returned.',
      '3. Encapsulation: Point out that count cannot be directly modified from outside.',
      '4. Memory & Garbage Collection: Why count remains in memory rather than being garbage collected.'
    ],
    code: `function createCounter(initialValue = 0) {
  let count = initialValue; // Private state in lexical scope

  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counterA = createCounter(10);
console.log(counterA.increment()); // 11
console.log(counterA.getCount());  // 11`,
    modelExplanation: `This snippet demonstrates JavaScript closures and data encapsulation. createCounter is a factory function that defines a private variable called count in its outer lexical scope. It returns an object containing three methods: increment, decrement, and getCount.

Even though createCounter finishes executing, the returned methods retain a reference to count through their lexical environment. This prevents count from being garbage-collected and makes it completely inaccessible from outside scope, providing true data privacy. Each instance created also maintains its own isolated state.`
  },
  {
    id: 'js-async-fetch',
    title: 'Async/Await & Resilient Error Handling',
    difficulty: 'Intermediate',
    language: 'javascript',
    category: 'Asynchronous Programming',
    interviewQuestion: 'Walk through this asynchronous API fetcher. Explain why response.ok check is necessary alongside try/catch, and how the Promise lifecycle is managed.',
    targetDurationSeconds: 80,
    targetKeywords: ['async', 'await', 'promise', 'try catch', 'response.ok', 'http status', 'reject', 'abort controller'],
    keyConceptSummary: 'fetch only rejects on network failure, not HTTP 4xx/5xx errors, making manual status checking essential.',
    suggestedOutline: [
      '1. High-Level Overview: State that this function retrieves user data with defensive error handling.',
      '2. Async / Await: Explain how await unwraps the Promise returned by fetch.',
      '3. Response.ok Distinction: Crucial interview point: fetch does NOT reject on 404 or 500 status codes.',
      '4. Clean Error Propagation: Explain how the error is logged and rethrown or handled.'
    ],
    code: `async function fetchUserProfile(userId, signal) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
      signal,
      headers: { 'Accept': 'application/json' }
    });

    // fetch does NOT reject on HTTP errors like 404 or 500!
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.warn('Request was cancelled by user');
      return null;
    }
    console.error('Failed to load user profile:', error.message);
    throw error;
  }
}`,
    modelExplanation: `This function implements resilient asynchronous data fetching using async/await and defensive error handling. First, it uses fetch with an optional AbortSignal, allowing the caller to cancel the request if a component unmounts.

A key point to highlight is that fetch only rejects on actual network failure, not on HTTP error codes like 404 or 500. Therefore, checking response.ok is mandatory before parsing JSON. The catch block specifically distinguishes between user-initiated AbortErrors and real errors, logging and re-throwing appropriately.`
  },
  {
    id: 'css-flex-centering',
    title: 'Modern CSS Centering & Layout Mechanics',
    difficulty: 'Beginner',
    language: 'css',
    category: 'CSS Architecture',
    interviewQuestion: 'Explain the difference between justify-content and align-items along the main axis vs cross axis, and how this achieves bidirectional centering.',
    targetDurationSeconds: 60,
    targetKeywords: ['flexbox', 'main axis', 'cross axis', 'justify-content', 'align-items', 'flex-direction', 'viewport'],
    keyConceptSummary: 'justify-content aligns along the main axis (horizontal by default), while align-items controls alignment along the perpendicular cross axis.',
    suggestedOutline: [
      '1. Flex Container: Establishing display: flex defines a flex formatting context.',
      '2. Main Axis vs Cross Axis: Default flex-direction is row; main is X-axis, cross is Y-axis.',
      '3. justify-content: centers along main axis.',
      '4. align-items: centers along cross axis.',
      '5. Viewport sizing: min-height: 100vh prevents container collapse.'
    ],
    code: `.modal-backdrop {
  display: flex;
  justify-content: center; /* Main axis alignment (horizontal by default) */
  align-items: center;     /* Cross axis alignment (vertical by default) */
  min-height: 100vh;
  padding: 1.5rem;
  background-color: rgba(15, 23, 42, 0.85);
}

.modal-dialog {
  max-width: 32rem;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
}`,
    modelExplanation: `This CSS snippet achieves foolproof, bidirectional centering using Flexbox. By setting display: flex on the backdrop, it establishes a flex formatting context for child elements. Because flex-direction defaults to row, the main axis runs horizontally and the cross axis runs vertically.

justify-content: center centers the dialog along the main horizontal axis, while align-items: center aligns it along the vertical cross axis. Using min-height: 100vh guarantees full viewport height without collapsing, and width: 100% with max-width ensures fluid responsiveness on smaller mobile viewports.`
  },
  {
    id: 'js-array-reduce',
    title: 'Array.prototype.reduce & Data Transformation',
    difficulty: 'Intermediate',
    language: 'javascript',
    category: 'Functional JavaScript',
    interviewQuestion: 'Walk through how reduce aggregates transactions by category, how the initial value accumulator works, and why immutability or in-place accumulation was chosen.',
    targetDurationSeconds: 70,
    targetKeywords: ['reduce', 'accumulator', 'current value', 'initial value', 'group by', 'hash map', 'time complexity'],
    keyConceptSummary: 'reduce transforms an array into a single accumulated structure (in this case, an object map of category totals) in a single O(N) pass.',
    suggestedOutline: [
      '1. Overview: Grouping and summing expenses by category in a single pass.',
      '2. Parameters: Explain accumulator (acc) and current item (tx).',
      '3. Initial Value: Point out the empty object {} as the second argument.',
      '4. Lookup & Update: Checking if category exists and adding amount.',
      '5. Complexity: Mention O(N) linear time complexity.'
    ],
    code: `const transactions = [
  { id: 1, category: 'Groceries', amount: 54.20 },
  { id: 2, category: 'Utilities', amount: 120.00 },
  { id: 3, category: 'Groceries', amount: 32.50 },
  { id: 4, category: 'Transport', amount: 15.00 }
];

const totalByCategory = transactions.reduce((acc, tx) => {
  const currentTotal = acc[tx.category] || 0;
  acc[tx.category] = Number((currentTotal + tx.amount).toFixed(2));
  return acc;
}, {});

console.log(totalByCategory);
// Output: { Groceries: 86.7, Utilities: 120, Transport: 15 }`,
    modelExplanation: `In this snippet, Array.prototype.reduce is used to aggregate an array of transaction objects into a category-based summary object in a single pass. 

The reduce method accepts a callback and an initial value, here an empty object. On each iteration, acc represents our accumulated dictionary and tx is the current transaction. We look up the existing total for tx.category or default to 0, sum the new amount, and reassign it. Returning acc at each step ensures the mutated map persists to the next iteration, completing the aggregation in O(N) linear time and O(K) space where K is unique categories.`
  },
  {
    id: 'js-debounce-implementation',
    title: 'Debounce Utility & Event Rate Limiting',
    difficulty: 'Advanced',
    language: 'javascript',
    category: 'Optimization & Events',
    interviewQuestion: 'Explain what problem debounce solves, how setTimeout and clearTimeout manage the timer ID, and how the "this" context and arguments are preserved.',
    targetDurationSeconds: 90,
    targetKeywords: ['debounce', 'rate limit', 'clearTimeout', 'setTimeout', 'timer', 'arguments', 'event listener', 'performance'],
    keyConceptSummary: 'Debouncing delays invoking a function until after a specific duration has passed since the last time the debounced function was called.',
    suggestedOutline: [
      '1. The Problem: Rapid firing events (input, scroll, window resize) overloading network or UI.',
      '2. Timer State: Explaining how timerId is stored in closure.',
      '3. Reset Mechanism: Every new invocation clears the previous pending timer.',
      '4. Execution: When delay finishes without interruption, the callback runs with original args and context.'
    ],
    code: `function debounce(func, delayMs = 300) {
  let timerId = null;

  return function debounced(...args) {
    // Cancel previous scheduled invocation
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    // Schedule new execution after cooldown period
    timerId = setTimeout(() => {
      func.apply(this, args);
      timerId = null;
    }, delayMs);
  };
}

// Example usage with search input:
const onSearch = debounce((query) => {
  console.log('Sending search query to API:', query);
}, 400);`,
    modelExplanation: `This code implements a debounce higher-order function designed to rate-limit expensive operations, such as search autocomplete or window resize listeners.

It uses a closure to hold a private timerId variable. Each time the returned debounced function is invoked, it immediately calls clearTimeout on any pending timer. It then creates a new setTimeout that will execute after the specified delay. If the user continues typing within 300 milliseconds, the timer keeps resetting. Only when the user pauses for the full delay will func.apply be invoked with the latest arguments and appropriate context.`
  },
  {
    id: 'algo-two-sum',
    title: 'Two Sum with Hash Map (O(N) Time)',
    difficulty: 'Intermediate',
    language: 'javascript',
    category: 'Data Structures & Algorithms',
    interviewQuestion: 'Explain the brute force approach versus this hash map approach, detailing the time and space complexity tradeoffs.',
    targetDurationSeconds: 75,
    targetKeywords: ['hash map', 'complement', 'two sum', 'time complexity', 'space complexity', 'O(N)', 'lookup', 'index'],
    keyConceptSummary: 'Trading O(N) space for O(N) time by caching visited elements in a Map or Object for constant-time complement lookups.',
    suggestedOutline: [
      '1. Problem Statement: Finding two indices whose values sum to the target.',
      '2. Brute Force vs Optimal: Mention nested loops take O(N^2) time, whereas a hash map achieves O(N).',
      '3. Complement Logic: complement = target - currentNumber.',
      '4. Single-Pass Iteration: Check if complement exists; if not, store current number with its index.'
    ],
    code: `function twoSum(nums, target) {
  const seenMap = new Map(); // Stores value -> index

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    // Check if complement was already seen in O(1) time
    if (seenMap.has(complement)) {
      return [seenMap.get(complement), i];
    }

    seenMap.set(currentNum, i);
  }

  return []; // No matching pair found
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]`,
    modelExplanation: `The Two Sum problem asks us to find two indices whose values add up to a target sum. The naive brute-force approach compares every pair with nested loops, taking quadratic O(N^2) time.

Instead, this optimal solution uses a Map to trade O(N) auxiliary space for linear O(N) time. In a single pass through the array, we calculate the required complement: target minus currentNum. If that complement is already in our Map, we immediately return both indices. Otherwise, we record the current number and index. Because Map lookups and insertions are O(1) on average, the entire algorithm runs in O(N) time.`
  }
];
