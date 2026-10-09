import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('python', 1, 'Python Introduction', 1, 'Introduction to Python', {
    heroTagline: 'Learn Python, the world’s most popular language for beginners, web dev, and AI',
    introduction: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
    definition: {
      term: 'Python',
      explanation: 'An easy-to-learn, powerful programming language created by Guido van Rossum and released in 1991.'
    },
    whyItMatters: 'Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.) and has a simple syntax similar to the English language.',
    syntaxStructure: `print("Hello, World!")`,
    codeExample: `print("Hello, Coding Vibes!")\nprint("Welcome to Python Programming")`,
    syntaxExplanation: 'In Python, the print() function sends text or calculated results to the output screen.'
  }),
  createStructuredLesson('python', 1, 'Python Introduction', 2, 'Python Getting Started'),
  createStructuredLesson('python', 1, 'Python Introduction', 3, 'Python Syntax and Indentation'),
  createStructuredLesson('python', 1, 'Python Introduction', 4, 'Python Comments')
];

const module2Lessons = [
  createStructuredLesson('python', 2, 'Variables and Data Types', 1, 'Python Variables', {
    heroTagline: 'Storing and managing data values in Python',
    introduction: 'Variables are containers for storing data values. Unlike other programming languages, Python has no command for declaring a variable; a variable is created the moment you first assign a value to it.',
    definition: {
      term: 'Variable',
      explanation: 'A named memory location in Python that holds a reference to an object or value.'
    },
    whyItMatters: 'Variables allow your programs to remember information, calculate dynamic formulas, and process user input.',
    syntaxStructure: `x = 5\ny = "John"\nprint(x)\nprint(y)`,
    codeExample: `site_name = "Coding Vibes"\nyear_founded = 2026\nis_active = True\n\nprint(f"{site_name} is active: {is_active}")`,
    syntaxExplanation: 'Python uses dynamic typing, meaning you do not need to explicitly declare data types like int or string.'
  }),
  createStructuredLesson('python', 2, 'Variables and Data Types', 2, 'Python Data Types'),
  createStructuredLesson('python', 2, 'Variables and Data Types', 3, 'Python Numbers (int, float, complex)'),
  createStructuredLesson('python', 2, 'Variables and Data Types', 4, 'Python Casting'),
  createStructuredLesson('python', 2, 'Variables and Data Types', 5, 'Python Strings and String Methods')
];

const module3Lessons = [
  createStructuredLesson('python', 3, 'Operators & Booleans', 1, 'Python Booleans'),
  createStructuredLesson('python', 3, 'Operators & Booleans', 2, 'Arithmetic Operators'),
  createStructuredLesson('python', 3, 'Operators & Booleans', 3, 'Assignment Operators'),
  createStructuredLesson('python', 3, 'Operators & Booleans', 4, 'Comparison Operators'),
  createStructuredLesson('python', 3, 'Operators & Booleans', 5, 'Logical Operators (and, or, not)')
];

const module4Lessons = [
  createStructuredLesson('python', 4, 'Collections & Lists', 1, 'Python Lists', {
    heroTagline: 'Store multiple ordered items in a single variable',
    introduction: 'Lists are one of 4 built-in data types in Python used to store collections of data. Lists are created using square brackets [].',
    definition: {
      term: 'List',
      explanation: 'An ordered, changeable collection that allows duplicate members.'
    },
    whyItMatters: 'Lists are the most frequently used sequence type in Python applications, allowing you to store arrays of users, products, or sensor readings.',
    syntaxStructure: `fruits = ["apple", "banana", "cherry"]\nprint(fruits[0])`,
    codeExample: `languages = ["Python", "JavaScript", "HTML", "CSS"]\nlanguages.append("SQL")\nprint("Total languages:", len(languages))\nprint("First item:", languages[0])`,
    syntaxExplanation: 'Lists support indexing, slicing, appending, and removing items dynamically.'
  }),
  createStructuredLesson('python', 4, 'Collections & Lists', 2, 'Python Tuples'),
  createStructuredLesson('python', 4, 'Collections & Lists', 3, 'Python Sets'),
  createStructuredLesson('python', 4, 'Collections & Lists', 4, 'Python Dictionaries')
];

const module5Lessons = [
  createStructuredLesson('python', 5, 'Conditionals & Loops', 1, 'Python If...Else', {
    heroTagline: 'Decision making and logical branching in Python',
    introduction: 'Python supports the usual logical conditions from mathematics. These conditions can be used in several ways, most commonly in "if statements" and loops.',
    definition: {
      term: 'if statement',
      explanation: 'A control flow statement that executes a block of code only if a specified condition evaluates to True.'
    },
    whyItMatters: 'Every interactive application requires logic to make choices based on user permissions, score values, or input validation.',
    syntaxStructure: `a = 33\nb = 200\nif b > a:\n    print("b is greater than a")`,
    codeExample: `score = 85\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelse:\n    print("Grade: C")`,
    syntaxExplanation: 'Python uses elif (short for else if) and indentation (tabs or 4 spaces) to define code blocks.'
  }),
  createStructuredLesson('python', 5, 'Conditionals & Loops', 2, 'Python While Loops'),
  createStructuredLesson('python', 5, 'Conditionals & Loops', 3, 'Python For Loops'),
  createStructuredLesson('python', 5, 'Conditionals & Loops', 4, 'Break and Continue Statements')
];

const module6Lessons = [
  createStructuredLesson('python', 6, 'Functions & Modules', 1, 'Python Functions', {
    heroTagline: 'Creating reusable, modular blocks of code',
    introduction: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result.',
    definition: {
      term: 'Function',
      explanation: 'A block of organized, reusable code that performs a single related action, defined with the "def" keyword.'
    },
    whyItMatters: 'Functions prevent repetitive code (DRY - Don’t Repeat Yourself) and make software testable, readable, and clean.',
    syntaxStructure: `def my_function(name):\n    return f"Hello, {name}!"\n\nmessage = my_function("Alex")\nprint(message)`,
    codeExample: `def calculate_total(price, tax_rate=0.08):\n    return price + (price * tax_rate)\n\ntotal = calculate_total(100)\nprint(f"Final price with tax: \${total:.2f}")`,
    syntaxExplanation: 'Functions can accept default arguments and return computed values using the return statement.'
  }),
  createStructuredLesson('python', 6, 'Functions & Modules', 2, 'Function Arguments & *args'),
  createStructuredLesson('python', 6, 'Functions & Modules', 3, 'Python Lambda Functions'),
  createStructuredLesson('python', 6, 'Functions & Modules', 4, 'Python Modules and Packages')
];

const pythonProjects: Project[] = [
  {
    id: 'proj-python-calc',
    title: 'Command Line Calculator',
    slug: 'python-calculator',
    category: 'fullstack',
    description: 'Build a fully interactive arithmetic calculator handling input parsing and error recovery.',
    difficulty: 'Beginner',
    skills: ['Python', 'CLI', 'Math', 'Functions'],
    requirements: ['Function declarations', 'Input sanitization', 'Arithmetic operations'],
    estimatedTime: '30 mins',
    starterCode: {
      html: '<div style="font-family: monospace; padding: 20px; background: #1e1e1e; color: #a9b7c6;">\n  <h3>Python Calculator Output Simulation</h3>\n  <p id="output">Result will appear here...</p>\n</div>',
      css: 'body { margin: 0; background: #121212; }',
      js: 'function add(a, b) { return a + b; }\nvar res = add(45, 55);\ndocument.getElementById("output").innerText = "45 + 55 = " + res;\nconsole.log("Calculated:", res);'
    },
    solutionHint: 'Define a function add(a, b) that returns a + b, and display the result.',
    expectedResult: 'A working calculator returning 45 + 55 = 100.'
  }
];

export const pythonCourse: Course = {
  id: 'course-python',
  slug: 'python',
  title: 'Python',
  tagline: 'The World’s Most Popular Programming Language',
  description: 'Master Python programming from the basics of syntax, variables, lists, and loops to functions, modules, and data analysis.',
  category: 'Programming',
  difficulty: 'Beginner',
  estimatedHours: 24,
  modulesCount: 6,
  lessonsCount: 27,
  badgeType: 'python',
  status: 'Active',
  icon: 'Terminal',
  modules: [
    {
      id: 'py-m1',
      title: 'Python Introduction & Basics',
      description: 'Get started with Python installation, IDE setup, syntax, and output statements.',
      order: 1,
      lessons: module1Lessons
    },
    {
      id: 'py-m2',
      title: 'Variables & Data Types',
      description: 'Master strings, numbers, booleans, casting, and variable naming conventions.',
      order: 2,
      lessons: module2Lessons
    },
    {
      id: 'py-m3',
      title: 'Operators & Booleans',
      description: 'Understand arithmetic, comparison, logical, and assignment operations in Python.',
      order: 3,
      lessons: module3Lessons
    },
    {
      id: 'py-m4',
      title: 'Python Lists & Collections',
      description: 'Learn how to store, slice, and mutate data using Lists, Tuples, Sets, and Dictionaries.',
      order: 4,
      lessons: module4Lessons
    },
    {
      id: 'py-m5',
      title: 'Control Flow: If & Loops',
      description: 'Write dynamic decision-making logic using if-elif-else statements and for/while loops.',
      order: 5,
      lessons: module5Lessons
    },
    {
      id: 'py-m6',
      title: 'Functions & Modular Code',
      description: 'Write reusable functions, handle keyword arguments, and explore lambda expressions.',
      order: 6,
      lessons: module6Lessons
    }
  ],
  projects: pythonProjects
};
