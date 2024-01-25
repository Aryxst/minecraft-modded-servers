import { join } from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
 async redirects() {
  return [
   // Basic redirect
   {
    source: '/type',
    destination: '/',
    permanent: true,
   },
   {
    source: '/server',
    destination: '/',
    permanent: true,
   },
  ];
 },
 sassOptions: {
  includePaths: [join(process.cwd(), 'src/styles')],
 },
 images: {
  remotePatterns: [],
 },
};

export default nextConfig;
