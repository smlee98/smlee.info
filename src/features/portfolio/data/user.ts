import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "승민",
  lastName: "이",
  displayName: "이승민",
  username: "smlee98",
  gender: "male",
  pronouns: "남자",
  bio: "프론트엔드부터 인프라까지, 완성도 있는 제품을 만드는 풀스택 개발자입니다.",
  flipSentences: [
    "Fullstack Developer.",
    "프론트엔드부터 백엔드, 인프라까지.",
    "AI 에이전트 솔루션을 만듭니다.",
    "디테일에 진심인 개발자.",
  ],
  address: "서울, 대한민국",
  phoneNumberB64: "KzgyMTA5NDA1ODM3NQ==", // E.164 format, base64 encoded
  emailB64: "c21sZWU5OEBrYWthby5jb20=", // base64 encoded
  website: "https://smlee.info",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Fullstack Developer",
      company: "그리드원",
      website: "https://www.gridone.co.kr",
      experienceId: "gridone",
    },
  ],
  about: `프론트엔드에 무게중심을 둔 풀스택 개발자입니다. React와 Next.js로 화면을 만들고, Node.js와 Fastify로 그 뒤를 받치고, Docker와 Kubernetes 위에 올리는 것까지 — 제품이 완성되는 데 필요한 일이라면 어디든 갑니다.

(주)그리드원에서 AI 에이전트 솔루션을 개발하고 있고, 대기업/공공기관 프로젝트에서 프론트엔드와 풀스택을 오가며 경험을 쌓았습니다. 사내 디자인 시스템을 만들면서 '한 번 잘 만들어두면 모두가 빨라진다'는 재미를 알게 됐어요.

회사에 디자이너가 따로 없어 오랫동안 디자이너 겸 프론트엔드 개발자로 일했습니다. Figma와 Photoshop으로 직접 그린 화면을 코드로 그대로 옮기다 보니, 픽셀이 어긋난 화면을 그냥 넘기지 못하는 성격이 됐습니다. 요즘은 AI 에이전트와 함께 일하는 개발 워크플로우를 다듬는 데 푹 빠져 있습니다.
`,
  avatar: "https://github.com/smlee98.png",
  avatarVariants: {
    lightOff: "https://github.com/smlee98.png",
    lightOn: "https://github.com/smlee98.png",
    darkOff: "https://github.com/smlee98.png",
    darkOn: "https://github.com/smlee98.png",
  },
  ogImage:
    "/og/simple?title=%EC%9D%B4%EC%8A%B9%EB%AF%BC%20%E2%80%94%20Fullstack%20Developer&description=%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EB%B6%80%ED%84%B0%20%EC%9D%B8%ED%94%84%EB%9D%BC%EA%B9%8C%EC%A7%80",
  timeZone: "Asia/Seoul",
  keywords: [
    "이승민",
    "smlee",
    "smlee98",
    "seungmin lee",
    "이승민 개발자",
    "풀스택 개발자",
    "fullstack developer",
  ],
  dateCreated: "2026-07-10", // YYYY-MM-DD
}
