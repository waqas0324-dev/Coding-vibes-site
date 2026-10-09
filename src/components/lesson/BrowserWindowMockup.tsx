import React from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Globe, X } from 'lucide-react';

interface BrowserWindowMockupProps {
  url?: string;
  heading?: string;
  paragraph?: string;
}

export const BrowserWindowMockup: React.FC<BrowserWindowMockupProps> = ({
  url = 'file:///C:/Users/myuser/Desktop/index.htm',
  heading = 'My First Heading',
  paragraph = 'My first paragraph.'
}) => {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 bg-white shadow-xl max-w-2xl mx-auto">
      {/* 1. Chrome Tab Header */}
      <div className="bg-[#dfe1e5] dark:bg-[#1a1f2c] px-3 pt-2 pb-0 flex items-center border-b border-gray-300 dark:border-gray-700 select-none">
        <div className="flex items-center space-x-2 bg-white dark:bg-[#282d3d] px-3.5 py-1.5 rounded-t-lg border-t border-l border-r border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-800 dark:text-gray-100 shadow-xs max-w-[200px]">
          <Globe className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          <span className="truncate">index.htm</span>
          <X className="w-3 h-3 text-gray-400 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* 2. Navigation & Address Bar */}
      <div className="bg-[#f1f3f4] dark:bg-[#151922] px-3 py-2 flex items-center space-x-2.5 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center space-x-1.5 text-gray-500">
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700" title="Back">
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 opacity-50" title="Forward">
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700" title="Refresh">
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex-1 flex items-center px-3 py-1 bg-white dark:bg-[#0c1017] border border-gray-300 dark:border-gray-600 rounded-full text-xs font-mono text-gray-700 dark:text-gray-300 shadow-inner truncate">
          <span className="truncate">{url}</span>
        </div>
      </div>

      {/* 3. Browser Viewport Rendering */}
      <div className="p-6 sm:p-8 bg-white text-black min-h-[200px] space-y-3 font-serif select-text">
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
          {heading}
        </h1>
        <p className="text-base text-gray-900 leading-normal">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
