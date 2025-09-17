const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eden-public-assets.s3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}
module.exports = nextConfig
