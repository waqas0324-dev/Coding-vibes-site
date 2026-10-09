import { Quiz } from '../types';

export const quizzesCatalog: Quiz[] = [
  {
    id: 'quiz-html-fundamentals',
    courseId: 'html',
    title: 'HTML Fundamentals Mastery',
    description: 'Test your knowledge on HTML5 tags, document anatomy, semantic elements, tables, forms, and accessibility.',
    difficulty: 'Beginner',
    category: 'HTML',
    questions: [
      {
        id: 'hq-1',
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<lb>', '<break>', '<br>', '<newline>'],
        correctAnswerIndex: 2,
        explanation: '<br> inserts a single line break in text flow. It is a void/self-closing element.'
      },
      {
        id: 'hq-2',
        question: 'Which tag is used to define an item in a list?',
        options: ['<list>', '<li>', '<item>', '<ul>'],
        correctAnswerIndex: 1,
        explanation: '<li> (List Item) is used inside ordered (<ol>) or unordered (<ul>) lists.'
      },
      {
        id: 'hq-3',
        question: 'Which attribute specifies an image file URL?',
        options: ['href', 'link', 'src', 'url'],
        correctAnswerIndex: 2,
        explanation: 'The `src` (source) attribute specifies the path to the image file.'
      },
      {
        id: 'hq-4',
        question: 'Which HTML element represents self-contained content, like a blog post or news story?',
        options: ['<section>', '<article>', '<aside>', '<div>'],
        correctAnswerIndex: 1,
        explanation: '<article> represents an independent piece of content that makes sense on its own.'
      },
      {
        id: 'hq-5',
        question: 'How do you create a checkbox in an HTML form?',
        options: ['<input type="check">', '<checkbox>', '<input type="checkbox">', '<check>'],
        correctAnswerIndex: 2,
        explanation: '<input type="checkbox"> creates a toggleable checkbox element.'
      }
    ]
  },
  {
    id: 'quiz-css-modern',
    courseId: 'css',
    title: 'CSS Layout & Modern Flexbox',
    description: 'Evaluate your understanding of the CSS Box Model, Flexbox, CSS Grid, specificity, and media queries.',
    difficulty: 'Intermediate',
    category: 'CSS',
    questions: [
      {
        id: 'cq-1',
        question: 'Which CSS selector has the highest specificity?',
        options: ['Element selector (p)', 'Class selector (.highlight)', 'ID selector (#main)', 'Universal selector (*)'],
        correctAnswerIndex: 2,
        explanation: 'ID selectors (#id) carry a specificity weight of (0,1,0,0), which is higher than class (0,0,1,0) and element (0,0,0,1) selectors.'
      },
      {
        id: 'cq-2',
        question: 'Which property is used in Flexbox to wrap items onto multiple lines?',
        options: ['flex-flow: wrap', 'flex-wrap: wrap', 'wrap: flex', 'display: wrap'],
        correctAnswerIndex: 1,
        explanation: '`flex-wrap: wrap;` allows flex items to wrap onto multiple lines if they exceed the container width.'
      },
      {
        id: 'cq-3',
        question: 'Which unit is relative to the font-size of the root <html> element?',
        options: ['em', 'rem', 'vh', 'px'],
        correctAnswerIndex: 1,
        explanation: '`rem` stands for Root EM and is calculated relative to the root element (html).'
      },
      {
        id: 'cq-4',
        question: 'Which CSS property is used to create smooth transitions between property changes?',
        options: ['transform', 'transition', 'animation-speed', 'keyframes'],
        correctAnswerIndex: 1,
        explanation: '`transition` defines how intermediate states are animated between property changes.'
      }
    ]
  },
  {
    id: 'quiz-js-core',
    courseId: 'javascript',
    title: 'JavaScript Core & DOM Essentials',
    description: 'Assess your skills in modern JavaScript syntax, functions, array methods, DOM event handling, and asynchronous concepts.',
    difficulty: 'Intermediate',
    category: 'JavaScript',
    questions: [
      {
        id: 'jq-1',
        question: 'What is the output of `typeof null` in JavaScript?',
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        correctAnswerIndex: 2,
        explanation: 'Due to a historical design quirk in JavaScript, `typeof null` returns `"object"`.'
      },
      {
        id: 'jq-2',
        question: 'Which array method checks if at least ONE element meets a condition?',
        options: ['every()', 'some()', 'includes()', 'filter()'],
        correctAnswerIndex: 1,
        explanation: '`some()` returns `true` if at least one item passes the callback predicate test.'
      },
      {
        id: 'jq-3',
        question: 'How do you prevent a form from submitting and refreshing the page in an event handler?',
        options: ['event.stopPropagation()', 'event.preventDefault()', 'event.stop()', 'return false;'],
        correctAnswerIndex: 1,
        explanation: '`event.preventDefault()` stops the default browser action from triggering.'
      },
      {
        id: 'jq-4',
        question: 'What will `[1, 2, 3].reduce((acc, curr) => acc + curr, 0)` evaluate to?',
        options: ['0', '6', '123', '[6]'],
        correctAnswerIndex: 1,
        explanation: '`reduce` sums the numbers: 0 + 1 + 2 + 3 = 6.'
      }
    ]
  }
];
