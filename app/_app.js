// _app.js
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

//Route Events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const {route} = useRouter();

  return (
    <Component {...pageProps} key={route} />
  );
}
export default MyApp;