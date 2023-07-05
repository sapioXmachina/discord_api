// app_.js

import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import Router from 'next/router';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function () {
    return null;
}

// import NProgress from "nprogress";
// import Router, { useRouter } from "next/router";

// Router.onRouteChangeStart = url => { NProgress.start() };
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => NProgress.done();

// function MyApp({ Component, pageProps }) {
//   const {route} = useRouter();
//   return (
//     <Component {...pageProps} key={route} />
//   );
// }
// export default MyApp;