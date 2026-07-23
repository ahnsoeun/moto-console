export function Section({
  id,
  title,
  desc,
  children,
}: {
  id?: string
  title: string
  desc?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {desc ? (
          <p className="text-muted-foreground text-sm">{desc}</p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
      {children}
    </h3>
  )
}

export function SwatchGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {children}
    </div>
  )
}

export function ColorSwatch({
  name,
  varName,
  note,
}: {
  name: string
  varName: string
  note?: string
  /** @deprecated 색 영역에 항상 inset ring이 적용되어 더 이상 사용하지 않음 */
  bordered?: boolean
}) {
  return (
    <div className="bg-card overflow-hidden rounded-lg border">
      <div
        className="h-16 w-full border-b"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="space-y-0.5 p-3">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-muted-foreground font-mono text-[11px]">
          {varName}
          {note ? ` · ${note}` : ""}
        </div>
      </div>
    </div>
  )
}
