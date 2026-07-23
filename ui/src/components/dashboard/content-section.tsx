import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SectionHeading, MoreLink } from "./section-heading"

const channels = [
  {
    name: "KBingers @K-MUSIC",
    meta: "partner URL 첨부 · 2026-07-20 13:27",
    initials: "KB",
    status: { label: "정상", variant: "success" as const },
  },
  {
    name: "Simply K-Pop 24/7",
    meta: "SSAI 연동됨 · 2026-07-20 09:41",
    initials: "SK",
    status: { label: "정상", variant: "success" as const },
  },
  {
    name: "Drama Prime @Latam",
    meta: "VAST URL 미등록 · 2026-07-19 18:02",
    initials: "DP",
    status: { label: "미연동", variant: "danger" as const },
  },
]

const adStatus = [
  { name: "KBingers @K-MUSIC", meta: "SSAI 연동됨 · fill 92%", variant: "success" as const, label: "정상" },
  { name: "Simply K-Pop 24/7", meta: "SSAI 연동됨 · fill 88%", variant: "success" as const, label: "정상" },
  { name: "Drama Prime @Latam", meta: "VAST URL 미등록", variant: "danger" as const, label: "미연동" },
]

export function ContentSection() {
  return (
    <section className="space-y-3">
      <SectionHeading emoji="🗂️" title="현황" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* 최근 등록 채널 */}
        <Card className="gap-3">
          <CardHeader className="flex-row items-center justify-between">
            <div className="text-sm font-semibold">최근 등록 채널</div>
            <MoreLink />
          </CardHeader>
          <CardContent className="space-y-3">
            {channels.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{c.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{c.name}</div>
                  <div className="text-muted-foreground truncate text-xs">
                    {c.meta}
                  </div>
                </div>
                <Badge variant={c.status.variant}>{c.status.label}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 광고 연동 상태 */}
        <Card className="gap-3">
          <CardHeader className="flex-row items-center justify-between">
            <div className="text-sm font-semibold">광고 연동 상태</div>
            <MoreLink />
          </CardHeader>
          <CardContent className="space-y-3">
            {adStatus.map((a) => (
              <div key={a.name} className="flex items-center gap-3">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{a.name}</div>
                  <div className="text-muted-foreground truncate text-xs">
                    {a.meta}
                  </div>
                </div>
                <Badge variant={a.variant}>{a.label}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
