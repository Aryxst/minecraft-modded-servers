import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/images/logo.svg';
import BuyMeaCoffee from '@/images/buymeacoffee.png';

export default function Navbar() {
 return (
  <nav className='relative w-full border-b border-b-black bg-[var(--teal)] py-2 text-neutral-500 shadow hover:text-neutral-700 focus:text-neutral-700 lg:py-4'>
   <div className='flex w-full items-center justify-between px-3'>
    <div className='inline-flex'>
     <Link href='/'>
      <Image src={Logo} height='64' width='64' alt={'Logo'} />
     </Link>
    </div>
    <div className='ml-auto'>
     <Link href='https://www.buymeacoffee.com/jessieodeh' target='_blank'>
      <Image src={BuyMeaCoffee} alt='Buy Me A Coffee' height='60' width='217' />
     </Link>
    </div>
   </div>
  </nav>
 );
}
