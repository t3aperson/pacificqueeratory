import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).optional(),
  }),
});

const author = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./src/content/authors" }),
  schema: z.object({
    display_name: z.string(),
    description: z.string(),
    pronouns: z.string(),
    email: z.string().email(),
    maintainer: z.boolean().default(false),
    socials: z
      .object({
        mastodon: z.string().optional(),
        bluesky: z.string().optional(),
        github: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog, author };
