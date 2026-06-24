"use client";

import { useActionState } from "react";
import { createPost, type PostActionState } from "./actions";

const initialState: PostActionState = {};

export function PostForm() {
  const [state, action, pending] = useActionState(createPost, initialState);
  return (
    <form action={action} className="stack-form wide-form">
      <label>제목<input name="title" required maxLength={120} /></label>
      <label>Slug<input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="solving-hydration-errors" /></label>
      <label>요약<textarea name="summary" required maxLength={300} rows={3} /></label>
      <label>본문 (Markdown)<textarea name="content" required rows={20} className="editor" /></label>
      <label>태그<input name="tags" placeholder="Next.js, TypeScript" /></label>
      <label>상태<select name="status" defaultValue="draft"><option value="draft">초안</option><option value="published">발행</option></select></label>
      <label className="checkbox"><input name="featured" type="checkbox" />주요 글로 표시</label>
      {state.error && <p className="form-error" role="alert">{state.error}</p>}
      <button className="button primary" disabled={pending}>{pending ? "저장 중…" : "포스트 저장"}</button>
    </form>
  );
}
