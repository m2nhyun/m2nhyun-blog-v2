import "server-only";
import { unstable_cache } from "next/cache";
import { createPublicClient } from "@/lib/supabase/public";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { Post } from "@/types/database";

async function queryPublishedPosts(): Promise<Post[]> {
  if (!isSupabaseConfigured()) return [];

  const { data, error } = await createPublicClient()
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw new Error(`Failed to load posts: ${error.message}`);
  return (data ?? []) as Post[];
}

export const getPublishedPosts = unstable_cache(queryPublishedPosts, ["published-posts"], { revalidate: 3600, tags: ["posts"] });

async function queryPublishedPost(slug: string): Promise<Post | null> {
  if (!isSupabaseConfigured()) return null;

  const { data, error } = await createPublicClient()
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw new Error(`Failed to load post: ${error.message}`);
  return data as Post | null;
}

export const getPublishedPost = unstable_cache(queryPublishedPost, ["published-post"], { revalidate: 3600, tags: ["posts"] });
