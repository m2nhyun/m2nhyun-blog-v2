import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { deletePost } from "@/features/posts/actions";
import type { Post } from "@/types/database";

export default async function AdminPostsPage() {
  const { supabase } = await requireAdmin();
  const { data, error } = await supabase.from("posts").select("*").order("updated_at", { ascending: false });
  if (error) throw new Error(error.message);
  const posts = (data ?? []) as Post[];
  return <div className="admin-content"><div className="section-heading"><h1>포스트</h1><Link className="button primary" href="/admin/posts/new">새 글</Link></div><div className="admin-list">{posts.map((post) => <article key={post.id}><div><strong>{post.title}</strong><p>{post.status === "published" ? "발행" : "초안"} · {post.slug}</p></div><form action={deletePost}><input type="hidden" name="id" value={post.id} /><button className="text-button danger">삭제</button></form></article>)}</div></div>;
}
