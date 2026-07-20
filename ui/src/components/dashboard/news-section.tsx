import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SectionHeading, MoreLink } from "./section-heading"

const guides = [
  "채널 런칭 12단계 체크리스트",
  "SSAI 주소 세팅 & VAST 연동 방법",
  "편성표(EPG) 업로드 규칙",
  "인코딩 프로파일 권장 설정",
  "판권 · 콘텐츠 등급 관리",
  "플랫폼별 매니페스트 검증 가이드",
  "리포트 자동화 설정하기",
]

const news = [
  { text: "[점검] 07/17(금)~07/19(일) 전송 시스템 점검 안내", date: "2026-07-10" },
  { text: "[안내] LG Channels 매니페스트 검증 정책 개편", date: "2026-07-09" },
  { text: "[중요] 07/20(월) SSAI 광고 태그 자동 검증 도입", date: "2026-07-07" },
  { text: "📣 7월 업데이트 소식 — 편성 AI 추천 베타", date: "2026-07-06" },
  { text: "[안내] 신규 플랫폼(Latam) 딜리버리 오픈", date: "2026-07-02" },
  { text: "[점검] 07/10 인코딩 파이프라인 안정화 작업", date: "2026-06-25" },
  { text: "[안내] 광고 수익 리포트 항목 개편 안내", date: "2026-06-22" },
]

export function NewsSection() {
  return (
    <section className="space-y-3">
      <SectionHeading emoji="📰" title="가이드 · 소식" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* 운영 가이드 */}
        <Card className="gap-3">
          <CardHeader className="flex-row items-center justify-between">
            <div className="text-sm font-semibold">운영 가이드</div>
            <MoreLink />
          </CardHeader>
          <CardContent>
            <ul className="space-y-2.5">
              {guides.map((g) => (
                <li key={g}>
                  <a
                    href="#"
                    className="hover:text-primary block truncate text-sm transition-colors"
                  >
                    {g}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* 시스템 공지 */}
        <Card className="gap-3">
          <CardHeader className="flex-row items-center justify-between">
            <div className="text-sm font-semibold">시스템 공지</div>
            <MoreLink />
          </CardHeader>
          <CardContent>
            <ul className="space-y-2.5">
              {news.map((n) => (
                <li
                  key={n.text}
                  className="flex items-center justify-between gap-3"
                >
                  <a
                    href="#"
                    className="hover:text-primary min-w-0 flex-1 truncate text-sm transition-colors"
                  >
                    {n.text}
                  </a>
                  <span className="text-muted-foreground shrink-0 text-xs tabular-nums">
                    {n.date}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
