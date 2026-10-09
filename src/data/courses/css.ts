import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';
import {
  cssIntroContent,
  cssBoxModelContent,
  cssFlexboxContent
} from './cssContent';

const module1Lessons = [
  createStructuredLesson('css', 1, 'CSS Fundamentals', 1, 'Introduction to CSS'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 2, 'What is CSS?'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 3, 'Why CSS is Used'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 4, 'How CSS Works'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 5, 'CSS Syntax'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 6, 'CSS Rules'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 7, 'Inline CSS'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 8, 'Internal CSS'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 9, 'External CSS'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 10, 'Linking CSS'),
  createStructuredLesson('css', 1, 'CSS Fundamentals', 11, 'CSS Comments'),
];

const module2Lessons = [
  createStructuredLesson('css', 2, 'CSS Selectors', 1, 'Introduction to Selectors'),
  createStructuredLesson('css', 2, 'CSS Selectors', 2, 'Element Selector'),
  createStructuredLesson('css', 2, 'CSS Selectors', 3, 'Class Selector'),
  createStructuredLesson('css', 2, 'CSS Selectors', 4, 'ID Selector'),
  createStructuredLesson('css', 2, 'CSS Selectors', 5, 'Universal Selector'),
  createStructuredLesson('css', 2, 'CSS Selectors', 6, 'Group Selector'),
  createStructuredLesson('css', 2, 'CSS Selectors', 7, 'Attribute Selector'),
  createStructuredLesson('css', 2, 'CSS Selectors', 8, 'Descendant Selector'),
  createStructuredLesson('css', 2, 'CSS Selectors', 9, 'Child Selector'),
  createStructuredLesson('css', 2, 'CSS Selectors', 10, 'Pseudo-classes'),
  createStructuredLesson('css', 2, 'CSS Selectors', 11, 'Pseudo-elements'),
  createStructuredLesson('css', 2, 'CSS Selectors', 12, 'Selector Specificity'),
];

const module3Lessons = [
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 1, 'CSS Colors'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 2, 'Color Names'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 3, 'HEX Colors'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 4, 'RGB Colors'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 5, 'RGBA Colors'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 6, 'HSL Colors'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 7, 'Background Color'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 8, 'Background Image'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 9, 'Background Size'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 10, 'Background Position'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 11, 'Background Repeat'),
  createStructuredLesson('css', 3, 'Colors and Backgrounds', 12, 'CSS Gradients'),
];

const module4Lessons = [
  createStructuredLesson('css', 4, 'Text and Fonts', 1, 'Text Color'),
  createStructuredLesson('css', 4, 'Text and Fonts', 2, 'Text Alignment'),
  createStructuredLesson('css', 4, 'Text and Fonts', 3, 'Text Decoration'),
  createStructuredLesson('css', 4, 'Text and Fonts', 4, 'Text Transformation'),
  createStructuredLesson('css', 4, 'Text and Fonts', 5, 'Letter Spacing'),
  createStructuredLesson('css', 4, 'Text and Fonts', 6, 'Word Spacing'),
  createStructuredLesson('css', 4, 'Text and Fonts', 7, 'Line Height'),
  createStructuredLesson('css', 4, 'Text and Fonts', 8, 'Font Size'),
  createStructuredLesson('css', 4, 'Text and Fonts', 9, 'Font Family'),
  createStructuredLesson('css', 4, 'Text and Fonts', 10, 'Font Weight'),
  createStructuredLesson('css', 4, 'Text and Fonts', 11, 'Font Style'),
  createStructuredLesson('css', 4, 'Text and Fonts', 12, 'Web Fonts'),
];

const module5Lessons = [
  createStructuredLesson('css', 5, 'CSS Box Model', 1, 'Introduction to Box Model'),
  createStructuredLesson('css', 5, 'CSS Box Model', 2, 'Width'),
  createStructuredLesson('css', 5, 'CSS Box Model', 3, 'Height'),
  createStructuredLesson('css', 5, 'CSS Box Model', 4, 'Padding'),
  createStructuredLesson('css', 5, 'CSS Box Model', 5, 'Border'),
  createStructuredLesson('css', 5, 'CSS Box Model', 6, 'Margin'),
  createStructuredLesson('css', 5, 'CSS Box Model', 7, 'Border Radius'),
  createStructuredLesson('css', 5, 'CSS Box Model', 8, 'Box Sizing'),
  createStructuredLesson('css', 5, 'CSS Box Model', 9, 'Box Shadow'),
  createStructuredLesson('css', 5, 'CSS Box Model', 10, 'Overflow'),
];

const module6Lessons = [
  createStructuredLesson('css', 6, 'Display and Positioning', 1, 'Display Property'),
  createStructuredLesson('css', 6, 'Display and Positioning', 2, 'Block'),
  createStructuredLesson('css', 6, 'Display and Positioning', 3, 'Inline'),
  createStructuredLesson('css', 6, 'Display and Positioning', 4, 'Inline-block'),
  createStructuredLesson('css', 6, 'Display and Positioning', 5, 'None'),
  createStructuredLesson('css', 6, 'Display and Positioning', 6, 'Visibility'),
  createStructuredLesson('css', 6, 'Display and Positioning', 7, 'Position'),
  createStructuredLesson('css', 6, 'Display and Positioning', 8, 'Relative'),
  createStructuredLesson('css', 6, 'Display and Positioning', 9, 'Absolute'),
  createStructuredLesson('css', 6, 'Display and Positioning', 10, 'Fixed'),
  createStructuredLesson('css', 6, 'Display and Positioning', 11, 'Sticky'),
  createStructuredLesson('css', 6, 'Display and Positioning', 12, 'Z-index'),
];

const module7Lessons = [
  createStructuredLesson('css', 7, 'Flexbox', 1, 'Introduction to Flexbox'),
  createStructuredLesson('css', 7, 'Flexbox', 2, 'Flex Container'),
  createStructuredLesson('css', 7, 'Flexbox', 3, 'Flex Direction'),
  createStructuredLesson('css', 7, 'Flexbox', 4, 'Justify Content'),
  createStructuredLesson('css', 7, 'Flexbox', 5, 'Align Items'),
  createStructuredLesson('css', 7, 'Flexbox', 6, 'Align Content'),
  createStructuredLesson('css', 7, 'Flexbox', 7, 'Flex Wrap'),
  createStructuredLesson('css', 7, 'Flexbox', 8, 'Gap'),
  createStructuredLesson('css', 7, 'Flexbox', 9, 'Flex Grow'),
  createStructuredLesson('css', 7, 'Flexbox', 10, 'Flex Shrink'),
  createStructuredLesson('css', 7, 'Flexbox', 11, 'Flex Basis'),
  createStructuredLesson('css', 7, 'Flexbox', 12, 'Building Layouts with Flexbox'),
];

const module8Lessons = [
  createStructuredLesson('css', 8, 'CSS Grid', 1, 'Introduction to CSS Grid'),
  createStructuredLesson('css', 8, 'CSS Grid', 2, 'Grid Container'),
  createStructuredLesson('css', 8, 'CSS Grid', 3, 'Grid Columns'),
  createStructuredLesson('css', 8, 'CSS Grid', 4, 'Grid Rows'),
  createStructuredLesson('css', 8, 'CSS Grid', 5, 'Grid Gap'),
  createStructuredLesson('css', 8, 'CSS Grid', 6, 'Grid Areas'),
  createStructuredLesson('css', 8, 'CSS Grid', 7, 'Grid Template'),
  createStructuredLesson('css', 8, 'CSS Grid', 8, 'Responsive Grid'),
  createStructuredLesson('css', 8, 'CSS Grid', 9, 'Grid Cards'),
  createStructuredLesson('css', 8, 'CSS Grid', 10, 'Complete Grid Layout'),
];

const module9Lessons = [
  createStructuredLesson('css', 9, 'Responsive Design', 1, 'What is Responsive Design?'),
  createStructuredLesson('css', 9, 'Responsive Design', 2, 'Why Responsive Design Matters'),
  createStructuredLesson('css', 9, 'Responsive Design', 3, 'Mobile-first Design'),
  createStructuredLesson('css', 9, 'Responsive Design', 4, 'Media Queries'),
  createStructuredLesson('css', 9, 'Responsive Design', 5, 'Breakpoints'),
  createStructuredLesson('css', 9, 'Responsive Design', 6, 'Responsive Typography'),
  createStructuredLesson('css', 9, 'Responsive Design', 7, 'Responsive Images'),
  createStructuredLesson('css', 9, 'Responsive Design', 8, 'Responsive Navigation'),
  createStructuredLesson('css', 9, 'Responsive Design', 9, 'Responsive Cards'),
  createStructuredLesson('css', 9, 'Responsive Design', 10, 'Responsive Forms'),
  createStructuredLesson('css', 9, 'Responsive Design', 11, 'Responsive Layout'),
  createStructuredLesson('css', 9, 'Responsive Design', 12, 'Mobile Navigation'),
  createStructuredLesson('css', 9, 'Responsive Design', 13, 'Tablet Layout'),
  createStructuredLesson('css', 9, 'Responsive Design', 14, 'Desktop Layout'),
];

const module10Lessons = [
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 1, 'CSS Variables'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 2, 'Transitions'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 3, 'Transform'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 4, 'Animations'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 5, 'CSS Functions'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 6, 'Advanced Selectors'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 7, 'Reusable CSS'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 8, 'CSS Organization'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 9, 'Accessibility-friendly Styling'),
  createStructuredLesson('css', 10, 'Advanced CSS and Projects', 10, 'Performance-friendly CSS'),
];

const cssProjects: Project[] = [
  {
    id: 'proj-css-1',
    title: 'Profile Card',
    slug: 'profile-card',
    category: 'css',
    difficulty: 'Beginner',
    description: 'Style a modern, sleek developer profile card with custom shadows, border gradients, avatar frame, and hover effects.',
    skills: ['Box Model', 'Border Radius', 'Box Shadows', 'Flexbox centering', 'Hover Transitions'],
    requirements: ['Centered card layout', 'Avatar image with border-radius', 'Follow/Message action buttons', 'Smooth transition on hover'],
    instructions: ['Use flexbox to align card contents', 'Apply border-radius and box-shadow for depth', 'Add subtle hover transform effects'],
    starterFiles: {
      html: `<div class="card">\n  <div class="avatar">👨‍💻</div>\n  <h2>Sarah Jenkins</h2>\n  <p class="role">UI/UX Designer & Coder</p>\n  <div class="stats">\n    <div><strong>12k</strong><span>Followers</span></div>\n    <div><strong>48</strong><span>Projects</span></div>\n  </div>\n  <button class="btn">Connect</button>\n</div>`,
      css: `body { background: #080d14; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }\n.card { background: #0f172a; padding: 24px; border-radius: 16px; border: 1px solid #1e293b; color: white; text-align: center; width: 280px; transition: transform 0.2s ease; }\n.card:hover { transform: translateY(-4px); border-color: #22c55e; }\n.avatar { font-size: 48px; margin-bottom: 12px; }\n.role { color: #94a3b8; font-size: 14px; margin-bottom: 20px; }\n.stats { display: flex; justify-content: space-around; margin-bottom: 20px; padding: 12px; background: #080d14; border-radius: 8px; }\n.stats div { display: flex; flex-direction: column; }\n.stats span { font-size: 12px; color: #64748b; }\n.btn { width: 100%; background: #22c55e; color: black; border: none; padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer; }`
    },
    expectedResult: 'A responsive developer card with hover animations.'
  },
  {
    id: 'proj-css-2',
    title: 'Login Form',
    slug: 'css-login-form',
    category: 'css',
    difficulty: 'Beginner',
    description: 'Style a dark-themed user login interface with focus states, floating labels, custom checkboxes, and responsive buttons.',
    skills: ['Form Styling', 'Input Focus States', 'Custom Buttons', 'Dark Theme Aesthetics'],
    requirements: ['Dark background', 'Glow effects on input focus', 'Accessible contrast'],
    instructions: ['Build modern input styles with custom focus outline and transitions.'],
    starterFiles: { html: `<div class="login-box"><h2>Welcome Back</h2><input type="text" placeholder="Email"><input type="password" placeholder="Password"><button>Sign In</button></div>` },
    expectedResult: 'A modern polished login screen.'
  },
  {
    id: 'proj-css-3',
    title: 'Pricing Cards',
    slug: 'pricing-cards',
    category: 'css',
    difficulty: 'Intermediate',
    description: 'Create a 3-tier responsive subscription pricing table highlighting a "Popular" tier with accent glow and feature checklist.',
    skills: ['Flexbox / Grid', 'Visual Hierarchy', 'Badges', 'Responsive Layout'],
    requirements: ['3 cards (Basic, Pro, Enterprise)', 'Pro tier highlighted with green accent border', 'Feature checkmarks'],
    instructions: ['Use CSS Grid or Flexbox to place cards in a row on desktop and stack on mobile.'],
    starterFiles: { html: `<div class="pricing-grid"><div class="card"><h3>Starter</h3></div><div class="card popular"><h3>Pro</h3></div><div class="card"><h3>Team</h3></div></div>` },
    expectedResult: 'A 3-column responsive pricing grid with highlighted cards.'
  },
  {
    id: 'proj-css-4',
    title: 'Responsive Navbar',
    slug: 'responsive-navbar',
    category: 'css',
    difficulty: 'Intermediate',
    description: 'Build a flexible navigation bar with logo, horizontal links on desktop, and a mobile hamburger drawer.',
    skills: ['Media Queries', 'Flexbox Navbar', 'Mobile Menu', 'Sticky Header'],
    requirements: ['Sticky top navbar', 'Logo left, links right', 'Responsive breakpoint at 768px'],
    instructions: ['Style desktop navigation and collapse into a toggleable view on mobile screens.'],
    starterFiles: { html: `<nav class="navbar"><div class="logo">Coding Vibes</div><ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tutorials</a></li><li><a href="#">Courses</a></li></ul></nav>` },
    expectedResult: 'A sticky responsive navigation bar with clean link hover states.'
  },
  {
    id: 'proj-css-5',
    title: 'Responsive Sidebar',
    slug: 'responsive-sidebar',
    category: 'css',
    difficulty: 'Intermediate',
    description: 'Design a collapsible learning navigation sidebar matching the Coding Vibes layout with category headers and badge pills.',
    skills: ['Sidebar Layout', 'Overflow Scroll', 'Active States', 'Icon Alignments'],
    requirements: ['Left-aligned fixed sidebar', 'Category groupings', 'Green active indicator'],
    instructions: ['Create custom scrollbar and active link highlight styling.'],
    starterFiles: { html: `<aside class="sidebar"><div class="heading">LEARN</div><a class="item active">HTML</a><a class="item">CSS</a></aside>` },
    expectedResult: 'A sleek, themed dark sidebar with hover and active states.'
  },
  {
    id: 'proj-css-6',
    title: 'Landing Page',
    slug: 'landing-page',
    category: 'css',
    difficulty: 'Intermediate',
    description: 'Style a complete tech product landing page with hero banner, 4-column feature grid, testimonials, and CTA section.',
    skills: ['CSS Grid', 'Typography Pairing', 'Hero Section', 'Button Hierarchy'],
    requirements: ['Hero section with primary & secondary buttons', '4-card feature showcase', 'Footer with social links'],
    instructions: ['Assemble a full page layout using CSS Grid and Flexbox.'],
    starterFiles: { html: `<section class="hero"><h1>Build the Future</h1><p>Learn coding step by step.</p></section>` },
    expectedResult: 'A visually rich product landing page.'
  },
  {
    id: 'proj-css-7',
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    category: 'css',
    difficulty: 'Intermediate',
    description: 'Construct a multi-section personal developer portfolio with about section, project grid, skills tags, and contact form.',
    skills: ['Bento Grid', 'Tag Pills', 'Project Cards', 'Dark Minimalist Theme'],
    requirements: ['Grid-based project showcase', 'Skill badges with hover effects', 'Fully responsive layout'],
    instructions: ['Build a personal portfolio showcasing your skills.'],
    starterFiles: { html: `<header><h1>Dev Name</h1></header><section class="projects"><div class="project-card">App 1</div></section>` },
    expectedResult: 'A complete developer portfolio with bento grid cards.'
  },
  {
    id: 'proj-css-8',
    title: 'Dashboard UI',
    slug: 'dashboard-ui',
    category: 'css',
    difficulty: 'Advanced',
    description: 'Design an analytics and learning dashboard UI with stats widgets, progress rings, recent activity list, and quick actions.',
    skills: ['CSS Grid Dashboard', 'Card Components', 'Progress Bars', 'Metric Cards'],
    requirements: ['Sidebar + Main content layout', 'Metric tiles', 'Recent lesson table'],
    instructions: ['Implement a grid-based dashboard interface with clean data hierarchy.'],
    starterFiles: { html: `<div class="dashboard"><div class="metric"><h3>78%</h3><p>Course Complete</p></div></div>` },
    expectedResult: 'An analytics dashboard with dark cards and green indicators.'
  },
  {
    id: 'proj-css-9',
    title: 'Responsive Homepage',
    slug: 'responsive-homepage',
    category: 'css',
    difficulty: 'Intermediate',
    description: 'Recreate a high-fidelity homepage layout featuring fluid typography, responsive hero illustrations, and multi-tier grids.',
    skills: ['Fluid Typography', 'Container Queries / Media Queries', 'Responsive Images'],
    requirements: ['Mobile, tablet, and desktop responsive layouts', 'Clean whitespace hierarchy'],
    instructions: ['Write mobile-first media queries to seamlessly adapt screen sizes.'],
    starterFiles: { html: `<main class="home-container"><section class="hero"><h1>Learn Code</h1></section></main>` },
    expectedResult: 'A fluid responsive homepage.'
  },
  {
    id: 'proj-css-10',
    title: 'Complete Responsive Website',
    slug: 'complete-responsive-website',
    category: 'css',
    difficulty: 'Advanced',
    description: 'Assemble a production-ready website with responsive navigation, hero banner, interactive tabs, cards grid, and footer.',
    skills: ['Full Page Responsive Architecture', 'CSS Variables', 'Animations', 'Design System'],
    requirements: ['Cohesive color system with CSS variables', 'Smooth page transitions', 'Clean mobile navigation'],
    instructions: ['Build a complete production-grade responsive website.'],
    starterFiles: { html: `<div class="site-wrapper"><header>Header</header><main>Main Content</main><footer>Footer</footer></div>` },
    expectedResult: 'A complete responsive multi-section website.'
  }
];

export const cssCourse: Course = {
  id: 'course-css',
  slug: 'css',
  title: 'CSS',
  tagline: 'Style, Layout, and Responsive Design',
  description: 'Master CSS from syntax and selectors to modern Flexbox, CSS Grid, animations, and mobile-first responsive architecture.',
  category: 'Web Development',
  difficulty: 'Beginner',
  status: 'Active',
  icon: 'Css3',
  badgeType: 'css',
  estimatedHours: 24,
  modulesCount: 10,
  lessonsCount: 115,
  modules: [
    { id: 'css-m1', title: 'CSS Fundamentals', description: 'CSS rules, inline vs internal vs external, linking stylesheets, and syntax.', order: 1, lessons: module1Lessons },
    { id: 'css-m2', title: 'CSS Selectors', description: 'Element, class, ID, attribute, combinators, pseudo-classes, and specificity.', order: 2, lessons: module2Lessons },
    { id: 'css-m3', title: 'Colors and Backgrounds', description: 'HEX, RGB, HSL, background images, gradients, sizes, and repeat rules.', order: 3, lessons: module3Lessons },
    { id: 'css-m4', title: 'Text and Fonts', description: 'Web fonts, typography hierarchy, letter spacing, line height, and font pairings.', order: 4, lessons: module4Lessons },
    { id: 'css-m5', title: 'CSS Box Model', description: 'Margin, border, padding, content, box-sizing: border-box, and shadows.', order: 5, lessons: module5Lessons },
    { id: 'css-m6', title: 'Display and Positioning', description: 'Block, inline, relative, absolute, fixed, sticky, and z-index stacking context.', order: 6, lessons: module6Lessons },
    { id: 'css-m7', title: 'Flexbox', description: 'One-dimensional layouts, flex-direction, justify-content, align-items, gap, and flex wrap.', order: 7, lessons: module7Lessons },
    { id: 'css-m8', title: 'CSS Grid', description: 'Two-dimensional grid layouts, template columns/rows, fr units, minmax, and grid areas.', order: 8, lessons: module8Lessons },
    { id: 'css-m9', title: 'Responsive Design', description: 'Media queries, mobile-first breakpoints, fluid typography, and responsive menus.', order: 9, lessons: module9Lessons },
    { id: 'css-m10', title: 'Advanced CSS and Projects', description: 'CSS variables, keyframe animations, transitions, transformations, and 10 real projects.', order: 10, lessons: module10Lessons },
  ],
  projects: cssProjects
};
