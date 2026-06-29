import Link from "next/link";
import { ui } from "@/styles/theme";

const links = [["/blog", "글"], ["/projects", "프로젝트"], ["/about", "소개"]] as const;

export function Header() {
  return <header className={ui.nav.header}><nav className={ui.nav.inner} aria-label="주요 메뉴"><Link href="/" className={ui.nav.brand}>m2nhyun<span className={ui.nav.brandDot}>.</span></Link><div className={ui.nav.links}>{links.map(([href, label]) => <Link className={ui.nav.link} key={href} href={href}>{label}</Link>)}</div></nav></header>;
}
