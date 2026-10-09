import { TopicDefinition } from '../topicData';

export const JAVA_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: Java Tutorial & Basics
  'introduction-to-java': {
    heroTagline: "High-performance, object-oriented enterprise language running on 3+ billion devices",
    introduction: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Developed by James Gosling at Sun Microsystems (now Oracle) in 1995, its core philosophy is **WORA**: 'Write Once, Run Anywhere' via the **Java Virtual Machine (JVM)**.",
    definition: {
      term: "Java",
      explanation: "A statically typed, compiled-to-bytecode, object-oriented programming language executed on the Java Virtual Machine across servers, Android phones, and enterprise clouds."
    },
    syntaxStructure: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    codeExample: `// First Java Program
public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Java on Coding Vibes!");
        System.out.println("Write Once, Run Anywhere (WORA)");
        
        int year = 2026;
        System.out.println("Enterprise Software Ready: " + year);
    }
}`,
    codeAnnotations: [
      { lineOrToken: "public class Main", description: "In Java, every application begins with a class definition whose name matches the .java filename." },
      { lineOrToken: "public static void main(String[] args)", description: "The mandatory entry point method invoked by the JVM to begin execution." },
      { lineOrToken: "System.out.println()", description: "Built-in method of the PrintStream class used to print messages with a newline to the console." }
    ],
    commonMistakes: [
      {
        wrong: "class main {\n  void Main() {\n    print(\"Hello\");\n  }\n}",
        correct: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello\");\n  }\n}",
        reason: "Java is strictly case-sensitive and requires the exact signature 'public static void main(String[] args)'."
      }
    ],
    tips: [
      "Every Java statement must end with a semicolon (;).",
      "The filename must exactly match the public class name (e.g. Main.java for public class Main)."
    ],
    practice: [
      {
        id: "java-intro-p1",
        type: "multiple_choice",
        question: "What is the entry point method of every Java standalone program?",
        options: [
          "public static void main(String[] args)",
          "public void start()",
          "function main()",
          "public static int run()"
        ],
        correctAnswer: 0,
        explanation: "The JVM specifically looks for 'public static void main(String[] args)' to launch a Java application."
      }
    ],
    quiz: [
      {
        id: "java-intro-q1",
        question: "What executes compiled Java bytecode (.class files)?",
        options: [
          "The Java Virtual Machine (JVM)",
          "The browser V8 engine directly",
          "The CPU directly without interpretation",
          "An HTML parser"
        ],
        correctAnswerIndex: 0,
        explanation: "The javac compiler produces bytecode, which the JVM translates and optimizes for the host operating system."
      }
    ]
  },

  'java-getting-started': {
    heroTagline: "JDK (Java Development Kit), JRE, and the javac compiler workflow",
    introduction: "To write Java, you need the **JDK (Java Development Kit)**, which includes the compiler (`javac`) and the runtime environment (`java`). You compile `Main.java` with `javac Main.java`, generating `Main.class` (bytecode), which is then run using `java Main`.",
    definition: {
      term: "JDK vs JRE vs JVM",
      explanation: "JDK is the development kit (compiler + tools); JRE is the runtime environment (libraries); JVM is the virtual machine that actually executes the bytecode."
    },
    syntaxStructure: `// Command-line build & run workflow:
// $ javac Main.java    -> Produces Main.class
// $ java Main          -> Executes the program`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        String javaVersion = System.getProperty("java.version");
        String osName = System.getProperty("os.name");
        
        System.out.println("Java Runtime Environment Active");
        System.out.println("JVM Version: " + javaVersion);
        System.out.println("Operating System: " + osName);
    }
}`,
    practice: [
      {
        id: "java-start-p1",
        type: "multiple_choice",
        question: "Which command-line tool compiles .java source files into .class bytecode?",
        options: ["javac", "java", "javarun", "jvm"],
        correctAnswer: 0,
        explanation: "'javac' is the Java compiler included in the JDK."
      }
    ]
  },

  'java-syntax': {
    heroTagline: "Class hierarchy, curly braces, case-sensitivity, and mandatory semicolons",
    introduction: "Java syntax is heavily influenced by C and C++. Every piece of code belongs inside a class. Java is strongly typed and strictly case-sensitive: `myVar` and `MyVar` are completely different identifiers.",
    definition: {
      term: "Java Syntax",
      explanation: "The set of rules defining how Java programs are written and interpreted by the compiler."
    },
    syntaxStructure: `public class ClassName {
    // fields and methods
}`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        // Statements executed sequentially
        int a = 10;
        int b = 25;
        int sum = a + b;
        
        System.out.println("Variable a: " + a);
        System.out.println("Variable b: " + b);
        System.out.println("Sum result: " + sum);
    }
}`,
    commonMistakes: [
      {
        wrong: "System.out.println(\"Hello\") // missing semicolon",
        correct: "System.out.println(\"Hello\");",
        reason: "Forgetting a trailing semicolon causes a compiler error in Java."
      }
    ],
    practice: [
      {
        id: "java-syn-p1",
        type: "fill_in_blank",
        question: "Every statement in Java must end with which punctuation mark?",
        instructions: "System.out.println('Coding')___",
        correctAnswer: ";",
        explanation: "A semicolon (;) terminates statements in Java."
      }
    ]
  },

  // Module 2: Variables & Data Types
  'java-variables': {
    heroTagline: "Strongly typed variables: int, double, char, boolean, and String",
    introduction: "In Java, every variable must be declared with a specific data type before it can be used. Java is **statically typed**, meaning the type is checked at compile-time and cannot change arbitrarily.",
    definition: {
      term: "Variable",
      explanation: "A container that holds data which can be changed during program execution. Declared as: type variableName = value;"
    },
    syntaxStructure: `type variableName = value;`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        // Primitive and reference variables
        int studentAge = 21;
        double gpa = 3.85;
        char gradeLetter = 'A';
        boolean isEnrolled = true;
        String studentName = "Alexander";
        
        System.out.println("Student: " + studentName);
        System.out.println("Age: " + studentAge);
        System.out.println("GPA: " + gpa);
        System.out.println("Grade: " + gradeLetter);
        System.out.println("Enrolled: " + isEnrolled);
    }
}`,
    codeAnnotations: [
      { lineOrToken: "char gradeLetter = 'A'", description: "char literals use single quotes ''; String literals use double quotes \"\"." },
      { lineOrToken: "double gpa = 3.85", description: "Stores 64-bit floating point numbers with high precision." }
    ],
    practice: [
      {
        id: "java-var-p1",
        type: "multiple_choice",
        question: "Which of the following is the correct syntax to declare an integer variable in Java?",
        options: ["int num = 5;", "num = 5;", "var int = 5;", "integer num = 5;"],
        correctAnswer: 0,
        explanation: "Java requires 'type variableName = value;' syntax: 'int num = 5;'."
      }
    ]
  },

  'java-data-types': {
    heroTagline: "Primitive types (byte, short, int, long, float, double, boolean, char) vs Reference types",
    introduction: "Java data types are divided into two groups: **Primitive data types** (which directly store binary values in stack memory) and **Non-Primitive / Reference data types** (like String, Arrays, and Classes that point to heap objects).",
    definition: {
      term: "Primitive Data Types",
      explanation: "The 8 predefined types in Java: byte (1 byte), short (2 bytes), int (4 bytes), long (8 bytes), float (4 bytes), double (8 bytes), boolean (1 bit), and char (2 bytes)."
    },
    syntaxStructure: `byte b = 100;
short s = 5000;
int i = 100000;
long l = 15000000000L;
float f = 5.75f;
double d = 19.99d;
boolean bool = true;
char c = 'B';`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        int maxInt = Integer.MAX_VALUE;
        double pi = 3.14159265359;
        boolean flag = true;
        char letter = 'J';
        
        System.out.println("Max Integer: " + maxInt);
        System.out.println("Double Pi: " + pi);
        System.out.println("Flag: " + flag);
        System.out.println("Letter: " + letter);
    }
}`,
    practice: [
      {
        id: "java-types-p1",
        type: "multiple_choice",
        question: "How many primitive data types exist in Java?",
        options: ["8", "4", "10", "12"],
        correctAnswer: 0,
        explanation: "Java has 8 primitive data types: byte, short, int, long, float, double, boolean, and char."
      }
    ]
  },

  'java-type-casting': {
    heroTagline: "Widening casting (automatic) vs Narrowing casting (manual)",
    introduction: "Type casting is when you assign a value of one primitive data type to another type. **Widening casting** (smaller to larger type, e.g. int to double) happens automatically. **Narrowing casting** (larger to smaller, e.g. double to int) must be done manually with parentheses.",
    definition: {
      term: "Type Casting",
      explanation: "Converting a value from one data type to another: widening (safe, automatic) or narrowing (potential data loss, manual)."
    },
    syntaxStructure: `// Widening (Automatic)
int myInt = 9;
double myDouble = myInt; // 9.0

// Narrowing (Manual)
double d = 9.78d;
int i = (int) d; // 9 (truncates decimal)`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        // Automatic Widening Casting: int to double
        int userScore = 45;
        double exactScore = userScore;
        System.out.println("Widened int to double: " + exactScore);
        
        // Manual Narrowing Casting: double to int
        double originalGpa = 3.89;
        int truncatedGpa = (int) originalGpa;
        System.out.println("Narrowed double to int: " + truncatedGpa);
        
        // Practical calculation
        int maxScore = 500;
        int actualScore = 423;
        double percentage = ((double) actualScore / maxScore) * 100.0;
        System.out.println("Score Percentage: " + percentage + "%");
    }
}`,
    practice: [
      {
        id: "java-cast-p1",
        type: "multiple_choice",
        question: "What is the result of '(int) 9.99' in Java?",
        options: ["9", "10", "9.99", "Compiler Error"],
        correctAnswer: 0,
        explanation: "Narrowing cast from double to int simply truncates the decimal portion, yielding 9."
      }
    ]
  },

  // Module 3: Control Flow & Loops
  'java-if-else': {
    heroTagline: "Conditional branching with if, else if, else, and the ternary operator",
    introduction: "Java conditions use boolean operators (==, !=, <, >, <=, >=) to branch execution logic.",
    definition: {
      term: "if...else",
      explanation: "A control structure used to execute specific code blocks based on boolean condition evaluations."
    },
    syntaxStructure: `if (condition1) {
    // block 1
} else if (condition2) {
    // block 2
} else {
    // fallback block
}`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        int hour = 14;
        
        if (hour < 12) {
            System.out.println("Good morning!");
        } else if (hour < 18) {
            System.out.println("Good afternoon!");
        } else {
            System.out.println("Good evening!");
        }
        
        // Ternary operator: variable = (condition) ? ifTrue : ifFalse;
        String timeOfDay = (hour < 12) ? "Morning" : "Afternoon/Evening";
        System.out.println("Time period: " + timeOfDay);
    }
}`,
    practice: [
      {
        id: "java-if-p1",
        type: "multiple_choice",
        question: "In Java, what must the condition inside an 'if (...)' evaluate to?",
        options: ["A boolean (true or false)", "An integer (0 or 1)", "Any string", "A memory address"],
        correctAnswer: 0,
        explanation: "Unlike C/C++, Java strictly requires a boolean expression (true or false) inside an if condition."
      }
    ]
  },

  'java-switch': {
    heroTagline: "Clean multi-branch selection based on values of byte, short, char, int, enum, or String",
    introduction: "Instead of writing many `if..else` statements, you can use the `switch` statement. The switch statement selects one of many code blocks to be executed using `case` labels and `break` statements.",
    definition: {
      term: "switch Statement",
      explanation: "A control statement that tests a variable for equality against a list of values (cases)."
    },
    syntaxStructure: `switch(expression) {
    case x:
        // code
        break;
    case y:
        // code
        break;
    default:
        // code
}`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        int dayOfWeek = 4;
        String dayName;
        
        switch (dayOfWeek) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid day"; break;
        }
        
        System.out.println("Day " + dayOfWeek + " is: " + dayName);
    }
}`,
    practice: [
      {
        id: "java-sw-p1",
        type: "multiple_choice",
        question: "What happens in a Java switch statement if you forget the 'break;' statement in a matching case?",
        options: [
          "Execution 'falls through' to the next case statements until a break or the end is reached",
          "A compiler error occurs immediately",
          "The program throws an exception and crashes",
          "The switch restarts from case 1"
        ],
        correctAnswer: 0,
        explanation: "Without a break statement, Java continues executing subsequent case statements (fall-through behavior)."
      }
    ]
  },

  'java-for-loop': {
    heroTagline: "Definite iteration: classic 3-part for loop and enhanced for-each loop",
    introduction: "When you know exactly how many times you want to loop through a block of code, use the `for` loop. For collections and arrays, Java provides the concise **enhanced for-each loop**.",
    definition: {
      term: "for loop",
      explanation: "A loop control structure that allows you to efficiently write a loop that needs to execute a specific number of times."
    },
    syntaxStructure: `for (initialization; condition; update) {
    // code
}

// Enhanced for-each loop:
for (type item : arrayOrCollection) {
    // code
}`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        System.out.println("Standard for loop:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("  Iteration: " + i);
        }
        
        System.out.println("\nEnhanced for-each loop over array:");
        String[] languages = {"Java", "Python", "SQL", "C++"};
        for (String lang : languages) {
            System.out.println("  Language: " + lang);
        }
    }
}`,
    practice: [
      {
        id: "java-for-p1",
        type: "multiple_choice",
        question: "What is the syntax for the enhanced for-each loop in Java?",
        options: [
          "for (type variable : array)",
          "for (variable in array)",
          "foreach (array as variable)",
          "repeat (variable from array)"
        ],
        correctAnswer: 0,
        explanation: "Java uses 'for (type variable : array)' for its enhanced for-each iteration."
      }
    ]
  },

  // Module 4: Arrays & Methods
  'java-arrays': {
    heroTagline: "Fixed-length, contiguous memory storage for homogeneous elements",
    introduction: "Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. In Java, arrays have a **fixed size** set upon creation, accessible via `array.length`.",
    definition: {
      term: "Java Array",
      explanation: "An indexed container object that holds a fixed number of values of a single type."
    },
    syntaxStructure: `String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
int[] myNumbers = {10, 20, 30, 40};
System.out.println(cars[0]); // First element`,
    codeExample: `public class Main {
    public static void main(String[] args) {
        int[] scores = {95, 88, 72, 91, 84};
        
        System.out.println("Total Scores: " + scores.length);
        System.out.println("First Score: " + scores[0]);
        System.out.println("Last Score: " + scores[scores.length - 1]);
        
        // Calculate average
        int sum = 0;
        for (int score : scores) {
            sum += score;
        }
        double avg = (double) sum / scores.length;
        System.out.println("Average Score: " + avg);
    }
}`,
    practice: [
      {
        id: "java-arr-p1",
        type: "multiple_choice",
        question: "How do you find the number of elements in a Java array?",
        options: ["array.length", "array.size()", "array.length()", "array.count"],
        correctAnswer: 0,
        explanation: "In Java, array.length is a property (not a method) containing the element count."
      }
    ]
  },

  'java-methods': {
    heroTagline: "Modular reusable functions: parameters, return types, and overloading",
    introduction: "A method is a block of code which only runs when it is called. You can pass data (parameters) into a method, and methods can return values. Methods are used to perform certain actions, and they are also known as functions.",
    definition: {
      term: "Method",
      explanation: "A collection of statements grouped together to perform an operation within a class."
    },
    syntaxStructure: `public static returnType methodName(paramType paramName) {
    // method body
    return value;
}`,
    codeExample: `public class Main {
    // Custom static method returning an integer
    public static int calculateArea(int width, int height) {
        return width * height;
    }
    
    // Method overloading: same name, different parameters
    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }
    
    public static void main(String[] args) {
        int rectArea = calculateArea(12, 8);
        double circleArea = calculateArea(5.0);
        
        System.out.println("Rectangle Area (12x8): " + rectArea);
        System.out.printf("Circle Area (r=5.0): %.2f\\n", circleArea);
    }
}`,
    codeAnnotations: [
      { lineOrToken: "public static int calculateArea", description: "Declares a method accessible without instantiating the class, returning an integer." }
    ],
    practice: [
      {
        id: "java-meth-p1",
        type: "multiple_choice",
        question: "What keyword indicates that a method does not return any value in Java?",
        options: ["void", "null", "empty", "none"],
        correctAnswer: 0,
        explanation: "'void' specifies that a method does not return any value."
      }
    ]
  },

  // Module 5: Object-Oriented Programming (OOP)
  'java-oop-introduction': {
    heroTagline: "Classes, Objects, Encapsulation, Inheritance, Polymorphism, and Abstraction",
    introduction: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which contain both state (fields) and behavior (methods). OOP keeps code DRY ('Don't Repeat Yourself'), organized, and scalable.",
    definition: {
      term: "OOP (Object-Oriented Programming)",
      explanation: "A paradigm organizing software design around data, or objects, rather than functions and logic."
    },
    syntaxStructure: `// Class definition
class Dog {
    String breed;
    void bark() {
        System.out.println("Woof!");
    }
}

// Creating an object (instantiation)
Dog myDog = new Dog();`,
    codeExample: `// Java OOP Example
class Student {
    String name;
    int rollNumber;
    
    // Constructor
    public Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
    
    public void displayInfo() {
        System.out.println("Student: " + this.name + " | Roll: #" + this.rollNumber);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Sophia", 101);
        Student s2 = new Student("Lucas", 102);
        
        s1.displayInfo();
        s2.displayInfo();
    }
}`,
    practice: [
      {
        id: "java-oop-p1",
        type: "multiple_choice",
        question: "In Java, what keyword is used to create a new instance of a class?",
        options: ["new", "create", "instantiate", "alloc"],
        correctAnswer: 0,
        explanation: "The 'new' operator allocates memory on the heap for a new object."
      }
    ]
  },

  'java-classes-and-objects': {
    heroTagline: "Blueprints and instances: defining attributes and instantiating objects",
    introduction: "A class is a blueprint from which individual objects are created. An object is an instance of a class that holds concrete data values.",
    definition: {
      term: "Class vs Object",
      explanation: "A class is the template (e.g. Car); an object is the concrete instance created from it (e.g. myRedTesla)."
    },
    syntaxStructure: `public class Car {
    String model;
    int speed;
}`,
    codeExample: `class BankAccount {
    String accountHolder;
    double balance;
    
    public BankAccount(String holder, double initialDeposit) {
        accountHolder = holder;
        balance = initialDeposit;
    }
    
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited $" + amount + ". New balance: $" + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("Alice Smith", 500.0);
        System.out.println("Account created for: " + account.accountHolder);
        account.deposit(250.0);
    }
}`,
    practice: [
      {
        id: "java-obj-p1",
        type: "multiple_choice",
        question: "What is an instance of a class called?",
        options: ["Object", "Interface", "Method", "Variable"],
        correctAnswer: 0,
        explanation: "An instance of a class is called an object."
      }
    ]
  },

  'java-inheritance': {
    heroTagline: "Inheriting attributes and methods with extends and super keywords",
    introduction: "In Java, it is possible to inherit attributes and methods from one class to another. We group the 'inheritance concept' into two categories: Subclass (child) and Superclass (parent). Use the `extends` keyword.",
    definition: {
      term: "Inheritance",
      explanation: "A mechanism where a new class derives properties and behaviors from an existing class, facilitating code reuse."
    },
    syntaxStructure: `class Subclass extends Superclass {
    // inherits fields and methods
}`,
    codeExample: `// Superclass (Parent)
class Vehicle {
    protected String brand = "Ford";
    public void honk() {
        System.out.println("Beep, beep!");
    }
}

// Subclass (Child)
class Car extends Vehicle {
    private String modelName = "Mustang";
    
    public void displayDetails() {
        System.out.println("Brand: " + brand + ", Model: " + modelName);
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.honk(); // Inherited from Vehicle
        myCar.displayDetails();
    }
}`,
    practice: [
      {
        id: "java-inh-p1",
        type: "multiple_choice",
        question: "Which keyword is used to inherit from a class in Java?",
        options: ["extends", "inherits", "implements", "super"],
        correctAnswer: 0,
        explanation: "'extends' is used for class inheritance in Java."
      }
    ]
  }
};
