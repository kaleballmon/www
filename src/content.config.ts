import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ base: "./src/writing", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    date_color: z.string(),
  }),
});

export const collections = { writing };
