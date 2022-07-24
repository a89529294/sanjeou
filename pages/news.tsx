import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import HeroImage from "../components/HeroImage";
import NewsList from "../components/news/NewsList";
import { News, NewsCategory } from "../data/types";
import getNews from "../utils/data/getNews";
import getNewsCategories from "../utils/data/getNewsCategories";

function News({
  newsCategories,
  news,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>動態資訊</title>
      </Head>
      <HeroImage text="動態資訊" />
      <NewsList newsCategories={newsCategories} news={news} />
    </div>
  );
}

export async function getServerSideProps() {
  const newsCategories: NewsCategory[] = await getNewsCategories();
  const news: News[] = await getNews({});

  return {
    props: {
      newsCategories,
      news,
    },
  };
}

export default News;
