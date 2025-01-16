import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-plus-jakarta-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Doppelgangers',
  description: 'Doppelgangers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${montserrat.variable} ${roboto.variable} ${inter.variable} antialiased`}
    >
      <body className='bg-[#2D2A3D]'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
