import { TopicDefinition } from '../topicData';

export const CSHARP_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: C# Introduction & Basics
  'introduction-to-c': {
    heroTagline: "Modern, type-safe, object-oriented language for enterprise, cloud, and Unity game development",
    introduction: "C# (pronounced 'C-Sharp') is a modern, object-oriented, and type-safe programming language developed by Microsoft led by Anders Hejlsberg. It runs on the **.NET** platform (cross-platform open-source runtime) and powers enterprise web APIs, cloud microservices, Windows desktop apps, and Unity 3D games.",
    definition: {
      term: "C# (.NET)",
      explanation: "A high-level, strongly typed, garbage-collected language compiled to Common Intermediate Language (CIL) and executed just-in-time by the .NET Common Language Runtime (CLR)."
    },
    syntaxStructure: `using System;

namespace CodingVibes {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello, World!");
        }
    }
}`,
    codeExample: `// C# Program on .NET
using System;

namespace CodingVibes {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Welcome to C# on Coding Vibes!");
            
            string framework = ".NET 9";
            int year = 2026;
            
            Console.WriteLine($"Building modern enterprise apps with {framework} in {year}");
        }
    }
}`,
    codeAnnotations: [
      { lineOrToken: "using System;", description: "Imports the System namespace which contains fundamental classes like Console." },
      { lineOrToken: "Console.WriteLine(...);", description: "Outputs formatted text with a trailing newline character to the command line." },
      { lineOrToken: "$\"...{var}\"", description: "C# string interpolation for embedding expressions directly into string literals." }
    ],
    commonMistakes: [
      {
        wrong: "Console.writeLine(\"Test\");",
        correct: "Console.WriteLine(\"Test\");",
        reason: "C# methods use PascalCase (Capitalized 'W' in WriteLine) and are strictly case-sensitive."
      }
    ],
    tips: [
      "C# uses namespaces to organize code and prevent naming conflicts.",
      "Modern C# supports top-level statements for ultra-concise scripts."
    ],
    practice: [
      {
        id: "cs-intro-p1",
        type: "multiple_choice",
        question: "Which runtime engine executes compiled C# Intermediate Language (IL)?",
        options: [
          "Common Language Runtime (CLR)",
          "Node.js V8 engine",
          "Python Interpreter",
          "Direct BIOS execution"
        ],
        correctAnswer: 0,
        explanation: "The .NET Common Language Runtime (CLR) manages execution, JIT compilation, and garbage collection."
      }
    ],
    quiz: [
      {
        id: "cs-intro-q1",
        question: "What popular 3D game engine uses C# as its primary scripting language?",
        options: ["Unity", "Source 2", "CryEngine", "Godot GDScript only"],
        correctAnswerIndex: 0,
        explanation: "Unity uses C# as its core programming language for gameplay scripting."
      }
    ]
  },

  'c-output-console-writeline': {
    heroTagline: "Console.WriteLine() vs Console.Write() and string interpolation ($)",
    introduction: "To output values or print text in C#, you can use the `Console.WriteLine()` method. To print on the same line without a break, use `Console.Write()`.",
    definition: {
      term: "Console.WriteLine",
      explanation: "A standard method in System.Console used to write data followed by the current line terminator to the standard output stream."
    },
    syntaxStructure: `Console.WriteLine("Message");
Console.Write("Same line");`,
    codeExample: `using System;

class Program {
    static void Main() {
        int activeUsers = 12500;
        double responseTimeMs = 4.2;
        
        Console.WriteLine("--- System Status Report ---");
        Console.WriteLine($"Active Users: {activeUsers}");
        Console.WriteLine($"Avg Latency:  {responseTimeMs} ms");
        Console.WriteLine("Service Health: 100% Operational");
    }
}`,
    practice: [
      {
        id: "cs-out-p1",
        type: "multiple_choice",
        question: "What is the difference between Console.Write() and Console.WriteLine()?",
        options: [
          "Console.WriteLine() appends a newline at the end; Console.Write() does not",
          "Console.Write() only accepts numbers",
          "Console.WriteLine() only works in debug mode",
          "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "WriteLine adds a line break after the printed text; Write keeps the cursor on the same line."
      }
    ]
  },

  // Module 2: Variables & Data Types
  'c-variables': {
    heroTagline: "Statically typed variables: int, double, char, string, bool, and var",
    introduction: "Variables are containers for storing data values. In C#, there are different types of variables defined with different keywords: `int`, `double`, `char`, `string`, `bool`. You can also use the `var` keyword for implicit compile-time typing.",
    definition: {
      term: "Variable",
      explanation: "A strongly typed symbolic storage location in memory."
    },
    syntaxStructure: `type variableName = value;
var implicitVar = value; // Type inferred by compiler`,
    codeExample: `using System;

class Program {
    static void Main() {
        string appName = "Coding Vibes";
        int releaseYear = 2026;
        double rating = 4.98;
        bool isFree = true;
        
        Console.WriteLine($"App: {appName}");
        Console.WriteLine($"Released: {releaseYear}");
        Console.WriteLine($"Rating: {rating} / 5.0");
        Console.WriteLine($"Free Tier: {isFree}");
    }
}`,
    practice: [
      {
        id: "cs-var-p1",
        type: "multiple_choice",
        question: "In C#, what does the 'var' keyword do?",
        options: [
          "Tells the compiler to infer the variable's type from the right-hand initialization value",
          "Creates a dynamic, untyped variable like in JavaScript",
          "Declares a global variable",
          "Allocates unmanaged heap memory"
        ],
        correctAnswer: 0,
        explanation: "'var' provides implicit typing at compile time; the variable is still 100% strongly typed."
      }
    ]
  },

  // Module 3: Control Flow & Switch
  'c-if-else': {
    heroTagline: "Decision logic with if, else if, else, and logical expressions",
    introduction: "C# uses conditions to make decisions. You can use `if`, `else`, and `else if` to execute different blocks of code based on whether a boolean expression evaluates to `true` or `false`.",
    definition: {
      term: "if...else in C#",
      explanation: "Conditional branching statement using boolean expressions."
    },
    syntaxStructure: `if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}`,
    codeExample: `using System;

class Program {
    static void Main() {
        int score = 88;
        
        if (score >= 90) {
            Console.WriteLine("Grade: A (Distinction)");
        } else if (score >= 80) {
            Console.WriteLine("Grade: B (Above Average)");
        } else if (score >= 70) {
            Console.WriteLine("Grade: C (Average)");
        } else {
            Console.WriteLine("Grade: F (Needs Retest)");
        }
    }
}`,
    practice: [
      {
        id: "cs-if-p1",
        type: "fill_in_blank",
        question: "Which keyword is used in C# for the 'else if' branch?",
        instructions: "if (x > 10) { ... } ___ (x > 5) { ... }",
        correctAnswer: "else if",
        explanation: "C# uses two words 'else if' (unlike Python's 'elif')."
      }
    ]
  },

  // Module 4: Loops & Arrays
  'c-foreach-loop': {
    heroTagline: "Clean, type-safe iteration through arrays and IEnumerable collections",
    introduction: "There is also a `foreach` loop, which is used exclusively to loop through elements in an array or collection.",
    definition: {
      term: "foreach Loop",
      explanation: "A loop control structure that iterates over each item in any enumerable collection without requiring manual index tracking."
    },
    syntaxStructure: `foreach (type variableName in arrayName) {
    // code
}`,
    codeExample: `using System;

class Program {
    static void Main() {
        string[] technologies = { "C#", "ASP.NET Core", "Entity Framework", "Azure" };
        
        Console.WriteLine("Enterprise Tech Stack:");
        foreach (string tech in technologies) {
            Console.WriteLine($"  * {tech}");
        }
    }
}`,
    practice: [
      {
        id: "cs-fe-p1",
        type: "multiple_choice",
        question: "Which keyword introduces a collection-based loop in C#?",
        options: ["foreach", "for in", "iterate", "loop"],
        correctAnswer: 0,
        explanation: "C# uses the 'foreach' keyword."
      }
    ]
  },

  // Module 5: OOP & Properties
  'c-properties-get-set': {
    heroTagline: "Encapsulated properties with { get; set; } auto-implemented accessors",
    introduction: "In C#, properties combine aspects of both fields and methods. A property is like a field, but includes `get` and `set` accessors to read and write private fields safely with validation.",
    definition: {
      term: "Properties in C#",
      explanation: "Named members of classes that provide a flexible mechanism to read, write, or compute the values of private fields."
    },
    syntaxStructure: `public class Person {
    public string Name { get; set; } // Auto-implemented property
    public int Age { get; set; }
}`,
    codeExample: `using System;

class Student {
    // Auto-implemented properties
    public string Name { get; set; }
    public int Grade { get; set; }
    
    public Student(string name, int grade) {
        Name = name;
        Grade = grade;
    }
}

class Program {
    static void Main() {
        Student s = new Student("Zack", 12);
        Console.WriteLine($"Student Profile: {s.Name}, Grade {s.Grade}");
        
        // Modifying property via setter
        s.Grade = 13;
        Console.WriteLine($"Updated Grade: {s.Grade}");
    }
}`,
    practice: [
      {
        id: "cs-prop-p1",
        type: "multiple_choice",
        question: "What accessors are used in C# properties?",
        options: ["get and set", "read and write", "fetch and store", "input and output"],
        correctAnswer: 0,
        explanation: "C# properties use 'get' and 'set' accessors."
      }
    ]
  }
};
