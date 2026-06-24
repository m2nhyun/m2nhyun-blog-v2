export type PostStatus = "draft" | "published";

export interface Post {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  status: PostStatus;
  tags: string[];
  featured: boolean;
  author_id: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  repository_url: string | null;
  live_url: string | null;
  featured: boolean;
  display_order: number;
}
