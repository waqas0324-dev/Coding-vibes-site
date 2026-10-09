import React from 'react';
import { StepItem } from '../../types';
import { FormattedText } from './FormattedText';
import { CodeBlock } from '../CodeBlock';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

interface StepByStepProps {
  steps: StepItem[];
  title?: string;
}

export const StepByStep: React.FC<StepByStepProps> = ({ steps, title }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="my-6 space-y-4">
      {title && (
        <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
          <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
          <span>{title}</span>
        </h3>
      )}

      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#090e17] border border-[#1e293b] p-5 sm:p-6 transition hover:border-[#22c55e]/40 shadow-lg relative overflow-hidden"
          >
            <div className="flex items-start space-x-4">
              {/* Step number badge */}
              <div className="w-9 h-9 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/40 text-[#22c55e] font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                {step.stepNumber || idx + 1}
              </div>

              <div className="space-y-2.5 flex-1">
                <h4 className="text-sm sm:text-base font-bold text-white">
                  <FormattedText text={step.title} />
                </h4>

                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <FormattedText text={step.description} />
                </div>

                {step.codeSnippet && (
                  <div className="mt-3">
                    <CodeBlock code={step.codeSnippet} language="html" showLineNumbers={false} />
                  </div>
                )}

                {step.tip && (
                  <div className="mt-2.5 flex items-start space-x-2 text-xs text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300 font-semibold">Tip: </strong>
                      <FormattedText text={step.tip} />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
