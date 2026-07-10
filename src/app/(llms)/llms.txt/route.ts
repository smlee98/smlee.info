import { SITE_INFO } from "@/config/site"
import { getBlogPosts, getComponentDocs } from "@/features/doc/data/documents"

const allComponents = getComponentDocs()
const allPosts = getBlogPosts()

const content = `# smlee.info

> Fullstack Developer 이승민의 포트폴리오. 프론트엔드부터 인프라까지 폭넓게 다룹니다.

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials I've earned.

## Components

${allComponents.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/components/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}
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
