import useAppContext from "@/context";
import useAuth from "@/hooks/useAuth";
import "@/styles/globals.css";
import "@/styles/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import nProgress from "nprogress";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  const { getUser, user } = useAuth();
  const { setIsLogin } = useAppContext();
  const { asPath } = useRouter();
  // console.log(user);
  useEffect(() => {
    (async () => {
      getUser();
    })();
  }, [getUser, asPath]);
  useEffect(() => {
    if (user?.id) {
      setIsLogin(true);
    }
  }, [user?.id]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Component {...pageProps} />

    </>
  );
}
