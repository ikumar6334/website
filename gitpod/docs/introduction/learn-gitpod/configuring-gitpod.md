---
section: learn-gitpod
title: .gitpod.yml
---

<script context="module">
  export const prerender = true;
</script>

# Configuring a project

Gitpod is not simply "moving your laptop into the cloud". A key benefit of using a Cloud Development Environment ([CDE](https://www.gitpod.io/cde)) is _reproducibility_. When your workspace is configured, opening a new workspace is effortless—allowing you to fully embrace ephemeral development environments.

## The gitpod.yml file

The primary method of configuration is using a YAML file named `.gitpod.yml`, located at the root of your repository. The `gitpod.yml` file defines things like:

- The processes to start for your project (e.g. a database or webserver).
- Required tools to install before the project starts.
- Any editor extensions or IDE plugins to install.
- And much more!

See the [`.gitpod.yml reference`](/docs/references/gitpod-yml) page for more.

> **Important:** You must commit the `.gitpod.yml` file to the root of the repository and start a new workspace for configuration changes to apply (a workspace restart is not sufficient).

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

### Testing your first gitpod.yml

Commit and push the `gitpod.yml` to the root of your repository and open that branch (or commit) in a new workspace by:

1. Prefixing your repo URL with `https://gitpod.io/#`
   - **For example:** https://gitpod.io/#https://github.com/nodejs/node)
1. Opening a new workspace from the [Gitpod dashboard](https://gitpod.io/dashboard)
1. Installing, and using the [Gitpod Browser Extension](/docs/configure/user-settings/browser-extension#browser-extension)
