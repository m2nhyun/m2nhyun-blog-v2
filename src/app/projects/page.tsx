import type { Metadata } from "next";
import { Code2, ExternalLink } from "lucide-react";
import { getProjects } from "@/features/projects/queries";

export const metadata: Metadata = { title: "프로젝트" };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <div className="shell page-stack"><header className="page-header"><p className="eyebrow">SELECTED WORK</p><h1>프로젝트</h1><p>기능 목록이 아니라 문제, 선택, 결과를 중심으로 설명합니다.</p></header>{projects.length ? <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.id}><p className="eyebrow">{project.technologies.join(" · ")}</p><h2>{project.title}</h2><p>{project.summary}</p>{project.problem && <dl><dt>문제</dt><dd>{project.problem}</dd><dt>해결</dt><dd>{project.solution}</dd><dt>결과</dt><dd>{project.impact}</dd></dl>}<div className="project-links">{project.repository_url && <a href={project.repository_url} target="_blank" rel="noreferrer"><Code2 size={16} />Code</a>}{project.live_url && <a href={project.live_url} target="_blank" rel="noreferrer"><ExternalLink size={16} />Live</a>}</div></article>)}</div> : <div className="empty-state">프로젝트 사례를 정리하고 있습니다.</div>}</div>;
}
