# Strahinja the all maker

Hi, I'm Stra and this is my little personal chunk of internet space. During the day, I work as a technical writer documenting software solutions mostly, but not only, in the fintech domain.

The rest of the time, I tend to be a dude of many interests, if not talents :).

I like tinkering with manual crafts like metal, wood, stone, and leatherworking. Music is my life, so always in the background, whether the player is on or not. 
 
On this website, you can expect to read my rants about technical writing, leatherwork, metalwork, probably cooking, music, and other shenanigans. We'll see.

## Stack

- [Docusaurus 3](https://docusaurus.io/) (TypeScript, React 19)
- Hosted on [GitHub Pages](https://pages.github.com/) — deployed to the `gh-pages` branch on every push to `master` using [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)
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

## PR preview

A GitHub Actions workflow builds and deploys a preview of the site for any pull request labeled `pr-preview`. Previews are hosted on GitHub Pages at:

```
https://strahinjamilosevic.github.io/all-maker/pr-preview/pr-{number}/
```

Production hosting is on Walrus, not GitHub Pages. GitHub Pages is used exclusively for PR previews.

### How to use

1. Open a pull request.
2. Add the `pr-preview` label.
3. The workflow builds the site and deploys the preview. A comment with the preview URL is posted on the PR.
4. Push additional commits to the PR — the preview updates automatically.
5. Close or merge the PR — the preview is deleted from GitHub Pages.

### Triggers

| Event | Condition | Action |
|---|---|---|
| `labeled` | Label is `pr-preview` | Build and deploy preview |
| `synchronize` | PR has `pr-preview` label | Rebuild and update preview |
| `closed` | PR has `pr-preview` label | Delete preview from `gh-pages` |

A concurrency group per PR prevents overlapping deploys.

### Resources

- [rossjrw/pr-preview-action](https://github.com/rossjrw/pr-preview-action) — deploys the built site to a subdirectory on the `gh-pages` branch and posts a sticky comment with the preview URL.
- [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) — used internally by the pr-preview-action for the deploy step.
- [Docusaurus `baseUrl`](https://docusaurus.io/docs/api/docusaurus-config#baseUrl) — set via the `BASE_URL` environment variable so asset paths resolve correctly in the preview subdirectory.

## License

Content and code are copyright Strahinja Milošević. All rights reserved.
