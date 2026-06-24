import { z } from "zod";

export const postSchema = z.object({
  title: z.string().trim().min(1).max(120),
  slug: z.string().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  summary: z.string().trim().min(1).max(300),
  content: z.string().trim().min(1),
  tags: z.string().transform((value) =>
    value.split(",").map((tag) => tag.trim()).filter(Boolean),
  ),
  status: z.enum(["draft", "published"]),
  featured: z.string().optional().transform((value) => value === "on"),
});
