<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# smlee.info

## Purpose

이승민(smlee98)의 개인 포트폴리오 + 기술 블로그. Next.js 16 App Router + React 19 + Tailwind CSS v4 + MDX. 모든 콘텐츠는 한국어 우선이며, 워딩 톤은 해요체 기반의 스토리텔링(토스 테크 블로그 스타일)을 따른다. chanhdai.com 포크 기반.

## Key Files

| File                | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| `package.json`      | yarn 스크립트 정의 (dev/lint/check-types/test/registry:build)  |
| `registry.json`     | shadcn 컴포넌트 레지스트리 정의 (빌드 산출물은 `public/r`)     |
| `components.json`   | shadcn CLI 설정                                                |
| `next.config.ts`    | Next.js 설정                                                   |
| `vitest.config.ts`  | Vitest 설정 (`src/**/*.test.ts`, node 환경, `@` → `src` alias) |
| `eslint.config.mjs` | ESLint flat config                                             |
| `.env.example`      | 환경변수 템플릿 (`cp .env.example .env.local`)                 |

## Subdirectories

| Directory | Purpose                                             |
| --------- | --------------------------------------------------- |
| `src/`    | 애플리케이션 소스 전체 (see `src/AGENTS.md`)        |
| `public/` | 정적 자산 + `r/`(레지스트리 빌드 산출 JSON, 커밋됨) |
| `docs/`   | 로컬 전용 개인 자료 — gitignore됨, 커밋 금지        |

## For AI Agents

### Working In This Directory

- **git 커밋/푸시는 사용자가 명시적으로 요청할 때만.**
- **`yarn build` 실행 금지.** 검증은 `yarn check-types` + `yarn lint` + `yarn test:run`(+ 필요 시 `yarn prettier --check`)으로 끝낸다.
- husky 훅: precommit이 lint-staged(eslint --fix + prettier), prepush가 `check-types && lint && test:run`을 실행한다.
- MDX 코드 펜스에는 언어 지정 필수 (비코드는 `text`).
- 블로그의 경험담·기술 사실은 검증된 것만 쓴다. 작성자의 경험을 지어내지 않는다.

### Testing Requirements

- `yarn test:run` (Vitest 1회) / 단일 파일: `yarn vitest run <path>`

### Common Patterns

- import는 `@/` 절대경로.
- 정형 콘텐츠(프로필·경력·프로젝트)는 코드가 아니라 `src/features/portfolio/data`의 데이터 수정으로 바꾼다.

## Dependencies

### External

- Next.js 16 (App Router, Turbopack) / React 19 / Tailwind CSS v4
- shadcn/ui (Radix UI + Base UI) / next-mdx-remote + gray-matter / date-fns / Vitest

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
