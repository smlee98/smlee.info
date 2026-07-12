import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "krdscn-ui",
    title: "krdscn/ui",
    period: {
      start: "2026.05",
    },
    link: "https://krdscn-ui.smlee.info",
    github: "https://github.com/smlee98/krdscn-ui",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Playwright",
    ],
    description:
      "KRDS(대한민국 정부 디자인 시스템)는 가이드는 자세한데 가져다 쓸 코드가 없어서, 공공 프로젝트마다 같은 화면을 처음부터 다시 만들어야 했어요. 그 반복을 끝내려고 shadcn/ui + Radix + Tailwind CSS v4 위에 KRDS 컴포넌트 41개를 구현해 공개했어요. 접근성은 컴포넌트의 기본값으로 넣었고, 199개 예제 문서는 코드와 어긋나면 빌드가 깨지게, 공식 KRDS Storybook과는 Playwright로 나란히 비교해 검증해요.",
    isExpanded: true,
  },
  {
    id: "smlee-info",
    title: "smlee.info",
    period: {
      start: "2026.07",
    },
    link: "https://smlee.info",
    github: "https://github.com/smlee98/smlee.info",
    skills: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "MDX"],
    description:
      "지금 보고 계신 포트폴리오예요. 소개 페이지 하나로 끝내지 않고 하나의 제품처럼 만들었어요 — 만든 컴포넌트를 남이 가져다 쓸 수 있는 레지스트리, 글을 쓰는 MDX 블로그, 링크를 공유하면 미리보기 이미지가 자동으로 만들어지는 것까지 직접 구현했어요.",
    isExpanded: true,
  },
]

export const WORK_PROJECTS: Project[] = [
  {
    id: "ai-frontend-dev-assistant",
    title: "AI Frontend Dev Assistant",
    period: {
      start: "2024",
      end: "2025",
    },
    link: "https://www.gridone.co.kr",
    skills: ["Next.js", "Fastify", "Node.js", "Vercel AI SDK", "Playwright"],
    description:
      "기획 문서와 실제 코드 사이의 거리를 줄이는 AI 어시스턴트예요. 요구사항 명세서(SRS)를 넣으면 사이트맵 설계부터 Next.js 프로젝트 뼈대, Playwright 테스트 코드까지 만들어줘요.",
    isExpanded: true,
  },
  {
    id: "rag-chatbot",
    title: "RAG 기반 챗봇",
    period: {
      start: "2024",
      end: "2025",
    },
    link: "https://www.gridone.co.kr",
    skills: ["Next.js", "Python", "RAG", "BFF", "Embedding"],
    description:
      "문서를 통째로 뒤지지 않아도 질문 한 줄로 답을 찾을 수 있게 해주는 문서 기반 질의응답(RAG) 챗봇이에요.",
  },
  {
    id: "rpa-orchestration-console",
    title: "RPA 오케스트레이션 콘솔",
    period: {
      start: "2024",
      end: "2025",
    },
    link: "https://www.gridone.co.kr",
    skills: ["Next.js", "TypeScript", "RPA", "Dashboard"],
    description:
      "자동화(RPA) 작업들이 잘 돌고 있는지 한눈에 확인하고 관리하는 웹 콘솔이에요.",
  },
]
