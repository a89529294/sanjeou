import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import Layout from "../components/layouts/Layout";

import "../styles/globals.css";
import { LanguageContextProvider } from "../contexts/languageContext";
// import DataContextProdiver from "../contexts/dataContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <LanguageContextProvider>
      {/* <DataContextProdiver> */}
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      {/* </DataContextProdiver> */}
    </LanguageContextProvider>
  );
}

export default MyApp;
