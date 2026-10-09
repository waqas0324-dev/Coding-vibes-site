import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('c', 1, 'C Tutorial', 1, 'Introduction to C', {
    heroTagline: 'Master C, the mother of all modern programming languages',
    introduction: 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion. It was originally developed by Dennis Ritchie between 1969 and 1973 at Bell Labs to construct the Unix operating system.',
    definition: {
      term: 'C Language',
      explanation: 'A low-level systems programming language that gives direct access to memory and hardware, forming the backbone of operating systems, compilers, and embedded devices.'
    },
    whyItMatters: 'Almost all modern operating systems (Linux, Windows, macOS), databases (PostgreSQL, MySQL), and language interpreters (Python) are written in C or C++.',
    syntaxStructure: `#include <stdio.h>\n\nint main() {\n  printf("Hello World!\\n");\n  return 0;\n}`,
    codeExample: `#include <stdio.h>\n\nint main() {\n    printf("Welcome to C on Coding Vibes!\\n");\n    int year = 2026;\n    printf("Building foundations for %d\\n", year);\n    return 0;\n}`
  }),
  createStructuredLesson('c', 1, 'C Tutorial', 2, 'C Get Started and Compilers'),
  createStructuredLesson('c', 1, 'C Tutorial', 3, 'C Syntax'),
  createStructuredLesson('c', 1, 'C Tutorial', 4, 'C Output and Printf'),
  createStructuredLesson('c', 1, 'C Tutorial', 5, 'C Comments')
];

const module2Lessons = [
  createStructuredLesson('c', 2, 'Variables & Types', 1, 'C Variables', {
    heroTagline: 'Declaring typed memory locations in C',
    introduction: 'Variables are containers for storing data values. In C, there are different types of variables (defined with different keywords), for example: int, float, double, and char.',
    syntaxStructure: `type variableName = value;`,
    codeExample: `#include <stdio.h>\n\nint main() {\n    int myNum = 15;\n    float myFloatNum = 5.99;\n    char myLetter = 'D';\n\n    printf("%d\\n", myNum);\n    printf("%f\\n", myFloatNum);\n    printf("%c\\n", myLetter);\n    return 0;\n}`
  }),
  createStructuredLesson('c', 2, 'Variables & Types', 2, 'C Data Types'),
  createStructuredLesson('c', 2, 'Variables & Types', 3, 'C Constants'),
  createStructuredLesson('c', 2, 'Variables & Types', 4, 'C Format Specifiers')
];

const module3Lessons = [
  createStructuredLesson('c', 3, 'Control Flow', 1, 'C Operators'),
  createStructuredLesson('c', 3, 'Control Flow', 2, 'C If Else', {
    heroTagline: 'Conditional branching in C programs',
    introduction: 'C uses conditions to make decisions. You can use if, else, and else if to execute blocks of code when certain boolean expressions evaluate to true (non-zero) or false (zero).',
    syntaxStructure: `if (condition) {\n  // block of code\n} else {\n  // fallback code\n}`,
    codeExample: `#include <stdio.h>\n\nint main() {\n    int time = 20;\n    if (time < 18) {\n      printf("Good day.\\n");\n    } else {\n      printf("Good evening.\\n");\n    }\n    return 0;\n}`
  }),
  createStructuredLesson('c', 3, 'Control Flow', 3, 'C Switch'),
  createStructuredLesson('c', 3, 'Control Flow', 4, 'C While Loop'),
  createStructuredLesson('c', 3, 'Control Flow', 5, 'C For Loop')
];

const module4Lessons = [
  createStructuredLesson('c', 4, 'Arrays & Strings', 1, 'C Arrays', {
    heroTagline: 'Contiguous memory blocks for collections of data in C',
    introduction: 'Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.',
    syntaxStructure: `int myNumbers[] = {25, 50, 75, 100};\nprintf("%d", myNumbers[0]);`,
    codeExample: `#include <stdio.h>\n\nint main() {\n    int scores[4] = {90, 85, 95, 100};\n    int i;\n    for (i = 0; i < 4; i++) {\n        printf("Score %d: %d\\n", i + 1, scores[i]);\n    }\n    return 0;\n}`
  }),
  createStructuredLesson('c', 4, 'Arrays & Strings', 2, 'C Strings'),
  createStructuredLesson('c', 4, 'Arrays & Strings', 3, 'C User Input scanf')
];

const module5Lessons = [
  createStructuredLesson('c', 5, 'Memory & Pointers', 1, 'C Memory Address', {
    heroTagline: 'Direct hardware memory inspection with the address-of & operator',
    introduction: 'When a variable is created in C, a memory address is assigned to the variable. The memory address is the location of where the variable is stored on the computer.',
    syntaxStructure: `int myAge = 43;\nprintf("%p", &myAge); // Outputs memory address in hex`,
    codeExample: `#include <stdio.h>\n\nint main() {\n    int myAge = 43;\n    printf("Value: %d\\n", myAge);\n    printf("Memory address: %p\\n", &myAge);\n    return 0;\n}`
  }),
  createStructuredLesson('c', 5, 'Memory & Pointers', 2, 'C Pointers'),
  createStructuredLesson('c', 5, 'Memory & Pointers', 3, 'C Dereference Operator'),
  createStructuredLesson('c', 5, 'Memory & Pointers', 4, 'C Functions & Pointers')
];

const cProjects: Project[] = [
  {
    id: 'proj-c-memory',
    title: 'High-Speed Custom Memory Allocator',
    slug: 'c-memory-allocator',
    category: 'fullstack',
    difficulty: 'Advanced',
    description: 'Implement a minimalist heap memory manager in C with custom malloc(), free(), and block fragmentation tracking.',
    skills: ['Pointers', 'Memory Management', 'Structs', 'Bit Manipulation'],
    requirements: ['Block header tracking', 'Free list traversal', 'Memory boundary alignment']
  }
];

export const cCourse: Course = {
  id: 'course-c',
  slug: 'c',
  title: 'C',
  tagline: 'Master Low-Level Memory Management, Hardware Architecture, and Systems Programming',
  description: 'Understand how computers really work: pointers, memory allocation, data types, structs, and fast systems programming with C.',
  category: 'Programming',
  difficulty: 'Intermediate',
  status: 'Active',
  icon: 'Cpu',
  badgeType: 'default',
  estimatedHours: 40,
  modulesCount: 5,
  lessonsCount: module1Lessons.length + module2Lessons.length + module3Lessons.length + module4Lessons.length + module5Lessons.length,
  modules: [
    { id: 'c-m1', title: 'C Tutorial & Setup', description: 'Introduction, GCC compiler, syntax, printf, and comments', order: 1, lessons: module1Lessons },
    { id: 'c-m2', title: 'Variables & Data Types', description: 'Data types, format specifiers, and constants', order: 2, lessons: module2Lessons },
    { id: 'c-m3', title: 'Control Flow & Loops', description: 'If-else, switch, while, and for loops', order: 3, lessons: module3Lessons },
    { id: 'c-m4', title: 'Arrays & Strings', description: 'Contiguous arrays, character strings, and scanf user input', order: 4, lessons: module4Lessons },
    { id: 'c-m5', title: 'Memory & Pointers', description: 'Memory addresses, pointer syntax, dereferencing, and memory management', order: 5, lessons: module5Lessons }
  ],
  projects: cProjects
};
