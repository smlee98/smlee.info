import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "승민",
  lastName: "이",
  displayName: "이승민",
  username: "smlee98",
  gender: "male",
  pronouns: "남자",
  bio: "디자인 시스템과 컴포넌트 라이브러리로 제품의 완성도를 끌어올리는 프론트엔드 엔지니어예요.",
  flipSentences: [
    "Frontend Engineer.",
    "디자인 시스템을 설계하고 만들어요.",
    "픽셀 하나도 그냥 넘기지 못해요.",
    "백엔드부터 인프라까지 커버해요.",
  ],
  address: "서울, 대한민국",
  phoneNumberB64: "KzgyMTA5NDA1ODM3NQ==", // E.164 format, base64 encoded
  emailB64: "c21sZWU5OEBrYWthby5jb20=", // base64 encoded
  website: "https://smlee.info",
  jobTitle: "Frontend Engineer",
  jobs: [
    {
      title: "Frontend Engineer",
      company: "그리드원",
      website: "https://www.gridone.co.kr",
      experienceId: "gridone",
    },
  ],
  about: `좋은 기본값은 배려를 노력에서 구조로 바꾼다 — 이 문장을 믿는 프론트엔드 엔지니어예요. 버튼의 크기, 색의 이름, 에러 문구가 놓이는 자리 같은 작은 결정들이 결국 쓰는 사람의 경험을 정한다고 생각해서, 그 결정들을 한 번 잘 내려두는 일 — 디자인 시스템과 컴포넌트 라이브러리 만드는 일을 좋아해요.

공공 프로젝트마다 같은 화면을 처음부터 다시 만드는 게 아까워서, KRDS(대한민국 정부 디자인 시스템) 컴포넌트 라이브러리 [krdscn/ui](https://krdscn-ui.smlee.info)를 만들어 공개했어요. (주)그리드원에서는 사내 디자인 시스템을 구축하며 '한 번 잘 만들어두면 모두가 빨라진다'는 재미를 알게 됐고, 지금은 AI 에이전트 솔루션의 프론트엔드를 만들고 있어요.

회사에 디자이너가 따로 없어서 오랫동안 디자이너 겸 프론트엔드 개발자로 일했어요. Figma와 Photoshop으로 직접 그린 화면을 코드로 그대로 옮기다 보니, 픽셀이 어긋난 화면을 그냥 넘기지 못하는 성격이 됐죠. Node.js 백엔드와 Docker·Kubernetes 인프라까지 다뤄본 경험은 화면 뒤에서 무슨 일이 일어나는지 이해하는 데 큰 힘이 돼요.
`,
  avatar: "https://github.com/smlee98.png",
  avatarVariants: {
    lightOff: "https://github.com/smlee98.png",
    lightOn: "https://github.com/smlee98.png",
    darkOff: "https://github.com/smlee98.png",
    darkOn: "https://github.com/smlee98.png",
  },
  ogImage:
    "/og/simple?title=%EC%9D%B4%EC%8A%B9%EB%AF%BC%20%E2%80%94%20Frontend%20Engineer&description=%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%EB%B6%80%ED%84%B0%20%EC%A0%91%EA%B7%BC%EC%84%B1%EA%B9%8C%EC%A7%80",
  timeZone: "Asia/Seoul",
  keywords: [
    "이승민",
    "smlee",
    "smlee98",
    "seungmin lee",
    "이승민 개발자",
    "프론트엔드 개발자",
    "frontend engineer",
    "디자인 시스템",
    "design system",
    "UX 엔지니어",
    "풀스택 개발자",
    "fullstack developer",
  ],
  dateCreated: "2026-07-10", // YYYY-MM-DD
}
