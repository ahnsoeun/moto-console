import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// SSOT: Figma paro_console_library / Badge (solid, 흰 글자, rounded 4px)
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-[4px] border border-transparent px-1 py-0.5 font-bold text-white whitespace-nowrap [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        primary: "bg-[var(--badge-primary)]",
        secondary: "bg-[var(--badge-secondary)]",
        info: "bg-[var(--badge-info)]",
        success: "bg-[var(--badge-success)]",
        teal: "bg-[var(--badge-teal)]",
        warning: "bg-[var(--badge-warning)]",
        orange: "bg-[var(--badge-orange)]",
        danger: "bg-[var(--badge-danger)]",
        pink: "bg-[var(--badge-pink)]",
        purple: "bg-[var(--badge-purple)]",
        dark: "bg-[var(--badge-dark)]",
        grey: "bg-[var(--badge-grey)]",
      },
      size: {
        // H16
        sm: "h-4 text-[9px] leading-[12px]",
        // H20
        md: "h-5 text-xs leading-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
)

function Badge({
  className,
  variant = "primary",
  size = "sm",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
