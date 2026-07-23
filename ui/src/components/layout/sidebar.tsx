"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Activity,
  Bell,
  BookOpen,
  CalendarClock,
  ChevronDown,
  Clapperboard,
  Database,
  Home,
  Layers,
  LibraryBig,
  LifeBuoy,
  Megaphone,
  PanelLeft,
  Radio,
  Send,
  Settings,
  TrendingUp,
} from "lucide-react"

import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  badge?: string
  caret?: boolean
}

type NavGroup = {
  label?: string
  items: NavItem[]
}

const groups: NavGroup[] = [
  {
    items: [
      { label: "Dashboard", icon: Home, href: "/dashboard" },
      { label: "알림", icon: Bell },
    ],
  },
  {
    label: "콘텐츠",
    items: [
      { label: "Library", icon: LibraryBig, href: "/library", caret: true },
      { label: "Channel", icon: Radio, caret: true },
      { label: "Schedule", icon: CalendarClock, caret: true },
      { label: "VOD", icon: Clapperboard, caret: true },
    ],
  },
  {
    label: "서비스 운영",
    items: [
      { label: "Platform Delivery", icon: Send, caret: true },
      { label: "Ads · SSAI", icon: Megaphone, caret: true },
      { label: "Block Streaming", icon: Layers },
      { label: "Analytics", icon: TrendingUp },
      { label: "Operations", icon: Activity },
    ],
  },
  {
    label: "관리",
    items: [
      { label: "Reference Data", icon: Database, caret: true },
      { label: "환경설정", icon: Settings, caret: true },
    ],
  },
  {
    label: "지원",
    items: [
      { label: "운영 가이드", icon: BookOpen, caret: true },
      { label: "고객지원", icon: LifeBuoy },
    ],
  },
]

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = item.icon
  return (
    <Link
      href={item.href ?? "#"}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group flex h-8 items-center gap-2.5 rounded-md px-2.5 text-sm transition-colors",
        active
          ? "bg-sidebar-primary/25 text-sidebar-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
      )}
    >
      <Icon className="size-4 shrink-0" />
      <span className="flex-1 truncate">{item.label}</span>
      {item.badge && (
        <span className="text-sidebar-primary bg-sidebar-primary/20 rounded px-1 text-[10px] font-semibold">
          {item.badge}
        </span>
      )}
      {item.caret && (
        <ChevronDown className="text-sidebar-foreground/50 size-3.5 shrink-0" />
      )}
    </Link>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="bg-sidebar text-sidebar-foreground hidden w-[220px] shrink-0 flex-col border-r lg:flex">
      {/* Brand */}
      <div className="flex h-14 items-center justify-between px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/PlayoutPlus-2.svg"
          alt="Playout+"
          className="h-5 w-auto"
        />
        <button
          type="button"
          aria-label="사이드바 접기"
          className="text-sidebar-foreground hover:bg-sidebar-accent flex size-6 items-center justify-center rounded-md transition-colors"
        >
          <PanelLeft className="size-4" />
        </button>
      </div>

      {/* Grouped nav */}
      <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-2">
        {groups.map((group, i) => (
          <div key={group.label ?? `group-${i}`} className="space-y-1">
            {group.label && (
              <div className="text-sidebar-foreground/50 px-2.5 pt-1 pb-0.5 text-[11px] font-medium">
                {group.label}
              </div>
            )}
            {group.items.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                active={
                  !!item.href &&
                  (pathname === item.href ||
                    pathname.startsWith(item.href + "/"))
                }
              />
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
