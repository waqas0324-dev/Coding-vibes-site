import { TopicDefinition } from '../topicData';

export const CPP_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: C++ Basics & Environment
  'introduction-to-c': {
    heroTagline: "Ultra-fast, statically typed, systems and game development language",
    introduction: "C++ was developed by Bjarne Stroustrup at Bell Laboratories in 1979 as an extension of the C language ('C with Classes'). Today, C++ is the premier language for high-performance computing, video game engines (Unreal Engine), operating systems, finance trading systems, browsers, and robotics.",
    definition: {
      term: "C++",
      explanation: "A cross-platform, compiled, statically typed, multi-paradigm language that gives programmers extreme control over system hardware, CPU instructions, and memory layout."
    },
    syntaxStructure: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    codeExample: `// Modern C++ Program
#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Welcome to C++ on Coding Vibes!" << endl;
    
    string engine = "Unreal Engine 5";
    int fpsTarget = 120;
    
    cout << "Target Engine: " << engine << endl;
    cout << "Performance: " << fpsTarget << " FPS" << endl;
    
    return 0;
}`,
    codeAnnotations: [
      { lineOrToken: "#include <iostream>", description: "Header file library allowing standard input and output objects (cin, cout)." },
      { lineOrToken: "using namespace std;", description: "Enables using standard library names (like cout and endl) without the std:: prefix." },
      { lineOrToken: "cout << ... << endl;", description: "Stream insertion operator (<<) sends text to standard output; endl flushes the stream with a newline." }
    ],
    commonMistakes: [
      {
        wrong: "cout >> \"Hello\";",
        correct: "cout << \"Hello\";",
        reason: "Use insertion operator '<<' with cout, and extraction operator '>>' with cin."
      }
    ],
    tips: [
      "Every C++ program starts at the main() function.",
      "Always return 0 from main() to signal successful program termination."
    ],
    practice: [
      {
        id: "cpp-intro-p1",
        type: "multiple_choice",
        question: "Which header file is required in C++ for standard input and output (cin, cout)?",
        options: ["<iostream>", "<stdio.h>", "<conio.h>", "<stdlib.h>"],
        correctAnswer: 0,
        explanation: "<iostream> defines standard stream objects cin, cout, cerr, and clog."
      }
    ],
    quiz: [
      {
        id: "cpp-intro-q1",
        question: "How is C++ source code converted into an executable binary?",
        options: [
          "Compiled directly into native CPU machine instructions by a compiler (GCC/Clang/MSVC)",
          "Interpreted line-by-line in a web browser",
          "Transpiled into JavaScript bytecode",
          "Uploaded to a cloud server to execute"
        ],
        correctAnswerIndex: 0,
        explanation: "C++ compilers compile source files directly to optimized native machine code for the target CPU architecture."
      }
    ]
  },

  'c-output-cout': {
    heroTagline: "Standard stream insertion with std::cout and stream manipulator endl",
    introduction: "The `cout` object, together with the `<<` operator, is used to output values and print text in C++. You can add as many `<<` operators as you like to chain outputs.",
    definition: {
      term: "cout (Character Output)",
      explanation: "An instance of the ostream class in C++ used to display standard output to the console."
    },
    syntaxStructure: `cout << "Text" << variable << endl;`,
    codeExample: `#include <iostream>
using namespace std;

int main() {
    int a = 15;
    int b = 30;
    
    cout << "Value of A: " << a << endl;
    cout << "Value of B: " << b << endl;
    cout << "Sum (A + B): " << (a + b) << endl;
    cout << "Product (A * B): " << (a * b) << endl;
    
    return 0;
}`,
    practice: [
      {
        id: "cpp-out-p1",
        type: "fill_in_blank",
        question: "Fill in the operator used to send output to cout:",
        instructions: "cout ___ 'Hello World';",
        correctAnswer: "<<",
        explanation: "The '<<' insertion operator directs data to the cout output stream."
      }
    ]
  },

  // Module 2: Variables, Types & User Input
  'c-variables': {
    heroTagline: "Memory containers: int, double, char, string, and bool",
    introduction: "Variables are containers for storing data values. In C++, there are different types of variables defined with different keywords: `int`, `double`, `char`, `string`, and `bool`.",
    definition: {
      term: "C++ Variable",
      explanation: "A reserved, typed memory location that stores a value and can be manipulated by program instructions."
    },
    syntaxStructure: `type variableName = value;`,
    codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int year = 2026;
    double price = 49.99;
    char tier = 'S';
    bool inStock = true;
    string title = "C++ Mastery";
    
    cout << "Product: " << title << endl;
    cout << "Year: " << year << endl;
    cout << "Price: $" << price << endl;
    cout << "Tier: " << tier << endl;
    cout << "In Stock: " << (inStock ? "Yes" : "No") << endl;
    
    return 0;
}`,
    practice: [
      {
        id: "cpp-var-p1",
        type: "multiple_choice",
        question: "Which data type in C++ is used to store decimal numbers with floating-point precision?",
        options: ["double", "int", "char", "string"],
        correctAnswer: 0,
        explanation: "'double' stores 64-bit floating-point numbers with up to 15 decimal digits of precision."
      }
    ]
  },

  'c-user-input': {
    heroTagline: "Reading keyboard input with cin and the extraction operator >>",
    introduction: "You have already learned that `cout` is used to output (print) values. Now we will use `cin` to get user input. `cin` is a predefined variable that reads data from the keyboard with the extraction operator (`>>`).",
    definition: {
      term: "cin (Character Input)",
      explanation: "An instance of the istream class used to read input from the standard input stream (keyboard)."
    },
    syntaxStructure: `int x;
cin >> x;`,
    codeExample: `#include <iostream>
using namespace std;

int main() {
    int length = 10;
    int width = 5;
    
    cout << "Rectangle dimensions:" << endl;
    cout << "Length: " << length << ", Width: " << width << endl;
    
    int area = length * width;
    int perimeter = 2 * (length + width);
    
    cout << "Calculated Area: " << area << endl;
    cout << "Calculated Perimeter: " << perimeter << endl;
    
    return 0;
}`,
    practice: [
      {
        id: "cpp-in-p1",
        type: "multiple_choice",
        question: "Which operator is used with cin to extract user input into a variable?",
        options: [">>", "<<", "->", "::"],
        correctAnswer: 0,
        explanation: "The '>>' extraction operator reads data from the cin stream into target variables."
      }
    ]
  },

  // Module 3: Control Flow
  'c-conditions': {
    heroTagline: "Branching logic with if, else if, else, and logical comparisons",
    introduction: "C++ supports the usual logical conditions from mathematics: less than (`<`), greater than (`>`), equal to (`==`), not equal (`!=`), and combined with `&&` (AND) or `||` (OR).",
    definition: {
      term: "Conditional Statements",
      explanation: "Directs computer execution along different paths based on whether boolean expressions evaluate to true or false."
    },
    syntaxStructure: `if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}`,
    codeExample: `#include <iostream>
using namespace std;

int main() {
    int batteryLevel = 75;
    
    if (batteryLevel >= 80) {
        cout << "Battery Optimal (" << batteryLevel << "%)" << endl;
    } else if (batteryLevel >= 20) {
        cout << "Battery Normal (" << batteryLevel << "%)" << endl;
    } else {
        cout << "Low Battery Warning! Plug in charger." << endl;
    }
    
    return 0;
}`,
    practice: [
      {
        id: "cpp-cond-p1",
        type: "multiple_choice",
        question: "Which operator checks equality between two values in C++?",
        options: ["==", "=", "===", "equals"],
        correctAnswer: 0,
        explanation: "'==' is the comparison operator for equality; '=' is for variable assignment."
      }
    ]
  },

  'c-for-loop': {
    heroTagline: "Iterating with initialization, condition check, and loop increment counter",
    introduction: "When you know exactly how many times you want to loop through a block of code, use the `for` loop instead of a `while` loop.",
    definition: {
      term: "for loop",
      explanation: "A control flow statement for specifying iteration where code executes repeatedly for a specified count."
    },
    syntaxStructure: `for (int i = 0; i < 5; i++) {
    cout << i << endl;
}`,
    codeExample: `#include <iostream>
using namespace std;

int main() {
    cout << "Counting squares from 1 to 5:" << endl;
    
    for (int i = 1; i <= 5; i++) {
        int square = i * i;
        cout << "  " << i << "^2 = " << square << endl;
    }
    
    return 0;
}`,
    practice: [
      {
        id: "cpp-for-p1",
        type: "multiple_choice",
        question: "What is the third component in the parentheses of a standard C++ for loop?",
        options: [
          "The increment or decrement expression",
          "The termination condition",
          "The variable declaration only",
          "The return value"
        ],
        correctAnswer: 0,
        explanation: "The third component (e.g. i++) updates the loop counter after each iteration."
      }
    ]
  },

  // Module 4: Pointers & References
  'c-pointers': {
    heroTagline: "Direct memory addresses, the & reference operator, and the * dereference operator",
    introduction: "A **pointer** in C++ is a variable that stores the memory address of another variable as its value. A pointer variable points to a data type of the same type, and is created with the `*` operator.",
    definition: {
      term: "Pointer",
      explanation: "A variable that holds the memory address of another variable, allowing direct hardware memory manipulation."
    },
    syntaxStructure: `string food = "Pizza";
string* ptr = &food; // Stores address of food
cout << ptr;         // Memory address (e.g. 0x7ffd...)
cout << *ptr;        // Dereference: "Pizza"`,
    codeExample: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int score = 100;
    int* ptr = &score; // Pointer storing memory address
    
    cout << "Variable value (score): " << score << endl;
    cout << "Pointer value (address): " << ptr << endl;
    cout << "Dereferenced pointer (*ptr): " << *ptr << endl;
    
    // Mutating value via pointer
    *ptr = 150;
    cout << "New score via pointer modification: " << score << endl;
    
    return 0;
}`,
    codeAnnotations: [
      { lineOrToken: "&score", description: "Address-of operator: returns the hexadecimal memory address of variable 'score'." },
      { lineOrToken: "*ptr", description: "Dereference operator: accesses or modifies the value stored at the memory address." }
    ],
    commonMistakes: [
      {
        wrong: "int* p = score;",
        correct: "int* p = &score;",
        reason: "Pointers store memory addresses, so you must use the address-of operator '&' when assigning an existing variable."
      }
    ],
    practice: [
      {
        id: "cpp-ptr-p1",
        type: "multiple_choice",
        question: "Which operator is used to get the memory address of a variable in C++?",
        options: ["&", "*", "->", "%"],
        correctAnswer: 0,
        explanation: "The ampersand (&) is the address-of operator in C and C++."
      }
    ]
  },

  // Module 5: Functions & Methods
  'c-functions': {
    heroTagline: "Defining functions, pass-by-value vs pass-by-reference, and overloading",
    introduction: "A function is a block of code which only runs when it is called. You can pass data (known as parameters) into a function. Functions are used to perform certain actions and keep code organized.",
    definition: {
      term: "Function",
      explanation: "A named, reusable block of statements that carries out a distinct computation."
    },
    syntaxStructure: `returnType functionName(paramType param) {
    // code
    return value;
}`,
    codeExample: `#include <iostream>
using namespace std;

// Function declaration & definition
int addNumbers(int x, int y) {
    return x + y;
}

// Pass-by-reference using &
void swapValues(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int result = addNumbers(20, 30);
    cout << "Sum: " << result << endl;
    
    int val1 = 5, val2 = 10;
    cout << "Before swap: val1=" << val1 << ", val2=" << val2 << endl;
    swapValues(val1, val2);
    cout << "After swap:  val1=" << val1 << ", val2=" << val2 << endl;
    
    return 0;
}`,
    practice: [
      {
        id: "cpp-fn-p1",
        type: "multiple_choice",
        question: "How do you pass a variable by reference in a C++ function parameter list?",
        options: ["Use & before parameter name (e.g. int &x)", "Use * before type", "Use the ref keyword", "Pass as an array"],
        correctAnswer: 0,
        explanation: "Putting '&' before the parameter name passes the caller's actual memory reference instead of making a copy."
      }
    ]
  },

  // Module 6: OOP in C++
  'c-classes-and-objects': {
    heroTagline: "Encapsulation, public/private access specifiers, and member methods",
    introduction: "C++ is an object-oriented programming language. Everything in C++ is associated with classes and objects, along with its attributes and methods.",
    definition: {
      term: "Class in C++",
      explanation: "A user-defined data type that acts as a blueprint for objects, grouping data fields and member functions."
    },
    syntaxStructure: `class MyClass {
  public:             // Access specifier
    int myNum;        // Attribute
    void myMethod();  // Method
};`,
    codeExample: `#include <iostream>
#include <string>
using namespace std;

class Car {
  public:
    string brand;
    string model;
    int year;
    
    // Constructor
    Car(string b, string m, int y) {
        brand = b;
        model = m;
        year = y;
    }
    
    void printDetails() {
        cout << year << " " << brand << " " << model << endl;
    }
};

int main() {
    Car car1("BMW", "M4", 2024);
    Car car2("Porsche", "911 GT3", 2025);
    
    cout << "Vehicle Garage:" << endl;
    car1.printDetails();
    car2.printDetails();
    
    return 0;
}`,
    practice: [
      {
        id: "cpp-cls-p1",
        type: "multiple_choice",
        question: "By default, if no access specifier is written in a C++ class, what is the default member visibility?",
        options: ["private", "public", "protected", "global"],
        correctAnswer: 0,
        explanation: "In C++ classes, members are private by default (unlike struct where members default to public)."
      }
    ]
  }
};
