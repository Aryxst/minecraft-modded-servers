import Link from 'next/link';

export default function Footer() {
 return (
  <footer className='font-sans'>
   <div className='mt-8 flex flex-col justify-between border-t border-t-black px-4 py-6 text-black xl:flex-row'>
    <p className='max-xl:text-center xl:pr-4'>&copy; Jessie Odeh 2024 | This site is not an official Minecraft service and is not approved by or associated with Mojang or Microsoft. All rights reserved.</p>
    <ul className='flex flex-col gap-4 max-xl:mt-8 xl:flex-row'>
     <li className='max-xl:w-full max-xl:text-center'>
      <Link href='/about'>ABOUT</Link>
     </li>
     <li className='max-xl:w-full max-xl:text-center'>
      <Link href='/contact'>CONTACT</Link>
     </li>
     <li className='max-xl:w-full max-xl:text-center'>
      <Link href='/legal-notice'>LEGAL NOTICE</Link>
     </li>
    </ul>
   </div>
  </footer>
 );
}
