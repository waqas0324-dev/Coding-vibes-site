import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('howto', 1, 'Web Components', 1, 'How To Create a Website', {
    heroTagline: 'Step-by-step blueprint to build, style, and launch a modern website from scratch',
    introduction: 'Building a website requires three foundational web technologies: HTML for structural content, CSS for layout and visual styling, and JavaScript for interactivity and dynamic actions.',
    definition: {
      term: 'Website Architecture',
      explanation: 'The combined structure of HTML semantics, CSS visual stylesheets, and JavaScript client behavior that browsers render into an interactive user experience.'
    },
    syntaxStructure: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Website</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <header>Header Content</header>\n  <main>Main Content</main>\n  <footer>Footer Content</footer>\n</body>\n</html>`,
    codeExample: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { font-family: sans-serif; margin: 0; padding: 0; background: #f8fafc; }\n  header { background: #04AA6D; color: white; padding: 20px; text-align: center; }\n  .content { padding: 20px; max-width: 800px; margin: auto; }\n  footer { background: #282A35; color: white; text-align: center; padding: 12px; margin-top: 40px; }\n</style>\n</head>\n<body>\n  <header><h1>Coding Vibes</h1><p>Start Learning Today</p></header>\n  <div class="content">\n    <h2>Welcome to Web Development</h2>\n    <p>Learn HTML, CSS, JavaScript, Python, Java, and SQL with hands-on code examples.</p>\n  </div>\n  <footer>Coding Vibes &copy; 2026</footer>\n</body>\n</html>`
  }),
  createStructuredLesson('howto', 1, 'Web Components', 2, 'How To Create a Responsive Topnav'),
  createStructuredLesson('howto', 1, 'Web Components', 3, 'How To Create a Side Navigation Drawer'),
  createStructuredLesson('howto', 1, 'Web Components', 4, 'How To Create a Modal Dialog Box')
];

const module2Lessons = [
  createStructuredLesson('howto', 2, 'Forms & Interfaces', 1, 'How To Create a Login Form', {
    heroTagline: 'Build a secure, responsive, and accessible login form with modern validation',
    introduction: 'A login form allows users to enter credentials to authenticate their identity. Good UX requires clear labels, password masking, focus outlines, and submit states.',
    syntaxStructure: `<form action="/login" method="POST">\n  <label for="email">Email</label>\n  <input type="email" id="email" required>\n  <label for="pwd">Password</label>\n  <input type="password" id="pwd" required>\n  <button type="submit">Sign In</button>\n</form>`,
    codeExample: `<form style="max-width: 320px; margin: 20px auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; font-family: sans-serif; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">\n  <h3 style="margin-top:0; color:#111827;">Sign In</h3>\n  <label style="display:block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">Email address</label>\n  <input type="email" placeholder="you@example.com" style="width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; margin-bottom: 14px;">\n  <label style="display:block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">Password</label>\n  <input type="password" placeholder="••••••••" style="width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; margin-bottom: 18px;">\n  <button type="button" style="width: 100%; padding: 12px; background: #04AA6D; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Sign In</button>\n</form>`
  }),
  createStructuredLesson('howto', 2, 'Forms & Interfaces', 2, 'How To Create a Search Bar'),
  createStructuredLesson('howto', 2, 'Forms & Interfaces', 3, 'How To Toggle Dark Mode'),
  createStructuredLesson('howto', 2, 'Forms & Interfaces', 4, 'How To Create an Accordion')
];

const module3Lessons = [
  createStructuredLesson('howto', 3, 'Layouts & Menus', 1, 'How To Create a Sticky Header', {
    heroTagline: 'Keep navigation easily accessible at the top of the viewport when scrolling',
    introduction: 'A sticky header stays at the top of the screen when the user scrolls down the page, providing instant access to navigation links at all times.',
    syntaxStructure: `.sticky-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n}`,
    codeExample: `<div style="height: 180px; overflow-y: scroll; border: 1px solid #cbd5e1; border-radius: 8px;">\n  <div style="position: sticky; top: 0; background: #04AA6D; color: white; padding: 12px 16px; font-weight: bold;">Sticky Header Bar</div>\n  <div style="padding: 16px; font-family: sans-serif; line-height: 1.6;">\n    <p>Scroll down inside this box to see how the top bar sticks at the top!</p>\n    <p>Line 1: More content...</p>\n    <p>Line 2: More content...</p>\n    <p>Line 3: More content...</p>\n    <p>Line 4: More content...</p>\n  </div>\n</div>`
  }),
  createStructuredLesson('howto', 3, 'Layouts & Menus', 2, 'How To Build a Responsive Grid'),
  createStructuredLesson('howto', 3, 'Layouts & Menus', 3, 'How To Create an Image Slider'),
  createStructuredLesson('howto', 3, 'Layouts & Menus', 4, 'How To Build a Dropdown Menu')
];

const howtoProjects: Project[] = [
  {
    id: 'proj-howto-portal',
    title: 'Complete Component Library Cookbook',
    slug: 'howto-component-cookbook',
    category: 'html',
    difficulty: 'Intermediate',
    description: 'Build a live documentation portal showcasing interactive recipes: responsive headers, dark mode toggles, modals, and tabbed interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Responsive UX'],
    requirements: ['Interactive copy-code buttons', 'Live preview sandboxes', 'Light/Dark mode toggle recipe']
  }
];

export const howtoCourse: Course = {
  id: 'course-howto',
  slug: 'howto',
  title: 'How To',
  tagline: 'Practical Code Recipes and Step-by-Step UI Components for Modern Websites',
  description: 'Practical, copy-and-paste coding recipes: navbars, dropdowns, modals, accordions, search bars, dark mode, and responsive layouts.',
  category: 'Web Development',
  difficulty: 'Beginner',
  status: 'Active',
  icon: 'Compass',
  badgeType: 'html',
  estimatedHours: 20,
  modulesCount: 3,
  lessonsCount: module1Lessons.length + module2Lessons.length + module3Lessons.length,
  modules: [
    { id: 'howto-m1', title: 'Web Components', description: 'Create websites, responsive topbars, sidebars, and modals', order: 1, lessons: module1Lessons },
    { id: 'howto-m2', title: 'Forms & Interfaces', description: 'Login forms, search bars, dark mode toggles, and accordions', order: 2, lessons: module2Lessons },
    { id: 'howto-m3', title: 'Layouts & Menus', description: 'Sticky headers, responsive grids, image sliders, and dropdown menus', order: 3, lessons: module3Lessons }
  ],
  projects: howtoProjects
};
