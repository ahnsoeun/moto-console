import { ArrowRight, Download, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SubHeading } from "@/components/design-system/primitives"

const VARIANTS = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const

export function ButtonShowcase() {
  return (
    <div className="space-y-8">
      {/* Variant */}
      <div className="space-y-3">
        <SubHeading>Variant</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          {VARIANTS.map((v) => (
            <Button key={v} variant={v}>
              {v}
            </Button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="space-y-3">
        <SubHeading>Size</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">xs</Button>
          <Button size="sm">sm</Button>
          <Button size="default">default</Button>
          <Button size="lg">lg</Button>
        </div>
      </div>

      {/* Icon-only size */}
      <div className="space-y-3">
        <SubHeading>Icon only</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-xs" aria-label="추가">
            <Plus />
          </Button>
          <Button size="icon-sm" aria-label="추가">
            <Plus />
          </Button>
          <Button size="icon" aria-label="추가">
            <Plus />
          </Button>
          <Button size="icon-lg" aria-label="추가">
            <Plus />
          </Button>
        </div>
      </div>

      {/* With icon */}
      <div className="space-y-3">
        <SubHeading>With icon</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <Plus data-icon="inline-start" />
            새 채널
          </Button>
          <Button variant="secondary">
            다운로드
            <Download data-icon="inline-end" />
          </Button>
          <Button variant="outline">
            다음
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button variant="destructive">
            <Trash2 data-icon="inline-start" />
            삭제
          </Button>
        </div>
      </div>

      {/* State */}
      <div className="space-y-3">
        <SubHeading>State</SubHeading>
        <div className="flex flex-wrap items-center gap-3">
          <Button>기본</Button>
          <Button disabled>비활성</Button>
          <Button variant="outline" disabled>
            비활성
          </Button>
        </div>
      </div>
    </div>
  )
}
