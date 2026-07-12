<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-07-12 | Updated: 2026-07-12 -->

# registry

## Purpose

이 사이트가 shadcn 레지스트리로 공개하는 컴포넌트들의 소스. `npx shadcn add https://smlee.info/r/<name>.json`으로 외부 프로젝트에서 설치할 수 있다.

## Key Files

| File            | Description          |
| --------------- | -------------------- |
| `index.ts`      | 레지스트리 진입점    |
| `__index__.tsx` | 예제/컴포넌트 인덱스 |

## Subdirectories

| Directory                | Purpose                                                                  |
| ------------------------ | ------------------------------------------------------------------------ |
| `components/`            | 공개 컴포넌트 원본 (text-flip, copy-button, github-contributions 등 9종) |
| `examples/`              | 문서 카탈로그용 데모 (`_registry.ts`에 등록)                             |
| `hooks/` `icons/` `lib/` | 컴포넌트가 의존하는 훅·아이콘·유틸 (haptic 등)                           |
| `transformed/`           | **빌드 산출물** — `build-registry.mts`가 생성. 직접 수정 금지            |

## For AI Agents

### Working In This Directory

- 컴포넌트를 추가·수정하면 `yarn registry:build`를 실행해야 한다. 이 명령이 `transformed/`와 `public/r/*.json`, 루트 `registry.json` 산출물을 갱신한다.
- `transformed/`와 `public/r/`은 생성물이지만 **커밋 대상**이다 (직접 편집만 금지).
- 레지스트리 관련 설정: 루트 `registry.json`, `src/config/registry.ts`, `src/lib/registry.ts`.

### Testing Requirements

- `yarn registry:validate` (shadcn registry 스키마 검증), `yarn vitest run src/utils/registry.test.ts`

## Dependencies

### Internal

- 컴포넌트 문서 페이지(`app/(app)/(docs)/components`)가 여기의 예제·소스를 렌더링한다.

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
