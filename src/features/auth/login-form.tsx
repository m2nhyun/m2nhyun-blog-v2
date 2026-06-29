"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";
import { cn, ui } from "@/styles/theme";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(login, initialState);
  return (
    <form action={action} className={ui.form.stack}>
      <label className={ui.form.label}>이메일<input className={ui.form.control} name="email" type="email" required autoComplete="email" /></label>
      <label className={ui.form.label}>비밀번호<input className={ui.form.control} name="password" type="password" required autoComplete="current-password" /></label>
      {state.error && <p className={ui.form.error} role="alert">{state.error}</p>}
      <button className={cn(ui.button.base, ui.button.primary)} disabled={pending}>{pending ? "로그인 중…" : "로그인"}</button>
    </form>
  );
}
