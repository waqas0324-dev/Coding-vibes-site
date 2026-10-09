import { LessonContent, PracticeQuestion, QuizQuestion, ChallengeTask } from '../../types';

// LESSON 1: What is HTML?
export const htmlLesson1Content: LessonContent = {
  heroTagline: "The foundational language of the World Wide Web",
  introduction: "Welcome to coding! **HTML** is the very first tool every software developer learns. Whether you look at Google, Wikipedia, Amazon, or your favorite blog, every webpage on the internet is built using **HTML as its structural backbone**.",
  
  definition: {
    term: "HTML (HyperText Markup Language)",
    explanation: "The **standard markup language** used to create, organize, and structure content on web pages. It uses special **tags** (like `<h1>`, `<p>`, and `<a>`) to describe what each piece of content represents."
  },

  diagram: {
    type: "html-tree",
    title: "HTML Document Hierarchy Tree",
    caption: "Click any node in the tree above to see its role in the webpage document structure."
  },

  whyItMatters: "Web browsers (such as Chrome, Edge, Safari, and Firefox) do not understand plain English sentences. Without **HTML**, a browser wouldn't know if a piece of text is a headline, a paragraph, a button, or an image. HTML gives **meaning and layout** to raw text.",

  realWorldAnalogy: {
    title: "The Architecture of a Building",
    story: "Think of building a website like building a modern house:",
    comparison: [
      { item: "HTML", meaning: "The structural foundation, brick walls, doorways, and room framing." },
      { item: "CSS", meaning: "The interior paint, wallpaper, furniture layout, lighting, and colors." },
      { item: "JavaScript", meaning: "The electrical wiring, smart appliances, running water, and interactive buttons." }
    ]
  },

  sections: [
    {
      title: "How Does a Web Browser Use HTML?",
      level: 2,
      paragraphs: [
        "When you type an address into your browser (like **codingvibes.com**), the web server sends an **HTML file** back to your computer.",
        "Your browser reads this code from **top to bottom**, parses the tags, and draws the visible elements onto your screen."
      ],
      callout: {
        type: "note",
        title: "HTML is Not a Programming Language",
        content: "HTML is a **markup language**, not a programming language. It does not calculate math, store database records, or run complex algorithms. Its job is **strictly structuring content**."
      }
    },
    {
      title: "Anatomy of an HTML Element",
      level: 2,
      paragraphs: [
        "An HTML element typically consists of an **opening tag**, the **content**, and a **closing tag**."
      ],
      comparisonTable: {
        title: "Key Terms Breakdown",
        headers: ["Term", "Example", "Description"],
        rows: [
          {
            values: ["Opening Tag", "<p>", "Marks the beginning of an element."],
            isCode: [false, true, false]
          },
          {
            values: ["Content", "Hello, World!", "The actual text or nested elements placed inside."],
            isCode: [false, false, false]
          },
          {
            values: ["Closing Tag", "</p>", "Marks the end. Notice the forward slash (/)."],
            isCode: [false, true, false]
          },
          {
            values: ["Complete Element", "<p>Hello, World!</p>", "The combination of tag and content."],
            isCode: [false, true, false]
          }
        ]
      }
    }
  ],

  syntaxStructure: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to Coding Vibes</h1>
    <p>This is my very first paragraph written in HTML!</p>
  </body>
</html>`,

  codeAnnotations: [
    {
      lineOrToken: "<!DOCTYPE html>",
      description: "Tells the web browser that this document is written in modern **HTML5 standard mode**."
    },
    {
      lineOrToken: "<html lang=\"en\">",
      description: "The **root container** of the page. All other elements must be nested inside this tag."
    },
    {
      lineOrToken: "<head> ... </head>",
      description: "Holds behind-the-scenes meta information, page title, and stylesheets (not visible on the page)."
    },
    {
      lineOrToken: "<body> ... </body>",
      description: "Contains all **visible content** that visitors see in the browser viewport."
    },
    {
      lineOrToken: "<h1> ... </h1>",
      description: "Creates the primary **Level 1 Heading** for the page."
    },
    {
      lineOrToken: "<p> ... </p>",
      description: "Creates a structured **text paragraph**."
    }
  ],

  codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, Future Developer!</h1>
    <p>You have just created your first structured HTML document.</p>
    <a href="https://example.com">Visit a link</a>
  </body>
</html>`,

  commonMistakes: [
    {
      wrong: "<h1>Hello World<h1>",
      correct: "<h1>Hello World</h1>",
      reason: "Closing tags must always have a forward slash before the tag name, like </h1>."
    },
    {
      wrong: "<p>Welcome to my page! Look at this heading <h1>Title</h1></p>",
      correct: "<h1>Title</h1>\n<p>Welcome to my page!</p>",
      reason: "Headings should not be nested inside text paragraphs. Keep elements semantically organized."
    }
  ],

  tips: [
    "Always use **lowercase letters** for tag names (`<p>`, `<h1>`, `<div>`), which is standard convention.",
    "Indent your nested code with 2 spaces to make it easy for you and your team to read."
  ],

  tryItYourself: {
    html: `<h1>Welcome to Coding Vibes</h1>
<p>I am learning to code step by step.</p>
<button>
  Click Me
</button>`,
    instructions: "Change the text inside the `<h1>` heading to your own name, and modify the paragraph text. Click 'Run' to see your changes instantly!"
  },

  challenge: {
    id: "html-ch-1",
    title: "Build Your First Greeting Webpage",
    description: "Create a simple webpage greeting with a main heading, an introductory paragraph, and an action button.",
    requirements: [
      "Add an `<h1>` tag with the text 'Welcome to My Portfolio'",
      "Add a `<p>` tag describing what you are learning",
      "Add a `<button>` with the text 'Get in Touch'"
    ],
    starterCode: {
      html: `<!-- Write your pure HTML solution here -->\n`
    },
    solutionCode: {
      html: `<h1>Welcome to My Portfolio</h1>\n<p>I am learning HTML, CSS, and JavaScript with Coding Vibes!</p>\n<button>Get in Touch</button>`
    },
    hint: "Use `<h1>` for your headline, `<p>` for your sentence, and `<button>` for the clickable element."
  },

  takeaways: [
    "**HTML stands for HyperText Markup Language** and forms the structure of all websites.",
    "Web browsers read HTML from top to bottom and render visual elements.",
    "Elements consist of an **opening tag**, **content**, and a **closing tag**.",
    "All visible elements belong inside the `<body>` element."
  ]
};

export const htmlLesson1Practice: PracticeQuestion[] = [
  {
    id: "html-p1-1",
    type: "multiple_choice",
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Management Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: 0,
    explanation: "**HTML stands for HyperText Markup Language**. 'HyperText' refers to links that connect web pages, while 'Markup' refers to the tags used to structure content."
  },
  {
    id: "html-p1-2",
    type: "fill_in_blank",
    question: "Complete the paragraph closing tag:",
    instructions: "Fill in the missing character: <p>Hello World<___p>",
    correctAnswer: "/",
    explanation: "Closing tags must always start with a forward slash (`/`)."
  },
  {
    id: "html-p1-3",
    type: "multiple_choice",
    question: "What is the primary role of HTML in web development?",
    options: [
      "Providing the structure and content of a web page",
      "Controlling colors, fonts, and animations",
      "Performing complex backend database calculations",
      "Encrypting network passwords"
    ],
    correctAnswer: 0,
    explanation: "HTML is responsible for **structure and content**. CSS handles appearance, and JavaScript handles dynamic behavior."
  }
];

export const htmlLesson1Quiz: QuizQuestion[] = [
  {
    id: "html-q1-1",
    question: "Which HTML element contains all visible page content that users see?",
    options: ["<head>", "<title>", "<body>", "<meta>"],
    correctAnswerIndex: 2,
    explanation: "The `<body>` element contains all visible elements like headings, paragraphs, images, tables, and buttons."
  },
  {
    id: "html-q1-2",
    question: "What is the very first line required in an HTML5 document?",
    options: ["<html>", "<!DOCTYPE html>", "<head>", "<meta charset='UTF-8'>"],
    correctAnswerIndex: 1,
    explanation: "`<!DOCTYPE html>` must be the first line to instruct browsers to render the document in modern HTML5 standards mode."
  },
  {
    id: "html-q1-3",
    question: "Is HTML considered a programming language?",
    options: [
      "Yes, it executes complex algorithms",
      "No, it is a markup language used to structure content",
      "Yes, it directly compiles to machine code",
      "No, it is only a database query system"
    ],
    correctAnswerIndex: 1,
    explanation: "HTML is a **markup language**. It defines structure and content rather than procedural programming logic."
  },
  {
    id: "html-q1-4",
    question: "Which tag is used for the most important heading on a page?",
    options: ["<head>", "<heading>", "<h6>", "<h1>"],
    correctAnswerIndex: 3,
    explanation: "`<h1>` represents the top-level, primary heading of a webpage."
  },
  {
    id: "html-q1-5",
    question: "What is the difference between an opening tag and a closing tag?",
    options: [
      "Closing tags are always uppercase",
      "Closing tags have a forward slash before the tag name, like </p>",
      "Opening tags use square brackets [ ]",
      "There is no difference"
    ],
    correctAnswerIndex: 1,
    explanation: "Closing tags include a forward slash immediately following the opening bracket (`</tagname>`)."
  }
];

// LESSON 2: HTML Editors
export const htmlEditorsContent: LessonContent = {
  heroTagline: "A simple text editor is all you need to learn HTML.",
  introduction: "Web pages can be created and modified by using professional HTML editors. However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac). We believe that using a simple text editor is a good way to learn HTML.",

  definition: {
    term: "HTML Editor",
    explanation: "A software application used to write, edit, and format HTML code. Options range from simple text editors (Notepad, TextEdit) to specialized developer IDEs (Visual Studio Code) and browser-based coding sandboxes."
  },

  whyItMatters: "Web developers write plain text files saved with the `.html` extension. Understanding how to create, edit, save, and open these files on your own computer is a fundamental step toward becoming an independent developer.",

  realWorldAnalogy: {
    title: "Drafting Tools Comparison",
    story: "Consider how different tools help you write:",
    comparison: [
      { item: "Plain Text Editors (Notepad / TextEdit)", meaning: "A plain pencil and notebook. It works everywhere with zero setup, but offers no coloring or automatic error warnings." },
      { item: "Code Editors (VS Code / WebStorm)", meaning: "A professional drafting table equipped with automatic rulers, syntax coloring, line numbers, and instant preview." },
      { item: "Interactive Sandboxes (Coding Vibes)", meaning: "An instant practice simulator right in your browser with zero installation needed." }
    ]
  },

  sections: [
    {
      title: "Why is the File Usually Named index.html?",
      level: 2,
      paragraphs: [
        "Web servers throughout the internet treat `index.html` (or `index.htm`) as the default home page of a directory or website.",
        "When a visitor navigates to `https://example.com`, the server automatically looks for and delivers `index.html` without requiring the user to type the full filename in the browser address bar."
      ]
    },
    {
      title: "Professional HTML Editors",
      level: 2,
      paragraphs: [
        "Once you are comfortable with basic HTML, professional developers generally use dedicated code editors such as **Visual Studio Code (VS Code)**, **Sublime Text**, or **JetBrains WebStorm**.",
        "These editors provide helpful features like real-time syntax highlighting, autocompletion (IntelliSense), indentation guides, and direct terminal access."
      ]
    }
  ],

  codeExample: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,

  codeAnnotations: [
    {
      lineOrToken: "index.htm",
      description: "The standard filename for the default entry page of any website."
    },
    {
      lineOrToken: "<title>Page Title</title>",
      description: "The title that displays in the browser tab."
    }
  ],

  commonMistakes: [
    {
      wrong: "Saving as 'index.html.txt'",
      correct: "Saving as 'index.html' or 'index.htm'",
      reason: "Operating systems sometimes hide extensions and append .txt. Be sure to select 'All Files (*.*)' when saving in Notepad."
    },
    {
      wrong: "Using Microsoft Word to save HTML",
      correct: "Using Notepad, TextEdit, VS Code, or Coding Vibes Live Sandbox",
      reason: "Word processors add proprietary XML markup and formatting codes that break raw web rendering."
    }
  ],

  tips: [
    "You can use either .htm or .html as file extension. There is no difference, it is entirely up to you.",
    "Visual Studio Code (VS Code) is free, open source, and the most widely used editor in the tech industry."
  ],

  tryItYourself: {
    html: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
    instructions: "Change the text inside the heading and paragraph, then click 'Run' to test your changes!"
  },

  takeaways: [
    "A simple text editor like Notepad or TextEdit is all you need to learn HTML.",
    "Always save web documents with the `.htm` or `.html` extension with UTF-8 encoding.",
    "`index.html` is the universal name for a website's default home page.",
    "Web browsers can open local HTML files directly from your computer without an internet connection."
  ]
};

export const htmlEditorsPractice: PracticeQuestion[] = [
  {
    id: "html-p2-1",
    type: "multiple_choice",
    question: "What file extension must be used when saving an HTML file?",
    options: [".html or .htm", ".doc", ".txt", ".web"],
    correctAnswer: 0,
    explanation: "HTML files must be saved with either `.html` or `.htm` extension so operating systems and web browsers recognize them."
  },
  {
    id: "html-p2-2",
    type: "multiple_choice",
    question: "Why should you avoid using Microsoft Word to write HTML code?",
    options: [
      "Word adds hidden formatting and metadata that breaks code execution",
      "Word cannot type angle brackets (< >)",
      "Word requires an expensive server license to render tags",
      "Word only supports JavaScript"
    ],
    correctAnswer: 0,
    explanation: "Word processors embed rich text formatting, fonts, and hidden characters that corrupt raw source code. Developers use plain-text code editors."
  },
  {
    id: "html-p2-3",
    type: "fill_in_blank",
    question: "What is the standard name for the default home page of a website?",
    instructions: "Type the filename (with extension):",
    correctAnswer: "index.html",
    explanation: "`index.html` is the universal default landing page file recognized by web servers."
  }
];

export const htmlEditorsQuiz: QuizQuestion[] = [
  {
    id: "html-q2-1",
    question: "Which of the following is a recommended professional code editor for web developers?",
    options: ["Visual Studio Code (VS Code)", "Microsoft Excel", "Adobe Photoshop", "Google Docs"],
    correctAnswerIndex: 0,
    explanation: "Visual Studio Code is the industry standard editor, offering syntax highlighting, autocompletion, and extensions."
  },
  {
    id: "html-q2-2",
    question: "How do you view a local HTML file in your web browser?",
    options: [
      "Double-click the .html file or drag it into a browser window",
      "You must first upload it to the cloud",
      "You have to compile it with an executable installer",
      "Local files cannot be opened by browsers"
    ],
    correctAnswerIndex: 0,
    explanation: "Web browsers can open files stored directly on your computer's hard drive without internet access."
  },
  {
    id: "html-q2-3",
    question: "What character encoding standard is universally recommended for HTML5 documents?",
    options: ["UTF-8", "ASCII-7", "Windows-1252", "ISO-8859-1"],
    correctAnswerIndex: 0,
    explanation: "`UTF-8` covers almost all characters, symbols, and languages on earth and is the universal standard for modern web pages."
  },
  {
    id: "html-q2-4",
    question: "What file extension can you use when saving an HTML document on your computer?",
    options: [
      "Either .html or .htm (both are completely valid)",
      "Only .txt",
      "Only .docx",
      "Only .exe"
    ],
    correctAnswerIndex: 0,
    explanation: "You can use either `.html` or `.htm`. There is no technical difference between them."
  },
  {
    id: "html-q2-5",
    question: "Why should you use a plain text editor (like Notepad/VS Code) instead of Microsoft Word for HTML?",
    options: [
      "Word processors add hidden rich formatting, styling, and metadata that break HTML code",
      "Word processors cannot save files locally",
      "Word processors do not support keyboard typing",
      "Word processors only run on Linux"
    ],
    correctAnswerIndex: 0,
    explanation: "Word processors save rich styles and binary headers instead of clean, raw plain-text code required by browsers."
  }
];

// LESSON 3: HTML Basic
export const htmlBasicContent: LessonContent = {
  heroTagline: "The essential boilerplate required by all standard web documents",
  introduction: "Every HTML document follows a strict, universal boilerplate structure. In this lesson, you will master the **5 core building blocks** (`<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, and `<body>`) that every web page must contain to be valid.",

  definition: {
    term: "HTML Basic Document Structure",
    explanation: "The mandatory hierarchical foundation of every valid webpage: the DOCTYPE declaration followed by the root `<html>` element, which contains the `<head>` (metadata) and `<body>` (visible content)."
  },

  diagram: {
    type: "html-tree",
    title: "Document Hierarchy Breakdown",
    caption: "Notice how <!DOCTYPE html> precedes the root <html> element, which splits into <head> (meta info) and <body> (visible content)."
  },

  whyItMatters: "Browsers are designed to handle millions of different websites. Without a standardized declaration and structure, browsers fall back to 'quirks mode', leading to unpredictable spacing, broken layout, and inconsistent mobile rendering.",

  sections: [
    {
      title: "The 5 Structural Pillars Explained",
      level: 2,
      paragraphs: [
        "Every standard web document consists of these 5 fundamental elements in order:"
      ],
      comparisonTable: {
        title: "Core Structural Elements",
        headers: ["Element / Tag", "Role", "Visible on Page?"],
        rows: [
          { values: ["<!DOCTYPE html>", "Informs the browser to use modern HTML5 standards mode.", "No"], isCode: [true, false, false] },
          { values: ["<html lang=\"en\">", "The root element enclosing all other tags.", "No"], isCode: [true, false, false] },
          { values: ["<head>", "Container for document metadata (title, character encoding, viewport).", "No"], isCode: [true, false, false] },
          { values: ["<title>", "Sets the browser tab title and search engine headline.", "In Browser Tab"], isCode: [true, false, false] },
          { values: ["<body>", "Contains all visible elements: headings, paragraphs, images, buttons.", "Yes (All of it)"], isCode: [true, false, false] }
        ]
      }
    }
  ],

  codeExample: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Page</title>
  </head>
  <body>
    <h1>This is a Main Heading</h1>
    <p>This is a standard text paragraph.</p>
    <h2>This is a Subheading</h2>
    <p>Another paragraph explaining the topic.</p>
  </body>
</html>`,

  codeAnnotations: [
    {
      lineOrToken: "<!DOCTYPE html>",
      description: "Must be line 1. Not case sensitive, but lowercase `<!DOCTYPE html>` is standard."
    },
    {
      lineOrToken: "<html lang=\"en\">",
      description: "Declares that the document is written in English, aiding accessibility screen readers."
    },
    {
      lineOrToken: "<meta name=\"viewport\" ...>",
      description: "Tells mobile devices to scale the webpage to the device width rather than zooming out."
    },
    {
      lineOrToken: "<body> ... </body>",
      description: "Everything inside this element appears directly in the user's browser viewport."
    }
  ],

  commonMistakes: [
    {
      wrong: "<head>\n  <h1>Page Title</h1>\n</head>",
      correct: "<body>\n  <h1>Page Title</h1>\n</body>",
      reason: "Visible content like headings and paragraphs must NEVER be placed inside the <head>."
    },
    {
      wrong: "Forgetting <!DOCTYPE html>",
      correct: "Writing <!DOCTYPE html> on the first line",
      reason: "Without it, browsers may render in 'quirks mode' with inconsistent layout behavior."
    }
  ],

  tips: [
    "Always check that every opening tag has a matching closing tag.",
    "Keep your code clean by indenting child elements with 2 spaces."
  ],

  tryItYourself: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Basic Structure Test</title>
  </head>
  <body>
    <h1>My First Basic Page</h1>
    <p>Practice writing HTML with clean document structure.</p>
  </body>
</html>`,
    instructions: "Add an `<h2>` subheading and a second paragraph inside the `<body>` element, then click Run."
  },

  takeaways: [
    "All HTML documents start with `<!DOCTYPE html>`.",
    "The `<html>` element is the root of the document.",
    "The `<head>` holds metadata; the `<body>` holds visible content.",
    "`<title>` names the page on browser tabs."
  ]
};

export const htmlBasicPractice: PracticeQuestion[] = [
  {
    id: "html-p3-1",
    type: "multiple_choice",
    question: "Where should the <title> tag be placed?",
    options: [
      "Inside the <head> element",
      "Inside the <body> element",
      "Directly after </html>",
      "Before <!DOCTYPE html>"
    ],
    correctAnswer: 0,
    explanation: "The `<title>` element belongs inside `<head>` because it is metadata representing the page name, not body content."
  },
  {
    id: "html-p3-2",
    type: "fill_in_blank",
    question: "Complete the HTML5 DOCTYPE declaration:",
    instructions: "Type the missing word: <!______ html>",
    correctAnswer: "DOCTYPE",
    explanation: "The declaration is `<!DOCTYPE html>`."
  }
];

export const htmlBasicQuiz: QuizQuestion[] = [
  {
    id: "html-q3-1",
    question: "What happens if you omit <!DOCTYPE html>?",
    options: [
      "The browser may trigger 'quirks mode', rendering the page inconsistently",
      "The browser will refuse to load any text",
      "Your computer will display an error message",
      "The page will automatically convert to PDF"
    ],
    correctAnswerIndex: 0,
    explanation: "Omitting the DOCTYPE declaration triggers 'quirks mode' in modern web browsers, which mimics bugs from older 1990s browsers."
  },
  {
    id: "html-q3-2",
    question: "Which element wraps the entire contents of an HTML webpage?",
    options: ["<html>", "<body>", "<head>", "<document>"],
    correctAnswerIndex: 0,
    explanation: "The `<html>` root element contains everything else on the page."
  },
  {
    id: "html-q3-3",
    question: "Where does the text inside the <title> tag appear to users?",
    options: [
      "On the browser tab and search engine results",
      "As a huge banner at the top of the body",
      "In the browser status bar at the bottom",
      "Inside a pop-up alert box"
    ],
    correctAnswerIndex: 0,
    explanation: "The `<title>` tag defines the title displayed on the browser tab, in bookmarks, and as the clickable link in search engine results."
  }
];

// LESSON 4: HTML Document Structure
export const htmlDocumentStructureContent: LessonContent = {
  heroTagline: "The essential skeleton of every web page",
  introduction: "Every HTML document follows a strict, universal boilerplate structure. In this lesson, you will master the **5 core building blocks** that make up every webpage.",
  
  definition: {
    term: "HTML Document Skeleton",
    explanation: "The required arrangement of `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` tags that creates a valid, standards-compliant webpage."
  },

  diagram: {
    type: "html-tree",
    title: "The 5 Key Structural Layers",
    caption: "The DOCTYPE is at the top, html encloses the page, head holds metadata, and body holds visible content."
  },

  stepByStep: [
    {
      stepNumber: 1,
      title: "Declare the DOCTYPE",
      description: "Write `<!DOCTYPE html>` on line 1. This prevents browsers from switching into outdated 'quirks mode'.",
      codeSnippet: "<!DOCTYPE html>"
    },
    {
      stepNumber: 2,
      title: "Add the <html> Root Element",
      description: "Wrap your entire document inside `<html lang=\"en\">`. The `lang=\"en\"` attribute tells screen readers and search engines the language of the page.",
      codeSnippet: "<html lang=\"en\">\n  <!-- Head and Body go inside here -->\n</html>"
    },
    {
      stepNumber: 3,
      title: "Configure the <head> Section",
      description: "Place your `<title>`, character set `<meta charset=\"UTF-8\">`, and viewport configuration inside the `<head>`.",
      codeSnippet: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Document Title</title>\n</head>"
    },
    {
      stepNumber: 4,
      title: "Add the <body> for Visible Content",
      description: "Write all headings, text, buttons, and multimedia inside `<body>`.",
      codeSnippet: "<body>\n  <h1>My Web Page</h1>\n  <p>Visible to users!</p>\n</body>"
    }
  ],

  syntaxStructure: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mastering HTML Structure</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>Everything in the body is displayed on screen.</p>
  </body>
</html>`,

  codeAnnotations: [
    {
      lineOrToken: "<meta charset=\"UTF-8\">",
      description: "Ensures the browser correctly renders special characters, symbols, emojis, and international alphabets."
    },
    {
      lineOrToken: "<meta name=\"viewport\" ...>",
      description: "Crucial for **responsive mobile design** so pages scale nicely on smartphones and tablets."
    },
    {
      lineOrToken: "<title> ... </title>",
      description: "Sets the text shown in the **browser tab bar** and in Google search engine results."
    }
  ],

  codeExample: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Coding Vibes Lesson</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Understanding document structure is the first milestone in web development.</p>
  </body>
</html>`,

  commonMistakes: [
    {
      wrong: "<body>\n  <h1>Title</h1>\n</body>\n<head><title>Page</title></head>",
      correct: "<head><title>Page</title></head>\n<body>\n  <h1>Title</h1>\n</body>",
      reason: "The <head> must always precede the <body> inside the <html> root container."
    }
  ],

  tryItYourself: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Sandbox</title>
  </head>
  <body>
    <h1>Document Structure Experiment</h1>
    <p>Add a new heading and paragraph below:</p>
  </body>
</html>`,
    instructions: "Experiment with adding a second heading `<h2>` and paragraph inside the `<body>` tag."
  },

  takeaways: [
    "Every webpage requires `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.",
    "`<head>` stores meta details and tab title; `<body>` stores visible content.",
    "Always specify `<meta charset=\"UTF-8\">` to support universal characters."
  ]
};

// LESSON 19: Headings (Module 2, Lesson 1)
export const htmlHeadingsContent: LessonContent = {
  heroTagline: "Establish typographic hierarchy and structure on your page",
  introduction: "In written articles, newspapers, and websites, **headings** introduce new sections and establish reading hierarchy. HTML provides **six levels of heading elements**: `<h1>` through `<h6>`.",
  
  definition: {
    term: "HTML Heading Elements (<h1> - <h6>)",
    explanation: "Elements used to define headlines and sub-headlines on a webpage. `<h1>` is the most important (main title), while `<h6>` is the least important."
  },

  diagram: {
    type: "heading-hierarchy",
    title: "Heading Scale & Hierarchy Visualization",
    caption: "Search engines and screen readers use heading levels (h1 -> h2 -> h3) to build an outline of your page."
  },

  comparisonTable: {
    title: "Heading Levels & Recommended Usage",
    headers: ["Tag", "Hierarchy Level", "Standard Purpose", "Limit per Page"],
    rows: [
      { values: ["<h1>", "Top Level (Primary Title)", "Main subject of the entire webpage", "Strictly 1 per page"], isCode: [true, false, false, false] },
      { values: ["<h2>", "Major Section", "Major topics or article sections", "Multiple"], isCode: [true, false, false, false] },
      { values: ["<h3>", "Subsection", "Sub-topics under an <h2>", "Multiple"], isCode: [true, false, false, false] },
      { values: ["<h4>", "Deep Sub-topic", "Component or card titles", "Multiple"], isCode: [true, false, false, false] },
      { values: ["<h5>", "Minor Label", "Small sidebar or widget captions", "Multiple"], isCode: [true, false, false, false] },
      { values: ["<h6>", "Lowest Level", "Smallest sub-caption", "Rarely needed"], isCode: [true, false, false, false] }
    ]
  },

  syntaxStructure: `<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Minor Sub-topic</h4>`,

  codeAnnotations: [
    {
      lineOrToken: "<h1>",
      description: "Represents the most critical title. Search engines like Google give greatest SEO weight to `<h1>`."
    },
    {
      lineOrToken: "<h2>",
      description: "Divides the page into primary chapters or major content blocks."
    },
    {
      lineOrToken: "<h3>",
      description: "Nests beneath an `<h2>` for secondary sub-topics."
    }
  ],

  codeExample: `<h1>The Complete Guide to HTML</h1>
<h2>1. Getting Started</h2>
<p>HTML is easy to learn once you understand the basic tags.</p>

<h3>Prerequisites</h3>
<p>All you need is a text editor and a web browser.</p>

<h2>2. Typography and Headings</h2>
<p>Headings organize your ideas into clear reading sections.</p>`,

  commonMistakes: [
    {
      wrong: "<h1>Title</h1>\n<h4>Skipping directly to level 4</h4>",
      correct: "<h1>Title</h1>\n<h2>Major Section</h2>\n<h3>Subsection</h3>",
      reason: "Never skip heading levels (e.g. going directly from <h1> to <h4>). This confuses accessibility tools and screen readers."
    },
    {
      wrong: "<!-- Using heading tags just to make text bigger -->\n<h3>This is just a sentence that I wanted to look bold</h3>",
      correct: "<p><strong>This is an important bold sentence.</strong></p>",
      reason: "Use headings only for section titles, not just to make normal text bigger. Use CSS or <strong> for visual styling."
    }
  ],

  tips: [
    "Have exactly **one `<h1>` per page** representing the main subject.",
    "Do not use headings for regular paragraphs just because they look bold."
  ],

  tryItYourself: {
    html: `<h1>Coding Vibes News</h1>
<h2>Web Development Trends</h2>
<p>Learning HTML and CSS is more popular than ever.</p>

<h3>Top Frontend Skills</h3>
<p>1. Semantic Markup<br>2. Responsive CSS Grid & Flexbox<br>3. JavaScript Fundamentals</p>`,
    instructions: "Try adding an `<h2>` for 'Mobile Development' and an `<h3>` for 'Responsive Web Design'!"
  },

  challenge: {
    id: "html-ch-headings",
    title: "Create a Blog Post Hierarchy",
    description: "Structure a blog article using correct heading hierarchy.",
    requirements: [
      "Use one `<h1>` for the article title: 'My Journey into Code'",
      "Use two `<h2>` headings for 'Why I Started' and 'What I Built'",
      "Add a `<p>` paragraph under each heading explaining your thoughts"
    ],
    starterCode: {
      html: `<!-- Create your blog hierarchy below -->\n`
    },
    solutionCode: {
      html: `<h1>My Journey into Code</h1>\n<h2>Why I Started</h2>\n<p>I wanted to build beautiful web apps for the world.</p>\n<h2>What I Built</h2>\n<p>I created my first HTML webpage with Coding Vibes!</p>`
    },
    hint: "Start with `<h1>`, then follow with `<h2>` and `<p>`."
  },

  takeaways: [
    "HTML provides six heading tags: `<h1>` to `<h6>`.",
    "`<h1>` is the primary title and should only appear once per page.",
    "Never skip heading levels (maintain strict h1 -> h2 -> h3 hierarchy).",
    "Headings provide essential structure for accessibility and SEO."
  ]
};

// LESSON: HTML Elements & Tags
export const htmlElementsContent: LessonContent = {
  heroTagline: "The foundational building blocks of all HTML markup",
  introduction: "In HTML, an **element** is an individual component of an HTML document. From a simple paragraph to a complex interactive form, everything you see on the web is represented as an element.",
  
  definition: {
    term: "HTML Element",
    explanation: "An HTML element is defined by a start tag, some content, and an end tag: `<tagname>Content goes here...</tagname>`. It tells the browser how to render and structure that content."
  },

  diagram: {
    type: "html-tree",
    title: "Anatomy of an HTML Element",
    caption: "The start tag opens the element, the inner text or children provide the content, and the end tag closes it."
  },

  comparisonTable: {
    title: "Container Elements vs Empty Elements",
    headers: ["Element Type", "Syntax Example", "Has Closing Tag?", "Description"],
    rows: [
      { values: ["Normal Element", "<p>Paragraph</p>", "Yes (</p>)", "Contains text or other nested elements."], isCode: [false, true, false, false] },
      { values: ["Heading Element", "<h1>Title</h1>", "Yes (</h1>)", "Contains headline text."], isCode: [false, true, false, false] },
      { values: ["Empty / Void", "<img src=\"cat.jpg\">", "No", "Has no inner content; self-contained."], isCode: [false, true, false, false] },
      { values: ["Line Break", "<br>", "No", "Inserts a carriage line break."], isCode: [false, true, false, false] },
      { values: ["Horizontal Rule", "<hr>", "No", "Draws a thematic visual divider."], isCode: [false, true, false, false] }
    ]
  },

  syntaxStructure: `<tagname attribute="value">
  Inner text or child elements
</tagname>`,

  codeAnnotations: [
    {
      lineOrToken: "<tagname>",
      description: "The **start tag** indicating where the element begins."
    },
    {
      lineOrToken: "attribute=\"value\"",
      description: "Additional properties and settings that modify the element's behavior or appearance."
    },
    {
      lineOrToken: "</tagname>",
      description: "The **end tag** with a leading forward slash, indicating where the element stops."
    }
  ],

  codeExample: `<article>
  <h2>Nested HTML Elements</h2>
  <p>HTML elements can be <strong>nested</strong> inside each other.</p>
  <p>Here is an empty element creating a divider:</p>
  <hr>
</article>`,

  commonMistakes: [
    {
      wrong: "<p>This is <strong>bold text</p></strong>",
      correct: "<p>This is <strong>bold text</strong></p>",
      reason: "Always close tags in the reverse order in which they were opened (proper nesting hierarchy)."
    }
  ],

  tips: [
    "Always close your elements properly to prevent layout bugs across different browsers.",
    "Empty elements (like `<img>`, `<input>`, `<br>`, `<hr>`) never have closing tags like `</img>`."
  ],

  tryItYourself: {
    html: `<div>
  <h2>Understanding Elements</h2>
  <p>This paragraph contains <strong>bold text</strong> and <em>italic text</em>.</p>
  <hr>
  <p>Notice how elements nest inside one another cleanly.</p>
</div>`,
    instructions: "Add another paragraph with an `<u>` underline element nested inside."
  },

  takeaways: [
    "An HTML element consists of a start tag, content, and end tag.",
    "Elements can be nested inside other elements.",
    "Void / Empty elements do not require closing tags."
  ]
};

export const htmlElementsPractice: PracticeQuestion[] = [
  {
    id: "html-p4-1",
    type: "multiple_choice",
    question: "Which of the following is an empty (void) HTML element with no closing tag?",
    options: ["<br>", "<p>", "<h1>", "<div>"],
    correctAnswer: 0,
    explanation: "`<br>` is an empty/void element because it inserts a line break and cannot contain inner text content, so it has no closing tag."
  },
  {
    id: "html-p4-2",
    type: "multiple_choice",
    question: "Which code snippet demonstrates proper HTML element nesting?",
    options: [
      "<p>Welcome to <strong>Coding Vibes</strong></p>",
      "<p>Welcome to <strong>Coding Vibes</p></strong>",
      "<strong><p>Welcome to Coding Vibes</strong></p>",
      "<p>Welcome to <strong>Coding Vibes"
    ],
    correctAnswer: 0,
    explanation: "Elements must be closed in reverse order of opening. In `<p><strong>...</strong></p>`, `<strong>` is opened inside `<p>`, so it must close before `</p>`."
  },
  {
    id: "html-p4-3",
    type: "fill_in_blank",
    question: "Which tag is used to create a thematic horizontal dividing line?",
    instructions: "Type the tag name without brackets (e.g. p):",
    correctAnswer: "hr",
    explanation: "The `<hr>` tag creates a horizontal rule across the page."
  }
];

export const htmlElementsQuiz: QuizQuestion[] = [
  {
    id: "html-q4-1",
    question: "What are the three main components of a standard HTML element?",
    options: [
      "Opening tag, content, and closing tag",
      "Function name, parameter list, and return value",
      "Selector, property, and value",
      "Header, payload, and signature"
    ],
    correctAnswerIndex: 0,
    explanation: "A standard HTML element consists of an opening tag (`<tag>`), content, and a closing tag (`</tag>`)."
  },
  {
    id: "html-q4-2",
    question: "Are HTML tag names case-sensitive according to the HTML5 standard?",
    options: [
      "No, but lowercase tags (<p>) are universally recommended",
      "Yes, all tags must be written in capital letters (<P>)",
      "Yes, tags must be camelCase (<myTag>)",
      "No, tags can only be written in Latin"
    ],
    correctAnswerIndex: 0,
    explanation: "HTML is not case-sensitive, meaning `<P>` and `<p>` both work, but the W3C and industry standard strictly recommends lowercase."
  },
  {
    id: "html-q4-3",
    question: "Which of the following elements requires a closing tag?",
    options: ["<h1>", "<hr>", "<img>", "<br>"],
    correctAnswerIndex: 0,
    explanation: "`<h1>` contains headline text and requires a closing `</h1>` tag. `<hr>`, `<img>`, and `<br>` are void elements."
  }
];

// LESSON: HTML Attributes
export const htmlAttributesContent: LessonContent = {
  heroTagline: "Providing additional properties, values, and superpowers to elements",
  introduction: "**HTML attributes** provide additional information about HTML elements. They configure elements, adjust their behavior, or provide unique identifiers for styling and scripting.",
  
  definition: {
    term: "HTML Attribute",
    explanation: "Special keywords specified inside the opening tag (e.g., `href`, `src`, `class`, `id`) in `name=\"value\"` pairs that modify an element's behavior."
  },

  comparisonTable: {
    title: "Common Essential Attributes",
    headers: ["Attribute", "Target Element", "Example", "Purpose"],
    rows: [
      { values: ["href", "<a>", "href=\"https://codingvibes.com\"", "Specifies the hyperlink URL destination"], isCode: [true, true, true, false] },
      { values: ["src", "<img>, <script>", "src=\"logo.png\"", "Specifies the path to an image or file asset"], isCode: [true, true, true, false] },
      { values: ["alt", "<img>", "alt=\"Company Logo\"", "Provides descriptive text for accessibility & broken images"], isCode: [true, true, true, false] },
      { values: ["class", "All elements", "class=\"btn-primary\"", "Assigns CSS classes for styling"], isCode: [true, true, true, false] },
      { values: ["id", "All elements", "id=\"main-nav\"", "Assigns a globally unique identifier"], isCode: [true, true, true, false] },
      { values: ["target", "<a>", "target=\"_blank\"", "Opens links in a new tab"], isCode: [true, true, true, false] }
    ]
  },

  syntaxStructure: `<element attribute_name="attribute_value">Content</element>`,

  codeAnnotations: [
    {
      lineOrToken: "href=\"https://...\"",
      description: "Tells the browser where to navigate when the user clicks the link."
    },
    {
      lineOrToken: "target=\"_blank\"",
      description: "Opens the linked document in a **new browser tab or window**."
    },
    {
      lineOrToken: "rel=\"noopener noreferrer\"",
      description: "Security best practice when opening links in new tabs to prevent tab-napping."
    }
  ],

  codeExample: `<a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Click to visit">
  Visit Example Website
</a>

<img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" alt="Code on a computer screen" width="300">`,

  commonMistakes: [
    {
      wrong: "<img src=photo.jpg alt=A scenic photo>",
      correct: "<img src=\"photo.jpg\" alt=\"A scenic photo\">",
      reason: "Always enclose attribute values in double quotes, especially when they contain spaces."
    },
    {
      wrong: "<a href=\"https://example.com\">Link</a href>",
      correct: "<a href=\"https://example.com\">Link</a>",
      reason: "Attributes belong ONLY inside the opening start tag, never inside the closing tag."
    }
  ],

  tryItYourself: {
    html: `<p>
  <a href="https://example.com" target="_blank" title="Opens the official example page">
    Click here to visit Example.com
  </a>
</p>
<p title="Hover your mouse cursor over this text to see the title attribute tooltip!">
  Hover over this paragraph to test the title attribute.
</p>`,
    instructions: "Modify the `href` and `title` attributes and observe the link and tooltip behavior."
  },

  takeaways: [
    "Attributes always go inside the opening tag.",
    "Attributes usually come in `name=\"value\"` pairs.",
    "Always use quotes around attribute values."
  ]
};

export const htmlAttributesPractice: PracticeQuestion[] = [
  {
    id: "html-p5-1",
    type: "multiple_choice",
    question: "Where must HTML attributes always be placed?",
    options: [
      "Inside the start tag (opening tag)",
      "Inside the closing tag",
      "At the very end of the HTML document",
      "Inside the <head> element only"
    ],
    correctAnswer: 0,
    explanation: "HTML attributes are always declared inside the start (opening) tag of an element, never the closing tag."
  },
  {
    id: "html-p5-2",
    type: "multiple_choice",
    question: "Which attribute specifies the image file path for an <img> element?",
    options: ["src", "href", "link", "path"],
    correctAnswer: 0,
    explanation: "The `src` (source) attribute specifies the path or URL to the image file."
  },
  {
    id: "html-p5-3",
    type: "fill_in_blank",
    question: "Which attribute opens a link in a new browser tab?",
    instructions: "Complete the attribute value: target=\"______\"",
    correctAnswer: "_blank",
    explanation: "`target=\"_blank\"` tells the browser to open the linked document in a new tab or window."
  }
];

export const htmlAttributesQuiz: QuizQuestion[] = [
  {
    id: "html-q5-1",
    question: "Why is the alt attribute essential for <img> elements?",
    options: [
      "It provides text for screen readers used by visually impaired users and displays if the image fails to load",
      "It alters the color saturation of the photo",
      "It rotates the image by 90 degrees",
      "It converts the image to SVG format"
    ],
    correctAnswerIndex: 0,
    explanation: "The `alt` (alternative text) attribute is critical for web accessibility (screen readers) and displays as fallback text if an image link breaks."
  },
  {
    id: "html-q5-2",
    question: "What is the standard syntax pattern for HTML attributes?",
    options: [
      "name=\"value\"",
      "value:name",
      "[name]->(value)",
      "name{value}"
    ],
    correctAnswerIndex: 0,
    explanation: "HTML attributes follow the `name=\"value\"` syntax pattern."
  },
  {
    id: "html-q5-3",
    question: "Which attribute provides hover tooltip text for almost any HTML element?",
    options: ["title", "tooltip", "hover", "caption"],
    correctAnswerIndex: 0,
    explanation: "The `title` attribute adds an advisory tooltip that appears when a user hovers their mouse pointer over the element."
  }
];

// LESSON: HTML Paragraphs & Formatting
export const htmlParagraphsContent: LessonContent = {
  heroTagline: "Formatting text, paragraphs, and inline emphasis",
  introduction: "In HTML, text is organized into paragraphs with the `<p>` element. HTML also provides specialized inline tags for **bolding**, *italicizing*, highlighting, and formatting text.",
  
  definition: {
    term: "HTML Paragraph (<p>)",
    explanation: "A block-level element that always starts on a new line. Web browsers automatically add top and bottom margin around paragraphs."
  },

  comparisonTable: {
    title: "Text Formatting Elements",
    headers: ["Tag", "Visual Effect", "Semantic Meaning", "Example"],
    rows: [
      { values: ["<strong>", "Bold text", "Important text (conveys gravity to screen readers)", "<strong>Important</strong>"], isCode: [true, false, false, true] },
      { values: ["<b>", "Bold text", "Purely stylistic bold without extra importance", "<b>Bold</b>"], isCode: [true, false, false, true] },
      { values: ["<em>", "Italic text", "Emphasized stress in speech", "<em>Emphasized</em>"], isCode: [true, false, false, true] },
      { values: ["<i>", "Italic text", "Technical term, idiom, or thought", "<i>Italic</i>"], isCode: [true, false, false, true] },
      { values: ["<mark>", "Yellow highlight", "Highlighted / marked text", "<mark>Highlighted</mark>"], isCode: [true, false, false, true] },
      { values: ["<small>", "Smaller text", "Side comments, copyright notices", "<small>&copy; 2026</small>"], isCode: [true, false, false, true] },
      { values: ["<del>", "Strikethrough", "Deleted / obsolete information", "<del>$99</del>"], isCode: [true, false, false, true] },
      { values: ["<ins>", "Underlined", "Inserted / updated information", "<ins>$49</ins>"], isCode: [true, false, false, true] }
    ]
  },

  syntaxStructure: `<p>
  This is a regular paragraph with <strong>bold</strong> and <em>italic</em> words.
  <br>
  Line breaks create a new line without starting a new paragraph.
</p>`,

  codeExample: `<p>
  Welcome to <strong>Coding Vibes</strong>. We help you learn to code 
  <em>step by step</em> with real-world practice.
</p>

<p>
  Original Price: <del>$99.00</del><br>
  Special Offer: <ins><mark>$0.00 (100% Free)</mark></ins>
</p>`,

  commonMistakes: [
    {
      wrong: "<p>Line 1\nLine 2\nLine 3</p>",
      correct: "<p>Line 1<br>Line 2<br>Line 3</p>",
      reason: "Browsers collapse multiple whitespace characters and line returns in HTML into a single space. Use <br> if you need a visual line break."
    }
  ],

  tryItYourself: {
    html: `<p>The secret to mastering coding is <strong>consistency</strong> and <em>daily practice</em>.</p>
<p>Special deal: <del>$150</del> <mark>$0</mark> for all students.</p>
<p><small>&copy; 2026 Coding Vibes. All rights reserved.</small></p>`,
    instructions: "Add a new paragraph that uses both `<mark>` and `<strong>` tags."
  },

  takeaways: [
    "`<p>` defines a block-level paragraph with standard margins.",
    "Use `<strong>` and `<em>` when text has semantic importance.",
    "HTML collapses multiple whitespace spaces into a single space."
  ]
};

// LESSON: HTML Links
export const htmlLinksContent: LessonContent = {
  heroTagline: "Hyperlinks: The connective tissue of the World Wide Web",
  introduction: "The web was invented to connect documents together. The **HTML anchor tag (`<a>`)** creates hyperlinks that allow users to jump from one page to another, download files, or send emails.",
  
  definition: {
    term: "Anchor Tag (<a>)",
    explanation: "An inline element used to define hyperlinks. The `href` (Hypertext REFerence) attribute specifies the target destination URL."
  },

  comparisonTable: {
    title: "Types of Hyperlinks",
    headers: ["Link Type", "Syntax Example", "Usage Scenario"],
    rows: [
      { values: ["Absolute Link", "<a href=\"https://google.com\">Google</a>", "Links to an external website on the internet."], isCode: [false, true, false] },
      { values: ["Relative Link", "<a href=\"/about.html\">About Us</a>", "Links to another file inside the same website."], isCode: [false, true, false] },
      { values: ["Email Link", "<a href=\"mailto:team@vibes.com\">Email Us</a>", "Opens the visitor's default email client."], isCode: [false, true, false] },
      { values: ["Telephone Link", "<a href=\"tel:+1234567890\">Call Us</a>", "Triggers phone dialer on mobile devices."], isCode: [false, true, false] },
      { values: ["Page Bookmark", "<a href=\"#pricing\">Jump to Pricing</a>", "Smoothly scrolls to an element with id=\"pricing\"."], isCode: [false, true, false] }
    ]
  },

  syntaxStructure: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link Anchor Text
</a>`,

  codeAnnotations: [
    {
      lineOrToken: "href=\"...\"",
      description: "The destination address where the link navigates when clicked."
    },
    {
      lineOrToken: "target=\"_blank\"",
      description: "Instructs the browser to open the link in a **new tab**."
    }
  ],

  codeExample: `<nav>
  <a href="#home">Home</a> |
  <a href="#courses">Courses</a> |
  <a href="mailto:support@codingvibes.com">Contact Support</a>
</nav>

<p>
  Check out our <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Reference Docs</a>.
</p>`,

  commonMistakes: [
    {
      wrong: "<a target=\"_blank\">Visit Site</a>",
      correct: "<a href=\"https://example.com\" target=\"_blank\">Visit Site</a>",
      reason: "An anchor tag without an `href` attribute is not a clickable hyperlink."
    }
  ],

  tryItYourself: {
    html: `<h3>Helpful Links</h3>
<ul>
  <li><a href="https://codingvibes.com" target="_blank" style="color: #22c55e;">Coding Vibes Home</a></li>
  <li><a href="mailto:hello@example.com" style="color: #38bdf8;">Send us an Email</a></li>
  <li><a href="tel:+18005550199" style="color: #facc15;">Call Support</a></li>
</ul>`,
    instructions: "Add a new list item containing a link to your favorite coding resource."
  },

  takeaways: [
    "`<a>` tags create hyperlinks with the `href` attribute.",
    "Use absolute URLs for external sites and relative URLs for internal pages.",
    "Use `target=\"_blank\"` with `rel=\"noopener noreferrer\"` for new tabs."
  ]
};

// LESSON: HTML Images & Media
export const htmlImagesContent: LessonContent = {
  heroTagline: "Embedding responsive pictures, figures, and graphic media",
  introduction: "Images bring web pages to life. In HTML, the `<img>` tag is used to embed visual graphics into your document.",
  
  definition: {
    term: "Image Tag (<img>)",
    explanation: "An empty element used to embed images. It requires the `src` attribute (image source path) and the `alt` attribute (alternative descriptive text)."
  },

  comparisonTable: {
    title: "Essential Image Attributes",
    headers: ["Attribute", "Required?", "Example", "Why It Matters"],
    rows: [
      { values: ["src", "Yes", "src=\"banner.jpg\"", "The URL or file path to the graphic file."], isCode: [true, false, true, false] },
      { values: ["alt", "Yes (Crucial)", "alt=\"Sunset over mountains\"", "Read by screen readers for accessibility and displayed if image fails to load."], isCode: [true, false, true, false] },
      { values: ["width", "Recommended", "width=\"600\"", "Defines the intrinsic pixel width to prevent layout shifts."], isCode: [true, false, true, false] },
      { values: ["height", "Recommended", "height=\"400\"", "Defines the intrinsic pixel height."], isCode: [true, false, true, false] },
      { values: ["loading", "Optional", "loading=\"lazy\"", "Defers offscreen image loading until user scrolls near it for speed."], isCode: [true, false, true, false] }
    ]
  },

  syntaxStructure: `<img src="image-url.jpg" alt="Descriptive text" width="400" height="300" loading="lazy">`,

  codeExample: `<figure>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" 
    alt="Laptop on desk with code on screen" 
    width="500" 
    style="border-radius: 12px; max-width: 100%; height: auto;"
  >
  <figcaption>Figure 1: Modern Web Developer Workspace</figcaption>
</figure>`,

  commonMistakes: [
    {
      wrong: "<img src=\"logo.png\">",
      correct: "<img src=\"logo.png\" alt=\"Coding Vibes Logo\">",
      reason: "Never omit the `alt` attribute. Missing alt text violates web accessibility standards."
    }
  ],

  tryItYourself: {
    html: `<div style="text-align: center;">
  <h2>Web Development Workspace</h2>
  <img 
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500" 
    alt="Developer coding on computer" 
    style="border-radius: 12px; width: 100%; max-width: 400px;"
  >
  <p><small>Photo of developer creating apps</small></p>
</div>`,
    instructions: "Change the `alt` text to be more detailed, and experiment with styling the image width."
  },

  takeaways: [
    "`<img>` is an empty (void) tag that does not require a closing tag.",
    "Always provide a meaningful `alt` attribute for accessibility and SEO.",
    "Use `<figure>` and `<figcaption>` when grouping images with captions."
  ]
};

// LESSON: HTML Tables
export const htmlTablesContent: LessonContent = {
  heroTagline: "Organizing structured tabular datasets with headers and cells",
  introduction: "When you need to present financial numbers, comparison charts, schedules, or database records, **HTML tables** provide semantic structure.",
  
  definition: {
    term: "HTML Table (<table>)",
    explanation: "A structured arrangement of data into rows (`<tr>`), header cells (`<th>`), and standard data cells (`<td>`)."
  },

  comparisonTable: {
    title: "Table Building Blocks",
    headers: ["Tag", "Name", "Role in Table"],
    rows: [
      { values: ["<table>", "Table Container", "Wraps all tabular elements"], isCode: [true, false, false] },
      { values: ["<caption>", "Table Title", "Provides a screen-reader accessible caption"], isCode: [true, false, false] },
      { values: ["<thead>", "Table Header Section", "Groups the header rows"], isCode: [true, false, false] },
      { values: ["<tbody>", "Table Body Section", "Groups the primary data rows"], isCode: [true, false, false] },
      { values: ["<tfoot>", "Table Footer Section", "Groups summary / total rows"], isCode: [true, false, false] },
      { values: ["<tr>", "Table Row", "Defines a single horizontal row of cells"], isCode: [true, false, false] },
      { values: ["<th>", "Header Cell", "Bold, centered header cell for columns/rows"], isCode: [true, false, false] },
      { values: ["<td>", "Data Cell", "Standard content cell containing data"], isCode: [true, false, false] }
    ]
  },

  syntaxStructure: `<table border="1">
  <thead>
    <tr>
      <th>Course</th>
      <th>Duration</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>4 Weeks</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>`,

  codeExample: `<table style="width: 100%; border-collapse: collapse; text-align: left;">
  <thead>
    <tr style="border-bottom: 2px solid #22c55e;">
      <th style="padding: 8px;">Language</th>
      <th style="padding: 8px;">Primary Role</th>
      <th style="padding: 8px;">Difficulty</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #334155;">
      <td style="padding: 8px;">HTML</td>
      <td style="padding: 8px;">Page Structure</td>
      <td style="padding: 8px;">Beginner</td>
    </tr>
    <tr style="border-bottom: 1px solid #334155;">
      <td style="padding: 8px;">CSS</td>
      <td style="padding: 8px;">Styling & Layout</td>
      <td style="padding: 8px;">Beginner</td>
    </tr>
    <tr>
      <td style="padding: 8px;">JavaScript</td>
      <td style="padding: 8px;">Interactivity</td>
      <td style="padding: 8px;">Intermediate</td>
    </tr>
  </tbody>
</table>`,

  commonMistakes: [
    {
      wrong: "<!-- Using tables for page layout -->\n<table><tr><td>Sidebar</td><td>Content</td></tr></table>",
      correct: "<!-- Use CSS Grid / Flexbox for page layouts, not tables -->\n<div class=\"layout\"><aside>Sidebar</aside><main>Content</main></div>",
      reason: "Tables should ONLY be used for tabular datasets, never for entire website layouts."
    }
  ],

  tryItYourself: {
    html: `<table style="width: 100%; border-collapse: collapse; color: white;">
  <thead>
    <tr style="background: #1e293b; color: #22c55e;">
      <th style="padding: 10px; border: 1px solid #334155;">Feature</th>
      <th style="padding: 10px; border: 1px solid #334155;">Free</th>
      <th style="padding: 10px; border: 1px solid #334155;">Pro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px; border: 1px solid #334155;">Lessons</td>
      <td style="padding: 10px; border: 1px solid #334155; text-align: center;">✓ 100+</td>
      <td style="padding: 10px; border: 1px solid #334155; text-align: center;">✓ All</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #334155;">Live Sandbox</td>
      <td style="padding: 10px; border: 1px solid #334155; text-align: center;">✓</td>
      <td style="padding: 10px; border: 1px solid #334155; text-align: center;">✓</td>
    </tr>
  </tbody>
</table>`,
    instructions: "Add a third row to the table for 'Certificates' showing 'No' for Free and 'Yes' for Pro."
  },

  takeaways: [
    "Tables display tabular data in rows (`<tr>`) and cells (`<td>`, `<th>`).",
    "Use `<thead>`, `<tbody>`, and `<tfoot>` for clean structure.",
    "Do not use HTML tables for general layout (use CSS Flexbox/Grid instead)."
  ]
};

// LESSON: HTML Forms & Inputs
export const htmlFormsContent: LessonContent = {
  heroTagline: "Collecting user input, text, selections, and submissions",
  introduction: "Forms are the bridge between users and web applications. Whenever you sign in, search Google, purchase an item, or fill out a survey, you are interacting with an **HTML Form**.",
  
  definition: {
    term: "HTML Form (<form>)",
    explanation: "A container used to collect user inputs. It wraps controls such as text fields, checkboxes, radio buttons, password boxes, dropdowns, and submit buttons."
  },

  diagram: {
    type: "form-anatomy",
    title: "Anatomy of an Accessible Form",
    caption: "Labels are linked to inputs via the 'for' and 'id' attributes, ensuring accessibility and clickability."
  },

  comparisonTable: {
    title: "Essential Form Input Types",
    headers: ["Input Type", "HTML Syntax", "User Interface"],
    rows: [
      { values: ["Text", "<input type=\"text\" placeholder=\"Your name\">", "Single-line plain text box"], isCode: [false, true, false] },
      { values: ["Email", "<input type=\"email\" required>", "Validates email format (@)"], isCode: [false, true, false] },
      { values: ["Password", "<input type=\"password\">", "Masks input with dots/asterisks"], isCode: [false, true, false] },
      { values: ["Checkbox", "<input type=\"checkbox\">", "Toggle for multiple options"], isCode: [false, true, false] },
      { values: ["Radio", "<input type=\"radio\" name=\"role\">", "Select ONE option from a group"], isCode: [false, true, false] },
      { values: ["Number", "<input type=\"number\" min=\"1\" max=\"100\">", "Numeric spinner controls"], isCode: [false, true, false] },
      { values: ["Date", "<input type=\"date\">", "Browser date picker calendar"], isCode: [false, true, false] },
      { values: ["Submit Button", "<button type=\"submit\">Submit</button>", "Submits the form dataset"], isCode: [false, true, false] }
    ]
  },

  syntaxStructure: `<form action="/submit" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  
  <label for="useremail">Email Address:</label>
  <input type="email" id="useremail" name="useremail" required>
  
  <button type="submit">Create Account</button>
</form>`,

  codeAnnotations: [
    {
      lineOrToken: "<label for=\"username\">",
      description: "The `for` attribute matches the input's `id`, making the text label clickable and screen-reader accessible."
    },
    {
      lineOrToken: "name=\"username\"",
      description: "The field identifier sent to the server in the form submission payload."
    },
    {
      lineOrToken: "required",
      description: "HTML5 validation attribute that prevents form submission if the field is empty."
    }
  ],

  codeExample: `<form style="max-width: 400px; display: flex; flex-direction: column; gap: 12px;">
  <div>
    <label for="fullname" style="display: block; margin-bottom: 4px; font-weight: bold;">Full Name</label>
    <input type="text" id="fullname" name="fullname" placeholder="John Doe" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid #334155; background: #0f172a; color: white;">
  </div>
  
  <div>
    <label for="email" style="display: block; margin-bottom: 4px; font-weight: bold;">Email</label>
    <input type="email" id="email" name="email" placeholder="john@example.com" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid #334155; background: #0f172a; color: white;">
  </div>

  <button type="submit" style="background: #22c55e; color: black; font-weight: bold; padding: 10px; border: none; border-radius: 6px; cursor: pointer;">
    Register Now
  </button>
</form>`,

  commonMistakes: [
    {
      wrong: "<input type=\"text\" placeholder=\"Email\"><br><!-- Missing label -->",
      correct: "<label for=\"user-email\">Email</label>\n<input type=\"email\" id=\"user-email\">",
      reason: "Placeholder text is not a replacement for `<label>`. Labels ensure accessibility for screen readers and improve UX."
    }
  ],

  tryItYourself: {
    html: `<form style="max-width: 350px; background: #0f172a; padding: 20px; border-radius: 12px; border: 1px solid #1e293b;">
  <h3 style="color: #22c55e; margin-top: 0;">Contact Coding Vibes</h3>
  
  <label style="display: block; font-size: 12px; margin-bottom: 4px; color: #94a3b8;">Your Name</label>
  <input type="text" placeholder="Enter name" style="width: 100%; padding: 8px; margin-bottom: 12px; border-radius: 6px; border: 1px solid #334155; background: #080d14; color: white;">
  
  <label style="display: block; font-size: 12px; margin-bottom: 4px; color: #94a3b8;">Feedback</label>
  <textarea rows="3" placeholder="What are you learning?" style="width: 100%; padding: 8px; margin-bottom: 12px; border-radius: 6px; border: 1px solid #334155; background: #080d14; color: white;"></textarea>
  
  <button type="button" style="width: 100%; background: #22c55e; color: black; font-weight: bold; padding: 10px; border: none; border-radius: 6px; cursor: pointer;">
    Send Message
  </button>
</form>`,
    instructions: "Try adding a checkbox asking 'Subscribe to Coding Vibes weekly newsletter'."
  },

  takeaways: [
    "`<form>` groups user input controls together.",
    "Always connect `<label>` elements to `<input>` elements using `for` and `id`.",
    "HTML5 input types (e.g. `email`, `number`) provide built-in validation."
  ]
};

// LESSON: Semantic HTML
export const htmlSemanticContent: LessonContent = {
  heroTagline: "Writing meaningful markup for search engines and accessibility",
  introduction: "In HTML5, **semantic elements** clearly describe their meaning to both the browser and the developer. Instead of generic `<div>` tags everywhere, semantic elements give structural meaning to pages.",
  
  definition: {
    term: "Semantic HTML",
    explanation: "The practice of using HTML tags that reflect the purpose of the content they contain (e.g., `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) rather than purely presentational tags."
  },

  diagram: {
    type: "semantic-layout",
    title: "Modern Semantic Webpage Layout",
    caption: "A standards-compliant page layout with header, navigation, main content, article/sections, sidebar, and footer."
  },

  comparisonTable: {
    title: "Non-Semantic vs Semantic Tags",
    headers: ["Non-Semantic (Generic)", "Semantic (Meaningful)", "Purpose"],
    rows: [
      { values: ["<div id=\"header\">", "<header>", "Site header containing logo & title"], isCode: [true, true, false] },
      { values: ["<div id=\"menu\">", "<nav>", "Primary navigation menu and links"], isCode: [true, true, false] },
      { values: ["<div id=\"content\">", "<main>", "The central, unique content of the page"], isCode: [true, true, false] },
      { values: ["<div class=\"post\">", "<article>", "Self-contained reusable content (blog post, card)"], isCode: [true, true, false] },
      { values: ["<div class=\"sidebar\">", "<aside>", "Secondary content, sidebars, or related links"], isCode: [true, true, false] },
      { values: ["<div id=\"footer\">", "<footer>", "Page footer with copyright & policies"], isCode: [true, true, false] }
    ]
  },

  syntaxStructure: `<header>
  <h1>Website Title</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/courses">Courses</a>
  </nav>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Main content goes here...</p>
  </article>
</main>
<footer>
  <p>&copy; 2026 Coding Vibes</p>
</footer>`,

  codeExample: `<header style="border-bottom: 1px solid #334155; padding-bottom: 12px;">
  <h2>Coding Vibes</h2>
  <nav>
    <a href="#html" style="color: #22c55e;">HTML</a> |
    <a href="#css" style="color: #38bdf8;">CSS</a> |
    <a href="#js" style="color: #facc15;">JavaScript</a>
  </nav>
</header>
<main style="padding: 16px 0;">
  <article>
    <h3>Why Semantic HTML Matters</h3>
    <p>Semantic tags boost SEO rankings, allow screen readers to navigate, and make code cleaner.</p>
  </article>
</main>
<footer style="border-top: 1px solid #334155; padding-top: 12px; font-size: 12px; color: #94a3b8;">
  <p>&copy; 2026 Coding Vibes. Built for developers.</p>
</footer>`,

  commonMistakes: [
    {
      wrong: "<div class=\"nav\"><div class=\"link\">Home</div></div>",
      correct: "<nav><a href=\"/\">Home</a></nav>",
      reason: "Using `<div>` soup makes the page unreadable to search engines and screen readers. Always use real semantic tags."
    }
  ],

  tryItYourself: {
    html: `<header style="background: #0f172a; padding: 15px; border-radius: 8px;">
  <h2 style="margin: 0; color: #22c55e;">My Tech Blog</h2>
  <nav style="margin-top: 8px;">
    <a href="#" style="color: white; margin-right: 10px;">Articles</a>
    <a href="#" style="color: white;">About</a>
  </nav>
</header>
<main style="padding: 15px 0;">
  <article style="background: #080d14; padding: 15px; border-radius: 8px; border: 1px solid #1e293b;">
    <h3>First Post</h3>
    <p>Learning semantic HTML today!</p>
  </article>
</main>`,
    instructions: "Add a `<footer>` element with copyright information."
  },

  takeaways: [
    "Semantic tags provide meaning to browsers, search engines, and assistive tech.",
    "Use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`.",
    "A page should only have one primary `<main>` element."
  ]
};

// LESSON: Web Accessibility (a11y)
export const htmlAccessibilityContent: LessonContent = {
  heroTagline: "Building an inclusive web for all users and assistive devices",
  introduction: "**Web Accessibility (a11y)** ensures that websites, tools, and technologies are designed so people with disabilities (visual, auditory, motor, cognitive) can understand and navigate them.",
  
  definition: {
    term: "Web Accessibility (a11y)",
    explanation: "The practice of making webpages usable for everyone, including people using screen readers, keyboard navigation, high-contrast modes, and speech inputs."
  },

  comparisonTable: {
    title: "Essential Accessibility Rules",
    headers: ["Rule", "Bad Practice", "Good Accessible Practice"],
    rows: [
      { values: ["Alt Text for Images", "<img src=\"icon.png\">", "<img src=\"icon.png\" alt=\"Search Magnifier Icon\">"], isCode: [false, true, true] },
      { values: ["Form Labels", "<input placeholder=\"Name\">", "<label for=\"n\">Name</label><input id=\"n\">"], isCode: [false, true, true] },
      { values: ["Button vs Div", "<div onclick=\"submit()\">Send</div>", "<button type=\"button\" onclick=\"submit()\">Send</button>"], isCode: [false, true, true] },
      { values: ["Heading Structure", "<h3>Jump</h3> <h1>Main</h1>", "<h1>Main</h1> <h2>Sub</h2> <h3>Deep</h3>"], isCode: [false, true, true] },
      { values: ["Color Contrast", "Light gray text on white", "High contrast WCAG AA (4.5:1 ratio)"], isCode: [false, false, false] }
    ]
  },

  syntaxStructure: `<!-- Accessible button that can be focused and triggered by keyboard Enter/Space -->
<button type="button" aria-label="Close dialog window">
  &times;
</button>`,

  codeExample: `<main>
  <h1>Accessible Article</h1>
  <p>Always ensure buttons can be focused using the <kbd>Tab</kbd> key on your keyboard.</p>
  
  <button type="button" style="background: #22c55e; color: black; font-weight: bold; padding: 10px 16px; border: none; border-radius: 6px; cursor: pointer;">
    Accessible Button (Try Tabbing to Me!)
  </button>
</main>`,

  commonMistakes: [
    {
      wrong: "<div onclick=\"alert('clicked')\">Click Me</div>",
      correct: "<button type=\"button\" onclick=\"alert('clicked')\">Click Me</button>",
      reason: "`<div>` elements cannot be focused by keyboard users and are not announced as buttons by screen readers."
    }
  ],

  tryItYourself: {
    html: `<form style="max-width: 350px;">
  <label for="student-name" style="display: block; font-weight: bold; margin-bottom: 4px;">Student Name</label>
  <input type="text" id="student-name" placeholder="Alex Rivers" style="width: 100%; padding: 8px; margin-bottom: 12px; border-radius: 6px; border: 1px solid #334155; background: #0f172a; color: white;">
  
  <button type="submit" style="background: #22c55e; color: black; font-weight: bold; padding: 10px 16px; border: none; border-radius: 6px;">
    Submit Form
  </button>
</form>`,
    instructions: "Test keyboard navigation by pressing Tab to see how focus moves between the input and button."
  },

  takeaways: [
    "Accessibility allows people with disabilities to use your websites.",
    "Use native interactive elements (`<button>`, `<a>`, `<input>`) instead of clickable `<div>`s.",
    "Always provide `alt` text for images and linked `<label>` tags for form inputs."
  ]
};

