"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"
import { GLYPHS } from "@/components/smlee-mark"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

/**
 * ㅇㅅㅁ 픽셀 그리드를 아이소메트릭(30°)으로 투영해 그린다.
 * chanhdai.com의 isometric 마크(Figma 수작업)와 같은 룩을,
 * `GLYPHS` 데이터에서 윗면/벽면/외곽선을 프로그램적으로 생성해 재현한 것.
 */
const STEP_X = 55.4256 // 64 * cos(30°)
const STEP_Y = 32 // 64 * sin(30°)
const EXTRUDE = 32
const PRESS = 16

// 글리프 사이 시각적 간격. 글리프마다 8x8 박스 안에서 차지하는 투영 폭이
// 다르므로(ㅇ<ㅅ<ㅁ), 그리드 간격 대신 화면 좌표에서 균등하게 띄운다.
const GAP_PX = STEP_X * 4

type Corner = [number, number]

function filled(glyph: string[], i: number, j: number) {
  if (i < 0 || j < 0 || j >= glyph.length || i >= glyph[j].length) return false
  return glyph[j][i] === "#"
}

/** 채워진 셀들의 병합 외곽선(구멍 포함)을 격자 코너 루프로 추출한다. */
function traceContours(glyph: string[]) {
  const edges = new Map<string, Corner[]>()

  const addEdge = (from: Corner, to: Corner) => {
    const key = from.join(",")
    const list = edges.get(key) ?? []
    list.push(to)
    edges.set(key, list)
  }

  for (let j = 0; j < glyph.length; j++) {
    for (let i = 0; i < glyph[j].length; i++) {
      if (!filled(glyph, i, j)) continue
      if (!filled(glyph, i, j - 1)) addEdge([i, j], [i + 1, j])
      if (!filled(glyph, i + 1, j)) addEdge([i + 1, j], [i + 1, j + 1])
      if (!filled(glyph, i, j + 1)) addEdge([i + 1, j + 1], [i, j + 1])
      if (!filled(glyph, i - 1, j)) addEdge([i, j + 1], [i, j])
    }
  }

  const loops: Corner[][] = []

  for (const startKey of [...edges.keys()]) {
    while (edges.get(startKey)?.length) {
      const loop: Corner[] = []
      let currentKey = startKey

      while (true) {
        const nexts = edges.get(currentKey)
        if (!nexts?.length) break

        const next = nexts.pop() as Corner
        loop.push(next)
        currentKey = next.join(",")
        if (currentKey === startKey) break
      }

      // 방향이 유지되는 중간 점 제거 (수평/수직 러닝 병합)
      const merged = loop.filter((pt, idx) => {
        const prev = loop[(idx - 1 + loop.length) % loop.length]
        const next = loop[(idx + 1) % loop.length]
        const sameCol = prev[0] === pt[0] && pt[0] === next[0]
        const sameRow = prev[1] === pt[1] && pt[1] === next[1]
        return !(sameCol || sameRow)
      })

      if (merged.length >= 4) loops.push(merged)
    }
  }

  return loops
}

/** 아래를 향하는 경계(벽이 보이는 곳)를 연속 구간으로 병합한다. */
function collectWallRuns(glyph: string[]) {
  type Run = { from: Corner; to: Corner }
  const runs: Run[] = []
  const size = glyph.length

  // 좌하단 벽: 왼쪽 이웃이 빈 셀 — 격자 세로선 (i, j)-(i, j+1)
  for (let i = 0; i <= size; i++) {
    let start = -1
    for (let j = 0; j <= size; j++) {
      const wall = j < size && filled(glyph, i, j) && !filled(glyph, i - 1, j)
      if (wall && start < 0) start = j
      if (!wall && start >= 0) {
        runs.push({ from: [i, start], to: [i, j] })
        start = -1
      }
    }
  }

  // 우하단 벽: 아래 이웃이 빈 셀 — 격자 가로선 (i, j+1)-(i+1, j+1)
  for (let j = 0; j < size; j++) {
    let start = -1
    for (let i = 0; i <= size; i++) {
      const wall = i < size && filled(glyph, i, j) && !filled(glyph, i, j + 1)
      if (wall && start < 0) start = i
      if (!wall && start >= 0) {
        runs.push({ from: [start, j + 1], to: [i, j + 1] })
        start = -1
      }
    }
  }

  return runs
}

// 글리프별 기하와 배치 오프셋 계산.
// 코너 합(i+j)이 화면 x를, 차(j-i)가 화면 y를 결정한다.
const placedGlyphs = (() => {
  let minJI = Infinity
  let maxJI = -Infinity

  const measured = GLYPHS.map((glyph) => {
    let minSum = Infinity
    let maxSum = -Infinity

    for (let j = 0; j < glyph.length; j++) {
      for (let i = 0; i < glyph[j].length; i++) {
        if (!filled(glyph, i, j)) continue
        minSum = Math.min(minSum, i + j)
        maxSum = Math.max(maxSum, i + j + 2)
        minJI = Math.min(minJI, j - i - 1)
        maxJI = Math.max(maxJI, j - i + 1)
      }
    }

    return { glyph, minSum, maxSum }
  })

  const offsetY = -STEP_Y * minJI

  let cursorX = 0
  const placed = measured.map(({ glyph, minSum, maxSum }) => {
    const offsetX = cursorX - STEP_X * minSum
    cursorX += STEP_X * (maxSum - minSum) + GAP_PX

    return {
      contours: traceContours(glyph),
      wallRuns: collectWallRuns(glyph),
      offsetX,
      offsetY,
    }
  })

  return {
    placed,
    width: cursorX - GAP_PX,
    height: STEP_Y * (maxJI - minJI) + EXTRUDE,
  }
})()

const VIEWBOX_WIDTH = +placedGlyphs.width.toFixed(2)
const VIEWBOX_HEIGHT = +placedGlyphs.height.toFixed(2)

type PlacedGlyph = (typeof placedGlyphs.placed)[number]

// 격자 코너 (i, j) → 화면 좌표. 글리프의 가로축은 우상향, 세로축은 우하향.
function px(g: PlacedGlyph, [i, j]: Corner) {
  return +(STEP_X * (i + j) + g.offsetX).toFixed(2)
}

function py(g: PlacedGlyph, [i, j]: Corner, dy = 0) {
  return +(STEP_Y * (j - i) + g.offsetY + dy).toFixed(2)
}

function contoursToPath(dy: number) {
  return placedGlyphs.placed
    .map((g) =>
      g.contours
        .map((loop) => {
          const [first, ...rest] = loop
          return (
            `M${px(g, first)} ${py(g, first, dy)}` +
            rest.map((pt) => `L${px(g, pt)} ${py(g, pt, dy)}`).join("") +
            "Z"
          )
        })
        .join("")
    )
    .join("")
}

function wallsToPath(dy: number) {
  return placedGlyphs.placed
    .map((g) =>
      g.wallRuns
        .map(({ from, to }) => {
          return (
            `M${px(g, from)} ${py(g, from, dy)}` +
            `L${px(g, to)} ${py(g, to, dy)}` +
            `L${px(g, to)} ${py(g, to, EXTRUDE)}` +
            `L${px(g, from)} ${py(g, from, EXTRUDE)}Z`
          )
        })
        .join("")
    )
    .join("")
}

function strokesToPath(dy: number) {
  const contour = contoursToPath(dy)

  const walls = placedGlyphs.placed
    .map((g) =>
      g.wallRuns
        .map(({ from, to }) => {
          return (
            `M${px(g, from)} ${py(g, from, dy)}L${px(g, from)} ${py(g, from, EXTRUDE)}` +
            `M${px(g, to)} ${py(g, to, dy)}L${px(g, to)} ${py(g, to, EXTRUDE)}` +
            `M${px(g, from)} ${py(g, from, EXTRUDE)}L${px(g, to)} ${py(g, to, EXTRUDE)}`
          )
        })
        .join("")
    )
    .join("")

  return contour + walls
}

const FACES_PATH = contoursToPath(0)
const WALLS_PATH = { normal: wallsToPath(0), pressed: wallsToPath(PRESS) }
const STROKES_PATH = { normal: strokesToPath(0), pressed: strokesToPath(PRESS) }

// 배경 가이드 점선: 아이소메트릭 축 방향으로 캔버스를 가로지르는 선
const GUIDE_SLOPE = STEP_Y / STEP_X
const GUIDE_LINES = [0.35, 0.5, 0.65].flatMap((t) => {
  const cx = VIEWBOX_WIDTH * t
  const cy = VIEWBOX_HEIGHT / 2
  const dx = VIEWBOX_WIDTH
  const dy = dx * GUIDE_SLOPE
  return t === 0.5
    ? [
        `M${(cx - dx).toFixed(2)} ${(cy + dy).toFixed(2)}L${(cx + dx).toFixed(2)} ${(cy - dy).toFixed(2)}`,
      ]
    : [
        `M${(cx - dx).toFixed(2)} ${(cy - dy).toFixed(2)}L${(cx + dx).toFixed(2)} ${(cy + dy).toFixed(2)}`,
      ]
})

export function SmLeeMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `smlee-face-pattern-${id}`,
    faceFill: `smlee-face-fill-${id}`,
    stroke: `smlee-stroke-${id}`,
    radialGradient: `smlee-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, VIEWBOX_WIDTH]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, VIEWBOX_HEIGHT]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              transform: "translate(0px, 0px)",
            },
            pressed: {
              transform: `translate(0px, ${PRESS}px)`,
            },
          }}
          transition={transition}
        >
          <path d={FACES_PATH} fillRule="evenodd" clipRule="evenodd" />
        </motion.g>

        <motion.path
          id={ids.stroke}
          variants={{
            normal: { d: STROKES_PATH.normal },
            pressed: { d: STROKES_PATH.pressed },
          }}
          transition={transition}
        />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r={VIEWBOX_WIDTH * 0.36}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        {GUIDE_LINES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      <motion.path
        className="fill-background"
        fillRule="evenodd"
        clipRule="evenodd"
        variants={{
          normal: { d: WALLS_PATH.normal },
          pressed: { d: WALLS_PATH.pressed },
        }}
        transition={transition}
      />

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      <use href={`#${ids.stroke}`} stroke="var(--stroke)" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} />
    </motion.svg>
  )
}
