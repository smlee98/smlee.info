import { getRegistryItemUrl } from "@/utils/registry"
import type { Registry } from "shadcn/schema"

export const examples: Registry["items"] = [
  {
    name: "text-flip-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("text-flip")],
    files: [
      {
        path: "examples/text-flip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "copy-button-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("copy-button")],
    files: [
      {
        path: "examples/copy-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "haptic-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("haptic")],
    files: [
      {
        path: "examples/haptic-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "middle-truncation-demo",
    type: "registry:example",
    registryDependencies: [
      "resizable",
      getRegistryItemUrl("middle-truncation"),
    ],
    files: [
      {
        path: "examples/middle-truncation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "github-contributions-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("github-contributions")],
    files: [
      {
        path: "examples/github-contributions-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "github-contributions-default-theme",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("github-contributions")],
    files: [
      {
        path: "examples/github-contributions-default-theme.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "github-contributions-winter-theme",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("github-contributions")],
    files: [
      {
        path: "examples/github-contributions-winter-theme.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "github-contributions-halloween-theme",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("github-contributions")],
    files: [
      {
        path: "examples/github-contributions-halloween-theme.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "icon-swap-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("icon-swap")],
    files: [
      {
        path: "examples/icon-swap-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dot-grid-spotlight-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("dot-grid-spotlight")],
    files: [
      {
        path: "examples/dot-grid-spotlight-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chevrons-up-down-icon-demo",
    type: "registry:example",
    registryDependencies: [getRegistryItemUrl("chevrons-up-down-icon")],
    files: [
      {
        path: "examples/chevrons-up-down-icon-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
