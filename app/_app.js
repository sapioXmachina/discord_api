// app_.js
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";

Router.onRouteChangeStart = url => { NProgress.start() };
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  const {route} = useRouter();
  return (
    <Component {...pageProps} key={route} />
  );
}
export default MyApp;