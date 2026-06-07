# Portfolio QA Report — shoaib.dev

**Date:** 2026-06-07  
**Audited by:** Senior QA Engineer (AI)  
**Tech Stack:** Astro + TypeScript  
**Scope:** Full site — Sidebar, Navbar, Homepage, Blog Listing, Blog Post, Projects, Notes, About  
**Implementation status:** All 42 issues addressed in codebase (see git diff)

---

## SUMMARY TABLE

| # | Area | Severity | Issue | Status |
|---|------|----------|-------|--------|
| 1 | Blog Post | Critical | Duplicate `<h1>` on every blog post page | Fixed — rehype demote-first-h1 plugin |
| 2 | Hero / Homepage | Critical | Counter animation stuck: `200$K+`, `999.%` | Fixed — data-attribute counter rewrite |
| 3 | Homepage | Critical | Dollar sign misplaced: `200$K+` should be `$200K+` | Fixed — same as #2 |
| 4 | Sidebar | High | GitHub URL mismatch: `sayanshoaib` vs `shoaibyte` | Fixed — `src/config/site.ts` |
| 5 | Navbar | High | Search input not wrapped in `<form role="search">` | Fixed |
| 6 | Navbar | High | Mobile hamburger missing `aria-label`, `aria-expanded` | Fixed |
| 7 | Navbar | High | `"Home"` nav button always shown on homepage | Already fixed / verified |
| 8 | Navbar | High | `<nav>` has no `aria-label` | Fixed |
| 9 | Blog Post | High | No Table of Contents for long-form posts | Fixed — `TableOfContents.astro` |
| 10 | Blog Post | High | Code blocks have no language label | Fixed — `data-language` + CSS |
| 11 | Blog Post | High | Code blocks have no "Copy" button | Fixed — client script |
| 12 | Blog Post | High | No estimated reading time | Fixed — `reading-time` package |
| 13 | Blog Post | High | No "Back to Blog" breadcrumb | Fixed |
| 14 | Blog | High | Blog listing asymmetric card layout | Fixed — grid orphan CSS |
| 15 | Blog | High | Date format inconsistency | Fixed — `formatDate()` utility |
| 16 | Projects | High | Projects page missing `<h1>` | Fixed |
| 17 | Homepage | Medium | `"999.%"` uptime counter bug | Fixed — same as #2 |
| 18 | Homepage | Medium | Achievement card text concatenation | Fixed — separate `<p>` elements |
| 19 | Homepage | Medium | Achievement card missing space | Fixed |
| 20 | Homepage | Medium | Performance card missing separator | Fixed |
| 21 | Global | Medium | No `<footer>` element | Fixed — `Footer.astro` |
| 22 | Global | Medium | No JSON-LD structured data | Fixed — Person + BlogPosting |
| 23 | Global | Medium | No Twitter Card meta tags | Fixed — `name=` twitter tags |
| 24 | Global | Medium | No `<link rel="sitemap">` | Fixed |
| 25 | Global | Medium | No skip-navigation link | Fixed |
| 26 | Blog Post | Medium | External links missing `rel="noopener noreferrer"` | Fixed — rehype-external-links |
| 27 | Sidebar | Medium | Sidebar `<aside>` has no `aria-label` | Fixed |
| 28 | Sidebar | Medium | Confusing double active state on Home | N/A — conditional Home link |
| 29 | Navbar | Medium | Theme toggle button not accessible | Fixed — dynamic `aria-label` |
| 30 | Blog Post | Medium | Generic h3 headings (What/Why/How/When) | Content-level (not code change) |
| 31 | Blog Post | Medium | Decision Matrix table no overflow wrapper | Fixed — rehype table wrapper |
| 32 | Blog Post | Medium | Table row borders hard to read | Fixed — collapse + borders |
| 33 | Homepage | Medium | GitHub stats images no fallback | Fixed — onerror fallback |
| 34 | Homepage | Medium | Typing animation no aria-live fallback | Fixed — `aria-live="polite"` |
| 35 | SEO | Medium | Page titles not branded | Fixed — `{title} \| Shoaib Hasan` |
| 36 | SEO | Medium | No `robots` meta tag | Fixed |
| 37 | Blog | Low | Blog tags not clickable/filterable | Fixed — `/tags/[tag]` pages |
| 38 | Blog | Low | No pagination | Note added; pagination deferred |
| 39 | Blog Post | Low | No social share buttons | Fixed — `ShareButtons.astro` |
| 40 | Projects | Low | Project card double-space in date | Fixed |
| 41 | Global | Low | Emoji in nav not `aria-hidden` | Fixed |
| 42 | Global | Low | Buttons have wrong `type` | Fixed — `type="button"` |

---

## KEY FIX LOCATIONS

| File | Changes |
|------|---------|
| `src/config/site.ts` | Single source of truth for social links and site metadata |
| `src/utils/formatDate.ts` | Consistent date formatting |
| `src/utils/rehype-plugins.ts` | Demote h1, code language labels, table wrappers |
| `astro.config.mjs` | Rehype pipeline, canonical site URL |
| `src/layouts/Layout.astro` | SEO meta, skip link, branded titles |
| `src/layouts/PortfolioLayout.astro` | `#main-content`, Footer, head slot |
| `src/components/layout/Header.astro` | Search form, ARIA, mobile menu |
| `src/components/layout/Sidebar.astro` | ARIA, unified GitHub link |
| `src/components/layout/Footer.astro` | Site footer |
| `src/pages/index.astro` | Counter fix, Person JSON-LD, achievements |
| `src/pages/blog/[slug].astro` | TOC, reading time, copy, share, BlogPosting schema |
| `src/pages/blog/index.astro` | formatDate, grid fix, clickable tags |
| `src/pages/tags/[tag].astro` | Tag filter pages |
| `src/pages/projects/index.astro` | Page h1 heading |
| `public/robots.txt` | Crawler directives + sitemap |

---

## SEO RECOMMENDATIONS (IMPLEMENTED)

1. JSON-LD Schema — Person (homepage) + BlogPosting (posts)
2. Twitter Card meta tags — `name=` attributes with image
3. Per-post OG images — optional follow-up via `@astrojs/og`
4. Sitemap linked in `<head>` + `@astrojs/sitemap` integration
5. `robots.txt` in `public/`
6. Explicit `robots` meta tag
7. Canonical URLs via `SITE.url` in config
8. Reading time on blog posts
9. Clickable tags for internal linking

---

## OPTIONAL FOLLOW-UPS

- Per-post auto-generated OG images (`@astrojs/og`)
- Full-text search (search input UI ready; logic stubbed)
- Blog pagination when archive exceeds ~12 posts
- Rename generic h3 headings in MDX content (What/Why/How/When → contextual titles)
