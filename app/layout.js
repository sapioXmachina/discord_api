// layout.js
import Head from 'next/head';
// import './globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
// className={inter.className}
 
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"/>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
        <body>{children}<ToastContainer /></body>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>
        <script>var Alert = ReactBootstrap.Alert;</script>
    </html>
  );
}