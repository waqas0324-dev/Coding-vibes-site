import { LessonContent } from '../../types';

// LESSON: Objects (module 7 deep dive)
export const jsObjectsDeepContent: LessonContent = {
  heroTagline: "Working with objects like a pro: keys, values, entries",
  introduction: "You've met objects — now the **pro toolkit**. **`Object.keys()`**, **`Object.values()`**, **`Object.entries()`** inspect any object; **shorthand syntax** builds them fast; the **spread operator** copies and merges.\n\n**API responses are objects**. Forms produce objects. Config is objects. These utilities are how you handle them safely.",
  definition: {
    term: "Object utilities",
    explanation: "**Built-in object utilities**: `Object.keys/values/entries()` **inspect** an object's parts; **shorthand** `{ name }` builds objects from variables fast; **`{...obj}`** (spread) makes a **true copy** or merges objects."
  },
  whyItMatters: "**API responses are objects**. Forms produce objects. Config is objects. These utilities are how you **inspect, copy, and combine** them safely — daily professional work.",
  realWorldAnalogy: {
    title: "The Warehouse Audit",
    story: "A **warehouse inventory audit**: list all **box labels** (`Object.keys()`), list all **contents** (`Object.values()`), or list **label-content pairs** (`Object.entries()`). Three views, same warehouse. And **`{...obj}`**? That's **photocopying the manifest** before editing — because `=` only copies the **reference** (two people, one manifest — chaos!).",
    comparison: [
      { item: "Object.keys()", meaning: "The list of labels — every box name in the warehouse." },
      { item: "{...obj}", meaning: "Photocopying the manifest before editing — the original stays pristine." }
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
      reason: "**`=` copies the reference, not the object**! `let b = a` means two names, ONE object — change one, both change. Use **`{...a}`** (spread) for a real independent copy."
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
    "**`Object.keys/values/entries()`** inspect an object's parts.",
    "**`{...obj}`** makes a true **shallow copy** — photocopy the manifest!",
    "**Spread merges** objects and overrides duplicate keys."
  ],
  quizQuestions: [
    { id: "js-objectsdeep-1", question: "What does Object.keys({a:1, b:2}) return?", options: ["[\"a\", \"b\"]", "[1, 2]", "\"ab\"", "2"], correctAnswerIndex: 0, explanation: "Correct — **`keys()`** returns the property **names**. The list of labels." },
    { id: "js-objectsdeep-2", question: "Does const c = obj copy the object?", options: ["No — it copies the reference", "Yes, fully", "Only numbers", "It deletes obj"], correctAnswerIndex: 0, explanation: "Right — both variables point at the **same object**! Use **spread** for a real copy." }
  ]
};

// LESSON: Object Properties
export const jsObjectPropertiesContent: LessonContent = {
  heroTagline: "Reading, writing, and choosing dot vs bracket notation",
  introduction: "**Dot** or **brackets**? `user.name` is clean and fast — but what if the key has a **space**, or comes from a **variable**?\n\n**Bracket notation** (`user['full name']`, `user[field]`) handles everything dots can't: dynamic keys, spaces, special characters. Know both, use each where it shines.",
  definition: {
    term: "Object property access",
    explanation: "**Getting or setting** values on an object: **dot notation** (`user.name`) for simple known keys, **bracket notation** (`user['full name']`, `user[field]`) for dynamic or special keys. Assigning a new key **adds** the property; **`delete`** removes it."
  },
  whyItMatters: "**Dynamic keys are everywhere**: `user[field]`, `translations[lang]`, `settings[theme]`. Bracket notation **unlocks** them — without it, half of real-world object work is impossible.",
  realWorldAnalogy: {
    title: "Two Ways to Open a Locker",
    story: "**Two ways to open a locker**: your own key with the **number memorized** (dot notation — fast, for known names), or **reading the number off a slip of paper** (brackets — works for any name, even ones you didn't expect). Brackets win when keys are **dynamic** or have **spaces**.",
    comparison: [
      { item: "user.name", meaning: "Your memorized key — fast, for names you know." },
      { item: "user[key]", meaning: "Reading the number off a slip of paper — works for any name, even surprises." }
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
      reason: "**Dot notation needs valid identifiers**! `user.full name` is a syntax error. For spaces, special characters, or variables — **brackets** are mandatory."
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
    "**Dot** notation for known, simple keys; **brackets** for dynamic ones.",
    "**Assigning** a new key adds the property.",
    "**`delete obj.key`** removes a property."
  ],
  quizQuestions: [
    { id: "js-objprops-1", question: "When must you use brackets?", options: ["When the key is in a variable or has special characters", "Always", "Never", "Only for numbers"], correctAnswerIndex: 0, explanation: "Correct — **brackets evaluate** the key expression; dots need **literal** identifiers." },
    { id: "js-objprops-2", question: "How do you add a property?", options: ["obj.newKey = value", "obj + newKey", "add(obj, key)", "obj.push(key)"], correctAnswerIndex: 0, explanation: "Right — **assignment creates** the property if it doesn't exist. Lockers appear on demand!" }
  ]
};

// LESSON: Object Methods
export const jsObjectMethodsContent: LessonContent = {
  heroTagline: "Functions that live inside objects",
  introduction: "What if an object could **do things** — not just hold data? `car.start()`. `user.login()`. `cart.checkout()`.\n\nAn **object method** is a function stored as a property. Inside it, **`this`** refers to the object itself — so `this.fuel` reads the car's own fuel. Behavior + data, bundled.",
  definition: {
    term: "Object method",
    explanation: "A **function stored as an object's property**: `car.start()`. Called as `obj.method()`, it can access the object's **other properties** via **`this`** — which refers to the object itself."
  },
  whyItMatters: "Methods **bundle behavior with data**: `user.login()`, `cart.checkout()`, `player.jump()`. This is the **core idea behind objects** in every language — and the doorway to object-oriented thinking.",
  realWorldAnalogy: {
    title: "The TV Remote",
    story: "A **TV remote**: the buttons (**methods**) operate on **the TV itself** — `volumeUp()` changes **this** TV's volume, not some other one. Inside the method, **`this`** means 'the object I belong to'. Press the button, and the paired TV obeys.",
    comparison: [
      { item: "tv.volumeUp()", meaning: "Pressing the button on this remote — the action." },
      { item: "this.volume", meaning: "The TV the remote is paired with — whose volume changes." }
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
      reason: "**Detaching a method loses its `this`**! `const f = car.drive; f()` — now `this` isn't `car` anymore. Always **call it on the object**: `car.drive()`."
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
    "**Methods** are functions **stored in objects**.",
    "Inside a method, **`this`** is the object itself.",
    "**Call methods on the object**: `obj.method()`."
  ],
  quizQuestions: [
    { id: "js-objmethods-1", question: "What does this refer to inside car.drive()?", options: ["The car object", "The window", "Nothing", "The drive function"], correctAnswerIndex: 0, explanation: "Correct — when called as `car.drive()`, **`this`** is `car`. The paired TV." },
    { id: "js-objmethods-2", question: "How do you define a method?", options: ["As a function property: drive() { }", "With the method keyword", "Outside the object", "You cannot"], correctAnswerIndex: 0, explanation: "Right — methods are **function-valued properties** of the object. Buttons on the remote." }
  ]
};

// LESSON: Nested Objects
export const jsNestedObjectsContent: LessonContent = {
  heroTagline: "Objects inside objects — modeling real structures",
  introduction: "Real data **nests naturally**: a company has departments, which have employees, who have addresses. **Objects inside objects** model this perfectly.\n\nChain dots to **drill down**: `company.ceo.name`. And when a level might be missing, **`?.`** (optional chaining) stops safely instead of crashing.",
  definition: {
    term: "Nested object",
    explanation: "An **object used as the value** of another object's property: `user.address.city`. Access goes **level by level**, chaining dots (or brackets). Use **`?.`** (optional chaining) to safely read possibly-missing levels."
  },
  whyItMatters: "**API responses nest deeply**: `data.user.profile.avatar`. Reading nested structures is a **daily developer skill** — and optional chaining is the safety net pros never skip.",
  realWorldAnalogy: {
    title: "The Russian Nesting Dolls",
    story: "**Russian nesting dolls**: open the big doll to find a smaller one, open that to find another — each level reveals **more detail**. **Nested objects** work the same: `company.ceo.name` opens doll after doll until you reach the value. And **`?.`** is the careful opener that stops safely if a doll is missing.",
    comparison: [
      { item: "company.ceo", meaning: "Opening the big doll — the CEO object inside." },
      { item: "company.ceo.name", meaning: "Opening the next doll — the name inside the CEO." }
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
      reason: "**Drilling into a missing level crashes**! `user.address.city` throws if `address` is `undefined`. Use **`?.`** — `user.address?.city` — to stop safely with `undefined`."
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
    "**Objects nest** inside objects to model real structures.",
    "**Chain dots** to drill down: `a.b.c`.",
    "Use **`?.`** to safely read possibly-missing levels."
  ],
  quizQuestions: [
    { id: "js-nestedobj-1", question: "How do you read city in {a: {b: {city: \"X\"}}}?", options: ["obj.a.b.city", "obj.city", "obj[a][b][city]", "obj->a->b->city"], correctAnswerIndex: 0, explanation: "Correct — **drill level by level** with dots. Open each doll in turn." },
    { id: "js-nestedobj-2", question: "What does ?. do?", options: ["Stops safely on missing levels instead of crashing", "Deletes the property", "Makes it required", "Nothing"], correctAnswerIndex: 0, explanation: "Right — **optional chaining** returns `undefined` instead of throwing. The careful opener." }
  ]
};

// ============================================================
// MODULE 8: DOM (unique lessons)
// ============================================================

// LESSON: Selecting Elements
export const jsSelectingElementsContent: LessonContent = {
  heroTagline: "Grabbing page elements so JavaScript can work with them",
  introduction: "Before changing **anything**, you must **SELECT** it. Grab the wrong element and your code 'works' — on the wrong thing.\n\nJavaScript offers a **toolbox**: `getElementById`, `querySelector`, `querySelectorAll`, and more. This lesson maps each tool to its job.",
  definition: {
    term: "Element selection",
    explanation: "**Finding HTML elements** in the DOM and getting **references** to them, so code can read or change them. JavaScript offers **`getElementById`**, **`querySelector`**, **`querySelectorAll`**, and more — each suited to different jobs."
  },
  whyItMatters: "**Every DOM task starts with selection**. Picking the right method — id for one, selector for many — makes code **short and fast**. Wrong tool, clumsy code.",
  realWorldAnalogy: {
    title: "Calling Roll in Class",
    story: "**Calling roll in class**: by **student ID** (`getElementById` — one exact student), by '**everyone in row 2**' (`querySelectorAll` — the whole group), or '**the first volunteer**' (`querySelector` — first match). **Each method suits a different job** — this lesson maps the whole toolbox.",
    comparison: [
      { item: "getElementById", meaning: "Calling one student by ID — fastest, most precise." },
      { item: "querySelectorAll", meaning: "Calling a whole group by description — everyone matching." }
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
      reason: "`getElementById` takes the **raw id** — `'demo'`, not `'#demo'`! The `#` and `.` prefixes belong to **querySelector** syntax only."
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
    "**`getElementById`** is fastest for single elements by **id**.",
    "**`querySelector`** finds the **first** CSS-selector match.",
    "**`querySelectorAll`** returns **all** matches as a NodeList."
  ],
  quizQuestions: [
    { id: "js-selecting-1", question: "Which gets an element by its id?", options: ["document.getElementById(\"x\")", "document.querySelectorAll(\"x\")", "document.getClass(\"x\")", "document.find(\"x\")"], correctAnswerIndex: 0, explanation: "Correct — `getElementById` looks up the **unique id**. Passport control!" },
    { id: "js-selecting-2", question: "What does querySelectorAll return?", options: ["All matching elements", "Only the first", "A boolean", "The HTML text"], correctAnswerIndex: 0, explanation: "Right — it returns a **NodeList** of every match. The whole group." }
  ]
};

// LESSON: getElementById()
export const jsGetElementByIdContent: LessonContent = {
  heroTagline: "The fastest lookup — one element, one unique id",
  introduction: "Need **one specific element** — the login form, the cart total, the search box? If it has an **`id`**, `getElementById('demo')` finds it **instantly**.\n\nIDs are **unique per page**, so this always returns exactly one element (or `null`). It's the **oldest and fastest** selection method.",
  definition: {
    term: "getElementById()",
    explanation: "A **document method** returning the element with the given **id attribute** — or **`null`** if none exists. Pass the id **without** a `#` prefix. IDs must be **unique per page**, so this always returns **exactly one** element."
  },
  whyItMatters: "**Unique widgets** — `#login-form`, `#cart-total`, `#search-box` — are grabbed by id **thousands of times a day** across the web. It's the bread-and-butter lookup every developer uses constantly.",
  realWorldAnalogy: {
    title: "Passport Control",
    story: "**Passport control at immigration**: every traveler has a **unique passport number** — no two alike. The officer types it and gets **exactly one person**, instantly. **`getElementById`** is that officer: one unique id, one exact element, zero confusion.",
    comparison: [
      { item: "The id attribute", meaning: "The passport number — unique per element, no duplicates allowed." },
      { item: "getElementById", meaning: "The officer typing the number — instant, exact match." }
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
      reason: "**No `#` prefix**! `getElementById('#demo')` finds nothing — the `#` belongs to **querySelector** syntax. Just pass the raw id: `'demo'`."
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
    "**IDs must be unique** — one element per id, like passport numbers.",
    "Pass the id **without `#`**.",
    "Returns **`null`** if missing — check before using!"
  ],
  quizQuestions: [
    { id: "js-getid-1", question: "What does getElementById(\"demo\") return?", options: ["The element with id=\"demo\"", "All elements", "The first div", "A string"], correctAnswerIndex: 0, explanation: "Correct — it returns the **single matching element**, or `null` if missing." },
    { id: "js-getid-2", question: "Why is getElementById(\"#demo\") wrong?", options: ["No # prefix is used with getElementById", "# is required", "IDs can't have letters", "It works fine"], correctAnswerIndex: 0, explanation: "Right — pass the **raw id**; `#` belongs to `querySelector`, not here." }
  ]
};

// LESSON: querySelector()
export const jsQuerySelectorContent: LessonContent = {
  heroTagline: "CSS selectors meet JavaScript — find anything",
  introduction: "**`querySelector('.card')`** finds the **FIRST** element matching any CSS selector — classes, ids, tags, attributes, even `'ul li a'`.\n\nHere's the beautiful part: **if you know CSS selectors, you already know this method**. Same language, new superpower.",
  definition: {
    term: "querySelector()",
    explanation: "A **document/element method** returning the **first** element matching a **CSS selector** string — or `null`. Accepts **any valid CSS selector**: classes, ids, tags, attributes, even `'ul li a'`."
  },
  whyItMatters: "Real pages need **flexible lookups**: 'the submit button inside this form', 'the first error message'. `querySelector` **speaks the CSS you already know** — zero new syntax to learn.",
  realWorldAnalogy: {
    title: "Asking the Librarian",
    story: "Asking a **librarian**: 'the **first red book** on shelf 3' — a **description** that pinpoints exactly one item. **`querySelector`** takes any **CSS selector** as that description and returns the **first match**. If you know CSS selectors, you already know this method.",
    comparison: [
      { item: "'.card'", meaning: "'The first book with a red cover' — a description pinpointing one item." },
      { item: "'#menu a'", meaning: "'The first link inside the menu' — a description with a location." }
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
      reason: "`querySelector` uses **real CSS syntax**: `.` for class, `#` for id! `querySelector('card')` looks for a `<card>` tag — you probably meant `'.card'`."
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
    "**`querySelector`** takes **any CSS selector**.",
    "It returns only the **FIRST** match (or `null`).",
    "Remember **`.`** for classes and **`#`** for ids."
  ],
  quizQuestions: [
    { id: "js-qs-1", question: "What does querySelector(\".item\") return?", options: ["The first element with class item", "All items", "The last item", "A number"], correctAnswerIndex: 0, explanation: "Correct — `querySelector` returns the **first match only**. The first red book, not all of them." },
    { id: "js-qs-2", question: "Which selects the first link inside #nav?", options: ["querySelector(\"#nav a\")", "querySelector(\"nav\")", "getElementById(\"a\")", "querySelector(\"a#nav\")"], correctAnswerIndex: 0, explanation: "Right — `'#nav a'` is the **CSS descendant selector**: links inside #nav." }
  ]
};

// LESSON: querySelectorAll()
export const jsQuerySelectorAllContent: LessonContent = {
  heroTagline: "Grab EVERY match and loop over them",
  introduction: "Need to style **every** card? Validate **every** input? Attach handlers to **every** button? Selecting one-by-one is madness.\n\n**`querySelectorAll('li')`** returns **ALL** matches as a **NodeList** — then loop it with `forEach` or `for...of`. Bulk operations in two lines.",
  definition: {
    term: "querySelectorAll()",
    explanation: "Returns a **static NodeList** of **all** elements matching a CSS selector: `querySelectorAll('li')`. **Loop** over it with `forEach`, `for...of`, or **spread** it into a real array for `map`/`filter`."
  },
  whyItMatters: "**Bulk operations** define real UIs: highlight all errors, disable all buttons, count all items. `querySelectorAll` + a loop does them in **two lines** — it's the backbone of dynamic pages.",
  realWorldAnalogy: {
    title: "Everyone Wearing Blue, Stand Up",
    story: "The teacher says '**everyone wearing blue, stand up**' — the **whole matching group** acts at once. **`querySelectorAll`** is that announcement: it grabs **EVERY** match as a **NodeList**, and then you loop them with `forEach` — each one standing up in turn.",
    comparison: [
      { item: "querySelectorAll('.blue')", meaning: "Identifying everyone wearing blue — the whole group." },
      { item: ".forEach(...)", meaning: "Each of them standing up in turn — bulk action, one by one." }
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
      reason: "A **NodeList is NOT a real array** — no `push`, no `map`! Spread it first: `[...document.querySelectorAll('li')]` — then the array methods work."
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
    "**`querySelectorAll`** returns **every** match as a NodeList.",
    "**Loop** it with `forEach` or `for...of`.",
    "It's **not a real array** — spread it if you need array methods."
  ],
  quizQuestions: [
    { id: "js-qsa-1", question: "What does querySelectorAll return?", options: ["A NodeList of all matches", "One element", "A string", "A boolean"], correctAnswerIndex: 0, explanation: "Correct — **every match** is collected into a NodeList. The whole blue-shirt group." },
    { id: "js-qsa-2", question: "Can you call .map() directly on a NodeList?", options: ["No — convert to an array first", "Yes", "Only in Chrome", "Only with one item"], correctAnswerIndex: 0, explanation: "Right — NodeLists **lack array methods**; spread `[...]` to convert." }
  ]
};

// LESSON: Changing Text
export const jsChangingTextContent: LessonContent = {
  heroTagline: "Update words on the page with textContent",
  introduction: "Live counters, form feedback, chat messages, scores — most dynamic pages are just **text updates** happening constantly.\n\n**`textContent`** sets an element's **plain text**: `el.textContent = 'Hello'`. It's **safe** (no HTML is parsed) and **fast** — the standard way to update words on a page.",
  definition: {
    term: "textContent",
    explanation: "A **property** that gets or sets an element's **plain text**: `el.textContent = 'Hello'`. Assigned text is treated as **pure characters** — tags are **not** parsed, which makes it **safe** for user content."
  },
  whyItMatters: "**Live counters**, form feedback, chat messages, scores — most dynamic pages are just `textContent` updates happening **constantly**. It's the workhorse behind live UIs.",
  realWorldAnalogy: {
    title: "The Scoreboard Operator",
    story: "A **scoreboard operator**: when the score changes, she types the **new digits** — the board's wiring stays untouched. **`textContent`** is that operator: it updates the **words** without touching the **structure**. Safe, fast, and exactly what most updates need.",
    comparison: [
      { item: "textContent =", meaning: "Typing new digits on the board — the wiring stays untouched." },
      { item: "innerHTML =", meaning: "Rewiring the board — powerful, but risky with strangers' input." }
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
      reason: "`textContent` **never parses HTML** — `<b>Hi</b>` shows literally as text. That's not a bug, it's the **safety feature**! For real markup, use `innerHTML` (with trusted content only)."
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
    "**`textContent`** sets plain text — tags are **not** parsed.",
    "It's the **safe default** for user-provided content.",
    "**Read it back** to get an element's current text."
  ],
  quizQuestions: [
    { id: "js-changetext-1", question: "What does el.textContent = \"<b>Hi</b>\" display?", options: ["The literal text <b>Hi</b>", "Bold Hi", "Nothing", "An error"], correctAnswerIndex: 0, explanation: "Correct — `textContent` treats **everything as plain text**. Tags show literally." },
    { id: "js-changetext-2", question: "Why prefer textContent for user input?", options: ["It can't inject HTML/scripts", "It's slower", "It looks better", "No reason"], correctAnswerIndex: 0, explanation: "Right — **unparsed text** can't smuggle in scripts, which prevents **XSS** injection attacks." }
  ]
};

// LESSON: Changing HTML
export const jsChangingHtmlContent: LessonContent = {
  heroTagline: "Rewrite an element's inner markup with innerHTML",
  introduction: "Need to render a **whole list** of products? A set of cards? Rebuilding them with `createElement` one by one is tedious.\n\n**`innerHTML`** lets you set an element's **entire inner markup** in one line: `el.innerHTML = '<b>Hi</b>'` renders real HTML. Powerful — but **never** use it with untrusted user input.",
  definition: {
    term: "innerHTML",
    explanation: "A property that **gets or sets** an element's **inner HTML markup**: `el.innerHTML = '<b>Hi</b>'` renders real bold text. Assigned strings are **parsed as HTML**, creating live elements — powerful for templates, dangerous with untrusted input."
  },
  whyItMatters: "Rendering **lists, cards, and search results** means building HTML from data. `innerHTML` turns a template string into **live page content** in one line — it's how dynamic pages get built fast.",
  realWorldAnalogy: {
    title: "Redesigning the Shop Window",
    story: "A **shop window display**: `textContent` just swaps the **price tags** (text only). **`innerHTML`** rebuilds the **entire arrangement** — new shelves, new signs, new everything. Total creative power — but you'd never let a **stranger** rearrange your shop (untrusted input = XSS risk).",
    comparison: [
      { item: "textContent", meaning: "Changing price tags — text only, safe and simple." },
      { item: "innerHTML", meaning: "Redesigning the whole window — full markup, powerful but risky." }
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
      reason: "**Parsed HTML from users can inject malicious scripts** (XSS)! `innerHTML` is for **your** templates only — user content goes through the safe `textContent`."
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
    "**`innerHTML`** parses strings as **real HTML** — full redesign power.",
    "**Build the full string**, then assign once — better performance.",
    "**Never** put untrusted user input into `innerHTML`."
  ],
  quizQuestions: [
    { id: "js-changehtml-1", question: "What does innerHTML do with \"<b>Hi</b>\"?", options: ["Renders bold Hi", "Shows literal text", "Deletes the element", "Nothing"], correctAnswerIndex: 0, explanation: "Correct — `innerHTML` **parses** the string as real markup. Tags become elements." },
    { id: "js-changehtml-2", question: "Why avoid innerHTML with user input?", options: ["XSS — injected scripts could run", "It's too slow", "It doesn't work", "It deletes data"], correctAnswerIndex: 0, explanation: "Right — **parsed user HTML** can contain malicious scripts. That's XSS — never do it." }
  ]
};

// LESSON: Changing Styles
export const jsChangingStylesContent: LessonContent = {
  heroTagline: "Restyle elements live with the style property",
  introduction: "Want a field's border to turn **red** the instant input is invalid? Toggle **dark mode** with one click? That's **`element.style`** — CSS controlled directly from JavaScript.\n\nStyle names become **camelCase** (`backgroundColor`), and it's perfect for **instant visual feedback**.",
  definition: {
    term: "style property",
    explanation: "An **object on every element** mirroring inline CSS: setting `element.style.color` applies that rule **directly**. Hyphenated CSS becomes **camelCase** (`backgroundColor`, `fontSize`) — and **units are required** (`'20px'`, not `20`)."
  },
  whyItMatters: "**Interactive feedback is visual**: red borders on bad input, green on success, dark mode toggles. The `style` property **wires logic to looks** — it's how code paints.",
  realWorldAnalogy: {
    title: "The Painter's Remote Brush",
    story: "A **painter with a remote brush**: your code says 'wall, turn blue' and the wall **repaints instantly** — no ladder, no rollers. That's `element.style`: **direct orders** from JavaScript to CSS. (For bigger makeovers, `classList` theme-swaps are tidier.)",
    comparison: [
      { item: "el.style.color", meaning: "Pointing the remote brush at the wall's paint — direct and instant." },
      { item: "classList", meaning: "Swapping the whole room's theme instead — often cleaner for big changes." }
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
      reason: "**Hyphenated CSS becomes camelCase** in JavaScript! `background-color` becomes `backgroundColor`. And include **units**: `'20px'`, not bare `20`."
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
    "**`element.style`** applies CSS directly from JS — the remote brush.",
    "**Hyphenated** CSS becomes **camelCase**: `backgroundColor`.",
    "Include **units**: `'20px'`, not `20`."
  ],
  quizQuestions: [
    { id: "js-changestyle-1", question: "How do you set background-color in JS?", options: ["el.style.backgroundColor", "el.style.background-color", "el.backgroundColor", "el.css.color"], correctAnswerIndex: 0, explanation: "Correct — CSS names become **camelCase** on the style object. `font-size` becomes `fontSize`." },
    { id: "js-changestyle-2", question: "What unit issue should you watch?", options: ["Sizes need units like px", "Colors need units", "No units ever", "Only % works"], correctAnswerIndex: 0, explanation: "Right — `fontSize = '20px'`. A bare `20` has no units, so **nothing applies**." }
  ]
};

// LESSON: Creating Elements
export const jsCreatingElementsContent: LessonContent = {
  heroTagline: "Build brand-new HTML from JavaScript",
  introduction: "Chats, comments, feeds, todo lists — dynamic apps **create content on the fly** without reloading.\n\nThe safe pattern has **two steps**: **`createElement`** builds the node in memory, **`appendChild`** attaches it to the page. Build it, configure it, then place it.",
  definition: {
    term: "createElement() / appendChild()",
    explanation: "**`document.createElement('li')`** builds a **new element in memory** — invisible until attached. Set its text and attributes, then **`appendChild()`** inserts it as the parent's **last child**. The safe two-step way to add content."
  },
  whyItMatters: "Dynamic apps **create content on the fly** — new chat messages, todo items, search results. This two-step pattern is the **safe** way to do it (unlike `innerHTML`, no parsing risks).",
  realWorldAnalogy: {
    title: "Assemble, Then Place",
    story: "**Building furniture, then placing it**: you **assemble the chair** in the workshop (`createElement` — it exists in memory), then **carry it into the room** (`appendChild` — now it's on the page). Skip the second step and you've built invisible furniture!",
    comparison: [
      { item: "createElement", meaning: "Assembling the chair in the workshop — it exists, but nobody can sit on it yet." },
      { item: "appendChild", meaning: "Carrying it into the room — now it's part of the house." }
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
      reason: "A created element lives in **memory only** until attached! Forgetting `appendChild` is the number-one 'why is nothing showing?!' bug — you built the chair but left it in the workshop."
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
    "**`createElement`** builds a node in **memory** — invisible at first.",
    "**Configure it** (text, classes) before attaching.",
    "**`appendChild`** places it as the parent's **last child**."
  ],
  quizQuestions: [
    { id: "js-createel-1", question: "What does document.createElement(\"p\") do?", options: ["Builds a new <p> in memory", "Adds it to the page", "Deletes paragraphs", "Finds paragraphs"], correctAnswerIndex: 0, explanation: "Correct — it **constructs the node**; you must **attach it separately**. Workshop, then room." },
    { id: "js-createel-2", question: "How do you make a created element visible?", options: ["appendChild() it to a parent", "It appears automatically", "Call show()", "Refresh the page"], correctAnswerIndex: 0, explanation: "Right — **attachment** inserts it into the **live document**. Now it's visible!" }
  ]
};

// LESSON: Removing Elements
export const jsRemovingElementsContent: LessonContent = {
  heroTagline: "Delete elements with remove()",
  introduction: "Completed todos, closed popups, dismissed notifications — UIs **constantly discard** things.\n\n**`element.remove()`** deletes an element from the page **instantly** — no parent reference needed. One line, gone. (Its children go with it.)",
  definition: {
    term: "remove()",
    explanation: "A **method on any element** that **detaches it from the DOM** — deleting it from the page along with **its children**. The modern one-liner: `element.remove()`. (The variable still exists; it's just detached.)"
  },
  whyItMatters: "UIs **constantly discard** things: completed todos, closed popups, old alerts. `remove()` is the **one-line delete** — simple, clean, everywhere.",
  realWorldAnalogy: {
    title: "Tearing a Page From the Notebook",
    story: "**Tearing a page from a notebook**: the page — and **everything written on it** — is gone in one motion. **`element.remove()`** works the same: the element and **all its children** vanish from the page instantly. No parent needed, no ceremony.",
    comparison: [
      { item: "el.remove()", meaning: "Tearing out the page — one motion, gone." },
      { item: "Its children", meaning: "The writing on the page — goes with it, automatically." }
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
      reason: "`remove()` **doesn't destroy the variable** — it just detaches the node! The element still exists in memory; it's simply not on the page anymore."
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
    "**`element.remove()`** deletes it from the page — torn out.",
    "**Children** are removed along with it.",
    "The **variable still exists** — it's just detached."
  ],
  quizQuestions: [
    { id: "js-removeel-1", question: "What does el.remove() do?", options: ["Deletes the element from the page", "Hides it temporarily", "Empties its text", "Disables it"], correctAnswerIndex: 0, explanation: "Correct — `remove` **detaches the node** from the DOM. Page torn out." },
    { id: "js-removeel-2", question: "Do you need the parent to remove a child?", options: ["No — el.remove() works directly", "Yes, always", "Only for divs", "Only in forms"], correctAnswerIndex: 0, explanation: "Right — modern `remove()` needs **no parent reference**. One line, done." }
  ]
};

// LESSON: Classes
export const jsClassesContent: LessonContent = {
  heroTagline: "Toggle CSS classes with classList",
  introduction: "Active tabs, open menus, dark mode, error states — all are **class switches**. Instead of writing raw styles from JS, the pro move is **`classList`**.\n\n**`add`**, **`remove`**, **`toggle`** — design stays in **CSS**, logic just flips switches. Clean separation, happy developers.",
  definition: {
    term: "classList",
    explanation: "An **object on every element** for managing its **CSS classes**: `classList.add('active')`, `.remove('active')`, `.toggle('active')`, `.contains('active')`. The **professional** way to change appearance — design stays in CSS, JS only flips switches."
  },
  whyItMatters: "**Active tabs**, open menus, **dark mode**, error states — all are class switches. `classList` is the **professional** way to change appearance, and it's in every modern codebase.",
  realWorldAnalogy: {
    title: "Switches for Room Moods",
    story: "**Light switches for room moods**: flip '**party**' on, '**work**' off — the **wiring** (CSS) stays exactly as it was; only the **switches** change. **`classList`** is that switch panel: `add`, `remove`, `toggle` — design stays in CSS, logic just flips switches.",
    comparison: [
      { item: "classList.toggle('dark')", meaning: "Flipping the dark-mode switch — one move, whole theme changes." },
      { item: "Inline styles", meaning: "Rewiring the room by hand each time — tedious and messy." }
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
      reason: "`classList` takes the **raw class name** — `'active'`, not `'.active'`! Dots are **querySelector** syntax; `classList` wants the plain name."
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
    "**`classList.add/remove/toggle`** manage CSS classes — the switch panel.",
    "Keep **design in CSS**; let JS only **switch classes**.",
    "**No dots** in class names passed to `classList`."
  ],
  quizQuestions: [
    { id: "js-classes-1", question: "What does classList.toggle(\"open\") do?", options: ["Adds it if missing, removes it if present", "Always adds", "Always removes", "Deletes the element"], correctAnswerIndex: 0, explanation: "Correct — **`toggle`** flips the class state. On becomes off, off becomes on." },
    { id: "js-classes-2", question: "Why prefer classList over inline styles?", options: ["Design stays in CSS; JS only switches state", "It's faster to type", "Inline styles don't work", "No reason"], correctAnswerIndex: 0, explanation: "Right — **separation of concerns**: CSS owns looks, JS owns logic. `classList` is the bridge." }
  ]
};

// LESSON: Attributes
export const jsAttributesContent: LessonContent = {
  heroTagline: "Read and change HTML attributes with get/setAttribute",
  introduction: "Every HTML element wears **name tags** — `src` on images, `href` on links, `disabled` on buttons. JavaScript can **read** them, **rewrite** them, and **peel them off**.\n\n**`getAttribute`** reads, **`setAttribute`** writes, **`removeAttribute`** deletes. It's the control panel of HTML.",
  definition: {
    term: "Attribute methods",
    explanation: "**Reading and writing HTML attributes**: `getAttribute(name)` reads, `setAttribute(name, value)` writes, `removeAttribute(name)` deletes, `hasAttribute(name)` checks. Attributes are the **control panel** of elements — images, links, inputs, `data-*`."
  },
  whyItMatters: "**Swapping images**, enabling buttons, updating links, storing `data-*` values — attributes are the **control panel** of HTML elements. Dynamic UIs constantly tweak them.",
  realWorldAnalogy: {
    title: "Conference Name Tags",
    story: "**Conference name tags**: read someone's tag (`get`), write a new one (`set`), peel one off (`remove`). **Attributes** are an element's name tags — `src`, `href`, `disabled`, `data-*` — and JavaScript can read, rewrite, or peel them at will.",
    comparison: [
      { item: "getAttribute('src')", meaning: "Reading the name tag — 'who are you?'" },
      { item: "setAttribute('src', ...)", meaning: "Writing a new name tag — 'you are now this.'" }
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
      reason: "**Attributes** are the HTML markup; **properties** are the live JS object. They're usually synced — but for `data-*`, use `dataset` or the attribute methods."
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
    "**`getAttribute`** reads, **`setAttribute`** writes, **`removeAttribute`** deletes.",
    "Use them for **`src`**, **`href`**, **`disabled`**, and **`data-*`** attributes.",
    "Standard attributes also have simpler **property shortcuts** (`img.src`)."
  ],
  quizQuestions: [
    { id: "js-attrs-1", question: "How do you change an image's source?", options: ["img.setAttribute(\"src\", \"new.png\")", "img.change(\"src\")", "img.srcAttribute = \"new.png\"", "setSrc(img)"], correctAnswerIndex: 0, explanation: "Correct — `setAttribute` **writes** the attribute value. New name tag, written." },
    { id: "js-attrs-2", question: "What does removeAttribute(\"disabled\") do?", options: ["Enables the element", "Deletes the element", "Hides it", "Nothing"], correctAnswerIndex: 0, explanation: "Right — removing **`disabled`** re-enables the control. Tag peeled off!" }
  ]
};

// ============================================================
// MODULE 9: Events and Forms (unique lessons)
// ============================================================

// LESSON: What are Events?
export const jsEventsWhatContent: LessonContent = {
  heroTagline: "Things that happen — clicks, keys, loads — and how code hears them",
  introduction: "Something **happens**: a click, a keypress, a page load, a form submit. JavaScript **listens** for these moments and runs your function when they occur.\n\nThese somethings are called **events** — and they are the **entire reason** JavaScript exists in the browser. No events, no interactivity.",
  definition: {
    term: "Event",
    explanation: "A **signal that something happened** in the browser — user actions (**click**, **input**, keypress) or browser actions (**load**, **resize**). Code **reacts** by listening with `addEventListener(eventName, handler)`."
  },
  whyItMatters: "Without events, pages would be **static posters**. Events are the **entire reason** JavaScript exists in the browser — every interactive thing you've ever loved started as an event.",
  realWorldAnalogy: {
    title: "The Doorbell System",
    story: "A **doorbell**: the press (**event**) rings the bell, **you** (the listener, set up with `addEventListener`) hear it, and **walking to the door** (the handler) is your response. Three parts, one beautiful system — and it's what makes pages **interactive** instead of static posters.",
    comparison: [
      { item: "The event", meaning: "Someone pressing the doorbell — the signal." },
      { item: "The listener", meaning: "You, waiting to hear it — addEventListener." },
      { item: "The handler", meaning: "Walking to the door — your response function running." }
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
      reason: "Event names have **no 'on' prefix** in `addEventListener`! It's **`'click'`**, not `'onclick'`. The 'on' belongs to old HTML attributes only."
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
    "**Events** signal that something happened — the doorbell press.",
    "**`addEventListener(eventName, handler)`** listens for them.",
    "Event names have **no 'on' prefix**: `'click'`, not `'onclick'`."
  ],
  quizQuestions: [
    { id: "js-eventswhat-1", question: "What is an event?", options: ["A signal that something happened", "A type of variable", "An HTML tag", "A CSS rule"], correctAnswerIndex: 0, explanation: "Correct — events **notify code** about clicks, keys, loads, and more. The doorbell ringing." },
    { id: "js-eventswhat-2", question: "What is wrong with addEventListener(\"onclick\", ...)?", options: ["The name should be \"click\"", "Nothing", "Missing handler", "Wrong quotes"], correctAnswerIndex: 0, explanation: "Right — `addEventListener` uses **bare names** without the 'on' prefix: `'click'`, not `'onclick'`." }
  ]
};

// LESSON: Click Event
export const jsClickEventContent: LessonContent = {
  heroTagline: "The most-used event: responding to clicks",
  introduction: "The **most-used event** in all of web development: the **click**. Buttons, tabs, likes, carts, modals — nearly every interaction starts with a press.\n\nAttach it with **`addEventListener('click', ...)`** and your function runs **once per click**. Master this and you can build most UI behavior.",
  definition: {
    term: "click event",
    explanation: "The **event fired** when a user **clicks** (or taps) an element — one handler run per **press-and-release**. Attached with `addEventListener('click', ...)`, it's the **backbone of interactivity**."
  },
  whyItMatters: "**Buttons, tabs, likes, carts, modals** — nearly every interaction starts with a click. Master it and you can build **most UI behavior** there is. This one event carries the whole interactive web.",
  realWorldAnalogy: {
    title: "The Elevator Button",
    story: "An **elevator button**: pressing it does nothing by itself — the magic is the **wiring** (handler) that brings the elevator. The **click event** is the press; **your function** is the elevator arriving. Buttons, likes, carts, modals — nearly every interaction starts here.",
    comparison: [
      { item: "The press", meaning: "The physical click — the signal." },
      { item: "The handler", meaning: "The elevator arriving — your coded response to the signal." }
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
      reason: "**Parentheses call NOW** — `handleClick()` runs immediately! Pass the **reference** (`handleClick`, no parentheses) so it runs **on click**."
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
    "**`click`** fires once per **press-and-release**.",
    "Pass the **handler reference** — no parentheses!",
    "**Update data first**, then reflect it in the UI."
  ],
  quizQuestions: [
    { id: "js-click-1", question: "When does a click handler run?", options: ["Once per user click", "Continuously", "On page load", "Never"], correctAnswerIndex: 0, explanation: "Correct — **each click** triggers exactly **one** handler execution." },
    { id: "js-click-2", question: "Why is addEventListener(\"click\", fn()) wrong?", options: ["It calls fn immediately instead of on click", "Nothing is wrong", "fn is undefined", "Clicks are banned"], correctAnswerIndex: 0, explanation: "Right — `()` invokes **now**; the bare reference **defers** until the event fires." }
  ]
};

// LESSON: Input Event
export const jsInputEventContent: LessonContent = {
  heroTagline: "React to every keystroke as the user types",
  introduction: "Want **live search** suggestions as the user types? A **password strength meter** that updates per letter? A **character counter**?\n\nThe **`input`** event fires on **every single change** — each keystroke, paste, deletion. Read `event.target.value` and react instantly.",
  definition: {
    term: "input event",
    explanation: "An event fired on **EVERY change** to a field — each **keystroke**, paste, or deletion. The handler reads the fresh value via **`event.target.value`**. The engine behind **live search** and character counters."
  },
  whyItMatters: "**Live search suggestions**, password strength meters, and character counters all need **per-keystroke updates** — that's the `input` event. It's what makes forms feel alive.",
  realWorldAnalogy: {
    title: "The Live Scoreboard",
    story: "A **live scoreboard** at a match: every goal updates the display **instantly** — nobody waits for halftime. The **`input`** event is that scoreboard: **every keystroke**, every paste, every deletion fires it immediately. Read `event.target.value` for the fresh text.",
    comparison: [
      { item: "Each keystroke", meaning: "Each goal scored — the moment it happens." },
      { item: "The handler", meaning: "The scoreboard updating live — no waiting for halftime." }
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
      reason: "**`change` fires on blur** (when the field loses focus); **`input` fires on every change**. For live feedback you want `input` — `change` will feel broken and laggy."
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
    "**`input`** fires on **every** keystroke, paste, and deletion.",
    "**`event.target.value`** holds the current text.",
    "Use **`input`** for live feedback; **`change`** for on-blur."
  ],
  quizQuestions: [
    { id: "js-input-1", question: "When does the input event fire?", options: ["On every value change", "Only on blur", "On page load", "Once per session"], correctAnswerIndex: 0, explanation: "Correct — **every keystroke**, paste, or cut triggers it. The scoreboard never sleeps." },
    { id: "js-input-2", question: "How do you read the typed text?", options: ["event.target.value", "event.text", "input.text", "event.key always"], correctAnswerIndex: 0, explanation: "Right — **`target`** is the field; **`value`** is its current content. The dynamic duo." }
  ]
};

// LESSON: Change Event
export const jsChangeEventContent: LessonContent = {
  heroTagline: "React when the user finishes and moves on",
  introduction: "Not every change deserves a **live** reaction. Sometimes you want the **final answer** — the committed choice.\n\nThe **`change`** event fires when a value is **committed**: text inputs on blur, dropdowns and checkboxes the moment you pick. 'Done deciding? Now react.'",
  definition: {
    term: "change event",
    explanation: "An event fired when a form control's value is **committed**: text fields on **blur** (leaving the field), dropdowns/checkboxes/radios **immediately** on selection. It's for '**final answer**' reactions — not per-keystroke ones."
  },
  whyItMatters: "**Shipping options**, quantity selectors, theme pickers, file uploads — `change` is the right event for **discrete choices**. Using `input` here would fire wastefully on every keystroke.",
  realWorldAnalogy: {
    title: "Thinking Aloud vs the Ballot Box",
    story: "**Thinking aloud vs submitting a ballot**: `input` is thinking aloud — every word, live. **`change`** is dropping the **ballot in the box** — the final, committed choice. Text inputs commit on **blur**; dropdowns and checkboxes commit **the moment** you pick.",
    comparison: [
      { item: "input", meaning: "Thinking aloud — every keystroke, live." },
      { item: "change", meaning: "Dropping the ballot in the box — the committed, final choice." }
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
      reason: "`change` means '**committed**', not 'typed'! For per-keystroke reactions use **`input`**; for final-choice reactions use **`change`**."
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
    "**`change`** fires on **committed** values, not keystrokes.",
    "**Dropdowns**, **checkboxes**, and **radios** fire it on selection.",
    "**Text inputs** fire it when the field **loses focus**."
  ],
  quizQuestions: [
    { id: "js-change-1", question: "When does change fire on a text input?", options: ["When it loses focus after editing", "On every keystroke", "On page load", "Never"], correctAnswerIndex: 0, explanation: "Correct — `change` = **committed value**, which for text means **blur**." },
    { id: "js-change-2", question: "Which control fires change immediately on choice?", options: ["A <select> dropdown", "A text input per keystroke", "A div", "A paragraph"], correctAnswerIndex: 0, explanation: "Right — **selects** commit the moment an option is picked. Ballot dropped!" }
  ]
};

// LESSON: Submit Event
export const jsSubmitEventContent: LessonContent = {
  heroTagline: "Intercepting form submission before the page reloads",
  introduction: "Logins, signups, checkouts, contact forms — every important form needs **JS validation before sending**.\n\nThe **`submit`** event fires on form submission, and **`event.preventDefault()`** stops the **page reload** — so your code can validate, give feedback, and send data itself. The foundation of modern forms.",
  definition: {
    term: "submit event",
    explanation: "An event fired on a **`<form>`** when submitted (button click or **Enter**). **`event.preventDefault()`** cancels the browser's default **reload** behavior — letting JavaScript validate and send the data itself."
  },
  whyItMatters: "**Logins, signups, checkouts, contact forms** — all need JS validation before sending. `submit` + `preventDefault` makes that possible. It's the foundation **every modern form** stands on.",
  realWorldAnalogy: {
    title: "The Mailroom Checkpoint",
    story: "A **mailroom checkpoint**: every outgoing letter (**submit**) is **inspected** (validated) before posting — bad ones return to sender. **`event.preventDefault()`** is the inspector holding the letter: it **stops the page reload** so JavaScript can validate, process, and send the data itself.",
    comparison: [
      { item: "The submit", meaning: "Dropping the letter in the outgoing box — it's leaving!" },
      { item: "preventDefault()", meaning: "Holding the letter for inspection first — validation before posting." }
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
      reason: "The browser's **default** is a **full page reload** — wiping your JavaScript state! Forget `preventDefault()` and your lovingly-built validation vanishes with the refresh."
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
    "**`submit`** fires on form submission.",
    "**`preventDefault()`** stops the page reload.",
    "**Validate**, give feedback, then process the data."
  ],
  quizQuestions: [
    { id: "js-submit-1", question: "What does event.preventDefault() do in a submit handler?", options: ["Stops the page reload", "Submits twice", "Clears the form", "Closes the browser"], correctAnswerIndex: 0, explanation: "Correct — it **cancels** the browser's default form submission. Letter held for inspection!" },
    { id: "js-submit-2", question: "What happens if you forget preventDefault?", options: ["The page reloads, wiping your JS updates", "Nothing", "The form breaks", "An error throws"], correctAnswerIndex: 0, explanation: "Right — **default submission reloads the page**. That's why we intercept it." }
  ]
};

// LESSON: Keyboard Events
export const jsKeyboardEventsContent: LessonContent = {
  heroTagline: "Hearing every key: keydown, keyup, and keypress",
  introduction: "**Enter** to submit. **Escape** to close. **Arrow keys** to move. **Ctrl+S** to save. Keyboard shortcuts make apps feel **professional**.\n\nKeyboard events fire on **keydown** (pressed) and **keyup** (released), and **`event.key`** tells you WHICH key — `'Enter'`, `'Escape'`, `'a'`.",
  definition: {
    term: "Keyboard events",
    explanation: "**Events for keyboard activity**: **`keydown`** when pressed, **`keyup`** when released. **`event.key`** identifies the key (`'Enter'`, `'Escape'`); `event.code` identifies the **physical** key. Avoid the deprecated `keyCode`."
  },
  whyItMatters: "**Enter-to-submit**, Escape-to-close, arrow-key games, Ctrl+S shortcuts — **keyboard handling** makes apps feel professional. Power users (and gamers) will love you.",
  realWorldAnalogy: {
    title: "The Piano Keys",
    story: "A **piano**: pressing a key (**keydown**) makes the note, releasing it (**keyup**) stops it — and you always know **WHICH** key was touched. Keyboard events work the same: **`event.key`** names the key (`'Enter'`, `'Escape'`, `'a'`), so your code can play the right note.",
    comparison: [
      { item: "keydown", meaning: "The hammer striking — the press moment." },
      { item: "event.key", meaning: "Which piano key was touched — 'Enter', 'a', 'Escape'." }
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
      reason: "**`keyCode` is deprecated** — those magic numbers (13, 27) are unreadable! Use **`event.key`** (`'Enter'`, `'a'`, `'Escape'`) — the modern, readable way."
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
    "**`keydown`** fires on press; **`keyup`** on release.",
    "**`event.key`** names the key: `'Enter'`, `'Escape'`, `'a'`.",
    "Avoid deprecated **`keyCode`** — use `event.key`."
  ],
  quizQuestions: [
    { id: "js-keyboard-1", question: "How do you detect the Enter key?", options: ["event.key === \"Enter\"", "event.key === 13", "event.enter", "keyCode.Enter"], correctAnswerIndex: 0, explanation: "Correct — **`event.key`** gives the key's name as a **string**: `'Enter'`, `'a'`, `'Escape'`." },
    { id: "js-keyboard-2", question: "What is the difference between keydown and keyup?", options: ["keydown = pressed, keyup = released", "No difference", "keyup = pressed", "keydown never fires"], correctAnswerIndex: 0, explanation: "Right — they mark the **two moments** of a key press: down and up." }
  ]
};

// LESSON: Mouse Events
export const jsMouseEventsContent: LessonContent = {
  heroTagline: "Beyond clicks: hover, move, and right-click",
  introduction: "Clicks are just the beginning. The mouse also **hovers**, **moves**, **presses**, **double-clicks**, and **right-clicks** — and JavaScript hears them all.\n\nThese events build **tooltips**, **drag-and-drop**, **drawing apps**, and **custom right-click menus**. Time to go beyond the click.",
  definition: {
    term: "Mouse events",
    explanation: "**Events for pointer activity**: **`mouseover`/`mouseout`** for entering/leaving, **`mousemove`** for tracking position, **`mousedown`/`mouseup`** for press states, plus **`dblclick`** and **`contextmenu`** (right-click)."
  },
  whyItMatters: "**Hover previews**, drag sliders, drawing canvases, custom right-click menus — **rich interfaces** live on mouse events. This is what separates basic pages from delightful ones.",
  realWorldAnalogy: {
    title: "The Motion-Sensor Porch Light",
    story: "A **motion-sensor porch light**: approaching (**mouseover**) turns it on, leaving (**mouseout**) turns it off, walking around (**mousemove**) keeps it tracking. The mouse fires a whole **family** of events — hover, move, press, double-click, right-click — each a different sensor.",
    comparison: [
      { item: "mouseover", meaning: "Stepping onto the porch — the light turns on." },
      { item: "mouseout", meaning: "Stepping off the porch — the light turns off." },
      { item: "mousemove", meaning: "Pacing on the porch — constant tracking updates." }
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
      reason: "**`mousemove` floods your handler** — dozens of events per second! Expensive work there causes **lag and jank**. Keep `mousemove` handlers feather-light."
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
    "**`mouseover`/`out`** track entering and leaving.",
    "**`mousemove`** fires constantly — keep handlers **light**.",
    "**`dblclick`** and **`contextmenu`** cover double-click and right-click."
  ],
  quizQuestions: [
    { id: "js-mouse-1", question: "Which event fires when the pointer enters an element?", options: ["mouseover", "mouseout", "mouseclick", "mouseleave-up"], correctAnswerIndex: 0, explanation: "Correct — **`mouseover`** fires on entry; **`mouseout`** on exit. On the porch, off the porch." },
    { id: "js-mouse-2", question: "Why keep mousemove handlers tiny?", options: ["It fires very frequently", "It never fires", "It's deprecated", "No reason"], correctAnswerIndex: 0, explanation: "Right — **dozens of events per second**! Heavy work in there causes jank." }
  ]
};

// LESSON: Event Listeners
export const jsEventListenersContent: LessonContent = {
  heroTagline: "addEventListener done right: options, removal, and the event object",
  introduction: "`onclick = myFunc` works — but it allows only **ONE** handler. Assign another and the first is **silently deleted**.\n\n**`addEventListener`** is the modern way: **multiple handlers** per element, **removable** listeners, and access to the **event object**. Libraries, analytics, and your code can all listen peacefully.",
  definition: {
    term: "addEventListener()",
    explanation: "The **standard method** to attach event handlers: `addEventListener(type, handler)`. **Multiple listeners** can coexist on one element and event; **`removeEventListener`** detaches them (needs the **same function reference**)."
  },
  whyItMatters: "**Libraries, analytics, and your own code** all listen to the same buttons. `addEventListener` lets everyone **coexist**; `onclick` would clobber the others. It's the teamwork-friendly choice.",
  realWorldAnalogy: {
    title: "The Conference PA System",
    story: "A **conference PA system**: the announcement plays, and **everyone** with an earpiece hears it. `addEventListener` hands out **unlimited earpieces** — many handlers, one event, nobody deleted. But `onclick =` is **one shared earpiece** — the last grabber wins and earlier listeners go silent.",
    comparison: [
      { item: "addEventListener", meaning: "Handing out another earpiece — everyone hears the announcement." },
      { item: "onclick =", meaning: "One shared earpiece — the last grabber wins, others go silent." }
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
      reason: "`removeEventListener` needs the **identical function object**! Anonymous arrows (`() => {...}`) can't be matched later — **name your function** if you plan to remove it."
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
    "**`addEventListener`** allows **multiple handlers** per event.",
    "**`onclick`** assignment allows only **one** — it overwrites.",
    "**`removeEventListener`** needs the same function reference."
  ],
  quizQuestions: [
    { id: "js-listeners-1", question: "How is addEventListener better than onclick?", options: ["Multiple handlers can coexist", "It's shorter", "It works without JS", "No difference"], correctAnswerIndex: 0, explanation: "Correct — `onclick` assignment **replaces**; `addEventListener` **stacks**. PA system vs shared earpiece." },
    { id: "js-listeners-2", question: "What does removeEventListener need?", options: ["The exact same function reference", "Only the event name", "The element id", "Nothing"], correctAnswerIndex: 0, explanation: "Right — it matches by **function identity**. Same object in, same object out." }
  ]
};

// LESSON: Form Validation
export const jsFormValidationContent: LessonContent = {
  heroTagline: "Checking user input before it ever leaves the page",
  introduction: "Nothing frustrates users like a form that **silently fails** — or accepts garbage that breaks everything later.\n\n**Form validation** checks inputs against rules — required fields, email format, password length — and shows **clear, specific errors**. Validate **live on input** for feedback, and **on submit** as the final gate.",
  definition: {
    term: "Form validation",
    explanation: "**Testing user-entered data against rules** before accepting it: required fields, email format, password length, matching passwords. **Client-side** validation gives **instant feedback**; the **server must always re-validate** (client checks are bypassable)."
  },
  whyItMatters: "**Bad data breaks apps** and frustrates users. Instant, specific errors ('password needs 8+ characters') **convert far better** than silent failures — validation directly impacts signups and sales.",
  realWorldAnalogy: {
    title: "The Bouncer's Checklist",
    story: "A **bouncer with a checklist**: ID present? On the list? Dress code OK? Each failure gets a **specific reason** — 'you need ID' — not just a grunt. **Form validation** is that bouncer: every rule checked, every failure explained clearly.",
    comparison: [
      { item: "Per-field checks", meaning: "Checking each checklist item — ID, list, dress code." },
      { item: "Specific messages", meaning: "Telling them exactly what's wrong — not just 'no'." }
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
      reason: "**Client validation is UX, not security** — anyone can bypass it! The **server must re-validate everything**. Client checks are the friendly bouncer; the server is the vault door."
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
    "**Validate each rule** and show **specific** error messages.",
    "Check **live on input** AND finally **on submit**.",
    "**Client validation is UX**; **server validation is security**."
  ],
  quizQuestions: [
    { id: "js-validation-1", question: "Why show specific error messages?", options: ["Users can fix exactly what's wrong", "It looks fancy", "It's required by HTML", "No reason"], correctAnswerIndex: 0, explanation: "Correct — **specific guidance** ('password needs 8+ characters') converts far better than a generic 'error'." },
    { id: "js-validation-2", question: "Is client-side validation enough for security?", options: ["No — always re-validate on the server", "Yes", "Only for emails", "Only with HTTPS"], correctAnswerIndex: 0, explanation: "Right — **client checks are bypassable**; the server is the **real gate**. Always re-validate there." }
  ]
};

// LESSON: Interactive Forms
export const jsInteractiveFormsContent: LessonContent = {
  heroTagline: "Putting it all together: a live, validated, dynamic form",
  introduction: "This is the **capstone**: a form that **validates live**, shows/hides fields based on choices, and intercepts submit — the way **real apps** do it.\n\n**Interactive forms** combine everything you've learned: `input` for live feedback, `change` for choices, `submit` for the final gate. Build one end-to-end and you've proven you can ship real features.",
  definition: {
    term: "Interactive form",
    explanation: "A **form that responds as the user types** — live validation, conditional fields, dynamic summaries — instead of waiting for submission. It combines **`input`** (live), **`change`** (choices), and **`submit`** (final gate)."
  },
  whyItMatters: "This is the **capstone skill**: every signup, checkout, and settings page works this way. Building one **end-to-end** proves you can ship real features — it's portfolio gold.",
  realWorldAnalogy: {
    title: "The Helpful Bank Clerk",
    story: "A **helpful bank clerk** watching you fill a form: 'that field needs a number', 'since you chose business, here's the tax ID box', 'all good — sign here'. **Interactive forms** are that clerk: **live validation**, **conditional fields**, **dynamic summaries** — guidance in real time, not a rejection at the end.",
    comparison: [
      { item: "Live validation", meaning: "The clerk checking each line as you write — instant corrections." },
      { item: "Conditional fields", meaning: "Handing you extra pages only when relevant — 'since you chose business, here's the tax ID box.'" }
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
      reason: "**Early feedback prevents the frustrating error pile-up**! Validating only on submit means users face 10 errors at once. Guide them live — it's kinder and converts better."
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
    "Combine **`input`** (live), **`change`** (choices), **`submit`** (final gate).",
    "**Show/hide fields** based on user choices.",
    "**Live feedback** plus submit validation = great UX."
  ],
  quizQuestions: [
    { id: "js-interactiveforms-1", question: "Which events power an interactive form?", options: ["input, change, and submit together", "Only submit", "Only click", "Only load"], correctAnswerIndex: 0, explanation: "Correct — **each event handles a different moment**: `input` (live), `change` (choices), `submit` (final gate)." },
    { id: "js-interactiveforms-2", question: "Why validate live AND on submit?", options: ["Live guides; submit catches anything missed", "It's required", "Double validation is faster", "No reason"], correctAnswerIndex: 0, explanation: "Right — **live feedback helps** users fix as they go; the **submit check** is the final safety net." }
  ]
};
