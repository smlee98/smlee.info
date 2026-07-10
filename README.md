# smlee.info

Fullstack Developer 이승민의 포트폴리오.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (Radix UI + Base UI)
- MDX 블로그 (`next-mdx-remote` + `gray-matter`)
- 폰트: Pretendard, Monoplex KR

## Getting Started

```bash
yarn install
cp .env.example .env.local
yarn dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## Scripts

| 명령어 | 설명 |
| --- | --- |
| `yarn dev` | 개발 서버 |
| `yarn build` | 프로덕션 빌드 |
| `yarn start` | 프로덕션 서버 |
| `yarn lint` | ESLint |
| `yarn check-types` | 타입 체크 |
| `yarn test` | Vitest |

## Content

- 프로필/경력/프로젝트 등 정형 데이터: `src/features/portfolio/data/*.ts(x)`
- 블로그 포스트(MDX): `src/features/doc/content/blog/*.mdx`
- 사이트 설정: `src/config/site.ts`

## License

[MIT](./LICENSE)
