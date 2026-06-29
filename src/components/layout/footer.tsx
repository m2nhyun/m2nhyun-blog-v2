import { ui } from "@/styles/theme";

export function Footer() {
  return <footer className={ui.footer.root}><div className={ui.footer.inner}><p className={ui.footer.text}>문제를 기록하고, 판단의 근거를 남깁니다.</p><p className={ui.footer.text}>© {new Date().getFullYear()} 김민현</p></div></footer>;
}
