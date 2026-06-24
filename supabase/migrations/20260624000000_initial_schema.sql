create extension if not exists pgcrypto;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'reader' check (role in ('reader', 'admin')),
  display_name text,
  created_at timestamptz not null default now()
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null check (char_length(title) between 1 and 120),
  summary text not null check (char_length(summary) between 1 and 300),
  content text not null,
  status text not null default 'draft' check (status in ('draft', 'published')),
  tags text[] not null default '{}',
  featured boolean not null default false,
  author_id uuid references public.profiles(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  summary text not null,
  problem text not null default '',
  solution text not null default '',
  impact text not null default '',
  technologies text[] not null default '{}',
  repository_url text,
  live_url text,
  featured boolean not null default false,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.guestbook_entries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 40),
  message text not null check (char_length(message) between 1 and 500),
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger posts_set_updated_at before update on public.posts
for each row execute function public.set_updated_at();
create trigger projects_set_updated_at before update on public.projects
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles
    where id = (select auth.uid()) and role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.projects enable row level security;
alter table public.guestbook_entries enable row level security;

create policy "profile owner can read profile" on public.profiles
for select to authenticated using (id = (select auth.uid()));

create policy "published posts are public" on public.posts
for select to anon, authenticated using (status = 'published' or public.is_admin());
create policy "admins can create posts" on public.posts
for insert to authenticated with check (public.is_admin() and author_id = (select auth.uid()));
create policy "admins can update posts" on public.posts
for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins can delete posts" on public.posts
for delete to authenticated using (public.is_admin());

create policy "projects are public" on public.projects
for select to anon, authenticated using (true);
create policy "admins can create projects" on public.projects
for insert to authenticated with check (public.is_admin());
create policy "admins can update projects" on public.projects
for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins can delete projects" on public.projects
for delete to authenticated using (public.is_admin());

create policy "approved guestbook entries are public" on public.guestbook_entries
for select to anon, authenticated using (approved or public.is_admin());
create policy "anyone can submit guestbook entries" on public.guestbook_entries
for insert to anon, authenticated with check (approved = false);
create policy "admins can moderate guestbook entries" on public.guestbook_entries
for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins can delete guestbook entries" on public.guestbook_entries
for delete to authenticated using (public.is_admin());

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;
grant select on public.posts, public.projects, public.guestbook_entries to anon, authenticated;
grant insert, update, delete on public.posts, public.projects, public.guestbook_entries to authenticated;
grant select on public.profiles to authenticated;
