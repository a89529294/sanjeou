import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import HeroImage from "../../components/HeroImage";
import NewsArticle from "../../components/news/NewsArticle";
import { News, NewsCategory } from "../../data/types";
import getNews from "../../utils/data/getNews";
import getNewsCategories from "../../utils/data/getNewsCategories";

function NewsInnerPage({
  newsCategories,
  news,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { nid } = router.query;

  if (typeof nid === "object" || !nid)
    return (
      <div>
        <HeroImage text="動態資訊" />
        <h1 className="px-32 py-10 sm:px-7">資訊不存在</h1>
      </div>
    );
  const foundNews = news.find((n) => n.id === +nid);
  if (!foundNews)
    return (
      <div>
        <HeroImage text="動態資訊" />
        <h1 className="px-32 py-10 sm:px-7">資訊不存在</h1>
      </div>
    );

  const categoryName =
    newsCategories.find((v) => v.id === foundNews.categoryId)?.title || "";

  const fni = news.findIndex((n) => n.id === +nid);
  const prevNews = news[fni - 1 >= 0 ? fni - 1 : news.length - 1];
  const nextNews = news[fni + 1 <= news.length - 1 ? fni + 1 : 0];
  return (
    <div>
      <HeroImage text="動態資訊" />
      <NewsArticle
        title={foundNews.title}
        content={foundNews.content}
        imgURLs={foundNews.imgURLs}
        createdAt={foundNews.createdAt}
        category={categoryName}
        prevNews={prevNews}
        nextNews={nextNews}
      />
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

export default NewsInnerPage;
