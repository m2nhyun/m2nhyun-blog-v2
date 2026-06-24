# m2nhyun-blog-v2

김민현의 기술 블로그와 프로젝트 포트폴리오입니다.

## Stack

- Next.js 16 App Router
- React 19, TypeScript, Tailwind CSS 4
- Supabase Postgres, Auth, Row Level Security
- Vercel

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Supabase schema is managed in `supabase/migrations`. Apply it with:

```bash
npx supabase link --project-ref <project-ref>
npx supabase db push
```

The first administrator must exist in Supabase Auth and then be promoted with:

```sql
insert into public.profiles (id, role, display_name)
select id, 'admin', '김민현'
from auth.users
where email = '<admin-email>';
```

## Verification

```bash
pnpm verify
```
