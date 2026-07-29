export type DraftStatus = "초안" | "작업 중" | "검토"

export type Draft = {
  title: string
  href: string
  description: string
  status: DraftStatus
  /** 준비 중(아직 화면 없음)이면 true */
  soon?: boolean
}

/**
 * 초안 UI 화면 목록. 새 화면을 만들면 여기 한 줄 추가하면
 * 홈 갤러리(/)에 자동으로 카드가 생긴다.
 */
export const drafts: Draft[] = [
  {
    title: "Home · 관제 대시보드",
    href: "/dashboard",
    description: "요약 체크리스트 · 통계 · 현황 · 가이드/소식 (3단 레이아웃)",
    status: "초안",
  },
  {
    title: "Design System · 토큰·컴포넌트",
    href: "/design-system",
    description: "색상·상태색·표면·radius·타이포 토큰 + 버튼·배지·칩 미리보기 · 다크모드 토글",
    status: "작업 중",
  },
  {
    title: "Channel · 채널 목록",
    href: "#",
    description: "채널 테이블 · 상태 필터 · 런칭 파이프라인",
    status: "초안",
    soon: true,
  },
  {
    title: "Schedule · 편성표",
    href: "#",
    description: "EPG 타임라인 · 블록 편집",
    status: "초안",
    soon: true,
  },
]
