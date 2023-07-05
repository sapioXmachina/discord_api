// _app.js
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
});

//Route Events
Router.events.on('routeChangeStart', () => NProgress.set(0.3));
Router.events.on('routeChangeComplete', () => NProgress.set(1.0));
Router.events.on('routeChangeError', () => NProgress.set(1.0));

function MyApp({ Component, pageProps }) {
  const {route} = useRouter();

  return (
    <Component {...pageProps} key={route} />
  );
}
export default MyApp;