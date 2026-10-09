import React from 'react';
import { Course } from '../types';
import { TechBadge } from './TechBadge';
import { useNavigation } from '../context/NavigationContext';
import { useLearning } from '../context/LearningContext';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, compact = false }) => {
  const { navigateTo } = useNavigation();
  const { getCourseProgressPercentage } = useLearning();
  const progressPercent = getCourseProgressPercentage(course.slug);

  const isComingSoon = course.status === 'Coming Soon';

  const handleCardClick = () => {
    if (isComingSoon) return;
    navigateTo('course-detail', { courseSlug: course.slug });
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative flex flex-col justify-between rounded-xl bg-[#0d131f] border border-[#1e293b] p-5 transition-all duration-300 hover:border-[#22c55e]/50 hover:bg-[#111a2c] ${
        isComingSoon ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-[#22c55e]/5'
      }`}
    >
      <div>
        {/* Top Header with Tech Badge & Status */}
        <div className="flex items-start justify-between mb-4">
          <TechBadge type={course.badgeType} size="md" />
          {isComingSoon ? (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
              Coming Soon
            </span>
          ) : (
            <span
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                course.difficulty === 'Beginner'
                  ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                  : course.difficulty === 'Intermediate'
                  ? 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                  : 'bg-purple-950/60 text-purple-400 border border-purple-800/40'
              }`}
            >
              {course.difficulty}
            </span>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-lg font-bold text-white group-hover:text-[#22c55e] transition mb-2">
          {course.title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {course.description}
        </p>
      </div>

      <div>
        {/* Course Metadata info */}
        {!compact && (
          <div className="flex items-center space-x-4 text-xs text-gray-400 py-3 border-t border-[#1e293b] mb-4">
            <div className="flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-gray-500" />
              <span>{course.modulesCount} Modules</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>{course.lessonsCount} Lessons</span>
            </div>
            {course.estimatedHours && (
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                <span>{course.estimatedHours}h</span>
              </div>
            )}
          </div>
        )}

        {/* Progress Bar (if active) */}
        {!isComingSoon && progressPercent > 0 && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
              <span>Progress</span>
              <span className="font-semibold text-[#22c55e]">{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#1e293b] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#22c55e] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* CTA Action */}
        {!isComingSoon ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="w-full mt-1 flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-lg bg-[#141d2e] hover:bg-[#22c55e] text-gray-200 hover:text-black font-semibold text-xs transition duration-200 group-hover:border group-hover:border-[#22c55e]"
          >
            <span>{progressPercent > 0 ? 'Continue Learning' : 'Start Learning'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <div className="w-full py-2 text-center text-xs text-gray-500">
            Available in Phase 2
          </div>
        )}
      </div>
    </div>
  );
};
