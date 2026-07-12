<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# features/doc

## Purpose

MDX 콘텐츠 엔진. 블로그 글과 컴포넌트 문서의 원본(MDX), 로딩·정렬 로직, 문서 페이지 공용 컴포넌트를 소유한다.

## Key Files

| File                          | Description                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `data/documents.ts`           | gray-matter 로딩. **`category`는 frontmatter가 아니라 하위 폴더명에서 주입.** 정렬: pinned → createdAt desc → projectOrder desc |
| `data/documents.test.ts`      | 로딩·정렬 테스트                                                                                                                |
| `types/document.ts`           | `DocMetadata` frontmatter 스키마 (title, description, createdAt, project, projectOrder, tags, new/updated/pinned)               |
| `lib/get-llm-text.ts`         | LLM 라우트용 텍스트 변환                                                                                                        |
| `components/doc-*.tsx`        | 문서 상세 페이지 공용 UI (레이아웃, 공유 메뉴, 단축키)                                                                          |
| `components/auto-type-table/` | 타입에서 Props 테이블 생성                                                                                                      |

## Subdirectories

| Directory             | Purpose                |
| --------------------- | ---------------------- |
| `content/blog/`       | 블로그 글 MDX 원본     |
| `content/components/` | 컴포넌트 문서 MDX 원본 |

## For AI Agents

### Working In This Directory

- **블로그 글 작성 규칙** (`content/blog`):
  - 독자: 개발자 + 비개발자(디자이너·기획자·주니어). 전문 용어는 첫 등장 시 일상어로 풀기.
  - 톤: 해요체, 구체적 장면 도입 → 시도와 고민 → 전환점 → 배움. 한 편에 한 이야기.
  - 코드 블록 편당 최대 3개, 앞뒤 문장이 요지를 설명해 건너뛰어도 흐름 유지.
  - 경험담·사실은 검증된 것만. 코드 펜스 언어 지정 필수(비코드는 `text`).
- 시리즈는 frontmatter의 `project` + `projectOrder` 두 줄로 구성된다 — 별도 목차 데이터 없음. 같은 날짜의 글은 projectOrder가 목록 순서를 정한다.
- frontmatter에서 큰따옴표로 시작하는 문자열은 YAML 단일 인용으로 감쌀 것 (`title: '"같다"는 말을 증명하기'`).
- 글 추가는 MDX 파일 하나로 끝난다 — 라우트·RSS·llms 반영은 자동.

### Testing Requirements

- `yarn vitest run src/features/doc/data/documents.test.ts`
- frontmatter 파싱 확인: gray-matter로 전체 파일 read가 에러 없이 도는지.

## Dependencies

### Internal

- `features/blog`(목록 UI가 여기 데이터를 소비), `app/(docs)`·`app/(llms)`·`app/(rss)`(라우트)

### External

- gray-matter, next-mdx-remote

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
