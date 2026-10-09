// Learning roadmaps: step-by-step paths showing what to learn and in what order.
// Progress for each roadmap is tracked in localStorage under `cv-roadmap-{roadmapId}`.

export interface RoadmapStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;      // what to learn
  whyItMatters: string;     // why learn this
  estimatedTime: string;    // e.g. "2-3 weeks"
  courseId?: string;        // matches an active course id in src/data/courses/index.ts
  courseSlug?: string;      // slug used to navigate to the course detail page
  skills: string[];         // key skills in this step
  projectIds?: string[];    // linked project IDs
}

export interface Roadmap {
  id: string;               // 'frontend' | 'backend' | 'fullstack'
  title: string;
  description: string;
  icon: string;             // lucide icon name
  color: string;            // accent color
  totalTime: string;
  steps: RoadmapStep[];
}

export const roadmapStorageKey = (roadmapId: string): string => `cv-roadmap-${roadmapId}`;

export const roadmaps: Roadmap[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Master the browser. Learn to build beautiful, responsive interfaces users love — from your first HTML tag to production React apps.',
    icon: 'Monitor',
    color: '#38bdf8',
    totalTime: '4-6 months',
    steps: [
      {
        id: 'fe-1',
        stepNumber: 1,
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of every webpage: elements, attributes, headings, paragraphs, links, images, lists, tables, forms, and semantic HTML5 tags like header, main, and footer.',
        whyItMatters: 'HTML is the skeleton of the web. Every site, app, and email template starts here — you cannot move forward without it.',
        estimatedTime: '2-3 weeks',
        courseId: 'course-html',
        courseSlug: 'html',
        skills: ['Semantic tags', 'Forms', 'Tables', 'Links & images', 'Accessibility basics'],
      },
      {
        id: 'fe-2',
        stepNumber: 2,
        title: 'CSS Styling & Layout',
        description: 'Turn plain HTML into stunning designs. Learn selectors, the box model, Flexbox, Grid, responsive media queries, animations, and transitions.',
        whyItMatters: 'CSS decides how a site looks and feels. Flexbox and Grid are the #1 interview topics and the skills behind every modern layout.',
        estimatedTime: '3-4 weeks',
        courseId: 'course-css',
        courseSlug: 'css',
        skills: ['Flexbox', 'CSS Grid', 'Responsive design', 'Animations', 'Variables'],
      },
      {
        id: 'fe-3',
        stepNumber: 3,
        title: 'JavaScript Essentials',
        description: 'Add logic and interactivity: variables, functions, loops, arrays, objects, DOM manipulation, events, fetch and APIs, plus ES6+ features like arrow functions and destructuring.',
        whyItMatters: 'JavaScript runs every interactive website on earth. DOM and fetch skills are what turn a static page into a real app.',
        estimatedTime: '4-6 weeks',
        courseId: 'course-javascript',
        courseSlug: 'javascript',
        skills: ['DOM manipulation', 'Events', 'Fetch & APIs', 'ES6+ syntax', 'Local storage'],
      },
      {
        id: 'fe-4',
        stepNumber: 4,
        title: 'React & Components',
        description: 'Build component-based UIs with React: components, props, state, hooks (useState, useEffect), conditional rendering, and fetching data into your UI.',
        whyItMatters: 'React powers most modern web jobs. Component thinking and hooks are the core skills employers test for in frontend interviews.',
        estimatedTime: '5-6 weeks',
        courseId: 'course-react',
        courseSlug: 'react-js',
        skills: ['Components & props', 'State & hooks', 'useEffect', 'Forms handling', 'Routing basics'],
      },
      {
        id: 'fe-5',
        stepNumber: 5,
        title: 'Portfolio Projects',
        description: 'Prove your skills by building 3 real projects: a personal portfolio site, a multi-page business website, and a React task manager with local storage.',
        whyItMatters: 'Employers hire proof, not certificates. A portfolio of 3 polished projects is what turns your roadmap into job interviews.',
        estimatedTime: '3-4 weeks',
        skills: ['Project planning', 'Git basics', 'Deployment', 'UI polish'],
        projectIds: ['proj-html-3', 'proj-css-4', 'proj-react-todo'],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Learn how real services work: servers, databases, and APIs. Build the engine that powers every app behind the scenes.',
    icon: 'Server',
    color: '#a78bfa',
    totalTime: '3-5 months',
    steps: [
      {
        id: 'be-1',
        stepNumber: 1,
        title: 'JavaScript for the Backend',
        description: 'Reuse your JavaScript fundamentals with a server mindset: modules, asynchronous code, promises, async/await, error handling, and working with JSON.',
        whyItMatters: 'One language for frontend and backend. Async/await and JSON are the daily vocabulary of every API developer.',
        estimatedTime: '2-3 weeks',
        courseId: 'course-javascript',
        courseSlug: 'javascript',
        skills: ['Async/await', 'Promises', 'Modules', 'JSON', 'Error handling'],
      },
      {
        id: 'be-2',
        stepNumber: 2,
        title: 'Node.js & Servers',
        description: 'Understand how servers work: the request/response cycle, HTTP methods and status codes, and how to handle routes, middleware, and environment variables.',
        whyItMatters: 'Servers receive every request your frontend sends. Understanding HTTP is what separates a coder from a real backend developer.',
        estimatedTime: '3-4 weeks',
        skills: ['HTTP & REST', 'Request/response', 'Middleware concepts', 'Environment config'],
      },
      {
        id: 'be-3',
        stepNumber: 3,
        title: 'Databases with SQL',
        description: 'Learn relational databases: tables, SELECT queries, filtering, sorting, JOINs, INSERT/UPDATE/DELETE, and how apps store real data.',
        whyItMatters: 'Every app stores data. SQL is the most in-demand backend skill — even AI tools and analytics jobs ask for it.',
        estimatedTime: '3-4 weeks',
        courseId: 'course-sql',
        courseSlug: 'sql',
        skills: ['SELECT & WHERE', 'JOINs', 'Aggregations', 'Schema design', 'CRUD operations'],
        projectIds: ['proj-sql-store'],
      },
      {
        id: 'be-4',
        stepNumber: 4,
        title: 'API Projects',
        description: 'Put it together: design REST APIs, connect a database, validate inputs, handle errors, and document your endpoints. Build a task API and a products API.',
        whyItMatters: 'A working, documented API is your backend portfolio. It proves you can ship real services, not just tutorials.',
        estimatedTime: '3-4 weeks',
        skills: ['REST design', 'DB integration', 'Validation', 'API docs'],
      },
    ],
  },
  {
    id: 'fullstack',
    title: 'Fullstack Developer',
    description: 'The complete journey: build the interface, the server, and the database. Go from zero to a deployed app that real users can open.',
    icon: 'Layers',
    color: '#22c55e',
    totalTime: '6-9 months',
    steps: [
      {
        id: 'fs-1',
        stepNumber: 1,
        title: 'HTML Fundamentals',
        description: 'Learn the structure of every webpage: elements, semantic tags, forms, tables, links, and images.',
        whyItMatters: 'The foundation of the entire stack. Every fullstack project starts with well-structured markup.',
        estimatedTime: '2-3 weeks',
        courseId: 'course-html',
        courseSlug: 'html',
        skills: ['Semantic tags', 'Forms', 'Tables', 'Accessibility basics'],
      },
      {
        id: 'fs-2',
        stepNumber: 2,
        title: 'CSS Styling & Layout',
        description: 'Style your pages with selectors, the box model, Flexbox, Grid, responsive design, and animations.',
        whyItMatters: 'A fullstack developer ships pages people actually enjoy using — design skills make your apps stand out.',
        estimatedTime: '3-4 weeks',
        courseId: 'course-css',
        courseSlug: 'css',
        skills: ['Flexbox', 'CSS Grid', 'Responsive design', 'Animations'],
      },
      {
        id: 'fs-3',
        stepNumber: 3,
        title: 'JavaScript Essentials',
        description: 'Master variables, functions, DOM manipulation, events, fetch, and modern ES6+ syntax — the language of the whole stack.',
        whyItMatters: 'JavaScript connects your UI to your server. It is the single most useful language for a fullstack developer.',
        estimatedTime: '4-6 weeks',
        courseId: 'course-javascript',
        courseSlug: 'javascript',
        skills: ['DOM & events', 'Fetch & APIs', 'ES6+ syntax', 'Async patterns'],
      },
      {
        id: 'fs-4',
        stepNumber: 4,
        title: 'React Frontend',
        description: 'Build interactive UIs with components, props, hooks, and data fetching — the frontend half of your fullstack apps.',
        whyItMatters: 'React is the standard frontend for modern fullstack roles and pairs perfectly with a Node-style backend.',
        estimatedTime: '5-6 weeks',
        courseId: 'course-react',
        courseSlug: 'react-js',
        skills: ['Components & props', 'State & hooks', 'useEffect', 'Data fetching'],
      },
      {
        id: 'fs-5',
        stepNumber: 5,
        title: 'Node.js Backend',
        description: 'Create servers and REST APIs: HTTP fundamentals, routing, middleware, and handling requests and responses.',
        whyItMatters: 'This is the bridge step — your React frontend talks to your Node backend through the APIs you design here.',
        estimatedTime: '3-4 weeks',
        skills: ['HTTP & REST', 'Request/response', 'Middleware concepts', 'JSON APIs'],
      },
      {
        id: 'fs-6',
        stepNumber: 6,
        title: 'Databases with SQL',
        description: 'Store and query real data: SELECT, JOINs, aggregations, schema design, and CRUD operations.',
        whyItMatters: 'Persistent data is what makes an app real. SQL turns your API from a demo into a product.',
        estimatedTime: '3-4 weeks',
        courseId: 'course-sql',
        courseSlug: 'sql',
        skills: ['SELECT & JOINs', 'Schema design', 'CRUD operations', 'Aggregations'],
        projectIds: ['proj-sql-store'],
      },
      {
        id: 'fs-7',
        stepNumber: 7,
        title: 'Capstone Project',
        description: 'Build and deploy one complete app: React frontend, API backend, SQL database — planned, built, and shipped by you from start to finish.',
        whyItMatters: 'One finished, deployed project beats ten half-finished tutorials. This is the centerpiece of your portfolio.',
        estimatedTime: '4-6 weeks',
        skills: ['Fullstack architecture', 'Deployment', 'Git & version control', 'Documentation'],
        projectIds: ['proj-react-todo', 'proj-sql-store'],
      },
    ],
  },
];

export function getRoadmapById(id: string): Roadmap | undefined {
  return roadmaps.find(r => r.id === id);
}
