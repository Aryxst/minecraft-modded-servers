import Link from 'next/link';

export default function Footer() {
 return (
  <footer className='relative flex w-full text-balance bg-[var(--mistgray)] text-white'>
   <p className='p-4'>&copy; Jessie Odeh 2024 | This site is not an official Minecraft service and is not approved by or associated with Mojang or Microsoft. All rights reserved.</p>
   <div className='ml-auto inline-flex place-items-center max-sm:flex-wrap'>
    <Link href='/about' className='footer_link'>
     ABOUT
    </Link>
    <Link href='/contact' className='footer_link'>
     CONTACT
    </Link>
    <Link href='/legal-notice' className='footer_link'>
     LEGAL NOTICE
    </Link>
   </div>
  </footer>
 );
}
