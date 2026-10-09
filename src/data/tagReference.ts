import { tagReferencePart1 } from './tagReferencePart1';
import { tagReferencePart2 } from './tagReferencePart2';

export interface TagAttribute {
  name: string;
  value: string;
  description: string;
}

export interface TagExample {
  title: string;
  code: string;
}

export interface BrowserSupport {
  chrome: string;
  edge: string;
  firefox: string;
  safari: string;
  opera: string;
}

export interface TagReference {
  tag: string;
  title: string;
  definition: string;
  example: string;
  browserSupport: BrowserSupport;
  attributes: TagAttribute[];
  supportsGlobalAttributes: boolean;
  supportsEventAttributes: boolean;
  moreExamples: TagExample[];
  defaultCSS: string;
}

/** All HTML tag reference entries, sorted alphabetically by tag name. */
export const tagReferences: TagReference[] = [...tagReferencePart1, ...tagReferencePart2].sort((a, b) =>
  a.tag.localeCompare(b.tag)
);

/** Find a tag reference entry by tag name (case-insensitive). */
export function getTagReference(tagName: string): TagReference | undefined {
  const normalized = tagName.trim().toLowerCase();
  return tagReferences.find((t) => t.tag.toLowerCase() === normalized);
}
