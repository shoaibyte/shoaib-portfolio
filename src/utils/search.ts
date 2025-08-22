// src/utils/search.ts

export interface SearchableItem {
    title: string;
    description?: string;
    content?: string;
    url: string;
    type: 'blog' | 'project' | 'note';
    tags?: string[];
    publishDate?: Date;
}

export interface SearchResult {
    item: SearchableItem;
    score: number;
    highlights: string[];
}

/**
 * Simple client-side search functionality
 * This can be enhanced with more sophisticated search algorithms
 */
export class SearchEngine {
    private items: SearchableItem[] = [];

    constructor(items: SearchableItem[] = []) {
        this.items = items;
    }

    addItems(items: SearchableItem[]) {
        this.items.push(...items);
    }

    search(query: string, limit = 10): SearchResult[] {
        if (!query.trim()) return [];

        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        const results: SearchResult[] = [];

        for (const item of this.items) {
            const score = this.calculateScore(item, searchTerms);
            if (score > 0) {
                const highlights = this.getHighlights(item, searchTerms);
                results.push({ item, score, highlights });
            }
        }

        return results
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    }

    private calculateScore(item: SearchableItem, searchTerms: string[]): number {
        let score = 0;
        const searchableText = [
            item.title,
            item.description || '',
            item.content || '',
            ...(item.tags || [])
        ].join(' ').toLowerCase();

        for (const term of searchTerms) {
            // Title matches are worth more
            if (item.title.toLowerCase().includes(term)) {
                score += 10;
            }

            // Tag matches are worth more
            if (item.tags?.some(tag => tag.toLowerCase().includes(term))) {
                score += 8;
            }

            // Description matches
            if (item.description?.toLowerCase().includes(term)) {
                score += 5;
            }

            // Content matches
            if (item.content?.toLowerCase().includes(term)) {
                score += 2;
            }

            // Exact word matches get bonus
            const words = searchableText.split(/\s+/);
            if (words.includes(term)) {
                score += 3;
            }
        }

        return score;
    }

    private getHighlights(item: SearchableItem, searchTerms: string[]): string[] {
        const highlights: string[] = [];

        // Add title if it matches
        if (searchTerms.some(term => item.title.toLowerCase().includes(term))) {
            highlights.push(item.title);
        }

        // Add description snippet if it matches
        if (item.description) {
            for (const term of searchTerms) {
                if (item.description.toLowerCase().includes(term)) {
                    const snippet = this.extractSnippet(item.description, term);
                    if (snippet) highlights.push(snippet);
                    break;
                }
            }
        }

        return highlights;
    }

    private extractSnippet(text: string, term: string, contextLength = 100): string {
        const lowerText = text.toLowerCase();
        const lowerTerm = term.toLowerCase();
        const index = lowerText.indexOf(lowerTerm);

        if (index === -1) return '';

        const start = Math.max(0, index - contextLength / 2);
        const end = Math.min(text.length, index + term.length + contextLength / 2);

        let snippet = text.slice(start, end);

        if (start > 0) snippet = '...' + snippet;
        if (end < text.length) snippet = snippet + '...';

        return snippet;
    }
}

// Helper function to create searchable items from Astro content collections
export function createSearchableItems(blogPosts: any[], projects: any[]): SearchableItem[] {
    const items: SearchableItem[] = [];

    // Add blog posts
    for (const post of blogPosts) {
        items.push({
            title: post.data.title,
            description: post.data.description,
            content: post.body || '',
            url: `/blog/${post.slug}`,
            type: 'blog',
            tags: post.data.tags || [],
            publishDate: post.data.publishDate,
        });
    }

    // Add projects
    for (const project of projects) {
        items.push({
            title: project.data.title,
            description: project.data.description,
            content: project.body || '',
            url: `/projects/${project.slug}`,
            type: 'project',
            tags: project.data.tags || [],
            publishDate: project.data.publishDate,
        });
    }

    return items;
}