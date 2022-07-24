import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import CatalogList from "../components/catalog/CatalogList";
import HeroImage from "../components/HeroImage";
import getProductTypes from "../utils/data/getProductTypes";

function Catalog({
  productTypes,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>電子型錄</title>
      </Head>
      <HeroImage text="電子型錄" />
      <CatalogList productTypes={productTypes} />
    </div>
  );
}

export async function getServerSideProps() {
  const productTypes = await getProductTypes();

  return {
    props: {
      productTypes,
    },
  };
}

export default Catalog;
