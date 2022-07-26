import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import CatalogList from "../components/catalog/CatalogList";
import HeroImage from "../components/HeroImage";
import getCatalogs from "../utils/data/getCatalogs";
import getProductTypes from "../utils/data/getProductTypes";

function Catalog({
  productTypes,
  catalogs,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>電子型錄</title>
      </Head>
      <HeroImage text="電子型錄" />
      <CatalogList productTypes={productTypes} catalogs={catalogs} />
    </div>
  );
}

export async function getServerSideProps() {
  const productTypes = await getProductTypes();
  const catalogs = await getCatalogs();
  return {
    props: {
      productTypes,
      catalogs,
    },
  };
}

export default Catalog;
