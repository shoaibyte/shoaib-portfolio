import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://shoaib.dev', // Replace with your actual domain
    integrations: [
        tailwind({
            applyBaseStyles: false, // We'll create our own base styles
        }),
        react(),
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                theme: 'github-dark-dimmed',
                wrap: true,
            },
        }),
        sitemap(),
    ],
    markdown: {
        shikiConfig: {
            theme: 'github-dark-dimmed',
            wrap: true,
        },
    },
    vite: {
        optimizeDeps: {
            exclude: ['astro:content'],
        },
    },
});