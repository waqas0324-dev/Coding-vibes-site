import { isAdminRequest } from './_lib/admin';

const TABLE = 'codingvibes_projects';

function config(res: any) {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, '');
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    res.status(503).json({
      error: 'Project database is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then apply the Coding Vibes projects migration.'
    });
    return null;
  }
  return { url, key };
}

async function databaseRequest(base: { url: string; key: string }, path: string, init: RequestInit = {}) {
  return fetch(base.url + '/rest/v1/' + TABLE + path, {
    ...init,
    headers: {
      apikey: base.key,
      Authorization: 'Bearer ' + base.key,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
    cache: 'no-store',
  });
}

function toClient(row: any) {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description || '',
    level: row.level,
    tech: row.tech || '',
    thumbnail: row.thumbnail || undefined,
    files: row.files || {},
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function toDatabase(project: any) {
  return {
    id: String(project.id),
    title: String(project.title).trim(),
    slug: String(project.slug).trim(),
    description: String(project.description || ''),
    level: ['Beginner', 'Intermediate', 'Advanced'].includes(project.level) ? project.level : 'Beginner',
    tech: String(project.tech || 'HTML · CSS · JavaScript'),
    thumbnail: typeof project.thumbnail === 'string' ? project.thumbnail : null,
    files: project.files && typeof project.files === 'object' && !Array.isArray(project.files) ? project.files : {},
    status: project.status === 'published' ? 'published' : 'draft',
    created_at: project.createdAt || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

export default async function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  const base = config(res);
  if (!base) return;

  if (req.method === 'GET') {
    const admin = isAdminRequest(req);
    const query = '?select=id,title,slug,description,level,tech,thumbnail,files,status,created_at,updated_at&order=updated_at.desc' +
      (admin ? '' : '&status=eq.published');
    try {
      const response = await databaseRequest(base, query);
      if (!response.ok) {
        const detail = await response.text();
        return res.status(502).json({ error: 'Could not load projects from the database.', detail });
      }
      const rows = await response.json();
      return res.status(200).json({ projects: rows.map(toClient) });
    } catch {
      return res.status(502).json({ error: 'Project database is temporarily unavailable.' });
    }
  }

  if (!isAdminRequest(req)) {
    return res.status(401).json({ error: 'Admin sign-in required.' });
  }

  if (req.method === 'POST') {
    const incoming = req.body?.project || req.body;
    if (!incoming || typeof incoming.title !== 'string' || !incoming.title.trim() ||
        typeof incoming.id !== 'string' || !incoming.id.trim() ||
        typeof incoming.slug !== 'string' || !incoming.slug.trim()) {
      return res.status(400).json({ error: 'Project title, ID and URL slug are required.' });
    }
    const encodedSize = Buffer.byteLength(JSON.stringify(incoming), 'utf8');
    if (encodedSize > 3_500_000) {
      return res.status(413).json({ error: 'This project is too large to save. Compress the thumbnail or reduce uploaded code files.' });
    }
    try {
      const response = await databaseRequest(base, '?on_conflict=id', {
        method: 'POST',
        headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
        body: JSON.stringify(toDatabase(incoming)),
      });
      const text = await response.text();
      if (!response.ok) return res.status(response.status === 409 ? 409 : 502).json({ error: 'Could not save project.', detail: text });
      const rows = text ? JSON.parse(text) : [];
      return res.status(200).json({ project: rows[0] ? toClient(rows[0]) : toClient(toDatabase(incoming)) });
    } catch {
      return res.status(502).json({ error: 'Project database is temporarily unavailable.' });
    }
  }

  if (req.method === 'DELETE') {
    const id = typeof req.query?.id === 'string' ? req.query.id : '';
    if (!id) return res.status(400).json({ error: 'Project ID is required.' });
    try {
      const response = await databaseRequest(base, '?id=eq.' + encodeURIComponent(id), { method: 'DELETE' });
      if (!response.ok) return res.status(502).json({ error: 'Could not delete project.', detail: await response.text() });
      return res.status(200).json({ deleted: true, id });
    } catch {
      return res.status(502).json({ error: 'Project database is temporarily unavailable.' });
    }
  }

  res.setHeader('Allow', 'GET, POST, DELETE');
  return res.status(405).json({ error: 'Method not allowed.' });
}
