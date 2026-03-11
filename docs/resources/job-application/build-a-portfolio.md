---
sidebar_position: 3
title: Build a portfolio
description: How to create and host a portfolio site for free.
---

A portfolio does what a resume cannot. It shows your work.

You do not need a polished website on day one. But it's good to have something to link to. What matters is that the work is visible and that it represents you well.

## What to include

### Project case studies

The most impactful thing you can put in a portfolio is a project case study—a structured account of something meaningful you worked on. Use this as the place for projects that are too large or complex to summarize in a single resume bullet, but that tell a story worth telling in full.

This does not mean skipping them on the resume. It means giving them the space they deserve.

Structure each case study using four sections:

- **Why**—What problem existed and why it mattered. What were the business or user consequences of leaving it unsolved?
- **What**—The situation as you found it. The constraints, the context, the starting point.
- **How**—What you did. Be specific about your process, the decisions you made, who you worked with, and the tools or methods involved.
- **Result**—What changed. What improved, what was built, what risk was reduced. Connect it to real impact where you can.

Here is an example from my own projects:

> **Enable a non-REST platform to scale through modern API tooling**
>
> *Why*—The Terminal API is foundational to in-person payments, but its legacy structure made it difficult to understand, maintain, and integrate with modern developer tooling. Improving its accessibility was critical for long-term platform scalability and developer trust.
>
> *What*—The Terminal API is based on the nexo retailer protocol, not REST. For years, its only reference lived on a single page assembled from many HTML files, making it hard to navigate and incompatible with our OpenAPI-based API Explorer.
>
> *How*—I mapped the full API structure by reconciling the official nexo PDF specification, existing documentation, and the OpenAPI requirements of our API Explorer tooling. I coordinated work between the team owning the Terminal API implementation in C and the platform team responsible for API reference pipelines. We created a Python script to generate OpenAPI specs our tooling could consume and introduced a new page type in the API Explorer to present the API structure by request type.
>
> *Result*—The migration brought a critical legacy API into the standard developer experience without altering its underlying protocol. It reduced long-term maintenance risk, improved discoverability, and increased confidence in a globally used payments API.

Link the actual output wherever you can—the page, the docs, the reference, the tool. The written account matters, but the artifact is what makes it real.

### Your own voice

A portfolio is also a place to publish your thinking. Share your opinions on the craft, your methodologies, how you approach problems you have seen repeatedly. Write the post you wish existed when you were starting out.

Once you are satisfied with something, cross-post it. LinkedIn, X, Mastodon, Bluesky—wherever you have an audience of professionals. The goal is not to go viral. It is to be findable by the right people and to demonstrate that you have a perspective worth hiring.

### Things you have built

Link to anything you have made—an app, a tool, generated art, a simple retro browser game, a GitHub account with 78 repos of you testing things. It does not need to be polished. It needs to be real. Curiosity and output are rare and noticed.

If you cannot share work due to NDAs, write something new. Create a sample doc for an open source project or a public API. The work does not have to be commissioned to demonstrate skill.

## How to build one

In 2021 I built my first portfolio using [HTML5 UP](https://html5up.net/) templates and photos from [Unsplash](https://unsplash.com/) after watching a YouTube tutorial by Joshua Fluke: [How to Create a Portfolio Website](https://www.youtube.com/watch?v=u-RLu_8kwA0). It took an afternoon and cost nothing. It's [still up](https://strahinjamilosevic.github.io/). 

The general path for a free static portfolio hosted on GitHub Pages:

1. **Create a GitHub account** at [github.com](https://github.com) if you do not have one.
2. **Create a repository** named exactly `yourusername.github.io`.
3. **Pick a template** from [HTML5 UP](https://html5up.net/)—clean, free, and professional. Download and customize it.
4. **Add your content**—your case studies, your writing samples, your contact info.
5. **Push to GitHub**. GitHub Pages will publish your site automatically.
6. **Visit `yourusername.github.io`**—it is live.

If you prefer not to work with code, there are many free alternatives work well for a portfolio or online resume. Here are some poeple use a lot:

- **[WordPress.com](https://beginnersbook.com/2013/10/create-a-free-website-on-wordpress/)**—Beginner-friendly, no code required. Good step-by-step guide at that link.
- **[Teal](https://www.tealhq.com/tools/resume-builder)**—Portfolio and resume builder aimed at job seekers. Guided and free to start.
- **[Medium](https://medium.com)**—If your portfolio is primarily writing, publishing on Medium gives you an instant audience and a clean reading experience without building anything.

## Building with an LLM

In 2026, building a basic portfolio site no longer requires watching tutorials or knowing how to code. You can describe what you want to an LLM and have a working site in an afternoon—no prior experience needed.

There are two paths depending on how hands-on you want to get.

### Path 1: In the browser, no installation required

This is the easiest starting point. Everything happens in your web browser. You do not need to install anything.

1. **Open [claude.ai](https://claude.ai) or [chatgpt.com](https://chatgpt.com)** and create a free account if you do not have one.
2. **Describe what you want.** Tell it something like: *"I want a simple one-page personal portfolio website. I need sections for About me, My projects, Writing samples, and Contact. I want it to look clean and professional. Please give me all the files I need."*
3. **It will give you code.** You will see blocks of text that look technical—that is HTML, CSS, and possibly some JavaScript. Do not worry about understanding it. Copy each block.
4. **Create your files.** On your computer, create a new folder called `my-portfolio`. Inside it, create a file called `index.html`. Open it with any text editor (Notepad on Windows, TextEdit on Mac) and paste the HTML code in. Do the same for any other files it gives you (it might give you a `style.css` file—save that in the same folder).
5. **Preview it.** Find the `index.html` file in your folder, right-click it, and choose "Open with" → your browser (Chrome, Firefox, Edge). Your site will open. It is not online yet—only you can see it—but you can check how it looks.
6. **Iterate in the chat.** Go back to the conversation and describe what you want to change. *"Make the background darker." "Move the contact section to the top." "Change the font."* Paste the updated code back into your file and refresh the browser. Repeat until you are happy.
7. **Publish it for free.** When you are ready to put it online, go back to the chat and ask: *"How do I publish this on GitHub Pages for free? Explain it step by step for someone who has never used GitHub before."* It will walk you through creating an account, uploading your files, and making the site live—all through the GitHub website, no technical knowledge required.

### Path 2: With an IDE (more powerful, still beginner-friendly)

An IDE is a program that helps you write and edit code. Think of it as a smarter version of Notepad. The most popular free one is called **Visual Studio Code** (VS Code).

This path takes a bit more setup but gives you a better experience and makes it easier to build on your site later.

1. **Install VS Code.** Go to [code.visualstudio.com](https://code.visualstudio.com) and download it. Install it like any other program.
2. **Install Claude Code or the Copilot extension.** Open VS Code. On the left side, click the icon that looks like four squares (Extensions). Search for "GitHub Copilot" or "Claude" and install one. These are AI assistants that live inside your editor and help you build things by talking to them in plain language.
3. **Open a new folder.** In VS Code, go to File → Open Folder → create a new empty folder called `my-portfolio` and open it.
4. **Talk to the AI.** Open the AI assistant panel (usually a chat icon on the left or a button that says "Ask"). Type the same kind of request as before: *"Build me a personal portfolio website with sections for About, Projects, Writing, and Contact. Keep it simple and professional."*
5. **It writes the files for you.** The AI will create and fill in the files directly in your folder. You do not need to copy and paste anything.
6. **Preview in the browser.** Right-click `index.html` in the file list on the left → "Open with Live Server" (you may need to install the Live Server extension the same way you installed the AI one). Your site opens in the browser and updates automatically as you make changes.
7. **Iterate by talking.** Keep asking the AI to make changes. Describe what you want in plain English. It will update the code directly.
8. **Publish.** When ready, ask the AI: *"How do I put this on GitHub Pages? I have never used GitHub or the command line before. Walk me through it."* It will guide you through every step.

## Keep it current

Update your portfolio when you finish a significant project—not when you start a job search. That way, when an opportunity appears, you are already ready.
