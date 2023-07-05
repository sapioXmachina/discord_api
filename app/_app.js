import Router from 'next/router'
import { useState, useEffect } from 'react';
import NProgress from 'nprogress'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      Nprogress.start()
    });
    Router.events.on("routeChangeComplete", (url)=>{
      Nprogress.done(false)
    });
  
    Router.events.on("routeChangeError", (url) =>{
      Nprogress.done(false)
    }); 
  }, []);

  return (
    <>
      {isLoading && <Loader/>}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

// import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress

// //Route Events. 
// Router.events.on('routeChangeStart', () => NProgress.start()); 
// Router.events.on('routeChangeComplete', () => NProgress.done()); 
// Router.events.on('routeChangeError', () => NProgress.done());

// function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
// }
// export default MyApp;