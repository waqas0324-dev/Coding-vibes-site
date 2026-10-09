import React from 'react';
import { Layers } from 'lucide-react';

export const HtmlPageStructureDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-2xl bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] p-6 sm:p-8 shadow-xl transition-all space-y-4">
      <div className="space-y-1 pb-3 border-b border-gray-200 dark:border-[#1e293b]">
        <h3 className="text-xl sm:text-2xl font-black text-[#282A35] dark:text-white flex items-center space-x-2">
          <Layers className="w-5 h-5 text-[#04AA6D]" />
          <span>HTML Page Structure</span>
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Below is a visualization of an HTML page structure:
        </p>
      </div>

      {/* The Nested Box Diagram matching Screenshot 6 */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 sm:p-6 bg-[#f7f8f9] dark:bg-[#090e18] font-mono text-sm space-y-4 shadow-inner">
        {/* Outer <html> tag */}
        <div className="text-gray-900 dark:text-gray-100 font-bold text-base">
          &lt;html&gt;
        </div>

        {/* <head> Container */}
        <div className="ml-4 sm:ml-8 border border-gray-300 dark:border-gray-700 rounded bg-[#eef1f4] dark:bg-[#111827] p-4 space-y-3">
          <div className="text-gray-900 dark:text-gray-100 font-semibold">
            &lt;head&gt;
          </div>

          {/* <title> inner card */}
          <div className="ml-4 sm:ml-6 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#1f293d] p-3 text-gray-900 dark:text-white shadow-xs">
            &lt;title&gt;Page title&lt;/title&gt;
          </div>

          <div className="text-gray-900 dark:text-gray-100 font-semibold">
            &lt;/head&gt;
          </div>
        </div>

        {/* <body> Container */}
        <div className="ml-4 sm:ml-8 border border-gray-300 dark:border-gray-700 rounded bg-[#eef1f4] dark:bg-[#111827] p-4 space-y-3">
          <div className="text-gray-900 dark:text-gray-100 font-semibold">
            &lt;body&gt;
          </div>

          {/* <h1> inner card */}
          <div className="ml-4 sm:ml-6 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#1f293d] p-3 text-gray-900 dark:text-white shadow-xs">
            &lt;h1&gt;This is a heading&lt;/h1&gt;
          </div>

          {/* <p> inner card 1 */}
          <div className="ml-4 sm:ml-6 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#1f293d] p-3 text-gray-900 dark:text-white shadow-xs">
            &lt;p&gt;This is a paragraph.&lt;/p&gt;
          </div>

          {/* <p> inner card 2 */}
          <div className="ml-4 sm:ml-6 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-[#1f293d] p-3 text-gray-900 dark:text-white shadow-xs">
            &lt;p&gt;This is another paragraph.&lt;/p&gt;
          </div>

          <div className="text-gray-900 dark:text-gray-100 font-semibold">
            &lt;/body&gt;
          </div>
        </div>

        {/* Closing </html> tag */}
        <div className="text-gray-900 dark:text-gray-100 font-bold text-base">
          &lt;/html&gt;
        </div>
      </div>

      {/* Note footer */}
      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
        <strong className="text-amber-800 dark:text-amber-400 font-bold">Note:</strong> The content inside the <code>&lt;body&gt;</code> section will be displayed in a browser. The content inside the <code>&lt;title&gt;</code> element will be shown in the browser's title bar or in the page's tab.
      </div>
    </div>
  );
};
