import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/login-form";
import { ui } from "@/styles/theme";

export const metadata: Metadata = { title: "관리자 로그인", robots: { index: false, follow: false } };
export default function LoginPage() { return <div className={ui.form.card}><p className={ui.text.eyebrow}>ADMIN</p><h1 className={ui.form.cardTitle}>관리자 로그인</h1><LoginForm /></div>; }
