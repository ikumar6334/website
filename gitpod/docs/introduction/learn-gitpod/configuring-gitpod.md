---
section: learn-gitpod
title: .gitpod.yml
---

<script context="module">
  export const prerender = true;
</script>

# Configuring a project

Gitpod is not simply "moving your laptop into the cloud". A key benefit of using a Cloud Development Environment ([CDE](https://www.gitpod.io/cde)) is _reproducibility_. When your workspace is configured, opening a new workspace is effortless—allowing you to fully embrace ephemeral development environments.

## Configuring Gitpod

There are multiple ways to configuring Gitpod to suit your needs:

1. **Per project** - Configuring a [`.gitpod.yml`](/docs/references/gitpod-yml) or [Workspace Image](/docs/configure/workspaces/workspace-image) to your repository root.
2. **Personalisation** - By setting your [User Settings](/docs/configure/user-settings).

## The gitpod.yml file

The primary method of configuration is using a YAML file named `.gitpod.yml`, located at the root of your repository. The `gitpod.yml` file defines things like:

- The processes to start for your project (e.g. a database or webserver).
- Required tools to install before the project starts.
- Any editor extensions or IDE plugins to install.
- And much more!

See the [`.gitpod.yml reference`](/docs/references/gitpod-yml) page for more.

`youtube: fA2fpqP1xaM`

### An example of the gitpod.yml

```yaml
# Commands that will run on workspace start
tasks:
  - name: Setup, Install & Build
    before: yarn global add express
    init: yarn install
    command: yarn build

# Ports to expose on workspace startup
ports:
  - port: 3000
    onOpen: open-preview
    name: Website
    description: Website Preview
```

**Caption:** An example project configured to install, build and run a `yarn` project with a webserver, exposed on port 3000. On start, the webserver preview is opened automatically.

### Generating a gitpod.yml

To create a `.gitpod.yml` use the `gp init` (or `gp init -i` for interactive mode) command, which is part of the Gitpod CLI, that is included in all Gitpod workspaces by default.

```sh
gp init
```

See the [Gitpod CLI](/docs/references/gitpod-cli) page for more.

## The workspace image file

In addition to the `gitpod.yml` you can also specify a workspace image. Currently, Gitpod only supports Docker for workspace images.

See the [Docker Integration](/docs/integrations) page for more.

<!-- TODO: Add Docker integrations page -->

### Benefits of the workspace image

1. Improved caching and performance
2. Improved portability
3. Leverage any existing Docker configurations

See the [Workspace Image](/docs/configure/workspaces/workspace-image) page for more.

<!-- TODO: Look back at announcement blog. -->

## Testing your Gitpod configuration

<!-- TODO: Add diagram that shows inner + outer loop -->

There are two ways to test your Gitpod configuration, either:

1. **Without a commit** - Using the `gp rebuild` command in your workspace.
2. **With a commit** - By starting an entirely new workspace.

> **Recommendation:** We recommend using `gp rebuild` to test your workspace configuration first. When you are satisfied, you can commit the configuration, and if needed, do a final test by opening a new workspace.

### Test configuration without a commit

You can test your `.gitpod.yml` without needing to commit, using a feature called [Debug Workspaces](/docs/configure/workspaces/debug-workspaces). Debug workspaces run your updated configuration _within the current workspace_. Debug workspaces allow you to troubleshoot issues with: image builds, prebuilds and general workspace startup (ports, tasks, etc) without needing to commit.

**Steps:**

1. Run `gp rebuild` - The command emits a "debug workspace" URL
2. Open the debug workspace, check your configuration
3. Update your configuration in the main workspace and re-run `gp rebuild`

<!-- TODO: Test if needs to be root -->

See [Debug Workspaces](/docs/configure/workspaces/debug-workspaces) for more.

### Test configuration with a commit

Commit and push the `gitpod.yml` (and `.gitpod.Dockerfile` if you created one) to the root of your repository and open commit in a new workspace by:

1. Prefixing your repo URL with `https://gitpod.io/#`
   - **For example:** https://gitpod.io/#https://github.com/nodejs/node)
2. Opening a new workspace from the [Gitpod dashboard](https://gitpod.io/dashboard)
3. Installing, and using the [Gitpod Browser Extension](/docs/configure/user-settings/browser-extension#browser-extension)

> **Important:** You must commit the `.gitpod.yml` file to the root of the repository and start a new workspace for configuration changes to apply (a workspace restart is not sufficient).
