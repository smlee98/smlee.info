import { IBM_Plex_Serif } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

const fontSans = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  weight: "45 920",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-pretendard",
})

// Monoplex KR (IBM Plex Mono + Korean) — https://github.com/y-kim/monoplex
const fontMono = localFont({
  src: [
    {
      path: "../assets/fonts/MonoplexKR-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/MonoplexKR-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/MonoplexKR-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/MonoplexKR-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["monospace"],
  variable: "--font-monoplex-kr",
})

const fontSerif = IBM_Plex_Serif({
  weight: ["400"],
  display: "swap",
  fallback: ["serif"],
  variable: "--font-serif",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  "[--font-sans:var(--font-pretendard)]",
  "[--font-mono:var(--font-monoplex-kr)]"
)
