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
    id: "g-corp-genai-platform",
    title: "G공사 생성형 AI 플랫폼 구축",
    period: {
      start: "2026.06",
    },
    link: "https://www.gridone.co.kr",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "assistant-ui",
      "Vercel AI SDK",
      "Turborepo",
    ],
    description:
      "여러 AI 서비스를 한곳에 모으는 생성형 AI 플랫폼의 프론트엔드를 개발하고 있어요. 20여 개의 Next.js 앱을 공유 디자인 시스템과 함께 모노레포로 운영하는 마이크로 프론트엔드 구조로, RAG 챗봇·AI 회의록·비주얼 에이전트 빌더 같은 서비스의 화면과 SSE 토큰 스트리밍 채팅 UI를 만들고 있어요.",
    previewsPending: 3,
    isExpanded: true,
  },
  {
    id: "d-corp-custom-genai",
    title: "D공사 맞춤형 생성형 AI 구축",
    period: {
      start: "2025.05",
      end: "2025.11",
    },
    link: "https://www.gridone.co.kr",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "assistant-ui",
      "Vercel AI SDK",
    ],
    description:
      "사내 맞춤형 생성형 AI 서비스의 프론트엔드를 개발했어요. RAG 챗봇과 문서 분석·보고서 생성 같은 AI 도구, 지식 DB·프롬프트·통계를 다루는 관리자 콘솔을 구현했고, 백엔드 SSE 스트림을 채팅 UI로 이어 붙이는 스트리밍 파이프라인을 만들었어요. 하나의 코드베이스를 내부망/외부망 두 타겟으로 나눠 배포하는 구조가 특징이에요.",
    previewsPending: 3,
  },
  {
    id: "w-corp-genai-rag",
    title: "W공사 업무용 생성형 AI RAG 서비스 구축",
    period: {
      start: "2024.07",
      end: "2025.02",
    },
    link: "https://www.gridone.co.kr",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel AI SDK",
      "Turborepo",
    ],
    description:
      "업무 문서를 근거로 답하는 기업용 생성형 AI RAG 서비스의 프론트엔드를 개발했어요. 모노레포에서 챗봇·관리·커뮤니티 앱을 나눠 구성했고, 업무 도메인별 RAG 백엔드를 Vercel AI SDK 커스텀 프로바이더로 추상화해 스트리밍 채팅 UI에 연결했어요. HWP·PDF 뷰어와 문서 전처리 관리 화면 등 문서 중심 기능을 폭넓게 다뤘어요.",
    previewsPending: 3,
  },
  {
    id: "gridone-homepage",
    title: "그리드원 홈페이지 개발",
    period: {
      start: "2024.03",
    },
    link: "https://www.gridone.co.kr",
    skills: ["Next.js", "React", "TypeScript"],
    description: "그리드원 공식 홈페이지를 개발하고 운영하고 있어요.",
    previewsPending: 3,
  },
  {
    id: "k-life-rpa-portal",
    title: "K생명 RPA 포털 시스템 구축",
    period: {
      start: "2022.07",
      end: "2022.09",
    },
    link: "https://www.gridone.co.kr",
    skills: ["Pug", "SCSS", "Bootstrap", "Parcel", "jQuery", "Chart.js"],
    description:
      "RPA 운영 포털 100여 개 화면의 퍼블리싱을 담당했어요. Pug 템플릿의 믹스인과 상속으로 화면을 컴포넌트화하고, Bootstrap 5를 SCSS로 커스터마이즈해 공통 UI 킷을 만들었어요. 라이트/다크/자동 3단 다크 모드와 차트·간트·캘린더 같은 대시보드형 컴포넌트까지 마크업 단계에서 구현했어요.",
    previews: [
      {
        src: "/images/projects/k-life-rpa-portal/01.webp",
        alt: "포털 홈 — 현황판·업무함·RPA 소개·공지사항",
        caption: "포털 홈",
      },
      {
        src: "/images/projects/k-life-rpa-portal/02.webp",
        alt: "RPA 운영 대시보드 — 업무 현황과 실시간 업무 목록",
        caption: "운영 대시보드",
      },
      {
        src: "/images/projects/k-life-rpa-portal/03.webp",
        alt: "기간별 스케줄 그래프 — 로봇별 실행 일정 간트 차트",
        caption: "기간별 스케줄 그래프",
      },
      {
        src: "/images/projects/k-life-rpa-portal/04.webp",
        alt: "봇 효율성 모니터링 — 시간대별 가동 현황 막대 차트",
        caption: "봇 효율성 모니터링",
      },
    ],
  },
  {
    id: "n-bank-rpa",
    title: "N은행 RPA 솔루션 추가 개발",
    period: {
      start: "2021.09",
      end: "2022.01",
    },
    link: "https://www.gridone.co.kr",
    skills: ["HTML", "CSS", "jQuery", "Bootstrap", "Chart.js"],
    description:
      "RPA 관리 포털 88개 화면의 퍼블리싱을 담당했어요. Bootstrap 4와 jQuery 기반으로 대시보드·모니터링·스케줄 간트·게시판 화면을 마크업했고, 공통 내비게이션과 데이터 테이블처럼 반복되는 패턴을 공통 스크립트·스타일로 정리해 화면 간 일관성을 유지했어요.",
    previews: [
      {
        src: "/images/projects/n-bank-rpa/01.webp",
        alt: "포털 홈 — 처리시간 요약·과제 업무·RPA 과제제안 절차",
        caption: "포털 홈",
      },
      {
        src: "/images/projects/n-bank-rpa/02.webp",
        alt: "관리자 대시보드 — 스케줄·자원 사용률·성과관리 위젯",
        caption: "관리자 대시보드",
      },
      {
        src: "/images/projects/n-bank-rpa/03.webp",
        alt: "일별 스케줄 그래프 — 로봇별 구동 시간 간트 차트",
        caption: "일별 스케줄 그래프",
      },
      {
        src: "/images/projects/n-bank-rpa/04.webp",
        alt: "성과관리 — RPA 적용효과와 ROI 재무 지표 표",
        caption: "성과 관리",
      },
    ],
  },
]
