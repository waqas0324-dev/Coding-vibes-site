import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('react-js', 1, 'React Fundamentals', 1, 'Introduction to React', {
    heroTagline: 'Build dynamic modern user interfaces with reusable components',
    introduction: 'React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.',
    definition: {
      term: 'React',
      explanation: 'A declarative, efficient, and flexible JavaScript library created by Meta for building user interfaces.'
    },
    whyItMatters: 'React is the dominant frontend framework globally, powering Facebook, Instagram, Netflix, Airbnb, and millions of modern web applications.',
    syntaxStructure: `function MyComponent() {\n  return <h1>Hello from React!</h1>;\n}`,
    codeExample: `function App() {\n  return (\n    <div className="container">\n      <h1>Welcome to React</h1>\n      <p>Building component-driven web interfaces.</p>\n    </div>\n  );\n}`,
    syntaxExplanation: 'React components are JavaScript functions that return JSX (JavaScript XML) describing what the UI should look like.'
  }),
  createStructuredLesson('react-js', 1, 'React Fundamentals', 2, 'React Getting Started & Vite'),
  createStructuredLesson('react-js', 1, 'React Fundamentals', 3, 'React JSX Syntax and Rules'),
  createStructuredLesson('react-js', 1, 'React Fundamentals', 4, 'React Components: Functional vs Class')
];

const module2Lessons = [
  createStructuredLesson('react-js', 2, 'Props & Component Tree', 1, 'React Props', {
    heroTagline: 'Passing data from parent to child components',
    introduction: 'React Props (short for properties) are arguments passed into React components. Props are passed to components via HTML attributes.',
    definition: {
      term: 'Props',
      explanation: 'Read-only data objects passed into components to customize their rendering.'
    },
    whyItMatters: 'Props enable components to be truly reusable across different screens and data sets.',
    syntaxStructure: `function UserCard(props) {\n  return <h2>{props.name}</h2>;\n}`,
    codeExample: `function Avatar({ name, role }) {\n  return (\n    <div className="avatar-badge">\n      <h3>{name}</h3>\n      <span>{role}</span>\n    </div>\n  );\n}`,
    syntaxExplanation: 'Modern React prefers ES6 object destructuring in function parameter lists.'
  }),
  createStructuredLesson('react-js', 2, 'Props & Component Tree', 2, 'Destructuring Props'),
  createStructuredLesson('react-js', 2, 'Props & Component Tree', 3, 'Props Children & Composition'),
  createStructuredLesson('react-js', 2, 'Props & Component Tree', 4, 'Default Props and Type Safety')
];

const module3Lessons = [
  createStructuredLesson('react-js', 3, 'State & Hooks', 1, 'React useState Hook', {
    heroTagline: 'Managing dynamic, responsive data in React components',
    introduction: 'The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.',
    definition: {
      term: 'useState',
      explanation: 'A built-in React hook that declares a state variable and a setter function to trigger re-renders.'
    },
    whyItMatters: 'State is the heart of React reactivity; whenever state changes, React efficiently re-renders the affected DOM nodes.',
    syntaxStructure: `const [count, setCount] = useState(0);`,
    codeExample: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Clicked {count} times\n    </button>\n  );\n}`,
    syntaxExplanation: 'Calling setCount updates the internal component state and schedules a UI re-render.'
  }),
  createStructuredLesson('react-js', 3, 'State & Hooks', 2, 'Updating State with Previous Value'),
  createStructuredLesson('react-js', 3, 'State & Hooks', 3, 'Managing Object and Array State'),
  createStructuredLesson('react-js', 3, 'State & Hooks', 4, 'React useEffect Hook for Side Effects')
];

const module4Lessons = [
  createStructuredLesson('react-js', 4, 'Events & Forms', 1, 'Handling Events in React', {
    heroTagline: 'Responding to user clicks, keyboard strokes, and touches',
    introduction: 'Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: click, change, mouseover, etc.',
    definition: {
      term: 'Synthetic Event',
      explanation: 'A cross-browser wrapper around the browser’s native event system implemented by React.'
    },
    whyItMatters: 'Event handlers connect user actions to state modifications and API calls.',
    syntaxStructure: `<button onClick={handleClick}>Click Me</button>`,
    codeExample: `function ActionButton() {\n  function shoot() {\n    alert("Great Shot!");\n  }\n  return <button onClick={shoot}>Take the shot!</button>;\n}`,
    syntaxExplanation: 'In React, event names are camelCased (onClick, onChange) and accept function references.'
  }),
  createStructuredLesson('react-js', 4, 'Events & Forms', 2, 'Controlled Inputs and Forms'),
  createStructuredLesson('react-js', 4, 'Events & Forms', 3, 'Form Submission and Validation')
];

const reactProjects: Project[] = [
  {
    id: 'proj-react-todo',
    title: 'Interactive React Task Tracker',
    slug: 'react-task-tracker',
    category: 'javascript',
    description: 'Build a component-driven task list with add, toggle, and delete actions using React state.',
    difficulty: 'Intermediate',
    skills: ['React', 'Hooks', 'Components', 'State'],
    requirements: ['Functional components', 'useState hook', 'Array map rendering'],
    estimatedTime: '40 mins',
    starterCode: {
      html: '<div id="root"></div>',
      css: 'body { font-family: sans-serif; padding: 20px; }',
      js: 'document.getElementById("root").innerHTML = "<h3>React Task Manager</h3><p>Ready to assemble components.</p>";'
    },
    solutionHint: 'Create a state array tasks with useState, map over them, and provide an input to append new tasks.',
    expectedResult: 'A reactive task list with addition and completion toggles.'
  }
];

export const reactCourse: Course = {
  id: 'course-react',
  slug: 'react-js',
  title: 'React',
  tagline: 'Component-Based UI Library',
  description: 'Master component architecture, JSX, props, state, useState, useEffect, forms, and single-page apps.',
  category: 'Web Development',
  difficulty: 'Intermediate',
  estimatedHours: 25,
  modulesCount: 4,
  lessonsCount: 15,
  badgeType: 'react',
  status: 'Active',
  icon: 'Code2',
  modules: [
    {
      id: 'react-m1',
      title: 'React Fundamentals & JSX',
      description: 'Introduction to React library, JSX rules, and component-based UI building.',
      order: 1,
      lessons: module1Lessons
    },
    {
      id: 'react-m2',
      title: 'Props & Data Flow',
      description: 'Pass data down component trees with props, children, and composition.',
      order: 2,
      lessons: module2Lessons
    },
    {
      id: 'react-m3',
      title: 'State & Hooks (useState, useEffect)',
      description: 'Master dynamic state updates, lifecycle hooks, and asynchronous side-effects.',
      order: 3,
      lessons: module3Lessons
    },
    {
      id: 'react-m4',
      title: 'Events & Forms',
      description: 'Capture user interactions with controlled input components and form handlers.',
      order: 4,
      lessons: module4Lessons
    }
  ],
  projects: reactProjects
};
