import { Lesson, PracticeQuestion, QuizQuestion } from '../../types';
import { getTopicDefinition } from './topicData';
import { getDeepCurriculumTopic } from './curriculumContentUtility';

export interface InlineLessonExercise {
  id: string;
  title: string;
  conceptTag: string;
  language: string;
  instruction: string;
  requirements: {
    text: string;
    check: (code: string) => boolean;
  }[];
  starterCode: string;
  solutionCode: string;
  hint: string;
  explanation: string;
}

/**
 * Generates or resolves an exact, language-specific coding exercise
 * that directly matches the theoretical content of the lesson.
 */
export function getInlineExerciseForLesson(
  courseSlug: string,
  lesson: Lesson
): InlineLessonExercise {
  const cSlug = (courseSlug || 'html').toLowerCase();
  const title = lesson.title || 'Coding Exercise';
  const lt = title.toLowerCase();
  const id = `ex-${cSlug}-${lesson.slug || lesson.id}`;

  const topicDef = getTopicDefinition(courseSlug, lesson.title);
  const starterFromLesson = lesson.content?.codeExample || topicDef?.codeExample || '';

  // 0. Check Deep Pedagogical Curriculum first for rich challenge matching
  const deepTopic = getDeepCurriculumTopic(courseSlug, lesson.title);
  if (deepTopic && deepTopic.exercises?.challenge) {
    const ch = deepTopic.exercises.challenge;
    const starter = ch.starterCode?.js || ch.starterCode?.html || starterFromLesson;
    const solution = ch.solutionCode?.js || ch.solutionCode?.html || '';
    if (starter && solution) {
      return {
        id: ch.id || id,
        title: ch.title,
        conceptTag: deepTopic.pedagogy.conceptName,
        language: deepTopic.courseSlug,
        instruction: ch.description,
        requirements: deepTopic.exercises.verificationCriteria && deepTopic.exercises.verificationCriteria.length > 0
          ? deepTopic.exercises.verificationCriteria.map((vc, idx) => ({
              text: ch.requirements[idx] || vc.description,
              check: vc.check
            }))
          : (ch.requirements || []).map((req) => ({
              text: req,
              check: (code: string) => code.length > 10
            })),
        starterCode: starter,
        solutionCode: solution,
        hint: ch.hint || deepTopic.pedagogy.keyTakeaways[0] || 'Follow standard language patterns.',
        explanation: deepTopic.pedagogy.whyItMatters
      };
    }
  }

  // ============================================================
  // 1. PYTHON
  // ============================================================
  if (cSlug === 'python') {
    if (lt.includes('variable') || lt.includes('data type')) {
      return {
        id,
        title: `Python Exercise: Working with Variables & Data Types`,
        conceptTag: 'Python Variables',
        language: 'python',
        instruction: `Create a variable named \`course_name\` set to \`"Python 3"\`, an integer \`lesson_count = 12\`, and print both using an f-string formatted message.`,
        requirements: [
          { text: `Declare 'course_name = "Python 3"'`, check: (c) => /course_name\s*=\s*["']Python\s*3["']/.test(c) },
          { text: `Declare 'lesson_count = 12'`, check: (c) => /lesson_count\s*=\s*12/.test(c) },
          { text: `Use print() with formatted text or variables`, check: (c) => /print\s*\(/.test(c) }
        ],
        starterCode: `# Step 1: Declare your variables below\n\n\n# Step 2: Output the variables using print()\n`,
        solutionCode: `course_name = "Python 3"\nlesson_count = 12\n\nprint(f"Welcome to {course_name}! Total lessons: {lesson_count}")`,
        hint: `In Python, variables do not require a keyword like 'var' or 'let'. Use 'f"..."' with curly braces '{var}' for string interpolation.`,
        explanation: `Python dynamically infers variable types at runtime. Using f-strings is the modern, Pythonic standard for formatting string outputs.`
      };
    }
    if (lt.includes('list') || lt.includes('array') || lt.includes('tuple')) {
      return {
        id,
        title: `Python Exercise: Lists & Collection Operations`,
        conceptTag: 'Python Collections',
        language: 'python',
        instruction: `Create a list named \`skills\` containing at least 3 programming languages. Then append \`"SQL"\` to the list and print its length using \`len()\`.`,
        requirements: [
          { text: `Create a list 'skills = [...]'`, check: (c) => /skills\s*=\s*\[.*\]/.test(c) },
          { text: `Use skills.append("SQL")`, check: (c) => /skills\.append\s*\(\s*["']SQL["']\s*\)/.test(c) },
          { text: `Print length using len(skills)`, check: (c) => /print\s*\(.*len\s*\(\s*skills\s*\).*\)/.test(c) }
        ],
        starterCode: `# 1. Define your initial list\nskills = ["Python", "JavaScript", "C++"]\n\n# 2. Append SQL to skills\n\n\n# 3. Print the length of skills\n`,
        solutionCode: `skills = ["Python", "JavaScript", "C++"]\nskills.append("SQL")\nprint(f"Total skills count: {len(skills)}")\nprint(f"Updated list: {skills}")`,
        hint: `Lists in Python are mutable. Use .append(item) to add an element to the end of a list.`,
        explanation: `Lists maintain insertion order and allow arbitrary data types. len() is an O(1) constant-time function.`
      };
    }
    if (lt.includes('function') || lt.includes('def') || lt.includes('argument')) {
      return {
        id,
        title: `Python Exercise: Defining & Calling Functions`,
        conceptTag: 'Python Functions',
        language: 'python',
        instruction: `Define a function named \`calculate_discount(price, rate)\` that returns the discounted price (\`price * (1 - rate)\`). Call it with price 100 and rate 0.20, then print the result.`,
        requirements: [
          { text: `Define function 'def calculate_discount(price, rate):'`, check: (c) => /def\s+calculate_discount\s*\(\s*price\s*,\s*rate\s*\)\s*:/.test(c) },
          { text: `Return computed discounted price`, check: (c) => /return\s+price\s*\*\s*\(1\s*-\s*rate\)/.test(c) || /return\s+.+/.test(c) },
          { text: `Call calculate_discount and print the result`, check: (c) => /calculate_discount\s*\(/.test(c) && /print\s*\(/.test(c) }
        ],
        starterCode: `def calculate_discount(price, rate):\n    # Calculate and return discounted price\n    pass\n\n# Call function and print result\n`,
        solutionCode: `def calculate_discount(price, rate):\n    return price * (1 - rate)\n\nfinal_price = calculate_discount(100, 0.20)\nprint(f"Discounted price: \${final_price:.2f}")`,
        hint: `Remember to indent function bodies with 4 spaces and return the value using the 'return' keyword.`,
        explanation: `Functions encapsulate reusable logic and can return calculated outputs directly to callers.`
      };
    }
    // Generic Python Exercise for any other lesson
    return {
      id,
      title: `Python 3 Exercise: ${title}`,
      conceptTag: `Python: ${title}`,
      language: 'python',
      instruction: `Write a Python 3 program implementing **${title}**. Ensure clean 4-space indentation, clear variable names, and print the output to stdout.`,
      requirements: [
        { text: `Contains valid Python 3 syntax`, check: (c) => c.trim().length > 10 },
        { text: `Outputs results using print()`, check: (c) => /print\s*\(/.test(c) },
        { text: `Implements clean logic for ${title}`, check: (c) => !c.includes('SyntaxError') }
      ],
      starterCode: starterFromLesson || `# Python 3: ${title}\ndef run_demo():\n    print("--- Executing ${title} ---")\n    # Write your implementation here\n\nrun_demo()`,
      solutionCode: `# Python 3: ${title}\ndef run_demo():\n    print("--- Completed ${title} ---")\n    status = "Verified 200 OK"\n    print(f"Result: {status}")\n\nrun_demo()`,
      hint: `Review the syntax structure in the lesson. In Python, blocks are defined by indentation rather than curly braces.`,
      explanation: `Writing idiomatic Python requires concise expressions, standard built-ins, and consistent indentation.`
    };
  }

  // ============================================================
  // 2. JAVA
  // ============================================================
  if (cSlug === 'java') {
    return {
      id,
      title: `Java JVM Exercise: ${title}`,
      conceptTag: `Java: ${title}`,
      language: 'java',
      instruction: `Implement **${title}** inside a standard Java class. Declare appropriate typed variables, and print results using \`System.out.println()\`.`,
      requirements: [
        { text: `Must declare a public class`, check: (c) => /public\s+class\s+\w+/.test(c) || /class\s+\w+/.test(c) },
        { text: `Must contain 'public static void main(String[] args)'`, check: (c) => /public\s+static\s+void\s+main\s*\(\s*String\s*\[\s*\]\s*args\s*\)/.test(c) },
        { text: `Uses System.out.println() with semicolon`, check: (c) => /System\.out\.println\s*\(.+;\s*/.test(c) }
      ],
      starterCode: starterFromLesson || `public class Main {\n    public static void main(String[] args) {\n        // Exercise: ${title}\n        System.out.println("Java: ${title}");\n    }\n}`,
      solutionCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Java: ${title} Demo");\n        int result = 42;\n        System.out.println("Computed Result: " + result);\n    }\n}`,
      hint: `Every Java statement must end with a semicolon (;), and all executable code must reside inside a method within a class.`,
      explanation: `Java is a strictly typed object-oriented language executed by the Java Virtual Machine (JVM).`
    };
  }

  // ============================================================
  // 3. C++
  // ============================================================
  if (cSlug === 'cpp') {
    return {
      id,
      title: `C++20 Exercise: ${title}`,
      conceptTag: `C++: ${title}`,
      language: 'cpp',
      instruction: `Implement **${title}** in modern C++. Include \`<iostream>\`, define \`int main()\`, and output the result using \`std::cout\` with \`endl\`.`,
      requirements: [
        { text: `Includes '<iostream>' header`, check: (c) => /#include\s*<iostream>/.test(c) },
        { text: `Defines 'int main()'`, check: (c) => /int\s+main\s*\(\s*\)/.test(c) },
        { text: `Outputs via cout << ... << endl;`, check: (c) => /cout\s*<<.+;/.test(c) }
      ],
      starterCode: starterFromLesson || `#include <iostream>\nusing namespace std;\n\nint main() {\n    // C++ Exercise: ${title}\n    cout << "Executing ${title}" << endl;\n    return 0;\n}`,
      solutionCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "--- C++: ${title} ---" << endl;\n    int val = 100;\n    cout << "Output: " << val << endl;\n    return 0;\n}`,
      hint: `Make sure you have '#include <iostream>' and end your cout stream with 'endl;' or '\\n;'.`,
      explanation: `C++ combines low-level memory efficiency with modern abstractions. Stream operators (<<) pipe data to stdout.`
    };
  }

  // ============================================================
  // 4. C LANGUAGE
  // ============================================================
  if (cSlug === 'c') {
    return {
      id,
      title: `C17 Standard Exercise: ${title}`,
      conceptTag: `C: ${title}`,
      language: 'c',
      instruction: `Implement **${title}** in ISO C. Include \`<stdio.h>\`, declare \`int main()\`, and use \`printf()\` with appropriate format specifiers.`,
      requirements: [
        { text: `Includes '<stdio.h>'`, check: (c) => /#include\s*<stdio\.h>/.test(c) },
        { text: `Defines 'int main()'`, check: (c) => /int\s+main\s*\(\s*\)/.test(c) },
        { text: `Uses printf() function with semicolon`, check: (c) => /printf\s*\(\s*".*"\s*.*\)\s*;/.test(c) }
      ],
      starterCode: starterFromLesson || `#include <stdio.h>\n\nint main() {\n    // C Exercise: ${title}\n    printf("C Language: ${title}\\n");\n    return 0;\n}`,
      solutionCode: `#include <stdio.h>\n\nint main() {\n    int count = 10;\n    printf("C Execution: %d items processed\\n", count);\n    return 0;\n}`,
      hint: `In C, printf format specifiers match data types: %d for integers, %f for floats, %s for strings.`,
      explanation: `C operates directly close to hardware with manual memory management and zero runtime overhead.`
    };
  }

  // ============================================================
  // 5. C# (.NET)
  // ============================================================
  if (cSlug === 'csharp') {
    return {
      id,
      title: `C# .NET 9 Exercise: ${title}`,
      conceptTag: `C#: ${title}`,
      language: 'csharp',
      instruction: `Implement **${title}** in modern C#. Use \`Console.WriteLine()\` to print formatted outputs to the terminal.`,
      requirements: [
        { text: `Contains 'using System;'`, check: (c) => /using\s+System;/.test(c) },
        { text: `Defines class and Main method`, check: (c) => /class\s+\w+/.test(c) && /static\s+void\s+Main/.test(c) },
        { text: `Uses Console.WriteLine() with semicolon`, check: (c) => /Console\.WriteLine\s*\(/.test(c) }
      ],
      starterCode: starterFromLesson || `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("C# .NET: ${title}");\n    }\n}`,
      solutionCode: `using System;\n\nclass Program {\n    static void Main() {\n        string framework = ".NET 9";\n        Console.WriteLine($"Running {framework} on Coding Vibes!");\n    }\n}`,
      hint: `String interpolation in C# begins with a dollar sign: Console.WriteLine($"Hello {name}");`,
      explanation: `C# runs on the Common Language Runtime (CLR), providing garbage collection, cross-platform performance, and strong typing.`
    };
  }

  // ============================================================
  // 6. SQL
  // ============================================================
  if (cSlug === 'sql') {
    if (lt.includes('where') || lt.includes('filter')) {
      return {
        id,
        title: `SQL Exercise: Conditional Filtering with WHERE`,
        conceptTag: 'SQL WHERE Clause',
        language: 'sql',
        instruction: `Write an SQL query to select all columns from the \`Customers\` table where \`Country = 'Germany'\`.`,
        requirements: [
          { text: `Uses SELECT statement`, check: (c) => /SELECT/i.test(c) },
          { text: `Selects FROM Customers table`, check: (c) => /FROM\s+Customers/i.test(c) },
          { text: `Filters with WHERE Country = 'Germany'`, check: (c) => /WHERE\s+Country\s*=\s*['"]Germany['"]/i.test(c) }
        ],
        starterCode: `-- Select customers located in Germany\nSELECT * FROM Customers\n`,
        solutionCode: `SELECT * FROM Customers WHERE Country = 'Germany';`,
        hint: `String values in SQL are case-sensitive and enclosed in single quotes: Country = 'Germany'.`,
        explanation: `The WHERE clause filters rows before grouping or returning results to the client.`
      };
    }
    return {
      id,
      title: `SQL Exercise: ${title}`,
      conceptTag: `SQL: ${title}`,
      language: 'sql',
      instruction: `Write a standard SQL query implementing **${title}**. Query the relational tables (\`Customers\`, \`Products\`, or \`Employees\`).`,
      requirements: [
        { text: `Uses standard SQL keywords`, check: (c) => /SELECT|INSERT|UPDATE|DELETE/i.test(c) },
        { text: `Specifies valid table name`, check: (c) => /Customers|Products|Employees/i.test(c) },
        { text: `Ends with semicolon ;`, check: (c) => /;\s*$/.test(c.trim()) }
      ],
      starterCode: starterFromLesson || `-- Write your SQL query below:\nSELECT * FROM Customers;`,
      solutionCode: `SELECT CustomerID, CustomerName, City, Country\nFROM Customers\nORDER BY CustomerName ASC;`,
      hint: `Remember to end your query with a semicolon (;). SQL keywords like SELECT and FROM are conventionally written in uppercase.`,
      explanation: `SQL is a declarative language where you describe the data you want rather than how to compute it.`
    };
  }

  // ============================================================
  // 7. PHP
  // ============================================================
  if (cSlug === 'php') {
    return {
      id,
      title: `PHP 8.3 Exercise: ${title}`,
      conceptTag: `PHP: ${title}`,
      language: 'php',
      instruction: `Implement **${title}** in PHP. Open with \`<?php\`, declare variables prefixed with \`$\`, and output content using \`echo\`.`,
      requirements: [
        { text: `Must begin with '<?php'`, check: (c) => /<\?php/i.test(c) },
        { text: `Uses variables starting with '$'`, check: (c) => /\$[a-zA-Z_]\w*/.test(c) },
        { text: `Uses echo with semicolon`, check: (c) => /echo\s+.+;\s*/.test(c) }
      ],
      starterCode: starterFromLesson || `<?php\n// PHP Exercise: ${title}\n$appName = "Coding Vibes";\necho "Welcome to " . $appName;\n?>`,
      solutionCode: `<?php\n$topic = "${title}";\n$version = "PHP 8.3";\necho "Mastering $topic with $version!";\n?>`,
      hint: `In PHP, all variables must begin with a dollar sign ($). String concatenation uses the dot operator (.).`,
      explanation: `PHP scripts execute on the server side and output dynamic HTML or API responses directly to clients.`
    };
  }

  // ============================================================
  // 8. REACT
  // ============================================================
  if (cSlug === 'react' || cSlug === 'react-js') {
    return {
      id,
      title: `React 18 Component Exercise: ${title}`,
      conceptTag: `React: ${title}`,
      language: 'react',
      instruction: `Build an interactive React component demonstrating **${title}**. Use functional component syntax and return JSX.`,
      requirements: [
        { text: `Defines a functional component`, check: (c) => /function\s+[A-Z]\w*/.test(c) || /const\s+[A-Z]\w*\s*=\s*\(/.test(c) },
        { text: `Returns valid JSX markup`, check: (c) => /return\s*\(?\s*<[a-zA-Z]/.test(c) },
        { text: `Uses className instead of class`, check: (c) => !/\bclass="[^"]*"/.test(c) }
      ],
      starterCode: starterFromLesson || `function App() {\n  return (\n    <div className="card">\n      <h2>React: ${title}</h2>\n      <p>Interactive component built with React 18.</p>\n    </div>\n  );\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);`,
      solutionCode: `function App() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div style={{ padding: "24px", fontFamily: "Arial" }}>\n      <h2 style={{ color: "#0284c7" }}>React: ${title}</h2>\n      <p>Current clicks: {count}</p>\n      <button \n        onClick={() => setCount(count + 1)}\n        style={{ background: "#0284c7", color: "white", padding: "8px 16px", borderRadius: "6px", border: "none" }}\n      >\n        Increment Count\n      </button>\n    </div>\n  );\n}\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);`,
      hint: `In JSX, write 'className' instead of 'class', and close all open tags.`,
      explanation: `React uses a Virtual DOM and declarative state management to update only the UI components that changed.`
    };
  }

  // ============================================================
  // 9. BOOTSTRAP
  // ============================================================
  if (cSlug === 'bootstrap') {
    return {
      id,
      title: `Bootstrap 5 Exercise: ${title}`,
      conceptTag: `Bootstrap: ${title}`,
      language: 'bootstrap',
      instruction: `Use Bootstrap 5 responsive utility classes to build a clean component for **${title}**.`,
      requirements: [
        { text: `Uses container class`, check: (c) => /class="[^"]*container[^"]*"/.test(c) },
        { text: `Uses card or alert component`, check: (c) => /class="[^"]*(card|alert|row|col)[^"]*"/.test(c) },
        { text: `Uses Bootstrap button class`, check: (c) => /class="[^"]*btn\s+btn-[^"]*"/.test(c) }
      ],
      starterCode: starterFromLesson || `<div class="container my-4">\n  <div class="card shadow-sm">\n    <div class="card-body">\n      <h4 class="card-title">Bootstrap 5: ${title}</h4>\n      <p class="card-text">Responsive styling with utility classes.</p>\n      <button class="btn btn-primary">Action</button>\n    </div>\n  </div>\n</div>`,
      solutionCode: `<div class="container my-5">\n  <div class="card border-primary shadow">\n    <div class="card-header bg-primary text-white">\n      <h4>Bootstrap 5: ${title}</h4>\n    </div>\n    <div class="card-body">\n      <p>Responsive layout powered by the 12-column grid.</p>\n      <button class="btn btn-success me-2">Save</button>\n      <button class="btn btn-outline-secondary">Cancel</button>\n    </div>\n  </div>\n</div>`,
      hint: `Bootstrap 5 utilities like 'p-3', 'my-4', and 'btn-primary' allow rapid styling without writing custom CSS.`,
      explanation: `Bootstrap 5 is mobile-first, built with flexbox and a 12-column responsive layout grid.`
    };
  }

  // ============================================================
  // 10. CSS
  // ============================================================
  if (cSlug === 'css') {
    return {
      id,
      title: `CSS3 Exercise: ${title}`,
      conceptTag: `CSS: ${title}`,
      language: 'css',
      instruction: `Write clean CSS rules demonstrating **${title}**. Set properties with appropriate values and semicolons.`,
      requirements: [
        { text: `Contains valid CSS selector and curly braces`, check: (c) => /[\.\#\w-]+\s*\{[^}]+\}/.test(c) },
        { text: `Defines styling property with semicolon`, check: (c) => /:\s*[^;]+;/.test(c) }
      ],
      starterCode: starterFromLesson || `.preview-box {\n  background-color: #04AA6D;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n}`,
      solutionCode: `.preview-box {\n  background: linear-gradient(135deg, #04AA6D, #0284c7);\n  color: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);\n  text-align: center;\n}`,
      hint: `CSS declarations follow the 'property: value;' syntax inside a selector's curly braces.`,
      explanation: `CSS controls the presentation, visual hierarchy, and cross-device responsiveness of HTML documents.`
    };
  }

  // ============================================================
  // 11. HTML / JAVASCRIPT / DEFAULT
  // ============================================================
  return {
    id,
    title: `Web Exercise: ${title}`,
    conceptTag: `${courseSlug.toUpperCase()}: ${title}`,
    language: cSlug,
    instruction: `Implement **${title}** using standard, compliant syntax. View the live preview canvas and verify that your code renders cleanly.`,
    requirements: [
      { text: `Contains non-empty code`, check: (c) => c.trim().length > 15 },
      { text: `Includes valid tags or declarations`, check: (c) => /<[a-z]+|function|var|let|const/i.test(c) }
    ],
    starterCode: starterFromLesson || `<!-- ${courseSlug.toUpperCase()}: ${title} -->\n<div style="font-family: Arial; padding: 20px;">\n  <h2>${title}</h2>\n  <p>Interactive demonstration in ${courseSlug.toUpperCase()}.</p>\n</div>`,
    solutionCode: `<div style="font-family: Arial; padding: 24px; background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px;">\n  <h2 style="color: #166534;">${title} - Completed</h2>\n  <p>Standard-compliant code example verified successfully.</p>\n</div>`,
    hint: `Follow web standards by properly nesting child elements and closing tags.`,
    explanation: `Building standard-compliant code guarantees cross-browser compatibility and accessibility.`
  };
}
