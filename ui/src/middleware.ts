import { NextResponse, type NextRequest } from "next/server"

// 배포된 UI 초안은 링크를 아는 사람만 보게 Basic Auth로 막는다.
// 자격 정보는 Vercel 환경변수(BASIC_AUTH_USER / BASIC_AUTH_PASSWORD)로 주입.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}

export function middleware(request: NextRequest) {
  const user = process.env.BASIC_AUTH_USER
  const password = process.env.BASIC_AUTH_PASSWORD

  // 로컬 개발에서는 환경변수 없이 그대로 열리게 두고,
  // 배포 환경에서 빠뜨렸을 때는 조용히 공개되지 않도록 막는다.
  if (!user || !password) {
    if (process.env.NODE_ENV === "development") {
      return NextResponse.next()
    }
    return new NextResponse(
      "BASIC_AUTH_USER / BASIC_AUTH_PASSWORD 환경변수가 설정되지 않았습니다.",
      { status: 500 }
    )
  }

  const header = request.headers.get("authorization")
  if (header?.startsWith("Basic ")) {
    const [reqUser, reqPassword] = atob(header.slice(6)).split(":")
    if (reqUser === user && reqPassword === password) {
      return NextResponse.next()
    }
  }

  return new NextResponse("인증이 필요합니다.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="moto-ui", charset="UTF-8"' },
  })
}
