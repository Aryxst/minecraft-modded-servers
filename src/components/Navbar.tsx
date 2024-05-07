import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import FilterIcon from '@/assets/icons/filter.svg';
export default function Navbar() {
 return (
  <nav>
   <div className='flex w-full items-center justify-between border-b border-b-black px-3 py-2 font-sans'>
    <div>
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
