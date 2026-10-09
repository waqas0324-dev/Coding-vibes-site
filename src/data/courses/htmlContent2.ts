import { LessonContent } from '../../types';

// ============================================================
// HTML Course — Unique lesson content, Part 2
// Modules 1-4: Fundamentals (Comments), Text and Content,
// Links, Images and Media
// ============================================================

export const htmlHtmlCommentsContent: LessonContent = {
  heroTagline: "Leave notes in your code that browsers never show.",
  introduction: "An HTML comment is a note you write inside your code for people, not for browsers. The browser completely ignores comments, so visitors never see them. Only someone reading your source code can see them.",
  definition: {
    term: "HTML Comment (<!-- -->)",
    explanation: "Text written between <!-- and --> markers. The browser hides it from the page, but it stays visible when you view the source code."
  },
  whyItMatters: "Code gets confusing quickly. A short comment explains why a section exists, which saves you hours when you return to a project weeks later.",
  realWorldAnalogy: {
    title: "Sticky Notes on a Recipe",
    story: "A chef sticks a small note on a recipe card to remind herself of a tweak she made.",
    comparison: [
      { item: "Sticky note", meaning: "The comment — extra info for whoever reads the recipe" },
      { item: "Recipe instructions", meaning: "The page — what the cook (the browser) actually follows" }
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
    { wrong: `<!-- My note`, correct: `<!-- My note -->`, reason: "An unclosed comment swallows everything after it — the rest of your page can vanish from the screen." }
  ],
  tryItYourself: {
    html: `<!-- Write your comment here -->
<p>My first webpage</p>`,
    instructions: "Replace the comment text with a note describing what this paragraph is about."
  },
  takeaways: [
    "Comments are written between <!-- and --> markers.",
    "Browsers hide comments; only code readers see them.",
    "Use comments to explain why code exists, not to state the obvious."
  ],
  quizQuestions: [
    { id: "html-comments-1", question: "Which code creates an HTML comment?", options: ["<comment>text</comment>", "<!-- text -->", "// text", "# text"], correctAnswerIndex: 1, explanation: "HTML comments open with <!-- and close with -->." },
    { id: "html-comments-2", question: "What happens to comments when a browser loads the page?", options: ["They appear as gray text", "They are ignored and hidden", "They show in the page title", "They cause an error"], correctAnswerIndex: 1, explanation: "Browsers skip comments entirely — only people viewing the source code can see them." }
  ]
};

export const htmlLineBreaksContent: LessonContent = {
  heroTagline: "End a line exactly where you want it to end.",
  introduction: "HTML normally ignores single line breaks in your code. Pressing Enter in your editor does not move text to a new line on the page. The <br> tag forces a break at the exact spot you place it.",
  definition: {
    term: "Line Break (<br>)",
    explanation: "An empty tag that starts a new line immediately at its position. It has no closing tag."
  },
  whyItMatters: "Addresses, poems, and song lyrics need line breaks in precise places. Without <br>, all your lines would run together into one blob of text.",
  realWorldAnalogy: {
    title: "The Enter Key for the Browser",
    story: "You tap Enter on your phone to start a new line in a message.",
    comparison: [
      { item: "Enter key", meaning: "Your instruction to start a new line" },
      { item: "<br> tag", meaning: "The browser's instruction to start a new line" }
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
    { wrong: `<br></br>`, correct: `<br>`, reason: "<br> is a void element — it never takes a closing tag." }
  ],
  tryItYourself: {
    html: `<p>Line one<br>Line two</p>`,
    instructions: "Add a third line that says 'Line three' using another <br> tag."
  },
  takeaways: [
    "<br> forces a line break at its exact position.",
    "It is a void element — no closing tag needed.",
    "Pressing Enter in your code editor does not break lines on the page."
  ],
  quizQuestions: [
    { id: "html-linebreaks-1", question: "Which tag creates a line break?", options: ["<break>", "<br>", "<lb>", "<newline>"], correctAnswerIndex: 1, explanation: "The <br> tag forces a line break exactly where it appears." },
    { id: "html-linebreaks-2", question: "Does the <br> tag need a closing tag?", options: ["Yes, always </br>", "No — it is a void element", "Only inside paragraphs", "Only in HTML5"], correctAnswerIndex: 1, explanation: "<br> is a void element and never takes a closing tag." }
  ]
};

export const htmlHorizontalRulesContent: LessonContent = {
  heroTagline: "Draw a clean line between two sections of content.",
  introduction: "The <hr> tag draws a horizontal line across the page. It marks a shift in topic — like moving from one chapter to another. The line is a meaningful separator, not decoration.",
  definition: {
    term: "Horizontal Rule (<hr>)",
    explanation: "An empty element that draws a horizontal line and signals a thematic break in the content."
  },
  whyItMatters: "Long pages need visual breathing room. A rule tells readers 'this topic is finished, a new one starts now' without adding any words.",
  realWorldAnalogy: {
    title: "A Divider in a Binder",
    story: "You slide a divider tab into a binder to separate one subject from the next.",
    comparison: [
      { item: "Divider tab", meaning: "The <hr> element — a visible topic boundary" },
      { item: "Binder sections", meaning: "The page sections on each side of the line" }
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
    { wrong: `<!-- decorative line under every heading -->\n<h2>News</h2>\n<hr>\n<h2>Sports</h2>\n<hr>`, correct: `<!-- thematic break between different topics -->\n<h2>Morning News</h2>\n<p>...</p>\n<hr>\n<h2>Evening Sports</h2>\n<p>...</p>`, reason: "<hr> means a thematic break to screen readers — using it as decoration under every heading misleads them." }
  ],
  tryItYourself: {
    html: `<p>First topic ends here.</p>\n<p>Second topic starts here.</p>`,
    instructions: "Place an <hr> tag on its own line between the two paragraphs."
  },
  takeaways: [
    "<hr> draws a horizontal line marking a topic shift.",
    "It is a void element — no closing tag.",
    "Use it for real thematic breaks, not decoration."
  ],
  quizQuestions: [
    { id: "html-hr-1", question: "What does the <hr> tag create?", options: ["A vertical line", "A horizontal line", "A page break", "A heading"], correctAnswerIndex: 1, explanation: "<hr> draws a horizontal rule across the page." },
    { id: "html-hr-2", question: "When should you use <hr>?", options: ["Under every heading for style", "Between genuinely different topics", "Inside every paragraph", "Instead of the <br> tag"], correctAnswerIndex: 1, explanation: "<hr> signals a thematic break — a real shift from one topic to another." }
  ]
};

export const htmlTextFormattingContent: LessonContent = {
  heroTagline: "Shape how your text looks and what it means.",
  introduction: "HTML gives you small tags that change how text appears and what it communicates. Some tags make text bold or italic; others mark text as deleted, inserted, or highlighted. Each tag has one clear job.",
  definition: {
    term: "Text Formatting Tags",
    explanation: "A family of small inline tags like <b>, <i>, <mark>, and <small> that style or describe short pieces of text."
  },
  whyItMatters: "Plain walls of text are hard to scan. Formatting tags guide the reader's eye to the parts that matter most.",
  realWorldAnalogy: {
    title: "A Highlighter and Pen Set",
    story: "You underline key sentences and highlight names in a textbook to find them later.",
    comparison: [
      { item: "Highlighter", meaning: "The <mark> tag — draws attention to key phrases" },
      { item: "Underlined sentence", meaning: "The <b> or <u> effect — makes words stand out" }
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
    { wrong: `<b><i>text</b></i>`, correct: `<b><i>text</i></b>`, reason: "Tags must close in reverse order — the last one opened closes first (proper nesting)." }
  ],
  tryItYourself: {
    html: `<p>Big sale this weekend!</p>`,
    instructions: "Make the word 'sale' bold and highlight 'this weekend' with the mark tag."
  },
  takeaways: [
    "Formatting tags are small inline tags for short runs of text.",
    "Some tags only change looks (<b>, <i>); others add meaning (<strong>, <em>).",
    "Always nest tags properly — close the inner tag first."
  ],
  quizQuestions: [
    { id: "html-textformat-1", question: "Which tag highlights text like a yellow marker?", options: ["<b>", "<highlight>", "<mark>", "<em>"], correctAnswerIndex: 2, explanation: "The <mark> tag highlights text with a yellow background." },
    { id: "html-textformat-2", question: "What is wrong with <b><i>text</b></i>?", options: ["Nothing — it works fine", "Tags overlap instead of nesting properly", "<i> cannot be inside <b>", "Bold and italic cannot combine"], correctAnswerIndex: 1, explanation: "Tags must nest correctly: close the inner tag first — <b><i>text</i></b>." }
  ]
};

export const htmlBoldTextContent: LessonContent = {
  heroTagline: "Make words stand out — purely for looks.",
  introduction: "The <b> tag makes text bold. That is all it does — it adds no extra meaning. Use it when you want visual attention only, like product names or keywords in a summary.",
  definition: {
    term: "Bold (<b>)",
    explanation: "An inline tag that renders text in a bold weight without signaling importance."
  },
  whyItMatters: "Readers scan pages instead of reading every word. Bold keywords catch the eye and help people find what they need faster.",
  realWorldAnalogy: {
    title: "Writing with a Thicker Pen",
    story: "You trace over a word with a thick marker so it pops off the page.",
    comparison: [
      { item: "Thick marker stroke", meaning: "The <b> tag — visually heavier, same meaning" },
      { item: "Normal handwriting", meaning: "Regular text around it" }
    ]
  },
  syntaxStructure: `<b>bold text</b>`,
  codeExample: `<p>The <b>Galaxy X200</b> launches on <b>March 15</b>.</p>`,
  codeAnnotations: [
    { lineOrToken: "<b>...</b>", description: "Everything inside renders bold. Use only when you want visual emphasis without meaning." }
  ],
  commonMistakes: [
    { wrong: `<b>Warning: toxic chemicals</b>`, correct: `<strong>Warning: toxic chemicals</strong>`, reason: "For real importance, use <strong>. Screen readers stress <strong> but treat <b> as plain styling." }
  ],
  tryItYourself: {
    html: `<p>My favorite movie is Dune.</p>`,
    instructions: "Wrap the movie name in <b> tags to make it bold."
  },
  takeaways: [
    "<b> makes text bold with no added meaning.",
    "Use it for visual attention: keywords, product names, lead-ins.",
    "For true importance, use <strong> instead."
  ],
  quizQuestions: [
    { id: "html-bold-1", question: "What does the <b> tag add to text?", options: ["Bold look only, no extra meaning", "Bold look plus importance", "Italic style", "A link"], correctAnswerIndex: 0, explanation: "<b> is purely visual — it makes text bold without adding meaning." },
    { id: "html-bold-2", question: "What is the closing tag for <b>?", options: ["<bold>", "</b>", "<end-b>", "</bold>"], correctAnswerIndex: 1, explanation: "The closing tag is </b> — a forward slash followed by the tag name." }
  ]
};
export const htmlImportantTextContent: LessonContent = {
  heroTagline: "Mark text that truly matters — and say so.",
  introduction: "The <strong> tag also renders text bold, but it carries meaning. It tells browsers and screen readers that this text is important. A screen reader will read it with extra stress.",
  definition: {
    term: "Strong Importance (<strong>)",
    explanation: "An inline tag that marks text as important. It looks bold and tells assistive technology to emphasize it."
  },
  whyItMatters: "Some users hear your page instead of seeing it. <strong> makes sure warnings and key facts get the emphasis they deserve for everyone.",
  realWorldAnalogy: {
    title: "Raising Your Voice",
    story: "You say a warning louder so everyone in the room takes it seriously.",
    comparison: [
      { item: "Raised voice", meaning: "The <strong> tag — louder and more serious" },
      { item: "Normal speaking voice", meaning: "Regular text around it" }
    ]
  },
  syntaxStructure: `<strong>important text</strong>`,
  codeExample: `<p><strong>Warning:</strong> Do not unplug the server during updates.</p>
<p>Your appointment is <strong>tomorrow at 9 AM</strong>.</p>`,
  codeAnnotations: [
    { lineOrToken: "<strong>", description: "Adds semantic importance — screen readers announce this text with vocal stress." }
  ],
  commonMistakes: [
    { wrong: `<strong>Sale</strong> <strong>50% off</strong> <strong>today</strong> <strong>only</strong>`, correct: `<b>Sale</b> 50% off today only — <strong>ends at midnight</strong>`, reason: "If everything is important, nothing is. Reserve <strong> for genuinely important text and use <b> for plain visual bold." }
  ],
  tryItYourself: {
    html: `<p>Do not touch the red wire.</p>`,
    instructions: "Mark the words 'Do not touch' with <strong> to show real importance."
  },
  takeaways: [
    "<strong> looks bold AND means 'this is important'.",
    "Screen readers read <strong> text with emphasis.",
    "Use it sparingly — overuse destroys its meaning."
  ],
  quizQuestions: [
    { id: "html-strong-1", question: "What is the key difference between <b> and <strong>?", options: ["<b> is bolder", "<strong> adds meaning and importance", "There is no difference", "<strong> is deprecated"], correctAnswerIndex: 1, explanation: "<strong> marks text as important for browsers and screen readers; <b> is only visual." },
    { id: "html-strong-2", question: "How does a screen reader treat <strong> text?", options: ["It skips it", "It reads it with vocal emphasis", "It spells it letter by letter", "It reads it twice"], correctAnswerIndex: 1, explanation: "Screen readers add vocal stress to <strong> text, matching its importance." }
  ]
};

export const htmlItalicTextContent: LessonContent = {
  heroTagline: "Lean your text sideways — purely for style.",
  introduction: "The <i> tag renders text in italics. Like <b>, it is purely visual and adds no meaning. It is traditionally used for foreign words, technical terms, and titles in plain styling contexts.",
  definition: {
    term: "Italic (<i>)",
    explanation: "An inline tag that slants text without adding emphasis or meaning."
  },
  whyItMatters: "Certain words — foreign phrases, scientific names — are conventionally italicized. The <i> tag gives you that classic typographic style.",
  realWorldAnalogy: {
    title: "Slanted Handwriting",
    story: "You tilt your handwriting for a word you want to look different from the rest.",
    comparison: [
      { item: "Tilted letters", meaning: "The <i> tag — slanted for style" },
      { item: "Upright letters", meaning: "Normal text around it" }
    ]
  },
  syntaxStructure: `<i>italic text</i>`,
  codeExample: `<p>The phrase <i>carpe diem</i> means "seize the day."</p>
<p>The ship <i>Ever Given</i> blocked the canal in 2021.</p>`,
  codeAnnotations: [
    { lineOrToken: "<i>...</i>", description: "Everything inside renders slanted. Use for visual italics only — foreign words, terms, names." }
  ],
  commonMistakes: [
    { wrong: `<i>Do not touch the red wire</i>`, correct: `<em>Do not touch the red wire</em>`, reason: "For real emphasis use <em>. <i> is only visual, and screen readers ignore the distinction." }
  ],
  tryItYourself: {
    html: `<p>Bonjour means hello in French.</p>`,
    instructions: "Wrap the French word 'Bonjour' in <i> tags."
  },
  takeaways: [
    "<i> slants text with no added meaning.",
    "Use it for foreign words, technical terms, and stylistic italics.",
    "For true emphasis, use <em> instead."
  ],
  quizQuestions: [
    { id: "html-italic-1", question: "What does the <i> tag do?", options: ["Makes text italic, visual only", "Adds spoken emphasis", "Creates a link", "Makes text bold"], correctAnswerIndex: 0, explanation: "<i> renders slanted text purely for style, with no added meaning." },
    { id: "html-italic-2", question: "Which is a good use of <i>?", options: ["A safety warning", "A foreign phrase like 'carpe diem'", "A stressed word in a warning", "A page heading"], correctAnswerIndex: 1, explanation: "Foreign phrases are conventionally italicized — a perfect visual-only use of <i>." }
  ]
};

export const htmlEmphasizedTextContent: LessonContent = {
  heroTagline: "Stress a word — and mean it.",
  introduction: "The <em> tag renders text in italics, but with a purpose. It marks emphasis — the word you would stress if you spoke the sentence out loud. Screen readers change their tone for <em> text.",
  definition: {
    term: "Emphasis (<em>)",
    explanation: "An inline tag that marks stressed emphasis. It looks italic and tells assistive technology to add vocal stress."
  },
  whyItMatters: "'I said red, not blue' changes meaning depending on the stressed word. <em> preserves that spoken nuance in writing.",
  realWorldAnalogy: {
    title: "Pressing Harder on One Word",
    story: "When you say a sentence aloud, you press harder on the word that changes everything.",
    comparison: [
      { item: "Vocal stress", meaning: "The <em> tag — this word carries the meaning" },
      { item: "Flat reading", meaning: "Plain text with no special stress" }
    ]
  },
  syntaxStructure: `<em>emphasized text</em>`,
  codeExample: `<p>You <em>must</em> save your work before closing.</p>
<p>She bought <em>three</em> tickets, not two.</p>`,
  codeAnnotations: [
    { lineOrToken: "<em>", description: "Marks the stressed word — screen readers raise their tone here." }
  ],
  commonMistakes: [
    { wrong: `<em>The Great Gatsby</em> is a famous novel.`, correct: `<i>The Great Gatsby</i> is a famous novel.`, reason: "Book titles use visual italics (<i>). Reserve <em> for words you'd stress when speaking — screen readers change tone for <em>." }
  ],
  tryItYourself: {
    html: `<p>I wanted the red car, not the blue one.</p>`,
    instructions: "Wrap the word 'red' in <em> tags to stress it."
  },
  takeaways: [
    "<em> looks italic AND means 'stress this word'.",
    "Screen readers change their tone for <em> text.",
    "Use it for spoken-style emphasis, not for titles."
  ],
  quizQuestions: [
    { id: "html-em-1", question: "What is the key difference between <i> and <em>?", options: ["<i> is more slanted", "<em> adds spoken emphasis and meaning", "There is no difference", "<em> makes text bold"], correctAnswerIndex: 1, explanation: "<em> marks emphasis that screen readers voice with stress; <i> is only visual." },
    { id: "html-em-2", question: "In 'You must save your work', which word deserves <em>?", options: ["You", "must", "your", "work"], correctAnswerIndex: 1, explanation: "'must' is the word you'd stress when speaking — that's what <em> marks." }
  ]
};

export const htmlSmallTextContent: LessonContent = {
  heroTagline: "Shrink the side notes and fine print.",
  introduction: "The <small> tag renders text in a smaller size. It is meant for side comments, disclaimers, and copyright lines — the text that supports the main content without competing with it.",
  definition: {
    term: "Small (<small>)",
    explanation: "An inline tag that displays text at a smaller size, used for fine print and secondary notes."
  },
  whyItMatters: "Every page has legal or extra details that must exist but should not shout. <small> keeps them readable yet quiet.",
  realWorldAnalogy: {
    title: "Footnote at the Bottom of a Contract",
    story: "Contracts print the conditions in tiny text below the signature line.",
    comparison: [
      { item: "Tiny contract text", meaning: "The <small> tag — present but not loud" },
      { item: "Main contract terms", meaning: "Regular paragraphs with full attention" }
    ]
  },
  syntaxStructure: `<small>fine print</small>`,
  codeExample: `<p>Total: $49.99</p>
<p><small>* Price includes tax. Shipping calculated at checkout.</small></p>`,
  codeAnnotations: [
    { lineOrToken: "<small>", description: "Renders the enclosed text smaller — for disclaimers, notes, and copyright lines." }
  ],
  commonMistakes: [
    { wrong: `<small><small><small>tiny text</small></small></small>`, correct: `<small>tiny text</small> <!-- size via CSS if needed -->`, reason: "Stacking <small> tags shrinks text unpredictably — use CSS font-size when you need exact control." }
  ],
  tryItYourself: {
    html: `<p>Free trial for 30 days.</p>\n<p>No credit card required.</p>`,
    instructions: "Wrap the second paragraph in <small> tags to turn it into fine print."
  },
  takeaways: [
    "<small> renders text smaller for side notes and disclaimers.",
    "Use it for copyright lines, legal notes, and secondary info.",
    "Don't stack <small> tags — use CSS for precise sizing."
  ],
  quizQuestions: [
    { id: "html-small-1", question: "What is <small> meant for?", options: ["Main headings", "Fine print and side notes", "Navigation menus", "Image captions only"], correctAnswerIndex: 1, explanation: "<small> is for secondary content like disclaimers and copyright lines." },
    { id: "html-small-2", question: "How do you make text even smaller than one <small>?", options: ["Nest three <small> tags", "Use CSS font-size", "Use the <tiny> tag", "You cannot"], correctAnswerIndex: 1, explanation: "CSS font-size gives exact control; stacking <small> tags is unpredictable." }
  ]
};

export const htmlMarkedTextContent: LessonContent = {
  heroTagline: "Highlight text like a yellow marker.",
  introduction: "The <mark> tag highlights text with a yellow background, exactly like a highlighter pen. Use it to draw attention to a phrase the reader should notice — such as a search term in results.",
  definition: {
    term: "Marked Text (<mark>)",
    explanation: "An inline tag that highlights text with a yellow background to flag relevance."
  },
  whyItMatters: "In search results, highlighted terms show readers why a page matched. <mark> creates that effect with one tag.",
  realWorldAnalogy: {
    title: "Yellow Highlighter on a Page",
    story: "You drag a yellow highlighter over the key sentence in your study notes.",
    comparison: [
      { item: "Highlighter stroke", meaning: "The <mark> tag — draws the eye instantly" },
      { item: "Plain notes", meaning: "Unmarked text around it" }
    ]
  },
  syntaxStructure: `<mark>highlighted text</mark>`,
  codeExample: `<p>Search results for <mark>"solar panels"</mark>: 12 matches found.</p>`,
  codeAnnotations: [
    { lineOrToken: "<mark>", description: "Paints a yellow background behind the text — the web's highlighter pen." }
  ],
  commonMistakes: [
    { wrong: `<mark>Welcome to our site</mark> <mark>We sell shoes</mark> <mark>Call now</mark>`, correct: `<p>Your search for <mark>running shoes</mark> returned 24 results.</p>`, reason: "Over-highlighting blinds the reader — a page where everything glows highlights nothing. Use <mark> sparingly for relevant terms." }
  ],
  tryItYourself: {
    html: `<p>The meeting is at 3 PM in Room 4.</p>`,
    instructions: "Highlight the time '3 PM' with the <mark> tag."
  },
  takeaways: [
    "<mark> highlights text with a yellow background.",
    "Perfect for search terms and key phrases in results.",
    "Use sparingly — too much highlighting defeats the purpose."
  ],
  quizQuestions: [
    { id: "html-mark-1", question: "What visual effect does <mark> create?", options: ["Bold text", "Yellow highlighted background", "Underlined text", "Red text"], correctAnswerIndex: 1, explanation: "<mark> renders text with a yellow background, like a highlighter pen." },
    { id: "html-mark-2", question: "What is a classic use case for <mark>?", options: ["Page headings", "Highlighting search terms in results", "Navigation links", "Footer copyright"], correctAnswerIndex: 1, explanation: "Search pages use <mark> to show why each result matched the query." }
  ]
};
export const htmlDeletedTextContent: LessonContent = {
  heroTagline: "Cross out what is no longer true.",
  introduction: "The <del> tag draws a line through text to show it was removed. Unlike just deleting the words, <del> keeps a visible record of the change — useful for price drops and edited documents.",
  definition: {
    term: "Deleted Text (<del>)",
    explanation: "An inline tag that strikes through text to indicate removed or outdated content."
  },
  whyItMatters: "Shoppers love seeing the old price crossed out next to a sale price. <del> shows change honestly instead of hiding it.",
  realWorldAnalogy: {
    title: "Crossing Out on Paper",
    story: "You draw a line through a wrong answer instead of erasing it, so the correction stays visible.",
    comparison: [
      { item: "Pen strikethrough", meaning: "The <del> tag — removed but still visible" },
      { item: "Erased word", meaning: "Deleting without a trace — no history kept" }
    ]
  },
  syntaxStructure: `<del>removed text</del>`,
  codeExample: `<p>Price: <del>$99</del> <ins>$59</ins> — this week only!</p>`,
  codeAnnotations: [
    { lineOrToken: "<del>", description: "Renders a horizontal line through the text, marking it as removed." },
    { lineOrToken: "<ins>", description: "Its partner tag — marks the replacement text (covered fully in the next lesson)." }
  ],
  commonMistakes: [
    { wrong: `<del>lol this is so funny</del>`, correct: `<del>$99</del> $59 — price updated`, reason: "Screen readers announce deleted text as 'deleted' — using <del> for jokes confuses listeners. Reserve it for genuinely removed content." }
  ],
  tryItYourself: {
    html: `<p>The concert is on Friday.</p>`,
    instructions: "The concert moved to Saturday. Cross out 'Friday' with <del> and add 'Saturday' after it."
  },
  takeaways: [
    "<del> strikes through text to show removal.",
    "Great for sale prices and document edits.",
    "Don't use it for jokes — assistive tech announces it as deleted."
  ],
  quizQuestions: [
    { id: "html-del-1", question: "What visual effect does <del> create?", options: ["Underlined text", "A line through the text", "Highlighted text", "Bold text"], correctAnswerIndex: 1, explanation: "<del> draws a strikethrough line through the text." },
    { id: "html-del-2", question: "Why use <del> instead of just deleting the words?", options: ["It loads faster", "It keeps a visible record of the change", "It looks prettier", "Search engines require it"], correctAnswerIndex: 1, explanation: "<del> preserves edit history — readers see what changed, like old vs. new prices." }
  ]
};

export const htmlInsertedTextContent: LessonContent = {
  heroTagline: "Underline what was added.",
  introduction: "The <ins> tag underlines text to show it was inserted or added. It is the partner of <del> — together they show exactly what changed in a document.",
  definition: {
    term: "Inserted Text (<ins>)",
    explanation: "An inline tag that underlines text to indicate added or updated content."
  },
  whyItMatters: "Contracts, articles, and changelogs need to show edits clearly. <ins> makes additions impossible to miss.",
  realWorldAnalogy: {
    title: "Red Pen Additions",
    story: "A teacher writes a missing word above the line in red ink so the student sees the fix.",
    comparison: [
      { item: "Red-ink addition", meaning: "The <ins> tag — new content clearly marked" },
      { item: "Original sentence", meaning: "The unchanged text around it" }
    ]
  },
  syntaxStructure: `<ins>added text</ins>`,
  codeExample: `<p>The meeting is on <del>Monday</del> <ins>Tuesday</ins> at 3 PM.</p>`,
  codeAnnotations: [
    { lineOrToken: "<ins>", description: "Underlines the text to mark it as newly added or updated." }
  ],
  commonMistakes: [
    { wrong: `<ins>Click here for deals</ins>`, correct: `<a href="deals.html">Click here for deals</a>`, reason: "<ins> announces 'inserted' to assistive technology — using it for links or decoration creates a false change history." }
  ],
  tryItYourself: {
    html: `<p>We now ship worldwide.</p>`,
    instructions: "The sentence is new. Wrap the word 'worldwide' in <ins> tags."
  },
  takeaways: [
    "<ins> underlines text to show it was added.",
    "Pairs with <del> to show before-and-after edits.",
    "Don't use it for decoration — it means 'inserted content'."
  ],
  quizQuestions: [
    { id: "html-ins-1", question: "What does the <ins> tag indicate?", options: ["Deleted content", "Inserted or added content", "A spelling error", "A hyperlink"], correctAnswerIndex: 1, explanation: "<ins> marks text that was inserted or added to the document." },
    { id: "html-ins-2", question: "Which tag pairs naturally with <ins> to show edits?", options: ["<b>", "<del>", "<mark>", "<u>"], correctAnswerIndex: 1, explanation: "<del> shows what was removed and <ins> shows what replaced it — the classic edit pair." }
  ]
};

export const htmlSuperscriptContent: LessonContent = {
  heroTagline: "Lift text up — for powers and footnotes.",
  introduction: "The <sup> tag raises text above the normal line and shrinks it. You see it in math powers like x², ordinal numbers like 1st, and footnote markers.",
  definition: {
    term: "Superscript (<sup>)",
    explanation: "An inline tag that positions text slightly above the baseline in a smaller size."
  },
  whyItMatters: "Math and science rely on raised characters. Writing E=mc2 without superscript looks wrong and can confuse readers.",
  realWorldAnalogy: {
    title: "A Balloon Tied to a Word",
    story: "A small balloon floats above a word, tethered to it by a string.",
    comparison: [
      { item: "Floating balloon", meaning: "The <sup> text — raised above the line" },
      { item: "The ground", meaning: "The text baseline everything sits on" }
    ]
  },
  syntaxStructure: `<sup>raised</sup>`,
  codeExample: `<p>E = mc<sup>2</sup></p>
<p>This is the 1<sup>st</sup> lesson of the course.</p>`,
  codeAnnotations: [
    { lineOrToken: "<sup>", description: "Lifts the enclosed characters above the baseline and shrinks them." }
  ],
  commonMistakes: [
    { wrong: `<p>x^2</p>`, correct: `<p>x<sup>2</sup></p>`, reason: "The caret is a plain character. <sup> renders a true raised exponent that scales with the text size." }
  ],
  tryItYourself: {
    html: `<p>The area is 25m2.</p>`,
    instructions: "Fix the '2' in 'm2' by wrapping it in <sup> tags to make it a proper square-meter symbol."
  },
  takeaways: [
    "<sup> raises text above the baseline in a smaller size.",
    "Use it for exponents, ordinal numbers, and footnote markers.",
    "Don't fake it with ^ characters — use the real tag."
  ],
  quizQuestions: [
    { id: "html-sup-1", question: "How do you correctly write E=mc² in HTML?", options: ["E=mc^2", "E=mc<sup>2</sup>", "E=mc<up>2</up>", "E=mc**2"], correctAnswerIndex: 1, explanation: "The <sup> tag raises the 2 into a proper superscript exponent." },
    { id: "html-sup-2", question: "Where does <sup> position text?", options: ["Below the baseline", "Above the baseline, smaller", "In the page header", "Centered on the page"], correctAnswerIndex: 1, explanation: "Superscript text sits slightly above the baseline at a reduced size." }
  ]
};

export const htmlSubscriptContent: LessonContent = {
  heroTagline: "Drop text below the line — for formulas.",
  introduction: "The <sub> tag lowers text below the normal line and shrinks it. Chemistry lives on subscripts — H₂O written without them is just plain H2O.",
  definition: {
    term: "Subscript (<sub>)",
    explanation: "An inline tag that positions text slightly below the baseline in a smaller size."
  },
  whyItMatters: "Chemical formulas and math notation depend on lowered numbers. <sub> writes them the correct way.",
  realWorldAnalogy: {
    title: "A Submarine Under a Ship",
    story: "A submarine rides just below the ship it follows, at a lower level.",
    comparison: [
      { item: "Submarine", meaning: "The <sub> text — sitting below the line" },
      { item: "Waterline", meaning: "The text baseline everything aligns to" }
    ]
  },
  syntaxStructure: `<sub>lowered</sub>`,
  codeExample: `<p>Water: H<sub>2</sub>O</p>
<p>Carbon dioxide: CO<sub>2</sub></p>`,
  codeAnnotations: [
    { lineOrToken: "<sub>", description: "Lowers the enclosed characters below the baseline and shrinks them." }
  ],
  commonMistakes: [
    { wrong: `<p style="position:relative; top:5px">2</p>`, correct: `<p>H<sub>2</sub>O</p>`, reason: "Don't push text down with CSS positioning for notation — <sub> is the semantic tag for subscripts and works with screen readers." }
  ],
  tryItYourself: {
    html: `<p>Glucose is C6H12O6.</p>`,
    instructions: "Wrap each number in the formula with <sub> tags to write it correctly."
  },
  takeaways: [
    "<sub> lowers text below the baseline in a smaller size.",
    "Essential for chemical formulas like H₂O and CO₂.",
    "Use it for notation — not for pushing text around the layout."
  ],
  quizQuestions: [
    { id: "html-sub-1", question: "How do you correctly write H₂O in HTML?", options: ["H<sub>2</sub>O", "H<sup>2</sup>O", "H*2*O", "H_2_O"], correctAnswerIndex: 0, explanation: "The <sub> tag lowers the 2 into a proper subscript." },
    { id: "html-sub-2", question: "Where does <sub> position text?", options: ["Above the baseline", "Below the baseline, smaller", "In bold", "In italics"], correctAnswerIndex: 1, explanation: "Subscript text sits slightly below the baseline at a reduced size." }
  ]
};

export const htmlQuotationsContent: LessonContent = {
  heroTagline: "Quote others — short quotes and long ones.",
  introduction: "HTML has three quotation tools. <q> adds quotes around a short inline quote. <blockquote> creates a large indented block for longer quotes. <cite> names the source.",
  definition: {
    term: "Quotation Elements (<q>, <blockquote>, <cite>)",
    explanation: "Tags for marking quoted text: <q> for short inline quotes, <blockquote> for long quoted passages, and <cite> for the source title."
  },
  whyItMatters: "Quoting correctly tells readers 'these are someone else's words' — and proper tags help search engines credit the source.",
  realWorldAnalogy: {
    title: "Quotation Marks in a Book",
    story: "A novel uses quote marks for dialogue and indented blocks for quoted letters.",
    comparison: [
      { item: "Dialogue in quotes", meaning: "The <q> tag — short quotes inside a sentence" },
      { item: "Indented letter", meaning: "The <blockquote> tag — a long quote set apart" }
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
    { wrong: `<blockquote>This paragraph just needed indenting.</blockquote>`, correct: `<p style="margin-left: 20px;">This paragraph just needed indenting.</p>`, reason: "Screen readers announce blockquotes as quotations — using one for indentation misleads listeners. Use CSS margins instead." }
  ],
  tryItYourself: {
    html: `<p>My teacher always says practice makes perfect.</p>`,
    instructions: "Wrap the saying 'practice makes perfect' in <q> tags."
  },
  takeaways: [
    "<q> is for short quotes inside a sentence.",
    "<blockquote> is for long quotes set apart as a block.",
    "<cite> names the source of the quote."
  ],
  quizQuestions: [
    { id: "html-quote-1", question: "Which tag is for a short quote inside a sentence?", options: ["<blockquote>", "<q>", "<cite>", "<quote>"], correctAnswerIndex: 1, explanation: "<q> marks short inline quotations; the browser adds the quote marks." },
    { id: "html-quote-2", question: "What does the <cite> tag do?", options: ["Creates a citation link", "Names the source of a quote", "Makes text italic", "Indents a paragraph"], correctAnswerIndex: 1, explanation: "<cite> identifies the work or author being quoted." }
  ]
};
export const htmlCodeContent: LessonContent = {
  heroTagline: "Show code as code — in a programmer's font.",
  introduction: "The <code> tag marks a short piece of computer code inside a sentence. It switches to a monospace font so code looks like code, not like regular words.",
  definition: {
    term: "Code (<code>)",
    explanation: "An inline tag that marks short code fragments, rendered in a monospace font."
  },
  whyItMatters: "Tutorials constantly mention tags and commands mid-sentence. <code> makes them instantly recognizable as code.",
  realWorldAnalogy: {
    title: "Block Letters on a Form",
    story: "Forms ask you to write names in block capitals so they stand out from handwriting.",
    comparison: [
      { item: "Block-letter box", meaning: "The <code> tag — visually distinct as code" },
      { item: "Normal handwriting", meaning: "Regular text around it" }
    ]
  },
  syntaxStructure: `<code>let x = 5;</code>`,
  codeExample: `<p>Press <code>Ctrl</code> + <code>S</code> to save your file.</p>
<p>The <code>alt</code> attribute describes an image.</p>`,
  codeAnnotations: [
    { lineOrToken: "<code>", description: "Switches to a monospace font, signaling to readers: 'this is code'." }
  ],
  commonMistakes: [
    { wrong: `<code>function greet() {\n  console.log("Hi");\n  console.log("Bye");\n}</code>`, correct: `<pre><code>function greet() {\n  console.log("Hi");\n}</code></pre>`, reason: "<code> alone doesn't preserve line breaks — long code collapses into one line. Pair it with <pre> for multi-line blocks." }
  ],
  tryItYourself: {
    html: `<p>Use the br tag to break a line.</p>`,
    instructions: "Wrap the words 'br tag' in <code> tags."
  },
  takeaways: [
    "<code> marks short inline code in a monospace font.",
    "Use it for tag names, commands, and values inside sentences.",
    "For multi-line code blocks, combine <pre> with <code>."
  ],
  quizQuestions: [
    { id: "html-code-1", question: "What is the <code> tag for?", options: ["Multi-line code blocks alone", "Short inline code fragments", "Running JavaScript", "Styling headings"], correctAnswerIndex: 1, explanation: "<code> marks short code snippets inside sentences, in a monospace font." },
    { id: "html-code-2", question: "How do you show a multi-line code block correctly?", options: ["<code> alone", "<pre> wrapped around <code>", "<p> with line breaks", "Multiple <br> tags"], correctAnswerIndex: 1, explanation: "<pre> preserves the line breaks while <code> styles it as code." }
  ]
};

export const htmlPreformattedTextContent: LessonContent = {
  heroTagline: "Keep your spaces and line breaks exactly as typed.",
  introduction: "The <pre> tag preserves every space and line break exactly as you type them. Normal HTML collapses extra spaces — <pre> does not. It is perfect for poetry, ASCII art, and code blocks.",
  definition: {
    term: "Preformatted Text (<pre>)",
    explanation: "A block tag that preserves whitespace and line breaks exactly, rendered in a monospace font."
  },
  whyItMatters: "Poems and code lose their shape when whitespace collapses. <pre> keeps your careful formatting intact.",
  realWorldAnalogy: {
    title: "A Photocopy of Handwriting",
    story: "A photocopy keeps every gap and indent of the original page, unlike a retyped summary.",
    comparison: [
      { item: "Photocopy", meaning: "The <pre> block — every space preserved" },
      { item: "Retyped summary", meaning: "Normal HTML — extra spaces collapsed away" }
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
    { wrong: `<p>Line one<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Indented</p>`, correct: `<pre>Line one\n    Indented</pre>`, reason: "Faking formatting with <br> and &nbsp; breaks on different screen sizes. <pre> keeps the structure reliably." }
  ],
  tryItYourself: {
    html: `<p>Roses are red,\nViolets are blue.</p>`,
    instructions: "Change the <p> tags to <pre> tags so the poem keeps its line breaks."
  },
  takeaways: [
    "<pre> preserves spaces and line breaks exactly.",
    "It renders in a monospace font.",
    "Ideal for code blocks, poetry, and ASCII art."
  ],
  quizQuestions: [
    { id: "html-pre-1", question: "What makes <pre> different from <p>?", options: ["It makes text bold", "It preserves whitespace and line breaks", "It centers text", "It adds a border"], correctAnswerIndex: 1, explanation: "<pre> keeps every space and newline exactly as typed; <p> collapses them." },
    { id: "html-pre-2", question: "Which content suits <pre> best?", options: ["A news article", "A poem with careful line breaks", "A navigation menu", "A photo gallery"], correctAnswerIndex: 1, explanation: "Poetry depends on exact line breaks and spacing — exactly what <pre> preserves." }
  ]
};

export const htmlAbsoluteUrlsContent: LessonContent = {
  heroTagline: "Link anywhere on the internet with a full address.",
  introduction: "An absolute URL is the complete web address of a page, starting with https:// and including the domain name. It works from anywhere — any page, any site — because it contains the full location.",
  definition: {
    term: "Absolute URL",
    explanation: "A complete web address like https://example.com/about that points to one exact page on the internet."
  },
  whyItMatters: "When you link to another website, only a full address can get your visitor there. Absolute URLs are the postal addresses of the web.",
  realWorldAnalogy: {
    title: "A Full Postal Address",
    story: "A letter needs country, city, street, and house number to arrive at the right door.",
    comparison: [
      { item: "Full postal address", meaning: "An absolute URL — complete and works from anywhere" },
      { item: "Just a room number", meaning: "A relative URL — only works inside its own building" }
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
    { wrong: `<a href="www.example.com">Visit</a>`, correct: `<a href="https://www.example.com">Visit</a>`, reason: "Without https://, the browser treats it as a relative path on your own site and the link breaks." }
  ],
  tryItYourself: {
    html: `<p>My favorite search engine:</p>`,
    instructions: "Add a link to https://www.google.com with the text 'Search Google' below the paragraph."
  },
  takeaways: [
    "Absolute URLs start with https:// and include the domain.",
    "They work from any page on any site.",
    "Always use them when linking to other websites."
  ],
  quizQuestions: [
    { id: "html-absurl-1", question: "Which is a correct absolute URL in a link?", options: ["href=\"www.example.com\"", "href=\"https://www.example.com\"", "href=\"example.com/page\"", "href=\"//example\""], correctAnswerIndex: 1, explanation: "Absolute URLs need the full protocol plus domain: https://www.example.com." },
    { id: "html-absurl-2", question: "When must you use an absolute URL?", options: ["Linking within your own site", "Linking to another website", "Linking to a page section", "Never — they are outdated"], correctAnswerIndex: 1, explanation: "Only a complete address can reach a page on a different website." }
  ]
};

export const htmlRelativeUrlsContent: LessonContent = {
  heroTagline: "Link inside your own site with short paths.",
  introduction: "A relative URL is a short path measured from the current page — like about.html or images/logo.png. It contains no domain name and only works within your own website.",
  definition: {
    term: "Relative URL",
    explanation: "A partial address like contact.html that the browser completes using the current page's location."
  },
  whyItMatters: "Relative links keep working when your whole site moves to a new domain. You write them once and never update them during a move.",
  realWorldAnalogy: {
    title: "Directions Inside a Building",
    story: "Inside a mall you say 'second floor, shop 5' — no city or street needed.",
    comparison: [
      { item: "\"Second floor, shop 5\"", meaning: "A relative URL — directions from where you stand" },
      { item: "Full street address", meaning: "An absolute URL — complete from anywhere" }
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
    { wrong: `<a href="google.com">Google</a>`, correct: `<a href="https://www.google.com">Google</a>`, reason: "Relative paths only resolve inside your own site — 'google.com' would look for a page on YOUR domain. External sites need absolute URLs." }
  ],
  tryItYourself: {
    html: `<a href="index.html">Home</a>`,
    instructions: "Add a second link to 'gallery.html' in the same folder, with the text 'Gallery'."
  },
  takeaways: [
    "Relative URLs are short paths from the current page.",
    "They contain no domain name.",
    "They keep working if your site moves to a new domain."
  ],
  quizQuestions: [
    { id: "html-relurl-1", question: "What does href=\"../index.html\" mean?", options: ["A page on another website", "The index page one folder up", "The current page", "An email link"], correctAnswerIndex: 1, explanation: "../ moves up one folder level, then loads index.html from there." },
    { id: "html-relurl-2", question: "Why prefer relative URLs for internal links?", options: ["They load faster", "They survive a domain move without edits", "They improve SEO", "They work offline always"], correctAnswerIndex: 1, explanation: "Relative links don't contain the domain, so they keep working after a site moves." }
  ]
};

export const htmlLinkTextContent: LessonContent = {
  heroTagline: "Write link text that tells people where they go.",
  introduction: "Link text is the clickable words inside an <a> tag. Good link text describes the destination — 'Download the 2026 price list' — instead of vague words like 'click here'.",
  definition: {
    term: "Link Text (Anchor Text)",
    explanation: "The visible, clickable words of a link that describe where the link leads."
  },
  whyItMatters: "Screen reader users often jump from link to link hearing only the text. 'Click here' tells them nothing; descriptive text tells them everything.",
  realWorldAnalogy: {
    title: "A Labeled Door",
    story: "Doors in a hospital are labeled 'Pharmacy' and 'Emergency' — never 'click here'.",
    comparison: [
      { item: "Door label", meaning: "Descriptive link text — you know what's inside" },
      { item: "Unlabeled door", meaning: "A 'click here' link — a mystery destination" }
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
    { wrong: `<a href="menu.pdf">click here</a> to see our menu`, correct: `<a href="menu.pdf">See our menu (PDF)</a>`, reason: "Vague link text fails accessibility checks and hurts SEO — search engines read link text too." }
  ],
  tryItYourself: {
    html: `<a href="tickets.html">Click here</a>`,
    instructions: "Rewrite the link text to describe the destination: 'Buy concert tickets'."
  },
  takeaways: [
    "Link text should describe the destination.",
    "Never use 'click here' or 'read more' alone.",
    "Good link text helps screen readers and search engines."
  ],
  quizQuestions: [
    { id: "html-linktext-1", question: "Which link text is best?", options: ["Click here", "Read more", "Download the 2026 price list (PDF)", "Link"], correctAnswerIndex: 2, explanation: "It describes exactly what the user gets — a 2026 price list in PDF format." },
    { id: "html-linktext-2", question: "Why does link text matter for screen reader users?", options: ["It changes the link color", "They often navigate link-to-link hearing only the text", "It makes links load faster", "It doesn't matter"], correctAnswerIndex: 1, explanation: "Screen reader users jump between links; descriptive text tells them where each one goes." }
  ]
};
export const htmlOpenLinksNewTabContent: LessonContent = {
  heroTagline: "Keep your page open while visitors explore.",
  introduction: "Adding target=\"_blank\" to a link opens it in a new browser tab. Your page stays open underneath. Always pair it with rel=\"noopener\" for security.",
  definition: {
    term: "target=\"_blank\"",
    explanation: "A link attribute value that opens the destination in a new tab instead of replacing the current page."
  },
  whyItMatters: "When you link to an external site, you don't want visitors to lose your page. A new tab keeps both open.",
  realWorldAnalogy: {
    title: "Opening a Second Window",
    story: "You open a second shop window to peek inside while keeping your place in line.",
    comparison: [
      { item: "Second window", meaning: "The new tab — the external site opens here" },
      { item: "Your place in line", meaning: "Your page — still open underneath" }
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
    { wrong: `<a href="https://example.com" target="_blank">Visit</a>`, correct: `<a href="https://example.com" target="_blank" rel="noopener">Visit</a>`, reason: "Without rel=\"noopener\", the new page can access your page's window object — a known security hole called tabnabbing." }
  ],
  tryItYourself: {
    html: `<a href="https://www.wikipedia.org">Wikipedia</a>`,
    instructions: "Add target=\"_blank\" and rel=\"noopener\" so the link opens in a new secure tab."
  },
  takeaways: [
    "target=\"_blank\" opens links in a new tab.",
    "Always pair it with rel=\"noopener\" for security.",
    "Use it for external links so visitors don't lose your page."
  ],
  quizQuestions: [
    { id: "html-newtab-1", question: "What does target=\"_blank\" do?", options: ["Opens the link in a new tab", "Makes the link bold", "Downloads the file", "Opens the link in the same tab"], correctAnswerIndex: 0, explanation: "target=\"_blank\" opens the destination in a new browser tab." },
    { id: "html-newtab-2", question: "Why add rel=\"noopener\" with target=\"_blank\"?", options: ["It speeds up loading", "It blocks the new page from controlling your page", "It is required for styling", "It hides the link"], correctAnswerIndex: 1, explanation: "Without it, the opened page could manipulate your page via the window object (tabnabbing)." }
  ]
};

export const htmlLinkToAnotherPageContent: LessonContent = {
  heroTagline: "Connect the pages of your own website.",
  introduction: "Websites are webs of pages joined by links. To link from one of your pages to another, use a relative URL pointing at the other HTML file. This is how menus and navigation work.",
  definition: {
    term: "Internal Page Link",
    explanation: "A link from one page of your site to another page of the same site, usually written as a relative URL."
  },
  whyItMatters: "No visitor will type your URLs by hand. Internal links are the roads of your site — without them, pages are unreachable islands.",
  realWorldAnalogy: {
    title: "Hallways Between Rooms",
    story: "Doors connect the rooms of a house so you can walk between them.",
    comparison: [
      { item: "Hallway", meaning: "An internal link — the path between pages" },
      { item: "Separate locked rooms", meaning: "Pages with no links — unreachable" }
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
    { wrong: `<a href="C:/mysite/about.html">About</a>`, correct: `<a href="about.html">About</a>`, reason: "File paths from your computer break the moment the site goes online — relative URLs work everywhere." }
  ],
  tryItYourself: {
    html: `<nav>\n  <a href="index.html">Home</a>\n</nav>`,
    instructions: "Add links to 'about.html' (About) and 'contact.html' (Contact) inside the nav."
  },
  takeaways: [
    "Internal links connect pages of the same site.",
    "Use relative URLs like about.html.",
    "Navigation menus are built from internal page links."
  ],
  quizQuestions: [
    { id: "html-intlink-1", question: "How should you link to another page on your own site?", options: ["With a full https:// URL always", "With a relative URL like about.html", "With a mailto: link", "You cannot link between pages"], correctAnswerIndex: 1, explanation: "Relative URLs like about.html connect pages within the same site." },
    { id: "html-intlink-2", question: "Why not use C:/mysite/about.html as a link?", options: ["It is too short", "That path only exists on your computer", "Browsers block relative links", "It loads too slowly"], correctAnswerIndex: 1, explanation: "Local file paths break online — only paths relative to the site work on the web server." }
  ]
};

export const htmlLinkToSectionContent: LessonContent = {
  heroTagline: "Jump straight to any part of a page.",
  introduction: "You can link to a specific section of a page by giving that section an id and pointing a link at #id. Clicking the link scrolls the page straight to that spot.",
  definition: {
    term: "Fragment Link (Anchor Link)",
    explanation: "A link whose href starts with #, jumping to the element with the matching id on the page."
  },
  whyItMatters: "Long pages need shortcuts. A table of contents with section links lets readers skip straight to what they need.",
  realWorldAnalogy: {
    title: "Bookmarks in a Textbook",
    story: "Sticky tabs on pages let you flip straight to a chapter without searching.",
    comparison: [
      { item: "Sticky tab", meaning: "The #id in the link — marks the target spot" },
      { item: "Flipping to the tab", meaning: "Clicking the link — the page jumps there" }
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
    { wrong: `<a href="#Menu">See the menu</a>\n<h2 id="menu">Our Menu</h2>`, correct: `<a href="#menu">See the menu</a>\n<h2 id="menu">Our Menu</h2>`, reason: "IDs are case-sensitive — #Menu and #menu are different targets, so the jump fails." }
  ],
  tryItYourself: {
    html: `<a href="#contact">Contact us</a>\n<h2>Our Menu</h2>\n<h2>Contact</h2>`,
    instructions: "Add id=\"contact\" to the Contact heading so the link jumps to it."
  },
  takeaways: [
    "href=\"#id\" jumps to the element with that id.",
    "IDs are case-sensitive — match them exactly.",
    "Great for tables of contents and 'back to top' links."
  ],
  quizQuestions: [
    { id: "html-anchor-1", question: "What does href=\"#reviews\" do?", options: ["Opens a new website", "Jumps to the element with id=\"reviews\"", "Downloads a file", "Sends an email"], correctAnswerIndex: 1, explanation: "The # prefix makes it a fragment link targeting the matching id on the page." },
    { id: "html-anchor-2", question: "Will href=\"#Menu\" find id=\"menu\"?", options: ["Yes, case doesn't matter", "No — IDs are case-sensitive", "Only in Chrome", "Only with JavaScript"], correctAnswerIndex: 1, explanation: "IDs are case-sensitive, so #Menu and #menu are different targets." }
  ]
};

export const htmlEmailLinksContent: LessonContent = {
  heroTagline: "Let visitors email you in one click.",
  introduction: "A link with href=\"mailto:address\" opens the visitor's email app with a new message addressed to you. It turns a plain email address into an action.",
  definition: {
    term: "mailto: Link",
    explanation: "A link using the mailto: scheme that opens the user's email program addressed to the given email."
  },
  whyItMatters: "Nobody wants to copy-paste an email address. One click that opens a ready-to-send message removes all friction.",
  realWorldAnalogy: {
    title: "A Pre-addressed Envelope",
    story: "Someone hands you an envelope already addressed and stamped — you just write and send.",
    comparison: [
      { item: "Pre-addressed envelope", meaning: "A mailto: link — recipient filled in for you" },
      { item: "Blank envelope", meaning: "Plain email text — you address it yourself" }
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
    { wrong: `<a href="hello@bakery.com">Email us</a>`, correct: `<a href="mailto:hello@bakery.com">Email us</a>`, reason: "Without mailto:, the browser treats it as a relative page path and shows a 404 error." }
  ],
  tryItYourself: {
    html: `<p>Contact: hello@example.com</p>`,
    instructions: "Turn the email address into a mailto: link with the text 'Send us an email'."
  },
  takeaways: [
    "mailto: links open the user's email app addressed to you.",
    "You can prefill the subject with ?subject=.",
    "Always include mailto: — without it the link breaks."
  ],
  quizQuestions: [
    { id: "html-mailto-1", question: "What does href=\"mailto:hi@site.com\" do?", options: ["Opens a webpage", "Opens the email app addressed to hi@site.com", "Downloads a file", "Shows a phone dialer"], correctAnswerIndex: 1, explanation: "The mailto: scheme opens the user's email program with a new message to that address." },
    { id: "html-mailto-2", question: "What happens if you forget mailto: and write href=\"hi@site.com\"?", options: ["It still works", "The browser looks for a page called hi@site.com and shows an error", "It sends an email automatically", "Nothing happens"], correctAnswerIndex: 1, explanation: "Without the scheme, the browser treats it as a relative page path — resulting in a 404." }
  ]
};

export const htmlTelephoneLinksContent: LessonContent = {
  heroTagline: "Turn a phone number into a tap-to-call button.",
  introduction: "A link with href=\"tel:+1234567890\" starts a phone call when tapped on a mobile device. On desktops it opens the default calling app.",
  definition: {
    term: "tel: Link",
    explanation: "A link using the tel: scheme that dials the given phone number when activated."
  },
  whyItMatters: "On a phone, tapping a number to call is effortless; copying it into the dialer is not. tel: links win you the call.",
  realWorldAnalogy: {
    title: "A Speed-Dial Button",
    story: "One button on old phones dialed your home number instantly — no typing needed.",
    comparison: [
      { item: "Speed-dial button", meaning: "A tel: link — one tap starts the call" },
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
    { wrong: `<a href="tel:1-800-555-0199">Call</a>`, correct: `<a href="tel:+18005550199">Call</a>`, reason: "Dashes and spaces can break dialing on some devices — use digits with a leading + and country code." }
  ],
  tryItYourself: {
    html: `<p>Call us: 555-1234</p>`,
    instructions: "Turn the phone number into a tel: link (use +15551234567 as the number)."
  },
  takeaways: [
    "tel: links start a call when tapped.",
    "Use digits with a + and country code, no dashes.",
    "The visible text can stay human-friendly (1-800-555-0199)."
  ],
  quizQuestions: [
    { id: "html-tel-1", question: "What does href=\"tel:+15551234567\" do on a phone?", options: ["Opens a webpage", "Starts a phone call to that number", "Sends a text message", "Opens the email app"], correctAnswerIndex: 1, explanation: "The tel: scheme triggers the device's calling feature with that number." },
    { id: "html-tel-2", question: "How should the number in a tel: link be formatted?", options: ["With dashes and spaces", "Digits only, with + and country code", "With parentheses", "Any format works everywhere"], correctAnswerIndex: 1, explanation: "Dashes and spaces can break dialing on some devices; clean digits are safest." }
  ]
};
export const htmlDownloadLinksContent: LessonContent = {
  heroTagline: "Make files download instead of opening.",
  introduction: "Adding the download attribute to a link tells the browser to download the file instead of opening it. Perfect for PDFs, brochures, and price lists.",
  definition: {
    term: "download Attribute",
    explanation: "A link attribute that forces the linked file to download rather than display in the browser."
  },
  whyItMatters: "Users expect a brochure link to give them a file, not replace the page with a PDF viewer. download delivers what they expect.",
  realWorldAnalogy: {
    title: "Takeout Instead of Dine-In",
    story: "You ask for the meal packed to take home instead of served at the table.",
    comparison: [
      { item: "Takeout box", meaning: "The download attribute — the file comes with you" },
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
    { wrong: `<a href="https://othersite.com/report.pdf" download>Download</a>`, correct: `<a href="/files/report.pdf" download>Download</a>`, reason: "Browsers ignore download for cross-origin URLs for security — it only works reliably for files on your own site." }
  ],
  tryItYourself: {
    html: `<a href="brochure.pdf">Our brochure</a>`,
    instructions: "Add the download attribute so the brochure downloads instead of opening."
  },
  takeaways: [
    "The download attribute forces files to download.",
    "You can suggest a filename: download=\"name.pdf\".",
    "It only works reliably for files on your own site."
  ],
  quizQuestions: [
    { id: "html-download-1", question: "What does the download attribute do?", options: ["Opens the file in a new tab", "Forces the file to download", "Deletes the file", "Compresses the file"], correctAnswerIndex: 1, explanation: "download tells the browser to save the file instead of displaying it." },
    { id: "html-download-2", question: "What does download=\"photo.jpg\" specify?", options: ["The file to download", "The suggested save filename", "The image size", "The download speed"], correctAnswerIndex: 1, explanation: "A value on download suggests the filename the browser will save the file as." }
  ]
};

export const htmlLinkAttributesContent: LessonContent = {
  heroTagline: "The small settings that control every link.",
  introduction: "Links accept several attributes that change their behavior: href sets the destination, target chooses the tab, rel adds security, title shows a tooltip, and download forces a file save.",
  definition: {
    term: "Anchor Attributes",
    explanation: "The settings on an <a> tag — href, target, rel, title, download — that control where a link goes and how it behaves."
  },
  whyItMatters: "href alone makes a basic link. The other attributes turn it into a safe, accessible, user-friendly one.",
  realWorldAnalogy: {
    title: "Control Panel of a Door",
    story: "A door has a lock, a peephole, and a sign — each part controls the door differently.",
    comparison: [
      { item: "Door lock", meaning: "The target attribute — controls how the link opens" },
      { item: "Peephole", meaning: "The title attribute — a preview before you enter" }
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
    { wrong: `<a title="https://example.com">Visit</a>`, correct: `<a href="https://example.com">Visit</a>`, reason: "Without href, the text is not a link at all — title alone creates nothing clickable." }
  ],
  tryItYourself: {
    html: `<a href="guide.pdf">User guide</a>`,
    instructions: "Add a title attribute: 'User guide, PDF, 5 MB'."
  },
  takeaways: [
    "href is the only required link attribute.",
    "target, rel, title, and download refine link behavior.",
    "Combine them for safe, informative links."
  ],
  quizQuestions: [
    { id: "html-linkattr-1", question: "Which attribute is required to make text a link?", options: ["title", "href", "rel", "target"], correctAnswerIndex: 1, explanation: "href holds the destination — without it, the <a> tag creates no link." },
    { id: "html-linkattr-2", question: "What does the title attribute on a link do?", options: ["Sets the page title", "Shows a tooltip on hover", "Makes the link bold", "Opens a new tab"], correctAnswerIndex: 1, explanation: "title displays a small tooltip when the mouse hovers over the link." }
  ]
};

export const htmlImageSourceContent: LessonContent = {
  heroTagline: "Point the browser at your picture file.",
  introduction: "The src attribute tells the <img> tag where the image file lives. It can be a relative path to a file in your project or an absolute URL to an image on the web.",
  definition: {
    term: "src (Source) Attribute",
    explanation: "The attribute on <img> that holds the path or URL of the image file to display."
  },
  whyItMatters: "A wrong src means a broken image icon. Getting the path right is the difference between a beautiful page and an embarrassing one.",
  realWorldAnalogy: {
    title: "A Home Address for a Photo",
    story: "You tell a friend your photo's exact shelf and album so they can find it.",
    comparison: [
      { item: "Shelf and album", meaning: "The file path in src — where the image lives" },
      { item: "The photo itself", meaning: "The image file the browser fetches" }
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
    { wrong: `<img src="C:\\Users\\me\\cake.jpg">`, correct: `<img src="images/cake.jpg">`, reason: "Your computer's file path doesn't exist on the web server — use paths relative to your project." }
  ],
  tryItYourself: {
    html: `<img>`,
    instructions: "Add src=\"images/dog.jpg\" to display the dog photo from the images folder."
  },
  takeaways: [
    "src tells <img> where the image file lives.",
    "Use relative paths for your own images.",
    "Full URLs work for images hosted elsewhere."
  ],
  quizQuestions: [
    { id: "html-imgsrc-1", question: "What does the src attribute do on <img>?", options: ["Sets the image size", "Specifies the image file location", "Adds a caption", "Makes the image a link"], correctAnswerIndex: 1, explanation: "src holds the path or URL of the image file the browser should display." },
    { id: "html-imgsrc-2", question: "Why is src=\"C:\\photos\\cat.jpg\" wrong?", options: ["Backslashes are ugly", "That path only exists on your computer", "Images must be PNG", "The filename is too short"], correctAnswerIndex: 1, explanation: "Local disk paths don't exist on the web server — use project-relative paths instead." }
  ]
};

export const htmlAlternativeTextContent: LessonContent = {
  heroTagline: "Describe every image for those who can't see it.",
  introduction: "The alt attribute provides a text description of an image. Screen readers read it aloud to blind users, and browsers show it if the image fails to load.",
  definition: {
    term: "alt (Alternative Text) Attribute",
    explanation: "Text describing an image's content and purpose, read by screen readers and shown when the image can't load."
  },
  whyItMatters: "Millions of people browse with screen readers. Without alt text, your images are invisible holes in your page for them.",
  realWorldAnalogy: {
    title: "Audio Description in Movies",
    story: "Described movies narrate the visuals for blind viewers during quiet scenes.",
    comparison: [
      { item: "Movie narration", meaning: "The alt text — describes what sighted users see" },
      { item: "Silent visuals", meaning: "An image without alt — nothing for blind users" }
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
    { wrong: `<img src="team.jpg" alt="image123_final_v2.jpg">`, correct: `<img src="team.jpg" alt="Our five-person team smiling in the office">`, reason: "A filename describes nothing — screen reader users hear gibberish instead of meaning." }
  ],
  tryItYourself: {
    html: `<img src="sunset.jpg">`,
    instructions: "Add an alt attribute describing a sunset over mountains."
  },
  takeaways: [
    "alt describes the image for screen readers and broken images.",
    "Describe the content and purpose, not the filename.",
    "Use empty alt=\"\" for purely decorative images."
  ],
  quizQuestions: [
    { id: "html-alt-1", question: "What is the main purpose of the alt attribute?", options: ["To style the image", "To describe the image for screen readers", "To set the image size", "To make images load faster"], correctAnswerIndex: 1, explanation: "alt provides a text alternative read aloud by screen readers and shown if the image fails." },
    { id: "html-alt-2", question: "When should alt be empty (alt=\"\")?", options: ["Never", "For purely decorative images", "For large images", "For logos"], correctAnswerIndex: 1, explanation: "Decorative images add no information, so empty alt tells screen readers to skip them." }
  ]
};

export const htmlImageWidthHeightContent: LessonContent = {
  heroTagline: "Size your images and stop the page from jumping.",
  introduction: "The width and height attributes set an image's display size in pixels. They also reserve space before the image loads, so the page doesn't jump around.",
  definition: {
    term: "width and height Attributes",
    explanation: "Attributes on <img> that set the image's display dimensions in pixels."
  },
  whyItMatters: "Without reserved space, text jumps down the moment each image loads — a maddening experience called layout shift.",
  realWorldAnalogy: {
    title: "Reserving a Parking Spot",
    story: "A reserved sign holds the parking space before the car arrives.",
    comparison: [
      { item: "Reserved sign", meaning: "The width and height attributes — space held in advance" },
      { item: "The arriving car", meaning: "The image file — fills its reserved space" }
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
    { wrong: `<img src="cake.jpg" alt="Cake" width="600px">`, correct: `<img src="cake.jpg" alt="Cake" width="600">`, reason: "The width attribute takes a plain number — 'px' is invalid there. Use CSS if you want units." }
  ],
  tryItYourself: {
    html: `<img src="photo.jpg" alt="A photo">`,
    instructions: "Add width=\"300\" and height=\"200\" to size the image."
  },
  takeaways: [
    "width and height set an image's display size in pixels.",
    "They reserve space so the page doesn't jump while loading.",
    "Use plain numbers — no 'px' in these attributes."
  ],
  quizQuestions: [
    { id: "html-imgwh-1", question: "Why set width and height on images?", options: ["To make images load faster", "To reserve space and prevent layout jumping", "To add borders", "It is required by law"], correctAnswerIndex: 1, explanation: "Reserved dimensions stop content from shifting down as each image loads." },
    { id: "html-imgwh-2", question: "What is wrong with width=\"600px\"?", options: ["Nothing", "The attribute takes a plain number, not 'px'", "600 is too large", "Width must be in percent"], correctAnswerIndex: 1, explanation: "HTML width/height attributes accept plain numbers only — units belong in CSS." }
  ]
};
export const htmlImageLinksContent: LessonContent = {
  heroTagline: "Make your pictures clickable.",
  introduction: "Wrapping an <img> inside an <a> tag turns the whole image into a link. Clicking the picture takes the visitor to the link's destination — perfect for logos and galleries.",
  definition: {
    term: "Image Link",
    explanation: "An <img> element nested inside an <a> tag, making the entire image clickable."
  },
  whyItMatters: "Users instinctively click logos expecting to go home, and click product photos expecting details. Image links match that instinct.",
  realWorldAnalogy: {
    title: "A Poster That Is Also a Door",
    story: "In a funhouse, some posters are actually doors you can walk through.",
    comparison: [
      { item: "Poster-door", meaning: "An image link — looks like a picture, acts like a link" },
      { item: "Ordinary poster", meaning: "A plain image — just for looking" }
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
    { wrong: `<img src="logo.png" alt="Logo" href="index.html">`, correct: `<a href="index.html"><img src="logo.png" alt="Home"></a>`, reason: "<img> has no href attribute — only the anchor tag creates links, so the image must sit inside <a>." }
  ],
  tryItYourself: {
    html: `<img src="logo.png" alt="Home">`,
    instructions: "Wrap the image in an <a> tag linking to index.html."
  },
  takeaways: [
    "Nest <img> inside <a> to make images clickable.",
    "The alt text should describe the link destination.",
    "<img> alone can never be a link — it has no href."
  ],
  quizQuestions: [
    { id: "html-imglink-1", question: "How do you make an image clickable?", options: ["Add href to the <img> tag", "Wrap the <img> inside an <a> tag", "Add onclick to alt", "Images are always clickable"], correctAnswerIndex: 1, explanation: "The anchor tag creates the link; the image nested inside becomes the clickable content." },
    { id: "html-imglink-2", question: "What should the alt text of a logo image-link say?", options: ["logo.png", "An image", "Where the link goes, e.g. 'Home'", "Nothing — leave it empty"], correctAnswerIndex: 2, explanation: "For image links, alt describes the destination so screen reader users know where it leads." }
  ]
};

export const htmlFigureContent: LessonContent = {
  heroTagline: "Group a picture with its own caption block.",
  introduction: "The <figure> tag wraps an image (or chart, or code sample) into one self-contained unit. It says: this media belongs together and could be moved without breaking the article.",
  definition: {
    term: "<figure> Element",
    explanation: "A container that groups self-contained media — usually an image plus its caption — as one unit."
  },
  whyItMatters: "Articles quote figures by number ('see Figure 3'). The <figure> tag gives that unit a proper home in your markup.",
  realWorldAnalogy: {
    title: "A Framed Photo",
    story: "A frame holds the photo and its little nameplate as one object you can hang anywhere.",
    comparison: [
      { item: "Picture frame", meaning: "The <figure> tag — holds media as one unit" },
      { item: "Photo plus nameplate", meaning: "The image plus its figcaption inside" }
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
    { wrong: `<figure><img src="icon1.png" alt=""></figure>\n<figure><img src="icon2.png" alt=""></figure>`, correct: `<img src="icon1.png" alt="">\n<img src="icon2.png" alt="">`, reason: "Don't wrap every decorative icon in <figure>. Reserve it for meaningful, referenced media — plain <img> is enough for the rest." }
  ],
  tryItYourself: {
    html: `<img src="bridge.jpg" alt="A bridge">`,
    instructions: "Wrap the image in <figure> tags."
  },
  takeaways: [
    "<figure> groups media into one self-contained unit.",
    "It usually pairs with <figcaption> for a caption.",
    "Use it for meaningful media, not decorative icons."
  ],
  quizQuestions: [
    { id: "html-figure-1", question: "What is the <figure> tag for?", options: ["Styling text", "Grouping self-contained media as one unit", "Creating tables", "Making links"], correctAnswerIndex: 1, explanation: "<figure> wraps media (image, chart) into a single self-contained unit." },
    { id: "html-figure-2", question: "What typically goes inside <figure> with an image?", options: ["A <figcaption> caption", "A <table>", "A <form>", "A <nav>"], correctAnswerIndex: 0, explanation: "<figcaption> provides the caption describing or crediting the figure's media." }
  ]
};

export const htmlFigcaptionContent: LessonContent = {
  heroTagline: "Give your figure a proper caption.",
  introduction: "The <figcaption> tag adds a caption inside a <figure>. It must be the first or last child of the figure, and it describes or credits the media above or below it.",
  definition: {
    term: "<figcaption> Element",
    explanation: "A caption for a <figure>, placed as its first or last child, describing or crediting the media."
  },
  whyItMatters: "Captions answer 'what am I looking at?' Photo credits, chart explanations, and witty remarks all live in figcaptions.",
  realWorldAnalogy: {
    title: "The Nameplate Under a Painting",
    story: "Museums put a small plate under each painting with its title and artist.",
    comparison: [
      { item: "Museum nameplate", meaning: "The <figcaption> — titles and credits the work" },
      { item: "The painting", meaning: "The figure's image above it" }
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
    { wrong: `<figure>\n  <img src="b.jpg" alt="Bridge">\n</figure>\n<figcaption>A bridge.</figcaption>`, correct: `<figure>\n  <img src="b.jpg" alt="Bridge">\n  <figcaption>A bridge.</figcaption>\n</figure>`, reason: "A figcaption outside a figure is invalid HTML and loses its connection to the image." }
  ],
  tryItYourself: {
    html: `<figure>\n  <img src="cat.jpg" alt="A cat">\n</figure>`,
    instructions: "Add a <figcaption> inside the figure: 'Milo the cat, napping.'"
  },
  takeaways: [
    "<figcaption> captions the media inside a <figure>.",
    "It must be the first or last child of <figure>.",
    "Use it for descriptions, credits, and context."
  ],
  quizQuestions: [
    { id: "html-figcaption-1", question: "Where must <figcaption> be placed?", options: ["Anywhere on the page", "As the first or last child of <figure>", "Inside the <head>", "After the </body>"], correctAnswerIndex: 1, explanation: "<figcaption> belongs inside <figure> as its first or last child." },
    { id: "html-figcaption-2", question: "Can <figcaption> be used without <figure>?", options: ["Yes, anywhere", "No — it must live inside a <figure>", "Only with <img>", "Only in footers"], correctAnswerIndex: 1, explanation: "A figcaption outside a figure is invalid and loses its link to the media." }
  ]
};

export const htmlResponsiveImagesContent: LessonContent = {
  heroTagline: "Serve the right image size to every screen.",
  introduction: "Phones don't need a 4K desktop banner. Responsive images let the browser pick the best file for the screen — small files for phones, large files for desktops — using the srcset attribute.",
  definition: {
    term: "Responsive Images",
    explanation: "Techniques (srcset, sizes, or CSS) that deliver appropriately-sized image files for each device."
  },
  whyItMatters: "A 3 MB banner on a phone wastes data and loads slowly. Responsive images can cut load times dramatically.",
  realWorldAnalogy: {
    title: "Clothing Sizes",
    story: "A shop stocks small, medium, and large — you take the size that fits you.",
    comparison: [
      { item: "Clothing sizes", meaning: "The srcset options — multiple image files" },
      { item: "Your measurements", meaning: "The device's screen size — decides the fit" }
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
    { wrong: `<!-- one 3 MB image for everyone -->\n<img src="banner-huge.jpg" alt="Banner">`, correct: `<img src="banner-800.jpg"\n     srcset="banner-400.jpg 400w, banner-800.jpg 800w"\n     alt="Banner">`, reason: "One-size-fits-all images punish mobile users with slow loads and wasted data." }
  ],
  tryItYourself: {
    html: `<img src="photo-800.jpg" alt="A photo">`,
    instructions: "Add a srcset offering photo-400.jpg (400w) and photo-800.jpg (800w)."
  },
  takeaways: [
    "srcset lets the browser choose the best-sized image.",
    "Small screens get small files — faster loads, less data.",
    "Always keep src as a fallback."
  ],
  quizQuestions: [
    { id: "html-respimg-1", question: "What does the srcset attribute do?", options: ["Sets the image style", "Offers multiple image files so the browser picks the best size", "Creates a slideshow", "Adds a caption"], correctAnswerIndex: 1, explanation: "srcset lists image files with widths; the browser selects the best fit for the screen." },
    { id: "html-respimg-2", question: "Why serve smaller images to phones?", options: ["Phones can't show images", "Faster loads and less mobile data used", "Small images look sharper", "It is a legal requirement"], correctAnswerIndex: 1, explanation: "Large desktop images waste mobile data and slow down page loads on phones." }
  ]
};

export const htmlAudioContent: LessonContent = {
  heroTagline: "Play sound right on your page.",
  introduction: "The <audio> tag embeds a sound player in your page. Add the controls attribute to show play, pause, and volume buttons. The browser handles the player — you just point at the file.",
  definition: {
    term: "<audio> Element",
    explanation: "An element that embeds audio playback with built-in browser controls."
  },
  whyItMatters: "Podcasts, music previews, and pronunciation guides all need audio. <audio> adds it without any plugins.",
  realWorldAnalogy: {
    title: "A Jukebox on the Page",
    story: "You drop a coin in a jukebox and press a button to hear a song.",
    comparison: [
      { item: "Jukebox buttons", meaning: "The controls attribute — play, pause, volume" },
      { item: "The record inside", meaning: "The audio file the tag points to" }
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
    { wrong: `<audio src="song.mp3"></audio>`, correct: `<audio controls src="song.mp3"></audio>`, reason: "Without controls, the audio is invisible and unplayable — users have no way to start it." }
  ],
  tryItYourself: {
    html: `<audio src="song.mp3"></audio>`,
    instructions: "Add the controls attribute so visitors can play the audio."
  },
  takeaways: [
    "<audio> embeds a sound player with no plugins.",
    "The controls attribute shows play/pause/volume buttons.",
    "Offer multiple <source> formats for wider support."
  ],
  quizQuestions: [
    { id: "html-audio-1", question: "What does the controls attribute do on <audio>?", options: ["Autoplays the sound", "Shows the player interface with play and volume", "Mutes the audio", "Downloads the file"], correctAnswerIndex: 1, explanation: "controls displays the browser's built-in play, pause, and volume buttons." },
    { id: "html-audio-2", question: "Why provide two <source> elements?", options: ["To play two songs at once", "So the browser can use the format it supports", "It doubles the volume", "It is required by law"], correctAnswerIndex: 1, explanation: "Browsers support different audio formats; multiple sources maximize compatibility." }
  ]
};

export const htmlVideoContent: LessonContent = {
  heroTagline: "Embed video without any plugins.",
  introduction: "The <video> tag embeds a video player directly in your page. Like audio, the controls attribute adds play and volume buttons. Add poster to show a preview image before playback starts.",
  definition: {
    term: "<video> Element",
    explanation: "An element that embeds video playback with built-in browser controls."
  },
  whyItMatters: "Video is the web's favorite medium. <video> plays it natively — no video platform account or plugin required.",
  realWorldAnalogy: {
    title: "A TV Built Into the Wall",
    story: "The TV is part of the room itself — no separate box or cables needed.",
    comparison: [
      { item: "Built-in TV", meaning: "The <video> tag — native playback, no extras" },
      { item: "Separate DVD player", meaning: "Old plugin-based video — extra parts required" }
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
    { wrong: `<video autoplay src="ad.mp4"></video>`, correct: `<video autoplay muted src="ad.mp4"></video>`, reason: "Browsers block autoplay with sound as intrusive — muted autoplay is allowed." }
  ],
  tryItYourself: {
    html: `<video src="clip.mp4"></video>`,
    instructions: "Add controls and width=\"480\" so visitors can play the video."
  },
  takeaways: [
    "<video> embeds native video playback.",
    "controls adds the player interface; poster shows a preview image.",
    "Autoplay with sound is blocked — use muted if you autoplay."
  ],
  quizQuestions: [
    { id: "html-video-1", question: "What does the poster attribute do?", options: ["Posts the video online", "Shows a preview image before playback", "Adds subtitles", "Loops the video"], correctAnswerIndex: 1, explanation: "poster displays a preview image in the player until the video starts." },
    { id: "html-video-2", question: "Why is autoplay with sound usually blocked?", options: ["It uses too much code", "Browsers consider it intrusive", "Videos can't autoplay", "It breaks the layout"], correctAnswerIndex: 1, explanation: "Browsers block sound autoplay as intrusive; muted autoplay is permitted." }
  ]
};

export const htmlEmbeddedMediaContent: LessonContent = {
  heroTagline: "Borrow videos and maps from other sites.",
  introduction: "The <iframe> tag embeds another webpage inside yours — a YouTube video, a Google Map, a social post. You paste the embed code the other site gives you.",
  definition: {
    term: "<iframe> (Inline Frame)",
    explanation: "An element that embeds a complete external webpage inside your page."
  },
  whyItMatters: "You don't need to host videos or build maps yourself. Iframes let you borrow rich content legally and easily.",
  realWorldAnalogy: {
    title: "A Window Into Another Shop",
    story: "A mall window lets you see into a shop without leaving the hallway.",
    comparison: [
      { item: "Shop window", meaning: "The <iframe> — a view into another site" },
      { item: "The hallway", meaning: "Your page — the frame around it" }
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
    { wrong: `<iframe src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></iframe>`, correct: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>`, reason: "Regular watch-page URLs are blocked from iframing — only the site's official /embed/ URLs are guaranteed to work." }
  ],
  tryItYourself: {
    html: `<iframe src="https://www.youtube.com/embed/abc123"></iframe>`,
    instructions: "Add width=\"560\", height=\"315\", and a title describing the video."
  },
  takeaways: [
    "<iframe> embeds external pages like videos and maps.",
    "Always include a descriptive title for accessibility.",
    "Use the site's official embed URL, not a regular page URL."
  ],
  quizQuestions: [
    { id: "html-iframe-1", question: "What can <iframe> embed?", options: ["Only images", "Complete external webpages like videos and maps", "Only text", "Nothing — it is deprecated"], correctAnswerIndex: 1, explanation: "<iframe> embeds a full external document — videos, maps, posts — inside your page." },
    { id: "html-iframe-2", question: "Why is the title attribute important on <iframe>?", options: ["It styles the frame", "Screen readers use it to describe the embedded content", "It speeds up loading", "It is not important"], correctAnswerIndex: 1, explanation: "Without a title, assistive tech announces only 'frame' — users can't tell what's inside." }
  ]
};