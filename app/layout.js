// layout.js
import './globals.css';
// import './nprogress.css'; //custom styles of nprogress
import 'nprogress/nprogress.css'; //styles of nprogress
import 'bootstrap/dist/css/bootstrap.css'; //stules of bootstrap
import 'react-toastify/dist/ReactToastify.css'; //styles of toastify
import { Inter } from 'next/font/google';

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