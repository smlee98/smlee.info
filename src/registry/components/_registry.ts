import { getRegistryItemUrl } from "@/utils/registry"
import type { Registry } from "shadcn/schema"

export const components: Registry["items"] = [
  {
    name: "text-flip",
    type: "registry:component",
    title: "Text Flip",
    description:
      "Animated text that cycles through items with a smooth flip transition.",
    dependencies: ["motion"],
    files: [
      {
        path: "components/text-flip/text-flip.tsx",
        type: "registry:component",
        target: "@components/text-flip.tsx",
      },
    ],
    categories: ["text-effects"],
    docs: "https://smlee.info/components/text-flip",
  },
  {
    name: "chevrons-up-down-icon",
    type: "registry:component",
    description:
      "Animated chevrons icon that morphs between up and down directions.",
    dependencies: ["motion"],
    files: [
      {
        path: "components/chevrons-up-down-icon/chevrons-up-down-icon.tsx",
        type: "registry:component",
        target: "@components/chevrons-up-down-icon.tsx",
      },
    ],
    categories: ["effects"],
    docs: "https://smlee.info/components/chevrons-up-down-icon",
  },
  {
    name: "copy-button",
    type: "registry:component",
    title: "Copy Button",
    description:
      "Copy text to clipboard with visual, haptic, and audio feedback.",
    dependencies: [
      "motion",
      "@rexa-developer/tiks",
      "web-haptics",
      "lucide-react",
    ],
    registryDependencies: ["button", getRegistryItemUrl("icon-swap")],
    files: [
      {
        path: "components/copy-button/copy-button.tsx",
        type: "registry:component",
        target: "@components/copy-button.tsx",
      },
      {
        path: "src/hooks/use-copy-to-clipboard.ts",
        type: "registry:hook",
        target: "@hooks/use-copy-to-clipboard.ts",
      },
    ],
    categories: ["utilities"],
    docs: "https://smlee.info/components/copy-button",
  },
  {
    name: "middle-truncation",
    type: "registry:component",
    title: "Middle Truncation",
    description: "Truncate text in the middle while preserving start and end.",
    files: [
      {
        path: "components/middle-truncation/middle-truncation.tsx",
        type: "registry:component",
        target: "@components/middle-truncation.tsx",
      },
    ],
    categories: ["typography"],
    docs: "https://smlee.info/components/middle-truncation",
  },
  {
    name: "contribution-graph",
    type: "registry:component",
    title: "Contribution Graph",
    description:
      "A GitHub-style contribution graph component that displays activity levels over time.",
    dependencies: ["date-fns"],
    files: [
      {
        path: "components/contribution-graph/contribution-graph.tsx",
        type: "registry:component",
        target: "@components/contribution-graph.tsx",
      },
    ],
    categories: ["data-display"],
    docs: "https://www.kibo-ui.com/components/contribution-graph",
  },
  {
    name: "github-contributions",
    type: "registry:component",
    title: "GitHub Contributions",
    description:
      "Visualize year-long GitHub contribution activity with daily counts, tooltips, and a profile link.",
    dependencies: ["date-fns"],
    registryDependencies: [
      "tooltip",
      "spinner",
      getRegistryItemUrl("contribution-graph"),
    ],
    files: [
      {
        path: "components/github-contributions/github-contributions.tsx",
        type: "registry:component",
        target: "@components/github-contributions.tsx",
      },
      {
        path: "components/github-contributions/lib/get-cached-contributions.ts",
        type: "registry:lib",
        target: "@lib/get-cached-contributions.ts",
      },
    ],
    css: {
      "@utility link-underline": {
        "@apply underline decoration-current/30 decoration-1 underline-offset-3 transition-colors hover:decoration-current":
          {},
      },
    },
    categories: ["data-display"],
    docs: "https://smlee.info/components/github-contributions",
  },
  {
    name: "icon-swap",
    type: "registry:component",
    title: "Icon Swap",
    description: "Animate icon swaps with scale, blur, and fade transitions.",
    dependencies: ["motion"],
    files: [
      {
        path: "components/icon-swap/icon-swap.tsx",
        type: "registry:component",
        target: "@components/icon-swap.tsx",
      },
    ],
    categories: ["effects"],
    docs: "https://smlee.info/components/icon-swap",
  },
  {
    name: "dot-grid-spotlight",
    type: "registry:component",
    title: "Dot Grid Spotlight",
    description:
      "Interactive dot grid with a cursor-tracking spotlight effect.",
    files: [
      {
        path: "components/dot-grid-spotlight/dot-grid-spotlight.tsx",
        type: "registry:component",
        target: "@components/dot-grid-spotlight.tsx",
      },
    ],
    categories: ["effects"],
    docs: "https://smlee.info/components/dot-grid-spotlight",
  },
]
