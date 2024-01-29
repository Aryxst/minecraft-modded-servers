import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/images/logo.svg';
import FilterIcon from '@/images/filter.svg';
// This is something I have to learn better: Navbars, it was difficult
export default function Navbar() {
 return (
  <nav className='navbar'>
   <div className='navbar_container'>
    <div className='inline-flex'>
     <Link href='/'>
      <Image src={Logo} height='64' width='64' alt='Logo' />
     </Link>
    </div>
    <Link href='/type' className='ml-6 mr-auto font-normal transition-colors hover:text-blue-500 md:text-lg'>
     <span className='max-sm:text-xs'> Filter Servers</span>
     <Image src={FilterIcon} alt='Filter Icon' height='20' width='20' className='inline' />
    </Link>
   </div>
  </nav>
 );
}
