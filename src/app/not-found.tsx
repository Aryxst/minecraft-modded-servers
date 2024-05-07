import Link from 'next/link';
export const metadata = {
 title: '404 | Not Found',
};
export default function NotFound() {
 return (
  <div className='flex h-[calc(100vh-181px)] flex-col items-center justify-center'>
   <div className='flex w-full max-w-md flex-col border border-black bg-white p-4 font-sans'>
    <h2 className='border-b border-b-black'>404 | Not Found</h2>
    <p className='mb-4 mt-4'>The requested url was not found.</p>
    <Link href='/' className='w-full rounded-lg bg-[var(--dark)] p-2 text-center text-white' prefetch={false}>
     Return Home
    </Link>
   </div>
  </div>
 );
}
