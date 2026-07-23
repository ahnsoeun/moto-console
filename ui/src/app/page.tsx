import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { drafts } from "@/lib/drafts"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GalleryPage() {
  return (
    <div className="bg-[#F1F5F9] dark:bg-background min-h-svh">
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="space-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/PlayoutPlus.svg"
              alt="Playout+"
              className="h-6 w-auto dark:brightness-0 dark:invert"
            />
            <h1 className="text-2xl font-semibold tracking-tight">
              UI 초안 갤러리
            </h1>
            <p className="text-muted-foreground text-sm">
              moto 콘솔 화면 초안 모음 · 카드를 눌러 각 화면으로 이동
            </p>
          </div>
        </div>

        {/* Draft cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {drafts.map((d) => {
            const inner = (
              <Card
                className={
                  "h-full gap-3 transition-shadow" +
                  (d.soon
                    ? " opacity-60"
                    : " hover:border-primary/40 hover:shadow-md")
                }
              >
                <CardHeader className="gap-2">
                  <div className="flex items-center justify-between">
                    <Badge variant={d.soon ? "grey" : "success"}>
                      {d.soon ? "준비 중" : d.status}
                    </Badge>
                    {!d.soon && (
                      <ArrowRight className="text-muted-foreground size-4" />
                    )}
                  </div>
                  <CardTitle className="text-base">{d.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {d.description}
                  </p>
                </CardContent>
              </Card>
            )

            return d.soon ? (
              <div key={d.title} className="cursor-not-allowed">
                {inner}
              </div>
            ) : (
              <Link key={d.title} href={d.href} className="block">
                {inner}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
