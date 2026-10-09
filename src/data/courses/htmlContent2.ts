import { LessonContent } from '../../types';

// ============================================================
// HTML Course — Unique lesson content, Part 2
// Modules 1-4: Fundamentals (Comments), Text and Content,
// Links, Images and Media
// ============================================================

export const htmlHtmlCommentsContent: LessonContent = {
  heroTagline: "Leave notes in your code that browsers never show.",
  introduction: "Imagine writing a **secret diary** that only you can read — everyone else just sees a blank page. That is exactly what an **HTML comment** is: a hidden note tucked inside your code. The **browser** pretends it is not there, but any curious human peeking at your **source code** can read every word.",
  definition: {
    term: "HTML Comment (<!-- -->)",
    explanation: "Anything you wrap between `<!--` and `-->` becomes **invisible ink**. The browser skips it completely, yet it stays in your file for fellow humans to find."
  },
  whyItMatters: "Here is the truth nobody tells beginners: you **will** forget what your own code does. Two weeks from now, that clever section will look like ancient hieroglyphics. A one-line **comment** is a gift to your **future self** — it turns hours of head-scratching into a five-second 'oh, right!'",
  realWorldAnalogy: {
    title: "Secret Notes to Your Future Self",
    story: "You stick a note on the fridge: 'Do NOT eat the leftovers — saving them for lunch!' Your roommate walks past and never notices it, but **you** read it loud and clear. Comments work the same way: invisible to the **browser**, crystal clear to **developers**.",
    comparison: [
      { item: "The fridge note", meaning: "The **comment** — a message only for code readers" },
      { item: "Your roommate walking past", meaning: "The **browser** — completely ignores it and renders the page" }
    ]
  },
  syntaxStructure: `<!-- Your note goes here -->`,
  codeExample: `<!-- Main heading of the page -->
<h1>Welcome to My Bakery</h1>

<!-- Navigation links -->
<nav>
  <a href="#menu">Menu</a>
  <a href="#about">About</a>
</nav>`,
  codeAnnotations: [
    { lineOrToken: "<!--", description: "Opens a comment. The browser skips everything from here until the closing marker." },
    { lineOrToken: "-->", description: "Closes the comment. Normal page content continues after this point." }
  ],
  commonMistakes: [
    { wrong: `<!-- My note`, correct: `<!-- My note -->`, reason: "Scary but true: one **unclosed comment** swallows your whole page like a black hole. Always close what you open!" }
  ],
  tryItYourself: {
    html: `<!-- Write your comment here -->
<p>My first webpage</p>`,
    instructions: "Replace the comment text with a note describing what this paragraph is about."
  },
  takeaways: [
    "Comments live between `<!--` and `-->` markers.",
    "**Browsers** hide them — only people reading your code can see them.",
    "Explain **why** the code exists, never state the obvious."
  ],
  quizQuestions: [
    { id: "html-comments-1", question: "Which code creates an HTML comment?", options: ["<comment>text</comment>", "<!-- text -->", "// text", "# text"], correctAnswerIndex: 1, explanation: "Exactly right! `<!--` opens the comment and `-->` closes it — nothing else in HTML does this job." },
    { id: "html-comments-2", question: "What happens to comments when a browser loads the page?", options: ["They appear as gray text", "They are ignored and hidden", "They show in the page title", "They cause an error"], correctAnswerIndex: 1, explanation: "Spot on — browsers skip **comments** entirely. They are strictly behind-the-scenes notes for developers." }
  ]
};

export const htmlLineBreaksContent: LessonContent = {
  heroTagline: "End a line exactly where you want it to end.",
  introduction: "Here is a prank HTML plays on every beginner: you press **Enter** in your code, proud of your neat lines — and the browser smashes them into one line anyway. HTML **collapses** your line breaks on purpose. The `<br>` tag is your way of saying 'no really, break **here**.'",
  definition: {
    term: "Line Break (<br>)",
    explanation: "A tiny **empty tag** that drops everything after it onto a brand-new line, exactly where you place it. No closing tag, no fuss."
  },
  whyItMatters: "Think about an **address**, a **poem**, or **song lyrics** — squash those into one line and they turn into unreadable soup. `<br>` gives you surgical control over where each line ends.",
  realWorldAnalogy: {
    title: "The Bossy Enter Key",
    story: "Your phone's **Enter key** starts a new line whenever **you** decide. The `<br>` tag is that same Enter key, but for the **browser** — it obeys your command instantly, mid-sentence if you want.",
    comparison: [
      { item: "Your Enter key", meaning: "Your instruction to start a **new line**" },
      { item: "The `<br>` tag", meaning: "The browser's Enter key — breaks the line on command" }
    ]
  },
  syntaxStructure: `<br>`,
  codeExample: `<p>123 Maple Street<br>
Springfield<br>
United States</p>`,
  codeAnnotations: [
    { lineOrToken: "<br>", description: "Drops the text that follows onto a new line, exactly at this point." }
  ],
  commonMistakes: [
    { wrong: `<br></br>`, correct: `<br>`, reason: "`<br>` is a lone wolf — it never takes a closing tag. Writing `</br>` is like putting a leash on a fish." }
  ],
  tryItYourself: {
    html: `<p>Line one<br>Line two</p>`,
    instructions: "Add a third line that says 'Line three' using another <br> tag."
  },
  takeaways: [
    "`<br>` forces a **line break** at its exact position.",
    "It is a **void element** — never needs a closing tag.",
    "Pressing Enter in your editor does nothing on the page — only `<br>` breaks lines."
  ],
  quizQuestions: [
    { id: "html-linebreaks-1", question: "Which tag creates a line break?", options: ["<break>", "<br>", "<lb>", "<newline>"], correctAnswerIndex: 1, explanation: "Yes! `<br>` is the one and only **line-break** tag. The others are imposters." },
    { id: "html-linebreaks-2", question: "Does the <br> tag need a closing tag?", options: ["Yes, always </br>", "No — it is a void element", "Only inside paragraphs", "Only in HTML5"], correctAnswerIndex: 1, explanation: "Correct — `<br>` is a **void element**. It stands alone with no closing tag, ever." }
  ]
};

export const htmlHorizontalRulesContent: LessonContent = {
  heroTagline: "Draw a clean line between two sections of content.",
  introduction: "Ever read a page that jumps from topic to topic with no warning, leaving your brain spinning? The `<hr>` tag is the polite host announcing 'and now, something completely different' — drawing a clean **line** between two worlds.",
  definition: {
    term: "Horizontal Rule (<hr>)",
    explanation: "An **empty element** that draws a **horizontal line** and signals a real **shift in topic** — meaningful structure, not decoration."
  },
  whyItMatters: "Long pages without breaks feel like one endless hallway. A single `<hr>` gives readers a mental breath and says 'old topic done, new one starting' — without typing a single word.",
  realWorldAnalogy: {
    title: "The Curtain Between Two Acts",
    story: "In a theater, the **curtain** falls, the stage changes, and a brand-new act begins. The audience instantly knows the scene has shifted. `<hr>` is that curtain drop for your page.",
    comparison: [
      { item: "The falling curtain", meaning: "The `<hr>` — a visible signal that the **topic changed**" },
      { item: "Two different acts", meaning: "The page sections on each side of the line" }
    ]
  },
  syntaxStructure: `<hr>`,
  codeExample: `<h2>Chapter 1: The Beginning</h2>
<p>The story starts on a rainy morning...</p>
<hr>
<h2>Chapter 2: The Journey</h2>
<p>Years later, the hero sets out...</p>`,
  codeAnnotations: [
    { lineOrToken: "<hr>", description: "Renders a full-width horizontal line and announces a topic shift to assistive technology." }
  ],
  commonMistakes: [
    { wrong: `<!-- decorative line under every heading -->\n<h2>News</h2>\n<hr>\n<h2>Sports</h2>\n<hr>`, correct: `<!-- thematic break between different topics -->\n<h2>Morning News</h2>\n<p>...</p>\n<hr>\n<h2>Evening Sports</h2>\n<p>...</p>`, reason: "Careful: **screen readers** announce `<hr>` as a topic change. Using it as decoration is like crying wolf — listeners get confused about the real structure." }
  ],
  tryItYourself: {
    html: `<p>First topic ends here.</p>\n<p>Second topic starts here.</p>`,
    instructions: "Place an <hr> tag on its own line between the two paragraphs."
  },
  takeaways: [
    "`<hr>` draws a line marking a genuine **topic shift**.",
    "**Void element** — no closing tag needed.",
    "Reserve it for real thematic breaks, not pretty decoration."
  ],
  quizQuestions: [
    { id: "html-hr-1", question: "What does the <hr> tag create?", options: ["A vertical line", "A horizontal line", "A page break", "A heading"], correctAnswerIndex: 1, explanation: "Right — `<hr>` draws a **horizontal rule** straight across the page." },
    { id: "html-hr-2", question: "When should you use <hr>?", options: ["Under every heading for style", "Between genuinely different topics", "Inside every paragraph", "Instead of the <br> tag"], correctAnswerIndex: 1, explanation: "Exactly — use it between genuinely different topics, like chapters in a book." }
  ]
};

export const htmlTextFormattingContent: LessonContent = {
  heroTagline: "Shape how your text looks and what it means.",
  introduction: "Plain text is like plain rice — edible, but nobody gets excited. HTML hands you a **spice rack** of tiny tags that make words **bold**, *italic*, highlighted, or struck through. Each one has exactly one job, and together they turn bland paragraphs into pages people actually enjoy reading.",
  definition: {
    term: "Text Formatting Tags",
    explanation: "A family of small **inline tags** — `<b>`, `<i>`, `<mark>`, `<small>` and friends — that style or describe short stretches of text."
  },
  whyItMatters: "Nobody reads walls of text; they **scan** them. Formatting tags are signposts for the eye, pulling attention to the words that matter most.",
  realWorldAnalogy: {
    title: "A Spice Rack for Your Words",
    story: "A chef never dumps every spice into the pot — a pinch of this, a dash of that, each in the right place. **Formatting tags** season your text the same way: small, precise, and full of flavor.",
    comparison: [
      { item: "A pinch of chili", meaning: "The `<mark>` tag — a burst of attention on key phrases" },
      { item: "A garnish on top", meaning: "The `<b>` tag — makes chosen words stand out" }
    ]
  },
  syntaxStructure: `<b>bold</b> <i>italic</i> <mark>highlighted</mark>`,
  codeExample: `<p>This phone is <b>water-resistant</b> and has <mark>free shipping</mark>.</p>
<p><small>Prices include tax. Offer ends Friday.</small></p>`,
  codeAnnotations: [
    { lineOrToken: "<b>", description: "Makes text bold — purely visual, no added meaning." },
    { lineOrToken: "<mark>", description: "Highlights text with a yellow background, like a marker pen." },
    { lineOrToken: "<small>", description: "Renders side notes and fine print in a smaller size." }
  ],
  commonMistakes: [
    { wrong: `<b><i>text</b></i>`, correct: `<b><i>text</i></b>`, reason: "Tags nest like **Russian dolls** — the last one opened must close first. Cross them and browsers get confused." }
  ],
  tryItYourself: {
    html: `<p>Big sale this weekend!</p>`,
    instructions: "Make the word 'sale' bold and highlight 'this weekend' with the mark tag."
  },
  takeaways: [
    "Formatting tags are small **inline tags** for short runs of text.",
    "Some only change looks (`<b>`, `<i>`); others add **meaning** (`<strong>`, `<em>`).",
    "Always **nest properly** — close the inner tag first, like Russian dolls."
  ],
  quizQuestions: [
    { id: "html-textformat-1", question: "Which tag highlights text like a yellow marker?", options: ["<b>", "<highlight>", "<mark>", "<em>"], correctAnswerIndex: 2, explanation: "Correct! `<mark>` paints text yellow like a **highlighter pen**." },
    { id: "html-textformat-2", question: "What is wrong with <b><i>text</b></i>?", options: ["Nothing — it works fine", "Tags overlap instead of nesting properly", "<i> cannot be inside <b>", "Bold and italic cannot combine"], correctAnswerIndex: 1, explanation: "Well spotted — tags must close in **reverse order**: `<b><i>text</i></b>` keeps the nesting tidy." }
  ]
};

export const htmlBoldTextContent: LessonContent = {
  heroTagline: "Make words stand out — purely for looks.",
  introduction: "Want a word to shout without actually shouting? The `<b>` tag pumps up your text visually — **bold** and impossible to miss. But here is the twist: it adds **zero meaning**. It is pure style, like wearing sunglasses.",
  definition: {
    term: "Bold (<b>)",
    explanation: "An **inline tag** that renders text in a heavy **bold** weight — pure visual muscle, no extra meaning attached."
  },
  whyItMatters: "People scan pages like hawks hunting for **keywords**. Bold words act as landing pads for the eye, helping readers find what they need in seconds.",
  realWorldAnalogy: {
    title: "Sunglasses for Your Words",
    story: "Sunglasses do not change who you are — they just make you stand out in a crowd. The `<b>` tag does the same for words: a louder look, the exact same meaning.",
    comparison: [
      { item: "Sunglasses", meaning: "The `<b>` tag — visually bolder, meaning unchanged" },
      { item: "Your normal face", meaning: "Regular text around it" }
    ]
  },
  syntaxStructure: `<b>bold text</b>`,
  codeExample: `<p>The <b>Galaxy X200</b> launches on <b>March 15</b>.</p>`,
  codeAnnotations: [
    { lineOrToken: "<b>...</b>", description: "Everything inside renders bold. Use only when you want visual emphasis without meaning." }
  ],
  commonMistakes: [
    { wrong: `<b>Warning: toxic chemicals</b>`, correct: `<strong>Warning: toxic chemicals</strong>`, reason: "Friendly warning: **screen readers** treat `<b>` as plain styling, so some users miss the emphasis entirely. For real importance, `<strong>` is the tag that speaks up." }
  ],
  tryItYourself: {
    html: `<p>My favorite movie is Dune.</p>`,
    instructions: "Wrap the movie name in <b> tags to make it bold."
  },
  takeaways: [
    "`<b>` makes text **bold** with zero added meaning.",
    "Use it for visual punch: **keywords**, product names, lead-ins.",
    "When text is truly important, upgrade to `<strong>`."
  ],
  quizQuestions: [
    { id: "html-bold-1", question: "What does the <b> tag add to text?", options: ["Bold look only, no extra meaning", "Bold look plus importance", "Italic style", "A link"], correctAnswerIndex: 0, explanation: "Exactly — `<b>` is 100% **visual**. Bold look, no deeper meaning." },
    { id: "html-bold-2", question: "What is the closing tag for <b>?", options: ["<bold>", "</b>", "<end-b>", "</bold>"], correctAnswerIndex: 1, explanation: "Right! `</b>` closes it — slash first, then the tag name." }
  ]
};
export const htmlImportantTextContent: LessonContent = {
  heroTagline: "Mark text that truly matters — and say so.",
  introduction: "Meet `<b>`'s serious older sibling: `<strong>`. It looks bold too, but it carries a badge that says '**THIS MATTERS**.' Screen readers literally change their **voice** for it. Same outfit, completely different job.",
  definition: {
    term: "Strong Importance (<strong>)",
    explanation: "An **inline tag** that marks text as genuinely **important** — bold on screen, and read with vocal stress by assistive technology."
  },
  whyItMatters: "Some of your visitors **hear** your page instead of seeing it. `<strong>` makes sure warnings, prices, and key facts hit just as hard for them.",
  realWorldAnalogy: {
    title: "The Teacher's Stern Voice",
    story: "A teacher says most things normally — but when she says 'the exam is **TOMORROW**,' her voice drops an octave and the whole class sits up straight. That is `<strong>`: same words, undeniable weight.",
    comparison: [
      { item: "The stern voice", meaning: "The `<strong>` tag — louder, weightier, impossible to ignore" },
      { item: "Normal classroom chatter", meaning: "Regular text around it" }
    ]
  },
  syntaxStructure: `<strong>important text</strong>`,
  codeExample: `<p><strong>Warning:</strong> Do not unplug the server during updates.</p>
<p>Your appointment is <strong>tomorrow at 9 AM</strong>.</p>`,
  codeAnnotations: [
    { lineOrToken: "<strong>", description: "Adds semantic importance — screen readers announce this text with vocal stress." }
  ],
  commonMistakes: [
    { wrong: `<strong>Sale</strong> <strong>50% off</strong> <strong>today</strong> <strong>only</strong>`, correct: `<b>Sale</b> 50% off today only — <strong>ends at midnight</strong>`, reason: "If everything is important, nothing is. Save `<strong>` for words that truly deserve the spotlight, and use `<b>` for plain visual bold." }
  ],
  tryItYourself: {
    html: `<p>Do not touch the red wire.</p>`,
    instructions: "Mark the words 'Do not touch' with <strong> to show real importance."
  },
  takeaways: [
    "`<strong>` looks bold AND means '**this is important**.'",
    "**Screen readers** stress it out loud — real emphasis, not just style.",
    "Use sparingly — highlight everything and you highlight nothing."
  ],
  quizQuestions: [
    { id: "html-strong-1", question: "What is the key difference between <b> and <strong>?", options: ["<b> is bolder", "<strong> adds meaning and importance", "There is no difference", "<strong> is deprecated"], correctAnswerIndex: 1, explanation: "Perfect — `<strong>` adds **meaning** for browsers and screen readers; `<b>` is only visual." },
    { id: "html-strong-2", question: "How does a screen reader treat <strong> text?", options: ["It skips it", "It reads it with vocal emphasis", "It spells it letter by letter", "It reads it twice"], correctAnswerIndex: 1, explanation: "Yes! Screen readers add **vocal stress** to `<strong>` text, honoring its importance." }
  ]
};

export const htmlItalicTextContent: LessonContent = {
  heroTagline: "Lean your text sideways — purely for style.",
  introduction: "The `<i>` tag gives your text a stylish **slant** — like words leaning back in a chair, relaxed and cool. It is pure fashion though: no meaning, no emphasis, just good looks.",
  definition: {
    term: "Italic (<i>)",
    explanation: "An **inline tag** that slants text for **style alone** — no emphasis, no extra meaning."
  },
  whyItMatters: "Foreign phrases, scientific names, and ship names are traditionally **italicized**. The `<i>` tag gives you that classic printed-book elegance in seconds.",
  realWorldAnalogy: {
    title: "Text Leaning Back in a Chair",
    story: "Someone leaning back in their chair looks relaxed and stylish — but they are not saying anything important. That is `<i>`: all style, no statement.",
    comparison: [
      { item: "The stylish lean", meaning: "The `<i>` tag — slanted purely for looks" },
      { item: "Sitting up straight", meaning: "Normal upright text" }
    ]
  },
  syntaxStructure: `<i>italic text</i>`,
  codeExample: `<p>The phrase <i>carpe diem</i> means "seize the day."</p>
<p>The ship <i>Ever Given</i> blocked the canal in 2021.</p>`,
  codeAnnotations: [
    { lineOrToken: "<i>...</i>", description: "Everything inside renders slanted. Use for visual italics only — foreign words, terms, names." }
  ],
  commonMistakes: [
    { wrong: `<i>Do not touch the red wire</i>`, correct: `<em>Do not touch the red wire</em>`, reason: "Remember: `<i>` is silent to **screen readers**. For words you would stress out loud, use `<em>` — it actually changes the voice." }
  ],
  tryItYourself: {
    html: `<p>Bonjour means hello in French.</p>`,
    instructions: "Wrap the French word 'Bonjour' in <i> tags."
  },
  takeaways: [
    "`<i>` slants text with **zero** added meaning.",
    "Perfect for **foreign words**, technical terms, and stylistic italics.",
    "Need real emphasis? That is `<em>`'s job."
  ],
  quizQuestions: [
    { id: "html-italic-1", question: "What does the <i> tag do?", options: ["Makes text italic, visual only", "Adds spoken emphasis", "Creates a link", "Makes text bold"], correctAnswerIndex: 0, explanation: "Correct — `<i>` is pure typography: slanted text, no meaning attached." },
    { id: "html-italic-2", question: "Which is a good use of <i>?", options: ["A safety warning", "A foreign phrase like 'carpe diem'", "A stressed word in a warning", "A page heading"], correctAnswerIndex: 1, explanation: "Right! **Foreign phrases** are traditionally italicized — a classic visual-only use of `<i>`." }
  ]
};

export const htmlEmphasizedTextContent: LessonContent = {
  heroTagline: "Stress a word — and mean it.",
  introduction: "Say it out loud: 'I said **RED**, not blue.' Now try: 'I said red, not **BLUE**.' Same words, totally different meaning — all because of which word you **stressed**. The `<em>` tag bottles that spoken magic into your HTML.",
  definition: {
    term: "Emphasis (<em>)",
    explanation: "An **inline tag** that marks the word you would **stress when speaking** — italic on screen, voiced with real stress by screen readers."
  },
  whyItMatters: "Written words lose the music of speech. `<em>` puts the music back, making sure readers — and listeners — catch exactly which word carries the punch.",
  realWorldAnalogy: {
    title: "The Finger Point of Sentences",
    story: "When you argue, you jab your finger at the key word: '**YOU** left the door open!' That jab is `<em>` — it points at the one word that changes everything.",
    comparison: [
      { item: "The jabbing finger", meaning: "The `<em>` tag — this word carries the meaning" },
      { item: "The rest of the sentence", meaning: "Plain text — no special stress" }
    ]
  },
  syntaxStructure: `<em>emphasized text</em>`,
  codeExample: `<p>You <em>must</em> save your work before closing.</p>
<p>She bought <em>three</em> tickets, not two.</p>`,
  codeAnnotations: [
    { lineOrToken: "<em>", description: "Marks the stressed word — screen readers raise their tone here." }
  ],
  commonMistakes: [
    { wrong: `<em>The Great Gatsby</em> is a famous novel.`, correct: `<i>The Great Gatsby</i> is a famous novel.`, reason: "Book titles just need the italic **look** — that is `<i>`'s territory. Reserve `<em>` for words you would genuinely stress in speech." }
  ],
  tryItYourself: {
    html: `<p>I wanted the red car, not the blue one.</p>`,
    instructions: "Wrap the word 'red' in <em> tags to stress it."
  },
  takeaways: [
    "`<em>` looks italic AND means '**stress this word**.'",
    "**Screen readers** shift their tone for `<em>` — real spoken emphasis.",
    "Save it for spoken-style stress, not book titles."
  ],
  quizQuestions: [
    { id: "html-em-1", question: "What is the key difference between <i> and <em>?", options: ["<i> is more slanted", "<em> adds spoken emphasis and meaning", "There is no difference", "<em> makes text bold"], correctAnswerIndex: 1, explanation: "Spot on — `<em>` adds **emphasis** that screen readers voice with stress; `<i>` is only visual." },
    { id: "html-em-2", question: "In 'You must save your work', which word deserves <em>?", options: ["You", "must", "your", "work"], correctAnswerIndex: 1, explanation: "Exactly — '**must**' is the word you would punch when speaking, so it earns the `<em>`." }
  ]
};

export const htmlSmallTextContent: LessonContent = {
  heroTagline: "Shrink the side notes and fine print.",
  introduction: "Every page has a quiet corner: the **copyright line**, the 'terms apply' whisper, the fine print nobody reads until they must. The `<small>` tag is the humble voice saying 'I am here, but I will not shout.'",
  definition: {
    term: "Small (<small>)",
    explanation: "An **inline tag** that renders text smaller — the official home of **fine print**, disclaimers, and side notes."
  },
  whyItMatters: "Legal lines and secondary details must exist but should never compete with your headline. `<small>` keeps them readable yet politely quiet.",
  realWorldAnalogy: {
    title: "Whispering in a Library",
    story: "In a library you **whisper** the side remarks so the main conversation stays clear. `<small>` whispers your secondary text the same way — present, but never loud.",
    comparison: [
      { item: "The whisper", meaning: "The `<small>` tag — present but not loud" },
      { item: "The main conversation", meaning: "Your regular paragraphs — full attention" }
    ]
  },
  syntaxStructure: `<small>fine print</small>`,
  codeExample: `<p>Total: $49.99</p>
<p><small>* Price includes tax. Shipping calculated at checkout.</small></p>`,
  codeAnnotations: [
    { lineOrToken: "<small>", description: "Renders the enclosed text smaller — for disclaimers, notes, and copyright lines." }
  ],
  commonMistakes: [
    { wrong: `<small><small><small>tiny text</small></small></small>`, correct: `<small>tiny text</small> <!-- size via CSS if needed -->`, reason: "Stacking `<small>` tags shrinks text unpredictably, like photocopying a photocopy. Use **CSS** `font-size` when you need exact control." }
  ],
  tryItYourself: {
    html: `<p>Free trial for 30 days.</p>\n<p>No credit card required.</p>`,
    instructions: "Wrap the second paragraph in <small> tags to turn it into fine print."
  },
  takeaways: [
    "`<small>` shrinks text for **side notes** and disclaimers.",
    "Use it for **copyright** lines, legal notes, and secondary info.",
    "Do not stack `<small>` tags — reach for **CSS** for precise sizing."
  ],
  quizQuestions: [
    { id: "html-small-1", question: "What is <small> meant for?", options: ["Main headings", "Fine print and side notes", "Navigation menus", "Image captions only"], correctAnswerIndex: 1, explanation: "Right — `<small>` is built for **secondary content** like disclaimers and copyright lines." },
    { id: "html-small-2", question: "How do you make text even smaller than one <small>?", options: ["Nest three <small> tags", "Use CSS font-size", "Use the <tiny> tag", "You cannot"], correctAnswerIndex: 1, explanation: "Correct! **CSS** `font-size` gives exact control; stacking `<small>` is unpredictable." }
  ]
};

export const htmlMarkedTextContent: LessonContent = {
  heroTagline: "Highlight text like a yellow marker.",
  introduction: "Remember the satisfying swipe of a **yellow highlighter** across the one sentence that mattered in your textbook? The `<mark>` tag is that highlighter, living inside your HTML — one tag and any phrase glows.",
  definition: {
    term: "Marked Text (<mark>)",
    explanation: "An **inline tag** that paints text with a **yellow background**, flagging it as relevant — the digital highlighter."
  },
  whyItMatters: "**Search pages** highlight your search words so you instantly see why each result matched. `<mark>` creates that exact effect, and readers love it.",
  realWorldAnalogy: {
    title: "The Highlighter Strike",
    story: "The night before exams, you drag a highlighter over the key definitions. In the morning, your eyes jump straight to the yellow. `<mark>` gives your readers that same superpower.",
    comparison: [
      { item: "The yellow swipe", meaning: "The `<mark>` tag — instant visual attention" },
      { item: "The plain textbook page", meaning: "Unmarked text around it" }
    ]
  },
  syntaxStructure: `<mark>highlighted text</mark>`,
  codeExample: `<p>Search results for <mark>"solar panels"</mark>: 12 matches found.</p>`,
  codeAnnotations: [
    { lineOrToken: "<mark>", description: "Paints a yellow background behind the text — the web's highlighter pen." }
  ],
  commonMistakes: [
    { wrong: `<mark>Welcome to our site</mark> <mark>We sell shoes</mark> <mark>Call now</mark>`, correct: `<p>Your search for <mark>running shoes</mark> returned 24 results.</p>`, reason: "**Over-highlighting** blinds the reader — if everything glows, nothing stands out. Save `<mark>` for the truly relevant terms." }
  ],
  tryItYourself: {
    html: `<p>The meeting is at 3 PM in Room 4.</p>`,
    instructions: "Highlight the time '3 PM' with the <mark> tag."
  },
  takeaways: [
    "`<mark>` highlights text with a **yellow background**.",
    "Perfect for **search terms** and key phrases in results.",
    "Highlight sparingly — a fully yellow page highlights nothing."
  ],
  quizQuestions: [
    { id: "html-mark-1", question: "What visual effect does <mark> create?", options: ["Bold text", "Yellow highlighted background", "Underlined text", "Red text"], correctAnswerIndex: 1, explanation: "Yes! `<mark>` renders text on a **yellow background**, just like a highlighter pen." },
    { id: "html-mark-2", question: "What is a classic use case for <mark>?", options: ["Page headings", "Highlighting search terms in results", "Navigation links", "Footer copyright"], correctAnswerIndex: 1, explanation: "Exactly — search pages use `<mark>` to show you **why** each result matched." }
  ]
};
export const htmlDeletedTextContent: LessonContent = {
  heroTagline: "Cross out what is no longer true.",
  introduction: "There is something deeply satisfying about seeing '**$100**' crossed out next to '**$59**'. The `<del>` tag draws that dramatic line through text — but unlike hitting delete, it **keeps the evidence**. The change itself becomes part of the story.",
  definition: {
    term: "Deleted Text (<del>)",
    explanation: "An **inline tag** that strikes through text, marking it as **removed or outdated** — while keeping it visible as a record."
  },
  whyItMatters: "Shoppers trust a sale more when they see the **old price crossed out**. `<del>` shows change honestly instead of pretending the past never happened.",
  realWorldAnalogy: {
    title: "The Dramatic Cross-Out",
    story: "A detective crosses a suspect off the board with a red line — the name stays readable, but everyone knows they are out. `<del>` crosses out text with the same drama.",
    comparison: [
      { item: "The red line on the board", meaning: "The `<del>` tag — removed, but the history stays visible" },
      { item: "Erasing the name completely", meaning: "Plain deletion — no trace of what changed" }
    ]
  },
  syntaxStructure: `<del>removed text</del>`,
  codeExample: `<p>Price: <del>$99</del> <ins>$59</ins> — this week only!</p>`,
  codeAnnotations: [
    { lineOrToken: "<del>", description: "Renders a horizontal line through the text, marking it as removed." },
    { lineOrToken: "<ins>", description: "Its partner tag — marks the replacement text (covered fully in the next lesson)." }
  ],
  commonMistakes: [
    { wrong: `<del>lol this is so funny</del>`, correct: `<del>$99</del> $59 — price updated`, reason: "**Screen readers** literally announce `<del>` text as 'deleted,' so joke strikethroughs confuse listeners. Reserve it for genuinely removed content." }
  ],
  tryItYourself: {
    html: `<p>The concert is on Friday.</p>`,
    instructions: "The concert moved to Saturday. Cross out 'Friday' with <del> and add 'Saturday' after it."
  },
  takeaways: [
    "`<del>` strikes through text to show **removal**.",
    "Brilliant for **sale prices** and visible document edits.",
    "Skip it for jokes — assistive tech announces it as deleted content."
  ],
  quizQuestions: [
    { id: "html-del-1", question: "What visual effect does <del> create?", options: ["Underlined text", "A line through the text", "Highlighted text", "Bold text"], correctAnswerIndex: 1, explanation: "Correct — `<del>` draws a **strikethrough** line straight through the text." },
    { id: "html-del-2", question: "Why use <del> instead of just deleting the words?", options: ["It loads faster", "It keeps a visible record of the change", "It looks prettier", "Search engines require it"], correctAnswerIndex: 1, explanation: "Right! `<del>` preserves the **edit history** — readers see the before and after, like old vs. new prices." }
  ]
};

export const htmlInsertedTextContent: LessonContent = {
  heroTagline: "Underline what was added.",
  introduction: "Every good detective story has two sides: what was **removed**, and what **replaced** it. Meet `<ins>`, the partner of `<del>` — it underlines new text to shout 'this just got **ADDED**.' Together, they show the full before-and-after.",
  definition: {
    term: "Inserted Text (<ins>)",
    explanation: "An **inline tag** that underlines text to mark it as **newly inserted** or added content."
  },
  whyItMatters: "Contracts, articles, and changelogs live or die by showing edits clearly. `<ins>` makes every addition impossible to miss.",
  realWorldAnalogy: {
    title: "The Editor's Red Pen",
    story: "An editor squeezes a missing word above the line in **red ink**. You spot the fix instantly without rereading the whole page. `<ins>` is that red-ink moment.",
    comparison: [
      { item: "The red-ink squeeze-in", meaning: "The `<ins>` tag — new content, clearly marked" },
      { item: "The untouched sentence", meaning: "The original text around it" }
    ]
  },
  syntaxStructure: `<ins>added text</ins>`,
  codeExample: `<p>The meeting is on <del>Monday</del> <ins>Tuesday</ins> at 3 PM.</p>`,
  codeAnnotations: [
    { lineOrToken: "<ins>", description: "Underlines the text to mark it as newly added or updated." }
  ],
  commonMistakes: [
    { wrong: `<ins>Click here for deals</ins>`, correct: `<a href="deals.html">Click here for deals</a>`, reason: "Assistive tech announces `<ins>` as '**inserted**,' so using it for decoration invents a fake change history. Keep it honest — only for real additions." }
  ],
  tryItYourself: {
    html: `<p>We now ship worldwide.</p>`,
    instructions: "The sentence is new. Wrap the word 'worldwide' in <ins> tags."
  },
  takeaways: [
    "`<ins>` underlines text to show it was **added**.",
    "Pair it with `<del>` for perfect **before-and-after** edits.",
    "It means 'inserted' — not decoration, not a link style."
  ],
  quizQuestions: [
    { id: "html-ins-1", question: "What does the <ins> tag indicate?", options: ["Deleted content", "Inserted or added content", "A spelling error", "A hyperlink"], correctAnswerIndex: 1, explanation: "Yes — `<ins>` marks text that was **inserted** or added to the document." },
    { id: "html-ins-2", question: "Which tag pairs naturally with <ins> to show edits?", options: ["<b>", "<del>", "<mark>", "<u>"], correctAnswerIndex: 1, explanation: "Exactly — `<del>` shows what left, `<ins>` shows what arrived. The classic edit pair." }
  ]
};

export const htmlSuperscriptContent: LessonContent = {
  heroTagline: "Lift text up — for powers and footnotes.",
  introduction: "What would happen if **E=mc²** lost its tiny floating 2? It would look like a typo — and physicists everywhere would cry. The `<sup>` tag lifts characters **above the line** into their rightful place: exponents, ordinals like 1st, and footnote markers.",
  definition: {
    term: "Superscript (<sup>)",
    explanation: "An **inline tag** that raises text **above the baseline** in a smaller size — the home of exponents and ordinals."
  },
  whyItMatters: "Math and science run on **raised characters**. Writing x2 instead of x² is not just ugly — it can genuinely confuse readers.",
  realWorldAnalogy: {
    title: "Text on a Trampoline",
    story: "A kid bouncing on a **trampoline** floats above everyone else — smaller in the distance, but impossible to miss. `<sup>` text bounces up the same way.",
    comparison: [
      { item: "The bouncing kid", meaning: "The `<sup>` text — raised above the line" },
      { item: "The ground", meaning: "The text **baseline** everything sits on" }
    ]
  },
  syntaxStructure: `<sup>raised</sup>`,
  codeExample: `<p>E = mc<sup>2</sup></p>
<p>This is the 1<sup>st</sup> lesson of the course.</p>`,
  codeAnnotations: [
    { lineOrToken: "<sup>", description: "Lifts the enclosed characters above the baseline and shrinks them." }
  ],
  commonMistakes: [
    { wrong: `<p>x^2</p>`, correct: `<p>x<sup>2</sup></p>`, reason: "The caret `^` is just a plain character sitting on the line. `<sup>` renders a **true raised exponent** that scales beautifully with your text size." }
  ],
  tryItYourself: {
    html: `<p>The area is 25m2.</p>`,
    instructions: "Fix the '2' in 'm2' by wrapping it in <sup> tags to make it a proper square-meter symbol."
  },
  takeaways: [
    "`<sup>` raises text above the **baseline**, smaller in size.",
    "Use it for **exponents**, ordinal numbers, and footnote markers.",
    "Never fake it with `^` characters — use the real tag."
  ],
  quizQuestions: [
    { id: "html-sup-1", question: "How do you correctly write E=mc² in HTML?", options: ["E=mc^2", "E=mc<sup>2</sup>", "E=mc<up>2</up>", "E=mc**2"], correctAnswerIndex: 1, explanation: "Correct! `<sup>` lifts the 2 into a proper **superscript** exponent — E=mc² done right." },
    { id: "html-sup-2", question: "Where does <sup> position text?", options: ["Below the baseline", "Above the baseline, smaller", "In the page header", "Centered on the page"], correctAnswerIndex: 1, explanation: "Right — superscript text floats slightly **above the baseline** at a reduced size." }
  ]
};

export const htmlSubscriptContent: LessonContent = {
  heroTagline: "Drop text below the line — for formulas.",
  introduction: "**H₂O**. **CO₂**. Without the tiny lowered numbers, chemistry falls apart — H2O looks like a password, not water. The `<sub>` tag dives **below the baseline** to put those numbers exactly where science demands.",
  definition: {
    term: "Subscript (<sub>)",
    explanation: "An **inline tag** that lowers text **below the baseline** in a smaller size — the home of chemical formulas."
  },
  whyItMatters: "**Chemical formulas** and math notation depend on lowered numbers. `<sub>` writes them the correct, professional way.",
  realWorldAnalogy: {
    title: "A Submarine on Patrol",
    story: "A **submarine** glides just beneath the ship it escorts — lower, quieter, but perfectly positioned. `<sub>` text dives to that same spot below the line.",
    comparison: [
      { item: "The submarine", meaning: "The `<sub>` text — sitting below the line" },
      { item: "The waterline", meaning: "The text **baseline** everything aligns to" }
    ]
  },
  syntaxStructure: `<sub>lowered</sub>`,
  codeExample: `<p>Water: H<sub>2</sub>O</p>
<p>Carbon dioxide: CO<sub>2</sub></p>`,
  codeAnnotations: [
    { lineOrToken: "<sub>", description: "Lowers the enclosed characters below the baseline and shrinks them." }
  ],
  commonMistakes: [
    { wrong: `<p style="position:relative; top:5px">2</p>`, correct: `<p>H<sub>2</sub>O</p>`, reason: "Do not fake subscripts with **CSS positioning** — `<sub>` is the semantic tag, and screen readers understand it properly." }
  ],
  tryItYourself: {
    html: `<p>Glucose is C6H12O6.</p>`,
    instructions: "Wrap each number in the formula with <sub> tags to write it correctly."
  },
  takeaways: [
    "`<sub>` lowers text below the **baseline**, smaller in size.",
    "Essential for **chemical formulas** like H₂O and CO₂.",
    "Use it for notation — not for shoving text around the layout."
  ],
  quizQuestions: [
    { id: "html-sub-1", question: "How do you correctly write H₂O in HTML?", options: ["H<sub>2</sub>O", "H<sup>2</sup>O", "H*2*O", "H_2_O"], correctAnswerIndex: 0, explanation: "Correct! `<sub>` drops the 2 into a proper **subscript** — H₂O done right." },
    { id: "html-sub-2", question: "Where does <sub> position text?", options: ["Above the baseline", "Below the baseline, smaller", "In bold", "In italics"], correctAnswerIndex: 1, explanation: "Right — subscript text sits slightly **below the baseline** at a reduced size." }
  ]
};

export const htmlQuotationsContent: LessonContent = {
  heroTagline: "Quote others — short quotes and long ones.",
  introduction: "Imagine writing an essay and accidentally taking credit for Shakespeare's words. Awkward! HTML gives you **three quotation tools** so you always credit the right voice: `<q>` for short quotes, `<blockquote>` for long ones, and `<cite>` to name the source.",
  definition: {
    term: "Quotation Elements (<q>, <blockquote>, <cite>)",
    explanation: "Tags for marking **quoted text**: `<q>` for short inline quotes (the browser adds the quote marks), `<blockquote>` for long passages set apart, and `<cite>` for naming the source."
  },
  whyItMatters: "Quoting correctly tells readers '**these are someone else's words**' — and proper tags help search engines credit the original source.",
  realWorldAnalogy: {
    title: "Giving Credit on Stage",
    story: "A speaker quotes a poet, then names them: 'As Rumi said...' The audience knows exactly whose words they just heard. These tags do that job in HTML — no stolen credit, ever.",
    comparison: [
      { item: "Quoting one line mid-speech", meaning: "The `<q>` tag — short quotes inside a sentence" },
      { item: "Reading a whole letter aloud", meaning: "The `<blockquote>` — a long quote set apart" }
    ]
  },
  syntaxStructure: `<q>Short quote</q>
<blockquote>
  Long quoted passage.
</blockquote>
<cite>Source Name</cite>`,
  codeExample: `<p>As Einstein said, <q>Imagination is more important than knowledge.</q></p>
<blockquote>
  "The best way to predict the future is to invent it."
</blockquote>
<p>— <cite>Alan Kay</cite></p>`,
  codeAnnotations: [
    { lineOrToken: "<q>", description: "The browser adds quotation marks automatically around short inline quotes." },
    { lineOrToken: "<blockquote>", description: "Indents a longer quote as its own block, separate from the paragraph." },
    { lineOrToken: "<cite>", description: "Names the work or author being quoted." }
  ],
  commonMistakes: [
    { wrong: `<blockquote>This paragraph just needed indenting.</blockquote>`, correct: `<p style="margin-left: 20px;">This paragraph just needed indenting.</p>`, reason: "**Screen readers** announce blockquotes as quotations, so using one just for indentation is like faking a quote. Use **CSS margins** for indentation instead." }
  ],
  tryItYourself: {
    html: `<p>My teacher always says practice makes perfect.</p>`,
    instructions: "Wrap the saying 'practice makes perfect' in <q> tags."
  },
  takeaways: [
    "`<q>` is for **short quotes** inside a sentence — the browser adds the quote marks.",
    "`<blockquote>` is for **long quotes** set apart as a block.",
    "`<cite>` names the **source** of the quote."
  ],
  quizQuestions: [
    { id: "html-quote-1", question: "Which tag is for a short quote inside a sentence?", options: ["<blockquote>", "<q>", "<cite>", "<quote>"], correctAnswerIndex: 1, explanation: "Right — `<q>` marks short **inline quotations**, and the browser adds the quote marks for you." },
    { id: "html-quote-2", question: "What does the <cite> tag do?", options: ["Creates a citation link", "Names the source of a quote", "Makes text italic", "Indents a paragraph"], correctAnswerIndex: 1, explanation: "Correct — `<cite>` identifies the **work or author** being quoted." }
  ]
};
export const htmlCodeContent: LessonContent = {
  heroTagline: "Show code as code — in a programmer's font.",
  introduction: "When a cooking blog mentions 'sugar' mid-sentence, you just know it is an ingredient. But when a tutorial mentions the `p` tag mid-sentence, how do you know it is code? The `<code>` tag — it switches to a **monospace font** that screams 'I am code, not prose.'",
  definition: {
    term: "Code (<code>)",
    explanation: "An **inline tag** that marks short **code fragments**, rendered in a monospace font so code is instantly recognizable."
  },
  whyItMatters: "Tutorials constantly mention tags and commands mid-sentence. `<code>` makes them pop out so readers never confuse code with regular words.",
  realWorldAnalogy: {
    title: "The Uniform for Code Words",
    story: "Players wear **uniforms** so you spot them instantly on the field. `<code>` puts a monospace 'uniform' on code words so they stand out in any sentence.",
    comparison: [
      { item: "The team uniform", meaning: "The `<code>` tag — visually distinct as code" },
      { item: "Street clothes", meaning: "Regular text around it" }
    ]
  },
  syntaxStructure: `<code>let x = 5;</code>`,
  codeExample: `<p>Press <code>Ctrl</code> + <code>S</code> to save your file.</p>
<p>The <code>alt</code> attribute describes an image.</p>`,
  codeAnnotations: [
    { lineOrToken: "<code>", description: "Switches to a monospace font, signaling to readers: 'this is code'." }
  ],
  commonMistakes: [
    { wrong: `<code>function greet() {\n  console.log("Hi");\n  console.log("Bye");\n}</code>`, correct: `<pre><code>function greet() {\n  console.log("Hi");\n}</code></pre>`, reason: "`<code>` alone does not preserve **line breaks** — long code collapses into one sad line. Pair it with `<pre>` for multi-line blocks." }
  ],
  tryItYourself: {
    html: `<p>Use the br tag to break a line.</p>`,
    instructions: "Wrap the words 'br tag' in <code> tags."
  },
  takeaways: [
    "`<code>` marks short **inline code** in a monospace font.",
    "Use it for **tag names**, commands, and values inside sentences.",
    "For multi-line blocks, team it up with `<pre>`."
  ],
  quizQuestions: [
    { id: "html-code-1", question: "What is the <code> tag for?", options: ["Multi-line code blocks alone", "Short inline code fragments", "Running JavaScript", "Styling headings"], correctAnswerIndex: 1, explanation: "Correct — `<code>` marks short **code snippets** inside sentences, in a monospace font." },
    { id: "html-code-2", question: "How do you show a multi-line code block correctly?", options: ["<code> alone", "<pre> wrapped around <code>", "<p> with line breaks", "Multiple <br> tags"], correctAnswerIndex: 1, explanation: "Right! `<pre>` preserves the **line breaks** while `<code>` styles it as code — the dream team." }
  ]
};

export const htmlPreformattedTextContent: LessonContent = {
  heroTagline: "Keep your spaces and line breaks exactly as typed.",
  introduction: "HTML is a neat freak that **collapses** your extra spaces and line breaks — great for paragraphs, terrible for poetry. The `<pre>` tag is the rebel shouting 'hands off my **whitespace**!' Every space and line break stays exactly as you typed it.",
  definition: {
    term: "Preformatted Text (<pre>)",
    explanation: "A **block tag** that preserves **whitespace and line breaks** exactly as typed, rendered in a monospace font."
  },
  whyItMatters: "Poems, **ASCII art**, and code lose their soul when whitespace collapses. `<pre>` keeps your careful formatting perfectly intact.",
  realWorldAnalogy: {
    title: "A Photocopy, Not a Retype",
    story: "A **photocopy** keeps every gap and indent of the original page. A retyped copy 'helpfully' tidies them away. `<pre>` is the photocopy — `<p>` is the retype.",
    comparison: [
      { item: "The photocopy", meaning: "The `<pre>` block — every space preserved" },
      { item: "The tidied retype", meaning: "Normal HTML — extra spaces collapsed away" }
    ]
  },
  syntaxStructure: `<pre>
  Line one
    Indented line two
</pre>`,
  codeExample: `<pre>
function greet() {
  console.log("Hello!");
}
</pre>`,
  codeAnnotations: [
    { lineOrToken: "<pre>", description: "Preserves all spaces, indentation, and newlines exactly as typed inside it." }
  ],
  commonMistakes: [
    { wrong: `<p>Line one<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Indented</p>`, correct: `<pre>Line one\n    Indented</pre>`, reason: "Faking formatting with `<br>` and `&nbsp;` breaks on different screen sizes. `<pre>` keeps the structure solid everywhere." }
  ],
  tryItYourself: {
    html: `<p>Roses are red,\nViolets are blue.</p>`,
    instructions: "Change the <p> tags to <pre> tags so the poem keeps its line breaks."
  },
  takeaways: [
    "`<pre>` preserves **spaces and line breaks** exactly.",
    "It renders in a **monospace font**.",
    "Ideal for **code blocks**, poetry, and ASCII art."
  ],
  quizQuestions: [
    { id: "html-pre-1", question: "What makes <pre> different from <p>?", options: ["It makes text bold", "It preserves whitespace and line breaks", "It centers text", "It adds a border"], correctAnswerIndex: 1, explanation: "Exactly — `<pre>` keeps every space and newline as typed; `<p>` collapses them." },
    { id: "html-pre-2", question: "Which content suits <pre> best?", options: ["A news article", "A poem with careful line breaks", "A navigation menu", "A photo gallery"], correctAnswerIndex: 1, explanation: "Right! **Poetry** depends on exact line breaks and spacing — exactly what `<pre>` preserves." }
  ]
};

export const htmlAbsoluteUrlsContent: LessonContent = {
  heroTagline: "Link anywhere on the internet with a full address.",
  introduction: "If I told you 'go to the blue house,' you would stare at me blankly — **which** blue house, **where**? But '742 Evergreen Terrace, Springfield' gets you there from anywhere on Earth. **Absolute URLs** are the full postal addresses of the web: complete, precise, and working from anywhere.",
  definition: {
    term: "Absolute URL",
    explanation: "A **complete web address** like `https://example.com/about` — protocol, domain, and path — pointing to one exact page on the internet."
  },
  whyItMatters: "When you link to **another website**, only a full address can get your visitor there. Anything less is like mailing a letter with no city on it.",
  realWorldAnalogy: {
    title: "The Full Postal Address",
    story: "A letter needs **country, city, street, and house number** to reach the right door from anywhere in the world. An absolute URL packs all of that for a web page.",
    comparison: [
      { item: "The full postal address", meaning: "An **absolute URL** — complete and works from anywhere" },
      { item: "Just a room number", meaning: "A **relative URL** — only works inside its own building" }
    ]
  },
  syntaxStructure: `<a href="https://www.example.com">Visit Example</a>`,
  codeExample: `<a href="https://www.wikipedia.org">Visit Wikipedia</a>
<a href="https://developer.mozilla.org">MDN Web Docs</a>`,
  codeAnnotations: [
    { lineOrToken: "https://", description: "The protocol — tells the browser this is a secure web address." },
    { lineOrToken: "www.wikipedia.org", description: "The domain — the exact server hosting the page." },
    { lineOrToken: "href", description: "The attribute that holds the destination address." }
  ],
  commonMistakes: [
    { wrong: `<a href="www.example.com">Visit</a>`, correct: `<a href="https://www.example.com">Visit</a>`, reason: "Without `https://`, the browser assumes you mean a page on **your own site** and the link breaks. Always include the protocol for external links." }
  ],
  tryItYourself: {
    html: `<p>My favorite search engine:</p>`,
    instructions: "Add a link to https://www.google.com with the text 'Search Google' below the paragraph."
  },
  takeaways: [
    "Absolute URLs start with `https://` and include the **domain**.",
    "They work from **any page** on any site.",
    "Always use them when linking to **other websites**."
  ],
  quizQuestions: [
    { id: "html-absurl-1", question: "Which is a correct absolute URL in a link?", options: ["href=\"www.example.com\"", "href=\"https://www.example.com\"", "href=\"example.com/page\"", "href=\"//example\""], correctAnswerIndex: 1, explanation: "Correct — absolute URLs need the full **protocol plus domain**: `https://www.example.com`." },
    { id: "html-absurl-2", question: "When must you use an absolute URL?", options: ["Linking within your own site", "Linking to another website", "Linking to a page section", "Never — they are outdated"], correctAnswerIndex: 1, explanation: "Right! Only a **complete address** can reach a page on a different website." }
  ]
};

export const htmlRelativeUrlsContent: LessonContent = {
  heroTagline: "Link inside your own site with short paths.",
  introduction: "Inside your own house, you do not give guests your full street address to find the kitchen — you say '**second door on the left**.' **Relative URLs** are those indoor directions: short paths that work perfectly inside your own website.",
  definition: {
    term: "Relative URL",
    explanation: "A **partial address** like `contact.html` that the browser completes using the current page's location — no domain needed."
  },
  whyItMatters: "Here is the magic: move your **entire site** to a new domain and relative links keep working without touching a single one. Write once, move freely.",
  realWorldAnalogy: {
    title: "Indoor Directions",
    story: "In a mall you say '**second floor, shop 5**' — no city or street needed, because everyone is already inside the mall. Relative URLs assume you are already 'inside' the site.",
    comparison: [
      { item: "Mall directions", meaning: "A **relative URL** — short, and works inside its own site" },
      { item: "A full street address", meaning: "An **absolute URL** — complete from anywhere" }
    ]
  },
  syntaxStructure: `<a href="about.html">About Us</a>`,
  codeExample: `<!-- Same folder -->
<a href="contact.html">Contact</a>
<!-- Subfolder -->
<a href="blog/first-post.html">First Post</a>
<!-- Parent folder -->
<a href="../index.html">Home</a>`,
  codeAnnotations: [
    { lineOrToken: "about.html", description: "A file in the same folder as the current page." },
    { lineOrToken: "blog/first-post.html", description: "Travels down into the blog subfolder." },
    { lineOrToken: "../", description: "Goes up one folder level." }
  ],
  commonMistakes: [
    { wrong: `<a href="google.com">Google</a>`, correct: `<a href="https://www.google.com">Google</a>`, reason: "**Relative paths** only resolve inside your own site — `google.com` would look for a page on **your** domain. External sites need absolute URLs." }
  ],
  tryItYourself: {
    html: `<a href="index.html">Home</a>`,
    instructions: "Add a second link to 'gallery.html' in the same folder, with the text 'Gallery'."
  },
  takeaways: [
    "Relative URLs are **short paths** measured from the current page.",
    "They contain **no domain name**.",
    "They survive a move to a **new domain** untouched."
  ],
  quizQuestions: [
    { id: "html-relurl-1", question: "What does href=\"../index.html\" mean?", options: ["A page on another website", "The index page one folder up", "The current page", "An email link"], correctAnswerIndex: 1, explanation: "Nice — `../` means '**go up one folder**,' so `../index.html` points to the homepage one level above the current page." },
    { id: "html-relurl-2", question: "Why prefer relative URLs for internal links?", options: ["They load faster", "They survive a domain move without edits", "They improve SEO", "They work offline always"], correctAnswerIndex: 1, explanation: "Exactly — relative links carry **no domain**, so they keep working after the whole site moves." }
  ]
};

export const htmlLinkTextContent: LessonContent = {
  heroTagline: "Write link text that tells people where they go.",
  introduction: "Quick quiz: would you rather click '**click here**' or '**Download the 2026 price list (PDF)**'? The first is a mystery box; the second tells you exactly what you get. That clickable text is called **link text** — and great link text is a small act of kindness.",
  definition: {
    term: "Link Text (Anchor Text)",
    explanation: "The visible, **clickable words** inside an `<a>` tag that describe where the link leads."
  },
  whyItMatters: "**Screen reader** users often jump from link to link, hearing only the text. 'Click here' tells them nothing; descriptive text tells them everything. Good link text is accessibility **and** SEO in one move.",
  realWorldAnalogy: {
    title: "A Labeled Door",
    story: "Hospital doors are labeled '**Pharmacy**' and '**Emergency**' — never 'click here.' You know exactly what is behind each one before you push. Descriptive link text gives your visitors that same confidence.",
    comparison: [
      { item: "The door label", meaning: "Descriptive **link text** — you know what is inside" },
      { item: "An unlabeled door", meaning: "A '**click here**' link — a mystery destination" }
    ]
  },
  syntaxStructure: `<a href="prices.html">Download the 2026 price list</a>`,
  codeExample: `<!-- Bad -->
<a href="report.pdf">Click here</a>

<!-- Good -->
<a href="report.pdf">Download the annual report (PDF)</a>`,
  codeAnnotations: [
    { lineOrToken: "Click here", description: "Vague — out of context, nobody knows where this goes." },
    { lineOrToken: "Download the annual report (PDF)", description: "Descriptive — the destination and file type are clear before clicking." }
  ],
  commonMistakes: [
    { wrong: `<a href="menu.pdf">click here</a> to see our menu`, correct: `<a href="menu.pdf">See our menu (PDF)</a>`, reason: "Vague link text fails **accessibility** checks and hurts **SEO** — search engines read link text too. Describe the destination!" }
  ],
  tryItYourself: {
    html: `<a href="tickets.html">Click here</a>`,
    instructions: "Rewrite the link text to describe the destination: 'Buy concert tickets'."
  },
  takeaways: [
    "**Link text** should describe the destination.",
    "Never use '**click here**' or 'read more' alone.",
    "Good link text helps **screen readers** and search engines."
  ],
  quizQuestions: [
    { id: "html-linktext-1", question: "Which link text is best?", options: ["Click here", "Read more", "Download the 2026 price list (PDF)", "Link"], correctAnswerIndex: 2, explanation: "Exactly — it describes **precisely** what the user gets: a 2026 price list in PDF format. No guessing needed." },
    { id: "html-linktext-2", question: "Why does link text matter for screen reader users?", options: ["It changes the link color", "They often navigate link-to-link hearing only the text", "It makes links load faster", "It doesn't matter"], correctAnswerIndex: 1, explanation: "Right! Screen reader users **jump between links**; descriptive text tells them where each one goes." }
  ]
};
export const htmlOpenLinksNewTabContent: LessonContent = {
  heroTagline: "Keep your page open while visitors explore.",
  introduction: "You are deep into a great article, you click an interesting link, and... your article is **gone**, replaced by the new page. Annoying, right? Adding `target=\"_blank\"` opens links in a **new tab** instead — your page stays safe underneath. But there is a security catch you must know.",
  definition: {
    term: "target=\"_blank\"",
    explanation: "A link attribute value that opens the destination in a **new tab** instead of replacing the current page."
  },
  whyItMatters: "When you link to an **external site**, you do not want visitors to lose your page. A new tab keeps both open — and keeps your visitor coming back.",
  realWorldAnalogy: {
    title: "Opening a Second Window",
    story: "You open a **second shop window** to peek inside while keeping your place in line. The new tab is that second window; your page is your hard-kept place in line.",
    comparison: [
      { item: "The second window", meaning: "The **new tab** — the external site opens here" },
      { item: "Your place in line", meaning: "**Your page** — still open underneath" }
    ]
  },
  syntaxStructure: `<a href="https://example.com" target="_blank" rel="noopener">Visit</a>`,
  codeExample: `<a href="https://www.github.com" target="_blank" rel="noopener">
  Visit GitHub
</a>`,
  codeAnnotations: [
    { lineOrToken: "target=\"_blank\"", description: "Opens the link in a new browser tab." },
    { lineOrToken: "rel=\"noopener\"", description: "Blocks the new page from controlling your page — a security must." }
  ],
  commonMistakes: [
    { wrong: `<a href="https://example.com" target="_blank">Visit</a>`, correct: `<a href="https://example.com" target="_blank" rel="noopener">Visit</a>`, reason: "Without `rel=\"noopener\"`, the new page can reach into your page's `window` object — a known security hole called **tabnabbing**. One attribute closes it." }
  ],
  tryItYourself: {
    html: `<a href="https://www.wikipedia.org">Wikipedia</a>`,
    instructions: "Add target=\"_blank\" and rel=\"noopener\" so the link opens in a new secure tab."
  },
  takeaways: [
    "`target=\"_blank\"` opens links in a **new tab**.",
    "Always pair it with `rel=\"noopener\"` for **security**.",
    "Use it for **external links** so visitors do not lose your page."
  ],
  quizQuestions: [
    { id: "html-newtab-1", question: "What does target=\"_blank\" do?", options: ["Opens the link in a new tab", "Makes the link bold", "Downloads the file", "Opens the link in the same tab"], correctAnswerIndex: 0, explanation: "Correct — `target=\"_blank\"` opens the destination in a **new browser tab**." },
    { id: "html-newtab-2", question: "Why add rel=\"noopener\" with target=\"_blank\"?", options: ["It speeds up loading", "It blocks the new page from controlling your page", "It is required for styling", "It hides the link"], correctAnswerIndex: 1, explanation: "Right! Without it, the opened page could manipulate **your** page through the `window` object — a sneaky attack called **tabnabbing**." }
  ]
};

export const htmlLinkToAnotherPageContent: LessonContent = {
  heroTagline: "Connect the pages of your own website.",
  introduction: "A website with no links between its pages is like a house with **no doors** — every room exists, but nobody can reach them. **Internal links** are the hallways of your site, and they are how menus and navigation are born.",
  definition: {
    term: "Internal Page Link",
    explanation: "A **link** from one page of your site to **another page of the same site**, usually written as a relative URL."
  },
  whyItMatters: "No visitor will ever type your URLs by hand. Internal links are the **roads** of your site — without them, your pages are unreachable islands.",
  realWorldAnalogy: {
    title: "Hallways Between Rooms",
    story: "Doors connect the rooms of a house so you can walk freely between them. Remove the doors and each room becomes a lonely island. Internal links are your site's doors.",
    comparison: [
      { item: "A hallway", meaning: "An **internal link** — the path between pages" },
      { item: "Separate locked rooms", meaning: "Pages with **no links** — unreachable" }
    ]
  },
  syntaxStructure: `<a href="about.html">About</a>`,
  codeExample: `<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="contact.html">Contact</a>
</nav>`,
  codeAnnotations: [
    { lineOrToken: "<nav>", description: "Groups the site's main page links — internal links in action." },
    { lineOrToken: "href=\"about.html\"", description: "Points to the about page file in the same folder." }
  ],
  commonMistakes: [
    { wrong: `<a href="C:/mysite/about.html">About</a>`, correct: `<a href="about.html">About</a>`, reason: "File paths from your computer break the moment the site goes online — **relative URLs** work everywhere." }
  ],
  tryItYourself: {
    html: `<nav>\n  <a href="index.html">Home</a>\n</nav>`,
    instructions: "Add links to 'about.html' (About) and 'contact.html' (Contact) inside the nav."
  },
  takeaways: [
    "**Internal links** connect pages of the same site.",
    "Use **relative URLs** like `about.html`.",
    "**Navigation menus** are built from internal page links."
  ],
  quizQuestions: [
    { id: "html-intlink-1", question: "How should you link to another page on your own site?", options: ["With a full https:// URL always", "With a relative URL like about.html", "With a mailto: link", "You cannot link between pages"], correctAnswerIndex: 1, explanation: "Correct — **relative URLs** like `about.html` connect pages within the same site." },
    { id: "html-intlink-2", question: "Why not use C:/mysite/about.html as a link?", options: ["It is too short", "That path only exists on your computer", "Browsers block relative links", "It loads too slowly"], correctAnswerIndex: 1, explanation: "Right! Your computer's file paths **do not exist** on the web server — only site-relative paths work once the site is online." }
  ]
};

export const htmlLinkToSectionContent: LessonContent = {
  heroTagline: "Jump straight to any part of a page.",
  introduction: "Imagine a restaurant menu where clicking '**Desserts**' teleports you straight to the cake section. No scrolling, no hunting. That is a **section link**: give any part of your page an `id`, point a link at `#id`, and the browser jumps right there.",
  definition: {
    term: "Fragment Link (Anchor Link)",
    explanation: "A link whose `href` starts with `#`, **jumping** to the element with the matching `id` on the page."
  },
  whyItMatters: "**Long pages** need shortcuts. A table of contents with section links lets readers skip straight to what they need — the difference between a helpful page and a frustrating one.",
  realWorldAnalogy: {
    title: "Bookmarks in a Textbook",
    story: "**Sticky tabs** on textbook pages let you flip straight to a chapter without searching. The `#id` in your link is that sticky tab; clicking is the flip.",
    comparison: [
      { item: "The sticky tab", meaning: "The `#id` in the link — marks the target spot" },
      { item: "Flipping to the tab", meaning: "Clicking the link — the page **jumps** there" }
    ]
  },
  syntaxStructure: `<a href="#menu">Jump to Menu</a>
<h2 id="menu">Our Menu</h2>`,
  codeExample: `<a href="#menu">See the menu</a>
<a href="#reviews">Read reviews</a>

<h2 id="menu">Our Menu</h2>
<p>Pizza, pasta, and more...</p>

<h2 id="reviews">Reviews</h2>
<p>Customers love us...</p>`,
  codeAnnotations: [
    { lineOrToken: "href=\"#menu\"", description: "The # means: find the element with id=\"menu\" on this page." },
    { lineOrToken: "id=\"menu\"", description: "The target — the id must match the link exactly, including case." }
  ],
  commonMistakes: [
    { wrong: `<a href="#Menu">See the menu</a>\n<h2 id="menu">Our Menu</h2>`, correct: `<a href="#menu">See the menu</a>\n<h2 id="menu">Our Menu</h2>`, reason: "**IDs are case-sensitive** — `#Menu` and `#menu` are different targets, so the jump fails silently." }
  ],
  tryItYourself: {
    html: `<a href="#contact">Contact us</a>\n<h2>Our Menu</h2>\n<h2>Contact</h2>`,
    instructions: "Add id=\"contact\" to the Contact heading so the link jumps to it."
  },
  takeaways: [
    "`#id` links jump to the element with that **id**.",
    "**IDs are case-sensitive** — match them exactly.",
    "Great for **tables of contents** and 'back to top' links."
  ],
  quizQuestions: [
    { id: "html-anchor-1", question: "What does href=\"#reviews\" do?", options: ["Opens a new website", "Jumps to the element with id=\"reviews\"", "Downloads a file", "Sends an email"], correctAnswerIndex: 1, explanation: "Correct — `href=\"#reviews\"` **scrolls** the page straight to the element with `id=\"reviews\"`." },
    { id: "html-anchor-2", question: "Will href=\"#Menu\" find id=\"menu\"?", options: ["Yes, case doesn't matter", "No — IDs are case-sensitive", "Only in Chrome", "Only with JavaScript"], correctAnswerIndex: 1, explanation: "Careful — **no**! IDs are case-sensitive, so `#Menu` will not find `id=\"menu\"`. Match the case exactly." }
  ]
};

export const htmlEmailLinksContent: LessonContent = {
  heroTagline: "Let visitors email you in one click.",
  introduction: "Nobody enjoys **copy-pasting** an email address into their mail app. A `mailto:` link is pure magic: one click and a fresh email opens, **already addressed** to you. The visitor just types and hits send.",
  definition: {
    term: "mailto: Link",
    explanation: "A link using the `mailto:` scheme that opens the user's **email program**, addressed to the given email."
  },
  whyItMatters: "Every extra step loses customers. One click that opens a **ready-to-send** message removes all friction between 'interested' and 'contacted.'",
  realWorldAnalogy: {
    title: "A Pre-Addressed Envelope",
    story: "Someone hands you an envelope **already addressed and stamped** — you just write your message and send. A `mailto:` link is that envelope; plain email text is the blank one you must address yourself.",
    comparison: [
      { item: "The pre-addressed envelope", meaning: "A `mailto:` link — recipient filled in for you" },
      { item: "A blank envelope", meaning: "Plain email text — you address it yourself" }
    ]
  },
  syntaxStructure: `<a href="mailto:hello@example.com">Email Us</a>`,
  codeExample: `<p>Questions? <a href="mailto:hello@bakery.com">Email the bakery</a></p>
<a href="mailto:support@shop.com?subject=Order%20Help">Get order help</a>`,
  codeAnnotations: [
    { lineOrToken: "mailto:", description: "Tells the browser to open an email app instead of a webpage." },
    { lineOrToken: "?subject=", description: "Prefills the email's subject line (spaces are written as %20)." }
  ],
  commonMistakes: [
    { wrong: `<a href="hello@bakery.com">Email us</a>`, correct: `<a href="mailto:hello@bakery.com">Email us</a>`, reason: "Without `mailto:`, the browser treats the address as a **relative page path** and serves a 404. That tiny prefix does all the magic." }
  ],
  tryItYourself: {
    html: `<p>Contact: hello@example.com</p>`,
    instructions: "Turn the email address into a mailto: link with the text 'Send us an email'."
  },
  takeaways: [
    "`mailto:` links open the user's **email app**, addressed to you.",
    "You can prefill the **subject** with `?subject=`.",
    "Always include `mailto:` — without it the link breaks."
  ],
  quizQuestions: [
    { id: "html-mailto-1", question: "What does href=\"mailto:hi@site.com\" do?", options: ["Opens a webpage", "Opens the email app addressed to hi@site.com", "Downloads a file", "Shows a phone dialer"], correctAnswerIndex: 1, explanation: "Right — `mailto:hi@site.com` opens the user's **email app** with a new message addressed to `hi@site.com`." },
    { id: "html-mailto-2", question: "What happens if you forget mailto: and write href=\"hi@site.com\"?", options: ["It still works", "The browser looks for a page called hi@site.com and shows an error", "It sends an email automatically", "Nothing happens"], correctAnswerIndex: 1, explanation: "Oops — without `mailto:`, the browser thinks `hi@site.com` is a **page** on your site and shows a 404 error." }
  ]
};

export const htmlTelephoneLinksContent: LessonContent = {
  heroTagline: "Turn a phone number into a tap-to-call button.",
  introduction: "On a phone, the difference between '**call us**' as plain text and as a `tel:` link is the difference between a customer and a lost customer. One tap and the **dialer opens** with your number ready. Zero typing, zero excuses.",
  definition: {
    term: "tel: Link",
    explanation: "A link using the `tel:` scheme that **dials** the given phone number when tapped."
  },
  whyItMatters: "On a phone, **tapping** a number to call is effortless; copying it into the dialer is a chore. `tel:` links win you the call.",
  realWorldAnalogy: {
    title: "A Speed-Dial Button",
    story: "Old phones had a **speed-dial button** that called home instantly — no typing needed. A `tel:` link is speed-dial for your website.",
    comparison: [
      { item: "The speed-dial button", meaning: "A `tel:` link — one tap starts the call" },
      { item: "Typing the full number", meaning: "Plain phone text — manual effort" }
    ]
  },
  syntaxStructure: `<a href="tel:+15551234567">Call Us</a>`,
  codeExample: `<p>Order by phone: <a href="tel:+18005550199">1-800-555-0199</a></p>`,
  codeAnnotations: [
    { lineOrToken: "tel:", description: "Triggers the device's calling feature instead of opening a page." },
    { lineOrToken: "+1", description: "Include the country code so the number works for international visitors." }
  ],
  commonMistakes: [
    { wrong: `<a href="tel:1-800-555-0199">Call</a>`, correct: `<a href="tel:+18005550199">Call</a>`, reason: "**Dashes and spaces** can break dialing on some devices — use digits with a leading `+` and country code. Safe everywhere." }
  ],
  tryItYourself: {
    html: `<p>Call us: 555-1234</p>`,
    instructions: "Turn the phone number into a tel: link (use +15551234567 as the number)."
  },
  takeaways: [
    "`tel:` links **start a call** when tapped.",
    "Use digits with a `+` and **country code**, no dashes.",
    "The visible text can stay human-friendly (`1-800-555-0199`)."
  ],
  quizQuestions: [
    { id: "html-tel-1", question: "What does href=\"tel:+15551234567\" do on a phone?", options: ["Opens a webpage", "Starts a phone call to that number", "Sends a text message", "Opens the email app"], correctAnswerIndex: 1, explanation: "Correct — on a phone, tapping it opens the **dialer** with the number ready to call." },
    { id: "html-tel-2", question: "How should the number in a tel: link be formatted?", options: ["With dashes and spaces", "Digits only, with + and country code", "With parentheses", "Any format works everywhere"], correctAnswerIndex: 1, explanation: "Right! **Dashes and spaces** can break dialing on some devices — clean digits with a leading `+` are safest." }
  ]
};
export const htmlDownloadLinksContent: LessonContent = {
  heroTagline: "Make files download instead of opening.",
  introduction: "You click '**brochure**' expecting a file — and instead your whole page gets replaced by a PDF viewer. Frustrating! The `download` attribute fixes this: it tells the browser '**save this file**, do not open it.' Takeout instead of dine-in.",
  definition: {
    term: "download Attribute",
    explanation: "A link attribute that forces the linked file to **download** rather than display in the browser."
  },
  whyItMatters: "Users expect a brochure link to **give them a file**, not hijack their page. `download` delivers exactly what they expect.",
  realWorldAnalogy: {
    title: "Takeout Instead of Dine-In",
    story: "You ask for the meal **packed to take home** instead of served at the table. Same food, totally different experience. The `download` attribute packs the file to go.",
    comparison: [
      { item: "The takeout box", meaning: "The `download` attribute — the file comes with you" },
      { item: "Dining in", meaning: "A normal link — the file opens in the browser" }
    ]
  },
  syntaxStructure: `<a href="menu.pdf" download>Download Menu</a>`,
  codeExample: `<a href="price-list.pdf" download>Download price list (PDF)</a>
<a href="photo.jpg" download="sunset-photo.jpg">Save this photo</a>`,
  codeAnnotations: [
    { lineOrToken: "download", description: "Forces a download instead of navigating to the file." },
    { lineOrToken: "download=\"sunset-photo.jpg\"", description: "Suggests the filename the file will be saved as." }
  ],
  commonMistakes: [
    { wrong: `<a href="https://othersite.com/report.pdf" download>Download</a>`, correct: `<a href="/files/report.pdf" download>Download</a>`, reason: "Browsers ignore `download` for **cross-origin** URLs for security — it only works reliably for files on your own site." }
  ],
  tryItYourself: {
    html: `<a href="brochure.pdf">Our brochure</a>`,
    instructions: "Add the download attribute so the brochure downloads instead of opening."
  },
  takeaways: [
    "The `download` attribute forces files to **download**.",
    "`download=\"photo.jpg\"` suggests the **saved filename**.",
    "It only works reliably for files on **your own site**."
  ],
  quizQuestions: [
    { id: "html-download-1", question: "What does the download attribute do?", options: ["Opens the file in a new tab", "Forces the file to download", "Deletes the file", "Compresses the file"], correctAnswerIndex: 1, explanation: "Correct — `download` tells the browser to **save the file** instead of displaying it." },
    { id: "html-download-2", question: "What does download=\"photo.jpg\" specify?", options: ["The file to download", "The suggested save filename", "The image size", "The download speed"], correctAnswerIndex: 1, explanation: "Right! It sets the **suggested filename** — the browser saves it as `photo.jpg` instead of the original name." }
  ]
};

export const htmlLinkAttributesContent: LessonContent = {
  heroTagline: "The small settings that control every link.",
  introduction: "Think of the `<a>` tag as a car: `href` is the **engine** — without it you go nowhere. But `target`, `rel`, `title`, and `download` are the **steering, brakes, and mirrors** that make the ride safe and smooth. Time to learn the full dashboard.",
  definition: {
    term: "Anchor Attributes",
    explanation: "The **settings** on an `<a>` tag — `href`, `target`, `rel`, `title`, `download` — controlling where a link goes and how it behaves."
  },
  whyItMatters: "`href` alone makes a basic link. The other attributes turn it into a **safe, accessible, user-friendly** one. Professionals use them all.",
  realWorldAnalogy: {
    title: "The Control Panel of a Door",
    story: "A proper door has a **lock**, a **peephole**, and a **sign** — each part controls the door differently. Link attributes are those parts: each one fine-tunes how the link behaves.",
    comparison: [
      { item: "The door lock", meaning: "The `target` attribute — controls **how** the link opens" },
      { item: "The peephole", meaning: "The `title` attribute — a **preview** before you enter" }
    ]
  },
  syntaxStructure: `<a href="..." target="..." rel="..." title="...">Text</a>`,
  codeExample: `<a href="https://example.com/report.pdf"
   target="_blank"
   rel="noopener"
   title="Annual report, PDF, 2 MB"
   download>
  Download annual report
</a>`,
  codeAnnotations: [
    { lineOrToken: "href", description: "The destination — the one attribute every link needs." },
    { lineOrToken: "title", description: "Shows a tooltip on hover — great for file size and format info." },
    { lineOrToken: "target + rel", description: "New-tab behavior plus the security attribute that makes it safe." }
  ],
  commonMistakes: [
    { wrong: `<a title="https://example.com">Visit</a>`, correct: `<a href="https://example.com">Visit</a>`, reason: "Without `href`, the text is **not a link** at all — `title` alone creates nothing clickable. `href` is the engine." }
  ],
  tryItYourself: {
    html: `<a href="guide.pdf">User guide</a>`,
    instructions: "Add a title attribute: 'User guide, PDF, 5 MB'."
  },
  takeaways: [
    "`href` is the **only required** link attribute.",
    "`target`, `rel`, `title`, and `download` refine link behavior.",
    "**Combine them** for safe, informative links."
  ],
  quizQuestions: [
    { id: "html-linkattr-1", question: "Which attribute is required to make text a link?", options: ["title", "href", "rel", "target"], correctAnswerIndex: 1, explanation: "Correct — `href` holds the **destination**. Without it, the `<a>` tag creates no link at all." },
    { id: "html-linkattr-2", question: "What does the title attribute on a link do?", options: ["Sets the page title", "Shows a tooltip on hover", "Makes the link bold", "Opens a new tab"], correctAnswerIndex: 1, explanation: "Right! `title` shows a small **tooltip** when the mouse hovers over the link." }
  ]
};

export const htmlImageSourceContent: LessonContent = {
  heroTagline: "Point the browser at your picture file.",
  introduction: "An `<img>` tag without `src` is like a picture frame with **no photo** — technically a frame, practically pointless. The `src` attribute tells the browser **where the image lives**, and getting that path right is everything.",
  definition: {
    term: "src (Source) Attribute",
    explanation: "The attribute on `<img>` holding the **path or URL** of the image file to display."
  },
  whyItMatters: "A wrong `src` means the dreaded **broken image icon**. Getting the path right is the difference between a beautiful page and an embarrassing one.",
  realWorldAnalogy: {
    title: "A Home Address for a Photo",
    story: "You tell a friend your photo's **exact shelf and album** so they can find it. The file path in `src` is that shelf and album — precise directions to the image.",
    comparison: [
      { item: "The shelf and album", meaning: "The **file path** in `src` — where the image lives" },
      { item: "The photo itself", meaning: "The **image file** the browser fetches" }
    ]
  },
  syntaxStructure: `<img src="images/cake.jpg">`,
  codeExample: `<!-- Image in the same folder -->
<img src="logo.png">

<!-- Image in a subfolder -->
<img src="images/cake.jpg">

<!-- Image on another website -->
<img src="https://example.com/photo.jpg">`,
  codeAnnotations: [
    { lineOrToken: "logo.png", description: "A file sitting next to the HTML page — the simplest path." },
    { lineOrToken: "images/cake.jpg", description: "Travels into the images subfolder to find the file." },
    { lineOrToken: "https://example.com/photo.jpg", description: "A full URL — fetches the image from another website." }
  ],
  commonMistakes: [
    { wrong: `<img src="C:\\Users\\me\\cake.jpg">`, correct: `<img src="images/cake.jpg">`, reason: "Your computer's file path doesn't exist on the **web server** — use paths relative to your project. The server has never seen your C: drive." }
  ],
  tryItYourself: {
    html: `<img>`,
    instructions: "Add src=\"images/dog.jpg\" to display the dog photo from the images folder."
  },
  takeaways: [
    "`src` tells `<img>` **where** the image file lives.",
    "Use **relative paths** for your own images.",
    "Full **URLs** work for images hosted elsewhere."
  ],
  quizQuestions: [
    { id: "html-imgsrc-1", question: "What does the src attribute do on <img>?", options: ["Sets the image size", "Specifies the image file location", "Adds a caption", "Makes the image a link"], correctAnswerIndex: 1, explanation: "Correct — `src` holds the **path or URL** of the image file the browser should display." },
    { id: "html-imgsrc-2", question: "Why is src=\"C:\\photos\\cat.jpg\" wrong?", options: ["Backslashes are ugly", "That path only exists on your computer", "Images must be PNG", "The filename is too short"], correctAnswerIndex: 1, explanation: "Right! Your computer's file path **does not exist** on the web server — use paths relative to your project instead." }
  ]
};

export const htmlAlternativeTextContent: LessonContent = {
  heroTagline: "Describe every image for those who can't see it.",
  introduction: "Close your eyes and imagine browsing the web **by ear** — every image announced out loud. That is daily life for millions of **screen reader** users. The `alt` attribute is their eyes: a short text description of each image.",
  definition: {
    term: "alt (Alternative Text) Attribute",
    explanation: "**Text describing** an image's content and purpose — read by screen readers, and shown when the image cannot load."
  },
  whyItMatters: "Millions of people browse with **screen readers**. Without `alt` text, your images are invisible holes in the page for them.",
  realWorldAnalogy: {
    title: "Audio Description in Movies",
    story: "Described movies **narrate the visuals** for blind viewers during quiet scenes. The `alt` text is that narration — describing what sighted users see.",
    comparison: [
      { item: "The movie narration", meaning: "The **alt text** — describes what sighted users see" },
      { item: "Silent visuals", meaning: "An image **without alt** — nothing for blind users" }
    ]
  },
  syntaxStructure: `<img src="dog.jpg" alt="A golden retriever puppy playing in grass">`,
  codeExample: `<img src="chart.png" alt="Bar chart: sales doubled from 2024 to 2025">
<img src="logo.png" alt="Coding Vibes logo">
<!-- Decorative image: empty alt -->
<img src="divider.png" alt="">`,
  codeAnnotations: [
    { lineOrToken: "alt=\"Bar chart: sales doubled...\"", description: "Describes the image's content so blind users get the same information." },
    { lineOrToken: "alt=\"\"", description: "Empty alt marks a purely decorative image so screen readers skip it silently." }
  ],
  commonMistakes: [
    { wrong: `<img src="team.jpg" alt="image123_final_v2.jpg">`, correct: `<img src="team.jpg" alt="Our five-person team smiling in the office">`, reason: "A filename describes nothing — screen reader users hear **gibberish** instead of meaning. Describe the actual content!" }
  ],
  tryItYourself: {
    html: `<img src="sunset.jpg">`,
    instructions: "Add an alt attribute describing a sunset over mountains."
  },
  takeaways: [
    "`alt` describes the image for **screen readers** and broken images.",
    "Describe the **content and purpose**, not the filename.",
    "Use empty `alt=\"\"` for purely **decorative** images."
  ],
  quizQuestions: [
    { id: "html-alt-1", question: "What is the main purpose of the alt attribute?", options: ["To style the image", "To describe the image for screen readers", "To set the image size", "To make images load faster"], correctAnswerIndex: 1, explanation: "Correct — `alt` provides a **text alternative**, read aloud by screen readers and shown if the image fails." },
    { id: "html-alt-2", question: "When should alt be empty (alt=\"\")?", options: ["Never", "For purely decorative images", "For large images", "For logos"], correctAnswerIndex: 1, explanation: "Right! **Decorative** images add no information, so empty `alt` tells screen readers to skip them silently." }
  ]
};

export const htmlImageWidthHeightContent: LessonContent = {
  heroTagline: "Size your images and stop the page from jumping.",
  introduction: "Ever watched a page **jump around** while images load, making you lose your place mid-sentence? Maddening! The `width` and `height` attributes fix this by **reserving space** before the image arrives — like booking a table before dinner.",
  definition: {
    term: "width and height Attributes",
    explanation: "Attributes on `<img>` setting the image's **display dimensions** in pixels."
  },
  whyItMatters: "Without reserved space, text **jumps down** the moment each image loads — a maddening experience called **layout shift**. These two attributes prevent it.",
  realWorldAnalogy: {
    title: "Reserving a Parking Spot",
    story: "A **reserved sign** holds the parking space before the car arrives — nobody else takes it. `width` and `height` reserve the image's space before it loads.",
    comparison: [
      { item: "The reserved sign", meaning: "The `width` and `height` attributes — space held in advance" },
      { item: "The arriving car", meaning: "The **image file** — fills its reserved space" }
    ]
  },
  syntaxStructure: `<img src="cake.jpg" alt="Chocolate cake" width="400" height="300">`,
  codeExample: `<img src="team.jpg" alt="Our team" width="600" height="400">
<img src="avatar.png" alt="User avatar" width="80" height="80">`,
  codeAnnotations: [
    { lineOrToken: "width=\"600\"", description: "Displays the image 600 pixels wide." },
    { lineOrToken: "height=\"400\"", description: "Reserves 400 pixels of vertical space immediately, before loading." }
  ],
  commonMistakes: [
    { wrong: `<img src="cake.jpg" alt="Cake" width="600px">`, correct: `<img src="cake.jpg" alt="Cake" width="600">`, reason: "The `width` attribute takes a **plain number** — `'px'` is invalid there. Use CSS if you want units." }
  ],
  tryItYourself: {
    html: `<img src="photo.jpg" alt="A photo">`,
    instructions: "Add width=\"300\" and height=\"200\" to size the image."
  },
  takeaways: [
    "`width` and `height` set an image's **display size** in pixels.",
    "They **reserve space** so the page does not jump while loading.",
    "Use plain numbers — **no 'px'** in these attributes."
  ],
  quizQuestions: [
    { id: "html-imgwh-1", question: "Why set width and height on images?", options: ["To make images load faster", "To reserve space and prevent layout jumping", "To add borders", "It is required by law"], correctAnswerIndex: 1, explanation: "Correct — reserved dimensions stop content from **shifting down** as each image loads." },
    { id: "html-imgwh-2", question: "What is wrong with width=\"600px\"?", options: ["Nothing", "The attribute takes a plain number, not 'px'", "600 is too large", "Width must be in percent"], correctAnswerIndex: 1, explanation: "Right! The `width` attribute takes a **plain number** — `'px'` is invalid there. Use CSS if you want units." }
  ]
};
export const htmlImageLinksContent: LessonContent = {
  heroTagline: "Make your pictures clickable.",
  introduction: "Notice how you **instinctively click** a website's logo expecting to go home? That is an **image link** — a picture wearing a link's clothes. Wrap an `<img>` inside an `<a>`, and the whole image becomes clickable.",
  definition: {
    term: "Image Link",
    explanation: "An `<img>` nested inside an `<a>` tag, making the **entire image clickable**."
  },
  whyItMatters: "Users **instinctively** click logos expecting to go home, and product photos expecting details. Image links match that instinct perfectly.",
  realWorldAnalogy: {
    title: "A Poster That Is Also a Door",
    story: "In a funhouse, some posters are **secretly doors** you can walk through. An image link is that poster-door: it looks like a picture, but it takes you somewhere.",
    comparison: [
      { item: "The poster-door", meaning: "An **image link** — looks like a picture, acts like a link" },
      { item: "An ordinary poster", meaning: "A plain image — just for looking" }
    ]
  },
  syntaxStructure: `<a href="index.html"><img src="logo.png" alt="Home"></a>`,
  codeExample: `<a href="index.html">
  <img src="logo.png" alt="Coding Vibes — home">
</a>

<a href="gallery/beach.html">
  <img src="thumbs/beach.jpg" alt="Beach photo — view larger">
</a>`,
  codeAnnotations: [
    { lineOrToken: "<a>", description: "The link wrapper — everything inside it becomes clickable." },
    { lineOrToken: "alt", description: "Still required: for image links, describe where the link goes." }
  ],
  commonMistakes: [
    { wrong: `<img src="logo.png" alt="Logo" href="index.html">`, correct: `<a href="index.html"><img src="logo.png" alt="Home"></a>`, reason: "`<img>` has **no** `href` attribute — only the anchor tag creates links, so the image must sit inside `<a>`." }
  ],
  tryItYourself: {
    html: `<img src="logo.png" alt="Home">`,
    instructions: "Wrap the image in an <a> tag linking to index.html."
  },
  takeaways: [
    "Nest `<img>` inside `<a>` to make images **clickable**.",
    "The **alt text** should describe the link destination.",
    "`<img>` alone can never be a link — it has no `href`."
  ],
  quizQuestions: [
    { id: "html-imglink-1", question: "How do you make an image clickable?", options: ["Add href to the <img> tag", "Wrap the <img> inside an <a> tag", "Add onclick to alt", "Images are always clickable"], correctAnswerIndex: 1, explanation: "Correct — the **anchor tag** creates the link; the image nested inside becomes the clickable content." },
    { id: "html-imglink-2", question: "What should the alt text of a logo image-link say?", options: ["logo.png", "An image", "Where the link goes, e.g. 'Home'", "Nothing — leave it empty"], correctAnswerIndex: 2, explanation: "Right! For image links, `alt` describes the **destination**, so screen reader users know where it leads." }
  ]
};

export const htmlFigureContent: LessonContent = {
  heroTagline: "Group a picture with its own caption block.",
  introduction: "Articles love saying '**see Figure 3**' — but what makes something a proper 'figure'? The `<figure>` tag! It wraps an image (or chart) into one **self-contained unit** that could be moved anywhere without breaking the article.",
  definition: {
    term: "<figure> Element",
    explanation: "A **container** grouping self-contained media — usually an image plus its caption — as one unit."
  },
  whyItMatters: "Articles quote figures by number ('see **Figure 3**'). The `<figure>` tag gives that unit a proper home in your markup.",
  realWorldAnalogy: {
    title: "A Framed Photo",
    story: "A **frame** holds the photo and its little nameplate as **one object** you can hang anywhere. `<figure>` frames your media the same way.",
    comparison: [
      { item: "The picture frame", meaning: "The `<figure>` tag — holds media as one unit" },
      { item: "Photo plus nameplate", meaning: "The **image** plus its `figcaption` inside" }
    ]
  },
  syntaxStructure: `<figure>
  <img src="chart.png" alt="Sales chart">
</figure>`,
  codeExample: `<figure>
  <img src="volcano.jpg" alt="Erupting volcano at night">
  <figcaption>Mount Etna erupting, photographed in 2024.</figcaption>
</figure>`,
  codeAnnotations: [
    { lineOrToken: "<figure>", description: "Declares the contents as one movable, self-contained unit." }
  ],
  commonMistakes: [
    { wrong: `<figure><img src="icon1.png" alt=""></figure>\n<figure><img src="icon2.png" alt=""></figure>`, correct: `<img src="icon1.png" alt="">\n<img src="icon2.png" alt="">`, reason: "Do not wrap every decorative icon in `<figure>`. Reserve it for **meaningful, referenced** media — plain `<img>` is enough for the rest." }
  ],
  tryItYourself: {
    html: `<img src="bridge.jpg" alt="A bridge">`,
    instructions: "Wrap the image in <figure> tags."
  },
  takeaways: [
    "`<figure>` groups media into one **self-contained** unit.",
    "It usually pairs with `<figcaption>` for a **caption**.",
    "Use it for **meaningful media**, not decorative icons."
  ],
  quizQuestions: [
    { id: "html-figure-1", question: "What is the <figure> tag for?", options: ["Styling text", "Grouping self-contained media as one unit", "Creating tables", "Making links"], correctAnswerIndex: 1, explanation: "Correct — `<figure>` wraps media (image, chart) into a single **self-contained** unit." },
    { id: "html-figure-2", question: "What typically goes inside <figure> with an image?", options: ["A <figcaption> caption", "A <table>", "A <form>", "A <nav>"], correctAnswerIndex: 0, explanation: "Right! `<figcaption>` provides the **caption** describing or crediting the figure's media." }
  ]
};

export const htmlFigcaptionContent: LessonContent = {
  heroTagline: "Give your figure a proper caption.",
  introduction: "A museum painting without its little **nameplate** feels incomplete — who painted this? When? The `<figcaption>` tag is that nameplate for your `<figure>`: a caption that **describes or credits** the media.",
  definition: {
    term: "<figcaption> Element",
    explanation: "A **caption** for a `<figure>`, placed as its first or last child, describing or crediting the media."
  },
  whyItMatters: "Captions answer '**what am I looking at?**' Photo credits, chart explanations, and witty remarks all live in figcaptions.",
  realWorldAnalogy: {
    title: "The Nameplate Under a Painting",
    story: "Museums put a small **plate** under each painting with its title and artist. The `<figcaption>` is that plate — small, but it tells the whole story.",
    comparison: [
      { item: "The museum nameplate", meaning: "The `<figcaption>` — titles and credits the work" },
      { item: "The painting", meaning: "The figure's **image** above it" }
    ]
  },
  syntaxStructure: `<figure>
  <img src="..." alt="...">
  <figcaption>Caption text here.</figcaption>
</figure>`,
  codeExample: `<figure>
  <img src="bridge.jpg" alt="Golden Gate Bridge in fog">
  <figcaption>The Golden Gate Bridge disappearing into morning fog. Photo: A. Rivera.</figcaption>
</figure>`,
  codeAnnotations: [
    { lineOrToken: "<figcaption>", description: "Must sit first or last inside <figure> — browsers and tools expect it there." }
  ],
  commonMistakes: [
    { wrong: `<figure>\n  <img src="b.jpg" alt="Bridge">\n</figure>\n<figcaption>A bridge.</figcaption>`, correct: `<figure>\n  <img src="b.jpg" alt="Bridge">\n  <figcaption>A bridge.</figcaption>\n</figure>`, reason: "A figcaption outside a figure is **invalid HTML** and loses its connection to the image. Keep them together!" }
  ],
  tryItYourself: {
    html: `<figure>\n  <img src="cat.jpg" alt="A cat">\n</figure>`,
    instructions: "Add a <figcaption> inside the figure: 'Milo the cat, napping.'"
  },
  takeaways: [
    "`<figcaption>` **captions** the media inside a `<figure>`.",
    "It must be the **first or last child** of `<figure>`.",
    "Use it for **descriptions**, credits, and context."
  ],
  quizQuestions: [
    { id: "html-figcaption-1", question: "Where must <figcaption> be placed?", options: ["Anywhere on the page", "As the first or last child of <figure>", "Inside the <head>", "After the </body>"], correctAnswerIndex: 1, explanation: "Correct — `<figcaption>` belongs inside `<figure>` as its **first or last child**." },
    { id: "html-figcaption-2", question: "Can <figcaption> be used without <figure>?", options: ["Yes, anywhere", "No — it must live inside a <figure>", "Only with <img>", "Only in footers"], correctAnswerIndex: 1, explanation: "Right! A figcaption outside a figure is **invalid** — it loses its connection to the media." }
  ]
};

export const htmlResponsiveImagesContent: LessonContent = {
  heroTagline: "Serve the right image size to every screen.",
  introduction: "Sending a **4K desktop banner** to a phone is like delivering a sofa through a cat door — slow, wasteful, and painful. **Responsive images** let the browser pick the perfect file for each screen: small files for phones, big ones for desktops.",
  definition: {
    term: "Responsive Images",
    explanation: "Techniques (`srcset`, `sizes`, or CSS) delivering **appropriately-sized** image files for each device."
  },
  whyItMatters: "A **3 MB banner** on a phone wastes data and loads slowly. Responsive images can cut load times dramatically — your mobile visitors will thank you.",
  realWorldAnalogy: {
    title: "Clothing Sizes",
    story: "A shop stocks **small, medium, and large** — you take the size that fits you. `srcset` stocks multiple image sizes, and each device takes its perfect fit.",
    comparison: [
      { item: "The clothing sizes", meaning: "The **`srcset`** options — multiple image files" },
      { item: "Your measurements", meaning: "The device's **screen size** — decides the fit" }
    ]
  },
  syntaxStructure: `<img src="cake-800.jpg"
     srcset="cake-400.jpg 400w, cake-800.jpg 800w"
     alt="Cake">`,
  codeExample: `<img src="banner-800.jpg"
     srcset="banner-400.jpg 400w, banner-800.jpg 800w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Bakery banner">`,
  codeAnnotations: [
    { lineOrToken: "srcset", description: "Lists image files with their widths — the browser picks the best match." },
    { lineOrToken: "sizes", description: "Tells the browser how wide the image will display at different screen sizes." },
    { lineOrToken: "src", description: "The fallback image for browsers that don't understand srcset." }
  ],
  commonMistakes: [
    { wrong: `<!-- one 3 MB image for everyone -->\n<img src="banner-huge.jpg" alt="Banner">`, correct: `<img src="banner-800.jpg"\n     srcset="banner-400.jpg 400w, banner-800.jpg 800w"\n     alt="Banner">`, reason: "**One-size-fits-all** images punish mobile users with slow loads and wasted data. Serve every screen its right size." }
  ],
  tryItYourself: {
    html: `<img src="photo-800.jpg" alt="A photo">`,
    instructions: "Add a srcset offering photo-400.jpg (400w) and photo-800.jpg (800w)."
  },
  takeaways: [
    "`srcset` lets the browser choose the **best-sized** image.",
    "Small screens get **small files** — faster loads, less data.",
    "Always keep `src` as a **fallback**."
  ],
  quizQuestions: [
    { id: "html-respimg-1", question: "What does the srcset attribute do?", options: ["Sets the image style", "Offers multiple image files so the browser picks the best size", "Creates a slideshow", "Adds a caption"], correctAnswerIndex: 1, explanation: "Correct — `srcset` lists image files with **widths**; the browser selects the best fit for the screen." },
    { id: "html-respimg-2", question: "Why serve smaller images to phones?", options: ["Phones can't show images", "Faster loads and less mobile data used", "Small images look sharper", "It is a legal requirement"], correctAnswerIndex: 1, explanation: "Right! Large desktop images **waste mobile data** and slow down page loads on phones." }
  ]
};

export const htmlAudioContent: LessonContent = {
  heroTagline: "Play sound right on your page.",
  introduction: "Want a **podcast episode** or music preview on your page — with zero plugins and zero players to install? The `<audio>` tag embeds a sound player directly. Add `controls`, and the browser builds the **play, pause, and volume** buttons for you.",
  definition: {
    term: "<audio> Element",
    explanation: "An element embedding **audio playback** with built-in browser controls."
  },
  whyItMatters: "Podcasts, **music previews**, and pronunciation guides all need audio. `<audio>` adds it natively — no plugins, no fuss.",
  realWorldAnalogy: {
    title: "A Jukebox on the Page",
    story: "You drop a coin in a **jukebox** and press a button to hear a song. The `<audio>` tag is that jukebox — the `controls` attribute is its shiny buttons.",
    comparison: [
      { item: "The jukebox buttons", meaning: "The `controls` attribute — **play, pause, volume**" },
      { item: "The record inside", meaning: "The **audio file** the tag points to" }
    ]
  },
  syntaxStructure: `<audio controls src="song.mp3"></audio>`,
  codeExample: `<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  Your browser does not support audio.
</audio>`,
  codeAnnotations: [
    { lineOrToken: "controls", description: "Shows the play, pause, and volume interface." },
    { lineOrToken: "<source>", description: "Offers multiple formats — the browser uses the first one it supports." },
    { lineOrToken: "Your browser does not support audio.", description: "Fallback text, shown only if audio isn't supported at all." }
  ],
  commonMistakes: [
    { wrong: `<audio src="song.mp3"></audio>`, correct: `<audio controls src="song.mp3"></audio>`, reason: "Without `controls`, the audio is **invisible and unplayable** — users have no way to start it. Always add controls (or your own player UI)." }
  ],
  tryItYourself: {
    html: `<audio src="song.mp3"></audio>`,
    instructions: "Add the controls attribute so visitors can play the audio."
  },
  takeaways: [
    "`<audio>` embeds a sound player with **no plugins**.",
    "The `controls` attribute shows **play/pause/volume** buttons.",
    "Offer multiple `<source>` formats for wider support."
  ],
  quizQuestions: [
    { id: "html-audio-1", question: "What does the controls attribute do on <audio>?", options: ["Autoplays the sound", "Shows the player interface with play and volume", "Mutes the audio", "Downloads the file"], correctAnswerIndex: 1, explanation: "Correct — `controls` displays the browser's built-in **play, pause, and volume** buttons." },
    { id: "html-audio-2", question: "Why provide two <source> elements?", options: ["To play two songs at once", "So the browser can use the format it supports", "It doubles the volume", "It is required by law"], correctAnswerIndex: 1, explanation: "Right! Browsers support **different audio formats**; multiple sources maximize compatibility." }
  ]
};

export const htmlVideoContent: LessonContent = {
  heroTagline: "Embed video without any plugins.",
  introduction: "Video is the web's **favorite medium** — and the `<video>` tag plays it natively, no YouTube account or plugin required. Add `controls` for the player buttons and `poster` for a tempting **preview image** before anyone presses play.",
  definition: {
    term: "<video> Element",
    explanation: "An element embedding **video playback** with built-in browser controls."
  },
  whyItMatters: "Video is the web's favorite medium. `<video>` plays it **natively** — no video platform account or plugin required.",
  realWorldAnalogy: {
    title: "A TV Built Into the Wall",
    story: "A **wall-mounted TV** is part of the room itself — no separate box or cables needed. The `<video>` tag is that built-in TV; old plugin video was the clunky separate DVD player.",
    comparison: [
      { item: "The built-in TV", meaning: "The `<video>` tag — **native playback**, no extras" },
      { item: "A separate DVD player", meaning: "Old **plugin-based** video — extra parts required" }
    ]
  },
  syntaxStructure: `<video controls width="640" src="movie.mp4"></video>`,
  codeExample: `<video controls width="640" poster="preview.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support video.
</video>`,
  codeAnnotations: [
    { lineOrToken: "controls", description: "Shows the play, pause, volume, and fullscreen buttons." },
    { lineOrToken: "poster", description: "Displays a preview image before the video plays." },
    { lineOrToken: "width", description: "Sets the player's display width in pixels." }
  ],
  commonMistakes: [
    { wrong: `<video autoplay src="ad.mp4"></video>`, correct: `<video autoplay muted src="ad.mp4"></video>`, reason: "Browsers block **autoplay with sound** as intrusive — `muted` autoplay is allowed. Respect the visitor's ears!" }
  ],
  tryItYourself: {
    html: `<video src="clip.mp4"></video>`,
    instructions: "Add controls and width=\"480\" so visitors can play the video."
  },
  takeaways: [
    "`<video>` embeds **native** video playback.",
    "`controls` adds the player interface; `poster` shows a **preview image**.",
    "**Autoplay with sound** is blocked — use `muted` if you autoplay."
  ],
  quizQuestions: [
    { id: "html-video-1", question: "What does the poster attribute do?", options: ["Posts the video online", "Shows a preview image before playback", "Adds subtitles", "Loops the video"], correctAnswerIndex: 1, explanation: "Correct — `poster` displays a **preview image** in the player until the video starts." },
    { id: "html-video-2", question: "Why is autoplay with sound usually blocked?", options: ["It uses too much code", "Browsers consider it intrusive", "Videos can't autoplay", "It breaks the layout"], correctAnswerIndex: 1, explanation: "Right! Browsers block **sound autoplay** as intrusive; muted autoplay is permitted." }
  ]
};

export const htmlEmbeddedMediaContent: LessonContent = {
  heroTagline: "Borrow videos and maps from other sites.",
  introduction: "Need a **YouTube video**, a **Google Map**, or a social post on your page — without hosting videos or building maps yourself? The `<iframe>` tag embeds a whole other webpage inside yours. Just paste the **embed code** and you are done.",
  definition: {
    term: "<iframe> (Inline Frame)",
    explanation: "An element embedding a **complete external webpage** inside your page."
  },
  whyItMatters: "You do not need to host videos or build maps yourself. Iframes let you **borrow rich content** legally and easily.",
  realWorldAnalogy: {
    title: "A Window Into Another Shop",
    story: "A **mall window** lets you see into a shop without leaving the hallway. The `<iframe>` is that window — a live view into another site, framed by your page.",
    comparison: [
      { item: "The shop window", meaning: "The `<iframe>` — a view into **another site**" },
      { item: "The hallway", meaning: "**Your page** — the frame around it" }
    ]
  },
  syntaxStructure: `<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>`,
  codeExample: `<iframe width="560" height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  allowfullscreen>
</iframe>`,
  codeAnnotations: [
    { lineOrToken: "title", description: "Describes the embedded content for screen readers — always include it." },
    { lineOrToken: "allowfullscreen", description: "Lets the video expand to fill the whole screen." }
  ],
  commonMistakes: [
    { wrong: `<iframe src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></iframe>`, correct: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>`, reason: "Regular watch-page URLs are **blocked from iframing** — only the site's official `/embed/` URLs are guaranteed to work." }
  ],
  tryItYourself: {
    html: `<iframe src="https://www.youtube.com/embed/abc123"></iframe>`,
    instructions: "Add width=\"560\", height=\"315\", and a title describing the video."
  },
  takeaways: [
    "`<iframe>` embeds external pages like **videos and maps**.",
    "Always include a descriptive **`title`** for accessibility.",
    "Use the site's official **embed URL**, not a regular page URL."
  ],
  quizQuestions: [
    { id: "html-iframe-1", question: "What can <iframe> embed?", options: ["Only images", "Complete external webpages like videos and maps", "Only text", "Nothing — it is deprecated"], correctAnswerIndex: 1, explanation: "Correct — `<iframe>` embeds a **full external document** — videos, maps, posts — inside your page." },
    { id: "html-iframe-2", question: "Why is the title attribute important on <iframe>?", options: ["It styles the frame", "Screen readers use it to describe the embedded content", "It speeds up loading", "It is not important"], correctAnswerIndex: 1, explanation: "Right! Without a `title`, assistive tech announces only '**frame**' — users cannot tell what is inside." }
  ]
};
