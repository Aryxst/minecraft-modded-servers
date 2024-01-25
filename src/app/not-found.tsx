import Link from 'next/link';
export const metadata = {
 title: 'Not found | 404!!1!1!',
};
export default function NotFound() {
 return (
  <div className="flex h-screen flex-col items-center justify-center">
   <div className="flex flex-col border border-black p-4">
    <h2 className="border-b border-b-black">404 | Not Found</h2>
    <p className="mb-4 mt-4">The requested url was not found.</p>
    <Link href="/" className="btn btn-hover btn-border text-center">
     Return Home
    </Link>
   </div>
  </div>
 );
}
