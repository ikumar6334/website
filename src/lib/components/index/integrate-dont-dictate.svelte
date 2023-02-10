<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import Section from "../section.svelte";
  let clazz = "";
  export { clazz as class };
</script>

<Card size="medium" class="m-auto shadow-highlight w-11/12">
  <Section class="text-center {clazz}" {...$$restProps}>
    <h2 class="text-[32px] text-left ml-4 sm:ml-[72px]">
      Integrate, don't dictate
    </h2>
    <p class="text-left text-2xl ml-4 sm:ml-[72px] mb-8">
      Control every detail of your developer experience.
    </p>
    <div class="sm:flex mb-6">
      <div class="ml-4 sm:ml-[72px] grid grid-rows-2 grid-flow-col">
        <!-- Git Provider options -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-light-black py-micro pl-xx-small pr-medium text-p-small rounded-2xl border border-transparent w-64 sm:w-80"
        >
          <p class="text-lg text-important font-bold">Connect Git provider</p>

          <div class="flex justify-left items-center mt-6 gap-x-3.5 mb-4">
            <img
              src="/svg/gitlab.svg"
              alt="GitLab"
              class="h-11 w-11 mr-micro"
            />
            <img
              src="/svg/github.svg"
              alt="GitHub"
              class="h-11 w-11 mr-micro"
            />
            <img
              src="/svg/bitbucket.svg"
              alt="Bitbucket"
              class="h-11 w-11 mr-micro"
            />
          </div>
        </div>

        <!-- Cloud Services Options -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-light-black py-micro pl-xx-small pr-medium text-p-small rounded-2xl border border-transparent w-64 sm:w-80"
        >
          <p class="text-lg text-important font-bold">
            Run in your cloud or ours
          </p>

          <div class="flex flex-wrap justify-left items-center mt-6 gap-x-3.5">
            <img
              src="/svg/brands/aws.svg"
              alt="AWS"
              class="h-12 w-12 mr-micro"
            />
            <img
              src="/svg/brands/gcp.svg"
              alt="GCP"
              class="h-11 w-11 mr-micro"
            />
          </div>
        </div>
      </div>
      <div class="ml-4 sm:ml-4 grid grid-rows-1">
        <!-- long IDE Section in center -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-light-black py-micro pl-xx-small pr-medium text-p-small rounded-2xl border border-transparent w-64 sm:w-96"
        >
          <p class="text-lg text-important font-bold">
            Choose IDEs and editors
          </p>

          <div
            class="justify-left items-center mt-6 grid grid-cols-4 gap-x-3 gap-y-3 sm:gap-x-6 sm:gap-y-4"
          >
            <img
              src="/svg/index/vscode.svg"
              alt="VS Code"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/goland.svg"
              alt="GoLand"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/intellij.svg"
              alt="IntelliJ"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/pycharm.svg"
              alt="PyCharm"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/phpstorm.svg"
              alt="PhpStorm"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/webstorm.svg"
              alt="WebStorm"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/clion.svg"
              alt="CLion"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/rubymine.svg"
              alt="RubyMine"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/rider.svg"
              alt="Rider"
              class="h-14 w-14 mr-micro"
            />
            <img
              src="/svg/index/vim.svg"
              alt="Vim"
              class="h-12 w-12 mr-micro"
            />
          </div>
        </div>
      </div>
      <div class="ml-4 sm:ml-4 grid grid-rows-2 grid-flow-col">
        <!-- Customize Themes & Extensions  -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-light-black py-micro pl-xx-small pr-medium text-p-small rounded-2xl border border-transparent w-64 sm:w-96"
        >
          <p class="text-lg text-important font-bold">
            Customize themes & extensions
          </p>

          <div
            class="flex flex-wrap justify-left items-center mt-6 gap-y-2 sm:gap-y-0 sm:gap-x-3.5"
          >
            <img
              src="/svg/brands/prettier.png"
              alt="Prettier"
              class="h-11 w-11 mr-micro"
            />
            <img
              src="/svg/brands/copilot.png"
              alt="GitHub Copilot"
              class="h-11 w-11 mr-micro"
            />
            <img
              src="/svg/brands/gitlens.png"
              alt="GitLens"
              class="h-11 w-11 mr-micro"
            />
            <img
              src="/svg/icons/more-options.svg"
              alt="More options"
              class="h-11 w-11 mr-micro"
            />
          </div>
        </div>

        <!-- Connect any dev resource -->
        <div
          class="mt-4 text-left items-left bg-sand-light dark:bg-light-black py-micro pl-xx-small pr-medium text-p-small rounded-2xl border border-transparent w-64 sm:w-96"
        >
          <p class="text-lg text-important font-bold">
            Connect any dev resource
          </p>

          <div
            class="flex flex-wrap justify-left items-center mt-6 gap-y-2 sm:gap-y-0 sm:gap-x-3.5"
          >
            <img
              src="/svg/brands/redis.svg"
              alt="Redis"
              class="h-11 w-11 mr-micro"
            />
            <img
              src="/svg/brands/aws-s3.png"
              alt="AWS S3"
              class="h-11 w-11 mr-micro"
            />
            <img
              src="/svg/brands/mongodb.svg"
              alt="MongoDB"
              class="h-11 w-11 mr-micro"
            />
            <img
              src="/svg/icons/more-options.svg"
              alt="More options"
              class="h-11 w-11 mr-micro"
            />
          </div>
        </div>
      </div>
    </div></Section
  >
</Card>
