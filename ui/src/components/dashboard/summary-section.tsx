import { CheckCircle2, Circle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SectionHeading, MoreLink } from "./section-heading"

type Task = { label: string; done?: boolean }
type Checklist = { title: string; tasks: Task[] }

const checklists: Checklist[] = [
  {
    title: "채널 셋업",
    tasks: [
      { label: "채널 정보 설정하기", done: true },
      { label: "편성표 등록하기", done: true },
      { label: "SSAI 주소 연결하기" },
      { label: "플랫폼 전송 설정하기" },
    ],
  },
  {
    title: "런칭 파이프라인",
    tasks: [
      { label: "인코딩 프로파일 설정", done: true },
      { label: "매니페스트 검증" },
      { label: "판권 · 등급 설정" },
      { label: "광고(VAST) 연동" },
      { label: "QA 체크리스트" },
      { label: "플랫폼 승인 요청" },
    ],
  },
  {
    title: "권장 작업",
    tasks: [
      { label: "운영자 알림 설정하기" },
      { label: "리포트 자동화 설정하기" },
    ],
  },
]

function ChecklistCard({ list }: { list: Checklist }) {
  const done = list.tasks.filter((t) => t.done).length
  const total = list.tasks.length
  const pct = Math.round((done / total) * 100)

  return (
    <Card className="gap-3">
      <CardHeader className="gap-2">
        <div className="text-sm font-semibold">{list.title}</div>
        <div className="text-muted-foreground text-xs">
          {done}/{total}개 완료
        </div>
        <Progress value={pct} />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {list.tasks.map((t) => (
            <li key={t.label} className="flex items-center gap-2 text-sm">
              {t.done ? (
                <CheckCircle2 className="text-success size-4 shrink-0" />
              ) : (
                <Circle className="text-muted-foreground/40 size-4 shrink-0" />
              )}
              <span
                className={cn(
                  t.done && "text-muted-foreground line-through"
                )}
              >
                {t.label}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export function SummarySection() {
  return (
    <section className="space-y-3">
      <SectionHeading emoji="🧩" title="요약" action={<MoreLink>접어두기 ∧</MoreLink>} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {checklists.map((list) => (
          <ChecklistCard key={list.title} list={list} />
        ))}
      </div>
    </section>
  )
}
