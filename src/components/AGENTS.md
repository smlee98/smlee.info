<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# components

## Purpose

도메인에 묶이지 않는 공용 UI. 프리미티브 두 계열(`ui/` = Radix 기반 shadcn, `base/` = @base-ui/react 기반)과 사이트 셸(헤더·푸터·내비), MDX 렌더링 컴포넌트로 구성된다.

## Key Files

| File                                               | Description                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------- |
| `mdx.tsx`                                          | MDX 컴포넌트 매핑 — MDX에서 쓸 컴포넌트(Callout 등)는 여기에 등록     |
| `markdown.tsx`                                     | 일반 Markdown 문자열 렌더러 (`USER.about`, 프로젝트 설명 등에서 사용) |
| `command-menu.tsx`                                 | ⌘K 커맨드 메뉴 — 변경 빈도가 가장 높은 파일                           |
| `site-header.tsx` / `site-footer.tsx` / `nav*.tsx` | 사이트 셸                                                             |
| `component-preview.tsx` / `component-source.tsx`   | 컴포넌트 문서의 미리보기·소스 표시                                    |
| `icons.tsx`                                        | 공용 아이콘 모음                                                      |

## Subdirectories

| Directory         | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| `ui/`             | shadcn CLI로 설치된 Radix 기반 프리미티브 — 직접 수정 최소화   |
| `base/`           | @base-ui/react 기반 프리미티브 (`base/ui/*`) + 애니메이션 래퍼 |
| `animated-icons/` | 애니메이션 아이콘                                              |
| `kibo-ui/`        | kibo-ui 포팅 컴포넌트 (image-zoom)                             |
| `react-bits/`     | react-bits 포팅 컴포넌트                                       |

## For AI Agents

### Working In This Directory

- 같은 이름의 프리미티브가 `ui/`와 `base/ui/`에 공존한다 (예: collapsible). import 경로를 바꿀 때는 어느 계열인지 확인할 것.
- MDX 문서에서 새 컴포넌트를 쓰려면 만들기만 해서는 안 되고 `mdx.tsx` 매핑에 등록해야 한다.

### Common Patterns

- named export, `@/` 절대경로 import, cva 기반 variant.

## Dependencies

### External

- radix-ui, @base-ui/react, lucide-react, cva, motion

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
