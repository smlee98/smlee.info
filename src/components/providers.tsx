"use client"

import { ProgressProvider } from "@bprogress/next/app"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider as RadixTooltipProvider } from "@/components/ui/tooltip"
import { TooltipProvider as BaseTooltipProvider } from "@/components/base/ui/tooltip"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="system"
        attribute="class"
        // Same trick as InlineScript: keep the theme script executable in the
        // server HTML but inert on client renders so React doesn't warn.
        scriptProps={{
          type:
            typeof window === "undefined" ? "text/javascript" : "text/plain",
        }}
      >
        <ProgressProvider
          color="var(--foreground)"
          height="2px"
          delay={500}
          options={{ showSpinner: false }}
        >
          <BaseTooltipProvider>
            <RadixTooltipProvider>{children}</RadixTooltipProvider>
          </BaseTooltipProvider>

          <KeyboardShortcuts />
        </ProgressProvider>

        <Toaster position="top-center" />
      </ThemeProvider>
    </JotaiProvider>
  )
}
