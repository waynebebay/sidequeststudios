import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { authors } from "./data/authors"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  category: z.string(),

  author: z.enum(
    Object.keys(authors) as [string, ...string[]]
  ).optional(),

  featured: z.boolean().default(false),
  readTime: z.string().optional(),
  coverImage: z.string().optional()
})
});
export const collections = { blog };
