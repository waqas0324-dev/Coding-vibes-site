-- Coding Vibes project library
-- Apply this migration to the dedicated Supabase project used by Coding Vibes.
create table if not exists public.codingvibes_projects (
  id text primary key,
  title text not null,
  slug text not null unique,
  description text not null default '',
  level text not null default 'Beginner' check (level in ('Beginner', 'Intermediate', 'Advanced')),
  tech text not null default 'HTML · CSS · JavaScript',
  thumbnail text,
  files jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists codingvibes_projects_status_updated_idx
  on public.codingvibes_projects (status, updated_at desc);

alter table public.codingvibes_projects enable row level security;
revoke all on public.codingvibes_projects from anon, authenticated;
grant all on public.codingvibes_projects to service_role;
