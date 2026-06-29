import type { Metadata } from "next";
import { Code2, ExternalLink } from "lucide-react";
import { getProjects } from "@/features/projects/queries";
import { cn, ui } from "@/styles/theme";

export const metadata: Metadata = { title: "프로젝트" };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <div className={cn(ui.layout.shell, ui.layout.pageStack)}><header className={ui.pageHeader.root}><p className={ui.text.eyebrow}>SELECTED WORK</p><h1 className={ui.pageHeader.title}>프로젝트</h1><p className={ui.pageHeader.copy}>기능 목록이 아니라 문제, 선택, 결과를 중심으로 설명합니다.</p></header>{projects.length ? <div className={ui.project.grid}>{projects.map((project) => <article className={ui.project.card} key={project.id}><p className={ui.text.eyebrow}>{project.technologies.join(" · ")}</p><h2 className={ui.project.title}>{project.title}</h2><p className={ui.project.summary}>{project.summary}</p>{project.problem && <dl className={ui.project.details}><dt className={ui.project.detailTerm}>문제</dt><dd className={ui.project.detailDescription}>{project.problem}</dd><dt className={ui.project.detailTerm}>해결</dt><dd className={ui.project.detailDescription}>{project.solution}</dd><dt className={ui.project.detailTerm}>결과</dt><dd className={ui.project.detailDescription}>{project.impact}</dd></dl>}<div className={ui.project.links}>{project.repository_url && <a className={ui.project.link} href={project.repository_url} target="_blank" rel="noreferrer"><Code2 size={16} />Code</a>}{project.live_url && <a className={ui.project.link} href={project.live_url} target="_blank" rel="noreferrer"><ExternalLink size={16} />Live</a>}</div></article>)}</div> : <div className={ui.empty}>프로젝트 사례를 정리하고 있습니다.</div>}</div>;
}
