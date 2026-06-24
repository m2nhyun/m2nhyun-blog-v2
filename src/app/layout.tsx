import type { Metadata } from "next";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "김민현 — Frontend Engineer", template: "%s | 김민현" },
  description: "프론트엔드 개발 과정에서 마주친 문제와 해결의 근거를 기록합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><Header /><main className="main-content">{children}</main><Footer /></body>
    </html>
  );
}
