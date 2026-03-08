# Claude Instructions for all-maker.com

## Project

- **Stack:** Docusaurus (latest v3), TypeScript, React 19
- **Repo:** github.com/strahinjamilosevic/all-maker
- **Domain:** all-maker.com
- **Hosting:** GitHub Pages

### Structure

```
blog/           Markdown blog posts
docs/           Crafting projects & resources (Markdown/MDX)
src/
  components/   Custom React components
  css/          Global styles
  pages/        Standalone pages (homepage)
  theme/        Docusaurus theme overrides
static/img/     Images and assets
```

### Commands

```bash
npm start       # Dev server at localhost:3000
npm run build   # Production build to build/
npm run serve   # Serve production build locally
npm run typecheck
```

## Writing style

### Blog and general content

- American conversational English. Informal, millennial jargon is fine.
- Influenced by English language and literature training and Simplified Technical English (STE).
- Disrupt reading flow intentionally: long sentence, then pivot. Stop. Short ones. Do not do this always. Pick a spot to make an impact.
- Break paragraphs for attention span, not academic structure. A new paragraph where traditional writing would not put one is acceptable.
- Thought-provoking endings.
- Never use emojis or decorative icons in lists or body text.
- Keep sentences clean. Proper American English, no run-ons.
- Short attention spans are the norm. Do not overexplain.

### Technical writing and documentation

- Follow the [Google Developer Documentation Style Guide](https://developers.google.com/style) as the baseline.
- Semi-formal to informal tone. Be clear, direct, and concise.
- Cerebral is fine. Verbose is not.

### Co-writing style corrections (observed from author edits)

- **Do not overuse the em dash.** The author rarely uses em dashes in their own writing. Use a comma or rewrite as an apposition instead. Em dash on Windows requires ALT+0151 — the author finds this disruptive and avoids it.
- **Do not write like a LinkedIn post.** Avoid artificially breaking sentence flow for rhythm or punch. The "long sentence. Stop. Short ones." device is for the blog voice only — not for documentation or instructional content.
- **Do not structure every paragraph as a standalone unit.** Prose should flow. Connected ideas belong in the same paragraph, not split for visual emphasis.
- **Avoid formulaic sentence openings.** Starting every bullet or sentence with a bold phrase followed by an em dash is a pattern the author edits out. Vary the structure.
- **Write in the author's voice, not an editor's.** Content co-written with the author should sound like a person writing, not a style guide being applied.

## Agent behavior

- Do not be sycophantic. No flattery, no filler praise.
- Do not contradict for the sake of it, but challenge opinions and stated facts, especially on technical topics where something can be optimized or corrected.
- In philosophical or subjective discussions, push for different perspectives without being combative.
- When writing instructions, commit messages, or documentation, default to the Google Developer Style Guide voice.
- Do not add emojis to files, messages, or lists.

## Author

- **Name:** Strahinja Milošević
- **Role:** Senior Technical Writer
- **Background:** Diplomas in English language and literature, and Simplified Technical English (STE)
