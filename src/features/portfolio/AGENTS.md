<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# features/portfolio

## Purpose

홈 화면의 모든 섹션과 그 데이터. 화면 문구를 바꾸는 작업은 컴포넌트가 아니라 `data/`의 정적 데이터 수정으로 끝나는 구조다.

## Key Files

| File                                                  | Description                                                                                                                        |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `data/user.ts`                                        | **사이트 전역 신원 소스.** `bio`=메타 description, `about`=Hello 섹션(Markdown), `ogImage`=URL 인코딩 쿼리, flipSentences·keywords |
| `data/experiences.tsx`                                | 경력 (기간 표기 `yyyy.MM` 또는 `yyyy`)                                                                                             |
| `data/projects.ts`                                    | 개인/사내 프로젝트 (`PROJECTS`, `WORK_PROJECTS`)                                                                                   |
| `data/tech-stack.tsx`                                 | 기술 스택 (아이콘 SVG 인라인, simple-icons 패스 사용)                                                                              |
| `components/profile-header.tsx`                       | 이름·아바타·flipSentences 헤더                                                                                                     |
| `components/experiences/experience-position-item.tsx` | 경력 아이템 — 기간 파서가 `yyyy.MM` 형식을 전제                                                                                    |

## Subdirectories

| Directory     | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| `components/` | 섹션별 컴포넌트 (overview, experiences, projects 등) |
| `data/`       | 모든 정형 콘텐츠의 단일 소스                         |
| `types/`      | 데이터 스키마 타입                                   |

## For AI Agents

### Working In This Directory

- **워딩 규칙**: 소개·프로젝트 설명은 해요체 + 문제-해결 프레임(기능 나열 금지). 경력 불릿은 명사형 유지. 홈과 블로그는 한 목소리 — 관통 문장: "좋은 기본값은 배려를 노력에서 구조로 바꾼다."
- 포지셔닝: 프론트엔드·디자인 시스템 중심. 풀스택·인프라는 보조 강점으로만 서술.
- 기간은 반드시 `yyyy.MM`(예: `"2020.03"`) 또는 연도만. 다른 형식은 기간 계산이 조용히 깨진다.
- `user.ts`의 `ogImage` 문구를 바꾸면 URL 재인코딩 필요 (`[uri]::EscapeDataString` 등).
- 데이터 스키마 변경 시 `app/(llms)` 라우트도 함께 확인.

### Testing Requirements

- `yarn check-types` + `yarn dev`로 홈 렌더링 확인.

## Dependencies

### Internal

- `src/components`(공용 UI), `src/config/site.ts`(bio 소비), `app/(llms)`(데이터 재사용)

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
