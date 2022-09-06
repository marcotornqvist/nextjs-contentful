import Navbar from "@components/layout/Navbar";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import "../styles/_main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
