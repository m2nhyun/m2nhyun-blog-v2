import Link from "next/link";
import type { Post } from "@/types/database";
import { cn, ui } from "@/styles/theme";

export function PostCard({ post }: { post: Post }) {
  return <article className={ui.postList.card}><div className={ui.postList.meta}><time>{new Date(post.published_at ?? post.created_at).toLocaleDateString("ko-KR")}</time><span>{post.tags.join(" · ")}</span></div><div><h2 className={ui.postList.title}><Link className={ui.postList.titleLink} href={`/blog/${post.slug}`}>{post.title}</Link></h2><p className={ui.postList.summary}>{post.summary}</p></div><Link href={`/blog/${post.slug}`} className={cn(ui.text.link, ui.postList.readLink)}>글 읽기 →</Link></article>;
}
