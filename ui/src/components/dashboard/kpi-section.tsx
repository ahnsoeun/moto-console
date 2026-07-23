import { Card, CardContent } from "@/components/ui/card"

type Kpi = { value: string; label: string }

const kpis: Kpi[] = [
  { value: "32", label: "라이브 채널" },
  { value: "2", label: "오늘 런칭" },
  { value: "92%", label: "요청률 (fill)" },
  { value: "$3.2k", label: "오늘 광고 수익" },
  { value: "68%", label: "스토리지" },
]

export function KpiSection() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {kpis.map((k) => (
        <Card key={k.label} className="gap-0 py-0">
          <CardContent className="space-y-1 px-4 py-4">
            <div className="text-2xl font-semibold tracking-tight tabular-nums">
              {k.value}
            </div>
            <div className="text-muted-foreground text-xs">{k.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
