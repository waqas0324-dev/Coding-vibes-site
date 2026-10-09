import { LessonContent } from '../../types';

// ============================================================
// HTML Course — Unique lesson content, Part 3
// Modules 5-7: Lists, Tables, HTML Structure
// ============================================================

export const htmlListsIntroContent: LessonContent = {
  heroTagline: "Turn scattered items into clean, organized lists.",
  introduction: "What do recipes, to-do apps, and navigation bars have in common? They are all **lists**! HTML gives you three list flavors: `<ol>` for **ordered** steps, `<ul>` for **unordered** bullets, and `<dl>` for term-definition pairs. Master these and you can structure half the web.",
  definition: {
    term: "HTML List",
    explanation: "A **structured group** of related items — rendered with numbers, bullets, or term-description pairs — built from `<li>` items."
  },
  whyItMatters: "Recipes, menus, to-do apps, and navbars are all lists. They rank among the **most-used structures** on the entire web.",
  realWorldAnalogy: {
    title: "The Grocery List",
    story: "You write **milk, eggs, bread** as a list — not as a rambling paragraph. Your brain instantly sees three separate items. HTML lists give readers that same instant clarity.",
    comparison: [
      { item: "The grocery list", meaning: "An **HTML list** — items grouped with structure" },
      { item: "Scattered sticky notes", meaning: "Unlisted items — no order or grouping" }
    ]
  },
  syntaxStructure: `<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>`,
  codeExample: `<h2>Today's Tasks</h2>
<ul>
  <li>Buy groceries</li>
  <li>Walk the dog</li>
  <li>Read 20 pages</li>
</ul>`,
  codeAnnotations: [
    { lineOrToken: "<ul>", description: "The list container — choose ul, ol, or dl depending on the content." },
    { lineOrToken: "<li>", description: "One item in the list — repeat it for each item." }
  ],
  commonMistakes: [
    { wrong: `<ul>Milk, Eggs, Bread</ul>`, correct: `<ul>\n  <li>Milk</li>\n  <li>Eggs</li>\n  <li>Bread</li>\n</ul>`, reason: "Only **`<li>`** elements may sit directly inside a list — raw text breaks the structure. No exceptions!" }
  ],
  tryItYourself: {
    html: `<ul>\n</ul>`,
    instructions: "Add three <li> items with your favorite foods."
  },
  takeaways: [
    "HTML has three list types: `<ol>`, `<ul>`, and `<dl>`.",
    "Every list is built from **`<li>`** items.",
    "Lists structure **recipes**, menus, navbars, and more."
  ],
  quizQuestions: [
    { id: "html-lists-intro-1", question: "What are the three HTML list types?", options: ["<ol>, <ul>, <dl>", "<list>, <item>, <bullet>", "<a>, <b>, <c>", "<tr>, <td>, <th>"], correctAnswerIndex: 0, explanation: "Correct — **ordered** (`<ol>`), **unordered** (`<ul>`), and **description** (`<dl>`) lists cover every listing need." },
    { id: "html-lists-intro-2", question: "What must each item in a list be wrapped in?", options: ["<p>", "<li>", "<div>", "Nothing"], correctAnswerIndex: 1, explanation: "Right! Every list item must be an **`<li>`** element inside the list container." }
  ]
};

export const htmlOrderedListsContent: LessonContent = {
  heroTagline: "Number your steps in the right order.",
  introduction: "What would happen if a cake recipe listed its steps in **random order** — bake first, mix later? Disaster! The `<ol>` tag creates a **numbered list** where order is everything, and the browser numbers each item automatically.",
  definition: {
    term: "Ordered List (<ol>)",
    explanation: "A **list** whose items are **numbered sequentially** by the browser — 1, 2, 3."
  },
  whyItMatters: "Instructions must stay in order. Numbered lists make the **sequence** obvious — and renumber themselves if you edit. No manual counting ever again.",
  realWorldAnalogy: {
    title: "Recipe Steps",
    story: "A recipe **numbers its steps** so you follow them in the right order — mix, then bake, never the reverse. `<ol>` is that numbering, done automatically.",
    comparison: [
      { item: "The step numbers", meaning: "The `<ol>` numbering — **automatic** sequence" },
      { item: "The instructions", meaning: "The `<li>` items — the actual steps" }
    ]
  },
  syntaxStructure: `<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>`,
  codeExample: `<h2>Make Tea</h2>
<ol>
  <li>Boil water.</li>
  <li>Add tea leaves.</li>
  <li>Steep for 3 minutes.</li>
  <li>Pour and enjoy.</li>
</ol>`,
  codeAnnotations: [
    { lineOrToken: "<ol>", description: "Stands for 'ordered list' — the browser adds and manages the numbers." }
  ],
  commonMistakes: [
    { wrong: `<ul>\n  <li>1. Boil water</li>\n  <li>2. Add tea</li>\n</ul>`, correct: `<ol>\n  <li>Boil water</li>\n  <li>Add tea</li>\n</ol>`, reason: "**Manual numbers** do not update when you reorder — `<ol>` renumbers automatically. Let the browser do the counting." }
  ],
  tryItYourself: {
    html: `<ol>\n</ol>`,
    instructions: "Add three steps for brushing your teeth as <li> items."
  },
  takeaways: [
    "`<ol>` creates a **numbered** list.",
    "The browser numbers items **automatically**.",
    "Use it for **steps**, rankings, and any sequence."
  ],
  quizQuestions: [
    { id: "html-ol-1", question: "What does <ol> stand for?", options: ["Online list", "Ordered list", "Outline list", "Option list"], correctAnswerIndex: 1, explanation: "Correct — `<ol>` is the **ordered list** element; items render with sequential numbers." },
    { id: "html-ol-2", question: "What happens if you move the second <li> to the top?", options: ["Numbers break", "The browser renumbers automatically", "The page errors", "The item disappears"], correctAnswerIndex: 1, explanation: "Right! The browser generates the numbers, so **reordering** items renumbers them correctly. Magic!" }
  ]
};

export const htmlUnorderedListsContent: LessonContent = {
  heroTagline: "Bullet points for items with no order.",
  introduction: "Not everything in life has a ranking. Nobody says milk is '**step 1**' and eggs are '**step 2**' of your shopping. The `<ul>` tag makes a **bulleted list** for items that are all equal — no sequence, no pressure.",
  definition: {
    term: "Unordered List (<ul>)",
    explanation: "A **list** whose items are marked with **bullets** instead of numbers."
  },
  whyItMatters: "Most lists have **no meaningful order**. Bullets present choices cleanly without implying a false sequence.",
  realWorldAnalogy: {
    title: "The Shopping List",
    story: "**Milk, eggs, bread** — the order you grab them in the store does not matter one bit. `<ul>` is that shopping list: every item equal, zero ranking.",
    comparison: [
      { item: "The ticks on the list", meaning: "The `<ul>` **bullets** — no ranking implied" },
      { item: "The products", meaning: "The `<li>` items — each equally important" }
    ]
  },
  syntaxStructure: `<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Milk</li>
</ul>`,
  codeExample: `<h2>Phone Features</h2>
<ul>
  <li>6.5-inch display</li>
  <li>128 GB storage</li>
  <li>Two-day battery</li>
</ul>`,
  codeAnnotations: [
    { lineOrToken: "<ul>", description: "Stands for 'unordered list' — the browser renders bullets, not numbers." }
  ],
  commonMistakes: [
    { wrong: `<ol>\n  <li>Apples</li>\n  <li>Bread</li>\n  <li>Milk</li>\n</ol>`, correct: `<ul>\n  <li>Apples</li>\n  <li>Bread</li>\n  <li>Milk</li>\n</ul>`, reason: "**Numbers imply a sequence**. Bullets honestly say 'no order here' — match the tag to the meaning." }
  ],
  tryItYourself: {
    html: `<ul>\n</ul>`,
    instructions: "Add three <li> items listing features of your phone."
  },
  takeaways: [
    "`<ul>` creates a **bulleted** list.",
    "Use it when **item order** does not matter.",
    "Perfect for **features**, ingredients, and menus."
  ],
  quizQuestions: [
    { id: "html-ul-1", question: "What does <ul> stand for?", options: ["Universal list", "Unordered list", "Underlined list", "Utility list"], correctAnswerIndex: 1, explanation: "Correct — `<ul>` is the **unordered list** element; items render with bullets." },
    { id: "html-ul-2", question: "When should you choose <ul> over <ol>?", options: ["When items have a required sequence", "When item order doesn't matter", "When the list is long", "Never"], correctAnswerIndex: 1, explanation: "Right! **Bullets** suit unordered collections; **numbers** suit sequences and rankings. Match the tag to the meaning." }
  ]
};

export const htmlListItemsContent: LessonContent = {
  heroTagline: "The building block of every list.",
  introduction: "Every necklace is just **beads on a string** — and every HTML list is just `<li>` tags in a container. The `<li>` tag defines **one item** in a list. Learn this single tag and all three list types open up to you.",
  definition: {
    term: "List Item (<li>)",
    explanation: "A **single entry** inside a list — the only element allowed as a direct child of `<ul>` or `<ol>`."
  },
  whyItMatters: "Every list you will **ever** build is made of `<li>` tags. Master this one tag and you have mastered lists.",
  realWorldAnalogy: {
    title: "Beads on a String",
    story: "Each **bead** is identical and simple, but together they make a necklace. Each `<li>` is simple, but together they make a list.",
    comparison: [
      { item: "One bead", meaning: "An **`<li>`** tag — a single list item" },
      { item: "The string", meaning: "The `<ul>` or `<ol>` — holds the items together" }
    ]
  },
  syntaxStructure: `<li>One item</li>`,
  codeExample: `<ul>
  <li><strong>HTML</strong> — page structure</li>
  <li><strong>CSS</strong> — page styling</li>
  <li><strong>JavaScript</strong> — page behavior</li>
</ul>`,
  codeAnnotations: [
    { lineOrToken: "<li>", description: "One list item — it can hold text, links, images, almost anything." }
  ],
  commonMistakes: [
    { wrong: `<p>Buy milk</p>\n<li>Buy eggs</li>\n<p>Buy bread</p>`, correct: `<ul>\n  <li>Buy milk</li>\n  <li>Buy eggs</li>\n  <li>Buy bread</li>\n</ul>`, reason: "A lone `<li>` outside a list is **invalid HTML** and renders unpredictably — always nest it in `<ul>` or `<ol>`." }
  ],
  tryItYourself: {
    html: `<ul>\n  <li>Red</li>\n</ul>`,
    instructions: "Add two more <li> items: 'Green' and 'Blue'."
  },
  takeaways: [
    "`<li>` defines **one item** in a list.",
    "It must live directly inside `<ul>`, `<ol>`, or a nested list.",
    "An `<li>` can hold **text, links, images**, and more."
  ],
  quizQuestions: [
    { id: "html-li-1", question: "Where must an <li> element be placed?", options: ["Anywhere on the page", "Directly inside <ul> or <ol>", "Inside the <head>", "Inside a <table>"], correctAnswerIndex: 1, explanation: "Correct — `<li>` is only valid as a **direct child** of a list container." },
    { id: "html-li-2", question: "What can an <li> contain?", options: ["Only plain text", "Text, links, images — almost anything", "Only other lists", "Nothing"], correctAnswerIndex: 1, explanation: "Right! List items are **flexible containers** that can hold rich content — not just text." }
  ]
};

export const htmlNestedListsContent: LessonContent = {
  heroTagline: "Put lists inside lists for sub-items.",
  introduction: "Real information has **layers** — continents hold countries, countries hold cities. A **nested list** is simply a list tucked inside an `<li>` of another list, creating a perfect parent-child structure.",
  definition: {
    term: "Nested List",
    explanation: "A `<ul>` or `<ol>` placed inside an **`<li>`** of an outer list, creating a sub-level."
  },
  whyItMatters: "Real information has **hierarchy** — menus have submenus, outlines have sub-points. Nesting expresses that structure beautifully.",
  realWorldAnalogy: {
    title: "Folders Inside Folders",
    story: "Your **Documents** folder holds a **Photos** folder, which holds a **2024** folder. Each level sits inside the one above — that is exactly how nested lists work.",
    comparison: [
      { item: "A subfolder", meaning: "The **nested list** — one level deeper" },
      { item: "The parent folder", meaning: "The **outer list** — contains the sub-level" }
    ]
  },
  syntaxStructure: `<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Mango</li>
    </ul>
  </li>
</ul>`,
  codeExample: `<ul>
  <li>Asia
    <ul>
      <li>Japan</li>
      <li>Thailand</li>
    </ul>
  </li>
  <li>Europe
    <ul>
      <li>France</li>
      <li>Italy</li>
    </ul>
  </li>
</ul>`,
  codeAnnotations: [
    { lineOrToken: "inner <ul>", description: "The nested list MUST sit inside an <li> — never directly inside the outer <ul>." }
  ],
  commonMistakes: [
    { wrong: `<ul>\n  <li>Asia</li>\n  <ul>\n    <li>Japan</li>\n  </ul>\n</ul>`, correct: `<ul>\n  <li>Asia\n    <ul>\n      <li>Japan</li>\n    </ul>\n  </li>\n</ul>`, reason: "Only **`<li>`** may be a direct child of a list — a bare nested list is invalid HTML. Tuck it inside an item!" }
  ],
  tryItYourself: {
    html: `<ul>\n  <li>Drinks\n  </li>\n</ul>`,
    instructions: "Add a nested <ul> inside the 'Drinks' item with two <li> items: 'Tea' and 'Coffee'."
  },
  takeaways: [
    "Nested lists go inside an **`<li>`**, not directly in the outer list.",
    "The inner list **indents** automatically.",
    "Use nesting for **sub-categories** and submenus."
  ],
  quizQuestions: [
    { id: "html-nested-1", question: "Where does a nested list go?", options: ["Directly inside the outer <ul>", "Inside an <li> of the outer list", "After the closing </ul>", "Inside the <head>"], correctAnswerIndex: 1, explanation: "Correct — a nested list must sit inside an **`<li>`** of the outer list. Never directly in the list!" },
    { id: "html-nested-2", question: "What is nesting good for?", options: ["Making text bold", "Showing hierarchy like categories and sub-items", "Adding images", "Creating tables"], correctAnswerIndex: 1, explanation: "Right! Nested lists express **parent-child** relationships, like menus with submenus." }
  ]
};
export const htmlDescriptionListsContent: LessonContent = {
  heroTagline: "Pair terms with their definitions.",
  introduction: "Dictionaries, FAQs, and spec sheets are all the same thing at heart: a **term** followed by its **description**. The `<dl>` tag is built exactly for these pairs — `<dt>` for the term, `<dd>` for the description.",
  definition: {
    term: "Description List (<dl>)",
    explanation: "A list of **term-description pairs**: `<dl>` for the list, `<dt>` for each term, `<dd>` for each description."
  },
  whyItMatters: "Dictionaries, **FAQs**, and spec sheets are term-definition pairs. `<dl>` gives them proper structure instead of fake bold paragraphs.",
  realWorldAnalogy: {
    title: "A Dictionary Entry",
    story: "Each dictionary entry shows a **word in bold** followed by its **meaning**. `<dt>` is that bold word; `<dd>` is the meaning, neatly indented below.",
    comparison: [
      { item: "The word", meaning: "The **`<dt>`** — the term being defined" },
      { item: "The meaning", meaning: "The **`<dd>`** — the description, indented below" }
    ]
  },
  syntaxStructure: `<dl>
  <dt>HTML</dt>
  <dd>Structures web pages.</dd>
</dl>`,
  codeExample: `<h2>Glossary</h2>
<dl>
  <dt>HTML</dt>
  <dd>The markup language that structures web pages.</dd>
  <dt>CSS</dt>
  <dd>The language that styles web pages.</dd>
</dl>`,
  codeAnnotations: [
    { lineOrToken: "<dt>", description: "Description term — the word or name being defined." },
    { lineOrToken: "<dd>", description: "Description details — the definition, indented under its term." }
  ],
  commonMistakes: [
    { wrong: `<dl>\n  <dt>Apples</dt>\n  <dt>Bread</dt>\n  <dt>Milk</dt>\n</dl>`, correct: `<ul>\n  <li>Apples</li>\n  <li>Bread</li>\n  <li>Milk</li>\n</ul>`, reason: "**Screen readers** announce description lists specially — using `<dl>` for plain bullet lists confuses their users. It is only for term-definition pairs." }
  ],
  tryItYourself: {
    html: `<dl>\n</dl>`,
    instructions: "Add a term 'RAM' with the description 'Short-term memory of a computer.'"
  },
  takeaways: [
    "`<dl>` holds **term-description** pairs.",
    "`<dt>` is the **term**; `<dd>` is its **description**.",
    "Ideal for **glossaries**, FAQs, and metadata."
  ],
  quizQuestions: [
    { id: "html-dl-1", question: "What do <dt> and <dd> represent?", options: ["Table cells", "A term and its description", "Two list styles", "Title and subtitle"], correctAnswerIndex: 1, explanation: "Correct — `<dt>` is the **description term**, `<dd>` holds its **description details**." },
    { id: "html-dl-2", question: "When should you use <dl>?", options: ["For any bullet list", "For term-definition pairs like glossaries", "For numbered steps", "For image galleries"], correctAnswerIndex: 1, explanation: "Right! **Description lists** are built for pairing terms with definitions — glossaries, FAQs, metadata." }
  ]
};

export const htmlMultiLevelListsContent: LessonContent = {
  heroTagline: "Build deep outlines with three or more levels.",
  introduction: "Some outlines go **deep** — Part > Chapter > Section, like a book's table of contents. **Multi-level lists** nest three or more levels deep, and you can even mix `<ol>` and `<ul>` at different levels.",
  definition: {
    term: "Multi-level List",
    explanation: "A list **nested three or more levels** deep, expressing complex hierarchy."
  },
  whyItMatters: "**Course curriculums** and legal documents need deep structure. Multi-level lists keep every level in its proper place.",
  realWorldAnalogy: {
    title: "A Book's Table of Contents",
    story: "**Parts** contain **chapters**, and **chapters** contain **sections** — three levels deep, each indented further. That is a multi-level list on paper.",
    comparison: [
      { item: "The Part", meaning: "**Level 1** — the outermost list" },
      { item: "Chapter, then section", meaning: "**Levels 2 and 3** — nested deeper each time" }
    ]
  },
  syntaxStructure: `<ol>
  <li>Part 1
    <ol>
      <li>Chapter 1
        <ul>
          <li>Section 1.1</li>
        </ul>
      </li>
    </ol>
  </li>
</ol>`,
  codeExample: `<ol>
  <li>Part 1: Basics
    <ol>
      <li>Chapter 1: Tags
        <ul>
          <li>Opening tags</li>
          <li>Closing tags</li>
        </ul>
      </li>
    </ol>
  </li>
</ol>`,
  codeAnnotations: [
    { lineOrToken: "mixing <ol> and <ul>", description: "Each level can use its own list type — numbers for parts, bullets for details." }
  ],
  commonMistakes: [
    { wrong: `<!-- 6 levels deep -->`, correct: `<!-- max 3-4 levels, then restructure -->`, reason: "Nesting **6+ levels** deep overwhelms readers and screen readers alike — if you need that depth, restructure the content." }
  ],
  tryItYourself: {
    html: `<ul>\n  <li>Planets\n    <ul>\n      <li>Earth</li>\n    </ul>\n  </li>\n</ul>`,
    instructions: "Add a third level: nest a list inside 'Earth' with 'Moon' as its item."
  },
  takeaways: [
    "Multi-level lists nest **three or more** deep.",
    "**Mix** `<ol>` and `<ul>` to suit each level.",
    "Keep depth to **3–4 levels** for readability."
  ],
  quizQuestions: [
    { id: "html-multilevel-1", question: "What defines a multi-level list?", options: ["A very long list", "Nesting three or more levels deep", "Using only <ol>", "A list with images"], correctAnswerIndex: 1, explanation: "Correct — multi-level lists express deep hierarchy through **3+ levels** of nesting." },
    { id: "html-multilevel-2", question: "Can you mix <ol> and <ul> in nested levels?", options: ["No — one type per page", "Yes, each level can use its own type", "Only with CSS", "Only two levels"], correctAnswerIndex: 1, explanation: "Right! Each nesting level is **independent** — it can use ordered or unordered lists." }
  ]
};

export const htmlRealWorldListsContent: LessonContent = {
  heroTagline: "See lists running real websites.",
  introduction: "Here is a secret the pros know: almost every website's **menu** is just a `<ul>` wearing a fancy CSS costume. Navbars, breadcrumbs, pricing features — they are all humble lists underneath.",
  definition: {
    term: "List-based Components",
    explanation: "Common website parts — **navbars**, menus, feature lists — built on `<ul>` and `<li>`."
  },
  whyItMatters: "Recognizing lists in the wild shows you how **professionals** structure sites. Your menus will be built exactly this way.",
  realWorldAnalogy: {
    title: "Lego Bricks in Real Buildings",
    story: "The same simple **Lego brick** builds houses, castles, and spaceships. The same simple `<li>` builds navbars, menus, and pricing tables.",
    comparison: [
      { item: "The Lego brick", meaning: "The **`<li>`** — one simple building block" },
      { item: "The finished model", meaning: "A **navbar or menu** — bricks assembled with purpose" }
    ]
  },
  syntaxStructure: `<nav>
  <ul>
    <li><a href="...">Link</a></li>
  </ul>
</nav>`,
  codeExample: `<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="shop.html">Shop</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`,
  codeAnnotations: [
    { lineOrToken: "<nav> + <ul>", description: "The standard professional pattern for site menus — a list of links." }
  ],
  commonMistakes: [
    { wrong: `<nav>\n  <div><a href="a.html">Home</a></div>\n  <div><a href="b.html">Shop</a></div>\n</nav>`, correct: `<nav>\n  <ul>\n    <li><a href="a.html">Home</a></li>\n    <li><a href="b.html">Shop</a></li>\n  </ul>\n</nav>`, reason: "**Screen readers** offer list shortcuts for navigation — div-built menus hide that structure from them. Build menus from lists!" }
  ],
  tryItYourself: {
    html: `<nav>\n</nav>`,
    instructions: "Build a menu: a <ul> with three <li> items, each containing a link."
  },
  takeaways: [
    "**Navbars**, breadcrumbs, and feature lists are all `<ul>`-based.",
    "Professionals build menus from **lists**, not divs.",
    "List structure gives screen readers **navigation shortcuts**."
  ],
  quizQuestions: [
    { id: "html-lists-real-1", question: "What is most website navigation built from?", options: ["<table> elements", "<ul> lists of links", "Images only", "<form> elements"], correctAnswerIndex: 1, explanation: "Correct — the professional standard is a **`<ul>`** of link items inside `<nav>`, styled with CSS." },
    { id: "html-lists-real-2", question: "Why are list-based menus better than div-based ones?", options: ["They load faster", "Screen readers get list navigation shortcuts", "They look better by default", "They need no CSS"], correctAnswerIndex: 1, explanation: "Right! Assistive technology **understands list structure** and offers shortcuts through menu items. Divs hide all of that." }
  ]
};

export const htmlTableRowsContent: LessonContent = {
  heroTagline: "Rows are the horizontal lines of your table.",
  introduction: "A table is not built all at once — it is assembled **row by row**, like laying bricks. The `<tr>` tag defines **one horizontal row**, and every cell in your table must live inside one.",
  definition: {
    term: "Table Row (<tr>)",
    explanation: "An element defining **one horizontal row** of cells in a table."
  },
  whyItMatters: "Tables are assembled **row by row**. Understanding `<tr>` is the first step to building any table.",
  realWorldAnalogy: {
    title: "Shelves in a Bookcase",
    story: "Each **shelf** holds a row of books; the bookcase itself is the table. Remove a shelf and the books tumble — remove a `<tr>` and the cells have nowhere to live.",
    comparison: [
      { item: "One shelf", meaning: "A **`<tr>`** — one horizontal row" },
      { item: "The books on the shelf", meaning: "The cells (`<th>` or `<td>`) inside the row" }
    ]
  },
  syntaxStructure: `<table>
  <tr>
    <td>Row 1, Cell 1</td>
  </tr>
</table>`,
  codeExample: `<table>
  <tr>
    <td>Emma</td>
    <td>95</td>
  </tr>
  <tr>
    <td>Liam</td>
    <td>88</td>
  </tr>
</table>`,
  codeAnnotations: [
    { lineOrToken: "<tr>", description: "Groups cells horizontally — write one <tr> per row." }
  ],
  commonMistakes: [
    { wrong: `<table>\n  <td>Emma</td>\n  <td>95</td>\n</table>`, correct: `<table>\n  <tr>\n    <td>Emma</td>\n    <td>95</td>\n  </tr>\n</table>`, reason: "**Cells must live inside a row** — browsers may drop or misplace orphan cells. No row, no home." }
  ],
  tryItYourself: {
    html: `<table>\n  <tr>\n    <td>A</td>\n  </tr>\n</table>`,
    instructions: "Add a second row with two cells: 'B' and 'C'."
  },
  takeaways: [
    "`<tr>` defines **one horizontal row** of a table.",
    "Every cell must sit inside a **`<tr>`**.",
    "Tables are built **row by row**, top to bottom."
  ],
  quizQuestions: [
    { id: "html-tr-1", question: "What does <tr> define?", options: ["A table column", "One horizontal row of a table", "The table title", "A table border"], correctAnswerIndex: 1, explanation: "Correct — `<tr>` (**table row**) groups cells horizontally into one row." },
    { id: "html-tr-2", question: "Can <td> cells sit directly inside <table> without <tr>?", options: ["Yes, always", "No — cells must be inside a row", "Only the first cell", "Only in small tables"], correctAnswerIndex: 1, explanation: "Right! Cells belong **inside rows** — orphan cells may be dropped or misplaced by browsers." }
  ]
};

export const htmlTableHeadersContent: LessonContent = {
  heroTagline: "Label your columns with bold header cells.",
  introduction: "A column of numbers with **no labels** is just... numbers. Is that column ages? Prices? Shoe sizes? The `<th>` tag defines a **header cell** that labels each column — bold, centered, and announced to screen readers.",
  definition: {
    term: "Table Header (<th>)",
    explanation: "A **header cell** labeling a column or row — bold, centered, and announced by screen readers."
  },
  whyItMatters: "A column of numbers means **nothing** without labels. `<th>` tells everyone what each column holds.",
  realWorldAnalogy: {
    title: "Column Titles in a Spreadsheet",
    story: "The top row of a spreadsheet names each column: **Name, Age, City**. Without that row, the data below is a mystery. `<th>` is that title row.",
    comparison: [
      { item: "The spreadsheet title row", meaning: "The **`<th>`** cells — labels for the data" },
      { item: "The data rows", meaning: "The `<td>` cells — the actual values" }
    ]
  },
  syntaxStructure: `<tr>
  <th>Name</th>
  <th>Score</th>
</tr>`,
  codeExample: `<table>
  <tr>
    <th>Student</th>
    <th>Subject</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>Emma</td>
    <td>Math</td>
    <td>A</td>
  </tr>
</table>`,
  codeAnnotations: [
    { lineOrToken: "<th>", description: "Bold and centered by default — identifies the data in its column or row." }
  ],
  commonMistakes: [
    { wrong: `<tr>\n  <td><b>Name</b></td>\n  <td><b>Score</b></td>\n</tr>`, correct: `<tr>\n  <th>Name</th>\n  <th>Score</th>\n</tr>`, reason: "A bold `<td>` **looks** like a header, but screen readers will not treat it as one — `<th>` carries the meaning." }
  ],
  tryItYourself: {
    html: `<table>\n  <tr>\n    <td>City</td>\n    <td>Country</td>\n  </tr>\n</table>`,
    instructions: "Change the two <td> cells in the first row to <th> cells."
  },
  takeaways: [
    "`<th>` defines **header cells** — bold and centered.",
    "Headers **label** columns (or rows) of data.",
    "Screen readers announce `<th>` as headers — bold `<td>` is **not** enough."
  ],
  quizQuestions: [
    { id: "html-th-1", question: "How does a browser render <th> by default?", options: ["Plain left-aligned text", "Bold and centered", "Italic and red", "Hidden"], correctAnswerIndex: 1, explanation: "Correct — header cells render **bold and centered** to stand out as labels." },
    { id: "html-th-2", question: "Why use <th> instead of <td><b> for headers?", options: ["It is shorter to type", "Screen readers recognize <th> as a real header", "It loads faster", "No reason"], correctAnswerIndex: 1, explanation: "Right! `<th>` carries **semantic meaning** that assistive technology announces; visual boldness alone does not." }
  ]
};
export const htmlTableDataContent: LessonContent = {
  heroTagline: "Fill your table with actual data cells.",
  introduction: "Headers get the glory, but `<td>` does the **heavy lifting**. It defines one **standard data cell** — a single box holding a single piece of information. Most of your table is `<td>` cells, organized into rows.",
  definition: {
    term: "Table Data (<td>)",
    explanation: "A **regular table cell** holding one piece of data, rendered with normal text styling."
  },
  whyItMatters: "Headers label, but `<td>` **delivers**. Every name, number, and date in your table lives in a `<td>`.",
  realWorldAnalogy: {
    title: "Cells in a Spreadsheet",
    story: "You type values into **individual spreadsheet cells** under the column titles. Each `<td>` is one of those cells — one box, one value.",
    comparison: [
      { item: "A spreadsheet cell", meaning: "A **`<td>`** — one value in one box" },
      { item: "The column title", meaning: "A **`<th>`** — labels the column" }
    ]
  },
  syntaxStructure: `<td>Cell content</td>`,
  codeExample: `<table>
  <tr>
    <th>City</th>
    <th>Population</th>
  </tr>
  <tr>
    <td>Karachi</td>
    <td>17 million</td>
  </tr>
  <tr>
    <td>Lahore</td>
    <td>13 million</td>
  </tr>
</table>`,
  codeAnnotations: [
    { lineOrToken: "<td>", description: "One data cell — regular text, left-aligned by default." }
  ],
  commonMistakes: [
    { wrong: `<table>\n  <tr>\n    <td>\n      <table><tr><td>Nested layout table</td></tr></table>\n    </td>\n  </tr>\n</table>`, correct: `<table>\n  <tr><td>One value per cell</td></tr>\n</table>`, reason: "**Tables are for data**, not page layout — nested layout tables break on mobile and confuse screen readers. Use CSS for layout." }
  ],
  tryItYourself: {
    html: `<table>\n  <tr>\n    <td>Apple</td>\n  </tr>\n</table>`,
    instructions: "Add a second cell to the row with the price '$2'."
  },
  takeaways: [
    "`<td>` holds **one piece** of table data.",
    "Most table cells are **`<td>`** elements.",
    "**One value per cell** — never nest tables for layout."
  ],
  quizQuestions: [
    { id: "html-td-1", question: "What does <td> define?", options: ["A table header", "A standard data cell", "A table border", "A table caption"], correctAnswerIndex: 1, explanation: "Correct — `<td>` (**table data**) holds one piece of information in the table." },
    { id: "html-td-2", question: "Should you nest tables inside <td> for page layout?", options: ["Yes, it's the best method", "No — tables are for data; use CSS for layout", "Only on mobile", "Only with borders"], correctAnswerIndex: 1, explanation: "Right! **Layout tables** break responsiveness and accessibility — CSS handles layout, tables handle data." }
  ]
};

export const htmlTableBordersContent: LessonContent = {
  heroTagline: "Draw lines so your table is easy to read.",
  introduction: "Plot twist: tables are born **invisible**. By default, cells float with no borders at all — your data is there, but the grid is a ghost. **CSS borders** draw the lines that let eyes follow each row.",
  definition: {
    term: "Table Borders",
    explanation: "**CSS-drawn lines** around table cells that make the grid structure visible."
  },
  whyItMatters: "**Borderless** data blends together. Clean borders let eyes track a row from label to value without getting lost.",
  realWorldAnalogy: {
    title: "Grid Lines in a Notebook",
    story: "**Grid paper's** faint lines keep your writing in neat rows and columns. CSS borders are those grid lines for your table.",
    comparison: [
      { item: "The notebook grid", meaning: "**CSS borders** — visible structure" },
      { item: "Blank paper", meaning: "A **borderless table** — data floats freely" }
    ]
  },
  syntaxStructure: `table, th, td {
  border: 1px solid #333;
  border-collapse: collapse;
}`,
  codeExample: `<style>
  table, th, td {
    border: 1px solid #333;
    border-collapse: collapse;
  }
</style>
<table>
  <tr><th>Item</th><th>Price</th></tr>
  <tr><td>Pen</td><td>$1</td></tr>
</table>`,
  codeAnnotations: [
    { lineOrToken: "border: 1px solid #333", description: "Draws a thin dark line around every table, header, and data cell." },
    { lineOrToken: "border-collapse: collapse", description: "Merges doubled-up borders into single clean lines." }
  ],
  commonMistakes: [
    { wrong: `<table border="1">`, correct: `<style>table, th, td { border: 1px solid black; }</style>`, reason: "The `border` attribute is **outdated HTML** — CSS gives full control over style, color, and width." }
  ],
  tryItYourself: {
    html: `<table>\n  <tr><td>A</td><td>B</td></tr>\n</table>`,
    instructions: "Add a <style> block that gives table and td a 1px solid black border with collapse."
  },
  takeaways: [
    "Tables have **no visible borders** by default.",
    "Use **CSS borders** on `table`, `th`, and `td`.",
    "`border-collapse: collapse` merges double lines."
  ],
  quizQuestions: [
    { id: "html-borders-1", question: "How do modern pages add table borders?", options: ["The border attribute", "CSS border properties", "The <border> tag", "Borders appear automatically"], correctAnswerIndex: 1, explanation: "Correct — **CSS borders** are the modern way; the old `border` attribute is outdated." },
    { id: "html-borders-2", question: "What does border-collapse: collapse do?", options: ["Removes all borders", "Merges adjacent double borders into single lines", "Rounds the corners", "Hides the table"], correctAnswerIndex: 1, explanation: "Right! Without it, neighboring cells each draw their own border, creating **doubled lines**." }
  ]
};

export const htmlTableCaptionsContent: LessonContent = {
  heroTagline: "Give your table a title everyone can find.",
  introduction: "'**Table 3**' tells you nothing. '**Q3 Sales by Region**' tells you everything. The `<caption>` tag gives your table a proper **title** — and it must be the very first child of `<table>`.",
  definition: {
    term: "<caption> Element",
    explanation: "A table's **title**, placed first inside `<table>` and announced by assistive technology."
  },
  whyItMatters: "'Table 3' means nothing; '**Q3 Sales by Region**' tells readers exactly what they are about to read.",
  realWorldAnalogy: {
    title: "A Title on a Chart",
    story: "Every chart in a report has a **title above it** explaining what the data shows. `<caption>` is that title — but built into the table itself.",
    comparison: [
      { item: "The chart title", meaning: "The **`<caption>`** — names the table's data" },
      { item: "The chart", meaning: "The **table** itself — the data" }
    ]
  },
  syntaxStructure: `<table>
  <caption>Monthly Sales</caption>
  <tr>...</tr>
</table>`,
  codeExample: `<table>
  <caption>Student Grades — Spring 2026</caption>
  <tr>
    <th>Student</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>Emma</td>
    <td>A</td>
  </tr>
</table>`,
  codeAnnotations: [
    { lineOrToken: "<caption>", description: "Must be the FIRST child of <table> — it titles the whole table." }
  ],
  commonMistakes: [
    { wrong: `<h2>Student Grades</h2>\n<table>...</table>`, correct: `<table>\n  <caption>Student Grades</caption>\n  ...\n</table>`, reason: "A heading is not **programmatically tied** to the table — screen readers may not connect them. `<caption>` is part of the table." }
  ],
  tryItYourself: {
    html: `<table>\n  <tr><td>Data</td></tr>\n</table>`,
    instructions: "Add a <caption> as the first child: 'My First Table'."
  },
  takeaways: [
    "`<caption>` **titles** a table.",
    "It must be the **first child** of `<table>`.",
    "Screen readers announce it **before** the data."
  ],
  quizQuestions: [
    { id: "html-caption-1", question: "Where must <caption> be placed?", options: ["After the table", "As the first child of <table>", "Inside a <td>", "In the <head>"], correctAnswerIndex: 1, explanation: "Correct — `<caption>` must be the **very first child** of the `<table>` element." },
    { id: "html-caption-2", question: "Why use <caption> instead of a heading above the table?", options: ["It looks bigger", "It is programmatically tied to the table for screen readers", "It loads faster", "Headings are forbidden"], correctAnswerIndex: 1, explanation: "Right! `<caption>` **belongs to the table itself**, so assistive tech announces it together with the data." }
  ]
};

export const htmlColspanContent: LessonContent = {
  heroTagline: "Stretch one cell across several columns.",
  introduction: "What if one header needs to rule **three columns** — like '**Q1 Results**' stretching over January, February, and March? The `colspan` attribute lets a single cell **span multiple columns**. One cell, triple the width.",
  definition: {
    term: "colspan Attribute",
    explanation: "An attribute on `<th>` or `<td>` stretching the cell across the given **number of columns**."
  },
  whyItMatters: "**Grouped headers** need wide cells. `colspan` builds professional tables with section headers spanning their columns.",
  realWorldAnalogy: {
    title: "Merging Cells in a Spreadsheet",
    story: "You **merge cells A1 through C1** to center a title across three columns. `colspan=\"3\"` is that merge — in pure HTML.",
    comparison: [
      { item: "Merged spreadsheet cells", meaning: "A **colspan** cell — one cell, multiple columns wide" },
      { item: "A single cell", meaning: "A normal `<td>` — one column wide" }
    ]
  },
  syntaxStructure: `<th colspan="3">Q1 Results</th>`,
  codeExample: `<table>
  <tr>
    <th colspan="3">Q1 Sales</th>
  </tr>
  <tr>
    <th>Jan</th>
    <th>Feb</th>
    <th>Mar</th>
  </tr>
  <tr>
    <td>$10k</td>
    <td>$12k</td>
    <td>$15k</td>
  </tr>
</table>`,
  codeAnnotations: [
    { lineOrToken: "colspan=\"3\"", description: "This single cell occupies the width of 3 columns." }
  ],
  commonMistakes: [
    { wrong: `<tr><th colspan="2">Q1 Sales</th></tr>\n<tr><th>Jan</th><th>Feb</th><th>Mar</th></tr>`, correct: `<tr><th colspan="3">Q1 Sales</th></tr>\n<tr><th>Jan</th><th>Feb</th><th>Mar</th></tr>`, reason: "The span count must **equal** the columns it covers — a wrong number breaks the grid and shoves cells out of shape." }
  ],
  tryItYourself: {
    html: `<table>\n  <tr>\n    <th>Weekend Plan</th>\n  </tr>\n  <tr>\n    <td>Saturday</td>\n    <td>Sunday</td>\n  </tr>\n</table>`,
    instructions: "Add colspan=\"2\" to the header so it spans both day columns."
  },
  takeaways: [
    "`colspan` stretches a cell across **columns**.",
    "The number must **match** the columns covered.",
    "Great for **grouped section headers**."
  ],
  quizQuestions: [
    { id: "html-colspan-1", question: "What does colspan=\"3\" do?", options: ["Makes 3 rows", "Stretches the cell across 3 columns", "Adds 3 borders", "Makes text 3x bigger"], correctAnswerIndex: 1, explanation: "Correct — `colspan=\"3\"` merges the cell **horizontally** across 3 columns." },
    { id: "html-colspan-2", question: "What happens with a wrong colspan count?", options: ["Nothing", "The table grid breaks and cells shift oddly", "The table disappears", "Text becomes bold"], correctAnswerIndex: 1, explanation: "Right! A mismatched span **misaligns the grid** — browsers push cells into strange positions." }
  ]
};

export const htmlRowspanContent: LessonContent = {
  heroTagline: "Stretch one cell down across several rows.",
  introduction: "Repeating the word '**Fruits**' in every single row is noisy and boring. The `rowspan` attribute lets one cell stretch **vertically** across multiple rows — state the label once, and let it cover its whole group.",
  definition: {
    term: "rowspan Attribute",
    explanation: "An attribute on `<th>` or `<td>` stretching the cell across the given **number of rows**."
  },
  whyItMatters: "Repeating the same label in every row is **noisy**. `rowspan` states it once and lets it cover its group.",
  realWorldAnalogy: {
    title: "A Tall Bookshelf Label",
    story: "One **tall label** on a bookcase's side names all five shelves at once — instead of tagging each shelf separately. That is `rowspan`: one label, many rows.",
    comparison: [
      { item: "The tall side label", meaning: "A **rowspan** cell — one label covering many rows" },
      { item: "Individual shelf tags", meaning: "Repeating the label in **every row**" }
    ]
  },
  syntaxStructure: `<td rowspan="3">Fruits</td>`,
  codeExample: `<table>
  <tr>
    <td rowspan="3">Fruits</td>
    <td>Apple</td>
  </tr>
  <tr>
    <td>Mango</td>
  </tr>
  <tr>
    <td>Banana</td>
  </tr>
</table>`,
  codeAnnotations: [
    { lineOrToken: "rowspan=\"3\"", description: "Covers this row plus the next two — so those rows need one fewer <td>." }
  ],
  commonMistakes: [
    { wrong: `<tr>\n  <td rowspan="2">Fruits</td>\n  <td>Apple</td>\n</tr>\n<tr>\n  <td>Extra</td>\n  <td>Mango</td>\n</tr>`, correct: `<tr>\n  <td rowspan="2">Fruits</td>\n  <td>Apple</td>\n</tr>\n<tr>\n  <td>Mango</td>\n</tr>`, reason: "Do not add a cell in spanned rows for the covered column — the extra cell **collides** with the spanned one and distorts the table." }
  ],
  tryItYourself: {
    html: `<table>\n  <tr>\n    <td>Drinks</td>\n    <td>Tea</td>\n  </tr>\n  <tr>\n    <td>Coffee</td>\n  </tr>\n</table>`,
    instructions: "Add rowspan=\"2\" to the 'Drinks' cell and remove the extra cell it replaces."
  },
  takeaways: [
    "`rowspan` stretches a cell across rows **vertically**.",
    "Spanned rows need **one fewer** cell.",
    "Use it to avoid repeating **group labels**."
  ],
  quizQuestions: [
    { id: "html-rowspan-1", question: "What does rowspan=\"2\" do?", options: ["Makes 2 columns", "Stretches the cell across 2 rows", "Doubles the text size", "Adds 2 borders"], correctAnswerIndex: 1, explanation: "Correct — `rowspan=\"2\"` merges the cell **vertically** across 2 rows." },
    { id: "html-rowspan-2", question: "How many <td> elements go in a row covered by a rowspan?", options: ["The normal count", "One fewer — the spanned cell already covers that column", "Zero", "Double"], correctAnswerIndex: 1, explanation: "Right! The spanning cell **occupies that column**, so covered rows simply skip it." }
  ]
};
export const htmlCompleteTableStructureContent: LessonContent = {
  heroTagline: "Assemble the full table: head, body, and foot.",
  introduction: "Big tables need **departments**, like a proper company: `<thead>` runs the header rows, `<tbody>` handles the data, and `<tfoot>` closes with the totals. Add `<caption>`, and you have a complete, professional table.",
  definition: {
    term: "Complete Table Structure",
    explanation: "A table organized with **`<caption>`, `<thead>`, `<tbody>`, and `<tfoot>`** sections."
  },
  whyItMatters: "Long tables **print** with repeating headers, and screen readers **navigate** by sections. Structure turns a data dump into a document.",
  realWorldAnalogy: {
    title: "A Formal Report",
    story: "Reports have a **title page**, **body chapters**, and an **appendix** — always in that order. A complete table follows the same discipline: caption, head, body, foot.",
    comparison: [
      { item: "The title page", meaning: "The **`<caption>`** — names the table" },
      { item: "Chapters and appendix", meaning: "The **`<tbody>`** data and **`<tfoot>`** totals" }
    ]
  },
  syntaxStructure: `<table>
  <caption>...</caption>
  <thead>...</thead>
  <tbody>...</tbody>
  <tfoot>...</tfoot>
</table>`,
  codeExample: `<table>
  <caption>Quarterly Expenses</caption>
  <thead>
    <tr><th>Item</th><th>Cost</th></tr>
  </thead>
  <tbody>
    <tr><td>Rent</td><td>$800</td></tr>
    <tr><td>Food</td><td>$300</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>$1100</td></tr>
  </tfoot>
</table>`,
  codeAnnotations: [
    { lineOrToken: "<thead>", description: "Header rows — browsers repeat them at the top of each printed page." },
    { lineOrToken: "<tbody>", description: "The main data — a table can even have multiple bodies." },
    { lineOrToken: "<tfoot>", description: "Totals and summaries — belongs last in the markup." }
  ],
  commonMistakes: [
    { wrong: `<table>\n  <tfoot>...</tfoot>\n  <tbody>...</tbody>\n</table>`, correct: `<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n  <tfoot>...</tfoot>\n</table>`, reason: "The order **thead → tbody → tfoot** matters — assistive technology and printing rely on it. Do not shuffle!" }
  ],
  tryItYourself: {
    html: `<table>\n  <tr><th>Item</th></tr>\n  <tr><td>Pen</td></tr>\n</table>`,
    instructions: "Wrap the header row in <thead> and the data row in <tbody>."
  },
  takeaways: [
    "`<thead>`, `<tbody>`, `<tfoot>` organize **large tables**.",
    "`<caption>` **titles** the whole table.",
    "Keep the order: **caption, thead, tbody, tfoot**."
  ],
  quizQuestions: [
    { id: "html-tablestruct-1", question: "Which section holds a table's totals?", options: ["<thead>", "<tbody>", "<tfoot>", "<caption>"], correctAnswerIndex: 2, explanation: "Correct — `<tfoot>` holds **footer rows** like totals and summaries." },
    { id: "html-tablestruct-2", question: "What is the correct section order in markup?", options: ["tbody, thead, tfoot", "thead, tbody, tfoot", "tfoot, tbody, thead", "Any order works"], correctAnswerIndex: 1, explanation: "Right! The spec order is **thead → tbody → tfoot** — the order tools and printers expect." }
  ]
};

export const htmlAccessibleTablesContent: LessonContent = {
  heroTagline: "Build tables everyone can understand.",
  introduction: "A sighted user **scans** a table in one glance. A screen reader user **hears** it cell by cell, in the dark. **Accessible tables** — with `<caption>`, `<th>`, and `scope` attributes — are the map that guides them through your data.",
  definition: {
    term: "Accessible Table",
    explanation: "A table built with **`<caption>`, `<th>`, and `scope` attributes** so assistive technology can explain it."
  },
  whyItMatters: "A sighted user scans a table in a glance. A screen reader user hears it **cell by cell** — headers and captions are their map.",
  realWorldAnalogy: {
    title: "A Tour Guide in a Museum",
    story: "The **tour guide** announces each room's name before describing what is inside it. `<th>` with `scope` is that announcement; `<caption>` is the museum map.",
    comparison: [
      { item: "The room announcement", meaning: "A **`<th>` with `scope`** — labels the cells" },
      { item: "The museum map", meaning: "The **`<caption>`** — overviews the whole table" }
    ]
  },
  syntaxStructure: `<th scope="col">Name</th>
<th scope="row">Emma</th>`,
  codeExample: `<table>
  <caption>Exam Scores</caption>
  <tr>
    <th scope="col">Student</th>
    <th scope="col">Score</th>
  </tr>
  <tr>
    <th scope="row">Emma</th>
    <td>95</td>
  </tr>
</table>`,
  codeAnnotations: [
    { lineOrToken: "scope=\"col\"", description: "This header labels the column below it." },
    { lineOrToken: "scope=\"row\"", description: "This header labels the row beside it." }
  ],
  commonMistakes: [
    { wrong: `<tr>\n  <td class="bold">Student</td>\n  <td class="bold">Score</td>\n</tr>`, correct: `<tr>\n  <th scope="col">Student</th>\n  <th scope="col">Score</th>\n</tr>`, reason: "**Visual-only headers** are invisible to screen readers — semantic `<th>` with `scope` gets announced properly. Looks are not enough." }
  ],
  tryItYourself: {
    html: `<table>\n  <tr>\n    <th>Day</th>\n    <th>Hours</th>\n  </tr>\n</table>`,
    instructions: "Add scope=\"col\" to both header cells."
  },
  takeaways: [
    "Accessible tables use **`<caption>`, `<th>`, and `scope`**.",
    "`scope=\"col\"` labels a **column**; `scope=\"row\"` labels a **row**.",
    "Never fake headers with styled `<td>` cells."
  ],
  quizQuestions: [
    { id: "html-tablea11y-1", question: "What does scope=\"col\" tell a screen reader?", options: ["The table has columns", "This header labels the column below it", "The column is hidden", "The table is complete"], correctAnswerIndex: 1, explanation: "Correct — `scope` **ties each header to its cells**, so screen readers announce context for every cell." },
    { id: "html-tablea11y-2", question: "Which three pieces make a table accessible?", options: ["Borders, colors, fonts", "<caption>, <th>, and scope attributes", "Divs, spans, classes", "JavaScript, CSS, APIs"], correctAnswerIndex: 1, explanation: "Right! **Caption** titles it, **`th`** labels the headers, and **`scope`** connects headers to cells." }
  ]
};

export const htmlDivContent: LessonContent = {
  heroTagline: "The generic box that holds anything.",
  introduction: "Meet the **cardboard box** of HTML: the `<div>`. It has no meaning, no opinion, no style — just four walls you can fill with anything and paint with **CSS**. It is the most-used tag on the web, precisely because it means nothing.",
  definition: {
    term: "<div> Element",
    explanation: "A **generic block-level container** with no semantic meaning, used to group content for styling."
  },
  whyItMatters: "Before styling a section, you need **something to style**. `<div>` is the universal wrapper developers reach for.",
  realWorldAnalogy: {
    title: "A Cardboard Box",
    story: "A plain **box** can hold books, clothes, or dishes — the box itself means nothing. A `<div>` is that box: endlessly useful, completely meaning-free.",
    comparison: [
      { item: "The cardboard box", meaning: "A **`<div>`** — generic container, no meaning" },
      { item: "A labeled storage bin", meaning: "Semantic tags like `<article>` — **meaningful** containers" }
    ]
  },
  syntaxStructure: `<div>Content goes here</div>`,
  codeExample: `<div>
  <h2>Welcome</h2>
  <p>This content is grouped in a div.</p>
</div>`,
  codeAnnotations: [
    { lineOrToken: "<div>", description: "Block-level: starts on a new line and takes the full available width." }
  ],
  commonMistakes: [
    { wrong: `<div class="nav">...</div>\n<div class="footer">...</div>`, correct: `<nav>...</nav>\n<footer>...</footer>`, reason: "'**Div soup**' hides your page's structure from screen readers and search engines — use semantic tags where they fit." }
  ],
  tryItYourself: {
    html: `<h2>Sale</h2>\n<p>50% off everything.</p>`,
    instructions: "Wrap both elements in a <div> with class=\"promo\"."
  },
  takeaways: [
    "`<div>` is a **generic block-level** container.",
    "It carries **no meaning** — use it for grouping and styling.",
    "Prefer **semantic tags** (`<nav>`, `<footer>`) where they apply."
  ],
  quizQuestions: [
    { id: "html-div-1", question: "What does a <div> mean semantically?", options: ["It marks important content", "Nothing — it is a generic container", "It marks navigation", "It marks an article"], correctAnswerIndex: 1, explanation: "Correct — `<div>` has **no semantic meaning**; it is a plain grouping box." },
    { id: "html-div-2", question: "Is <div> a block or inline element?", options: ["Inline", "Block-level", "Neither", "Both"], correctAnswerIndex: 1, explanation: "Right! `<div>` starts on a **new line** and fills the available width — classic block-level behavior." }
  ]
};

export const htmlSpanContent: LessonContent = {
  heroTagline: "A tiny inline wrapper for a few words.",
  introduction: "Need to color **one word** red inside a paragraph — without breaking the sentence? A `<div>` would smash the line apart. The `<span>` tag is the **surgical wrapper**: invisible, inline, and perfect for styling tiny pieces of text.",
  definition: {
    term: "<span> Element",
    explanation: "A **generic inline container** with no meaning, used to style or target short runs of text."
  },
  whyItMatters: "To color one word red inside a paragraph, you need a wrapper that **does not break the line**. That is `<span>`.",
  realWorldAnalogy: {
    title: "A Rubber Band Around Two Fingers",
    story: "The **rubber band** groups two fingers together without covering your whole hand. `<span>` wraps a few words without disturbing the whole paragraph.",
    comparison: [
      { item: "The rubber band", meaning: "A **`<span>`** — wraps a small part inline" },
      { item: "Your hand", meaning: "The **paragraph** — the larger flow around it" }
    ]
  },
  syntaxStructure: `<p>Only <span>this part</span> is special.</p>`,
  codeExample: `<p>Sale ends in <span>2 days</span> — hurry!</p>
<p>Your balance: <span>$45.00</span></p>`,
  codeAnnotations: [
    { lineOrToken: "<span>", description: "Inline: flows with the surrounding text, no line break." }
  ],
  commonMistakes: [
    { wrong: `<p>Price: <div class="red">$45</div> today</p>`, correct: `<p>Price: <span class="red">$45</span> today</p>`, reason: "`<div>` is **invalid inside** `<p>` — the browser will split your paragraph unexpectedly. `<span>` is the inline wrapper." }
  ],
  tryItYourself: {
    html: `<p>Welcome to our store.</p>`,
    instructions: "Wrap the word 'store' in a <span> with class=\"highlight\"."
  },
  takeaways: [
    "`<span>` is a **generic inline** container.",
    "It wraps words inside sentences **without breaking lines**.",
    "Use it (not `<div>`) for styling **text fragments**."
  ],
  quizQuestions: [
    { id: "html-span-1", question: "What is the difference between <div> and <span>?", options: ["No difference", "<div> is block-level; <span> is inline", "<span> is block-level", "<div> cannot contain text"], correctAnswerIndex: 1, explanation: "Correct — `<div>` starts a **new line** as a block; `<span>` flows **inline** within text." },
    { id: "html-span-2", question: "Why use <span> instead of <div> inside a paragraph?", options: ["Spans are prettier", "<div> is invalid inside <p> and breaks it", "Spans load faster", "Divs can't be styled"], correctAnswerIndex: 1, explanation: "Right! **Block elements** cannot live inside paragraphs — the browser splits the paragraph. `<span>` is the inline wrapper." }
  ]
};

export const htmlClassesContent: LessonContent = {
  heroTagline: "Label elements so CSS can style them in groups.",
  introduction: "Styling **50 buttons** one by one is madness. The `class` attribute is your army uniform: slap the same **reusable label** on every button, style it once in CSS, and all 50 snap to attention instantly.",
  definition: {
    term: "class Attribute",
    explanation: "A **reusable label** on an element that CSS and JavaScript use to select groups of elements."
  },
  whyItMatters: "Styling 50 buttons one by one is madness. **One class** styles them all — change it once, update everywhere.",
  realWorldAnalogy: {
    title: "Team Jerseys",
    story: "Every player on a team wears the **same jersey color** so you spot them instantly. A class name is that jersey color — one label, whole team.",
    comparison: [
      { item: "The jersey color", meaning: "A **class name** — shared by the whole group" },
      { item: "The team", meaning: "All **elements** sharing that class" }
    ]
  },
  syntaxStructure: `<p class="highlight">...</p>`,
  codeExample: `<p class="note">First note</p>
<p class="note">Second note</p>
<p class="note warning">Urgent note</p>`,
  codeAnnotations: [
    { lineOrToken: "class=\"note\"", description: "A shared label — CSS can target all elements with this class at once." },
    { lineOrToken: "class=\"note warning\"", description: "Two classes on one element, separated by a space." }
  ],
  commonMistakes: [
    { wrong: `<p class="my note">Hi</p>`, correct: `<p class="my-note">Hi</p>`, reason: "A space separates classes — `class=\"my note\"` silently creates **TWO** classes ('my' and 'note'). Use hyphens for multi-word names." }
  ],
  tryItYourself: {
    html: `<p>Hello</p>\n<p>World</p>`,
    instructions: "Give both paragraphs the class \"greeting\"."
  },
  takeaways: [
    "Classes are **reusable labels** shared by many elements.",
    "One element can have **multiple classes**, space-separated.",
    "Use **hyphens** in names — spaces split classes apart."
  ],
  quizQuestions: [
    { id: "html-class-1", question: "How many elements can share one class?", options: ["Only one", "As many as you like", "Maximum five", "Two"], correctAnswerIndex: 1, explanation: "Correct — classes are **reusable**: any number of elements can share one class." },
    { id: "html-class-2", question: "What does class=\"my note\" actually create?", options: ["One class named 'my note'", "Two classes: 'my' and 'note'", "An error", "An id"], correctAnswerIndex: 1, explanation: "Right! **Spaces separate** class names, so `class=\"my note\"` creates two separate classes." }
  ]
};
export const htmlIdsContent: LessonContent = {
  heroTagline: "Give one element a unique name.",
  introduction: "Millions of people share a nationality, but your **passport number** belongs to you alone. The `id` attribute is an element's passport number: a **unique identifier** that appears exactly once per page.",
  definition: {
    term: "id Attribute",
    explanation: "A **unique identifier** for a single element, used by CSS, JavaScript, and `#anchor` links."
  },
  whyItMatters: "**Anchor links**, form labels, and JavaScript all need to pinpoint one exact element. The `id` is its address.",
  realWorldAnalogy: {
    title: "A Passport Number",
    story: "Millions share a **nationality**, but your **passport number** belongs to you alone. Classes are the nationality (shared); an `id` is the passport number (unique).",
    comparison: [
      { item: "The passport number", meaning: "An **`id`** — unique to one element" },
      { item: "The nationality", meaning: "A **`class`** — shared by many" }
    ]
  },
  syntaxStructure: `<section id="menu">...</section>`,
  codeExample: `<header id="top">...</header>
<a href="#top">Back to top</a>

<form>
  <label for="email">Email:</label>
  <input id="email" type="email">
</form>`,
  codeAnnotations: [
    { lineOrToken: "id=\"top\"", description: "A unique target — the 'Back to top' link jumps exactly here." },
    { lineOrToken: "for=\"email\" + id=\"email\"", description: "The label finds its input through the matching id." }
  ],
  commonMistakes: [
    { wrong: `<div id="menu">...</div>\n<div id="menu">...</div>`, correct: `<div class="menu">...</div>\n<div class="menu">...</div>`, reason: "**Duplicate ids** break anchor jumps and confuse JavaScript — only the first match is found. Use a class for shared styling." }
  ],
  tryItYourself: {
    html: `<section>Menu content</section>`,
    instructions: "Give the section the id \"menu\"."
  },
  takeaways: [
    "An `id` must be **unique** — one per page.",
    "**Anchor links** (`#id`) and labels (`for`/`id`) depend on ids.",
    "Use **classes** for anything shared; ids for singletons."
  ],
  quizQuestions: [
    { id: "html-id-1", question: "How many times can an id appear on a page?", options: ["Unlimited", "Exactly once", "Twice", "Ten times"], correctAnswerIndex: 1, explanation: "Correct — IDs must be **unique**. Duplicates break links and scripts." },
    { id: "html-id-2", question: "What connects a <label> to its <input>?", options: ["The class attribute", "Matching for and id values", "Being on the same line", "The name attribute"], correctAnswerIndex: 1, explanation: "Right! The label's **`for`** attribute must match the input's **`id`** exactly." }
  ]
};

export const htmlBlockElementsContent: LessonContent = {
  heroTagline: "Elements that claim the whole line.",
  introduction: "Why does a `<div>` claim the **whole line** while a `<span>` shares it? Welcome to the great divide of HTML: **block elements** vs **inline elements**. Blocks — like `<p>`, `<div>`, `<h1>` — start on a new line and stretch to fill the full width.",
  definition: {
    term: "Block-level Element",
    explanation: "An element that **starts on a new line**, takes the full available width, and stacks vertically."
  },
  whyItMatters: "**Page layout** is just blocks stacked on blocks. Knowing which elements are blocks explains why your content flows the way it does.",
  realWorldAnalogy: {
    title: "Bricks in a Wall",
    story: "Each **brick** spans its row, and the next brick starts on the row below. Block elements stack the same way — one full-width row after another.",
    comparison: [
      { item: "One brick", meaning: "A **block element** — full width, own line" },
      { item: "The wall", meaning: "**Your page** — blocks stacked vertically" }
    ]
  },
  syntaxStructure: `<p>Block</p>
<div>Block</div>`,
  codeExample: `<h1>Title</h1>
<p>First paragraph.</p>
<p>Second paragraph.</p>
<div>A div block.</div>`,
  codeAnnotations: [
    { lineOrToken: "<h1>, <p>, <div>", description: "Each starts on its own line and fills the available width." }
  ],
  commonMistakes: [
    { wrong: `<span>\n  <div>Block inside inline</div>\n</span>`, correct: `<div>\n  <span>Inline inside block</span>\n</div>`, reason: "**Inline elements** cannot contain block elements — the browser will mangle the nesting. Blocks can contain inline elements, not the reverse." }
  ],
  tryItYourself: {
    html: `<p>One</p><p>Two</p>`,
    instructions: "Notice how each paragraph starts on its own line — that's block behavior. Add a third paragraph."
  },
  takeaways: [
    "Block elements start on a **new line** and fill the width.",
    "They **stack vertically** down the page.",
    "Examples: `<p>`, `<div>`, `<h1>`, `<ul>`, `<section>`."
  ],
  quizQuestions: [
    { id: "html-block-1", question: "Which is a block-level element?", options: ["<span>", "<a>", "<div>", "<strong>"], correctAnswerIndex: 2, explanation: "Correct — `<div>` starts on a **new line** and fills the width: classic block behavior." },
    { id: "html-block-2", question: "Can a <div> go inside a <span>?", options: ["Yes, always", "No — inline elements can't contain blocks", "Only with CSS", "Only in HTML5"], correctAnswerIndex: 1, explanation: "Right! **Inline elements** cannot contain block-level elements — the nesting would break." }
  ]
};

export const htmlInlineElementsContent: LessonContent = {
  heroTagline: "Elements that flow inside your sentences.",
  introduction: "Links and bold words must sit **inside** sentences — not on lonely lines of their own. **Inline elements** like `<a>`, `<span>`, and `<strong>` flow within the text, taking up only as much room as their content needs.",
  definition: {
    term: "Inline Element",
    explanation: "An element that **flows within surrounding text** without breaking to a new line."
  },
  whyItMatters: "Links and bold words must sit **inside sentences**, not on their own lines. Inline elements make that possible.",
  realWorldAnalogy: {
    title: "Words in a Sentence",
    story: "**Words** sit side by side in a line; none demands its own line. Inline elements behave exactly like words.",
    comparison: [
      { item: "A word", meaning: "An **inline element** — shares the line" },
      { item: "A paragraph", meaning: "A **block element** — claims its own lines" }
    ]
  },
  syntaxStructure: `<p>Text with <a>link</a> and <strong>bold</strong> inside.</p>`,
  codeExample: `<p>Visit <a href="shop.html">our shop</a> for <strong>fresh</strong> bread and <em>warm</em> smiles.</p>`,
  codeAnnotations: [
    { lineOrToken: "<a>, <strong>, <em>", description: "All inline — they share the line with the surrounding text." }
  ],
  commonMistakes: [
    { wrong: `<span style="width: 300px; height: 100px;">Box</span>`, correct: `<div style="width: 300px; height: 100px;">Box</div>`, reason: "**Inline boxes** size to their content — `width` and `height` simply do not apply. Use a block element (or CSS `display`) for sized boxes." }
  ],
  tryItYourself: {
    html: `<p>I love pizza.</p>`,
    instructions: "Wrap the word 'pizza' in <strong> tags — notice it stays on the same line."
  },
  takeaways: [
    "Inline elements **flow within text** — no new lines.",
    "They size to their **content**; width/height do not apply.",
    "Examples: `<a>`, `<span>`, `<strong>`, `<em>`, `<img>`."
  ],
  quizQuestions: [
    { id: "html-inline-1", question: "Which is an inline element?", options: ["<div>", "<p>", "<span>", "<section>"], correctAnswerIndex: 2, explanation: "Correct — `<span>` flows **inside text** without starting a new line." },
    { id: "html-inline-2", question: "Why doesn't width work on a <span>?", options: ["Spans are broken", "Inline elements size to their content", "Width only works on images", "You need JavaScript"], correctAnswerIndex: 1, explanation: "Right! **Inline boxes** wrap their content; `width` and `height` simply do not apply to them." }
  ]
};

export const htmlContainersContent: LessonContent = {
  heroTagline: "Group related content into tidy boxes.",
  introduction: "You cannot style '**the sidebar**' without a wrapper around it. **Containers** — `<div>` for blocks, `<span>` for inline runs — wrap related content so you can style or move it as **one unit**.",
  definition: {
    term: "Container Element",
    explanation: "An element (usually **`<div>` or `<span>`**) used to group other content for styling or scripting."
  },
  whyItMatters: "You cannot style 'the sidebar' without a **wrapper** around it. Containers turn loose content into manageable chunks.",
  realWorldAnalogy: {
    title: "Gift Boxes",
    story: "You put the **scarf, gloves, and card** into one gift box — now it is a single present. A container `<div>` turns scattered content into a single styled unit.",
    comparison: [
      { item: "The gift box", meaning: "A **container** `<div>` — holds the group" },
      { item: "The items", meaning: "The **grouped content** — styled as one unit" }
    ]
  },
  syntaxStructure: `<div class="card">
  <h3>Title</h3>
  <p>Description</p>
</div>`,
  codeExample: `<div class="product-card">
  <img src="shoes.jpg" alt="Running shoes">
  <h3>Runner Pro</h3>
  <p>$79 — free shipping</p>
  <a href="buy.html">Buy now</a>
</div>`,
  codeAnnotations: [
    { lineOrToken: "<div class=\"product-card\">", description: "One wrapper grouping image, title, price, and link as a single card." }
  ],
  commonMistakes: [
    { wrong: `<div><div><div><span>Hi</span></div></div></div>`, correct: `<div class="greeting"><span>Hi</span></div>`, reason: "Too many wrappers **bloat the code** and slow down styling — one container per logical group is enough." }
  ],
  tryItYourself: {
    html: `<h3>Profile</h3>\n<p>A web developer.</p>`,
    instructions: "Wrap both elements in a <div> with class=\"profile-card\"."
  },
  takeaways: [
    "Containers **group** related content for styling.",
    "`<div>` groups **blocks**; `<span>` groups inline text.",
    "**One container** per logical group — avoid wrapper overload."
  ],
  quizQuestions: [
    { id: "html-containers-1", question: "What is a container element for?", options: ["Playing videos", "Grouping related content for styling", "Creating links", "Submitting forms"], correctAnswerIndex: 1, explanation: "Correct — containers wrap related content so it can be **styled or moved** as one unit." },
    { id: "html-containers-2", question: "Which container suits a product card (image + title + price)?", options: ["<span>", "<div>", "<br>", "<hr>"], correctAnswerIndex: 1, explanation: "Right! A product card is **block-level** content — `<div>` is the right grouping wrapper." }
  ]
};

export const htmlHeaderContent: LessonContent = {
  heroTagline: "The welcoming banner at the top.",
  introduction: "Every great website opens with a familiar face: the **logo**, the site title, the navigation — the top banner. The `<header>` tag marks this **introductory content**, and a page can even have several (one per article).",
  definition: {
    term: "<header> Element",
    explanation: "A **semantic container** for introductory content — logos, titles, and navigation."
  },
  whyItMatters: "Screen readers offer a '**jump to header**' shortcut. A real `<header>` makes your site's top instantly reachable.",
  realWorldAnalogy: {
    title: "A Book's Cover Page",
    story: "The **cover** shows the title and author before the story begins. The `<header>` is that cover — it introduces everything inside.",
    comparison: [
      { item: "The book cover", meaning: "The **`<header>`** — introduces what is inside" },
      { item: "The story", meaning: "The **`<main>`** content — the actual substance" }
    ]
  },
  syntaxStructure: `<header>
  <img src="logo.png" alt="Site logo">
  <h1>My Bakery</h1>
</header>`,
  codeExample: `<header>
  <img src="logo.png" alt="Sunrise Bakery logo">
  <h1>Sunrise Bakery</h1>
  <nav>
    <a href="index.html">Home</a>
    <a href="menu.html">Menu</a>
  </nav>
</header>`,
  codeAnnotations: [
    { lineOrToken: "<header>", description: "A landmark: assistive technology lists it as the page banner." }
  ],
  commonMistakes: [
    { wrong: `<article>\n  <p>Some text</p>\n  <header>Big bold heading here</header>\n</article>`, correct: `<article>\n  <header>\n    <h2>Article title</h2>\n  </header>\n  <p>Some text</p>\n</article>`, reason: "`<header>` is for **introductory content** of a page or section — not a styling trick for large mid-article text." }
  ],
  tryItYourself: {
    html: `<h1>My Site</h1>`,
    instructions: "Wrap the heading in <header> tags."
  },
  takeaways: [
    "`<header>` holds **introductory** content: logo, title, nav.",
    "Usually at the top, but **sections** can have their own.",
    "Do not use it just to make text **look big**."
  ],
  quizQuestions: [
    { id: "html-header-1", question: "What typically goes inside <header>?", options: ["The page footer links", "Logo, site title, and navigation", "Form submit buttons", "Video players"], correctAnswerIndex: 1, explanation: "Correct — `<header>` holds **introductory content** like the logo, title, and nav." },
    { id: "html-header-2", question: "Can a page have more than one <header>?", options: ["No — exactly one", "Yes — articles and sections can have their own", "Only with JavaScript", "Never"], correctAnswerIndex: 1, explanation: "Right! Each **article or section** can have its own introductory header." }
  ]
};
export const htmlNavigationContent: LessonContent = {
  heroTagline: "Build the menu that guides your visitors.",
  introduction: "Lost visitors do not read — they **hunt for the menu**. The `<nav>` tag marks a major block of **navigation links** and announces to assistive tech: 'these links help you move around.'",
  definition: {
    term: "<nav> Element",
    explanation: "A **semantic container** for major navigation link blocks."
  },
  whyItMatters: "Screen reader users can **jump straight** to the nav landmark. A plain `<div>` of links offers no such shortcut.",
  realWorldAnalogy: {
    title: "Signposts at a Crossroads",
    story: "**Signposts** list the roads you can take from one spot. `<nav>` is that signpost — a block of directional links pointing every which way.",
    comparison: [
      { item: "The signpost", meaning: "The **`<nav>`** — a block of directional links" },
      { item: "Each road", meaning: "**One link** — a path to another page" }
    ]
  },
  syntaxStructure: `<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
</nav>`,
  codeExample: `<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="order.html">Order Online</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`,
  codeAnnotations: [
    { lineOrToken: "<nav>", description: "A landmark: screen readers list it as the navigation region." }
  ],
  commonMistakes: [
    { wrong: `<nav><a href="a.html">Home</a></nav>\n<nav><a href="fb.com">Facebook</a></nav>\n<nav><a href="tw.com">Twitter</a></nav>`, correct: `<nav><a href="a.html">Home</a></nav>\n<p><a href="fb.com">Facebook</a> <a href="tw.com">Twitter</a></p>`, reason: "Reserve `<nav>` for **major navigation** — too many nav landmarks bury the main menu in screen reader lists." }
  ],
  tryItYourself: {
    html: `<a href="index.html">Home</a>\n<a href="about.html">About</a>`,
    instructions: "Wrap both links in a <nav> element."
  },
  takeaways: [
    "`<nav>` marks **major navigation** link blocks.",
    "Screen readers offer a **jump-to-nav** shortcut.",
    "Do not wrap **every small link group** in `<nav>`."
  ],
  quizQuestions: [
    { id: "html-nav-1", question: "What is <nav> for?", options: ["Any group of links", "Major navigation blocks like the main menu", "Styling text", "Embedding videos"], correctAnswerIndex: 1, explanation: "Correct — `<nav>` marks **primary navigation**: the main menu, table of contents, or pagination." },
    { id: "html-nav-2", question: "Why use <nav> instead of <div> for a menu?", options: ["It looks better", "Assistive tech recognizes it as a navigation landmark", "It loads faster", "Divs are deprecated"], correctAnswerIndex: 1, explanation: "Right! Screen readers list `<nav>` as a **landmark** users can jump to directly. A `<div>` is invisible to that system." }
  ]
};

export const htmlMainContent: LessonContent = {
  heroTagline: "One tag for the heart of your page.",
  introduction: "Strip away the header, the nav, the footer, the ads — what is left is the **reason the page exists**. The `<main>` tag wraps that central content, and there must be **exactly one** per page. No more, no less.",
  definition: {
    term: "<main> Element",
    explanation: "A **semantic container** for the page's primary, unique content — exactly one per page."
  },
  whyItMatters: "'**Skip to main content**' is the most-used accessibility shortcut on the web. `<main>` is its target.",
  realWorldAnalogy: {
    title: "The Stage in a Theater",
    story: "The **lobby** and exits matter, but the play happens on the **one stage**. `<main>` is that stage — where the primary content performs.",
    comparison: [
      { item: "The stage", meaning: "The **`<main>`** — where the primary content performs" },
      { item: "Lobby and exits", meaning: "**Header, nav, footer** — supporting areas" }
    ]
  },
  syntaxStructure: `<main>
  <h1>Article title</h1>
  <p>Article content...</p>
</main>`,
  codeExample: `<header>...</header>
<nav>...</nav>
<main>
  <h1>Our Story</h1>
  <p>Founded in 2010, our bakery...</p>
</main>
<footer>...</footer>`,
  codeAnnotations: [
    { lineOrToken: "<main>", description: "Exactly one per page — the unique content lives here, not repeated site chrome." }
  ],
  commonMistakes: [
    { wrong: `<main>...</main>\n<main>...</main>`, correct: `<main>...</main>\n<section>...</section>`, reason: "**Duplicate mains** break the 'skip to content' shortcut — assistive technology expects a single target." }
  ],
  tryItYourself: {
    html: `<header>Top</header>\n<p>Article text here.</p>\n<footer>Bottom</footer>`,
    instructions: "Wrap the paragraph in <main> tags."
  },
  takeaways: [
    "`<main>` wraps the page's **primary unique** content.",
    "**Exactly one** `<main>` per page.",
    "It powers the '**skip to main content**' shortcut."
  ],
  quizQuestions: [
    { id: "html-main-1", question: "How many <main> elements should a page have?", options: ["As many as needed", "Exactly one", "At least three", "Zero"], correctAnswerIndex: 1, explanation: "Correct — there must be **exactly one** `<main>` per page, holding the primary content." },
    { id: "html-main-2", question: "What belongs inside <main>?", options: ["The site logo and nav", "The page's unique primary content", "The copyright line", "Advertisements only"], correctAnswerIndex: 1, explanation: "Right! `<main>` holds the **central content** — not the repeated header, nav, or footer." }
  ]
};

export const htmlSectionContent: LessonContent = {
  heroTagline: "Group content around one theme.",
  introduction: "Homepages are not random piles of content — they have **Features**, **Testimonials**, **Pricing** districts. The `<section>` tag groups related content under one **theme**, usually crowned with a heading.",
  definition: {
    term: "<section> Element",
    explanation: "A **semantic container** for a thematically-grouped chunk of content, typically with its own heading."
  },
  whyItMatters: "**Sections** create the document outline. Search engines and screen readers use them to understand your page's structure.",
  realWorldAnalogy: {
    title: "Chapters in a Book",
    story: "Each **chapter** covers one part of the story under its own title. A `<section>` is that chapter — one theme, grouped together.",
    comparison: [
      { item: "A chapter", meaning: "A **`<section>`** — one theme, grouped together" },
      { item: "The chapter title", meaning: "The section's **heading** — names the theme" }
    ]
  },
  syntaxStructure: `<section>
  <h2>Features</h2>
  <p>...</p>
</section>`,
  codeExample: `<section>
  <h2>Customer Reviews</h2>
  <article>
    <p>"Best croissants in town!" — Sara</p>
  </article>
  <article>
    <p>"Warm bread every morning." — Ali</p>
  </article>
</section>`,
  codeAnnotations: [
    { lineOrToken: "<section>", description: "A thematic group — ask 'would this have a heading?' If yes, <section> fits." }
  ],
  commonMistakes: [
    { wrong: `<section class="wrapper">\n  <div>...</div>\n</section>`, correct: `<div class="wrapper">\n  <div>...</div>\n</div>`, reason: "A section without a theme **pollutes the document outline** — use `<div>` for pure styling wrappers." }
  ],
  tryItYourself: {
    html: `<h2>Features</h2>\n<p>Fast delivery.</p>`,
    instructions: "Wrap both elements in a <section>."
  },
  takeaways: [
    "`<section>` groups content around **one theme**.",
    "Sections usually begin with a **heading**.",
    "Do not use it as a generic styling wrapper — that is `<div>`'s job."
  ],
  quizQuestions: [
    { id: "html-section-1", question: "When is <section> the right tag?", options: ["For any <div>", "For a thematically-grouped chunk, usually with a heading", "For navigation menus", "For footers"], correctAnswerIndex: 1, explanation: "Correct — `<section>` groups related content under a **common theme**, typically introduced by a heading." },
    { id: "html-section-2", question: "Why not use <section> as a plain styling wrapper?", options: ["It can't be styled", "It pollutes the document outline with meaningless entries", "It breaks CSS", "It is deprecated"], correctAnswerIndex: 1, explanation: "Right! Sections feed the **document outline** — themeless sections create noise for search engines and screen readers." }
  ]
};

export const htmlArticleContent: LessonContent = {
  heroTagline: "Self-contained content that stands alone.",
  introduction: "Could you **clip it out** of the page and would it still make complete sense? A blog post, a news story, a product card — if yes, it is an `<article>`: content that is **independent and self-contained**.",
  definition: {
    term: "<article> Element",
    explanation: "A **semantic container** for independent, self-contained content."
  },
  whyItMatters: "**Search engines** treat articles as distributable units. Proper `<article>` markup helps your posts appear in news and feeds.",
  realWorldAnalogy: {
    title: "A Newspaper Article",
    story: "You can **clip one article** from the paper and it still makes complete sense on the fridge. `<article>` is that clippable unit.",
    comparison: [
      { item: "The clipped article", meaning: "An **`<article>`** — complete on its own" },
      { item: "The full newspaper", meaning: "The **page** — contains many articles" }
    ]
  },
  syntaxStructure: `<article>
  <h2>Post title</h2>
  <p>Post content...</p>
</article>`,
  codeExample: `<article>
  <h2>5 Bread Baking Tips</h2>
  <p>Published on March 3, 2026</p>
  <p>Tip 1: Always preheat your oven...</p>
  <a href="tips.html">Read more</a>
</article>`,
  codeAnnotations: [
    { lineOrToken: "<article>", description: "Self-contained: this block would still make sense if syndicated alone." }
  ],
  commonMistakes: [
    { wrong: `<article>\n  <nav>...</nav>\n  <main>...</main>\n  <footer>...</footer>\n</article>`, correct: `<main>\n  <article>...</article>\n  <article>...</article>\n</main>`, reason: "A whole page with nav and footer is not **self-contained** content — articles live inside the page's main area." }
  ],
  tryItYourself: {
    html: `<h2>My Trip</h2>\n<p>We visited the mountains.</p>`,
    instructions: "Wrap both elements in an <article>."
  },
  takeaways: [
    "`<article>` marks **independent, self-contained** content.",
    "**Blog posts**, news stories, and product cards are articles.",
    "The test: would it make sense **syndicated alone**?"
  ],
  quizQuestions: [
    { id: "html-article-1", question: "Which content suits <article>?", options: ["The site navigation", "A standalone blog post", "The page footer", "A search box"], correctAnswerIndex: 1, explanation: "Correct — a **blog post** is self-contained; it makes sense on its own, even in a feed." },
    { id: "html-article-2", question: "Should the whole page be wrapped in <article>?", options: ["Yes, always", "No — the page isn't self-contained content", "Only homepages", "Only with CSS"], correctAnswerIndex: 1, explanation: "Right! **Articles** are units within a page; the whole page (with nav and footer) cannot stand alone." }
  ]
};

export const htmlAsideContent: LessonContent = {
  heroTagline: "Side notes that orbit the main content.",
  introduction: "Textbooks have **margin notes** — little extras related to the chapter but not part of it. The `<aside>` tag is that margin: **sidebars**, pull quotes, related links, and ads. Related, but not central.",
  definition: {
    term: "<aside> Element",
    explanation: "A **semantic container** for tangentially-related content like sidebars and pull quotes."
  },
  whyItMatters: "**Asides** let readers explore related ideas without interrupting the main flow. Screen readers can skip them when desired.",
  realWorldAnalogy: {
    title: "Margin Notes in a Textbook",
    story: "**Margin notes** add context without breaking the chapter's flow. `<aside>` is that margin — interesting, related, but skippable.",
    comparison: [
      { item: "The margin note", meaning: "An **`<aside>`** — related but not central" },
      { item: "The chapter text", meaning: "The **main content** — the core reading" }
    ]
  },
  syntaxStructure: `<aside>
  <h3>Did you know?</h3>
  <p>...</p>
</aside>`,
  codeExample: `<main>
  <article>
    <h2>How Bread Rises</h2>
    <p>Yeast feeds on sugars...</p>
  </article>
  <aside>
    <h3>Related Reading</h3>
    <a href="flour.html">Choosing the right flour</a>
  </aside>
</main>`,
  codeAnnotations: [
    { lineOrToken: "<aside>", description: "Related but removable — the article still works perfectly without it." }
  ],
  commonMistakes: [
    { wrong: `<aside>\n  <a href="a.html">Home</a>\n  <a href="b.html">Shop</a>\n</aside>`, correct: `<nav>\n  <a href="a.html">Home</a>\n  <a href="b.html">Shop</a>\n</nav>`, reason: "`<aside>` means **tangential** content — main navigation is central, not a side note. Navigation belongs in `<nav>`." }
  ],
  tryItYourself: {
    html: `<article>\n  <h2>Bread</h2>\n  <p>Fresh daily.</p>\n</article>`,
    instructions: "Add an <aside> after the article with a fun bread fact."
  },
  takeaways: [
    "`<aside>` holds **tangentially-related** content.",
    "**Sidebars**, pull quotes, and related links are asides.",
    "Main navigation is **not** an aside — use `<nav>`."
  ],
  quizQuestions: [
    { id: "html-aside-1", question: "What belongs in <aside>?", options: ["The main article", "Sidebars and related links", "The site logo", "Form submit buttons"], correctAnswerIndex: 1, explanation: "Correct — `<aside>` holds content **related** to the main topic but not central to it." },
    { id: "html-aside-2", question: "Should main navigation go in <aside>?", options: ["Yes", "No — navigation belongs in <nav>", "Only on mobile", "Only in footers"], correctAnswerIndex: 1, explanation: "Right! **Navigation** is central, not tangential — `<nav>` is its proper home." }
  ]
};

export const htmlFooterContent: LessonContent = {
  heroTagline: "Close your page with the fine print.",
  introduction: "Every movie ends with **credits** — who made it, where to find more. The `<footer>` tag is your page's credits roll: **copyright** lines, contact info, sitemaps, and social links. Usually at the bottom, but any section can have one.",
  definition: {
    term: "<footer> Element",
    explanation: "A **semantic container** for closing content — copyright, contact details, and secondary links."
  },
  whyItMatters: "Visitors **scroll to the bottom** hunting for contact info and legal pages. `<footer>` is where they expect to find them.",
  realWorldAnalogy: {
    title: "Credits at the End of a Movie",
    story: "After the story ends, the **credits** list who made it all happen. The `<footer>` is those credits — the closing information everyone looks for.",
    comparison: [
      { item: "The end credits", meaning: "The **`<footer>`** — closing information" },
      { item: "The film", meaning: "The **page content** — the main experience" }
    ]
  },
  syntaxStructure: `<footer>
  <p>© 2026 My Bakery</p>
</footer>`,
  codeExample: `<footer>
  <p>© 2026 Sunrise Bakery. All rights reserved.</p>
  <p>123 Main St · <a href="tel:+15551234567">555-1234</a></p>
  <a href="privacy.html">Privacy Policy</a>
</footer>`,
  codeAnnotations: [
    { lineOrToken: "<footer>", description: "A landmark: the expected home of copyright, contact, and legal links." }
  ],
  commonMistakes: [
    { wrong: `<footer>\n  <!-- 50 links, sitemap, 10 paragraphs -->\n</footer>`, correct: `<footer>\n  <p>© 2026 Site. <a href="privacy.html">Privacy</a> · <a href="contact.html">Contact</a></p>\n</footer>`, reason: "A **bloated footer** buries the important links and overwhelms screen reader users — keep it lean and focused." }
  ],
  tryItYourself: {
    html: `<p>© 2026 My Site</p>`,
    instructions: "Wrap the paragraph in <footer> tags and add a Privacy Policy link."
  },
  takeaways: [
    "`<footer>` holds **closing** content: copyright, contact, legal links.",
    "Usually at the page bottom; **sections** can have their own.",
    "Keep it focused — not a **dumping ground** for links."
  ],
  quizQuestions: [
    { id: "html-footer-1", question: "What typically goes in <footer>?", options: ["The main article", "Copyright, contact info, and secondary links", "The navigation menu", "Video players"], correctAnswerIndex: 1, explanation: "Correct — `<footer>` holds **closing content** like copyright lines and legal links." },
    { id: "html-footer-2", question: "Can a <section> have its own <footer>?", options: ["No — one per page", "Yes — footers can close any section", "Only with JavaScript", "Never"], correctAnswerIndex: 1, explanation: "Right! `<footer>` marks closing content for its **nearest section** — or the whole page." }
  ]
};
