import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import './globals.css';

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
  weight: ['800'],
  variable: '--font-montserrat',
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
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${montserrat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
