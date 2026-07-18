import { StyleSheet } from "@react-pdf/renderer"

/** Shared zinc-ish palette mirroring the site's light theme. */
export const COLORS = {
  ink: "#18181b", // zinc-900
  body: "#3f3f46", // zinc-700
  muted: "#71717a", // zinc-500
  faint: "#a1a1aa", // zinc-400
  line: "#e4e4e7", // zinc-200
  lineStrong: "#d4d4d8", // zinc-300
  chipBg: "#f4f4f5", // zinc-100
}

export const styles = StyleSheet.create({
  page: {
    fontFamily: "WantedSans",
    fontWeight: 400,
    fontSize: 9.5,
    lineHeight: 1.55,
    color: COLORS.body,
    paddingVertical: 40,
    paddingHorizontal: 44,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lineStrong,
    paddingBottom: 16,
    marginBottom: 4,
  },
  headerLeft: { flexGrow: 1, flexShrink: 1, paddingRight: 16 },
  // Explicit lineHeight: react-pdf inherits the page's unitless lineHeight as an
  // absolute value (~14pt), which is shorter than this 22pt glyph and makes the
  // role below collide into it. Setting it per-element restores the line box.
  name: { fontSize: 22, fontWeight: 700, lineHeight: 1.3, color: COLORS.ink },
  role: { fontSize: 12, fontWeight: 500, color: COLORS.muted, marginTop: 3 },
  tagline: {
    fontSize: 9.5,
    color: COLORS.muted,
    marginTop: 6,
    maxWidth: 320,
    lineHeight: 1.5,
  },
  contact: { flexShrink: 0, alignItems: "flex-end" },
  contactLine: { fontSize: 8.5, color: COLORS.muted, marginBottom: 2 },

  // Section
  section: { marginTop: 18 },
  sectionTitle: {
    fontSize: 8,
    fontWeight: 600,
    color: COLORS.muted,
    letterSpacing: 1.2,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingBottom: 4,
    marginBottom: 8,
  },

  // Entry (experience / project / education …)
  entry: { marginBottom: 12 },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  entryTitle: { fontSize: 11, fontWeight: 600, color: COLORS.ink },
  entrySubtitle: { fontSize: 9, color: COLORS.muted, marginTop: 1 },
  entryMeta: { fontSize: 8.5, color: COLORS.faint, flexShrink: 0 },

  // Skill chips — no `gap` here: react-pdf drops row-gap on wrapped flex rows,
  // which makes the second row overlap the first. Per-chip margins instead.
  chipRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 5 },
  chip: {
    fontSize: 7.5,
    lineHeight: 1.2,
    color: COLORS.body,
    backgroundColor: COLORS.chipBg,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 4,
    marginBottom: 4,
  },

  // Tech stack grouped rows
  techRow: { flexDirection: "row", marginBottom: 6 },
  techCategory: {
    width: 96,
    fontSize: 8.5,
    color: COLORS.muted,
    paddingTop: 3,
  },
  techValue: { flexGrow: 1, flexShrink: 1 },

  // Markdown blocks
  paragraph: { marginTop: 3, marginBottom: 3 },
  bulletRow: { flexDirection: "row", marginBottom: 2 },
  bulletDot: { width: 10, color: COLORS.faint },
  bulletText: { flexGrow: 1, flexShrink: 1 },
  link: { color: COLORS.ink, textDecoration: "underline" },

  // Portfolio previews — again no `gap`; use width + margins so wrapped rows
  // stay separated.
  previewGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  previewFigure: { width: "48.5%", marginBottom: 8 },
  previewImage: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 3,
    objectFit: "cover",
  },
  previewCaption: {
    fontSize: 7,
    color: COLORS.muted,
    textAlign: "center",
    marginTop: 2,
  },
})
