import { PracticeQuestion } from '../types';

export interface PracticeExercise {
  id: string;
  course: 'html' | 'css' | 'javascript';
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  question: PracticeQuestion;
}

export const practiceCatalog: PracticeExercise[] = [
  {
    id: 'pr-html-1',
    course: 'html',
    title: 'HTML5 Boilerplate Structure',
    difficulty: 'Beginner',
    category: 'HTML Fundamentals',
    question: {
      id: 'pr-html-1-q',
      type: 'multiple_choice',
      question: 'Which tag is used to specify the root element of an entire HTML page?',
      options: ['<body>', '<main>', '<html>', '<document>'],
      correctAnswer: 2,
      explanation: 'The <html> element represents the root of an HTML document, enclosing both the <head> and <body>.'
    }
  },
  {
    id: 'pr-html-2',
    course: 'html',
    title: 'Anchor Tag Target Attribute',
    difficulty: 'Beginner',
    category: 'Links',
    question: {
      id: 'pr-html-2-q',
      type: 'fill_in_blank',
      question: 'Open link in a new tab:',
      instructions: 'Complete the attribute to open links in a new browser tab: <a href="https://example.com" target="___">Visit</a>',
      correctAnswer: '_blank',
      explanation: 'target="_blank" tells the browser to open the linked document in a new window or tab.'
    }
  },
  {
    id: 'pr-html-3',
    course: 'html',
    title: 'Image Accessibility & Alt Text',
    difficulty: 'Beginner',
    category: 'Images and Media',
    question: {
      id: 'pr-html-3-q',
      type: 'multiple_choice',
      question: 'Why is the `alt` attribute required on the <img> element?',
      options: [
        'It provides alternative text for screen readers and when the image fails to load',
        'It changes the visual resolution of the picture',
        'It links the image to a secondary stylesheet',
        'It rotates the image 90 degrees'
      ],
      correctAnswer: 0,
      explanation: 'The alt attribute improves accessibility for visually impaired users using screen readers and displays text if the image source cannot load.'
    }
  },
  {
    id: 'pr-html-4',
    course: 'html',
    title: 'Semantic HTML Landmarks',
    difficulty: 'Intermediate',
    category: 'HTML Structure',
    question: {
      id: 'pr-html-4-q',
      type: 'multiple_choice',
      question: 'Which element should be used for the primary self-contained navigation links on a site?',
      options: ['<aside>', '<nav>', '<section>', '<header>'],
      correctAnswer: 1,
      explanation: '<nav> is the semantic HTML5 tag dedicated to major navigation link blocks.'
    }
  },
  {
    id: 'pr-css-1',
    course: 'css',
    title: 'Flexbox Centering',
    difficulty: 'Beginner',
    category: 'Flexbox',
    question: {
      id: 'pr-css-1-q',
      type: 'multiple_choice',
      question: 'In a flex container with `display: flex; flex-direction: row;`, which property centers items horizontally along the main axis?',
      options: ['align-items: center;', 'justify-content: center;', 'align-content: center;', 'text-align: center;'],
      correctAnswer: 1,
      explanation: '`justify-content` controls alignment along the main axis (horizontal in row direction).'
    }
  },
  {
    id: 'pr-css-2',
    course: 'css',
    title: 'CSS Box Sizing',
    difficulty: 'Beginner',
    category: 'CSS Box Model',
    question: {
      id: 'pr-css-2-q',
      type: 'fill_in_blank',
      question: 'Include padding and borders in total width:',
      instructions: 'Complete the CSS rule: box-sizing: ___-box;',
      correctAnswer: 'border',
      explanation: '`box-sizing: border-box;` includes padding and borders in the calculated width and height of an element.'
    }
  },
  {
    id: 'pr-css-3',
    course: 'css',
    title: 'CSS Grid Template Columns',
    difficulty: 'Intermediate',
    category: 'CSS Grid',
    question: {
      id: 'pr-css-3-q',
      type: 'multiple_choice',
      question: 'How do you create a 3-column equal-width responsive grid?',
      options: [
        'grid-template-columns: repeat(3, 1fr);',
        'grid-columns: 3 3 3;',
        'grid-template-rows: 3fr;',
        'display: 3-column;'
      ],
      correctAnswer: 0,
      explanation: '`grid-template-columns: repeat(3, 1fr);` creates 3 equal columns that divide available space proportionally.'
    }
  },
  {
    id: 'pr-js-1',
    course: 'javascript',
    title: 'Variable Declarations',
    difficulty: 'Beginner',
    category: 'Variables and Data',
    question: {
      id: 'pr-js-1-q',
      type: 'multiple_choice',
      question: 'Which keyword creates a block-scoped variable that CANNOT be reassigned?',
      options: ['var', 'let', 'const', 'static'],
      correctAnswer: 2,
      explanation: '`const` declares a block-scoped identifier that cannot be reassigned after initialization.'
    }
  },
  {
    id: 'pr-js-2',
    course: 'javascript',
    title: 'Array Transformation with map()',
    difficulty: 'Intermediate',
    category: 'Arrays and Objects',
    question: {
      id: 'pr-js-2-q',
      type: 'multiple_choice',
      question: 'What is the return value of `[1, 2, 3].map(x => x * 2)`?',
      options: ['[2, 4, 6]', '[1, 2, 3, 2]', '6', 'undefined'],
      correctAnswer: 0,
      explanation: 'The `map()` method creates a new array populated with the results of calling the provided callback on every element.'
    }
  },
  {
    id: 'pr-js-3',
    course: 'javascript',
    title: 'DOM Query Selector',
    difficulty: 'Beginner',
    category: 'DOM',
    question: {
      id: 'pr-js-3-q',
      type: 'fill_in_blank',
      question: 'Select an element by its ID "submit-btn":',
      instructions: 'Complete the query: document.querySelector("___submit-btn")',
      correctAnswer: '#',
      explanation: 'In CSS selectors and querySelector, IDs are prefixed with `#`, e.g. `#submit-btn`.'
    }
  }
];
