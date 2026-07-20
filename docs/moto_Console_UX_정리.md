# 🔮 moto Console UX — 리뉴얼 문서 정리

> Playout+ (NEW ID FAST 채널 운영 콘솔)의 UX 리뉴얼 마스터 문서 요약
> 원본 Figma: `moto_Console_UX` (file key `a9hDumrK1VMlaT0cliegi9`)
> 정리일: 2026-07-14

---

## 🧭 시작하기 전에 — 이 서비스, 쉽게 이해하기

> 방대하고 어렵게 느껴지는 게 정상이에요. 방송 편성 + 멀티 플랫폼 납품 + 테넌시 + 권한이 한 번에 얽혀 있어서 그래요. 아래 비유로 큰 그림부터 잡고 시작하면 훨씬 쉬워요.

### 한 문장으로
**Playout+ = "인터넷 TV 채널(FAST)을 만들고 · 편성하고 · 삼성/LG 같은 플랫폼에 납품하는 방송국 운영 프로그램"** 이에요.
(FAST = 광고 보는 대신 무료로 보는 채널. 삼성 TV Plus, LG Channels가 대표적.)

### 방송국에 비유하면
콘텐츠가 시청자에게 닿기까지, 우리 서비스는 이런 방송국 역할을 대신해줘요:

| 실제 방송국 | Playout+에서 | 콘솔 메뉴 |
|---|---|---|
| 📦 자료 창고 (테이프·파일 보관) | 콘텐츠 등록·검수·관리 | **Content Library** |
| 📺 채널 개국 (MBC, tvN 같은) | 채널 만들고 소유·운영자 지정 | **Channel** |
| 🗓️ 편성표 짜기 (몇 시에 뭐 틀지) | 편성표(EPG) 구성 | **Schedule** |
| 🚚 다른 방송사에 프로그램 납품 | 삼성/LG 등 플랫폼에 전송 | **Platform Delivery / VOD** |
| 📡 실제 송출 + 광고 삽입 | 재생·광고·모니터링 | **Operations** |

### 제일 헷갈리는 개념 4개, 비유로

**① Tenant / Organization / User** — "건물 vs 회사 vs 사람"
- **Tenant** = 칸막이 쳐진 **서비스 공간**(건물의 한 임대칸). 데이터가 절대 안 섞임. *회사가 아님!*
- **Organization** = 그 안에 입주한 **회사** (우리, 고객사, 공급사…)
- **User** = 실제 **로그인하는 사람**
- 👉 "삼성이라는 회사"가 아니라 "삼성 전용으로 칸막이 친 서비스 공간"이 Tenant.

**② 소유 · 운영 · 공급 · 접근** — "건물주 vs 관리소장 vs 납품업체 vs 출입증"
한 채널에 이 4명이 **다 다른 사람**일 수 있어요:
- **Owner(소유)** = 이 채널의 사업 주인 (계약·정산 책임)
- **Operator(운영)** = 실제로 편성·운영하는 사람 (주인과 다를 수 있음)
- **CP(공급)** = 콘텐츠를 대준 회사 (≠ 권한!)
- **Permission(접근)** = 이 사람이 보고 고칠 수 있나 (역할과 별개)
- 👉 "우리가 만든 채널이니까 다 우리 콘텐츠"가 **아닐 수 있다** — 이게 복잡함의 핵심 원인.

**③ Canonical ↔ Platform-specific** — "원본 vs 거래처별 포장"
- **Canonical** = 콘텐츠의 **원래 값** (원제목, 기본 포스터, 본질 장르)
- **Platform-specific** = 삼성/LG에 **납품할 때만 다르게 쓰는 값** (플랫폼 전용 제목·이미지·장르)
- 👉 같은 콘텐츠라도 삼성엔 이렇게, LG엔 저렇게 보낼 수 있어서, 화면에서 **원본 값과 납품용 값을 절대 안 섞음.**

**④ Saved ≠ Ready** — "저장 ≠ 방송 준비 완료"
- 저장했다고 바로 서비스되는 게 아님. 필수 메타·파일·권리·등급이 다 채워져야 "준비완료(Ready)".
- 👉 그래서 단순 저장 오류 말고 **"왜 아직 안 되는지" 체크리스트(readiness)** 로 보여줌.

### 콘텐츠 한 편의 여정 (이 순서만 외우면 절반은 이해)
```
① 업로드/등록 → ② 검수 → ③ 편집(메타·이미지·등급) → ④ 편성 후보(권리·CP·국가 통과?)
→ ⑤ 편성표 EPG → ⑥ 전송(삼성·LG Feed / VOD) → ⑦ 재생·광고 → ⑧ 모니터링
```
콘솔의 거의 모든 화면은 이 여정의 **한 칸**을 담당해요. 어떤 화면을 보든 "이건 여정 몇 번 칸이지?"만 짚으면 길을 안 잃어요.

---

## 0. 한눈에 — 이게 뭐하는 프로젝트인가

**NEW ID의 FAST 채널 운영 콘솔 "Playout+"를 다시 설계하는 UX 리뉴얼.** (코드명 moto)

콘텐츠 한 편이 서비스되기까지의 파이프라인을, **신규 운영자·고객사(Owner)·공급사(CP)도 매뉴얼 없이** 쓸 수 있게 만드는 게 목표.

```
업로드 → 검수 → 편집 → 편성 후보 → 편성표(EPG) → 전송(Feed/VOD) → 재생·광고 → 모니터링
```

문서는 **6개 그룹**으로 묶여 있음. (`───── 이름 ─────` 페이지는 폴더 대용 구분선이라 내용 없음)

| 그룹 | 페이지 | 성격 |
|---|---|---|
| **기반 (Foundation)** | 1 IA 구조도 · 2 Architecture · 3 역할·콘솔 구조 | 제품 구조·도메인·역할 모델 |
| **원칙 · 문서** | 4 용어 가이드 · 5 설계 원칙 · 6 기여 가이드 | 공통 언어·설계 기준 |
| **화면 (Screens)** | 7 화면 지도 · 8 LOFI 와이어프레임 · 9 핵심 화면 · 10 어드민 콘솔 · 11 역할별 뷰 | 실제 제품 화면 |
| **스펙 (Specs)** | 12 운영 시나리오·테넌시 · 13 개발 가이드 · 14 컴포넌트·토큰 | 개발·시스템 |
| **요구 · 탐색** | 15 Ideation · 16 운영팀 요구·백로그 | 아이디어·사용자 요구 |
| **참고 (Reference)** | ※ Wurl 캡처 | 경쟁사 벤치마크 |

---

## ▬ 1. 기반 (Foundation)

가장 중요한 뼈대. 리뉴얼 판단의 근거가 되는 그룹.

### 1 · IA 구조도 (Sitemap)
moto Console은 **두 개의 콘솔**로 나뉨.

- **운영자 콘솔 (Operator)** — Content Library · Channel · Schedule · VOD · Platform Delivery · Operations + 횡단(Reference Data, Access & Support)
- **관리자 콘솔 (Provider Admin)** — Tenants · Organizations · Users & Roles · Billing · System Health
- **지원 모드 (Support)** — 관리자가 특정 테넌트로 진입 시 운영자 콘솔 + "대행 배너"로 전환 (impersonation · 감사 로그)

### 2 · Architecture ⭐ (리뉴얼에서 제일 자주 볼 페이지)
제품을 위 → 아래로 읽는 수직 구조.

**거버넌스 — 4개의 독립 축 (핵심!)**
같은 채널에 얽히지만 **서로 다른 값**이다. 이걸 한 값으로 섞으면 화면·권한이 무너짐.

| 축 | 주체 | 질문 |
|---|---|---|
| 소유 · Ownership | Channel Owner | 이 채널의 사업적 소유 주체는? (계약·정산) |
| 운영 · Operation | Channel Operator | 누가 편성·운영? (소유와 다를 수 있음) |
| 공급 · Supply | Content Provider (CP) | 이 Program을 누가 공급? (권한 아님) |
| 접근 · Permission | User Access Scope | 이 데이터를 보고 고칠 수 있나? (역할과 별개) |

> "O&O라서 다 Provider CP" 같은 가정이 깨지는 지점이 곧 복잡성의 출처.

**담김 구조 (테넌시)**
`Tenant(격리된 서비스 통) ⊃ Organization(회사) ⊃ User(사람)`
한 회사가 여러 역할(Provider+Operator+Support 등)을 동시에 가질 수 있음.

**권한 공식**
`유효 권한 = 조직 Entitlement(계약 천장) ∩ 사용자 Grant(배정)`
기본 거부 · 역할=프리셋 · 막히면 why-not(조직 미허용 vs 역할 없음) 표시.

**데이터 레이어 (콘텐츠가 흐르는 수직 구조)**
```
외부 IAM (오픈소스 IdP — 인증·계정·SSO·테넌시 담당, 자체개발 아님)
  ↓ OIDC 토큰(신원+역할)
① Access Enforcement (인가만 수행 — 계정 CRUD 없음)
② Content Library (Program·Series·Season·Asset·Rating·Rights·CP Mapping…)
③ Channel Operations (Owner·Operator·Service Country·Allowed CP…)
④ Scheduling / Playout (Candidate → Schedule → Playout)
⑤ 전송 (병렬)  ├ Platform Delivery = Syndication (FAST)
             └ VOD Delivery (Group·Target·Publication)
⑥ Playback / Ads / Distribution (Origin·Ads URL·SSAI·Ad Macro)
  └ 횡단축: Reference Data(공통 마스터) · Readiness/Validation(계산되는 상태)
```

### 3 · 역할 · 콘솔 구조
5개 역할(**Provider · Operator · Owner · CP · Support**) 정의 + 거버넌스 다이어그램 + **역할×콘솔 매핑** + **역할×화면 접근 매트릭스**. 리뉴얼의 권한 설계 기준표.

---

## ▬ 2. 원칙 · 문서

### 4 · 용어 가이드 — "같은 단어 = 같은 뜻"
특히 **"이건 저것과 다르다(≠)"** 를 강조. 헷갈리는 쌍은 UI부터 다르게 둠.

| 이것 | ≠ | 저것 |
|---|---|---|
| Tenant (서비스 칸막이) | ≠ | Organization (회사) |
| Owner (사업 소유) | ≠ | Operator (운영 책임) |
| CP (콘텐츠 공급) | ≠ | 사용자 권한 |
| Genre (본질 장르) | ≠ | Program Category (운영 묶음) ≠ Keyword (자유 태그) |
| Syndication (전송 준비) | ≠ | Distribution (실제 전달) |
| Feed (산출물 파일) | ≠ | Delivery (전달 실행) |
| **Saved (저장됨)** | ≠ | **Ready (서비스 준비완료)** |
| Canonical (원본 값) | ≠ | Platform-specific (플랫폼 전용 override) |

### 5 · 설계 원칙 + 온보딩 방향
화면을 그리고 리뷰할 때의 판단 기준.

**5대 설계 원칙**
1. 성격이 다르면 나눠서 보여준다 (콘텐츠 값 ↔ 플랫폼 전송 값을 같은 카드에 안 섞음)
2. 상태를 정직하게 표시한다 (Saved ≠ Ready, 자동계산 vs override 구분)
3. 왜 안 되는지 그 자리에서 알려준다 (Ready·Warning·Blocked·N/A)
4. 권한과 맥락을 분명히 한다 (권한없음 ↔ 데이터없음 구분, Support 모드 표시)
5. 운영자의 부담을 줄인다 (Rating source→override→계산, 삭제 대신 비활성화)

**온보딩 9원칙** (처음 보는 사람도 매뉴얼 없이)
점진적 공개 · 인지 > 회상 · 쉬운 말 · 안내하는 빈 상태 · why-not readiness · 일관된 패턴 · 실수에 관대(Trash D-15 복구) · 진행 가시화 · 첫 실행 온보딩

### 6 · 기여 가이드
이 문서를 팀이 함께 유지하는 규칙.
- 변경 시 제목에 `[New]` · `[Update]` · `[Fix]` 태그
- 용어는 반드시 ②(4번) 용어 가이드 기준
- 의미가 바뀌면 Revision↑ + 변경 요약 · v0.x → 팀 합의 시 v1.0
- **담당: 효식(PM·UX/기획) · 소은(디자인) · 도영(개발)**

---

## ▬ 3. 화면 (Screens)

### 7 · 화면 지도 (Screen Map)
실제 Playout+ 메뉴 구조 기준의 **작업 체크리스트** (✅있음 / 🔵신규필요 / 후순위 / 부분).

우선 신규 화면:
1. Ingest (Ness = 인코딩 + 자막 프리셋 통합)
2. RT / Linear Channel 목록
3. Program CP · Series · Season
4. VOD Feed (발행 이력 3단계)
5. RT Schedule

### 8 · LOFI 와이어프레임 (13 아키타입)
"같은 종류는 같은 모양"으로 재사용하기 위한 화면 유형 13종:
List · Detail/Edit · Scheduling(EPG) · Dashboard · Wizard · State variations · Upload · Review · Validation · Media editor · Pipeline · Overlay/Modal · Progress/Notification
(+ Program 업로드 Canonical Default + Platform Override 패턴, 온보딩 스팟라이트)

### 9 · 핵심 화면 (26종)
위 아키타입으로 그린 **실제 제품 화면 와이어프레임**. *(세로 2만px 대형 캔버스 — 개별 화면은 필요 시 화면 단위로 확대해 리뷰)*

### 10 · Provider 어드민 콘솔
관리자 콘솔 화면. *(가로 9천px 와이드 레이아웃 — 필요 시 구간별 확대)*

### 11 · 역할별 뷰 변형 ⭐ (핵심 인사이트)
**같은 "Program Library" 화면이 역할에 따라 어떻게 달라지는가.**

| 역할 | 보이는 범위 | 액션 | 특징 |
|---|---|---|---|
| **Operator** | 테넌트 내 전체 Program | 다 편집(Edit) | 숨김/잠금 없음. 기본 운영 뷰 |
| **Owner** | 자기 소유 콘텐츠만 | 승인/반려 중심 | 직접 편집 잠금, Ingest·Operations 숨김 |
| **CP** | 자기 공급분만 | 등록·검수 제출 | CP 필터 잠금 🔒, 나머지 다 숨김 |
| **Support** | Operator와 동일 | 다 편집 | 상시 대행 배너 + 감사 로그, "End on-behalf"로 종료 |

> 핵심: **26개 화면을 역할마다 복제하지 않고, 하나의 화면 + 접근 매트릭스로 role-gating.**

---

## ▬ 4. 스펙 (Specs)

### 12 · 운영 시나리오 & 테넌시
**테넌시 3형태**
- **Provider branded** — 우리가 직접 운영하는 FAST 서비스 (= Playout+ 자체)
- **Independent white label** — 고객사가 독립적으로 운영
- **Supported white label** — 고객사 브랜드지만 Provider가 운영 지원

**대표 운영 시나리오 5종**
1. 외부 CP가 Program만 업로드하고 Provider가 채널 운영
2. 파트너 소유 채널을 Provider가 운영
3. Provider O&O 채널에 외부 CP 콘텐츠를 편성
4. 외부 Samsung Feed를 받아 LG Channels로 재전송 (Platform Genre Remap)
5. White Label 고객사 운영 (Support 모드)

### 13 · 개발 가이드
- **화면 전용 API** — 프론트가 화면 기준으로 API를 생각 (Program Edit, Channel Edit, Scheduling Candidate, Platform Delivery/Feed Validation, VOD Delivery, User Context)
- **내부 용어 ↔ 화면 표시명 매핑표**
- 신규 채널 온보딩 12스텝 (OPS / Dev1 / Dev2 핸드오프)

### 14 · 컴포넌트 · 토큰 ⭐ (디자인 시스템 = SSOT)
리뉴얼 시 하드코딩 말고 여기 것 재사용.

- **컬러 토큰** — bg(page·band·surface·subtle·pill) / text(primary·secondary·muted·faint·accent) / accent(default·soft) / **status(ready·warning·blocked·n/a)** / chip(category·keyword)
- **타이포** — Noto Sans KR, 8단계 스케일: Display 40 → H1 26 → H2 21 → Title 16 → Body 13.5 → Small 12.5 → Caption 11.5 → Micro 11
- **컴포넌트** — Button · Toggle · Status Pill · Chip · Tab · Sidebar Item · Field · Card · Status Tag(확정도)

---

## ▬ 5. 요구 · 탐색

### 15 · Ideation (경쟁사 대비 IN / OUT)
경쟁사(CISMTECH · GEMISO · Wurl) 비교로 뽑은 범위 필터. PDF(v0.2) 뼈대 안은 IN, 그 밖은 OUT/후순위/연동.

- **IN** — Content Library, 거버넌스, Canonical↔Platform, 편성 후보 검증, Platform/VOD Delivery, Playout·모니터링, SSAI/광고
- **OUT / 연동** — AI 자동메타·자연어검색(MAIA), 얼굴/OCR 인식, SNS 배포(G-SAM), 광고영업(iAdsales), 장기 아카이브(MYMY)
- **채택** — Wurl식 Workspace 담기(bin) UX
- **★ 필자 추천 (탐색)** — **moto 코파일럿** (AI 운영 어시스턴트): 편성 갭 채우기, "왜 전송 불가?" 진단, 메타 자동채움 → 실행은 승인 후 협업과 연결

### 16 · 운영팀 요구 · 백로그
2026-07-13 미팅 신규 요구 10건, 우선순위 P1 > P2 > P3. (Asana 백로그와 1:1 연동)

- **P1 (지금 먼저)** — ① 에셋 전체 개요 대시(엑셀/CSV 대체) · ④ 카테고리 강제 리밋 · ⑤ 폴더형 VOD 그룹  *(P1엔 와이어프레임 초안도 포함)*
- **P2** — ③ 키워드=메모/협업 · ⑩ 번인 플로우 간소화 · ⑧ 계정별 스토리지 뷰
- **P3 / 탐색** — ② 포토 에디터 · ⑥ 자동번역 · ⑦ AI 편성 · ⑨ 해외 플랫폼 메타

### ※ Wurl 캡처 (참고)
Wurl 실제 웹 UI를 Figma로 임포트한 벤치마크 자료 (표·다이얼로그·비디오플레이어 등 DOM 그대로).

---

## 🎯 디자이너로서 리뉴얼 때 꼭 쥐고 갈 5가지

1. **소유 · 운영 · 공급 · 접근은 4개의 다른 축** — 화면·권한 설계의 뿌리 (2·3·11)
2. **"≠" 용어 규칙** — 헷갈리는 개념은 UI 컴포넌트부터 다르게 (4)
3. **Saved ≠ Ready** — 저장 오류가 아니라 readiness 체크리스트 + why-not (5)
4. **역할별 화면 복제 금지 → role-gating** — 하나의 화면 + 접근 매트릭스 (11)
5. **14번 컴포넌트·토큰이 SSOT** — 새 화면은 토큰/컴포넌트 재사용

---

## 📌 다음에 이어서 할 수 있는 것
- 9번 핵심 화면 26종을 화면 단위로 상세 리뷰 (예: "Program 편집 화면 보여줘")
- 10번 어드민 콘솔 구간 확대
- 특정 페이지를 리뉴얼 관점에서 개선점 리뷰
- 우선순위(P1) 화면부터 개선안 스케치

---
---

# 📎 부록 (이해 보충)

## 부록 A. 지금 쓰는 Playout+ 실제 기능 (as-is · 특장점 시트 기준)

> 리뉴얼 스펙(PDF/Figma)은 "앞으로 만들 것"이고, 아래는 **지금 실제로 있는 기능**이에요. 추상적인 스펙보다 이걸 먼저 보면 "우리 서비스가 뭐 하는지" 감이 빨리 와요.

**📺 Channel (채널 관리)**
- 채널 이름·아트워크·장르·등급을 한 화면에서 설정
- **광고 정책(Ad Policy Type) 3종** — Auto(자동 광고포인트) / Interval(시간 간격) / Break Point(수동 지정)
- **Ad Slate(광고 대체영상) 복수 등록** — 채널 단위 관리 → *경쟁사 Wurl은 에피소드마다 수동 삽입해야 함 (우리 강점)*

**📦 Library (라이브러리)**
- 영상 일괄 업로드(mp4·mov·mpeg…), 드래그앤드롭
- **메타데이터 CSV 일괄 등록** ← 운영팀 "CSV 페인"의 근원
- **Stillcut 자동 생성** (썸네일 최대 3컷)
- **Internal Title ↔ Program Title 분리** (내부용 제목 vs 시청자 노출 제목)

**🗓️ Schedule (편성)** — *현행의 핵심 강점*
- **편성 템플릿** 기반 (요일별 적용·디폴트 자동로드) — 24시간 수동입력 안 해도 됨
- **Block Type 3종** — Repeat / Binge(이어보기) / Random
- **자동 콘텐츠 매칭** — Block에 시간+카테고리/키워드 지정 → 조건 맞는 콘텐츠 자동 배치
- 자동 편성 후 수동 수정 가능
- **편성표 뷰** — 7일치 한눈에 · 온에어 실시간 표시 · **다중 시간대(UTC·KST·MXT·EST)** · Excel/PDF/HTML 다운로드 · 에셋 클릭→편집 이동 · Ad Point/Ad Slate 미리보기

**🎬 VOD**
- VOD Group으로 묶어 외부 플랫폼 전송 · 그룹별 Ad Slate 등록
- 이미 업로드한 에셋을 채널·VOD 양쪽에 재사용 (이중작업 없음)

## 부록 B. 세 문서의 관계 (헷갈리지 않게)

| 문서 | 정체 | 언제 것 |
|---|---|---|
| **PDF** `playoutplus-platform-structure-guide-v0.2` | 리뉴얼의 **텍스트 원본 스펙** (=제품 구조 안내서 v0.2, 28p) | 앞으로 만들 것 |
| **Figma** `moto_Console_UX` | 그 PDF를 **화면·다이어그램·디자인시스템으로 시각화** | 앞으로 만들 것 |
| **TSV** `Playout+ 특장점 시트` | **지금 파는 현행 제품의 실제 기능** | 지금 있는 것 |

- **PDF ≈ Figma** 는 거의 1:1 (Figma가 PDF를 그림으로 옮긴 것). 둘 중 아무거나 봐도 내용 같음.
- **TSV만** 현행 제품 정보 → 리뉴얼에 없는 현행 강점(템플릿 편성 등)을 여기서 확인.

## 부록 C. 현행 대비 리뉴얼 갭 4가지 (⚠️ PDF·Figma엔 없는 내용)

1. **템플릿 편성 계승 빈틈** ⚠️ — 현행의 핵심(템플릿·Block Type·자동매칭)이 리뉴얼 스펙엔 거의 없음. 운영팀은 "편성이 제일 중요"라는데 정작 리뉴얼 문서엔 이 강점을 어떻게 이어갈지가 빠짐. → **리뉴얼 최대 빈틈.**
2. **"AI 편성"의 절반은 이미 있음** — 현행 자동 콘텐츠 매칭이 이미 규칙 기반 자동편성. "AI 편성"은 새로 만드는 게 아니라 여기에 권리·readiness 검증을 얹는 개선으로 보면 됨.
3. **"CSV 페인"의 근원** — 현행이 메타등록·시리즈 매칭을 CSV로 하기 때문. P1 "에셋 개요 대시"가 이 뿌리를 대체.
4. **현행 UI 용어가 리뉴얼 표시명 가이드에 없음** — Ad Slate·Ad Policy Type·Stillcut·Internal Title·편성표 다운로드·다중 시간대 등 익숙한 현행 용어가 PDF 10장 표시명 표에 매핑 안 됨. 온보딩 관점에서 살릴지/바꿀지 결정 필요.

## 부록 D. 헷갈리는 용어 — 쉬운 말 사전

| 용어 | 쉬운 말 | 안 헷갈리게 |
|---|---|---|
| Tenant | 칸막이 친 서비스 공간 | ≠ 회사(Organization) |
| Organization | 입주한 회사 | ≠ Tenant |
| Channel Owner | 채널 사업 주인 | ≠ Operator(운영자) |
| Channel Operator | 실제 편성·운영자 | ≠ Owner |
| CP (Content Provider) | 콘텐츠 대준 회사 | ≠ 사용자 권한 |
| Program | 콘텐츠 한 편(편성 최소단위) | ≠ Series/Season(묶음 상자) |
| Asset | 실제 파일(영상·자막·이미지) | ≠ 메타데이터(정보) |
| Genre | 본질 장르(드라마·코미디) | ≠ Category(운영 묶음) ≠ Keyword(자유 태그) |
| Program Category | 운영용 묶음(여름특집 등) | ≠ Channel Category(채널 분류) |
| Canonical | 콘텐츠 원본 값 | ≠ Platform-specific(납품용 값) |
| Syndication | 플랫폼 납품 준비 | ≠ Distribution(실제 전달) |
| Feed | 납품용 산출물(파일) | ≠ Delivery(전달 실행) |
| VOD Group | VOD로 보낼 묶음 | ≠ Channel(FAST 편성단위) |
| Readiness | 서비스 준비됐나(계산되는 상태) | ≠ Saved(단순 저장) |
| Effective Rating | 자동 계산된 최종 등급 | ≠ source rating(운영자 입력 원본) |
| Support Mode | 대신 들어가 지원하는 상태 | 일반 운영모드와 구분 표시 |
