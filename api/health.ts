// Vercel serverless function: GET /api/health
export default function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.status(200).json({
    status: 'ok',
    timestamp: Date.now(),
    serverless: true
  });
}
