# Coding Vibes

Coding Vibes is a React + TypeScript learning platform with courses, tutorials, practice, roadmaps, project source previews, and a private Developer Studio.

## Developer Studio project publishing

The Studio supports project metadata, thumbnail upload, importing a ZIP or individual source files, editing code, a live preview, draft saving, publishing, unpublishing, and deletion. Published Studio projects are loaded by the public Projects page and have a project detail page with source-file tabs, copy/download actions, ZIP download, and a browser sandbox.

### Required deployment configuration

Project publishing uses a dedicated Supabase table through server-side API routes. Do not expose the service-role key in a `VITE_*` variable or client code.

Set these environment variables in the deployment provider:

- `ADMIN_PASSWORD`: a long, unique password for the private Developer Studio.
- `ADMIN_SESSION_SECRET`: a random secret of at least 32 bytes, used to sign an HttpOnly admin-session cookie.
- `SUPABASE_URL`: the URL of a **dedicated Coding Vibes Supabase project**.
- `SUPABASE_SERVICE_ROLE_KEY`: that project's service-role key, server-side only.

The API deliberately returns a configuration error until these values exist; it does not pretend local browser storage is a shared database.

### Database migration

Apply `supabase/migrations/20261010000000_codingvibes_projects.sql` to the dedicated Supabase project. The migration creates `public.codingvibes_projects`, enables row-level security, and keeps direct anon/authenticated table access revoked. The server API uses the service-role key for admin writes and returns only published projects to public visitors.

Do not point these settings at another website's database. Use a separate project for Coding Vibes so project records and thumbnails stay isolated.

## Local development

1. Install dependencies with `npm install` (or `bun install`).
2. Copy `.env.example` to `.env.local` and fill in the required secrets.
3. Apply the database migration.
4. Run `npm run dev`.

Build verification: `npm run lint` and `npm run build`.
