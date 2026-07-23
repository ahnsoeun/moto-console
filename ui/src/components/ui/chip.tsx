import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex h-[22px] w-fit shrink-0 items-center justify-center gap-1 rounded-full border px-2 py-1 text-xs font-medium leading-[14px] whitespace-nowrap [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      color: {
        red: "bg-[var(--chip-red-fill)] border-[var(--chip-red-stroke)] text-[var(--chip-red-text)]",
        orange:
          "bg-[var(--chip-orange-fill)] border-[var(--chip-orange-stroke)] text-[var(--chip-orange-text)]",
        yellow:
          "bg-[var(--chip-yellow-fill)] border-[var(--chip-yellow-stroke)] text-[var(--chip-yellow-text)]",
        lime: "bg-[var(--chip-lime-fill)] border-[var(--chip-lime-stroke)] text-[var(--chip-lime-text)]",
        green:
          "bg-[var(--chip-green-fill)] border-[var(--chip-green-stroke)] text-[var(--chip-green-text)]",
        aqua: "bg-[var(--chip-aqua-fill)] border-[var(--chip-aqua-stroke)] text-[var(--chip-aqua-text)]",
        blue: "bg-[var(--chip-blue-fill)] border-[var(--chip-blue-stroke)] text-[var(--chip-blue-text)]",
        violet:
          "bg-[var(--chip-violet-fill)] border-[var(--chip-violet-stroke)] text-[var(--chip-violet-text)]",
        fuchsia:
          "bg-[var(--chip-fuchsia-fill)] border-[var(--chip-fuchsia-stroke)] text-[var(--chip-fuchsia-text)]",
        pink: "bg-[var(--chip-pink-fill)] border-[var(--chip-pink-stroke)] text-[var(--chip-pink-text)]",
        grey: "bg-[var(--chip-grey-fill)] border-[var(--chip-grey-stroke)] text-[var(--chip-grey-text)]",
      },
    },
    defaultVariants: {
      color: "grey",
    },
  }
)

function Chip({
  className,
  color = "grey",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof chipVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="chip"
      data-color={color}
      className={cn(chipVariants({ color }), className)}
      {...props}
    />
  )
}

export { Chip, chipVariants }
