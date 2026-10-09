import { Course, CourseModule, Project } from '../../types';
import { createStructuredLesson } from './courseUtils';
import {
  htmlLesson1Content,
  htmlLesson1Practice,
  htmlLesson1Quiz,
  htmlEditorsContent,
  htmlEditorsPractice,
  htmlEditorsQuiz,
  htmlBasicContent,
  htmlBasicPractice,
  htmlBasicQuiz,
  htmlElementsContent,
  htmlElementsPractice,
  htmlElementsQuiz,
  htmlAttributesContent,
  htmlAttributesPractice,
  htmlAttributesQuiz,
  htmlDocumentStructureContent,
  htmlHeadingsContent,
  htmlParagraphsContent,
  htmlLinksContent,
  htmlImagesContent,
  htmlTablesContent,
  htmlFormsContent,
  htmlSemanticContent,
  htmlAccessibilityContent
} from './htmlContent';

const module1Lessons = [
  createStructuredLesson('html', 1, 'HTML Fundamentals', 1, 'Introduction to HTML', htmlLesson1Content, htmlLesson1Practice, htmlLesson1Quiz),
  createStructuredLesson('html', 1, 'HTML Fundamentals', 2, 'HTML Editors', htmlEditorsContent, [], htmlEditorsQuiz),
  createStructuredLesson('html', 1, 'HTML Fundamentals', 3, 'HTML Basic', htmlBasicContent, htmlBasicPractice, htmlBasicQuiz),
  createStructuredLesson('html', 1, 'HTML Fundamentals', 4, 'HTML Elements', htmlElementsContent, htmlElementsPractice, htmlElementsQuiz),
  createStructuredLesson('html', 1, 'HTML Fundamentals', 5, 'HTML Attributes', htmlAttributesContent, htmlAttributesPractice, htmlAttributesQuiz),
  createStructuredLesson('html', 1, 'HTML Fundamentals', 6, 'HTML Document Structure', htmlDocumentStructureContent),
  createStructuredLesson('html', 1, 'HTML Fundamentals', 7, 'HTML Comments', htmlLesson1Content),
];

const module2Lessons = [
  createStructuredLesson('html', 2, 'Text and Content', 1, 'Headings', htmlHeadingsContent),
  createStructuredLesson('html', 2, 'Text and Content', 2, 'Paragraphs', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 3, 'Line Breaks', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 4, 'Horizontal Rules', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 5, 'Text Formatting', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 6, 'Bold Text', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 7, 'Important Text', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 8, 'Italic Text', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 9, 'Emphasized Text', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 10, 'Small Text', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 11, 'Marked Text', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 12, 'Deleted Text', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 13, 'Inserted Text', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 14, 'Superscript', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 15, 'Subscript', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 16, 'Quotations', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 17, 'Code', htmlParagraphsContent),
  createStructuredLesson('html', 2, 'Text and Content', 18, 'Preformatted Text', htmlParagraphsContent),
];

const module3Lessons = [
  createStructuredLesson('html', 3, 'Links', 1, 'HTML Links', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 2, 'Absolute URLs', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 3, 'Relative URLs', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 4, 'Link Text', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 5, 'Open Links in New Tab', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 6, 'Link to Another Page', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 7, 'Link to a Section', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 8, 'Email Links', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 9, 'Telephone Links', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 10, 'Download Links', htmlLinksContent),
  createStructuredLesson('html', 3, 'Links', 11, 'Link Attributes', htmlAttributesContent),
];

const module4Lessons = [
  createStructuredLesson('html', 4, 'Images and Media', 1, 'HTML Images', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 2, 'Image Source', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 3, 'Alternative Text', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 4, 'Image Width and Height', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 5, 'Image Links', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 6, 'Figure', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 7, 'Figcaption', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 8, 'Responsive Images', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 9, 'HTML Audio', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 10, 'HTML Video', htmlImagesContent),
  createStructuredLesson('html', 4, 'Images and Media', 11, 'Embedded Media', htmlImagesContent),
];

const module5Lessons = [
  createStructuredLesson('html', 5, 'Lists', 1, 'Introduction to Lists'),
  createStructuredLesson('html', 5, 'Lists', 2, 'Ordered Lists'),
  createStructuredLesson('html', 5, 'Lists', 3, 'Unordered Lists'),
  createStructuredLesson('html', 5, 'Lists', 4, 'List Items'),
  createStructuredLesson('html', 5, 'Lists', 5, 'Nested Lists'),
  createStructuredLesson('html', 5, 'Lists', 6, 'Description Lists'),
  createStructuredLesson('html', 5, 'Lists', 7, 'Multi-level Lists'),
  createStructuredLesson('html', 5, 'Lists', 8, 'Real-world List Examples'),
];

const module6Lessons = [
  createStructuredLesson('html', 6, 'Tables', 1, 'Introduction to HTML Tables', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 2, 'Table Rows', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 3, 'Table Headers', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 4, 'Table Data', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 5, 'Table Borders', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 6, 'Table Captions', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 7, 'Colspan', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 8, 'Rowspan', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 9, 'Complete Table Structure', htmlTablesContent),
  createStructuredLesson('html', 6, 'Tables', 10, 'Accessible Tables', htmlTablesContent),
];

const module7Lessons = [
  createStructuredLesson('html', 7, 'HTML Structure', 1, 'Div'),
  createStructuredLesson('html', 7, 'HTML Structure', 2, 'Span'),
  createStructuredLesson('html', 7, 'HTML Structure', 3, 'Classes', htmlAttributesContent),
  createStructuredLesson('html', 7, 'HTML Structure', 4, 'IDs', htmlAttributesContent),
  createStructuredLesson('html', 7, 'HTML Structure', 5, 'Block Elements'),
  createStructuredLesson('html', 7, 'HTML Structure', 6, 'Inline Elements'),
  createStructuredLesson('html', 7, 'HTML Structure', 7, 'Containers'),
  createStructuredLesson('html', 7, 'HTML Structure', 8, 'Semantic HTML', htmlSemanticContent),
  createStructuredLesson('html', 7, 'HTML Structure', 9, 'Header', htmlSemanticContent),
  createStructuredLesson('html', 7, 'HTML Structure', 10, 'Navigation', htmlSemanticContent),
  createStructuredLesson('html', 7, 'HTML Structure', 11, 'Main', htmlSemanticContent),
  createStructuredLesson('html', 7, 'HTML Structure', 12, 'Section', htmlSemanticContent),
  createStructuredLesson('html', 7, 'HTML Structure', 13, 'Article', htmlSemanticContent),
  createStructuredLesson('html', 7, 'HTML Structure', 14, 'Aside', htmlSemanticContent),
  createStructuredLesson('html', 7, 'HTML Structure', 15, 'Footer', htmlSemanticContent),
];

const module8Lessons = [
  createStructuredLesson('html', 8, 'HTML Forms', 1, 'Introduction to Forms', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 2, 'Form Element', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 3, 'Input Element', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 4, 'Text Input', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 5, 'Password Input', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 6, 'Email Input', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 7, 'Number Input', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 8, 'Radio Buttons', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 9, 'Checkboxes', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 10, 'Select', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 11, 'Option', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 12, 'Textarea', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 13, 'Buttons', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 14, 'Labels', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 15, 'Placeholder', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 16, 'Required Fields', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 17, 'Form Attributes', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 18, 'Input Types', htmlFormsContent),
  createStructuredLesson('html', 8, 'HTML Forms', 19, 'Complete Form', htmlFormsContent),
];

const module9Lessons = [
  createStructuredLesson('html', 9, 'Advanced HTML', 1, 'Iframes'),
  createStructuredLesson('html', 9, 'Advanced HTML', 2, 'HTML Entities'),
  createStructuredLesson('html', 9, 'Advanced HTML', 3, 'HTML Symbols'),
  createStructuredLesson('html', 9, 'Advanced HTML', 4, 'Metadata', htmlDocumentStructureContent),
  createStructuredLesson('html', 9, 'Advanced HTML', 5, 'Favicon'),
  createStructuredLesson('html', 9, 'Advanced HTML', 6, 'Page Title', htmlDocumentStructureContent),
  createStructuredLesson('html', 9, 'Advanced HTML', 7, 'Character Encoding', htmlDocumentStructureContent),
  createStructuredLesson('html', 9, 'Advanced HTML', 8, 'Responsive HTML'),
  createStructuredLesson('html', 9, 'Advanced HTML', 9, 'Accessibility Basics', htmlAccessibilityContent),
  createStructuredLesson('html', 9, 'Advanced HTML', 10, 'SEO-friendly HTML', htmlSemanticContent),
  createStructuredLesson('html', 9, 'Advanced HTML', 11, 'HTML Validation'),
  createStructuredLesson('html', 9, 'Advanced HTML', 12, 'Clean HTML Structure'),
];

const htmlProjects: Project[] = [
  {
    id: 'proj-html-1',
    title: 'Personal Profile Page',
    slug: 'personal-profile-page',
    category: 'html',
    difficulty: 'Beginner',
    description: 'Build a clean personal biography and profile page with semantic headings, bio paragraph, lists of hobbies, and social links.',
    skills: ['Semantic HTML', 'Headings & Paragraphs', 'Lists', 'Anchor Links', 'Images'],
    requirements: [
      'Include a main <h1> heading with your name',
      'Add a profile picture with meaningful alt text',
      'Use an unordered list for your skills/hobbies',
      'Add external hyperlinks to social profiles with target="_blank"'
    ],
    instructions: [
      'Set up the base HTML5 boilerplate structure.',
      'Place a profile container in the body with a header and main tag.',
      'Add an introductory paragraph about your coding goals.',
      'Include a contact email link using mailto:.'
    ],
    starterFiles: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Profile</title>
</head>
<body>
  <!-- Build your profile page below -->
  <h1>Alex Rivera</h1>
  <p>Aspiring Web Developer learning at Coding Vibes.</p>
  
  <h2>About Me</h2>
  <p>I enjoy building modern web interfaces and solving creative challenges.</p>

  <h2>Skills</h2>
  <ul>
    <li>HTML5 Semantic Markup</li>
    <li>Responsive Design Principles</li>
    <li>Clean Code Best Practices</li>
  </ul>
</body>
</html>`
    },
    expectedResult: 'A fully structured personal profile with profile header, biography section, hobbies bullet list, and contact links.'
  },
  {
    id: 'proj-html-2',
    title: 'Recipe Page',
    slug: 'recipe-page',
    category: 'html',
    difficulty: 'Beginner',
    description: 'Create an appetizing cooking recipe page displaying preparation time, ingredients list, step-by-step instructions, and dietary notes.',
    skills: ['Ordered Lists', 'Unordered Lists', 'Emphasis & Strong tags', 'Images & Captions'],
    requirements: ['Include preparation info', 'Use <ul> for ingredients and <ol> for steps', 'Include a food image with caption'],
    instructions: ['Structure ingredients cleanly', 'Number cooking directions sequentially', 'Use strong tags for key timings'],
    starterFiles: {
      html: `<h1>Delicious Homemade Pizza</h1>
<p>Prep time: <strong>20 mins</strong> | Cook time: <strong>15 mins</strong></p>
<h2>Ingredients</h2>
<ul>
  <li>2 cups All-purpose flour</li>
  <li>1 packet Active dry yeast</li>
  <li>1/2 cup Fresh tomato sauce</li>
  <li>1 cup Mozzarella cheese</li>
</ul>
<h2>Directions</h2>
<ol>
  <li>Mix yeast and warm water. Let stand for 5 minutes.</li>
  <li>Knead flour and let dough rise for 1 hour.</li>
  <li>Spread sauce, sprinkle cheese, and bake at 450°F.</li>
</ol>`
    },
    expectedResult: 'A neatly formatted recipe page with structured lists and time tags.'
  },
  {
    id: 'proj-html-3',
    title: 'Portfolio Page',
    slug: 'portfolio-page',
    category: 'html',
    difficulty: 'Intermediate',
    description: 'Construct a showcase portfolio page organizing featured projects into articles with preview images and live demo links.',
    skills: ['Semantic Sectioning', 'Article tags', 'Figure/Figcaption', 'Navigation menu'],
    requirements: ['Navigation header', 'Multiple project article blocks', 'Footer with copyright info'],
    instructions: ['Use semantic tags (<header>, <nav>, <main>, <section>, <article>, <footer>)'],
    starterFiles: { html: `<header><nav><a href="#about">About</a> | <a href="#projects">Projects</a></nav></header><main><h1>Developer Portfolio</h1></main>` },
    expectedResult: 'A multi-section semantic developer portfolio.'
  },
  {
    id: 'proj-html-4',
    title: 'Contact Page',
    slug: 'contact-page',
    category: 'html',
    difficulty: 'Beginner',
    description: 'Build a standard inquiry and contact page with text fields, email validation, subject selection, and message textarea.',
    skills: ['Form elements', 'Input attributes', 'Labels', 'Textarea', 'Submit buttons'],
    requirements: ['Use <form>', 'Associated <label> tags with `for` attribute', 'Required field validation'],
    instructions: ['Group fields logically and use correct type attributes'],
    starterFiles: { html: `<h1>Contact Us</h1><form><label for="name">Name:</label><input id="name" type="text" required><button type="submit">Send</button></form>` },
    expectedResult: 'An accessible contact form with validation attributes.'
  },
  {
    id: 'proj-html-5',
    title: 'Registration Form',
    slug: 'registration-form',
    category: 'html',
    difficulty: 'Intermediate',
    description: 'Design a comprehensive user sign-up form with password confirmation, radio options for experience level, and terms checkbox.',
    skills: ['Form Validation', 'Radio Groups', 'Checkboxes', 'Fieldset & Legend'],
    requirements: ['Fieldset grouping', 'Radio button group for user role', 'Terms checkbox'],
    instructions: ['Build a complete registration flow using HTML5 input constraints.'],
    starterFiles: { html: `<h2>Create an Account</h2><form><fieldset><legend>Account Details</legend><input type="email" placeholder="Email" required></fieldset></form>` },
    expectedResult: 'A complete registration form with fieldsets and legends.'
  },
  {
    id: 'proj-html-6',
    title: 'Login Form',
    slug: 'login-form',
    category: 'html',
    difficulty: 'Beginner',
    description: 'Create an accessible, clean login form with email/username inputs, password masking, remember-me toggle, and submit button.',
    skills: ['Form Structure', 'Input Types', 'Labels', 'Button Elements'],
    requirements: ['Email & Password inputs', 'Remember me checkbox', 'Accessible label associations'],
    instructions: ['Ensure all form controls are accessible and keyboard navigable.'],
    starterFiles: { html: `<h2>Sign In to Coding Vibes</h2><form><input type="email" placeholder="Email"><input type="password" placeholder="Password"><button type="submit">Sign In</button></form>` },
    expectedResult: 'A secure, clean HTML login form layout.'
  },
  {
    id: 'proj-html-7',
    title: 'Student Table',
    slug: 'student-table',
    category: 'html',
    difficulty: 'Intermediate',
    description: 'Construct a detailed student grade report table using proper <thead>, <tbody>, <tfoot>, colspan, and rowspan attributes.',
    skills: ['HTML Tables', 'Thead, Tbody, Tfoot', 'Colspan & Rowspan', 'Accessible Captions'],
    requirements: ['Include <caption>', 'Header row with <th>', 'Data rows with <td>', 'Summary row in <tfoot>'],
    instructions: ['Build a data table with grade averages and spanning column headers.'],
    starterFiles: { html: `<table><caption>Student Term Grades</caption><thead><tr><th>Student</th><th>Score</th><th>Grade</th></tr></thead><tbody><tr><td>Emma</td><td>95</td><td>A</td></tr></tbody></table>` },
    expectedResult: 'A semantic, accessible multi-row data table with captions.'
  },
  {
    id: 'proj-html-8',
    title: 'Multi-section Website',
    slug: 'multi-section-website',
    category: 'html',
    difficulty: 'Intermediate',
    description: 'Build a complete multi-section company or organization website with Header, Hero, Features, Pricing, Testimonials, and Footer.',
    skills: ['Full Page Semantic Layout', 'Anchor ID Navigation', 'Embedded Media', 'Accessible Landmarks'],
    requirements: ['Semantic landmark tags', 'Working internal section anchor links', 'Clean layout hierarchy'],
    instructions: ['Organize all content into clean semantic blocks that link seamlessly.'],
    starterFiles: { html: `<!DOCTYPE html><html><body><header><nav><a href="#hero">Home</a> <a href="#features">Features</a></nav></header><section id="hero"><h1>Future of Coding</h1></section></body></html>` },
    expectedResult: 'A complete multi-section semantic web page.'
  }
];

export const htmlCourse: Course = {
  id: 'course-html',
  slug: 'html',
  title: 'HTML',
  tagline: 'The Foundation of the Web',
  description: 'Master HTML from the ground up. Learn semantic tags, document structure, media, forms, accessibility, and modern SEO best practices.',
  category: 'Web Development',
  difficulty: 'Beginner',
  status: 'Active',
  icon: 'Html5',
  badgeType: 'html',
  estimatedHours: 18,
  modulesCount: 10,
  lessonsCount: 122,
  modules: [
    { id: 'html-m1', title: 'HTML Fundamentals', description: 'Understand what HTML is, how browsers parse markup, basic tags, and document anatomy.', order: 1, lessons: module1Lessons },
    { id: 'html-m2', title: 'Text and Content', description: 'Format and structure text with headings, paragraphs, citations, code blocks, and emphasis.', order: 2, lessons: module2Lessons },
    { id: 'html-m3', title: 'Links', description: 'Create hyperlinks, relative vs absolute URLs, email/telephone links, and section anchors.', order: 3, lessons: module3Lessons },
    { id: 'html-m4', title: 'Images and Media', description: 'Embed images, figures, captions, audio, video, and responsive graphic sources.', order: 4, lessons: module4Lessons },
    { id: 'html-m5', title: 'Lists', description: 'Build ordered, unordered, nested, and description lists for structured data.', order: 5, lessons: module5Lessons },
    { id: 'html-m6', title: 'Tables', description: 'Format tabular data with rows, headers, colspan, rowspan, captions, and accessibility tags.', order: 6, lessons: module6Lessons },
    { id: 'html-m7', title: 'HTML Structure', description: 'Master containers, div vs span, classes, IDs, block vs inline, and HTML5 semantic tags.', order: 7, lessons: module7Lessons },
    { id: 'html-m8', title: 'HTML Forms', description: 'Create interactive forms with text, email, radio, checkboxes, select dropdowns, and validation.', order: 8, lessons: module8Lessons },
    { id: 'html-m9', title: 'Advanced HTML', description: 'Explore iframes, character entities, metadata, favicons, accessibility (a11y), and SEO.', order: 9, lessons: module9Lessons },
    { id: 'html-m10', title: 'HTML Projects', description: 'Build real-world projects to solidify your semantic markup skills.', order: 10, lessons: [] },
  ],
  projects: htmlProjects
};
