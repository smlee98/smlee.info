import { Link, Text, View } from "@react-pdf/renderer"

import { styles } from "./styles"

/**
 * Minimal Markdown renderer for react-pdf. The portfolio data only uses
 * paragraphs, `- ` bullet lists, and inline `[text](url)` links, so this
 * intentionally handles just those — anything else renders as plain text.
 */

type InlineSegment = { text: string; href?: string }

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g

function parseInline(text: string): InlineSegment[] {
  const segments: InlineSegment[] = []
  let lastIndex = 0

  for (const match of text.matchAll(LINK_RE)) {
    const index = match.index ?? 0
    if (index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, index) })
    }
    segments.push({ text: match[1], href: match[2] })
    lastIndex = index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex) })
  }

  return segments.length ? segments : [{ text }]
}

function InlineText({ segments }: { segments: InlineSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.href ? (
          <Link key={index} src={segment.href} style={styles.link}>
            {segment.text}
          </Link>
        ) : (
          <Text key={index}>{segment.text}</Text>
        )
      )}
    </>
  )
}

type Block =
  { type: "paragraph"; text: string } | { type: "list"; items: string[] }

function parseBlocks(markdown: string): Block[] {
  const blocks: Block[] = []
  const paragraphs = markdown.trim().split(/\n{2,}/)

  for (const paragraph of paragraphs) {
    const lines = paragraph.split("\n")
    const isList = lines.every((line) => /^\s*-\s+/.test(line))

    if (isList) {
      blocks.push({
        type: "list",
        items: lines.map((line) => line.replace(/^\s*-\s+/, "").trim()),
      })
    } else {
      blocks.push({ type: "paragraph", text: paragraph.replace(/\n/g, " ") })
    }
  }

  return blocks
}

export function PdfMarkdown({ children }: { children: string }) {
  const blocks = parseBlocks(children)

  return (
    <View>
      {blocks.map((block, index) =>
        block.type === "list" ? (
          <View key={index} style={styles.paragraph}>
            {block.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.bulletRow}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>
                  <InlineText segments={parseInline(item)} />
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <Text key={index} style={styles.paragraph}>
            <InlineText segments={parseInline(block.text)} />
          </Text>
        )
      )}
    </View>
  )
}
