import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getPublishedPosts } from "@/features/posts/queries";
import { cn, ui } from "@/styles/theme";

export default async function Home() {
  const posts = (await getPublishedPosts()).slice(0, 3);
  return <div className={cn(ui.layout.shell, ui.layout.pageStack)}><section className={ui.hero.root}><p className={ui.text.eyebrow}>FRONTEND ENGINEER · TECHNICAL WRITER</p><h1 className={ui.hero.title}>복잡한 문제를<br /><em className={ui.hero.accent}>명확한 근거</em>로 해결합니다.</h1><p className={ui.hero.copy}>React, React Native, TypeScript를 중심으로 제품을 만들며 겪은 실패, 판단, 개선 결과를 기록합니다.</p><div className={ui.hero.actions}><Link className={cn(ui.button.base, ui.button.primary)} href="/blog">기술 글 보기</Link><Link className={ui.button.base} href="/projects">프로젝트 보기</Link></div></section><section><div className={ui.section.heading}><div><p className={ui.text.eyebrow}>RECENT WRITING</p><h2 className={ui.text.sectionTitle}>최근 기록</h2></div><Link href="/blog" className={ui.text.link}>모든 글 →</Link></div>{posts.length ? <div className={ui.postList.root}>{posts.map((post) => <PostCard key={post.id} post={post} />)}</div> : <div className={ui.empty}>첫 번째 문제 해결 기록을 준비하고 있습니다.</div>}</section></div>;
}
