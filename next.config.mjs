/** @type {import('next').NextConfig} */
const nextConfig = {
    // 검색 엔진 크롤링 방지 (개발 환경)
    // 배포 시에는 이 설정을 제거하거나 수정해야 합니다
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow',
                    },
                ],
            },
        ];
    },

    // 성능 최적화
    experimental: {
        optimizePackageImports: ['styled-components'],
    },

    // 이미지 최적화
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
    },

    // 컴파일러 최적화
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
        styledComponents: {
            displayName: true,
            ssr: true,
        },
    },

    // 웹팩 최적화
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.optimization.splitChunks.cacheGroups = {
                ...config.optimization.splitChunks.cacheGroups,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            };
        }
        return config;
    },
};

export default nextConfig;
