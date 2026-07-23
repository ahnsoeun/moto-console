import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

type Severity = "danger" | "warning"

type AlertItem = {
  count: number
  label: string
  severity: Severity
}

const alerts: AlertItem[] = [
  { count: 3, label: "전송 실패", severity: "danger" },
  { count: 2, label: "SSAI/VAST 미연동", severity: "danger" },
  { count: 1, label: "인코딩 실패", severity: "warning" },
  { count: 4, label: "편성 gap", severity: "warning" },
  { count: 2, label: "판권등급 미설정", severity: "warning" },
]

function AlertPill({ item }: { item: AlertItem }) {
  const dot = item.severity === "danger" ? "bg-destructive" : "bg-warning"
  const count = item.severity === "danger" ? "text-destructive" : "text-warning"
  return (
    <button
      type="button"
      className="hover:bg-muted/60 flex min-w-0 flex-1 items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors"
    >
      <span className={cn("size-1.5 shrink-0 rounded-full", dot)} />
      <span className={cn("font-semibold tabular-nums", count)}>{item.count}</span>
      <span className="min-w-0 flex-1 truncate">{item.label}</span>
      <ChevronRight className="text-muted-foreground size-3.5 shrink-0" />
    </button>
  )
}

export function AlertStrip() {
  return (
    <Card className="gap-3 py-4">
      <CardContent className="space-y-3 px-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold">⚠️ 지금 주의 필요</span>
          <span className="text-muted-foreground text-xs">
            클릭하면 해당 화면으로 · 무엇이 왜 막혔는지
          </span>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          {alerts.map((a) => (
            <AlertPill key={a.label} item={a} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
