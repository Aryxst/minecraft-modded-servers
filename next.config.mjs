import { join } from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
 compress: true,
 sassOptions: {
  includePaths: [join(process.cwd(), 'src/styles')],
 },
 images: {
  unoptimized: true,
 },
};

export default nextConfig;
