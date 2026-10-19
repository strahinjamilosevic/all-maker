---
sidebar_position: 2
title: API governance framework
description: A framework for designing and documenting APIs, with the decisions every team needs to make, examples, and templates to record them.
context:
  content_type: guide
  domain: [api_docs, content_governance]
  status: published
  last_reviewed: 2026-10-19
  skills: [api_governance, api_documentation, style_guides]
  tools: [openapi, asyncapi, redocly]
---

An API is a contract. Once someone builds an integration on top of it, every name, field, and error message becomes something they depend on. API governance is how a team keeps that contract predictable as more people and more endpoints get involved.

This framework covers the most important aspects of designing and documenting APIs. It does not tell you which conventions to pick. Instead, for each topic, it explains what you need to decide, the common options, and what to consider when you choose.

The framework uses RESTful HTTP APIs as its example. Many of the principles also apply to GraphQL, gRPC, WebSocket, and event-driven APIs, but their specific conventions are out of scope.

## How to use this framework

1. Read each section and discuss the decisions with the people who design, build, and document your APIs.
2. Make each decision based on three things: what your users expect from the APIs they already integrate with, the standards in your industry, and your own technology stack.
3. Record each decision in your [API style guide](#api-style-guide-template), together with the reason you made it.
4. Review every new endpoint against the style guide before you build it. See [Design review](#design-review).

The examples on this page use a fictional bookshop API. Their conventions, such as snake_case, are for illustration only.

## Core principles

These principles apply regardless of the conventions you choose:

- Be consistent. Once you make a decision, write it down and apply it everywhere. A consistent API with conventions you would not have picked yourself is easier to use than one that mixes the best conventions inconsistently.
- Design the API before you build it. Write the API description first, review it, and then implement it. Changing a design document is cheap. Changing a released API is expensive for you and for every user.
- Involve technical writers from the start. A writer who joins at the design stage spots unclear names, missing fields, and inconsistent behavior before they ship, and the docs are ready at release instead of weeks later. See [Docs project management](/docs/resources/docs-pm-framework) for a framework to build documentation into planning and development.
- Design for the people who use the API. Name things the way your users talk about them, not the way your internal systems or database tables are structured.
- Treat documentation as part of the API. An endpoint is not finished until every field, allowed value, default, and error is documented, with examples. Anything that you leave undocumented, users will guess, and some will guess wrong.
- Never break existing integrations without warning. Decide in advance what counts as a breaking change and how you introduce one. See [Versioning and change management](#versioning-and-change-management).

## Naming

Names are the first thing users see and the hardest thing to change later.

### Resources and paths

Model the API around resources, the things your users work with, not around actions. Use nouns in paths and let the HTTP method express the action.

| Avoid | Prefer |
|---|---|
| `POST /createOrder` | `POST /orders` |
| `GET /getBookById?id=42` | `GET /books/42` |
| `POST /orders/42/delete` | `DELETE /orders/42` |

Decide on the following:

- Plural or singular collection names. Most APIs use plural nouns for collections, such as `/books`, and an identifier for a single item, such as `/books/42`. Some words have no natural plural, such as `inventory` or `feedback`. Decide how to handle these and list the exceptions.
- Case for multi-word path segments. Common options are kebab-case (`/gift-cards`), snake_case (`/gift_cards`), and camelCase (`/giftCards`). Kebab-case is the most common in URLs.
- How deep to nest. Nesting shows relationships, such as `/orders/42/items`. Deep nesting, such as `/customers/7/orders/42/items/3/discounts`, makes paths long and fragile. Many teams limit nesting to one level and use filters for anything deeper, such as `/discounts?item_id=3`.
- What to do when an action doesn't fit a resource. Some operations, such as cancelling an order, are actions rather than updates. Common options are a sub-resource that describes the action, such as `POST /orders/42/cancel`, or a status change, such as `PATCH /orders/42` with `{"status": "cancelled"}`. Pick one approach.

### Fields and parameters

Field and parameter names appear in every request, response, and line of integration code.

Decide on the case convention. The common options are:

| Convention | Example | Often seen in |
|---|---|---|
| camelCase | `createdAt` | APIs used mainly from JavaScript and Java, and many enterprise APIs |
| snake_case | `created_at` | APIs used mainly from Python and Ruby, and many payments and fintech APIs |
| kebab-case | `created-at` | URL paths and HTTP headers, rarely JSON fields because many languages can't use it as a variable name |

Use the same convention for JSON fields and query parameters, so users don't have to switch between two styles in the same request. If your stack serializes names automatically, check that it produces the convention you chose.

Also decide on the following:

- Abbreviations. Spell out words unless the abbreviation is universally understood in your industry, such as `id` or `url`. Keep a list of approved abbreviations.
- Booleans. Decide whether boolean names use a prefix, such as `is_active` or `has_shipped`, or a plain adjective, such as `active`. A prefix makes the type obvious at a glance.
- Dates and times. Decide on a naming pattern that shows what a field holds, such as `created_at` for a timestamp and `published_on` for a date.
- Allowed values. Enumerated values, such as order statuses, also need a case convention, for example `in_transit`, `in-transit`, or `IN_TRANSIT`.

## Identifiers

Decide how resources are identified:

- Format. Common options are sequential numbers, UUIDs, and opaque strings. Sequential numbers are short, but they reveal how many records you have and let users guess other IDs. UUIDs and opaque strings avoid both problems.
- Type prefixes. Some APIs prefix IDs with the resource type, such as `book_8sK2nQ` or `ord_4fT9wE`. A prefix makes logs and support conversations easier, because anyone can tell what an ID refers to. [Stripe](https://docs.stripe.com/api) is a well-known example.
- Guarantees. Tell users which properties they can rely on. Most APIs promise only that an ID is unique and stable, and reserve the right to change its length and format. Users should store IDs as strings and never parse them.

## HTTP methods and status codes

Use HTTP methods for what they are meant for:

| Method | Use it to | Safe to retry |
|---|---|---|
| `GET` | Retrieve a resource or a list | Yes |
| `POST` | Create a resource, or trigger an action | Only with an idempotency key. See [Safe retries](#safe-retries) |
| `PUT` | Replace a resource completely | Yes |
| `PATCH` | Update some fields of a resource | Depends on the change |
| `DELETE` | Remove a resource | Yes |

Decide whether you support `PUT`, `PATCH`, or both for updates. `PUT` replaces the whole resource, so a client that leaves out a field deletes it. `PATCH` changes only the fields in the request. Many APIs support only `PATCH`, or only `POST`, for updates to avoid that confusion.

Use standard status codes, and document which ones each endpoint can return:

| Code | Meaning | Example |
|---|---|---|
| `200 OK` | The request succeeded. | You retrieved a book. |
| `201 Created` | The request created a resource. | You placed an order. |
| `204 No Content` | The request succeeded and there is nothing to return. | You deleted a wishlist. |
| `400 Bad Request` | The request is invalid. | A required field is missing. |
| `401 Unauthorized` | The request is not authenticated. | The API key is missing or invalid. |
| `403 Forbidden` | The client is authenticated but not allowed to do this. | The API key can read orders but not create them. |
| `404 Not Found` | The resource does not exist. | No book exists with this ID. |
| `409 Conflict` | The request conflicts with the current state. | The order has already shipped and can't be changed. |
| `422 Unprocessable Content` | The request is well-formed but can't be processed. | The quantity exceeds the stock. |
| `429 Too Many Requests` | The client exceeded a rate limit. | The client sent too many requests in a minute. |
| `500 Internal Server Error` | Something went wrong on the server. | An unexpected failure. |
| `503 Service Unavailable` | The service is temporarily unavailable. | Planned maintenance. |

Decide whether you use `400` for all invalid requests or distinguish `422` for requests that are valid in form but not in content.

## Requests and responses

### Data format

JSON is the default for most web APIs. If you need another format, such as XML or a binary protocol, document why and where.

Decide on the following:

- Dates and times. Common options are ISO 8601 strings, such as `"2026-03-14T09:30:00Z"`, and Unix timestamps, such as `1773480600`. ISO 8601 is readable in logs and docs. Unix timestamps are compact and easy to compare. Whichever you choose, always use UTC or state the time zone explicitly.
- Money and precise numbers. Floating-point numbers can't represent many decimal values exactly. Common options are integers in the smallest currency unit, such as `1999` for 19.99 EUR, or decimal strings, such as `"19.99"`. Always send the currency as a separate field.
- Missing values. Decide whether a field without a value is returned as `null` or left out of the response. Returning `null` makes the response shape predictable. Leaving it out makes responses smaller. Mixing the two forces users to handle both.
- Response envelope. Decide whether a single resource is returned as-is or wrapped in an object, such as `{"data": {...}}`. Many APIs return single resources as-is and wrap only lists.

### Self-describing objects

Consider adding a few fields to every object, so users can tell what they are looking at without context:

```json
{
  "id": "book_8sK2nQ",
  "object": "book",
  "title": "The Pragmatic Programmer",
  "price": {
    "amount": 4299,
    "currency": "EUR"
  },
  "in_stock": true,
  "created_at": "2026-03-14T09:30:00Z"
}
```

Here, `object` names the resource type, and `created_at` records when it was created. These fields help most in logs, webhooks, and lists that contain more than one type of object.

### Optional data

Keep default responses small and let users ask for more when they need it. A common pattern is a parameter such as `expand` or `include` that adds related objects or extra fields:

```http
GET /orders/ord_4fT9wE?include=customer,items
```

If you support this, document which fields can be included and any limits, such as how many levels deep an expansion can go.

## Lists, pagination, filtering, and sorting

Decide on one pagination method for all list endpoints:

| Method | How it works | Good for | Watch out for |
|---|---|---|---|
| Offset | `?limit=20&offset=40` skips the first 40 items. | Small, stable data sets, and jumping to a specific page. | Items can be skipped or repeated when data changes between requests. Slow on large data sets. |
| Cursor | `?limit=20&starting_after=book_8sK2nQ` continues after a known item, or follows an opaque token from the previous response. | Large or frequently changing data sets. | Users can't jump to an arbitrary page. |

Decide on a default and a maximum page size, such as 20 and 100, and a single list structure:

```json
{
  "object": "list",
  "data": [
    { "id": "book_8sK2nQ", "object": "book", "title": "The Pragmatic Programmer" },
    { "id": "book_2pL7xR", "object": "book", "title": "Docs for Developers" }
  ],
  "has_more": true,
  "next_cursor": "book_2pL7xR"
}
```

Also decide on the following:

- Totals. Returning the total number of results is convenient, but it can be expensive to calculate on large data sets. Many cursor-based APIs return only whether more results exist.
- Filtering. Use query parameters named after the fields they filter, such as `?status=shipped`. Decide how to express ranges, such as `?created_after=2026-01-01`, and multiple values, such as `?status=shipped,delivered`.
- Sorting. Decide on a parameter name and syntax, such as `?sort=-created_at` for newest first, and on the default order of every list.

## Errors

A good error response lets code handle the error automatically and lets a person understand it. Return the right status code and an error object with a consistent structure:

```json
{
  "error": {
    "type": "invalid_request",
    "code": "parameter_missing",
    "message": "The 'quantity' parameter is required.",
    "param": "quantity",
    "doc_url": "https://api.example.com/docs/errors#parameter_missing",
    "request_id": "req_7Hq2Lm"
  }
}
```

In this example:

- `type` groups errors into a few broad categories that clients can handle the same way, such as `invalid_request`, `authentication`, `rate_limit`, and `server`.
- `code` identifies the exact error. Codes are stable, so clients can rely on them in code.
- `message` explains the error to a person. Messages can change, so clients must not parse them.
- `param` names the field that caused the error, so a client can highlight it in a form.
- `doc_url` links to documentation about the error.
- `request_id` identifies the request for support. See [Request IDs](#request-ids).

Decide which of these fields you need. Never include internal details, such as stack traces, database messages, or server names, in an error response.

Document every error code with its cause and what the user should do next. A list of codes and meanings without a course of action leaves users stuck, and they end up opening support tickets for problems they could have fixed themselves:

| Code | Cause | What to do |
|---|---|---|
| `parameter_missing` | A required parameter is not in the request. | Add the parameter named in `param` and send the request again. |
| `out_of_stock` | The requested quantity is more than the available stock. | Lower the quantity, or check availability with `GET /books/{id}` first. |
| `rate_limit_exceeded` | The client sent too many requests. | Wait for the time in the `Retry-After` header, then retry. |

## Security

### Authentication and authorization

Decide how clients authenticate. Common options are API keys, which are simple and suit server-to-server integrations, and OAuth 2.0, which suits integrations that act on behalf of a user. Whichever you choose, document the following for every endpoint:

- Which permissions, roles, or scopes it requires.
- What happens when the client lacks them, typically `403 Forbidden`.

Never accept credentials or other sensitive data in URLs, because URLs end up in logs, browser history, and analytics tools.

### Rate limits

Rate limits protect your service and its users. Decide on and document the following:

- The limits, and what they apply to, such as per API key, per user, or per endpoint.
- The response when a client exceeds a limit, typically `429 Too Many Requests`.
- Headers that tell clients where they stand, such as how many requests remain and when they can retry, for example a `Retry-After` header.
- How clients should react. A common recommendation is to retry with exponential backoff and some randomness, so many clients don't retry at the same moment.

If some endpoints are more expensive than others, decide whether they count more heavily against the limit or have their own limits, and document it.

### Test environments

Give users a way to try the API without affecting real data, such as a sandbox environment or test API keys. Make it obvious which environment a request ran in, for example with separate base URLs, separate keys, or a field such as `livemode` on every object.

Consider connecting the test environment to an interactive API explorer in your docs, where readers can send requests from the browser. Developers use it to learn the API faster. It also helps people who don't write code, such as product managers evaluating your API, see how it works in minutes and make a decision without waiting for an engineer. [Stripe Shell](https://docs.stripe.com/stripe-shell/overview), which runs requests against a sandbox from Stripe's docs, is a good example.

## Reliability

### Safe retries

Networks fail. When a request times out, the client can't tell whether the server processed it. For read requests, retrying is harmless. For requests that create or change something, such as placing an order or sending a payment, a retry can do it twice.

A common solution is an idempotency key. The client generates a unique value, such as a UUID, and sends it in a header with the request. If the server receives the same key again, it returns the original result instead of repeating the operation.

```http
POST /orders
Idempotency-Key: 5f1c2a7e-8d3b-4c1a-9e2f-6b7a8c9d0e1f
Content-Type: application/json

{ "book_id": "book_8sK2nQ", "quantity": 1 }
```

If you support idempotency keys, document which methods accept them, how long the server remembers a key, and what happens when a client reuses a key with different parameters.

### Request IDs

Return a unique ID with every response, for example in a `Request-Id` header. When users contact support, the ID lets you find the exact request in your logs. Mention it in the error documentation and in your support process.

## Versioning and change management

### Define what a breaking change is

Before your first release, write down which changes are safe and which are breaking. The following lists are a common starting point.

Changes that are usually safe:

- Adding a new endpoint or resource.
- Adding an optional request parameter.
- Adding a field to a response.
- Changing the order of fields in a response.
- Changing the length or format of IDs and other values documented as opaque.

Changes that are breaking:

- Removing or renaming an endpoint, field, or parameter.
- Changing the type of a field, such as from a number to a string.
- Making an optional parameter required.
- Changing the meaning of an existing value.
- Changing authentication or permissions in a way that rejects requests that used to work.

Some changes depend on how your users write their code, such as adding a new value to an enumerated field. A client that handles only the values it knows about can fail when it receives a new one. Decide how you treat these changes, and tell users to handle unknown fields and values gracefully.

### Choose a versioning strategy

Decide how users select a version:

| Strategy | Example | Trade-offs |
|---|---|---|
| Major version in the path | `/v1/books` | Easy to see and use. Each new major version is a big migration for users. |
| Version in a header | `Api-Version: 2026-03-01` | Keeps URLs stable and allows smaller, more frequent versions. Harder to see, and you must maintain every version you support. |
| Version per account | The version is fixed when an account first uses the API and changes only when the account upgrades. | Users are never surprised by changes. Requires the most engineering effort, because the server must translate between versions. |

Whichever strategy you choose, release breaking changes rarely and bundle them, so users can plan upgrades.

Many teams also number the versions of their API description with [Semantic Versioning](https://semver.org/), in the `MAJOR.MINOR.PATCH` format. A major version contains breaking changes, a minor version adds features in a backward-compatible way, and a patch fixes bugs without changing the API's behavior. This fits well with a major version in the path, where `/v1` covers every `1.x.x` release. Date-based versions, such as `2026-03-01`, are a common alternative for header-based strategies.

### Deprecate with notice

Decide on and publish a deprecation policy:

- How much notice users get before you remove something, such as six or twelve months.
- How you tell them, such as the changelog, email, and response headers like `Sunset`.
- How you mark deprecated endpoints and fields in the API description and the docs.
- How you check who still uses the deprecated feature before you remove it.

### Keep a changelog

Publish every change in a changelog with the date, what changed, and whether it is breaking. If possible, generate the changelog from the same source as the API description, so they never disagree.

## Documentation

### Describe the API in a standard format

Write the API description in a machine-readable format. [OpenAPI](https://www.openapis.org/) is the standard for HTTP APIs, and [AsyncAPI](https://www.asyncapi.com/) for event-driven and WebSocket APIs. A single description can then generate the reference docs, mock servers, client libraries, and tests.

Store the API description in version control next to the code or the docs, and review changes to it the same way you review code.

### Document every endpoint

Every endpoint needs:

- A short summary and a description of what it does and when to use it.
- Every parameter and field, with its type, whether it is required, its allowed values, its default, and its format, such as `ISO 8601 date-time`.
- At least one realistic request and response example. Use believable values, not `string` or `foo`.
- Every status code and error it can return.
- The permissions it requires and any special rate limits.

### Write the guides around the reference

A reference tells users what exists. Guides tell them how to get something done. Most APIs need at least:

| Guide | What it covers |
|---|---|
| Overview | What the API does, who it's for, and how it's organized. |
| Quickstart | The shortest path from zero to a first successful request. |
| Authentication | How to get credentials and use them. |
| Errors | The error format, all error codes, and how to handle them. |
| Pagination and filtering | How lists work. |
| Rate limits | The limits and how to stay within them. |
| Versioning and changelog | How versions work, the deprecation policy, and all changes. |

Document your conventions once, in these guides, instead of repeating them on every endpoint.

## Design review

Governance works only if new designs are reviewed against the style guide before anyone builds them. Decide on the following:

- Ownership. Who owns each API and its documentation, and who owns the style guide itself.
- Reviewers. Who must approve a design. A good review group includes an engineer from the owning team, someone who knows the rest of the API, and a technical writer.
- Process. How designs are submitted, such as a pull request that changes the API description, and how long a review takes.
- Exceptions. How a team can request an exception to the style guide, and where approved exceptions are recorded.

Automate as much of the review as you can. An API linter, such as [Spectral](https://github.com/stoplightio/spectral) or [Redocly CLI](https://redocly.com/docs/cli/), can check names, required descriptions, error formats, and pagination parameters in every pull request, so human reviewers can focus on whether the design makes sense.

### Design review checklist

Use this checklist for every new or changed endpoint:

- [ ] The path uses nouns and follows the naming conventions.
- [ ] Fields and parameters follow the case convention and use approved abbreviations only.
- [ ] Every field and parameter has a type, a description, and allowed values where applicable.
- [ ] Lists use the standard pagination, filtering, and sorting parameters.
- [ ] Errors use the standard error object, and every error code is documented with a course of action.
- [ ] Required permissions and rate limits are documented.
- [ ] Requests that create or change data support safe retries, if your API offers them.
- [ ] The change is not breaking, or it follows the versioning and deprecation policy.
- [ ] The API description includes realistic request and response examples.
- [ ] The changelog entry is written.

## API style guide template

Copy this template into your own documentation and fill it in. Record the reason for each decision, so future team members understand it and don't reopen it without a good reason. Keep the file in version control, so its history shows when and why each decision changed.

```markdown title="api-style-guide.md"
# API style guide

Owner:
Last reviewed:

## Naming

- Collection names:
  - Decision:
  - Reason:
- Path segment case:
  - Decision:
  - Reason:
- Field and parameter case:
  - Decision:
  - Reason:
- Approved abbreviations:
  - Decision:
  - Reason:
- Boolean names:
  - Decision:
  - Reason:
- Allowed value case:
  - Decision:
  - Reason:

## Identifiers

- Identifier format and prefixes:
  - Decision:
  - Reason:

## HTTP methods and status codes

- Updates (PUT, PATCH, or both):
  - Decision:
  - Reason:
- Status code for invalid requests (400, 422, or both):
  - Decision:
  - Reason:

## Requests and responses

- Dates and times:
  - Decision:
  - Reason:
- Money and precise numbers:
  - Decision:
  - Reason:
- Missing values (null or omitted):
  - Decision:
  - Reason:
- Response envelope:
  - Decision:
  - Reason:
- Optional data (expand or include):
  - Decision:
  - Reason:

## Lists

- Pagination method and page sizes:
  - Decision:
  - Reason:
- Filtering and sorting syntax:
  - Decision:
  - Reason:

## Errors

- Error object fields:
  - Decision:
  - Reason:
- Location of the error code list:
  - Decision:
  - Reason:

## Security and reliability

- Authentication:
  - Decision:
  - Reason:
- Rate limits and headers:
  - Decision:
  - Reason:
- Test environment and API explorer:
  - Decision:
  - Reason:
- Safe retries:
  - Decision:
  - Reason:
- Request IDs:
  - Decision:
  - Reason:

## Versioning and change management

- Breaking change policy:
  - Decision:
  - Reason:
- Versioning strategy:
  - Decision:
  - Reason:
- Deprecation notice period and channels:
  - Decision:
  - Reason:

## Documentation and review

- API description format:
  - Decision:
  - Reason:
- Design reviewers and process:
  - Decision:
  - Reason:
```

## See also

The following public resources informed this framework and go into more depth:

- [Documenting APIs: A guide for technical writers and engineers](https://idratherbewriting.com/learnapidoc/docapis_overview.html) by Tom Johnson, a free course on writing API documentation.
- [Stripe API reference](https://docs.stripe.com/api), widely considered one of the best-designed and best-documented public APIs. See in particular its pages on [errors](https://docs.stripe.com/api/errors), [pagination](https://docs.stripe.com/api/pagination), [idempotent requests](https://docs.stripe.com/api/idempotent_requests), and [versioning](https://docs.stripe.com/api/versioning).
- [APIs as infrastructure: future-proofing Stripe with versioning](https://stripe.com/blog/api-versioning), on how Stripe keeps old integrations working.
- [Google API Improvement Proposals](https://google.aip.dev/), Google's design guidelines.
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines).
- [Zalando RESTful API Guidelines](https://opensource.zalando.com/restful-api-guidelines/).
