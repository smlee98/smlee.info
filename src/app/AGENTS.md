<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# app

## Purpose

Next.js App Router 라우트. 라우트 그룹 5개가 각각 다른 성격의 출력을 담당한다: 화면((app)), LLM용 텍스트((llms)), RSS((rss)), OG 이미지(og), 그리고 SEO 파일들.

## Key Files

| File                       | Description                                                                |
| -------------------------- | -------------------------------------------------------------------------- |
| `layout.tsx`               | 루트 레이아웃 (폰트, 프로바이더, 전역 JSON-LD)                             |
| `(app)/page.tsx`           | 홈 — 포트폴리오 섹션들을 순서대로 조립하는 단일 파일                       |
| `(app)/(pages)/`           | 목록형 페이지: 블로그 목록, 컴포넌트 카탈로그                              |
| `(app)/(docs)/`            | 상세 페이지: `blog/[slug]`, `components/[slug]` + 문서용 레이아웃·사이드바 |
| `(llms)/*/route.ts`        | `/llms.txt`, `/llms-full.txt`, `/experience.md` 등 LLM용 텍스트 라우트     |
| `(rss)/*/rss/route.ts`     | 블로그·컴포넌트 RSS 피드                                                   |
| `og/simple/route.tsx`      | 동적 OG 이미지 (`/og/simple?title=...&description=...`)                    |
| `sitemap.ts` / `robots.ts` | SEO 파일                                                                   |

## For AI Agents

### Working In This Directory

- 블로그 글 추가는 라우트 수정이 필요 없다 — `src/features/doc/content/blog`에 MDX만 추가하면 목록·상세·시리즈 목차·RSS·llms 라우트에 전부 자동 반영된다.
- `(llms)` 라우트는 `features/portfolio/data`와 `features/doc`의 데이터를 재사용한다. 데이터 스키마를 바꾸면 이쪽 라우트도 함께 확인할 것.
- OG 이미지 URL의 title/description은 URL 인코딩된 쿼리 문자열이다 (`user.ts`의 `ogImage` 참고).
- 홈 섹션의 순서 변경은 `(app)/page.tsx` 한 파일에서 한다.

### Testing Requirements

- 라우트 자체 테스트는 없음. `yarn check-types` + `yarn lint`로 검증, 화면 확인은 `yarn dev`.

## Dependencies

### Internal

- `features/portfolio`(홈 섹션), `features/doc`(MDX 로딩), `features/blog`(목록 UI), `components/`(셸·MDX 렌더러)

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
