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
        title: "대리 / Fullstack Developer",
        employmentPeriod: {
          start: "2020.03",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `솔루션 개발을 주로 담당하며, 풀스택 개발과 AI 에이전트 솔루션 개발을 수행하고 있습니다. 대기업/공공기관 SI 프로젝트에도 다수 투입되었습니다.

- AI 에이전트 솔루션 설계 및 개발 (진행 중)
- 농협중앙회, 신한카드, 우정사업본부, 한국방송통신전파진흥원 - 프론트엔드 개발
- 수자원공사, 지역난방공사 - 풀스택 개발
- 사내 디자인 시스템 구축
- 회사 홈페이지 개발`,
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Fastify",
          "AI Agent",
          "Design System",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
