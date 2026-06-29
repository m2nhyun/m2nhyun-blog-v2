import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { deletePost } from "@/features/posts/actions";
import type { Post } from "@/types/database";
import { cn, ui } from "@/styles/theme";

export default async function AdminPostsPage() {
  const { supabase } = await requireAdmin();
  const { data, error } = await supabase.from("posts").select("*").order("updated_at", { ascending: false });
  if (error) throw new Error(error.message);
  const posts = (data ?? []) as Post[];
  return <div className={ui.admin.content}><div className={ui.section.heading}><h1 className={ui.admin.title}>포스트</h1><Link className={cn(ui.button.base, ui.button.primary)} href="/admin/posts/new">새 글</Link></div><div className={ui.admin.list}>{posts.map((post) => <article className={ui.admin.row} key={post.id}><div><strong>{post.title}</strong><p className={ui.admin.rowMeta}>{post.status === "published" ? "발행" : "초안"} · {post.slug}</p></div><form action={deletePost}><input type="hidden" name="id" value={post.id} /><button className={cn(ui.text.link, "text-[#b42318] hover:text-[#b42318]")}>삭제</button></form></article>)}</div></div>;
}
