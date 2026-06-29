import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { logout } from "@/features/auth/actions";
import { ui } from "@/styles/theme";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return <div className={ui.admin.shell}><aside className={ui.admin.side}><strong>관리</strong><Link className={ui.text.link} href="/admin/posts">포스트</Link><Link className={ui.text.link} href="/admin/posts/new">새 글</Link><form action={logout}><button className={ui.text.link}>로그아웃</button></form></aside><section>{children}</section></div>;
}
