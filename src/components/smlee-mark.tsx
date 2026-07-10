const CELL = 32
const GLYPH_COLS = 8
const GLYPH_ROWS = 8
const GLYPH_GAP = 96

/**
 * 이승민의 초성 ㅇㅅㅁ(○∧□)을 8x8 픽셀 그리드로 표현한 글리프.
 * `#`이 채워진 셀이며, 셀 하나는 32px 블록으로 렌더링된다.
 */
export const GLYPHS: string[][] = [
  // ㅇ
  [
    "..####..",
    ".#....#.",
    "#......#",
    "#......#",
    "#......#",
    "#......#",
    ".#....#.",
    "..####..",
  ],
  // ㅅ
  [
    "...##...",
    "...##...",
    "..#..#..",
    "..#..#..",
    ".#....#.",
    ".#....#.",
    "#......#",
    "#......#",
  ],
  // ㅁ
  [
    "########",
    "#......#",
    "#......#",
    "#......#",
    "#......#",
    "#......#",
    "#......#",
    "########",
  ],
]

function glyphToPath(glyph: string[], offsetX: number) {
  let d = ""

  glyph.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      if (row[x] !== "#") {
        x += 1
        continue
      }

      let run = 0
      while (row[x + run] === "#") run += 1

      d += `M${offsetX + x * CELL} ${y * CELL}h${run * CELL}v${CELL}h${-run * CELL}z`
      x += run
    }
  })

  return d
}

export const MARK_VIEWBOX_WIDTH =
  GLYPHS.length * GLYPH_COLS * CELL + (GLYPHS.length - 1) * GLYPH_GAP
export const MARK_VIEWBOX_HEIGHT = GLYPH_ROWS * CELL

export const MARK_PATH = GLYPHS.map((glyph, i) =>
  glyphToPath(glyph, i * (GLYPH_COLS * CELL + GLYPH_GAP))
).join("")

export function SmLeeMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={`0 0 ${MARK_VIEWBOX_WIDTH} ${MARK_VIEWBOX_HEIGHT}`}
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d={MARK_PATH} />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ${MARK_VIEWBOX_WIDTH} ${MARK_VIEWBOX_HEIGHT}"><path fill="currentColor" d="${MARK_PATH}"/></svg>`
}

export function SmLeeWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 720 256"
      {...props}
    >
      <text
        x="0"
        y="50%"
        dy="0.36em"
        fill="currentColor"
        fontFamily="var(--font-mono), monospace"
        fontWeight="600"
        fontSize="160"
        letterSpacing="-6"
      >
        smlee.info
      </text>
    </svg>
  )
}
