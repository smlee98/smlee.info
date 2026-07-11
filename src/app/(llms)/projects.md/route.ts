import { PROJECTS, WORK_PROJECTS } from "@/features/portfolio/data/projects"
import type { Project } from "@/features/portfolio/types/projects"

function renderProjects(projects: Project[]) {
  return projects
    .map((item) => {
      const github = item.github ? `\n\nGitHub: ${item.github}` : ""
      const skills = `\n\nSkills: ${item.skills.join(", ")}`
      const description = item.description
        ? `\n\n${item.description.trim()}`
        : ""
      return `## ${item.title}\n\nProject URL: ${item.link}${github}${skills}${description}`
    })
    .join("\n\n")
}

const content = `# Projects

${renderProjects(PROJECTS)}

# Work Projects (사내 프로젝트)

${renderProjects(WORK_PROJECTS)}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
