import { ChevronDown, Sparkles } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const team = ["SA", "CW", "GE", "HS"]

export function RightRail() {
  return (
    <aside className="hidden w-[300px] shrink-0 flex-col gap-4 xl:flex">
      {/* Account */}
      <Card className="gap-0 py-0">
        <CardContent className="space-y-3 px-4 py-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 text-left"
          >
            <Avatar className="size-9">
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1 text-sm font-semibold">
                Soeun Ahn
                <ChevronDown className="text-muted-foreground size-3.5" />
              </div>
              <div className="text-muted-foreground truncate text-xs">
                spt@its-newid.com
              </div>
            </div>
          </button>

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">역할</span>
              <span className="font-medium">운영자</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">워크스페이스</span>
              <span className="font-medium">NEW ID</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">담당 채널</span>
              <span className="font-medium">17</span>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            워크스페이스 관리
          </Button>
        </CardContent>
      </Card>

      {/* Promo (dark) */}
      <Card className="gap-2 border-0 bg-foreground py-4 text-background">
        <CardContent className="space-y-2 px-4">
          <div className="flex items-center gap-1.5 text-sm font-semibold">
            <Sparkles className="size-4" />
            AI 편성 추천 체험
          </div>
          <p className="text-background/70 text-xs leading-relaxed">
            3분 만에 채널 편성 초안을 자동으로 — 지금 베타 무료 체험
          </p>
          <div className="flex items-center justify-between pt-1">
            <div className="bg-background/20 h-1 w-32 overflow-hidden rounded-full">
              <div className="bg-background h-full w-[83%] rounded-full" />
            </div>
            <span className="text-background/70 text-xs">5 / 6</span>
          </div>
        </CardContent>
      </Card>

      {/* Team */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-sm font-semibold">운영진</span>
          <Badge variant="secondary">관리</Badge>
        </div>
        <div className="flex -space-x-2">
          {team.map((t) => (
            <Avatar key={t} className="ring-background size-8 ring-2">
              <AvatarFallback>{t}</AvatarFallback>
            </Avatar>
          ))}
          <div className="bg-muted text-muted-foreground ring-background flex size-8 items-center justify-center rounded-full text-xs font-medium ring-2">
            +3
          </div>
        </div>
      </div>

      {/* Memo (yellow) */}
      <Card className="gap-2 border-warning/30 bg-warning/10 py-3">
        <CardContent className="space-y-2 px-4">
          <p className="text-sm">운영진과 공유할 메모를 남겨주세요</p>
          <div className="flex justify-end">
            <Button size="sm" variant="secondary">
              저장
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
