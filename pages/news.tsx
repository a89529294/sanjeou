import Head from "next/head";
import Image from "next/image";
import React from "react";
import HeroImage from "../components/HeroImage";
import NewsList from "../components/news/NewsList";

function News() {
  return (
    <div>
      <Head>
        <title>動態資訊</title>
      </Head>
      <HeroImage text="動態資訊" />
      <NewsList />
    </div>
  );
}

export default News;
