import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('cpp', 1, 'C++ Tutorial', 1, 'Introduction to C++', {
    heroTagline: 'Build high-performance video games, browser engines, operating systems, and finance systems',
    introduction: 'C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup as an extension to the C language, giving programmers a high level of control over system resources and memory.',
    definition: {
      term: 'C++',
      explanation: 'A general-purpose object-oriented programming language designed as "C with Classes", widely celebrated for extreme speed and direct resource management.'
    },
    whyItMatters: 'Game engines like Unreal Engine, desktop software like Adobe Photoshop, and browser rendering engines like Google Chrome are built in C++.',
    syntaxStructure: `#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello World!";\n  return 0;\n}`,
    codeExample: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    cout << "Welcome to C++ on Coding Vibes!" << endl;\n    string engine = "Unreal Engine";\n    cout << "Powers high performance software like " << engine << endl;\n    return 0;\n}`
  }),
  createStructuredLesson('cpp', 1, 'C++ Tutorial', 2, 'C++ Get Started'),
  createStructuredLesson('cpp', 1, 'C++ Tutorial', 3, 'C++ Syntax'),
  createStructuredLesson('cpp', 1, 'C++ Tutorial', 4, 'C++ Output and Cout'),
  createStructuredLesson('cpp', 1, 'C++ Tutorial', 5, 'C++ Comments')
];

const module2Lessons = [
  createStructuredLesson('cpp', 2, 'Variables & Types', 1, 'C++ Variables', {
    heroTagline: 'Containers for storing data values with strong typing in C++',
    introduction: 'In C++, there are different types of variables: int, double, char, string, and bool.',
    syntaxStructure: `type variableName = value;`,
    codeExample: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int myNum = 5;\n    double myFloatNum = 5.99;\n    char myLetter = 'D';\n    string myText = "Hello";\n    bool myBoolean = true;\n\n    cout << myText << ", your score is " << myNum << endl;\n    return 0;\n}`
  }),
  createStructuredLesson('cpp', 2, 'Variables & Types', 2, 'C++ User Input cin'),
  createStructuredLesson('cpp', 2, 'Variables & Types', 3, 'C++ Data Types'),
  createStructuredLesson('cpp', 2, 'Variables & Types', 4, 'C++ Operators'),
  createStructuredLesson('cpp', 2, 'Variables & Types', 5, 'C++ Strings')
];

const module3Lessons = [
  createStructuredLesson('cpp', 3, 'Control Flow', 1, 'C++ Math & Booleans'),
  createStructuredLesson('cpp', 3, 'Control Flow', 2, 'C++ If Else', {
    heroTagline: 'Branching logic and decision making in C++',
    introduction: 'Use if to specify a block of code to be executed if a specified condition is true. Use else for the fallback block.',
    syntaxStructure: `if (condition) {\n  // code\n} else {\n  // code\n}`,
    codeExample: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int time = 22;\n    if (time < 10) {\n        cout << "Good morning.";\n    } else if (time < 20) {\n        cout << "Good day.";\n    } else {\n        cout << "Good evening.";\n    }\n    return 0;\n}`
  }),
  createStructuredLesson('cpp', 3, 'Control Flow', 3, 'C++ Switch'),
  createStructuredLesson('cpp', 3, 'Control Flow', 4, 'C++ While Loop'),
  createStructuredLesson('cpp', 3, 'Control Flow', 5, 'C++ For Loop')
];

const module4Lessons = [
  createStructuredLesson('cpp', 4, 'Functions & Memory', 1, 'C++ Functions', {
    heroTagline: 'Reusable code blocks, parameters, and function overloading in C++',
    introduction: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.',
    syntaxStructure: `void myFunction() {\n  // code to be executed\n}`,
    codeExample: `#include <iostream>\nusing namespace std;\n\nvoid greet(string name) {\n    cout << "Hello " << name << "! Welcome to Coding Vibes." << endl;\n}\n\nint main() {\n    greet("Alex");\n    greet("Sarah");\n    return 0;\n}`
  }),
  createStructuredLesson('cpp', 4, 'Functions & Memory', 2, 'C++ Function Parameters'),
  createStructuredLesson('cpp', 4, 'Functions & Memory', 3, 'C++ References & Pointers')
];

const module5Lessons = [
  createStructuredLesson('cpp', 5, 'C++ OOP', 1, 'C++ Classes and Objects', {
    heroTagline: 'Object-oriented blueprint architecture in C++',
    introduction: 'C++ is an object-oriented programming language. Everything in C++ is associated with classes and objects, along with its attributes and methods.',
    syntaxStructure: `class MyClass {\n  public:\n    int myNum;\n    string myString;\n};`,
    codeExample: `#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\n  public:\n    string brand;\n    string model;\n    int year;\n};\n\nint main() {\n    Car carObj1;\n    carObj1.brand = "BMW";\n    carObj1.model = "X5";\n    carObj1.year = 1999;\n\n    cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << endl;\n    return 0;\n}`
  }),
  createStructuredLesson('cpp', 5, 'C++ OOP', 2, 'C++ Class Methods'),
  createStructuredLesson('cpp', 5, 'C++ OOP', 3, 'C++ Constructors'),
  createStructuredLesson('cpp', 5, 'C++ OOP', 4, 'C++ Encapsulation & Inheritance')
];

const cppProjects: Project[] = [
  {
    id: 'proj-cpp-game',
    title: 'Text-Based RPG Game Engine',
    slug: 'cpp-rpg-engine',
    category: 'fullstack',
    difficulty: 'Intermediate',
    description: 'Construct an interactive role-playing dungeon crawler featuring player stats, inventory management, weapon classes, and turn-based combat.',
    skills: ['C++', 'OOP', 'Inheritance', 'Pointers', 'State Machines'],
    requirements: ['Player and enemy class hierarchy', 'Inventory array with items', 'Combat loop system']
  }
];

export const cppCourse: Course = {
  id: 'course-cpp',
  slug: 'cpp',
  title: 'C++',
  tagline: 'Master High-Performance Systems, Game Engine Architecture, and Modern OOP',
  description: 'Learn C++ from fundamentals to pointers, references, object-oriented design, constructors, and classes with live interactive compiler simulations.',
  category: 'Programming',
  difficulty: 'Intermediate',
  status: 'Active',
  icon: 'Terminal',
  badgeType: 'default',
  estimatedHours: 42,
  modulesCount: 5,
  lessonsCount: module1Lessons.length + module2Lessons.length + module3Lessons.length + module4Lessons.length + module5Lessons.length,
  modules: [
    { id: 'cpp-m1', title: 'C++ Tutorial & Basics', description: 'Introduction, compilers, syntax, cout, and comments', order: 1, lessons: module1Lessons },
    { id: 'cpp-m2', title: 'Variables & Data Types', description: 'cin input, types, operators, and strings', order: 2, lessons: module2Lessons },
    { id: 'cpp-m3', title: 'Control Flow & Loops', description: 'If-else branching, switch, while loops, and for loops', order: 3, lessons: module3Lessons },
    { id: 'cpp-m4', title: 'Functions & Memory', description: 'Function declarations, parameters, references, and pointers', order: 4, lessons: module4Lessons },
    { id: 'cpp-m5', title: 'Object-Oriented Programming (OOP)', description: 'Classes, objects, methods, constructors, and inheritance', order: 5, lessons: module5Lessons }
  ],
  projects: cppProjects
};
