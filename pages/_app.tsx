import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ToastContainer />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
