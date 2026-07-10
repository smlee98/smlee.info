import type { Registry } from "shadcn/schema"

import { components } from "./components/_registry"
import { examples } from "./examples/_registry"
import { hook } from "./hooks/_registry"
import { lib } from "./lib/_registry"

export const registry = {
  name: "smlee",
  homepage: "https://smlee.info/components",
  items: [
    ...lib,
    ...hook,
    ...components,

    // Internal use only
    ...examples,
  ],
} satisfies Registry
