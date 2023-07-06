// layout.js
import Head from 'next/head';
import './globals.css';
import 'nprogress/nprogress.css'; //styles of nprogress

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
 
export const metadata = {
  charset: 'utf-8',
  name: 'viewport',
  content: 'width=device-width, initial-scale=1',
  title: 'Discord API | HackerCoop | Summer 2023',
  description: 'Created by sapioXmachina@github on Vercel',
 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}