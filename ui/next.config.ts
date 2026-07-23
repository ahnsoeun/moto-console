import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LAN IP로 dev 서버 접속 시 cross-origin 차단으로 HMR/hydration이 막히는 것을 허용
  allowedDevOrigins: ["192.168.17.7"],
};

export default nextConfig;
