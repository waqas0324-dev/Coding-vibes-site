import React, { useState } from 'react';
import { DiagramConfig } from '../../types';
import { ArrowDown, Layout, Move, Sparkles, Layers, Box, Globe, ChevronRight } from 'lucide-react';

interface DiagramVisualizerProps {
  diagram?: DiagramConfig;
  config?: DiagramConfig;
  caption?: string;
}

export const DiagramVisualizer: React.FC<DiagramVisualizerProps> = ({ diagram, config, caption: customCaption }) => {
  const activeDiagram = diagram || config;
  if (!activeDiagram) return null;

  const { type, title, caption: diagCaption } = activeDiagram;
  const caption = customCaption || diagCaption;

  // State for interactive flexbox diagram
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');
  const [justifyContent, setJustifyContent] = useState<'flex-start' | 'center' | 'space-between' | 'flex-end'>('space-between');
  const [alignItems, setAlignItems] = useState<'stretch' | 'center' | 'flex-start'>('center');

  // State for active node in HTML Tree
  const [activeHtmlNode, setActiveHtmlNode] = useState<string | null>('body');

  return (
    <div className="my-6 rounded-2xl bg-[#080d17] border border-[#1e293b] p-5 sm:p-7 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
            <Layout className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#22c55e] font-bold block">
              VISUAL CONCEPT DIAGRAM
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {title || 'Visual Structure Breakdown'}
            </h3>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-[#141d2e] border border-[#1e293b] text-[11px] font-mono text-gray-400">
          Interactive Visual
        </span>
      </div>

      {/* 1. HTML TREE DIAGRAM */}
      {type === 'html-tree' && (
        <div className="space-y-6">
          <div className="bg-[#05080f] rounded-xl p-6 border border-[#1e293b]/80 relative overflow-x-auto">
            {/* Visual Tree */}
            <div className="min-w-[450px] flex flex-col items-center space-y-4 text-xs font-mono">
              {/* DOCTYPE Node */}
              <button
                onClick={() => setActiveHtmlNode('doctype')}
                className={`px-4 py-2 rounded-xl border font-bold transition shadow-md flex items-center space-x-2 ${
                  activeHtmlNode === 'doctype'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-400 ring-2 ring-amber-400/30'
                    : 'bg-[#0f172a] text-amber-400/80 border-amber-500/30 hover:border-amber-400'
                }`}
              >
                <span>&lt;!DOCTYPE html&gt;</span>
                <span className="text-[10px] text-gray-400 font-sans font-normal">(HTML5 declaration)</span>
              </button>

              <ArrowDown className="w-4 h-4 text-gray-500" />

              {/* HTML Root Node */}
              <button
                onClick={() => setActiveHtmlNode('html')}
                className={`px-6 py-2.5 rounded-xl border font-bold transition shadow-lg ${
                  activeHtmlNode === 'html'
                    ? 'bg-[#22c55e]/20 text-[#4ade80] border-[#22c55e] ring-2 ring-[#22c55e]/40'
                    : 'bg-[#0f172a] text-[#4ade80] border-[#22c55e]/40 hover:border-[#22c55e]'
                }`}
              >
                &lt;html&gt; (Root Container)
              </button>

              {/* Branching to Head & Body */}
              <div className="w-full max-w-md grid grid-cols-2 gap-4 pt-2 relative">
                <div className="absolute top-0 left-1/4 right-1/4 h-3 border-t-2 border-l-2 border-r-2 border-gray-600 rounded-t-lg pointer-events-none" />

                {/* HEAD Branch */}
                <div className="flex flex-col items-center space-y-3 pt-3">
                  <button
                    onClick={() => setActiveHtmlNode('head')}
                    className={`w-full text-center py-2 px-3 rounded-xl border font-semibold transition ${
                      activeHtmlNode === 'head'
                        ? 'bg-sky-500/20 text-sky-300 border-sky-400 ring-2 ring-sky-400/30'
                        : 'bg-[#0c1626] text-sky-400 border-sky-500/30 hover:border-sky-400'
                    }`}
                  >
                    &lt;head&gt; (Metadata)
                  </button>
                  <ArrowDown className="w-3.5 h-3.5 text-gray-500" />
                  <div className="w-full bg-[#08101a] border border-sky-900/40 rounded-lg p-2.5 text-[11px] text-sky-200 text-center space-y-1">
                    <div className="font-semibold">&lt;title&gt;Page Title&lt;/title&gt;</div>
                    <div className="text-gray-400 text-[10px]">&lt;meta charset="UTF-8"&gt;</div>
                  </div>
                </div>

                {/* BODY Branch */}
                <div className="flex flex-col items-center space-y-3 pt-3">
                  <button
                    onClick={() => setActiveHtmlNode('body')}
                    className={`w-full text-center py-2 px-3 rounded-xl border font-semibold transition ${
                      activeHtmlNode === 'body'
                        ? 'bg-[#22c55e]/25 text-[#4ade80] border-[#22c55e] ring-2 ring-[#22c55e]/40'
                        : 'bg-[#0b1f14] text-[#4ade80] border-[#22c55e]/40 hover:border-[#22c55e]'
                    }`}
                  >
                    &lt;body&gt; (Visible Content)
                  </button>
                  <ArrowDown className="w-3.5 h-3.5 text-gray-500" />
                  <div className="w-full bg-[#08180f] border border-emerald-900/40 rounded-lg p-2.5 text-[11px] text-emerald-200 text-left space-y-1 font-mono">
                    <div className="text-pink-400 font-semibold">&lt;h1&gt;Main Heading&lt;/h1&gt;</div>
                    <div className="text-amber-300">&lt;p&gt;Paragraph text...&lt;/p&gt;</div>
                    <div className="text-cyan-300">&lt;img src="..." alt="..."&gt;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Node detail explainer */}
          <div className="rounded-xl bg-[#0d131f] border border-[#1e293b] p-4 text-xs sm:text-sm text-gray-300 flex items-start space-x-3">
            <Sparkles className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
            <div>
              {activeHtmlNode === 'doctype' && (
                <p>
                  <strong className="text-amber-400">&lt;!DOCTYPE html&gt;:</strong> Must be on line 1. It informs the browser to render the page in standard HTML5 mode.
                </p>
              )}
              {activeHtmlNode === 'html' && (
                <p>
                  <strong className="text-[#4ade80]">&lt;html&gt;:</strong> The root element of an HTML document. All other tags and content must sit inside it.
                </p>
              )}
              {activeHtmlNode === 'head' && (
                <p>
                  <strong className="text-sky-400">&lt;head&gt;:</strong> Contains behind-the-scenes data like page title, character encoding, and external stylesheets (not directly visible in the browser viewport).
                </p>
              )}
              {activeHtmlNode === 'body' && (
                <p>
                  <strong className="text-[#4ade80]">&lt;body&gt;:</strong> Holds every visible element shown to users (headings, text, buttons, images, forms, and tables).
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. CSS BOX MODEL DIAGRAM */}
      {type === 'box-model' && (
        <div className="space-y-4">
          <div className="bg-[#05080f] rounded-xl p-6 border border-[#1e293b] flex flex-col items-center">
            {/* Margin layer */}
            <div className="w-full max-w-lg rounded-2xl bg-amber-500/15 border-2 border-dashed border-amber-500/50 p-4 text-center">
              <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider block mb-2">
                MARGIN (Space outside the border)
              </span>

              {/* Border layer */}
              <div className="rounded-xl bg-purple-500/20 border-2 border-purple-500 p-4 text-center">
                <span className="text-[11px] font-mono font-bold text-purple-300 uppercase tracking-wider block mb-2">
                  BORDER (The edge outline)
                </span>

                {/* Padding layer */}
                <div className="rounded-lg bg-[#22c55e]/20 border-2 border-dashed border-[#22c55e]/60 p-4 text-center">
                  <span className="text-[11px] font-mono font-bold text-[#4ade80] uppercase tracking-wider block mb-2">
                    PADDING (Space inside between border & content)
                  </span>

                  {/* Content core */}
                  <div className="rounded bg-sky-500/30 border border-sky-400 p-4 text-center shadow-inner">
                    <span className="text-xs font-mono font-extrabold text-sky-200 uppercase tracking-wider block">
                      CONTENT
                    </span>
                    <span className="text-[11px] text-gray-300 font-sans block mt-0.5">
                      Text, Images, Video, Children (Width × Height)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <span className="font-bold text-amber-400 block font-mono">margin</span>
              <span className="text-[11px] text-gray-400">Clears outside</span>
            </div>
            <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <span className="font-bold text-purple-400 block font-mono">border</span>
              <span className="text-[11px] text-gray-400">Wraps padding</span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="font-bold text-emerald-400 block font-mono">padding</span>
              <span className="text-[11px] text-gray-400">Inner breathing room</span>
            </div>
            <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20">
              <span className="font-bold text-sky-400 block font-mono">content</span>
              <span className="text-[11px] text-gray-400">Actual text/media</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. FLEXBOX INTERACTIVE VISUALIZER */}
      {type === 'flexbox' && (
        <div className="space-y-5">
          {/* Controls toolbar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#0d131f] p-3 rounded-xl border border-[#1e293b] text-xs">
            <div>
              <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1 font-bold">
                flex-direction
              </label>
              <div className="flex space-x-1">
                <button
                  onClick={() => setFlexDirection('row')}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition ${
                    flexDirection === 'row' ? 'bg-[#22c55e] text-black font-bold' : 'bg-[#141d2e] text-gray-300'
                  }`}
                >
                  row
                </button>
                <button
                  onClick={() => setFlexDirection('column')}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition ${
                    flexDirection === 'column' ? 'bg-[#22c55e] text-black font-bold' : 'bg-[#141d2e] text-gray-300'
                  }`}
                >
                  column
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1 font-bold">
                justify-content
              </label>
              <select
                value={justifyContent}
                onChange={e => setJustifyContent(e.target.value as any)}
                className="w-full bg-[#141d2e] border border-[#1e293b] text-xs text-white rounded px-2 py-1 font-mono"
              >
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="flex-end">flex-end</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1 font-bold">
                align-items
              </label>
              <select
                value={alignItems}
                onChange={e => setAlignItems(e.target.value as any)}
                className="w-full bg-[#141d2e] border border-[#1e293b] text-xs text-white rounded px-2 py-1 font-mono"
              >
                <option value="center">center</option>
                <option value="flex-start">flex-start</option>
                <option value="stretch">stretch</option>
              </select>
            </div>
          </div>

          {/* Flex Container Stage */}
          <div className="bg-[#05080f] rounded-xl p-4 sm:p-6 border border-[#22c55e]/30 min-h-[220px]">
            <div
              className="w-full h-full min-h-[180px] rounded-lg border-2 border-dashed border-[#22c55e]/40 p-3 transition-all duration-300 flex"
              style={{
                flexDirection,
                justifyContent,
                alignItems,
                gap: '12px'
              }}
            >
              <div className="w-20 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center font-mono font-bold text-black text-sm shadow-lg">
                Box 1
              </div>
              <div className="w-20 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-black text-sm shadow-lg">
                Box 2
              </div>
              <div className="w-20 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-mono font-bold text-black text-sm shadow-lg">
                Box 3
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. FORM ANATOMY DIAGRAM */}
      {type === 'form-anatomy' && (
        <div className="space-y-4">
          <div className="bg-[#05080f] rounded-xl p-5 sm:p-7 border border-[#1e293b]">
            <div className="max-w-md mx-auto space-y-4 rounded-xl bg-[#0c1320] border-2 border-[#22c55e]/50 p-5 shadow-2xl relative">
              <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#22c55e] text-black font-mono text-[10px] font-bold rounded">
                &lt;form action="/submit" method="POST"&gt;
              </div>

              {/* Input field 1 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#38bdf8] font-bold">&lt;label for="name"&gt;Full Name&lt;/label&gt;</span>
                  <span className="text-[10px] text-gray-500 font-mono">Links via id</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  disabled
                  className="w-full px-3 py-2 rounded-lg bg-[#080d14] border border-[#1e293b] text-xs text-gray-300 font-mono"
                />
                <span className="text-[10px] text-amber-400 font-mono block">
                  &lt;input type="text" id="name" name="userName" required&gt;
                </span>
              </div>

              {/* Input field 2 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#38bdf8] font-bold">&lt;label for="email"&gt;Email Address&lt;/label&gt;</span>
                </div>
                <input
                  type="email"
                  placeholder="name@example.com"
                  disabled
                  className="w-full px-3 py-2 rounded-lg bg-[#080d14] border border-[#1e293b] text-xs text-gray-300 font-mono"
                />
                <span className="text-[10px] text-amber-400 font-mono block">
                  &lt;input type="email" id="email" name="userEmail" required&gt;
                </span>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="button"
                  className="w-full py-2.5 rounded-lg bg-[#22c55e] text-black font-bold text-xs flex items-center justify-center space-x-1.5 shadow-lg"
                >
                  <span>Submit Form</span>
                  <span className="text-[10px] font-mono opacity-80">(&lt;button type="submit"&gt;)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. JAVASCRIPT DOM TREE FLOW */}
      {type === 'dom-tree' && (
        <div className="bg-[#05080f] rounded-xl p-6 border border-[#1e293b] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center text-xs">
            <div className="p-3 rounded-xl bg-purple-500/15 border border-purple-500/30 text-center space-y-1">
              <span className="font-bold text-purple-300 font-mono block">1. JavaScript</span>
              <span className="text-[10px] text-gray-400 block font-mono">document.getElementById('btn')</span>
            </div>

            <div className="flex justify-center text-gray-500">
              <ChevronRight className="w-5 h-5 hidden sm:block text-[#22c55e]" />
              <ArrowDown className="w-5 h-5 sm:hidden text-[#22c55e]" />
            </div>

            <div className="p-3 rounded-xl bg-sky-500/15 border border-sky-500/30 text-center space-y-1">
              <span className="font-bold text-sky-300 font-mono block">2. DOM Engine</span>
              <span className="text-[10px] text-gray-400 block">Finds Node in Memory Tree</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-1">
              <span className="font-bold text-emerald-300 font-mono block">3. Live Screen</span>
              <span className="text-[10px] text-gray-400 block">Updates Text or Color</span>
            </div>
          </div>
        </div>
      )}

      {/* 6. SEMANTIC HTML LAYOUT */}
      {type === 'semantic-layout' && (
        <div className="bg-[#05080f] rounded-xl p-5 border border-[#1e293b] space-y-2 text-xs font-mono text-center">
          <div className="rounded-lg bg-sky-950/60 border border-sky-500/40 p-3 text-sky-300 font-bold">
            &lt;header&gt; (Logo, Branding, Site Title)
          </div>
          <div className="rounded-lg bg-indigo-950/60 border border-indigo-500/40 p-2.5 text-indigo-300 font-bold">
            &lt;nav&gt; (Navigation Links: Home, Courses, Practice)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 p-4 text-emerald-300 font-bold space-y-2">
              <div>&lt;main&gt; (Primary Page Content)</div>
              <div className="rounded bg-black/40 border border-emerald-700/50 p-2 text-[11px]">
                &lt;article&gt; / &lt;section&gt; (Individual Articles & Sections)
              </div>
            </div>
            <div className="rounded-lg bg-amber-950/60 border border-amber-500/40 p-4 text-amber-300 font-bold flex items-center justify-center">
              &lt;aside&gt; (Sidebar, Related Links, Ads)
            </div>
          </div>
          <div className="rounded-lg bg-purple-950/60 border border-purple-500/40 p-3 text-purple-300 font-bold">
            &lt;footer&gt; (Copyright, Footer Navigation, Contact Info)
          </div>
        </div>
      )}

      {/* 7. HEADING HIERARCHY */}
      {type === 'heading-hierarchy' && (
        <div className="bg-[#05080f] rounded-xl p-5 border border-[#1e293b] space-y-3">
          <div className="p-3 rounded-lg bg-[#0d1522] border border-[#1e293b] flex items-center justify-between">
            <span className="font-mono text-xs text-[#22c55e] font-bold">&lt;h1&gt;</span>
            <span className="text-xl sm:text-2xl font-black text-white">Main Page Title (Only 1 per page)</span>
            <span className="text-[10px] text-gray-500 font-mono">Level 1</span>
          </div>
          <div className="p-3 rounded-lg bg-[#0d1522] border border-[#1e293b] flex items-center justify-between">
            <span className="font-mono text-xs text-sky-400 font-bold">&lt;h2&gt;</span>
            <span className="text-lg sm:text-xl font-bold text-white">Major Section Heading</span>
            <span className="text-[10px] text-gray-500 font-mono">Level 2</span>
          </div>
          <div className="p-3 rounded-lg bg-[#0d1522] border border-[#1e293b] flex items-center justify-between">
            <span className="font-mono text-xs text-amber-400 font-bold">&lt;h3&gt;</span>
            <span className="text-base font-semibold text-gray-200">Subsection Topic</span>
            <span className="text-[10px] text-gray-500 font-mono">Level 3</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#0d1522] border border-[#1e293b] flex items-center justify-between opacity-80">
            <span className="font-mono text-xs text-gray-400">&lt;h4&gt; to &lt;h6&gt;</span>
            <span className="text-sm font-medium text-gray-400">Deep sub-topics and labels</span>
            <span className="text-[10px] text-gray-500 font-mono">Levels 4-6</span>
          </div>
        </div>
      )}

      {/* Caption footer */}
      {caption && (
        <div className="mt-4 pt-3 border-t border-[#1e293b] text-xs text-gray-400 italic">
          💡 {caption}
        </div>
      )}
    </div>
  );
};
