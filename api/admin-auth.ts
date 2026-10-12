import { clearAdminCookie, constantTimeEquals, createAdminCookie, isAdminRequest } from './_lib/admin.js';

export default function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Vary', 'Cookie');

  if (req.method === 'GET') {
    return res.status(200).json({ authenticated: isAdminRequest(req) });
  }

  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', clearAdminCookie());
    return res.status(200).json({ authenticated: false });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST, DELETE');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const configuredPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;
  if (!configuredPassword || !sessionSecret) {
    return res.status(503).json({
      error: 'Admin login is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET in the deployment environment.'
    });
  }

  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  if (!constantTimeEquals(password, configuredPassword)) {
    return res.status(401).json({ error: 'Incorrect password.' });
  }

  res.setHeader('Set-Cookie', createAdminCookie(sessionSecret));
  return res.status(200).json({ authenticated: true });
}
