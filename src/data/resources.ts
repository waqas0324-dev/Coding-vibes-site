import { ResourceItem } from '../types';

export const resourcesCatalog: ResourceItem[] = [
  {
    id: 'res-html-cheatsheet',
    title: 'Complete HTML5 Cheat Sheet',
    category: 'Cheat Sheets',
    description: 'Quick reference guide containing all standard HTML5 semantic elements, forms, media tags, meta attributes, and structure boilerplate.',
    readTime: '5 min read',
    tags: ['HTML5', 'Tags', 'Boilerplate', 'Semantics'],
    content: `### HTML5 Structure Boilerplate
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
</html>
\`\`\`
### Common Semantic Tags
- \`<header>\`: Introductory content or navigational aids.
- \`<nav>\`: Set of navigation links.
- \`<main>\`: Dominant content of the \`<body>\`.
- \`<section>\`: Standalone generic section.
- \`<article>\`: Self-contained composition.
- \`<aside>\`: Content indirectly related to document's main content.
- \`<footer>\`: Footer for its nearest sectioning content.`
  },
  {
    id: 'res-css-flexbox-grid',
    title: 'CSS Flexbox & Grid Visual Cheat Sheet',
    category: 'Cheat Sheets',
    description: 'Visual reference for all flexbox container/item properties and CSS Grid tracks, areas, alignment values, and responsive syntax.',
    readTime: '7 min read',
    tags: ['CSS', 'Flexbox', 'Grid', 'Layout'],
    content: `### Flexbox Cheat Sheet
\`\`\`css
.container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;
  align-items: stretch | flex-start | center | flex-end | baseline;
  flex-wrap: nowrap | wrap | wrap-reverse;
  gap: 16px;
}
\`\`\`
### CSS Grid Cheat Sheet
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\``
  },
  {
    id: 'res-js-array-methods',
    title: 'JavaScript Array & Object Methods Reference',
    category: 'JavaScript Reference',
    description: 'Comprehensive guide to modern ES6+ array methods: map, filter, reduce, find, some, every, includes, flatMap, and destructuring.',
    readTime: '6 min read',
    tags: ['JavaScript', 'ES6', 'Arrays', 'Objects'],
    content: `### Essential Array Methods
\`\`\`javascript
// 1. map() - transform items
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]

// 2. filter() - filter items
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

// 3. reduce() - aggregate
const sum = [10, 20, 30].reduce((acc, curr) => acc + curr, 0); // 60

// 4. find() - first match
const user = users.find(u => u.id === 42);
\`\`\``
  },
  {
    id: 'res-git-guide',
    title: 'Git & GitHub Essential Workflow Guide',
    category: 'Git & GitHub Guides',
    description: 'Master everyday version control commands: clone, branch, commit, push, pull requests, merge conflict resolution, and rebasing.',
    readTime: '8 min read',
    tags: ['Git', 'GitHub', 'Version Control', 'CLI'],
    content: `### Common Git Commands
\`\`\`bash
# Clone a repository
git clone https://github.com/user/repo.git

# Create and switch to new branch
git checkout -b feature/new-page

# Stage and commit changes
git add .
git commit -m "feat: add responsive navigation bar"

# Push to GitHub
git push -u origin feature/new-page
\`\`\``
  },
  {
    id: 'res-vscode-setup',
    title: 'VS Code Recommended Setup for Web Developers',
    category: 'VS Code Guides',
    description: 'Top extensions, settings, keybindings, and productivity tips for HTML, CSS, JavaScript, and React development in VS Code.',
    readTime: '4 min read',
    tags: ['VS Code', 'Tools', 'Productivity', 'Extensions'],
    content: `### Recommended Extensions
- **Prettier - Code Formatter**: Automated code styling on save.
- **ESLint**: Catches syntax issues and enforces best practices.
- **Live Server**: Instant browser reloading during local prototyping.
- **Auto Rename Tag**: Keeps HTML/JSX tag pairs synchronized.
- **Tailwind CSS IntelliSense**: Autocomplete and preview for utility classes.`
  },
  {
    id: 'res-dev-tools',
    title: 'Chrome DevTools Mastery Guide',
    category: 'Developer Tools',
    description: 'Inspect elements, test responsive viewport breakpoints, debug JavaScript breakpoints, monitor network requests, and audit performance.',
    readTime: '10 min read',
    tags: ['DevTools', 'Debugging', 'Performance', 'Console'],
    content: `### DevTools Shortcuts & Tips
- \`F12\` or \`Cmd + Option + I\`: Open Developer Tools.
- \`Cmd + Shift + M\`: Toggle Device Mode / Mobile simulation.
- Inspecting Flexbox / Grid: Click the "grid" or "flex" badge in the Elements tree.
- Console helpers: \`$0\` accesses currently selected DOM node.`
  }
];
