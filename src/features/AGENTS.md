<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# features

## Purpose

도메인 단위로 잘라낸 기능 모듈. 각 feature는 components/data(또는 content)/hooks/types를 자체적으로 갖는 수직 구조다.

## Subdirectories

| Directory    | Purpose                                                                       |
| ------------ | ----------------------------------------------------------------------------- |
| `portfolio/` | 홈 화면의 모든 섹션과 정형 데이터 (see `portfolio/AGENTS.md`)                 |
| `doc/`       | MDX 콘텐츠 엔진 — 블로그 글·컴포넌트 문서의 원본과 로딩 (see `doc/AGENTS.md`) |
| `blog/`      | 블로그 목록·검색·시리즈 목차 UI (see `blog/AGENTS.md`)                        |

## For AI Agents

### Working In This Directory

- 역할 분담: **doc이 콘텐츠를 소유**하고(원본 MDX + 로딩 로직), **blog는 그것을 화면에 그리는 UI**, **portfolio는 홈의 정형 데이터와 섹션**이다. 콘텐츠 관련 작업은 먼저 doc에서 시작할 것.
- feature 간 직접 import는 blog→doc(데이터 소비) 방향만 존재한다. 새 결합을 만들기 전에 그 방향성을 유지할 것.

## Dependencies

### Internal

- 공용 UI·유틸은 `src/components`, `src/lib`, `src/utils`에서 가져온다.

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
