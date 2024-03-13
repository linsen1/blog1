/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn.sanity.io',
                port:''
            },
            {
                protocol:'https',
                hostname:'darenfile-1252522393.cos.ap-nanjing.myqcloud.com',
                port:''
            }
        ]
    },
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
