import { Course, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';

const module1Lessons = [
  createStructuredLesson('csharp', 1, 'C# Tutorial', 1, 'Introduction to C#', {
    heroTagline: 'Learn C#, Microsoft\'s modern language for .NET, Unity game development, and enterprise clouds',
    introduction: 'C# (C-Sharp) is an object-oriented programming language developed by Microsoft that runs on the .NET Framework and .NET Core. C# is used to develop web apps, desktop apps, mobile apps, games, and VR software with Unity.',
    definition: {
      term: 'C#',
      explanation: 'A modern, general-purpose, type-safe programming language pronounced "C-Sharp" that combines the power of C++ with the simplicity of Visual Basic.'
    },
    whyItMatters: 'C# is the dominant language for Unity game engine development and enterprise cloud applications running on Microsoft Azure.',
    syntaxStructure: `using System;\n\nnamespace HelloWorld {\n  class Program {\n    static void Main(string[] args) {\n      Console.WriteLine("Hello World!");\n    }\n  }\n}`,
    codeExample: `using System;\n\nnamespace CodingVibes {\n  class Program {\n    static void Main(string[] args) {\n      Console.WriteLine("Welcome to C# on Coding Vibes!");\n      string framework = ".NET 9";\n      Console.WriteLine($"Building modern apps with {framework}");\n    }\n  }\n}`
  }),
  createStructuredLesson('csharp', 1, 'C# Tutorial', 2, 'C# Get Started and .NET'),
  createStructuredLesson('csharp', 1, 'C# Tutorial', 3, 'C# Syntax'),
  createStructuredLesson('csharp', 1, 'C# Tutorial', 4, 'C# Output and WriteLine'),
  createStructuredLesson('csharp', 1, 'C# Tutorial', 5, 'C# Comments')
];

const module2Lessons = [
  createStructuredLesson('csharp', 2, 'Variables & Types', 1, 'C# Variables', {
    heroTagline: 'Strongly-typed memory variables in C#',
    introduction: 'Variables are containers for storing data values. In C#, there are different types of variables: int, double, char, string, and bool.',
    syntaxStructure: `type variableName = value;`,
    codeExample: `using System;\n\nclass Program {\n  static void Main() {\n    string name = "Coding Vibes";\n    int year = 2026;\n    double rating = 4.98;\n    bool isAwesome = true;\n\n    Console.WriteLine($"{name}: {rating} stars in {year}");\n  }\n}`
  }),
  createStructuredLesson('csharp', 2, 'Variables & Types', 2, 'C# Data Types'),
  createStructuredLesson('csharp', 2, 'Variables & Types', 3, 'C# Type Casting'),
  createStructuredLesson('csharp', 2, 'Variables & Types', 4, 'C# User Input Console.ReadLine')
];

const module3Lessons = [
  createStructuredLesson('csharp', 3, 'Control Flow', 1, 'C# Operators'),
  createStructuredLesson('csharp', 3, 'Control Flow', 2, 'C# If Else', {
    heroTagline: 'Decision-making logic in C# programs',
    introduction: 'C# supports conditional statements to perform different actions based on different conditions.',
    syntaxStructure: `if (condition) {\n  // code\n} else {\n  // code\n}`,
    codeExample: `using System;\n\nclass Program {\n  static void Main() {\n    int time = 20;\n    string result = (time < 18) ? "Good day." : "Good evening.";\n    Console.WriteLine(result);\n  }\n}`
  }),
  createStructuredLesson('csharp', 3, 'Control Flow', 3, 'C# Switch Statement'),
  createStructuredLesson('csharp', 3, 'Control Flow', 4, 'C# While Loop'),
  createStructuredLesson('csharp', 3, 'Control Flow', 5, 'C# For Loop')
];

const module4Lessons = [
  createStructuredLesson('csharp', 4, 'Arrays & Methods', 1, 'C# Arrays', {
    heroTagline: 'Handling collections of structured data in C#',
    introduction: 'Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.',
    syntaxStructure: `string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};\nConsole.WriteLine(cars[0]);`,
    codeExample: `using System;\n\nclass Program {\n  static void Main() {\n    string[] stack = {"C#", "ASP.NET", "Entity Framework", "Azure"};\n    foreach (string tech in stack) {\n      Console.WriteLine($"Mastering: {tech}");\n    }\n  }\n}`
  }),
  createStructuredLesson('csharp', 4, 'Arrays & Methods', 2, 'C# Methods'),
  createStructuredLesson('csharp', 4, 'Arrays & Methods', 3, 'C# Method Parameters and Overloading')
];

const module5Lessons = [
  createStructuredLesson('csharp', 5, 'C# OOP', 1, 'C# Classes and Objects', {
    heroTagline: 'Classes, Objects, Properties, and Encapsulation in C#',
    introduction: 'C# is an object-oriented language. Everything in C# is associated with classes and objects, along with its fields and methods.',
    syntaxStructure: `class Car {\n  string color = "red";\n  static void Main(string[] args) {\n    Car myObj = new Car();\n    Console.WriteLine(myObj.color);\n  }\n}`,
    codeExample: `using System;\n\nclass Student {\n  public string Name { get; set; }\n  public int Grade { get; set; }\n}\n\nclass Program {\n  static void Main() {\n    Student s = new Student { Name = "Zack", Grade = 12 };\n    Console.WriteLine($"Student: {s.Name}, Grade: {s.Grade}");\n  }\n}`
  }),
  createStructuredLesson('csharp', 5, 'C# OOP', 2, 'C# Class Members and Methods'),
  createStructuredLesson('csharp', 5, 'C# OOP', 3, 'C# Constructors'),
  createStructuredLesson('csharp', 5, 'C# OOP', 4, 'C# Properties and Encapsulation'),
  createStructuredLesson('csharp', 5, 'C# OOP', 5, 'C# Inheritance and Polymorphism')
];

const csharpProjects: Project[] = [
  {
    id: 'proj-csharp-inventory',
    title: 'Enterprise Inventory Management System',
    slug: 'csharp-inventory-manager',
    category: 'fullstack',
    difficulty: 'Intermediate',
    description: 'Construct an object-oriented stock and inventory management tracking application with LINQ querying and product inheritance.',
    skills: ['C#', 'OOP', 'LINQ', 'Properties', 'Collections'],
    requirements: ['Product catalog classes', 'Stock replenishment tracking', 'LINQ price search queries']
  }
];

export const csharpCourse: Course = {
  id: 'course-csharp',
  slug: 'csharp',
  title: 'C#',
  tagline: 'Master Modern .NET Engineering, Unity Game Development, and Cloud Software',
  description: 'Learn C# from syntax basics to object-oriented programming, properties, LINQ, and enterprise applications with live code simulations.',
  category: 'Programming',
  difficulty: 'Intermediate',
  status: 'Active',
  icon: 'Layers',
  badgeType: 'default',
  estimatedHours: 40,
  modulesCount: 5,
  lessonsCount: module1Lessons.length + module2Lessons.length + module3Lessons.length + module4Lessons.length + module5Lessons.length,
  modules: [
    { id: 'csharp-m1', title: 'C# Tutorial & Basics', description: 'Introduction, .NET runtime, syntax, WriteLine, and comments', order: 1, lessons: module1Lessons },
    { id: 'csharp-m2', title: 'Variables & Data Types', description: 'Types, type casting, and Console.ReadLine', order: 2, lessons: module2Lessons },
    { id: 'csharp-m3', title: 'Control Flow & Loops', description: 'If-else branching, switch, while, and for loops', order: 3, lessons: module3Lessons },
    { id: 'csharp-m4', title: 'Arrays & Methods', description: 'Arrays, methods, parameters, and overloading', order: 4, lessons: module4Lessons },
    { id: 'csharp-m5', title: 'Object-Oriented Programming (OOP)', description: 'Classes, objects, constructors, properties, and inheritance', order: 5, lessons: module5Lessons }
  ],
  projects: csharpProjects
};
