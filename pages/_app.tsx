import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Nav from "../components/layout/Nav";
import styles from "../styles/_app.module.scss";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.layout}>
      <Nav />
      <div>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
