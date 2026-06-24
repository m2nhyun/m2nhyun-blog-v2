"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { postSchema } from "./schemas";

export type PostActionState = { error?: string };

export async function createPost(
  _state: PostActionState,
  formData: FormData,
): Promise<PostActionState> {
  const parsed = postSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: "입력값을 다시 확인해주세요." };

  const { supabase, user } = await requireAdmin();
  const payload = {
    ...parsed.data,
    author_id: user.id,
    published_at: parsed.data.status === "published" ? new Date().toISOString() : null,
  };
  const { error } = await supabase.from("posts").insert(payload);

  if (error) return { error: error.code === "23505" ? "이미 사용 중인 slug입니다." : error.message };
  revalidatePath("/", "layout");
  redirect("/admin/posts");
}

export async function deletePost(formData: FormData) {
  const id = formData.get("id");
  if (typeof id !== "string") return;
  const { supabase } = await requireAdmin();
  const { error } = await supabase.from("posts").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/", "layout");
}
