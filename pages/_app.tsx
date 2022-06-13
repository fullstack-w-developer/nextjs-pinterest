import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import Auth from "../context/Auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <Auth>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Auth>
    </Provider>
  );
}
