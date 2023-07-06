// _app.js
import 'bootstrap/dist/css/bootstrap.css'; //styles of bootstrap
import { useEffect } from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', NProgress.start());
Router.events.on('routeChangeError', NProgress.done());
Router.events.on('routeChangeComplete', NProgress.done());

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (<>
  <Component {...pageProps} />
  <ToastContainer />
  </>);
}

export default MyApp;