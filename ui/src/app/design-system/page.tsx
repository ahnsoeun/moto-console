import type { Metadata } from "next"

import { cn } from "@/lib/utils"
import {
  ColorSwatch,
  Section,
  SwatchGrid,
} from "@/components/design-system/primitives"
import { BadgeShowcase } from "@/components/design-system/badge-showcase"
import { ButtonShowcase } from "@/components/design-system/button-showcase"
import { ChipShowcase } from "@/components/design-system/chip-showcase"
import { ComponentsShowcase } from "@/components/design-system/components-showcase"
import { ThemeToggle } from "@/components/design-system/theme-toggle"

// 상단 바로가기 내비
const NAV = [
  { id: "colors", label: "기본 색상" },
  { id: "status", label: "상태 색상" },
  { id: "surface", label: "표면" },
  { id: "sidebar", label: "사이드바" },
  { id: "grey", label: "그레이" },
  { id: "chart", label: "차트" },
  { id: "radius", label: "모서리" },
  { id: "type", label: "글자" },
  { id: "buttons", label: "버튼" },
  { id: "badge", label: "배지" },
  { id: "chip", label: "칩" },
  { id: "components", label: "컴포넌트" },
]

export const metadata: Metadata = {
  title: "디자인 시스템 · moto console",
  description: "moto console 디자인 토큰과 컴포넌트 미리보기",
}

// 크기 × 굵기 매트릭스용 데이터 (클래스는 리터럴로 두어 Tailwind가 감지하도록)
const TYPE_SIZES = [
  { name: "xs", px: 12, cls: "text-xs" },
  { name: "sm", px: 14, cls: "text-sm" },
  { name: "base", px: 16, cls: "text-base" },
  { name: "lg", px: 18, cls: "text-lg" },
  { name: "xl", px: 20, cls: "text-xl" },
  { name: "2xl", px: 24, cls: "text-2xl" },
  { name: "3xl", px: 30, cls: "text-3xl" },
]

const TYPE_WEIGHTS = [
  { name: "regular", value: 400, cls: "font-normal" },
  { name: "medium", value: 500, cls: "font-medium" },
  { name: "semibold", value: 600, cls: "font-semibold" },
  { name: "bold", value: 700, cls: "font-bold" },
]

export default function DesignSystemPage() {
  return (
    <div className="bg-background min-h-svh">
      <div className="mx-auto w-full max-w-5xl space-y-12 p-6 md:p-10">
        {/* Page header */}
        <header className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <p className="text-primary text-sm font-semibold tracking-tight">
              moto console
            </p>
            <ThemeToggle />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">디자인 시스템</h1>
          <p className="text-muted-foreground max-w-2xl text-sm">
            이 서비스에서 사용하는 색상 · 글자 · 버튼 같은 디자인 요소를 한곳에
            모아 보여줍니다.
          </p>
        </header>

        {/* Sticky section nav */}
        <nav className="bg-background sticky top-0 z-20 -mx-6 border-b px-6 py-3 md:-mx-10 md:px-10">
          <div className="flex gap-1 overflow-x-auto">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-2.5 py-1 text-sm whitespace-nowrap transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>

        {/* 1. Brand & core */}
        <Section
          id="colors"
          title="기본 색상"
          desc="버튼·링크 등 화면 곳곳에 쓰이는 가장 핵심적인 색입니다."
        >
          <SwatchGrid>
            <ColorSwatch name="primary" varName="--primary" note="blue-600" />
            <ColorSwatch
              name="primary-foreground"
              varName="--primary-foreground"
            />
            <ColorSwatch name="secondary" varName="--secondary" note="grey-5" />
            <ColorSwatch
              name="secondary-foreground"
              varName="--secondary-foreground"
            />
            <ColorSwatch name="accent" varName="--accent" />
            <ColorSwatch
              name="accent-foreground"
              varName="--accent-foreground"
            />
            <ColorSwatch name="muted" varName="--muted" />
            <ColorSwatch
              name="muted-foreground"
              varName="--muted-foreground"
              note="grey-50"
            />
          </SwatchGrid>
        </Section>

        {/* 2. Semantic */}
        <Section
          id="status"
          title="상태 색상"
          desc="성공 · 경고 · 정보 · 위험을 나타내는 색입니다. (foreground = 그 위에 올라가는 글자색)"
        >
          <SwatchGrid>
            <ColorSwatch name="success" varName="--success" note="green-700" />
            <ColorSwatch
              name="success-foreground"
              varName="--success-foreground"
            />
            <ColorSwatch name="warning" varName="--warning" note="gold-700" />
            <ColorSwatch
              name="warning-foreground"
              varName="--warning-foreground"
            />
            <ColorSwatch name="info" varName="--info" note="blue-600" />
            <ColorSwatch name="info-foreground" varName="--info-foreground" />
            <ColorSwatch
              name="destructive"
              varName="--destructive"
              note="red-600"
            />
            <ColorSwatch
              name="destructive-foreground"
              varName="--destructive-foreground"
            />
          </SwatchGrid>

          {/* 연한 배경 변형 (배지용) */}
          <div className="space-y-3 pt-2">
            <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
              연한 배경 (라벨·배지용)
            </div>
            <SwatchGrid>
              <ColorSwatch
                name="success-subtle"
                varName="--success-subtle"
                bordered
              />
              <ColorSwatch
                name="warning-subtle"
                varName="--warning-subtle"
                bordered
              />
              <ColorSwatch name="info-subtle" varName="--info-subtle" bordered />
              <ColorSwatch
                name="destructive-subtle"
                varName="--destructive-subtle"
                bordered
              />
            </SwatchGrid>
            {/* 소프트 배지 사용 예 */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="bg-success-subtle text-success inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium">
                성공
              </span>
              <span className="bg-warning-subtle text-warning inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium">
                경고
              </span>
              <span className="bg-info-subtle text-info inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium">
                정보
              </span>
              <span className="bg-destructive-subtle text-destructive inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium">
                위험
              </span>
            </div>
          </div>
        </Section>

        {/* 3. Surface / border */}
        <Section
          id="surface"
          title="표면 · 테두리"
          desc="배경 · 카드 · 테두리 등 화면 바탕에 쓰는 색입니다."
        >
          <SwatchGrid>
            <ColorSwatch name="background" varName="--background" bordered />
            <ColorSwatch name="foreground" varName="--foreground" />
            <ColorSwatch name="card" varName="--card" bordered />
            <ColorSwatch name="card-foreground" varName="--card-foreground" />
            <ColorSwatch name="popover" varName="--popover" bordered />
            <ColorSwatch
              name="popover-foreground"
              varName="--popover-foreground"
            />
            <ColorSwatch name="border" varName="--border" bordered />
            <ColorSwatch name="input" varName="--input" bordered />
            <ColorSwatch name="ring" varName="--ring" />
          </SwatchGrid>
        </Section>

        {/* 3b. Sidebar */}
        <Section
          id="sidebar"
          title="사이드바"
          desc="왼쪽 메뉴(사이드바)에 쓰는 색입니다."
        >
          <SwatchGrid>
            <ColorSwatch name="sidebar" varName="--sidebar" bordered />
            <ColorSwatch
              name="sidebar-foreground"
              varName="--sidebar-foreground"
            />
            <ColorSwatch name="sidebar-primary" varName="--sidebar-primary" />
            <ColorSwatch
              name="sidebar-primary-foreground"
              varName="--sidebar-primary-foreground"
            />
            <ColorSwatch name="sidebar-accent" varName="--sidebar-accent" />
            <ColorSwatch
              name="sidebar-accent-foreground"
              varName="--sidebar-accent-foreground"
            />
            <ColorSwatch
              name="sidebar-border"
              varName="--sidebar-border"
              bordered
            />
            <ColorSwatch name="sidebar-ring" varName="--sidebar-ring" />
          </SwatchGrid>
        </Section>

        {/* 4. Grey scale */}
        <Section
          id="grey"
          title="그레이"
          desc="밝기 단계별 회색입니다. 숫자가 클수록 진해요."
        >
          <SwatchGrid>
            {[90, 80, 70, 60, 50, 40, 30, 20, 10, 5].map((n) => (
              <ColorSwatch
                key={n}
                name={`grey-${n}`}
                varName={`--color-grey-${n}`}
                bordered={n <= 20}
              />
            ))}
          </SwatchGrid>
        </Section>

        {/* 5. Chart colors */}
        <Section
          id="chart"
          title="차트 색상"
          desc="그래프·차트에 순서대로 쓰는 색입니다."
        >
          <SwatchGrid>
            {[1, 2, 3, 4, 5].map((n) => (
              <ColorSwatch
                key={n}
                name={`chart-${n}`}
                varName={`--chart-${n}`}
              />
            ))}
          </SwatchGrid>
        </Section>

        {/* 6. Radius */}
        <Section
          id="radius"
          title="모서리 둥글기"
          desc="요소 모서리의 둥근 정도입니다. 오른쪽으로 갈수록 더 둥글어요."
        >
          <div className="flex flex-wrap items-end gap-6">
            {[
              { label: "sm", cls: "rounded-sm" },
              { label: "md", cls: "rounded-md" },
              { label: "lg", cls: "rounded-lg" },
              { label: "xl", cls: "rounded-xl" },
              { label: "2xl", cls: "rounded-2xl" },
              { label: "3xl", cls: "rounded-3xl" },
            ].map((r) => (
              <div key={r.label} className="flex flex-col items-center gap-2">
                <div
                  className={`bg-primary/15 border-primary/40 size-16 border ${r.cls}`}
                />
                <span className="text-muted-foreground font-mono text-xs">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Typography */}
        <Section
          id="type"
          title="글자"
          desc="기본 글꼴은 Pretendard입니다."
        >
          <div className="space-y-4">
            {/* Font families */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="bg-card space-y-1 rounded-lg border p-4">
                <div className="text-muted-foreground font-mono text-[11px]">
                  --font-sans
                </div>
                <div className="text-lg font-semibold">Pretendard Variable</div>
                <div className="font-sans text-sm">
                  다람쥐 헌 쳇바퀴에 타고파 · The quick brown fox
                </div>
              </div>
              <div className="bg-card space-y-1 rounded-lg border p-4">
                <div className="text-muted-foreground font-mono text-[11px]">
                  --font-mono
                </div>
                <div className="text-lg font-semibold">Geist Mono</div>
                <div className="font-mono text-sm">
                  0123456789 · const x = 1
                </div>
              </div>
            </div>

            {/* 크기 × 굵기 매트릭스 — Pretendard Variable은 45~920 전 굵기 지원 */}
            <p className="text-muted-foreground text-sm">
              크기(세로)와 굵기(가로)는 독립적입니다. 어떤 크기든 원하는 굵기를
              조합할 수 있어요. 예: 16px 세미볼드 ={" "}
              <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                text-base font-semibold
              </code>
            </p>
            <div className="overflow-x-auto">
              <table className="border-separate border-spacing-0 text-left">
                <thead>
                  <tr>
                    <th className="text-muted-foreground border-b py-2 pr-6 text-xs font-medium whitespace-nowrap">
                      크기 \ 굵기
                    </th>
                    {TYPE_WEIGHTS.map((w) => (
                      <th
                        key={w.name}
                        className="text-muted-foreground border-b px-6 py-2 text-xs font-medium whitespace-nowrap"
                      >
                        {w.name}
                        <span className="ml-1 font-normal opacity-60">
                          {w.value}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TYPE_SIZES.map((s) => (
                    <tr key={s.name}>
                      <td className="text-muted-foreground border-b py-4 pr-6 align-middle font-mono text-xs whitespace-nowrap">
                        {s.name} · {s.px}px
                      </td>
                      {TYPE_WEIGHTS.map((w) => (
                        <td
                          key={w.name}
                          className="border-b px-6 py-4 align-middle"
                        >
                          <span className={cn(s.cls, w.cls, "whitespace-nowrap")}>
                            가나다 Ag
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* 8. Buttons */}
        <Section
          id="buttons"
          title="버튼"
          desc="종류 · 크기 · 아이콘 · 상태별 버튼 모음입니다."
        >
          <ButtonShowcase />
        </Section>

        {/* 9. Badge */}
        <Section
          id="badge"
          title="배지 (Badge)"
          desc="상태나 분류를 나타내는 작은 라벨입니다. 12색 · 2크기."
        >
          <BadgeShowcase />
        </Section>

        {/* 10. Chip */}
        <Section
          id="chip"
          title="칩 (Chip)"
          desc="진행 상태 등을 표시하는 알약 모양 태그입니다. 11색."
        >
          <ChipShowcase />
        </Section>

        {/* 11. Components */}
        <Section
          id="components"
          title="컴포넌트"
          desc="입력창 · 진행바 · 표 등 그 외 기본 UI 요소입니다."
        >
          <ComponentsShowcase />
        </Section>

        <footer className="text-muted-foreground space-y-1 border-t pt-6 text-xs">
          <p>moto console 디자인 시스템 · 초안</p>
          <p>
            shadcn 스타일:{" "}
            <span className="font-mono">radix-vega</span> · 프리셋{" "}
            <span className="font-mono">b5JNbDXLW</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
