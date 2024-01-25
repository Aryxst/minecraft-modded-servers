import { Poppins } from 'next/font/google';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import '@/styles/styles.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata = { title: 'MCModded List' };

export default async function RootLayout({ children }) {
 'use server';
 return (
  <html lang="en">
   <body className={poppins.className}>
    <main>
     <Navbar />
     {children}
     <Footer />
    </main>
    <Script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="jessieodeh" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18" />
   </body>
  </html>
 );
}
