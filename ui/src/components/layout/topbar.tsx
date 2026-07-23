import { ChevronRight } from "lucide-react"

import { RolePreviewDropdown } from "./role-preview-dropdown"

export function Topbar({ breadcrumb = ["Dashboard"] }: { breadcrumb?: string[] }) {
  return (
    <header className="bg-background sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b px-6">
      {/* Breadcrumb */}
      <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
        {breadcrumb.map((crumb, i) => {
          const last = i === breadcrumb.length - 1
          return (
            <span key={crumb} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5" />}
              <span className={last ? "text-foreground font-medium" : undefined}>
                {crumb}
              </span>
            </span>
          )
        })}
      </div>

      {/* Actions */}
      <RolePreviewDropdown />
    </header>
  )
}
