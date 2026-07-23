import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SubHeading } from "@/components/design-system/primitives"

export function ComponentsShowcase() {
  return (
    <div className="space-y-8">
      {/* Input */}
      <div className="max-w-sm space-y-3">
        <SubHeading>Input</SubHeading>
        <Input placeholder="채널 이름을 입력하세요" />
        <Input disabled placeholder="비활성 상태" />
      </div>

      <Separator />

      {/* Progress */}
      <div className="max-w-md space-y-3">
        <SubHeading>Progress</SubHeading>
        <Progress value={30} />
        <Progress value={66} />
        <Progress value={100} />
      </div>

      <Separator />

      {/* Avatar */}
      <div className="space-y-3">
        <SubHeading>Avatar</SubHeading>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>안</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator />

      {/* Card */}
      <div className="space-y-3">
        <SubHeading>Card</SubHeading>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>채널 상태</CardTitle>
            <CardDescription>오늘의 전송 현황 요약</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-2xl font-semibold tabular-nums">24</span>
            <Badge variant="success">정상</Badge>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Table */}
      <div className="space-y-3">
        <SubHeading>Table</SubHeading>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>채널</TableHead>
                <TableHead>플랫폼</TableHead>
                <TableHead className="text-right">상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "NEWS 24", platform: "LG Channels", ok: true },
                { name: "K-DRAMA", platform: "Samsung TV+", ok: true },
                { name: "KIDS ZONE", platform: "Latam", ok: false },
              ].map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {row.platform}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={row.ok ? "success" : "danger"}>
                      {row.ok ? "송출중" : "점검"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
