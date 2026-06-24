import type { Metadata } from "next";

export const metadata: Metadata = { title: "소개" };

export default function AboutPage() {
  return <div className="shell-narrow page-stack"><header className="page-header"><p className="eyebrow">ABOUT</p><h1>김민현</h1><p>사용자 경험과 유지보수성을 함께 고민하는 프론트엔드 개발자입니다.</p></header><section className="about-copy"><h2>일하는 방식</h2><p>문제를 구현 과제로 바로 바꾸지 않습니다. 먼저 사용자가 겪는 불편과 시스템의 제약을 정의하고, 선택 가능한 해결책의 비용을 비교합니다.</p><p>이 블로그에는 성공한 결과만이 아니라 잘못된 가설, 디버깅 과정, 선택하지 않은 대안까지 남깁니다.</p><h2>주요 기술</h2><p>React · Next.js · TypeScript · JavaScript · Supabase</p></section></div>;
}
