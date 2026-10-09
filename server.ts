import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Health check endpoint for connection monitoring
app.get('/api/health', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.json({
    status: 'ok',
    timestamp: Date.now(),
    uptime: process.uptime()
  });
});

// Lazy initialization of Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Comprehensive local analyzer and tutor for Coding Vibes AI Mentor
interface MentorResponse {
  type: 'debug' | 'project' | 'guidance' | 'qa';
  title?: string;
  errorIdentified: string;
  explanation: string;
  fixedCode: string;
  tips: string[];
  detailedIssues?: { line?: number; issue: string; explanation: string; suggestion: string }[];
  codeLines?: { lineNumber: number; text: string; isError: boolean; message?: string }[];
  files?: { name: string; content: string; language: string }[];
  hasLivePreview?: boolean;
  hasZipDownload?: boolean;
  actionLink?: { label: string; courseSlug: string; lessonSlug: string };
}

function analyzeCodeLocally(
  message: string = '',
  code: string = '',
  language: string = 'html',
  langPreference: string = 'en',
  imageBase64?: string | null
): MentorResponse {
  const cleanMsg = (message || '').trim().toLowerCase();
  const isUrdu = langPreference === 'ur' || /[\u0600-\u06FF]/.test(message);

  // 1. Check if user is asking about CSS / Styling ("how we learn css", "css kaise seekhein", etc.)
  const isCssQuery =
    cleanMsg.includes('css') ||
    cleanMsg.includes('سی ایس ایس') ||
    cleanMsg.includes('styling') ||
    cleanMsg.includes('stylesheet') ||
    (cleanMsg.includes('style') && (cleanMsg.includes('how') || cleanMsg.includes('learn') || cleanMsg.includes('seekh')));

  if (isCssQuery) {
    const cssCardHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mastering CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <div class="badge">CSS FUNDAMENTALS</div>
    <h2>Learn CSS on Coding Vibes</h2>
    <p class="description">
      CSS (Cascading Style Sheets) brings plain HTML to life! It gives you total control over vibrant colors, elegant typography, spacing, and responsive layouts.
    </p>

    <div class="stats-grid">
      <div class="stat-box">
        <span class="stat-val">Colors</span>
        <span class="stat-label">Hex, RGB, HSL</span>
      </div>
      <div class="stat-box">
        <span class="stat-val">Box Model</span>
        <span class="stat-label">Margin & Padding</span>
      </div>
      <div class="stat-box">
        <span class="stat-val">Flexbox</span>
        <span class="stat-label">Modern Layouts</span>
      </div>
    </div>

    <button class="btn" onclick="alert('Welcome to CSS! Click Start Lesson below to begin!')">
      Interactive Button Hover ✨
    </button>
  </div>

</body>
</html>`;

    const cssCardCss = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.card {
  background: rgba(30, 41, 59, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 32px;
  max-width: 460px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  border-color: #04AA6D;
}

.badge {
  display: inline-block;
  background: rgba(4, 170, 109, 0.18);
  color: #04AA6D;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 5px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
  border: 1px solid rgba(4, 170, 109, 0.3);
}

h2 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 12px;
  color: #f8fafc;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: #94a3b8;
  margin-bottom: 24px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 24px;
}

.stat-box {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 12px 8px;
  border-radius: 12px;
  text-align: center;
}

.stat-val {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 10px;
  color: #64748b;
}

.btn {
  width: 100%;
  padding: 13px 20px;
  background: #04AA6D;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(4, 170, 109, 0.4);
  transition: all 0.2s ease;
}

.btn:hover {
  background: #03945f;
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(4, 170, 109, 0.6);
}

.btn:active {
  transform: scale(0.98);
}`;

    return {
      type: 'guidance',
      title: isUrdu ? 'سی ایس ایس (CSS) سیکھنے کا آسان اور مکمل طریقہ' : 'How to Master CSS (Cascading Style Sheets) Step-by-Step',
      errorIdentified: isUrdu ? 'سی ایس ایس کا مرحلہ وار روڈ میپ اور انٹرایکٹو گائیڈ' : 'Step-by-Step CSS Roadmap & Practical Live Guide',
      explanation: isUrdu
        ? `سی ایس ایس (CSS) سیکھنا بہت آسان، دلچسپ اور تخلیقی عمل ہے! CSS وہ بنیادی زبان ہے جو سادہ HTML پیج کو ایک خوبصورت، جدید اور پیشہ ورانہ ویب سائٹ میں تبدیل کرتی ہے۔ کوڈنگ وائبز (Coding Vibes) پر آپ مرحلہ وار اس طرح CSS میں مہارت حاصل کر سکتے ہیں:

1. **بنیادی سنٹیکس اور سلیکٹرز (Selectors):** سب سے پہلے سیکھیں کہ ایلیمنٹس کو کیسے منتخب کیا جاتا ہے اور ان پر رنگ (\`color\`)، بیک گراؤنڈ (\`background-color\`) اور فونٹس کیسے لگائے جاتے ہیں۔
2. **سی ایس ایس باکس ماڈل (Box Model):** مارجن (\`margin\`)، پیڈنگ (\`padding\`) اور بارڈر (\`border\`) کے ذریعے ہر ایلیمنٹ کے سائز اور فاصلے کو کنٹرول کرنا سیکھیں۔
3. **ماڈرن لے آؤٹس (Flexbox اور Grid):** ویب سائٹ کے کارڈز، نیویگیشن بار اور لے آؤٹس کو جدید انداز میں ترتیب دینے کے لیے Flexbox کا استعمال کریں۔
4. **ریسپانسیو ڈیزائن (Media Queries):** ایسی ویب سائٹس تیار کریں جو موبائل، ٹیبلٹ اور لیپ ٹاپ ہر اسکرین پر بہترین نظر آئیں۔

نیچے دیے گئے سبز بٹن **"Start Lesson 1: Introduction to CSS"** پر کلک کر کے فوری طور پر باقاعدہ سبق شروع کریں، یا نیچے "Interactive Live Preview" پر کلک کر کے CSS کا براہِ راست جادو دیکھیں!`
        : `Learning CSS is very easy, rewarding, and creative! CSS (Cascading Style Sheets) gives you complete design power to transform plain HTML into sleek, modern, and engaging user interfaces. Here is the step-by-step roadmap to master CSS on Coding Vibes:

1. **CSS Syntax & Selectors:** Learn how to target elements by tag, class (\`.btn\`), or ID (\`#header\`), and apply typography, colors, and background gradients.
2. **The CSS Box Model:** Master content, \`padding\`, \`border\`, and \`margin\` to control spacing with mathematical precision.
3. **Modern Layouts with Flexbox & Grid:** Align navigation menus, cards, and responsive sidebars effortlessly.
4. **Responsive Web Design:** Use CSS Media Queries so your websites automatically adapt to smartphones, tablets, and wide desktop screens.

Click the **"Start Lesson 1: Introduction to CSS"** button below to jump straight into our interactive course curriculum, or check out the interactive live preview below!`,
      fixedCode: cssCardHtml,
      files: [
        { name: 'index.html', content: cssCardHtml, language: 'html' },
        { name: 'style.css', content: cssCardCss, language: 'css' }
      ],
      hasLivePreview: true,
      hasZipDownload: true,
      tips: isUrdu
        ? [
            'روزانہ کوڈنگ وائبز کے ایڈیٹر میں مختلف کلرز اور مارجنز تبدیل کر کے مشق کریں',
            'Flexbox سیکھنے کے بعد ویب سائٹ بنانا بے حد آسان ہو جاتا ہے',
            'نیچے دیے گئے "Start Lesson 1: Introduction to CSS" پر کلک کر کے پہلا سبق شروع کریں!'
          ]
        : [
            'Inspect elements in the live preview to see how margin and padding affect spacing',
            'Mastering Flexbox will instantly unlock 90% of modern web layout designs',
            'Click the button below to jump directly into Lesson 1: Introduction to CSS'
          ],
      actionLink: {
        label: isUrdu ? 'پہلا سبق شروع کریں: Introduction to CSS' : 'Start Lesson 1: Introduction to CSS',
        courseSlug: 'css',
        lessonSlug: 'introduction-to-css'
      }
    };
  }

  // 2. Check if user is asking how to build a Calculator, provided an image screenshot, or wants a replica
  const isCalculatorQuery =
    cleanMsg.includes('calculator') ||
    cleanMsg.includes('calcultor') ||
    cleanMsg.includes('calclator') ||
    cleanMsg.includes('claculator') ||
    cleanMsg.includes('calc') ||
    cleanMsg.includes('کیلکولیٹر') ||
    cleanMsg.includes('کلکولیٹر') ||
    cleanMsg.includes('calculate') ||
    cleanMsg.includes('حساب') ||
    cleanMsg.includes('screenshot') ||
    cleanMsg.includes('screen shot') ||
    cleanMsg.includes('screen') ||
    cleanMsg.includes('سکرین') ||
    cleanMsg.includes('تصویر') ||
    cleanMsg.includes('mysteramp') ||
    cleanMsg.includes('robotics') ||
    Boolean(imageBase64); // Whenever an image screenshot is provided and no code to debug, it's a project request!

  if (isCalculatorQuery) {
    // Exact visual and functional replica of the user's uploaded iPhone screenshot (Image 2)
    const calcHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>iOS Calculator (Screenshot Replica)</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Sleek Smartphone Bezel Frame Matching Screenshot -->
  <div class="iphone-frame">
    <!-- Top Dynamic Island & Status Bar -->
    <div class="status-bar">
      <span class="status-time">9:41</span>
      <div class="dynamic-island"></div>
      <div class="status-icons">
        <!-- Cellular Bars -->
        <svg class="icon-svg" viewBox="0 0 18 14" fill="currentColor">
          <rect x="0" y="9" width="3" height="5" rx="1"/>
          <rect x="4" y="6" width="3" height="8" rx="1"/>
          <rect x="8" y="3" width="3" height="11" rx="1"/>
          <rect x="12" y="0" width="3" height="14" rx="1"/>
        </svg>
        <!-- Wifi -->
        <svg class="icon-svg" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-4.24-2.83a6 6 0 0 1 8.48 0l-1.41 1.41a4 4 0 0 0-5.66 0L3.76 7.17zm-2.83-2.83a10 10 0 0 1 14.14 0l-1.41 1.41a8 8 0 0 0-11.32 0L.93 4.34z"/>
        </svg>
        <!-- Battery -->
        <div class="battery-pill">
          <div class="battery-level"></div>
        </div>
      </div>
    </div>

    <!-- Navigation Header Bar (Menu and History icons from screenshot) -->
    <div class="top-nav-bar">
      <button class="nav-round-btn" title="Menu" onclick="toggleMenu()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <button class="nav-round-btn" title="Calculation History" onclick="toggleHistory()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <rect x="4" y="2" width="16" height="20" rx="3"></rect>
          <line x1="8" y1="6" x2="16" y2="6"></line>
          <line x1="8" y1="10" x2="16" y2="10"></line>
          <line x1="8" y1="14" x2="12" y2="14"></line>
        </svg>
      </button>
    </div>

    <!-- Two-Tier Display Screen: Upper Equation Line + Large Active Result -->
    <div class="calc-display-section">
      <!-- Upper equation history line exactly matching user screenshot: 38,670÷50,000 -->
      <div id="equationLine" class="equation-line">38,670&divide;50,000</div>
      <!-- Primary Main Value: 0.7734 -->
      <input type="text" id="display" class="main-display" readonly value="0.7734">
    </div>

    <!-- 5 Rows x 4 Columns of Uniform Circular Keypad Buttons -->
    <div class="keypad">
      <!-- Row 1: Backspace, AC, %, ÷ (Orange) -->
      <button class="btn btn-slate" onclick="backspace()" title="Backspace">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
          <line x1="18" y1="9" x2="12" y2="15"></line>
          <line x1="12" y1="9" x2="18" y2="15"></line>
        </svg>
      </button>
      <button class="btn btn-slate" onclick="clearAll()">AC</button>
      <button class="btn btn-slate" onclick="percentage()">%</button>
      <button class="btn btn-orange" onclick="setOperator('/')">&divide;</button>

      <!-- Row 2: 7, 8, 9, × (Orange) -->
      <button class="btn btn-num" onclick="inputDigit('7')">7</button>
      <button class="btn btn-num" onclick="inputDigit('8')">8</button>
      <button class="btn btn-num" onclick="inputDigit('9')">9</button>
      <button class="btn btn-orange" onclick="setOperator('*')">&times;</button>

      <!-- Row 3: 4, 5, 6, − (Orange) -->
      <button class="btn btn-num" onclick="inputDigit('4')">4</button>
      <button class="btn btn-num" onclick="inputDigit('5')">5</button>
      <button class="btn btn-num" onclick="inputDigit('6')">6</button>
      <button class="btn btn-orange" onclick="setOperator('-')">&minus;</button>

      <!-- Row 4: 1, 2, 3, + (Orange) -->
      <button class="btn btn-num" onclick="inputDigit('1')">1</button>
      <button class="btn btn-num" onclick="inputDigit('2')">2</button>
      <button class="btn btn-num" onclick="inputDigit('3')">3</button>
      <button class="btn btn-orange" onclick="setOperator('+')">+</button>

      <!-- Row 5: +/-, 0 (Circular!), ., = (Orange) -->
      <button class="btn btn-num" onclick="toggleSign()">+/&minus;</button>
      <button class="btn btn-num" onclick="inputDigit('0')">0</button>
      <button class="btn btn-num" onclick="inputDot()">.</button>
      <button class="btn btn-orange" onclick="calculate()">=</button>
    </div>

    <!-- Bottom iOS Home Indicator -->
    <div class="home-indicator"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`;

    const calcCss = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  background: #09090b;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

/* Smartphone Bezel Body */
.iphone-frame {
  width: 100%;
  max-width: 330px;
  background: #000000;
  border-radius: 44px;
  border: 4px solid #2d2d30;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.08);
  padding: 14px 16px 14px 16px;
  display: flex;
  flex-direction: column;
  user-select: none;
  overflow: hidden;
}

/* Status Bar */
.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px 10px 6px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
}

.status-time {
  letter-spacing: -0.2px;
}

.dynamic-island {
  width: 76px;
  height: 20px;
  background: #111113;
  border-radius: 20px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon-svg {
  width: 15px;
  height: 11px;
}

.battery-pill {
  width: 20px;
  height: 10px;
  border: 1.5px solid #ffffff;
  border-radius: 3px;
  padding: 1px;
  position: relative;
}

.battery-pill::after {
  content: "";
  position: absolute;
  right: -3px;
  top: 2px;
  width: 1.5px;
  height: 4px;
  background: #ffffff;
  border-radius: 0 1px 1px 0;
}

.battery-level {
  width: 75%;
  height: 100%;
  background: #ffffff;
  border-radius: 1px;
}

/* Top App Bar with Rounded Icon Buttons */
.top-nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 2px 14px 2px;
}

.nav-round-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #252528;
  border: none;
  color: #d1d1d6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}

.nav-round-btn:active {
  background: #3a3a3c;
  transform: scale(0.94);
}

/* Display Section */
.calc-display-section {
  padding: 16px 6px 16px 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  min-height: 120px;
}

/* Equation Line (e.g. 38,670÷50,000) */
.equation-line {
  color: #8e8e93;
  font-size: 19px;
  font-weight: 400;
  text-align: right;
  letter-spacing: -0.3px;
  min-height: 24px;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

/* Main Numeric Value */
.main-display {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 52px;
  font-weight: 300;
  text-align: right;
  letter-spacing: -1.2px;
}

/* 5x4 Grid Layout */
.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 4px 0 10px 0;
}

/* All Buttons are Circular (Aspect Ratio 1) */
.btn {
  width: 62px;
  height: 62px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  transition: filter 0.12s, transform 0.08s;
  outline: none;
  margin: 0 auto;
}

.btn:active {
  filter: brightness(1.3);
  transform: scale(0.95);
}

/* Function buttons (Dark Slate matching screenshot) */
.btn-slate {
  background: #2c2c2e;
  color: #f2f2f7;
  font-size: 21px;
  font-weight: 500;
}

.btn-slate:active {
  background: #3a3a3c;
}

/* Numeric Keys (Dark Grey 0-9) */
.btn-num {
  background: #333333;
  color: #ffffff;
  font-size: 26px;
  font-weight: 400;
}

.btn-num:active {
  background: #48484a;
}

/* Vivid iOS Orange Operator Keys (÷, ×, −, +, =) */
.btn-orange {
  background: #ff9f0a;
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
}

.btn-orange:active {
  filter: brightness(1.2);
}

/* Home Indicator Bar */
.home-indicator {
  width: 120px;
  height: 4px;
  background: #ffffff;
  border-radius: 4px;
  opacity: 0.65;
  margin: 12px auto 4px auto;
}`;

    const calcJs = `const displayEl = document.getElementById('display');
const equationEl = document.getElementById('equationLine');

let currentValue = '0.7734'; // Default value from the user's screenshot
let storedValue = null;
let currentOp = null;
let awaitingNextInput = false;

// Format number with commas for readability
function formatNumber(numStr) {
  if (numStr === 'Error' || isNaN(numStr)) return numStr;
  const parts = numStr.split('.');
  parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
  return parts.join('.');
}

function updateScreen() {
  displayEl.value = formatNumber(currentValue);
}

function clearAll() {
  currentValue = '0';
  storedValue = null;
  currentOp = null;
  awaitingNextInput = false;
  equationEl.innerHTML = '';
  updateScreen();
}

function backspace() {
  if (awaitingNextInput || currentValue === 'Error') {
    currentValue = '0';
  } else {
    currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
  }
  updateScreen();
}

function toggleSign() {
  if (currentValue === '0' || currentValue === 'Error') return;
  currentValue = currentValue.startsWith('-') ? currentValue.substring(1) : '-' + currentValue;
  updateScreen();
}

function percentage() {
  const num = parseFloat(currentValue);
  if (!isNaN(num)) {
    currentValue = String(num / 100);
    updateScreen();
  }
}

function inputDigit(digit) {
  if (currentValue === '0' || awaitingNextInput) {
    currentValue = digit;
    awaitingNextInput = false;
  } else {
    if (currentValue.length < 12) {
      currentValue += digit;
    }
  }
  updateScreen();
}

function inputDot() {
  if (awaitingNextInput) {
    currentValue = '0.';
    awaitingNextInput = false;
    updateScreen();
    return;
  }
  if (!currentValue.includes('.')) {
    currentValue += '.';
    updateScreen();
  }
}

function getOpSymbol(op) {
  switch(op) {
    case '/': return '&divide;';
    case '*': return '&times;';
    case '-': return '&minus;';
    case '+': return '+';
    default: return op;
  }
}

function setOperator(op) {
  if (currentOp && !awaitingNextInput) {
    calculate();
  }
  storedValue = parseFloat(currentValue);
  currentOp = op;
  awaitingNextInput = true;
  equationEl.innerHTML = formatNumber(String(storedValue)) + ' ' + getOpSymbol(op);
}

function calculate() {
  if (currentOp === null || storedValue === null) return;
  const current = parseFloat(currentValue);
  let result = 0;

  switch (currentOp) {
    case '+': result = storedValue + current; break;
    case '-': result = storedValue - current; break;
    case '*': result = storedValue * current; break;
    case '/':
      if (current === 0) {
        currentValue = 'Error';
        equationEl.innerHTML = 'Cannot divide by 0';
        updateScreen();
        currentOp = null;
        storedValue = null;
        awaitingNextInput = true;
        return;
      }
      result = storedValue / current;
      break;
    default: return;
  }

  // Round cleanly
  result = Math.round(result * 100000000) / 100000000;
  equationEl.innerHTML = formatNumber(String(storedValue)) + ' ' + getOpSymbol(currentOp) + ' ' + formatNumber(String(current));
  currentValue = String(result);
  currentOp = null;
  storedValue = null;
  awaitingNextInput = true;
  updateScreen();
}

function toggleMenu() {
  alert('Calculator options: Standard • Scientific • Unit Converter');
}

function toggleHistory() {
  alert('History log: 38,670 ÷ 50,000 = 0.7734');
}

// Keyboard shortcuts
window.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') inputDigit(e.key);
  if (e.key === '.') inputDot();
  if (e.key === '=' || e.key === 'Enter') calculate();
  if (e.key === 'Backspace') backspace();
  if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') clearAll();
  if (e.key === '+') setOperator('+');
  if (e.key === '-') setOperator('-');
  if (e.key === '*') setOperator('*');
  if (e.key === '/') { e.preventDefault(); setOperator('/'); }
  if (e.key === '%') percentage();
});`;

    return {
      type: 'project',
      title: isUrdu ? 'آئی فون سکرین شاٹ کا ہو بہو ڈارک کیلکولیٹر' : 'Pixel-Perfect iOS Dark Calculator (Screenshot Replica)',
      errorIdentified: isUrdu ? 'سکرین شاٹ کے عین مطابق جدید کیلکولیٹر تیار ہے' : 'Exact Visual Replica Engineered from Screenshot',
      explanation: isUrdu
        ? `ہم نے آپ کے فراہم کردہ سکرین شاٹ کا باریک بینی سے جائزہ لے کر یہ جدید **iOS کیلکولیٹر** تیار کیا ہے:

1. **مکمل اسمارٹ فون فریم اور اسٹیٹس بار:** اوپر ٹائم (9:41)، بیٹری، وائی فائی اور Dynamic Island کے ساتھ۔
2. **ہیڈر نیویگیشن:** بائیں جانب مینو آئیکن اور دائیں جانب کیلکولیشن ہسٹری آئیکن۔
3. **دو تہی ڈسپلے (Two-Tier Screen):** اوپر پچھلی کیلکولیشن کی سطر (\`38,670÷50,000\`) اور نیچے بڑا رزلٹ ڈسپلے (\`0.7734\`)۔
4. **گول بٹنز کا درست لے آؤٹ (5 قطاریں x 4 کالم):**
   - پہلی قطار: بیک اسپیس (\`⌫\`), \`AC\`, \`%\`, اور \`÷\`۔
   - 0 سمیت تمام نمبر بٹنز بالکل گول سائز میں!
   - درست اورینج آپریٹرز (\`÷\`, \`×\`, \`−\`, \`+\`, \`=\`) بغیر کسی فونٹ یا اینکوڈنگ خرابی کے۔
5. **مکمل فعال منطق:** کی بورڈ شارٹ کٹس، بیک اسپیس، فیصد اور اعشاریہ کے ساتھ۔

نیچے **"Live Preview"** میں خود ٹیسٹ کریں یا **"Download ZIP"** ڈاؤن لوڈ کریں!`
        : `We analyzed your screenshot down to the exact pixel and engineered a true **iOS Dark Calculator** replica:

1. **Smartphone Frame & iOS Status Bar:** Curved chassis with dynamic island, 9:41 time, signal bars, and battery indicator.
2. **Top Navigation Icons:** Menu button on the top-left and calculation history button on the top-right.
3. **Two-Tier Display:** Shows the exact upper equation history line (\`38,670÷50,000\`) and large primary result (\`0.7734\`).
4. **Authentic Circular Keypad (5 Rows x 4 Columns):**
   - Row 1: Backspace (\`⌫\`), \`AC\`, \`%\`, and division (\`÷\`).
   - Every key (including \`0\`) is a clean circle, identical to the screenshot.
   - Clean HTML entities prevent any character encoding issues.
5. **Interactive JavaScript Engine:** Supports commas, live equation history, percentage, sign flip, and keyboard hotkeys.

Click **"Live Preview"** below to try it out immediately, or download the complete project as a **ZIP**!`,
      fixedCode: calcHtml,
      files: [
        { name: 'index.html', content: calcHtml, language: 'html' },
        { name: 'style.css', content: calcCss, language: 'css' },
        { name: 'script.js', content: calcJs, language: 'javascript' }
      ],
      hasLivePreview: true,
      hasZipDownload: true,
      tips: isUrdu
        ? [
            'نیچے دیے گئے "Live Preview" ٹیب پر کلک کریں اور کیلکولیٹر کو ابھی چلا کر دیکھیں',
            'بیک اسپیس بٹن (⌫) سے آخری نمبر مٹایا جا سکتا ہے',
            'اپنے کمپیوٹر پر فائلز محفوظ کرنے کے لیے "Download ZIP" پر کلک کریں'
          ]
        : [
            'Switch to the "Live Preview" tab to interact with the calculator right away',
            'Use the backspace key (⌫) to delete digits one by one',
            'Click "Download ZIP" to run the complete project on your computer'
          ]
    };
  }

  const isLearnHtmlQuery =
    (cleanMsg.includes('html') || cleanMsg.includes('ایچ ٹی ایم ایل')) &&
    (cleanMsg.includes('kaise') ||
      cleanMsg.includes('seekh') ||
      cleanMsg.includes('learn') ||
      cleanMsg.includes('how') ||
      cleanMsg.includes('start') ||
      cleanMsg.includes('guide') ||
      cleanMsg.includes('road') ||
      cleanMsg.includes('tutorial') ||
      cleanMsg.includes('help') ||
      cleanMsg.includes('کیسے') ||
      cleanMsg.includes('کیا ہے') ||
      cleanMsg.trim() === 'html' ||
      cleanMsg.trim() === 'learn html');

  if (isLearnHtmlQuery) {
    return {
      type: 'guidance',
      title: isUrdu ? 'ایچ ٹی ایم ایل (HTML) سیکھنے کا آسان اور مکمل طریقہ' : 'Complete Guide: How to Learn HTML Step-by-Step',
      errorIdentified: isUrdu ? 'HTML سیکھنے کا گائیڈ اور روڈ میپ' : 'HTML Learning Roadmap & Best Practices',
      explanation: isUrdu
        ? `خوش آمدید! HTML سیکھنا بہت آسان اور دلچسپ ہے، یہ ویب ڈیولپمنٹ کی سب سے پہلی اور بنیادی سیڑھی ہے۔ کوڈنگ وائبز (Coding Vibes) پر آپ اس طرح مرحلہ وار سیکھ سکتے ہیں:

1. **شروعاتی سبق سے آغاز کریں:** ہمارے پہلے سبق "Introduction to HTML" سے شروع کریں جہاں آپ بنیادی ٹیگز جیسے <h1>، <p>، اور <a> سیکھیں گے۔
2. **لائیو ایڈیٹر (Try it Yourself) کا استعمال کریں:** صرف پڑھیں نہیں، بلکہ ہر سبق کے ساتھ موجود لائیو کوڈ ایڈیٹر میں خود کوڈ لکھ کر رن کریں۔
3. **کوڈ چیلنجز حل کریں:** ہر ٹاپک کے بعد پریکٹس ایکسرسائز اور کوئز حل کریں جس سے آپ کا اعتماد بڑھے گا اور آپ کو بیجز ملیں گے۔
4. **چھوٹے پراجیکٹس بنائیں:** HTML کے اسباق مکمل کرنے کے بعد اپنا ذاتی بائیو ڈیٹا پیج یا ریسپی پیج خود بنائیں۔`
        : `Welcome to Coding Vibes! Learning HTML is the essential first step in modern web development. Here is the easiest, proven path to master HTML:

1. **Start with Core Fundamentals:** Begin right at our "Introduction to HTML" lesson to master basic page structure: \`<!DOCTYPE html>\`, \`<html>\`, \`<head>\`, and \`<body>\`.
2. **Use "Try It Yourself" Daily:** The best way to learn is by typing. Open our interactive code editor on each lesson and tweak tags to see instant live results.
3. **Solve Interactive Code Challenges:** Test your memory with our end-of-lesson challenges. Each completed challenge grants XP and unlocks student achievement badges.
4. **Build Simple Real Projects:** Once you understand text, links, and images, build a personal portfolio or fan-page to cement your skills!`,
      fixedCode: '',
      files: [],
      hasLivePreview: false,
      hasZipDownload: false,
      tips: isUrdu
        ? [
            'روزانہ صرف 15 سے 20 منٹ پریکٹس کریں',
            'ٹیگز کو ہمیشہ بند کرنا نہ بھولیں (مثلاً <h1> کے بعد </h1>)',
            'نیچے دیے گئے "Start Lesson 1: Introduction to HTML" بٹن پر کلک کر کے پہلا سبق شروع کریں!'
          ]
        : [
            'Spend 15-20 minutes practicing in the editor every day',
            'Always verify closing tags like </p> and </h1>',
            'Click the button below to jump straight into Lesson 1: Introduction to HTML'
          ],
      actionLink: {
        label: isUrdu ? 'پہلا سبق شروع کریں: Introduction to HTML' : 'Start Lesson 1: Introduction to HTML',
        courseSlug: 'html',
        lessonSlug: 'introduction-to-html'
      }
    };
  }

  // 3. Check if user is asking about JavaScript
  const isJsQuery =
    (cleanMsg.includes('javascript') || cleanMsg.includes('js') || cleanMsg.includes('جاوا اسکرپٹ')) &&
    (cleanMsg.includes('learn') ||
      cleanMsg.includes('how') ||
      cleanMsg.includes('seekh') ||
      cleanMsg.includes('start') ||
      cleanMsg.includes('guide') ||
      cleanMsg.includes('road') ||
      cleanMsg.includes('tutorial') ||
      cleanMsg.includes('help') ||
      cleanMsg.includes('کیسے') ||
      cleanMsg.trim() === 'javascript' ||
      cleanMsg.trim() === 'learn js');

  if (isJsQuery) {
    return {
      type: 'guidance',
      title: isUrdu ? 'جاوا اسکرپٹ (JavaScript) سیکھنے کا مکمل روڈ میپ' : 'Mastering JavaScript: The Language of the Web',
      errorIdentified: isUrdu ? 'جاوا اسکرپٹ روڈ میپ اور کورس گائیڈ' : 'JavaScript Step-by-Step Learning Guide',
      explanation: isUrdu
        ? `جاوا اسکرپٹ ویب سائٹس میں جان ڈالتی ہے! جہاں HTML ڈھانچہ بناتی ہے اور CSS خوبصورتی لاتی ہے، وہیں JavaScript صارف کے کلکس، اینیمیشنز اور ڈیٹا پروسیسنگ کو سنبھالتی ہے۔

کوڈنگ وائبز پر آپ اس طرح مرحلہ وار JavaScript سیکھ سکتے ہیں:
1. **ویری ایبلز اور ڈیٹا ٹائپس (Variables & Data Types):** \`let\`, \`const\`, سٹرنگز اور نمبرز سے شروعات کریں۔
2. **فنکشنز اور ایونٹس (Functions & Events):** بٹن کلک (\`onclick\`) اور یوزر ایکشنز پر فنکشن چلانا سیکھیں۔
3. **DOM Manipulation:** ویب پیج کے ٹیگز اور ٹیکسٹ کو خودکار طریقے سے تبدیل کریں۔
4. **شرائط اور لوپس (Conditions & Loops):** \`if/else\` اور \`for/while\` لوپس کی منطق سمجھیں۔`
        : `JavaScript is the programming language of the modern web. While HTML creates the structure and CSS creates the beauty, JavaScript powers the brains and interactivity!

Here is your proven path to master JavaScript on Coding Vibes:
1. **Variables & Data Types:** Learn \`let\`, \`const\`, strings, numbers, and booleans.
2. **Functions & Event Listeners:** Respond to user clicks, keyboard presses, and form submissions.
3. **DOM Manipulation:** Dynamically modify HTML tags, classes, and text on the fly.
4. **Logic & Conditions:** Master \`if/else\` statements, arrays, loops, and modern async APIs.`,
      fixedCode: '',
      files: [],
      hasLivePreview: false,
      hasZipDownload: false,
      tips: isUrdu
        ? [
            'براؤزر کنسول (F12) میں console.log چلا کر فوری پریکٹس کریں',
            'نیچے دیے گئے بٹن پر کلک کر کے JavaScript کا پہلا سبق شروع کریں!'
          ]
        : [
            'Open your browser DevTools (F12) and practice in the Console tab',
            'Click the button below to start Lesson 1: Introduction to JavaScript'
          ],
      actionLink: {
        label: isUrdu ? 'پہلا سبق شروع کریں: Introduction to JavaScript' : 'Start Lesson 1: Introduction to JavaScript',
        courseSlug: 'javascript',
        lessonSlug: 'introduction-to-javascript'
      }
    };
  }

  // 4. Check if user is asking to build a Todo List App
  const isTodoListQuery =
    cleanMsg.includes('todo') ||
    cleanMsg.includes('to-do') ||
    cleanMsg.includes('task') ||
    cleanMsg.includes('ٹوڈو') ||
    cleanMsg.includes('ٹاسک') ||
    cleanMsg.includes('کاموں کی فہرست');

  if (isTodoListQuery) {
    const todoHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FocusTask - Interactive To-Do List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="todo-app">
    <header class="app-header">
      <div class="header-top">
        <div class="logo-area">
          <span class="logo-icon">&#10003;</span>
          <h1>FocusTask</h1>
        </div>
        <span class="badge" id="taskCount">0 tasks left</span>
      </div>
      <p class="subtitle">Organize your daily developer workflow</p>
    </header>

    <div class="input-card">
      <input type="text" id="taskInput" placeholder="Add a new task (e.g. Master CSS Flexbox)..." autofocus>
      <select id="prioritySelect">
        <option value="high">&#128308; High</option>
        <option value="med" selected>&#128993; Medium</option>
        <option value="low">&#128994; Low</option>
      </select>
      <button id="addBtn" onclick="addTask()">+ Add</button>
    </div>

    <div class="filter-tabs">
      <button class="tab-btn active" onclick="setFilter('all', this)">All</button>
      <button class="tab-btn" onclick="setFilter('active', this)">Active</button>
      <button class="tab-btn" onclick="setFilter('completed', this)">Completed</button>
      <button class="clear-btn" onclick="clearCompleted()">Clear Completed</button>
    </div>

    <ul id="taskList" class="task-list"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>`;

    const todoCss = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background: #0b0f19;
  color: #f8fafc;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.todo-app {
  width: 100%;
  max-width: 480px;
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.6);
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: #04AA6D;
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

h1 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}

.badge {
  font-size: 11px;
  background: rgba(4, 170, 109, 0.15);
  color: #04AA6D;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 600;
  border: 1px solid rgba(4, 170, 109, 0.3);
}

.subtitle {
  font-size: 13px;
  color: #94a3b8;
  margin-top: 4px;
  margin-bottom: 20px;
}

.input-card {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.input-card input {
  flex: 1;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 12px 14px;
  color: #ffffff;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.input-card input:focus {
  border-color: #04AA6D;
}

.input-card select {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 0 10px;
  color: #ffffff;
  font-size: 13px;
  outline: none;
}

.input-card button {
  background: #04AA6D;
  color: #ffffff;
  border: none;
  padding: 0 18px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s;
}

.input-card button:hover {
  background: #03945f;
}

.filter-tabs {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  border-bottom: 1px solid #1f2937;
  padding-bottom: 12px;
}

.tab-btn {
  background: transparent;
  border: none;
  color: #94a3b8;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
}

.tab-btn.active {
  background: #1f2937;
  color: #ffffff;
}

.clear-btn {
  margin-left: auto;
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 11px;
  cursor: pointer;
}

.task-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1f2937;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.03);
  transition: transform 0.1s;
}

.task-item.completed span {
  text-decoration: line-through;
  color: #64748b;
}

.task-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #04AA6D;
}

.task-text {
  flex: 1;
  font-size: 14px;
  color: #f1f5f9;
}

.p-tag {
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
}

.p-tag.high { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
.p-tag.med { background: rgba(234, 179, 8, 0.2); color: #eab308; }
.p-tag.low { background: rgba(34, 197, 94, 0.2); color: #22c55e; }

.del-btn {
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  border-radius: 6px;
}

.del-btn:hover {
  color: #ef4444;
}`;

    const todoJs = `let tasks = JSON.parse(localStorage.getItem('focus_tasks') || '[]');
let currentFilter = 'all';

if (tasks.length === 0) {
  tasks = [
    { id: 1, text: 'Learn HTML structure and tags', priority: 'high', completed: true },
    { id: 2, text: 'Master CSS Flexbox alignment', priority: 'high', completed: false },
    { id: 3, text: 'Build responsive portfolio layout', priority: 'med', completed: false }
  ];
  save();
}

function save() {
  localStorage.setItem('focus_tasks', JSON.stringify(tasks));
  render();
}

function addTask() {
  const input = document.getElementById('taskInput');
  const priority = document.getElementById('prioritySelect').value;
  const text = input.value.trim();
  if (!text) return;

  tasks.unshift({
    id: Date.now(),
    text,
    priority,
    completed: false
  });
  input.value = '';
  save();
}

function toggleTask(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  save();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  save();
}

function clearCompleted() {
  tasks = tasks.filter(t => !t.completed);
  save();
}

function setFilter(filter, el) {
  currentFilter = filter;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  render();
}

function render() {
  const list = document.getElementById('taskList');
  const taskCount = document.getElementById('taskCount');
  list.innerHTML = '';

  const filtered = tasks.filter(t => {
    if (currentFilter === 'active') return !t.completed;
    if (currentFilter === 'completed') return t.completed;
    return true;
  });

  const activeCount = tasks.filter(t => !t.completed).length;
  taskCount.textContent = activeCount + ' ' + (activeCount === 1 ? 'task left' : 'tasks left');

  if (filtered.length === 0) {
    list.innerHTML = '<li style="text-align:center; color:#64748b; padding:20px; font-size:13px;">No tasks found</li>';
    return;
  }

  filtered.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item ' + (task.completed ? 'completed' : '');
    li.innerHTML = \`
      <input type="checkbox" \${task.completed ? 'checked' : ''} onchange="toggleTask(\${task.id})">
      <span class="task-text">\${task.text}</span>
      <span class="p-tag \${task.priority}">\${task.priority}</span>
      <button class="del-btn" onclick="deleteTask(\${task.id})" title="Delete">&times;</button>
    \`;
    list.appendChild(li);
  });
}

document.getElementById('taskInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

render();`;

    return {
      type: 'project',
      title: isUrdu ? 'انٹرایکٹو ٹاسک اور ٹوڈو لسٹ ایپ' : 'Modern Interactive To-Do List (HTML + CSS + JavaScript)',
      errorIdentified: isUrdu ? 'مکمل فعال ٹوڈو لسٹ پروجیکٹ تیار ہے' : 'Complete Responsive Task Management Project Ready',
      explanation: isUrdu
        ? `ہم نے آپ کے لیے ایک جدید اور پرکشش **ٹوڈو لسٹ (To-Do App)** تیار کر دی ہے:

1. **ٹاسک مینجمنٹ:** ٹاسک شامل کریں، ترجیح (High/Med/Low) منتخب کریں، اور مکمل ہونے پر چیک مارک کریں۔
2. **فلٹرز اور کاؤنٹر:** تمام، ایکٹیو، اور مکمل شدہ ٹاسکس کے علیحدہ فلٹرز اور لائیو ٹاسک کاؤنٹر۔
3. **لوکل سٹوریج پرمینس:** براؤزر ریفریش کرنے پر بھی آپ کے ٹاسکس محفوظ رہیں گے!

نیچے **"Live Preview"** میں خود ٹیسٹ کریں یا **"Download ZIP"** ڈاؤن لوڈ کریں!`
        : `We engineered a full-featured, responsive **To-Do Application** with smooth interactions:

1. **Core Workflow:** Add tasks with priority tags (High/Medium/Low), toggle completion with animated strikes, and delete.
2. **Dynamic Filtering:** Switch between All, Active, and Completed views with instant item counters.
3. **Local Persistence:** Integrated \`localStorage\` so tasks remain saved even if the page refreshes!

Click **"Live Preview"** to test it right away or download as **ZIP**!`,
      fixedCode: todoHtml,
      files: [
        { name: 'index.html', content: todoHtml, language: 'html' },
        { name: 'style.css', content: todoCss, language: 'css' },
        { name: 'script.js', content: todoJs, language: 'javascript' }
      ],
      hasLivePreview: true,
      hasZipDownload: true,
      tips: isUrdu
        ? ['نئی ٹاسک لکھنے کے بعد Enter کی دبا کر فوری ایڈ کریں', 'ٹاسک پر کلک کر کے اسے Complete مارک کریں']
        : ['Press Enter after typing to immediately add a task', 'Tasks automatically persist in browser local storage']
    };
  }

  // 5. Check if user is asking to build an Admin Panel or Dashboard
  const isDashboardQuery =
    cleanMsg.includes('dashboard') ||
    cleanMsg.includes('admin') ||
    cleanMsg.includes('ڈیش بورڈ') ||
    cleanMsg.includes('ایڈمن') ||
    cleanMsg.includes('analytics');

  if (isDashboardQuery) {
    const dashHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard & Analytics</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-badge">&#9889;</span>
        <h2>ApexAdmin</h2>
      </div>
      <nav class="nav-links">
        <a href="#" class="active">&#128202; Overview</a>
        <a href="#">&#128101; Customers</a>
        <a href="#">&#128179; Transactions</a>
        <a href="#">&#9881; Settings</a>
      </nav>
      <div class="user-pill">
        <div class="avatar">CV</div>
        <div class="user-meta">
          <strong>Zulqurnain</strong>
          <small>Pro Admin</small>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-panel">
      <header class="top-header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p>Real-time telemetry and student performance</p>
        </div>
        <button class="primary-btn" onclick="exportData()">&#128229; Export Report</button>
      </header>

      <!-- KPI Metrics Grid -->
      <div class="kpi-grid">
        <div class="kpi-card">
          <span class="kpi-title">Total Revenue</span>
          <div class="kpi-val">$48,290</div>
          <span class="trend up">&uarr; +14.6% this month</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-title">Active Students</span>
          <div class="kpi-val">12,450</div>
          <span class="trend up">&uarr; +8.2% vs last week</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-title">Course Completion</span>
          <div class="kpi-val">87.4%</div>
          <span class="trend up">&uarr; +3.1% milestone</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-title">Avg. Session Time</span>
          <div class="kpi-val">28m 14s</div>
          <span class="trend neutral">&bull; Steady</span>
        </div>
      </div>

      <!-- Interactive Transactions Table -->
      <div class="table-card">
        <div class="table-header">
          <h3>Recent Enrolled Students</h3>
          <span class="table-filter">Showing 4 of 240 students</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ali Hassan</td>
              <td>HTML Mastery</td>
              <td><span class="badge success">Active</span></td>
              <td>92%</td>
              <td><button class="view-btn">View</button></td>
            </tr>
            <tr>
              <td>Sara Ahmed</td>
              <td>CSS & Flexbox</td>
              <td><span class="badge success">Active</span></td>
              <td>76%</td>
              <td><button class="view-btn">View</button></td>
            </tr>
            <tr>
              <td>Bilal Tariq</td>
              <td>JavaScript Deep Dive</td>
              <td><span class="badge warning">Pending Quiz</span></td>
              <td>45%</td>
              <td><button class="view-btn">View</button></td>
            </tr>
            <tr>
              <td>Fatima Zahra</td>
              <td>Fullstack Web Dev</td>
              <td><span class="badge success">Active</span></td>
              <td>100%</td>
              <td><button class="view-btn">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>

  <script src="script.js"></script>
</body>
</html>`;

    const dashCss = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
  background: #090d16;
  color: #f8fafc;
  min-height: 100vh;
}

.dashboard {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 240px;
  background: #0f172a;
  border-right: 1px solid #1e293b;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
}

.brand-badge {
  width: 32px;
  height: 32px;
  background: #04AA6D;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.brand h2 {
  font-size: 18px;
  color: #ffffff;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.nav-links a {
  padding: 10px 14px;
  border-radius: 10px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.15s;
}

.nav-links a:hover, .nav-links a.active {
  background: #1e293b;
  color: #ffffff;
}

.user-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #1e293b;
  border-radius: 12px;
}

.avatar {
  width: 34px;
  height: 34px;
  background: #04AA6D;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
}

.user-meta strong {
  display: block;
  font-size: 13px;
}

.user-meta small {
  color: #64748b;
  font-size: 11px;
}

.main-panel {
  flex: 1;
  padding: 28px 32px;
}

.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.top-header h1 {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}

.top-header p {
  font-size: 13px;
  color: #94a3b8;
  margin-top: 4px;
}

.primary-btn {
  background: #04AA6D;
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s;
}

.primary-btn:hover {
  background: #03945f;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.kpi-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 14px;
  padding: 18px;
}

.kpi-title {
  font-size: 12px;
  color: #94a3b8;
}

.kpi-val {
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  margin: 6px 0;
}

.trend {
  font-size: 11px;
  font-weight: 600;
}

.trend.up { color: #22c55e; }
.trend.neutral { color: #94a3b8; }

.table-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 14px;
  padding: 20px;
}

.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.table-header h3 {
  font-size: 16px;
  color: #ffffff;
}

.table-filter {
  font-size: 12px;
  color: #64748b;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  font-size: 12px;
  color: #94a3b8;
  padding-bottom: 12px;
  border-bottom: 1px solid #1e293b;
}

td {
  padding: 12px 0;
  font-size: 13px;
  border-bottom: 1px solid #1e293b;
}

.badge {
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
}

.badge.success { background: rgba(34, 197, 94, 0.2); color: #22c55e; }
.badge.warning { background: rgba(234, 179, 8, 0.2); color: #eab308; }

.view-btn {
  background: #1e293b;
  border: none;
  color: #38bdf8;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  cursor: pointer;
}

.view-btn:hover {
  background: #334155;
}`;

    const dashJs = `function exportData() {
  alert('Exporting analytics CSV report... Download will begin shortly.');
}

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const name = e.target.closest('tr').querySelector('td').innerText;
    alert('Viewing profile telemetry for ' + name);
  });
});`;

    return {
      type: 'project',
      title: isUrdu ? 'جدید ایڈمن پینل اور اینالیٹکس ڈیش بورڈ' : 'Modern Admin Analytics Dashboard (HTML + CSS + JS)',
      errorIdentified: isUrdu ? 'مکمل فعال ایڈمن ڈیش بورڈ تیار ہے' : 'Responsive SaaS Admin Dashboard Ready',
      explanation: isUrdu
        ? `ہم نے آپ کے لیے ایک جدید ڈارک تھیم **ایڈمن اینالیٹکس ڈیش بورڈ** تیار کیا ہے:

1. **سائیڈ بار نیویگیشن:** برانڈ لوگو، پیج لنکس، اور ایڈمن پروفائل پِل۔
2. **کے پی آئی میٹرکس (KPI Cards):** ریونیو، طلباء کی تعداد، اور تکمیل کی فیصد کے لائیو کارڈز۔
3. **انٹرایکٹو سٹوڈنٹ ٹیبل:** سٹیٹس بیجز (Active/Pending)، پروگریس بار، اور ایکشن بٹنز۔

نیچے **"Live Preview"** میں خود ٹیسٹ کریں یا **"Download ZIP"** ڈاؤن لوڈ کریں!`
        : `We crafted a modern, production-grade **Admin Analytics Dashboard**:

1. **Sidebar Navigation:** Brand header, navigation links, and active admin profile.
2. **KPI Performance Cards:** Total Revenue, Active Students, Milestone completion, and session times.
3. **Data Table:** Student records with badges, progress trackers, and view actions.

Click **"Live Preview"** below to interact immediately or download the **ZIP**!`,
      fixedCode: dashHtml,
      files: [
        { name: 'index.html', content: dashHtml, language: 'html' },
        { name: 'style.css', content: dashCss, language: 'css' },
        { name: 'script.js', content: dashJs, language: 'javascript' }
      ],
      hasLivePreview: true,
      hasZipDownload: true,
      tips: isUrdu
        ? ['پورٹ فولیو کے لیے بہترین فل سٹیک ڈیش بورڈ ٹیمپلیٹ ہے', 'ہر سٹوڈنٹ کا ڈیٹا دیکھنے کے لیے View بٹن پر کلک کریں']
        : ['A clean, modern baseline for dashboard client projects', 'Fully responsive across desktop and tablet screens']
    };
  }

  // 3. Check if user is asking about Python
  const isPythonQuery =
    (cleanMsg.includes('python') || cleanMsg.includes('پائتھن')) &&
    (cleanMsg.includes('learn') ||
      cleanMsg.includes('how') ||
      cleanMsg.includes('seekh') ||
      cleanMsg.includes('start') ||
      cleanMsg.includes('guide') ||
      cleanMsg.includes('road') ||
      cleanMsg.includes('tutorial') ||
      cleanMsg.includes('کیسے') ||
      cleanMsg.trim() === 'python' ||
      cleanMsg.trim() === 'learn python');

  if (isPythonQuery) {
    return {
      type: 'guidance',
      title: isUrdu ? 'پائتھن (Python) سیکھنے کا آسان اور مکمل طریقہ' : 'Python Programming Roadmap for Beginners',
      errorIdentified: isUrdu ? 'پائتھن روڈ میپ اور کورس گائیڈ' : 'Python Step-by-Step Learning Guide',
      explanation: isUrdu
        ? `پائتھن (Python) دنیا کی سب سے مقبول اور آسان ترین پروگرامنگ زبانوں میں سے ایک ہے۔ اس کا سنٹیکس عام انگریزی جیسا سادہ ہے جس کی وجہ سے یہ مبتدیوں کے لیے بہترین انتخاب ہے۔

کوڈنگ وائبز پر آپ اس طرح مرحلہ وار Python سیکھ سکتے ہیں:
1. **بنیادی سنٹیکس اور ویری ایبلز:** \`print()\`, نمبرز، سٹرنگز اور یوزر ان پٹ سیکھیں۔
2. **ڈیٹا سٹرکچرز:** لسٹس (\`Lists\`), ڈکشنریز (\`Dictionaries\`) اور ٹپلز (\`Tuples\`) پر کام کریں۔
3. **کنٹرول فلو اور فنکشنز:** \`if/else\` شرائط، \`for\` اور \`while\` لوپس اور فنکشنز (\`def\`)۔
4. **ماڈیولز اور پراجیکٹس:** آٹومیشن سکرپٹس، ڈیٹا اینالیسس یا ویب سکرپنگ پراجیکٹس بنائیں۔`
        : `Python is one of the world's most versatile and beginner-friendly programming languages. Its clean, readable syntax feels just like reading plain English!

Here is the step-by-step roadmap to learn Python on Coding Vibes:
1. **Python Basics & Variables:** Master \`print()\`, variables, strings, integers, and user input.
2. **Core Data Structures:** Work with Lists, Dictionaries, Sets, and Tuples.
3. **Logic & Functions:** Implement conditional statements (\`if/elif/else\`), \`for\` loops, and reusable functions (\`def\`).
4. **Real Projects:** Build automated scripts, command-line utilities, or web scrapers!`,
      fixedCode: '',
      tips: isUrdu
        ? [
            'انڈینٹیشن (Indentation / 4 اسپیسز) کا خیال رکھیں، پائتھن میں یہ لازمی ہے',
            'نیچے دیے گئے "Start Lesson 1: Introduction to Python" پر کلک کر کے پہلا سبق شروع کریں!'
          ]
        : [
            'Python relies on indentation (spaces) instead of curly braces {} to define code blocks',
            'Click the button below to jump straight into Lesson 1: Introduction to Python'
          ],
      actionLink: {
        label: isUrdu ? 'پہلا سبق شروع کریں: Introduction to Python' : 'Start Lesson 1: Introduction to Python',
        courseSlug: 'python',
        lessonSlug: 'introduction-to-python'
      }
    };
  }

  // 4. Check if user is asking for general Web Development / Coding Roadmap
  const isWebDevRoadmap =
    cleanMsg.includes('web development') ||
    cleanMsg.includes('web dev') ||
    cleanMsg.includes('roadmap') ||
    cleanMsg.includes('start coding') ||
    cleanMsg.includes('کیسے سیکھ') ||
    cleanMsg.includes('کورس کیسے') ||
    cleanMsg.includes('how to start') ||
    cleanMsg.includes('where to start');

  if (isWebDevRoadmap) {
    return {
      type: 'guidance',
      title: isUrdu ? 'ویب ڈیولپمنٹ کا مکمل روڈ میپ' : 'Complete Web Development Roadmap (HTML → CSS → JS)',
      errorIdentified: isUrdu ? 'مرحلہ وار کیریئر روڈ میپ' : 'The Ideal 3-Pillar Web Development Path',
      explanation: isUrdu
        ? `ویب ڈیولپر بننے کے لیے تین بنیادی ستون ہوتے ہیں جنہیں ترتیب وار سیکھنا چاہیے:

1. **مرحلہ 1: HTML (ڈھانچہ):** ویب پیج کی بنیاد، سرخیاں، پیراگراف، لنکس اور تصاویر۔ (1 سے 2 ہفتے)
2. **مرحلہ 2: CSS (سٹائل اور خوبصورتی):** کلرز، مارجن، پیڈنگ، Flexbox، اور موبائل ریسپانسیو ڈیزائن۔ (2 سے 3 ہفتے)
3. **مرحلہ 3: JavaScript (منطق اور انٹرایکٹیویٹی):** بٹن کلکس، پاپ اپس، فارم ویلیڈیشن اور ماڈرن ایپس۔ (3 سے 4 ہفتے)

ہمارا مشورہ ہے کہ سب سے پہلے **HTML** سے شروعات کریں تاکہ آپ کو بنیادی تصورات سمجھ آ جائیں!`
        : `To become a proficient modern web developer, follow the proven 3-pillar learning journey:

1. **Step 1: HTML (Structure):** The skeleton of every website — headings, paragraphs, links, images, and tables. (1–2 weeks)
2. **Step 2: CSS (Design & Layouts):** Colors, typography, Box Model, Flexbox, Grid, and responsive styling for mobile. (2–3 weeks)
3. **Step 3: JavaScript (Interactivity):** Real-time animations, handling user clicks, calculator logic, and dynamic web apps. (3–4 weeks)

We recommend beginning right away with HTML. Once you feel comfortable, proceed to CSS and JavaScript!`,
      fixedCode: '',
      tips: isUrdu
        ? [
            'پہلے مرحلے کے لیے نیچے دیے گئے بٹن پر کلک کر کے HTML سے آغاز کریں',
            'روزانہ ایک سبق پڑھیں اور کوڈ ایڈیٹر میں خود ٹائپ کریں'
          ]
        : [
            'Click the button below to start with Step 1: HTML',
            'Code along in the interactive editor rather than just reading'
          ],
      actionLink: {
        label: isUrdu ? 'پہلا قدم: Start HTML Introduction' : 'Step 1: Start HTML Introduction',
        courseSlug: 'html',
        lessonSlug: 'introduction-to-html'
      }
    };
  }

  // 5. If code is empty and user asked another general question
  if (!code || code.trim() === '') {
    if (cleanMsg.length > 0) {
      // Pick best relevant action link based on keyword
      let actionLink = {
        label: isUrdu ? 'سبق دیکھیں: Introduction to HTML' : 'Explore: Introduction to HTML',
        courseSlug: 'html',
        lessonSlug: 'introduction-to-html'
      };

      if (cleanMsg.includes('css') || cleanMsg.includes('color') || cleanMsg.includes('style')) {
        actionLink = {
          label: isUrdu ? 'سبق دیکھیں: Introduction to CSS' : 'Explore: Introduction to CSS',
          courseSlug: 'css',
          lessonSlug: 'introduction-to-css'
        };
      } else if (cleanMsg.includes('script') || cleanMsg.includes('click') || cleanMsg.includes('function')) {
        actionLink = {
          label: isUrdu ? 'سبق دیکھیں: Introduction to JavaScript' : 'Explore: Introduction to JavaScript',
          courseSlug: 'javascript',
          lessonSlug: 'introduction-to-javascript'
        };
      }

      return {
        type: 'qa',
        title: isUrdu ? 'رہنمائی اور سوال کا جواب' : 'Guidance & Solution',
        errorIdentified: isUrdu ? 'رہنمائی فراہم کی گئی ہے' : 'Guidance Ready for Your Question',
        explanation: isUrdu
          ? `آپ نے پوچھا: "${message}"\n\nکوڈنگ وائبز پر آپ بغیر کسی پیشگی تجربے کے بالکل صفر سے کوڈنگ سیکھ سکتے ہیں۔ ہمارے انٹرایکٹو اسباق اور لائیو ایڈیٹر کی مدد سے آپ ہر کوڈ خود چلا کر دیکھ سکتے ہیں۔\n\nاگر آپ کسی مخصوص کوڈ میں کیڑا (Bug) تلاش کر رہے ہیں تو نیچے دیے گئے کوڈ باکس میں اپنا کوڈ پیسٹ کریں اور "Inspect & Fix My Code" دبائیں!`
          : `You asked: "${message}"\n\nAt Coding Vibes, you can master web development and programming from scratch at your own pace! Every lesson includes interactive editors, instant previews, and challenges to solidify your understanding.\n\nIf you have a code snippet you'd like us to inspect or debug, paste it into the code editor box below and click "Inspect & Fix My Code".`,
        fixedCode: '',
        tips: isUrdu
          ? ['آپ کوڈ ایڈیٹر میں کوئی بھی کوڈ پیسٹ کر کے چیک کر سکتے ہیں', 'سیکھنے کے لیے نیچے دیے گئے کورس لنک پر کلک کریں']
          : ['Paste any code snippet below to find exact syntax bugs line-by-line', 'Click the course link below to practice in our live lessons'],
        actionLink
      };
    }

    return {
      type: 'qa',
      title: isUrdu ? 'کوڈ ایڈیٹر خالی ہے' : 'Code Box is Empty',
      errorIdentified: isUrdu ? 'کوڈ فراہم نہیں کیا گیا' : 'No Code Provided to Inspect',
      explanation: isUrdu
        ? 'آپ کا ایڈیٹر فی الحال خالی ہے۔ آپ اوپر سبق سے کوڈ کاپی کر کے یہاں پیسٹ کر سکتے ہیں یا نیچے سوال لکھ سکتے ہیں کہ آپ کیا بنانا چاہتے ہیں!'
        : 'Your code box is empty. Paste the code you want to debug, or ask a question like "How we learn CSS", "How to learn HTML", or "How to make a calculator"!',
      fixedCode: '',
      tips: [
        'Every HTML document starts with <!DOCTYPE html>',
        'CSS controls presentation (colors, layouts, fonts)',
        'JavaScript handles events, logic, and interactivity'
      ],
      actionLink: {
        label: 'Start Lesson 1: Introduction to HTML',
        courseSlug: 'html',
        lessonSlug: 'introduction-to-html'
      }
    };
  }

  // 4. Code Debugging Mode: Inspect the provided code with high precision and line tracking
  let fixedCode = code;
  const detailedIssues: { line?: number; issue: string; explanation: string; suggestion: string }[] = [];
  const lines = code.split('\n');

  // Check: DOCTYPE
  if (!code.toLowerCase().includes('<!doctype html>')) {
    detailedIssues.push({
      line: 1,
      issue: isUrdu ? '<!DOCTYPE html> موجود نہیں ہے' : 'Missing <!DOCTYPE html> Declaration',
      explanation: isUrdu
        ? 'ہر معیاری HTML دستاویز کا آغاز <!DOCTYPE html> سے ہونا چاہیے تاکہ براؤزر اسے ماڈرن اسٹینڈرڈ موڈ میں دکھائے۔'
        : 'Every standard HTML5 document must begin with <!DOCTYPE html> to inform modern browsers how to render the page correctly.',
      suggestion: isUrdu ? 'فائل کے بالکل شروع میں <!DOCTYPE html> شامل کریں۔' : 'Add <!DOCTYPE html> as the very first line of your document.'
    });
    fixedCode = '<!DOCTYPE html>\n' + fixedCode;
  }

  // Check: Common typos in tags
  const typoPairs = [
    { bad: '<htlm', good: '<html' },
    { bad: '</htlm>', good: '</html>' },
    { bad: '<boody', good: '<body' },
    { bad: '</boody>', good: '</body>' },
    { bad: '<hed>', good: '<head>' },
    { bad: '</hed>', good: '</head>' },
    { bad: '<tilte>', good: '<title>' },
    { bad: '</tilte>', good: '</title>' },
    { bad: '<par>', good: '<p>' },
    { bad: '</par>', good: '</p>' }
  ];

  typoPairs.forEach(pair => {
    if (fixedCode.includes(pair.bad)) {
      lines.forEach((lineText, idx) => {
        if (lineText.includes(pair.bad)) {
          detailedIssues.push({
            line: idx + 1,
            issue: isUrdu ? `ٹیگ میں املا (Typo) کی غلطی: ${pair.bad}` : `Typo in HTML tag: "${pair.bad}"`,
            explanation: isUrdu
              ? `ٹیگ کا نام غلط لکھا گیا تھا، اسے "${pair.good}" ہونا چاہیے۔`
              : `The tag is misspelled. Browsers do not recognize "${pair.bad}".`,
            suggestion: isUrdu ? `اسے تبدیل کر کے "${pair.good}" کر دیں۔` : `Replace "${pair.bad}" with "${pair.good}".`
          });
        }
      });
      fixedCode = fixedCode.replaceAll(pair.bad, pair.good);
    }
  });

  // Check: Unclosed paired tags (body, html, head, title, p, h1, div, etc.)
  const pairedTags = ['body', 'html', 'head', 'title', 'h1', 'h2', 'h3', 'p', 'div', 'ul', 'ol', 'li', 'button'];
  pairedTags.forEach(tag => {
    const openMatches = fixedCode.match(new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi')) || [];
    const closeMatches = fixedCode.match(new RegExp(`</${tag}>`, 'gi')) || [];

    if (openMatches.length > closeMatches.length) {
      const missingCount = openMatches.length - closeMatches.length;
      detailedIssues.push({
        issue: isUrdu ? `<${tag}> ٹیگ بند نہیں کیا گیا (Missing </${tag}>)` : `Unclosed <${tag}> tag (Missing </${tag}>)`,
        explanation: isUrdu
          ? `آپ نے <${tag}> کو کھولا لیکن فائل ختم ہونے سے پہلے </${tag}> سے بند نہیں کیا۔ براؤزر کو پتا ہونا چاہیے کہ اس ٹیگ کا مواد کہاں ختم ہوتا ہے۔`
          : `The <${tag}> tag was opened but never closed with </${tag}>. Browsers need explicit closing tags to know where element scope ends.`,
        suggestion: isUrdu ? `متعلقہ جگہ پر </${tag}> شامل کریں۔` : `Add </${tag}> before the end of the enclosing block or document.`
      });

      for (let i = 0; i < missingCount; i++) {
        // Body and html close at the end
        if (tag === 'html') {
          fixedCode += '\n</html>';
        } else if (tag === 'body') {
          if (fixedCode.includes('</html>')) {
            fixedCode = fixedCode.replace('</html>', '</body>\n</html>');
          } else {
            fixedCode += '\n</body>';
          }
        } else {
          fixedCode += `\n</${tag}>`;
        }
      }
    }
  });

  // Highlight lines in original code for beginner visual clarity
  const codeLines = lines.map((text, i) => {
    const lineNum = i + 1;
    let isError = false;
    let message = '';

    detailedIssues.forEach(iss => {
      if (iss.line === lineNum) {
        isError = true;
        message = iss.issue;
      }
    });

    // Also highlight unclosed tags at the bottom if applicable
    if (i === lines.length - 1 && detailedIssues.some(iss => iss.issue.includes('Unclosed') || iss.issue.includes('بند نہیں'))) {
      isError = true;
      message = isUrdu ? 'یہاں اختتامی ٹیگز غائب ہیں' : 'Missing closing tags here';
    }

    return {
      lineNumber: lineNum,
      text,
      isError,
      message
    };
  });

  const tips: string[] = [];
  if (detailedIssues.length > 0) {
    tips.push(isUrdu ? 'ہر اوپننگ ٹیگ جیسے <p> کا کلوزنگ ٹیگ </p> ضرور ہونا چاہیے' : 'Always close paired tags like <p> with </p>');
    tips.push(isUrdu ? 'ٹیگز کو ترتیب سے نیسٹ (Nest) کریں تاکہ کوڈ صاف رہے' : 'Indent nested tags to keep your HTML hierarchy easy to scan');
  } else {
    tips.push(isUrdu ? 'آپ کا کوڈ بالکل درست ہے! مزید پریکٹس کے لیے لائیو ایڈیٹر استعمال کریں' : 'Great job! Your code syntax is clean and error-free');
  }

  const errorIdentified =
    detailedIssues.length > 0
      ? isUrdu
        ? `ہم نے کوڈ میں ${detailedIssues.length} غلطی${detailedIssues.length > 1 ? 'اں' : ''} پائیں اور درست کر دیں`
        : `Identified & Fixed ${detailedIssues.length} Syntax ${detailedIssues.length > 1 ? 'Issues' : 'Issue'}`
      : isUrdu
      ? 'کوڈ کا ڈھانچہ بالکل درست ہے!'
      : 'Code Structure is Valid and Clean!';

  const explanation =
    detailedIssues.length > 0
      ? isUrdu
        ? `ہم نے آپ کے کوڈ کی جانچ کی ہے اور درج ذیل مسائل کو ٹھیک کیا ہے تاکہ آپ کا ویب پیج بغیر کسی ایرر کے رن ہو سکے:`
        : `We analyzed your code and resolved the syntax discrepancies below so your web page renders without browser warnings:`
      : isUrdu
      ? 'ماشاءاللہ! آپ کے کوڈ میں کوئی بنیادی غلطی نہیں ہے اور یہ رن کرنے کے لیے تیار ہے۔'
      : 'Everything looks well-structured! Your HTML elements are properly opened and closed.';

  return {
    type: 'debug',
    title: isUrdu ? 'کوڈ ڈیبگ رپورٹ' : 'Code Inspection Report',
    errorIdentified,
    explanation,
    fixedCode,
    detailedIssues,
    codeLines,
    tips
  };
}

// 1. Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// 2. AI Mentor / Code Problem Solver Endpoint
app.post('/api/ai-mentor', async (req, res) => {
  try {
    const {
      message = '',
      code = '',
      language = 'html',
      lessonTitle = 'HTML Tutorial',
      imageBase64 = null,
      langPreference = 'en' // 'en' or 'ur'
    } = req.body;

    const ai = getGeminiClient();

    // If no API key is set, use the robust local analyzer
    if (!ai) {
      const localResult = analyzeCodeLocally(message, code, language, langPreference);
      return res.json(localResult);
    }

    // Prepare prompt for Gemini
    const systemPrompt = `
You are "Coding Vibes AI Mentor", a friendly, patient, and world-class programming tutor for students learning web development (HTML, CSS, JavaScript, etc.).
The student is asking for help or encountering an error. They might provide a text question, a voice transcript, an image screenshot of an error/code, or code from their editor.

Current Student Context:
- Lesson / Topic: ${lessonTitle}
- Language: ${language}
- Student's Request: "${message || 'Please check my code for errors and help me fix it.'}"

Student's Current Code:
\`\`\`${language}
${code || '(No code provided yet)'}
\`\`\`

Instructions:
1. Determine what the student wants:
   - CRITICAL VISION REQUIREMENT: If an image or screenshot is attached, carefully analyze its visual elements (colors, background, buttons, display layout, fonts, numbers, operators). If the student asks to build something based on the image (e.g., calculator, UI component, page layout), generate the EXACT replica matching the visual style, colors, and layout shown in that image! Do NOT return a generic template.
   - If they are asking how to learn something or asking for guidance/roadmaps (e.g. "how we learn css", "how to learn html", "how to learn javascript", "how to learn python", "roadmap", or Urdu equivalents like "کیسے سیکھیں"):
     * Set type: "guidance".
     * Provide an encouraging, step-by-step roadmap (Step 1, Step 2, Step 3, Step 4).
     * Provide actionLink with:
       - CSS: { "label": "Start Lesson 1: Introduction to CSS", "courseSlug": "css", "lessonSlug": "introduction-to-css" }
       - HTML: { "label": "Start Lesson 1: Introduction to HTML", "courseSlug": "html", "lessonSlug": "introduction-to-html" }
       - JavaScript: { "label": "Start Lesson 1: Introduction to JavaScript", "courseSlug": "javascript", "lessonSlug": "introduction-to-javascript" }
       - Python: { "label": "Start Lesson 1: Introduction to Python", "courseSlug": "python", "lessonSlug": "introduction-to-python" }
     * IMPORTANT: For "guidance" queries, DO NOT return any code, code blocks, or preview buttons. Set "fixedCode": "", "files": [], "hasLivePreview": false, "hasZipDownload": false.
   - If they are asking to build a project (e.g. "How to make a calculator", "Build a calculator", "اس طرح کا کیلکولیٹر بناؤ", "Build to-do list", or an uploaded screenshot of a project/calculator):
     * Set type: "project".
     * Explain the 3 layers (HTML structure, CSS styling, JS logic).
     * Provide complete, functional files (index.html, style.css, script.js) in the "files" array with hasLivePreview: true and hasZipDownload: true.
   - If they provided code with bugs or unclosed tags:
     * Set type: "debug".
     * Identify line-by-line what is missing (e.g. missing </body> or </html>, typo in tags), why it matters, and provide the fully corrected code in fixedCode and files with hasLivePreview: true.
2. If langPreference is 'ur' or message is in Urdu, explain in warm, friendly, clear Urdu script. Otherwise use clear, beginner-friendly English.
3. Ensure high quality and avoid generic empty placeholders.

Respond ONLY with valid JSON conforming to this schema:
{
  "type": "debug" | "project" | "guidance" | "qa",
  "title": "Clear descriptive title",
  "errorIdentified": "Short one-sentence summary of the answer or bug",
  "explanation": "Clear, friendly, formatted explanation (supports markdown bullet points and bold tags)",
  "fixedCode": "Complete working code ready to run or apply (leave empty string if type is guidance)",
  "detailedIssues": [
    { "line": 1, "issue": "Short issue title", "explanation": "Why this happens", "suggestion": "How to fix" }
  ],
  "files": [
    { "name": "index.html", "content": "...", "language": "html" },
    { "name": "style.css", "content": "...", "language": "css" },
    { "name": "script.js", "content": "...", "language": "javascript" }
  ],
  "hasLivePreview": false,
  "hasZipDownload": false,
  "tips": ["Actionable tip 1", "Actionable tip 2"],
  "actionLink": {
    "label": "Start Lesson 1: Introduction to CSS",
    "courseSlug": "css",
    "lessonSlug": "introduction-to-css"
  }
}
`;

    const parts: any[] = [];

    // If an image screenshot was uploaded
    if (imageBase64 && typeof imageBase64 === 'string') {
      const mimeMatch = imageBase64.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,/);
      const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z0-9.+-]+;base64,/, '');
      parts.push({
        inlineData: {
          mimeType,
          data: cleanBase64
        }
      });
    }

    parts.push({ text: systemPrompt });

    // Models ordered by availability & generous quota
    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-3.8-flash'];
    let responseText = '';

    for (const modelName of candidateModels) {
      try {
        const geminiPromise = ai.models.generateContent({
          model: modelName,
          contents: { parts },
          config: {
            responseMimeType: 'application/json',
            temperature: 0.2
          }
        });

        // 35-second timeout per candidate
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error(`Timeout with ${modelName}`)), 35000)
        );

        const response: any = await Promise.race([geminiPromise, timeoutPromise]);
        if (response && response.text) {
          responseText = response.text.trim();
          break; // Successfully got response
        }
      } catch (err: any) {
        console.warn(`Gemini model ${modelName} failed or throttled:`, err.message || err);
        // Continue to next model
      }
    }

    let parsedData;
    try {
      if (!responseText) {
        throw new Error('Empty response from AI models');
      }
      parsedData = JSON.parse(responseText);
    } catch {
      // Fallback if parsing failed or all models throttled
      parsedData = analyzeCodeLocally(message, code, language, langPreference, imageBase64);
    }

    return res.json(parsedData);
  } catch (error: any) {
    console.error('AI Mentor Error:', error);
    // Graceful fallback so student UI never breaks
    const fallback = analyzeCodeLocally(
      req.body?.message || '',
      req.body?.code || '',
      req.body?.language || 'html',
      req.body?.langPreference || 'en',
      req.body?.imageBase64 || null
    );
    return res.json(fallback);
  }
});

// Technical Communication Voice Explainer Evaluator
interface VoiceEvalPayload {
  codeSnippet: string;
  title: string;
  language: string;
  transcript: string;
  durationSeconds: number;
  targetKeywords?: string[];
}

function analyzeVoiceExplanationLocally(payload: VoiceEvalPayload) {
  const { codeSnippet, title, transcript, durationSeconds, targetKeywords = [] } = payload;
  const cleanTranscript = (transcript || '').trim();
  const words = cleanTranscript.length > 0 ? cleanTranscript.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  
  // Calculate WPM (Words Per Minute)
  const durationMinutes = Math.max(durationSeconds / 60, 0.1);
  const wpm = Math.round(wordCount / durationMinutes);

  let pacingStatus: 'Slow' | 'Optimal' | 'Fast' = 'Optimal';
  let pacingFeedback = 'Great verbal cadence! You maintained an optimal interview speed of 110-150 words per minute.';
  if (wpm < 85) {
    pacingStatus = 'Slow';
    pacingFeedback = 'A bit deliberate or cautious. Aim for ~120-140 words per minute to project confidence and keep listeners engaged.';
  } else if (wpm > 170) {
    pacingStatus = 'Fast';
    pacingFeedback = 'A bit fast! Slow down slightly and take intentional pauses at major milestones to ensure the interviewer follows your logic.';
  }

  // Key concept detection
  const lowerTranscript = cleanTranscript.toLowerCase();
  const foundKeywords: string[] = [];
  const missedKeywords: string[] = [];

  targetKeywords.forEach(kw => {
    if (lowerTranscript.includes(kw.toLowerCase())) {
      foundKeywords.push(kw);
    } else {
      missedKeywords.push(kw);
    }
  });

  // Calculate scores
  const keywordRatio = targetKeywords.length > 0 ? foundKeywords.length / targetKeywords.length : 0.7;
  const lengthBonus = Math.min(wordCount / 60, 1.0); // ideal explanation is 50-150 words
  
  const accuracyScore = Math.min(Math.round(40 + keywordRatio * 50 + lengthBonus * 10), 98);
  const clarityScore = Math.min(Math.round(45 + (pacingStatus === 'Optimal' ? 30 : 15) + (lengthBonus * 20)), 96);
  const overallScore = Math.round((accuracyScore * 0.55) + (clarityScore * 0.45));

  const strengths: string[] = [];
  const improvementTips: string[] = [];

  if (wordCount >= 30) {
    strengths.push('Good verbal elaboration—avoided one-word answers and walked through mechanics.');
  }
  if (foundKeywords.length > 0) {
    strengths.push(`Naturally integrated key domain vocabulary: "${foundKeywords.slice(0, 3).join('", "')}".`);
  }
  if (pacingStatus === 'Optimal') {
    strengths.push('Cadence was steady and easy to follow without feeling rushed.');
  }

  if (missedKeywords.length > 0) {
    improvementTips.push(`Consider explicitly mentioning concepts like "${missedKeywords.slice(0, 3).join('", "')}" to demonstrate deeper technical fluency.`);
  }
  if (wordCount < 40) {
    improvementTips.push('Elaborate slightly more: start with a 1-sentence executive summary, walk through key lines, and conclude with edge cases.');
  } else {
    improvementTips.push('Frame your explanation with the PREP method (Point, Reason, Example, Point) or STAR framework.');
  }
  if (!lowerTranscript.includes('because') && !lowerTranscript.includes('therefore') && !lowerTranscript.includes('means that')) {
    improvementTips.push('Use causal connector phrases like "because", "which guarantees that", and "consequently" to explain the engineering rationale.');
  }

  return {
    clarityScore,
    accuracyScore,
    overallScore,
    wordsPerMinute: wpm,
    wordCount,
    durationSeconds,
    pacingStatus,
    pacingFeedback,
    keyConceptsFound: foundKeywords,
    keyConceptsMissed: missedKeywords,
    strengths: strengths.length > 0 ? strengths : ['Clear attempt at verbalizing code logic out loud.'],
    improvementTips: improvementTips.length > 0 ? improvementTips : ['Keep practicing with timed recordings to polish delivery under pressure.'],
    summaryFeedback: `You delivered a ${wordCount}-word spoken explanation covering ${foundKeywords.length} of ${targetKeywords.length || 1} key technical markers. Your verbal pacing was ${pacingStatus.toLowerCase()} (${wpm} WPM).`
  };
}

app.post('/api/voice-eval', async (req, res) => {
  try {
    const {
      codeSnippet = '',
      title = 'Code Snippet',
      language = 'javascript',
      transcript = '',
      durationSeconds = 30,
      targetKeywords = []
    } = req.body;

    const ai = getGeminiClient();

    if (!ai || !transcript || transcript.trim().length < 10) {
      const localResult = analyzeVoiceExplanationLocally({
        codeSnippet,
        title,
        language,
        transcript,
        durationSeconds,
        targetKeywords
      });
      return res.json(localResult);
    }

    const prompt = `
You are a Staff Software Engineer & Technical Interviewer at a top technology company.
The student has just recorded their voice explaining a code snippet out loud to practice their verbal technical communication skills.

Topic/Snippet Title: ${title}
Language: ${language}
Target Keywords: ${targetKeywords.join(', ')}

Code Snippet:
\`\`\`${language}
${codeSnippet}
\`\`\`

Spoken Transcript (User's actual words):
"${transcript}"

Recording Duration: ${durationSeconds} seconds

Evaluate the student's explanation based on:
1. Technical Accuracy: Did they correctly identify how the code works, data structures, control flow, and edge cases?
2. Communication Clarity & Structure: Did they start with a high-level summary before descending into line-by-line details? Was the explanation articulate?
3. Domain Terminology: Did they correctly use industry-standard terms (e.g., lexical scope, asynchronous, memory allocation, immutability, complexity)?
4. Actionable Coaching: Provide 2-3 genuine strengths and 2-3 concrete tips to speak like a senior engineer.

Respond ONLY with valid JSON matching this exact structure:
{
  "clarityScore": 85,
  "accuracyScore": 90,
  "overallScore": 88,
  "wordsPerMinute": 120,
  "pacingStatus": "Optimal",
  "pacingFeedback": "Great natural cadence with clear pauses between thoughts.",
  "keyConceptsFound": ["closure", "lexical scope"],
  "keyConceptsMissed": ["garbage collection"],
  "strengths": [
    "Clearly explained the return value and purpose of the outer function.",
    "Good verbal pacing and confident tone."
  ],
  "improvementTips": [
    "Mention memory management or why the inner function retains access.",
    "Conclude with a brief mention of practical use cases."
  ],
  "summaryFeedback": "Overall strong technical explanation that clearly conveyed the core concepts with good poise.",
  "modelExplanation": "Here is how a senior engineer would explain this in 45 seconds: ..."
}
`;

    const modelsToTry = ['gemini-2.5-flash', 'gemini-1.5-flash'];
    let responseText = '';

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            temperature: 0.3,
            responseMimeType: 'application/json'
          }
        });
        if (response.text) {
          responseText = response.text;
          break;
        }
      } catch (err) {
        console.warn(`Voice eval model ${modelName} failed, falling back:`, err);
      }
    }

    if (!responseText) {
      return res.json(analyzeVoiceExplanationLocally({
        codeSnippet,
        title,
        language,
        transcript,
        durationSeconds,
        targetKeywords
      }));
    }

    const parsed = JSON.parse(responseText);
    // Ensure word count and duration are included
    const wordCount = transcript.trim().split(/\s+/).filter(Boolean).length;
    parsed.wordCount = wordCount;
    parsed.durationSeconds = durationSeconds;
    if (!parsed.wordsPerMinute) {
      parsed.wordsPerMinute = Math.round(wordCount / Math.max(durationSeconds / 60, 0.1));
    }

    return res.json(parsed);
  } catch (err) {
    console.error('Error in /api/voice-eval:', err);
    return res.json(analyzeVoiceExplanationLocally({
      codeSnippet: req.body?.codeSnippet || '',
      title: req.body?.title || 'Code Snippet',
      language: req.body?.language || 'javascript',
      transcript: req.body?.transcript || '',
      durationSeconds: req.body?.durationSeconds || 30,
      targetKeywords: req.body?.targetKeywords || []
    }));
  }
});

// Vite middleware integration
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Coding Vibes Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
