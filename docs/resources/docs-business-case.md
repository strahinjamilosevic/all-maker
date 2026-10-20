---
sidebar_position: 4
title: Why build better docs
description: A practical framework for convincing decision makers to invest in documentation, with examples of good docs, a simple way to prioritize, ways to measure results, and a proposal template.
context:
  content_type: guide
  domain: [docs_strategy]
  status: published
  last_reviewed: 2026-10-19
  skills: [docs_as_product, content_strategy, search_and_analytics]
  tools: [mintlify, algolia, vale, github_actions, mcp]
---

Documentation competes with features, releases, and reliability work for the same hours. In my experience it usually loses that fight. A feature has a launch date and a demo. Missing docs leak cost slowly—support tickets, slow onboarding, abandoned integrations, and the same question in Slack for the fifth time this month.

Decision makers fund what they can see. So the job is to make that cost visible, show what good looks like, and ask for something specific.

This is the framework I use. Take what fits your organization and skip the rest.

## Know your audience

The same argument lands differently depending on who's in the room. Lead with what they already worry about.

| Audience | What they care about | Lead with |
|---|---|---|
| Product and business leaders | Adoption, revenue, enterprise deals | How long it takes a new customer to integrate, and the deals that stall in technical evaluation |
| Engineering leaders | Focus, onboarding, incidents | Hours senior engineers lose answering the same questions, and incidents that dragged on for lack of a runbook |
| Support leaders | Ticket volume and resolution time | The top ticket topics that a page could answer |

## Show what good looks like

The most effective thing I've done in this conversation is put our docs next to a competitor's. Pick the one your leadership already respects—the market leader in your industry, or the company everyone in the room quotes. Then walk through the following points with real pages open.

### Lower adoption barrier

Developers decide fast whether an integration is worth their time. Clear structure, examples in the languages they write, and an explanation of authentication, rate limits, and errors that a newcomer to your industry can follow—that's the onboarding ramp. [Stripe's API reference](https://docs.stripe.com/api) is the usual benchmark for a reason.

### Ecosystem growth

When it's easy to build on your platform, partners and startups build on it. Their integrations bring you users, and once someone has integrated, switching costs keep them with you. A lot of "default" integrations in any industry got there by being the easiest one to build.

### Trust

Poor docs make people suspect deeper problems—an unstable API, no support, surprise changes. A changelog, a versioning policy, and deprecation timelines tell integrators the opposite. See how [Stripe handles API upgrades](https://docs.stripe.com/upgrades) or how [Anthropic publishes model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations).

### Enterprise adoption

Larger customers evaluate before they sign. Their engineering, security, and compliance teams need to estimate effort and risk. If they can answer their questions from your docs, the proof of concept starts sooner. If they can't, the deal waits on your engineers' calendars.

### Differentiation

Products in the same market often look alike on a feature list. Docs are one of the few things an evaluator can judge completely before buying, and they do compare.

## Make the internal cost visible

Communication paths grow much faster than headcount. With `n` people there are `n(n-1)/2` possible pairs who might need to talk. Ten people make 45 pairs. A few hundred engineers make tens of thousands.

Without docs, a growing engineering organization pays for this every day:

- New engineers take longer to become productive and interrupt senior colleagues to get there.
- The same knowledge silos form in every team.
- Time disappears into Slack threads and meetings that a page would have replaced.
- Systems become a risk when the one person who understands them goes on holiday.

## Scale without hiring a writer per team

No writing team can document everything engineering produces. Enable others to write. Be a force multiplier, not a bottleneck.

| Instead of | Do this | See it done well |
|---|---|---|
| Writing all the API docs yourself | Create a template and a checklist, and review what teams write. | [Kubernetes page content types](https://kubernetes.io/docs/contribute/style/page-content-types/), [GitLab topic types](https://docs.gitlab.com/development/documentation/topic_types/) |
| Settling style debates in every review | Adopt a public style guide and document only your exceptions. | [Google developer style guide](https://developers.google.com/style), [CockroachDB style guide](https://github.com/cockroachdb/docs/blob/main/StyleGuide.md), [Docker style guide](https://github.com/docker/docs/blob/main/STYLE.md) |
| Fixing every outdated page | Give every page an owner and let teams fix their own. | [GitHub code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) |
| Onboarding every new engineer personally | Build a self-service onboarding guide. | [GitLab onboarding handbook](https://handbook.gitlab.com/handbook/people-group/general-onboarding/) |
| Chasing teams for docs after a release | Make docs part of the definition of done. | [GitLab documentation workflow](https://docs.gitlab.com/development/documentation/workflow/) |
| Maintaining a separate docs platform nobody visits | Keep docs next to the code and review them in the same pull requests. | [Docker docs contribution guide](https://github.com/docker/docs/blob/main/CONTRIBUTING.md), [Mintlify quickstart](https://www.mintlify.com/docs/quickstart) |

### Add automation on top

Most of the thing above can nowadays be automated with LLMs. Templates and style guides turn into instructions an agent can follow, and the writer moves closer to the role of editor and final reviewer.

| Task | Automate it with | Tools |
|---|---|---|
| Enforcing the style guide | A linter that comments on every pull request. | [Vale](https://vale.sh) with [vale-action](https://github.com/vale-cli/vale-action) |
| Turning templates into first drafts | Templates and the style guide packaged as agent skills. | [Claude Code skills](https://code.claude.com/docs/en/skills) |
| Keeping docs in step with code | A pipeline action that drafts a docs pull request when the code changes. | [GitHub Actions](https://docs.github.com/en/actions), [Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions) |
| Giving agents the right context | MCP servers that connect agents to tickets, specs, and existing docs. | [Model Context Protocol](https://modelcontextprotocol.io), [Mintlify MCP server](https://www.mintlify.com/docs/ai/model-context-protocol) |
| Keeping the internal knowledge base current | Tools that update docs from code and team conversations. | [Falconer](https://falconer.com) |

Keep a human as the final reviewer. Anthropic runs its docs with a handful of technical writers who review, fix, and merge AI-generated pull requests. The automation brings the volume. The writers bring accuracy and judgment.

When you pitch this, present it as a way for the same writers to cover more ground. Somebody still has to own the result.

What you can ask leadership for to make this stick:

- Dedicated time for docs contributions in planning.
- A documentation champion in each team, with a monthly check-in.
- Docs recognized in performance reviews and career ladders, the same way code is.
- Budget for AI tooling and the time to set up the pipeline.

For building docs into planning, development, testing, and release, see [Docs project management](/docs/resources/docs-pm-framework).

## Decide what to document first

You can't do everything at once, and the loudest requests aren't always the most important. For each candidate topic, ask three questions:

1. **Who is blocked without it?** Something people look up daily beats something they need once a year.
2. **What breaks if someone gets it wrong?** An outage or a lost customer beats a minor inconvenience.
3. **How many people know how it works?** If the answer is one, that person's holiday is your deadline.

Two or three yeses—document it now. One—plan it. None—backlog.

If the topic changes every week, generate the reference from the source, such as an OpenAPI description, and write by hand only the concepts that stay stable.

### Where this breaks down

This works well for a writing team with a long backlog. Everyone ranks requests the same way and the important stuff gets done.

What it doesn't account for is people. Some requests always score low, so they sit at the bottom of the backlog for months. The person who asked remembers. Sometimes that person is exactly the ally you'll need on the next big project.

I've learned to occasionally do the small, low-scoring thing quickly. Being the person who gets it done pays off later—people come back to you first, and some start writing docs themselves. Not everyone is approachable or willing to listen, so when someone is, it's worth the investment. I wrote more about this in [Be responsive, but manage expectations](/blog/cheat-sheets#be-responsive-but-manage-expectations).

## Measure the return

Numbers make a proposal convincing and a program easier to defend. Record a baseline before you change anything, then measure again after a quarter. Start with two or three metrics you can collect today.

| Metric | How to measure it | Example |
|---|---|---|
| Support tickets per topic | Tag tickets by topic in your support tool, such as Zendesk, Intercom, or Jira Service Management. | Authentication tickets drop after the auth guide ships. |
| Time to first successful API call | Use gateway logs or API analytics like [Moesif](https://docs.moesif.com/) to measure from key creation to the first `2xx` response. | The median goes from days to under an hour after a quickstart. |
| Searches with no results | Check your docs search analytics, such as [Algolia](https://www.algolia.com/doc/guides/search-analytics/overview/) or [Mintlify](https://www.mintlify.com/docs/optimize/analytics). | "webhook retries" is the top failed search, so it becomes the next page. |
| Page feedback | Add a rating widget, such as [Mintlify feedback](https://www.mintlify.com/docs/optimize/feedback), or track events in [PostHog](https://posthog.com/docs/product-analytics). | The rate limits page gets mostly thumbs down until you add realistic scenarios. |
| Onboarding time | Measure from a new engineer's start date to their first merged pull request in GitHub or GitLab. | New hires on the team with an onboarding guide merge considerably sooner. |
| Repeated questions | Sample your help channels in Slack or Teams for the same question asked again. | The same deployment question shows up a dozen times a quarter. |
| Incidents caused by missing docs | Add a documentation field to your [postmortem template](https://www.atlassian.com/incident-management/postmortem/templates). | Several incidents last quarter had no runbook. |

Pair the numbers with stories. A partner who integrated in a day instead of a week. An on-call engineer who fixed something at 3 a.m. from a runbook without waking anyone. Numbers convince analysts. Stories convince everyone else.
## Audit your API docs

To find the biggest gaps in public API docs, go through the following list. Each item links to an example worth copying.

1. A quickstart gets a new user from zero to a first successful request in minutes. See the [GitHub REST API quickstart](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api) or [Anthropic's get started guide](https://platform.claude.com/docs/en/get-started).
2. A test environment mirrors production authentication and schemas, with documented URLs, limits, and test data. See [Stripe testing](https://docs.stripe.com/testing).
3. Every endpoint has request and response examples, including authentication, in the languages your users write. See the [Stripe API reference](https://docs.stripe.com/api).
4. A guide explains pagination, sorting guarantees, and how to retrieve large result sets. See [Stripe pagination](https://docs.stripe.com/api/pagination).
5. Every error code has a cause and a next step. See [Stripe error codes](https://docs.stripe.com/error-codes) or [Anthropic API errors](https://platform.claude.com/docs/en/api/errors).
6. Safe retries are documented, including idempotency. See [Stripe idempotent requests](https://docs.stripe.com/api/idempotent_requests).
7. Rate limits come with realistic scenarios and how to back off. See [GitHub rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) or [Anthropic rate limits](https://platform.claude.com/docs/en/api/rate-limits).
8. If you offer more than one way to connect, such as REST and WebSocket, a page compares use cases, latency, and trade-offs.
9. Operational information is public—environments, maintenance windows, and a status page. See [GitHub Status](https://www.githubstatus.com/).
10. A changelog, a versioning policy, and a deprecation policy with timelines exist, and breaking changes are flagged on the affected pages. See [Stripe versioning](https://docs.stripe.com/api/versioning) or [Docker deprecated features](https://docs.docker.com/engine/deprecated/).
11. If your users are regulated, everything they need for compliance and due diligence is in one place.

For the design and documentation conventions behind most of these items, see the [API governance framework](/docs/resources/api-governance).

## Proposal template

You can copy this outline into a document and fill it in for your organization. Keep it short. One or two pages read better than ten. Replace the comments with your own content.

```markdown title="documentation-proposal.md"
# Proposal: invest in [area] documentation

**Author:** [name]
**Date:** [date]
**Decision needed from:** [name, role]

## Summary

<!-- Two or three sentences. What you want, what it costs, and what it returns.
Example: "Two engineering days per team per quarter and one writer to
maintain templates. In return, we expect integration time and auth-related
tickets to drop by a third within six months." -->

## The problem

<!-- What is going wrong today. Use evidence: ticket counts, onboarding time,
repeated questions, incidents, quotes from customers or colleagues. -->

- 
- 
- 

## What it costs us

<!-- Time, money, or risk. Estimate if you can't measure.
Example: "Senior engineers spend about four hours a week each answering
integration questions in Slack." -->

## How others do it

<!-- One or two competitors or respected companies, with links to their docs
and what they do that we don't. -->

## The proposal

<!-- What you will do, who does it, and how it scales without hiring a writer
per team. For example: templates, documentation champions, docs in the
definition of done. -->

## First priorities

| Topic | Who is blocked without it | What breaks if it's wrong | People who know it |
|---|---|---|---|
|  |  |  |  |

## How we'll measure success

| Metric | Baseline | Target | Tool | Review date |
|---|---|---|---|---|
|  |  |  |  |  |

## What we need

- **Time:** 
- **People:** 
- **Tools and budget:** 

## The cost of doing nothing

<!-- What happens in six to twelve months if nothing changes. Be concrete. -->
```

## See also

- [Docs project management](/docs/resources/docs-pm-framework), for building documentation into the development process.
- [API governance framework](/docs/resources/api-governance), for designing and documenting consistent APIs.
- [Forget cheat sheets, work with people](/blog/cheat-sheets), on building the relationships that get docs funded.
- [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law), on why adding people to a project increases communication overhead.
