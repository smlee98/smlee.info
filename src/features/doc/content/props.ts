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
   * 모바일 기기에서 햅틱 피드백을 일으켜요.
   * Android와 최신 브라우저에서는 Vibration API를, iOS에서는 체크박스 트릭을 사용해요.
   *
   * @param pattern - 진동 시간(ms) 또는 진동 패턴.
   * 커스텀 패턴은 Android에서만 동작하고, iOS는 고정된 피드백을 사용해요.
   * [Vibration API](https://developer.mozilla.org/docs/Web/API/Vibration_API) 참고
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
