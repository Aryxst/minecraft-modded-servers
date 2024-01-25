import Image from 'next/image';
import Spinner from '@/images/spinner.svg';
export default function Loading() {
 return (
  <div className="flex h-screen w-full justify-center items-center">
   <Image src={Spinner} height="150" width="150" alt="Spinner" />
  </div>
 );
}
