# Muhammad Usman — Portfolio

Personal portfolio for **Muhammad Usman, Full MERN Stack Developer**.
Built with React, Vite and Tailwind CSS (v4). No UI libraries, no icon libraries, no router — it's a single page.

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into /dist
npm run preview   # preview the production build
```

Requires Node.js 18+.

## Replace the placeholders

Everything personal lives in `src/data/`, so you rarely need to touch components.

| What | Where |
| --- | --- |
| Email, GitHub, LinkedIn, location | `src/data/site.js` |
| Resume | replace `public/resume.pdf` (keep the file name) |
| Work experience | `src/data/experience.js` — remove `isPlaceholder: true` when an entry is real |
| Projects, GitHub + demo links | `src/data/projects.js` — links left as `"#"` show as "coming soon" |
| Project screenshots | replace the SVGs in `public/images/projects/` (1200×675 works best) |
| Profile photo | `public/images/profile.jpg` and `profile.webp` (800×800) |
| Skills, services, process steps | `skills.js`, `services.js`, `process.js` |

The About section's stats are calculated from your data (number of projects and technologies), so they stay accurate as you add more.

## Contact form

The form has no backend: on submit it opens the visitor's email app with the message filled in, addressed to the email in `site.js`.
To receive messages directly, replace `handleSubmit` in `src/components/Contact.jsx` with a call to Formspree, EmailJS or your own Express endpoint.

## Project structure

```text
public/
  images/            profile photo + project previews
  favicon.svg
  resume.pdf
src/
  assets/            images/ and icons/ for anything imported in code
  components/        one file per section, plus shared pieces:
                     Button, Container, SectionHeading, Reveal (scroll fade-in),
                     Icon (inline SVG icons), Logo, ProjectCard, SkillCard
  data/              all content: site, projects, skills, experience, services, process
  pages/Home.jsx     puts the sections together in order
  App.jsx            Navbar + Home + Footer
  index.css          Tailwind import, theme colors/fonts, a few global styles
```

## Customising the look

Colors and fonts are defined once in the `@theme` block at the top of `src/index.css`
(`ink`, `surface`, `line`, `accent`…). Change a value there and every `bg-accent`, `text-accent`, etc. updates.

## Deploying

Any static host works — Vercel, Netlify, GitHub Pages or Cloudflare Pages. Build command `npm run build`, output folder `dist`.
