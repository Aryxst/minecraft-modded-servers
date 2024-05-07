import { Poppins, Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/global/_index.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'], display: 'swap', variable: '--font-poppins' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '600'], display: 'swap', variable: '--font-montserrat' });

export const metadata: Metadata = {
 title: 'Minecraft Modded Servers | Minecraft Server List',
 metadataBase: new URL('https://minecraftmoddedservers.vercel.app/'),
 description: 'Explore a variety of Minecraft multiplayer modded servers through this new list, features basic server information. New features coming soon!',
 openGraph: {
  title: 'Minecraft Modded Servers | Minecraft Server List',
  authors: 'Jessie Odeh (AKA Aryxst)',
  firstName: 'Jessie',
  lastName: 'Odeh',
  tags: ['minecraft', 'mods', 'modded', 'server', 'list', 'minecraft-server', 'multiplayer', 'modded-mc', 'mods', 'aryxst'],
 },
};
export default async function RootLayout(props: any) {
 'use server';
 return (
  <html lang='en'>
   <body className={`${poppins.variable} ${montserrat.variable}`}>
    <main>
     <Navbar />
     {props.children}
     <Footer />
    </main>
    <Analytics />
   </body>
  </html>
 );
}
