import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('bootstrap', 1, 'Bootstrap 5 Basics', 1, 'Introduction to Bootstrap', {
    heroTagline: 'Build fast, responsive sites with the world’s most popular frontend open-source toolkit',
    introduction: 'Bootstrap 5 is the newest version of Bootstrap; with new components, faster stylesheet, responsive 12-column grid, and vanilla JavaScript without any jQuery dependency.',
    definition: {
      term: 'Bootstrap 5',
      explanation: 'The modern major release of Bootstrap, designed with vanilla JavaScript, CSS custom properties (variables), and an enhanced 12-column responsive grid.'
    },
    whyItMatters: 'Bootstrap guarantees cross-browser responsiveness and saves thousands of development hours when structuring dashboards, marketing pages, and enterprise SaaS tools.',
    syntaxStructure: `<!-- Bootstrap 5 CDN Link -->\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 5 Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Bootstrap makes responsive web development faster and easier.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Clean utility classes format containers, spacing, and typography.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Works across all modern browsers and viewport sizes.</p>
    </div>
  </div>
</div>

</body>
</html>`
  }),
  createStructuredLesson('bootstrap', 1, 'Bootstrap 5 Basics', 2, 'Bootstrap Containers', {
    heroTagline: 'The most basic layout element required when using the grid system',
    introduction: 'Containers are used to pad content inside of them, and there are two container classes available in Bootstrap 5: .container (fixed responsive width) and .container-fluid (full 100% width).',
    definition: {
      term: '.container vs .container-fluid',
      explanation: '.container provides a responsive fixed-width container, while .container-fluid expands to 100% of the viewport width at all screen sizes.'
    },
    syntaxStructure: `<div class="container">\n  <h1>Fixed Container</h1>\n</div>\n\n<div class="container-fluid">\n  <h1>Fluid Container</h1>\n</div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Containers</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container p-5 my-5 border">
  <h2>My First Bootstrap Page</h2>
  <p>This part is inside a .container class.</p>
  <p>The .container class provides a responsive fixed width container.</p>
</div>

<div class="container-fluid p-5 my-5 bg-dark text-white">
  <h2>My First Bootstrap Page</h2>
  <p>This part is inside a .container-fluid class.</p>
  <p>The .container-fluid class provides a full width container, spanning the entire width of the viewport.</p>
</div>

</body>
</html>`
  }),
  createStructuredLesson('bootstrap', 1, 'Bootstrap 5 Basics', 3, 'Bootstrap Grid System', {
    heroTagline: 'Mastering Bootstrap Grid System in modern web development',
    introduction: 'Bootstrap’s grid system is built with flexbox and allows up to 12 columns across the page. If you do not want to use all 12 columns individually, you can group the columns together to create wider columns.',
    definition: {
      term: '12-Column Grid',
      explanation: 'A flexible layout system that divides horizontal screen space into 12 proportional columns with breakpoints: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), and xxl (≥1400px).'
    },
    whyItMatters: 'Grid layout is the backbone of all modern responsive websites, ensuring cards and columns stack vertically on phones and align horizontally on laptops.',
    syntaxStructure: `<div class="container">\n  <div class="row">\n    <div class="col-sm-4">Column 1</div>\n    <div class="col-sm-4">Column 2</div>\n    <div class="col-sm-4">Column 3</div>\n  </div>\n</div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 5 Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
</div>

</body>
</html>`
  }),
  createStructuredLesson('bootstrap', 1, 'Bootstrap 5 Basics', 4, 'Bootstrap Typography', {
    heroTagline: 'Default styling for headings, paragraphs, display classes, and lead text',
    introduction: 'Bootstrap 5 sets default styles for headings, body text, and links. It also provides display headings (.display-1 through .display-6) for prominent headlines.',
    syntaxStructure: `<h1 class="display-1">Display 1</h1>\n<p class="lead">This is a lead paragraph.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Typography</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-4">
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-4">Display 4</h1>
  <p class="lead">This is a lead paragraph. It stands out from regular paragraphs with larger font size and lighter weight.</p>
  <p>Use the mark element to <mark>highlight</mark> text.</p>
  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
  <blockquote class="blockquote">
    <p>For 50 years, WWF has been protecting the future of nature.</p>
    <footer class="blockquote-footer">From WWF's website</footer>
  </blockquote>
</div>

</body>
</html>`
  }),
  createStructuredLesson('bootstrap', 1, 'Bootstrap 5 Basics', 5, 'Bootstrap Colors and Backgrounds', {
    heroTagline: 'Contextual text and background color utility classes',
    introduction: 'Bootstrap 5 has contextual classes for text colors and background colors: primary, secondary, success, danger, warning, info, light, and dark.',
    syntaxStructure: `<p class="text-success">Success text</p>\n<div class="bg-primary text-white">Primary background</div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Colors</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-4">
  <h2>Contextual Colors</h2>
  <p class="text-muted">This text is muted.</p>
  <p class="text-primary">This text is important (primary).</p>
  <p class="text-success">This text indicates success.</p>
  <p class="text-info">This text represents some information.</p>
  <p class="text-warning">This text represents a warning.</p>
  <p class="text-danger">This text represents danger.</p>
  
  <h2 class="mt-4">Background Colors</h2>
  <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
  <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
  <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
  <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
  <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
</div>

</body>
</html>`
  })
];

const module2Lessons = [
  createStructuredLesson('bootstrap', 2, 'UI Components', 1, 'Bootstrap Tables', {
    heroTagline: 'Clean, striped, hoverable, and responsive data tables',
    introduction: 'A basic Bootstrap table has a light padding and horizontal dividers. The .table class adds basic styling to a table.',
    syntaxStructure: `<table class="table table-striped table-hover">\n  <thead>...</thead>\n  <tbody>...</tbody>\n</table>`,
    codeExample: `<table class="table table-bordered table-striped">\n  <thead class="table-dark">\n    <tr><th>Firstname</th><th>Lastname</th><th>Course</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Ali</td><td>Raza</td><td>Bootstrap 5</td></tr>\n    <tr><td>Sara</td><td>Ahmed</td><td>JavaScript</td></tr>\n  </tbody>\n</table>`
  }),
  createStructuredLesson('bootstrap', 2, 'UI Components', 2, 'Bootstrap Images & Figures'),
  createStructuredLesson('bootstrap', 2, 'UI Components', 3, 'Bootstrap Alerts'),
  createStructuredLesson('bootstrap', 2, 'UI Components', 4, 'Bootstrap Buttons & Button Groups'),
  createStructuredLesson('bootstrap', 2, 'UI Components', 5, 'Bootstrap Badges & Progress Bars')
];

const module3Lessons = [
  createStructuredLesson('bootstrap', 3, 'Cards & Navigation', 1, 'Bootstrap Cards', {
    heroTagline: 'Flexible and extensible content containers with headers, footers, and body content',
    introduction: 'A card in Bootstrap is a bordered box with some padding around its content. It includes options for headers, footers, content, colors, and responsive layouts.',
    syntaxStructure: `<div class="card">\n  <div class="card-header">Header</div>\n  <div class="card-body">Content</div>\n  <div class="card-footer">Footer</div>\n</div>`,
    codeExample: `<div class="card shadow-sm" style="max-width: 320px;">\n  <div class="card-body">\n    <h5 class="card-title text-success">Coding Vibes</h5>\n    <p class="card-text">Learn to code with live interactive examples and quizzes.</p>\n    <a href="#" class="btn btn-primary">Start Learning</a>\n  </div>\n</div>`
  }),
  createStructuredLesson('bootstrap', 3, 'Cards & Navigation', 2, 'Bootstrap Dropdowns'),
  createStructuredLesson('bootstrap', 3, 'Cards & Navigation', 3, 'Bootstrap Navs and Tabs'),
  createStructuredLesson('bootstrap', 3, 'Cards & Navigation', 4, 'Bootstrap Navbars')
];

const module4Lessons = [
  createStructuredLesson('bootstrap', 4, 'Interactive Plugins', 1, 'Bootstrap Carousel', {
    heroTagline: 'Slideshow component for cycling through images and text slides',
    introduction: 'The Carousel is a slideshow for cycling through elements, like a carousel (a rotating display of photos).',
    syntaxStructure: `<div id="demo" class="carousel slide" data-bs-ride="carousel">\n  <!-- Indicators/dots, Slides, Controls -->\n</div>`,
    codeExample: `<div class="p-3 bg-light text-center border rounded">\n  <h5>Interactive Bootstrap Carousel Slide</h5>\n  <p class="text-muted">Built with pure CSS & Bootstrap JavaScript components.</p>\n  <button class="btn btn-outline-primary">Slide Next &raquo;</button>\n</div>`
  }),
  createStructuredLesson('bootstrap', 4, 'Interactive Plugins', 2, 'Bootstrap Modals'),
  createStructuredLesson('bootstrap', 4, 'Interactive Plugins', 3, 'Bootstrap Tooltips and Popovers'),
  createStructuredLesson('bootstrap', 4, 'Interactive Plugins', 4, 'Bootstrap Offcanvas')
];

const bootstrapProjects: Project[] = [
  {
    id: 'proj-bootstrap-admin',
    title: 'Responsive Admin Dashboard UI',
    slug: 'bootstrap-admin-dashboard',
    category: 'html',
    difficulty: 'Intermediate',
    description: 'Construct a responsive multi-page admin analytics dashboard utilizing Bootstrap 5 grid, stats cards, data tables, modal dialogs, and top navigation bar.',
    skills: ['Bootstrap 5', 'Grid System', 'Cards', 'Responsive Breakpoints', 'Modals'],
    requirements: ['Responsive sidebar and top navbar', 'Metric counter cards with badges', 'Sortable striped data table']
  }
];

export const bootstrapCourse: Course = {
  id: 'course-bootstrap',
  slug: 'bootstrap',
  title: 'Bootstrap',
  tagline: 'Master the World’s Most Popular Responsive Frontend UI Toolkit',
  description: 'Learn Bootstrap 5: the 12-column grid system, typography, tables, cards, alerts, modals, navbars, and utilities with live interactive browser previews.',
  category: 'Web Development',
  difficulty: 'Beginner',
  status: 'Active',
  icon: 'Layout',
  badgeType: 'default',
  estimatedHours: 25,
  modulesCount: 4,
  lessonsCount: module1Lessons.length + module2Lessons.length + module3Lessons.length + module4Lessons.length,
  modules: [
    { id: 'bs-m1', title: 'Bootstrap 5 Basics', description: 'Setup, CDN, containers, 12-column grid, typography, and colors', order: 1, lessons: module1Lessons },
    { id: 'bs-m2', title: 'UI Elements', description: 'Tables, images, alerts, buttons, badges, and progress bars', order: 2, lessons: module2Lessons },
    { id: 'bs-m3', title: 'Cards & Navigation', description: 'Cards, dropdowns, tabs, and responsive navbars', order: 3, lessons: module3Lessons },
    { id: 'bs-m4', title: 'Interactive Plugins', description: 'Carousels, modal dialogs, tooltips, and offcanvas drawers', order: 4, lessons: module4Lessons }
  ],
  projects: bootstrapProjects
};
