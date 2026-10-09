import { Project } from '../types';

// Showcase projects migrated from the original Coding Vibes site.
// Starter file code is kept exactly as-is (tested originals).

export const showcaseProjects: Project[] = [
  {
    id: "proj-showcase-dashboard",
    title: "Pulse Admin Dashboard",
    slug: "pulse-admin-dashboard",
    category: 'javascript',
    difficulty: "Intermediate",
    description: "Build a sleek admin dashboard for an online store. View revenue, orders and customers on one page, with a bar chart, live search and a theme toggle.",
    skills: [
      "HTML Structure",
      "CSS Grid",
      "DOM Manipulation",
      "Array Methods",
      "Events"
    ],
    requirements: [
      "Show metric cards for revenue, orders, customers and conversion rate.",
      "Render a revenue bar chart from the data array.",
      "Show a recent-orders table with a live search input.",
      "Add a top-products list with a filter button and a working theme toggle."
    ],
    instructions: [
      "Structure the page: sidebar navigation, header, metrics grid and panels.",
      "Style the layout with CSS Grid and add responsive breakpoints.",
      "Render the products, orders table and chart bars from JavaScript data.",
      "Wire up the order search, product filter and theme toggle with event listeners."
    ],
    estimatedTime: "2-3 hours",
    starterFiles: {
      html: "<!doctype html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\"><title>Pulse Admin Dashboard</title><link rel=\"stylesheet\" href=\"style.css\"></head>\n<body>\n<div class=\"app\">\n  <aside class=\"sidebar\"><div class=\"brand\">&lt;/&gt; Pulse</div><nav><button class=\"nav active\">Overview</button><button class=\"nav\">Orders</button><button class=\"nav\">Customers</button><button class=\"nav\">Settings</button></nav></aside>\n  <main class=\"main\"><header><div><small>CODING VIBES / ORIGINAL BUILD</small><h1>Good morning, Alex.</h1><p>Here is what is happening with your store today.</p></div><button id=\"themeBtn\">Toggle theme</button></header>\n    <section class=\"metrics\"><article><span>Revenue</span><strong>$24,680</strong><em>+18.4%</em></article><article><span>Orders</span><strong>1,284</strong><em>+12.1%</em></article><article><span>Customers</span><strong>8,942</strong><em>+8.7%</em></article><article><span>Conversion</span><strong>4.82%</strong><em>+1.3%</em></article></section>\n    <section class=\"grid\"><article class=\"panel chart-panel\"><div class=\"panel-head\"><h2>Revenue</h2><select id=\"period\"><option>7 days</option><option>30 days</option></select></div><div id=\"chart\" class=\"chart\"></div></article>\n    <article class=\"panel\"><div class=\"panel-head\"><h2>Top products</h2><button id=\"filterBtn\">Filter</button></div><div id=\"products\"></div></article></section>\n    <section class=\"panel\"><div class=\"panel-head\"><h2>Recent orders</h2><input id=\"orderSearch\" placeholder=\"Search order\"></div><div class=\"table-wrap\"><table><thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th></tr></thead><tbody id=\"orders\"></tbody></table></div></section>\n  </main>\n</div><script src=\"app.js\"></script>\n</body></html>",
      css: ":root{font-family:Inter,system-ui,sans-serif;color:#eafaf1;background:#061015}*{box-sizing:border-box}body{margin:0}.app{min-height:100vh;display:flex}.sidebar{width:230px;padding:24px;border-right:1px solid #17313a;background:#07151b;position:sticky;top:0;height:100vh}.brand{font-weight:900;font-size:22px;color:#35e77f;margin-bottom:35px}.sidebar nav{display:grid;gap:8px}.nav,#themeBtn,#filterBtn{border:1px solid transparent;background:transparent;color:#8fa3ac;padding:12px 14px;border-radius:12px;text-align:left;cursor:pointer}.nav.active,.nav:hover{background:#0d242a;color:#fff;border-color:#1a4a3a}.main{flex:1;padding:36px;max-width:1400px;margin:auto}header{display:flex;justify-content:space-between;gap:20px;align-items:start}small{color:#4fe98b;letter-spacing:.12em}h1{font-size:clamp(32px,4vw,52px);margin:8px 0}header p{color:#81949d}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:28px 0}.metrics article,.panel{border:1px solid #17313a;background:linear-gradient(145deg,#0a1a21,#071218);border-radius:18px;padding:20px}.metrics span,.metrics em{display:block;color:#81949d;font-size:12px;font-style:normal}.metrics strong{display:block;font-size:28px;margin:8px 0}.metrics em{color:#4fe98b}.grid{display:grid;grid-template-columns:1.5fr 1fr;gap:14px;margin-bottom:14px}.panel-head{display:flex;justify-content:space-between;align-items:center;gap:12px}.panel-head h2{margin:0}.chart{height:210px;display:flex;align-items:end;gap:10px;padding-top:25px}.bar{flex:1;background:linear-gradient(#28e97b,#0e6d42);border-radius:8px 8px 3px 3px;min-width:10px}.product{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid #15303a}.product:last-child{border:0}.product span{color:#879ba5}.table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;margin-top:10px}th,td{text-align:left;padding:14px;border-bottom:1px solid #15303a;color:#a9b8be}th{color:#6f838c;font-size:11px;text-transform:uppercase}.status{color:#55eb91}.status.warn{color:#f6c86a}select,input{background:#07141a;border:1px solid #1a3942;color:#dff7e9;border-radius:9px;padding:9px 11px}@media(max-width:900px){.sidebar{display:none}.main{padding:20px}.metrics{grid-template-columns:1fr 1fr}.grid{grid-template-columns:1fr}}@media(max-width:520px){.metrics{grid-template-columns:1fr}header{display:block}.main{padding:15px}}",
      js: "const products=[['Neon Keyboard',2480],['Focus Headset',1920],['CodePad Pro',1480],['USB-C Hub',1260],['Desk Light',980]];\nconst orders=[['#10482','Ayesha Khan','$128.00','Paid'],['#10481','Hamza Saleem','$84.50','Paid'],['#10480','Mina Carter','$214.20','Pending'],['#10479','Noah Reed','$62.00','Paid'],['#10478','Sara Ali','$156.80','Paid']];\nconst productBox=document.querySelector('#products');const orderBox=document.querySelector('#orders');\nfunction renderProducts(filter=''){productBox.innerHTML=products.filter(x=>x[0].toLowerCase().includes(filter.toLowerCase())).map(x=>'<div class=\"product\"><span>'+x[0]+'</span><b>$'+x[1].toLocaleString()+'</b></div>').join('')}\nfunction renderOrders(q=''){orderBox.innerHTML=orders.filter(x=>x.join(' ').toLowerCase().includes(q.toLowerCase())).map(x=>'<tr><td>'+x[0]+'</td><td>'+x[1]+'</td><td>'+x[2]+'</td><td class=\"status '+(x[3]==='Pending'?'warn':'')+'\">'+x[3]+'</td></tr>').join('')}\nconst chart=document.querySelector('#chart');[42,58,51,78,66,91,74,96,82,88,70,98].forEach(v=>{const b=document.createElement('i');b.className='bar';b.style.height=v+'%';chart.appendChild(b)});\nrenderProducts();renderOrders();document.querySelector('#orderSearch').addEventListener('input',e=>renderOrders(e.target.value));document.querySelector('#filterBtn').addEventListener('click',()=>renderProducts(productBox.dataset.filtered?'':'c'));document.querySelector('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));"
    }
  },
  {
    id: "proj-showcase-todo",
    title: "Focus Task Manager",
    slug: "focus-task-manager",
    category: 'javascript',
    difficulty: "Beginner",
    description: "A clean task manager to plan your day. Add tasks with priorities, filter them by status, and keep everything saved in the browser with LocalStorage.",
    skills: [
      "HTML Forms",
      "CSS Flexbox",
      "DOM Manipulation",
      "LocalStorage",
      "Events"
    ],
    requirements: [
      "Add tasks with low, medium or high priority.",
      "Mark tasks complete and clear all completed tasks with one button.",
      "Filter the list by All, Open or Completed.",
      "Save tasks in LocalStorage so they stay after the page reloads."
    ],
    instructions: [
      "Build the form, filter buttons and task list markup.",
      "Style the task cards and color-coded priority badges.",
      "Handle form submit, checkbox toggle and delete with event listeners.",
      "Save and load the task list from LocalStorage on every change."
    ],
    estimatedTime: "1-2 hours",
    starterFiles: {
      html: "<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Focus Task Manager</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main class=\"shell\"><header><div><small>CODING VIBES / ORIGINAL BUILD</small><h1>Focus Task Manager</h1><p>Plan less. Finish more.</p></div><button id=\"clearDone\">Clear completed</button></header><form id=\"taskForm\"><input id=\"taskInput\" required placeholder=\"What needs to be done?\"><select id=\"priority\"><option>Low</option><option selected>Medium</option><option>High</option></select><button>Add task</button></form><div class=\"filters\"><button data-filter=\"all\" class=\"active\">All</button><button data-filter=\"open\">Open</button><button data-filter=\"done\">Completed</button></div><section id=\"tasks\"></section><footer><span id=\"count\"></span><span>Saved locally</span></footer></main><script src=\"app.js\"></script></body></html>",
      css: "*{box-sizing:border-box}body{margin:0;background:#061015;color:#eafaf1;font-family:Inter,system-ui}.shell{width:min(900px,92%);margin:70px auto}small{color:#4fe98b;letter-spacing:.12em}h1{font-size:52px;margin:8px 0}p{color:#82969f}.shell header{display:flex;justify-content:space-between;gap:20px;align-items:end}.shell header button,.filters button,form button{border:1px solid #1b4144;background:#0b1d23;color:#dff7e9;border-radius:10px;padding:11px 14px;cursor:pointer}form{display:grid;grid-template-columns:1fr 130px auto;gap:10px;margin:30px 0}input,select{background:#07161c;border:1px solid #1a3942;color:#fff;border-radius:10px;padding:13px}.filters{display:flex;gap:8px;margin-bottom:14px}.filters .active{background:#22c55e;color:#031008;border-color:#22c55e}.task{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:16px;border:1px solid #16333b;background:#09171d;border-radius:14px;margin:8px 0}.task.done strong{text-decoration:line-through;color:#657980}.task small{letter-spacing:0;color:#81949d}.task button{background:none;border:0;color:#eafaf1;cursor:pointer}.high{color:#ff8d8d!important}.medium{color:#f5ca72!important}.low{color:#64e99a!important}footer{display:flex;justify-content:space-between;color:#61757e;font-size:12px;margin-top:18px}@media(max-width:650px){.shell{margin:30px auto}h1{font-size:40px}.shell header{display:block}form{grid-template-columns:1fr}.task{grid-template-columns:auto 1fr}.task>button{grid-column:2}}",
      js: "const key='cv-focus-tasks';let tasks=JSON.parse(localStorage.getItem(key)||'[]');let filter='all';const form=document.querySelector('#taskForm'),input=document.querySelector('#taskInput'),priority=document.querySelector('#priority'),list=document.querySelector('#tasks');\nfunction save(){localStorage.setItem(key,JSON.stringify(tasks));render()}\nfunction render(){const visible=tasks.filter(t=>filter==='all'||(filter==='done'&&t.done)||(filter==='open'&&!t.done));list.innerHTML=visible.map(t=>'<article class=\"task '+(t.done?'done':'')+'\"><input type=\"checkbox\" '+(t.done?'checked':'')+' data-id=\"'+t.id+'\"><div><strong>'+escapeHtml(t.title)+'</strong><br><small class=\"'+t.priority.toLowerCase()+'\">'+t.priority+' priority · '+new Date(t.created).toLocaleDateString()+'</small></div><button data-delete=\"'+t.id+'\">Delete</button></article>').join('');document.querySelector('#count').textContent=tasks.filter(t=>!t.done).length+' open task(s)';document.querySelectorAll('[data-id]').forEach(x=>x.onchange=()=>{const t=tasks.find(t=>t.id===Number(x.dataset.id));t.done=x.checked;save()});document.querySelectorAll('[data-delete]').forEach(x=>x.onclick=()=>{tasks=tasks.filter(t=>t.id!==Number(x.dataset.delete));save()})}\nfunction escapeHtml(s){return s.replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#039;'}[c]))}\nform.onsubmit=e=>{e.preventDefault();tasks.unshift({id:Date.now(),title:input.value.trim(),priority:priority.value,done:false,created:Date.now()});input.value='';save()};document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()});document.querySelector('#clearDone').onclick=()=>{tasks=tasks.filter(t=>!t.done);save()};render();"
    }
  },
  {
    id: "proj-showcase-weather",
    title: "Weather Explorer",
    slug: "weather-explorer",
    category: 'javascript',
    difficulty: "Intermediate",
    description: "A weather app with current conditions and a 5-day forecast strip. Search any demo city and get realistic weather details instantly.",
    skills: [
      "HTML Forms",
      "CSS Grid",
      "DOM Manipulation",
      "Data Lookup",
      "Conditional Rendering"
    ],
    requirements: [
      "Search box with a default city pre-filled.",
      "Show current temperature, condition, humidity and wind speed.",
      "Render a 5-day forecast strip under the current weather.",
      "Show a friendly message when the city is not in the demo data."
    ],
    instructions: [
      "Build the hero search section and the weather card layout.",
      "Style the current-weather panel and the forecast grid.",
      "Store each city's weather data in a JavaScript object.",
      "Render results on search and handle unknown cities gracefully."
    ],
    estimatedTime: "1-2 hours",
    starterFiles: {
      html: "<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Weather Explorer</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><section class=\"hero\"><small>CODING VIBES / ORIGINAL BUILD</small><h1>Weather Explorer</h1><p>Search a city and explore a realistic weather experience.</p><form id=\"search\"><input id=\"city\" value=\"Lahore\" aria-label=\"City\"><button>Search</button></form><div id=\"state\" class=\"state\">Ready to search.</div></section><section id=\"weather\" class=\"weather hidden\"></section></main><script src=\"app.js\"></script></body></html>",
      css: "*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(circle at 70% 10%,#124b43,#061015 42%);color:#ecfff4;font-family:Inter,system-ui}.hero{width:min(900px,92%);margin:80px auto 20px}.hero small{color:#4fe98b;letter-spacing:.12em}.hero h1{font-size:clamp(46px,8vw,86px);margin:12px 0 4px}.hero p{color:#91a4ac;font-size:18px}.hero form{display:flex;gap:10px;margin:28px 0}.hero input{flex:1;background:#07161d;border:1px solid #1d4148;color:#fff;padding:15px;border-radius:12px}.hero button{background:#22c55e;color:#031008;border:0;padding:0 22px;border-radius:12px;font-weight:800}.state{color:#78909a}.weather{width:min(900px,92%);margin:20px auto;padding:28px;border:1px solid #1b3c42;border-radius:24px;background:rgba(5,18,23,.82);display:grid;grid-template-columns:1fr 2fr;gap:20px}.weather.hidden{display:none}.current strong{font-size:70px}.current p{color:#8da1a9}.forecast{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.day{padding:16px;border:1px solid #17343a;border-radius:14px;background:#08161c}.day b,.day span{display:block}.day span{color:#71868f;margin-top:10px}@media(max-width:700px){.weather{grid-template-columns:1fr}.forecast{grid-template-columns:1fr 1fr}.hero{margin-top:35px}.hero form{display:grid}.hero button{height:48px}}",
      js: "const form=document.querySelector('#search'),input=document.querySelector('#city'),state=document.querySelector('#state'),box=document.querySelector('#weather');const cities={lahore:{temp:31,condition:'Clear skies',humidity:48,wind:14},london:{temp:17,condition:'Light rain',humidity:78,wind:12},newyork:{temp:22,condition:'Partly cloudy',humidity:61,wind:16},dubai:{temp:35,condition:'Sunny',humidity:42,wind:19},toronto:{temp:15,condition:'Cloudy',humidity:70,wind:11}};\nfunction normalize(s){return s.trim().toLowerCase().replace(/\\s+/g,'')};function render(city){const d=cities[normalize(city)];if(!d){state.textContent='City not in the demo dataset. Try Lahore, London, New York, Dubai or Toronto.';box.classList.add('hidden');return}state.textContent='Weather updated just now';box.classList.remove('hidden');const base=d.temp;box.innerHTML='<div class=\"current\"><small>'+city.toUpperCase()+'</small><strong>'+base+'°</strong><h2>'+d.condition+'</h2><p>Humidity '+d.humidity+'% · Wind '+d.wind+' km/h</p></div><div class=\"forecast\">'+['Now','10 AM','1 PM','4 PM','7 PM'].map((t,i)=>'<article class=\"day\"><b>'+t+'</b><strong>'+(base+i-1)+'°</strong><span>'+['Clear','Clear','Cloudy','Clear','Clear'][i]+'</span></article>').join('')+'</div>'};form.onsubmit=e=>{e.preventDefault();state.textContent='Loading weather...';setTimeout(()=>render(input.value),350)};render(input.value);"
    }
  },
  {
    id: "proj-showcase-portfolio",
    title: "Nova Developer Portfolio",
    slug: "nova-developer-portfolio",
    category: 'javascript',
    difficulty: "Beginner",
    description: "A personal developer portfolio page. Show your selected work, tell your story and add a contact section — all in one clean, responsive page.",
    skills: [
      "HTML Structure",
      "Semantic HTML",
      "CSS Grid",
      "Responsive Design",
      "Anchor Navigation"
    ],
    requirements: [
      "Sticky navigation linking to the Work, About and Contact sections.",
      "Hero section with a headline and a call-to-action button.",
      "Selected-work grid with three project cards.",
      "About and contact sections with smooth scrolling to anchors."
    ],
    instructions: [
      "Structure the nav, hero, work, about and contact sections with semantic tags.",
      "Style a dark theme with a responsive CSS Grid layout.",
      "Add smooth scrolling and anchor links in the navigation.",
      "Personalize the name, projects and contact email with your own details."
    ],
    estimatedTime: "1-2 hours",
    starterFiles: {
      html: "<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Nova — Developer Portfolio</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><nav><a href=\"#work\">Work</a><a href=\"#about\">About</a><a href=\"#contact\">Contact</a></nav><header class=\"hero\"><small>CODING VIBES / ORIGINAL BUILD</small><h1>Nova builds digital products that feel <span>alive.</span></h1><p>Frontend developer focused on accessible interfaces, thoughtful motion and clean systems.</p><a class=\"cta\" href=\"#work\">View selected work ↓</a></header><main><section id=\"work\"><small>SELECTED WORK</small><div class=\"projects\"><article><b>01</b><h2>Pulse Dashboard</h2><p>Analytics experience for a growing product team.</p></article><article><b>02</b><h2>Orbit Commerce</h2><p>Conversion-focused storefront with fast interactions.</p></article><article><b>03</b><h2>Focus Mobile</h2><p>Task planning concept built around calm workflows.</p></article></div></section><section id=\"about\" class=\"about\"><small>ABOUT</small><h2>I care about the details users notice without thinking.</h2><p>I turn product ideas into responsive interfaces, document decisions and keep accessibility in the loop from the first component.</p></section><section id=\"contact\"><small>CONTACT</small><h2>Have a project in mind?</h2><a class=\"cta\" href=\"mailto:hello@example.com\">hello@example.com</a></section></main><script src=\"script.js\"></script></body></html>",
      css: "*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#061015;color:#ecfff5;font-family:Inter,system-ui}body:before{content:'';position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at 75% 15%,rgba(34,197,94,.13),transparent 25%)}nav{position:sticky;top:0;z-index:5;display:flex;justify-content:flex-end;gap:24px;padding:22px 6%;background:rgba(6,16,21,.75);backdrop-filter:blur(14px);border-bottom:1px solid #143039}nav a{color:#91a4ad;text-decoration:none}nav a:hover{color:#fff}.hero,main{width:min(1120px,88%);margin:auto}.hero{padding:110px 0 90px}.hero small,section small{color:#4fe98b;letter-spacing:.12em}.hero h1{font-size:clamp(48px,8vw,100px);line-height:.95;max-width:950px;margin:15px 0}.hero h1 span{color:#34e77d}.hero p{max-width:680px;color:#91a4ad;font-size:19px;line-height:1.7}.cta{display:inline-block;margin-top:20px;padding:13px 17px;border-radius:10px;background:#22c55e;color:#041009;text-decoration:none;font-weight:800}section{padding:75px 0}.projects{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:25px}.projects article,.about{border:1px solid #18343c;background:#09171d;border-radius:20px;padding:25px;min-height:240px}.projects b{color:#4fe98b}.projects h2{font-size:28px;margin-top:70px}.projects p,.about p{color:#8498a1;line-height:1.7}.about{max-width:850px}.about h2{font-size:clamp(32px,5vw,58px);line-height:1.05}@media(max-width:700px){nav{justify-content:center}.hero{padding:70px 0}.projects{grid-template-columns:1fr}.projects h2{margin-top:45px}}",
      js: "document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>document.title='Nova — Developer Portfolio'));"
    }
  },
  {
    id: "proj-showcase-quiz",
    title: "JS Sprint Quiz",
    slug: "js-sprint-quiz",
    category: 'javascript',
    difficulty: "Intermediate",
    description: "A fun multiple-choice quiz app. Answer questions, get instant right-or-wrong feedback, watch the progress bar move, and restart any time.",
    skills: [
      "DOM Manipulation",
      "State Management",
      "Events",
      "Conditional Rendering",
      "Array Methods"
    ],
    requirements: [
      "Show one question at a time with four answer buttons.",
      "Mark the picked answer green or red instantly, revealing the correct one.",
      "Track the score and show a progress bar and question counter.",
      "Show a final result message with a restart button."
    ],
    instructions: [
      "Build the quiz card, progress bar and next-button markup.",
      "Style the answer buttons with correct and wrong states.",
      "Store the questions in an array and render the current one.",
      "Handle answers, scoring, progress updates and the restart flow."
    ],
    estimatedTime: "1-2 hours",
    starterFiles: {
      html: "<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>JS Sprint Quiz</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main class=\"quiz\"><header><small>CODING VIBES / ORIGINAL BUILD</small><span id=\"progress\"></span></header><section id=\"card\"></section><div class=\"bar\"><i id=\"bar\"></i></div><button id=\"next\" disabled>Next question →</button></main><script src=\"app.js\"></script></body></html>",
      css: "*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#061015;color:#edfff5;font-family:Inter,system-ui}.quiz{width:min(760px,92%)}header{display:flex;justify-content:space-between;color:#80959e;margin-bottom:30px}small{color:#4fe98b;letter-spacing:.12em}.card{padding:30px;border:1px solid #193740;background:#0a191f;border-radius:22px}.card h1{font-size:34px;line-height:1.15}.answer{width:100%;display:block;text-align:left;margin:10px 0;padding:15px;border:1px solid #1b3b43;background:#07151b;color:#cfe1d8;border-radius:12px;cursor:pointer}.answer:hover{border-color:#35e77f}.answer.correct{background:#0c3b27;border-color:#35e77f}.answer.wrong{background:#3a1a20;border-color:#ef7272}.bar{height:5px;background:#122a31;border-radius:99px;margin:18px 0}.bar i{display:block;height:100%;width:0;background:#22c55e;border-radius:inherit;transition:.25s}#next{border:0;background:#22c55e;color:#041009;font-weight:800;border-radius:11px;padding:13px 17px;cursor:pointer}#next:disabled{opacity:.45;cursor:not-allowed}.result{text-align:center;padding:35px}.result strong{font-size:64px;display:block;color:#4fe98b}@media(max-width:600px){.card{padding:20px}.card h1{font-size:27px}}",
      js: "const questions=[{q:'What does CSS primarily control?',a:['Database records','Presentation and layout','Server routes','Git branches'],c:1},{q:'Which method adds an item to the end of an array?',a:['push()','join()','slice()','map()'],c:0},{q:'Which keyword creates block-scoped state that can be reassigned?',a:['const','let','class','return'],c:1},{q:'What does fetch() return?',a:['A Promise','A CSS rule','An array only','A DOM element'],c:0},{q:'Why should a form input have a label?',a:['To improve semantics and accessibility','To make CSS faster','To create a database','To hide validation'],c:0}];let index=0,score=0,answered=false;const card=document.querySelector('#card'),next=document.querySelector('#next'),bar=document.querySelector('#bar'),progress=document.querySelector('#progress');\nfunction render(){if(index>=questions.length){card.innerHTML='<div class=\"result\"><small>QUIZ COMPLETE</small><strong>'+score+'/'+questions.length+'</strong><p>'+ (score===questions.length?'Excellent — every answer was correct.':score>=3?'Strong work — review the missed concepts once more.':'Good first attempt — revisit the lessons and try again.')+'</p></div>';next.textContent='Restart quiz';next.disabled=false;progress.textContent='Finished';bar.style.width='100%';return}answered=false;next.disabled=true;progress.textContent=(index+1)+' / '+questions.length;bar.style.width=(index/questions.length*100)+'%';const q=questions[index];card.innerHTML='<small>QUESTION '+(index+1)+'</small><h1>'+q.q+'</h1>'+q.a.map((a,i)=>'<button class=\"answer\" data-i=\"'+i+'\">'+String.fromCharCode(65+i)+'. '+a+'</button>').join('');document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{if(answered)return;answered=true;const i=Number(b.dataset.i);if(i===q.c){score++;b.classList.add('correct')}else{b.classList.add('wrong');document.querySelectorAll('.answer')[q.c].classList.add('correct')}next.disabled=false})}next.onclick=()=>{if(index>=questions.length){index=0;score=0;render()}else{index++;render()}};render();"
    }
  },
  {
    id: "proj-showcase-expense",
    title: "Ledger Expense Tracker",
    slug: "ledger-expense-tracker",
    category: 'javascript',
    difficulty: "Intermediate",
    description: "Track your spending like a ledger. Add expenses by category, filter them, delete entries, and watch the running total update live.",
    skills: [
      "HTML Forms",
      "DOM Manipulation",
      "LocalStorage",
      "Array Methods",
      "Events"
    ],
    requirements: [
      "Add expenses with a title, amount and category.",
      "Show a live total of all spending at the top.",
      "Filter the expense list with category buttons.",
      "Delete entries and persist everything in LocalStorage."
    ],
    instructions: [
      "Build the expense form, filter buttons and list markup.",
      "Style the total card and the expense rows.",
      "Handle add, delete and category filtering with event listeners.",
      "Save and load expenses from LocalStorage and keep the total in sync."
    ],
    estimatedTime: "2-3 hours",
    starterFiles: {
      html: "<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Ledger Expense Tracker</title><link rel=\"stylesheet\" href=\"style.css\"></head><body><main><header><div><small>CODING VIBES / ORIGINAL BUILD</small><h1>Ledger</h1><p>Know where your money goes.</p></div><div class=\"total\"><span>Total spent</span><strong id=\"total\">$0</strong></div></header><form id=\"form\"><input id=\"title\" required placeholder=\"Expense name\"><input id=\"amount\" required type=\"number\" min=\"0.01\" step=\"0.01\" placeholder=\"Amount\"><select id=\"category\"><option>Food</option><option>Travel</option><option>Work</option><option>Bills</option><option>Other</option></select><button>Add</button></form><div class=\"filters\"><button data-cat=\"All\" class=\"active\">All</button><button data-cat=\"Food\">Food</button><button data-cat=\"Travel\">Travel</button><button data-cat=\"Work\">Work</button><button data-cat=\"Bills\">Bills</button></div><section id=\"list\"></section></main><script src=\"app.js\"></script></body></html>",
      css: "*{box-sizing:border-box}body{margin:0;background:#061015;color:#edfff5;font-family:Inter,system-ui}main{width:min(1000px,92%);margin:65px auto}small{color:#4fe98b;letter-spacing:.12em}header{display:flex;justify-content:space-between;align-items:end;gap:20px}h1{font-size:72px;margin:4px 0}.total{padding:20px 24px;border:1px solid #193740;border-radius:16px;background:#0a191f}.total span{display:block;color:#7e929b;font-size:12px}.total strong{font-size:30px;color:#4fe98b}form{display:grid;grid-template-columns:2fr 1fr 150px auto;gap:10px;margin:32px 0}input,select{background:#07151b;color:#fff;border:1px solid #1a3941;border-radius:10px;padding:13px}form button{border:0;border-radius:10px;background:#22c55e;font-weight:800}.filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:15px}.filters button{background:#0a191f;color:#90a4ac;border:1px solid #18353d;border-radius:9px;padding:10px 13px}.filters .active{background:#22c55e;color:#041009;border-color:#22c55e}.expense{display:grid;grid-template-columns:1fr auto auto;gap:20px;align-items:center;padding:16px;border:1px solid #17333b;background:#09171d;border-radius:14px;margin:8px 0}.expense p{margin:4px 0;color:#80949d}.expense strong{font-size:17px}.expense button{background:none;border:0;color:#ff9b9b;cursor:pointer}@media(max-width:700px){main{margin:30px auto}header{display:block}h1{font-size:55px}.total{margin-top:18px}form{grid-template-columns:1fr}.expense{grid-template-columns:1fr auto}.expense button{grid-column:2;grid-row:1/3}}",
      js: "const key='cv-ledger';let items=JSON.parse(localStorage.getItem(key)||'[]');let category='All';const list=document.querySelector('#list');\nfunction save(){localStorage.setItem(key,JSON.stringify(items));render()}\nfunction render(){const visible=items.filter(x=>category==='All'||x.category===category);const total=items.reduce((s,x)=>s+x.amount,0);document.querySelector('#total').textContent='$'+total.toFixed(2);list.innerHTML=visible.length?visible.map(x=>'<article class=\"expense\"><div><strong>'+escapeHtml(x.title)+'</strong><p>'+x.category+' · '+new Date(x.date).toLocaleDateString()+'</p></div><strong>$'+x.amount.toFixed(2)+'</strong><button data-id=\"'+x.id+'\">Delete</button></article>').join(''):'<p style=\"color:#72868f\">No expenses in this category yet.</p>';document.querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>{items=items.filter(x=>x.id!==Number(b.dataset.id));save()})}\nfunction escapeHtml(s){return s.replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#039;'}[c]))}\ndocument.querySelector('#form').onsubmit=e=>{e.preventDefault();items.unshift({id:Date.now(),title:document.querySelector('#title').value.trim(),amount:Number(document.querySelector('#amount').value),category:document.querySelector('#category').value,date:Date.now()});e.target.reset();save()};document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{category=b.dataset.cat;document.querySelectorAll('[data-cat]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render()});render();"
    }
  },
];
