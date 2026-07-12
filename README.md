# smlee.info

> 좋은 기본값은 배려를 노력에서 구조로 바꾼다.

이 문장을 믿는 프론트엔드 엔지니어, 이승민의 포트폴리오예요. 그리고 이 저장소는 그 믿음을 시험해본 첫 번째 제품이고요.

**[사이트 보기](https://smlee.info)** · **[블로그](https://smlee.info/blog)** · **[krdscn/ui](https://krdscn-ui.smlee.info)**

## 소개 페이지 하나로 끝낼 수도 있었어요

포트폴리오는 보통 "저는 이런 사람이에요" 한 페이지면 충분하죠. 그런데 만들다 보니 욕심이 났어요. 어차피 만드는 거, 포트폴리오 자체가 일하는 방식을 보여주면 어떨까?

그래서 이 저장소에는 소개 페이지 말고도 이런 것들이 들어 있어요.

- **데이터로 만드는 홈** — 프로필·경력·프로젝트는 전부 `src/features/portfolio/data/*.ts`에 있어요. 문구를 고치고 싶으면 컴포넌트가 아니라 데이터만 만지면 돼요.
- **이야기로 쓰는 블로그** — `src/features/doc/content/blog/*.mdx`. 시리즈 목차는 별도 설정 없이 frontmatter 두 줄(`project`, `projectOrder`)로 자동으로 만들어져요.
- **나눠 쓰는 컴포넌트** — 이 사이트에서 쓰는 컴포넌트 일부는 shadcn 레지스트리로 공개돼 있어요. 아래 한 줄이면 여러분 프로젝트로 가져갈 수 있어요.

  ```bash
  npx shadcn@latest add https://smlee.info/r/text-flip.json
  ```

- **링크가 곧 명함** — 페이지 링크를 공유하면 `/og` 라우트가 미리보기 이미지를 그 자리에서 만들어줘요.
- **AI도 읽어가요** — 사이트 전체를 LLM이 읽기 좋은 형태로 내려주는 `/llms-full.txt` 라우트가 있어요.

## 직접 돌려보기

```bash
yarn install
cp .env.example .env.local
yarn dev
```

http://localhost:3000 — 끝이에요.

| 명령어                | 하는 일                         |
| --------------------- | ------------------------------- |
| `yarn dev`            | 개발 서버                       |
| `yarn check-types`    | 타입 체크                       |
| `yarn lint`           | ESLint                          |
| `yarn test`           | Vitest                          |
| `yarn build`          | 프로덕션 빌드 (레지스트리 포함) |
| `yarn registry:build` | 컴포넌트 레지스트리만 빌드      |

## 읽을거리

정부 디자인 시스템(KRDS)을 코드로 옮기며 했던 고민들을 시리즈로 적었어요. 개발자가 아니어도 읽을 수 있게 썼고요.

1. [가이드는 있는데 코드가 없다](https://smlee.info/blog/krdscn-ui-why)
2. [만들지 않기로 했어요](https://smlee.info/blog/krdscn-ui-not-building)
3. [정부의 파랑은 몇 번일까](https://smlee.info/blog/krdscn-ui-tokens-story)
4. ["같다"는 말을 증명하기](https://smlee.info/blog/krdscn-ui-proving)
5. [마우스 없이 쓰는 사람들](https://smlee.info/blog/krdscn-ui-a11y-story)

## 만든 재료

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · shadcn/ui (Radix UI + Base UI) · MDX (`next-mdx-remote` + `gray-matter`) · Pretendard & Monoplex KR

[chanhdai.com](https://chanhdai.com)을 포크해서 다시 지었어요.

## License

코드는 [MIT](./LICENSE)예요 — 마음껏 가져가세요. 다만 글과 프로필·경력 같은 개인 데이터는 제 이야기니까, 포크하실 때는 여러분의 이야기로 채워주세요.
