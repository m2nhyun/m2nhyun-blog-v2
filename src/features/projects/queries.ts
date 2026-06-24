import "server-only";
import { unstable_cache } from "next/cache";
import { createPublicClient } from "@/lib/supabase/public";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { Project } from "@/types/database";

async function queryProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured()) return [];
  const { data, error } = await createPublicClient().from("projects").select("*").order("display_order");
  if (error) throw new Error(`Failed to load projects: ${error.message}`);
  return (data ?? []) as Project[];
}

export const getProjects = unstable_cache(queryProjects, ["projects"], { revalidate: 3600, tags: ["projects"] });
