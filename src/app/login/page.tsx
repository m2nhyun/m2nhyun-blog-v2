import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/login-form";

export const metadata: Metadata = { title: "관리자 로그인", robots: { index: false, follow: false } };
export default function LoginPage() { return <div className="auth-card"><p className="eyebrow">ADMIN</p><h1>관리자 로그인</h1><LoginForm /></div>; }
