"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const roles = ["Operator", "Owner", "CP", "Support"] as const
type Role = (typeof roles)[number]

export function RolePreviewDropdown() {
  const [active, setActive] = useState<Role>("Operator")
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onDocMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDocMouseDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div className="hidden items-center gap-2.5 md:flex">
      <span className="text-muted-foreground text-sm">Role preview</span>
      <div ref={ref} className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="border-input bg-background hover:bg-muted flex h-8 min-w-[120px] items-center justify-between gap-2 rounded-md border px-3 text-sm font-medium transition-colors"
        >
          {active}
          <ChevronDown
            className={cn(
              "text-muted-foreground size-3.5 transition-transform",
              open && "rotate-180"
            )}
          />
        </button>

        {open && (
          <div
            role="listbox"
            className="bg-popover text-popover-foreground absolute right-0 z-20 mt-1 min-w-[140px] rounded-md border p-1 shadow-md"
          >
            {roles.map((role) => (
              <button
                key={role}
                type="button"
                role="option"
                aria-selected={active === role}
                onClick={() => {
                  setActive(role)
                  setOpen(false)
                }}
                className={cn(
                  "hover:bg-muted hover:text-foreground flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-sm transition-colors",
                  active === role
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {role}
                {active === role && <Check className="text-primary size-3.5" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
