"use client"

import { useState } from "react"
import { DownloadIcon, Loader2Icon } from "lucide-react"
import { toast } from "sonner"

import { trackEvent } from "@/lib/events"
import { Button } from "@/components/ui/button"

export function DownloadPdfButton({ doc }: { doc: "resume" | "portfolio" }) {
  const [pending, setPending] = useState(false)

  async function handleDownload() {
    if (pending) return
    setPending(true)

    try {
      // Loaded lazily so @react-pdf/renderer stays out of the main bundle.
      const { downloadResumePdf, downloadPortfolioPdf } =
        await import("@/features/pdf/generate")
      await (doc === "resume" ? downloadResumePdf() : downloadPortfolioPdf())
      trackEvent({ name: "download_pdf", properties: { document: doc } })
    } catch (error) {
      console.error("[download-pdf]", error)
      toast.error("PDF를 만들지 못했어요. 잠시 후 다시 시도해 주세요.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Button
      type="button"
      size="sm"
      onClick={handleDownload}
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? <Loader2Icon className="animate-spin" /> : <DownloadIcon />}
      {pending ? "생성 중…" : "PDF 다운로드"}
    </Button>
  )
}
