import type { Metadata } from "next"
import {
  decodeEmail,
  decodePhoneNumber,
  formatPhoneNumber,
} from "@/utils/string"
import { urlToName } from "@/utils/url"

import { Markdown } from "@/components/markdown"
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications"
import { EDUCATION } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS, WORK_PROJECTS } from "@/features/portfolio/data/projects"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"
import {
  formatPeriod,
  PreviewDocHeader,
  PreviewEntryHeader,
  PreviewProse,
  PreviewSection,
  PreviewSheet,
  SkillTags,
} from "@/features/preview/preview-ui"

export const metadata: Metadata = {
  title: "이력서 · 경력기술서",
  robots: { index: false, follow: false },
}

/** Groups tech stack items by category, preserving first-seen category order. */
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

export default function ResumePreviewPage() {
  const email = decodeEmail(USER.emailB64)
  const phone = formatPhoneNumber(decodePhoneNumber(USER.phoneNumberB64))
  const techGroups = groupTechByCategory()
  const careerProjects = [...PROJECTS, ...WORK_PROJECTS]

  return (
    <PreviewSheet>
      <PreviewDocHeader
        name={USER.displayName}
        role={USER.jobTitle}
        tagline={USER.bio}
        contacts={[email, phone, urlToName(USER.website), USER.address]}
      />

      <PreviewSection title="소개">
        <PreviewProse>
          <Markdown>{USER.about}</Markdown>
        </PreviewProse>
      </PreviewSection>

      <PreviewSection title="보유 기술">
        <dl className="space-y-2">
          {techGroups.map(([category, skills]) => (
            <div
              key={category}
              className="flex flex-col gap-1 sm:flex-row sm:gap-4"
            >
              <dt className="shrink-0 pt-0.5 text-xs font-medium text-zinc-500 sm:w-40">
                {category}
              </dt>
              <dd className="min-w-0 flex-1">
                <SkillTags skills={skills} />
              </dd>
            </div>
          ))}
        </dl>
      </PreviewSection>

      <PreviewSection title="경력">
        <div className="space-y-6">
          {EXPERIENCES.flatMap((experience) =>
            experience.positions.map((position) => (
              <div key={`${experience.id}-${position.id}`}>
                <PreviewEntryHeader
                  title={position.title}
                  subtitle={[experience.companyName, experience.location]
                    .filter(Boolean)
                    .join(" · ")}
                  meta={formatPeriod(position.employmentPeriod)}
                />

                {position.skills?.length ? (
                  <div className="mt-2">
                    <SkillTags skills={position.skills} />
                  </div>
                ) : null}

                {position.description ? (
                  <div className="mt-2">
                    <PreviewProse>
                      <Markdown>{position.description}</Markdown>
                    </PreviewProse>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
      </PreviewSection>

      <PreviewSection title="학력">
        <div className="space-y-3">
          {EDUCATION.map((education) => (
            <PreviewEntryHeader
              key={education.id}
              title={education.school}
              subtitle={[education.degree, education.fieldOfStudy]
                .filter(Boolean)
                .join(" · ")}
              meta={formatPeriod(education.period)}
            />
          ))}
        </div>
      </PreviewSection>

      <PreviewSection title="자격증">
        <div className="space-y-3">
          {CERTIFICATIONS.map((certification) => (
            <PreviewEntryHeader
              key={certification.title}
              title={certification.title}
              subtitle={certification.issuer}
              meta={certification.issueDate.slice(0, 7).replace("-", ".")}
            />
          ))}
        </div>
      </PreviewSection>

      <PreviewSection title="경력기술서">
        <div className="space-y-6">
          {careerProjects.map((project) => (
            <div key={project.id}>
              <PreviewEntryHeader
                title={project.title}
                meta={formatPeriod(project.period)}
              />

              {project.skills.length ? (
                <div className="mt-2">
                  <SkillTags skills={project.skills} />
                </div>
              ) : null}

              {project.description ? (
                <div className="mt-2">
                  <PreviewProse>
                    <Markdown>{project.description}</Markdown>
                  </PreviewProse>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </PreviewSection>
    </PreviewSheet>
  )
}
