import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('w3css', 1, 'W3.CSS Basics', 1, 'Introduction to W3.CSS', {
    heroTagline: 'A modern, lightweight CSS framework with built-in responsiveness and zero JavaScript dependencies',
    introduction: 'W3.CSS is a modern, responsive, mobile-first CSS framework. W3.CSS provides equality for all browsers (Chrome, Edge, Firefox, Safari, Opera), is smaller and faster than other CSS frameworks, and is pure CSS (no JavaScript library required).',
    definition: {
      term: 'W3.CSS',
      explanation: 'A lightweight, mobile-first CSS stylesheet that speeds up web development with simple utility class names like w3-container, w3-card, and w3-teal.'
    },
    whyItMatters: 'W3.CSS is tiny (only ~30KB), easy to learn, doesn’t require any npm build setup or jQuery, and renders lightning-fast on mobile devices.',
    syntaxStructure: `<!-- W3.CSS CDN Link -->\n<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`,
    codeExample: `<!DOCTYPE html>\n<html>\n<title>W3.CSS Example</title>\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">\n<body>\n\n<div class="w3-container w3-teal">\n  <h1>My Car</h1>\n</div>\n\n<div class="w3-container">\n  <p>A car is a wheeled, self-powered motor vehicle used for transportation.</p>\n</div>\n\n</body>\n</html>`
  }),
  createStructuredLesson('w3css', 1, 'W3.CSS Basics', 2, 'W3.CSS Colors'),
  createStructuredLesson('w3css', 1, 'W3.CSS Basics', 3, 'W3.CSS Containers'),
  createStructuredLesson('w3css', 1, 'W3.CSS Basics', 4, 'W3.CSS Panels and Notes')
];

const module2Lessons = [
  createStructuredLesson('w3css', 2, 'Layout & Cards', 1, 'W3.CSS Cards', {
    heroTagline: 'Beautiful drop-shadow cards with w3-card and w3-card-4',
    introduction: 'The w3-card classes are suitable for displaying cards (like paper cards with subtle shadows).',
    syntaxStructure: `<div class="w3-card-4">\n  <header class="w3-container w3-blue"><h3>Header</h3></header>\n  <div class="w3-container"><p>Content</p></div>\n</div>`,
    codeExample: `<div class="w3-card-4 w3-margin" style="max-width:350px;">\n  <header class="w3-container w3-green">\n    <h3>Coding Vibes</h3>\n  </header>\n  <div class="w3-container w3-padding">\n    <p>Simple and clean paper-like card layout.</p>\n  </div>\n  <footer class="w3-container w3-light-grey w3-padding">\n    <button class="w3-button w3-green w3-round">Action</button>\n  </footer>\n</div>`
  }),
  createStructuredLesson('w3css', 2, 'Layout & Cards', 2, 'W3.CSS Borders and Padding'),
  createStructuredLesson('w3css', 2, 'Layout & Cards', 3, 'W3.CSS Responsive Grid System'),
  createStructuredLesson('w3css', 2, 'Layout & Cards', 4, 'W3.CSS Display and Position')
];

const module3Lessons = [
  createStructuredLesson('w3css', 3, 'UI Components', 1, 'W3.CSS Buttons', {
    heroTagline: 'Rectangular, rounded, ripple, and floating action buttons',
    introduction: 'The w3-button class provides a standard button. The w3-btn class provides a button with a default shadow and hover animation.',
    syntaxStructure: `<button class="w3-button w3-black w3-round">Button</button>`,
    codeExample: `<div class="w3-container w3-padding-16">\n  <button class="w3-button w3-teal w3-round w3-margin-right">Teal</button>\n  <button class="w3-button w3-red w3-round-large w3-margin-right">Red Rounded</button>\n  <button class="w3-button w3-black w3-hover-green w3-round">Hover Green</button>\n</div>`
  }),
  createStructuredLesson('w3css', 3, 'UI Components', 2, 'W3.CSS Tables'),
  createStructuredLesson('w3css', 3, 'UI Components', 3, 'W3.CSS Navigation Bars'),
  createStructuredLesson('w3css', 3, 'UI Components', 4, 'W3.CSS Modals and Popups')
];

const w3cssProjects: Project[] = [
  {
    id: 'proj-w3css-portfolio',
    title: 'Speed-Optimized Portfolio Page',
    slug: 'w3css-portfolio',
    category: 'html',
    difficulty: 'Beginner',
    description: 'Build an ultra-fast, zero-dependency personal developer portfolio utilizing pure W3.CSS containers, cards, responsive grids, and clean navigation.',
    skills: ['W3.CSS', 'Responsive Layout', 'Clean HTML', 'Fast Loading'],
    requirements: ['Mobile-first responsive grid', 'Photo card gallery with w3-card', 'Contact form styled with w3-input']
  }
];

export const w3cssCourse: Course = {
  id: 'course-w3css',
  slug: 'w3css',
  title: 'W3.CSS',
  tagline: 'Master the Ultra-Lightweight, Modern CSS Framework for Fast Responsive Websites',
  description: 'Learn W3.CSS: colors, containers, paper cards, buttons, responsive grids, navbars, and modal popups without any JavaScript bloat.',
  category: 'Web Development',
  difficulty: 'Beginner',
  status: 'Active',
  icon: 'Palette',
  badgeType: 'css',
  estimatedHours: 20,
  modulesCount: 3,
  lessonsCount: module1Lessons.length + module2Lessons.length + module3Lessons.length,
  modules: [
    { id: 'w3-m1', title: 'W3.CSS Basics', description: 'Setup, CDN, colors, containers, panels, and notes', order: 1, lessons: module1Lessons },
    { id: 'w3-m2', title: 'Layout & Cards', description: 'Cards, borders, padding, and the responsive 12-column grid', order: 2, lessons: module2Lessons },
    { id: 'w3-m3', title: 'UI Components', description: 'Buttons, tables, navigation bars, and modals', order: 3, lessons: module3Lessons }
  ],
  projects: w3cssProjects
};
