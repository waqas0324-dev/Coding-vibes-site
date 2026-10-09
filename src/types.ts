export type Language = 'html' | 'css' | 'javascript' | 'python' | 'java' | 'c' | 'cpp' | 'sql' | 'git' | 'react' | 'typescript' | 'nodejs';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type CourseStatus = 'Active' | 'Coming Soon';

export interface CodeSnippet {
  language: string;
  code: string;
  filename?: string;
  explanation?: string;
  output?: string;
  showOutput?: boolean;
}

export interface CalloutBox {
  type: 'definition' | 'tip' | 'note' | 'warning' | 'important' | 'pitfall';
  title?: string;
  content: string;
  term?: string;
  wrongCode?: string;
  correctCode?: string;
  explanation?: string;
}

export interface ComparisonTable {
  title?: string;
  headers: string[];
  rows: {
    values: string[];
    isCode?: boolean[];
  }[];
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  codeSnippet?: string;
  tip?: string;
}

export interface CodeAnnotation {
  lineOrToken: string;
  description: string;
  codeSample?: string;
}

export interface DiagramConfig {
  type: 'html-tree' | 'box-model' | 'flexbox' | 'form-anatomy' | 'dom-tree' | 'semantic-layout' | 'heading-hierarchy' | 'custom';
  title?: string;
  caption?: string;
  data?: any;
}

export interface ChallengeTask {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  starterCode: {
    html?: string;
    css?: string;
    js?: string;
  };
  solutionCode: {
    html?: string;
    css?: string;
    js?: string;
  };
  hint?: string;
  expectedOutputPreview?: string;
}

export interface PracticeQuestion {
  id: string;
  type: 'multiple_choice' | 'fill_in_blank' | 'code_writing' | 'output_prediction' | 'debugging';
  question: string;
  instructions?: string;
  starterCode?: string;
  options?: string[];
  correctAnswer: string | number | string[];
  explanation: string;
  hint?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface LessonSection {
  id?: string;
  title: string;
  level?: 2 | 3;
  content?: string;
  contentHtml?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  numberedPoints?: string[];
  callout?: CalloutBox;
  diagram?: DiagramConfig;
  comparisonTable?: ComparisonTable;
  steps?: StepItem[];
  codeSnippets?: CodeSnippet[];
  codeAnnotations?: CodeAnnotation[];
  renderedPreview?: {
    html: string;
    css?: string;
    js?: string;
    caption?: string;
  };
}

export interface LessonContent {
  // Rich Structured Content
  heroTagline?: string;
  introduction?: string;
  definition?: {
    term: string;
    pronunciation?: string;
    explanation: string;
  };
  diagram?: DiagramConfig;
  whyItMatters?: string;
  realWorldAnalogy?: {
    title: string;
    story: string;
    comparison: { item: string; meaning: string }[];
  };
  
  // Structured Sections
  sections?: LessonSection[];
  
  // Syntax & Code
  syntaxStructure?: string;
  syntaxExplanation?: string;
  syntaxAnatomy?: any;
  codeExample?: string;
  codeExamples?: CodeSnippet[];
  codeAnnotations?: CodeAnnotation[];
  
  // Callouts
  tips?: string[];
  notes?: string[];
  warnings?: CalloutBox[];
  callouts?: CalloutBox[];
  pitfalls?: any;
  
  // Interactive Components
  comparisonTable?: ComparisonTable;
  stepByStep?: StepItem[];
  outputBreakdown?: string[];
  bestPractices?: string[];
  commonMistakes?: {
    wrong: string;
    correct: string;
    reason: string;
  }[];
  
  // Try it yourself sandbox
  tryItYourself?: {
    html: string;
    css?: string;
    js?: string;
    instructions: string;
    expectedTitle?: string;
  };
  starterCode?: {
    html?: string;
    css?: string;
    js?: string;
  };

  // Micro Practice & Quiz
  microPractice?: PracticeQuestion;
  practiceQuestions?: PracticeQuestion[];
  quickQuiz?: QuizQuestion;
  quizQuestions?: QuizQuestion[];
  
  // Challenge
  challenge?: ChallengeTask;
  
  // Takeaways
  takeaways?: string[];
  keyPoints?: string[];

  // Legacy fallbacks for compatibility
  conceptExplanation?: string;
  whatIsIt?: string;
  whyUseIt?: string;
  howItWorks?: string;
  syntax?: string;
  examples?: CodeSnippet[];
  codeExplanation?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  order: number;
  duration?: string;
  description?: string;
  content: LessonContent;
  practice?: PracticeQuestion[];
  quiz?: QuizQuestion[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'html' | 'css' | 'javascript' | 'fullstack';
  difficulty: Difficulty;
  description: string;
  skills: string[];
  requirements: string[];
  instructions?: string[];
  estimatedTime?: string;
  starterFiles?: {
    html: string;
    css?: string;
    js?: string;
  };
  starterCode?: {
    html?: string;
    css?: string;
    js?: string;
  };
  expectedResult?: string;
  solutionHint?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Web Development' | 'Programming' | 'Tools' | 'Future Technologies';
  difficulty: Difficulty;
  status: CourseStatus;
  icon: string;
  badgeType: 'html' | 'css' | 'js' | 'react' | 'tailwind' | 'node' | 'python' | 'git' | 'ts' | 'default';
  estimatedHours: number;
  modulesCount: number;
  lessonsCount: number;
  modules: CourseModule[];
  projects: Project[];
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  category: string;
  questions: QuizQuestion[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Cheat Sheets' | 'HTML Reference' | 'CSS Reference' | 'JavaScript Reference' | 'VS Code Guides' | 'Git & GitHub Guides' | 'Developer Tools';
  description: string;
  readTime: string;
  content: string;
  tags: string[];
  downloadUrl?: string;
  codeSnippets?: CodeSnippet[];
}

export interface BookmarkedModule {
  moduleId: string;
  courseSlug: string;
  savedAt: string; // ISO date string
  note?: string; // Optional student notes or review goals
}

export interface UserProgress {
  completedLessons: string[]; // lesson ids
  completedProjects: string[]; // project ids
  completedChallenges?: string[]; // challenge and exercise ids
  quizScores: Record<string, { score: number; total: number; passed: boolean; completedAt: string }>;
  practiceAttempts: Record<string, boolean>; // practice id -> completed
  unlockedBadges?: Record<string, string>; // badgeId -> unlockedAt ISO date string
  bookmarkedModules?: BookmarkedModule[]; // bookmarked modules saved for later
  currentLessonId?: string;
  streakDays: number;
  lastActiveDate: string;
  xp: number;
  dailyLessonCompletions?: Record<string, number>; // date "YYYY-MM-DD" -> count of lessons completed
  dailyGoal?: number; // target lessons per day (default: 3)
  longestStreak?: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'student' | 'developer';
  createdAt: string;
}

export type ConsoleLogType = 'log' | 'info' | 'warn' | 'error' | 'eval' | 'result';

export interface ConsoleLogEntry {
  id: string;
  type: ConsoleLogType;
  message: string;
  time: string;
  source?: string;
  line?: number;
  col?: number;
  count?: number;
}
