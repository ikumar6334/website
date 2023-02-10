<script lang="ts">
  import type { Card as CardType } from "$lib/types/card";
  import Card from "./card/card.svelte";
  import Section from "./section.svelte";
  import LinkButton from "./ui-library/link-button/link-button.svelte";

  export let cards: CardType[];
  export let headingLevel: "h5" | "h4" | "h3" | "h2";
  export let iconClassNames: string = "h-8 w-8 text-initial ml-2";
</script>

<Section>
  <div class="row">
    <h3 class="text-center text-3xl sm:text-5xl	font-bold">
      Gitpod makes teams productive
    </h3>
    <p
      class="text-center text-lg sm:text-2xl mt-xx-small mb-x-small mx-auto max-w-4xl"
    >
      Learn <a href="/customers/factorial"
        >how Factorial develops software with Gitpod</a
      >.
    </p>
  </div>
  <div
    class="inline-flex max-w-8xl mt-small justify-items-start flex-wrap sm:flex-nowrap"
  >
    {#each cards as card}
      <Card
        textAlign="left"
        {card}
        class="sm:mx-macro mb-micro justify-start sm:w-2/3"
        {iconClassNames}
        {headingLevel}
      />
    {/each}
  </div>
  <div class="text-center mt-[32px] text-2xl">
    Want to see a custom demo or get help finding the right solution?
  </div>
  <div class="text-center m-auto mb-small mt-x-small">
    <LinkButton
      href="/contact/sales?subject=Enterprise"
      class="items-center"
      variant="gray">Contact sales</LinkButton
    >
  </div>
</Section>
