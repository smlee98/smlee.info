import { urlToName } from "@/utils/url"
import { Document, Image, Page, Text, View } from "@react-pdf/renderer"

import { PROJECTS, WORK_PROJECTS } from "@/features/portfolio/data/projects"
import { USER } from "@/features/portfolio/data/user"
import type { Project } from "@/features/portfolio/types/projects"

import {
  Chips,
  DocHeader,
  EntryHeader,
  formatPeriod,
  Section,
} from "./components"
import { registerPdfFonts } from "./fonts"
import { PdfMarkdown } from "./markdown"
import { COLORS, styles } from "./styles"

registerPdfFonts()

/** Maps a preview image `src` to a PNG data URI (webp isn't supported by react-pdf). */
export type PreviewImageMap = Record<string, string>

function ProjectEntry({
  project,
  images,
}: {
  project: Project
  images: PreviewImageMap
}) {
  const links = [project.link, project.github]
    .filter((href): href is string => Boolean(href))
    .map(urlToName)

  const previews = (project.previews ?? []).filter((p) => images[p.src])

  return (
    <View style={[styles.entry, { marginBottom: 16 }]} wrap={false}>
      <EntryHeader title={project.title} meta={formatPeriod(project.period)} />

      {links.length ? (
        <Text style={{ fontSize: 8, color: COLORS.faint, marginTop: 2 }}>
          {links.join("   ")}
        </Text>
      ) : null}

      <Chips items={project.skills} />

      {project.description ? (
        <PdfMarkdown>{project.description}</PdfMarkdown>
      ) : null}

      {previews.length ? (
        <View style={styles.previewGrid}>
          {previews.map((preview) => (
            <View key={preview.src} style={styles.previewFigure}>
              {/* react-pdf Image is not an HTML <img>; it has no alt prop. */}
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image style={styles.previewImage} src={images[preview.src]} />
              {preview.caption ? (
                <Text style={styles.previewCaption}>{preview.caption}</Text>
              ) : null}
            </View>
          ))}
        </View>
      ) : null}
    </View>
  )
}

export function PortfolioDocument({ images }: { images: PreviewImageMap }) {
  return (
    <Document
      title={`${USER.displayName} 포트폴리오`}
      author={USER.displayName}
    >
      <Page size="A4" style={styles.page}>
        <DocHeader
          name={USER.displayName}
          role="포트폴리오"
          tagline={USER.bio}
          contacts={[urlToName(USER.website), "github.com/smlee98"]}
        />

        <Section title="개인 프로젝트">
          {PROJECTS.map((project) => (
            <ProjectEntry key={project.id} project={project} images={images} />
          ))}
        </Section>

        <Section title="업무 프로젝트">
          {WORK_PROJECTS.map((project) => (
            <ProjectEntry key={project.id} project={project} images={images} />
          ))}
        </Section>
      </Page>
    </Document>
  )
}

/** All preview image sources referenced across the portfolio. */
export function collectPreviewSources(): string[] {
  return [...PROJECTS, ...WORK_PROJECTS]
    .flatMap((project) => project.previews ?? [])
    .map((preview) => preview.src)
}
