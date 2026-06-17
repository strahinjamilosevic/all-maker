---
title: Nebius technical writer test assignment
unlisted: true
---

The content below is split into two sections:

1. [Notes about the test assignment](#notes-about-the-test-assignment): describes my process going into this task.
2. [Test assignment solution](#test-assignment-solution): the actual content I would present as the draft of the procedure.

## Notes about the test assignment

### My thought process

- Treat documentation as a product discipline, not a writing service: I question whether a doc is the right solution before I write it.
- Raise naming, UI/UX, and feature decisions with product, design, and dev before writing, not after.
- Docs as part of the product, not a byproduct of development. To find more about my approach, see my [Docs project management](https://all-maker.com/docs/resources/docs-pm-framework) framework.
- With the right console configuration, the UI elements would be the primary instruction surface for this feature (e.g. UX copy and tooltips), as most users probably wouldn't leave the console to read a doc.

### Research and task refinement

- I created a Nebius AI Cloud account and opened the cluster creation form to verify the task against the live product.
- The **High availability** toggle was not present in my console and the order of sections differed. Maybe because of the unpaid plan, an unpublished feature, a regional difference, or simply a fictive feature for the purpose of the task. I treated this as deliberate and continued with the mockup you provided.
- I found the existing procedure on [How to create and modify Managed Service for Kubernetes® clusters](https://docs.nebius.com/kubernetes/clusters/manage), checked the instructions, and traced the mechanism to the [etcd component reference](https://docs.nebius.com/kubernetes/components#etcd).
- I discovered in the current [Network requirements doc](https://docs.nebius.com/kubernetes/networking/requirements) that enabling **High availability** also changes the control plane's required IP allocations: five `/32` blocks versus three. There is no link to this section from the current [How to create clusters](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters) procedure.

### Brief review of the current docs

- Step 3 states "the page that opens" without naming it. I would use the page title from the console UI **Create Managed Kubernetes® cluster**.
- Step 4 treats **labels** wording as self-explanatory, even though it's also a UI element. I would bold **Labels**, paraphrase it (maybe using *your labels*), or add an example like `env:prod`.
- **High availability** is a UI element and is not bolded on first mention in step 5. Nebius docs mostly use this convention to bold UI elements.
- Step 5 bullet points mix element description, default state, consequence, and conditionals into prose paragraphs instead of following the pattern used elsewhere: **UI element**: state. Consequence.
- The **Public endpoint** bullet buries the subnet conditional mid-paragraph and uses "same subnet with the cluster." This looks like a typo and should be "same subnet *as* the cluster."
- The label "High availability" is imprecise in the Kubernetes context, where it typically means multi-node control plane redundancy across zones. Here it controls `etcd` cluster size only. I would raise this with the team before publishing.

### Decisions about the assignment

- I documented the feature under the label you provided, but I would flag the naming concern with the team.
- I would place the section as an H3 heading within the existing [How to create clusters](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters), not as a standalone page. The feature is relevant only at the time of creation and is referenced in just two other places across the docs, both as supporting documentation.
- I matched the document depth to the feature and audience: what it is, what it impacts, and how to enable or disable it. It is fairly simple, and I didn't want to chase the word count while sacrificing clarity.
- I did not include a numbered instruction because enabling the feature is done in the middle of an alraedy documented procedure, which I link to.

## Test assignment solution

Placed as an H3 (subheading) within the [How to create clusters](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters) *web console* procedure. This would probably require simplifying the current description of high availability in the itemized list and linking to the dedicated section below the procedure.

### High availability

Enable **High availability** to create backup [etcd](https://docs.nebius.com/kubernetes/components#etcd) stores for the cluster's control plane data.

When enabled (the default), the cluster runs three etcd stores instead of one. If one fails, the other two keep the control plane operational. When disabled, the cluster runs a single store with no failover.

You can only enable or disable **High availability** when you [create the cluster](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters) in the **Control plane** section of the web console. You can't change it for an existing cluster.

Enabling **High availability** doesn't affect the cost of the cluster. It does affect the number of private IP addresses the control plane needs: five `/32` allocations when enabled, three when disabled. See [private IP address allocations](https://docs.nebius.com/kubernetes/networking/requirements#private-ip-address-allocations) if you're working with a non-default subnet or a limited quota.

:::tip
Disable **High availability** for development or test clusters, where losing the etcd store isn't a concern.
:::