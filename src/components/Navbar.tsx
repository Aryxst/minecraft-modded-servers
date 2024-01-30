import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/images/logo.svg';
import FilterIcon from '@/images/filter.svg';
// This is something I have to learn better: Navbars, it was difficult
export default function Navbar() {
 return (
  <nav className='relative w-full border-b border-b-[var(--dark)] py-2 text-neutral-500 shadow hover:text-neutral-700 focus:text-neutral-700 lg:py-4'>
   <div className='flex w-full items-center justify-between px-3'>
    <div className='inline-flex'>
     <Link href='/'>
      <Image src={Logo} height={64} width={64} alt='Logo' />
     </Link>
    </div>
    <Link href='/type' className='font-normal transition-[color] hover:text-blue-500 md:text-lg'>
     <span>Server Types</span>
     <Image src={FilterIcon} alt='Filter Icon' height={20} width={20} className='inline' />
    </Link>
   </div>
  </nav>
 );
}
