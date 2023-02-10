<script lang="ts">
  import type { Ide } from "$lib/types/ide";
  import { createEventDispatcher } from "svelte";
  export let ides: Ide[];
  export let activeByDefaultName: string;
  export let ideType: string;
  export let activeIdeName: string = "";
  export let isInversed: boolean = false;
  export let checked: boolean;
  export let id: string;

  const dispatch = createEventDispatcher();

  const hasNoScreenshots = (name: string) =>
    ides.find((ide) => ide.name === name).screenshots === undefined;

  const handleMouseEnter = (e: MouseEvent, name: string) => {
    const target = e.target as HTMLElement;
    target.parentNode.childNodes.forEach((node: HTMLElement) => {
      const iconBox = node.childNodes[0] as HTMLElement;
      if (name !== iconBox.dataset.name) {
        iconBox.classList.add("grayed");
      }
    });
    const [iconDiv, statusSpan]: HTMLElement[] = Array.from(
      target.children
    ) as HTMLElement[];

    iconDiv.classList.remove("grayed");

    if (statusSpan) {
      statusSpan.style.display = "flex";
    }

    if (!hasNoScreenshots(name)) {
      dispatch("message", {
        text: name,
      });
    }
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const [, statusSpan]: HTMLElement[] = Array.from(
      target.children
    ) as HTMLElement[];

    if (statusSpan) {
      statusSpan.style.display = "none";
    }
  };
</script>

<style lang="postcss">
  button {
    @apply outline-none;
  }

  .icon-box {
    height: 71px;
    width: 71px;

    @media (max-width: 1140px) {
      height: 60px;
      width: 60px;
    }

    @media (max-width: 520px) {
      height: 45px;
      width: 45px;
      border-radius: 10px;
    }
  }

  .icon {
    height: 42px;
    width: 42px;

    @media (max-width: 1140px) {
      height: 36px;
      width: 36px;
    }

    @media (max-width: 520px) {
      height: 26px;
      width: 26px;
    }
  }

  .grayed {
    @apply shadow-lg hover:bg-white;
  }

  .toggle-ide-type {
    @apply transition-transform origin-left duration-500 hover:text-important focus:text-important ease-in-out;
  }

  .default-ide-type {
    @apply shadow-lg focus:bg-white dark:focus:bg-black;
  }
</style>

<div class="flex mt-14">
  <div
    class="inline-flex justify-start space-x-2"
    class:checked
    class:inversed={isInversed}
    class:toggle-ide-type={!checked}
  >
    <label class="flex-row items-center justify-center" for={id}>
      <div
        class="shadow-highlight flex-col icon-box relative flex items-center justify-center border-solid bg-card hover:bg-white dark:hover:bg-black focus:bg-white dark:group-focus:bg-black rounded-lg lgx:rounded-2xl transition duration-200 linear"
        class:default-ide-type={checked}
      >
        <img src="/svg/index/desktop.svg" alt="Desktop" class="icon" />
        <div
          class="text-[10px] sm:text-xs font-semibold text-black dark:text-important group-focus:bg-white dark:group-focus:bg-black"
        >
          Desktop
        </div>
      </div>
    </label>
    <div class="relative flex items-center cursor-pointer">
      <input
        {id}
        type="checkbox"
        on:change
        class="h-full w-full toggle"
        data-analytics={`{"label":"` +
          "Desktop" +
          ` <> ` +
          "Browser" +
          ` Toggle"}`}
      />
    </div>
    <label class="flex-row items-center justify-center" for={id}>
      <div
        class="shadow-highlight flex-col icon-box relative flex items-center justify-center border-solid bg-card hover:bg-white dark:hover:bg-black focus:bg-white dark:group-focus:bg-black rounded-lg lgx:rounded-2xl transition duration-200 linear"
        class:default-ide-type={!checked}
      >
        <img src="/svg/index/browser.svg" alt="Browser" class="icon" />
        <div
          class="text-[10px] sm:text-xs font-semibold text-black dark:text-important"
        >
          Browser
        </div>
      </div>
    </label>
  </div>

  <div
    class="grid grid-cols-3 space-y-2 sm:flex sm:flex-row sm:space-x-2 sm:space-y-0 ml-[72px] items-center w-full h-full "
  >
    {#each ides as { name, availibility, label, icon, screenshots }}
      <button
        class="block relative cursor-pointer group justify-start"
        on:mouseenter={(e) => {
          handleMouseEnter(e, name);
        }}
        on:mouseleave={(e) => {
          handleMouseLeave(e);
        }}
        class:hidden={ideType === "browser" && !screenshots.browser}
      >
        <div
          class="shadow-highlight icon-box relative flex items-center justify-center border-solid bg-card group-hover:bg-white dark:group-hover:bg-black group-focus:bg-white dark:group-focus:bg-black rounded-lg md:rounded-xl lgx:rounded-2xl transition duration-200 linear"
          class:grayed={!(activeByDefaultName === name) &&
            !(activeIdeName === "vscode")}
          data-name={name}
        >
          <img src="/svg/index/{icon}" alt={label} class="icon" />
        </div>
        {#if availibility}
          <div
            class="hidden absolute -top-3 md:-top-3 left-5 -translate-x-1/2 md:transform-none items-center justify-center h-4 w-10 sm:h-5 sm:w-14 text-xs font-semibold text-black rounded-md sm:rounded-lg shadow-light"
            class:bg-salmon={availibility === "soon"}
            class:bg-tertiary={availibility === "beta"}
          >
            {availibility.charAt(0).toUpperCase() + availibility.slice(1)}
          </div>
        {/if}
      </button>
    {/each}
  </div>
</div>
