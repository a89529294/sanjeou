import { InferGetStaticPropsType } from "next";

// import index from "../data";
// import news from "../data/news";
import products, { ProductItem } from "../data/products";

import Carousel from "../components/Carousel";
import Achievements from "../components/home/Achievements";
import Intro from "../components/home/Intro";
import News from "../components/home/News";
import Products from "../components/home/Products";
import Locations from "../components/home/Locations";
import Partners from "../components/home/Partners";
// import achievements from "../data/achievements";
import Head from "next/head";
import {
  PartnersType,
  NewsType,
  AchievementType,
  ProductType,
  allIcons,
} from "../data/types";
import getCarouselAndTitleBody from "../utils/data/getCarouselAndTitleBody";
import getNews from "../utils/data/getNews";
import getPartners from "../utils/data/getPartners";
import getAchievements from "../utils/data/getAchievements";
import getProducts from "../utils/data/getProducts";

// TODO think about moving all the data hooks inside of getServerProps, you can't use hooks inside of getServerProps so just refector them into traditional functions
function HomePage({
  carouselImgArray,
  title,
  body,
  news,
  partners,
  achievements,
  products,
}: //   news,
InferGetStaticPropsType<typeof getServerSideProps>) {
  //   const pt = useProductTypes();

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
  const { carouselImgArray, title, body } = await getCarouselAndTitleBody();
  const { news } = await getNews();
  const { partners } = await getPartners();
  const { achievements } = await getAchievements();
  const { products } = await getProducts();

  console.log(products);

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
