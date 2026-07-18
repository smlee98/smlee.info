import type { Route } from "next"
import Link from "next/link"
import { FileTextIcon, FolderOpenIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const ACTIONS: { href: Route; label: string; icon: React.ReactElement }[] = [
  {
    href: "/resume",
    label: "이력서 · 경력기술서",
    icon: <FileTextIcon />,
  },
  {
    href: "/portfolio",
    label: "포트폴리오",
    icon: <FolderOpenIcon />,
  },
]

export function DownloadActions() {
  return (
    <div className="flex flex-col gap-2 border-x border-line p-3 sm:flex-row">
      {ACTIONS.map((action) => (
        <Button
          key={action.href}
          asChild
          variant="outline"
          size="lg"
          className="w-full justify-start sm:w-auto sm:flex-1"
        >
          <Link href={action.href} target="_blank" rel="noopener">
            {action.icon}
            <span>{action.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  )
}
