// CSS Course content — part 5 of 5
// Module 9-10: Responsive Design, Advanced CSS and Projects
import { LessonContent } from '../../types';

// ==============================
// MODULE 9: Responsive Design
// ==============================

// LESSON: What is Responsive Design?
export const cssWhatIsResponsiveContent: LessonContent = {
  heroTagline: "One website that fits every screen",
  introduction: "Responsive design makes a website adapt to any screen size — phone, tablet, or desktop — using flexible layouts, fluid media, and media queries. One codebase serves all devices.",
  definition: {
    term: "Responsive design",
    explanation: "An approach where layouts fluidly adapt to the viewport size instead of requiring separate mobile sites."
  },
  whyItMatters: "Most web traffic is mobile. A site that breaks on phones loses most of its audience.",
  realWorldAnalogy: {
    title: "Understanding responsive design",
    story: "Responsive design is like water in containers: the same water takes the shape of a glass, a bottle, or a bathtub.",
    comparison: [
      { item: "Website content", meaning: "The water." },
      { item: "Screen sizes", meaning: "The different containers." }
    ]
  },
  syntaxStructure: `@media (max-width: 768px) {
  .layout { flex-direction: column; }
}`,
  codeExample: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}`,
  codeAnnotations: [
    { lineOrToken: "auto-fit, minmax(240px, 1fr)", description: "Columns reflow automatically — inherently responsive." },
    { lineOrToken: "@media (max-width: 768px)", description: "Extra rules that kick in on small screens." }
  ],
  commonMistakes: [
    { wrong: "Building a separate m.example.com mobile site", correct: "Build one responsive site", reason: "Separate sites double maintenance; responsive serves all devices from one codebase." }
  ],
  tryItYourself: {
    html: `<div class="cards">\n  <div>A</div><div>B</div><div>C</div>\n</div>`,
    css: `.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n}\n.cards > div {\n  background: #e0f2fe;\n  padding: 20px;\n}`,
    instructions: "Resize your thinking: with fewer pixels, fewer columns fit — that is responsiveness."
  },
  takeaways: [
    "Responsive = one site adapting to all screens.",
    "Built on flexible grids, fluid media, media queries.",
    "Mobile traffic makes it non-negotiable."
  ],
  quizQuestions: [
    { id: "css-m9l1-q1", question: "What is responsive design?", options: ["One website adapting to all screen sizes", "A separate site for each device", "Faster servers", "Bigger fonts only"], correctAnswerIndex: 0, explanation: "One codebase fluidly serves phones, tablets, and desktops." },
    { id: "css-m9l1-q2", question: "What are the three pillars of responsive design?", options: ["Flexible layouts, fluid media, media queries", "HTML, CSS, JavaScript", "Red, green, blue", "Header, footer, sidebar"], correctAnswerIndex: 0, explanation: "Flexible grids, fluid images, and media queries form the foundation." }
  ]
};

// LESSON: Why Responsive Design Matters
export const cssWhyResponsiveMattersContent: LessonContent = {
  heroTagline: "Your users are on phones — meet them there",
  introduction: "Over half of web visits come from mobile devices, and search engines rank mobile-friendly sites higher. A non-responsive site frustrates users and loses business.",
  definition: {
    term: "Why responsive design matters",
    explanation: "The business and usability case: mobile traffic, SEO rankings, and user trust all depend on responsive sites."
  },
  whyItMatters: "Clients and employers expect it. 'Does it work on mobile?' is the first question every site review asks.",
  realWorldAnalogy: {
    title: "Understanding the stakes",
    story: "A non-responsive site is like a shop with a door too narrow for wheelchairs: most customers literally cannot get in.",
    comparison: [
      { item: "Mobile users", meaning: "The majority of shoppers." },
      { item: "Broken mobile layout", meaning: "The too-narrow door." }
    ]
  },
  syntaxStructure: `/* Mobile users see this first */
@media (max-width: 600px) {
  body { font-size: 16px; }
}`,
  codeExample: `/* Base: comfortable on mobile */
.container {
  padding: 16px;
}

/* Enhance on larger screens */
@media (min-width: 1024px) {
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
}`,
  codeAnnotations: [
    { lineOrToken: "padding: 16px;", description: "Mobile-first base: comfortable on small screens." },
    { lineOrToken: "@media (min-width: 1024px)", description: "Enhancements only where space allows." }
  ],
  commonMistakes: [
    { wrong: "Testing only on a desktop monitor", correct: "Test on real phone sizes during development", reason: "Desktop-only testing hides the experience most users actually get." }
  ],
  tryItYourself: {
    html: `<div class="container">Content</div>`,
    css: `.container {\n  padding: 16px;\n  background: #f1f5f9;\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1100px;\n    margin: 0 auto;\n  }\n}`,
    instructions: "Notice the base works everywhere; the query only enhances large screens."
  },
  takeaways: [
    "Mobile is the majority of web traffic.",
    "Search engines favor mobile-friendly sites.",
    "Always test on phone-sized viewports."
  ],
  quizQuestions: [
    { id: "css-m9l2-q1", question: "Why does responsive design affect SEO?", options: ["Search engines rank mobile-friendly sites higher", "It changes keywords", "It buys ads", "It has no effect"], correctAnswerIndex: 0, explanation: "Mobile-friendliness is a ranking factor." },
    { id: "css-m9l2-q2", question: "What share of traffic is roughly mobile?", options: ["Over half", "Almost none", "Exactly 10%", "Zero"], correctAnswerIndex: 0, explanation: "Mobile accounts for the majority of web visits." }
  ]
};

// LESSON: Mobile-first Design
export const cssMobileFirstContent: LessonContent = {
  heroTagline: "Design for the small screen first",
  introduction: "Mobile-first means writing base styles for phones, then adding min-width media queries to enhance for larger screens. It forces focus on essentials and keeps CSS lean.",
  definition: {
    term: "Mobile-first design",
    explanation: "A workflow where base styles target mobile, with progressive enhancements for bigger viewports."
  },
  whyItMatters: "It is easier to add complexity for large screens than to squeeze a desktop design into a phone. Constraints breed clarity.",
  realWorldAnalogy: {
    title: "Understanding mobile-first",
    story: "Mobile-first is like packing a small suitcase first, then moving to a bigger one if needed — you pack only essentials, then add extras.",
    comparison: [
      { item: "Base styles", meaning: "The small suitcase — essentials only." },
      { item: "min-width queries", meaning: "Upgrading to a bigger suitcase with extras." }
    ]
  },
  syntaxStructure: `/* Base: mobile */
.card { padding: 16px; }

/* Larger screens: enhance */
@media (min-width: 768px) {
  .card { padding: 32px; }
}`,
  codeExample: `/* Mobile base */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`,
  codeAnnotations: [
    { lineOrToken: "grid-template-columns: 1fr;", description: "Mobile base: single column stack." },
    { lineOrToken: "@media (min-width: 768px)", description: "Progressive enhancement as space grows." }
  ],
  commonMistakes: [
    { wrong: "Desktop-first with max-width overrides fighting the cascade", correct: "Mobile-first with min-width enhancements", reason: "min-width queries layer cleanly on top of the base without undoing desktop styles." }
  ],
  tryItYourself: {
    html: `<div class="grid">\n  <div>A</div><div>B</div>\n</div>`,
    css: `.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.grid > div {\n  background: #ede9fe;\n  padding: 20px;\n}`,
    instructions: "The base is single-column; the query adds columns only on wider screens."
  },
  takeaways: [
    "Base styles target the smallest screens.",
    "min-width queries add enhancements upward.",
    "Constraints first lead to cleaner designs."
  ],
  quizQuestions: [
    { id: "css-m9l3-q1", question: "What does mobile-first mean?", options: ["Base styles for phones, enhanced upward with min-width queries", "Only designing for phones", "Hiding content on desktop", "Using bigger fonts"], correctAnswerIndex: 0, explanation: "Start small, then progressively enhance." },
    { id: "css-m9l3-q2", question: "Which media query direction suits mobile-first?", options: ["min-width", "max-width", "min-height only", "orientation only"], correctAnswerIndex: 0, explanation: "min-width layers enhancements on top of the mobile base." }
  ]
};

// LESSON: Media Queries
export const cssMediaQueriesContent: LessonContent = {
  heroTagline: "CSS that responds to conditions",
  introduction: "Media queries apply CSS only when a condition is true — usually viewport width. @media (max-width: 768px) { ... } targets screens 768px wide or narrower.",
  definition: {
    term: "Media query",
    explanation: "A CSS block that applies its rules only when a media condition matches."
  },
  whyItMatters: "Media queries are the mechanism behind every responsive switch: stacked layouts, smaller fonts, hidden sidebars.",
  realWorldAnalogy: {
    title: "Understanding media queries",
    story: "A media query is like a thermostat: when the temperature (screen width) crosses the set point, the heating (new styles) kicks in.",
    comparison: [
      { item: "(max-width: 768px)", meaning: "The thermostat's set point." },
      { item: "Rules inside", meaning: "The heating that switches on." }
    ]
  },
  syntaxStructure: `@media (max-width: 768px) {
  selector { property: value; }
}`,
  codeExample: `.sidebar {
  width: 250px;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .main {
    width: 100%;
  }
}`,
  codeAnnotations: [
    { lineOrToken: "@media (max-width: 768px)", description: "Applies only on viewports ≤768px wide." },
    { lineOrToken: "display: none;", description: "Hides the sidebar on small screens." }
  ],
  commonMistakes: [
    { wrong: "@media (max-width: 768) without px", correct: "@media (max-width: 768px)", reason: "Media feature values need units — bare numbers are invalid." }
  ],
  tryItYourself: {
    html: `<div class="box">Resize me</div>`,
    css: `.box {\n  background: #3b82f6;\n  color: white;\n  padding: 24px;\n}\n@media (max-width: 600px) {\n  .box {\n    background: #ef4444;\n  }\n}`,
    instructions: "Imagine narrowing the viewport below 600px — the box turns red."
  },
  takeaways: [
    "Syntax: @media (condition) { rules }.",
    "max-width targets small screens; min-width targets large.",
    "Values need units like px."
  ],
  quizQuestions: [
    { id: "css-m9l4-q1", question: "What does @media (max-width: 768px) target?", options: ["Viewports 768px wide or narrower", "Viewports wider than 768px", "Printers only", "Tall screens only"], correctAnswerIndex: 0, explanation: "max-width matches viewports up to that width." },
    { id: "css-m9l4-q2", question: "Where do media query rules live?", options: ["Inside the @media block's braces", "In the HTML head", "In JavaScript", "In image files"], correctAnswerIndex: 0, explanation: "Rules inside the block apply when the condition matches." }
  ]
};

// LESSON: Breakpoints
export const cssBreakpointsContent: LessonContent = {
  heroTagline: "The widths where your layout changes",
  introduction: "Breakpoints are the viewport widths where your design switches layout — common ones: 640px, 768px, 1024px, 1280px. Choose them from your content's needs, not device names.",
  definition: {
    term: "Breakpoint",
    explanation: "A viewport width in a media query where the layout adapts."
  },
  whyItMatters: "Well-chosen breakpoints make layouts feel intentional at every size instead of accidentally broken between sizes.",
  realWorldAnalogy: {
    title: "Understanding breakpoints",
    story: "Breakpoints are like clothing sizes: S, M, L, XL — the garment (layout) changes cut at set measurements.",
    comparison: [
      { item: "768px", meaning: "The 'medium' size threshold." },
      { item: "1024px", meaning: "The 'large' size threshold." }
    ]
  },
  syntaxStructure: `@media (min-width: 768px) { /* tablet+ */ }
@media (min-width: 1024px) { /* desktop+ */ }`,
  codeExample: `/* Mobile base: 1 column */
.grid { grid-template-columns: 1fr; }

/* ≥640px: 2 columns */
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* ≥1024px: 4 columns */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}`,
  codeAnnotations: [
    { lineOrToken: "640px", description: "Small breakpoint — two columns fit now." },
    { lineOrToken: "1024px", description: "Large breakpoint — full four-column grid." }
  ],
  commonMistakes: [
    { wrong: "Using dozens of device-specific breakpoints", correct: "Use a few content-based breakpoints", reason: "Designs should break where the content needs it, not per device model." }
  ],
  tryItYourself: {
    html: `<div class="grid">\n  <div>1</div><div>2</div><div>3</div><div>4</div>\n</div>`,
    css: `.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n@media (min-width: 640px) {\n  .grid { grid-template-columns: repeat(2, 1fr); }\n}\n.grid > div {\n  background: #d1fae5;\n  padding: 20px;\n}`,
    instructions: "The layout gains columns as the viewport crosses each breakpoint."
  },
  takeaways: [
    "Breakpoints = widths where layout switches.",
    "Common: 640, 768, 1024, 1280px.",
    "Pick breakpoints from content needs."
  ],
  quizQuestions: [
    { id: "css-m9l5-q1", question: "What is a breakpoint?", options: ["A viewport width where the layout changes", "A broken image", "A JavaScript error", "A font size"], correctAnswerIndex: 0, explanation: "Breakpoints are the widths in media queries where design adapts." },
    { id: "css-m9l5-q2", question: "How should you choose breakpoints?", options: ["Based on when your content needs to adapt", "One per phone model", "Random numbers", "Only even numbers"], correctAnswerIndex: 0, explanation: "Content-driven breakpoints keep designs robust across devices." }
  ]
};

// LESSON: Responsive Typography
export const cssResponsiveTypographyContent: LessonContent = {
  heroTagline: "Text that scales with the screen",
  introduction: "Responsive typography scales font sizes with the viewport. The clamp() function is the modern way: clamp(1.5rem, 4vw, 3rem) sets a minimum, a fluid middle, and a maximum.",
  definition: {
    term: "Responsive typography",
    explanation: "Font sizes that fluidly adapt between minimum and maximum values across viewport sizes."
  },
  whyItMatters: "Fixed huge headings overflow phones; fixed small headings look lost on desktops. Fluid type fits everywhere.",
  realWorldAnalogy: {
    title: "Understanding clamp",
    story: "clamp() is like an adjustable office chair: it has a lowest setting, a highest setting, and glides smoothly between them.",
    comparison: [
      { item: "1.5rem", meaning: "The chair's lowest setting." },
      { item: "3rem", meaning: "The chair's highest setting." }
    ]
  },
  syntaxStructure: `h1 {
  font-size: clamp(1.75rem, 4vw, 3rem);
}`,
  codeExample: `h1 {
  font-size: clamp(1.75rem, 1rem + 4vw, 3rem);
  line-height: 1.2;
}

p {
  font-size: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
}`,
  codeAnnotations: [
    { lineOrToken: "clamp(1.75rem, 1rem + 4vw, 3rem)", description: "Never below 1.75rem, never above 3rem, fluid between." },
    { lineOrToken: "4vw", description: "4% of viewport width — the fluid middle value." }
  ],
  commonMistakes: [
    { wrong: "font-size: 5vw; with no limits, becoming unreadable at extremes", correct: "Wrap viewport units in clamp() with min and max", reason: "Pure vw keeps growing or shrinking without bounds." }
  ],
  tryItYourself: {
    html: `<h1>Fluid heading</h1>`,
    css: `h1 {\n  font-size: clamp(1.75rem, 4vw, 3rem);\n}`,
    instructions: "Imagine the viewport widening — the heading grows, but never past 3rem."
  },
  takeaways: [
    "clamp(min, fluid, max) bounds fluid type.",
    "vw units tie size to viewport width.",
    "Fluid type removes most font-size media queries."
  ],
  quizQuestions: [
    { id: "css-m9l6-q1", question: "What does clamp(1rem, 4vw, 2rem) do?", options: ["Fluid size between 1rem and 2rem", "Fixed 4vw always", "Random sizes", "Hides the text"], correctAnswerIndex: 0, explanation: "clamp keeps the fluid 4vw value within the min/max bounds." },
    { id: "css-m9l6-q2", question: "What is 1vw?", options: ["1% of the viewport width", "1 pixel", "1 rem", "100 pixels"], correctAnswerIndex: 0, explanation: "vw units are percentages of the viewport width." }
  ]
};

// LESSON: Responsive Images
export const cssResponsiveImagesContent: LessonContent = {
  heroTagline: "Images that never break the layout",
  introduction: "Responsive images scale with their container: max-width: 100%; height: auto; stops overflow while preserving aspect ratio. The <picture> element and srcset serve different files per screen.",
  definition: {
    term: "Responsive images",
    explanation: "Images that scale fluidly and load appropriately sized files per device."
  },
  whyItMatters: "Oversized images break mobile layouts and waste data. Responsive images fix both.",
  realWorldAnalogy: {
    title: "Understanding fluid images",
    story: "A responsive image is like a rubber band photo frame: it shrinks to fit small spaces but never stretches beyond the photo's real size.",
    comparison: [
      { item: "max-width: 100%", meaning: "The frame never exceeds the photo's size." },
      { item: "height: auto", meaning: "Proportions stay correct while shrinking." }
    ]
  },
  syntaxStructure: `img {
  max-width: 100%;
  height: auto;
}`,
  codeExample: `img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}`,
  codeAnnotations: [
    { lineOrToken: "max-width: 100%;", description: "Image never exceeds its container's width." },
    { lineOrToken: "height: auto;", description: "Height scales proportionally — no squishing." }
  ],
  commonMistakes: [
    { wrong: "width: 100%; height: 100%; distorting the photo", correct: "max-width: 100%; height: auto;", reason: "Forcing both dimensions stretches the image; auto preserves ratio." }
  ],
  tryItYourself: {
    html: `<img src="photo.jpg" alt="A photo">`,
    css: `img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 12px;\n}`,
    instructions: "The image shrinks with narrow containers but never distorts."
  },
  takeaways: [
    "max-width: 100% prevents overflow.",
    "height: auto preserves aspect ratio.",
    "srcset serves right-sized files per device."
  ],
  quizQuestions: [
    { id: "css-m9l7-q1", question: "Which CSS makes images scale without distortion?", options: ["max-width: 100%; height: auto;", "width: 500px; height: 500px;", "zoom: 2;", "float: left;"], correctAnswerIndex: 0, explanation: "max-width caps the width; auto height keeps proportions." },
    { id: "css-m9l7-q2", question: "What is srcset for?", options: ["Serving different image files per screen size", "Styling captions", "Lazy loading fonts", "Hiding images"], correctAnswerIndex: 0, explanation: "srcset lets the browser pick the best-sized file." }
  ]
};

// LESSON: Responsive Navigation
export const cssResponsiveNavigationContent: LessonContent = {
  heroTagline: "Navbars that collapse gracefully",
  introduction: "Responsive navigation shows full links on desktop and collapses into a hamburger menu on mobile. The layout switch happens in a media query; the toggle is usually a checkbox or a touch of JavaScript.",
  definition: {
    term: "Responsive navigation",
    explanation: "A navbar that adapts its presentation between desktop links and a mobile menu."
  },
  whyItMatters: "Navigation is the site's backbone — if it breaks on mobile, users cannot go anywhere.",
  realWorldAnalogy: {
    title: "Understanding responsive navs",
    story: "A responsive navbar is like a folding map: spread out fully on a table (desktop), folded into a pocket square (mobile) with the same information.",
    comparison: [
      { item: "Desktop links", meaning: "The unfolded map." },
      { item: "Hamburger menu", meaning: "The folded pocket version." }
    ]
  },
  syntaxStructure: `@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: block; }
}`,
  codeExample: `.nav-links {
  display: flex;
  gap: 24px;
}

.hamburger {
  display: none;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .hamburger {
    display: block;
  }
}`,
  codeAnnotations: [
    { lineOrToken: ".nav-links { display: flex; }", description: "Desktop: links in a row." },
    { lineOrToken: "@media (max-width: 768px)", description: "Mobile: hide links, show the hamburger." }
  ],
  commonMistakes: [
    { wrong: "Hiding nav links on mobile with no menu alternative", correct: "Always provide the hamburger toggle", reason: "Hidden links with no way to open them strand mobile users." }
  ],
  tryItYourself: {
    html: `<nav>\n  <div class="nav-links"><a href="#">Home</a><a href="#">About</a></div>\n  <button class="hamburger">☰</button>\n</nav>`,
    css: `.nav-links {\n  display: flex;\n  gap: 24px;\n}\n.hamburger {\n  display: none;\n}\n@media (max-width: 768px) {\n  .nav-links { display: none; }\n  .hamburger { display: block; }\n}`,
    instructions: "Below 768px the links hide and the hamburger appears."
  },
  takeaways: [
    "Desktop shows links; mobile shows a menu button.",
    "The switch lives in a media query.",
    "Never hide navigation without an alternative."
  ],
  quizQuestions: [
    { id: "css-m9l8-q1", question: "What is the hamburger icon for?", options: ["Toggling the mobile menu", "Ordering food", "Playing music", "Refreshing the page"], correctAnswerIndex: 0, explanation: "It opens the collapsed navigation on small screens." },
    { id: "css-m9l8-q2", question: "Where does the desktop-to-mobile nav switch happen?", options: ["In a media query", "In the HTML title", "In the footer", "In an image"], correctAnswerIndex: 0, explanation: "A max-width media query swaps the layouts." }
  ]
};

// LESSON: Responsive Cards
export const cssResponsiveCardsContent: LessonContent = {
  heroTagline: "Card layouts that reflow beautifully",
  introduction: "Responsive cards use auto-fit grids or wrapping flex rows so the column count adapts: three across on desktop, one stacked column on phones.",
  definition: {
    term: "Responsive cards",
    explanation: "Card layouts whose column count adapts to the viewport."
  },
  whyItMatters: "Cards are everywhere — products, articles, profiles. Their grid must survive every screen.",
  realWorldAnalogy: {
    title: "Understanding responsive cards",
    story: "Responsive cards are like theater seats: wide auditoriums fit many per row; narrow rooms stack them in fewer columns — same seats, different arrangement.",
    comparison: [
      { item: "Desktop", meaning: "Wide auditorium — many seats per row." },
      { item: "Phone", meaning: "Narrow room — single-file rows." }
    ]
  },
  syntaxStructure: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}`,
  codeExample: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  padding: 16px;
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}`,
  codeAnnotations: [
    { lineOrToken: "repeat(auto-fit, minmax(260px, 1fr))", description: "Columns reflow with the viewport." },
    { lineOrToken: "object-fit: cover;", description: "Card images fill their frame without distortion." }
  ],
  commonMistakes: [
    { wrong: "Fixed 3-column grid overflowing on phones", correct: "Use auto-fit minmax() or a stacking media query", reason: "Fixed columns do not adapt — fluid definitions do." }
  ],
  tryItYourself: {
    html: `<div class="cards">\n  <div class="card">One</div>\n  <div class="card">Two</div>\n  <div class="card">Three</div>\n</div>`,
    css: `.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}`,
    instructions: "Narrow the viewport mentally: columns drop from 3 to 2 to 1."
  },
  takeaways: [
    "auto-fit grids reflow card columns automatically.",
    "object-fit: cover keeps card images tidy.",
    "One pattern handles all screen sizes."
  ],
  quizQuestions: [
    { id: "css-m9l9-q1", question: "Which makes card columns responsive?", options: ["repeat(auto-fit, minmax(260px, 1fr))", "Fixed 3 columns", "display: inline", "float: left"], correctAnswerIndex: 0, explanation: "auto-fit reflows the column count with the viewport." },
    { id: "css-m9l9-q2", question: "What does object-fit: cover do for card images?", options: ["Fills the frame without distortion", "Stretches the image", "Hides the image", "Rotates it"], correctAnswerIndex: 0, explanation: "cover fills the box, cropping overflow while keeping ratio." }
  ]
};

// LESSON: Responsive Forms
export const cssResponsiveFormsContent: LessonContent = {
  heroTagline: "Forms that are easy to tap on phones",
  introduction: "Responsive forms stack fields vertically on mobile, enlarge touch targets to at least 44px, and keep labels above inputs. Cramped desktop-style forms are unusable on phones.",
  definition: {
    term: "Responsive forms",
    explanation: "Form layouts adapted for small screens: stacked fields, large tap targets, readable labels."
  },
  whyItMatters: "Forms are where users convert — signups, checkouts. A painful mobile form loses customers directly.",
  realWorldAnalogy: {
    title: "Understanding responsive forms",
    story: "A responsive form is like a paper form redesigned as a phone survey: one question per screen, big buttons, no tiny boxes.",
    comparison: [
      { item: "Stacked fields", meaning: "One survey question per screen." },
      { item: "44px targets", meaning: "Buttons big enough for thumbs." }
    ]
  },
  syntaxStructure: `input, button {
  width: 100%;
  padding: 12px;
}`,
  codeExample: `.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

input, button {
  padding: 12px;
  font-size: 16px;
}`,
  codeAnnotations: [
    { lineOrToken: "grid-template-columns: 1fr 1fr;", description: "Desktop: two fields side by side." },
    { lineOrToken: "@media (max-width: 600px)", description: "Mobile: fields stack in one column." },
    { lineOrToken: "font-size: 16px;", description: "Prevents iOS auto-zoom on focus." }
  ],
  commonMistakes: [
    { wrong: "Inputs smaller than 16px causing iOS to zoom on focus", correct: "Use font-size: 16px or larger on inputs", reason: "iOS zooms into inputs below 16px, breaking the layout." }
  ],
  tryItYourself: {
    html: `<div class="form-row">\n  <input placeholder="First name">\n  <input placeholder="Last name">\n</div>`,
    css: `.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n@media (max-width: 600px) {\n  .form-row { grid-template-columns: 1fr; }\n}\ninput {\n  padding: 12px;\n  font-size: 16px;\n}`,
    instructions: "Below 600px the two fields stack vertically."
  },
  takeaways: [
    "Stack fields in one column on mobile.",
    "Keep tap targets ≥44px and inputs ≥16px.",
    "Labels above inputs read best on phones."
  ],
  quizQuestions: [
    { id: "css-m9l10-q1", question: "Why use font-size: 16px on mobile inputs?", options: ["Prevents iOS auto-zoom on focus", "It looks nicer", "It is required by HTML", "It speeds up typing"], correctAnswerIndex: 0, explanation: "iOS zooms into smaller inputs, disrupting the layout." },
    { id: "css-m9l10-q2", question: "How should multi-column form rows behave on phones?", options: ["Stack into one column", "Stay multi-column", "Hide half the fields", "Rotate sideways"], correctAnswerIndex: 0, explanation: "Stacked fields are tappable and readable on narrow screens." }
  ]
};

// LESSON: Responsive Layout
export const cssResponsiveLayoutContent: LessonContent = {
  heroTagline: "Whole-page structures that adapt",
  introduction: "Responsive page layout combines everything: flexible grids, media queries, and fluid type. Sidebars collapse, multi-columns stack, and spacing tightens as screens shrink.",
  definition: {
    term: "Responsive layout",
    explanation: "The complete page structure adapting across viewport sizes."
  },
  whyItMatters: "Individual responsive pieces mean little if the overall page still breaks. The layout is the big picture.",
  realWorldAnalogy: {
    title: "Understanding responsive layout",
    story: "Responsive layout is like modular office furniture: desks join into rows in big rooms and split into singles in small ones — same pieces, new arrangement.",
    comparison: [
      { item: "Desktop", meaning: "Desks joined in rows." },
      { item: "Mobile", meaning: "Desks split into a single file." }
    ]
  },
  syntaxStructure: `.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
}
@media (max-width: 800px) {
  .layout { grid-template-columns: 1fr; }
}`,
  codeExample: `.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

@media (max-width: 800px) {
  .layout {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
  }
}`,
  codeAnnotations: [
    { lineOrToken: "grid-template-columns: 240px 1fr;", description: "Desktop: sidebar + content." },
    { lineOrToken: "@media (max-width: 800px)", description: "Mobile: single column, tighter spacing." }
  ],
  commonMistakes: [
    { wrong: "Forgetting to reduce padding/gaps on mobile", correct: "Tighten spacing in the mobile query", reason: "Desktop padding wastes precious phone width." }
  ],
  tryItYourself: {
    html: `<div class="layout">\n  <aside>Side</aside>\n  <main>Main</main>\n</div>`,
    css: `.layout {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  gap: 24px;\n}\n@media (max-width: 800px) {\n  .layout { grid-template-columns: 1fr; }\n}\naside { background: #e2e8f0; padding: 16px; }\nmain { background: #f8fafc; padding: 16px; }`,
    instructions: "Below 800px the sidebar stacks above the main content."
  },
  takeaways: [
    "Page layout = grids + queries + fluid pieces.",
    "Collapse sidebars below content on mobile.",
    "Reduce padding and gaps on small screens."
  ],
  quizQuestions: [
    { id: "css-m9l11-q1", question: "What typically happens to sidebars on mobile?", options: ["They stack above or below the main content", "They get wider", "They disappear forever", "They move to the footer file"], correctAnswerIndex: 0, explanation: "Single-column stacking keeps everything reachable." },
    { id: "css-m9l11-q2", question: "Why reduce padding on mobile layouts?", options: ["Phone width is precious", "Padding is deprecated", "It loads faster", "Browsers require it"], correctAnswerIndex: 0, explanation: "Tighter spacing preserves content width on small screens." }
  ]
};

// LESSON: Mobile Navigation
export const cssMobileNavigationContent: LessonContent = {
  heroTagline: "Thumb-friendly menus for small screens",
  introduction: "Mobile navigation patterns — hamburger drawers, bottom tab bars, and full-screen overlays — keep many links reachable with thumbs. Tap targets must be at least 44px.",
  definition: {
    term: "Mobile navigation",
    explanation: "Navigation UI patterns designed for touch and small viewports."
  },
  whyItMatters: "Desktop nav patterns fail on phones: tiny links, hover-only dropdowns. Mobile patterns are a separate design skill.",
  realWorldAnalogy: {
    title: "Understanding mobile nav",
    story: "Mobile navigation is like a Swiss Army knife: all the tools fold into a compact handle (hamburger) and flip out when needed.",
    comparison: [
      { item: "Hamburger button", meaning: "The closed knife handle." },
      { item: "Open drawer", meaning: "The tools flipped out." }
    ]
  },
  syntaxStructure: `.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  transform: translateX(-100%);
}
.drawer.open { transform: none; }`,
  codeExample: `.drawer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: #0f172a;
  color: white;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.drawer.open {
  transform: translateX(0);
}

.drawer a {
  display: block;
  padding: 16px;
}`,
  codeAnnotations: [
    { lineOrToken: "transform: translateX(-100%);", description: "Drawer hidden off-screen to the left." },
    { lineOrToken: ".drawer.open", description: "Slides the drawer into view." },
    { lineOrToken: "padding: 16px;", description: "Generous tap targets for thumbs." }
  ],
  commonMistakes: [
    { wrong: "Hover-only dropdowns on mobile with no tap alternative", correct: "Make submenus expand on tap", reason: "Phones have no hover — hover-only menus are unreachable." }
  ],
  tryItYourself: {
    html: `<nav class="drawer">\n  <a href="#">Home</a>\n  <a href="#">Courses</a>\n</nav>`,
    css: `.drawer {\n  background: #0f172a;\n  padding: 16px;\n  width: 220px;\n}\n.drawer a {\n  display: block;\n  color: white;\n  padding: 14px;\n  text-decoration: none;\n}`,
    instructions: "Each link is a full-width 44px+ tap target."
  },
  takeaways: [
    "Use drawers, tab bars, or overlays on mobile.",
    "Tap targets must be ≥44px.",
    "Never rely on hover for mobile menus."
  ],
  quizQuestions: [
    { id: "css-m9l12-q1", question: "Why do hover-only dropdowns fail on mobile?", options: ["Phones have no hover state", "They are too colorful", "They load slowly", "They need Wi-Fi"], correctAnswerIndex: 0, explanation: "Touch screens cannot hover, so tap alternatives are required." },
    { id: "css-m9l12-q2", question: "What is the minimum recommended tap target size?", options: ["44px", "10px", "200px", "1px"], correctAnswerIndex: 0, explanation: "44px is the accessible minimum for touch targets." }
  ]
};

// LESSON: Tablet Layout
export const cssTabletLayoutContent: LessonContent = {
  heroTagline: "The in-between: not phone, not desktop",
  introduction: "Tablets sit between breakpoints — typically 768px to 1024px. Layouts here often use two columns, condensed sidebars, and touch-sized targets, borrowing from both mobile and desktop.",
  definition: {
    term: "Tablet layout",
    explanation: "Layout adaptations for mid-size viewports between phone and desktop."
  },
  whyItMatters: "Ignoring tablets leaves an awkward middle: phone layouts look empty, desktop layouts feel cramped. A dedicated middle step fixes it.",
  realWorldAnalogy: {
    title: "Understanding tablet layouts",
    story: "Tablet layout is like a medium t-shirt: not the small, not the large — cut to fit the middle properly instead of stretching either extreme.",
    comparison: [
      { item: "Two-column grid", meaning: "The medium cut." },
      { item: "Condensed sidebar", meaning: "Sleeves shortened to fit." }
    ]
  },
  syntaxStructure: `@media (min-width: 768px) and (max-width: 1023px) {
  /* tablet-only styles */
}`,
  codeExample: `/* Tablet: two columns, icon-only sidebar */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sidebar {
    width: 64px;
  }

  .sidebar .label {
    display: none;
  }
}`,
  codeAnnotations: [
    { lineOrToken: "(min-width: 768px) and (max-width: 1023px)", description: "Targets the tablet band only." },
    { lineOrToken: "width: 64px;", description: "Sidebar collapses to icons." }
  ],
  commonMistakes: [
    { wrong: "Letting the phone layout stretch to 1024px wide", correct: "Add a tablet breakpoint around 768px", reason: "Single-column phone layouts look sparse and wasteful on tablets." }
  ],
  tryItYourself: {
    html: `<div class="grid">\n  <div>A</div><div>B</div><div>C</div><div>D</div>\n</div>`,
    css: `.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n@media (min-width: 768px) {\n  .grid { grid-template-columns: repeat(2, 1fr); }\n}\n.grid > div {\n  background: #fce7f3;\n  padding: 20px;\n}`,
    instructions: "At tablet widths the grid settles into two comfortable columns."
  },
  takeaways: [
    "Tablets need their own layout step.",
    "Two columns and icon sidebars suit the middle range.",
    "Keep touch-sized targets — tablets are touch devices."
  ],
  quizQuestions: [
    { id: "css-m9l13-q1", question: "Which range is typically 'tablet'?", options: ["Roughly 768px to 1024px", "100px to 200px", "2000px to 3000px", "0px to 100px"], correctAnswerIndex: 0, explanation: "Tablets sit between common phone and desktop breakpoints." },
    { id: "css-m9l13-q2", question: "How do you target only tablets in a query?", options: ["Combine min-width and max-width", "Use max-width only", "Use min-width only", "Tablets cannot be targeted"], correctAnswerIndex: 0, explanation: "A min+max range isolates the middle band." }
  ]
};

// LESSON: Desktop Layout
export const cssDesktopLayoutContent: LessonContent = {
  heroTagline: "Use the big screen well",
  introduction: "Desktop layouts exploit wide viewports: multi-column grids, persistent sidebars, and centered max-width containers (1100–1280px) so lines stay readable on huge monitors.",
  definition: {
    term: "Desktop layout",
    explanation: "Layout enhancements for large viewports: wide grids, sidebars, and capped content width."
  },
  whyItMatters: "Uncapped full-width text on a 32-inch monitor is unreadable. Desktop design is about using space without abusing it.",
  realWorldAnalogy: {
    title: "Understanding desktop layout",
    story: "Desktop layout is like arranging a banquet hall: plenty of tables (columns), but each table seats a comfortable number — you do not make one endless table.",
    comparison: [
      { item: "max-width: 1200px", meaning: "Sensible table sizes." },
      { item: "Full-bleed 3000px text", meaning: "One endless table nobody enjoys." }
    ]
  },
  syntaxStructure: `.container {
  max-width: 1200px;
  margin: 0 auto;
}`,
  codeExample: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 1200px) {
  .features {
    grid-template-columns: repeat(4, 1fr);
  }

  .sidebar {
    display: block;
  }
}`,
  codeAnnotations: [
    { lineOrToken: "max-width: 1200px; margin: 0 auto;", description: "Centered content column that never gets too wide." },
    { lineOrToken: "@media (min-width: 1200px)", description: "Full desktop enhancements." }
  ],
  commonMistakes: [
    { wrong: "Letting text span the entire 2560px monitor", correct: "Cap text containers around 65ch or 1200px", reason: "Overlong lines exhaust readers' eyes." }
  ],
  tryItYourself: {
    html: `<div class="container">\n  <p>Comfortable reading width.</p>\n</div>`,
    css: `.container {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 24px;\n  background: #f8fafc;\n}\np {\n  line-height: 1.7;\n}`,
    instructions: "The container caps width so text stays readable on wide screens."
  },
  takeaways: [
    "Cap content width with max-width + auto margins.",
    "Multi-column grids shine on desktop.",
    "Keep line lengths readable even on huge screens."
  ],
  quizQuestions: [
    { id: "css-m9l14-q1", question: "Why cap content width on desktop?", options: ["Overlong lines are hard to read", "It saves electricity", "Browsers require it", "It hides sidebars"], correctAnswerIndex: 0, explanation: "Readable line length matters even with abundant space." },
    { id: "css-m9l14-q2", question: "How do you center a capped container?", options: ["max-width + margin: 0 auto;", "text-align: center;", "float: center;", "padding: auto;"], correctAnswerIndex: 0, explanation: "Auto side margins center a fixed max-width block." }
  ]
};

// ==============================
// MODULE 10: Advanced CSS and Projects
// ==============================

// LESSON: CSS Variables
export const cssVariablesContent: LessonContent = {
  heroTagline: "Reusable values with --names",
  introduction: "CSS variables (custom properties) store reusable values: --brand: #2563eb; then use them with var(--brand). Change one variable to retheme a whole site.",
  definition: {
    term: "CSS variables",
    explanation: "Custom properties starting with -- that store reusable values, referenced with var()."
  },
  whyItMatters: "Theming, dark mode, and consistent design systems all run on variables — one change propagates everywhere.",
  realWorldAnalogy: {
    title: "Understanding CSS variables",
    story: "CSS variables are like labeled jars in a kitchen: --sugar holds the sugar, and every recipe scoops from the jar instead of the bag.",
    comparison: [
      { item: "--brand: #2563eb", meaning: "Labeling the jar." },
      { item: "var(--brand)", meaning: "Scooping from the jar in a recipe." }
    ]
  },
  syntaxStructure: `:root {
  --brand: #2563eb;
}
.btn { background: var(--brand); }`,
  codeExample: `:root {
  --brand: #2563eb;
  --brand-dark: #1d4ed8;
  --radius: 8px;
  --spacing: 16px;
}

.btn {
  background: var(--brand);
  border-radius: var(--radius);
  padding: var(--spacing);
}

.btn:hover {
  background: var(--brand-dark);
}`,
  codeAnnotations: [
    { lineOrToken: ":root", description: "Defines variables globally for the whole document." },
    { lineOrToken: "var(--brand)", description: "Uses the stored value." }
  ],
  commonMistakes: [
    { wrong: "background: --brand; (missing var())", correct: "background: var(--brand);", reason: "Variables must be referenced through the var() function." }
  ],
  tryItYourself: {
    html: `<button class="btn">Themed button</button>`,
    css: `:root {\n  --brand: #2563eb;\n}\n.btn {\n  background: var(--brand);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n}`,
    instructions: "Change --brand to #dc2626 and watch the button retheme."
  },
  takeaways: [
    "Define with --name, use with var(--name).",
    ":root makes variables global.",
    "One variable change rethemes everything."
  ],
  quizQuestions: [
    { id: "css-m10l1-q1", question: "How do you use a CSS variable?", options: ["var(--name)", "--name", "$name", "@name"], correctAnswerIndex: 0, explanation: "var() retrieves the stored value." },
    { id: "css-m10l1-q2", question: "Where do you define global variables?", options: [":root", "body only", "Inside var()", "In HTML"], correctAnswerIndex: 0, explanation: ":root scopes variables to the whole document." }
  ]
};

// LESSON: Transitions
export const cssTransitionsContent: LessonContent = {
  heroTagline: "Smooth changes between states",
  introduction: "Transitions animate property changes over time: transition: background 0.3s ease makes a hover color fade smoothly instead of snapping.",
  definition: {
    term: "CSS transitions",
    explanation: "Animations between two states, defined by property, duration, timing, and delay."
  },
  whyItMatters: "Smooth hover effects and state changes make interfaces feel polished and responsive.",
  realWorldAnalogy: {
    title: "Understanding transitions",
    story: "A transition is like a dimmer switch: instead of lights snapping on, they fade up gracefully over a moment.",
    comparison: [
      { item: "0.3s", meaning: "How long the fade takes." },
      { item: "ease", meaning: "The fade's gentle acceleration curve." }
    ]
  },
  syntaxStructure: `.btn {
  transition: background 0.3s ease;
}`,
  codeExample: `.btn {
  background: #2563eb;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}`,
  codeAnnotations: [
    { lineOrToken: "transition: background 0.3s ease, transform 0.2s ease;", description: "Animates two properties with their own timings." },
    { lineOrToken: "transform: translateY(-2px);", description: "The hover end-state; transition animates toward it." }
  ],
  commonMistakes: [
    { wrong: "Putting transition only on :hover, so the return snaps", correct: "Put transition on the base rule", reason: "The transition must exist in both states to animate both directions." }
  ],
  tryItYourself: {
    html: `<button class="btn">Hover me</button>`,
    css: `.btn {\n  background: #2563eb;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  transition: background 0.3s ease;\n}\n.btn:hover {\n  background: #1d4ed8;\n}`,
    instructions: "Change 0.3s to 1s and feel the slower fade."
  },
  takeaways: [
    "Transitions animate between states.",
    "Define them on the base rule, not :hover.",
    "Keep durations snappy: 0.2–0.3s."
  ],
  quizQuestions: [
    { id: "css-m10l2-q1", question: "Where should the transition property go?", options: ["On the base rule", "Only on :hover", "In the HTML", "On the body"], correctAnswerIndex: 0, explanation: "Base placement animates both into and out of the hover state." },
    { id: "css-m10l2-q2", question: "What does 0.3s in a transition set?", options: ["The animation duration", "The delay before hover", "The border width", "The font size"], correctAnswerIndex: 0, explanation: "Duration controls how long the change takes." }
  ]
};

// LESSON: Transform
export const cssTransformContent: LessonContent = {
  heroTagline: "Move, scale, and rotate elements",
  introduction: "transform visually changes an element without affecting layout: translate() moves it, scale() resizes it, rotate() spins it. Great for hover lifts and animations.",
  definition: {
    term: "transform",
    explanation: "The property that visually moves, scales, rotates, or skews an element."
  },
  whyItMatters: "Transforms are GPU-friendly, so hover lifts and micro-interactions stay buttery smooth.",
  realWorldAnalogy: {
    title: "Understanding transforms",
    story: "transform is like moving a sticky note on a whiteboard: the note shifts, grows, or tilts, but the writing underneath never reflows.",
    comparison: [
      { item: "translateY(-4px)", meaning: "Sliding the note up." },
      { item: "scale(1.05)", meaning: "Photocopying it slightly larger." }
    ]
  },
  syntaxStructure: `.card:hover {
  transform: translateY(-4px) scale(1.02);
}`,
  codeExample: `.card {
  transition: transform 0.25s ease;
}

.card:hover {
  transform: translateY(-6px) scale(1.02);
}

.spin:hover {
  transform: rotate(8deg);
}`,
  codeAnnotations: [
    { lineOrToken: "translateY(-6px)", description: "Lifts the card 6px on hover." },
    { lineOrToken: "scale(1.02)", description: "Grows it 2% for emphasis." },
    { lineOrToken: "rotate(8deg)", description: "Tilts the element 8 degrees." }
  ],
  commonMistakes: [
    { wrong: "Using top/left for hover movement, causing layout jank", correct: "Use transform: translate() instead", reason: "Transforms do not trigger layout recalculation — they are smoother." }
  ],
  tryItYourself: {
    html: `<div class="card">Hover lift</div>`,
    css: `.card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  transition: transform 0.25s ease;\n}\n.card:hover {\n  transform: translateY(-6px);\n}`,
    instructions: "Change -6px to -12px for a bigger lift."
  },
  takeaways: [
    "transform changes appearance without reflowing layout.",
    "translate, scale, rotate cover most needs.",
    "Pair with transition for smooth motion."
  ],
  quizQuestions: [
    { id: "css-m10l3-q1", question: "Does transform affect surrounding layout?", options: ["No — it is purely visual", "Yes, it pushes neighbors", "It deletes siblings", "It resizes the page"], correctAnswerIndex: 0, explanation: "Transforms paint differently without changing layout boxes." },
    { id: "css-m10l3-q2", question: "Which moves an element up 10px?", options: ["transform: translateY(-10px);", "margin-top: -10px;", "top: 10px;", "padding: -10px;"], correctAnswerIndex: 0, explanation: "translateY(-10px) shifts the element up visually." }
  ]
};

// LESSON: Animations
export const cssAnimationsContent: LessonContent = {
  heroTagline: "Keyframe motion without JavaScript",
  introduction: "CSS animations run multi-step motion with @keyframes: define stages (0%, 50%, 100%), then attach with animation: name duration timing. Perfect for loaders, pulses, and entrances.",
  definition: {
    term: "CSS animations",
    explanation: "Keyframe-defined motion applied with the animation property."
  },
  whyItMatters: "Spinners, pulsing badges, and sliding banners — all possible with CSS alone, no JavaScript.",
  realWorldAnalogy: {
    title: "Understanding keyframes",
    story: "Keyframes are like a flipbook: you draw the key poses (0%, 50%, 100%) and the browser fills in the frames between.",
    comparison: [
      { item: "@keyframes", meaning: "The flipbook's key drawings." },
      { item: "animation", meaning: "Flipping through the pages." }
    ]
  },
  syntaxStructure: `@keyframes slide-in {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}`,
  codeExample: `@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

.badge {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loader {
  animation: spin 1s linear infinite;
}`,
  codeAnnotations: [
    { lineOrToken: "@keyframes pulse", description: "Defines the grow-and-fade cycle." },
    { lineOrToken: "animation: pulse 2s ease-in-out infinite;", description: "Runs the cycle forever." },
    { lineOrToken: "to { transform: rotate(360deg); }", description: "One full rotation per cycle." }
  ],
  commonMistakes: [
    { wrong: "Defining @keyframes but forgetting the animation property", correct: "Attach with animation: name duration ...", reason: "Keyframes alone do nothing — an element must reference them." }
  ],
  tryItYourself: {
    html: `<div class="loader"></div>`,
    css: `@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n.loader {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}`,
    instructions: "Change 1s to 3s and watch the spinner slow down."
  },
  takeaways: [
    "@keyframes defines the motion stages.",
    "animation attaches it with duration and timing.",
    "infinite loops the animation forever."
  ],
  quizQuestions: [
    { id: "css-m10l4-q1", question: "What does @keyframes do?", options: ["Defines animation stages", "Styles fonts", "Loads images", "Creates grids"], correctAnswerIndex: 0, explanation: "@keyframes holds the from/to or percentage stages." },
    { id: "css-m10l4-q2", question: "How is a keyframe animation applied to an element?", options: ["With the animation property", "Automatically", "With JavaScript only", "With a class named animate"], correctAnswerIndex: 0, explanation: "animation: name duration ... attaches the keyframes." }
  ]
};

// LESSON: CSS Functions
export const cssCssFunctionsContent: LessonContent = {
  heroTagline: "calc(), clamp(), min(), max() — math in CSS",
  introduction: "CSS functions compute values live: calc(100% - 40px) mixes units, min()/max() pick bounds, and var() reads variables. They make layouts adaptive without extra code.",
  definition: {
    term: "CSS functions",
    explanation: "Built-in functions like calc(), clamp(), min(), max(), and var() that compute property values."
  },
  whyItMatters: "Fluid gutters, adaptive widths, and bounded sizes all need a little math — functions do it natively.",
  realWorldAnalogy: {
    title: "Understanding calc",
    story: "calc() is like a recipe that says 'fill the pan, leaving 2 inches at the rim' — it measures against whatever pan (container) you use.",
    comparison: [
      { item: "calc(100% - 40px)", meaning: "The whole pan minus a 2-inch rim." },
      { item: "min(600px, 90%)", meaning: "Whichever is smaller: the recipe cap or the pan." }
    ]
  },
  syntaxStructure: `.main {
  width: calc(100% - 260px);
}`,
  codeExample: `.sidebar-layout {
  display: flex;
}

.sidebar {
  width: 260px;
}

.main {
  width: calc(100% - 260px);
  padding: clamp(16px, 4vw, 48px);
}`,
  codeAnnotations: [
    { lineOrToken: "calc(100% - 260px)", description: "Main takes all space minus the fixed sidebar." },
    { lineOrToken: "clamp(16px, 4vw, 48px)", description: "Fluid padding bounded between 16px and 48px." }
  ],
  commonMistakes: [
    { wrong: "calc(100%-40px) without spaces around the minus", correct: "calc(100% - 40px)", reason: "calc() requires spaces around + and - operators." }
  ],
  tryItYourself: {
    html: `<div class="main">Fluid width</div>`,
    css: `.main {\n  width: calc(100% - 80px);\n  margin: 0 auto;\n  background: #fef3c7;\n  padding: 20px;\n}`,
    instructions: "Change 80px to 200px and watch the box narrow."
  },
  takeaways: [
    "calc() mixes units with live math.",
    "Spaces are required around + and -.",
    "clamp/min/max set fluid bounds."
  ],
  quizQuestions: [
    { id: "css-m10l5-q1", question: "What does calc(100% - 60px) compute?", options: ["Full width minus 60px", "60% of the width", "100 pixels", "An error"], correctAnswerIndex: 0, explanation: "calc mixes percentage and fixed units." },
    { id: "css-m10l5-q2", question: "What is required around + and - in calc()?", options: ["Spaces", "Commas", "Parentheses", "Nothing"], correctAnswerIndex: 0, explanation: "calc(100% - 40px) needs spaces around the operators." }
  ]
};

// LESSON: Advanced Selectors
export const cssAdvancedSelectorsContent: LessonContent = {
  heroTagline: "Precise targeting: :not(), :nth-child(), and more",
  introduction: "Advanced selectors give surgical precision: :nth-child(2n) styles every even row, :not(.active) excludes elements, and [attr^=\"val\"] matches attribute beginnings.",
  definition: {
    term: "Advanced selectors",
    explanation: "Powerful selector patterns for positional, negation, and partial-attribute matching."
  },
  whyItMatters: "Zebra-striped tables, styled first/last items, and exclusions — all without extra classes in the HTML.",
  realWorldAnalogy: {
    title: "Understanding nth-child",
    story: ":nth-child is like a teacher picking 'every second student in line' — a pattern rule instead of calling names.",
    comparison: [
      { item: ":nth-child(odd)", meaning: "Every odd-positioned student." },
      { item: ":not(.skip)", meaning: "Everyone except the ones wearing red." }
    ]
  },
  syntaxStructure: `li:nth-child(odd) {
  background: #f8fafc;
}`,
  codeExample: `/* Zebra rows */
tbody tr:nth-child(even) {
  background: #f8fafc;
}

/* All buttons except the primary */
.btn:not(.btn-primary) {
  background: #e2e8f0;
  color: #0f172a;
}

/* External links get an icon */
a[href^="http"]::after {
  content: " ↗";
}`,
  codeAnnotations: [
    { lineOrToken: "tr:nth-child(even)", description: "Styles every even table row." },
    { lineOrToken: ".btn:not(.btn-primary)", description: "Matches buttons lacking the primary class." },
    { lineOrToken: '[href^="http"]', description: "Links whose href starts with http." }
  ],
  commonMistakes: [
    { wrong: ":nth-child(0) expecting the first child", correct: ":nth-child(1) or :first-child", reason: "nth-child counting starts at 1, not 0." }
  ],
  tryItYourself: {
    html: `<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n  <li>Four</li>\n</ul>`,
    css: `li:nth-child(odd) {\n  background: #f1f5f9;\n}\nli {\n  padding: 8px 12px;\n}`,
    instructions: "Change odd to even and watch the stripe pattern flip."
  },
  takeaways: [
    ":nth-child() matches by position (1-based).",
    ":not() excludes matches.",
    "Attribute operators like ^= match partially."
  ],
  quizQuestions: [
    { id: "css-m10l6-q1", question: "What does li:nth-child(2n) select?", options: ["Every even list item", "The second item only", "Every odd item", "No items"], correctAnswerIndex: 0, explanation: "2n matches positions 2, 4, 6 — the evens." },
    { id: "css-m10l6-q2", question: "What does :not(.active) do?", options: ["Matches elements without the active class", "Deletes active elements", "Hides everything", "Adds the class"], correctAnswerIndex: 0, explanation: ":not() negates the selector inside." }
  ]
};

// LESSON: Reusable CSS
export const cssReusableCssContent: LessonContent = {
  heroTagline: "Write once, style everywhere",
  introduction: "Reusable CSS means building small utility classes — .btn, .card, .text-center — that you combine in HTML instead of rewriting styles. Less code, more consistency.",
  definition: {
    term: "Reusable CSS",
    explanation: "An approach of small, composable classes shared across many elements and pages."
  },
  whyItMatters: "It shrinks stylesheets, speeds up building, and guarantees the same button looks the same everywhere.",
  realWorldAnalogy: {
    title: "Understanding reusable classes",
    story: "Reusable classes are like LEGO bricks: a few standard pieces combine into endless models, instead of carving each model from scratch.",
    comparison: [
      { item: ".btn .btn-primary", meaning: "Snapping two bricks together." },
      { item: "Repeated custom styles", meaning: "Carving each model by hand." }
    ]
  },
  syntaxStructure: `<button class="btn btn-primary">Save</button>`,
  codeExample: `/* Base brick */
.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

/* Variant bricks */
.btn-primary { background: #2563eb; color: white; }
.btn-ghost { background: transparent; border: 1px solid #cbd5e1; }`,
  codeAnnotations: [
    { lineOrToken: ".btn", description: "Shared foundation every button uses." },
    { lineOrToken: ".btn-primary", description: "Variant adding only the color difference." }
  ],
  commonMistakes: [
    { wrong: "Copying the full button styles for every color variant", correct: "Share a .btn base; variants add only differences", reason: "Duplication means every fix must be repeated in many places." }
  ],
  tryItYourself: {
    html: `<button class="btn btn-primary">Save</button>\n<button class="btn btn-ghost">Cancel</button>`,
    css: `.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn-primary {\n  background: #2563eb;\n  color: white;\n}\n.btn-ghost {\n  background: transparent;\n  border: 1px solid #cbd5e1;\n}`,
    instructions: "Both buttons share .btn — change its padding once and see both update."
  },
  takeaways: [
    "Build small composable classes.",
    "Variants add only what differs.",
    "Reuse guarantees visual consistency."
  ],
  quizQuestions: [
    { id: "css-m10l7-q1", question: "What is the benefit of a shared .btn base class?", options: ["One change updates all buttons", "Faster internet", "Bigger buttons", "No HTML needed"], correctAnswerIndex: 0, explanation: "Shared classes propagate changes everywhere they are used." },
    { id: "css-m10l7-q2", question: "What should a variant class contain?", options: ["Only the differences from the base", "A full copy of all styles", "JavaScript", "Image URLs"], correctAnswerIndex: 0, explanation: "Variants layer on top of the base with minimal additions." }
  ]
};

// LESSON: CSS Organization
export const cssCssOrganizationContent: LessonContent = {
  heroTagline: "Keep big stylesheets sane",
  introduction: "Organized CSS groups rules logically — variables first, then base, layout, components, utilities — with section comments. Methodologies like BEM name classes as block__element--modifier.",
  definition: {
    term: "CSS organization",
    explanation: "Structuring stylesheets with clear sections, naming conventions, and separation of concerns."
  },
  whyItMatters: "Stylesheets grow to thousands of lines. Without organization, finding and safely changing rules becomes guesswork.",
  realWorldAnalogy: {
    title: "Understanding organized CSS",
    story: "An organized stylesheet is like a library: sections are aisles, comments are shelf labels, and naming conventions are the catalog system.",
    comparison: [
      { item: "Section comments", meaning: "Aisle signs in the library." },
      { item: "BEM naming", meaning: "The catalog numbers on book spines." }
    ]
  },
  syntaxStructure: `/* ===== Components ===== */
.card { /* ... */ }
.card__title { /* ... */ }
.card--featured { /* ... */ }`,
  codeExample: `/* ===== 1. Variables ===== */
:root { --brand: #2563eb; }

/* ===== 2. Base ===== */
body { font-family: system-ui; }

/* ===== 3. Layout ===== */
.container { max-width: 1200px; margin: 0 auto; }

/* ===== 4. Components ===== */
.card { background: white; border-radius: 12px; }
.card__title { font-size: 1.25rem; }
.card--featured { border: 2px solid var(--brand); }`,
  codeAnnotations: [
    { lineOrToken: "/* ===== 4. Components ===== */", description: "Section banner comment." },
    { lineOrToken: ".card__title", description: "BEM: element of the card block." },
    { lineOrToken: ".card--featured", description: "BEM: modifier variant of the card." }
  ],
  commonMistakes: [
    { wrong: "One 3000-line file with random rule order", correct: "Split into sections or files: base, layout, components", reason: "Structure makes rules findable and changes safe." }
  ],
  tryItYourself: {
    html: `<div class="card card--featured">\n  <h3 class="card__title">Featured</h3>\n</div>`,
    css: `.card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}\n.card__title {\n  margin: 0;\n}\n.card--featured {\n  border: 2px solid #2563eb;\n}`,
    instructions: "The BEM names show the relationship: block, element, modifier."
  },
  takeaways: [
    "Group rules: variables, base, layout, components.",
    "BEM names classes block__element--modifier.",
    "Split large stylesheets into files."
  ],
  quizQuestions: [
    { id: "css-m10l8-q1", question: "In BEM, what does card__title mean?", options: ["The title element of the card block", "A card inside a title", "A title color", "A JavaScript hook"], correctAnswerIndex: 0, explanation: "Double underscore connects an element to its block." },
    { id: "css-m10l8-q2", question: "What does card--featured mean in BEM?", options: ["A featured variant of the card", "A deleted card", "A card with no styles", "A card title"], correctAnswerIndex: 0, explanation: "Double hyphen marks a modifier variant." }
  ]
};

// LESSON: Accessibility-friendly Styling
export const cssAccessibleStylingContent: LessonContent = {
  heroTagline: "Design everyone can use",
  introduction: "Accessible CSS means sufficient color contrast, visible focus styles, honoring prefers-reduced-motion, and never conveying meaning by color alone.",
  definition: {
    term: "Accessibility-friendly styling",
    explanation: "CSS practices that keep sites usable for people with visual, motor, or motion sensitivities."
  },
  whyItMatters: "Millions of users rely on keyboards, screen magnifiers, and reduced motion. Accessible styling is both ethical and often legally required.",
  realWorldAnalogy: {
    title: "Understanding accessible design",
    story: "Accessible CSS is like wheelchair ramps on buildings: the stairs still exist, but everyone can enter.",
    comparison: [
      { item: ":focus-visible styles", meaning: "The ramp — keyboard users can see where they are." },
      { item: "prefers-reduced-motion", meaning: "A 'no flashing lights' sign for motion-sensitive visitors." }
    ]
  },
  syntaxStructure: `:focus-visible {
  outline: 3px solid #2563eb;
}`,
  codeExample: `/* Visible keyboard focus */
a:focus-visible,
button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}

/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}`,
  codeAnnotations: [
    { lineOrToken: ":focus-visible", description: "Shows focus rings for keyboard users only." },
    { lineOrToken: "prefers-reduced-motion: reduce", description: "Disables animation for sensitive users." }
  ],
  commonMistakes: [
    { wrong: "outline: none; on focus with no replacement", correct: "Provide a custom :focus-visible style", reason: "Removing focus outlines blinds keyboard users to their position." }
  ],
  tryItYourself: {
    html: `<button class="btn">Tab to me</button>`,
    css: `.btn {\n  padding: 12px 24px;\n  background: #2563eb;\n  color: white;\n  border: none;\n  border-radius: 8px;\n}\n.btn:focus-visible {\n  outline: 3px solid #f59e0b;\n  outline-offset: 2px;\n}`,
    instructions: "Tab to the button with your keyboard to see the focus ring."
  },
  takeaways: [
    "Keep visible focus indicators.",
    "Honor prefers-reduced-motion.",
    "Check contrast ratios (4.5:1 for text)."
  ],
  quizQuestions: [
    { id: "css-m10l9-q1", question: "Why keep :focus-visible styles?", options: ["Keyboard users need to see their position", "It looks decorative", "It speeds up clicks", "Search engines require it"], correctAnswerIndex: 0, explanation: "Focus rings show keyboard users where they are." },
    { id: "css-m10l9-q2", question: "What does prefers-reduced-motion do?", options: ["Lets you disable animation for sensitive users", "Makes animations faster", "Adds more motion", "Changes colors"], correctAnswerIndex: 0, explanation: "It detects users who prefer minimal motion." }
  ]
};

// LESSON: Performance-friendly CSS
export const cssPerformanceCssContent: LessonContent = {
  heroTagline: "Fast styles for fast pages",
  introduction: "Performance-friendly CSS means animating transform and opacity (GPU-cheap), avoiding huge shadows and expensive selectors, and shipping only the CSS the page uses.",
  definition: {
    term: "Performance-friendly CSS",
    explanation: "CSS written to minimize layout work, paint cost, and download size."
  },
  whyItMatters: "Janky animations and bloated stylesheets hurt user experience and search rankings — speed is a feature.",
  realWorldAnalogy: {
    title: "Understanding CSS performance",
    story: "CSS performance is like stage crew work: moving props (transform) is quick; rebuilding the set (layout) between every scene is slow.",
    comparison: [
      { item: "transform/opacity animations", meaning: "Sliding props — cheap and smooth." },
      { item: "width/height animations", meaning: "Rebuilding the set — expensive and janky." }
    ]
  },
  syntaxStructure: `/* Cheap */
.card { transition: transform 0.2s, opacity 0.2s; }`,
  codeExample: `/* Prefer: compositor-friendly */
.card {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
}

/* Avoid animating layout properties */
/* .card:hover { width: 320px; margin: 20px; } */`,
  codeAnnotations: [
    { lineOrToken: "transition: transform 0.25s ease, opacity 0.25s ease;", description: "Both properties animate on the GPU." },
    { lineOrToken: "/* Avoid animating layout properties */", description: "Width/margin changes force expensive reflow." }
  ],
  commonMistakes: [
    { wrong: "Animating width, height, top, or left for motion effects", correct: "Animate transform and opacity instead", reason: "Layout properties trigger reflow and repaint every frame." }
  ],
  tryItYourself: {
    html: `<div class="card">Smooth hover</div>`,
    css: `.card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 24px;\n  transition: transform 0.25s ease;\n}\n.card:hover {\n  transform: translateY(-4px);\n}`,
    instructions: "The lift animates on transform — smooth on any device."
  },
  takeaways: [
    "Animate transform and opacity only.",
    "Avoid animating layout properties.",
    "Ship only the CSS each page needs."
  ],
  quizQuestions: [
    { id: "css-m10l10-q1", question: "Which properties are cheapest to animate?", options: ["transform and opacity", "width and height", "margin and padding", "font-size"], correctAnswerIndex: 0, explanation: "transform and opacity run on the GPU without reflow." },
    { id: "css-m10l10-q2", question: "Why avoid animating width?", options: ["It forces expensive layout recalculation each frame", "It is not allowed", "It changes colors", "It breaks links"], correctAnswerIndex: 0, explanation: "Layout properties trigger reflow, causing jank." }
  ]
};