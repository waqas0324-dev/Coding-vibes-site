import { Course } from '../../types';
import { htmlCourse } from './html';
import { cssCourse } from './css';
import { javascriptCourse } from './javascript';
import { pythonCourse } from './python';
import { sqlCourse } from './sql';
import { reactCourse } from './react';
import { javaCourse } from './java';
import { phpCourse } from './php';
import { cCourse } from './c';
import { cppCourse } from './cpp';
import { csharpCourse } from './csharp';
import { bootstrapCourse } from './bootstrap';
import { w3cssCourse } from './w3css';
import { howtoCourse } from './howto';

export const activeCourses: Course[] = [
  htmlCourse,
  cssCourse,
  javascriptCourse,
  pythonCourse,
  sqlCourse,
  reactCourse,
  javaCourse,
  phpCourse,
  cCourse,
  cppCourse,
  csharpCourse,
  bootstrapCourse,
  w3cssCourse,
  howtoCourse
];

export const upcomingCourses: Partial<Course>[] = [
  // WEB DEVELOPMENT
  { id: 'course-responsive-design', slug: 'responsive-web-design', title: 'Responsive Web Design', category: 'Web Development', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'default', description: 'Advanced responsive design, container queries, and cross-device fluidity.' },
  { id: 'course-frontend-dev', slug: 'frontend-development', title: 'Frontend Development', category: 'Web Development', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'default', description: 'Modern frontend tooling, build pipelines, optimization, and state management.' },
  { id: 'course-tailwind', slug: 'tailwind-css', title: 'Tailwind CSS', category: 'Web Development', difficulty: 'Beginner', status: 'Coming Soon', badgeType: 'tailwind', description: 'Utility-first CSS framework for rapid modern UI development.' },
  { id: 'course-typescript', slug: 'typescript', title: 'TypeScript', category: 'Web Development', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'ts', description: 'Typed JavaScript for scalable and type-safe applications.' },
  { id: 'course-nodejs', slug: 'node-js', title: 'Node JS', category: 'Web Development', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'node', description: 'Server-side JavaScript runtime for backend REST APIs and microservices.' },

  // TOOLS
  { id: 'course-git', slug: 'git-github', title: 'Git & GitHub', category: 'Tools', difficulty: 'Beginner', status: 'Coming Soon', badgeType: 'git', description: 'Version control, branching, pull requests, collaboration, and open source.' },

  // FUTURE TECHNOLOGIES
  { id: 'course-databases', slug: 'databases', title: 'Databases', category: 'Future Technologies', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'default', description: 'Relational vs NoSQL, schema design, caching with Redis, and scaling.' },
  { id: 'course-backend', slug: 'backend-development', title: 'Backend Development', category: 'Future Technologies', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'default', description: 'REST APIs, GraphQL, authentication, security, and database integration.' },
  { id: 'course-fullstack', slug: 'full-stack-development', title: 'Full Stack Development', category: 'Future Technologies', difficulty: 'Advanced', status: 'Coming Soon', badgeType: 'default', description: 'End-to-end web engineering combining frontend, backend, database, and devops.' },
  { id: 'course-dsa-ds', slug: 'data-structures', title: 'Data Structures', category: 'Future Technologies', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'default', description: 'Arrays, linked lists, trees, graphs, stacks, queues, and hash maps.' },
  { id: 'course-dsa-algo', slug: 'algorithms', title: 'Algorithms', category: 'Future Technologies', difficulty: 'Advanced', status: 'Coming Soon', badgeType: 'default', description: 'Sorting, searching, recursion, dynamic programming, and Big-O notation.' },
  { id: 'course-cybersecurity', slug: 'cybersecurity', title: 'Cybersecurity', category: 'Future Technologies', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'default', description: 'Web security, OWASP top 10, penetration testing, cryptography, and defense.' },
  { id: 'course-ai-ml', slug: 'ai-machine-learning', title: 'AI & Machine Learning', category: 'Future Technologies', difficulty: 'Advanced', status: 'Coming Soon', badgeType: 'default', description: 'Neural networks, LLMs, prompt engineering, and intelligent app development.' },
  { id: 'course-devops', slug: 'devops', title: 'DevOps', category: 'Future Technologies', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'default', description: 'CI/CD pipelines, Docker, Kubernetes, monitoring, and automated deployment.' },
  { id: 'course-cloud', slug: 'cloud-computing', title: 'Cloud', category: 'Future Technologies', difficulty: 'Intermediate', status: 'Coming Soon', badgeType: 'default', description: 'Cloud infrastructure, serverless computing, storage, and scalability.' },
];

export const allCourses = [...activeCourses];

export function getCourseBySlug(slug: string): Course | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  // Support aliases
  if (normalized === 'how-to' || normalized === 'howto') {
    return activeCourses.find(c => c.slug === 'howto');
  }
  if (normalized === 'w3-css' || normalized === 'w3css') {
    return activeCourses.find(c => c.slug === 'w3css');
  }
  if (normalized === 'react' || normalized === 'react-js') {
    return activeCourses.find(c => c.slug === 'react-js');
  }
  return activeCourses.find(c => c.slug === normalized);
}

export function getLessonBySlug(courseSlug: string, lessonSlug?: string) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return null;

  if (lessonSlug) {
    const targetSlug = lessonSlug.toLowerCase().trim();
    for (const mod of course.modules) {
      const lesson = mod.lessons.find(l => l.slug.toLowerCase() === targetSlug || l.id.toLowerCase() === targetSlug);
      if (lesson) {
        return { course, module: mod, lesson };
      }
    }
  }

  // Fallback: If lessonSlug is missing or was slightly different, safely return the first lesson of the course!
  if (course.modules?.[0]?.lessons?.[0]) {
    return {
      course,
      module: course.modules[0],
      lesson: course.modules[0].lessons[0]
    };
  }

  return null;
}
