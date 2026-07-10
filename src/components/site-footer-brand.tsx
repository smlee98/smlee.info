"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import {
  MARK_PATH,
  MARK_VIEWBOX_HEIGHT,
  MARK_VIEWBOX_WIDTH,
} from "@/components/smlee-mark"

const VIEWBOX_WIDTH = 1410
const VIEWBOX_HEIGHT = 258

const MARK_OFFSET_X = (VIEWBOX_WIDTH - MARK_VIEWBOX_WIDTH) / 2
const MARK_OFFSET_Y = (VIEWBOX_HEIGHT - MARK_VIEWBOX_HEIGHT) / 2

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={`translate(${MARK_OFFSET_X}, ${MARK_OFFSET_Y})`}>
              <path d={MARK_PATH} fill="url(#footer-logotype-gradient)" />
              <path
                className="stroke-foreground/10"
                d={MARK_PATH}
                strokeWidth="2"
              />
            </g>
            <defs>
              <motion.linearGradient
                id="footer-logotype-gradient"
                x1={gradientX1}
                y1="1"
                x2={VIEWBOX_WIDTH / 2}
                y2={VIEWBOX_HEIGHT - 1}
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
