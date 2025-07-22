/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // 애플리케이션의 잠재적인 문제를 조기에 발견

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

    compiler: {
        styledComponents: true,
    },

    webpack(config) {
        return config;
    },
};

export default nextConfig;
