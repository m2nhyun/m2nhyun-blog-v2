import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Markdown } from "@/features/posts/markdown";
import { getPublishedPost, getPublishedPosts } from "@/features/posts/queries";
import { ui } from "@/styles/theme";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { return (await getPublishedPosts()).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function PostPage({ params }: Props) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();
  return <article className={ui.article.root}><header className={ui.article.header}><p className={ui.text.eyebrow}>{post.tags.join(" · ") || "ENGINEERING"}</p><h1 className={ui.article.title}>{post.title}</h1><p className={ui.article.summary}>{post.summary}</p><time className={ui.article.time}>{new Date(post.published_at ?? post.created_at).toLocaleDateString("ko-KR")}</time></header><div className={ui.prose.root}><Markdown content={post.content} /></div></article>;
}
