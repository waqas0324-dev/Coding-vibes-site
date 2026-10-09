import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LiveEditor } from '../components/LiveEditor';

const DEFAULT_BOOTSTRAP = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap 5 Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Bootstrap 12-column responsive grid system divides each row into 12 equal sections.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Mobile-first responsive classes adapt seamlessly from phones to ultra-wide desktop monitors.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Pre-styled UI components including navbars, cards, modals, and alerts speed up development.</p>
    </div>
  </div>
</div>

</body>
</html>`;

const DEFAULT_PYTHON = `# Python 3 Example
print("Hello, Coding Vibes!")
print("Welcome to Python Programming")

def calculate_grade(score):
    if score >= 90:
        return "A+"
    elif score >= 80:
        return "A"
    elif score >= 70:
        return "B"
    else:
        return "C"

scores = [95, 82, 74, 68]
for s in scores:
    grade = calculate_grade(s)
    print(f"Score: {s} -> Grade: {grade}")`;

const DEFAULT_SQL = `-- SQL Query Example
SELECT CustomerID, CustomerName, ContactName, City, Country
FROM Customers
WHERE Country = 'Germany'
ORDER BY CustomerName ASC;`;

const DEFAULT_JAVA = `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    System.out.println("Welcome to Java Programming on Coding Vibes");
    
    int x = 10;
    int y = 25;
    int sum = x + y;
    System.out.println("Sum of " + x + " and " + y + " is: " + sum);
  }
}`;

const DEFAULT_PHP = `<!DOCTYPE html>
<html>
<body>

<?php
$txt = "PHP Programming";
echo "<h1>Welcome to " . $txt . "</h1>";
echo "<p>PHP is a server scripting language for dynamic web development.</p>";

$languages = array("PHP", "JavaScript", "Python", "SQL");
echo "<h3>Languages:</h3><ul>";
foreach ($languages as $lang) {
  echo "<li>" . $lang . "</li>";
}
echo "</ul>";
?>

</body>
</html>`;

const DEFAULT_C = `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("Welcome to C Programming on Coding Vibes\\n");
    
    int myNum = 15;
    printf("Value: %d\\n", myNum);
    return 0;
}`;

const DEFAULT_CPP = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "Welcome to C++ Programming on Coding Vibes" << endl;
    
    int a = 5;
    int b = 10;
    cout << "Product: " << (a * b) << endl;
    return 0;
}`;

const DEFAULT_CSHARP = `using System;

namespace CodingVibes {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello, World!");
            Console.WriteLine("Welcome to C# Programming with .NET 9");
            
            string appName = "Coding Vibes";
            Console.WriteLine($"Welcome to {appName}!");
        }
    }
}`;

const DEFAULT_CSS = `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
</head>
<body>

<h1>My First CSS Example</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

const DEFAULT_HTML = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`;

const DEFAULT_REACT = `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body style="font-family: system-ui, sans-serif; padding: 24px; background: #f8fafc;">

<div id="root"></div>

<script type="text/babel">
  function CounterApp() {
    const [count, setCount] = React.useState(0);

    return (
      <div style={{ background: "white", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", maxWidth: "420px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
        <h2 style={{ margin: "0 0 12px", color: "#0284c7" }}>React 18 State Demo</h2>
        <p style={{ color: "#64748b", margin: "0 0 16px" }}>Current Count: <strong style={{ color: "#0f172a", fontSize: "20px" }}>{count}</strong></p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ background: "#0284c7", color: "white", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
            Increment +
          </button>
          <button 
            onClick={() => setCount(0)}
            style={{ background: "#e2e8f0", color: "#334155", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" }}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<CounterApp />);
</script>

</body>
</html>`;

const DEFAULT_JAVASCRIPT = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; background: #f8fafc; }
    .card { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; max-width: 450px; }
    button { background: #04AA6D; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-size: 15px; font-weight: bold; }
  </style>
</head>
<body>

<div class="card">
  <h2>JavaScript Interactive Demo</h2>
  <p id="demo">Click the button below to execute JavaScript and update the DOM.</p>
  <button type="button" onclick="runJs()">Run JavaScript</button>
</div>

<script>
function runJs() {
  const el = document.getElementById("demo");
  el.innerHTML = "🎉 JavaScript successfully updated this content at " + new Date().toLocaleTimeString() + "!";
  el.style.color = "#04AA6D";
  el.style.fontWeight = "bold";
  console.log("DOM updated successfully!");
}
</script>

</body>
</html>`;

function getStarterForLanguage(lang: string): string {
  const l = (lang || '').toLowerCase();
  switch (l) {
    case 'css':
      return DEFAULT_CSS;
    case 'bootstrap':
      return DEFAULT_BOOTSTRAP;
    case 'python':
      return DEFAULT_PYTHON;
    case 'sql':
      return DEFAULT_SQL;
    case 'java':
      return DEFAULT_JAVA;
    case 'php':
      return DEFAULT_PHP;
    case 'c':
      return DEFAULT_C;
    case 'cpp':
      return DEFAULT_CPP;
    case 'csharp':
      return DEFAULT_CSHARP;
    case 'react':
    case 'react-js':
      return DEFAULT_REACT;
    case 'javascript':
    case 'js':
      return DEFAULT_JAVASCRIPT;
    default:
      return DEFAULT_HTML;
  }
}

export const TryitPage: React.FC = () => {
  const { params, goBack, navigateTo } = useNavigation();

  // Parse query parameters from hash or search (supports new tab URL)
  const hashQuery = window.location.hash.includes('?') 
    ? window.location.hash.split('?')[1] 
    : window.location.search.replace(/^\?/, '');
  const searchParams = new URLSearchParams(hashQuery);
  const urlLang = searchParams.get('lang');
  const urlTitle = searchParams.get('title');
  const urlCode = searchParams.get('code');

  // Parse payload from window.name if passed by opener tab
  const windowPayload = (() => {
    try {
      if (window.name && window.name.trim().startsWith('{')) {
        return JSON.parse(window.name);
      }
    } catch {}
    return null;
  })();

  // Determine language first
  const language = params.editorLanguage || urlLang || windowPayload?.language || (() => {
    try {
      return sessionStorage.getItem('codingvibes_tryit_lang') || localStorage.getItem('codingvibes_tryit_lang') || 'html';
    } catch {
      return 'html';
    }
  })();

  const title = params.editorTitle || urlTitle || windowPayload?.title || (() => {
    try {
      return sessionStorage.getItem('codingvibes_tryit_title') || localStorage.getItem('codingvibes_tryit_title') || `${language.toUpperCase()} Example`;
    } catch {
      return `${language.toUpperCase()} Example`;
    }
  })();

  // Retrieve code from params, URL query, window.name, or storage (guaranteed to receive the clicked lesson's code)
  const resolvedInitialCode = params.editorCode || urlCode || windowPayload?.code || (() => {
    try {
      const activeCode = localStorage.getItem('codingvibes_tryit_code');
      if (activeCode) {
        return activeCode;
      }
      const sessionCode = sessionStorage.getItem('codingvibes_tryit_code');
      if (sessionCode) {
        return sessionCode;
      }
      return getStarterForLanguage(language);
    } catch {
      return getStarterForLanguage(language);
    }
  })();

  const [activeCode, setActiveCode] = useState<string>(resolvedInitialCode);

  // Cross-tab synchronization via BroadcastChannel
  useEffect(() => {
    try {
      const bc = new BroadcastChannel('codingvibes_tryit_channel');
      bc.onmessage = (event) => {
        if (event.data && typeof event.data.code === 'string' && event.data.code) {
          setActiveCode(event.data.code);
        }
      };
      return () => {
        try { bc.close(); } catch {}
      };
    } catch {}
  }, []);

  const handleClose = () => {
    if (params.returnRoute) {
      navigateTo(params.returnRoute, params.returnParams);
      return;
    }

    try {
      const savedRoute = localStorage.getItem('codingvibes_tryit_return_route') as any;
      const savedParamsRaw = localStorage.getItem('codingvibes_tryit_return_params');
      const savedParams = savedParamsRaw ? JSON.parse(savedParamsRaw) : {};
      if (savedRoute && savedRoute !== 'tryit') {
        navigateTo(savedRoute, savedParams);
        return;
      }
    } catch {}

    try {
      window.close();
    } catch {}
    goBack();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-[#0c121e] w-screen h-screen flex flex-col overflow-hidden">
      <LiveEditor
        key={`${title}_${language}_${activeCode.slice(0, 40)}`}
        initialCode={activeCode}
        initialHtml={activeCode}
        language={language}
        title={title}
        isFullScreen={true}
        onClose={handleClose}
        enableBottomConsole={true}
        defaultShowConsole={true}
      />
    </div>
  );
};
