import { AppShell } from "@/components/layout/app-shell"
import { AlertStrip } from "@/components/dashboard/alert-strip"
import { KpiSection } from "@/components/dashboard/kpi-section"
import { SummarySection } from "@/components/dashboard/summary-section"
import { StatsSection } from "@/components/dashboard/stats-section"
import { ContentSection } from "@/components/dashboard/content-section"
import { NewsSection } from "@/components/dashboard/news-section"
import { RightRail } from "@/components/dashboard/right-rail"

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="flex flex-1 items-start gap-6 p-6">
        {/* Center column */}
        <main className="min-w-0 flex-1 space-y-8">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold tracking-tight">
              안녕하세요, 안소은님 👋
            </h1>
            <p className="text-muted-foreground text-sm">
              이어서 할 일 · 지금 문제 · 채널·성과·광고를 한눈에. (역할별로 위젯
              구성이 달라집니다)
            </p>
          </div>

          <AlertStrip />
          <KpiSection />
          <SummarySection />
          <ContentSection />
          <NewsSection />
          <StatsSection />
        </main>

        {/* Right rail */}
        <RightRail />
      </div>
    </AppShell>
  )
}
