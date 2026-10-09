import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('php', 1, 'PHP Tutorial', 1, 'Introduction to PHP', {
    heroTagline: 'Learn PHP, the server-side scripting language powering WordPress, Wikipedia, and 75%+ of web backends',
    introduction: 'PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
    definition: {
      term: 'PHP',
      explanation: 'A server-side scripting language executed on the server, generating dynamic HTML that is sent back to the client’s browser.'
    },
    whyItMatters: 'PHP is extremely easy to learn for beginners, yet offers advanced features for professional programmers. It powers content management systems like WordPress, Drupal, and Joomla.',
    syntaxStructure: `<?php\necho "Hello World!";\n?>`,
    codeExample: `<!DOCTYPE html>\n<html>\n<body>\n\n<?php\necho "<h1>Welcome to PHP on Coding Vibes!</h1>";\necho "<p>PHP is executed on the server!</p>";\n?>\n\n</body>\n</html>`
  }),
  createStructuredLesson('php', 1, 'PHP Tutorial', 2, 'PHP Installation and Setup'),
  createStructuredLesson('php', 1, 'PHP Tutorial', 3, 'PHP Syntax'),
  createStructuredLesson('php', 1, 'PHP Tutorial', 4, 'PHP Echo and Print'),
  createStructuredLesson('php', 1, 'PHP Tutorial', 5, 'PHP Comments')
];

const module2Lessons = [
  createStructuredLesson('php', 2, 'Variables & Types', 1, 'PHP Variables', {
    heroTagline: 'Declaring dynamic variables with the dollar sign $ in PHP',
    introduction: 'In PHP, a variable starts with the $ sign, followed by the name of the variable. PHP automatically associates a data type to the variable, depending on its value.',
    syntaxStructure: `$txt = "Hello world!";\n$x = 5;\n$y = 10.5;`,
    codeExample: `<?php\n$siteName = "Coding Vibes";\n$year = 2026;\n$rating = 4.9;\n\necho "$siteName was established in $year with a $rating rating.";\n?>`
  }),
  createStructuredLesson('php', 2, 'Variables & Types', 2, 'PHP Variable Scope'),
  createStructuredLesson('php', 2, 'Variables & Types', 3, 'PHP Data Types'),
  createStructuredLesson('php', 2, 'Variables & Types', 4, 'PHP Strings and String Functions'),
  createStructuredLesson('php', 2, 'Variables & Types', 5, 'PHP Numbers and Math'),
  createStructuredLesson('php', 2, 'Variables & Types', 6, 'PHP Constants')
];

const module3Lessons = [
  createStructuredLesson('php', 3, 'Control Flow', 1, 'PHP Operators'),
  createStructuredLesson('php', 3, 'Control Flow', 2, 'PHP If Else Elseif', {
    heroTagline: 'Conditional statements in server-side PHP scripts',
    introduction: 'Conditional statements are used to perform different actions based on different conditions. PHP supports if, if...else, if...elseif...else, and switch statements.',
    syntaxStructure: `if ($condition) {\n  // code to execute\n} elseif ($another) {\n  // alternate code\n} else {\n  // fallback code\n}`,
    codeExample: `<?php\n$hour = 14;\nif ($hour < 12) {\n  echo "Good morning!";\n} elseif ($hour < 18) {\n  echo "Good afternoon!";\n} else {\n  echo "Good evening!";\n}\n?>`
  }),
  createStructuredLesson('php', 3, 'Control Flow', 3, 'PHP Switch Statement'),
  createStructuredLesson('php', 3, 'Control Flow', 4, 'PHP Loops: While and Do While'),
  createStructuredLesson('php', 3, 'Control Flow', 5, 'PHP Loops: For and Foreach')
];

const module4Lessons = [
  createStructuredLesson('php', 4, 'Arrays & Functions', 1, 'PHP Arrays', {
    heroTagline: 'Indexed, associative, and multidimensional arrays in PHP',
    introduction: 'An array stores multiple values in one single variable. In PHP, there are three types of arrays: Indexed arrays (numeric indexes), Associative arrays (named keys), and Multidimensional arrays.',
    syntaxStructure: `$cars = array("Volvo", "BMW", "Toyota");\n$age = array("Peter"=>35, "Ben"=>37);`,
    codeExample: `<?php\n$developer = [\n  "name" => "Coding Vibes Student",\n  "stack" => "PHP & MySQL",\n  "level" => "Pro"\n];\n\nforeach ($developer as $key => $val) {\n  echo "$key: $val<br>";\n}\n?>`
  }),
  createStructuredLesson('php', 4, 'Arrays & Functions', 2, 'PHP Associative Arrays'),
  createStructuredLesson('php', 4, 'Arrays & Functions', 3, 'PHP Functions'),
  createStructuredLesson('php', 4, 'Arrays & Functions', 4, 'PHP Function Arguments and Return')
];

const module5Lessons = [
  createStructuredLesson('php', 5, 'Forms & Superglobals', 1, 'PHP Superglobals', {
    heroTagline: 'Handling user input via $_GET, $_POST, and $_SERVER',
    introduction: 'Superglobals are built-in variables that are always available in all scopes throughout a PHP script without needing global declarations.',
    syntaxStructure: `$name = $_POST['user_name'];\n$method = $_SERVER['REQUEST_METHOD'];`,
    codeExample: `<?php\nif ($_SERVER["REQUEST_METHOD"] == "POST") {\n  $name = htmlspecialchars($_POST['fname']);\n  echo "Hello, " . $name;\n}\n?>`
  }),
  createStructuredLesson('php', 5, 'Forms & Superglobals', 2, 'PHP Form Handling'),
  createStructuredLesson('php', 5, 'Forms & Superglobals', 3, 'PHP Form Validation'),
  createStructuredLesson('php', 5, 'Forms & Superglobals', 4, 'PHP Sessions and Cookies')
];

const phpProjects: Project[] = [
  {
    id: 'proj-php-blog',
    title: 'Dynamic PHP Blog & Auth System',
    slug: 'php-blog-system',
    category: 'fullstack',
    difficulty: 'Intermediate',
    description: 'Create a full-featured blogging application with user registration, secure password hashing, dynamic article publishing, and session cookies.',
    skills: ['PHP', 'Form Handling', 'Sessions', 'Security', 'CRUD Operations'],
    requirements: ['Form input validation with sanitization', 'Session-based user authentication', 'Dynamic CRUD posts']
  }
];

export const phpCourse: Course = {
  id: 'course-php',
  slug: 'php',
  title: 'PHP',
  tagline: 'Master Server-Side Web Scripting, Database Operations, and Dynamic Backends',
  description: 'Learn PHP from scratch: syntax, variables, superglobals, form validation, sessions, cookies, and database connectivity with practical exercises.',
  category: 'Web Development',
  difficulty: 'Beginner',
  status: 'Active',
  icon: 'Server',
  badgeType: 'default',
  estimatedHours: 35,
  modulesCount: 5,
  lessonsCount: module1Lessons.length + module2Lessons.length + module3Lessons.length + module4Lessons.length + module5Lessons.length,
  modules: [
    { id: 'php-m1', title: 'PHP Tutorial & Basics', description: 'Introduction, web servers, syntax, output, and comments', order: 1, lessons: module1Lessons },
    { id: 'php-m2', title: 'Variables & Data Types', description: 'Dollar sign variables, scope, types, strings, numbers, and constants', order: 2, lessons: module2Lessons },
    { id: 'php-m3', title: 'Control Flow & Loops', description: 'If-else branching, switch, while loops, and foreach loops', order: 3, lessons: module3Lessons },
    { id: 'php-m4', title: 'Arrays & Functions', description: 'Indexed & associative arrays, functions, and return values', order: 4, lessons: module4Lessons },
    { id: 'php-m5', title: 'Forms & Superglobals', description: '$_GET, $_POST, input validation, sessions, and cookies', order: 5, lessons: module5Lessons }
  ],
  projects: phpProjects
};
