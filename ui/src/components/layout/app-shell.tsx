import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh bg-[#F1F5F9] dark:bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        {children}
      </div>
    </div>
  )
}
