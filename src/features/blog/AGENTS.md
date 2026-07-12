<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# features/blog

## Purpose

블로그의 화면 계층. 콘텐츠는 소유하지 않고 `features/doc`이 로딩한 문서를 목록·검색·시리즈 UI로 그린다.

## Key Files

| File                                                             | Description                                                                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `components/post-list.tsx`                                       | 글 목록                                                                                                          |
| `components/post-item.tsx`                                       | 목록 아이템 (시리즈 칩 포함)                                                                                     |
| `components/post-list-with-search.tsx` / `post-search-input.tsx` | 검색 UI                                                                                                          |
| `components/post-series-nav.tsx`                                 | 시리즈 목차 — frontmatter `project`/`projectOrder`만으로 자동 렌더. 같은 project 글이 2편 미만이면 렌더하지 않음 |
| `hooks/use-filtered-posts.ts` 등                                 | 검색어·프로젝트 필터 훅                                                                                          |

## For AI Agents

### Working In This Directory

- 시리즈 목차·필터에 별도 데이터 파일이 없다. 동작을 바꾸고 싶으면 frontmatter 규약(`features/doc/AGENTS.md`)을 먼저 확인할 것.
- 새 글이 목록에 안 보이면 이 계층이 아니라 `features/doc/data/documents.ts`의 로딩·정렬부터 의심.

### Testing Requirements

- `yarn check-types` + `yarn dev`에서 `/blog` 확인.

## Dependencies

### Internal

- `features/doc`(문서 데이터), `src/components`(공용 UI)

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
