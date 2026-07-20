import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    client: z.string(),
    publishedDate: z.string(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    atAGlance: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { caseStudies };
