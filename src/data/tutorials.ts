export interface TutorialTopic {
  id: string;
  category: 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'Tailwind CSS';
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  lessonsCount: number;
  badgeType: 'html' | 'css' | 'js' | 'react' | 'tailwind';
  readTime: string;
  courseSlug: string;
  startLessonSlug: string;
}

export const tutorialsCatalog: TutorialTopic[] = [
  {
    id: 'tut-html-crash',
    category: 'HTML',
    title: 'HTML Crash Course',
    description: 'Learn the basics of HTML and build your first web page with clean semantic markup.',
    difficulty: 'Beginner',
    lessonsCount: 12,
    badgeType: 'html',
    readTime: '25 mins',
    courseSlug: 'html',
    startLessonSlug: 'introduction-to-html'
  },
  {
    id: 'tut-css-flexbox',
    category: 'CSS',
    title: 'CSS Flexbox Guide',
    description: 'Master Flexbox to create modern and responsive layouts effortlessly.',
    difficulty: 'Intermediate',
    lessonsCount: 10,
    badgeType: 'css',
    readTime: '20 mins',
    courseSlug: 'css',
    startLessonSlug: 'introduction-to-flexbox'
  },
  {
    id: 'tut-js-basics',
    category: 'JavaScript',
    title: 'JavaScript Basics',
    description: 'Start your JavaScript journey and make your websites dynamic and interactive.',
    difficulty: 'Beginner',
    lessonsCount: 15,
    badgeType: 'js',
    readTime: '30 mins',
    courseSlug: 'javascript',
    startLessonSlug: 'introduction-to-javascript'
  },
  {
    id: 'tut-react-overview',
    category: 'React',
    title: 'React JS Overview',
    description: 'Introduction to React components, props, hooks, state, and building your first React app.',
    difficulty: 'Intermediate',
    lessonsCount: 14,
    badgeType: 'react',
    readTime: '35 mins',
    courseSlug: 'courses',
    startLessonSlug: 'react-js'
  },
  {
    id: 'tut-html-forms',
    category: 'HTML',
    title: 'HTML Forms & Inputs',
    description: 'Master inputs, buttons, checkboxes, dropdowns, and form validation constraints.',
    difficulty: 'Beginner',
    lessonsCount: 19,
    badgeType: 'html',
    readTime: '28 mins',
    courseSlug: 'html',
    startLessonSlug: 'introduction-to-forms'
  },
  {
    id: 'tut-css-grid',
    category: 'CSS',
    title: 'CSS Grid Deep Dive',
    description: 'Create sophisticated 2D layouts using grid templates, tracks, areas, and auto-fit.',
    difficulty: 'Intermediate',
    lessonsCount: 10,
    badgeType: 'css',
    readTime: '22 mins',
    courseSlug: 'css',
    startLessonSlug: 'introduction-to-css-grid'
  },
  {
    id: 'tut-js-dom',
    category: 'JavaScript',
    title: 'DOM Manipulation & Events',
    description: 'Select elements, listen to events, update styles, and build dynamic UI interactions.',
    difficulty: 'Beginner',
    lessonsCount: 12,
    badgeType: 'js',
    readTime: '25 mins',
    courseSlug: 'javascript',
    startLessonSlug: 'what-is-the-dom'
  }
];
