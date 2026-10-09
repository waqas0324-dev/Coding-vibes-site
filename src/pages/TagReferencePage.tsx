import React, { useState, useMemo } from 'react';
import {
  Search,
  Play,
  Check,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Tags,
  Code2,
  BookOpen,
  Globe,
  Zap,
  FileCode2,
  ListChecks,
  Palette,
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { CodeBlock } from '../components/CodeBlock';
import { tagReferences, getTagReference, TagReference } from '../data/tagReference';

const browsers = ['Chrome', 'Edge', 'Firefox', 'Safari', 'Opera'] as const;

function TryItButton({ code, title, language = 'html' }: { code: string; title: string; language?: string }) {
  const { openTryit } = useNavigation();
  return (
    <button
      onClick={() => openTryit(code, language, title)}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#04AA6D] hover:bg-[#03995f] text-white font-bold text-sm transition shadow-sm"
    >
      Try it Yourself <Play className="w-4 h-4" />
    </button>
  );
}

function SectionHeading({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mt-10 mb-4">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-[#04AA6D]">
        <Icon className="w-4 h-4" />
      </span>
      {children}
    </h2>
  );
}

function TagDetail({ tag }: { tag: TagReference }) {
  const { navigateTo } = useNavigation();
  const idx = tagReferences.findIndex((t) => t.tag === tag.tag);
  const prev = idx > 0 ? tagReferences[idx - 1] : null;
  const next = idx < tagReferences.length - 1 ? tagReferences[idx + 1] : null;
  const bs = tag.browserSupport;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb back */}
      <button
        onClick={() => navigateTo('tag-reference')}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#04AA6D] hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> All HTML Tags
      </button>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
        HTML <code className="text-[#04AA6D] font-mono">&lt;{tag.tag}&gt;</code> Tag
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Complete reference: definition, browser support, attributes, examples and default styling.
      </p>

      {/* Example */}
      <SectionHeading icon={Code2}>Example</SectionHeading>
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#1e293b]">
        <CodeBlock code={tag.example} language="html" showLineNumbers={true} />
      </div>
      <div className="mt-3">
        <TryItButton code={tag.example} title={`HTML <${tag.tag}> Tag Example`} />
      </div>

      {/* Definition and Usage */}
      <SectionHeading icon={BookOpen}>Definition and Usage</SectionHeading>
      <div className="bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-[#1e293b] rounded-xl p-5">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{tag.definition}</p>
      </div>

      {/* Browser Support */}
      <SectionHeading icon={Globe}>Browser Support</SectionHeading>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-[#1e293b]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-[#141d2e]">
              <th className="text-left px-4 py-3 font-bold text-gray-700 dark:text-gray-200">Element</th>
              {browsers.map((b) => (
                <th key={b} className="px-4 py-3 font-bold text-gray-700 dark:text-gray-200 text-center">
                  {b}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200 dark:border-[#1e293b]">
              <td className="px-4 py-3 font-mono font-bold text-[#04AA6D]">&lt;{tag.tag}&gt;</td>
              {[bs.chrome, bs.edge, bs.firefox, bs.safari, bs.opera].map((v, i) => (
                <td key={i} className="px-4 py-3 text-center">
                  <span className="inline-flex items-center gap-1 text-[#04AA6D] font-semibold">
                    <Check className="w-4 h-4" /> {v}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Attributes */}
      <SectionHeading icon={ListChecks}>Attributes</SectionHeading>
      {tag.attributes.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-[#1e293b]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-[#141d2e]">
                <th className="text-left px-4 py-3 font-bold text-gray-700 dark:text-gray-200">Attribute</th>
                <th className="text-left px-4 py-3 font-bold text-gray-700 dark:text-gray-200">Value</th>
                <th className="text-left px-4 py-3 font-bold text-gray-700 dark:text-gray-200">Description</th>
              </tr>
            </thead>
            <tbody>
              {tag.attributes.map((attr) => (
                <tr key={attr.name} className="border-t border-gray-200 dark:border-[#1e293b]">
                  <td className="px-4 py-3 font-mono font-bold text-[#38bdf8] whitespace-nowrap">{attr.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600 dark:text-gray-400">{attr.value}</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{attr.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-[#1e293b] rounded-xl p-5">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            The <code className="font-mono text-[#04AA6D]">&lt;{tag.tag}&gt;</code> tag has no tag-specific
            attributes in HTML5 — use global attributes (like <code className="font-mono">class</code> and{' '}
            <code className="font-mono">id</code>) instead.
          </p>
        </div>
      )}

      {/* Global Attributes */}
      <SectionHeading icon={Globe}>Global Attributes</SectionHeading>
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-xl p-5">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {tag.supportsGlobalAttributes ? (
            <>
              The <code className="font-mono font-bold text-[#04AA6D]">&lt;{tag.tag}&gt;</code> tag also supports
              the Global Attributes in HTML — such as <code className="font-mono">class</code>,{' '}
              <code className="font-mono">id</code>, <code className="font-mono">style</code>,{' '}
              <code className="font-mono">title</code>, <code className="font-mono">lang</code> and{' '}
              <code className="font-mono">data-*</code>.
            </>
          ) : (
            <>The <code className="font-mono font-bold">&lt;{tag.tag}&gt;</code> tag does not support global attributes.</>
          )}
        </p>
      </div>

      {/* Event Attributes */}
      <SectionHeading icon={Zap}>Event Attributes</SectionHeading>
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-xl p-5">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {tag.supportsEventAttributes ? (
            <>
              The <code className="font-mono font-bold text-[#04AA6D]">&lt;{tag.tag}&gt;</code> tag also supports
              the Event Attributes in HTML — such as <code className="font-mono">onclick</code>,{' '}
              <code className="font-mono">onload</code>, <code className="font-mono">onmouseover</code> and{' '}
              <code className="font-mono">onkeydown</code>.
            </>
          ) : (
            <>The <code className="font-mono font-bold">&lt;{tag.tag}&gt;</code> tag does not support event attributes.</>
          )}
        </p>
      </div>

      {/* More Examples */}
      {tag.moreExamples.length > 0 && (
        <>
          <SectionHeading icon={FileCode2}>More Examples</SectionHeading>
          <div className="space-y-6">
            {tag.moreExamples.map((ex, i) => (
              <div key={i}>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{ex.title}</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#1e293b]">
                  <CodeBlock code={ex.code} language="html" showLineNumbers={true} />
                </div>
                <div className="mt-3">
                  <TryItButton code={ex.code} title={`HTML <${tag.tag}> Tag — ${ex.title}`} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Default CSS Settings */}
      <SectionHeading icon={Palette}>Default CSS Settings</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        Browsers apply the following default styling to the{' '}
        <code className="font-mono text-[#04AA6D]">&lt;{tag.tag}&gt;</code> element:
      </p>
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-[#1e293b]">
        <CodeBlock code={tag.defaultCSS} language="css" showLineNumbers={false} />
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200 dark:border-[#1e293b]">
        {prev ? (
          <button
            onClick={() => navigateTo('tag-reference', { tagSlug: prev.tag })}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-[#141d2e] hover:bg-gray-200 dark:hover:bg-[#1a2540] font-bold text-sm transition"
          >
            <ArrowLeft className="w-4 h-4" /> <code className="font-mono">&lt;{prev.tag}&gt;</code>
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button
            onClick={() => navigateTo('tag-reference', { tagSlug: next.tag })}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#04AA6D] hover:bg-[#03995f] text-white font-bold text-sm transition"
          >
            <code className="font-mono">&lt;{next.tag}&gt;</code> <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export const TagReferencePage: React.FC = () => {
  const { params, navigateTo } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const active = params.tagSlug ? getTagReference(params.tagSlug) : undefined;

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return tagReferences;
    return tagReferences.filter(
      (t) => t.tag.includes(q) || t.title.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (active) {
    return <TagDetail tag={active} />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="space-y-2 pb-6 border-b border-gray-200 dark:border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-[#04AA6D] uppercase tracking-wider">
            HTML Reference
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{tagReferences.length} tags</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
          <Tags className="w-8 h-8 text-[#04AA6D]" /> HTML Tag Reference
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          Click any tag to open its full reference page — definition, browser support, attributes, runnable
          examples and default CSS, just like W3Schools.
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-6 mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tags... (e.g. table, a, img)"
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-[#1e293b] bg-white dark:bg-[#0f172a] text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#04AA6D]"
        />
      </div>

      {/* Tag grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm py-8 text-center">
          No tags found for “{searchQuery}”.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((t) => (
            <button
              key={t.tag}
              onClick={() => navigateTo('tag-reference', { tagSlug: t.tag })}
              className="group flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 dark:border-[#1e293b] bg-white dark:bg-[#0f172a] hover:border-[#04AA6D] hover:shadow-md transition text-left"
            >
              <code className="font-mono font-bold text-sm text-gray-800 dark:text-gray-100 group-hover:text-[#04AA6D]">
                &lt;{t.tag}&gt;
              </code>
              <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-[#04AA6D] group-hover:translate-x-0.5 transition" />
            </button>
          ))}
        </div>
      )}

      {/* Info note */}
      <div className="mt-10 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 rounded-xl p-5 flex gap-3">
        <BookOpen className="w-5 h-5 text-[#04AA6D] shrink-0 mt-0.5" />
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Every tag page includes a runnable example with a <strong>Try it Yourself</strong> button, a browser
          support table, the tag's attributes, and the browser's default CSS — the complete W3Schools-style
          reference experience.
        </p>
      </div>
    </div>
  );
};
