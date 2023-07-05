import './globals.css';
import { Inter } from 'next/font/google';

import 'react-toastify/dist/ReactToastify.css'; //styles of toastify

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Discord API | HackerCoop | Summer 2023',
  description: 'Created by sapioXmachina@github on Vercel',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}