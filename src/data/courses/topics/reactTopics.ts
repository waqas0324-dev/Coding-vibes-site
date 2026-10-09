import { TopicDefinition } from '../topicData';

export const REACT_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: React Fundamentals & JSX
  'introduction-to-react': {
    heroTagline: "The world's leading UI library for building reactive, component-driven user interfaces",
    introduction: "React is a free and open-source front-end JavaScript library developed by Meta (Facebook) in 2013 for building user interfaces based on components. React uses a **Virtual DOM** to minimize costly browser reflows and optimize page speed.",
    definition: {
      term: "React",
      explanation: "A declarative, component-based JavaScript library for building fast, scalable user interfaces."
    },
    syntaxStructure: `function App() {
  return <h1>Hello React!</h1>;
}`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; padding: 24px; background: #f8fafc; }
    .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .badge { background: #61dafb; color: #0f172a; padding: 4px 10px; border-radius: 12px; font-weight: bold; }
  </style>
</head>
<body>

<div id="root"></div>

<script type="text/babel">
  function Welcome() {
    return (
      <div className="card">
        <span className="badge">React 18 Active</span>
        <h2>Welcome to React on Coding Vibes!</h2>
        <p>Declarative, Component-Based, Learn Once, Write Anywhere.</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Welcome />);
</script>

</body>
</html>`,
    codeAnnotations: [
      { lineOrToken: "function Welcome()", description: "A functional component: a JavaScript function that returns JSX." },
      { lineOrToken: "ReactDOM.createRoot()", description: "Initializes a React 18 root container attached to a DOM node." },
      { lineOrToken: "className=\"card\"", description: "JSX uses className instead of class because class is a reserved keyword in JavaScript." }
    ],
    commonMistakes: [
      {
        wrong: "<div class=\"my-class\">",
        correct: "<div className=\"my-class\">",
        reason: "In JSX, use 'className' instead of 'class' because class is a reserved JavaScript keyword."
      }
    ],
    tips: [
      "Components must return a single root element or React Fragment (<>...</>).",
      "React component names must always start with a Capital letter."
    ],
    practice: [
      {
        id: "react-intro-p1",
        type: "multiple_choice",
        question: "Why must React component names start with an uppercase letter?",
        options: [
          "To differentiate custom React components from standard built-in HTML tags (like <div>)",
          "Because JavaScript functions must be uppercase",
          "It is required by the browser DOM engine",
          "It is just a stylistic recommendation with no effect"
        ],
        correctAnswer: 0,
        explanation: "React treats tags starting with lowercase letters as standard DOM tags (like <div> or <span>), and uppercase tags as custom React components."
      }
    ],
    quiz: [
      {
        id: "react-intro-q1",
        question: "What is the primary role of the React Virtual DOM?",
        options: [
          "It calculates minimal DOM changes in memory before applying updates to the real browser DOM",
          "It replaces the browser completely",
          "It compiles JavaScript to C++",
          "It handles backend database transactions"
        ],
        correctAnswerIndex: 0,
        explanation: "The Virtual DOM diffs tree changes in memory (reconciliation) and updates only the changed parts of the real DOM for high performance."
      }
    ]
  },

  'react-jsx-syntax-and-rules': {
    heroTagline: "JavaScript XML: mixing HTML-like markup directly inside JavaScript",
    introduction: "JSX stands for JavaScript XML. JSX allows us to write HTML in React and easily place them in the DOM without using `createElement()` methods. JSX tag attributes use camelCase naming (like `onClick` instead of `onclick`).",
    definition: {
      term: "JSX (JavaScript XML)",
      explanation: "A syntax extension for JavaScript that looks like HTML, compiled into React.createElement() calls by Babel."
    },
    syntaxStructure: `const element = <h1>Hello, {name}!</h1>;`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body style="font-family: Arial; padding: 20px;">

<div id="root"></div>

<script type="text/babel">
  function UserCard() {
    const user = {
      name: "Emma Watson",
      role: "Frontend Architect",
      skills: ["React", "TypeScript", "Tailwind"]
    };

    return (
      <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>User: {user.name}</h2>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Skills:</strong> {user.skills.join(", ")}</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<UserCard />);
</script>

</body>
</html>`,
    practice: [
      {
        id: "react-jsx-p1",
        type: "multiple_choice",
        question: "How do you embed a dynamic JavaScript expression inside JSX?",
        options: ["Inside curly braces {}", "Inside percent tags <%%>", "Inside double quotes \"\"", "Inside brackets []"],
        correctAnswer: 0,
        explanation: "In JSX, any JavaScript expression placed inside single curly braces {} is evaluated."
      }
    ]
  },

  // Module 3: State & Hooks
  'react-usestate-hook': {
    heroTagline: "Adding local reactive state to functional components with [state, setState]",
    introduction: "The React `useState` Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application. When state updates, React automatically re-renders the component.",
    definition: {
      term: "useState",
      explanation: "A built-in React hook that returns an array with the current state value and a function to update it."
    },
    syntaxStructure: `const [count, setCount] = useState(initialValue);`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    button { padding: 8px 16px; margin: 4px; border: none; border-radius: 4px; background: #04AA6D; color: white; cursor: pointer; }
  </style>
</head>
<body style="font-family: Arial; padding: 20px;">

<div id="root"></div>

<script type="text/babel">
  const { useState } = React;

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h3>Interactive React Counter</h3>
        <p>Current count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Increment (+)</button>
        <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        <button onClick={() => setCount(0)} style={{ background: "#e11d48" }}>Reset</button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Counter />);
</script>

</body>
</html>`,
    codeAnnotations: [
      { lineOrToken: "const [count, setCount] = useState(0);", description: "Array destructuring: count is current state, setCount is the updater function, 0 is the initial value." },
      { lineOrToken: "onClick={() => setCount(count + 1)}", description: "Event handler passes an arrow function to trigger state update and re-render." }
    ],
    practice: [
      {
        id: "react-state-p1",
        type: "multiple_choice",
        question: "What happens when you call a state updater function (e.g. setCount)?",
        options: [
          "React updates the state and re-renders the component with the new value",
          "The browser does a full page refresh",
          "The entire website reloads from scratch",
          "Nothing until the user clicks submit"
        ],
        correctAnswer: 0,
        explanation: "Calling the state setter notifies React that state has changed, triggering a component re-render."
      }
    ]
  },

  'react-useeffect-hook-for-side-effects': {
    heroTagline: "Handling side-effects: fetching data, timers, and DOM subscriptions",
    introduction: "The `useEffect` Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. `useEffect` accepts two arguments: a callback function and a dependency array.",
    definition: {
      term: "useEffect",
      explanation: "A React hook that runs side-effect logic after render, synchronizing components with external systems."
    },
    syntaxStructure: `useEffect(() => {
  // Side effect logic
  return () => { /* Cleanup function */ };
}, [dependencies]);`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body style="font-family: Arial; padding: 20px;">

<div id="root"></div>

<script type="text/babel">
  const { useState, useEffect } = React;

  function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);

      // Cleanup on unmount
      return () => clearInterval(timer);
    }, []); // Empty array: run once on mount

    return (
      <div style={{ background: "#1e293b", color: "#38bdf8", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
        <h2>Live React Clock</h2>
        <div style={{ fontSize: "28px", fontWeight: "bold" }}>{time}</div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Clock />);
</script>

</body>
</html>`,
    practice: [
      {
        id: "react-eff-p1",
        type: "multiple_choice",
        question: "When does a useEffect with an empty dependency array [] run?",
        options: [
          "Only once when the component mounts",
          "On every single render",
          "Never",
          "Only on component unmount"
        ],
        correctAnswer: 0,
        explanation: "An empty dependency array [] tells React to run the effect only once when the component initially mounts."
      }
    ]
  }
};
