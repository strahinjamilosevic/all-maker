---
title: Docs project management 🚧
description: A framework for embedding documentation into planning, development, UAT, and release processes.
---

## Core principles

1. Include the docs team in the planning or design.
2. Have transparent timelines.
3. Keep the source of truth in the same place (e.g. your project management tool or knowledge base PRD/ADR).
4. Use a standardized release ticket template.
   > You can use workflows in the messaging platforms like Slack to create a ticket in your project management tool.
5. Link all relevant product and dev resources in the release ticket.
6. Use the docs as the source of truth for the users (e.g. the Releases section).
7. Do not send comms to the users without the docs team.
8. Do not keep product decisions in multiple places (knowledge base, messaging platform, document suite, etc.)

## Documentation collaboration framework

This framework defines how software documentation must be embedded into planning, development, user acceptance testing, and release processes so that customer-facing documentation is always ready, accurate, and aligned with communication. With few technical writers supporting multiple teams, documentation must be treated as a must-have release component, tracked in the project management tool, and used as the single source of truth for external users. No user communication or go-live should happen unless documentation status and visibility are aligned with the release stage.

## Governance principles

### Documentation must be included in planning

Documentation impact must be assessed before development starts. PRDs remain high-level design documents and should not contain evolving end-product API specifications. Detailed API behavior must be captured in ADRs and lower-level technical documentation. These documents must describe intended behavior, but they must not serve as informal work-in-progress substitutes for customer-facing documentation. A documentation ticket in your project management tool must be created when the feature scope is defined.

### Your project management tool is the single source of tracking

All documentation work must be tracked in your project management tool. Do not:

- Keep release-critical information only in your messaging platform, knowledge base, document suite, or other tools.
- Raise documentation requests via direct messages.

Use:

- The Docs ticket template in your project management tool.
- The workflow in the #ask-docs channel, which feeds into the ticket funnel.

If a request is not in your project management tool, it is not scheduled or prioritized.

### Use the standardized release ticket template

Every user-facing feature must have a release ticket in your project management tool. The release ticket must:

- Link the PRD.
- Link relevant ADRs.
- Link development and QA tickets.
- Link performance and authorization work.
- Link the documentation ticket.
- Include UAT and production timelines.
- Include documentation status.

No external communication or go-live may happen without a completed and linked release ticket.

### Use documentation as the source of truth for users

For the users, documentation and release notes are the source of truth. This includes:

- Sneak peek pages.
- UAT documentation.
- Pilot-only documentation.
- Public production documentation.

Hidden or partially documented pilot features must clearly state:

- Who can access them.
- Whether they are in UAT or production.
- Whether behavior may change.

Users must never have to rely on direct messages, private emails, or verbal updates to understand feature behavior.

### Do not send external communications without the documentation team

No communication to the users may be sent without documentation being:

- Drafted.
- Reviewed.
- Linked in your project management tool.
- Aligned with the release stage.

Documentation must be ready before communication, not after.

## Lifecycle framework with documentation gates

### Phase 1: Planning and design

This includes PRD and ADR creation. PRDs must describe:

- The problem.
- The intended solution.
- High-level API impact.

ADRs and lower-level technical documentation must describe:

- Endpoint behavior.
- Schemas.
- Authorization.
- Error handling.
- Rate limits.
- Versioning implications.

At this stage:

- A documentation ticket must be created using the existing Docs ticket template in your project management tool.
- The documentation ticket must be linked to the release ticket.
- The documentation impact must be clearly defined.

Documentation status: Proposal.
The feature must not enter development without a documentation ticket.

### Phase 2: Implementation and development testing

When the feature reaches internal feature completeness:

- A technical walkthrough with the writer must be scheduled.
- Finalized request and response examples must be shared.
- Error codes and edge cases must be clarified.
- Authorization and rate limit behavior must be confirmed.
- Performance expectations must be documented.

Documentation status: In progress.
Timelines in the release ticket must remain transparent and updated.

### Phase 3: UAT communication to selected users

Before sending UAT communication:

- Draft documentation must exist.
- The documentation must clearly indicate UAT or limited availability.
- Navigation must not mislead other users.
- The documentation link must be included in the release ticket.
- The documentation team must review the communication.

Documentation status: UAT ready.
UAT communication must not be sent without documentation.

### Phase 4: UAT feedback and iteration

During UAT:

- Documentation must be updated based on feedback.
- Incorrect examples or unclear behavior must be fixed.
- Edge cases identified during testing must be documented.

UAT feedback must be reflected in documentation before the feature is considered production ready.

### Phase 5: Production readiness work

Production readiness includes:

- Finalizing authorization methods.
- Improving performance.
- Fixing issues.
- Increasing test coverage.
- Validating latency.

Any change affecting user-facing API behavior must trigger documentation updates.

Documentation status: Production ready.
Documentation must reflect final production behavior before selected production go-live.

### Phase 6: Selected production go-live

Before selected users are enabled in production:

- Documentation must reflect production behavior.
- UAT disclaimers must be removed or updated.
- Availability scope must be clearly stated.

Communication to selected users must not happen unless documentation status is production ready.

### Phase 7: Public release

Before public communication:

- Documentation must be fully published.
- Release notes must be finalized.
- All links must be correct.
- No conflicting UAT or pilot language may remain.

Documentation status: Published.
Public announcements must not be sent without published documentation and release notes.

## Documentation status model

The following status model is proposed for documentation tracking in your project management tool:

- Proposal
- In progress
- UAT ready
- Production ready
- Published

These statuses provide transparency across teams and ensure documentation readiness is visible before communication and release.

## Expected behavioral changes

Teams must:

- Include documentation impact in planning.
- Open documentation tickets early.
- Keep all relevant information in your project management tool.
- Link PRDs, ADRs, dev tickets, and release tickets.
- Treat documentation as a must-have release component.
- Avoid informal requests via direct messages.

The documentation team must:

- Provide clarity and consistency.
- Review external communications.
- Ensure users can rely on documentation as the single source of truth.

If documentation does not clearly answer what exists, who can use it, when it is available, and whether it is stable, the feature is not ready for external communication.

## Glossary

- **ADR** — Architecture Decision Record. A document that captures a significant architectural decision, its context, and its consequences.
- **PRD** — Product Requirements Document. A high-level document describing the problem, intended solution, and scope of a feature.
- **QA** — Quality Assurance. The process of testing a feature to verify it meets requirements before release.
- **UAT** — User Acceptance Testing. A testing phase where selected users validate a feature in a controlled environment before public release.
