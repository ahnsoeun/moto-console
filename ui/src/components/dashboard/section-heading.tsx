import { cn } from "@/lib/utils"

export function SectionHeading({
  emoji,
  title,
  action,
  className,
}: {
  emoji?: string
  title: string
  action?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h2 className="flex items-center gap-2 text-sm font-semibold">
        {emoji && <span aria-hidden>{emoji}</span>}
        {title}
      </h2>
      {action}
    </div>
  )
}

export function MoreLink({ children = "더보기" }: { children?: React.ReactNode }) {
  return (
    <a
      href="#"
      className="text-muted-foreground hover:text-foreground text-xs transition-colors"
    >
      {children}
    </a>
  )
}
