/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  output: 'export',
  basePath: isProd ? '/architect-portfolio' : '',
  assetPrefix: isProd ? '/architect-portfolio/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/architect-portfolio' : '',
  },
  trailingSlash: true,
}

export default nextConfig
