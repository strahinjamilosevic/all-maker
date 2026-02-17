# all-maker.com

Personal site and blog by [Strahinja Milošević](https://www.linkedin.com/in/strahinjamilosevic/) — senior technical writer, occasional craftsman, and full-time overthinker.

Technical writing, leatherwork, metalwork, and other shenanigans.

## Stack

- [Docusaurus 3](https://docusaurus.io/) (TypeScript, React 19)
- Hosted on [Walrus](https://www.walrus.xyz/) (Mysten Labs)
- Domain: [all-maker.com](https://all-maker.com)

## Local development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`. Edits to pages, blog posts, and docs hot-reload automatically.

## Build

```bash
npm run build
```

Static output goes to `build/`. Serve locally with `npm run serve`.

## Structure

```
blog/           Blog posts (Markdown)
docs/           Projects & resources (Markdown/MDX)
src/
  components/   Custom React components
  css/          Global styles
  pages/        Standalone pages (homepage)
  theme/        Docusaurus theme overrides
static/img/     Images and assets
```

## License

Content and code are copyright Strahinja Milošević. All rights reserved.
