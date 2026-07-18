import { Font } from "@react-pdf/renderer"

/**
 * Registers Wanted Sans (Korean-capable) with real weights so the PDFs use a
 * light body (Regular/400) with heavier headings, instead of a single SemiBold
 * face. Files are served from `/public/fonts` so react-pdf can fetch them by
 * URL in the browser. Registration is idempotent.
 */
let registered = false

export function registerPdfFonts() {
  if (registered) return

  Font.register({
    family: "WantedSans",
    fonts: [
      { src: "/fonts/WantedSans-Regular.ttf", fontWeight: 400 },
      { src: "/fonts/WantedSans-Medium.ttf", fontWeight: 500 },
      { src: "/fonts/WantedSans-SemiBold.ttf", fontWeight: 600 },
      { src: "/fonts/WantedSans-Bold.ttf", fontWeight: 700 },
    ],
  })

  // Korean doesn't use latin-style hyphenation; keep long tokens intact.
  Font.registerHyphenationCallback((word) => [word])

  registered = true
}
