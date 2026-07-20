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
  { date: "2026-07-16", req: "1.10M", imp: "0.90M", fill: "82%", rev: "$2.6k" },
  { date: "2026-07-15", req: "1.15M", imp: "1.01M", fill: "88%", rev: "$2.8k" },
]

function AreaChart({
  labels,
  values,
}: {
  labels: string[]
  values: number[]
}) {
  const W = 640
  const H = 150
  const padX = 8
  const padTop = 10
  const padBottom = 24
  const min = 0
  const max = 100
  const innerW = W - padX * 2
  const innerH = H - padTop - padBottom

  const pts = values.map((v, i) => {
    const x = padX + (innerW * i) / (values.length - 1)
    const y = padTop + innerH * (1 - (v - min) / (max - min))
    return [x, y] as const
  })

  const line = pts.map(([x, y]) => `${x},${y}`).join(" ")
  const area =
    `${padX},${padTop + innerH} ` +
    pts.map(([x, y]) => `${x},${y}`).join(" ") +
    ` ${padX + innerW},${padTop + innerH}`

  const gridYs = [0.25, 0.5, 0.75, 1].map((f) => padTop + innerH * f)

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="요청 대비 응답률 추이"
    >
      <defs>
        <linearGradient id="fillArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {gridYs.map((y, i) => (
        <line
          key={i}
          x1={padX}
          x2={padX + innerW}
          y1={y}
          y2={y}
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="3 3"
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
      />
      {pts.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="3"
          fill="var(--background)"
          stroke="var(--primary)"
          strokeWidth="2"
        />
      ))}
      {labels.map((l, i) => (
        <text
          key={l}
          x={padX + (innerW * i) / (labels.length - 1)}
          y={H - 8}
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="11"
        >
          {l}
        </text>
      ))}
    </svg>
  )
}

export function StatsSection() {
  return (
    <section className="space-y-3">
      <SectionHeading emoji="📈" title="통계" />
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
        {/* Area chart */}
        <Card className="gap-3">
          <CardHeader className="flex-row items-center justify-between">
            <div className="text-sm font-semibold">요청 · 응답률 추이</div>
            <MoreLink />
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground mb-1 flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="bg-primary size-2 rounded-full" /> 응답률(fill)
              </span>
            </div>
            <AreaChart labels={chart.labels} values={chart.values} />
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
