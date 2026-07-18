import dynamic from "next/dynamic"

import { MOBILE_NAV } from "@/config/site"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/base/ui/separator"
import { getAllDocs } from "@/features/doc/data/documents"
import type { DocPreview } from "@/features/doc/types/document"

const CommandMenu = dynamic(() => import("@/components/command-menu"))
const NavMobile = dynamic(() => import("@/components/nav-mobile"))

export function SiteBottomNav() {
  const docs = getAllDocs()

  // Minimize data serialized to client component - only send necessary fields
  const docPreviews: DocPreview[] = docs.map((doc) => ({
    slug: doc.slug,
    title: doc.metadata.title,
    category: doc.metadata.category,
  }))

  return (
    <div
      className={cn(
        "fixed! inset-x-2 bottom-[calc(--spacing(2)+env(safe-area-inset-bottom,0))] z-50 flex items-center rounded-xl bg-popover py-1 pr-1 pl-2.5 shadow-md ring ring-foreground/10 sm:hidden dark:ring-foreground/20",
        "*:data-[slot=command-menu-trigger]:min-w-20 *:data-[slot=command-menu-trigger]:flex-1 *:data-[slot=command-menu-trigger]:justify-start *:data-[slot=command-menu-trigger]:gap-2 *:data-[slot=command-menu-trigger]:rounded-none *:data-[slot=command-menu-trigger]:border-none *:data-[slot=command-menu-trigger]:bg-transparent *:data-[slot=command-menu-trigger]:px-0 *:data-[slot=command-menu-trigger]:hover:bg-transparent *:data-[slot=command-menu-trigger]:active:scale-none"
      )}
    >
      <CommandMenu docs={docPreviews} />
      <Separator
        orientation="vertical"
        className="mr-1 ml-2.5 data-vertical:h-6 data-vertical:self-center"
      />
      <NavMobile items={MOBILE_NAV} />
    </div>
  )
}
