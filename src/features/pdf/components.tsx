import { Children, type ReactNode } from "react"
import { Text, View } from "@react-pdf/renderer"

import { styles } from "./styles"

/** "YYYY.MM"/"YYYY" period → "start – end", using "현재" while ongoing. */
export function formatPeriod(period: { start: string; end?: string }) {
  return `${period.start} – ${period.end ?? "현재"}`
}

export function DocHeader({
  name,
  role,
  tagline,
  contacts,
}: {
  name: string
  role: string
  tagline?: string
  contacts: string[]
}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        {tagline ? <Text style={styles.tagline}>{tagline}</Text> : null}
      </View>
      <View style={styles.contact}>
        {contacts.map((line) => (
          <Text key={line} style={styles.contactLine}>
            {line}
          </Text>
        ))}
      </View>
    </View>
  )
}

export function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  // Glue the title to its first entry in one non-splitting block so the title
  // never ends up stranded at the bottom of a page while its content flows to
  // the next. Remaining entries flow (and page-break) normally.
  const [firstItem, ...restItems] = Children.toArray(children)

  return (
    <View style={styles.section}>
      <View wrap={false}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {firstItem}
      </View>
      {restItems}
    </View>
  )
}

export function EntryHeader({
  title,
  subtitle,
  meta,
}: {
  title: string
  subtitle?: string
  meta?: string
}) {
  return (
    <View style={styles.entryHeader}>
      <View style={{ flexShrink: 1, paddingRight: 8 }}>
        <Text style={styles.entryTitle}>{title}</Text>
        {subtitle ? <Text style={styles.entrySubtitle}>{subtitle}</Text> : null}
      </View>
      {meta ? <Text style={styles.entryMeta}>{meta}</Text> : null}
    </View>
  )
}

export function Chips({ items }: { items: string[] }) {
  if (!items.length) return null
  return (
    <View style={styles.chipRow}>
      {items.map((item) => (
        <Text key={item} style={styles.chip}>
          {item}
        </Text>
      ))}
    </View>
  )
}
