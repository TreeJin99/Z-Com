import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',  // faker가 사용하는 도메인
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',    // 다른 랜덤 이미지 사이트
            },
        ],
    },
};

export default nextConfig;