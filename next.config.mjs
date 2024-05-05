/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'vbvdajzlbaysznoviuwa.supabase.co',
        pathname: '**',
        protocol: 'https',
        port: '',
      },
    ],
  },
  api: {
    externalResolver: true,
  },
};
export default nextConfig;
