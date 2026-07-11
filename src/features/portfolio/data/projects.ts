import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
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
      "지금 보고 계신 개인 포트폴리오입니다. shadcn 컴포넌트 레지스트리, MDX 블로그, 동적 OG 이미지 생성까지 갖췄습니다.",
    isExpanded: true,
  },
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
    ],
    description:
      "KRDS(대한민국 정부 디자인 시스템) 컴포넌트를 shadcn/ui + Radix Primitives + Tailwind CSS v4 위에 구현한 컴포넌트 라이브러리입니다. 42개 컴포넌트와 139개 예제를 담은 문서 카탈로그를 제공하며, Playwright로 공식 KRDS Storybook과의 시각적 동등성을 검증합니다.",
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
      "SRS(소프트웨어 요구사항 명세서) 데이터를 기반으로 사이트맵 생성부터 Next.js 프로젝트 스캐폴딩, Playwright 테스트 코드 생성까지 자동화하는 AI 어시스턴트입니다.",
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
      "문서 기반 질의응답이 가능한 RAG(Retrieval-Augmented Generation) 챗봇입니다.",
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
      "RPA(Robotic Process Automation) 작업을 관리하고 모니터링하는 웹 콘솔입니다.",
  },
]
