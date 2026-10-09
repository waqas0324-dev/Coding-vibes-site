import { TopicDefinition } from '../topicData';

export const PYTHON_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: Introduction & Basics
  'introduction-to-python': {
    heroTagline: "The world's most versatile, readable, and widely used programming language",
    introduction: "Python is a high-level, interpreted programming language known for its clean, English-like syntax. Created by Guido van Rossum and released in 1991, Python is used for web development, data science, machine learning, artificial intelligence, automation, and backend systems.",
    definition: {
      term: "Python",
      explanation: "A dynamically typed, garbage-collected, general-purpose programming language that emphasizes code readability with its notable use of significant indentation."
    },
    syntaxStructure: `# Python Hello World Syntax
print("Hello, World!")`,
    codeExample: `# Python 3 Introduction Example
print("Welcome to Python on Coding Vibes!")
user_name = "Alex"
skills = ["Web Dev", "Machine Learning", "Automation"]

print(f"Learner: {user_name}")
print(f"Top Focus Areas: {', '.join(skills)}")
print(f"Python Version: 3.12")`,
    codeAnnotations: [
      { lineOrToken: "print()", description: "Built-in Python function that outputs strings or formatted values directly to stdout / terminal." },
      { lineOrToken: "user_name = \"Alex\"", description: "Dynamic variable assignment. Python does not require explicit type declarations." },
      { lineOrToken: "f\"...\"", description: "Formatted string literal (f-string) enabling direct embedded variable expression evaluation." }
    ],
    commonMistakes: [
      {
        wrong: "print \"Hello World\"",
        correct: "print(\"Hello World\")",
        reason: "In Python 3, print is a function and requires parentheses around arguments, unlike Python 2."
      }
    ],
    tips: [
      "Python files end with the .py extension.",
      "Python uses indentation instead of curly braces {} to delimit code blocks."
    ],
    practice: [
      {
        id: "py-intro-p1",
        type: "multiple_choice",
        question: "Which function in Python is used to print values to the terminal console?",
        options: ["print()", "echo()", "console.log()", "System.out.println()"],
        correctAnswer: 0,
        explanation: "print() is the built-in standard Python function for terminal output."
      },
      {
        id: "py-intro-p2",
        type: "fill_in_blank",
        question: "Complete the statement to print 'Hello Python':",
        instructions: "___('Hello Python')",
        correctAnswer: "print",
        explanation: "print('Hello Python') executes standard console output."
      }
    ],
    quiz: [
      {
        id: "py-intro-q1",
        question: "What distinguishes Python's syntax from languages like C++ or Java?",
        options: [
          "Python uses whitespace indentation to define code blocks instead of curly brackets",
          "Python requires semicolons at the end of every line",
          "Python does not support functions",
          "Python must be manually compiled to an .exe before running"
        ],
        correctAnswerIndex: 0,
        explanation: "Python enforces clean indentation (typically 4 spaces) to delimit code blocks, eliminating the need for curly braces."
      }
    ]
  },

  'python-getting-started': {
    heroTagline: "Setting up Python 3, virtual environments, and executing .py scripts",
    introduction: "To run Python locally, install Python from python.org and use the terminal to verify your installation with `python --version` or `python3 --version`. You can run scripts with `python filename.py` or write code interactively inside the Python REPL.",
    definition: {
      term: "Python REPL (Read-Eval-Print Loop)",
      explanation: "An interactive command-line shell where Python expressions are entered, evaluated immediately, and results are displayed in real-time."
    },
    syntaxStructure: `# Terminal command to run script:
# $ python app.py`,
    codeExample: `# Verify Python execution environment
import sys

print("Python Interpreter Active")
print("Version:", sys.version.split()[0])
print("Platform:", sys.platform)
print("Coding Vibes Python Playground Ready!")`,
    codeAnnotations: [
      { lineOrToken: "import sys", description: "Imports the built-in system module to inspect Python interpreter configuration." }
    ],
    commonMistakes: [
      {
        wrong: "$ python app (in terminal)",
        correct: "$ python app.py",
        reason: "Always specify the .py file extension when running Python scripts from command line."
      }
    ],
    practice: [
      {
        id: "py-start-p1",
        type: "multiple_choice",
        question: "What file extension is standard for Python source files?",
        options: [".py", ".python", ".pt", ".pyt"],
        correctAnswer: 0,
        explanation: ".py is the standard extension for Python scripts."
      }
    ]
  },

  'python-syntax-and-indentation': {
    heroTagline: "Indentation is not decorative in Python — it is syntax!",
    introduction: "Unlike C, C++, or Java which use `{}` to define blocks of code, Python strictly uses **indentation** (standardized as 4 spaces). If you skip indentation or mix tabs and spaces, Python will raise an `IndentationError`.",
    definition: {
      term: "Indentation in Python",
      explanation: "The spaces at the beginning of a code line used to indicate that a group of statements belongs to a specific block (like an if statement, loop, or function)."
    },
    syntaxStructure: `if 5 > 2:
    print("Five is greater than two!") # 4 spaces indent`,
    codeExample: `# Demonstrating correct Python indentation
score = 85

if score >= 80:
    print("Grade: A")
    print("Status: Passed with honors")
else:
    print("Grade: B or lower")
    print("Status: Keep practicing")

print("Evaluation finished.")`,
    codeAnnotations: [
      { lineOrToken: "    print(\"Grade: A\")", description: "Indented 4 spaces to indicate membership within the 'if' block." },
      { lineOrToken: "print(\"Evaluation finished.\")", description: "Unindented to execute sequentially outside the if-else block." }
    ],
    commonMistakes: [
      {
        wrong: "if 5 > 2:\nprint('Error')",
        correct: "if 5 > 2:\n    print('Correct')",
        reason: "Failing to indent statements after a colon raises an IndentationError in Python."
      }
    ],
    tips: [
      "Use 4 spaces per indentation level. Never mix tabs and spaces in the same file."
    ],
    practice: [
      {
        id: "py-indent-p1",
        type: "multiple_choice",
        question: "What error does Python raise if you omit required indentation after an 'if' statement?",
        options: ["IndentationError", "SyntaxTimeout", "BlockError", "NullReferenceException"],
        correctAnswer: 0,
        explanation: "Python raises an IndentationError when a block of code is expected but not indented."
      }
    ]
  },

  'python-comments': {
    heroTagline: "Documenting code intent with single-line (#) and multiline docstrings",
    introduction: "Comments in Python start with the `#` character. The Python interpreter completely ignores anything written after `#` on that line. For multiline documentation, triple quotes (`\"\"\"` or `'''`) are commonly used as docstrings.",
    definition: {
      term: "Python Comment",
      explanation: "Human-readable notes placed inside code to explain logic, algorithm steps, or temporarily disable code execution."
    },
    syntaxStructure: `# This is a single line comment
"""
This is a multiline docstring
used for documenting functions and modules
"""`,
    codeExample: `# Calculate student average score
# Coding Vibes Python Academy

math_score = 92
science_score = 88
english_score = 95

# Sum the scores
total = math_score + science_score + english_score

# Compute average
average = total / 3

print(f"Total: {total}")
print(f"Average: {average:.2f}")`,
    commonMistakes: [
      {
        wrong: "// This is a C-style comment",
        correct: "# This is a valid Python comment",
        reason: "Python uses '#' for comments, not '//'."
      }
    ],
    practice: [
      {
        id: "py-comm-p1",
        type: "multiple_choice",
        question: "Which symbol denotes a single-line comment in Python?",
        options: ["#", "//", "/*", "--"],
        correctAnswer: 0,
        explanation: "In Python, '#' begins a comment."
      }
    ]
  },

  // Module 2: Variables & Data Types
  'python-variables': {
    heroTagline: "Named containers storing data with dynamic typing and memory management",
    introduction: "In Python, variables are created the moment you first assign a value to them using the assignment operator (`=`). Python is **dynamically typed**, meaning you do not need to declare a variable's type, and the type can change during execution.",
    definition: {
      term: "Variable",
      explanation: "A symbolic name that references an object in computer memory. In Python, variables are labels pointing to objects."
    },
    syntaxStructure: `variable_name = value`,
    codeExample: `# Python Variables Example
course_name = "Python Mastery"  # str
lesson_number = 5               # int
completion_rate = 94.5          # float
is_enrolled = True              # bool

print(f"Course: {course_name}")
print(f"Lesson: {lesson_number}")
print(f"Progress: {completion_rate}%")
print(f"Enrolled: {is_enrolled}")

# Multiple assignment
x, y, z = 10, 20, 30
print(f"Sum: {x + y + z}")`,
    codeAnnotations: [
      { lineOrToken: "course_name = \"Python Mastery\"", description: "Creates a string variable without specifying 'str'." },
      { lineOrToken: "x, y, z = 10, 20, 30", description: "Unpacks values into multiple variables in a single clean line." }
    ],
    commonMistakes: [
      {
        wrong: "2my_var = 10",
        correct: "my_var_2 = 10",
        reason: "Variable names in Python cannot begin with a number."
      }
    ],
    tips: [
      "Use snake_case for variable names (e.g. user_first_name) per PEP 8 guidelines."
    ],
    practice: [
      {
        id: "py-var-p1",
        type: "multiple_choice",
        question: "Which of the following is a legal variable name in Python?",
        options: ["_total_score", "2nd_score", "total-score", "total score"],
        correctAnswer: 0,
        explanation: "Variable names can contain letters, numbers, and underscores, but cannot start with a number or contain hyphens/spaces."
      }
    ]
  },

  'python-data-types': {
    heroTagline: "Built-in primitives: int, float, str, bool, list, tuple, dict, set",
    introduction: "Every value in Python has a data type. Python's built-in `type()` function inspects the data type of any object at runtime.",
    definition: {
      term: "Data Type",
      explanation: "A classification specifying which type of value a variable holds, defining the operations that can be performed on it."
    },
    syntaxStructure: `print(type(x)) # Returns the class type of x`,
    codeExample: `# Inspecting Python Data Types
a = 100                 # int
b = 3.14159             # float
c = "Hello World"       # str
d = True                # bool
e = [1, 2, 3]           # list
f = (10, 20)            # tuple
g = {"name": "Alice"}   # dict
h = {1, 2, 3}           # set

print(f"a is {type(a).__name__}")
print(f"b is {type(b).__name__}")
print(f"c is {type(c).__name__}")
print(f"d is {type(d).__name__}")
print(f"e is {type(e).__name__}")
print(f"g is {type(g).__name__}")`,
    practice: [
      {
        id: "py-types-p1",
        type: "multiple_choice",
        question: "What function returns the data type of a variable in Python?",
        options: ["type()", "typeof()", "datatype()", "checkType()"],
        correctAnswer: 0,
        explanation: "type(var) returns the class type of an object in Python."
      }
    ]
  },

  'python-casting': {
    heroTagline: "Converting variables between int, float, and str formats",
    introduction: "Type casting in Python is performed using constructor functions like `int()`, `float()`, and `str()` to convert values from one type to another.",
    definition: {
      term: "Type Casting",
      explanation: "Explicitly converting a variable from one data type to another."
    },
    syntaxStructure: `x = int("10")   # Converts string "10" to integer 10
y = str(45)     # Converts integer 45 to string "45"
z = float(5)    # Converts integer 5 to float 5.0`,
    codeExample: `# Python Type Casting in Action
user_input_str = "150"
tax_rate_str = "0.08"

# Cast strings to numeric values for calculation
price = int(user_input_str)
tax_rate = float(tax_rate_str)
total = price + (price * tax_rate)

print(f"Subtotal: \${price}")
print(f"Tax: \${price * tax_rate:.2f}")
print(f"Total Amount: \${total:.2f}")`,
    commonMistakes: [
      {
        wrong: "int('hello')",
        correct: "int('123')",
        reason: "Passing non-numeric characters to int() raises ValueError: invalid literal."
      }
    ],
    practice: [
      {
        id: "py-cast-p1",
        type: "fill_in_blank",
        question: "Convert the string '25' into an integer:",
        instructions: "num = ___('25')",
        correctAnswer: "int",
        explanation: "int('25') converts string to an integer."
      }
    ]
  },

  'python-strings-and-string-methods': {
    heroTagline: "Indexing, slicing, formatting, and powerful built-in string methods",
    introduction: "Strings in Python are sequences of Unicode characters enclosed in single (`'`) or double (`\"`) quotes. Python provides rich string methods like `.upper()`, `.strip()`, `.replace()`, and `.split()`.",
    definition: {
      term: "String",
      explanation: "An immutable sequence of characters. Once created, individual characters in a string cannot be modified in-place."
    },
    syntaxStructure: `text = "Python"
print(text[0])     # 'P' (indexing)
print(text[0:4])   # 'Pyth' (slicing)`,
    codeExample: `# Python String Operations & Methods
greeting = "  hello, coding vibes!  "

# String Methods
cleaned = greeting.strip()
loud = cleaned.upper()
replaced = cleaned.replace("vibes", "mastery")
words = cleaned.split()

print("Original:", repr(greeting))
print("Cleaned: ", cleaned)
print("Upper:   ", loud)
print("Replaced:", replaced)
print("Word list:", words)
print("Length:  ", len(cleaned))`,
    codeAnnotations: [
      { lineOrToken: ".strip()", description: "Removes leading and trailing whitespace from the string." },
      { lineOrToken: ".split()", description: "Splits a string by whitespace into a list of words." }
    ],
    practice: [
      {
        id: "py-str-p1",
        type: "multiple_choice",
        question: "What does 'Python'[1:4] evaluate to?",
        options: ["yth", "ytho", "Pyt", "Pyth"],
        correctAnswer: 0,
        explanation: "Slice [1:4] starts at index 1 ('y') and stops before index 4 ('o'), yielding 'yth'."
      }
    ]
  },

  // Module 3: Operators & Booleans
  'python-booleans': {
    heroTagline: "Evaluating truth: True and False values in logic expressions",
    introduction: "Booleans represent one of two values: `True` or `False` (capitalized in Python). Any expression can be evaluated to a boolean in an `if` statement.",
    definition: {
      term: "Boolean",
      explanation: "A binary data type that evaluates to either True (1) or False (0)."
    },
    syntaxStructure: `is_active = True
is_expired = False
print(10 > 9) # True`,
    codeExample: `# Python Boolean Logic & bool() Truthiness
print(10 > 5)       # True
print(10 == 9)      # False
print(10 < 5)       # False

# In Python, empty collections and 0 evaluate to False (Falsy)
print("bool(0):", bool(0))              # False
print("bool(''):", bool(''))            # False
print("bool([]):", bool([]))            # False
print("bool('Code'):", bool('Code'))    # True
print("bool([1, 2]):", bool([1, 2]))    # True`,
    practice: [
      {
        id: "py-bool-p1",
        type: "multiple_choice",
        question: "What will bool([]) return in Python?",
        options: ["False", "True", "None", "Error"],
        correctAnswer: 0,
        explanation: "Empty lists, empty strings, and 0 evaluate to False in Python."
      }
    ]
  },

  'arithmetic-operators': {
    heroTagline: "+, -, *, /, // (floor divide), % (modulus), and ** (power)",
    introduction: "Python supports standard mathematical operations along with special operators like `//` for integer floor division and `**` for exponentiation.",
    definition: {
      term: "Arithmetic Operators",
      explanation: "Operators used with numeric values to perform common mathematical operations."
    },
    syntaxStructure: `a + b  # Addition
a - b  # Subtraction
a * b  # Multiplication
a / b  # Float Division (e.g. 5 / 2 = 2.5)
a // b # Floor Division (e.g. 5 // 2 = 2)
a % b  # Modulus (remainder)
a ** b # Exponentiation (power)`,
    codeExample: `# Python Arithmetic Operators
x = 15
y = 4

print(f"{x} + {y} = {x + y}")
print(f"{x} - {y} = {x - y}")
print(f"{x} * {y} = {x * y}")
print(f"{x} / {y} = {x / y}")       # 3.75
print(f"{x} // {y} = {x // y}")     # 3 (floor division)
print(f"{x} % {y} = {x % y}")       # 3 (remainder)
print(f"{x} ** {y} = {x ** y}")     # 15^4 = 50625`,
    practice: [
      {
        id: "py-arith-p1",
        type: "multiple_choice",
        question: "What is the result of 7 // 2 in Python?",
        options: ["3", "3.5", "4", "1"],
        correctAnswer: 0,
        explanation: "// performs floor division, rounding down to the nearest integer (3)."
      }
    ]
  },

  // Module 4: Lists & Collections
  'python-lists': {
    heroTagline: "Ordered, mutable, zero-indexed collections of items",
    introduction: "Lists are used to store multiple items in a single variable. Lists are created using square brackets `[]`, are ordered, changeable (mutable), and allow duplicate values.",
    definition: {
      term: "List",
      explanation: "A mutable, ordered sequence of elements. Items can be added, removed, or modified."
    },
    syntaxStructure: `fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits[0]) # 'apple'`,
    codeExample: `# Working with Python Lists
languages = ["Python", "JavaScript", "Java", "C++"]

# Append new item
languages.append("SQL")

# Modify item
languages[2] = "TypeScript"

# Remove item
languages.remove("C++")

print("Languages List:", languages)
print("Total Items:   ", len(languages))
print("First Item:    ", languages[0])
print("Last Item:     ", languages[-1])

# Slicing
print("Top 2:         ", languages[:2])`,
    codeAnnotations: [
      { lineOrToken: "languages[-1]", description: "Negative index -1 conveniently references the last element of the list." },
      { lineOrToken: "languages.append()", description: "Adds a new element to the end of the list." }
    ],
    commonMistakes: [
      {
        wrong: "items = [1, 2, 3]\nprint(items[3])",
        correct: "print(items[2])",
        reason: "Python lists are 0-indexed. An index of 3 on a length-3 list causes IndexError: list index out of range."
      }
    ],
    practice: [
      {
        id: "py-list-p1",
        type: "multiple_choice",
        question: "Which method adds an item to the end of a Python list?",
        options: [".append()", ".push()", ".insertEnd()", ".add()"],
        correctAnswer: 0,
        explanation: ".append(item) adds an item to the end of a list in Python."
      }
    ]
  },

  'python-tuples': {
    heroTagline: "Ordered, immutable collections defined with parentheses ()",
    introduction: "Tuples are used to store multiple items in a single variable. A tuple is a collection that is **ordered and unchangeable** (immutable). Once created, you cannot add, remove, or change elements.",
    definition: {
      term: "Tuple",
      explanation: "An immutable sequence of Python objects enclosed in parentheses ()."
    },
    syntaxStructure: `coordinates = (40.7128, -74.0060)
x, y = coordinates # Tuple unpacking`,
    codeExample: `# Python Tuples Example
server_config = ("localhost", 8080, "production")

print("Host:", server_config[0])
print("Port:", server_config[1])
print("Env: ", server_config[2])

# Unpacking a tuple
host, port, env = server_config
print(f"Connecting to {host}:{port} ({env})")

# Tuple length
print("Config count:", len(server_config))`,
    practice: [
      {
        id: "py-tup-p1",
        type: "multiple_choice",
        question: "Can you change an element of a tuple after it has been created?",
        options: ["No, tuples are immutable", "Yes, using tuple.set()", "Yes, with assignment like t[0] = 5", "Only if it contains numbers"],
        correctAnswer: 0,
        explanation: "Tuples are immutable; their elements cannot be changed or reassigned after creation."
      }
    ]
  },

  'python-dictionaries': {
    heroTagline: "Key-value mapping pairs for lightning-fast hash lookups",
    introduction: "Dictionaries store data values in `key: value` pairs. A dictionary is a collection that is ordered, changeable, and does not allow duplicate keys. Written with curly braces `{}`.",
    definition: {
      term: "Dictionary (dict)",
      explanation: "A mutable mapping of unique keys to values implemented as a hash map."
    },
    syntaxStructure: `user = {
    "name": "Sarah",
    "role": "Lead Engineer",
    "skills": ["Python", "Django"]
}
print(user["name"])`,
    codeExample: `# Python Dictionary Operations
course = {
    "title": "Python for Everyone",
    "level": "Beginner",
    "hours": 24,
    "rating": 4.9
}

# Accessing values
print("Course Title:", course["title"])
print("Rating:", course.get("rating", 0.0))

# Adding a new key-value pair
course["instructor"] = "Coding Vibes Faculty"

# Iterating over key-value pairs
print("\n--- Course Details ---")
for key, val in course.items():
    print(f"  {key.title()}: {val}")`,
    codeAnnotations: [
      { lineOrToken: "course.items()", description: "Returns key-value tuple pairs to iterate through cleanly in a for loop." },
      { lineOrToken: "course.get(\"rating\", 0.0)", description: "Safely accesses keys without raising KeyError if the key doesn't exist." }
    ],
    practice: [
      {
        id: "py-dict-p1",
        type: "multiple_choice",
        question: "Which method safely retrieves a value from a dictionary without throwing a KeyError if the key is missing?",
        options: [".get()", ".fetch()", ".find()", ".lookup()"],
        correctAnswer: 0,
        explanation: ".get(key, default) safely retrieves a key or returns the default value if missing."
      }
    ]
  },

  // Module 5: Control Flow: If & Loops
  'python-if-else': {
    heroTagline: "Decision making with if, elif, and else conditional statements",
    introduction: "Python relies on indentation and logical conditions (==, !=, <, >, <=, >=) to control program flow based on dynamic conditions.",
    definition: {
      term: "if...elif...else",
      explanation: "A control structure used to execute different blocks of code based on whether conditions evaluate to True or False."
    },
    syntaxStructure: `if condition1:
    # code block 1
elif condition2:
    # code block 2
else:
    # fallback code block`,
    codeExample: `# Python Conditional Logic
temperature = 28

if temperature > 30:
    print("It's a hot day! Stay hydrated.")
elif temperature >= 20:
    print("Pleasant weather. Great for outdoor coding!")
elif temperature >= 10:
    print("It's cool outside. Wear a sweater.")
else:
    print("It's cold! Turn on the heater.")

# Ternary operator in Python (one-line conditional)
status = "Adult" if temperature >= 18 else "Minor"
print("Status check:", status)`,
    practice: [
      {
        id: "py-if-p1",
        type: "multiple_choice",
        question: "In Python, which keyword represents 'else if'?",
        options: ["elif", "else if", "elseif", "elsif"],
        correctAnswer: 0,
        explanation: "Python uses the concise 'elif' keyword for 'else if'."
      }
    ]
  },

  'python-for-loops': {
    heroTagline: "Iterating seamlessly over sequences, ranges, lists, and strings",
    introduction: "A `for` loop in Python is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string). With the built-in `range()` function, it executes a set number of times.",
    definition: {
      term: "for loop",
      explanation: "An iterator-based loop that steps through each item in any iterable collection."
    },
    syntaxStructure: `for item in sequence:
    print(item)

for i in range(5): # 0, 1, 2, 3, 4
    print(i)`,
    codeExample: `# Python for Loops Examples
fruits = ["Apple", "Banana", "Cherry"]
print("Iterating over a list:")
for fruit in fruits:
    print(f"  Fruit: {fruit}")

print("\nUsing range(1, 6):")
for num in range(1, 6):
    square = num ** 2
    print(f"  {num} squared = {square}")`,
    codeAnnotations: [
      { lineOrToken: "range(1, 6)", description: "Generates integers from 1 up to (but not including) 6." }
    ],
    practice: [
      {
        id: "py-for-p1",
        type: "multiple_choice",
        question: "What values does range(3) produce in a loop?",
        options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "1, 2"],
        correctAnswer: 0,
        explanation: "range(3) produces 0, 1, and 2 (stopping before 3)."
      }
    ]
  },

  'python-while-loops': {
    heroTagline: "Executing statements repeatedly as long as a condition remains True",
    introduction: "With the `while` loop we can execute a set of statements as long as a condition is true. Remember to increment loop counters to avoid infinite loops!",
    definition: {
      term: "while loop",
      explanation: "A loop that repeats a block of code as long as a boolean condition remains True."
    },
    syntaxStructure: `count = 0
while count < 5:
    print(count)
    count += 1`,
    codeExample: `# Python while Loop Example
countdown = 5

print("Starting rocket countdown:")
while countdown > 0:
    print(f"T-minus {countdown}...")
    countdown -= 1

print("Blast off! 🚀")`,
    practice: [
      {
        id: "py-while-p1",
        type: "multiple_choice",
        question: "What happens if a while loop condition never becomes False and has no break statement?",
        options: ["An infinite loop occurs", "Python auto-stops after 100 loops", "It raises a WhileError", "It restarts the computer"],
        correctAnswer: 0,
        explanation: "The loop will run indefinitely as an infinite loop until terminated."
      }
    ]
  },

  // Module 6: Functions & Modular Code
  'python-functions': {
    heroTagline: "Defining reusable blocks of code with def, parameters, and return values",
    introduction: "A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result.",
    definition: {
      term: "Function",
      explanation: "A named block of reusable statements defined with the 'def' keyword."
    },
    syntaxStructure: `def function_name(param1, param2):
    # code logic
    return result`,
    codeExample: `# Defining and Calling Python Functions
def calculate_grade(student_name, score):
    """Calculate letter grade based on percentage score."""
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    else:
        grade = "Needs Improvement"
    
    return f"{student_name}: {grade} ({score}%)"

# Calling the function
print(calculate_grade("Emma", 94))
print(calculate_grade("Liam", 82))
print(calculate_grade("Noah", 65))`,
    codeAnnotations: [
      { lineOrToken: "def calculate_grade", description: "Defines the function name and its parameters." },
      { lineOrToken: "return", description: "Exits the function and passes the calculated result back to the caller." }
    ],
    commonMistakes: [
      {
        wrong: "function add(a, b):\n    return a + b",
        correct: "def add(a, b):\n    return a + b",
        reason: "Python uses 'def' to define functions, not 'function'."
      }
    ],
    practice: [
      {
        id: "py-fn-p1",
        type: "multiple_choice",
        question: "Which keyword is used to create a function in Python?",
        options: ["def", "function", "func", "define"],
        correctAnswer: 0,
        explanation: "'def' (short for define) is the keyword for function creation in Python."
      }
    ]
  },

  'python-lambda-functions': {
    heroTagline: "Compact, one-line anonymous functions using the lambda keyword",
    introduction: "A lambda function is a small anonymous function that can take any number of arguments, but can only have one expression.",
    definition: {
      term: "Lambda Function",
      explanation: "An inline, anonymous function defined with the 'lambda' keyword, commonly used as callbacks in map(), filter(), and sorted()."
    },
    syntaxStructure: `lambda arguments: expression`,
    codeExample: `# Python Lambda Functions in Action
# Basic lambda
double = lambda x: x * 2
multiply = lambda a, b: a * b

print("Double 7:", double(7))
print("Multiply 6 * 8:", multiply(6, 8))

# Using lambda with sorted()
students = [("Alice", 88), ("Bob", 95), ("Charlie", 78)]
# Sort by grade (the second tuple element)
sorted_students = sorted(students, key=lambda s: s[1], reverse=True)

print("\nLeaderboard:")
for rank, (name, score) in enumerate(sorted_students, 1):
    print(f"  #{rank}: {name} - {score} pts")`,
    practice: [
      {
        id: "py-lam-p1",
        type: "multiple_choice",
        question: "How many expressions can a Python lambda function contain?",
        options: ["Exactly one expression", "Any number of expressions", "Up to three", "Zero"],
        correctAnswer: 0,
        explanation: "Python lambda functions are strictly limited to a single evaluated expression."
      }
    ]
  }
};
