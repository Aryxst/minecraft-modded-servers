import Link from 'next/link';

export default function Footer() {
 return (
  <footer className='footer'>
   <p>&copy; Jessie Odeh 2024 | This site is not an official Minecraft service and is not approved by or associated with Mojang or Microsoft. All rights reserved.</p>
   <div className='footer_links'>
    <Link href='/about'>ABOUT</Link>
    <Link href='/contact'>CONTACT</Link>
    <Link href='/legal-notice'>LEGAL NOTICE</Link>
   </div>
  </footer>
 );
}
