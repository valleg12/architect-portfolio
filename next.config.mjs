/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isNetlify = process.env.NETLIFY === 'true';

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
  basePath: isProd && !isNetlify ? '/architect-portfolio' : '',
  assetPrefix: isProd && !isNetlify ? '/architect-portfolio/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd && !isNetlify ? '/architect-portfolio' : '',
  },
  trailingSlash: true,
}

export default nextConfig
