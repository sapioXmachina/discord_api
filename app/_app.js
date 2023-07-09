// _app.js
import { useEffect } from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', NProgress.start());
Router.events.on('routeChangeError', NProgress.done());
Router.events.on('routeChangeComplete', NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>);
}

export default MyApp;