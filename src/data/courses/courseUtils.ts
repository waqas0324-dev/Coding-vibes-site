import { Lesson, LessonContent, PracticeQuestion, QuizQuestion, DiagramConfig } from '../../types';
import { getTopicDefinition } from './topicData';
import { buildPedagogicalLessonContent, getDeepCurriculumTopic } from './curriculumContentUtility';

export function createStructuredLesson(
  courseSlug: string,
  moduleNumber: number,
  moduleTitle: string,
  lessonNumber: number,
  lessonTitle: string,
  customContent?: Partial<LessonContent>,
  customPractice?: PracticeQuestion[],
  customQuiz?: QuizQuestion[]
): Lesson {
  const slug = lessonTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const id = `${courseSlug}-m${moduleNumber}-l${lessonNumber}`;
  const topicDef = getTopicDefinition(courseSlug, lessonTitle);
  const deepCurriculum = getDeepCurriculumTopic(courseSlug, lessonTitle);

  // Determine appropriate diagram type if applicable
  let diagram: DiagramConfig | undefined = undefined;
  const lt = lessonTitle.toLowerCase();
  if (lt.includes('tree') || lt.includes('structure') || lt.includes('doctype') || lt.includes('root') || lt.includes('body')) {
    diagram = { type: 'html-tree', title: `${lessonTitle} Hierarchy` };
  } else if (lt.includes('box') || lt.includes('model') || lt.includes('margin') || lt.includes('padding') || lt.includes('border')) {
    diagram = { type: 'box-model', title: 'CSS Box Model Structure' };
  } else if (lt.includes('flex') || lt.includes('layout') || lt.includes('align') || lt.includes('justify')) {
    diagram = { type: 'flexbox', title: 'Flexbox Layout Visualizer' };
  } else if (lt.includes('form') || lt.includes('input') || lt.includes('button') || lt.includes('label')) {
    diagram = { type: 'form-anatomy', title: 'Form Element Anatomy' };
  } else if (lt.includes('dom') || lt.includes('event') || lt.includes('click') || lt.includes('select')) {
    diagram = { type: 'dom-tree', title: 'DOM Tree Architecture & Event Flow' };
  } else if (lt.includes('semantic') || lt.includes('header') || lt.includes('nav') || lt.includes('footer') || lt.includes('article')) {
    diagram = { type: 'semantic-layout', title: 'Semantic Page Wireframe' };
  } else if (lt.includes('heading') || lt.includes('h1') || lt.includes('h2') || lt.includes('title')) {
    diagram = { type: 'heading-hierarchy', title: 'Typography & Heading Scale' };
  }

  const defaultContent: LessonContent = {
    heroTagline: topicDef?.heroTagline || `Mastering ${lessonTitle} in ${courseSlug.toUpperCase()}`,
    introduction: topicDef?.introduction || `In this lesson, you will master **${lessonTitle}**. You will understand what it is, why it is used in real applications, and how to write clean, standard-compliant code.`,
    
    definition: topicDef?.definition || (() => {
      switch (courseSlug) {
        case 'python':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a core programming construct in Python 3 used to manage data structures, functions, and algorithmic flow.` };
        case 'java':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a strongly typed, object-oriented construct in Java compiled to bytecode and executed on the Java Virtual Machine (JVM).` };
        case 'cpp':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a high-performance construct in C++ providing fine-grained memory management and zero-overhead abstractions.` };
        case 'c':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a foundational procedural programming feature in C operating directly with system hardware and memory addresses.` };
        case 'csharp':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a modern, object-oriented .NET programming feature used to build robust enterprise software.` };
        case 'sql':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a declarative query language statement used to interact with relational database management systems (RDBMS).` };
        case 'php':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a server-side scripting construct in PHP used to process backend logic and render dynamic HTML pages.` };
        case 'react':
        case 'react-js':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a declarative UI component or state feature in React used to render modern interactive web interfaces.` };
        case 'bootstrap':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a responsive UI component or utility class in Bootstrap 5.` };
        case 'css':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a cascading style sheet rule used to design responsive, visually engaging web layouts.` };
        case 'html':
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a standard semantic HTML element used to organize document structure.` };
        default:
          return { term: lessonTitle, explanation: `**${lessonTitle}** is a fundamental feature in ${courseSlug.toUpperCase()} programming.` };
      }
    })(),

    diagram,

    whyItMatters: (() => {
      switch (courseSlug) {
        case 'python':
          return `Writing clean **${lessonTitle}** code ensures your Python programs are readable, modular, bug-free, and follow standard PEP 8 conventions.`;
        case 'java':
          return `Mastering **${lessonTitle}** in Java enforces type safety, solid object-oriented structure, and enterprise-grade reliability.`;
        case 'cpp':
          return `Understanding **${lessonTitle}** in C++ unlocks maximum runtime speed, zero-overhead abstractions, and low-level memory efficiency.`;
        case 'c':
          return `Mastering **${lessonTitle}** gives you deep mastery over computer architecture, memory addresses, and predictable execution.`;
        case 'csharp':
          return `Implementing **${lessonTitle}** effectively leverages the speed and modern features of the .NET runtime.`;
        case 'sql':
          return `Writing optimized **${lessonTitle}** statements prevents slow full-table scans and allows your databases to handle millions of rows effortlessly.`;
        case 'php':
          return `Using **${lessonTitle}** securely prevents backend vulnerabilities and ensures fast web response times.`;
        case 'react':
        case 'react-js':
          return `Mastering **${lessonTitle}** keeps your React component hierarchy clean, minimizes re-renders, and elevates user experience.`;
        case 'css':
          return `Mastering **${lessonTitle}** in CSS ensures responsive layouts, smooth styling, and visual consistency across all viewports.`;
        case 'html':
          return `Using semantic **${lessonTitle}** ensures accessibility (WCAG), search engine indexing (SEO), and clean document outline.`;
        default:
          return `Using **${lessonTitle}** properly guarantees clean code, high performance, and industry-standard best practices in ${courseSlug.toUpperCase()}.`;
      }
    })(),

    realWorldAnalogy: {
      title: `Understanding ${lessonTitle}`,
      story: `In professional software engineering, every component serves a clear purpose:`,
      comparison: [
        { item: "Standard Structure", meaning: "Ensures all developers and execution environments can parse and run your code predictably." },
        { item: "Best Practices", meaning: "Prevents memory leaks, logic bugs, and security vulnerabilities." }
      ]
    },

    syntaxStructure: topicDef?.syntaxStructure || (() => {
      switch (courseSlug) {
        case 'html':
          return `<${slug.split('-')[0] || 'element'}>Content goes here...</${slug.split('-')[0] || 'element'}>`;
        case 'css':
          return `.${slug} {\n  display: block;\n  padding: 16px;\n  color: #04AA6D;\n}`;
        case 'javascript':
          return `// ${lessonTitle}\nfunction execute${lessonTitle.replace(/[^a-zA-Z]/g, '')}() {\n  console.log("Mastering ${lessonTitle}");\n}`;
        case 'java':
          return `public class Main {\n  public static void main(String[] args) {\n    System.out.println("${lessonTitle}");\n  }\n}`;
        case 'php':
          return `<?php\n// ${lessonTitle}\n$message = "${lessonTitle}";\necho $message;\n?>`;
        case 'c':
          return `#include <stdio.h>\n\nint main() {\n    printf("Learning ${lessonTitle}\\n");\n    return 0;\n}`;
        case 'cpp':
          return `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Learning ${lessonTitle}" << endl;\n    return 0;\n}`;
        case 'csharp':
          return `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("${lessonTitle}");\n    }\n}`;
        case 'bootstrap':
          return `<div class="container mt-4">\n  <div class="alert alert-success">\n    <h4>${lessonTitle}</h4>\n  </div>\n</div>`;
        case 'w3css':
          return `<div class="w3-container w3-teal w3-padding-16">\n  <h2>${lessonTitle}</h2>\n</div>`;
        case 'howto':
          return `<div class="custom-${slug}">\n  <h3>${lessonTitle}</h3>\n</div>`;
        case 'python':
          return `# ${lessonTitle}\nprint("Mastering ${lessonTitle}")`;
        case 'sql':
          return `-- ${lessonTitle}\nSELECT * FROM Customers;`;
        default:
          return `// ${lessonTitle}\nconsole.log("${lessonTitle}");`;
      }
    })(),

    codeAnnotations: topicDef?.codeAnnotations || [
      {
        lineOrToken: courseSlug === 'html'
          ? `<${slug.split('-')[0] || 'element'}>`
          : courseSlug === 'java' || courseSlug === 'c' || courseSlug === 'cpp' || courseSlug === 'csharp'
          ? `main()`
          : courseSlug === 'php'
          ? `<?php`
          : `.${slug}`,
        description: `Defines the primary syntax declaration and rules for **${lessonTitle}**.`
      },
      {
        lineOrToken: "Statements / Execution",
        description: `Represents the valid statements, arguments, and execution flow for ${courseSlug.toUpperCase()}.`
      }
    ],

    codeExample: topicDef?.codeExample || (() => {
      switch (courseSlug) {
        case 'html':
          return `<!-- Example of ${lessonTitle} -->\n<div class="card">\n  <h2>${lessonTitle}</h2>\n  <p>Learn to write clean, semantic code with Coding Vibes.</p>\n</div>`;
        case 'css':
          return `/* Example of ${lessonTitle} */\n.card {\n  display: flex;\n  padding: 20px;\n  background-color: #282A35;\n  border-radius: 8px;\n  border: 1px solid #04AA6D;\n  color: #ffffff;\n}`;
        case 'javascript':
          return `// Example of ${lessonTitle}\nfunction test${lessonTitle.replace(/[^a-zA-Z]/g, '')}() {\n  const message = "${lessonTitle} is working!";\n  console.log(message);\n  return message;\n}\n\ntest${lessonTitle.replace(/[^a-zA-Z]/g, '')}();`;
        case 'java':
          return `// Java Example for ${lessonTitle}\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello from ${lessonTitle}!");\n    int number = 42;\n    System.out.println("Value: " + number);\n  }\n}`;
        case 'php':
          return `<?php\n// PHP Example for ${lessonTitle}\n$title = "${lessonTitle}";\necho "<h1>Learning " . $title . "</h1>";\necho "<p>PHP runs seamlessly on web servers.</p>";\n?>`;
        case 'c':
          return `// C Example for ${lessonTitle}\n#include <stdio.h>\n\nint main() {\n    printf("Welcome to ${lessonTitle}\\n");\n    int code = 100;\n    printf("Status code: %d\\n", code);\n    return 0;\n}`;
        case 'cpp':
          return `// C++ Example for ${lessonTitle}\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string topic = "${lessonTitle}";\n    cout << "Topic: " << topic << endl;\n    cout << "C++ provides speed and performance!" << endl;\n    return 0;\n}`;
        case 'csharp':
          return `// C# Example for ${lessonTitle}\nusing System;\n\nnamespace CodingVibes {\n    class Program {\n        static void Main(string[] args) {\n            Console.WriteLine("Mastering ${lessonTitle} in C#");\n            string status = "Success";\n            Console.WriteLine($"Status: {status}");\n        }\n    }\n}`;
        case 'bootstrap':
          return `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 5 Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap 5 Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Bootstrap 5 is designed to be responsive to mobile devices.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Mobile-first styles are part of the core framework.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Columns will stack vertically on small mobile viewports.</p>
    </div>
  </div>
</div>

</body>
</html>`;
        case 'w3css':
          return `<!-- W3.CSS Example: ${lessonTitle} -->\n<div class="w3-container w3-margin-top">\n  <div class="w3-card-4 w3-white w3-round-large">\n    <div class="w3-container w3-green w3-round-top">\n      <h3>${lessonTitle}</h3>\n    </div>\n    <div class="w3-container w3-padding">\n      <p>W3.CSS is lightweight, modern, and fast.</p>\n      <button class="w3-button w3-black w3-round">Try It</button>\n    </div>\n  </div>\n</div>`;
        case 'howto':
          return `<!-- How To Recipe: ${lessonTitle} -->\n<div class="recipe-container">\n  <header class="recipe-header">\n    <h2>${lessonTitle}</h2>\n    <p>Step-by-step interactive implementation.</p>\n  </header>\n  <button class="action-btn" onclick="alert('${lessonTitle} triggered!')">Interactive Demo</button>\n</div>`;
        case 'python':
          return `# Python Example for ${lessonTitle}\nprint("Mastering ${lessonTitle}")\ndef run_demo():\n    languages = ["Python", "JavaScript", "SQL"]\n    for lang in languages:\n        print(f"Learned: {lang}")\nrun_demo()`;
        case 'sql':
          return `-- SQL Example for ${lessonTitle}\nSELECT CustomerID, CustomerName, Country\nFROM Customers\nWHERE Country = 'Germany'\nORDER BY CustomerName ASC;`;
        default:
          return `// Example for ${lessonTitle}\nconsole.log("${lessonTitle} initialized");`;
      }
    })(),

    commonMistakes: topicDef?.commonMistakes || [
      {
        wrong: courseSlug === 'html'
          ? `<${slug.split('-')[0] || 'element'}>Unclosed tag`
          : courseSlug === 'java' || courseSlug === 'c' || courseSlug === 'cpp' || courseSlug === 'csharp'
          ? `System.out.println("Missing semicolon")`
          : courseSlug === 'php'
          ? `echo "Missing semicolon"`
          : `.bad { syntax error }`,
        correct: courseSlug === 'html'
          ? `<${slug.split('-')[0] || 'element'}>Closed tag</${slug.split('-')[0] || 'element'}>`
          : courseSlug === 'java' || courseSlug === 'c' || courseSlug === 'cpp' || courseSlug === 'csharp'
          ? `System.out.println("Correct syntax with semicolon;");`
          : courseSlug === 'php'
          ? `echo "Correct syntax with semicolon;";`
          : `.good { display: block; }`,
        reason: `Always follow official syntax specifications in ${courseSlug.toUpperCase()} to avoid compile and runtime errors.`
      }
    ],

    tips: topicDef?.tips || [
      `Always keep your ${courseSlug.toUpperCase()} code well-indented, readable, and commented.`,
      `Test your code iteratively in the live sandbox to verify exact behavior.`
    ],

    tryItYourself: (() => {
      if (customContent?.tryItYourself) return customContent.tryItYourself;
      if (topicDef?.tryItYourself) return topicDef.tryItYourself;
      if (topicDef?.codeExample && (courseSlug === 'css' || courseSlug === 'html')) {
        return {
          html: topicDef.codeExample,
          css: ``,
          js: ``,
          instructions: `Experiment with this code and observe how the live preview updates.`
        };
      }
      if (courseSlug === 'html') {
        return {
          html: `<h1>${lessonTitle}</h1>\n<p>Edit this code and observe how the live preview responds!</p>\n<button style="background: #04AA6D; color: #fff; padding: 10px 20px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Click Me</button>`,
          css: `body {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #ffffff;\n  color: #1f2937;\n}\nh1 {\n  color: #04AA6D;\n}`,
          js: `console.log("HTML playground loaded successfully!");`,
          instructions: `Modify the HTML tags and observe instant updates.`
        };
      }
      if (courseSlug === 'css') {
        return {
          html: `<div class="demo-card">\n  <h2>${lessonTitle}</h2>\n  <p>Live CSS Sandbox</p>\n  <button class="demo-btn">Hover Over Me</button>\n</div>`,
          css: `.demo-card {\n  padding: 24px;\n  background: #f8fafc;\n  border: 2px solid #04AA6D;\n  border-radius: 12px;\n  font-family: system-ui, sans-serif;\n}\n.demo-btn {\n  margin-top: 12px;\n  padding: 8px 16px;\n  background: #04AA6D;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.demo-btn:hover {\n  background: #038a58;\n}`,
          js: ``,
          instructions: `Adjust CSS colors, padding, borders, and margins.`
        };
      }
      if (courseSlug === 'bootstrap') {
        return {
          html: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 5 Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Bootstrap 5 provides a powerful grid system and responsive utilities.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Style components cleanly without writing complex custom CSS.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Ready to deploy across desktops, tablets, and smartphones.</p>
    </div>
  </div>
</div>

</body>
</html>`,
          css: ``,
          js: ``,
          instructions: `Experiment with Bootstrap classes like bg-success, p-5, text-center, and col-sm-4.`
        };
      }
      if (courseSlug === 'w3css') {
        return {
          html: `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">\n<div class="w3-container w3-padding-24">\n  <div class="w3-card-4 w3-white w3-round-large">\n    <header class="w3-container w3-green w3-round-top">\n      <h3>${lessonTitle}</h3>\n    </header>\n    <div class="w3-container w3-padding-16">\n      <p>Clean, speedy styling with pure W3.CSS framework.</p>\n      <button class="w3-button w3-black w3-round w3-hover-green">Interactive Button</button>\n    </div>\n  </div>\n</div>`,
          css: ``,
          js: ``,
          instructions: `Try switching w3-green to w3-blue, w3-teal, or w3-amber.`
        };
      }
      if (courseSlug === 'howto') {
        return {
          html: `<div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 20px auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">\n  <h3 style="color: #04AA6D; margin-top: 0;">${lessonTitle}</h3>\n  <p style="color: #4b5563; font-size: 14px;">Interactive responsive UI component recipe.</p>\n  <button id="toggleBtn" style="padding: 10px 18px; background: #04AA6D; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Click to Test</button>\n  <div id="resultBox" style="display:none; margin-top: 14px; padding: 12px; background: #d9eee1; border-radius: 6px; font-size: 13px; color: #04AA6D; font-weight: bold;">Action successfully executed!</div>\n</div>`,
          css: ``,
          js: `document.getElementById('toggleBtn')?.addEventListener('click', function() {\n  const box = document.getElementById('resultBox');\n  if (box) {\n    box.style.display = box.style.display === 'none' ? 'block' : 'none';\n  }\n});`,
          instructions: `Click the button to test interactive behavior, or customize the styling.`
        };
      }
      // Console & Virtual Output Runner for Java, PHP, C, C++, C#, Python, SQL, JS
      return {
        html: `<div style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px;">\n  <div style="color: #6a9955; margin-bottom: 8px;">// ${courseSlug.toUpperCase()} Execution Simulation: ${lessonTitle}</div>\n  <div style="color: #4ec9b0;">Program compiled and verified successfully.</div>\n  <div style="margin-top: 14px; padding: 10px; background: #252526; border-left: 3px solid #04AA6D; border-radius: 4px; font-size: 13px;">\n    <strong style="color: #04AA6D;">Program Output:</strong><br>\n    Hello from ${lessonTitle}!<br>\n    Status: Execution finished with exit code 0\n  </div>\n</div>`,
        css: ``,
        js: `console.log("Program executed: ${lessonTitle}");`,
        instructions: `Run the code and inspect the output terminal.`
      };
    })(),

    takeaways: [
      `**${lessonTitle}** is an essential building block in modern **${courseSlug.toUpperCase()}**.`,
      `Writing clean, compliant syntax ensures maintainable and error-free code.`,
      `Practice hands-on exercises to solidify your programming confidence.`
    ],

    ...customContent
  };

  const pedagogicalContent = buildPedagogicalLessonContent(courseSlug, lessonTitle, customContent);
  const finalContent: LessonContent = {
    ...defaultContent,
    ...pedagogicalContent,
    ...(topicDef || {}),
    ...(customContent || {})
  };

  if (deepCurriculum?.exercises?.challenge && !finalContent.challenge) {
    finalContent.challenge = deepCurriculum.exercises.challenge;
  }

  const defaultPractice: PracticeQuestion[] =
    customPractice ||
    (deepCurriculum?.exercises?.practice && deepCurriculum.exercises.practice.length > 0
      ? deepCurriculum.exercises.practice
      : undefined) ||
    topicDef?.practice || [
      {
        id: `${id}-p1`,
        type: 'multiple_choice',
        question: `Which statement accurately describes the main purpose of ${lessonTitle}?`,
        options: [
          `It is a standard feature used to structure and format web content correctly`,
          `It is deprecated and should never be used in modern websites`,
          `It only works on desktop computers and fails on mobile devices`,
          `It is a proprietary browser hack`
        ],
        correctAnswer: 0,
        explanation: `**${lessonTitle}** is an official standard feature used to ensure clean, structured, and cross-browser compliant applications.`
      },
      {
        id: `${id}-p2`,
        type: 'fill_in_blank',
        question: `Complete the ${courseSlug.toUpperCase()} best practice rule:`,
        instructions: `Always write clean, semantic, and well-structured ___`,
        correctAnswer: 'code',
        explanation: 'Writing clean and structured code improves maintainability, accessibility, and teamwork.'
      }
    ];

  const defaultQuiz: QuizQuestion[] =
    customQuiz ||
    (deepCurriculum?.exercises?.quiz && deepCurriculum.exercises.quiz.length > 0
      ? deepCurriculum.exercises.quiz
      : undefined) ||
    topicDef?.quiz || [
    {
      id: `${id}-q1`,
      question: `Why is understanding ${lessonTitle} important in ${courseSlug.toUpperCase()}?`,
      options: [
        `It establishes foundational knowledge for writing reliable, maintainable code`,
        `It is only needed for hardware setup`,
        `It replaces the need for testing and debugging`,
        `It automatically writes your entire application`
      ],
      correctAnswerIndex: 0,
      explanation: `Mastering ${lessonTitle} gives you the exact tools needed to build robust, bug-free, and high-performance software.`
    },
    {
      id: `${id}-q2`,
      question: `What is the recommended approach when writing ${lessonTitle}?`,
      options: [
        `Follow standard language conventions, proper nesting, and clean formatting`,
        `Ignore closing symbols and required syntax`,
        `Put all code on a single unformatted line`,
        `Mix incompatible deprecated patterns`
      ],
      correctAnswerIndex: 0,
      explanation: `Writing standard syntax with proper indentation ensures high readability and prevents unexpected runtime bugs.`
    },
    {
      id: `${id}-q3`,
      question: `Where does the code for ${lessonTitle} typically execute?`,
      options: [
        courseSlug === 'python' ? 'Inside the Python 3 interpreter environment' :
        courseSlug === 'java' ? 'Inside the Java Virtual Machine (JVM)' :
        courseSlug === 'cpp' || courseSlug === 'c' ? 'Compiled into native machine code executed directly by the CPU' :
        courseSlug === 'csharp' ? 'Inside the .NET Common Language Runtime (CLR)' :
        courseSlug === 'sql' ? 'Inside the Relational Database Management System (RDBMS) engine' :
        courseSlug === 'php' ? 'On the web server before the response is sent to the client' :
        'Inside the client\'s web browser rendering & JavaScript engine',
        'On an offline printer',
        'Inside an audio speaker only',
        'Directly inside the keyboard firmware'
      ],
      correctAnswerIndex: 0,
      explanation: `The runtime environment compiles or interprets the code to execute instructions reliably.`
    }
  ];

  return {
    id,
    title: lessonTitle,
    slug,
    order: lessonNumber,
    duration: '10 mins',
    description: finalContent.heroTagline || `Master ${lessonTitle} with clear explanations, visual diagrams, code breakdowns, and hands-on practice.`,
    content: finalContent,
    practice: defaultPractice,
    quiz: defaultQuiz
  };
}

