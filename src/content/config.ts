import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        featured: z.boolean().default(false),
        image: z.string().optional(),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        image: z.string().optional(),
        github: z.string().optional(),
        demo: z.string().optional(),
        status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
    }),
});

export const collections = {
    blog,
    projects,
};