<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# src

## Purpose

애플리케이션 소스 루트. 라우팅(`app`), 도메인 기능(`features`), 공용 UI(`components`), 공개 레지스트리(`registry`)의 네 축으로 구성되고, 나머지는 이를 지탱하는 공용 모듈이다.

## Subdirectories

| Directory     | Purpose                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------ |
| `app/`        | Next.js App Router 라우트 (see `app/AGENTS.md`)                                                  |
| `features/`   | 도메인 단위 기능: portfolio·doc·blog (see `features/AGENTS.md`)                                  |
| `components/` | 공용 UI 컴포넌트: shadcn `ui/` + Base UI `base/` + 사이트 셸 (see `components/AGENTS.md`)        |
| `registry/`   | 공개 shadcn 레지스트리 소스와 빌드 산출물 (see `registry/AGENTS.md`)                             |
| `config/`     | 전역 설정: `site.ts`(메타데이터, `USER.bio`를 description으로 사용), `json-ld.ts`, `registry.ts` |
| `lib/`        | 공용 라이브러리: MDX rehype/remark 플러그인, 코드 하이라이트, 폰트(`fonts.ts`), soundcn 등       |
| `hooks/`      | 공용 React 훅 (`use-media-query`, `use-copy-to-clipboard`, soundcn 등)                           |
| `utils/`      | 순수 유틸 함수 — 테스트가 함께 있는 유일한 곳 (`*.test.ts`)                                      |
| `styles/`     | 전역 CSS: `globals.css`, `shadcn-tailwind.css` (Tailwind v4 — JS 설정 파일 없음)                 |
| `assets/`     | 폰트 바이너리(Wanted Sans, Monoplex KR), libphonenumber 메타데이터                               |
| `scripts/`    | `build-registry.mts` — 레지스트리 빌드 (`yarn registry:build`)                                   |
| `types/`      | 전역 타입 (`nav.ts`, `unist.ts`)                                                                 |

## For AI Agents

### Working In This Directory

- 작은 디렉터리(config/lib/hooks/utils/styles/assets/scripts/types)는 별도 AGENTS.md가 없다 — 위 표가 기준.
- 유틸 추가 시 `utils/`에는 테스트를 함께 둔다 (기존 관례: `format.test.ts`, `url.test.ts`, `registry.test.ts`).
- Tailwind 테마·토큰 변경은 `styles/`의 CSS에서 한다 (`tailwind.config.js` 없음).

### Testing Requirements

- `yarn vitest run src/utils/<file>.test.ts`

## Dependencies

### Internal

- `app` → `features` → `components`/`lib`/`hooks`/`utils` 방향으로 의존. 역방향 참조 금지.

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
