// app_.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import NProgress from 'nprogress';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start());
    router.events.on('routeChangeComplete', () =>  NProgress.done());
    router.events.on('routeChangeError', () =>  NProgress.done());
  }, []);
 
  return  <Component {...pageProps} />
}
export default MyApp;