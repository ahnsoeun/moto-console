"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
  }

  return (
    <Button variant="outline" size="sm" onClick={toggle} className="shrink-0">
      {dark ? <Sun /> : <Moon />}
      {dark ? "라이트" : "다크"} 미리보기
    </Button>
  )
}
