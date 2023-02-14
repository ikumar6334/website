---
author: loujaybee, akosyakov, iqqbot
date: Friday, 1 March 2023 09:00:00 UTC
excerpt: Lorem Ipsum
image: teaser.jpg
slug: announcing-gp-rebuild
tags: ["Gitpod updates"]
subtitle:
teaserImage: teaser.jpg
title: Announcing `gp rebuild`
---

<!-- TODO: Update image -->

<script context="module">
  export const prerender = true;
</script>

**TL;DR;**

- Use `gp rebuild` to test configuration updates within the workspace without committing.
- Use `gp rebuild --prebuild` to debug Prebuilds by re-creating the same state.
- The command is included in all Gitpod workspaces—try it out today!

The power of a [CDE](https://www.gitpod.io/cde) comes with a well-defined configuration. In Gitpod, that's your configuration defined in your `gitpod.yml`. Which is why our users and community kept asking us to improve how quickly and easily you can lint, validate and iterate on your workspace configuration. A quick GitHub search shows some of the many requests, such as: [#9025](https://github.com/gitpod-io/gitpod/issues/9025), [#12893](https://github.com/gitpod-io/gitpod/issues/12893) and [#6818](https://github.com/gitpod-io/gitpod/issues/6818).

Previously to update your configuration, you need to commit your `.gitpod.yml`, and start a new workspace. This could mean a delay to finding out your configuration was incorrect, and pollute your source control with bad commits. We knew we could do better. We wanted to "shift left" and bring any errors, validation and suggestions closer to when you are actually updating your configuration.

Today, we're excited to announce a new feature, `gp rebuild` is in beta. This new Gitpod CLI command allows you to **quickly validate and test your workspace configurations— without needing to commit OR leave your workspace!** 🎉 ⚡️

<!-- TODO: Add issue link -->

## What is `gp rebuild`?

`gp rebuild` is a command bundled in every workspace that allows you to quickly test your Gitpod configurations. The feature works by creating a miniature "workspace within your workspace", by mounting your `/workspace` directory, and pulling through all necessary information such as environment variables. Using this architecture we can aggressively cache any changes, which makes update cycles to your configurations ⚡️ super fast ⚡️ , all without:

- Leaving your workspace.
- Committing any changes.

Another neat feature with `gp rebuild` is the `--prebuild` flag, which allows you to execute a workspace in the exact same way that Gitpod does for your Prebuilds. This flag then allows you to more easily re-create the state of your Prebuilds and helps in debugging any Prebuild errors.

For more, check out:

- [Getting Started](/docs/introduction/getting-started)
- [Configuring Workspaces](https://3000-gitpodio-website-e93t4hfjieb.ws-eu86.gitpod.io/docs/configure/workspaces)

## What's next?

1. **More linting & best practices** - With `gp rebuild` we can now share more tips and tricks to improve your configuration, discover features and avoid common gotchas, such as not adding a base image, and storing data or files outside the `/workspace` directory.
2. **A simpler workspace restart** - `gp rebuild` should be all you need to get confidence that your configurations work as expected. That said, we do want to make it easier to restart a new workspace when you're done, and happy with your configuration.

## FAQs

**Does `gp rebuild` apply changes to the current workspace?** No. Currently, `gp rebuild` creates a workspace within your current workspace. We chose this approach as it's the fastest way that we can give you feedback on your configuration changes.

**Does `gp rebuild` apply to all my files?** All files within the `workspace` directory are copied into the Debug Workspace.
