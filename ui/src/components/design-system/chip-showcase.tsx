import { Chip } from "@/components/ui/chip"
import { SubHeading } from "@/components/design-system/primitives"

const COLORS = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "aqua",
  "blue",
  "violet",
  "fuchsia",
  "pink",
  "grey",
] as const

// Figma 상태 매핑 예시 (color → label)
const STATUSES: { color: (typeof COLORS)[number]; label: string }[] = [
  { color: "blue", label: "Enabled" },
  { color: "blue", label: "Processing" },
  { color: "aqua", label: "Loading" },
  { color: "yellow", label: "Waiting" },
  { color: "yellow", label: "Pending" },
  { color: "yellow", label: "Ready" },
  { color: "orange", label: "Retrying" },
  { color: "green", label: "Finished" },
  { color: "green", label: "Success" },
  { color: "red", label: "Failed" },
  { color: "red", label: "Rejected" },
  { color: "grey", label: "Disabled" },
]

export function ChipShowcase() {
  return (
    <div className="space-y-8">
      {/* All colors */}
      <div className="space-y-3">
        <SubHeading>Color (11)</SubHeading>
        <div className="flex flex-wrap items-center gap-2">
          {COLORS.map((c) => (
            <Chip key={c} color={c}>
              {c}
            </Chip>
          ))}
        </div>
      </div>

      {/* Semantic status usage */}
      <div className="space-y-3">
        <SubHeading>상태 예시</SubHeading>
        <div className="flex flex-wrap items-center gap-2">
          {STATUSES.map((s) => (
            <Chip key={s.label} color={s.color}>
              {s.label}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  )
}
