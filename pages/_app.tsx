import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import Nav from "../components/layout/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav />
      <ToastContainer />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
