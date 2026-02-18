---
slug: argue-with-robot
title: Arguing with a robot
authors: [strahinja]
tags: [technical writing, AI, tools]
---

I tried this *insert product* so you don't have to.

There's a myriad of AI tool reviews out there. Kind of reminds me of the whole microservices hype. I swear, for about two years this buzzword was in every single meeting I attended. Now it's "AI-powered" everything. AI-powered toaster. AI-powered calendar. AI-powered AI.

So what's the point in writing this?

<!-- truncate -->

I just use them. I switch between the tools and models. Find what works, get the job done, and move on. A lot of trial and error. No hype. No manifestos. Just a tech writer trying to ship docs faster without losing his mind.

If you haven't already, check out [Use cheap tools until they break](/blog/cheap-tools) — it sets up the mindset for everything below. The short version: master the craft first, then upgrade your tools. AI is the latest upgrade.

## Enter the robots

LLMs are the newest tools in the belt. And for now, they're cheap. Accessible. Everywhere.

The mistake I see people make is treating them like either a silver bullet or a threat. They're neither. They're tools. And like all tools, they're only as good as the person using them.

Here's how I actually use them.

### The second opinion

I give different models or agents different personas and ask them to critique each other. Not because I think AI knows better than me — but because it's faster than waiting three days for a peer review just to catch a typo and a broken link.

I'll draft something in Claude, then ask Gemini to poke holes in it. Or I'll set up two agents — one playing the role of a skeptical developer, the other a first-time user — and have them both review the same doc. You'd be surprised what falls out.

This isn't about replacing human review. It's about showing up to the human review with fewer obvious issues.

### The pipeline nobody built

Here's a real example. I inherited a codebase where the developers never wrote explicit API documentation. No OpenAPI spec. Nothing. The endpoints existed in the code, scattered across files, undocumented.

So I set up multiple LLM agents — different models, different instructions — and had them analyze the code, generate OpenAPI specs, and then argue with each other about whether the specs were accurate. One agent generates. Another validates. A third tries to break it.

The result isn't perfect. But it's a starting point that would have taken weeks to produce manually. And now there's a single source of truth where there was none.

### Instruction files and prompt libraries

Keep markdown files with instructions per use case. I have different ones for different tasks — reviewing for plain language, checking structural consistency, generating code samples, and so on. When you reuse the same prompt across projects, it becomes a tool in itself. Sharpen it over time.

## Modes of working with AI

Not all AI-augmented work looks the same. The way I see it, there are a few distinct modes, and knowing when to use which one matters more than which model you pick.

### Chat — the rubber duck

Open a browser tab. Talk to it like a colleague. Ask it to explain a codebase you just inherited. Bounce an outline off it. Get a second opinion on your content architecture before you spend two days building it.

Best for: exploration, understanding, brainstorming.

Tools: Claude, ChatGPT, Gemini — browser-based, conversational.

### Inline assist — the co-pilot

This is your IDE whispering suggestions as you type. Tab completion, reformatting, fixing broken links, repetitive edits across 40 files. It's not creative work — it's grunt work you shouldn't be doing manually.

Best for: repetitive tasks, pattern-based edits, formatting.

Tools: GitHub Copilot, Cursor, Cody, any IDE-integrated assistant.

### Drafting — the ghostwriter

You provide the context, the constraints, the style guide. The AI generates a first draft. You refine. This works surprisingly well for things like release notes, API reference descriptions, and structured content where the format is predictable.

Best for: first drafts, boilerplate, structured content.

One rule: if the output is good, use it. Don't feel obligated to rewrite a perfectly fine doc just because AI wrote it.

### Automation — the assembly line

This is where it gets interesting. CI/CD integration. Style linting. Automated spec generation. Agents that run in the background and flag issues before you even open the file. This mode requires setup, but once it's running, it scales in a way that manual work never will.

Best for: validation, spec generation, continuous quality checks.

Tools: Claude Code, OpenHands, custom scripts, MCP servers, whatever gets the job done.

## Pick the model, not the brand

Different models are better at different things. As of right now, here's how I think about it:

- **Claude** — strong at long-form writing, structured content, and following detailed instructions. My go-to for doc work.
- **GPT** — solid generalist. Good at code generation and quick answers. The ecosystem is massive.
- **Gemini** — great context window. Useful when you need to feed it an entire codebase or a 200-page spec and ask questions.

This changes every few months. Don't marry a model. Date all of them.

## The actual point

None of this matters if you don't have the fundamentals. AI won't save you if you don't understand your users, can't structure content, or don't know what simplified technical English is.

The tools amplify what you already have. If what you have is solid craft — structured authoring, user-centered thinking, domain knowledge, a willingness to figure it out — then AI makes you faster, broader, and harder to replace.

If what you have is vibes and a ChatGPT subscription, well. The cheap tool is going to break real fast.

Use whatever is at your disposal to get the product out. Then get better. Then get faster. Then help someone else do the same.

That's the job.
