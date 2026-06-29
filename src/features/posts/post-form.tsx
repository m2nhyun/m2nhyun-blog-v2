"use client";

import { useActionState } from "react";
import { createPost, type PostActionState } from "./actions";
import { cn, ui } from "@/styles/theme";

const initialState: PostActionState = {};

export function PostForm() {
  const [state, action, pending] = useActionState(createPost, initialState);
  return (
    <form action={action} className={cn(ui.form.stack, ui.form.wide)}>
      <label className={ui.form.label}>제목<input className={ui.form.control} name="title" required maxLength={120} /></label>
      <label className={ui.form.label}>Slug<input className={ui.form.control} name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="solving-hydration-errors" /></label>
      <label className={ui.form.label}>요약<textarea className={ui.form.control} name="summary" required maxLength={300} rows={3} /></label>
      <label className={ui.form.label}>본문 (Markdown)<textarea name="content" required rows={20} className={cn(ui.form.control, ui.form.editor)} /></label>
      <label className={ui.form.label}>태그<input className={ui.form.control} name="tags" placeholder="Next.js, TypeScript" /></label>
      <label className={ui.form.label}>상태<select className={ui.form.control} name="status" defaultValue="draft"><option value="draft">초안</option><option value="published">발행</option></select></label>
      <label className={ui.form.checkbox}><input className={ui.form.checkboxInput} name="featured" type="checkbox" />주요 글로 표시</label>
      {state.error && <p className={ui.form.error} role="alert">{state.error}</p>}
      <button className={cn(ui.button.base, ui.button.primary)} disabled={pending}>{pending ? "저장 중…" : "포스트 저장"}</button>
    </form>
  );
}
