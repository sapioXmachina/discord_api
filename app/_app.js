// _app.js
// import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';

// import { ToastContainer, toast } from 'react-toastify';

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
    // <ToastContainer />
  </>);
}

export default MyApp;