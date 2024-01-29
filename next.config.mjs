import { join } from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
 compress: true,
 async redirects() {
  return [
   // Basic redirect
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
