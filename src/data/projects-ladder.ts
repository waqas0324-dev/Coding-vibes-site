import { Project } from '../types';

/**
 * The Coding Vibes Project Ladder — 10 new projects from beginner to fullstack.
 * Wired into the HTML course (3) and the JavaScript course (7).
 * Every starterFiles bundle is complete and runnable: open index.html in a browser.
 */
export const ladderProjects: Project[] = [
  // ---------------------------------------------------------------
  // 1. Personal Profile Card (HTML/CSS — Beginner)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-profile-card',
    title: 'Personal Profile Card',
    slug: 'personal-profile-card',
    category: 'html',
    difficulty: 'Beginner',
    description: 'Design a beautiful personal profile card with a photo placeholder, name, bio, and social links — the classic first real CSS project.',
    skills: ['Semantic HTML', 'CSS Flexbox', 'Border Radius', 'Box Shadows', 'Hover Effects'],
    requirements: [
      'Circular photo placeholder at the top of the card',
      'Name, job title, and a short bio',
      'Three social link buttons (GitHub, Twitter, LinkedIn)',
      'Card centered on the page with a shadow and rounded corners',
    ],
    instructions: [
      'Build the HTML skeleton: a <div class="card"> with an image placeholder, <h2> name, <p> title and bio, and a row of <a> social links',
      'Style the card: give it a width, padding, border-radius, and box-shadow so it floats on the page',
      'Make the photo a perfect circle with border-radius: 50% and object-fit: cover',
      'Add a hover effect on the social buttons (color change) using the :hover selector',
    ],
    estimatedTime: '1-2 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Profile Card</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- The whole card lives in one div -->
  <div class="card">
    <!-- Photo placeholder: replace the src with your own photo later -->
    <img src="https://placehold.co/120x120" alt="Profile photo" class="photo">
    <h2>Waqas Ashraf</h2>
    <p class="title">Web Developer</p>
    <p class="bio">I build simple and clean websites with HTML, CSS and JavaScript.</p>
    <!-- Social links -->
    <div class="socials">
      <a href="#">GitHub</a>
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
    </div>
  </div>
</body>
</html>`,
      css: `/* Page background + center the card with flexbox */
body {
  font-family: Arial, sans-serif;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

/* The card itself */
.card {
  background: white;
  width: 300px;
  padding: 30px;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Circular photo */
.photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4f46e5;
}

.title {
  color: #4f46e5;
  font-weight: bold;
  margin: 5px 0;
}

.bio {
  color: #555;
  font-size: 14px;
}

/* Social buttons in a flex row */
.socials {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.socials a {
  text-decoration: none;
  color: white;
  background: #4f46e5;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 13px;
}

/* Hover effect on buttons */
.socials a:hover {
  background: #3730a3;
}`,
    },
  },
  // ---------------------------------------------------------------
  // 2. Landing Page (HTML/CSS — Beginner)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-landing-page',
    title: 'Landing Page',
    slug: 'landing-page',
    category: 'html',
    difficulty: 'Beginner',
    description: 'Build a product landing page with a hero section, a features grid, a call-to-action button, and a footer — like real startup websites.',
    skills: ['HTML Sections', 'CSS Grid', 'Responsive Design', 'Call-to-Action Design', 'Footer Layout'],
    requirements: [
      'Hero section with a headline, subtext, and CTA button',
      'Features grid with 3 feature cards',
      'A second CTA section encouraging signup',
      'Footer with copyright text',
    ],
    instructions: [
      'Structure the page with semantic tags: <header>, <section class="hero">, <section class="features">, <section class="cta">, <footer>',
      'Style the hero: big headline, centered text, gradient or solid background, and a bold CTA button',
      'Lay out the 3 features with CSS Grid (grid-template-columns: repeat(3, 1fr)) so they sit side by side',
      'Make it responsive: add a media query that stacks the features in one column on small screens',
    ],
    estimatedTime: '2-3 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TaskFlow — Get Things Done</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Top navigation bar -->
  <header class="navbar">
    <strong>TaskFlow</strong>
    <nav>
      <a href="#features">Features</a>
      <a href="#signup">Sign Up</a>
    </nav>
  </header>

  <!-- Hero: the first thing visitors see -->
  <section class="hero">
    <h1>Organize your life with TaskFlow</h1>
    <p>The simplest way to manage tasks, projects, and deadlines.</p>
    <a href="#signup" class="btn">Get Started Free</a>
  </section>

  <!-- Features grid: 3 cards side by side -->
  <section id="features" class="features">
    <h2>Why TaskFlow?</h2>
    <div class="grid">
      <div class="feature-card">
        <h3>Fast</h3>
        <p>Add a task in under 2 seconds with quick capture.</p>
      </div>
      <div class="feature-card">
        <h3>Smart</h3>
        <p>Automatic reminders keep you on track every day.</p>
      </div>
      <div class="feature-card">
        <h3>Free</h3>
        <p>The core plan is free forever. No credit card needed.</p>
      </div>
    </div>
  </section>

  <!-- Call to action -->
  <section id="signup" class="cta">
    <h2>Ready to get organized?</h2>
    <a href="#" class="btn">Create Your Account</a>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2026 TaskFlow. All rights reserved.</p>
  </footer>

</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  color: #333;
}

/* Navbar: logo left, links right */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.navbar a {
  margin-left: 20px;
  text-decoration: none;
  color: #4f46e5;
}

/* Hero section */
.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #4f46e5, #818cf8);
  color: white;
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

/* Reusable CTA button */
.btn {
  display: inline-block;
  background: white;
  color: #4f46e5;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
}

.btn:hover {
  background: #eef;
}

/* Features grid: 3 columns */
.features {
  text-align: center;
  padding: 60px 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 30px auto 0;
}

.feature-card {
  background: #f8f8ff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 25px;
}

/* Call to action band */
.cta {
  text-align: center;
  padding: 60px 20px;
  background: #1e1b4b;
  color: white;
}

.cta .btn {
  background: #4f46e5;
  color: white;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  background: #111;
  color: #aaa;
  font-size: 14px;
}

/* Responsive: stack the features on phones */
@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .hero h1 {
    font-size: 30px;
  }
}`,
    },
  },
  // ---------------------------------------------------------------
  // 3. Photo Gallery (HTML/CSS — Beginner)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-photo-gallery',
    title: 'Photo Gallery',
    slug: 'photo-gallery',
    category: 'html',
    difficulty: 'Beginner',
    description: 'Create a responsive photo gallery with smooth hover effects and a lightbox-style preview that opens when you click a photo.',
    skills: ['CSS Grid', 'Hover Transitions', 'Responsive Images', 'Lightbox Modal', 'CSS Transforms'],
    requirements: [
      'Grid of 6 photos that adapts to screen size',
      'Hover effect: photo zooms slightly and shows a caption',
      'Clicking a photo opens a fullscreen preview (lightbox)',
      'Close button (and Esc key) hides the preview',
    ],
    instructions: [
      'Create the grid with display: grid and grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) so columns auto-fit',
      'Add hover styles: transform: scale(1.05) on the image and a caption that fades in with opacity transition',
      'Build the lightbox as a fixed, hidden div that covers the screen; show it with a class when a photo is clicked',
      'Write JS: click a thumbnail -> copy its src into the lightbox image -> add the "show" class; close button/Esc removes the class',
    ],
    estimatedTime: '2-3 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Photo Gallery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>My Photo Gallery</h1>
  <p class="hint">Click any photo to view it fullscreen.</p>

  <!-- Photo grid: each figure is one gallery item -->
  <div class="gallery">
    <figure class="item"><img src="https://placehold.co/400x300/4f46e5/white?text=Photo+1" alt="Photo 1"><figcaption>Mountain View</figcaption></figure>
    <figure class="item"><img src="https://placehold.co/400x300/059669/white?text=Photo+2" alt="Photo 2"><figcaption>Green Valley</figcaption></figure>
    <figure class="item"><img src="https://placehold.co/400x300/dc2626/white?text=Photo+3" alt="Photo 3"><figcaption>Sunset</figcaption></figure>
    <figure class="item"><img src="https://placehold.co/400x300/d97706/white?text=Photo+4" alt="Photo 4"><figcaption>Desert</figcaption></figure>
    <figure class="item"><img src="https://placehold.co/400x300/7c3aed/white?text=Photo+5" alt="Photo 5"><figcaption>City Lights</figcaption></figure>
    <figure class="item"><img src="https://placehold.co/400x300/0891b2/white?text=Photo+6" alt="Photo 6"><figcaption>Ocean</figcaption></figure>
  </div>

  <!-- Lightbox: hidden fullscreen preview, filled by JavaScript -->
  <div id="lightbox" class="lightbox">
    <span id="closeBtn" class="close">&times;</span>
    <img id="lightboxImg" src="" alt="Fullscreen preview">
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  background: #111827;
  color: white;
  text-align: center;
  margin: 0;
  padding: 20px;
}

.hint {
  color: #9ca3af;
}

/* Responsive grid: columns shrink/grow automatically */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  max-width: 1000px;
  margin: 20px auto;
}

.item {
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
}

.item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

/* Hover: zoom the photo */
.item:hover img {
  transform: scale(1.08);
}

/* Caption slides up on hover */
.item figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 8px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.item:hover figcaption {
  opacity: 1;
}

/* Lightbox: hidden overlay */
.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}

/* Shown when JS adds the "show" class */
.lightbox.show {
  display: flex;
}

.lightbox img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 8px;
}

.close {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}`,
      js: `// Get the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// When a gallery photo is clicked, open it in the lightbox
document.querySelectorAll('.item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;      // copy the clicked photo
    lightbox.classList.add('show'); // make the overlay visible
  });
});

// Close with the X button
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

// Close with the Esc key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('show');
  }
});`,
    },
  },
  // ---------------------------------------------------------------
  // 4. Calculator (JavaScript — Intermediate)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-calculator',
    title: 'Calculator',
    slug: 'calculator',
    category: 'javascript',
    difficulty: 'Intermediate',
    description: 'Build a fully working calculator with add, subtract, multiply, divide, decimals, clear, and keyboard input support.',
    skills: ['DOM Events', 'State Management', 'Error Handling', 'Keyboard Input', 'String Parsing'],
    requirements: [
      'Number buttons 0-9, operators + - * /, decimal point, = and C (clear)',
      'Correct order: press 7 + 3 = shows 10',
      'Keyboard support: type numbers/operators and press Enter',
      'Show "Error" when dividing by zero instead of crashing',
    ],
    instructions: [
      'Keep three state variables: currentInput (string of digits being typed), previousInput, and operator',
      'On number click: append the digit to currentInput and update the display; allow only one decimal point',
      'On operator click: store currentInput as previousInput, store the operator, and clear currentInput for the next number',
      'On "=": convert both inputs with parseFloat, run a calculate() function, show the result, and reset state. On division by zero, display "Error".',
    ],
    estimatedTime: '3-4 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="calculator">
    <!-- Display shows current input / result -->
    <div id="display" class="display">0</div>
    <div class="buttons">
      <button class="clear">C</button>
      <button data-op="/">/</button>
      <button data-op="*">*</button>
      <button data-op="-">-</button>
      <button data-num="7">7</button>
      <button data-num="8">8</button>
      <button data-num="9">9</button>
      <button data-op="+" class="tall">+</button>
      <button data-num="4">4</button>
      <button data-num="5">5</button>
      <button data-num="6">6</button>
      <button data-num="1">1</button>
      <button data-num="2">2</button>
      <button data-num="3">3</button>
      <button data-num="0" class="wide">0</button>
      <button data-num=".">.</button>
      <button id="equals">=</button>
    </div>
  </div>
  <p class="hint">Tip: you can also use your keyboard!</p>
  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  background: #1e293b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}

.calculator {
  background: #0f172a;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.display {
  background: #020617;
  color: #4ade80;
  font-size: 36px;
  text-align: right;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  min-height: 45px;
  overflow: hidden;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 70px);
  gap: 10px;
}

button {
  font-size: 20px;
  padding: 18px 0;
  border: none;
  border-radius: 10px;
  background: #334155;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #475569;
}

/* Zero button spans 2 columns, + spans 2 rows */
.wide { grid-column: span 2; }
.tall { grid-row: span 2; }

.clear {
  background: #dc2626;
}

.clear:hover {
  background: #b91c1c;
}

#equals {
  background: #4f46e5;
  grid-column: span 2;
}

#equals:hover {
  background: #4338ca;
}

.hint {
  color: #94a3b8;
  margin-top: 15px;
}`,
      js: `// --- State: what the calculator remembers ---
let currentInput = '';   // digits being typed right now
let previousInput = '';  // the number stored before an operator
let operator = '';       // the chosen operator (+, -, *, /)

const display = document.getElementById('display');

function updateDisplay() {
  // Show current input, or previous input, or 0
  display.textContent = currentInput || previousInput || '0';
}

// --- Number buttons (0-9 and .) ---
document.querySelectorAll('[data-num]').forEach(btn => {
  btn.addEventListener('click', () => appendNumber(btn.dataset.num));
});

function appendNumber(num) {
  if (num === '.' && currentInput.includes('.')) return; // one decimal only
  currentInput += num;
  updateDisplay();
}

// --- Operator buttons (+, -, *, /) ---
document.querySelectorAll('[data-op]').forEach(btn => {
  btn.addEventListener('click', () => chooseOperator(btn.dataset.op));
});

function chooseOperator(op) {
  if (currentInput === '') return; // nothing typed yet
  if (previousInput !== '') calculate(); // chain: 2 + 3 + ... = works
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// --- Equals: do the math ---
function calculate() {
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);
  if (isNaN(a) || isNaN(b)) return;

  let result;
  if (operator === '+') result = a + b;
  else if (operator === '-') result = a - b;
  else if (operator === '*') result = a * b;
  else if (operator === '/') {
    if (b === 0) {
      display.textContent = 'Error'; // no crashing on divide-by-zero
      currentInput = ''; previousInput = ''; operator = '';
      return;
    }
    result = a / b;
  }

  // Round long decimals (e.g. 0.1 + 0.2)
  result = Math.round(result * 100000000) / 100000000;
  currentInput = String(result);
  previousInput = '';
  operator = '';
  updateDisplay();
}

document.getElementById('equals').addEventListener('click', calculate);

// --- Clear button ---
document.querySelector('.clear').addEventListener('click', () => {
  currentInput = ''; previousInput = ''; operator = '';
  updateDisplay();
});

// --- Keyboard support ---
document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9' || e.key === '.') {
    appendNumber(e.key);
  } else if (['+', '-', '*', '/'].includes(e.key)) {
    chooseOperator(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calculate();
  } else if (e.key === 'Escape') {
    currentInput = ''; previousInput = ''; operator = '';
    updateDisplay();
  }
});`,
    },
  },
  // ---------------------------------------------------------------
  // 5. Stopwatch / Timer (JavaScript — Intermediate)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-stopwatch',
    title: 'Stopwatch / Timer',
    slug: 'stopwatch-timer',
    category: 'javascript',
    difficulty: 'Intermediate',
    description: 'Build a stopwatch with start, stop, reset, and lap times — with millisecond precision and a clean formatted display.',
    skills: ['setInterval', 'DOM Updates', 'Time Formatting', 'Lap Recording', 'State Flags'],
    requirements: [
      'Start, Stop, and Reset buttons',
      'Display shows minutes:seconds.milliseconds (00:00.00)',
      'Lap button records the current time in a list',
      'Start button disabled while running (no double intervals)',
    ],
    instructions: [
      'Track startTime (Date.now() at start) and elapsed (total ms counted); use setInterval every 10ms to update',
      'Compute display time = elapsed + (running ? Date.now() - startTime : 0), then format with padStart',
      'Use a boolean "running" flag so Start does nothing while already running',
      'Lap: push the formatted time into an array and render each lap as a new <li>',
    ],
    estimatedTime: '2-3 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Stopwatch</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="stopwatch">
    <h1>Stopwatch</h1>
    <!-- The time display -->
    <div id="time" class="time">00:00.00</div>
    <!-- Controls -->
    <div class="controls">
      <button id="startBtn" class="start">Start</button>
      <button id="stopBtn" class="stop">Stop</button>
      <button id="lapBtn" class="lap">Lap</button>
      <button id="resetBtn" class="reset">Reset</button>
    </div>
    <!-- Lap times appear here -->
    <ul id="laps" class="laps"></ul>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: 'Courier New', monospace;
  background: #0f172a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.stopwatch {
  text-align: center;
  background: #1e293b;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.time {
  font-size: 56px;
  margin: 20px 0;
  color: #4ade80;
  letter-spacing: 2px;
}

.controls {
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 12px 22px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
}

.start { background: #16a34a; }
.stop { background: #dc2626; }
.lap { background: #4f46e5; }
.reset { background: #64748b; }

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.laps {
  list-style: none;
  padding: 0;
  margin-top: 25px;
  max-height: 160px;
  overflow-y: auto;
  text-align: left;
}

.laps li {
  background: #334155;
  margin: 6px 0;
  padding: 8px 14px;
  border-radius: 6px;
}`,
      js: `// --- State ---
let startTime = 0;   // timestamp when the timer last started
let elapsed = 0;     // total milliseconds counted so far
let timerId = null;  // the setInterval id
let running = false; // is the stopwatch currently running?
let lapCount = 0;

const timeDisplay = document.getElementById('time');
const lapsList = document.getElementById('laps');
const startBtn = document.getElementById('startBtn');

// Format milliseconds as MM:SS.ms
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const millis = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
  return \`\${minutes}:\${seconds}.\${millis}\`;
}

// Update the display (runs every 10ms)
function tick() {
  const now = Date.now();
  timeDisplay.textContent = formatTime(elapsed + (now - startTime));
}

// Start: remember now, then tick every 10ms
startBtn.addEventListener('click', () => {
  if (running) return; // already running -> do nothing
  running = true;
  startBtn.disabled = true;
  startTime = Date.now();
  timerId = setInterval(tick, 10);
});

// Stop: freeze the count
document.getElementById('stopBtn').addEventListener('click', () => {
  if (!running) return;
  running = false;
  startBtn.disabled = false;
  elapsed += Date.now() - startTime; // save counted time
  clearInterval(timerId);
});

// Lap: record the current time in the list
document.getElementById('lapBtn').addEventListener('click', () => {
  if (!running) return;
  lapCount++;
  const li = document.createElement('li');
  li.textContent = \`Lap \${lapCount}: \${timeDisplay.textContent}\`;
  lapsList.prepend(li); // newest lap on top
});

// Reset: zero everything
document.getElementById('resetBtn').addEventListener('click', () => {
  running = false;
  startBtn.disabled = false;
  clearInterval(timerId);
  elapsed = 0;
  lapCount = 0;
  timeDisplay.textContent = '00:00.00';
  lapsList.innerHTML = '';
});`,
    },
  },
  // ---------------------------------------------------------------
  // 6. E-commerce Product Page (JavaScript — Advanced)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-product-page',
    title: 'E-commerce Product Page',
    slug: 'ecommerce-product-page',
    category: 'javascript',
    difficulty: 'Advanced',
    description: 'Build a realistic product page: image gallery with thumbnails, size and color selectors, quantity picker, and a live cart counter with price calculation.',
    skills: ['State Management', 'Dynamic Rendering', 'Event Delegation', 'Price Calculation', 'Cart Logic'],
    requirements: [
      'Main image + 3 clickable thumbnails that swap the main image',
      'Size selector (S / M / L / XL) and color selector (red, blue, black)',
      'Quantity stepper (+ / -) with a live total price',
      'Add to Cart button updates the cart counter badge',
    ],
    instructions: [
      'Keep one state object: { image, size, color, quantity, cartCount } — everything on the page renders from this state',
      'Thumbnails: use event delegation on the thumbnail container — one listener reads the clicked thumbnail\'s data-src',
      'Size/color buttons: remove the "selected" class from all, add it to the clicked one, update state',
      'Quantity +/-: clamp between 1 and 10; total = price * quantity; Add to Cart adds quantity to cartCount and updates the badge',
    ],
    estimatedTime: '4-5 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Classic Hoodie — Shop</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Top bar with cart counter -->
  <header>
    <strong>MyShop</strong>
    <div class="cart">Cart <span id="cartCount" class="badge">0</span></div>
  </header>

  <main class="product">
    <!-- Left: image gallery -->
    <div class="gallery">
      <img id="mainImage" src="https://placehold.co/500x500/4f46e5/white?text=Hoodie+Front" alt="Product">
      <div id="thumbnails" class="thumbs">
        <img src="https://placehold.co/500x500/4f46e5/white?text=Hoodie+Front" alt="Front view" class="selected">
        <img src="https://placehold.co/500x500/3730a3/white?text=Hoodie+Back" alt="Back view">
        <img src="https://placehold.co/500x500/818cf8/white?text=Hoodie+Detail" alt="Detail view">
      </div>
    </div>

    <!-- Right: product info + selectors -->
    <div class="info">
      <h1>Classic Hoodie</h1>
      <p class="price">$<span id="unitPrice">49</span></p>
      <p>Soft, warm, and built to last. Perfect for winter days.</p>

      <h3>Size</h3>
      <div id="sizes" class="options">
        <button data-size="S">S</button>
        <button data-size="M" class="selected">M</button>
        <button data-size="L">L</button>
        <button data-size="XL">XL</button>
      </div>

      <h3>Color</h3>
      <div id="colors" class="options">
        <button data-color="Blue" class="color selected" style="background:#4f46e5"></button>
        <button data-color="Red" class="color" style="background:#dc2626"></button>
        <button data-color="Black" class="color" style="background:#111827"></button>
      </div>

      <h3>Quantity</h3>
      <div class="qty">
        <button id="minus">-</button>
        <span id="qtyValue">1</span>
        <button id="plus">+</button>
      </div>

      <p class="total">Total: $<span id="totalPrice">49</span></p>
      <button id="addToCart" class="add-btn">Add to Cart</button>
      <p id="message" class="message"></p>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f8fafc;
  color: #1e293b;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  font-size: 18px;
}

.badge {
  background: #4f46e5;
  color: white;
  border-radius: 50%;
  padding: 2px 9px;
  font-size: 14px;
}

.product {
  display: flex;
  gap: 40px;
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 20px;
}

.gallery {
  flex: 1;
}

.gallery img#mainImage {
  width: 100%;
  border-radius: 12px;
}

.thumbs {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.thumbs img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
}

.thumbs img.selected {
  border-color: #4f46e5;
}

.info {
  flex: 1;
}

.price {
  font-size: 26px;
  font-weight: bold;
  color: #4f46e5;
}

.options {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.options button {
  padding: 10px 18px;
  border: 2px solid #cbd5e1;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
}

.options button.selected {
  border-color: #4f46e5;
  background: #eef2ff;
  font-weight: bold;
}

.color {
  width: 40px !important;
  height: 40px !important;
  padding: 0 !important;
  border-radius: 50% !important;
}

.qty {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
}

.qty button {
  width: 40px;
  height: 40px;
  font-size: 20px;
  border: 1px solid #cbd5e1;
  background: white;
  border-radius: 8px;
  cursor: pointer;
}

.total {
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
}

.add-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 17px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}

.add-btn:hover {
  background: #4338ca;
}

.message {
  color: #16a34a;
  font-weight: bold;
  min-height: 20px;
}

@media (max-width: 700px) {
  .product { flex-direction: column; }
}`,
      js: `// --- Single state object: the whole page renders from this ---
const state = {
  price: 49,
  size: 'M',
  color: 'Blue',
  quantity: 1,
  cartCount: 0
};

const cartCountEl = document.getElementById('cartCount');
const qtyValue = document.getElementById('qtyValue');
const totalPrice = document.getElementById('totalPrice');
const message = document.getElementById('message');

// --- Image gallery with event delegation (one listener!) ---
document.getElementById('thumbnails').addEventListener('click', (e) => {
  if (e.target.tagName !== 'IMG') return; // clicked empty space
  document.getElementById('mainImage').src = e.target.src;
  document.querySelectorAll('#thumbnails img')
    .forEach(img => img.classList.remove('selected'));
  e.target.classList.add('selected');
});

// --- Size selector ---
document.getElementById('sizes').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  state.size = e.target.dataset.size;
  document.querySelectorAll('#sizes button')
    .forEach(b => b.classList.remove('selected'));
  e.target.classList.add('selected');
});

// --- Color selector ---
document.getElementById('colors').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  state.color = e.target.dataset.color;
  document.querySelectorAll('#colors button')
    .forEach(b => b.classList.remove('selected'));
  e.target.classList.add('selected');
});

// --- Quantity stepper (1 to 10) ---
function renderQty() {
  qtyValue.textContent = state.quantity;
  totalPrice.textContent = state.price * state.quantity;
}

document.getElementById('plus').addEventListener('click', () => {
  if (state.quantity < 10) { state.quantity++; renderQty(); }
});

document.getElementById('minus').addEventListener('click', () => {
  if (state.quantity > 1) { state.quantity--; renderQty(); }
});

// --- Add to cart: update the badge ---
document.getElementById('addToCart').addEventListener('click', () => {
  state.cartCount += state.quantity;
  cartCountEl.textContent = state.cartCount;
  message.textContent =
    \`Added \${state.quantity} x Classic Hoodie (\${state.size}, \${state.color}) to cart!\`;
});`,
    },
  },
  // ---------------------------------------------------------------
  // 7. Blog with Search (JavaScript — Advanced)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-blog-search',
    title: 'Blog with Search',
    slug: 'blog-with-search',
    category: 'javascript',
    difficulty: 'Advanced',
    description: 'Build a blog listing with live search that filters as you type, clickable category tags, and read-more expansion for each post.',
    skills: ['Array Filtering', 'Search Algorithm', 'Dynamic DOM Rendering', 'Event Delegation', 'Text Expansion'],
    requirements: [
      'Search box filters posts live as you type (title + content)',
      'Category tag buttons filter by category; "All" shows everything',
      'Each post shows a short excerpt with a Read More / Show Less toggle',
      'Show "No posts found" when the search matches nothing',
    ],
    instructions: [
      'Store all posts in a JS array of objects: { id, title, category, excerpt, content }',
      'Write a renderPosts(posts) function that builds the HTML for the list and sets container.innerHTML — re-run it on every filter',
      'Search: on input event, filter with post.title.toLowerCase().includes(query) || post.content... Combine with the active category filter',
      'Read More: use event delegation on the list container; find the clicked button\'s post id and toggle a class that reveals the full text',
    ],
    estimatedTime: '3-4 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>My Coding Blog</h1>
    <!-- Live search -->
    <input id="searchBox" type="text" placeholder="Search posts...">
    <!-- Category tags -->
    <div id="tags" class="tags">
      <button data-cat="All" class="active">All</button>
      <button data-cat="HTML">HTML</button>
      <button data-cat="CSS">CSS</button>
      <button data-cat="JavaScript">JavaScript</button>
    </div>
  </header>

  <!-- Posts are rendered here by JavaScript -->
  <main id="postList" class="posts"></main>
  <p id="noResults" class="no-results hidden">No posts found. Try another search.</p>

  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  background: #f1f5f9;
  color: #1e293b;
  margin: 0;
}

header {
  background: #1e1b4b;
  color: white;
  text-align: center;
  padding: 40px 20px 30px;
}

#searchBox {
  width: min(400px, 80%);
  padding: 12px 18px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  margin-top: 15px;
}

.tags {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.tags button {
  padding: 8px 18px;
  border: 2px solid #818cf8;
  background: transparent;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.tags button.active {
  background: #4f46e5;
  border-color: #4f46e5;
}

.posts {
  max-width: 700px;
  margin: 30px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.post .cat {
  display: inline-block;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 12px;
  margin-bottom: 10px;
}

.post h2 {
  margin: 0 0 10px;
}

/* Full content hidden until expanded */
.post .full {
  display: none;
}

.post.expanded .full {
  display: block;
}

.post.expanded .excerpt {
  display: none;
}

.read-more {
  background: none;
  border: none;
  color: #4f46e5;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-top: 10px;
  font-size: 15px;
}

.no-results {
  text-align: center;
  color: #64748b;
  font-size: 18px;
}

.hidden {
  display: none;
}`,
      js: `// --- Blog data: an array of post objects ---
const posts = [
  {
    id: 1,
    title: 'Getting Started with HTML',
    category: 'HTML',
    excerpt: 'HTML is the skeleton of every webpage. Learn the basic tags...',
    content: 'HTML is the skeleton of every webpage. Learn the basic tags like headings, paragraphs, links, and images. Once you understand how tags nest inside each other, you can build any page structure you imagine.'
  },
  {
    id: 2,
    title: 'CSS Flexbox in 10 Minutes',
    category: 'CSS',
    excerpt: 'Flexbox makes layout easy. Stop fighting with floats...',
    content: 'Flexbox makes layout easy. Stop fighting with floats and margins. With display: flex, justify-content, and align-items you can center anything and build responsive rows and columns in minutes.'
  },
  {
    id: 3,
    title: 'JavaScript Variables Explained',
    category: 'JavaScript',
    excerpt: 'let, const, and var — what is the difference?...',
    content: 'let, const, and var — what is the difference? Use const for values that never change, let for values that do, and forget var exists. This simple rule keeps your code clean and bug-free.'
  },
  {
    id: 4,
    title: 'Semantic HTML Tags',
    category: 'HTML',
    excerpt: 'Why use header, nav, and article instead of divs?...',
    content: 'Why use header, nav, and article instead of divs? Semantic tags describe what content IS, which helps search engines rank your page and screen readers help blind users navigate it.'
  },
  {
    id: 5,
    title: 'CSS Grid vs Flexbox',
    category: 'CSS',
    excerpt: 'When should you use Grid and when Flexbox?...',
    content: 'When should you use Grid and when Flexbox? Simple rule: Flexbox for one-dimensional layouts (a row OR a column), Grid for two-dimensional layouts (rows AND columns together).'
  },
  {
    id: 6,
    title: 'DOM Events Crash Course',
    category: 'JavaScript',
    excerpt: 'Make your pages interactive with click listeners...',
    content: 'Make your pages interactive with click listeners. addEventListener lets you run code when users click, type, or hover. Combine it with querySelector and you can change anything on the page.'
  }
];

let activeCategory = 'All';
let searchQuery = '';

const postList = document.getElementById('postList');
const noResults = document.getElementById('noResults');

// --- Render a list of posts into the page ---
function renderPosts(list) {
  postList.innerHTML = ''; // clear old posts
  list.forEach(post => {
    const article = document.createElement('article');
    article.className = 'post';
    article.dataset.id = post.id;
    article.innerHTML = \`
      <span class="cat">\${post.category}</span>
      <h2>\${post.title}</h2>
      <p class="excerpt">\${post.excerpt}</p>
      <p class="full">\${post.content}</p>
      <button class="read-more">Read More</button>
    \`;
    postList.appendChild(article);
  });
  // Show or hide the "no results" message
  noResults.classList.toggle('hidden', list.length > 0);
}

// --- Filter: category AND search query together ---
function applyFilters() {
  const filtered = posts.filter(post => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });
  renderPosts(filtered);
}

// --- Live search: filter on every keystroke ---
document.getElementById('searchBox').addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  applyFilters();
});

// --- Category tags ---
document.getElementById('tags').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  activeCategory = e.target.dataset.cat;
  document.querySelectorAll('#tags button')
    .forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  applyFilters();
});

// --- Read More toggle (event delegation on the list) ---
postList.addEventListener('click', (e) => {
  if (!e.target.classList.contains('read-more')) return;
  const post = e.target.closest('.post');
  const expanded = post.classList.toggle('expanded');
  e.target.textContent = expanded ? 'Show Less' : 'Read More';
});

// First render: show everything
renderPosts(posts);`,
    },
  },
  // ---------------------------------------------------------------
  // 8. Notes API + Frontend (Fullstack — Advanced)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-notes-app',
    title: 'Notes API + Frontend',
    slug: 'notes-api-frontend',
    category: 'fullstack',
    difficulty: 'Advanced',
    description: 'Build a notes app the fullstack way: a simulated REST API layer (in-memory store, Express-style) plus a frontend that talks to it with fetch-like CRUD calls.',
    skills: ['REST Concepts', 'CRUD Operations', 'Fetch API', 'JSON', 'API Layer Design'],
    requirements: [
      'API object with getAll, create, update, delete methods (mimics REST endpoints)',
      'Frontend lists notes, adds new notes, edits and deletes them',
      'Notes persist in localStorage so they survive page refresh',
      'Reference server.js shows the same API built with real Express',
    ],
    instructions: [
      'Design the API first: create a notesAPI object whose methods return Promises and use setTimeout to feel like real network calls',
      'Map each method to a REST endpoint: GET /api/notes, POST /api/notes, PUT /api/notes/:id, DELETE /api/notes/:id',
      'Frontend: render() fetches all notes from the API and rebuilds the list; every button calls an API method then re-renders',
      'Read the server.js reference at the top of script.js — it is the same API written in real Node/Express, ready to run with npm install express',
    ],
    estimatedTime: '5-6 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notes App (REST API)</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="app">
    <h1>My Notes <span class="badge">REST API</span></h1>

    <!-- Add-note form -->
    <form id="noteForm" class="form">
      <input id="titleInput" type="text" placeholder="Note title..." required>
      <textarea id="bodyInput" placeholder="Write your note..." rows="3"></textarea>
      <button type="submit">Add Note</button>
    </form>

    <!-- Notes list rendered by JS -->
    <div id="notesList" class="notes"></div>
    <p id="status" class="status"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  background: #f0f4ff;
  margin: 0;
  padding: 20px;
}

.app {
  max-width: 600px;
  margin: 0 auto;
}

.badge {
  background: #4f46e5;
  color: white;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 12px;
  vertical-align: middle;
}

.form {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form input, .form textarea {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
}

.form button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.notes {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.note {
  background: white;
  border-radius: 10px;
  padding: 15px 18px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

.note h3 {
  margin: 0 0 6px;
}

.note p {
  margin: 0 0 10px;
  color: #475569;
  white-space: pre-wrap;
}

.note .actions {
  display: flex;
  gap: 8px;
}

.note .actions button {
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-size: 13px;
}

.edit-btn { background: #d97706; }
.delete-btn { background: #dc2626; }

.status {
  text-align: center;
  color: #64748b;
  font-size: 13px;
}`,
      js: `/* ============================================================
   REFERENCE: server.js — the same API in real Node.js + Express.
   To run for real: npm init -y && npm install express, then
   node server.js. This frontend's notesAPI below mirrors it.
   ------------------------------------------------------------
   const express = require('express');
   const app = express();
   app.use(express.json()); // parse JSON request bodies

   let notes = []; // in-memory "database"
   let nextId = 1;

   // GET /api/notes -> list all notes
   app.get('/api/notes', (req, res) => {
     res.json(notes);
   });

   // POST /api/notes -> create a note { title, body }
   app.post('/api/notes', (req, res) => {
     const note = { id: nextId++, title: req.body.title, body: req.body.body };
     notes.push(note);
     res.status(201).json(note);
   });

   // PUT /api/notes/:id -> update a note
   app.put('/api/notes/:id', (req, res) => {
     const note = notes.find(n => n.id === Number(req.params.id));
     if (!note) return res.status(404).json({ error: 'Not found' });
     note.title = req.body.title;
     note.body = req.body.body;
     res.json(note);
   });

   // DELETE /api/notes/:id -> delete a note
   app.delete('/api/notes/:id', (req, res) => {
     notes = notes.filter(n => n.id !== Number(req.params.id));
     res.json({ deleted: true });
   });

   app.listen(3000, () => console.log('API running on http://localhost:3000'));
   ============================================================ */

// ============================================================
// FRONTEND: a simulated REST API layer (in-memory + localStorage)
// ============================================================
const notesAPI = {
  _key: 'ladder-notes-db',

  // "database" read/write helpers
  _read() {
    return JSON.parse(localStorage.getItem(this._key) || '[]');
  },
  _write(notes) {
    localStorage.setItem(this._key, JSON.stringify(notes));
  },

  // fake network delay so it feels like a real API
  _delay(result) {
    return new Promise(resolve => setTimeout(() => resolve(result), 200));
  },

  // GET /api/notes
  async getAll() {
    return this._delay(this._read());
  },

  // POST /api/notes
  async create({ title, body }) {
    const notes = this._read();
    const note = { id: Date.now(), title, body };
    notes.push(note);
    this._write(notes);
    return this._delay(note);
  },

  // PUT /api/notes/:id
  async update(id, { title, body }) {
    const notes = this._read().map(n =>
      n.id === id ? { ...n, title, body } : n
    );
    this._write(notes);
    return this._delay(true);
  },

  // DELETE /api/notes/:id
  async remove(id) {
    this._write(this._read().filter(n => n.id !== id));
    return this._delay(true);
  }
};

// ============================================================
// FRONTEND UI: talks ONLY to notesAPI (never to localStorage)
// ============================================================
const noteForm = document.getElementById('noteForm');
const titleInput = document.getElementById('titleInput');
const bodyInput = document.getElementById('bodyInput');
const notesList = document.getElementById('notesList');
const statusEl = document.getElementById('status');

let editingId = null; // id of the note being edited, or null

function setStatus(text) {
  statusEl.textContent = text;
}

// Render: GET all notes from the API, rebuild the list
async function render() {
  setStatus('Loading notes from API...');
  const notes = await notesAPI.getAll();
  setStatus(notes.length ? '' : 'No notes yet. Add your first one above!');
  notesList.innerHTML = '';
  // newest first
  [...notes].reverse().forEach(note => {
    const div = document.createElement('div');
    div.className = 'note';
    div.dataset.id = note.id;
    // escape user text so HTML in notes can't break the page
    div.innerHTML = \`
      <h3>\${escapeHtml(note.title)}</h3>
      <p>\${escapeHtml(note.body)}</p>
      <div class="actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    \`;
    notesList.appendChild(div);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Form submit: POST (create) or PUT (update)
noteForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  if (!title) return;

  if (editingId === null) {
    await notesAPI.create({ title, body });       // POST /api/notes
  } else {
    await notesAPI.update(editingId, { title, body }); // PUT /api/notes/:id
    editingId = null;
    noteForm.querySelector('button').textContent = 'Add Note';
  }
  noteForm.reset();
  render();
});

// Edit / Delete buttons (event delegation)
notesList.addEventListener('click', async (e) => {
  const noteDiv = e.target.closest('.note');
  if (!noteDiv) return;
  const id = Number(noteDiv.dataset.id);

  if (e.target.classList.contains('delete-btn')) {
    await notesAPI.remove(id); // DELETE /api/notes/:id
    render();
  }

  if (e.target.classList.contains('edit-btn')) {
    const notes = await notesAPI.getAll();
    const note = notes.find(n => n.id === id);
    titleInput.value = note.title;
    bodyInput.value = note.body;
    editingId = id;
    noteForm.querySelector('button').textContent = 'Save Changes';
    titleInput.focus();
  }
});

render(); // load notes on page open`,
    },
  },
  // ---------------------------------------------------------------
  // 9. User Auth System (Fullstack — Advanced)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-auth-system',
    title: 'User Auth System',
    slug: 'user-auth-system',
    category: 'fullstack',
    difficulty: 'Advanced',
    description: 'Build a login/signup UI with form validation, a live password strength meter, and session handling simulated with localStorage — the full auth flow explained.',
    skills: ['Form Validation', 'Password Hashing Concepts', 'Session Management', 'Auth Flow Design', 'localStorage'],
    requirements: [
      'Signup form: name, email, password with validation messages',
      'Live password strength meter (weak / medium / strong)',
      'Login checks email + password against stored users',
      'Logged-in state shows a welcome dashboard; logout clears the session',
    ],
    instructions: [
      'Validation: name min 3 chars, email must match a regex, password min 8 chars with a number — show an error under each bad field',
      'Strength meter: score the password (length, uppercase, number, symbol) and color a bar red/orange/green',
      'Hashing concept: NEVER store plain passwords — use a simpleHash() demo function (in real apps use bcrypt on the server)',
      'Session: on login, save { email, loginTime } to localStorage as "session"; on page load, if a session exists, skip straight to the dashboard',
    ],
    estimatedTime: '5-6 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auth System</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- AUTH FLOW EXPLAINED:
       1. User signs up -> we validate -> hash the password -> store user.
       2. User logs in -> we hash the typed password -> compare hashes.
       3. Match -> create a "session" (like a cookie) in localStorage.
       4. On every page load we check the session: if present, show dashboard.
       5. Logout -> delete the session.
       In a real app, steps 1-3 happen on a SERVER (never trust the browser).
  -->

  <!-- Signup / Login screen -->
  <div id="authScreen" class="card">
    <h1>Welcome</h1>
    <div class="tabs">
      <button id="tabLogin" class="active">Login</button>
      <button id="tabSignup">Sign Up</button>
    </div>

    <!-- Login form -->
    <form id="loginForm">
      <input id="loginEmail" type="email" placeholder="Email">
      <input id="loginPassword" type="password" placeholder="Password">
      <p class="error" id="loginError"></p>
      <button type="submit">Log In</button>
    </form>

    <!-- Signup form -->
    <form id="signupForm" class="hidden">
      <input id="signupName" type="text" placeholder="Full name">
      <p class="error" id="nameError"></p>
      <input id="signupEmail" type="email" placeholder="Email">
      <p class="error" id="emailError"></p>
      <input id="signupPassword" type="password" placeholder="Password (min 8 chars)">
      <!-- Password strength meter -->
      <div class="meter"><div id="meterFill"></div></div>
      <p id="meterLabel" class="meter-label"></p>
      <p class="error" id="passwordError"></p>
      <button type="submit">Create Account</button>
    </form>
  </div>

  <!-- Dashboard shown after login -->
  <div id="dashboard" class="card hidden">
    <h1 id="welcomeMsg">Welcome!</h1>
    <p>You are logged in. This is your protected dashboard.</p>
    <p class="session-info" id="sessionInfo"></p>
    <button id="logoutBtn" class="logout">Log Out</button>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #1e1b4b, #4f46e5);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 35px;
  width: 360px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.card h1 {
  text-align: center;
  margin-top: 0;
}

.hidden {
  display: none;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tabs button {
  flex: 1;
  padding: 10px;
  border: none;
  background: #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
}

.tabs button.active {
  background: #4f46e5;
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form input {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
}

form input.invalid {
  border-color: #dc2626;
  background: #fef2f2;
}

form button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 13px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 5px;
}

.error {
  color: #dc2626;
  font-size: 13px;
  margin: 0;
  min-height: 16px;
}

/* Password strength meter */
.meter {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

#meterFill {
  height: 100%;
  width: 0;
  transition: width 0.3s, background 0.3s;
}

.meter-label {
  font-size: 13px;
  margin: 0;
  font-weight: bold;
}

.logout {
  background: #dc2626;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
}

.session-info {
  color: #64748b;
  font-size: 13px;
}`,
      js: `// --- "Database" helpers (in a real app this lives on the server) ---
function getUsers() {
  return JSON.parse(localStorage.getItem('ladder-users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('ladder-users', JSON.stringify(users));
}
function getSession() {
  return JSON.parse(localStorage.getItem('ladder-session') || 'null');
}
function saveSession(session) {
  localStorage.setItem('ladder-session', JSON.stringify(session));
}

// --- Hashing CONCEPT: never store plain-text passwords.
// This is a simple demo hash. Real apps use bcrypt ON THE SERVER. ---
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 1000000007;
  }
  return 'h' + hash;
}

const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

const authScreen = document.getElementById('authScreen');
const dashboard = document.getElementById('dashboard');

// --- Tab switching ---
const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

tabLogin.addEventListener('click', () => {
  tabLogin.classList.add('active');
  tabSignup.classList.remove('active');
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
});
tabSignup.addEventListener('click', () => {
  tabSignup.classList.add('active');
  tabLogin.classList.remove('active');
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

// --- Password strength meter (live) ---
const signupPassword = document.getElementById('signupPassword');
const meterFill = document.getElementById('meterFill');
const meterLabel = document.getElementById('meterLabel');

signupPassword.addEventListener('input', () => {
  const pw = signupPassword.value;
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const percent = (score / 5) * 100;
  meterFill.style.width = percent + '%';
  if (score <= 2) {
    meterFill.style.background = '#dc2626';
    meterLabel.textContent = 'Weak';
    meterLabel.style.color = '#dc2626';
  } else if (score <= 3) {
    meterFill.style.background = '#d97706';
    meterLabel.textContent = 'Medium';
    meterLabel.style.color = '#d97706';
  } else {
    meterFill.style.background = '#16a34a';
    meterLabel.textContent = 'Strong';
    meterLabel.style.color = '#16a34a';
  }
});

// --- Signup with validation ---
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = signupPassword.value;

  let ok = true;
  const setErr = (inputId, errId, msg) => {
    document.getElementById(errId).textContent = msg || '';
    document.getElementById(inputId).classList.toggle('invalid', !!msg);
    if (msg) ok = false;
  };

  setErr('signupName', 'nameError', name.length < 3 ? 'Name must be at least 3 characters.' : '');
  setErr('signupEmail', 'emailError', !emailRegex.test(email) ? 'Enter a valid email address.' : '');
  setErr('signupPassword', 'passwordError',
    password.length < 8 ? 'Password must be at least 8 characters.' :
    !/[0-9]/.test(password) ? 'Password must include a number.' : '');

  if (!ok) return;

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    document.getElementById('emailError').textContent = 'This email is already registered.';
    return;
  }

  users.push({ name, email, passwordHash: simpleHash(password) });
  saveUsers(users);

  // Auto-login after signup: create session
  saveSession({ email, name, loginTime: new Date().toLocaleString() });
  showDashboard();
});

// --- Login: hash the typed password and compare hashes ---
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const loginError = document.getElementById('loginError');

  const user = getUsers().find(u => u.email === email);
  if (!user || user.passwordHash !== simpleHash(password)) {
    loginError.textContent = 'Wrong email or password.';
    return;
  }
  loginError.textContent = '';
  saveSession({ email: user.email, name: user.name, loginTime: new Date().toLocaleString() });
  showDashboard();
});

// --- Session check on page load ---
function showDashboard() {
  const session = getSession();
  if (!session) return;
  authScreen.classList.add('hidden');
  dashboard.classList.remove('hidden');
  document.getElementById('welcomeMsg').textContent = 'Welcome, ' + session.name + '!';
  document.getElementById('sessionInfo').textContent = 'Session started: ' + session.loginTime;
}

// --- Logout: destroy the session ---
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('ladder-session');
  dashboard.classList.add('hidden');
  authScreen.classList.remove('hidden');
  loginForm.reset();
  signupForm.reset();
});

showDashboard(); // auto-login if a session exists`,
    },
  },
  // ---------------------------------------------------------------
  // 10. REST API Todo with Database (Fullstack — Advanced)
  // ---------------------------------------------------------------
  {
    id: 'proj-ladder-todo-api',
    title: 'REST API Todo with Database',
    slug: 'rest-api-todo-database',
    category: 'fullstack',
    difficulty: 'Advanced',
    description: 'The capstone project: a todo app built on a clean API layer with async/await, full CRUD, and localStorage acting as the database with real persistence.',
    skills: ['API Design', 'Async/Await', 'Data Persistence', 'CRUD Operations', 'Error Handling'],
    requirements: [
      'api object exposing getTodos, addTodo, toggleTodo, deleteTodo, clearCompleted as async functions',
      'Add, complete (checkbox), and delete todos; filter All / Active / Completed',
      'Remaining count + "Clear completed" button',
      'All data persists in localStorage — refresh the page and todos stay',
    ],
    instructions: [
      'Design the "database": one localStorage key holding an array of { id, text, done } objects',
      'Write the API layer as async functions that return Promises — the UI may ONLY call the API, never localStorage directly',
      'render(): const todos = await api.getTodos(); rebuild the list from the result',
      'Filters: keep a currentFilter variable; apply it in render(); use try/catch around API calls and show errors in a status line',
    ],
    estimatedTime: '4-5 hours',
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo API App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="app">
    <h1>Todo API <span class="badge">async/await</span></h1>

    <!-- Add todo -->
    <form id="todoForm" class="add-form">
      <input id="todoInput" type="text" placeholder="What needs to be done?" autocomplete="off">
      <button type="submit">Add</button>
    </form>

    <!-- Filter tabs -->
    <div id="filters" class="filters">
      <button data-filter="all" class="active">All</button>
      <button data-filter="active">Active</button>
      <button data-filter="completed">Completed</button>
    </div>

    <!-- Todo list rendered by JS -->
    <ul id="todoList" class="todos"></ul>

    <!-- Footer: count + clear completed -->
    <div class="footer">
      <span id="remaining">0 items left</span>
      <button id="clearCompleted">Clear completed</button>
    </div>

    <p id="status" class="status"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  margin: 0;
  min-height: 100vh;
}

.app {
  width: 480px;
  max-width: 100%;
}

.badge {
  background: #4f46e5;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 12px;
  vertical-align: middle;
}

.add-form {
  display: flex;
  gap: 10px;
}

.add-form input {
  flex: 1;
  padding: 14px;
  border: 1px solid #334155;
  background: #1e293b;
  color: white;
  border-radius: 10px;
  font-size: 16px;
}

.add-form button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0 25px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 8px;
  margin: 18px 0;
}

.filters button {
  flex: 1;
  padding: 9px;
  background: #1e293b;
  color: #94a3b8;
  border: 1px solid #334155;
  border-radius: 8px;
  cursor: pointer;
}

.filters button.active {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.todos {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.todo {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1e293b;
  padding: 13px 16px;
  border-radius: 10px;
}

.todo input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo span {
  flex: 1;
}

.todo.done span {
  text-decoration: line-through;
  color: #64748b;
}

.todo .del {
  background: none;
  border: none;
  color: #f87171;
  font-size: 20px;
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  color: #94a3b8;
  font-size: 14px;
}

.footer button {
  background: none;
  border: 1px solid #334155;
  color: #94a3b8;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.status {
  text-align: center;
  font-size: 13px;
  color: #64748b;
  min-height: 18px;
}`,
      js: `// ============================================================
// DATABASE LAYER: localStorage acts as our database.
// One key, one array of { id, text, done } objects.
// ============================================================
const db = {
  key: 'ladder-todo-db',

  read() {
    try {
      return JSON.parse(localStorage.getItem(this.key) || '[]');
    } catch (e) {
      return []; // corrupted data -> start fresh, never crash
    }
  },

  write(todos) {
    localStorage.setItem(this.key, JSON.stringify(todos));
  }
};

// ============================================================
// API LAYER: clean async functions. The UI calls ONLY these.
// Each one returns a Promise, like a real REST API would.
// ============================================================
const api = {
  // GET /todos
  async getTodos() {
    return db.read();
  },

  // POST /todos { text }
  async addTodo(text) {
    if (!text.trim()) throw new Error('Todo text cannot be empty');
    const todos = db.read();
    const todo = { id: Date.now(), text: text.trim(), done: false };
    todos.push(todo);
    db.write(todos);
    return todo;
  },

  // PATCH /todos/:id { done }
  async toggleTodo(id) {
    const todos = db.read().map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    db.write(todos);
    return todos.find(t => t.id === id);
  },

  // DELETE /todos/:id
  async deleteTodo(id) {
    db.write(db.read().filter(t => t.id !== id));
    return true;
  },

  // DELETE /todos?completed=true
  async clearCompleted() {
    db.write(db.read().filter(t => !t.done));
    return true;
  }
};

// ============================================================
// UI LAYER: renders from the API, sends actions to the API
// ============================================================
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const remainingEl = document.getElementById('remaining');
const statusEl = document.getElementById('status');

let currentFilter = 'all'; // all | active | completed

function setStatus(text, isError = false) {
  statusEl.textContent = text;
  statusEl.style.color = isError ? '#f87171' : '#64748b';
}

// Render: fetch from API, apply filter, rebuild the list
async function render() {
  try {
    const todos = await api.getTodos();

    const visible = todos.filter(t => {
      if (currentFilter === 'active') return !t.done;
      if (currentFilter === 'completed') return t.done;
      return true;
    });

    todoList.innerHTML = '';
    visible.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'todo' + (todo.done ? ' done' : '');
      li.innerHTML = \`
        <input type="checkbox" \${todo.done ? 'checked' : ''}>
        <span></span>
        <button class="del" title="Delete">&times;</button>
      \`;
      li.querySelector('span').textContent = todo.text; // safe text insert
      li.dataset.id = todo.id;

      li.querySelector('input').addEventListener('change', async () => {
        await api.toggleTodo(todo.id);
        render();
      });
      li.querySelector('.del').addEventListener('click', async () => {
        await api.deleteTodo(todo.id);
        render();
      });

      todoList.appendChild(li);
    });

    const left = todos.filter(t => !t.done).length;
    remainingEl.textContent = left + (left === 1 ? ' item left' : ' items left');
    setStatus('');
  } catch (err) {
    setStatus('Error: ' + err.message, true);
  }
}

// Add a todo
todoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    await api.addTodo(todoInput.value);
    todoInput.value = '';
    render();
  } catch (err) {
    setStatus('Error: ' + err.message, true);
  }
});

// Filter tabs
document.getElementById('filters').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  currentFilter = e.target.dataset.filter;
  document.querySelectorAll('#filters button')
    .forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  render();
});

// Clear completed
document.getElementById('clearCompleted').addEventListener('click', async () => {
  await api.clearCompleted();
  render();
});

render(); // load on page open`,
    },
  },
];
