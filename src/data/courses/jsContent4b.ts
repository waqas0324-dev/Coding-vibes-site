import { LessonContent } from '../../types';

// LESSON: Objects (module 7 deep dive)
export const jsObjectsDeepContent: LessonContent = {
  heroTagline: "Working with objects like a pro: keys, values, entries",
  introduction: "Beyond basics, objects offer Object.keys(), Object.values(), and Object.entries() to inspect them, plus shorthand syntax and the spread operator to build them fast.",
  definition: {
    term: "Object utilities",
    explanation: "Built-in tools for objects: Object.keys/values/entries list parts, shorthand { name } builds from variables, and {...obj} copies or merges."
  },
  whyItMatters: "API responses are objects. Forms produce objects. Config is objects. These utilities are how you inspect, copy, and combine them safely.",
  realWorldAnalogy: {
    title: "Understanding Object Utilities",
    story: "An inventory audit: list all box labels (keys), list all contents (values), or list label-content pairs (entries) — three views of the same warehouse.",
    comparison: [
      { item: "Object.keys()", meaning: "The list of labels." },
      { item: "{...obj}", meaning: "Photocopying the warehouse manifest before editing." }
    ]
  },
  syntaxStructure: `const user = { name: "Sara", age: 25 };
Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Sara", 25]
const copy = { ...user, city: "Lahore" }; // merge + add`,
  codeExample: `const product = { title: "Laptop", price: 150000 };

console.log(Object.keys(product));   // ["title", "price"]
console.log(Object.values(product)); // ["Laptop", 150000]

const sale = { ...product, price: 135000 }; // copy with new price
console.log(sale.price);    // 135000
console.log(product.price); // 150000 — original safe`,
  codeAnnotations: [
    { lineOrToken: "Object.keys(product)", description: "Returns the property names as an array." },
    { lineOrToken: "{ ...product, price: 135000 }", description: "Spread copies, then price is overridden." }
  ],
  commonMistakes: [
    {
      wrong: "const copy = product;  // NOT a copy — same object!",
      correct: "const copy = { ...product };",
      reason: "= copies the reference. Spread creates a real independent copy."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const settings = { theme: "dark", volume: 80 };
const updated = { ...settings, volume: 50 };
document.getElementById("out").textContent =
  "Keys: " + Object.keys(updated).join(", ") + " | volume=" + updated.volume;`,
    instructions: "Add a 'wifi: true' property via spread."
  },
  takeaways: [
    "Object.keys/values/entries() inspect an object's parts.",
    "{...obj} makes a true shallow copy.",
    "Spread merges objects and overrides duplicate keys."
  ],
  quizQuestions: [
    { id: "js-objectsdeep-1", question: "What does Object.keys({a:1, b:2}) return?", options: ["[\"a\", \"b\"]", "[1, 2]", "\"ab\"", "2"], correctAnswerIndex: 0, explanation: "keys() returns the property names." },
    { id: "js-objectsdeep-2", question: "Does const c = obj copy the object?", options: ["No — it copies the reference", "Yes, fully", "Only numbers", "It deletes obj"], correctAnswerIndex: 0, explanation: "Both variables point at the same object; use spread for a real copy." }
  ]
};

// LESSON: Object Properties
export const jsObjectPropertiesContent: LessonContent = {
  heroTagline: "Reading, writing, and choosing dot vs bracket notation",
  introduction: "Read properties with user.name (dot) or user['name'] (brackets). Brackets win when the key has spaces, comes from a variable, or isn't a valid identifier. You can also add and delete properties anytime.",
  definition: {
    term: "Object property access",
    explanation: "Getting or setting values on an object: dot notation for simple known keys, bracket notation for dynamic or special keys, delete to remove."
  },
  whyItMatters: "Dynamic keys are everywhere: user[field], translations[lang], settings[theme]. Bracket notation unlocks them.",
  realWorldAnalogy: {
    title: "Understanding Property Access",
    story: "Two ways to open a locker: your own key with the number memorized (dot), or reading the number off a slip of paper (brackets).",
    comparison: [
      { item: "user.name", meaning: "Your memorized key — fast, for known names." },
      { item: "user[key]", meaning: "Reading the slip — works for any name, even surprises." }
    ]
  },
  syntaxStructure: `const user = { name: "Sara" };
user.name;        // "Sara" — dot
user["name"];     // "Sara" — brackets
const k = "name";
user[k];          // "Sara" — variable key
user.age = 25;    // add
delete user.age;  // remove`,
  codeExample: `const translations = { en: "Hello", ur: "Assalam o Alaikum" };
let lang = "ur";
console.log(translations[lang]); // Assalam o Alaikum — dynamic key

const profile = { name: "Ali" };
profile.city = "Karachi";  // add a property
profile.name = "Ali Raza"; // update one
console.log(profile.city); // Karachi`,
  codeAnnotations: [
    { lineOrToken: "translations[lang]", description: "lang holds 'ur' — impossible with dot notation." },
    { lineOrToken: "profile.city = \"Karachi\";", description: "Assigning a new key creates the property." }
  ],
  commonMistakes: [
    {
      wrong: "user.first name  // SyntaxError — space in key",
      correct: "user['first name']",
      reason: "Dot notation needs valid identifiers; brackets handle any string."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const scores = { math: 90, science: 85 };
let subject = "math";
document.getElementById("out").textContent =
  "Math score: " + scores[subject];
scores.english = 88;
document.getElementById("out").textContent += ", English: " + scores.english;`,
    instructions: "Change subject to 'science' and re-run."
  },
  takeaways: [
    "Dot notation for known, simple keys; brackets for dynamic ones.",
    "Assigning a new key adds the property.",
    "delete obj.key removes a property."
  ],
  quizQuestions: [
    { id: "js-objprops-1", question: "When must you use brackets?", options: ["When the key is in a variable or has special characters", "Always", "Never", "Only for numbers"], correctAnswerIndex: 0, explanation: "Brackets evaluate the key expression; dots need literal identifiers." },
    { id: "js-objprops-2", question: "How do you add a property?", options: ["obj.newKey = value", "obj + newKey", "add(obj, key)", "obj.push(key)"], correctAnswerIndex: 0, explanation: "Assignment creates the property if it doesn't exist." }
  ]
};

// LESSON: Object Methods
export const jsObjectMethodsContent: LessonContent = {
  heroTagline: "Functions that live inside objects",
  introduction: "An object method is a function stored as a property: car.start(). Inside the method, this refers to the object itself — so this.fuel reads the car's own fuel.",
  definition: {
    term: "Object method",
    explanation: "A function value assigned to an object's property. Called as obj.method(), it can access the object's other properties via this."
  },
  whyItMatters: "Methods bundle behavior with data: user.login(), cart.checkout(), player.jump(). This is the core idea behind objects in every language.",
  realWorldAnalogy: {
    title: "Understanding Object Methods",
    story: "A remote control: the buttons (methods) operate on the TV (object) itself — volume+ changes this TV, not some other one.",
    comparison: [
      { item: "tv.volumeUp()", meaning: "Pressing the button on this remote." },
      { item: "this.volume", meaning: "The TV the remote is paired with." }
    ]
  },
  syntaxStructure: `const car = {
  fuel: 50,
  drive() {
    this.fuel -= 10;
    return "Fuel left: " + this.fuel;
  }
};
car.drive();`,
  codeExample: `const bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return "New balance: " + this.balance;
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return "Withdrew " + amount;
    }
    return "Insufficient funds";
  }
};

console.log(bankAccount.deposit(500));  // New balance: 1500
console.log(bankAccount.withdraw(200)); // Withdrew 200`,
  codeAnnotations: [
    { lineOrToken: "deposit(amount) {", description: "Method shorthand — a function inside the object." },
    { lineOrToken: "this.balance += amount;", description: "this = bankAccount — updates its own balance." }
  ],
  commonMistakes: [
    {
      wrong: "const f = bankAccount.deposit;\nf(500);  // this is undefined — TypeError",
      correct: "bankAccount.deposit(500);",
      reason: "Detaching a method loses its this. Call it on the object."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const counter = {
  count: 0,
  increment() {
    this.count++;
    return this.count;
  }
};
counter.increment();
counter.increment();
document.getElementById("out").textContent = "Count: " + counter.increment();`,
    instructions: "Add a reset() method that sets count back to 0."
  },
  takeaways: [
    "Methods are functions stored in objects.",
    "Inside a method, this is the object itself.",
    "Call methods on the object: obj.method()."
  ],
  quizQuestions: [
    { id: "js-objmethods-1", question: "What does this refer to inside car.drive()?", options: ["The car object", "The window", "Nothing", "The drive function"], correctAnswerIndex: 0, explanation: "When called as car.drive(), this is car." },
    { id: "js-objmethods-2", question: "How do you define a method?", options: ["As a function property: drive() { }", "With the method keyword", "Outside the object", "You cannot"], correctAnswerIndex: 0, explanation: "Methods are function-valued properties of the object." }
  ]
};

// LESSON: Nested Objects
export const jsNestedObjectsContent: LessonContent = {
  heroTagline: "Objects inside objects — modeling real structures",
  introduction: "Objects can hold other objects: user.address.city. Real data nests naturally — a company has departments, which have employees. Chain dots (or brackets) to drill down.",
  definition: {
    term: "Nested object",
    explanation: "An object used as the value of another object's property. Access goes level by level: company.ceo.name."
  },
  whyItMatters: "API responses nest deeply: data.user.profile.avatar. Reading nested structures is a daily developer skill.",
  realWorldAnalogy: {
    title: "Understanding Nested Objects",
    story: "Russian dolls: open the big doll to find a smaller one inside, and another inside that — each level reveals more detail.",
    comparison: [
      { item: "company.ceo", meaning: "Opening the big doll — the CEO object." },
      { item: "company.ceo.name", meaning: "Opening the next doll — the name inside." }
    ]
  },
  syntaxStructure: `const company = {
  name: "TechCorp",
  ceo: { name: "Sara", age: 40 }
};
company.ceo.name; // "Sara"`,
  codeExample: `const order = {
  id: "ORD-101",
  customer: {
    name: "Ali",
    address: { city: "Lahore", zip: "54000" }
  },
  items: [{ title: "Book", qty: 2 }]
};

console.log(order.customer.name);              // Ali
console.log(order.customer.address.city);      // Lahore
console.log(order.items[0].title);             // Book`,
  codeAnnotations: [
    { lineOrToken: "order.customer.address.city", description: "Three levels deep — each dot opens one doll." },
    { lineOrToken: "order.items[0].title", description: "Mixing array index and object dots in one path." }
  ],
  commonMistakes: [
    {
      wrong: "console.log(order.customer.phone.number);  // TypeError — phone is undefined!",
      correct: "console.log(order.customer?.phone?.number);  // undefined, no crash",
      reason: "Drilling into a missing level crashes. ?. (optional chaining) stops safely."
    }
  ],
  tryItYourself: {
    html: `<p id="out"></p>`,
    js: `const student = {
  name: "Hina",
  grades: { math: 95, english: 88 }
};
document.getElementById("out").textContent =
  student.name + "'s math: " + student.grades.math;`,
    instructions: "Add a science grade and display it."
  },
  takeaways: [
    "Objects nest inside objects to model real structures.",
    "Chain dots to drill down: a.b.c.",
    "Use ?. to safely read possibly-missing levels."
  ],
  quizQuestions: [
    { id: "js-nestedobj-1", question: "How do you read city in {a: {b: {city: \"X\"}}}?", options: ["obj.a.b.city", "obj.city", "obj[a][b][city]", "obj->a->b->city"], correctAnswerIndex: 0, explanation: "Drill level by level with dots." },
    { id: "js-nestedobj-2", question: "What does ?. do?", options: ["Stops safely on missing levels instead of crashing", "Deletes the property", "Makes it required", "Nothing"], correctAnswerIndex: 0, explanation: "Optional chaining returns undefined instead of throwing." }
  ]
};

// ============================================================
// MODULE 8: DOM (unique lessons)
// ============================================================

// LESSON: Selecting Elements
export const jsSelectingElementsContent: LessonContent = {
  heroTagline: "Grabbing page elements so JavaScript can work with them",
  introduction: "Before changing anything, you must SELECT it. JavaScript offers getElementById, querySelector, querySelectorAll, and more — each suited to different jobs. This lesson maps the whole toolbox.",
  definition: {
    term: "Element selection",
    explanation: "Finding HTML elements in the DOM and getting references to them, so your code can read or change them."
  },
  whyItMatters: "Every DOM task starts with selection. Picking the right method — id for one, selector for many — makes code short and fast.",
  realWorldAnalogy: {
    title: "Understanding Selection",
    story: "Calling roll in class: by student ID (getElementById), by 'everyone in row 2' (querySelectorAll), or 'the first volunteer' (querySelector).",
    comparison: [
      { item: "getElementById", meaning: "Calling one student by ID — fastest." },
      { item: "querySelectorAll", meaning: "Calling a whole group by description." }
    ]
  },
  syntaxStructure: `document.getElementById("title");  // one, by id
document.querySelector(".btn");      // first match
document.querySelectorAll("p");      // all matches`,
  codeExample: `// One element by id
const heading = document.getElementById("main-title");

// First element matching a CSS selector
const firstBtn = document.querySelector(".btn");

// ALL matching elements (a NodeList)
const paragraphs = document.querySelectorAll("p");
console.log("Found " + paragraphs.length + " paragraphs.");`,
  codeAnnotations: [
    { lineOrToken: 'document.getElementById("main-title")', description: "Fastest lookup — ids are unique." },
    { lineOrToken: 'document.querySelectorAll("p")', description: "Returns every <p> as a list you can loop over." }
  ],
  commonMistakes: [
    {
      wrong: "document.getElementById('.title');  // null — no # or . here!",
      correct: "document.getElementById('title');",
      reason: "getElementById takes the raw id, without # or . prefixes."
    }
  ],
  tryItYourself: {
    html: `<h2 id="title">Hello</h2>\n<p class="note">One</p>\n<p class="note">Two</p>`,
    js: `const title = document.getElementById("title");
const notes = document.querySelectorAll(".note");
title.textContent = "Selected!";
document.querySelector("p").textContent = "First note changed";`,
    instructions: "Select all .note elements and count them."
  },
  takeaways: [
    "getElementById is fastest for single elements by id.",
    "querySelector finds the first CSS-selector match.",
    "querySelectorAll returns all matches as a NodeList."
  ],
  quizQuestions: [
    { id: "js-selecting-1", question: "Which gets an element by its id?", options: ["document.getElementById(\"x\")", "document.querySelectorAll(\"x\")", "document.getClass(\"x\")", "document.find(\"x\")"], correctAnswerIndex: 0, explanation: "getElementById looks up the unique id." },
    { id: "js-selecting-2", question: "What does querySelectorAll return?", options: ["All matching elements", "Only the first", "A boolean", "The HTML text"], correctAnswerIndex: 0, explanation: "It returns a NodeList of every match." }
  ]
};

// LESSON: getElementById()
export const jsGetElementByIdContent: LessonContent = {
  heroTagline: "The fastest lookup — one element, one unique id",
  introduction: "getElementById('demo') finds the single element with id='demo'. IDs must be unique per page, so this always returns exactly one element (or null). It's the oldest and fastest selection method.",
  definition: {
    term: "getElementById()",
    explanation: "A document method that returns the element with the given id attribute, or null if none exists. Pass the id without a # prefix."
  },
  whyItMatters: "Unique widgets — #login-form, #cart-total, #search-box — are grabbed by id thousands of times a day. It's the bread-and-butter lookup.",
  realWorldAnalogy: {
    title: "Understanding getElementById",
    story: "A passport number at immigration: unique to one person, instant lookup, no confusion with anyone else.",
    comparison: [
      { item: "The id attribute", meaning: "The passport number — unique per element." },
      { item: "getElementById", meaning: "The officer typing the number — instant match." }
    ]
  },
  syntaxStructure: `const el = document.getElementById("demo");
if (el) {
  el.textContent = "Found it!";
}`,
  codeExample: `<p id="status">Waiting...</p>
<script>
  const statusEl = document.getElementById("status");
  statusEl.textContent = "Ready!";
  statusEl.style.color = "green";
<\/script>`,
  codeAnnotations: [
    { lineOrToken: 'document.getElementById("status")', description: "Finds the one element with id='status'." },
    { lineOrToken: "if (el) {", description: "Guard: only touch it if it was actually found." }
  ],
  commonMistakes: [
    {
      wrong: "document.getElementById('#demo');  // null!",
      correct: "document.getElementById('demo');",
      reason: "No # prefix — that's querySelector syntax, not getElementById."
    }
  ],
  tryItYourself: {
    html: `<p id="msg">Original text</p>`,
    js: `const msg = document.getElementById("msg");
msg.textContent = "Changed by getElementById!";
msg.style.fontWeight = "bold";`,
    instructions: "Change the id in both HTML and JS to your own name."
  },
  takeaways: [
    "IDs must be unique — one element per id.",
    "Pass the id without #.",
    "Returns null if missing — check before using."
  ],
  quizQuestions: [
    { id: "js-getid-1", question: "What does getElementById(\"demo\") return?", options: ["The element with id=\"demo\"", "All elements", "The first div", "A string"], correctAnswerIndex: 0, explanation: "It returns the single matching element or null." },
    { id: "js-getid-2", question: "Why is getElementById(\"#demo\") wrong?", options: ["No # prefix is used with getElementById", "# is required", "IDs can't have letters", "It works fine"], correctAnswerIndex: 0, explanation: "Pass the raw id; # belongs to querySelector." }
  ]
};

// LESSON: querySelector()
export const jsQuerySelectorContent: LessonContent = {
  heroTagline: "CSS selectors meet JavaScript — find anything",
  introduction: "querySelector('.card') finds the FIRST element matching any CSS selector — classes, ids, tags, attributes, even 'ul li a'. If you know CSS selectors, you already know this method.",
  definition: {
    term: "querySelector()",
    explanation: "A document/element method returning the first element matching a CSS selector string, or null. Accepts any valid CSS selector."
  },
  whyItMatters: "Real pages need flexible lookups: 'the submit button inside this form', 'the first error message'. querySelector speaks the CSS you already know.",
  realWorldAnalogy: {
    title: "Understanding querySelector",
    story: "Asking a librarian: 'the first red book on shelf 3' — a description that pinpoints exactly one item.",
    comparison: [
      { item: "'.card'", meaning: "'The first book with a red cover.'" },
      { item: "'#menu a'", meaning: "'The first link inside the menu.'" }
    ]
  },
  syntaxStructure: `document.querySelector(".btn");     // first .btn
document.querySelector("#menu a");   // first link in #menu
document.querySelector("input[name='email']"); // by attribute`,
  codeExample: `const submitBtn = document.querySelector("#login-form button");
const errorMsg = document.querySelector(".error");
const emailInput = document.querySelector("input[type='email']");

if (errorMsg) {
  errorMsg.style.display = "block";
}`,
  codeAnnotations: [
    { lineOrToken: '"#login-form button"', description: "CSS descendant selector — button inside the form." },
    { lineOrToken: '"input[type=\'email\']"', description: "Attribute selector — inputs of type email." }
  ],
  commonMistakes: [
    {
      wrong: "document.querySelector('btn');  // null — missing dot!",
      correct: "document.querySelector('.btn');",
      reason: "querySelector uses real CSS syntax: . for class, # for id."
    }
  ],
  tryItYourself: {
    html: `<div class="card">Card 1</div>\n<div class="card">Card 2</div>`,
    js: `const first = document.querySelector(".card");
first.style.border = "2px solid green";
first.textContent = "I am the FIRST card";`,
    instructions: "Notice only the first card changed — that's querySelector."
  },
  takeaways: [
    "querySelector takes any CSS selector.",
    "It returns only the FIRST match (or null).",
    "Remember . for classes and # for ids."
  ],
  quizQuestions: [
    { id: "js-qs-1", question: "What does querySelector(\".item\") return?", options: ["The first element with class item", "All items", "The last item", "A number"], correctAnswerIndex: 0, explanation: "querySelector returns the first match only." },
    { id: "js-qs-2", question: "Which selects the first link inside #nav?", options: ["querySelector(\"#nav a\")", "querySelector(\"nav\")", "getElementById(\"a\")", "querySelector(\"a#nav\")"], correctAnswerIndex: 0, explanation: "'#nav a' is the CSS descendant selector." }
  ]
};

// LESSON: querySelectorAll()
export const jsQuerySelectorAllContent: LessonContent = {
  heroTagline: "Grab EVERY match and loop over them",
  introduction: "querySelectorAll('li') returns ALL matching elements as a NodeList — a list you can loop with forEach or for...of. It's how you style every card, validate every input, or attach handlers to every button.",
  definition: {
    term: "querySelectorAll()",
    explanation: "Returns a static NodeList of all elements matching a CSS selector. Loop over it with forEach, for...of, or convert to an array."
  },
  whyItMatters: "Bulk operations define real UIs: highlight all errors, disable all buttons, count all items. querySelectorAll + a loop does them in two lines.",
  realWorldAnalogy: {
    title: "Understanding querySelectorAll",
    story: "The teacher says 'everyone wearing blue, stand up' — the whole matching group acts at once.",
    comparison: [
      { item: "querySelectorAll('.blue')", meaning: "Identifying everyone wearing blue." },
      { item: ".forEach(...)", meaning: "Each of them standing up in turn." }
    ]
  },
  syntaxStructure: `const items = document.querySelectorAll(".todo");
items.forEach(item => {
  item.style.color = "green";
});`,
  codeExample: `const buttons = document.querySelectorAll(".choice");
console.log("Found " + buttons.length + " buttons");

buttons.forEach((btn, index) => {
  btn.textContent = "Option " + (index + 1);
});`,
  codeAnnotations: [
    { lineOrToken: 'document.querySelectorAll(".choice")', description: "Collects every matching button into a NodeList." },
    { lineOrToken: "buttons.forEach((btn, index) => {", description: "Runs for each button, with its position." }
  ],
  commonMistakes: [
    {
      wrong: "const list = document.querySelectorAll('li');\nlist.push('x');  // TypeError",
      correct: "const arr = [...document.querySelectorAll('li')];",
      reason: "A NodeList is not a real array — no push/map. Spread it into one first."
    }
  ],
  tryItYourself: {
    html: `<p class="hi">A</p>\n<p class="hi">B</p>\n<p class="hi">C</p>`,
    js: `const paras = document.querySelectorAll(".hi");
paras.forEach((p, i) => {
  p.textContent = "Paragraph " + (i + 1);
});`,
    instructions: "Give every paragraph a different background color in the loop."
  },
  takeaways: [
    "querySelectorAll returns every match as a NodeList.",
    "Loop it with forEach or for...of.",
    "It's not a real array — spread it if you need array methods."
  ],
  quizQuestions: [
    { id: "js-qsa-1", question: "What does querySelectorAll return?", options: ["A NodeList of all matches", "One element", "A string", "A boolean"], correctAnswerIndex: 0, explanation: "Every match is collected into a NodeList." },
    { id: "js-qsa-2", question: "Can you call .map() directly on a NodeList?", options: ["No — convert to an array first", "Yes", "Only in Chrome", "Only with one item"], correctAnswerIndex: 0, explanation: "NodeLists lack array methods; spread [...] to convert." }
  ]
};

// LESSON: Changing Text
export const jsChangingTextContent: LessonContent = {
  heroTagline: "Update words on the page with textContent",
  introduction: "textContent sets an element's plain text: el.textContent = 'Hello'. It's safe (no HTML is parsed) and fast — the standard way to update labels, counters, messages, and results.",
  definition: {
    term: "textContent",
    explanation: "A property that gets or sets the text inside an element. Assigned text is treated as plain characters — tags are not interpreted."
  },
  whyItMatters: "Live counters, form feedback, chat messages, scores — most dynamic pages are just textContent updates happening constantly.",
  realWorldAnalogy: {
    title: "Understanding textContent",
    story: "A scoreboard operator typing the new score: the digits change, but the board's wiring stays untouched.",
    comparison: [
      { item: "textContent =", meaning: "Typing new digits on the board." },
      { item: "innerHTML =", meaning: "Rewiring the board — powerful but risky." }
    ]
  },
  syntaxStructure: `const el = document.getElementById("msg");
el.textContent = "New message";  // safe plain text
console.log(el.textContent);     // read it back`,
  codeExample: `let likes = 0;
const likeBtn = document.getElementById("like-btn");
const countEl = document.getElementById("like-count");

likeBtn.addEventListener("click", () => {
  likes++;
  countEl.textContent = likes + " likes";
});`,
  codeAnnotations: [
    { lineOrToken: "likes++;", description: "The data changes first." },
    { lineOrToken: 'countEl.textContent = likes + " likes";', description: "Then the page text mirrors the data." }
  ],
  commonMistakes: [
    {
      wrong: "el.textContent = '<b>Hi</b>';  // shows literally as <b>Hi</b>",
      correct: "el.innerHTML = '<b>Hi</b>';  // renders bold",
      reason: "textContent never parses HTML. That's its safety feature — use innerHTML only for trusted markup."
    }
  ],
  tryItYourself: {
    html: `<p id="out">Old text</p>\n<button id="btn">Update</button>`,
    js: `let n = 0;
document.getElementById("btn").addEventListener("click", () => {
  n++;
  document.getElementById("out").textContent = "Clicked " + n + " times";
});`,
    instructions: "Click the button several times and watch the text update."
  },
  takeaways: [
    "textContent sets plain text — tags are not parsed.",
    "It's the safe default for user-provided content.",
    "Read it back to get an element's current text."
  ],
  quizQuestions: [
    { id: "js-changetext-1", question: "What does el.textContent = \"<b>Hi</b>\" display?", options: ["The literal text <b>Hi</b>", "Bold Hi", "Nothing", "An error"], correctAnswerIndex: 0, explanation: "textContent treats everything as plain text." },
    { id: "js-changetext-2", question: "Why prefer textContent for user input?", options: ["It can't inject HTML/scripts", "It's slower", "It looks better", "No reason"], correctAnswerIndex: 0, explanation: "Unparsed text prevents XSS injection attacks." }
  ]
};

// LESSON: Changing HTML
export const jsChangingHtmlContent: LessonContent = {
  heroTagline: "Rewrite an element's inner markup with innerHTML",
  introduction: "innerHTML gets or sets the HTML inside an element: el.innerHTML = '<b>Hi</b>' renders bold text. It's powerful for templates and lists — but never use it with untrusted user input.",
  definition: {
    term: "innerHTML",
    explanation: "A property that gets or sets an element's inner HTML markup. Assigned strings are parsed as HTML, creating real elements."
  },
  whyItMatters: "Rendering lists, cards, and search results means building HTML from data. innerHTML turns a template string into live page content in one line.",
  realWorldAnalogy: {
    title: "Understanding innerHTML",
    story: "Replacing a shop window display: you don't just change the price tags (textContent) — you rebuild the whole arrangement.",
    comparison: [
      { item: "textContent", meaning: "Changing price tags — text only." },
      { item: "innerHTML", meaning: "Redesigning the whole window — full markup." }
    ]
  },
  syntaxStructure: `const list = document.getElementById("list");
list.innerHTML = "<li>Apple</li><li>Mango</li>"; // renders two items`,
  codeExample: `const products = ["Shirt", "Shoes", "Hat"];
const listEl = document.getElementById("product-list");

let html = "";
for (const p of products) {
  html += "<li>" + p + "</li>";
}
listEl.innerHTML = html; // one update — efficient!`,
  codeAnnotations: [
    { lineOrToken: 'html += "<li>" + p + "</li>";', description: "Builds the full markup string in the loop." },
    { lineOrToken: "listEl.innerHTML = html;", description: "One assignment renders everything at once." }
  ],
  commonMistakes: [
    {
      wrong: "list.innerHTML = userComment;  // XSS danger!",
      correct: "Use textContent for user input; innerHTML only for your own trusted templates.",
      reason: "Parsed HTML from users can inject malicious scripts."
    }
  ],
  tryItYourself: {
    html: `<ul id="list"></ul>`,
    js: `const fruits = ["Apple", "Mango", "Banana"];
let html = "";
for (const f of fruits) {
  html += "<li>🍎 " + f + "</li>";
}
document.getElementById("list").innerHTML = html;`,
    instructions: "Add a fourth fruit to the array."
  },
  takeaways: [
    "innerHTML parses strings as real HTML.",
    "Build the full string, then assign once for performance.",
    "Never put untrusted user input into innerHTML."
  ],
  quizQuestions: [
    { id: "js-changehtml-1", question: "What does innerHTML do with \"<b>Hi</b>\"?", options: ["Renders bold Hi", "Shows literal text", "Deletes the element", "Nothing"], correctAnswerIndex: 0, explanation: "innerHTML parses the string as markup." },
    { id: "js-changehtml-2", question: "Why avoid innerHTML with user input?", options: ["XSS — injected scripts could run", "It's too slow", "It doesn't work", "It deletes data"], correctAnswerIndex: 0, explanation: "Parsed user HTML can contain malicious scripts." }
  ]
};

// LESSON: Changing Styles
export const jsChangingStylesContent: LessonContent = {
  heroTagline: "Restyle elements live with the style property",
  introduction: "element.style.color = 'red' changes CSS directly from JavaScript. Style names become camelCase (backgroundColor, fontSize). It's perfect for instant visual feedback — validation errors, hover effects, themes.",
  definition: {
    term: "style property",
    explanation: "An object on every element mirroring inline CSS. Setting element.style.color applies that CSS rule directly to the element."
  },
  whyItMatters: "Interactive feedback is visual: red borders on bad input, green on success, dark mode toggles. The style property wires logic to looks.",
  realWorldAnalogy: {
    title: "Understanding the style Property",
    story: "A painter with a remote brush: code says 'wall, turn blue' and the wall repaints instantly — no ladder needed.",
    comparison: [
      { item: "el.style.color", meaning: "Pointing the remote brush at the wall's paint." },
      { item: "classList", meaning: "Swapping the whole room's theme instead (often cleaner)." }
    ]
  },
  syntaxStructure: `el.style.color = "red";
el.style.backgroundColor = "#222"; // camelCase!
el.style.fontSize = "20px";        // units needed`,
  codeExample: `const input = document.getElementById("email");
const msg = document.getElementById("email-msg");

if (!input.value.includes("@")) {
  input.style.border = "2px solid red";
  msg.textContent = "Enter a valid email";
  msg.style.color = "red";
} else {
  input.style.border = "2px solid green";
  msg.textContent = "Looks good!";
  msg.style.color = "green";
}`,
  codeAnnotations: [
    { lineOrToken: 'input.style.border = "2px solid red";', description: "Instant red flag on invalid input." },
    { lineOrToken: "el.style.backgroundColor", description: "CSS background-color becomes camelCase in JS." }
  ],
  commonMistakes: [
    {
      wrong: "el.style.background-color = 'red';  // SyntaxError",
      correct: "el.style.backgroundColor = 'red';",
      reason: "Hyphenated CSS names become camelCase in JavaScript."
    }
  ],
  tryItYourself: {
    html: `<p id="box" style="padding:16px;border:2px solid gray;">Style me</p>\n<button id="btn">Paint</button>`,
    js: `document.getElementById("btn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.style.backgroundColor = "#22c55e";
  box.style.color = "white";
  box.style.borderRadius = "8px";
});`,
    instructions: "Click Paint, then change the colors."
  },
  takeaways: [
    "element.style applies CSS directly from JS.",
    "Hyphenated CSS becomes camelCase: backgroundColor.",
    "Include units: '20px', not 20."
  ],
  quizQuestions: [
    { id: "js-changestyle-1", question: "How do you set background-color in JS?", options: ["el.style.backgroundColor", "el.style.background-color", "el.backgroundColor", "el.css.color"], correctAnswerIndex: 0, explanation: "CSS names become camelCase on the style object." },
    { id: "js-changestyle-2", question: "What unit issue should you watch?", options: ["Sizes need units like px", "Colors need units", "No units ever", "Only % works"], correctAnswerIndex: 0, explanation: "fontSize = '20px' — a bare 20 won't apply." }
  ]
};

// LESSON: Creating Elements
export const jsCreatingElementsContent: LessonContent = {
  heroTagline: "Build brand-new HTML from JavaScript",
  introduction: "document.createElement('li') builds a new element in memory. Set its text and attributes, then attach it with appendChild(). This is how chats, comments, and feeds add content without reloading.",
  definition: {
    term: "createElement() / appendChild()",
    explanation: "createElement(tag) constructs a new element node; appendChild(node) inserts it as the last child of a parent. Together they add content dynamically."
  },
  whyItMatters: "Dynamic apps create content on the fly — new chat messages, todo items, search results. This two-step pattern is the safe way to do it.",
  realWorldAnalogy: {
    title: "Understanding Element Creation",
    story: "Building furniture then placing it: you assemble the chair (createElement), then put it in the room (appendChild).",
    comparison: [
      { item: "createElement", meaning: "Assembling the chair in the workshop." },
      { item: "appendChild", meaning: "Carrying it into the room." }
    ]
  },
  syntaxStructure: `const li = document.createElement("li"); // build
li.textContent = "New task";                  // configure
document.getElementById("list").appendChild(li); // place`,
  codeExample: `const list = document.getElementById("todo-list");
const tasks = ["Study JS", "Exercise", "Read"];

for (const t of tasks) {
  const li = document.createElement("li");
  li.textContent = t;
  li.className = "todo-item";
  list.appendChild(li);
}`,
  codeAnnotations: [
    { lineOrToken: 'document.createElement("li")', description: "Creates a detached <li> — not on the page yet." },
    { lineOrToken: "list.appendChild(li);", description: "Attaches it as the list's last child — now visible." }
  ],
  commonMistakes: [
    {
      wrong: "const li = document.createElement('li');\nli.textContent = 'Hi';\n// forgot appendChild — nothing appears!",
      correct: "Always appendChild (or prepend/append) after creating.",
      reason: "A created element lives in memory until attached to the document."
    }
  ],
  tryItYourself: {
    html: `<ul id="list"></ul>\n<button id="add">Add item</button>`,
    js: `let n = 1;
document.getElementById("add").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Item " + n++;
  document.getElementById("list").appendChild(li);
});`,
    instructions: "Click Add item several times."
  },
  takeaways: [
    "createElement builds a node in memory.",
    "Configure it (text, classes) before attaching.",
    "appendChild places it as the parent's last child."
  ],
  quizQuestions: [
    { id: "js-createel-1", question: "What does document.createElement(\"p\") do?", options: ["Builds a new <p> in memory", "Adds it to the page", "Deletes paragraphs", "Finds paragraphs"], correctAnswerIndex: 0, explanation: "It constructs the node; you must attach it separately." },
    { id: "js-createel-2", question: "How do you make a created element visible?", options: ["appendChild() it to a parent", "It appears automatically", "Call show()", "Refresh the page"], correctAnswerIndex: 0, explanation: "Attachment inserts it into the live document." }
  ]
};

// LESSON: Removing Elements
export const jsRemovingElementsContent: LessonContent = {
  heroTagline: "Delete elements with remove()",
  introduction: "element.remove() deletes an element from the page instantly — no parent needed. It's how todo apps delete tasks, modals close, and notifications dismiss.",
  definition: {
    term: "remove()",
    explanation: "A method on any element that detaches it from the DOM, deleting it from the page along with its children."
  },
  whyItMatters: "UIs constantly discard things: completed todos, closed popups, old alerts. remove() is the one-line delete.",
  realWorldAnalogy: {
    title: "Understanding remove()",
    story: "Tearing a page from a notebook: the page (and everything written on it) is gone in one motion.",
    comparison: [
      { item: "el.remove()", meaning: "Tearing out the page." },
      { item: "Its children", meaning: "The writing on the page — goes with it." }
    ]
  },
  syntaxStructure: `const banner = document.getElementById("promo");
banner.remove(); // gone from the page`,
  codeExample: `const list = document.getElementById("tasks");

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest("li").remove(); // delete that task
  }
});`,
  codeAnnotations: [
    { lineOrToken: "event.target.closest(\"li\")", description: "Finds the task row containing the clicked button." },
    { lineOrToken: ".remove();", description: "Deletes the whole row from the page." }
  ],
  commonMistakes: [
    {
      wrong: "banner.remove();\nbanner.textContent = 'hi';  // no error, but invisible!",
      correct: "Remember: removed elements are detached — changes won't show.",
      reason: "remove() doesn't destroy the variable; it just detaches the node."
    }
  ],
  tryItYourself: {
    html: `<div id="card" style="padding:12px;border:1px solid gray;">Dismiss me <button id="x">X</button></div>`,
    js: `document.getElementById("x").addEventListener("click", () => {
  document.getElementById("card").remove();
});`,
    instructions: "Click X to dismiss the card."
  },
  takeaways: [
    "element.remove() deletes it from the page.",
    "Children are removed along with it.",
    "The variable still exists — it's just detached."
  ],
  quizQuestions: [
    { id: "js-removeel-1", question: "What does el.remove() do?", options: ["Deletes the element from the page", "Hides it temporarily", "Empties its text", "Disables it"], correctAnswerIndex: 0, explanation: "remove detaches the node from the DOM." },
    { id: "js-removeel-2", question: "Do you need the parent to remove a child?", options: ["No — el.remove() works directly", "Yes, always", "Only for divs", "Only in forms"], correctAnswerIndex: 0, explanation: "Modern remove() needs no parent reference." }
  ]
};

// LESSON: Classes
export const jsClassesContent: LessonContent = {
  heroTagline: "Toggle CSS classes with classList",
  introduction: "element.classList.add('active'), .remove('active'), and .toggle('active') manage CSS classes from JS. This is cleaner than inline styles — design stays in CSS, logic just switches classes.",
  definition: {
    term: "classList",
    explanation: "An object on every element for managing its CSS classes: add, remove, toggle, and contains methods."
  },
  whyItMatters: "Active tabs, open menus, dark mode, error states — all are class switches. classList is the professional way to change appearance.",
  realWorldAnalogy: {
    title: "Understanding classList",
    story: "Light switches for room moods: flip 'party' on, 'work' off — the wiring (CSS) stays, only switches change.",
    comparison: [
      { item: "classList.toggle('dark')", meaning: "Flipping the dark-mode switch." },
      { item: "Inline styles", meaning: "Rewiring the room by hand each time." }
    ]
  },
  syntaxStructure: `el.classList.add("active");    // add
el.classList.remove("hidden");  // remove
el.classList.toggle("open");    // flip on/off
el.classList.contains("open");  // true/false check`,
  codeExample: `const menu = document.getElementById("mobile-menu");
const btn = document.getElementById("menu-btn");

btn.addEventListener("click", () => {
  menu.classList.toggle("open"); // CSS handles the animation
  const isOpen = menu.classList.contains("open");
  btn.textContent = isOpen ? "Close" : "Menu";
});`,
  codeAnnotations: [
    { lineOrToken: 'menu.classList.toggle("open");', description: "Adds 'open' if missing, removes it if present." },
    { lineOrToken: 'menu.classList.contains("open")', description: "Checks the current state to update the button label." }
  ],
  commonMistakes: [
    {
      wrong: "el.classList.add('.active');  // no dot!",
      correct: "el.classList.add('active');",
      reason: "classList takes the raw class name — dots are querySelector syntax."
    }
  ],
  tryItYourself: {
    html: `<style>.big { font-size: 28px; color: #22c55e; font-weight: bold; }</style>\n<p id="text">Make me big</p>\n<button id="btn">Toggle style</button>`,
    js: `document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("text").classList.toggle("big");
});`,
    instructions: "Click Toggle style on and off."
  },
  takeaways: [
    "classList.add/remove/toggle manage CSS classes.",
    "Keep design in CSS; let JS only switch classes.",
    "No dots in class names passed to classList."
  ],
  quizQuestions: [
    { id: "js-classes-1", question: "What does classList.toggle(\"open\") do?", options: ["Adds it if missing, removes it if present", "Always adds", "Always removes", "Deletes the element"], correctAnswerIndex: 0, explanation: "toggle flips the class state." },
    { id: "js-classes-2", question: "Why prefer classList over inline styles?", options: ["Design stays in CSS; JS only switches state", "It's faster to type", "Inline styles don't work", "No reason"], correctAnswerIndex: 0, explanation: "Separation of concerns: CSS owns looks, JS owns logic." }
  ]
};

// LESSON: Attributes
export const jsAttributesContent: LessonContent = {
  heroTagline: "Read and change HTML attributes with get/setAttribute",
  introduction: "getAttribute('src') reads an attribute; setAttribute('src', 'new.png') changes it; removeAttribute('disabled') deletes it. Attributes control images, links, inputs, and custom data-* values.",
  definition: {
    term: "Attribute methods",
    explanation: "getAttribute(name) reads, setAttribute(name, value) writes, removeAttribute(name) deletes, and hasAttribute(name) checks an element's HTML attributes."
  },
  whyItMatters: "Swapping images, enabling buttons, updating links, storing data-* values — attributes are the control panel of HTML elements.",
  realWorldAnalogy: {
    title: "Understanding Attributes",
    story: "Name tags at a conference: read someone's tag (get), write a new one (set), peel one off (remove).",
    comparison: [
      { item: "getAttribute('src')", meaning: "Reading the name tag." },
      { item: "setAttribute('src', ...)", meaning: "Writing a new name tag." }
    ]
  },
  syntaxStructure: `img.setAttribute("src", "cat.png");
img.getAttribute("src");      // "cat.png"
btn.removeAttribute("disabled"); // enable the button`,
  codeExample: `const img = document.getElementById("gallery-img");
const link = document.getElementById("doc-link");

// Image switcher
img.setAttribute("src", "photo2.jpg");
img.setAttribute("alt", "Second photo");

// Link updater
link.setAttribute("href", "https://example.com");
console.log(link.getAttribute("href"));`,
  codeAnnotations: [
    { lineOrToken: 'img.setAttribute("src", "photo2.jpg");', description: "Swaps the displayed image instantly." },
    { lineOrToken: 'btn.removeAttribute("disabled");', description: "Enables a previously disabled button." }
  ],
  commonMistakes: [
    {
      wrong: "img.src = 'x.png'; vs img.setAttribute('src', 'x.png');  // confused?",
      correct: "Both work for standard attributes; properties (img.src) are usually simpler.",
      reason: "Attributes are the HTML; properties are the live JS object. For data-*, use dataset or attributes."
    }
  ],
  tryItYourself: {
    html: `<a id="link" href="https://example.com">Visit site</a>\n<button id="btn">Change link</button>`,
    js: `document.getElementById("btn").addEventListener("click", () => {
  const link = document.getElementById("link");
  link.setAttribute("href", "https://openai.com");
  link.textContent = "Visit OpenAI (href: " + link.getAttribute("href") + ")";
});`,
    instructions: "Click to rewrite the link's destination."
  },
  takeaways: [
    "getAttribute reads, setAttribute writes, removeAttribute deletes.",
    "Use them for src, href, disabled, and data-* attributes.",
    "Standard attributes also have simpler property shortcuts (img.src)."
  ],
  quizQuestions: [
    { id: "js-attrs-1", question: "How do you change an image's source?", options: ["img.setAttribute(\"src\", \"new.png\")", "img.change(\"src\")", "img.srcAttribute = \"new.png\"", "setSrc(img)"], correctAnswerIndex: 0, explanation: "setAttribute writes the attribute value." },
    { id: "js-attrs-2", question: "What does removeAttribute(\"disabled\") do?", options: ["Enables the element", "Deletes the element", "Hides it", "Nothing"], correctAnswerIndex: 0, explanation: "Removing disabled re-enables the control." }
  ]
};

// ============================================================
// MODULE 9: Events and Forms (unique lessons)
// ============================================================

// LESSON: What are Events?
export const jsEventsWhatContent: LessonContent = {
  heroTagline: "Things that happen — clicks, keys, loads — and how code hears them",
  introduction: "An event is something that happens: a click, a keypress, a page load, a form submit. JavaScript 'listens' for events and runs your function when they occur — this is what makes pages interactive.",
  definition: {
    term: "Event",
    explanation: "A signal that something happened in the browser — user actions (click, input) or browser actions (load, resize). Code reacts by listening for them."
  },
  whyItMatters: "Without events, pages would be static posters. Events are the entire reason JavaScript exists in the browser.",
  realWorldAnalogy: {
    title: "Understanding Events",
    story: "A doorbell: the press (event) rings the bell, and you (the listener) come to the door (the handler runs).",
    comparison: [
      { item: "The event", meaning: "Someone pressing the doorbell." },
      { item: "The listener", meaning: "You, waiting to hear it." },
      { item: "The handler", meaning: "Walking to the door — your response." }
    ]
  },
  syntaxStructure: `button.addEventListener("click", () => {
  console.log("Clicked!");
});`,
  codeExample: `// Different events, same pattern
window.addEventListener("load", () => {
  console.log("Page finished loading");
});

document.addEventListener("keydown", (event) => {
  console.log("Key pressed: " + event.key);
});`,
  codeAnnotations: [
    { lineOrToken: 'addEventListener("load", ...)', description: "A browser event — fires when the page is ready." },
    { lineOrToken: 'addEventListener("keydown", ...)', description: "A user event — fires on every key press." }
  ],
  commonMistakes: [
    {
      wrong: "button.addEventListener('onclick', handler);  // never fires!",
      correct: "button.addEventListener('click', handler);",
      reason: "Event names have no 'on' prefix in addEventListener — it's 'click', not 'onclick'."
    }
  ],
  tryItYourself: {
    html: `<button id="btn">Click me</button>\n<p id="out">No events yet</p>`,
    js: `document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("out").textContent = "Click event fired!";
});
document.addEventListener("keydown", (e) => {
  document.getElementById("out").textContent = "Key pressed: " + e.key;
});`,
    instructions: "Click the button, then press any key."
  },
  takeaways: [
    "Events signal that something happened.",
    "addEventListener(eventName, handler) listens for them.",
    "Event names have no 'on' prefix: 'click', not 'onclick'."
  ],
  quizQuestions: [
    { id: "js-eventswhat-1", question: "What is an event?", options: ["A signal that something happened", "A type of variable", "An HTML tag", "A CSS rule"], correctAnswerIndex: 0, explanation: "Events notify code about clicks, keys, loads, and more." },
    { id: "js-eventswhat-2", question: "What is wrong with addEventListener(\"onclick\", ...)?", options: ["The name should be \"click\"", "Nothing", "Missing handler", "Wrong quotes"], correctAnswerIndex: 0, explanation: "addEventListener uses bare names without the 'on' prefix." }
  ]
};

// LESSON: Click Event
export const jsClickEventContent: LessonContent = {
  heroTagline: "The most-used event: responding to clicks",
  introduction: "The click event fires when a user clicks (or taps) an element. Attach it with addEventListener('click', ...) to buttons, cards, and menu items — it's the backbone of interactivity.",
  definition: {
    term: "click event",
    explanation: "An event fired when the user presses and releases the pointer on an element. The handler runs once per click."
  },
  whyItMatters: "Buttons, tabs, likes, carts, modals — nearly every interaction starts with a click. Master it and you can build most UI behavior.",
  realWorldAnalogy: {
    title: "Understanding Click Events",
    story: "An elevator button: press it, the system reacts — the press itself does nothing until the wiring (handler) responds.",
    comparison: [
      { item: "The press", meaning: "The physical click." },
      { item: "The handler", meaning: "The elevator arriving — your coded response." }
    ]
  },
  syntaxStructure: `const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  // runs on every click
});`,
  codeExample: `let count = 0;
const btn = document.getElementById("counter-btn");
const display = document.getElementById("count");

btn.addEventListener("click", () => {
  count++;
  display.textContent = count;
  btn.textContent = "Clicked " + count + "x";
});`,
  codeAnnotations: [
    { lineOrToken: 'btn.addEventListener("click", () => {', description: "Registers the handler — runs per click." },
    { lineOrToken: "count++;", description: "State updates first, then the display mirrors it." }
  ],
  commonMistakes: [
    {
      wrong: "btn.addEventListener('click', doSomething());  // runs immediately!",
      correct: "btn.addEventListener('click', doSomething);",
      reason: "Parentheses call the function now. Pass the reference so it runs on click."
    }
  ],
  tryItYourself: {
    html: `<button id="btn">0 clicks</button>`,
    js: `let clicks = 0;
document.getElementById("btn").addEventListener("click", () => {
  clicks++;
  document.getElementById("btn").textContent = clicks + " clicks";
});`,
    instructions: "Click rapidly and watch the counter climb."
  },
  takeaways: [
    "click fires once per press-and-release.",
    "Pass the handler reference — no parentheses.",
    "Update data first, then reflect it in the UI."
  ],
  quizQuestions: [
    { id: "js-click-1", question: "When does a click handler run?", options: ["Once per user click", "Continuously", "On page load", "Never"], correctAnswerIndex: 0, explanation: "Each click triggers one handler execution." },
    { id: "js-click-2", question: "Why is addEventListener(\"click\", fn()) wrong?", options: ["It calls fn immediately instead of on click", "Nothing is wrong", "fn is undefined", "Clicks are banned"], correctAnswerIndex: 0, explanation: "() invokes now; the reference defers until the event." }
  ]
};

// LESSON: Input Event
export const jsInputEventContent: LessonContent = {
  heroTagline: "React to every keystroke as the user types",
  introduction: "The input event fires on EVERY change to a field — each keystroke, paste, or deletion. Read event.target.value to get the current text. It's the engine behind live search and character counters.",
  definition: {
    term: "input event",
    explanation: "An event fired whenever an <input> or <textarea> value changes. The handler can read the fresh value immediately."
  },
  whyItMatters: "Live search suggestions, password strength meters, and character counters all need per-keystroke updates — that's the input event.",
  realWorldAnalogy: {
    title: "Understanding the Input Event",
    story: "A live scoreboard at a match: every goal updates the display instantly — no waiting for halftime.",
    comparison: [
      { item: "Each keystroke", meaning: "Each goal scored." },
      { item: "The handler", meaning: "The scoreboard updating live." }
    ]
  },
  syntaxStructure: `input.addEventListener("input", (event) => {
  console.log(event.target.value); // current text
});`,
  codeExample: `const searchBox = document.getElementById("search");
const resultCount = document.getElementById("result-count");
const products = ["Shirt", "Shoes", "Shorts", "Hat"];

searchBox.addEventListener("input", (event) => {
  const term = event.target.value.toLowerCase();
  const matches = products.filter(p => p.toLowerCase().includes(term));
  resultCount.textContent = matches.length + " matches: " + matches.join(", ");
});`,
  codeAnnotations: [
    { lineOrToken: "event.target.value", description: "The input's current text, fresh after this keystroke." },
    { lineOrToken: ".filter(p => ...includes(term))", description: "Live-filters the list on every keystroke." }
  ],
  commonMistakes: [
    {
      wrong: "Using 'change' for live search — updates only on blur!",
      correct: "Use 'input' for per-keystroke reactions.",
      reason: "change fires when the field loses focus; input fires on every change."
    }
  ],
  tryItYourself: {
    html: `<input id="name" placeholder="Type your name">\n<p id="out"></p>`,
    js: `document.getElementById("name").addEventListener("input", (e) => {
  const v = e.target.value;
  document.getElementById("out").textContent =
    "Hello, " + v + "! (" + v.length + " characters)";
});`,
    instructions: "Type your name and watch the live greeting."
  },
  takeaways: [
    "input fires on every keystroke, paste, and deletion.",
    "event.target.value holds the current text.",
    "Use input for live feedback; change for on-blur."
  ],
  quizQuestions: [
    { id: "js-input-1", question: "When does the input event fire?", options: ["On every value change", "Only on blur", "On page load", "Once per session"], correctAnswerIndex: 0, explanation: "Every keystroke, paste, or cut triggers it." },
    { id: "js-input-2", question: "How do you read the typed text?", options: ["event.target.value", "event.text", "input.text", "event.key always"], correctAnswerIndex: 0, explanation: "target is the field; value is its current content." }
  ]
};

// LESSON: Change Event
export const jsChangeEventContent: LessonContent = {
  heroTagline: "React when the user finishes and moves on",
  introduction: "The change event fires when a field's value is committed — text inputs on blur, selects and checkboxes immediately on choice. It's for 'final answer' reactions, not per-keystroke ones.",
  definition: {
    term: "change event",
    explanation: "An event fired when a form control's value changes AND is committed: text fields on blur, dropdowns/checkboxes/radios on selection."
  },
  whyItMatters: "Shipping options, quantity selectors, theme pickers, file uploads — change is the right event for discrete choices.",
  realWorldAnalogy: {
    title: "Understanding the Change Event",
    story: "Submitting a ballot vs thinking aloud: input is thinking aloud (every word), change is dropping the ballot in the box (final).",
    comparison: [
      { item: "input", meaning: "Thinking aloud — every keystroke." },
      { item: "change", meaning: "The ballot dropped — committed choice." }
    ]
  },
  syntaxStructure: `select.addEventListener("change", (event) => {
  console.log("Chose: " + event.target.value);
});`,
  codeExample: `const sizeSelect = document.getElementById("size");
const priceEl = document.getElementById("price");
const prices = { S: 1000, M: 1200, L: 1400 };

sizeSelect.addEventListener("change", (event) => {
  const size = event.target.value;
  priceEl.textContent = "Price: $" + prices[size];
});`,
  codeAnnotations: [
    { lineOrToken: 'sizeSelect.addEventListener("change", ...)', description: "Fires when the user picks a different option." },
    { lineOrToken: "prices[size]", description: "Looks up the price for the chosen size." }
  ],
  commonMistakes: [
    {
      wrong: "Expecting change on every keystroke in a text input.",
      correct: "Text inputs fire change on blur (leaving the field).",
      reason: "change means 'committed', not 'typed'."
    }
  ],
  tryItYourself: {
    html: `<select id="color">\n  <option value="red">Red</option>\n  <option value="green">Green</option>\n  <option value="blue">Blue</option>\n</select>\n<p id="out"></p>`,
    js: `document.getElementById("color").addEventListener("change", (e) => {
  const out = document.getElementById("out");
  out.textContent = "You chose " + e.target.value;
  out.style.color = e.target.value;
});`,
    instructions: "Pick different colors from the dropdown."
  },
  takeaways: [
    "change fires on committed values, not keystrokes.",
    "Dropdowns, checkboxes, and radios fire it on selection.",
    "Text inputs fire it when the field loses focus."
  ],
  quizQuestions: [
    { id: "js-change-1", question: "When does change fire on a text input?", options: ["When it loses focus after editing", "On every keystroke", "On page load", "Never"], correctAnswerIndex: 0, explanation: "change = committed value, which for text means blur." },
    { id: "js-change-2", question: "Which control fires change immediately on choice?", options: ["A <select> dropdown", "A text input per keystroke", "A div", "A paragraph"], correctAnswerIndex: 0, explanation: "Selects commit the moment an option is picked." }
  ]
};

// LESSON: Submit Event
export const jsSubmitEventContent: LessonContent = {
  heroTagline: "Intercepting form submission before the page reloads",
  introduction: "The submit event fires when a form is submitted. Calling event.preventDefault() stops the page reload so JavaScript can validate, process, and send the data itself — the foundation of modern forms.",
  definition: {
    term: "submit event",
    explanation: "An event fired on a <form> when submitted (button click or Enter). preventDefault() cancels the browser's default reload behavior."
  },
  whyItMatters: "Logins, signups, checkouts, and contact forms all need JS validation before sending. submit + preventDefault makes that possible.",
  realWorldAnalogy: {
    title: "Understanding Submit",
    story: "A mailroom checkpoint: every outgoing letter (submit) is inspected (validated) before posting — bad ones are returned to sender.",
    comparison: [
      { item: "The submit", meaning: "Dropping the letter in the outgoing box." },
      { item: "preventDefault()", meaning: "Holding the letter for inspection first." }
    ]
  },
  syntaxStructure: `form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the reload!
  // validate + process here
});`,
  codeExample: `const form = document.getElementById("signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stay on the page

  const email = document.getElementById("email").value;
  const msg = document.getElementById("form-msg");

  if (!email.includes("@")) {
    msg.textContent = "Please enter a valid email.";
    return;
  }
  msg.textContent = "Thanks! Check your inbox.";
  form.reset(); // clear the fields
});`,
  codeAnnotations: [
    { lineOrToken: "event.preventDefault();", description: "The critical line — stops the page reload." },
    { lineOrToken: "form.reset();", description: "Clears all fields after success." }
  ],
  commonMistakes: [
    {
      wrong: "Forgetting preventDefault — the page reloads and your JS result vanishes!",
      correct: "Always call event.preventDefault() first in submit handlers.",
      reason: "The browser's default is a full page reload, wiping your work."
    }
  ],
  tryItYourself: {
    html: `<form id="form">\n  <input id="email" placeholder="Email">\n  <button>Sign up</button>\n</form>\n<p id="out"></p>`,
    js: `document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("out").textContent =
    email.includes("@") ? "Subscribed: " + email : "Invalid email!";
});`,
    instructions: "Try valid and invalid emails — the page never reloads."
  },
  takeaways: [
    "submit fires on form submission.",
    "preventDefault() stops the page reload.",
    "Validate, give feedback, then process the data."
  ],
  quizQuestions: [
    { id: "js-submit-1", question: "What does event.preventDefault() do in a submit handler?", options: ["Stops the page reload", "Submits twice", "Clears the form", "Closes the browser"], correctAnswerIndex: 0, explanation: "It cancels the browser's default form submission." },
    { id: "js-submit-2", question: "What happens if you forget preventDefault?", options: ["The page reloads, wiping your JS updates", "Nothing", "The form breaks", "An error throws"], correctAnswerIndex: 0, explanation: "Default submission reloads the page." }
  ]
};

// LESSON: Keyboard Events
export const jsKeyboardEventsContent: LessonContent = {
  heroTagline: "Hearing every key: keydown, keyup, and keypress",
  introduction: "Keyboard events fire on keydown (pressed), keyup (released), and keypress (character typed). event.key tells you WHICH key — 'Enter', 'Escape', 'a'. They power shortcuts, games, and search-on-Enter.",
  definition: {
    term: "Keyboard events",
    explanation: "Events fired for keyboard activity: keydown when pressed, keyup when released. event.key identifies the key; event.code identifies the physical key."
  },
  whyItMatters: "Enter-to-submit, Escape-to-close, arrow-key games, Ctrl+S shortcuts — keyboard handling makes apps feel professional.",
  realWorldAnalogy: {
    title: "Understanding Keyboard Events",
    story: "A piano: pressing a key (keydown) makes the note, releasing (keyup) stops it — and you always know WHICH key was touched.",
    comparison: [
      { item: "keydown", meaning: "The hammer striking — the press moment." },
      { item: "event.key", meaning: "Which piano key — 'Enter', 'a', 'Escape'." }
    ]
  },
  syntaxStructure: `document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter pressed!");
  }
});`,
  codeExample: `const input = document.getElementById("chat-input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Send message: " + event.target.value);
    event.target.value = ""; // clear after sending
  }
  if (event.key === "Escape") {
    event.target.value = ""; // cancel typing
    event.target.blur();
  }
});`,
  codeAnnotations: [
    { lineOrToken: 'event.key === "Enter"', description: "Checks the logical key — works across keyboard layouts." },
    { lineOrToken: "event.target.value = \"\";", description: "Clears the field after sending." }
  ],
  commonMistakes: [
    {
      wrong: "if (event.keyCode === 13)  // deprecated!",
      correct: "if (event.key === 'Enter')",
      reason: "keyCode is deprecated. event.key ('Enter', 'a', 'Escape') is the modern way."
    }
  ],
  tryItYourself: {
    html: `<p>Press keys — watch below:</p>\n<p id="out">Waiting for a key...</p>`,
    js: `document.addEventListener("keydown", (e) => {
  document.getElementById("out").textContent =
    "You pressed: " + e.key + (e.key === "Enter" ? " (that's Enter!)" : "");
});`,
    instructions: "Press letters, Enter, and Escape."
  },
  takeaways: [
    "keydown fires on press; keyup on release.",
    "event.key names the key: 'Enter', 'Escape', 'a'.",
    "Avoid deprecated keyCode — use event.key."
  ],
  quizQuestions: [
    { id: "js-keyboard-1", question: "How do you detect the Enter key?", options: ["event.key === \"Enter\"", "event.key === 13", "event.enter", "keyCode.Enter"], correctAnswerIndex: 0, explanation: "event.key gives the key's name as a string." },
    { id: "js-keyboard-2", question: "What is the difference between keydown and keyup?", options: ["keydown = pressed, keyup = released", "No difference", "keyup = pressed", "keydown never fires"], correctAnswerIndex: 0, explanation: "They mark the two moments of a key press." }
  ]
};

// LESSON: Mouse Events
export const jsMouseEventsContent: LessonContent = {
  heroTagline: "Beyond clicks: hover, move, and right-click",
  introduction: "The mouse fires many events: mouseover/mouseout (enter/leave), mousemove (position), mousedown/mouseup (press/release), dblclick, and contextmenu (right-click). Together they build tooltips, drag-and-drop, and drawing apps.",
  definition: {
    term: "Mouse events",
    explanation: "Events for pointer activity: mouseover/out for hovering, mousemove for tracking, mousedown/up for press states, dblclick, and contextmenu."
  },
  whyItMatters: "Hover previews, drag sliders, drawing canvases, custom right-click menus — rich interfaces live on mouse events.",
  realWorldAnalogy: {
    title: "Understanding Mouse Events",
    story: "A motion-sensor porch light: approaching (mouseover) turns it on, leaving (mouseout) turns it off, walking around (mousemove) is tracked.",
    comparison: [
      { item: "mouseover", meaning: "Stepping onto the porch." },
      { item: "mouseout", meaning: "Stepping off the porch." },
      { item: "mousemove", meaning: "Pacing on the porch — constant updates." }
    ]
  },
  syntaxStructure: `card.addEventListener("mouseover", () => { /* hover on */ });
card.addEventListener("mouseout", () => { /* hover off */ });
card.addEventListener("dblclick", () => { /* double-click */ });`,
  codeExample: `const card = document.getElementById("product-card");

card.addEventListener("mouseover", () => {
  card.style.transform = "scale(1.05)";
  card.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
});

card.addEventListener("mouseout", () => {
  card.style.transform = "scale(1)";
  card.style.boxShadow = "none";
});

card.addEventListener("dblclick", () => {
  console.log("Quick view opened!");
});`,
  codeAnnotations: [
    { lineOrToken: '"mouseover"', description: "Fires when the pointer enters the element." },
    { lineOrToken: '"mouseout"', description: "Fires when the pointer leaves — restore the style." }
  ],
  commonMistakes: [
    {
      wrong: "Heavy work inside mousemove — fires dozens of times per second!",
      correct: "Keep mousemove handlers tiny, or throttle them.",
      reason: "mousemove floods the handler; expensive work causes lag."
    }
  ],
  tryItYourself: {
    html: `<div id="pad" style="padding:30px;border:2px dashed gray;text-align:center;">Hover and move here</div>\n<p id="out"></p>`,
    js: `const pad = document.getElementById("pad");
pad.addEventListener("mouseover", () => {
  pad.style.background = "#d9eee1";
});
pad.addEventListener("mouseout", () => {
  pad.style.background = "";
});
pad.addEventListener("mousemove", (e) => {
  document.getElementById("out").textContent = "x=" + e.clientX + ", y=" + e.clientY;
});`,
    instructions: "Hover in and out, then move the mouse inside."
  },
  takeaways: [
    "mouseover/out track entering and leaving.",
    "mousemove fires constantly — keep handlers light.",
    "dblclick and contextmenu cover double-click and right-click."
  ],
  quizQuestions: [
    { id: "js-mouse-1", question: "Which event fires when the pointer enters an element?", options: ["mouseover", "mouseout", "mouseclick", "mouseleave-up"], correctAnswerIndex: 0, explanation: "mouseover fires on entry; mouseout on exit." },
    { id: "js-mouse-2", question: "Why keep mousemove handlers tiny?", options: ["It fires very frequently", "It never fires", "It's deprecated", "No reason"], correctAnswerIndex: 0, explanation: "Dozens of events per second — heavy work causes jank." }
  ]
};

// LESSON: Event Listeners
export const jsEventListenersContent: LessonContent = {
  heroTagline: "addEventListener done right: options, removal, and the event object",
  introduction: "addEventListener(type, handler) is the modern way to listen — it allows MULTIPLE handlers on one element,unlike onclick which overwrites. You can also remove listeners and read the event object for details.",
  definition: {
    term: "addEventListener()",
    explanation: "The standard method to attach event handlers. Multiple listeners can coexist on one element/event, and removeEventListener detaches them."
  },
  whyItMatters: "Libraries, analytics, and your own code all listen to the same buttons. addEventListener lets everyone coexist; onclick would clobber the others.",
  realWorldAnalogy: {
    title: "Understanding Event Listeners",
    story: "A conference PA system: many people can listen to the same announcement — nobody's earpiece deletes anyone else's.",
    comparison: [
      { item: "addEventListener", meaning: "Handing out another earpiece — everyone hears." },
      { item: "onclick =", meaning: "One shared earpiece — the last grabber wins." }
    ]
  },
  syntaxStructure: `el.addEventListener("click", handler);       // add
el.addEventListener("click", otherHandler);  // second one coexists!
el.removeEventListener("click", handler);    // remove by reference`,
  codeExample: `const btn = document.getElementById("save-btn");

function saveData() { console.log("Saving..."); }
function trackClick() { console.log("Analytics: save clicked"); }

btn.addEventListener("click", saveData);
btn.addEventListener("click", trackClick); // both run!

// Later, stop tracking:
btn.removeEventListener("click", trackClick);`,
  codeAnnotations: [
    { lineOrToken: 'btn.addEventListener("click", saveData);', description: "First listener attached." },
    { lineOrToken: 'btn.addEventListener("click", trackClick);', description: "Second listener — both fire on click." },
    { lineOrToken: 'btn.removeEventListener("click", trackClick);', description: "Needs the exact same function reference." }
  ],
  commonMistakes: [
    {
      wrong: "el.addEventListener('click', () => {...});\nel.removeEventListener('click', () => {...});  // fails!",
      correct: "Store the function in a variable to remove it later.",
      reason: "removeEventListener needs the identical function object — anonymous arrows can't be matched."
    }
  ],
  tryItYourself: {
    html: `<button id="btn">Click me</button>\n<p id="out"></p>`,
    js: `const out = document.getElementById("out");
function handlerA() { out.textContent += "A "; }
function handlerB() { out.textContent += "B "; }
const btn = document.getElementById("btn");
btn.addEventListener("click", handlerA);
btn.addEventListener("click", handlerB);`,
    instructions: "Click and see both A and B. Then remove handlerB."
  },
  takeaways: [
    "addEventListener allows multiple handlers per event.",
    "onclick assignment allows only one — it overwrites.",
    "removeEventListener needs the same function reference."
  ],
  quizQuestions: [
    { id: "js-listeners-1", question: "How is addEventListener better than onclick?", options: ["Multiple handlers can coexist", "It's shorter", "It works without JS", "No difference"], correctAnswerIndex: 0, explanation: "onclick assignment replaces; addEventListener stacks." },
    { id: "js-listeners-2", question: "What does removeEventListener need?", options: ["The exact same function reference", "Only the event name", "The element id", "Nothing"], correctAnswerIndex: 0, explanation: "It matches by function identity." }
  ]
};

// LESSON: Form Validation
export const jsFormValidationContent: LessonContent = {
  heroTagline: "Checking user input before it ever leaves the page",
  introduction: "Form validation checks inputs against rules — required fields, email format, password length, matching passwords — and shows clear errors. Validate on input for feedback and on submit as the final gate.",
  definition: {
    term: "Form validation",
    explanation: "Testing user-entered data against rules before accepting it. Client-side validation gives instant feedback; servers must always re-validate."
  },
  whyItMatters: "Bad data breaks apps and frustrates users. Instant, specific errors ('password needs 8+ characters') convert far better than a silent failure.",
  realWorldAnalogy: {
    title: "Understanding Form Validation",
    story: "A bouncer with a checklist: ID present? On the list? Dress code ok? Each failure gets a specific reason, not just 'no'.",
    comparison: [
      { item: "Per-field checks", meaning: "Checking each checklist item." },
      { item: "Specific messages", meaning: "Telling them exactly what's wrong." }
    ]
  },
  syntaxStructure: `if (password.length < 8) {
  showError("Password must be 8+ characters");
}`,
  codeExample: `function validateSignup(email, password, confirm) {
  const errors = [];
  if (!email.includes("@")) errors.push("Enter a valid email.");
  if (password.length < 8) errors.push("Password needs 8+ characters.");
  if (password !== confirm) errors.push("Passwords do not match.");
  return errors;
}

const problems = validateSignup("bad", "short", "different");
console.log(problems.length + " problems found");`,
  codeAnnotations: [
    { lineOrToken: "const errors = [];", description: "Collects every problem instead of stopping at the first." },
    { lineOrToken: 'if (password !== confirm)', description: "The classic confirm-password check." }
  ],
  commonMistakes: [
    {
      wrong: "Relying ONLY on JS validation — attackers bypass it!",
      correct: "JS validation is for UX; always re-validate on the server.",
      reason: "Client code can be skipped. Server validation is the real security."
    }
  ],
  tryItYourself: {
    html: `<input id="pw1" type="password" placeholder="Password">\n<input id="pw2" type="password" placeholder="Confirm">\n<button id="check">Validate</button>\n<p id="out"></p>`,
    js: `document.getElementById("check").addEventListener("click", () => {
  const a = document.getElementById("pw1").value;
  const b = document.getElementById("pw2").value;
  const out = document.getElementById("out");
  if (a.length < 8) out.textContent = "Too short (8+ needed)";
  else if (a !== b) out.textContent = "Passwords don't match";
  else { out.textContent = "Valid!"; out.style.color = "green"; }
});`,
    instructions: "Try short, mismatched, and valid passwords."
  },
  takeaways: [
    "Validate each rule and show specific error messages.",
    "Check live on input AND finally on submit.",
    "Client validation is UX; server validation is security."
  ],
  quizQuestions: [
    { id: "js-validation-1", question: "Why show specific error messages?", options: ["Users can fix exactly what's wrong", "It looks fancy", "It's required by HTML", "No reason"], correctAnswerIndex: 0, explanation: "Specific guidance converts better than generic failure." },
    { id: "js-validation-2", question: "Is client-side validation enough for security?", options: ["No — always re-validate on the server", "Yes", "Only for emails", "Only with HTTPS"], correctAnswerIndex: 0, explanation: "Client checks are bypassable; the server is the real gate." }
  ]
};

// LESSON: Interactive Forms
export const jsInteractiveFormsContent: LessonContent = {
  heroTagline: "Putting it all together: a live, validated, dynamic form",
  introduction: "Interactive forms combine everything: live input feedback, change-driven options, submit interception, and dynamic fields. This lesson builds a complete signup form the way real apps do.",
  definition: {
    term: "Interactive form",
    explanation: "A form that responds as the user types — live validation, conditional fields, dynamic summaries — instead of waiting for submission."
  },
  whyItMatters: "This is the capstone skill: every signup, checkout, and settings page works this way. Building one end-to-end proves you can ship real features.",
  realWorldAnalogy: {
    title: "Understanding Interactive Forms",
    story: "A helpful bank clerk watching you fill a form: 'that field needs a number', 'since you chose business, here's the tax ID box' — guidance in real time.",
    comparison: [
      { item: "Live validation", meaning: "The clerk checking each line as you write." },
      { item: "Conditional fields", meaning: "Handing you extra pages only when relevant." }
    ]
  },
  syntaxStructure: `// 1. input -> live feedback
// 2. change -> show/hide fields
// 3. submit -> preventDefault + final validation`,
  codeExample: `const planSelect = document.getElementById("plan");
const companyField = document.getElementById("company-field");

// Show company box only for business plan
planSelect.addEventListener("change", (e) => {
  companyField.style.display = e.target.value === "business" ? "block" : "none";
});

// Live password strength
document.getElementById("pw").addEventListener("input", (e) => {
  const strength = e.target.value.length >= 12 ? "Strong" : e.target.value.length >= 8 ? "OK" : "Weak";
  document.getElementById("strength").textContent = "Strength: " + strength;
});`,
  codeAnnotations: [
    { lineOrToken: 'e.target.value === "business" ? "block" : "none"', description: "Ternary toggles the extra field's visibility." },
    { lineOrToken: "addEventListener(\"input\", ...)", description: "Live feedback on every keystroke." }
  ],
  commonMistakes: [
    {
      wrong: "Validating only on submit — users discover 5 errors at once!",
      correct: "Validate live per field, then re-check everything on submit.",
      reason: "Early feedback prevents the frustrating error pile-up."
    }
  ],
  tryItYourself: {
    html: `<input id="username" placeholder="Username (3+ chars)">\n<p id="hint"></p>\n<button id="go">Continue</button>\n<p id="out"></p>`,
    js: `const userInput = document.getElementById("username");
const hint = document.getElementById("hint");
userInput.addEventListener("input", (e) => {
  const ok = e.target.value.length >= 3;
  hint.textContent = ok ? "Looks good!" : "Need 3+ characters";
  hint.style.color = ok ? "green" : "red";
});
document.getElementById("go").addEventListener("click", () => {
  document.getElementById("out").textContent =
    userInput.value.length >= 3 ? "Welcome, " + userInput.value + "!" : "Fix the username first.";
});`,
    instructions: "Type a short name, then a valid one, then click Continue."
  },
  takeaways: [
    "Combine input (live), change (choices), submit (final gate).",
    "Show/hide fields based on user choices.",
    "Live feedback plus submit validation = great UX."
  ],
  quizQuestions: [
    { id: "js-interactiveforms-1", question: "Which events power an interactive form?", options: ["input, change, and submit together", "Only submit", "Only click", "Only load"], correctAnswerIndex: 0, explanation: "Each handles a different interaction moment." },
    { id: "js-interactiveforms-2", question: "Why validate live AND on submit?", options: ["Live guides; submit catches anything missed", "It's required", "Double validation is faster", "No reason"], correctAnswerIndex: 0, explanation: "Live feedback helps; the submit check is the final safety net." }
  ]
};