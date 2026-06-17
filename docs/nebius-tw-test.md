---
title: Nebius technical writer test assignment
unlisted: true
---

Below you can find the following sections:

1. [Test assignment solution](#test-assignment-solution): the draft of the High availability feature doc.
2. [My notes about the assignment](#notes-about-the-test-assignment): describes my process and decisions.

## Test assignment solution

Placed as an H3 (subheading) within the [How to create clusters](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters) *web console* procedure. This would require simplifying the current description of high availability in Step 5 and linking to the dedicated section below the procedure.

To learn more about my decision-making process, see [My notes about the assignment](#notes-about-the-test-assignment).

___

### High availability

Kubernetes clusters persist control plane configuration data in [etcd](https://docs.nebius.com/kubernetes/components#etcd) stores. To prevent losing this data, you can enable **High availability** to keep multiple etcd stores as backup.

When enabled (the default), the control plane runs three etcd stores instead of one. If one fails, the other two keep the control plane operational. When disabled, the control plane runs a single store with no backup.

When [creating a cluster](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters), under **Control plane**, enable or disable **High availability**. You can't change this after the cluster is created.

Enabling **High availability** increases the control plane's IP allocation from three `/32` blocks to five. It has no effect on cost. If you're working with a non-default subnet or a limited quota, see [Private IP address allocations](https://docs.nebius.com/kubernetes/networking/requirements#private-ip-address-allocations).

:::tip
Disable **High availability** for development or test clusters, where losing the etcd store isn't a concern.
:::

___

## Notes about the test assignment

### My thought process

- Treat documentation as a product discipline, not a writing service—establishing if docs are the right solution before writing.
- Flag naming, UI/UX, and feature decisions with product, design, and dev before writing, not after.
- Docs are a part of the product, not a byproduct of development. For more, see my [Docs project management](https://all-maker.com/docs/resources/docs-pm-framework) framework.
- With the right console configuration, the UI elements would be the primary instruction surface for this feature (e.g. UX copy and tooltips).

### Research and task refinement

- I created a Nebius AI Cloud account so I could compare the cluster creation form with the mockup.
- The **High availability** toggle was not present in my console. Possible reasons: my free plan, an unpublished feature, a regional difference, or a fictive feature for the purpose of the task. The order of sections was also different.
- I found the existing procedure on [How to create and modify Managed Service for Kubernetes® clusters](https://docs.nebius.com/kubernetes/clusters/manage), checked the instructions, and traced the mechanism to the [etcd component reference](https://docs.nebius.com/kubernetes/components#etcd).
- I discovered in the [Network requirements doc](https://docs.nebius.com/kubernetes/networking/requirements) that enabling **High availability** also changes the control plane's required IP allocations: five `/32` blocks versus three. There is no link to this section from the current [How to create clusters](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters) procedure.

### Brief review of the current docs

- Step 3 states "the page that opens" without naming it. I would use the page title from the console UI **Create Managed Kubernetes® cluster**.
- Step 4 uses *labels* wording as self-explanatory, although it's a UI element. I would bold **Labels**, paraphrase it (maybe using *your labels*), or add an example like `env:prod`.
- **High availability** is a UI element and is not bolded on first mention in step 5. Nebius docs mostly use this convention for UI elements.
- Step 5 bullet points mix element description, default state, consequence, and conditionals into prose paragraphs. In other docs, that pattern is usually: **UI element**: state. Consequence.
- The **Public endpoint** bullet point buries the subnet conditional mid-paragraph and uses "same subnet with the cluster." This looks like a typo and should be "same subnet *as* the cluster."
- In Nebius docs there are different stylistic conventions for similar procedures. For example, [How to create clusters](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters) and [Regular node groups](https://docs.nebius.com/kubernetes/node-groups/manage#regular-node-groups) differ in wording choice for similar steps and ways of embedding lists.
- The label "High availability" is imprecise in the Kubernetes context. It typically means multi-node control plane redundancy across zones. Here it controls `etcd` cluster size only. I would raise this with the team before publishing.

### Decisions about the assignment

- I documented the feature under the provided naming, but I would discuss this with the team.
- With what I currently know, I'd place the section as an H3 heading within the existing [How to create clusters](https://docs.nebius.com/kubernetes/clusters/manage#how-to-create-clusters) section, not as a standalone page. The feature is relevant only at the time of creation and is referenced in just two other places across the docs, both as supporting documentation.
- I matched the document depth to the feature and audience: what it is, what it impacts, and how to enable or disable it. It seems fairly simple, and I didn't want to chase the word count while sacrificing clarity.
- I did not include a step-by-step instruction because enabling the feature is done in the middle of an already documented procedure, which I link to.