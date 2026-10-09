import React from 'react';
import { CodeAnnotation as CodeAnnotationType } from '../../types';
import { FormattedText } from './FormattedText';
import { Terminal } from 'lucide-react';

interface CodeAnnotationProps {
  annotations: CodeAnnotationType[];
  title?: string;
}

export const CodeAnnotation: React.FC<CodeAnnotationProps> = ({
  annotations,
  title = 'Understanding the Code Line by Line'
}) => {
  if (!annotations || annotations.length === 0) return null;

  return (
    <div className="my-6 rounded-2xl bg-[#080d17] border border-[#1e293b] p-5 sm:p-6 shadow-xl space-y-4">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#22c55e] font-bold">
        <Terminal className="w-4 h-4" />
        <span>{title}</span>
      </div>

      <div className="space-y-3">
        {annotations.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[#0d1422] border border-[#1e293b] p-4 flex flex-col sm:flex-row sm:items-start gap-3 hover:border-gray-600 transition"
          >
            <div className="sm:w-1/3 shrink-0">
              <code className="px-2.5 py-1.5 rounded-lg bg-[#141d2e] border border-sky-500/30 text-[#38bdf8] font-mono text-xs sm:text-sm font-bold block overflow-x-auto">
                {item.lineOrToken}
              </code>
            </div>
            <div className="sm:w-2/3 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <FormattedText text={item.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
