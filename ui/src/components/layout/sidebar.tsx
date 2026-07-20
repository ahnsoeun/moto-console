import {
  Activity,
  Bell,
  BookOpen,
  CalendarClock,
  ChevronDown,
  Clapperboard,
  Database,
  Home,
  LibraryBig,
  LifeBuoy,
  Megaphone,
  PanelLeft,
  Radio,
  Search,
  Send,
  Settings,
  TrendingUp,
} from "lucide-react"

import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  icon: React.ComponentType<{ className?: string }>
  active?: boolean
  badge?: string
  caret?: boolean
}

type NavGroup = {
  label?: string
  items: NavItem[]
}

const groups: NavGroup[] = [
  {
    items: [{ label: "대시보드", icon: Home, active: true }],
  },
  {
    label: "콘텐츠·채널",
    items: [
      { label: "Content Library", icon: LibraryBig, caret: true },
      { label: "Channel", icon: Radio, caret: true },
      { label: "Schedule", icon: CalendarClock },
      { label: "VOD", icon: Clapperboard, badge: "New" },
    ],
  },
  {
    label: "딜리버리·광고",
    items: [
      { label: "Platform Delivery", icon: Send, caret: true },
      { label: "광고 · SSAI", icon: Megaphone, badge: "New" },
      { label: "Analytics", icon: TrendingUp, caret: true },
    ],
  },
  {
    label: "운영",
    items: [
      { label: "Operations", icon: Activity, caret: true },
      { label: "알림", icon: Bell },
    ],
  },
  {
    label: "관리",
    items: [
      { label: "Reference Data", icon: Database },
      { label: "설정", icon: Settings, caret: true },
    ],
  },
  {
    label: "리소스",
    items: [
      { label: "운영 가이드", icon: BookOpen },
      { label: "Access & Support", icon: LifeBuoy },
    ],
  },
]

function NavLink({ item }: { item: NavItem }) {
  const Icon = item.icon
  return (
    <a
      href="#"
      aria-current={item.active ? "page" : undefined}
      className={cn(
        "group flex h-8 items-center gap-2.5 rounded-md px-2.5 text-sm transition-colors",
        item.active
          ? "bg-primary/10 font-medium text-primary"
          : "text-foreground/75 hover:bg-muted hover:text-foreground"
      )}
    >
      <Icon className="size-4 shrink-0" />
      <span className="flex-1 truncate">{item.label}</span>
      {item.badge && (
        <span className="text-primary bg-primary/10 rounded px-1 text-[10px] font-semibold">
          {item.badge}
        </span>
      )}
      {item.caret && (
        <ChevronDown className="text-muted-foreground size-3.5 shrink-0" />
      )}
    </a>
  )
}

export function Sidebar() {
  return (
    <aside className="bg-sidebar text-sidebar-foreground hidden w-[220px] shrink-0 flex-col border-r lg:flex">
      {/* Brand */}
      <div className="flex h-14 items-center justify-between px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/PlayoutPlus.svg"
          alt="Playout+"
          className="h-5 w-auto dark:brightness-0 dark:invert"
        />
        <button
          type="button"
          aria-label="사이드바 접기"
          className="text-muted-foreground hover:text-foreground hover:bg-muted flex size-6 items-center justify-center rounded-md transition-colors"
        >
          <PanelLeft className="size-4" />
        </button>
      </div>

      {/* Search */}
      <div className="px-3 pb-2">
        <div className="text-muted-foreground flex h-8 items-center gap-2 rounded-md border px-2.5 text-sm">
          <Search className="size-3.5 shrink-0" />
          <span className="flex-1">Search</span>
          <kbd className="bg-muted text-muted-foreground pointer-events-none rounded px-1.5 py-0.5 text-[10px] font-medium">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Grouped nav */}
      <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-2">
        {groups.map((group, i) => (
          <div key={group.label ?? `group-${i}`} className="space-y-1">
            {group.label && (
              <div className="text-muted-foreground px-2.5 pt-1 pb-0.5 text-[11px] font-medium">
                {group.label}
              </div>
            )}
            {group.items.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
