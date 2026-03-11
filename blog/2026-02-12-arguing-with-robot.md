---
slug: argue-with-robot
title: Arguing with a robot
authors: [strahinja]
tags: [technical writing, AI, tools]
description: Using AI as a conversational sparring partner.
---

I tried this *insert product* so you don't have to.

There's a myriad of AI tool reviews out there. Kind of reminds me of the whole microservices hype. I swear, for about two years this buzzword was in every single meeting I attended. Now it's "AI-powered" everything. AI-powered toaster. AI-powered calendar. AI-powered AI.

<!-- truncate -->

I just use them. I switch between the tools and models. Find what works, get the job done, and move on. A lot of trial and error. No hype. No manifestos. Just a tech writer trying to ship docs faster without losing his mind.

If you haven't already, check out [Use cheap tools until they break](/blog/cheap-tools)—it sets up the mindset for everything below. The short version: master the craft first, then upgrade your tools. AI is the latest upgrade.

## Enter the robots

LLMs are the newest tools in the belt. And for now, they're cheap. Accessible. Everywhere.

The mistake I see people make is treating them like either a silver bullet or a threat. They're neither. They're tools. And like all tools, they're only as good as the person using them.

Here's how I actually use them.

### The second opinion

I give different models or agents different personas and ask them to critique each other. Not because I think AI knows better than me—but because it's faster than waiting three days for a peer review just to catch a typo and a broken link.

I'll draft something in Claude, then ask Gemini to poke holes in it. Or I'll set up two agents—one playing the role of a skeptical developer, the other a first-time user. Then have them both review the same doc. You'd be surprised what falls out.

This isn't about replacing human review. It's about showing up to the human review with fewer obvious issues.

### The pipeline nobody built

Here's a real example. I inherited a codebase where the developers never wrote explicit API documentation. No OpenAPI spec. Nothing. The endpoints existed in the code, scattered across files, undocumented.

So I set up multiple LLM agents with different models and instructions. I asked them to sanalyze the code, generate OpenAPI specs, and then argue with each other about whether the specs were accurate. One agent generates. Another validates. A third tries to break it.

The result wasn't perfect. But it was a good starting point that would have taken weeks to produce manually. And we ended up with a single source of truth.

### Instruction files and prompt libraries

Keep markdown files with instructions per use case. I used to use different ones for different tasks—reviewing for plain language, checking structural consistency, generating code samples, and so on. The idea was to reause a good prompt doc across projects and make it a tool in itself. Sharpen it over time.

Take this one with a grain of salt. The way and tempo that the LLMs evolve—we get a new tool every couple of months. I strongly suggest to check out [Claude skills](https://code.claude.com/docs/en/skills) and [MCPs](https://code.claude.com/docs/en/mcp) depending on your use case.

## Modes of working with AI

Not all AI-augmented work looks the same. Here're some examples of how I perceive distinct modes at the moment.

### Chat—the rubber duck

Open a browser tab. Talk to it like a colleague. Ask it to explain a codebase you just inherited. Bounce an outline off it. Get a second opinion on your content architecture before you spend two days building it.

Good for: exploration, understanding, brainstorming.

Tools: Claude, ChatGPT, Gemini—browser-based, conversational.

### Inline assist—the co-pilot

This is your IDE whispering suggestions as you type. Tab completion, reformatting, fixing broken links, repetitive edits across 40 files. It's not creative work—it's grunt work you shouldn't be doing manually.

Good for: repetitive tasks, pattern-based edits, formatting.

Tools: GitHub Copilot, Cursor, Claude in VS Code, basically any IDE-integrated assistant.

### Drafting—the ghostwriter

You provide the context, the constraints, the style guide. The AI generates a first draft and you refine it. This works surprisingly well for things like release notes, API reference descriptions, and structured content where the format is predictable. Do not let it run amok though. They have a tendency to overexplain and contextualize where not additional info is needed. Always test, of course.

Good for: first drafts, boilerplate, structured content.

One rule: if the output is good, use it. Don't feel obligated to rewrite a perfectly fine doc just because AI wrote it. If you're really ashamed—acknowledge it at the bottom. :)

### Automation—the assembly line

This is where it gets interesting. CI/CD integration, style linting, automated spec generation. Agents that run in the background and flag issues before you even open the file. This mode requires setup, but once it's running, it scales in a way that manual work never will.

Cursor can already help you create whole elaborate refactoring plans. It helps you design multiple phases with sub-steps, researches solutions so you don't leave the IDE, present options, coaches you where to make the decisions, and the automatically adjusts the doc for you to review the plan. You can then greenlight it, press submit, and go to lunch.

Good for: refactors, validation, spec generation, continuous quality checks.

Tools: Claude Code, OpenHands, custom scripts, MCP servers, whatever gets the job done.

## Pick the model, not the brand

By the time you read this, the some LLM brand must have already shifted the market. Frontier models converge fast. What's true today—that one handles code better, another has a bigger context window, a third follows instructions more precisely—will be different in six months.

What tends to stay consistent are the criteria worth evaluating:

- **Reliability for your specific task**—not just "can it do this" but "does it do this consistently, without drifting or hallucinating on step three".
- **Integration**—where does it live? In your browser, your IDE, your CI pipeline? The best model is the one that fits into your workflow without friction.
- **Speed and cost**—a slower, smarter model for drafting; a faster, cheaper one for inline suggestions. You don't need the same hammer for every nail.
- **Context limits**—still relevant when feeding it large codebases or long specs. Less of a differentiator than it used to be, but worth checking.

This changes every few months. Don't marry a model. Date all of them.

## The close

None of this matters if you don't have the fundamentals. AI won't save you if you don't understand your users, can't structure content, or don't know what simplified technical English is.

The tools amplify what you already have. If that is solid, AI makes you faster, broader, and harder to replace.

If what you have is vibes and an LLM subscription, well, the cheap tools are going to break real fast (read: tokens).

Use whatever is at your disposal to get the product out. Review. Iterate. Automate. Then help someone else do the same.

That's the job.

## See also

- [Use cheap tools until they break](/blog/cheap-tools)
- [Redefining technical writing](/blog/redefining-technical-writing)
- [Tech writing career ladder](/blog/career)
- [Emotional durability in leadership](/blog/emotional-durability)
