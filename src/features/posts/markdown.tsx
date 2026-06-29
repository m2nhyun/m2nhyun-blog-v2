import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { cn, ui } from "@/styles/theme";

const components: Components = {
  h2: ({ className, ...props }) => <h2 className={cn(ui.prose.h2, className)} {...props} />,
  h3: ({ className, ...props }) => <h3 className={cn(ui.prose.h3, className)} {...props} />,
  p: ({ className, ...props }) => <p className={cn(ui.prose.p, className)} {...props} />,
  ul: ({ className, ...props }) => <ul className={cn(ui.prose.list, "list-disc", className)} {...props} />,
  ol: ({ className, ...props }) => <ol className={cn(ui.prose.list, "list-decimal", className)} {...props} />,
  li: ({ className, ...props }) => <li className={cn(ui.prose.listItem, className)} {...props} />,
  a: ({ className, ...props }) => <a className={cn(ui.prose.link, className)} {...props} />,
  code: ({ className, ...props }) => <code className={cn(ui.prose.inlineCode, className)} {...props} />,
  pre: ({ className, ...props }) => <pre className={cn(ui.prose.pre, className)} {...props} />,
  blockquote: ({ className, ...props }) => <blockquote className={cn(ui.prose.blockquote, className)} {...props} />,
};

export function Markdown({ content }: { content: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={components}>{content}</ReactMarkdown>;
}
