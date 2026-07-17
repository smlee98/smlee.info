import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "gridone",
    companyName: "(주)그리드원",
    companyWebsite: "https://www.gridone.co.kr",
    location: "서울",
    positions: [
      {
        id: "1",
        title: "대리 / Frontend Engineer",
        employmentPeriod: {
          start: "2020.03",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `프론트엔드와 디자인 시스템을 중심으로 솔루션 개발을 담당하고 있어요. 지금은 AI 에이전트 솔루션을 만들고 있고, 대기업/공공기관 SI 프로젝트에도 다수 투입됐어요.

- 사내 디자인 시스템 구축 - 공통 컴포넌트와 디자인 토큰 설계
- AI 에이전트 솔루션 설계 및 개발 (진행 중)
- N은행 - 퍼블리싱 (2021.09 - 2022.01)
- K생명 - 퍼블리싱 (2022.07 - 2022.09)
- W공사 - 프론트엔드 개발 (2024.07 - 2025.02)
- D공사 - 프론트엔드 개발 (2025.05 - 2025.11)
- G공사 - 프론트엔드 개발 (2026.06 - 진행 중)
- 회사 홈페이지 개발`,
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Design System",
          "Node.js",
          "Fastify",
          "AI Agent",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
