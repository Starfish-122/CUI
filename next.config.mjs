/** @type {import('next').NextConfig} */
const nextConfig = {
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

    webpack(config) {
        return config;
    },
};

export default nextConfig;
