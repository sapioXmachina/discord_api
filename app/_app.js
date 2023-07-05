import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Loader from './loader';
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }) {
  const [isLoading] = useState(false);
  const {router} = useRouter();

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      NProgress.start();
    });
    Router.events.on("routeChangeComplete", (url)=>{
      NProgress.done(false);
    });

    Router.events.on("routeChangeError", (url) =>{
      NProgress.done(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loader/>}
      <Component {...pageProps} key={router} />
    </>
  )
}

export default MyApp

// import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module

// //Route Events
// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

// function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
// }
// export default MyApp;