import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('java', 1, 'Java Tutorial', 1, 'Introduction to Java', {
    heroTagline: 'Master Java, the powerhouse language for enterprise systems, Android apps, and server backends',
    introduction: 'Java is a popular, high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used for building robust enterprise web applications, Android mobile software, cloud systems, and big data processing.',
    definition: {
      term: 'Java',
      explanation: 'An object-oriented programming language developed by Sun Microsystems (now Oracle) in 1995 that runs on over 3 billion devices worldwide using the Java Virtual Machine (JVM).'
    },
    whyItMatters: 'Java follows the "Write Once, Run Anywhere" (WORA) philosophy. Code compiled into bytecode can execute on any operating system equipped with a JVM without recompilation.',
    syntaxStructure: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}`,
    codeExample: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Welcome to Java on Coding Vibes!");\n    int userCount = 2026;\n    System.out.println("Active learners: " + userCount);\n  }\n}`,
    tips: [
      'In Java, every program begins with a class name that MUST match the file name (e.g. Main.java).',
      'Java is strictly case-sensitive: System and system are completely different identifiers.'
    ]
  }),
  createStructuredLesson('java', 1, 'Java Tutorial', 2, 'Java Get Started'),
  createStructuredLesson('java', 1, 'Java Tutorial', 3, 'Java Syntax'),
  createStructuredLesson('java', 1, 'Java Tutorial', 4, 'Java Output and Print'),
  createStructuredLesson('java', 1, 'Java Tutorial', 5, 'Java Comments')
];

const module2Lessons = [
  createStructuredLesson('java', 2, 'Java Variables & Data', 1, 'Java Variables', {
    heroTagline: 'Storing values with strong static types in Java',
    introduction: 'Variables in Java are containers for storing data values. Java is a strongly typed language, which means that every variable must be declared with a specific data type before it can store a value.',
    definition: {
      term: 'Strongly Typed Variable',
      explanation: 'A variable whose type is checked strictly at compile-time to prevent type mismatches and memory corruption.'
    },
    syntaxStructure: `type variableName = value;`,
    codeExample: `public class Main {\n  public static void main(String[] args) {\n    String name = "Coding Vibes";\n    int year = 2026;\n    double rating = 4.95;\n    boolean isFree = true;\n\n    System.out.println(name + " rating: " + rating);\n  }\n}`
  }),
  createStructuredLesson('java', 2, 'Java Variables & Data', 2, 'Java Data Types'),
  createStructuredLesson('java', 2, 'Java Variables & Data', 3, 'Java Type Casting'),
  createStructuredLesson('java', 2, 'Java Variables & Data', 4, 'Java Numbers and Math'),
  createStructuredLesson('java', 2, 'Java Variables & Data', 5, 'Java Booleans'),
  createStructuredLesson('java', 2, 'Java Variables & Data', 6, 'Java Strings')
];

const module3Lessons = [
  createStructuredLesson('java', 3, 'Java Control Flow', 1, 'Java Operators'),
  createStructuredLesson('java', 3, 'Java Control Flow', 2, 'Java If Else', {
    heroTagline: 'Making decisions with conditional branching in Java',
    introduction: 'Java supports standard logical conditions from mathematics. You can use if, else, and else if statements to execute different blocks of code depending on whether a boolean condition evaluates to true or false.',
    syntaxStructure: `if (condition) {\n  // block of code\n} else {\n  // alternate code\n}`,
    codeExample: `public class Main {\n  public static void main(String[] args) {\n    int score = 85;\n    if (score >= 90) {\n      System.out.println("Grade: A");\n    } else if (score >= 75) {\n      System.out.println("Grade: B");\n    } else {\n      System.out.println("Keep practicing!");\n    }\n  }\n}`
  }),
  createStructuredLesson('java', 3, 'Java Control Flow', 3, 'Java Switch'),
  createStructuredLesson('java', 3, 'Java Control Flow', 4, 'Java While Loop'),
  createStructuredLesson('java', 3, 'Java Control Flow', 5, 'Java For Loop'),
  createStructuredLesson('java', 3, 'Java Control Flow', 6, 'Java Break and Continue')
];

const module4Lessons = [
  createStructuredLesson('java', 4, 'Java Arrays & Methods', 1, 'Java Arrays', {
    heroTagline: 'Storing multiple values in a fixed-size contiguous memory array',
    introduction: 'Arrays are used to store multiple values of the same data type in a single variable, instead of declaring separate variables for each value.',
    syntaxStructure: `String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};\nSystem.out.println(cars[0]);`,
    codeExample: `public class Main {\n  public static void main(String[] args) {\n    String[] topics = {"HTML", "CSS", "JavaScript", "Java"};\n    for (String topic : topics) {\n      System.out.println("Studying: " + topic);\n    }\n  }\n}`
  }),
  createStructuredLesson('java', 4, 'Java Arrays & Methods', 2, 'Java Multidimensional Arrays'),
  createStructuredLesson('java', 4, 'Java Arrays & Methods', 3, 'Java Methods'),
  createStructuredLesson('java', 4, 'Java Arrays & Methods', 4, 'Java Method Parameters'),
  createStructuredLesson('java', 4, 'Java Arrays & Methods', 5, 'Java Method Overloading')
];

const module5Lessons = [
  createStructuredLesson('java', 5, 'Java Object-Oriented', 1, 'Java OOP Introduction', {
    heroTagline: 'Unlock the power of Classes, Objects, Inheritance, and Polymorphism',
    introduction: 'Object-Oriented Programming (OOP) is about creating objects that contain both data and methods. OOP is faster, easier to execute, provides a clear structure for programs, and helps keep Java code DRY (Don\'t Repeat Yourself).',
    definition: {
      term: 'Object-Oriented Programming',
      explanation: 'A programming paradigm based on the concept of "objects", which can contain data in the form of fields (attributes) and code in the form of procedures (methods).'
    },
    syntaxStructure: `public class Car {\n  int maxSpeed = 200;\n\n  public void fullThrottle() {\n    System.out.println("The car is going fast!");\n  }\n}`,
    codeExample: `public class Main {\n  int x = 5;\n\n  public static void main(String[] args) {\n    Main myObj = new Main();\n    System.out.println("Object property x: " + myObj.x);\n  }\n}`
  }),
  createStructuredLesson('java', 5, 'Java Object-Oriented', 2, 'Java Classes and Objects'),
  createStructuredLesson('java', 5, 'Java Object-Oriented', 3, 'Java Constructors'),
  createStructuredLesson('java', 5, 'Java Object-Oriented', 4, 'Java Modifiers'),
  createStructuredLesson('java', 5, 'Java Object-Oriented', 5, 'Java Encapsulation'),
  createStructuredLesson('java', 5, 'Java Object-Oriented', 6, 'Java Inheritance')
];

const javaProjects: Project[] = [
  {
    id: 'proj-java-atm',
    title: 'Console Banking & ATM System',
    slug: 'java-atm-system',
    category: 'fullstack',
    difficulty: 'Intermediate',
    description: 'Build a secure console-based ATM interface with account balance inquiry, deposits, withdrawals, and transaction PIN authentication.',
    skills: ['OOP', 'Classes & Objects', 'Encapsulation', 'Loops', 'Scanner Input'],
    requirements: ['Support multiple accounts', 'Deposit and withdrawal validation', 'Pin authentication system']
  }
];

export const javaCourse: Course = {
  id: 'course-java',
  slug: 'java',
  title: 'Java',
  tagline: 'Master Object-Oriented Programming, Enterprise Software, and JVM Architecture',
  description: 'Learn Java from syntax basics to classes, objects, interfaces, inheritance, and backend application development with live interactive code examples.',
  category: 'Programming',
  difficulty: 'Intermediate',
  status: 'Active',
  icon: 'Coffee',
  badgeType: 'default',
  estimatedHours: 45,
  modulesCount: 5,
  lessonsCount: module1Lessons.length + module2Lessons.length + module3Lessons.length + module4Lessons.length + module5Lessons.length,
  modules: [
    { id: 'java-m1', title: 'Java Tutorial & Basics', description: 'Introduction, JVM, syntax, output, and comments', order: 1, lessons: module1Lessons },
    { id: 'java-m2', title: 'Variables & Data Types', description: 'Static typing, primitives, casting, numbers, and strings', order: 2, lessons: module2Lessons },
    { id: 'java-m3', title: 'Control Flow & Loops', description: 'If-else branching, switch, while loops, and for loops', order: 3, lessons: module3Lessons },
    { id: 'java-m4', title: 'Arrays & Methods', description: 'Single and multidimensional arrays, method parameters, and overloading', order: 4, lessons: module4Lessons },
    { id: 'java-m5', title: 'Object-Oriented Programming (OOP)', description: 'Classes, objects, constructors, encapsulation, and inheritance', order: 5, lessons: module5Lessons }
  ],
  projects: javaProjects
};
