import { Document, Page, Text, View } from "@react-pdf/renderer"

import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { EDUCATION } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS, WORK_PROJECTS } from "@/features/portfolio/data/projects"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"

import {
  Chips,
  DocHeader,
  EntryHeader,
  formatPeriod,
  Section,
} from "./components"
import { registerPdfFonts } from "./fonts"
import { PdfMarkdown } from "./markdown"
import { styles } from "./styles"

registerPdfFonts()

/** Groups tech stack items by category, preserving first-seen order. */
function groupTechByCategory() {
  const groups = new Map<string, string[]>()
  for (const item of TECH_STACK) {
    for (const category of item.categories) {
      const list = groups.get(category) ?? []
      list.push(item.title)
      groups.set(category, list)
    }
  }
  return [...groups.entries()]
}

export function ResumeDocument({
  email,
  phone,
  website,
}: {
  email: string
  phone: string
  website: string
}) {
  const techGroups = groupTechByCategory()
  const careerProjects = [...PROJECTS, ...WORK_PROJECTS]

  return (
    <Document
      title={`${USER.displayName} 이력서·경력기술서`}
      author={USER.displayName}
    >
      <Page size="A4" style={styles.page}>
        <DocHeader
          name={USER.displayName}
          role={USER.jobTitle}
          tagline={USER.bio}
          contacts={[email, phone, website, USER.address]}
        />

        <Section title="소개">
          <PdfMarkdown>{USER.about}</PdfMarkdown>
        </Section>

        <Section title="보유 기술">
          {techGroups.map(([category, skills]) => (
            <View key={category} style={styles.techRow} wrap={false}>
              <Text style={styles.techCategory}>{category}</Text>
              <View style={styles.techValue}>
                <Chips items={skills} />
              </View>
            </View>
          ))}
        </Section>

        <Section title="경력">
          {EXPERIENCES.flatMap((experience) =>
            experience.positions.map((position) => (
              <View
                key={`${experience.id}-${position.id}`}
                style={styles.entry}
                wrap={false}
              >
                <EntryHeader
                  title={position.title}
                  subtitle={[experience.companyName, experience.location]
                    .filter(Boolean)
                    .join(" · ")}
                  meta={formatPeriod(position.employmentPeriod)}
                />
                <Chips items={position.skills ?? []} />
                {position.description ? (
                  <PdfMarkdown>{position.description}</PdfMarkdown>
                ) : null}
              </View>
            ))
          )}
        </Section>

        <Section title="학력">
          {EDUCATION.map((education) => (
            <View key={education.id} style={styles.entry} wrap={false}>
              <EntryHeader
                title={education.school}
                subtitle={[education.degree, education.fieldOfStudy]
                  .filter(Boolean)
                  .join(" · ")}
                meta={formatPeriod(education.period)}
              />
            </View>
          ))}
        </Section>

        <Section title="자격증">
          {CERTIFICATIONS.map((certification) => (
            <View key={certification.title} style={styles.entry} wrap={false}>
              <EntryHeader
                title={certification.title}
                subtitle={certification.issuer}
                meta={certification.issueDate.slice(0, 7).replace("-", ".")}
              />
            </View>
          ))}
        </Section>

        <Section title="경력기술서">
          {careerProjects.map((project) => (
            <View key={project.id} style={styles.entry} wrap={false}>
              <EntryHeader
                title={project.title}
                meta={formatPeriod(project.period)}
              />
              <Chips items={project.skills} />
              {project.description ? (
                <PdfMarkdown>{project.description}</PdfMarkdown>
              ) : null}
            </View>
          ))}
        </Section>
      </Page>
    </Document>
  )
}
