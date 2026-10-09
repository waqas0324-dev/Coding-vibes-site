import { UserProgress } from '../types';

export type BadgeCategory = 'lessons' | 'challenges' | 'projects' | 'milestones';
export type BadgeRarity = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';

export interface BadgeDefinition {
  id: string;
  name: string;
  category: BadgeCategory;
  rarity: BadgeRarity;
  description: string;
  lore: string;
  iconName: string;
  xpReward: number;
  maxProgress: number;
  getProgress: (progress: UserProgress) => { current: number; max: number; unlocked: boolean };
}

// Helper to count total unique challenges solved (practice exercises + challenge tasks)
export const getCompletedChallengeCount = (progress: UserProgress): number => {
  const practiceKeys = Object.keys(progress.practiceAttempts || {}).filter(
    k => progress.practiceAttempts[k]
  );
  const explicitChallenges = progress.completedChallenges || [];
  const set = new Set([...practiceKeys, ...explicitChallenges]);
  return set.size;
};

// Helper to count passed quizzes
export const getPassedQuizCount = (progress: UserProgress): number => {
  if (!progress.quizScores) return 0;
  return Object.values(progress.quizScores).filter(q => q && q.passed).length;
};

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  // --- LESSONS CATEGORY ---
  {
    id: 'badge-lesson-first',
    name: 'Hello, World!',
    category: 'lessons',
    rarity: 'Bronze',
    description: 'Complete your very first interactive lesson.',
    lore: 'The classic beginning of every programmer\'s journey. You\'ve written your first lines of web code!',
    iconName: 'Sparkles',
    xpReward: 50,
    maxProgress: 1,
    getProgress: (p) => {
      const current = Math.min(1, (p.completedLessons || []).length);
      return { current, max: 1, unlocked: current >= 1 };
    }
  },
  {
    id: 'badge-lesson-5',
    name: 'Knowledge Seeker',
    category: 'lessons',
    rarity: 'Silver',
    description: 'Complete 5 lessons across any development track.',
    lore: 'Momentum is building. You\'re establishing regular learning habits and mastering web fundamentals.',
    iconName: 'BookOpen',
    xpReward: 100,
    maxProgress: 5,
    getProgress: (p) => {
      const current = Math.min(5, (p.completedLessons || []).length);
      return { current, max: 5, unlocked: current >= 5 };
    }
  },
  {
    id: 'badge-lesson-15',
    name: 'Curriculum Crusher',
    category: 'lessons',
    rarity: 'Gold',
    description: 'Complete 15 structured lessons.',
    lore: 'Deep dive! You understand DOM trees, styling cascades, and responsive elements like a seasoned junior dev.',
    iconName: 'Award',
    xpReward: 250,
    maxProgress: 15,
    getProgress: (p) => {
      const current = Math.min(15, (p.completedLessons || []).length);
      return { current, max: 15, unlocked: current >= 15 };
    }
  },
  {
    id: 'badge-lesson-25',
    name: 'Code Mastermind',
    category: 'lessons',
    rarity: 'Diamond',
    description: 'Complete 25 comprehensive lessons.',
    lore: 'Elite student tier! You have persevered through extensive syntax, semantics, and real-world architectures.',
    iconName: 'Crown',
    xpReward: 500,
    maxProgress: 25,
    getProgress: (p) => {
      const current = Math.min(25, (p.completedLessons || []).length);
      return { current, max: 25, unlocked: current >= 25 };
    }
  },
  {
    id: 'badge-html-architect',
    name: 'HTML5 Architect',
    category: 'lessons',
    rarity: 'Bronze',
    description: 'Complete 5 HTML lessons with semantic markup.',
    lore: 'Headers, footers, articles, and tags. You construct websites with solid accessibility and SEO foundations.',
    iconName: 'Code2',
    xpReward: 75,
    maxProgress: 5,
    getProgress: (p) => {
      const htmlLessons = (p.completedLessons || []).filter(id => id.toLowerCase().includes('html')).length;
      const current = Math.min(5, htmlLessons);
      return { current, max: 5, unlocked: current >= 5 };
    }
  },
  {
    id: 'badge-css-stylist',
    name: 'CSS Stylist',
    category: 'lessons',
    rarity: 'Silver',
    description: 'Complete 3 CSS styling and layout lessons.',
    lore: 'Turning plain HTML skeletons into vibrant, responsive visual masterpieces with Flexbox and Grid.',
    iconName: 'Palette',
    xpReward: 100,
    maxProgress: 3,
    getProgress: (p) => {
      const cssLessons = (p.completedLessons || []).filter(id => id.toLowerCase().includes('css')).length;
      const current = Math.min(3, cssLessons);
      return { current, max: 3, unlocked: current >= 3 };
    }
  },
  {
    id: 'badge-js-dynamo',
    name: 'JavaScript Dynamo',
    category: 'lessons',
    rarity: 'Silver',
    description: 'Complete 3 JavaScript logic and DOM lessons.',
    lore: 'Breathing interactivity and dynamic computation into client-side web applications.',
    iconName: 'Zap',
    xpReward: 100,
    maxProgress: 3,
    getProgress: (p) => {
      const jsLessons = (p.completedLessons || []).filter(id => id.toLowerCase().includes('js') || id.toLowerCase().includes('javascript')).length;
      const current = Math.min(3, jsLessons);
      return { current, max: 3, unlocked: current >= 3 };
    }
  },

  // --- CHALLENGES CATEGORY ---
  {
    id: 'badge-challenge-first',
    name: 'First Spark',
    category: 'challenges',
    rarity: 'Bronze',
    description: 'Solve your first interactive coding challenge or practice exercise.',
    lore: 'Reading theory is great, but getting your hands dirty on a real problem proves your problem-solving instinct.',
    iconName: 'Target',
    xpReward: 50,
    maxProgress: 1,
    getProgress: (p) => {
      const count = getCompletedChallengeCount(p);
      const current = Math.min(1, count);
      return { current, max: 1, unlocked: current >= 1 };
    }
  },
  {
    id: 'badge-challenge-3',
    name: 'Problem Solver',
    category: 'challenges',
    rarity: 'Silver',
    description: 'Successfully complete 3 coding challenges.',
    lore: 'Bugs beware! You test inputs, inspect errors, and forge resilient code that passes test cases.',
    iconName: 'CheckCircle2',
    xpReward: 120,
    maxProgress: 3,
    getProgress: (p) => {
      const count = getCompletedChallengeCount(p);
      const current = Math.min(3, count);
      return { current, max: 3, unlocked: current >= 3 };
    }
  },
  {
    id: 'badge-challenge-8',
    name: 'Code Gladiator',
    category: 'challenges',
    rarity: 'Gold',
    description: 'Conquer 8 interactive coding challenges.',
    lore: 'Battle-tested developer! You think algorithmically and break down complex requirements with ease.',
    iconName: 'Trophy',
    xpReward: 250,
    maxProgress: 8,
    getProgress: (p) => {
      const count = getCompletedChallengeCount(p);
      const current = Math.min(8, count);
      return { current, max: 8, unlocked: current >= 8 };
    }
  },
  {
    id: 'badge-challenge-15',
    name: 'Algorithm Titan',
    category: 'challenges',
    rarity: 'Diamond',
    description: 'Conquer 15 hands-on coding challenges.',
    lore: 'An elite champion of the practice arena. There is virtually no coding challenge you can\'t unravel.',
    iconName: 'ShieldCheck',
    xpReward: 500,
    maxProgress: 15,
    getProgress: (p) => {
      const count = getCompletedChallengeCount(p);
      const current = Math.min(15, count);
      return { current, max: 15, unlocked: current >= 15 };
    }
  },
  {
    id: 'badge-quiz-novice',
    name: 'Quiz Whiz',
    category: 'challenges',
    rarity: 'Bronze',
    description: 'Pass your first module quiz with 70%+ score.',
    lore: 'Testing your retention under pressure and certifying your core conceptual understanding.',
    iconName: 'Award',
    xpReward: 50,
    maxProgress: 1,
    getProgress: (p) => {
      const count = getPassedQuizCount(p);
      const current = Math.min(1, count);
      return { current, max: 1, unlocked: current >= 1 };
    }
  },
  {
    id: 'badge-quiz-champion',
    name: 'Trivia Champion',
    category: 'challenges',
    rarity: 'Gold',
    description: 'Pass 3 module quizzes with honors.',
    lore: 'Theoretical precision matched with practical skill. You understand the nuances behind the syntax.',
    iconName: 'Star',
    xpReward: 180,
    maxProgress: 3,
    getProgress: (p) => {
      const count = getPassedQuizCount(p);
      const current = Math.min(3, count);
      return { current, max: 3, unlocked: current >= 3 };
    }
  },

  // --- PROJECTS CATEGORY ---
  {
    id: 'badge-project-first',
    name: 'First Deployment',
    category: 'projects',
    rarity: 'Silver',
    description: 'Build and complete your first portfolio project.',
    lore: 'You crossed the bridge from student to creator. You shipped an independent, working web project!',
    iconName: 'Rocket',
    xpReward: 150,
    maxProgress: 1,
    getProgress: (p) => {
      const current = Math.min(1, (p.completedProjects || []).length);
      return { current, max: 1, unlocked: current >= 1 };
    }
  },
  {
    id: 'badge-project-3',
    name: 'Portfolio Builder',
    category: 'projects',
    rarity: 'Gold',
    description: 'Build and complete 3 real-world portfolio projects.',
    lore: 'Your portfolio now tells a compelling story. Multiple working applications showcase your versatility.',
    iconName: 'Layers',
    xpReward: 300,
    maxProgress: 3,
    getProgress: (p) => {
      const current = Math.min(3, (p.completedProjects || []).length);
      return { current, max: 3, unlocked: current >= 3 };
    }
  },
  {
    id: 'badge-project-all',
    name: 'Full-Stack Craftsman',
    category: 'projects',
    rarity: 'Diamond',
    description: 'Complete 5 hands-on portfolio projects.',
    lore: 'A tour de force of engineering craftsmanship. Ready for production and real client work!',
    iconName: 'Crown',
    xpReward: 600,
    maxProgress: 5,
    getProgress: (p) => {
      const current = Math.min(5, (p.completedProjects || []).length);
      return { current, max: 5, unlocked: current >= 5 };
    }
  },

  // --- MILESTONES & STREAKS CATEGORY ---
  {
    id: 'badge-streak-3',
    name: 'Consistent Flame',
    category: 'milestones',
    rarity: 'Bronze',
    description: 'Maintain a 3-day active coding streak.',
    lore: 'Consistency beats intensity. Small daily steps lead to monumental software engineering growth.',
    iconName: 'Flame',
    xpReward: 60,
    maxProgress: 3,
    getProgress: (p) => {
      const current = Math.min(3, p.streakDays || 0);
      return { current, max: 3, unlocked: current >= 3 };
    }
  },
  {
    id: 'badge-streak-7',
    name: 'Iron Will',
    category: 'milestones',
    rarity: 'Gold',
    description: 'Maintain a 7-day unbroken coding streak.',
    lore: 'A full week of non-stop dedication! Your coding muscle memory is forming at hyper speed.',
    iconName: 'Flame',
    xpReward: 200,
    maxProgress: 7,
    getProgress: (p) => {
      const current = Math.min(7, p.streakDays || 0);
      return { current, max: 7, unlocked: current >= 7 };
    }
  },
  {
    id: 'badge-xp-500',
    name: 'Rising Star',
    category: 'milestones',
    rarity: 'Silver',
    description: 'Amass 500 total Experience Points (XP).',
    lore: 'Half a thousand XP earned through active engagement, exercises, and relentless curiosity.',
    iconName: 'Star',
    xpReward: 100,
    maxProgress: 500,
    getProgress: (p) => {
      const current = Math.min(500, p.xp || 0);
      return { current, max: 500, unlocked: current >= 500 };
    }
  },
  {
    id: 'badge-xp-1000',
    name: 'Centurion of Code',
    category: 'milestones',
    rarity: 'Gold',
    description: 'Amass 1,000 total Experience Points (XP).',
    lore: 'Four digits of mastery. A prominent milestone recognized by the entire Coding Vibes community.',
    iconName: 'Zap',
    xpReward: 250,
    maxProgress: 1000,
    getProgress: (p) => {
      const current = Math.min(1000, p.xp || 0);
      return { current, max: 1000, unlocked: current >= 1000 };
    }
  },
  {
    id: 'badge-xp-2500',
    name: 'Grandmaster Virtuoso',
    category: 'milestones',
    rarity: 'Diamond',
    description: 'Amass 2,500 total Experience Points (XP).',
    lore: 'The pinnacle of learning. You possess the dedication, grit, and intellect of an elite software engineer.',
    iconName: 'Crown',
    xpReward: 600,
    maxProgress: 2500,
    getProgress: (p) => {
      const current = Math.min(2500, p.xp || 0);
      return { current, max: 2500, unlocked: current >= 2500 };
    }
  }
];
