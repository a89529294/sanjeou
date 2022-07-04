import Head from "next/head";
import React from "react";
import CatalogList from "../components/catalog/CatalogList";
import HeroImage from "../components/HeroImage";

function Catalog() {
  return (
    <div>
      <Head>
        <title>電子型錄</title>
      </Head>
      <HeroImage text="電子型錄" />
      <CatalogList />
    </div>
  );
}

export default Catalog;
