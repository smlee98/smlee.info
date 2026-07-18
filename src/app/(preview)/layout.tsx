import "@/styles/preview.css"

import { PreviewToolbar } from "@/features/preview/preview-toolbar"

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="preview-root min-h-screen bg-zinc-100 dark:bg-zinc-900 print:bg-white">
      <PreviewToolbar />
      <div className="px-4 py-8 print:p-0">{children}</div>
    </div>
  )
}
