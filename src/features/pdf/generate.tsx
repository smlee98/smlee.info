import {
  decodeEmail,
  decodePhoneNumber,
  formatPhoneNumber,
} from "@/utils/string"
import { urlToName } from "@/utils/url"
import { pdf } from "@react-pdf/renderer"

import { USER } from "@/features/portfolio/data/user"

import {
  collectPreviewSources,
  PortfolioDocument,
  type PreviewImageMap,
} from "./portfolio-document"
import { ResumeDocument } from "./resume-document"

/**
 * This module statically imports `@react-pdf/renderer`, so it must only ever be
 * loaded via a dynamic `import()` from a click handler — that keeps the heavy
 * renderer out of the main bundle and off the server.
 */

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

/**
 * Decodes an image to a JPEG data URI via canvas. react-pdf only accepts
 * PNG/JPEG, and the portfolio previews are WebP; the browser decodes WebP
 * natively and canvas re-encodes it. JPEG (over PNG) keeps the exported file
 * small — these are screenshots, so the quality loss is invisible. Same-origin
 * sources keep the canvas untainted. Returns null if the image fails to load.
 */
function imageToJpegDataUrl(src: string): Promise<string | null> {
  return new Promise((resolve) => {
    const image = new window.Image()
    image.crossOrigin = "anonymous"
    image.onload = () => {
      // Previews render as small grid thumbnails; cap the width so the exported
      // file stays light while remaining crisp at print resolution.
      const MAX_WIDTH = 1100
      const scale = Math.min(1, MAX_WIDTH / image.naturalWidth)
      const canvas = document.createElement("canvas")
      canvas.width = Math.round(image.naturalWidth * scale)
      canvas.height = Math.round(image.naturalHeight * scale)
      const context = canvas.getContext("2d")
      if (!context) return resolve(null)
      // JPEG has no alpha channel; paint a white backdrop first.
      context.fillStyle = "#ffffff"
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      try {
        resolve(canvas.toDataURL("image/jpeg", 0.82))
      } catch {
        resolve(null)
      }
    }
    image.onerror = () => resolve(null)
    image.src = src
  })
}

export async function downloadResumePdf() {
  const blob = await pdf(
    <ResumeDocument
      email={decodeEmail(USER.emailB64)}
      phone={formatPhoneNumber(decodePhoneNumber(USER.phoneNumberB64))}
      website={urlToName(USER.website)}
    />
  ).toBlob()

  triggerDownload(blob, `${USER.displayName}_이력서_경력기술서.pdf`)
}

export async function downloadPortfolioPdf() {
  const sources = collectPreviewSources()
  const resolved = await Promise.all(
    sources.map(async (src) => [src, await imageToJpegDataUrl(src)] as const)
  )

  const images: PreviewImageMap = {}
  for (const [src, dataUrl] of resolved) {
    if (dataUrl) images[src] = dataUrl
  }

  const blob = await pdf(<PortfolioDocument images={images} />).toBlob()
  triggerDownload(blob, `${USER.displayName}_포트폴리오.pdf`)
}
