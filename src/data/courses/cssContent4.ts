// CSS Course content — part 4 of 5
// Modules 7-8: Flexbox, CSS Grid
import { LessonContent } from '../../types';

// ==============================
// MODULE 7: Flexbox
// ==============================

// LESSON: Introduction to Flexbox
export const cssFlexboxIntroContent: LessonContent = {
  heroTagline: "One-dimensional layouts made easy",
  introduction: "**Flexbox** arranges items along a single line — a row or a column — and handles spacing and alignment automatically.\n\nIt replaced the old float hacks for **navbars**, **card rows**, and **centering**. If modern CSS has a superhero, this is it.",
  definition: {
    term: "Flexbox",
    explanation: "**Flexbox** is a CSS layout model for distributing **space** and aligning **items** along one axis — a row or a column. It replaced float hacks for navbars, card rows, and centering."
  },
  whyItMatters: "**Centering** things and building **navbars** used to be genuinely painful in CSS.\n\nFlexbox made both trivial — which is why it is the most-used layout tool in modern CSS.",
  realWorldAnalogy: {
    title: "An usher seating a theater row",
    story: "**Flexbox** is like an usher seating people in a theater row: the usher spaces everyone evenly and centers the row — without you measuring a single seat.\n\nYou point; flexbox arranges.",
    comparison: [
      { item: "Flex container", meaning: "The **theater row** — the flex container." },
      { item: "Flex items", meaning: "The **people** being seated — the flex items." }
    ]
  },
  syntaxStructure: `.row {
  display: flex;
}`,
  codeExample: `.row {
  display: flex;
  gap: 16px;
}

.row > div {
  background: #e0f2fe;
  padding: 20px;
  border-radius: 8px;
}`,
  codeAnnotations: [
    { lineOrToken: "display: flex;", description: "Turns .row into a flex container." },
    { lineOrToken: "gap: 16px;", description: "Even 16px spacing between items — no margin math." }
  ],
  commonMistakes: [
    { wrong: "Applying justify-content to the items instead of the container", correct: "Put justify-content and align-items on the flex container", reason: "**Container** properties control the items; items themselves use **flex-grow** and friends — know which side you are styling." }
  ],
  tryItYourself: {
    html: `<div class="row">\n  <div>One</div>\n  <div>Two</div>\n  <div>Three</div>\n</div>`,
    css: `.row {\n  display: flex;\n  gap: 16px;\n}\n.row > div {\n  background: #e0f2fe;\n  padding: 20px;\n}`,
    instructions: "Remove display: flex and watch the items stack vertically."
  },
  takeaways: [
    "**Flexbox** lays out items along one axis.",
    "**display: flex** goes on the container.",
    "**gap** spaces items without margin hacks."
  ],
  quizQuestions: [
    { id: "css-m7l1-q1", question: "What does display: flex create?", options: ["A flex container whose children become flex items", "A grid", "A hidden element", "A table"], correctAnswerIndex: 0, explanation: "The container's **direct children** become flex items — grandchildren are not invited." },
    { id: "css-m7l1-q2", question: "Is flexbox one-dimensional or two-dimensional?", options: ["One-dimensional (a row or column)", "Two-dimensional", "Three-dimensional", "Zero-dimensional"], correctAnswerIndex: 0, explanation: "**Flexbox** works along a single main axis — one direction at a time." }
  ]
};

// LESSON: Flex Container
export const cssFlexContainerContent: LessonContent = {
  heroTagline: "The parent that controls the layout",
  introduction: "The **flex container** is the parent with **display: flex** — the boss of every flex layout.\n\nIts properties — **direction**, **alignment**, **wrapping** — command how all its children behave. Get the container right, and the items mostly arrange themselves.",
  definition: {
    term: "Flex container",
    explanation: "The **flex container** is the parent element with **display: flex** (or inline-flex) that establishes the flex layout context. Its properties command how all its children behave."
  },
  whyItMatters: "Every flex layout starts here: **get the container right** and the items mostly arrange themselves.\n\nIt is the control tower — all alignment orders flow from this one element.",
  realWorldAnalogy: {
    title: "The orchestra conductor",
    story: "The **flex container** is the orchestra conductor: the musicians (**items**) play, but the conductor sets the tempo, the spacing, and the arrangement.\n\nThe container commands; the items perform.",
    comparison: [
      { item: "Container", meaning: "The **conductor** giving directions — the container's properties." },
      { item: "Items", meaning: "**Musicians** following the arrangement — the flex items." }
    ]
  },
  syntaxStructure: `.container {
  display: flex;
}`,
  codeExample: `.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}`,
  codeAnnotations: [
    { lineOrToken: "display: flex;", description: "Establishes the flex formatting context." },
    { lineOrToken: "align-items: center;", description: "Vertically centers all items in the toolbar." }
  ],
  commonMistakes: [
    { wrong: "display: flex on each item instead of the parent", correct: "display: flex on the parent container", reason: "Only the container's **display** value creates flex items from its children — the magic starts at the parent." }
  ],
  tryItYourself: {
    html: `<div class="toolbar">\n  <button>Save</button>\n  <button>Cancel</button>\n</div>`,
    css: `.toolbar {\n  display: flex;\n  gap: 12px;\n}`,
    instructions: "Change flex to inline-flex and notice the container shrink-wraps."
  },
  takeaways: [
    "The **container** holds display: flex.",
    "**Container properties** direct the items.",
    "Children automatically become **flex items**."
  ],
  quizQuestions: [
    { id: "css-m7l2-q1", question: "Where does display: flex go?", options: ["On the parent container", "On each child", "On the body only", "On images only"], correctAnswerIndex: 0, explanation: "The **parent** becomes the flex container — you set display: flex on the parent, not the children." },
    { id: "css-m7l2-q2", question: "What are a flex container's children called?", options: ["Flex items", "Flex parents", "Flex roots", "Flex ghosts"], correctAnswerIndex: 0, explanation: "**Direct children** of the container automatically become flex items — no extra classes needed." }
  ]
};

// LESSON: Flex Direction
export const cssFlexDirectionContent: LessonContent = {
  heroTagline: "Row or column — you choose the axis",
  introduction: "**flex-direction** sets the main axis — the direction items flow:\n\n- **row** — left to right (the default)\n- **row-reverse** — right to left\n- **column** — top to bottom\n- **column-reverse** — bottom to top\n\nOne property flips a navbar from horizontal to vertical.",
  definition: {
    term: "flex-direction",
    explanation: "**flex-direction** sets the **main axis**: **row** (left to right, the default), **row-reverse**, **column** (top to bottom), or **column-reverse**. It decides whether items line up horizontally or vertically."
  },
  whyItMatters: "One property flips a **navbar** from horizontal to vertical.\n\nThat single-line switch is the core of responsive layout — desktop row becomes mobile column.",
  realWorldAnalogy: {
    title: "Books on a shelf versus in a tower",
    story: "**flex-direction** is like arranging books: **row** lays them side by side on a shelf; **column** stacks them in a tower.\n\nSame books, two completely different arrangements.",
    comparison: [
      { item: "row", meaning: "**Books side by side** on a shelf — horizontal flow." },
      { item: "column", meaning: "**Books stacked** in a tower — vertical flow." }
    ]
  },
  syntaxStructure: `.stack {
  display: flex;
  flex-direction: column;
}`,
  codeExample: `.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (min-width: 768px) {
  .stack {
    flex-direction: row;
  }
}`,
  codeAnnotations: [
    { lineOrToken: "flex-direction: column;", description: "Stacks items vertically on small screens." },
    { lineOrToken: "flex-direction: row;", description: "Switches to horizontal on wider screens." }
  ],
  commonMistakes: [
    { wrong: "flex-direction: vertical;", correct: "flex-direction: column;", reason: "**'vertical'** is not a valid value — the keyword you want is **column**." }
  ],
  tryItYourself: {
    html: `<div class="stack">\n  <div>A</div>\n  <div>B</div>\n  <div>C</div>\n</div>`,
    css: `.stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.stack > div {\n  background: #ede9fe;\n  padding: 16px;\n}`,
    instructions: "Change column to row and watch the stack become a row."
  },
  takeaways: [
    "**row** is horizontal (default); **column** is vertical.",
    "**Reverse** values flip the order.",
    "**Direction** defines the main axis."
  ],
  quizQuestions: [
    { id: "css-m7l3-q1", question: "What is the default flex-direction?", options: ["row", "column", "row-reverse", "none"], correctAnswerIndex: 0, explanation: "**Flex items** line up horizontally by default — row is the starting assumption." },
    { id: "css-m7l3-q2", question: "Which value stacks items vertically?", options: ["column", "row", "wrap", "stack"], correctAnswerIndex: 0, explanation: "**column** runs the main axis top to bottom — items stack vertically." }
  ]
};

// LESSON: Justify Content
export const cssJustifyContentContent: LessonContent = {
  heroTagline: "Spread items along the main axis",
  introduction: "**justify-content** aligns flex items along the **main axis** — the secret behind navbars that push the logo left and the links right.\n\nThe all-stars:\n\n- **center** — everything huddles in the middle\n- **space-between** — first item at the start, last at the end\n- **space-evenly** — equal gaps everywhere",
  definition: {
    term: "justify-content",
    explanation: "**justify-content** aligns flex items along the **main axis**: **flex-start**, **center**, **flex-end**, **space-between**, **space-around**, or **space-evenly**."
  },
  whyItMatters: "**Centering** a row of buttons or spacing navbar ends apart — both are a single **justify-content** value.\n\nIt is the property behind nearly every polished header you have ever admired.",
  realWorldAnalogy: {
    title: "Parking cars in a row",
    story: "**justify-content** is like arranging cars in a parking lot row: pack them **left**, center them, or spread them **evenly** across all spaces.\n\nSame cars, totally different parking.",
    comparison: [
      { item: "space-between", meaning: "**First car** at the start, last at the end, rest spread evenly." },
      { item: "center", meaning: "All cars **clustered** in the middle of the row." }
    ]
  },
  syntaxStructure: `.nav {
  display: flex;
  justify-content: space-between;
}`,
  codeExample: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #0f172a;
  color: white;
}`,
  codeAnnotations: [
    { lineOrToken: "justify-content: space-between;", description: "Pushes first and last items to opposite ends." },
    { lineOrToken: "align-items: center;", description: "Vertically centers items (cross axis)." }
  ],
  commonMistakes: [
    { wrong: "justify-content with no effect because the container has no extra space", correct: "Give the container full width", reason: "**Distribution** needs free space — a shrink-wrapped container has none to distribute, so nothing appears to happen." }
  ],
  tryItYourself: {
    html: `<div class="nav">\n  <span>Logo</span>\n  <span>Links</span>\n</div>`,
    css: `.nav {\n  display: flex;\n  justify-content: space-between;\n  background: #0f172a;\n  color: white;\n  padding: 16px;\n}`,
    instructions: "Change space-between to center and watch both items cluster."
  },
  takeaways: [
    "**justify-content** works on the main axis.",
    "**space-between** pushes ends apart.",
    "It needs **free space** in the container to show effect."
  ],
  quizQuestions: [
    { id: "css-m7l4-q1", question: "Which value pushes the first item left and last item right?", options: ["space-between", "center", "flex-start", "stretch"], correctAnswerIndex: 0, explanation: "**space-between** pins the ends and spreads the rest — the classic navbar move." },
    { id: "css-m7l4-q2", question: "Which axis does justify-content control?", options: ["The main axis", "The cross axis", "The z-axis", "No axis"], correctAnswerIndex: 0, explanation: "**justify-content** distributes along the main axis — the direction items flow." }
  ]
};

// LESSON: Align Items
export const cssAlignItemsContent: LessonContent = {
  heroTagline: "Line items up on the cross axis",
  introduction: "**align-items** aligns flex items along the **cross axis** — vertical, when your flex direction is a row.\n\nIt is the secret behind perfectly centered icons next to text — and the legendary one-line fix for vertical centering, the historically hardest problem in CSS.",
  definition: {
    term: "align-items",
    explanation: "**align-items** aligns flex items along the **cross axis** (vertical in a row): **stretch** (default), **center**, **flex-start**, or **flex-end**."
  },
  whyItMatters: "**Vertically centering** content — the historically hard CSS problem that broke many spirits — is one line with **align-items: center**.\n\nWhat once took hacks and tears now takes five words.",
  realWorldAnalogy: {
    title: "Students against height marks",
    story: "**align-items** is like lining up students against height marks on a wall: everyone stands against the same line — **center**, top, or bottom.\n\nOne line, everyone aligned.",
    comparison: [
      { item: "center", meaning: "**Everyone's middle** at the same line — perfectly centered." },
      { item: "stretch", meaning: "**Everyone stretches** to fill the full height — the default." }
    ]
  },
  syntaxStructure: `.row {
  display: flex;
  align-items: center;
}`,
  codeExample: `.profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #8b5cf6;
}`,
  codeAnnotations: [
    { lineOrToken: "align-items: center;", description: "Vertically centers avatar with the text." },
    { lineOrToken: "display: flex;", description: "Row direction, so the cross axis is vertical." }
  ],
  commonMistakes: [
    { wrong: "align-items: center; with no visible effect in a column layout", correct: "Remember the cross axis flips with direction", reason: "In a **column** layout, the cross axis is horizontal — so center aligns things sideways, not vertically." }
  ],
  tryItYourself: {
    html: `<div class="profile">\n  <div class="avatar"></div>\n  <div>Jane<br>Designer</div>\n</div>`,
    css: `.profile {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #8b5cf6;\n}`,
    instructions: "Change center to flex-start and watch the text jump to the top."
  },
  takeaways: [
    "**align-items** works on the cross axis.",
    "**center** vertically centers items in a row.",
    "**stretch** (default) fills the cross size."
  ],
  quizQuestions: [
    { id: "css-m7l5-q1", question: "In a row container, which axis does align-items control?", options: ["Vertical (cross axis)", "Horizontal", "Diagonal", "Depth"], correctAnswerIndex: 0, explanation: "The **cross axis** runs perpendicular to the main axis — across the flow, not along it." },
    { id: "css-m7l5-q2", question: "What is the default align-items value?", options: ["stretch", "center", "flex-start", "baseline"], correctAnswerIndex: 0, explanation: "Items **stretch** to fill the cross size by default — that is why flex children often look full-height." }
  ]
};

// LESSON: Align Content
export const cssAlignContentContent: LessonContent = {
  heroTagline: "Align whole rows, not just items",
  introduction: "**align-content** distributes the rows themselves along the cross axis — but only when flex items wrap onto multiple lines.\n\nWith a single row it does absolutely nothing. It needs wrapped lines to have something to work on — no lines, no job.",
  definition: {
    term: "align-content",
    explanation: "**align-content** distributes the wrapped **rows** themselves along the **cross axis** — but only when flex items wrap onto multiple lines. With a single row, it does nothing."
  },
  whyItMatters: "Multi-row grids of cards with **vertical centering** or even row spacing need align-content, not align-items.\n\nPick the wrong one and your rows will stubbornly refuse to budge.",
  realWorldAnalogy: {
    title: "Arranging shelves on a wall",
    story: "**align-content** is like arranging shelves on a wall: **align-items** arranges books on one shelf, while **align-content** arranges the shelves themselves.\n\nBooks versus shelves — know which one you are moving.",
    comparison: [
      { item: "align-items", meaning: "**Arranging books** on a single shelf — aligning items." },
      { item: "align-content", meaning: "**Arranging the shelves** on the wall — aligning whole lines." }
    ]
  },
  syntaxStructure: `.grid {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}`,
  codeExample: `.grid {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 400px;
  gap: 12px;
}`,
  codeAnnotations: [
    { lineOrToken: "flex-wrap: wrap;", description: "Creates multiple lines for align-content to distribute." },
    { lineOrToken: "align-content: space-between;", description: "Spreads the rows across the 400px height." }
  ],
  commonMistakes: [
    { wrong: "align-content with no effect on a single row", correct: "It only works with wrapped multi-line flex", reason: "With one line there are no 'lines' to distribute — use **align-items** instead." }
  ],
  tryItYourself: {
    html: `<div class="grid">\n  <div>1</div><div>2</div><div>3</div>\n  <div>4</div><div>5</div><div>6</div>\n</div>`,
    css: `.grid {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  height: 300px;\n  gap: 12px;\n  background: #f1f5f9;\n}\n.grid > div {\n  width: 80px;\n  background: #bfdbfe;\n  padding: 16px;\n}`,
    instructions: "Change center to flex-start and watch the rows jump to the top."
  },
  takeaways: [
    "**align-content** aligns wrapped lines, not items.",
    "It needs **flex-wrap: wrap** and multiple lines.",
    "For single rows, use **align-items**."
  ],
  quizQuestions: [
    { id: "css-m7l6-q1", question: "When does align-content have an effect?", options: ["With wrapped multi-line flex containers", "Always", "Only with grid", "Never"], correctAnswerIndex: 0, explanation: "It distributes **flex lines**, so wrapping must create multiple lines first — otherwise there is nothing to distribute." },
    { id: "css-m7l6-q2", question: "What is the difference between align-items and align-content?", options: ["align-items aligns items; align-content aligns wrapped lines", "They are identical", "align-content is for text", "align-items is deprecated"], correctAnswerIndex: 0, explanation: "**Items** versus **lines** — different targets, different properties. Do not confuse them." }
  ]
};

// LESSON: Flex Wrap
export const cssFlexWrapContent: LessonContent = {
  heroTagline: "Let items flow onto new lines",
  introduction: "**flex-wrap** controls whether flex items stay on one line or flow onto several:\n\n- **nowrap** (default) — everything on one line, even if it overflows\n- **wrap** — items flow onto new lines as needed\n\nWrapping is what makes flex rows genuinely responsive.",
  definition: {
    term: "flex-wrap",
    explanation: "**flex-wrap** controls whether flex items stay on one line (**nowrap**, the default) or wrap onto multiple lines (**wrap**)."
  },
  whyItMatters: "Without **wrap**, items shrink or overflow on small screens — a broken mobile layout.\n\nWith **wrap**, card grids reflow gracefully. One word, and your layout survives every screen size.",
  realWorldAnalogy: {
    title: "Words flowing in a paragraph",
    story: "**flex-wrap** is like text in a paragraph: **nowrap** forces one endless line off the edge of the page, while **wrap** lets words flow naturally onto new lines.\n\nLet it flow.",
    comparison: [
      { item: "nowrap", meaning: "**One endless line**, overflowing off the page." },
      { item: "wrap", meaning: "**Words flowing** naturally onto new lines." }
    ]
  },
  syntaxStructure: `.cards {
  display: flex;
  flex-wrap: wrap;
}`,
  codeExample: `.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.cards > article {
  flex: 1 1 250px;
}`,
  codeAnnotations: [
    { lineOrToken: "flex-wrap: wrap;", description: "Items move to new lines when space runs out." },
    { lineOrToken: "flex: 1 1 250px;", description: "Each card wants 250px, growing and shrinking as needed." }
  ],
  commonMistakes: [
    { wrong: "Forgetting flex-wrap and wondering why cards overflow on mobile", correct: "Add flex-wrap: wrap to the container", reason: "**nowrap** is the default — wrapping must be enabled explicitly, or items will overflow on small screens." }
  ],
  tryItYourself: {
    html: `<div class="cards">\n  <article>A</article><article>B</article><article>C</article>\n</div>`,
    css: `.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.cards > article {\n  flex: 1 1 200px;\n  background: #fef3c7;\n  padding: 20px;\n}`,
    instructions: "Change wrap to nowrap and watch the cards squeeze onto one line."
  },
  takeaways: [
    "**nowrap** is the default — one line.",
    "**wrap** lets items flow onto new lines.",
    "Wrapping makes flex layouts **responsive**."
  ],
  quizQuestions: [
    { id: "css-m7l7-q1", question: "What is the default flex-wrap value?", options: ["nowrap", "wrap", "wrap-reverse", "auto"], correctAnswerIndex: 0, explanation: "**Flex items** stay on one line unless wrap is set — nowrap is the stubborn default." },
    { id: "css-m7l7-q2", question: "Why enable flex-wrap?", options: ["So items reflow onto new lines on small screens", "To hide items", "To rotate items", "To change colors"], correctAnswerIndex: 0, explanation: "**Wrapping** prevents overflow and enables responsive grids that reflow gracefully." }
  ]
};

// LESSON: Gap
export const cssGapContent: LessonContent = {
  heroTagline: "Clean spacing between items — no margin math",
  introduction: "**gap** sets the space between flex and grid items — and it is beautifully simple.\n\nUnlike margins, it adds space **only between** items, never at the container's outer edges. Two values set row and column gaps separately: **gap: 16px 24px**.",
  definition: {
    term: "gap",
    explanation: "**gap** sets the space **between** flex (and grid) items — between rows and columns. Unlike margins, it never adds space at the container's outer edges."
  },
  whyItMatters: "**gap** replaced fragile margin tricks — and the dreaded last-item extra margin — with one clean property.\n\nSpacing that used to need hacks and negative margins now takes a single line.",
  realWorldAnalogy: {
    title: "Grout between bathroom tiles",
    story: "**gap** is like the grout between bathroom tiles: even spacing between every tile — with none smeared on the outer wall edges.\n\nClean gaps, clean edges.",
    comparison: [
      { item: "gap: 16px", meaning: "**Even grout lines** between every tile — gap: 16px." },
      { item: "margins", meaning: "**Hand-placing spacers** that also push against the walls — the old margin way." }
    ]
  },
  syntaxStructure: `.row {
  display: flex;
  gap: 16px;
}`,
  codeExample: `.row {
  display: flex;
  gap: 16px;
}

.tight {
  display: flex;
  gap: 8px 24px; /* row gap, column gap */
}`,
  codeAnnotations: [
    { lineOrToken: "gap: 16px;", description: "16px between every item, none at the edges." },
    { lineOrToken: "gap: 8px 24px;", description: "8px row gap, 24px column gap." }
  ],
  commonMistakes: [
    { wrong: "Using margins on items and fighting double spacing", correct: "Use gap on the container instead", reason: "**gap** applies only between items — no edge spacing, no margin collapsing. Clean by design." }
  ],
  tryItYourself: {
    html: `<div class="row">\n  <div>One</div>\n  <div>Two</div>\n  <div>Three</div>\n</div>`,
    css: `.row {\n  display: flex;\n  gap: 16px;\n}\n.row > div {\n  background: #dcfce7;\n  padding: 16px;\n}`,
    instructions: "Change 16px to 40px and watch only the between-item space grow."
  },
  takeaways: [
    "**gap** spaces items without edge spacing.",
    "Two values set **row** and **column** gaps.",
    "Works in **flexbox** and **grid**."
  ],
  quizQuestions: [
    { id: "css-m7l8-q1", question: "Where does gap add space?", options: ["Only between items", "Around the container edges too", "Only on the left", "Inside each item"], correctAnswerIndex: 0, explanation: "**gap** never adds space at the container's outer edges — only between items." },
    { id: "css-m7l8-q2", question: "In gap: 8px 24px, what is 24px?", options: ["The column gap", "The row gap", "The padding", "The margin"], correctAnswerIndex: 0, explanation: "The **first** value is the row gap, the **second** is the column gap." }
  ]
};

// LESSON: Flex Grow
export const cssFlexGrowContent: LessonContent = {
  heroTagline: "Let items soak up leftover space",
  introduction: "**flex-grow** decides how a flex item expands to fill free space — the pizza-sharing rule of flexbox.\n\n**0** means no growth (default). **1** takes one share of leftovers. **2** takes twice as much as 1. The classic use: a search input with **flex-grow: 1** stretches while the buttons stay fixed.",
  definition: {
    term: "flex-grow",
    explanation: "**flex-grow** decides how a flex item **expands** to fill free space. **0** means no growth; higher numbers claim proportionally more of the leftover space."
  },
  whyItMatters: "A **search input** that stretches while buttons stay fixed — that is flex-grow: 1 on the input.\n\nIt is the difference between rigid layouts and interfaces that breathe.",
  realWorldAnalogy: {
    title: "Dividing leftover pizza",
    story: "**flex-grow** is like dividing leftover pizza: **grow: 2** takes twice as many slices as **grow: 1**, and **grow: 0** politely takes none.\n\nThe hungriest number eats the most.",
    comparison: [
      { item: "flex-grow: 1", meaning: "**One share** of the leftover pizza." },
      { item: "flex-grow: 2", meaning: "**Two shares** — twice as much pizza." }
    ]
  },
  syntaxStructure: `.main {
  flex-grow: 1;
}`,
  codeExample: `.searchbar {
  display: flex;
  gap: 8px;
}

.searchbar input {
  flex-grow: 1;
}

.searchbar button {
  flex-grow: 0;
}`,
  codeAnnotations: [
    { lineOrToken: "flex-grow: 1;", description: "Input stretches to fill all free space." },
    { lineOrToken: "flex-grow: 0;", description: "Button keeps its natural size." }
  ],
  commonMistakes: [
    { wrong: "flex-grow with no free space expecting growth", correct: "Growth only shares leftover space", reason: "If the container is **exactly full**, there is no leftover space to distribute — grow does nothing." }
  ],
  tryItYourself: {
    html: `<div class="bar">\n  <input placeholder="Search">\n  <button>Go</button>\n</div>`,
    css: `.bar {\n  display: flex;\n  gap: 8px;\n}\n.bar input {\n  flex-grow: 1;\n}`,
    instructions: "Change 1 to 3 — with one growing item the change is subtle; add a second input to compare shares."
  },
  takeaways: [
    "**flex-grow** distributes leftover space.",
    "**0** = no growth; higher = bigger share.",
    "Ratios are **relative** between siblings."
  ],
  quizQuestions: [
    { id: "css-m7l9-q1", question: "Two items have flex-grow 1 and 2. How is free space split?", options: ["One-third and two-thirds", "Half and half", "All to the first", "It is random"], correctAnswerIndex: 0, explanation: "Shares are **proportional**: grow 1 takes 1 of 3 parts, grow 2 takes 2 of 3. Simple fractions." },
    { id: "css-m7l9-q2", question: "What does flex-grow: 0 mean?", options: ["The item does not grow", "The item disappears", "The item shrinks to zero", "The item doubles"], correctAnswerIndex: 0, explanation: "**0** opts the item out of growing entirely — it keeps its size, no matter the leftovers." }
  ]
};

// LESSON: Flex Shrink
export const cssFlexShrinkContent: LessonContent = {
  heroTagline: "Decide who squeezes when space runs out",
  introduction: "**flex-shrink** decides how a flex item behaves when space gets tight:\n\n- **1** (default) — squeezes proportionally with siblings\n- **0** — refuses to shrink, keeps its size\n\nUse 0 to protect fixed-size **icons**, **logos**, and **buttons** from being squished on narrow screens.",
  definition: {
    term: "flex-shrink",
    explanation: "**flex-shrink** decides how a flex item **shrinks** when the container is too small. **1** (default) shrinks proportionally; **0** refuses to shrink."
  },
  whyItMatters: "It stops important elements — your **logo**, your **icons** — from being squished into unrecognizable blobs when the screen narrows.\n\nShrink is the bodyguard of your fixed-size elements.",
  realWorldAnalogy: {
    title: "A crowded elevator",
    story: "**flex-shrink** is like a crowded elevator: **shrink: 1** passengers squeeze together politely, while **shrink: 0** is the person with a rigid suitcase who will not budge.\n\nSomeone has to give — unless they refuse.",
    comparison: [
      { item: "flex-shrink: 1", meaning: "**Passengers** who squeeze together — flexible items." },
      { item: "flex-shrink: 0", meaning: "The **rigid suitcase** — never compresses, never budges." }
    ]
  },
  syntaxStructure: `.icon {
  flex-shrink: 0;
}`,
  codeExample: `.row {
  display: flex;
  gap: 12px;
}

.row .icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.row .text {
  flex-shrink: 1;
}`,
  codeAnnotations: [
    { lineOrToken: "flex-shrink: 0;", description: "Icon keeps its 40px size no matter what." },
    { lineOrToken: "flex-shrink: 1;", description: "Text area absorbs all the squeezing." }
  ],
  commonMistakes: [
    { wrong: "Images squished in a tight flex row", correct: "flex-shrink: 0 on the image", reason: "The default **shrink: 1** lets images compress below their natural size — set 0 to protect them." }
  ],
  tryItYourself: {
    html: `<div class="row">\n  <div class="icon"></div>\n  <div class="text">Some longer text here</div>\n</div>`,
    css: `.row {\n  display: flex;\n  gap: 12px;\n  width: 220px;\n}\n.icon {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  background: #f472b6;\n}\n.text {\n  background: #fce7f3;\n  padding: 8px;\n}`,
    instructions: "Change the icon's flex-shrink to 1 and watch it squish."
  },
  takeaways: [
    "**flex-shrink** controls squeezing under pressure.",
    "Default is **1** — items shrink proportionally.",
    "**0** protects fixed-size elements."
  ],
  quizQuestions: [
    { id: "css-m7l10-q1", question: "What does flex-shrink: 0 do?", options: ["Prevents the item from shrinking", "Hides the item", "Doubles its size", "Centers it"], correctAnswerIndex: 0, explanation: "**0** opts out of shrinking entirely — the item keeps its size under any pressure." },
    { id: "css-m7l10-q2", question: "What is the default flex-shrink?", options: ["1", "0", "auto", "2"], correctAnswerIndex: 0, explanation: "Items **shrink proportionally** by default — everyone squeezes together fairly." }
  ]
};

// LESSON: Flex Basis
export const cssFlexBasisContent: LessonContent = {
  heroTagline: "The starting size before growing or shrinking",
  introduction: "**flex-basis** sets a flex item's initial main-axis size — its starting point before grow and shrink start negotiating.\n\nIt is how you say: 'cards should start at **250px**, then grow or shrink from there.' The classic recipe: **flex: 1 1 250px** — grow, shrink, basis.",
  definition: {
    term: "flex-basis",
    explanation: "**flex-basis** sets a flex item's **initial main-axis size** — its starting point before **grow** and **shrink** kick in. Think of it as the item's preferred size."
  },
  whyItMatters: "It is the key to **responsive flex grids**: start every card at a sensible size, then let grow and shrink handle the rest.\n\nBasis is where the negotiation begins.",
  realWorldAnalogy: {
    title: "The opening bid at an auction",
    story: "**flex-basis** is like a starting bid at an auction: **grow** and **shrink** negotiate the final price up or down from there.\n\nEverything starts from the opening bid.",
    comparison: [
      { item: "flex-basis: 250px", meaning: "The **opening bid** — the item's starting size." },
      { item: "grow/shrink", meaning: "**Bidding** that adjusts the final price up or down." }
    ]
  },
  syntaxStructure: `.card {
  flex-basis: 250px;
}`,
  codeExample: `.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.cards > article {
  flex: 1 1 250px;
  background: #fff7ed;
  padding: 20px;
}`,
  codeAnnotations: [
    { lineOrToken: "flex: 1 1 250px;", description: "Shorthand: grow 1, shrink 1, basis 250px." },
    { lineOrToken: "250px", description: "Each card starts at 250px wide." }
  ],
  commonMistakes: [
    { wrong: "flex-basis: 250px; plus width: 250px; redundantly", correct: "Use flex-basis alone in flex layouts", reason: "Inside a **flex container**, flex-basis overrides width for the main axis — basis wins the argument." }
  ],
  tryItYourself: {
    html: `<div class="cards">\n  <article>A</article>\n  <article>B</article>\n</div>`,
    css: `.cards {\n  display: flex;\n  gap: 16px;\n}\n.cards > article {\n  flex: 1 1 250px;\n  background: #fff7ed;\n  padding: 20px;\n}`,
    instructions: "Change 250px to 100px and watch the cards' starting size shrink."
  },
  takeaways: [
    "**flex-basis** is the item's starting main-axis size.",
    "**Grow** and **shrink** adjust from the basis.",
    "**flex: 1 1 250px** is the classic responsive card recipe."
  ],
  quizQuestions: [
    { id: "css-m7l11-q1", question: "What does flex-basis set?", options: ["The item's initial main-axis size", "The container's height", "The font size", "The border color"], correctAnswerIndex: 0, explanation: "**Basis** is the starting size — the size before growing or shrinking enters the picture." },
    { id: "css-m7l11-q2", question: "In flex: 1 1 250px, what is 250px?", options: ["flex-basis", "flex-grow", "flex-shrink", "gap"], correctAnswerIndex: 0, explanation: "The **shorthand** order is grow, shrink, basis — flex: 1 1 250px. Memorize the order." }
  ]
};

// LESSON: Building Layouts with Flexbox
export const cssFlexboxLayoutsContent: LessonContent = {
  heroTagline: "Put it all together: real page layouts",
  introduction: "Time for the payoff: real layouts built by combining every flexbox technique.\n\nThe greatest hits:\n\n- **Sticky footer** — column body, growing main area, footer pinned to the bottom\n- **Centered hero** — justify-content + align-items, both centered\n- **Navbar** — space-between pushing logo and links apart",
  definition: {
    term: "Flexbox layouts",
    explanation: "Real **flexbox layouts** combine everything you have learned: container properties, item properties, direction, alignment, and grow — assembled into complete page structures."
  },
  whyItMatters: "This is the **payoff**: navbars, heroes, card grids, sticky footers — the layouts behind most modern websites.\n\nEverything you learned about flexbox was building toward this moment.",
  realWorldAnalogy: {
    title: "Stacking LEGO bricks",
    story: "Building with **flexbox** is like stacking LEGO: each small technique — centering, spacing, growing — is a brick, and real layouts are what you build from them.\n\nMaster the bricks, build anything.",
    comparison: [
      { item: "Centering hero", meaning: "**Centering hero** — the justify-content + align-items bricks." },
      { item: "Sticky footer", meaning: "**Sticky footer** — the column direction + flex-grow bricks." }
    ]
  },
  syntaxStructure: `body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main { flex-grow: 1; }`,
  codeExample: `body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

main {
  flex-grow: 1;
}`,
  codeAnnotations: [
    { lineOrToken: "min-height: 100vh;", description: "Body is at least as tall as the screen." },
    { lineOrToken: "flex-grow: 1;", description: "Main soaks up space, pushing the footer down." }
  ],
  commonMistakes: [
    { wrong: "Sticky footer failing because body has no min-height", correct: "min-height: 100vh on the flex column body", reason: "Without **full viewport height** on the body, there is no extra space for main to absorb — the footer will not stick." }
  ],
  tryItYourself: {
    html: `<header>Header</header>\n<main>Content grows</main>\n<footer>Footer</footer>`,
    css: `body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  margin: 0;\n}\nmain {\n  flex-grow: 1;\n  background: #f1f5f9;\n  padding: 24px;\n}\nheader, footer {\n  background: #0f172a;\n  color: white;\n  padding: 16px;\n}`,
    instructions: "Remove flex-grow: 1 and watch the footer jump up."
  },
  takeaways: [
    "Combine **direction**, **alignment**, **grow**, and **gap** for full layouts.",
    "**Column** body + growing main = sticky footer.",
    "Center heroes with **justify + align** center."
  ],
  quizQuestions: [
    { id: "css-m7l12-q1", question: "What makes the sticky-footer pattern work?", options: ["Column flex body with a growing main", "Absolute positioning", "Floats", "Tables"], correctAnswerIndex: 0, explanation: "**main's flex-grow: 1** absorbs all extra space, pushing the footer to the bottom — the sticky footer trick." },
    { id: "css-m7l12-q2", question: "How do you center content both ways in flexbox?", options: ["justify-content: center + align-items: center", "text-align: center only", "margin: auto on body", "float: center"], correctAnswerIndex: 0, explanation: "**justify-content** handles the main axis; **align-items** handles the cross axis. Both centered = perfectly centered." }
  ]
};

// ==============================
// MODULE 8: CSS Grid
// ==============================

// LESSON: Introduction to CSS Grid
export const cssGridIntroContent: LessonContent = {
  heroTagline: "Two-dimensional layouts: rows AND columns",
  introduction: "**CSS Grid** lays out items in rows and columns at the same time.\n\nWhere **flexbox** handles one direction, grid handles full page scaffolding — headers, sidebars, card matrices. They are complements, not rivals: **grid for 2D layouts, flexbox for 1D**.",
  definition: {
    term: "CSS Grid",
    explanation: "**CSS Grid** lays out items in **rows and columns at the same time** — a true two-dimensional layout system for full page scaffolding: headers, sidebars, and card matrices."
  },
  whyItMatters: "**Grid** is the tool for overall page structure and any true two-dimensional arrangement.\n\nIt turned complex magazine-style layouts from float nightmares into a few readable lines.",
  realWorldAnalogy: {
    title: "One shelf versus the whole bookcase",
    story: "**Flexbox** is a single bookshelf row; **grid** is the whole bookcase — with shelves AND columns of compartments.\n\nOne direction versus two.",
    comparison: [
      { item: "Flexbox", meaning: "**One row** of books — flexbox handles a single line." },
      { item: "Grid", meaning: "The **full bookcase** — grid handles rows and columns together." }
    ]
  },
  syntaxStructure: `.layout {
  display: grid;
}`,
  codeExample: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
  codeAnnotations: [
    { lineOrToken: "display: grid;", description: "Turns the element into a grid container." },
    { lineOrToken: "repeat(3, 1fr)", description: "Three equal columns sharing free space." }
  ],
  commonMistakes: [
    { wrong: "Using grid for a simple navbar row", correct: "Use flexbox for one-dimensional rows", reason: "**Grid** shines in two dimensions; **flexbox** is simpler for single rows — pick the right tool." }
  ],
  tryItYourself: {
    html: `<div class="gallery">\n  <div>1</div><div>2</div><div>3</div>\n</div>`,
    css: `.gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.gallery > div {\n  background: #e0e7ff;\n  padding: 24px;\n  text-align: center;\n}`,
    instructions: "Change 3 to 2 and watch the gallery reflow into two columns."
  },
  takeaways: [
    "**Grid** controls rows and columns together.",
    "**display: grid** goes on the container.",
    "Use **grid** for 2D layouts, **flexbox** for 1D."
  ],
  quizQuestions: [
    { id: "css-m8l1-q1", question: "What makes grid different from flexbox?", options: ["Grid is two-dimensional; flexbox is one-dimensional", "Grid is slower", "Flexbox is deprecated", "They are identical"], correctAnswerIndex: 0, explanation: "**Grid** manages rows and columns simultaneously — true two-dimensional layout." },
    { id: "css-m8l1-q2", question: "Which value creates a grid container?", options: ["display: grid;", "display: table;", "display: gridbox;", "display: matrix;"], correctAnswerIndex: 0, explanation: "**display: grid** establishes the grid context on the container." }
  ]
};

// LESSON: Grid Container
export const cssGridContainerContent: LessonContent = {
  heroTagline: "The parent that defines the grid",
  introduction: "The **grid container** is the parent with **display: grid** — the architect of every grid layout.\n\nIt defines the **columns**, **rows**, and **gaps**. Its direct children automatically become grid items and fall into the tracks. All grid power lives here.",
  definition: {
    term: "Grid container",
    explanation: "The **grid container** — the parent with **display: grid** — defines columns, rows, and gaps. Its direct children automatically become **grid items** placed into the tracks."
  },
  whyItMatters: "**All grid power** lives on the container: define the tracks once, and items fall into place.\n\nIt is the blueprint — draw it well and the building practically builds itself.",
  realWorldAnalogy: {
    title: "A muffin tin",
    story: "The **grid container** is a muffin tin: it defines the rows and columns of cups, and the batter (**items**) fills each cup.\n\nDefine the tin once; the batter knows where to go.",
    comparison: [
      { item: "Container", meaning: "The **muffin tin** with its cup layout — the container." },
      { item: "Items", meaning: "**Batter** poured into each cup — the grid items." }
    ]
  },
  syntaxStructure: `.container {
  display: grid;
  grid-template-columns: 200px 1fr;
}`,
  codeExample: `.page {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  min-height: 100vh;
}`,
  codeAnnotations: [
    { lineOrToken: "grid-template-columns: 220px 1fr;", description: "Fixed sidebar + flexible main area." },
    { lineOrToken: "grid-template-rows: auto 1fr auto;", description: "Header, growing content, footer." }
  ],
  commonMistakes: [
    { wrong: "display: grid on the items instead of the parent", correct: "display: grid on the parent container", reason: "Only the container's **display: grid** creates the grid — without it, the track properties do nothing." }
  ],
  tryItYourself: {
    html: `<div class="page">\n  <div>Sidebar</div>\n  <div>Main</div>\n</div>`,
    css: `.page {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 16px;\n}\n.page > div {\n  background: #f1f5f9;\n  padding: 20px;\n}`,
    instructions: "Change 220px to 120px and watch the sidebar narrow."
  },
  takeaways: [
    "The **container** defines columns, rows, and gaps.",
    "Direct children become **grid items**.",
    "**Container properties** do the heavy lifting."
  ],
  quizQuestions: [
    { id: "css-m8l2-q1", question: "Where does display: grid go?", options: ["On the parent container", "On each child", "On the html tag only", "On images"], correctAnswerIndex: 0, explanation: "The **parent** becomes the grid container — display: grid goes on the parent." },
    { id: "css-m8l2-q2", question: "What becomes a grid item?", options: ["Direct children of the container", "All descendants", "Only divs", "Only the first child"], correctAnswerIndex: 0, explanation: "**Direct children** are placed into the grid automatically — no extra markup needed." }
  ]
};

// LESSON: Grid Columns
export const cssGridColumnsContent: LessonContent = {
  heroTagline: "Define your vertical tracks",
  introduction: "**grid-template-columns** defines your columns — and introduces the beloved **fr** unit:\n\n- **200px** — fixed width, no negotiation\n- **1fr** — one share of the free space\n- **repeat(3, 1fr)** — three equal columns, no repetition\n\n**1fr 2fr** makes the second column twice as wide as the first. Pizza math, but for layouts.",
  definition: {
    term: "grid-template-columns",
    explanation: "**grid-template-columns** defines the columns: fixed **px**, flexible **fr** units, or **repeat()** patterns. **1fr** means one share of free space — 1fr 2fr makes the second column twice as wide."
  },
  whyItMatters: "**Column definitions** are the skeleton of every grid layout.\n\nSidebars, galleries, dashboards — they all start with this one property.",
  realWorldAnalogy: {
    title: "Splitting a pizza fairly",
    story: "**fr units** are like splitting a pizza: **1fr 2fr** gives one person a single-slice share and the other a double share of whatever is left.\n\nFixed slices are cut first; fr shares divide the rest.",
    comparison: [
      { item: "1fr", meaning: "**One share** of the leftover space." },
      { item: "200px", meaning: "A **fixed-size slice**, cut before sharing begins." }
    ]
  },
  syntaxStructure: `.grid {
  grid-template-columns: 1fr 1fr 1fr;
}`,
  codeExample: `.layout {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  gap: 16px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}`,
  codeAnnotations: [
    { lineOrToken: "200px 1fr 1fr", description: "Fixed 200px column plus two equal flexible columns." },
    { lineOrToken: "repeat(4, 1fr)", description: "Shorthand for four equal columns." }
  ],
  commonMistakes: [
    { wrong: "grid-template-columns: 1fr 1fr 1fr 1fr; written longhand", correct: "grid-template-columns: repeat(4, 1fr);", reason: "**repeat()** keeps long column definitions short and readable — use it for repeated patterns." }
  ],
  tryItYourself: {
    html: `<div class="layout">\n  <div>A</div><div>B</div><div>C</div>\n</div>`,
    css: `.layout {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 16px;\n}\n.layout > div {\n  background: #ddd6fe;\n  padding: 20px;\n}`,
    instructions: "Change 1fr 2fr 1fr to three equal 1fr columns."
  },
  takeaways: [
    "**fr** units share free space proportionally.",
    "Mix **px** and **fr** for fixed + flexible columns.",
    "**repeat()** shortens repeated patterns."
  ],
  quizQuestions: [
    { id: "css-m8l3-q1", question: "In 1fr 2fr, how wide is the second column vs the first?", options: ["Twice as wide", "Half as wide", "Equal", "Three times"], correctAnswerIndex: 0, explanation: "**fr** shares are proportional: 2fr gets double the free space of 1fr." },
    { id: "css-m8l3-q2", question: "What does repeat(3, 1fr) mean?", options: ["Three equal flexible columns", "Repeat 3 pixels", "Three rows", "A 3px border"], correctAnswerIndex: 0, explanation: "**repeat()** duplicates a track pattern — write it once, repeat it many times." }
  ]
};

// LESSON: Grid Rows
export const cssGridRowsContent: LessonContent = {
  heroTagline: "Define your horizontal tracks",
  introduction: "**grid-template-rows** defines your row heights with three flavors:\n\n- **auto** — sized to fit the content\n- **px** — exact fixed heights\n- **1fr** — shares leftover vertical space\n\nThe classic page skeleton? **auto 1fr auto** — header, content, footer.",
  definition: {
    term: "grid-template-rows",
    explanation: "**grid-template-rows** defines row heights: **auto** sizes to content, **px** fixes heights, and **1fr** shares leftover vertical space. Rows you do not define are created automatically."
  },
  whyItMatters: "**Page scaffolding** — header, content, footer rows — is built with grid-template-rows.\n\nIt is how full-page structures get their bones.",
  realWorldAnalogy: {
    title: "Setting shelf heights",
    story: "**grid-template-rows** is like setting shelf heights in a bookcase: **auto** shelves fit their books, **fixed** shelves are exact, **fr** shelves share the leftover wall space.\n\nEvery shelf gets the height it deserves.",
    comparison: [
      { item: "auto", meaning: "**Shelf sized** to its books — auto." },
      { item: "1fr", meaning: "**Shelf taking** a share of leftover wall — 1fr." }
    ]
  },
  syntaxStructure: `.page {
  grid-template-rows: auto 1fr auto;
}`,
  codeExample: `.page {
  display: grid;
  grid-template-rows: 64px 1fr 48px;
  min-height: 100vh;
}`,
  codeAnnotations: [
    { lineOrToken: "64px 1fr 48px", description: "Fixed header, growing content, fixed footer." },
    { lineOrToken: "min-height: 100vh;", description: "Ensures there is vertical space to distribute." }
  ],
  commonMistakes: [
    { wrong: "grid-template-rows: 1fr; with no height on the container", correct: "Give the container a height like 100vh", reason: "**fr rows** need free vertical space — without a container height, there is nothing to share." }
  ],
  tryItYourself: {
    html: `<div class="page">\n  <header>H</header>\n  <main>M</main>\n  <footer>F</footer>\n</div>`,
    css: `.page {\n  display: grid;\n  grid-template-rows: 64px 1fr 48px;\n  min-height: 60vh;\n}\n.page > * {\n  background: #e2e8f0;\n  padding: 12px;\n}`,
    instructions: "Change 64px to 100px and watch the header grow."
  },
  takeaways: [
    "Rows accept **auto**, **px**, and **fr**.",
    "**auto 1fr auto** = classic header/content/footer.",
    "**fr** rows need container height to share."
  ],
  quizQuestions: [
    { id: "css-m8l4-q1", question: "What does grid-template-rows: auto 1fr auto create?", options: ["Content-sized header/footer with growing middle", "Three equal rows", "One row", "Three columns"], correctAnswerIndex: 0, explanation: "**auto** fits content; **1fr** takes the remaining space — each row gets what it needs." },
    { id: "css-m8l4-q2", question: "What does an auto row size to?", options: ["Its content", "The viewport", "100px always", "Zero"], correctAnswerIndex: 0, explanation: "**auto** rows grow to fit their content — no clipping, no surprises." }
  ]
};

// LESSON: Grid Gap
export const cssGridGapContent: LessonContent = {
  heroTagline: "Gutters between rows and columns",
  introduction: "In grid, **gap** sets the gutters between tracks — the breathing space between your tiles.\n\n- **gap: 16px** — even gutters everywhere\n- **row-gap / column-gap** — different spacing per axis\n\nNo space is added at the container's outer edges. Ever.",
  definition: {
    term: "Grid gap",
    explanation: "In grid, **gap** (or **row-gap** / **column-gap**) sets the **gutters** between tracks — the clean way to space gallery tiles and dashboard widgets."
  },
  whyItMatters: "**Even gutters** make grids look professional — it is the difference between amateur and polished.\n\n**gap** does it in one line, with no edge spacing and no margin hacks.",
  realWorldAnalogy: {
    title: "Grout lines in a mosaic",
    story: "**Grid gaps** are the grout lines of a tile mosaic: even spacing between every tile, with none smeared on the outer frame.\n\nPerfectly even, perfectly clean.",
    comparison: [
      { item: "gap: 16px", meaning: "**Even grout** between all tiles — gap: 16px." },
      { item: "row-gap / column-gap", meaning: "**Different grout thickness** horizontally versus vertically." }
    ]
  },
  syntaxStructure: `.grid {
  display: grid;
  gap: 16px;
}`,
  codeExample: `.dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.tight {
  display: grid;
  row-gap: 8px;
  column-gap: 24px;
}`,
  codeAnnotations: [
    { lineOrToken: "gap: 20px;", description: "20px gutters between all rows and columns." },
    { lineOrToken: "row-gap: 8px;", description: "Tighter vertical gutters only." }
  ],
  commonMistakes: [
    { wrong: "Adding margins to grid items for gutters", correct: "Use gap on the container", reason: "**Margins** on items create uneven outer edges; **gap** is edge-clean by design." }
  ],
  tryItYourself: {
    html: `<div class="grid">\n  <div>1</div><div>2</div><div>3</div>\n  <div>4</div><div>5</div><div>6</div>\n</div>`,
    css: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.grid > div {\n  background: #bae6fd;\n  padding: 20px;\n  text-align: center;\n}`,
    instructions: "Change 16px to 4px and watch the tiles huddle together."
  },
  takeaways: [
    "**gap** sets gutters between tracks.",
    "**row-gap** and **column-gap** set them separately.",
    "No space is added at the **container edges**."
  ],
  quizQuestions: [
    { id: "css-m8l5-q1", question: "Does gap add space at the container's outer edges?", options: ["No, only between items", "Yes, everywhere", "Only on the left", "Only at the top"], correctAnswerIndex: 0, explanation: "**gap** applies strictly between tracks — the outer edges stay clean." },
    { id: "css-m8l5-q2", question: "How do you set different row and column gaps?", options: ["row-gap and column-gap", "gap-x and gap-y", "margin-top and margin-left", "padding"], correctAnswerIndex: 0, explanation: "**row-gap** and **column-gap** target each axis independently." }
  ]
};

// LESSON: Grid Areas
export const cssGridAreasContent: LessonContent = {
  heroTagline: "Name your layout zones like a map",
  introduction: "**grid-template-areas** lets you literally draw your layout in code:\n\n\"header header\"\n\"sidebar main\"\n\"footer footer\"\n\nEach quoted string is a row, each word a named zone. Items claim their zone with **grid-area**. Your CSS becomes a picture of the page.",
  definition: {
    term: "grid-template-areas",
    explanation: "**grid-template-areas** lets you draw your layout with **named zones** in plain text: \"header header\" \"sidebar main\" \"footer footer\". Items claim zones with **grid-area**."
  },
  whyItMatters: "It makes complex layouts **readable at a glance** — the code literally draws the page.\n\nHand this to a teammate and they will understand the layout in seconds.",
  realWorldAnalogy: {
    title: "A wedding seating chart",
    story: "**grid-template-areas** is like a seating chart at a wedding: each quoted row shows who sits where, and names claim their seats.\n\nThe chart literally draws the room.",
    comparison: [
      { item: "\"header header\"", meaning: "The **head table** spanning two seats — a zone covering two cells." },
      { item: "grid-area: header", meaning: "**Claiming** the head-table seat — the item taking its zone." }
    ]
  },
  syntaxStructure: `.page {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`,
  codeExample: `.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 16px;
}

header { grid-area: header; }
aside { grid-area: sidebar; }`,
  codeAnnotations: [
    { lineOrToken: '"header header"', description: "Header spans both columns." },
    { lineOrToken: "grid-area: sidebar;", description: "Places the aside into the sidebar zone." }
  ],
  commonMistakes: [
    { wrong: "Uneven column counts across area rows", correct: "Every quoted row needs the same number of names", reason: "Each string is a **row** — mismatched column counts break the map, so count carefully." }
  ],
  tryItYourself: {
    html: `<div class="page">\n  <header>H</header>\n  <aside>S</aside>\n  <main>M</main>\n  <footer>F</footer>\n</div>`,
    css: `.page {\n  display: grid;\n  grid-template-columns: 150px 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  gap: 12px;\n}\nheader { grid-area: header; background: #cbd5e1; padding: 12px; }\naside { grid-area: sidebar; background: #e2e8f0; padding: 12px; }\nmain { grid-area: main; background: #f1f5f9; padding: 12px; }\nfooter { grid-area: footer; background: #cbd5e1; padding: 12px; }`,
    instructions: "Swap \"sidebar main\" to \"main sidebar\" and watch the columns flip."
  },
  takeaways: [
    "**Areas** draw the layout as text.",
    "Items claim zones with **grid-area**.",
    "Every row string needs **equal column counts**."
  ],
  quizQuestions: [
    { id: "css-m8l6-q1", question: "How does an item claim a named area?", options: ["grid-area: name;", "area: name;", "grid: name;", "place: name;"], correctAnswerIndex: 0, explanation: "**grid-area** assigns the item to its named zone — the item claims its seat." },
    { id: "css-m8l6-q2", question: "What does \"header header\" mean in the areas map?", options: ["Header spans two columns", "Two headers stacked", "Header is hidden", "Header repeats"], correctAnswerIndex: 0, explanation: "Repeating a **name** across cells merges them into one bigger zone." }
  ]
};

// LESSON: Grid Template
export const cssGridTemplateContent: LessonContent = {
  heroTagline: "The shorthand for tracks and areas together",
  introduction: "**grid-template** is the shorthand that packs three properties into one declaration: **rows**, **columns**, and **areas**.\n\nFormat: **\"areas\" row-size / column-sizes** — the slash separates rows from columns. Compact, powerful, and a little dense at first glance.",
  definition: {
    term: "grid-template",
    explanation: "The **grid-template** shorthand defines **rows**, **columns**, and **areas** in one declaration — with the areas map woven in. Compact, but dense."
  },
  whyItMatters: "It keeps full **page scaffolding** in one readable block instead of three separate properties.\n\nOne declaration, the entire skeleton — elegant once it clicks.",
  realWorldAnalogy: {
    title: "One recipe card instead of three",
    story: "**grid-template** is like a recipe card: instead of three separate notes for prep, cooking, and plating, everything lives on one card.\n\nCompact, complete, at a glance.",
    comparison: [
      { item: "Longhand", meaning: "**Three separate notes** — the longhand properties." },
      { item: "grid-template", meaning: "**One recipe card** with everything — the shorthand." }
    ]
  },
  syntaxStructure: `.page {
  grid-template:
    "header header" 64px
    "sidebar main" 1fr
    "footer footer" 48px
    / 200px 1fr;
}`,
  codeExample: `.page {
  display: grid;
  grid-template:
    "header header" 64px
    "nav main" 1fr
    "footer footer" 48px
    / 200px 1fr;
  min-height: 100vh;
}`,
  codeAnnotations: [
    { lineOrToken: '"header header" 64px', description: "Area row plus its row height." },
    { lineOrToken: "/ 200px 1fr", description: "After the slash: the column sizes." }
  ],
  commonMistakes: [
    { wrong: "Forgetting the slash between rows and columns", correct: "Rows come first, then / then columns", reason: "The **slash** separates the row definitions from the column definitions — mix up the order and nothing works." }
  ],
  tryItYourself: {
    html: `<div class="page">\n  <div class="h">H</div>\n  <div class="n">N</div>\n  <div class="m">M</div>\n  <div class="f">F</div>\n</div>`,
    css: `.page {\n  display: grid;\n  grid-template:\n    "h h" 50px\n    "n m" 1fr\n    "f f" 40px\n    / 120px 1fr;\n  min-height: 50vh;\n  gap: 8px;\n}\n.h { grid-area: h; background: #cbd5e1; }\n.n { grid-area: n; background: #e2e8f0; }\n.m { grid-area: m; background: #f1f5f9; }\n.f { grid-area: f; background: #cbd5e1; }`,
    instructions: "Change 50px to 80px and watch the header row grow."
  },
  takeaways: [
    "**grid-template** combines rows, columns, and areas.",
    "Format: **\"areas\" row-size / column-sizes**.",
    "The **slash** separates rows from columns."
  ],
  quizQuestions: [
    { id: "css-m8l7-q1", question: "What does grid-template combine?", options: ["Rows, columns, and areas", "Colors and fonts", "Margins and padding", "Animations"], correctAnswerIndex: 0, explanation: "It is the **shorthand** for all three track definitions — rows, columns, and areas in one." },
    { id: "css-m8l7-q2", question: "What separates row definitions from column definitions?", options: ["A slash (/)", "A comma", "A semicolon", "A colon"], correctAnswerIndex: 0, explanation: "**Rows** come first, then /, then **columns**. The slash is the divider — respect it." }
  ]
};

// LESSON: Responsive Grid
export const cssResponsiveGridContent: LessonContent = {
  heroTagline: "Grids that adapt with auto-fit and minmax",
  introduction: "Meet the most magical line in modern CSS:\n\n**repeat(auto-fit, minmax(250px, 1fr))**\n\nIt creates as many **250px** columns as fit, stretching them to fill leftover space. Resize the browser and watch columns appear and vanish — zero media queries required.",
  definition: {
    term: "Responsive grid",
    explanation: "A **responsive grid** uses **auto-fit**/**auto-fill** with **minmax()** to adapt column counts to the viewport — no media queries needed."
  },
  whyItMatters: "It is the **modern way** to build responsive card grids.\n\nOne line replaces an entire stack of breakpoints — this is the future, and it is already here.",
  realWorldAnalogy: {
    title: "A self-reshaping ice cube tray",
    story: "**auto-fit** is like an ice cube tray that reshapes itself: pour water (**items**) and the tray forms exactly as many cubes as fit.\n\nNo measuring, no counting — it just fits.",
    comparison: [
      { item: "minmax(250px, 1fr)", meaning: "Each **cube** at least 250px wide, stretching to share extras." },
      { item: "auto-fit", meaning: "The **tray** forming exactly as many cubes as fit." }
    ]
  },
  syntaxStructure: `.grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`,
  codeExample: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`,
  codeAnnotations: [
    { lineOrToken: "auto-fit", description: "Creates as many columns as fit the container." },
    { lineOrToken: "minmax(250px, 1fr)", description: "Each column ≥250px, sharing leftover space." }
  ],
  commonMistakes: [
    { wrong: "auto-fit with a tiny minmax like 50px, creating dozens of slivers", correct: "Set a sensible minimum like 200-250px", reason: "The **minimum** controls the column count — set it too small and you get a swarm of tiny columns." }
  ],
  tryItYourself: {
    html: `<div class="cards">\n  <div>A</div><div>B</div><div>C</div><div>D</div>\n</div>`,
    css: `.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 16px;\n}\n.cards > div {\n  background: #fef9c3;\n  padding: 24px;\n  text-align: center;\n}`,
    instructions: "Change 150px to 250px and watch columns reflow into fewer, wider tracks."
  },
  takeaways: [
    "**auto-fit + minmax()** = self-reflowing columns.",
    "**No media queries** needed for basic responsive grids.",
    "The **minmax minimum** sets the column width floor."
  ],
  quizQuestions: [
    { id: "css-m8l8-q1", question: "What does repeat(auto-fit, minmax(250px, 1fr)) do?", options: ["Fits as many 250px+ columns as possible", "Creates exactly 250 columns", "Fixes the grid at 250px wide", "Hides extra items"], correctAnswerIndex: 0, explanation: "**auto-fit** generates exactly as many columns as fit, each at least 250px wide." },
    { id: "css-m8l8-q2", question: "Why is this pattern popular?", options: ["Responsive grids without media queries", "It loads faster", "It changes colors", "It is required by browsers"], correctAnswerIndex: 0, explanation: "**One line** adapts the column count to any viewport — from phone to ultrawide." }
  ]
};

// LESSON: Grid Cards
export const cssGridCardsContent: LessonContent = {
  heroTagline: "Beautiful card grids with grid",
  introduction: "**Card grids** are grid's signature move: uniform tiles for products, posts, or team members.\n\nCombine **repeat(auto-fit, minmax())** with **gap**, and you get a polished, responsive gallery in minutes — no media queries, no math, no tears.",
  definition: {
    term: "Grid cards",
    explanation: "**Card grids** are grid's signature use: uniform tiles for products, posts, or team members. Combine **repeat(auto-fit, minmax())** with **gap** and you get a polished gallery in minutes."
  },
  whyItMatters: "**Product listings**, **portfolios**, and **dashboards** are all card grids.\n\nThis single pattern pays off constantly — learn it once, reuse it forever.",
  realWorldAnalogy: {
    title: "A chocolate box tray",
    story: "A **card grid** is like a chocolate box tray: identical compartments in neat rows, each holding one treat.\n\nUniform, tidy, irresistible.",
    comparison: [
      { item: "Grid tracks", meaning: "The **tray compartments** — the grid tracks." },
      { item: "Cards", meaning: "The **chocolates** in each compartment — the cards." }
    ]
  },
  syntaxStructure: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}`,
  codeExample: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}`,
  codeAnnotations: [
    { lineOrToken: "repeat(auto-fit, minmax(240px, 1fr))", description: "Responsive columns that reflow with the viewport." },
    { lineOrToken: "box-shadow", description: "Subtle depth on each card." }
  ],
  commonMistakes: [
    { wrong: "Uneven card heights looking messy", correct: "Let grid stretch items (default) or set align-items: stretch", reason: "**Grid** stretches items to the row height by default — keep it for uniform, tidy cards." }
  ],
  tryItYourself: {
    html: `<div class="cards">\n  <div class="card">Card 1</div>\n  <div class="card">Card 2</div>\n  <div class="card">Card 3</div>\n</div>`,
    css: `.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n.card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n}`,
    instructions: "Change 180px to 260px and watch the grid reflow."
  },
  takeaways: [
    "**auto-fit** grids make perfect card galleries.",
    "Uniform **gaps** and stretching keep cards tidy.",
    "One pattern serves **products**, **posts**, and **teams**."
  ],
  quizQuestions: [
    { id: "css-m8l9-q1", question: "Which grid pattern fits card galleries best?", options: ["repeat(auto-fit, minmax(240px, 1fr))", "A single fixed column", "display: table", "float: left"], correctAnswerIndex: 0, explanation: "It reflows **card counts** responsively with zero media queries — the grid does the math." },
    { id: "css-m8l9-q2", question: "Why do grid cards look uniform?", options: ["Items stretch to the row height by default", "They are images", "Borders force it", "JavaScript resizes them"], correctAnswerIndex: 0, explanation: "Default **stretch** alignment equalizes card heights per row — tidy rows, automatically." }
  ]
};

// LESSON: Complete Grid Layout
export const cssCompleteGridLayoutContent: LessonContent = {
  heroTagline: "A full page scaffold in one grid",
  introduction: "Time to assemble everything: a **complete grid page** with areas, tracks, and responsive behavior.\n\n**Desktop**: header spanning full width, sidebar beside main content, footer below. **Mobile**: everything collapses into one clean column. This is the capstone — the full module, one layout.",
  definition: {
    term: "Complete grid layout",
    explanation: "A **complete grid page** combines areas, tracks, and responsive behavior: header spanning full width, sidebar beside main content, footer below — collapsing to one column on mobile."
  },
  whyItMatters: "This is the **capstone**: everything from this module assembled into a production-style page skeleton.\n\nBuild this once and you have a template for nearly any website.",
  realWorldAnalogy: {
    title: "An architect's floor plan",
    story: "A complete **grid layout** is like an architect's floor plan: rooms (**areas**) drawn to scale, with a note that the walls move on small lots (**mobile**).\n\nSame house, different lot size.",
    comparison: [
      { item: "Desktop areas map", meaning: "The **full floor plan** — the desktop areas map." },
      { item: "Mobile single column", meaning: "The **studio-apartment version** — mobile's single column." }
    ]
  },
  syntaxStructure: `@media (max-width: 768px) {
  .page { grid-template-columns: 1fr; }
}`,
  codeExample: `.page {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 16px;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .page {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
}`,
  codeAnnotations: [
    { lineOrToken: '"sidebar main"', description: "Desktop: sidebar beside content." },
    { lineOrToken: "@media (max-width: 768px)", description: "Mobile: everything stacks in one column." }
  ],
  commonMistakes: [
    { wrong: "Redefining columns in the media query but forgetting the areas map", correct: "Update both columns and areas together", reason: "**Areas** reference column counts — change the columns without updating the areas and the map breaks." }
  ],
  tryItYourself: {
    html: `<div class="page">\n  <header>H</header>\n  <aside>S</aside>\n  <main>M</main>\n  <footer>F</footer>\n</div>`,
    css: `.page {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  gap: 12px;\n  min-height: 50vh;\n}\nheader { grid-area: header; background: #cbd5e1; padding: 12px; }\naside { grid-area: sidebar; background: #e2e8f0; padding: 12px; }\nmain { grid-area: main; background: #f8fafc; padding: 12px; }\nfooter { grid-area: footer; background: #cbd5e1; padding: 12px; }`,
    instructions: "Change 160px to 100px and watch the sidebar slim down."
  },
  takeaways: [
    "**Areas + tracks** build complete page scaffolds.",
    "**Media queries** restack areas for mobile.",
    "Keep areas and columns **in sync** across breakpoints."
  ],
  quizQuestions: [
    { id: "css-m8l10-q1", question: "How do you collapse a grid layout on mobile?", options: ["Redefine columns and areas in a media query", "Delete the grid", "Use tables", "Hide the sidebar forever"], correctAnswerIndex: 0, explanation: "A **media query** restacks the areas into one column — desktop grid becomes mobile stack." },
    { id: "css-m8l10-q2", question: "What must stay in sync when restacking?", options: ["Areas map and column definitions", "Font sizes", "Image alt text", "Link colors"], correctAnswerIndex: 0, explanation: "**Areas** reference the column structure — change one without the other and the map breaks." }
  ]
};

