import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import {
    rehypeDemoteFirstH1,
    rehypeCodeLanguage,
    rehypeWrapTables,
} from './src/utils/rehype-plugins.ts';

const sharedRehypePlugins = [
    rehypeSlug,
    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    rehypeDemoteFirstH1,
    rehypeCodeLanguage,
    rehypeWrapTables,
    [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
];

// https://astro.build/config
export default defineConfig({
    site: 'https://shoaib.dev',
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                theme: 'github-dark-dimmed',
                wrap: true,
            },
            rehypePlugins: sharedRehypePlugins,
        }),
        sitemap(),
    ],
    markdown: {
        shikiConfig: {
            theme: 'github-dark-dimmed',
            wrap: true,
        },
        rehypePlugins: sharedRehypePlugins,
    },
    vite: {
        optimizeDeps: {
            exclude: ['astro:content'],
        },
    },
});
