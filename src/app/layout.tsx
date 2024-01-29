import { Poppins } from 'next/font/google';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import '@/styles/global/_index.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
 title: 'Minecraft Modded Servers | Minecraft Server List',

 metadataBase: new URL('https://minecraftmoddedservers.vercel.app/'),
 description: 'Explore a variety of Minecraft multiplayer modded servers through this new list, features basic server information. New features coming soon!',
 openGraph: {
  title: 'Minecraft Modded Servers | Minecraft Server List',
  authors: 'Jessie Odeh (AKA Aryxst)',
  firstName: 'Jessie',
  lastName: 'Odeh',
  tags: ['minecraft', 'mods', 'modded', 'server', 'list', 'minecraft-server', 'multiplayer', 'modded-mc', 'mods', 'aryxst', 'jessie', 'odeh'],
 },
};
export default async function RootLayout({ children }) {
 'use server';
 return (
  <html lang='en'>
   <body className={poppins.className}>
    <main>
     <Navbar />
     {children}
     <Footer />
    </main>
   </body>
  </html>
 );
}
