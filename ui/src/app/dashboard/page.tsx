import { ChevronRight } from "lucide-react"

import { AppShell } from "@/components/layout/app-shell"
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
            <button
              type="button"
              className="group flex items-center gap-1.5 text-xl font-semibold tracking-tight"
            >
              안소은의 대시보드
              <ChevronRight className="text-muted-foreground size-5 transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="text-muted-foreground text-sm">
              Playout+ FAST 운영 관제 · 오늘의 현황을 한눈에
            </p>
          </div>

          <SummarySection />
          <StatsSection />
          <ContentSection />
          <NewsSection />
        </main>

        {/* Right rail */}
        <RightRail />
      </div>
    </AppShell>
  )
}
