import Link from "next/link";

const links = [["/blog", "글"], ["/projects", "프로젝트"], ["/about", "소개"]] as const;

export function Header() {
  return <header className="site-header"><nav className="shell nav" aria-label="주요 메뉴"><Link href="/" className="brand">m2nhyun<span>.</span></Link><div className="nav-links">{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</div></nav></header>;
}
