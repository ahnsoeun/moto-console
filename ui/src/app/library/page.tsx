import { ChevronDown, Plus, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { AppShell } from "@/components/layout/app-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const tabs = ["Program", "Ingest", "Program CP", "Series", "Season"] as const
const dropdowns = ["CP", "Service countries", "Category", "Genre"] as const
const toggles = ["Rating missing", "Asset not ready", "Schedulable"] as const

type BadgeVariant = React.ComponentProps<typeof Badge>["variant"]

type Program = {
  title: string
  sub: string
  cp: string
  status: { label: string; variant: BadgeVariant }
  rights: { label: string; tone: "ok" | "warn" }
  rating: string
  ratingMissing?: boolean
  ready: { label: string; variant: BadgeVariant }
}

const programs: Program[] = [
  {
    title: "Gangnam Beauty Season 1",
    sub: "Series · 12 eps",
    cp: "Studio A",
    status: { label: "Live", variant: "success" },
    rights: { label: "KR", tone: "ok" },
    rating: "15",
    ready: { label: "Ready", variant: "success" },
  },
  {
    title: "Gangnam Beauty E05",
    sub: "Episode · S1",
    cp: "Studio A",
    status: { label: "In review", variant: "grey" },
    rights: { label: "KR", tone: "ok" },
    rating: "15",
    ready: { label: "Blocked", variant: "danger" },
  },
  {
    title: "Romance 101 E12",
    sub: "Episode · S2",
    cp: "Studio A",
    status: { label: "Live", variant: "success" },
    rights: { label: "KR", tone: "ok" },
    rating: "15",
    ready: { label: "Warning", variant: "warning" },
  },
  {
    title: "Summer Sea Doc",
    sub: "Program",
    cp: "Production B",
    status: { label: "In review", variant: "grey" },
    rights: { label: "Out of KR window", tone: "warn" },
    rating: "12",
    ready: { label: "Blocked", variant: "danger" },
  },
  {
    title: "LA Story E01",
    sub: "Episode · S1",
    cp: "US Partner",
    status: { label: "Registered", variant: "info" },
    rights: { label: "US only", tone: "warn" },
    rating: "TV-14",
    ready: { label: "Warning", variant: "warning" },
  },
  {
    title: "New Release Trailer Special",
    sub: "Program",
    cp: "Studio A",
    status: { label: "In review", variant: "grey" },
    rights: { label: "KR", tone: "ok" },
    rating: "Missing",
    ratingMissing: true,
    ready: { label: "Blocked", variant: "danger" },
  },
]

export default function LibraryPage() {
  return (
    <AppShell breadcrumb={["Content Library", "Program Library"]}>
      <main className="min-w-0 flex-1 space-y-6 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              Program Library
            </h1>
            <p className="text-muted-foreground text-sm">
              Find accessible Programs and quickly check scheduling/delivery
              readiness. (shows only my permission scope)
            </p>
          </div>
          <Button>
            <Plus />
            Register Program
          </Button>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="-mb-px flex items-center gap-6">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={cn(
                  "border-b-2 pb-2.5 text-sm transition-colors",
                  i === 0
                    ? "border-primary text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-64">
              <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
              <Input
                placeholder="Search title/keyword"
                className="h-8 pl-8"
              />
            </div>
            {dropdowns.map((d) => (
              <Button key={d} variant="outline" size="sm">
                {d}
                <ChevronDown className="text-muted-foreground" />
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {toggles.map((t) => (
              <button
                key={t}
                type="button"
                className="text-muted-foreground hover:text-foreground flex h-8 items-center gap-2 rounded-full border px-3 text-sm transition-colors"
              >
                <span className="border-muted-foreground/40 size-3.5 rounded-full border" />
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <Card className="gap-0 overflow-hidden py-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="px-4 py-3">Title · Type</TableHead>
                <TableHead className="px-4 py-3">CP</TableHead>
                <TableHead className="px-4 py-3">Status</TableHead>
                <TableHead className="px-4 py-3">Rights</TableHead>
                <TableHead className="px-4 py-3">Rating</TableHead>
                <TableHead className="px-4 py-3">Platform ready</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programs.map((p) => (
                <TableRow key={p.title}>
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-muted size-10 shrink-0 rounded-md" />
                      <div className="min-w-0">
                        <div className="truncate font-medium">{p.title}</div>
                        <div className="text-muted-foreground truncate text-xs">
                          {p.sub}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground px-4 py-3">
                    {p.cp}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <Badge variant={p.status.variant} size="md">
                      {p.status.label}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <span className="flex items-center gap-1.5">
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          p.rights.tone === "ok"
                            ? "bg-success"
                            : "bg-destructive"
                        )}
                      />
                      <span className="text-muted-foreground">
                        {p.rights.label}
                      </span>
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <span
                      className={cn(
                        "tabular-nums",
                        p.ratingMissing
                          ? "text-destructive font-medium"
                          : "text-foreground"
                      )}
                    >
                      {p.rating}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <Badge variant={p.ready.variant} size="md">
                      {p.ready.label}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">1–6 of 128</p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon-sm" aria-label="이전">
              <ChevronDown className="rotate-90" />
            </Button>
            {[1, 2, 3].map((n) => (
              <Button
                key={n}
                variant={n === 1 ? "default" : "outline"}
                size="icon-sm"
              >
                {n}
              </Button>
            ))}
            <Button variant="outline" size="icon-sm" aria-label="다음">
              <ChevronDown className="-rotate-90" />
            </Button>
          </div>
        </div>
      </main>
    </AppShell>
  )
}
