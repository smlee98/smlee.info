import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS, WORK_PROJECTS } from "@/features/portfolio/data/projects"

import type { Project } from "../../types/projects"
import { ProjectItem } from "./project-item"

function ProjectsPanel({
  id,
  title,
  projects,
}: {
  id: string
  title: string
  projects: Project[]
}) {
  return (
    <Panel id={id}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${id}`}>{title}</a>
          <PanelTitleSup>({projects.length})</PanelTitleSup>
          <PanelTitleCopy id={id} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={projects}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  )
}

export function Projects() {
  return <ProjectsPanel id="projects" title="프로젝트" projects={PROJECTS} />
}

export function WorkProjects() {
  return (
    <ProjectsPanel
      id="work-projects"
      title="사내 프로젝트"
      projects={WORK_PROJECTS}
    />
  )
}
