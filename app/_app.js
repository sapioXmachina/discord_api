// _app.js
import { useState , useEffect} from 'react';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module

//Route Events
Router.events.on('routeChangeStart', () => NProgress.set(0.3));
Router.events.on('routeChangeComplete', () => NProgress.set(1.0));
Router.events.on('routeChangeError', () => NProgress.set(1.0));

function MyApp({ Component, pageProps }) {
  /**@type {[{target:HTMLDivElement},Dispatch<setStateAction<{target:HTMLDivElement}>>]}*/
  const [option,setOption] = useState({target:null})

  useEffect(() => {
    setOption({
      target:window.document.getElementById("__next" )
    })
  }, []); // This is not safe (it calls `setOption` which uses `someProp`)

  Router.events.on('routeChangeStart', () => NProgress.set(0.3));
  Router.events.on('routeChangeComplete', () => NProgress.set(1.0));
  Router.events.on('routeChangeError', () => NProgress.set(1.0));

  return <Component {...pageProps} />
}

export default MyApp;