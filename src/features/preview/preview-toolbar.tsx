"use client"

import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { DownloadPdfButton } from "./download-pdf-button"

const TABS: { href: Route; label: string; doc: "resume" | "portfolio" }[] = [
  { href: "/resume", label: "이력서·경력기술서", doc: "resume" },
  { href: "/portfolio", label: "포트폴리오", doc: "portfolio" },
]

export function PreviewToolbar() {
  const pathname = usePathname()
  const active = TABS.find((tab) => tab.href === pathname) ?? TABS[0]

  return (
    <div className="sticky top-0 z-10 border-b border-line bg-background/80 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-[210mm] flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" />
          홈으로
        </Link>

        <nav className="flex items-center gap-1" aria-label="문서 전환">
          {TABS.map((tab) => {
            const isActive = tab.href === active.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-2.5 py-1 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto">
          <DownloadPdfButton doc={active.doc} />
        </div>
      </div>
    </div>
  )
}
