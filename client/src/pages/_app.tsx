import "client/src/middle/styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

import ModalManager from "@/client/src/middle/components/modal/components/ModalManager";

import "react-toastify/dist/ReactToastify.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>SyncScribble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ToastContainer />
        <ModalManager />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
