import React from 'react';
import { Minus, Square, X, HardDrive, Folder, FileText, ArrowUp, FolderPlus } from 'lucide-react';

interface NotepadWindowMockupProps {
  codeSnippet?: string;
  title?: string;
}

const DEFAULT_CODE = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>`;

/**
 * 1. NOTEPAD EDITOR WINDOW MOCKUP
 * Exactly matches the user's uploaded image and W3Schools Step 2 mockup
 */
export const NotepadWindowMockup: React.FC<NotepadWindowMockupProps> = ({
  codeSnippet = DEFAULT_CODE,
  title = 'Untitled - Notepad'
}) => {
  return (
    <div className="my-5 rounded-lg overflow-hidden border border-gray-400 dark:border-gray-600 bg-white text-gray-900 shadow-md max-w-2xl mx-auto">
      {/* Windows Title Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#0078d7] text-white text-xs select-none">
        <div className="flex items-center space-x-2">
          <span className="font-semibold tracking-wide">{title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="hover:bg-[#005a9e] px-2 py-0.5 transition" aria-label="Minimize">
            <Minus className="w-3 h-3" />
          </button>
          <button className="hover:bg-[#005a9e] px-2 py-0.5 transition" aria-label="Maximize">
            <Square className="w-2.5 h-2.5" />
          </button>
          <button className="hover:bg-red-600 px-2 py-0.5 transition" aria-label="Close">
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Notepad Menu Bar (Matching user image: File  Edit  Format  View  Help) */}
      <div className="flex items-center space-x-5 px-3 py-1 bg-[#f0f0f0] border-b border-gray-300 text-xs text-gray-800 select-none font-sans">
        <span className="hover:bg-blue-100 px-1 py-0.5 rounded cursor-default">File</span>
        <span className="hover:bg-blue-100 px-1 py-0.5 rounded cursor-default">Edit</span>
        <span className="hover:bg-blue-100 px-1 py-0.5 rounded cursor-default">Format</span>
        <span className="hover:bg-blue-100 px-1 py-0.5 rounded cursor-default">View</span>
        <span className="hover:bg-blue-100 px-1 py-0.5 rounded cursor-default">Help</span>
      </div>

      {/* Editor Body (Matching user's screenshot: white canvas, crisp monospace font) */}
      <div className="p-5 bg-white font-mono text-sm leading-relaxed text-black whitespace-pre overflow-x-auto min-h-[220px] select-text">
        {codeSnippet}
      </div>
    </div>
  );
};

interface SaveAsDialogMockupProps {
  fileName?: string;
  saveIn?: string;
  encoding?: string;
}

/**
 * 2. STANDALONE WINDOWS SAVE AS DIALOG MOCKUP
 * Renders ONLY the Save As dialog for Step 3, without repeating the editor window
 */
export const SaveAsDialogMockup: React.FC<SaveAsDialogMockupProps> = ({
  fileName = 'index.htm',
  saveIn = 'Desktop',
  encoding = 'UTF-8'
}) => {
  return (
    <div className="my-5 rounded-lg overflow-hidden border-2 border-gray-400 dark:border-gray-600 bg-[#f0f0f0] text-gray-900 shadow-xl max-w-xl mx-auto text-xs select-none">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#0078d7] text-white font-semibold">
        <span>Save As</span>
        <button className="hover:bg-red-600 px-1.5 py-0.5 rounded transition">
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* "Save in:" Location Bar with Controls */}
      <div className="p-2.5 border-b border-gray-300 bg-[#fafafa] flex items-center justify-between">
        <div className="flex items-center space-x-2 flex-1 mr-2">
          <span className="text-gray-700 font-medium whitespace-nowrap">Save in:</span>
          <div className="flex items-center space-x-1.5 px-2 py-1 bg-white border border-gray-300 rounded shadow-inner text-gray-800 flex-1 max-w-[220px]">
            <HardDrive className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-semibold truncate">{saveIn}</span>
          </div>
        </div>

        {/* Windows Explorer Navigation Icons */}
        <div className="flex items-center space-x-1 text-gray-600">
          <button className="p-1 hover:bg-gray-200 rounded border border-transparent hover:border-gray-300" title="Up One Level">
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <button className="p-1 hover:bg-gray-200 rounded border border-transparent hover:border-gray-300" title="Create New Folder">
            <FolderPlus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mock Folder Explorer View */}
      <div className="p-3 bg-white border-b border-gray-300 mx-3 mt-3 rounded border h-28 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-gray-700">
        <div className="flex items-center space-x-1.5 p-1 rounded hover:bg-blue-50 cursor-default">
          <Folder className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="truncate">My Documents</span>
        </div>
        <div className="flex items-center space-x-1.5 p-1 rounded hover:bg-blue-50 cursor-default">
          <Folder className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="truncate">Downloads</span>
        </div>
        <div className="flex items-center space-x-1.5 p-1 rounded hover:bg-blue-50 cursor-default">
          <Folder className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="truncate">Pictures</span>
        </div>
        <div className="flex items-center space-x-1.5 p-1 rounded hover:bg-blue-50 cursor-default">
          <FileText className="w-4 h-4 text-gray-400 shrink-0" />
          <span className="truncate">notes.txt</span>
        </div>
      </div>

      {/* Dialog Fields */}
      <div className="p-4 space-y-3 bg-[#f0f0f0]">
        {/* File name Row */}
        <div className="flex items-center">
          <label className="w-24 text-gray-700 font-medium text-right pr-3">
            File name:
          </label>
          <input
            type="text"
            readOnly
            value={fileName}
            className="flex-1 bg-white border-2 border-blue-500 rounded px-2 py-1 font-mono font-bold text-gray-900 shadow-inner select-all"
          />
        </div>

        {/* Save as type Row */}
        <div className="flex items-center">
          <label className="w-24 text-gray-700 font-medium text-right pr-3">
            Save as type:
          </label>
          <select
            disabled
            className="flex-1 bg-white border border-gray-400 rounded px-2 py-1 text-gray-900 font-medium"
          >
            <option>All Files (*.*)</option>
          </select>
        </div>

        {/* Encoding Row */}
        <div className="flex items-center">
          <label className="w-24 text-gray-700 font-medium text-right pr-3">
            Encoding:
          </label>
          <select
            disabled
            className="w-36 bg-white border border-gray-400 rounded px-2 py-1 text-gray-900 font-medium"
          >
            <option>{encoding}</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex justify-end space-x-2 border-t border-gray-300">
          <button
            type="button"
            className="px-6 py-1.5 bg-[#0078d7] hover:bg-[#0063b1] border border-[#005a9e] rounded font-semibold text-white shadow-xs"
          >
            Save
          </button>
          <button
            type="button"
            className="px-6 py-1.5 bg-[#e1e1e1] hover:bg-[#d0d0d0] border border-gray-400 rounded font-semibold text-gray-800 shadow-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
