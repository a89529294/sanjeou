import { InferGetStaticPropsType } from "next";

import Carousel from "../components/Carousel";
import Achievements from "../components/home/Achievements";
import Intro from "../components/home/Intro";
import News from "../components/home/News";
import Products from "../components/home/Products";
import Locations from "../components/home/Locations";
import Partners from "../components/home/Partners";
import Head from "next/head";
import getCarouselAndTitleBody from "../utils/data/getCarouselAndTitleBody";
import getNews from "../utils/data/getNews";
import getPartners from "../utils/data/getPartners";
import getAchievements from "../utils/data/getAchievements";
import getProducts from "../utils/data/getProducts";

function HomePage({
  carouselImgArray,
  title,
  body,
  news,
  partners,
  achievements,
  products,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>三久建材</title>
      </Head>
      <Carousel imgs={carouselImgArray} />
      <Intro title={title} body={body} />
      <Locations />
      <News newsArticles={news} />
      <Products products={products} />
      <Achievements achievements={achievements} />
      <Partners partners={partners} />
    </div>
  );
}

export async function getServerSideProps() {
  // add type to each of these, refer to about.tsx
  const { carouselImgArray, title, body } = await getCarouselAndTitleBody();
  const news = await getNews({ limit: 3 });
  const partners = await getPartners();
  const achievements = await getAchievements();
  const products = await getProducts();

  return {
    props: {
      carouselImgArray,
      title,
      body,
      news,
      partners,
      products,
      achievements,
    },
  };
}

export default HomePage;
