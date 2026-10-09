import { TopicDefinition } from '../topicData';

export const C_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: C Fundamentals
  'introduction-to-c': {
    heroTagline: "The foundational language powering operating systems, compilers, and hardware",
    introduction: "C is a procedural programming language developed by Dennis Ritchie between 1969 and 1973 at Bell Labs to construct the UNIX operating system. Because it maps closely to hardware instructions with minimal runtime overhead, C remains the mother of modern computing.",
    definition: {
      term: "C Language",
      explanation: "A statically typed, low-level procedural programming language with direct memory access and zero runtime bloat."
    },
    syntaxStructure: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    codeExample: `// First Program in C
#include <stdio.h>

int main() {
    printf("Welcome to C Programming on Coding Vibes!\\n");
    printf("Dennis Ritchie - Bell Labs Foundation\\n");
    
    int unixYear = 1970;
    printf("Unix Epoch Year: %d\\n", unixYear);
    
    return 0;
}`,
    codeAnnotations: [
      { lineOrToken: "#include <stdio.h>", description: "Standard Input Output header containing printf and scanf definitions." },
      { lineOrToken: "printf(\"...\\n\")", description: "Formats and prints text to standard output; \\n inserts a newline character." },
      { lineOrToken: "return 0;", description: "Signals to the operating system that the program executed and exited successfully." }
    ],
    commonMistakes: [
      {
        wrong: "void main() {\n  printf(\"Hi\");\n}",
        correct: "int main() {\n  printf(\"Hi\\n\");\n  return 0;\n}",
        reason: "C99 and C11 standards mandate 'int main()' returning an exit code integer."
      }
    ],
    tips: [
      "Every statement in C must end with a semicolon (;).",
      "Lines starting with # are preprocessor directives evaluated before compilation."
    ],
    practice: [
      {
        id: "c-intro-p1",
        type: "multiple_choice",
        question: "Which header file is required in C to use the printf() function?",
        options: ["<stdio.h>", "<stdlib.h>", "<conio.h>", "<math.h>"],
        correctAnswer: 0,
        explanation: "<stdio.h> provides the declarations for printf, scanf, fopen, etc."
      }
    ],
    quiz: [
      {
        id: "c-intro-q1",
        question: "Why is C often referred to as a 'middle-level' or 'low-level' language?",
        options: [
          "It provides low-level memory access and pointers while supporting high-level structured syntax",
          "It was created in the middle of the 20th century",
          "It can only run simple math calculations",
          "It does not support arrays or loops"
        ],
        correctAnswerIndex: 0,
        explanation: "C combines structured procedural syntax with direct pointer access to physical memory addresses."
      }
    ]
  },

  'c-output-and-printf': {
    heroTagline: "Formatted output with printf and escape sequences (\\n, \\t)",
    introduction: "To output values or print text in C, you can use the `printf()` function. Escape sequences like `\\n` create a new line, and `\\t` creates a horizontal tab.",
    definition: {
      term: "printf (Print Formatted)",
      explanation: "A standard library function used to print formatted output strings to stdout."
    },
    syntaxStructure: `printf("Format string with %specifier", value);`,
    codeExample: `#include <stdio.h>

int main() {
    printf("Line 1: Hello from C!\\n");
    printf("Line 2: Tabbed\\tText\\tColumns\\n");
    
    int age = 25;
    float height = 5.9;
    printf("User Profile -> Age: %d, Height: %.1f ft\\n", age, height);
    
    return 0;
}`,
    practice: [
      {
        id: "c-out-p1",
        type: "fill_in_blank",
        question: "What escape sequence creates a new line in C strings?",
        instructions: "printf('Hello___');",
        correctAnswer: "\\n",
        explanation: "\\n represents the newline character in C."
      }
    ]
  },

  // Module 2: Variables & Format Specifiers
  'c-variables': {
    heroTagline: "Declaring typed memory: int, float, double, char",
    introduction: "Variables are containers for storing data values. In C, you must declare the variable type explicitly before assigning or using it.",
    definition: {
      term: "C Variable",
      explanation: "A named location in memory used to hold a value of a specific data type."
    },
    syntaxStructure: `type variableName = value;`,
    codeExample: `#include <stdio.h>

int main() {
    int students = 35;
    float averageGrade = 89.4;
    char section = 'A';
    
    printf("Students: %d\\n", students);
    printf("Average Grade: %.1f%%\\n", averageGrade);
    printf("Class Section: %c\\n", section);
    
    return 0;
}`,
    practice: [
      {
        id: "c-var-p1",
        type: "multiple_choice",
        question: "How do you store a single character literal in C?",
        options: ["In single quotes, e.g. 'A'", "In double quotes, e.g. \"A\"", "With backticks, e.g. `A`", "char('A')"],
        correctAnswer: 0,
        explanation: "Single characters use single quotes 'A', while strings use double quotes \"text\"."
      }
    ]
  },

  'c-format-specifiers': {
    heroTagline: "%d (int), %f (float), %lf (double), %c (char), %s (string)",
    introduction: "Format specifiers are used together with the `printf()` function to tell the compiler what type of data the variable is storing. A format specifier starts with a percentage sign `%`, followed by a character.",
    definition: {
      term: "Format Specifier",
      explanation: "A placeholder token in a format string indicating how an argument should be converted to formatted text."
    },
    syntaxStructure: `printf("%d %f %c %s", intVal, floatVal, charVal, strVal);`,
    codeExample: `#include <stdio.h>

int main() {
    int count = 42;
    float pi = 3.14159;
    char grade = 'A';
    char course[] = "C Programming";
    
    printf("Integer (%%d):  %d\\n", count);
    printf("Float (%%.2f):   %.2f\\n", pi);
    printf("Character (%%c): %c\\n", grade);
    printf("String (%%s):    %s\\n", course);
    
    return 0;
}`,
    practice: [
      {
        id: "c-fmt-p1",
        type: "multiple_choice",
        question: "Which format specifier is used to print an integer in C?",
        options: ["%d", "%i or %d", "%int", "%s"],
        correctAnswer: 1,
        explanation: "%d and %i are the standard format specifiers for signed decimal integers in C."
      }
    ]
  },

  // Module 3: Control Flow
  'c-if-else': {
    heroTagline: "Conditional branching with non-zero truth values",
    introduction: "C evaluates conditions as integers: `0` represents **false**, and any **non-zero value** represents **true**.",
    definition: {
      term: "if...else in C",
      explanation: "A branching statement executing alternate code blocks based on numerical boolean logic."
    },
    syntaxStructure: `if (condition) {
    // code
} else {
    // fallback code
}`,
    codeExample: `#include <stdio.h>

int main() {
    int score = 82;
    
    if (score >= 90) {
        printf("Grade: Excellent (A)\\n");
    } else if (score >= 75) {
        printf("Grade: Good (B)\\n");
    } else if (score >= 50) {
        printf("Grade: Pass (C)\\n");
    } else {
        printf("Grade: Fail. Please retake.\\n");
    }
    
    return 0;
}`,
    practice: [
      {
        id: "c-if-p1",
        type: "multiple_choice",
        question: "In C, which integer value is treated as false in conditional statements?",
        options: ["0", "1", "-1", "null"],
        correctAnswer: 0,
        explanation: "In C, 0 evaluates to false; any non-zero value evaluates to true."
      }
    ]
  },

  // Module 4: Arrays & Strings
  'c-arrays': {
    heroTagline: "Contiguous zero-indexed memory blocks of fixed size",
    introduction: "Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.",
    definition: {
      term: "C Array",
      explanation: "A fixed-size sequential collection of elements of the same type stored in contiguous memory locations."
    },
    syntaxStructure: `int numbers[5] = {10, 20, 30, 40, 50};
printf("%d", numbers[0]); // 10`,
    codeExample: `#include <stdio.h>

int main() {
    int scores[5] = {90, 85, 78, 92, 88};
    int total = 0;
    
    printf("Array elements:\\n");
    for (int i = 0; i < 5; i++) {
        printf("  Score[%d] = %d\\n", i, scores[i]);
        total += scores[i];
    }
    
    float average = (float)total / 5;
    printf("Class Average: %.1f\\n", average);
    
    return 0;
}`,
    practice: [
      {
        id: "c-arr-p1",
        type: "multiple_choice",
        question: "What is the index of the first element in a C array?",
        options: ["0", "1", "-1", "None"],
        correctAnswer: 0,
        explanation: "C arrays are strictly 0-indexed."
      }
    ]
  },

  'c-strings': {
    heroTagline: "Null-terminated character arrays ending with '\\0'",
    introduction: "Strings are used for storing text/characters. In C, strings are not a separate primitive type; they are simply **arrays of characters** terminated by a null character `\\0`.",
    definition: {
      term: "Null-Terminated String",
      explanation: "A character array where the end of the string is marked by the byte value 0 ('\\0')."
    },
    syntaxStructure: `char greeting[] = "Hello"; // Size is 6 bytes (including '\\0')`,
    codeExample: `#include <stdio.h>
#include <string.h>

int main() {
    char greeting[] = "Coding Vibes";
    
    printf("String text: %s\\n", greeting);
    printf("Length (strlen): %lu\\n", strlen(greeting));
    printf("Memory Size (sizeof): %lu bytes\\n", sizeof(greeting));
    
    return 0;
}`,
    practice: [
      {
        id: "c-str-p1",
        type: "multiple_choice",
        question: "What special character terminates strings in C?",
        options: ["'\\0' (null character)", "'\\n' (newline)", "' ' (space)", "';' (semicolon)"],
        correctAnswer: 0,
        explanation: "'\\0' is the null character indicating the end of a string in C memory."
      }
    ]
  },

  // Module 5: Memory & Pointers
  'c-memory-address': {
    heroTagline: "The & address-of operator and pointer variables (*)",
    introduction: "When a variable is created in C, a memory address is assigned to the variable. The memory address is the location of where the variable is stored on the computer. To access it, use the reference operator (`&`).",
    definition: {
      term: "Memory Address",
      explanation: "The physical byte address in RAM where a variable's data resides, usually displayed in hexadecimal format."
    },
    syntaxStructure: `int myAge = 43;
printf("%p", &myAge); // Outputs address like 0x7ffe5367e044`,
    codeExample: `#include <stdio.h>

int main() {
    int number = 100;
    int* ptr = &number; // Pointer storing memory address
    
    printf("Value of number:   %d\\n", number);
    printf("Address of number: %p\\n", &number);
    printf("Pointer ptr value: %p\\n", ptr);
    printf("Dereferenced *ptr: %d\\n", *ptr);
    
    // Changing value via pointer
    *ptr = 250;
    printf("New value after *ptr = 250: %d\\n", number);
    
    return 0;
}`,
    practice: [
      {
        id: "c-mem-p1",
        type: "multiple_choice",
        question: "Which operator is used to dereference a pointer (read or write its pointed value) in C?",
        options: ["*", "&", "->", "%"],
        correctAnswer: 0,
        explanation: "The asterisk '*' is the dereference operator in C."
      }
    ]
  }
};
