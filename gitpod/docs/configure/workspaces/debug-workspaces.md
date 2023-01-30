---
section: workspaces
title: Testing Workspace Configuration Changes
---

<script context="module">
  export const prerender = true;
</script>

# Debug Workspaces

> This feature is currently in [Alpha](/docs/help/public-roadmap/release-cycle). [Send feedback](https://github.com/gitpod-io/gitpod/issues/7671).

When updating your workspace configuration, such as `.gitpod.yml` and `.gitpod.Dockerfile` you can test your configuration changes by creating a brand new workspace, waiting for it to load, and observing the result. However, this process is:

- Requires you to commit any configuration changes
- Time consuming as you commit, and wait for a full rebuild
- Pollutes version control, submitting configurations before they're testing and working

## What is a Debug Workspace?

A faster approach is to leverage what we call 'debug workspaces'. Debug workspaces run your updated configuration _within_ the current workspace. Debug workspaces allow you to troubleshoot issues with:

- Image builds
- Prebuilds
- General workspace startup (editors/IDEs, ports, tasks, and environment variables)

All without having to push the changes to a remote Git repository. Because you're running things within your workspace, you benefit from image caching and detailed logging from within your chosen edito or IDE. Get feedback faster, update configuration quicker.

## How does a Debug Workspace work?

The debug workspace shares the same `/workspace` file system, editors/IDEs, and system resources as your current workspace, but it has its own isolated processes and network. The Debug Workspace also has its own public URL which can be accessed via HTTP or SSH.

### Workspace Image Build

The image build process happens using the docker engine running within your current workspace and benefits from reusing image caches from previous runs.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Docker RUN is cached" src="/images/testing-changes/build_cache.png">
    <figcaption>Docker RUN is cached</figcaption>
</figure>

<!--  -->

### Environment Variables

When you run `gp rebuild`, it applies your [user-specific environment variables](/docs/configure/projects/environment-variables#user-specific-environment-variables) by running the command `gp env`. To apply a specific environment variable before running `gp rebuild`, you can use the command `gp env foo=bar`. This will set the value of `foo` to `bar` in the debug workspace.

> **Note:** [Project-specific environment variables](/docs/configure/projects/environment-variables#project-specific-environment-variables) are only available during the Gitpod Prebuild process. Environment variables have to be added to the current workspace to be tested with the debug workspace.

### Tasks

By default, `gp rebuild` starts the usual user workspace. But you can pass the `--prebuild` option to start the debug prebuild. The debug prebuild runs with your editor as well and does not stop when the prebuild tasks are finished. You can use your editor to access the debug prebuild and inspect the output of the prebuild tasks.

The debug prebuild reuses the `/workspace` files and runs [incrementally](/docs/configure/projects/incremental-prebuilds#incremental-prebuilds) by default. If you want to run a full clean prebuild, you can wipe out all the caches by running `git clean -dfx` before running `gp rebuild --prebuild`.

You can also test how tasks are running starting from the prebuild or on restart by using the `--from` option:

- `gp rebuild --from=prebuild` runs tasks as they will be executed starting from the prebuild.
- `gp rebuild --from=snapshot` runs tasks as they will be executed on a workspace restart.

## Prerequisites

Before you can create a debug workspace, there are a few things you'll need to make sure you have:

- The `docker` command line client must be installed on your current workspace.
- If you are using [private base images](/docs/configure/workspaces/workspace-image#use-a-private-docker-image) in your configuration, you will need to run `docker login` before creating the debug workspace.

## Start a Debug Workspace

To create a debug workspace, run the command `gp rebuild`. This will build the workspace image and start the debug workspace.

If you need to stop the debug workspace, press `Ctrl+C` to trigger a graceful shutdown. If you make any changes and want to test them, you can restart the debug workspace by stopping it and running gp rebuild again.

Here is an example of the debug workspace startup and shutdown process:

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Debug workspace startup and shutdown" src="/images/testing-changes/gp_rebuild.png">
    <figcaption>Debug workspace startup and shutdown</figcaption>
</figure>

## Access a Debug Workspace

Once the debug workspace is running, you can access it in a similar way as your current workspace, but by using a different workspace URL. The output of the `gp rebuild` command will show you the <b>HTTP URL</b> and <b>SSH command</b> you can use to access the debug workspace:

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Debug Workspace URL in gp rebuild output" src="/images/testing-changes/access_output.png">
    <figcaption>Debug Workspace URL in gp rebuild output</figcaption>
</figure>

You can copy paste the HTTP URL in your browser or use the SSH command in your terminal to connect to the debug workspace.

## FAQs

### Which editors and IDEs does a Debug Workspace use?

The debug workspace is configured with the same editors/IDEs as your current workspace. When you open the debug workspace URL, you will be able to navigate to the VS Code Browser or your desktop editor.

### How can you access Debug Workspace ports?

<!-- TODO: Add URL structure -->

You can access applications running in the debug workspace by using
the command `gp url ${port}` or by using the `Ports` view in your editor.

> **Note:** Debug Workspaces shares port management with the current workspace. Making a port public in the debug workspace will make the port public for the current workspace as well.

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Ports view in VS Code Browser of the debug workspace" src="/images/testing-changes/debug_port_code.png">
    <figcaption>Ports view in VS Code Browser of the debug workspace</figcaption>
</figure>

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="The debug workspace is accessible on the web" src="/images/testing-changes/debug_port.png">
    <figcaption>The debug workspace is accessible on the web</figcaption>
</figure>

## Troubleshooting with verbose logging

If something goes wrong during the build or startup process, `gp rebuild` will fail and print an error message. To gain more insights into the problem, you can enable detailed logging by using the `--log=info` option (`error` by default). This could be useful for understanding issues with the supervisor (workspace [initialization process](https://en.wikipedia.org/wiki/Init)) and editors/IDEs startup.

> If you encounter unexpected errors that are not related to your setup, please [send a bug report](https://github.com/gitpod-io/gitpod/issues/new/choose).

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Running with INFO level logging" src="/images/testing-changes/info_log.png">
    <figcaption>Running with INFO level logging</figcaption>
</figure>
