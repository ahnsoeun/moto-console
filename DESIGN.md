# moto Design System

moto(구 Motoba) — Playout+ FAST 운영 콘솔의 디자인 시스템 문서.
값의 기준(SSOT)은 개발자 공통 토큰 레포 **`its-newid/nid-design-system`**, 표현/컴포넌트는 **shadcn/ui + shadcncraft** 킷을 리테마해서 사용한다.

_최종 업데이트: 2026-07-20 · 담당: 소은(프론트팀 UX/UI 디자이너)_

---

## 1. 큰 그림

```
nid-design-system (CSS 토큰, 값의 SSOT)
        │  같은 값
        ▼
Figma: moto_design_system (shadcncraft 리테마, Vega 스타일 = moto)
        │  화면 조립
        ▼
Figma: moto_console_ui (라이브러리 인스턴스로 최종 화면)
        │  구현
        ▼
Code: moto/ui (React + Tailwind v4 + shadcn/ui)
```

원칙: **Figma와 코드 중 한쪽을 매번 새로 만들지 않는다.** 공통 토큰(nid)에 양쪽을 연결해 차이를 줄인다.

| 영역 | 기준 |
|---|---|
| 색·radius·타이포 **값** | `nid-design-system` (코드 토큰) |
| 컴포넌트 시각 규칙 | Figma `moto_design_system` (Vega) |
| 최종 화면·UX 흐름 | Figma `moto_console_ui` |
| 실제 동작·상태·접근성 | Code `moto/ui` |

---

## 2. 소스 & 파일

| 무엇 | 위치 | 비고 |
|---|---|---|
| 값 SSOT | `github.com/its-newid/nid-design-system` | 순수 CSS 토큰(빌드 없음), Tailwind v4, shadcn 이름 규약 |
| Figma DS | `moto_design_system` (`HwmxgQ37U704QiHuUkdngX`) | shadcncraft 킷 리테마. **쓰기 OK(소은 소유)** |
| Figma 화면 | `moto_console_ui` (`IRElwubKxIMCchS9rv986d`) | 인스턴스만, Detach 금지 |
| 콘솔 마스터 doc | `Motoba_Console_UX` (`a9hDumrK1VMlaT0cliegi9`) | PM 소유 → **읽기 전용** |
| 코드 | `moto/ui` | Next.js 16 · React 19 · Tailwind v4 · shadcn 4 |

---

## 3. 토큰 아키텍처

nid와 동일하게 **원시 팔레트 → 시맨틱(역할)** 2층 구조.

**Figma 색 체인:**
```
컴포넌트 → Mode(Light/Dark 시맨틱) → Style[Vega]의 color/light·dark/* → NID Palette(원시)
```
- `NID Palette` — nid grey/blue/red 원시 램프 (브랜드 원시값)
- `Style`(8스타일 모드 중 **Vega = moto**) — 시맨틱 색값 + 컴포넌트 사이징/radius
- `Mode`(Light/Dark) — shadcn 시맨틱 토큰, 컴포넌트가 실제로 바인딩하는 층

앱/컴포넌트는 팔레트를 직접 쓰지 않고 **시맨틱(또는 그 Tailwind 유틸)만** 참조한다.

---

## 4. 컬러 (nid 값)

### 원시 팔레트
- **grey** 5 `#f5f5f5` · 10 `#ebebeb` · 20 `#d8d8da` · 25 `#d5d6d7` · 30 `#cbcbcd` · 40 `#adadae` · 50 `#8e8e90` · 60 `#707071` · 70 `#515152` · 80 `#2d2d2e` · 90 `#1c1c1c`
- **blue** 100 `#e6f1fe` · 150 `#d8e9fd` · 200 `#c7dfff` · 250 `#b2d4ff` · 300 `#94c2fc` · 400 `#62a6fa` · 500 `#2f89f8` · 600 `#0571f7` · 700 `#0460d2` · 800 `#0450af` · 900 `#03408d` · 1000 `#02336f`
- **red** 100 `#fff1f0` · 150 `#ffd9d6` · 200 `#ffbdb8` · 300 `#ffa39e` · 400 `#ff7875` · 500 `#ff4d4f` · 600 `#f5222d` · 700 `#cf1322` · 800 `#a8071a` · 900 `#820014` · 1000 `#5c0011`
- white `#ffffff` · black `#000000`

**확장 팔레트 (moto 추가 · nid에 아직 없음, Ant 계열로 정합):**
- **green** 500 `#73d13d` · 600 `#52c41a` · 700 `#389e0d`
- **gold** 500 `#ffc53d` · 600 `#faad14` · 700 `#d48806`
- **purple** 500 `#9254de` · 600 `#722ed1`
- **cyan** 500 `#36cfc9` · 600 `#13c2c2`

### 시맨틱 (Light / Dark)

| 토큰 | Light | Dark |
|---|---|---|
| background | white | grey-90 `#1c1c1c` |
| foreground | grey-90 | grey-5 `#f5f5f5` |
| card / popover | white | grey-80 `#2d2d2e` |
| card/popover-foreground | grey-90 | grey-5 |
| **primary** | **blue-600 `#0571f7`** | **blue-500 `#2f89f8`** |
| primary-foreground | white | grey-90 |
| secondary | grey-5 | grey-80 |
| secondary-foreground | grey-90 | grey-5 |
| muted | grey-5 | grey-80 |
| muted-foreground | grey-50 `#8e8e90` | grey-40 `#adadae` |
| accent | grey-5 | grey-80 |
| accent-foreground | grey-90 | grey-5 |
| destructive | red-600 `#f5222d` | red-500 `#ff4d4f` |
| destructive-foreground | white | white |
| border / input | grey-20 `#d8d8da` | grey-70 `#515152` |
| ring | blue-600 | grey-50 `#8e8e90` |
| **success** | green-700 `#389e0d` | green-500 `#73d13d` |
| success-foreground | white | grey-90 |
| **warning** | gold-700 `#d48806` | gold-600 `#faad14` |
| warning-foreground | white | grey-90 |
| **info** | blue-600 `#0571f7` | blue-500 `#2f89f8` |
| info-foreground | white | grey-90 |

sidebar-* 는 위 시맨틱을 그대로 참조(sidebar=background, sidebar-primary=primary …).

> success/warning/info 는 destructive와 같은 "솔리드 배지" 용도. 대비는 nid destructive(#f5222d on white ≈ 3.9:1) 수준으로 맞춤 — 최종 배지 대비는 QA 확인. info는 primary(파랑)와 의도적으로 동일 계열.

### 상태·차트 색 (chart-1~5)

카테고리형 5색. 다크는 한 스텝 밝게.

| 토큰 | Light | Dark | 계열 |
|---|---|---|---|
| chart-1 | `#0571f7` | `#2f89f8` | blue (brand) |
| chart-2 | `#52c41a` | `#73d13d` | green |
| chart-3 | `#faad14` | `#ffc53d` | gold |
| chart-4 | `#722ed1` | `#9254de` | purple |
| chart-5 | `#13c2c2` | `#36cfc9` | cyan |

> 상태 배지 매핑: 정상=success · 진행=warning(앰버) · 실패/미연동=destructive · 붙는 중=success.

---

## 5. Radius

base `--radius: 0.625rem` (**10px**). 파생: **sm 6 · md 8 · lg 10 · xl 14** (px).
Figma 킷 스케일과 nid가 이미 일치 → 별도 정합 불필요.

---

## 6. 타이포그래피 (nid)

폰트 **Pretendard** (weight 700/500/400/300). 유틸 이름 `text-{b|m|r}{size}` = weight(b=700·m=500·r=400) × px.

| 클래스 | size / line-height | | 클래스 | size / line-height |
|---|---|---|---|---|
| b28 | 28 / 36 | | m18 | 18 / 22 |
| b24 | 24 / 28 | | m16 | 16 / 18 |
| b20 | 20 / 24 | | m14 | 14 / 18 |
| b16 | 16 / 20 | | m12 | 12 / 14 |
| b14 | 14 / 20 | | r18 | 18 / 24 |
| b12 | 12 / 14 | | r16 | 16 / 20 |
|  |  | | r14 | 14 / 18 |
|  |  | | r12 | 12 / 14 |

> ⚠️ Pretendard가 Figma에 설치돼 있어야 텍스트 스타일 적용 가능. 없으면 임의 대체하지 말고 먼저 확인/설치.

---

## 7. 현재 상태 (2026-07-20)

### Figma `moto_design_system` — 리테마
- ✅ 고아 컬렉션(Primitives/Semantic, 미사용) 삭제
- ✅ `NID Palette` 신설 (nid grey/blue/red 풀 램프)
- ✅ Vega 모드 핵심 시맨틱 54개 → nid 재-alias (primary 회색→**파랑**), Light/Dark 검증 완료
- ✅ radius nid 일치 확인
- ⬜ Vega 파생 알파/custom 토큰(`bg-primary-*`, `border-primary-*`, `opacity-*` 등) 아직 neutral 기반 → nid로 재계산
- ⬜ 폰트/타이포(Pretendard) 정합
- ✅ success/warning/info·chart-1~5 값 확정 (§4 · Ant 계열, 제안값 → 배지 대비 QA 남음)

### Code `moto/ui` (구 `console-ui`, 2026-07-20 폴더명 변경) — **nid 적용 완료**
- ✅ `globals.css` `:root`/`.dark`를 nid hex 값으로 교체(primary `#0571f7` 등, git 의존성 없이 인라인). success/warning/info/chart 포함, `@theme inline`에 매핑 추가.
- ✅ Pretendard 웹폰트 CDN import + html font-family 지정.
- ✅ radix 통합 패키지 기반 shadcn 컴포넌트 추가: button/card/badge(success·warning 변형)/input/separator/table/avatar/progress.
- ⬜ (선택) 나중에 `nid-design-system`을 git 의존성으로 붙여 `@import`로 갈아끼우면 값 SSOT 직결 가능. 지금은 인라인 값이 nid와 동일.

**앱 구조 (초안 여러 개용):**
```
moto/ui/
├─ ref/                     소스·레퍼런스 이미지 보관소(+README)
├─ public/PlayoutPlus.svg   로고(앱에서 렌더)
└─ src/
   ├─ app/
   │  ├─ page.tsx           / → UI 초안 갤러리 (src/lib/drafts.ts 목록 기반)
   │  └─ dashboard/page.tsx /dashboard → Home 관제 대시보드(아임웹 3단 레이아웃)
   ├─ components/
   │  ├─ ui/                shadcn 공용
   │  ├─ layout/            AppShell·Sidebar·Topbar (모든 초안 재사용)
   │  └─ dashboard/         대시보드 전용 섹션들
   └─ lib/drafts.ts         초안 화면 목록(여기에 추가하면 갤러리에 카드 생성)
```
> 새 초안 = `src/app/<name>/page.tsx` 만들고 `AppShell`로 감싼 뒤 `lib/drafts.ts`에 한 줄 추가.
> 배경 캔버스색 `#F1F5F9`(라이트). 지금 화면은 nid=Vega 톤 초안이며 배지 대비 등은 QA 남음.

---

## 8. 작업 규칙 (요약)

- 공식 Figma MCP만 사용. 시작 전 연결·권한 확인.
- Figma에서는 `moto_design_system` 인스턴스 재사용, Detach 금지, 기존 컴포넌트를 하드코딩으로 재생성 금지.
- AI 생성물은 WIP/테스트 페이지에서 먼저. 생성·수정 후 반드시 시각 확인.
- 인터랙션·반응형 UI는 코드(React)에서 먼저 만들고 검증.
- 값 동기화는 `shadcncraft-import-variables` 스킬로 nid globals.css ↔ Figma 변수.
- Figma Variables와 코드 디자인 토큰을 계속 동기화.
