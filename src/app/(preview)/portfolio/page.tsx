import type { Metadata } from "next"
import { urlToName } from "@/utils/url"

import { Markdown } from "@/components/markdown"
import { PROJECTS, WORK_PROJECTS } from "@/features/portfolio/data/projects"
import { USER } from "@/features/portfolio/data/user"
import type { Project } from "@/features/portfolio/types/projects"
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
  title: "포트폴리오",
  robots: { index: false, follow: false },
}

function ProjectCard({ project }: { project: Project }) {
  const links = [
    project.link ? urlToName(project.link) : null,
    project.github ? urlToName(project.github) : null,
  ].filter(Boolean) as string[]

  return (
    <div className="break-inside-avoid border-t border-zinc-200 pt-5 first:border-t-0 first:pt-0">
      <PreviewEntryHeader
        title={project.title}
        meta={formatPeriod(project.period)}
      />

      {links.length ? (
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-zinc-500">
          {links.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      ) : null}

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

      {project.previews?.length ? (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {project.previews.map((preview) => (
            <figure key={preview.src} className="min-w-0">
              {/* Local /public asset — plain img keeps the preview simple. */}
              <img
                src={preview.src}
                alt={preview.alt}
                className="w-full rounded-md border border-zinc-200"
              />
              {preview.caption ? (
                <figcaption className="mt-1 text-center text-[11px] text-zinc-500">
                  {preview.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function PortfolioPreviewPage() {
  return (
    <PreviewSheet>
      <PreviewDocHeader
        name={USER.displayName}
        role="포트폴리오"
        tagline={USER.bio}
        contacts={[urlToName(USER.website), "github.com/smlee98"]}
      />

      <PreviewSection title="개인 프로젝트">
        <div className="space-y-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PreviewSection>

      <PreviewSection title="업무 프로젝트">
        <div className="space-y-5">
          {WORK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PreviewSection>
    </PreviewSheet>
  )
}
