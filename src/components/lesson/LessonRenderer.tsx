import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useLearning } from '../../context/LearningContext';
import { Lesson, Course, CourseModule, LessonContent } from '../../types';
import { FormattedText } from './FormattedText';
import { Callout } from './Callout';
import { DiagramVisualizer } from './DiagramVisualizer';
import { ComparisonTable } from './ComparisonTable';
import { CodeAnnotation } from './CodeAnnotation';
import { ExpectedOutput } from './ExpectedOutput';
import { LessonQuiz } from './LessonQuiz';
import { LessonPractice } from './LessonPractice';
import { LessonChallenge } from './LessonChallenge';
import { HtmlTagSlotExercise } from './HtmlTagSlotExercise';
import { HtmlPageStructureDiagram } from './HtmlPageStructureDiagram';
import { HtmlHistoryTable } from './HtmlHistoryTable';
import { NotepadWindowMockup, SaveAsDialogMockup } from './NotepadWindowMockup';
import { BrowserWindowMockup } from './BrowserWindowMockup';
import { VsCodeSetupGuide } from './VsCodeSetupGuide';
import { CodeBlock } from '../CodeBlock';
import { LiveEditor, buildWebDocument } from '../LiveEditor';
import { TechBadge } from '../TechBadge';
import {
  CheckCircle2,
  BookOpen,
  Sparkles,
  Award,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Check,
  Code2,
  ExternalLink,
  Clock,
  Layers,
  HelpCircle,
  Play,
  Bookmark,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface LessonRendererProps {
  lesson: Lesson;
  course: Course;
  currentModule?: CourseModule;
  content: LessonContent;
  lessonIndex: number;
  totalLessons: number;
  prevLesson: { courseSlug: string; lessonSlug: string; title: string } | null;
  nextLesson: { courseSlug: string; lessonSlug: string; title: string } | null;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onNextLesson: () => void;
  onNavigate: (view: string, params?: Record<string, string>) => void;
}

export const LessonRenderer: React.FC<LessonRendererProps> = ({
  lesson,
  course,
  currentModule,
  content,
  lessonIndex,
  totalLessons,
  prevLesson,
  nextLesson,
  isCompleted,
  onToggleComplete,
  onNextLesson,
  onNavigate,
}) => {
  const practiceItems = lesson.practice || [];
  const quizQuestions = lesson.quiz || [];

  const getLanguageFallback = (slug: string, title: string) => {
    switch (slug) {
      case 'css':
        return `<!DOCTYPE html>
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
      case 'bootstrap':
        return `<!DOCTYPE html>
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
      <p>Bootstrap makes responsive web development faster and easier.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Clean utility classes format containers, spacing, and typography.</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Works across all modern browsers and viewport sizes.</p>
    </div>
  </div>
</div>

</body>
</html>`;
      case 'python':
        return `# Python 3 Example - ${title}
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
      case 'sql':
        return `-- SQL Example - ${title}
SELECT CustomerID, CustomerName, ContactName, City, Country
FROM Customers
WHERE Country = 'Germany'
ORDER BY CustomerName ASC;`;
      case 'java':
        return `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    System.out.println("Welcome to Java Programming: ${title}");
    
    int x = 10;
    int y = 25;
    int sum = x + y;
    System.out.println("Sum of " + x + " and " + y + " is: " + sum);
  }
}`;
      case 'php':
        return `<!DOCTYPE html>
<html>
<body>

<?php
$txt = "PHP Programming: ${title}";
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
      case 'c':
        return `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("Welcome to C Programming: ${title}\\n");
    
    int myNum = 15;
    printf("Value: %d\\n", myNum);
    return 0;
}`;
      case 'cpp':
        return `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "Welcome to C++ Programming: ${title}" << endl;
    
    int a = 5;
    int b = 10;
    cout << "Product: " << (a * b) << endl;
    return 0;
}`;
      case 'csharp':
        return `using System;

namespace CodingVibes {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello, World!");
            Console.WriteLine("Welcome to C# Programming: ${title}");
            
            string appName = "Coding Vibes";
            Console.WriteLine($"Welcome to {appName}!");
        }
    }
}`;
      default:
        return `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>${title}</h1>
<p>Learn ${course.title} with Coding Vibes.</p>

</body>
</html>`;
    }
  };

  const starterCodeForLang = getLanguageFallback(course.slug, lesson.title);
  const displayCode = content.codeExample || starterCodeForLang;
  const starterCss = content.starterCode?.css || content.tryItYourself?.css || '';
  const starterJs = content.starterCode?.js || content.tryItYourself?.js || '';

  const courseTitleUpper = course.title.toUpperCase() + ' TUTORIAL';

  const isHtml = course.slug === 'html';
  const isCss = course.slug === 'css';
  const isBootstrap = course.slug === 'bootstrap';
  const lessonSlug = lesson.slug.toLowerCase();
  const lessonTitle = lesson.title.toLowerCase();
  const isHtmlIntro = isHtml && (lessonSlug.includes('intro') || lessonTitle.includes('introduction') || lesson.id.endsWith('l1'));
  const isHtmlEditors = isHtml && (lessonSlug.includes('editor') || lessonTitle.includes('editor') || lesson.id.endsWith('l2'));
  const isBootstrapIntro = isBootstrap && (lessonSlug.includes('intro') || lessonTitle.includes('introduction') || lessonSlug === 'overview' || lesson.id.endsWith('l1'));
  const isBootstrapGrid = isBootstrap && (lessonSlug.includes('grid') || lessonTitle.includes('grid'));

  // Extract pure CSS for the lesson page card if this is a CSS lesson (Matching W3Schools Image 2)
  const lessonSnippetForCard = (() => {
    if (!isCss) return displayCode;
    const styleMatch = displayCode.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    if (styleMatch && styleMatch[1]) {
      return styleMatch[1].trim();
    }
    const isFullDoc = displayCode.toLowerCase().includes('<!doctype') || displayCode.toLowerCase().includes('<html') || displayCode.toLowerCase().includes('<body');
    if (!isFullDoc) {
      return displayCode.trim();
    }
    return displayCode.trim();
  })();

  // Prepare the full runnable HTML document for Tryit editor (Matching W3Schools Image 3)
  const tryitRunnableCode = (() => {
    if (!isCss) return displayCode;
    const isFullDoc = displayCode.toLowerCase().includes('<!doctype') || (displayCode.toLowerCase().includes('<html') && displayCode.toLowerCase().includes('<body'));
    if (isFullDoc) {
      return displayCode;
    }
    return `<!DOCTYPE html>
<html>
<head>
<style>
${lessonSnippetForCard}
</style>
</head>
<body>

<h1>${lesson.title}</h1>
<p>This is a paragraph.</p>

</body>
</html>`;
  })();

  const renderCssSyntaxHighlighted = (codeStr: string) => {
    const lines = codeStr.split('\n');
    return (
      <div className="font-mono text-xs sm:text-sm font-medium">
        {lines.map((line, idx) => {
          const selectorMatch = line.match(/^(\s*)([^{]+)(\{)(.*)$/);
          if (selectorMatch) {
            const [, indent, sel, brace, rest] = selectorMatch;
            return (
              <div key={idx} className="leading-relaxed whitespace-pre">
                <span>{indent}</span>
                <span className="text-[#831843] dark:text-[#f472b6] font-semibold">{sel}</span>
                <span className="text-gray-800 dark:text-gray-200">{brace}</span>
                {rest && <span className="text-gray-500">{rest}</span>}
              </div>
            );
          }

          const propMatch = line.match(/^(\s*)([a-zA-Z0-9_-]+)(\s*:\s*)([^;]+)(;?)(.*)$/);
          if (propMatch) {
            const [, indent, prop, colon, val, semi, rest] = propMatch;
            return (
              <div key={idx} className="leading-relaxed whitespace-pre">
                <span>{indent}</span>
                <span className="text-[#b91c1c] dark:text-[#f87171]">{prop}</span>
                <span className="text-gray-800 dark:text-gray-200">{colon}</span>
                <span className="text-[#2563eb] dark:text-[#60a5fa]">{val}</span>
                <span className="text-gray-800 dark:text-gray-200">{semi}</span>
                {rest && <span className="text-gray-500">{rest}</span>}
              </div>
            );
          }

          if (line.trim().startsWith('/*')) {
            return (
              <div key={idx} className="text-[#04AA6D] dark:text-emerald-400 italic leading-relaxed whitespace-pre">
                {line}
              </div>
            );
          }

          return (
            <div key={idx} className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre">
              {line || '\u00A0'}
            </div>
          );
        })}
      </div>
    );
  };

  const { openTryit } = useNavigation();
  const { isModuleBookmarked, toggleBookmarkModule } = useLearning();

  const currentModuleId = currentModule?.id || '';
  const isBookmarked = currentModuleId ? isModuleBookmarked(currentModuleId, course.slug) : false;

  const handleBookmarkToggle = () => {
    if (!currentModuleId) return;
    toggleBookmarkModule(currentModuleId, course.slug);
  };

  return (
    <article className="w-full max-w-4xl mx-auto space-y-8 pb-20 text-gray-900 dark:text-gray-100 transition-colors">
      {/* 1. TOP HEADER ROW (W3Schools Layout: Topic Title at the top) */}
      <div className="space-y-3">
        {/* Category breadcrumb / Tag */}
        <div className="flex items-center space-x-2 text-xs font-bold font-mono text-[#04AA6D] dark:text-emerald-400 uppercase tracking-wider">
          <span>{course.title} Tutorial</span>
          <span>/</span>
          <span>{currentModule?.title || 'Lessons'}</span>
        </div>

        {/* Header Title with Bookmark & Done Button */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5">
            <button
              onClick={handleBookmarkToggle}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer flex items-center space-x-1.5 shrink-0 ${
                isBookmarked
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-[#04AA6D] dark:text-emerald-400 border-emerald-300 dark:border-emerald-700/60 shadow-xs'
                  : 'bg-white dark:bg-[#141d2e] text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-gray-200 dark:border-[#1e293b] hover:border-[#04AA6D]'
              }`}
              title={
                isBookmarked
                  ? `"${currentModule?.title || 'This module'}" is saved in your Profile. Click to remove.`
                  : `Save "${currentModule?.title || 'this module'}" to your Profile (Saved for Later)`
              }
              aria-label={isBookmarked ? 'Remove Module Bookmark' : 'Save Module for Later'}
            >
              <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${isBookmarked ? 'fill-[#04AA6D]' : ''}`} />
              <span className="text-[11px] font-bold hidden md:inline">
                {isBookmarked ? 'Saved' : 'Save for Later'}
              </span>
            </button>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282A35] dark:text-white tracking-tight">
              {lesson.title}
            </h1>
          </div>

          <button
            onClick={onToggleComplete}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition border shrink-0 cursor-pointer ${
              isCompleted
                ? 'bg-[#04AA6D]/15 text-[#04AA6D] border-[#04AA6D]'
                : 'bg-gray-100 dark:bg-[#141d2e] text-gray-700 dark:text-gray-300 border-gray-300 dark:border-[#1e293b] hover:border-[#04AA6D]'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-[#04AA6D]' : 'text-gray-400'}`} />
            <span>{isCompleted ? 'Completed ✓' : 'Mark Done'}</span>
          </button>
        </div>

        {/* Top Navigation Buttons: Clean single chevron and centered bold text */}
        <div className="flex items-center justify-between pt-2 pb-4 border-b border-gray-200 dark:border-[#1e293b]">
          {prevLesson ? (
            <button
              onClick={() => {
                onNavigate('lesson', {
                  courseSlug: prevLesson.courseSlug,
                  lessonSlug: prevLesson.lessonSlug
                });
                window.scrollTo(0, 0);
              }}
              className="flex items-center justify-center space-x-1.5 px-5 py-2 rounded bg-white dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] hover:bg-gray-100 dark:hover:bg-[#1e293b] text-gray-800 dark:text-gray-100 font-extrabold text-sm shadow-xs transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>Previous</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center justify-center space-x-1.5 px-5 py-2 rounded bg-white dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] hover:bg-gray-100 dark:hover:bg-[#1e293b] text-gray-800 dark:text-gray-100 font-extrabold text-sm shadow-xs transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>Home</span>
            </button>
          )}

          {nextLesson && (
            <button
              onClick={onNextLesson}
              className="flex items-center justify-center space-x-1.5 px-6 py-2 rounded bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm shadow-xs transition cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          )}
        </div>
      </div>

      {/* 2. OVERVIEW HERO CARD (Only shown on Course Home / First Overview lesson, NOT repeated on every topic) */}
      {(lessonSlug.includes('home') || lessonSlug === 'overview') && (
        <div className="p-6 sm:p-8 rounded-xl bg-gray-50 dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#282A35] dark:text-white">
                Learn {course.title}
              </h2>
              <ul className="space-y-1.5 text-sm sm:text-base text-gray-700 dark:text-gray-300 pt-1">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D]" />
                  <span>{course.title} is the standard language for modern software & web development.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D]" />
                  <span>With {course.title} you can build your own projects, apps, and websites.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D]" />
                  <span>{course.title} is easy to learn — You will enjoy it!</span>
                </li>
              </ul>
            </div>

            <div className="hidden sm:block shrink-0 pl-4">
              <TechBadge type={course.badgeType} size="lg" />
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('example-sandbox');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded bg-[#04AA6D] hover:bg-[#03945f] text-white font-bold text-sm shadow-xs transition inline-flex items-center space-x-1"
            >
              <span>Learn {course.title} Now &gt;</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. LESSON CONTENT & INTRO */}
      <div className="space-y-4 pt-1">
        {content.heroTagline && (
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            {content.heroTagline}
          </p>
        )}

        {content.introduction && (
          <div className="text-base text-gray-800 dark:text-gray-200 leading-relaxed space-y-3">
            <FormattedText text={content.introduction} />
          </div>
        )}
      </div>

      {/* 5. CORE DEFINITION BOX */}
      {content.definition && (
        <Callout
          box={{
            type: 'definition',
            title: content.definition.term,
            content: content.definition.explanation
          }}
        />
      )}

      {/* 6. WHY IT MATTERS */}
      {content.whyItMatters && (
        <div className="p-5 rounded-xl bg-gray-50 dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] space-y-2">
          <div className="flex items-center space-x-2 text-[#04AA6D] font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Why This Concept Matters</span>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <FormattedText text={content.whyItMatters} />
          </div>
        </div>
      )}

      {/* 7. REAL WORLD ANALOGY */}
      {content.realWorldAnalogy && (
        <section className="p-5 rounded-xl bg-amber-50/50 dark:bg-[#151108] border border-amber-200 dark:border-amber-500/20 space-y-3">
          <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>Real-World Analogy: {content.realWorldAnalogy.title}</span>
          </div>
          <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
            <FormattedText text={content.realWorldAnalogy.story} />
          </div>

          {content.realWorldAnalogy.comparison && content.realWorldAnalogy.comparison.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {content.realWorldAnalogy.comparison.map((c, i) => (
                <div key={i} className="p-3 rounded-lg bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] space-y-0.5">
                  <div className="text-xs font-bold text-[#04AA6D] font-mono">{c.item}</div>
                  <div className="text-xs text-gray-700 dark:text-gray-300">{c.meaning}</div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 8. VISUAL CONCEPT GUIDE */}
      {content.diagram && (
        <section className="space-y-3 pt-2">
          <h3 className="text-xl font-bold text-[#282A35] dark:text-white tracking-tight flex items-center space-x-2">
            <Layers className="w-5 h-5 text-[#04AA6D]" />
            <span>Visual Concept Guide</span>
          </h3>
          <DiagramVisualizer diagram={content.diagram} />
        </section>
      )}

      {/* HTML EDITORS SPECIAL LESSON FLOW */}
      {isHtmlEditors ? (
        <div className="space-y-10 pt-2">
          {/* 1. TOP: Coding Vibes Built-in Online Editor Sandbox ("Try it Yourself") */}
          <section id="example-sandbox" className="space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-[#04AA6D]/10 text-[#04AA6D] border border-[#04AA6D]/20">
                <Code2 className="w-3.5 h-3.5" />
                <span>Instant In-Browser Coding</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b]">
                Coding Vibes Online Editor - "Try it Yourself"
              </h2>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                With our free built-in online editor, you can edit HTML code and instantly preview the rendered result right inside your browser without installing any software.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                It is the fastest, easiest tool to experiment, test tags, and learn hands-on:
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#e7e9eb] dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[#282A35] dark:text-white">
                Example
              </h3>

              <div className="bg-white dark:bg-[#0c121e] p-4 rounded-lg border-l-4 border-[#04AA6D] shadow-xs font-mono text-xs sm:text-sm text-gray-900 dark:text-gray-100 overflow-x-auto font-medium">
                <pre className="font-mono leading-relaxed">{displayCode}</pre>
              </div>

              <div className="pt-1">
                <button
                  onClick={() =>
                    openTryit(
                      displayCode,
                      course.slug,
                      `${course.title} Example`
                    )
                  }
                  className="px-6 py-2.5 rounded bg-[#04AA6D] hover:bg-[#03945f] active:scale-95 text-white font-extrabold text-sm shadow-xs transition inline-flex items-center space-x-1.5 cursor-pointer"
                  title="Try it Yourself in Coding Vibes Tryit Editor"
                >
                  <span>Try it Yourself »</span>
                </button>
              </div>
            </div>
          </section>

          {/* 2. SECOND: Learn HTML Using Notepad (PC) or TextEdit (Mac) */}
          <section className="space-y-4 pt-4 border-t border-gray-200 dark:border-[#1e293b]">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#282A35] dark:text-white tracking-tight">
                Learn HTML Using Notepad or TextEdit
              </h2>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                If you want to create and run HTML files locally on your own computer, a simple text editor is the best place to start.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                For beginners learning how web files work on disk, we recommend a simple plain-text editor like <strong>Notepad</strong> (Windows PC) or <strong>TextEdit</strong> (Mac).
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                Follow the 4 simple steps below to create and launch your first local web page:
              </p>
            </div>

            {/* Step 1 */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b] flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#04AA6D] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <span>Step 1: Open Notepad (PC)</span>
              </h3>

              {/* Windows 8 or later */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-800 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200">
                    Windows
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight">
                    Windows 8 or later:
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                  Open the <strong>Start Screen</strong> or click the Windows search icon at the bottom of your screen. Type <span className="font-mono font-bold bg-white dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">Notepad</span> and press Enter.
                </p>
              </div>

              {/* Windows 7 or earlier */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-800 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    Windows Legacy
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight">
                    Windows 7 or earlier:
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                  Open <strong>Start &gt; Programs &gt; Accessories &gt; Notepad</strong>.
                </p>
              </div>

              {/* Step 1: Open TextEdit (Mac) */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-800 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200">
                    macOS
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight">
                    Step 1: Open TextEdit (Mac)
                  </h4>
                </div>
                <div className="space-y-2 text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                  <p>
                    Open <strong>Finder &gt; Applications &gt; TextEdit</strong>.
                  </p>
                  <p>
                    Also change some preferences to get the application to save files correctly. In <strong>Preferences &gt; Format &gt;</strong> choose <strong>"Plain Text"</strong>.
                  </p>
                  <p>
                    Then under <strong>"Open and Save"</strong>, check the box that says <strong>"Display HTML files as HTML code instead of formatted text"</strong>.
                  </p>
                  <p>
                    Then open a new document to place the code.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b] flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#04AA6D] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span>Step 2: Write Some HTML</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                Write or copy the following HTML code into Notepad:
              </p>
              <NotepadWindowMockup />
            </div>

            {/* Step 3 */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b] flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#04AA6D] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span>Step 3: Save the HTML Page</span>
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                <p>
                  Save the file on your computer. Select <strong>File &gt; Save as</strong> in the Notepad menu.
                </p>
                <p>
                  Name the file <strong className="font-mono font-bold text-[#04AA6D] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-300 dark:border-gray-700">index.htm</strong> and set the encoding to <strong className="font-mono font-bold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-300 dark:border-gray-700">UTF-8</strong> (which is the preferred encoding for HTML files).
                </p>
              </div>

              {/* Pristine Save As dialog mockup */}
              <SaveAsDialogMockup fileName="index.htm" saveIn="Desktop" encoding="UTF-8" />

              <div className="p-3.5 rounded-lg bg-yellow-50 dark:bg-amber-950/30 border border-yellow-200 dark:border-amber-800 text-xs sm:text-sm text-yellow-900 dark:text-yellow-200 flex items-start space-x-2">
                <Lightbulb className="w-4 h-4 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Tip:</strong> You can use either <code className="font-mono font-bold">.htm</code> or <code className="font-mono font-bold">.html</code> as file extension. There is no difference, it is entirely up to you.
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b] flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#04AA6D] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <span>Step 4: View the HTML Page in Your Browser</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                Open the saved HTML file in your favorite browser (double click on the file, or right-click and choose "Open with").
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                The result will look much like this:
              </p>

              <BrowserWindowMockup
                url="file:///C:/Users/yourname/Desktop/index.htm"
                heading="My First Heading"
                paragraph="My first paragraph."
              />
            </div>
          </section>

          {/* 3. THIRD: Professional Code Editor - Visual Studio Code Setup Guide */}
          <section className="pt-4 border-t border-gray-200 dark:border-[#1e293b]">
            <VsCodeSetupGuide />
          </section>

          {/* 4. Why is the File Usually Named index.html? */}
          {content.sections && content.sections.length > 0 && (
            <div className="space-y-8 pt-2">
              {content.sections.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b]">
                    {sec.title}
                  </h2>
                  <div className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed space-y-3">
                    <FormattedText text={sec.content || (sec.paragraphs ? sec.paragraphs.join('\n\n') : '')} />
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Regular Lessons Content */
        <>
          {/* 9. CONTENT SECTIONS */}
          {content.sections && content.sections.length > 0 && (
            <div className="space-y-8 pt-2">
              {content.sections.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  {sec.level === 3 ? (
                    <h3 className="text-lg font-bold text-[#282A35] dark:text-white tracking-tight">
                      {sec.title}
                    </h3>
                  ) : (
                    <h2 className="text-xl sm:text-2xl font-bold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b]">
                      {sec.title}
                    </h2>
                  )}
                  <div className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed space-y-3">
                    <FormattedText text={sec.content || (sec.paragraphs ? sec.paragraphs.join('\n\n') : '')} />
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* 10. SYNTAX ANATOMY */}
          {content.syntaxAnatomy && (
            <section className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#282A35] dark:text-white tracking-tight">
                Syntax Breakdown: <span className="text-[#04AA6D] font-mono">{content.syntaxAnatomy.concept}</span>
              </h3>
              <CodeAnnotation
                annotations={content.syntaxAnatomy.parts || []}
                title={content.syntaxAnatomy.concept}
              />
            </section>
          )}

          {/* 11. W3SCHOOLS ICONIC "TRY IT YOURSELF" EXAMPLE BOX */}
          <section id="example-sandbox" className="space-y-4 pt-4">
            <div className="p-5 sm:p-6 rounded-xl bg-[#e7e9eb] dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[#282A35] dark:text-white">
                {course.title} Example
              </h3>

              {/* White Code Snippet Container */}
              <div className="bg-white dark:bg-[#0c121e] p-4 rounded-lg border-l-4 border-[#04AA6D] shadow-xs font-mono text-xs sm:text-sm text-gray-900 dark:text-gray-100 overflow-x-auto font-medium">
                {isCss ? (
                  renderCssSyntaxHighlighted(lessonSnippetForCard)
                ) : (
                  <pre className="font-mono leading-relaxed">{displayCode}</pre>
                )}
              </div>

              <div className="pt-1">
                <button
                  onClick={() =>
                    openTryit(
                      tryitRunnableCode,
                      course.slug,
                      `${course.title} - ${lesson.title}`
                    )
                  }
                  className="px-6 py-2.5 rounded bg-[#04AA6D] hover:bg-[#03945f] active:scale-95 text-white font-extrabold text-sm shadow-xs transition inline-flex items-center space-x-1.5 cursor-pointer"
                  title="Try it Yourself in Tryit Editor"
                >
                  <span>Try it Yourself »</span>
                </button>
              </div>
            </div>
          </section>

          {/* BOOTSTRAP VERSION SELECTOR CARDS (Matching User Screenshot 3) */}
          {isBootstrapIntro && (
            <div className="space-y-6 pt-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b]">
                  Bootstrap Versions
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  This tutorial follows Bootstrap 5, which is the newest version of Bootstrap. We also offer tutorials for older versions:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* B3 Card */}
                <div className="bg-[#6f42c1]/10 dark:bg-[#6f42c1]/20 border border-[#6f42c1]/30 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-xs">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-[#6f42c1] text-white font-black text-xl flex items-center justify-center shadow-xs">
                      B3
                    </div>
                    <button
                      onClick={() => onNavigate('lesson', { courseSlug: 'bootstrap', lessonSlug: 'bootstrap-containers' })}
                      className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-[#6f42c1] dark:text-[#a370f7] font-bold text-sm border border-[#6f42c1]/40 hover:bg-[#6f42c1] hover:text-white transition shadow-xs cursor-pointer inline-flex items-center space-x-1"
                    >
                      <span>Learn Bootstrap 3 »</span>
                    </button>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                      Bootstrap 3 is the most stable version of Bootstrap, and it is still supported by the team for critical bugfixes and documentation changes.
                    </p>
                  </div>
                </div>

                {/* B4 Card */}
                <div className="bg-[#6f42c1]/10 dark:bg-[#6f42c1]/20 border border-[#6f42c1]/30 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-xs">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-[#6f42c1] text-white font-black text-xl flex items-center justify-center shadow-xs">
                      B4
                    </div>
                    <button
                      onClick={() => onNavigate('lesson', { courseSlug: 'bootstrap', lessonSlug: 'bootstrap-containers' })}
                      className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-[#6f42c1] dark:text-[#a370f7] font-bold text-sm border border-[#6f42c1]/40 hover:bg-[#6f42c1] hover:text-white transition shadow-xs cursor-pointer inline-flex items-center space-x-1"
                    >
                      <span>Learn Bootstrap 4 »</span>
                    </button>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                      Bootstrap 4 is a newer version of Bootstrap; with new components, faster stylesheet and more responsiveness. However, Internet Explorer 9 and down is not supported.
                    </p>
                  </div>
                </div>

                {/* B5 Card */}
                <div className="bg-[#563d7c]/20 dark:bg-[#563d7c]/40 border-2 border-[#563d7c] rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm ring-2 ring-[#563d7c]/20">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-[#563d7c] text-white font-black text-xl flex items-center justify-center shadow-xs">
                        B5
                      </div>
                      <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        Current
                      </span>
                    </div>
                    <button
                      onClick={() => onNavigate('lesson', { courseSlug: 'bootstrap', lessonSlug: 'bootstrap-grid-system' })}
                      className="px-4 py-2 rounded bg-[#563d7c] text-white font-bold text-sm hover:bg-[#453063] transition shadow-xs cursor-pointer inline-flex items-center space-x-1"
                    >
                      <span>Learn Bootstrap 5 »</span>
                    </button>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                      Bootstrap 5 is the newest version of Bootstrap; with a smooth overhaul. However, Internet Explorer 11 and down is not supported, and jQuery is replaced with vanilla JavaScript.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BOOTSTRAP GRID VISUALIZER (Matching User Screenshot 1 & 2) */}
          {isBootstrapGrid && (
            <div className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b]">
                Bootstrap 12-Column Grid Visualization
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Below is a visual representation of how three <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-pink-600 rounded font-mono text-xs">.col-sm-4</code> columns divide the 12-column grid equally:
              </p>
              
              <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 bg-gray-50 dark:bg-gray-900/50 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-primary/15 border-2 border-dashed border-primary/50 text-primary p-4 rounded-lg text-center font-bold">
                    <div className="text-xs font-mono uppercase text-gray-500 mb-1">col-sm-4 (4 of 12)</div>
                    <div>Column 1</div>
                  </div>
                  <div className="bg-emerald-500/15 border-2 border-dashed border-emerald-500/50 text-emerald-600 dark:text-emerald-400 p-4 rounded-lg text-center font-bold">
                    <div className="text-xs font-mono uppercase text-gray-500 mb-1">col-sm-4 (4 of 12)</div>
                    <div>Column 2</div>
                  </div>
                  <div className="bg-amber-500/15 border-2 border-dashed border-amber-500/50 text-amber-600 dark:text-amber-400 p-4 rounded-lg text-center font-bold">
                    <div className="text-xs font-mono uppercase text-gray-500 mb-1">col-sm-4 (4 of 12)</div>
                    <div>Column 3</div>
                  </div>
                </div>
                <div className="text-center text-xs text-gray-500 dark:text-gray-400 pt-1">
                  Total grid width: 4 + 4 + 4 = 12 columns (100% responsive width).
                </div>
              </div>
            </div>
          )}

          {/* HTML INTRODUCTION SPECIAL MODULES (Matching Screenshots 5, 6, 7) */}
          {isHtmlIntro && (
            <div className="space-y-8 pt-2">
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#282A35] dark:text-white tracking-tight pb-2 border-b border-gray-200 dark:border-[#1e293b]">
                  View in Browser
                </h2>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                  The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly. A browser does not display the HTML tags, but uses them to determine how to display the document:
                </p>
                <BrowserWindowMockup
                  url="file:///C:/Users/myuser/Desktop/index.htm"
                  heading="My First Heading"
                  paragraph="My first paragraph."
                />
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  Note: The content inside the &lt;body&gt; section is displayed in a browser. The content inside the &lt;title&gt; element is shown in the browser's title bar or in the page's tab.
                </p>
              </section>

              <section className="space-y-3">
                <HtmlPageStructureDiagram />
              </section>

              <section className="space-y-3">
                <HtmlHistoryTable />
              </section>
            </div>
          )}
        </>
      )}

      {/* 12. COMPARISON TABLE */}
      {content.comparisonTable && (
        <section className="space-y-3 pt-2">
          <h3 className="text-lg sm:text-xl font-bold text-[#282A35] dark:text-white">
            Quick Comparison
          </h3>
          <ComparisonTable table={content.comparisonTable} />
        </section>
      )}

      {/* 13. COMMON PITFALLS */}
      {content.pitfalls && Array.isArray(content.pitfalls) && content.pitfalls.length > 0 && (
        <section className="space-y-4 pt-2">
          {content.pitfalls.map((p: any, i: number) => (
            <Callout
              key={i}
              box={{
                type: 'pitfall',
                title: p.mistake,
                wrongCode: p.wrongCode,
                correctCode: p.correctCode,
                explanation: p.explanation,
                content: p.explanation || ''
              }}
            />
          ))}
        </section>
      )}

      {/* 14. PRO TIPS */}
      {content.tips && content.tips.length > 0 && (
        <section className="space-y-3 pt-2">
          {content.tips.map((tip, i) => (
            <Callout
              key={i}
              box={{
                type: 'tip',
                title: 'Best Practice',
                content: tip
              }}
            />
          ))}
        </section>
      )}

      {/* 15. PRACTICE & EXERCISES */}
      {!isHtmlEditors && (practiceItems.length > 0 || lesson.slug === 'html-basic') && (
        <section id="exercises" className="space-y-4 pt-4">
          <div className="flex items-center space-x-2 text-[#04AA6D] font-bold text-lg">
            <Play className="w-5 h-5" />
            <h3 className="text-xl font-bold text-[#282A35] dark:text-white">
              Test Yourself With Exercises
            </h3>
          </div>

          {/* Interactive Tag Slot Exercise for HTML Basic */}
          {lesson.slug === 'html-basic' && (
            <HtmlTagSlotExercise />
          )}

          {practiceItems.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              {practiceItems.map((item, idx) => (
                <LessonPractice key={item.id || idx} practice={item} index={idx} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* 16. KNOWLEDGE CHECK QUIZ */}
      {quizQuestions.length > 0 && (
        <section id="quiz" className="pt-2">
          <LessonQuiz
            questions={quizQuestions}
            title={`${lesson.title} — Quiz`}
          />
        </section>
      )}

      {/* 17. KEY TAKEAWAYS CHECKLIST */}
      {content.takeaways && content.takeaways.length > 0 && (
        <section className="p-6 rounded-xl bg-gray-50 dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] space-y-3">
          <h3 className="text-base font-bold text-[#282A35] dark:text-white tracking-tight flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-[#04AA6D]" />
            <span>Summary & Key Takeaways</span>
          </h3>
          <ul className="space-y-2">
            {content.takeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start space-x-3 text-sm text-gray-800 dark:text-gray-200">
                <div className="w-5 h-5 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  ✓
                </div>
                <div><FormattedText text={takeaway} /></div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 18. BOTTOM NAVIGATION BAR (Matches Screenshot 3) */}
      <footer className="pt-6 border-t border-gray-200 dark:border-[#1e293b] flex items-center justify-between">
        {prevLesson ? (
          <button
            onClick={() => {
              onNavigate('lesson', {
                courseSlug: prevLesson.courseSlug,
                lessonSlug: prevLesson.lessonSlug
              });
              window.scrollTo(0, 0);
            }}
            className="flex items-center justify-center space-x-1.5 px-5 py-2 rounded bg-white dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] hover:bg-gray-100 dark:hover:bg-[#1e293b] text-gray-800 dark:text-gray-100 font-extrabold text-sm shadow-xs transition"
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            <span>Previous</span>
          </button>
        ) : (
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center justify-center space-x-1.5 px-5 py-2 rounded bg-white dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] hover:bg-gray-100 dark:hover:bg-[#1e293b] text-gray-800 dark:text-gray-100 font-extrabold text-sm shadow-xs transition"
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            <span>Home</span>
          </button>
        )}

        {nextLesson ? (
          <button
            onClick={onNextLesson}
            className="flex items-center justify-center space-x-1.5 px-6 py-2 rounded bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm shadow-xs transition"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        ) : (
          <button
            onClick={() => onNavigate('course-detail', { courseSlug: course.slug })}
            className="flex items-center justify-center px-6 py-2 rounded bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm shadow-xs transition"
          >
            <span>Back to Course Outline</span>
          </button>
        )}
      </footer>
    </article>
  );
};
