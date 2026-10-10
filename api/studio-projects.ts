import type { VercelRequest, VercelResponse } from '@vercel/node';

const OWNER = 'waqas0324-dev';
const REPO = 'Coding-vibes-site';
const FILE_PATH = 'public/data/studio-projects.json';
const API_URL = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`;

function send(res: VercelResponse, status: number, body: unknown) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  return res.status(status).json(body);
}

function passwordFrom(req: VercelRequest): string {
  const value = req.headers['x-studio-password'];
  return Array.isArray(value) ? value[0] || '' : value || '';
}

async function readStoredProjects(token?: string): Promise<{ projects: any[]; sha?: string }> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'Coding-Vibes-Studio',
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${API_URL}?ref=main`, { headers, cache: 'no-store' });
  if (!response.ok) throw new Error(`Project library read failed (${response.status}).`);
  const file = await response.json() as { content?: string; sha?: string };
  const content = Buffer.from(file.content || '', 'base64').toString('utf8');
  let projects: any[] = [];
  try { const parsed = JSON.parse(content); if (Array.isArray(parsed)) projects = parsed; } catch {}
  return { projects, sha: file.sha };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const providedPassword = passwordFrom(req);
  const configuredPassword = process.env.STUDIO_ADMIN_PASSWORD;
  const token = process.env.GITHUB_TOKEN;

  if (req.method === 'GET') {
    if (providedPassword) {
      if (!configuredPassword) return send(res, 503, { error: 'Studio is not configured yet. Add STUDIO_ADMIN_PASSWORD and GITHUB_TOKEN in Vercel Environment Variables.' });
      if (providedPassword !== configuredPassword) return send(res, 401, { error: 'Incorrect Studio password.' });
      try {
        const stored = await readStoredProjects(token);
        return send(res, 200, { projects: stored.projects, admin: true });
      } catch (error) {
        return send(res, 502, { error: error instanceof Error ? error.message : 'Could not load the project library.' });
      }
    }
    try {
      const stored = await readStoredProjects();
      return send(res, 200, stored.projects.filter(project => project.status === 'published'));
    } catch (error) {
      return send(res, 502, { error: error instanceof Error ? error.message : 'Could not load published projects.' });
    }
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return send(res, 405, { error: 'Method not allowed.' });
  }

  if (!configuredPassword || !token) {
    return send(res, 503, { error: 'Project publishing needs STUDIO_ADMIN_PASSWORD and GITHUB_TOKEN in Vercel Environment Variables.' });
  }
  if (!providedPassword || providedPassword !== configuredPassword) {
    return send(res, 401, { error: 'Studio session expired or password is incorrect. Sign in again.' });
  }

  const incoming = (req.body as { projects?: unknown })?.projects;
  if (!Array.isArray(incoming) || incoming.length > 200) {
    return send(res, 400, { error: 'Send a valid project list (maximum 200 projects).' });
  }
  const projects = incoming.filter((p: any) =>
    p && typeof p.id === 'string' && typeof p.title === 'string' &&
    typeof p.slug === 'string' && typeof p.files === 'object' &&
    p.files !== null && ['draft', 'published'].includes(p.status)
  );
  const json = JSON.stringify(projects, null, 2);
  if (json.length > 3_500_000) return send(res, 413, { error: 'Project library is too large. Reduce thumbnail/file sizes before publishing.' });

  try {
    const current = await readStoredProjects(token);
    const update = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
        'User-Agent': 'Coding-Vibes-Studio',
      },
      body: JSON.stringify({
        message: 'Update Coding Vibes published project library',
        content: Buffer.from(json, 'utf8').toString('base64'),
        sha: current.sha,
        branch: 'main',
      }),
    });
    if (!update.ok) {
      const detail = await update.text();
      return send(res, 502, { error: `GitHub could not save the project library (${update.status}). Check GITHUB_TOKEN permissions. ${detail.slice(0, 240)}` });
    }
    return send(res, 200, { ok: true, projects: projects.filter((p: any) => p.status === 'published'), message: 'Saved to the shared project library. Vercel will redeploy the site.' });
  } catch (error) {
    return send(res, 502, { error: error instanceof Error ? error.message : 'Could not publish projects.' });
  }
}
