import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import Layout from "../components/layouts/Layout";

import "../styles/globals.css";
import { LanguageContextProvider } from "../contexts/languageContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  //To prevent auto scroll to top when you include #section_id after loading that sometimes happen
  //Only happens when you are already on the same page and refresh the page with #section_id
  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes("#")) {
      if (path) {
        setTimeout(() => {
          document?.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  });
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <LanguageContextProvider>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </LanguageContextProvider>
  );
}

export default MyApp;
