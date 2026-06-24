"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(login, initialState);
  return (
    <form action={action} className="stack-form">
      <label>이메일<input name="email" type="email" required autoComplete="email" /></label>
      <label>비밀번호<input name="password" type="password" required autoComplete="current-password" /></label>
      {state.error && <p className="form-error" role="alert">{state.error}</p>}
      <button className="button primary" disabled={pending}>{pending ? "로그인 중…" : "로그인"}</button>
    </form>
  );
}
