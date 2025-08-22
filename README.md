# Shoaib's Portfolio

A modern, fast, and responsive portfolio website built with Astro, TypeScript, and Tailwind CSS. Features a clean design inspired by [tania.dev](https://tania.dev) with dark/light theme support and mobile-first responsive design.

![Portfolio Screenshot](./public/og-image.jpg)

## 🚀 Live Demo

- **Production**: [shoaib.dev](https://shoaib.dev) _(coming soon)_
- **Development**: `http://localhost:4321`

## ✨ Features

### 🎨 Design & UX
- **Modern Design System**: Clean, professional layout with consistent spacing and typography
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Smooth Animations**: Subtle hover effects and page transitions
- **Professional Typography**: Inter font family with proper hierarchy

### 📝 Content Management
- **Blog System**: Write posts in MDX with frontmatter support
- **Project Showcase**: Featured projects with GitHub/demo links
- **Content Collections**: Type-safe content with Zod validation
- **SEO Optimized**: Meta tags, Open Graph, and sitemap generation

### 🔧 Technical Features
- **Lightning Fast**: Static site generation with Astro
- **Type Safety**: Full TypeScript support with strict mode
- **Component Architecture**: Reusable components with proper separation
- **Search Ready**: Frontend search functionality framework
- **Performance Optimized**: Minimal JavaScript, optimized images

## 🛠️ Tech Stack

### Core Framework
- **[Astro](https://astro.build)** - Static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling

### Content & Data
- **[MDX](https://mdxjs.com/)** - Enhanced markdown with components
- **[Zod](https://zod.dev/)** - Schema validation for content
- **Content Collections** - Type-safe content management

### Development Tools
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## 📁 Project Structure

```
shoaib-portfolio/
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   └── Sidebar.astro
│   │   └── ui/              # Future UI components
│   ├── content/
│   │   ├── blog/            # Blog posts (MDX)
│   │   ├── projects/        # Project showcases (MDX)
│   │   └── config.ts        # Content collection schemas
│   ├── layouts/
│   │   ├── Layout.astro     # Base layout
│   │   └── PortfolioLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── blog/            # Blog pages
│   │   └── projects/        # Project pages
│   ├── styles/              # Global styles
│   ├── types/
│   │   └── global.d.ts      # TypeScript declarations
│   └── utils/               # Utility functions
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shoaibyte/shoaib-portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking

# Astro Utilities
npm run astro        # Run Astro CLI commands
npx astro sync       # Generate content collection types
```

## 📝 Content Management

### Adding Blog Posts

Create a new MDX file in `src/content/blog/`:

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your post"
publishDate: 2024-08-22
tags: ["astro", "typescript", "web-development"]
featured: true
draft: false
---

# Your Blog Post

Your content here...
```

### Adding Projects

Create a new MDX file in `src/content/projects/`:

```markdown
---
title: "Your Project Name"
description: "A brief description of your project"
publishDate: 2024-08-22
tags: ["react", "typescript", "tailwind"]
featured: true
status: "completed"
github: "https://github.com/yourusername/project"
demo: "https://your-project-demo.com"
---

# Project Details

Your project description and details...
```

### Content Schema

Both blog posts and projects support:

- **Required**: `title`, `description`, `publishDate`
- **Optional**: `tags[]`, `featured`, `image`, `updatedDate`
- **Projects Only**: `github`, `demo`, `status`

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Sidebar** (`src/components/layout/Sidebar.astro`)
    - Update bio and links

2. **Homepage** (`src/pages/index.astro`)
    - Update hero section content

3. **Layout** (`src/layouts/Layout.astro`)
    - Update meta tags and site info

### Styling

The design system uses CSS custom properties defined in `src/layouts/Layout.astro`:

```css
:root {
  --color-primary: #e879f9;      /* Primary brand color */
  --color-bg: #0f172a;           /* Background color */
  --font-sans: 'Inter', sans-serif;
  /* ... more variables */
}
```

### Adding Pages

Create new pages in `src/pages/`:

```astro
---
// src/pages/about.astro
import PortfolioLayout from '../layouts/PortfolioLayout.astro';
---

<PortfolioLayout title="About Me">
  <h1>About Me</h1>
  <!-- Your content -->
</PortfolioLayout>
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository** to Vercel
2. **Auto-deploy** on every push to main branch
3. **Environment variables** (if needed):
   ```env
   PUBLIC_SITE_URL=https://yourdomain.com
   ```

### Netlify

1. **Connect repository** to Netlify
2. **Build settings**:
    - Build command: `npm run build`
    - Publish directory: `dist`

### Static Hosting

```bash
npm run build
# Upload the `dist` folder to your hosting provider
```

## 🔧 Development

### IDE Setup

**Recommended: WebStorm or VS Code**

**VS Code Extensions:**
- Astro
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

**WebStorm:**
- Built-in TypeScript support
- Astro plugin
- Tailwind CSS support

### Adding Features

#### Search Functionality
The search framework is ready in `src/utils/search.ts`. To implement:

1. **Build search index** from content collections
2. **Add search component** with real-time results
3. **Connect to header search** input

#### Comments System
Consider adding:
- **Giscus** (GitHub Discussions)
- **Utterances** (GitHub Issues)
- **Disqus** (Traditional comments)

#### Analytics
Add analytics by updating the layout:
- **Google Analytics**
- **Umami** (Privacy-focused)
- **Vercel Analytics**

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- **Report bugs** via issues
- **Suggest improvements**
- **Use as inspiration** for your own portfolio

## 📧 Contact

- **Website**: [shoaib.dev](https://shoaib.dev)
- **Email**: [shoaib.hasan1801@gmail.com](shoaib.hasan1801@gmail.com)
- **GitHub**: [@shoaib](https://github.com/shoaibyte)
- **Twitter**: [@shoaib](https://x.com/ShoaibHasan1806)

---

⭐ **Star this repo** if you found it helpful!

Built with ❤️ using [Astro](https://astro.build)