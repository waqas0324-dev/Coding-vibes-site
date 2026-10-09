import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';
import {
  jsIntroContent,
  jsVariablesContent,
  jsDomContent
} from './jsContent';

const module1Lessons = [
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 1, 'Introduction to JavaScript', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 2, 'What is JavaScript?', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 3, 'Why JavaScript is Used', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 4, 'How JavaScript Works', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 5, 'Adding JavaScript to HTML', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 6, 'Inline JavaScript', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 7, 'Internal JavaScript', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 8, 'External JavaScript', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 9, 'JavaScript Syntax', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 10, 'Comments', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 11, 'Statements', jsIntroContent),
  createStructuredLesson('javascript', 1, 'JavaScript Fundamentals', 12, 'Console', jsIntroContent),
];

const module2Lessons = [
  createStructuredLesson('javascript', 2, 'Variables and Data', 1, 'Variables', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 2, 'let', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 3, 'const', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 4, 'var', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 5, 'Variable Naming', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 6, 'Data Types', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 7, 'Strings', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 8, 'Numbers', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 9, 'Booleans', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 10, 'Null', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 11, 'Undefined', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 12, 'Objects', jsVariablesContent),
  createStructuredLesson('javascript', 2, 'Variables and Data', 13, 'Arrays', jsVariablesContent),
];

const module3Lessons = [
  createStructuredLesson('javascript', 3, 'Operators', 1, 'Arithmetic Operators'),
  createStructuredLesson('javascript', 3, 'Operators', 2, 'Assignment Operators'),
  createStructuredLesson('javascript', 3, 'Operators', 3, 'Comparison Operators'),
  createStructuredLesson('javascript', 3, 'Operators', 4, 'Logical Operators'),
  createStructuredLesson('javascript', 3, 'Operators', 5, 'Increment'),
  createStructuredLesson('javascript', 3, 'Operators', 6, 'Decrement'),
  createStructuredLesson('javascript', 3, 'Operators', 7, 'Ternary Operator'),
  createStructuredLesson('javascript', 3, 'Operators', 8, 'Operator Precedence'),
];

const module4Lessons = [
  createStructuredLesson('javascript', 4, 'Conditions', 1, 'Introduction to Conditions'),
  createStructuredLesson('javascript', 4, 'Conditions', 2, 'if Statement'),
  createStructuredLesson('javascript', 4, 'Conditions', 3, 'else Statement'),
  createStructuredLesson('javascript', 4, 'Conditions', 4, 'else if'),
  createStructuredLesson('javascript', 4, 'Conditions', 5, 'Nested Conditions'),
  createStructuredLesson('javascript', 4, 'Conditions', 6, 'Comparison'),
  createStructuredLesson('javascript', 4, 'Conditions', 7, 'Logical Conditions'),
  createStructuredLesson('javascript', 4, 'Conditions', 8, 'switch'),
  createStructuredLesson('javascript', 4, 'Conditions', 9, 'Real-world Conditions'),
];

const module5Lessons = [
  createStructuredLesson('javascript', 5, 'Loops', 1, 'Introduction to Loops'),
  createStructuredLesson('javascript', 5, 'Loops', 2, 'for Loop'),
  createStructuredLesson('javascript', 5, 'Loops', 3, 'while Loop'),
  createStructuredLesson('javascript', 5, 'Loops', 4, 'do while Loop'),
  createStructuredLesson('javascript', 5, 'Loops', 5, 'for...of'),
  createStructuredLesson('javascript', 5, 'Loops', 6, 'for...in'),
  createStructuredLesson('javascript', 5, 'Loops', 7, 'break'),
  createStructuredLesson('javascript', 5, 'Loops', 8, 'continue'),
  createStructuredLesson('javascript', 5, 'Loops', 9, 'Nested Loops'),
];

const module6Lessons = [
  createStructuredLesson('javascript', 6, 'Functions', 1, 'What is a Function?'),
  createStructuredLesson('javascript', 6, 'Functions', 2, 'Creating Functions'),
  createStructuredLesson('javascript', 6, 'Functions', 3, 'Calling Functions'),
  createStructuredLesson('javascript', 6, 'Functions', 4, 'Parameters'),
  createStructuredLesson('javascript', 6, 'Functions', 5, 'Arguments'),
  createStructuredLesson('javascript', 6, 'Functions', 6, 'Return Values'),
  createStructuredLesson('javascript', 6, 'Functions', 7, 'Default Parameters'),
  createStructuredLesson('javascript', 6, 'Functions', 8, 'Arrow Functions'),
  createStructuredLesson('javascript', 6, 'Functions', 9, 'Scope'),
  createStructuredLesson('javascript', 6, 'Functions', 10, 'Callback Functions'),
];

const module7Lessons = [
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 1, 'Arrays'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 2, 'Accessing Array Items'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 3, 'Adding Items'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 4, 'Removing Items'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 5, 'Array Methods'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 6, 'map()'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 7, 'filter()'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 8, 'find()'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 9, 'reduce()'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 10, 'Objects'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 11, 'Object Properties'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 12, 'Object Methods'),
  createStructuredLesson('javascript', 7, 'Arrays and Objects', 13, 'Nested Objects'),
];

const module8Lessons = [
  createStructuredLesson('javascript', 8, 'DOM', 1, 'What is the DOM?', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 2, 'Selecting Elements', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 3, 'getElementById()', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 4, 'querySelector()', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 5, 'querySelectorAll()', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 6, 'Changing Text', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 7, 'Changing HTML', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 8, 'Changing Styles', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 9, 'Creating Elements', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 10, 'Removing Elements', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 11, 'Classes', jsDomContent),
  createStructuredLesson('javascript', 8, 'DOM', 12, 'Attributes', jsDomContent),
];

const module9Lessons = [
  createStructuredLesson('javascript', 9, 'Events and Forms', 1, 'What are Events?'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 2, 'Click Event'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 3, 'Input Event'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 4, 'Change Event'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 5, 'Submit Event'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 6, 'Keyboard Events'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 7, 'Mouse Events'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 8, 'Event Listeners'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 9, 'Form Validation'),
  createStructuredLesson('javascript', 9, 'Events and Forms', 10, 'Interactive Forms'),
];

const javascriptProjects: Project[] = [
  {
    id: 'proj-js-1',
    title: 'Counter',
    slug: 'counter',
    category: 'javascript',
    difficulty: 'Beginner',
    description: 'Build an interactive counter app with Increment, Decrement, and Reset buttons, dynamic color changes for positive/negative values, and keyboard shortcuts.',
    skills: ['DOM Manipulation', 'Event Listeners', 'Variables & State', 'Conditional Styling'],
    requirements: ['Current count display', 'Increment (+1), Decrement (-1), Reset buttons', 'Green text for positive, red for negative, white for zero'],
    instructions: ['Select counter elements using querySelector', 'Attach click event listeners to buttons', 'Update textContent and classes dynamically'],
    starterFiles: {
      html: `<div class="counter-box">\n  <h1 id="count">0</h1>\n  <div class="btn-group">\n    <button id="dec">-</button>\n    <button id="reset">Reset</button>\n    <button id="inc">+</button>\n  </div>\n</div>`,
      css: `body { background: #080d14; color: white; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; }\n.counter-box { text-align: center; background: #0f172a; padding: 32px; border-radius: 16px; border: 1px solid #1e293b; }\n#count { font-size: 64px; margin: 0 0 24px 0; color: #22c55e; }\nbutton { background: #1e293b; color: white; border: none; padding: 12px 20px; margin: 0 6px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 18px; }\nbutton:hover { background: #22c55e; color: black; }`,
      js: `let count = 0;\nconst countEl = document.getElementById('count');\nconst incBtn = document.getElementById('inc');\nconst decBtn = document.getElementById('dec');\nconst resetBtn = document.getElementById('reset');\n\nfunction update() {\n  countEl.textContent = count;\n  if (count > 0) countEl.style.color = '#22c55e';\n  else if (count < 0) countEl.style.color = '#ef4444';\n  else countEl.style.color = '#ffffff';\n}\n\nincBtn.addEventListener('click', () => { count++; update(); });\ndecBtn.addEventListener('click', () => { count--; update(); });\nresetBtn.addEventListener('click', () => { count = 0; update(); });`
    },
    expectedResult: 'A fully interactive counter with color-coded numbers and instant feedback.'
  },
  {
    id: 'proj-js-2',
    title: 'Digital Clock',
    slug: 'digital-clock',
    category: 'javascript',
    difficulty: 'Beginner',
    description: 'Create a live real-time digital clock with hours, minutes, seconds, AM/PM indicators, and date formatting using setInterval and the Date API.',
    skills: ['Date Object', 'setInterval', 'String padding (padStart)', 'DOM updating'],
    requirements: ['Updates every 1000ms', '12-hour format with AM/PM toggle', 'Formatted date string'],
    instructions: ['Create a function to read new Date() and update the clock element every second.'],
    starterFiles: { html: `<div class="clock"><h1 id="time">00:00:00</h1><p id="date">Date</p></div>` },
    expectedResult: 'A live digital clock that updates every second.'
  },
  {
    id: 'proj-js-3',
    title: 'Color Changer',
    slug: 'color-changer',
    category: 'javascript',
    difficulty: 'Beginner',
    description: 'Build a random HEX and RGB color generator that updates the page background, displays color codes, and copies them to the clipboard.',
    skills: ['Math.random()', 'Array indexing / HEX conversions', 'Clipboard API', 'DOM Style manipulation'],
    requirements: ['Generate random HEX button', 'Display current HEX code', 'Copy code button with toast notification'],
    instructions: ['Create random 6-character hex strings and apply to document.body.style.backgroundColor.'],
    starterFiles: { html: `<div class="box"><h2 id="hex">#080D14</h2><button id="gen">Generate Color</button></div>` },
    expectedResult: 'A real-time color generator with copyable hex codes.'
  },
  {
    id: 'proj-js-4',
    title: 'Calculator',
    slug: 'calculator',
    category: 'javascript',
    difficulty: 'Intermediate',
    description: 'Build a functional web calculator supporting addition, subtraction, multiplication, division, decimal points, and clear/delete actions.',
    skills: ['Event Delegation', 'String parsing & Math evaluation', 'State management', 'Keyboard inputs'],
    requirements: ['Display screen with expression & result', 'Grid of digits and operator buttons', 'Error handling for divide-by-zero'],
    instructions: ['Listen to button clicks, accumulate calculation string, and compute result securely.'],
    starterFiles: { html: `<div class="calc"><div id="display">0</div><div class="grid"><button>7</button><button>8</button><button>9</button><button>+</button></div></div>` },
    expectedResult: 'A responsive, working calculator application.'
  },
  {
    id: 'proj-js-5',
    title: 'To-Do List',
    slug: 'to-do-list',
    category: 'javascript',
    difficulty: 'Intermediate',
    description: 'Develop a complete Task Manager app with task creation, complete/uncomplete toggles, category tags, filters (All, Active, Completed), and local storage saving.',
    skills: ['Array State CRUD', 'DOM rendering', 'localStorage', 'Event Listeners', 'Filter algorithms'],
    requirements: ['Add new task with input field', 'Toggle completion checkmark', 'Delete task with animation', 'Filter tabs'],
    instructions: ['Maintain an array of tasks and re-render the list upon each state mutation.'],
    starterFiles: { html: `<div class="todo-app"><h2>My Tasks</h2><input id="new-task" placeholder="Add task..."><ul id="list"></ul></div>` },
    expectedResult: 'A fully functional task manager with persistency.'
  },
  {
    id: 'proj-js-6',
    title: 'Quiz App',
    slug: 'quiz-app',
    category: 'javascript',
    difficulty: 'Intermediate',
    description: 'Build a timed quiz application with multiple-choice questions, progress bar, score tallying, instant feedback, and end-of-quiz summary review.',
    skills: ['Object Arrays', 'Conditional Flow', 'Timer countdowns', 'Score calculation', 'Dynamic UI replacement'],
    requirements: ['Question stepper (1 of 5)', 'Option selection highlighting', 'Score calculation & Retry button'],
    instructions: ['Load questions sequentially and track user selections in state.'],
    starterFiles: { html: `<div class="quiz-card"><h3 id="question">Question</h3><div id="options"></div><button id="next">Next</button></div>` },
    expectedResult: 'An interactive quiz game with live scoring and question transitions.'
  },
  {
    id: 'proj-js-7',
    title: 'Form Validation',
    slug: 'form-validation',
    category: 'javascript',
    difficulty: 'Intermediate',
    description: 'Implement real-time client-side form validation checking username length, valid email regex pattern, password strength criteria, and match confirmation.',
    skills: ['Regular Expressions (Regex)', 'Input Events (blur, input)', 'Error message injection', 'Submit prevention'],
    requirements: ['Real-time error messages below each input', 'Password strength meter', 'Disabled submit button until all valid'],
    instructions: ['Validate field criteria on input and display clear guidance messages.'],
    starterFiles: { html: `<form id="reg-form"><input id="email" type="email"><span class="err" id="email-err"></span><button type="submit">Submit</button></form>` },
    expectedResult: 'A secure form with live error states.'
  },
  {
    id: 'proj-js-8',
    title: 'Image Slider',
    slug: 'image-slider',
    category: 'javascript',
    difficulty: 'Intermediate',
    description: 'Create an automatic and manual carousel slider with Prev/Next buttons, thumbnail dots, swipe support, and auto-play interval pause on hover.',
    skills: ['Index bounds wrapping', 'CSS transform / transition triggering', 'Interval timers', 'Touch / Mouse event handling'],
    requirements: ['Previous and Next arrows', 'Pagination dot indicators', 'Autoplay every 3s with pause-on-hover'],
    instructions: ['Update the active slide index with modulo arithmetic and translate slide track.'],
    starterFiles: { html: `<div class="slider"><div class="slides"><div class="slide">Slide 1</div><div class="slide">Slide 2</div></div><button id="prev">◀</button><button id="next">▶</button></div>` },
    expectedResult: 'A smooth responsive carousel slider.'
  },
  {
    id: 'proj-js-9',
    title: 'Responsive Navigation',
    slug: 'js-responsive-navigation',
    category: 'javascript',
    difficulty: 'Beginner',
    description: 'Build an interactive mobile sidebar drawer and dropdown menus with smooth slide animations, backdrop blur overlay, and ESC key listener.',
    skills: ['ClassList toggling', 'Keyboard accessibility (Escape)', 'Aria attributes (aria-expanded)', 'Backdrop overlay clicks'],
    requirements: ['Hamburger icon toggle', 'Smooth slide-in sidebar', 'Click outside to close overlay', 'ESC key support'],
    instructions: ['Toggle active classes on navigation drawer and lock body scroll when open.'],
    starterFiles: { html: `<button id="menu-btn">☰</button><nav id="mobile-nav"><a href="#">Home</a><a href="#">Courses</a></nav><div id="backdrop"></div>` },
    expectedResult: 'A fully accessible mobile drawer navigation.'
  },
  {
    id: 'proj-js-10',
    title: 'Interactive Dashboard',
    slug: 'interactive-dashboard',
    category: 'javascript',
    difficulty: 'Advanced',
    description: 'Construct an interactive developer activity dashboard with real-time stat filters, dynamic bar chart visualizer, search filter, and theme switcher.',
    skills: ['Data filtering & mapping', 'Dynamic SVG/HTML Chart generation', 'Event handling', 'Theme switching'],
    requirements: ['Interactive search & filter list', 'Dynamic chart bars based on data values', 'Light/Dark mode toggle'],
    instructions: ['Render data dynamically into chart components and handle user filter inputs.'],
    starterFiles: { html: `<div class="dash"><input id="search" placeholder="Search..."><div id="chart"></div><div id="results"></div></div>` },
    expectedResult: 'An interactive analytical dashboard with responsive chart visuals.'
  },
  {
    id: 'proj-js-11',
    title: 'Complete JavaScript Website',
    slug: 'complete-javascript-website',
    category: 'javascript',
    difficulty: 'Advanced',
    description: 'Assemble a complete client-side single page application with modular components, client-side routing, interactive features, and persistent storage.',
    skills: ['Client Routing / Hash Routing', 'Modular JS Architecture', 'State persistence', 'Full UI event systems'],
    requirements: ['Multiple views (Home, Courses, Practice, Projects)', 'Global state manager', 'Theme and progress saving'],
    instructions: ['Build a cohesive, scalable web application leveraging all learned JavaScript techniques.'],
    starterFiles: { html: `<div id="app"><nav><button data-page="home">Home</button><button data-page="courses">Courses</button></nav><main id="view"></main></div>` },
    expectedResult: 'A complete modular single-page web app built with vanilla JavaScript.'
  }
];

export const javascriptCourse: Course = {
  id: 'course-javascript',
  slug: 'javascript',
  title: 'JavaScript',
  tagline: 'Interactivity, Logic, and Modern Web Applications',
  description: 'Learn JavaScript from scratch: variables, data types, operators, functions, DOM manipulation, asynchronous programming, and building real projects.',
  category: 'Web Development',
  difficulty: 'Beginner',
  status: 'Active',
  icon: 'Javascript',
  badgeType: 'js',
  estimatedHours: 35,
  modulesCount: 10,
  lessonsCount: 108,
  modules: [
    { id: 'js-m1', title: 'JavaScript Fundamentals', description: 'What is JS, console, syntax, statements, and script tags.', order: 1, lessons: module1Lessons },
    { id: 'js-m2', title: 'Variables and Data', description: 'let, const, var, primitives, objects, arrays, and type coercion.', order: 2, lessons: module2Lessons },
    { id: 'js-m3', title: 'Operators', description: 'Arithmetic, assignment, comparison, logical, ternary, and precedence.', order: 3, lessons: module3Lessons },
    { id: 'js-m4', title: 'Conditions', description: 'if, else, else if, nested conditions, and switch statements.', order: 4, lessons: module4Lessons },
    { id: 'js-m5', title: 'Loops', description: 'for, while, do...while, for...of, for...in, break, and continue.', order: 5, lessons: module5Lessons },
    { id: 'js-m6', title: 'Functions', description: 'Declarations, expressions, parameters, return values, arrow functions, scope, and callbacks.', order: 6, lessons: module6Lessons },
    { id: 'js-m7', title: 'Arrays and Objects', description: 'Array methods (map, filter, reduce), object keys, values, and nesting.', order: 7, lessons: module7Lessons },
    { id: 'js-m8', title: 'DOM', description: 'Selecting elements, changing HTML/CSS, creating, appending, and removing nodes.', order: 8, lessons: module8Lessons },
    { id: 'js-m9', title: 'Events and Forms', description: 'Event listeners, click, input, submit, mouse, keyboard events, and validation.', order: 9, lessons: module9Lessons },
    { id: 'js-m10', title: 'JavaScript Projects', description: 'Build 11 interactive real-world projects to become job-ready.', order: 10, lessons: [] },
  ],
  projects: javascriptProjects
};
