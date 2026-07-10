import type { ComponentProps } from "react"

import type { Button } from "@/components/base/ui/button"
import type { CopyButton } from "@/registry/components/copy-button"
import type { GitHubContributions } from "@/registry/components/github-contributions"
import type { MiddleTruncation } from "@/registry/components/middle-truncation/middle-truncation"

export type CopyButtonProps = Omit<
  ComponentProps<typeof CopyButton>,
  keyof ComponentProps<typeof Button>
>

export type HapticProps = {
  /**
   * Trigger haptic feedback on mobile devices.
   * Uses Vibration API on Android/modern browsers, and iOS checkbox trick on iOS.
   *
   * @param pattern - Vibration duration (ms) or pattern.
   * Custom patterns only work on Android devices. iOS uses fixed feedback.
   * See [Vibration API](https://developer.mozilla.org/docs/Web/API/Vibration_API)
   *
   * @example
   *
   * ```tsx
   * import { haptic } from "@/lib/haptic"
   *
   * <Button onClick={() => haptic()}>Haptic</Button>
   * ```
   */
  haptic: (pattern?: number | number[]) => void
}

export type MiddleTruncationProps = Omit<
  ComponentProps<typeof MiddleTruncation>,
  keyof Omit<ComponentProps<"span">, "children" | "className">
>

export type GitHubContributionsProps = ComponentProps<
  typeof GitHubContributions
>
