import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getPublishedPosts } from "@/features/posts/queries";

export default async function Home() {
  const posts = (await getPublishedPosts()).slice(0, 3);
  return <div className="shell page-stack"><section className="hero"><p className="eyebrow">FRONTEND ENGINEER · TECHNICAL WRITER</p><h1>복잡한 문제를<br /><em>명확한 근거</em>로 해결합니다.</h1><p className="hero-copy">React, React Native, TypeScript를 중심으로 제품을 만들며 겪은 실패, 판단, 개선 결과를 기록합니다.</p><div className="actions"><Link className="button primary" href="/blog">기술 글 보기</Link><Link className="button" href="/projects">프로젝트 보기</Link></div></section><section><div className="section-heading"><div><p className="eyebrow">RECENT WRITING</p><h2>최근 기록</h2></div><Link href="/blog" className="text-link">모든 글 →</Link></div>{posts.length ? <div className="post-list">{posts.map((post) => <PostCard key={post.id} post={post} />)}</div> : <div className="empty-state">첫 번째 문제 해결 기록을 준비하고 있습니다.</div>}</section></div>;
}
