import Link from "next/link";
import type { Post } from "@/types/database";

export function PostCard({ post }: { post: Post }) {
  return <article className="post-card"><div className="post-meta"><time>{new Date(post.published_at ?? post.created_at).toLocaleDateString("ko-KR")}</time><span>{post.tags.join(" · ")}</span></div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.summary}</p><Link href={`/blog/${post.slug}`} className="text-link">글 읽기 →</Link></article>;
}
