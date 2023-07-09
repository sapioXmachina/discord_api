// _app.js
import { useEffect } from 'react';

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
  
  return (<>
    <Component {...pageProps} />
  </>);
}

export default MyApp;