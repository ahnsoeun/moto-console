import { Badge } from "@/components/ui/badge"
import { SubHeading } from "@/components/design-system/primitives"

const TONES = [
  "primary",
  "secondary",
  "info",
  "success",
  "teal",
  "warning",
  "orange",
  "danger",
  "pink",
  "purple",
  "dark",
  "grey",
] as const

export function BadgeShowcase() {
  return (
    <div className="space-y-8">
      {/* Tone × H16 */}
      <div className="space-y-3">
        <SubHeading>Variant · H16 (sm)</SubHeading>
        <div className="flex flex-wrap items-center gap-2">
          {TONES.map((t) => (
            <Badge key={t} variant={t} size="sm">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {/* Tone × H20 */}
      <div className="space-y-3">
        <SubHeading>Variant · H20 (md)</SubHeading>
        <div className="flex flex-wrap items-center gap-2">
          {TONES.map((t) => (
            <Badge key={t} variant={t} size="md">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
