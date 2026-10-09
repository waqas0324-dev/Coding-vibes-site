import { TopicDefinition } from '../topicData';

export const BOOTSTRAP_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: Bootstrap 5 Fundamentals
  'introduction-to-bootstrap-5': {
    heroTagline: "The world's most popular responsive CSS framework with zero jQuery dependency",
    introduction: "Bootstrap 5 is the newest major release of the world's most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. Version 5 eliminated jQuery completely in favor of modern vanilla JavaScript and introduced CSS custom properties (variables).",
    definition: {
      term: "Bootstrap 5",
      explanation: "A mobile-first front-end CSS framework with pre-built responsive grid components, utility classes, and interactive plugins."
    },
    syntaxStructure: `<!-- Bootstrap 5 CDN Link in <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>Bootstrap 5 Example</title>
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
      <p>Responsive mobile-first layout.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Built with standard 12-column grid.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>        
      <p>Zero jQuery dependency in v5!</p>
    </div>
  </div>
</div>

</body>
</html>`,
    codeAnnotations: [
      { lineOrToken: "container-fluid", description: "Provides a full-width container spanning the entire width of the viewport." },
      { lineOrToken: "p-5 bg-primary text-white text-center", description: "Utility classes for padding 3rem, primary blue background, white text, and center alignment." },
      { lineOrToken: "row and col-sm-4", description: "Bootstrap 12-column grid system: 3 columns of size 4 take up 12 total units." }
    ],
    tips: [
      "Bootstrap 5 uses rem units for scalable responsive typography and spacing.",
      "The viewport meta tag <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> is mandatory for mobile-first rendering."
    ],
    practice: [
      {
        id: "bs-intro-p1",
        type: "multiple_choice",
        question: "Does Bootstrap 5 require jQuery as a dependency?",
        options: [
          "No, Bootstrap 5 completely dropped jQuery in favor of vanilla JavaScript",
          "Yes, jQuery 3.6 is required",
          "Only for buttons",
          "Only for Internet Explorer"
        ],
        correctAnswer: 0,
        explanation: "Bootstrap 5 completely removed jQuery, rewriting all interactive plugins in native vanilla JavaScript."
      }
    ],
    quiz: [
      {
        id: "bs-intro-q1",
        question: "How many columns are in the standard Bootstrap responsive grid system?",
        options: ["12 columns", "16 columns", "10 columns", "8 columns"],
        correctAnswerIndex: 0,
        explanation: "Bootstrap's grid system is mathematically built on a 12-column foundation."
      }
    ]
  },

  'bootstrap-containers': {
    heroTagline: ".container (responsive fixed width) vs .container-fluid (100% width)",
    introduction: "Containers are the most basic layout element in Bootstrap and are **required** when using our default grid system. Choose from a responsive, fixed-width `.container` or a full-width `.container-fluid`.",
    definition: {
      term: "Bootstrap Container",
      explanation: "A layout wrapper that pads content and centers it horizontally across screen breakpoints."
    },
    syntaxStructure: `<div class="container">...</div>
<div class="container-fluid">...</div>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3">

<div class="container bg-light p-4 mb-4 border rounded">
  <h2>Fixed-Width Container (.container)</h2>
  <p>Max-width changes at responsive breakpoints (sm, md, lg, xl, xxl).</p>
</div>

<div class="container-fluid bg-dark text-white p-4 border rounded">
  <h2>Fluid Container (.container-fluid)</h2>
  <p>Always spans 100% of the viewport width at all screen sizes.</p>
</div>

</body>
</html>`,
    practice: [
      {
        id: "bs-cont-p1",
        type: "multiple_choice",
        question: "Which class creates a container that spans 100% of the viewport width at all breakpoints?",
        options: [".container-fluid", ".container-full", ".container-100", ".container"],
        correctAnswer: 0,
        explanation: ".container-fluid spans 100% of the viewport width across all device sizes."
      }
    ]
  },

  'bootstrap-grid-system': {
    heroTagline: "12-column responsive layout engine with col, col-sm, col-md, col-lg",
    introduction: "Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive.",
    definition: {
      term: "12-Column Grid",
      explanation: "A flexbox-based layout system that splits horizontal rows into 12 proportional units."
    },
    syntaxStructure: `<div class="row">
  <div class="col-md-8">8 Units</div>
  <div class="col-md-4">4 Units</div>
</div>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">

<div class="container">
  <h3>Responsive 12-Column Grid</h3>
  <div class="row g-3">
    <div class="col-md-8">
      <div class="p-4 bg-primary text-white rounded">
        <h4>Main Content Area (col-md-8)</h4>
        <p>Takes 8 of 12 columns on medium and larger displays.</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="p-4 bg-success text-white rounded">
        <h4>Sidebar (col-md-4)</h4>
        <p>Takes 4 of 12 columns. Stacks on mobile!</p>
      </div>
    </div>
  </div>
</div>

</body>
</html>`,
    practice: [
      {
        id: "bs-grid-p1",
        type: "multiple_choice",
        question: "If you have two columns with classes col-md-6, how do they render on desktop screens?",
        options: [
          "Side-by-side, each taking 50% width",
          "Stacked on top of each other",
          "Taking 6 pixels each",
          "Hidden from view"
        ],
        correctAnswer: 0,
        explanation: "6 + 6 = 12 columns, so two col-md-6 elements split the row evenly (50% each) on medium and larger screens."
      }
    ]
  },

  'bootstrap-cards': {
    heroTagline: "Flexible content containers with card-header, card-body, card-img, and card-footer",
    introduction: "A **card** in Bootstrap 5 is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.",
    definition: {
      term: "Bootstrap Card",
      explanation: "A bordered box with padding and flexible sections designed to group related content and actions."
    },
    syntaxStructure: `<div class="card">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Text content</p>
  </div>
</div>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">

<div class="container">
  <div class="card shadow-sm" style="max-width: 400px;">
    <div class="card-header bg-dark text-white fw-bold">
      Featured Course
    </div>
    <div class="card-body">
      <h5 class="card-title text-primary">Bootstrap 5 Mastery</h5>
      <p class="card-text">Learn to build responsive, mobile-first websites with clean utility classes and pre-styled components.</p>
      <a href="#" class="btn btn-primary">Start Learning</a>
    </div>
    <div class="card-footer text-muted">
      Updated 2 days ago
    </div>
  </div>
</div>

</body>
</html>`,
    practice: [
      {
        id: "bs-card-p1",
        type: "multiple_choice",
        question: "Which class represents the primary content container inside a Bootstrap card?",
        options: [".card-body", ".card-content", ".card-inner", ".card-main"],
        correctAnswer: 0,
        explanation: ".card-body applies standard padding and structure for the core content of a card."
      }
    ]
  }
};
