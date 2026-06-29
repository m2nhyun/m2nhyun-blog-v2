import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { getPublishedPosts } from "@/features/posts/queries";
import { cn, ui } from "@/styles/theme";

export const metadata: Metadata = { title: "기술 글", description: "문제 해결 과정과 기술적 판단을 기록한 글" };

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <div className={cn(ui.layout.shell, ui.layout.pageStack)}><header className={ui.pageHeader.root}><p className={ui.text.eyebrow}>WRITING</p><h1 className={ui.pageHeader.title}>기술 글</h1><p className={ui.pageHeader.copy}>결과보다 문제를 정의하고 해결책을 검증한 과정을 기록합니다.</p></header>{posts.length ? <div className={ui.postList.root}>{posts.map((post) => <PostCard key={post.id} post={post} />)}</div> : <div className={ui.empty}>아직 발행된 글이 없습니다.</div>}</div>;
}
