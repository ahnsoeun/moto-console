import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SectionHeading, MoreLink } from "./section-heading"

const chart = {
  labels: ["07-14", "07-15", "07-16", "07-17", "07-18", "07-19", "07-20"],
  values: [74, 88, 82, 90, 86, 92, 92],
}

const rows = [
  { date: "2026-07-20", req: "1.24M", imp: "1.14M", fill: "92%", rev: "$3.2k" },
  { date: "2026-07-19", req: "1.19M", imp: "1.06M", fill: "89%", rev: "$3.0k" },
  { date: "2026-07-18", req: "1.21M", imp: "1.05M", fill: "86%", rev: "$2.9k" },
  { date: "2026-07-17", req: "1.28M", imp: "1.15M", fill: "90%", rev: "$3.1k" },
]

function AreaChart({ values }: { values: number[] }) {
  const min = 0
  const max = 100
  const n = values.length

  const pts = values.map((v, i) => {
    const x = (100 * i) / (n - 1)
    const y = 100 * (1 - (v - min) / (max - min))
    return [x, y] as const
  })

  const line = pts.map(([x, y]) => `${x},${y}`).join(" ")
  const area = `0,100 ${line} 100,100`
  const gridYs = [25, 50, 75]

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      preserveAspectRatio="none"
      role="img"
      aria-label="요청 대비 응답률 추이"
    >
      <defs>
        <linearGradient id="fillArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {gridYs.map((y) => (
        <line
          key={y}
          x1="0"
          x2="100"
          y1={y}
          y2={y}
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      <polygon points={area} fill="url(#fillArea)" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function StatsSection() {
  return (
    <section className="space-y-3">
      <SectionHeading emoji="📈" title="통계" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Area chart */}
        <Card className="gap-3">
          <CardHeader className="flex-row items-center justify-between">
            <div className="text-sm font-semibold">요청 · 응답률 추이</div>
            <MoreLink />
          </CardHeader>
          <CardContent className="flex flex-col">
            <div className="text-muted-foreground mb-2 flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="bg-primary size-2 rounded-full" /> 응답률(fill)
              </span>
            </div>
            <div className="h-40">
              <AreaChart values={chart.values} />
            </div>
            <div className="text-muted-foreground mt-2 flex justify-between text-[11px] tabular-nums">
              {chart.labels.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="gap-3">
          <CardHeader className="flex-row items-center justify-between">
            <div className="text-sm font-semibold">기간별 성과</div>
            <MoreLink />
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>일자</TableHead>
                  <TableHead className="text-right">요청</TableHead>
                  <TableHead className="text-right">노출</TableHead>
                  <TableHead className="text-right">fill</TableHead>
                  <TableHead className="text-right">수익</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r, i) => (
                  <TableRow
                    key={r.date}
                    className={i === 0 ? "bg-primary/5" : undefined}
                  >
                    <TableCell className="font-medium">{r.date}</TableCell>
                    <TableCell className="text-right">{r.req}</TableCell>
                    <TableCell className="text-right">{r.imp}</TableCell>
                    <TableCell className="text-right">{r.fill}</TableCell>
                    <TableCell className="text-right">{r.rev}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
