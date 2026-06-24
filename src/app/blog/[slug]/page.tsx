import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Markdown } from "@/features/posts/markdown";
import { getPublishedPost, getPublishedPosts } from "@/features/posts/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { return (await getPublishedPosts()).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function PostPage({ params }: Props) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();
  return <article className="article shell-narrow"><header><p className="eyebrow">{post.tags.join(" · ") || "ENGINEERING"}</p><h1>{post.title}</h1><p className="article-summary">{post.summary}</p><time>{new Date(post.published_at ?? post.created_at).toLocaleDateString("ko-KR")}</time></header><div className="prose"><Markdown content={post.content} /></div></article>;
}
