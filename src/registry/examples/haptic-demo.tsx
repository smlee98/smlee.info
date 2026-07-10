"use client"

import { Button } from "@/components/ui/button"
import { haptic } from "@/registry/lib/haptic"

export default function HapticDemo() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 pointer-coarse:py-0">
      <Button onClick={() => haptic()}>Haptic</Button>

      <p className="text-center text-sm text-muted-foreground pointer-coarse:hidden">
        모바일 기기에서 열어보면
        <br />
        진동을 직접 느낄 수 있어요.
      </p>
    </div>
  )
}
