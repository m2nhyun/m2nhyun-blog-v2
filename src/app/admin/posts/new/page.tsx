import { PostForm } from "@/features/posts/post-form";
import { ui } from "@/styles/theme";

export default function NewPostPage() { return <div className={ui.admin.content}><p className={ui.text.eyebrow}>NEW POST</p><h1 className={ui.admin.title}>새 포스트</h1><PostForm /></div>; }
