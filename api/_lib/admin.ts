import { createHmac, timingSafeEqual } from 'node:crypto';

const COOKIE_NAME = 'cv_admin_session';
const SESSION_SECONDS = 60 * 60 * 8;

function signatureFor(expiry: string, secret: string): string {
  return createHmac('sha256', secret).update('coding-vibes-admin:' + expiry).digest('base64url');
}

export function isAdminRequest(req: any): boolean {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return false;
  const cookieHeader = String(req.headers?.cookie || '');
  const cookie = cookieHeader.split(';').map((part: string) => part.trim()).find((part: string) => part.startsWith(COOKIE_NAME + '='));
  if (!cookie) return false;
  const token = decodeURIComponent(cookie.slice(COOKIE_NAME.length + 1));
  const [expiry, suppliedSignature] = token.split('.');
  if (!expiry || !suppliedSignature || !/^\d+$/.test(expiry) || Number(expiry) <= Math.floor(Date.now() / 1000)) return false;
  const expected = signatureFor(expiry, secret);
  const left = Buffer.from(suppliedSignature);
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function createAdminCookie(secret: string): string {
  const expiry = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  const token = expiry + '.' + signatureFor(expiry, secret);
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return COOKIE_NAME + '=' + encodeURIComponent(token) + '; HttpOnly; SameSite=Lax; Path=/; Max-Age=' + SESSION_SECONDS + secure;
}

export function clearAdminCookie(): string {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return COOKIE_NAME + '=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0' + secure;
}

export function constantTimeEquals(leftValue: string, rightValue: string): boolean {
  const left = Buffer.from(leftValue);
  const right = Buffer.from(rightValue);
  return left.length === right.length && timingSafeEqual(left, right);
}
