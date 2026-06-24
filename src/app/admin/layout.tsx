import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import { logout } from "@/features/auth/actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return <div className="shell admin-shell"><aside><strong>관리</strong><Link href="/admin/posts">포스트</Link><Link href="/admin/posts/new">새 글</Link><form action={logout}><button className="text-button">로그아웃</button></form></aside><section>{children}</section></div>;
}
