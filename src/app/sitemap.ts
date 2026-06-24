import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/features/posts/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const posts = await getPublishedPosts();
  return ["", "/blog", "/projects", "/about"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })).concat(posts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.updated_at) })));
}
