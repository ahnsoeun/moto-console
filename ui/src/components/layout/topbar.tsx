import { ChevronRight, Globe, Plus, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Topbar() {
  return (
    <header className="bg-background sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b px-6">
      {/* Breadcrumb */}
      <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
        <span>관제</span>
        <ChevronRight className="size-3.5" />
        <span className="text-foreground font-medium">대시보드</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <div className="text-muted-foreground hidden items-center gap-1.5 rounded-full border px-3 py-1 text-xs sm:flex">
          <Globe className="size-3.5" />
          <span>Worldwide</span>
          <span className="text-border">·</span>
          <span className="text-primary">UTC</span>
          <span className="text-border">·</span>
          <span className="text-primary">EN</span>
        </div>
        <Button variant="outline" size="sm">
          <RefreshCw />
          새로고침
        </Button>
        <Button size="sm">
          <Plus />
          채널 만들기
        </Button>
      </div>
    </header>
  )
}
