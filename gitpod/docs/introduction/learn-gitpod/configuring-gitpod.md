---
section: learn-gitpod
title: .gitpod.yml
---

<script context="module">
  export const prerender = true;
</script>

# Configuring a project

Gitpod is not simply "moving your laptop into the cloud". A key benefit of using a Cloud Development Environment ([CDE](https://www.gitpod.io/cde)) is _reproducibility_. When your workspace is configured, opening a new workspace is effortless—allowing you to fully embrace ephemeral development environments.

## Understanding Gitpod configuration

### The gitpod.yml file

The primary method of configuration is using a YAML file named `.gitpod.yml`, located at the root of your repository. The `gitpod.yml` file defines (for example):

1. The processes to start for your project - e.g. a database or webserver.
2. Required tools to install before the project starts.
3. Any editor extensions or IDE plugins to install.

See the [.gitpod.yml reference](/docs/references/gitpod-yml) page for more.

`youtube: fA2fpqP1xaM`

### A gitpod.yml example

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

### The workspace image file

In addition to the `gitpod.yml` you can also specify a workspace image, which brings:

1. Improved caching and performance
2. Improved portability
3. Leverage any existing Docker configurations

Currently, Gitpod supports Docker for workspace images.

See [Workspace Image](/docs/configure/workspaces/workspace-image) for more.

## Updating your Gitpod configuration

To create a `.gitpod.yml` use the `gp init` command (or `gp init -i` for interactive mode). This command is part of the [Gitpod CLI](/docs/references/gitpod-cli), which is included in all Gitpod workspaces by default.

```sh
gp init
```

See the [Gitpod CLI](/docs/references/gitpod-cli) page for more.

## Testing your Gitpod configuration

You can test your `.gitpod.yml` using `gp rebuild` and [Debug Workspaces](/docs/configure/workspaces/debug-workspaces). A Debug Workspace runs a miniature workspace within your current workspace, applying the latest configuration and allowing you to troubleshoot workspace startup (ports, tasks, etc), image builds and more, without needing to commit and pollute your version history.

To test your configuration changes:

1. Run `gp rebuild` - This command will emit a Debug Workspace URL.
2. Open the debug workspace to check your configuration.
3. Update configuration in the original workspace, re-running `gp rebuild` if needed.

<!-- TODO: Test if needs to be root -->

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Debug workspace startup and shutdown" src="/images/testing-changes/gp_rebuild.png">
    <figcaption>Debug workspace startup and shutdown</figcaption>
</figure>

> **Tip:** For improved configuration speed, consider using a large [Workspace Class](/docs/configure/workspaces/workspace-classes).

## Apply configuration changes

To apply your changes for all subsequent workspaces, commit and push the `gitpod.yml` (and `.gitpod.Dockerfile` if you created one) to the root of your repository.

Open the commit in a new workspace by either:

1. Prefixing your repo URL with `https://gitpod.io/#`
   - **For example:** https://gitpod.io/#https://github.com/nodejs/node)
2. Opening a new workspace from the [Gitpod dashboard](https://gitpod.io/dashboard)
3. Installing, and using the [Gitpod Browser Extension](/docs/configure/user-settings/browser-extension#browser-extension)

> **Important:** You must commit the `.gitpod.yml` to the root of the repository and start a new workspace for changes to apply (a workspace restart is not sufficient).
