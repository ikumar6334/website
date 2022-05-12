import developLikeSvelte from "$lib/components/svgs/customers/develop-like.svelte";
import redwoodjsSvelte from "$lib/components/svgs/customers/redwoodjs.svelte";
import sharesSvelte from "$lib/components/svgs/customers/shares.svelte";
import vizlibSvelte from "$lib/components/svgs/customers/vizlib.svelte";
import type { Feature } from "$lib/types/feature.type";
import type { Quote } from "$lib/types/quote.type";

export const benefits = [
  {
    title: "5h",
    text: "average weekly<br/>time saved per engineer",
  },
  {
    title: "4x",
    text: "faster code<br/>contribution of new hires",
  },
  {
    title: "5x",
    text: 'revenue growth compared to companies<br/>with low dev experience & velocity [<a href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/developer-velocity-how-software-excellence-fuels-business-performance" target="_blank">1</a>]',
  },
];

export const quotes: Quote[] = [
  {
    text: "Gitpod has been instrumental to our ability to scale so quickly",
    author: "François Ruty",
    jobTitle: "CTO at Shares.io",
    companyLogo: sharesSvelte,
    img: {
      src: "/images/customers/shares-io/quote.png",
      alt: "Shares.io",
    },
    link: {
      href: "/customers/shares-io",
      text: "View customer story",
    },
  },
  {
    text: "Gitpod will become the default way of developing. Local development is just not an option anymore.",
    author: "Konrad Mattheis",
    jobTitle: "CTO at Vizlib",
    companyLogo: vizlibSvelte,
    img: {
      src: "/images/customers/vizlib/quote.png",
      alt: "Vizlib",
    },
    link: {
      href: "/customers/vizlib",
      text: "View customer story",
    },
  },
  {
    text: "Gitpod totally changed the development velocity for RedwoodJS—it removed any issues related to configurations of dev environments and made it incredibly easy to contribute.",
    author: "Tom Preston-Werner",
    jobTitle: "Founder of GitHub & Redwood, former CEO of GitHub",
    companyLogo: redwoodjsSvelte,
    img: {
      src: "/images/customers/redwoodjs/quote.png",
      alt: "Shares.io",
    },
    link: {
      href: "/customers/redwoodjs",
      text: "View customer story",
    },
  },
];

export const developFeature: Feature = {
  title: "Develop like Google, Facebook or&nbsp;Shopify",
  paragraph:
    "What big tech companies are trying to build internally, Gitpod is bringing to the rest of the world: container-based development in the&nbsp;cloud.",
  previewComponent: developLikeSvelte,
};
