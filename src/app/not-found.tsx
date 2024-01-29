import Link from 'next/link';
export const metadata = {
 title: '404 | Not Found',
};
export default function NotFound() {
 return (
  <div className='flex h-screen flex-col items-center justify-center bg-slate-50'>
   <div className='flex flex-col border border-black bg-white p-4'>
    <h2 className='border-b border-b-black'>404 | Not Found</h2>
    <p className='mb-4 mt-4'>The requested url was not found.</p>
    <Link href='/' className='btn btn-hover btn-border text-center' prefetch={false}>
     Return Home
    </Link>
   </div>
  </div>
 );
}
