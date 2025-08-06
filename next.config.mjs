/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // 애플리케이션의 잠재적인 문제를 조기에 발견

    // Turbopack 활성화 (최신 설정)
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },

    // 컴파일러 최적화
    compiler: {
        styledComponents: true,
        // 불필요한 console.log 제거 (프로덕션에서)
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // 웹팩 최적화
    webpack(config, { dev, isServer }) {
        // 개발 환경에서만 적용되는 최적화
        if (dev) {
            config.watchOptions = {
                poll: 1000, // 파일 변경 감지 간격
                aggregateTimeout: 300, // 변경 사항을 묶어서 처리
            };
        }

        return config;
    },

    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
