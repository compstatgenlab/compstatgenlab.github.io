# CompStatGen Lab Website

**Computational & Statistical Genomics — Rubinacci Lab, FIMM, University of Helsinki**

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Auto-deploys to GitHub Pages on every push to `main`.

## Local development

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Build

```bash
npm run build
npm run preview   # preview the built site locally
```

## Structure

```
src/
  pages/          # Routes (index, research, software, publications, team, contact)
  pages/articles/ # Articles index + dynamic [slug] route
  content/
    articles/     # Markdown files → one per article
  layouts/        # Base, Page, Article layouts
  components/     # Nav, Footer
  styles/         # global.css (Tailwind)
public/
  images/lab/     # Lab photos
.github/
  workflows/
    deploy.yml    # GitHub Actions → auto-deploy to Pages
```

## Adding an article

Create a new `.md` file in `src/content/articles/`:

```markdown
---
title: "Your article title"
description: "One sentence summary shown in listings"
date: 2025-03-01
author: Simone Rubinacci
tags: [GLIMPSE2, methods]
heroImage: /images/lab/your-image.jpg   # optional
---

Your article content in Markdown...
```

Push to `main` → live in ~60 seconds.

## Adding a team member

Edit `src/pages/team.astro` and add an entry to the `members` array.

## GitHub Pages setup

In your repo Settings → Pages → set **Source** to **GitHub Actions**.
The workflow handles the rest automatically.
