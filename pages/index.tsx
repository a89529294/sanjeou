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
import achievements from "../data/achievements";
import Head from "next/head";

export type Partners = {
  [type: string]: string[];
};
export type News = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imgURL: string;
};

function HomePage({
  carouselImgArray,
  title,
  body,
  partners,
  // index: { about },
  news,
  achievements,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>三久建材</title>
      </Head>
      <Carousel imgs={carouselImgArray} />
      <Intro title={title} body={body} />
      <Locations />
      <News newsArticles={news} />
      <Products
        products={products.reduce<ProductItem["items"]>(
          (acc, val) => acc.concat(val.items),
          []
        )}
      />
      <Achievements achievements={achievements} />
      <Partners partners={partners} />
    </div>
  );
}

export async function getStaticProps() {
  const baseURL = process.env.REACT_APP_API_HOST;

  const resArr = await Promise.allSettled([
    fetch(
      `${baseURL}/api/homepage?populate[Carousel][populate]=image&populate=partners`
    ),
    fetch(`${baseURL}/api/partners?populate=image`),
    fetch(
      `${baseURL}/api/informations?populate=*&pagination[start]=0&pagination[limit]=3`
    ),
  ]);

  const data =
    resArr[0].status === "fulfilled" ? await resArr[0].value.json() : {};
  const partnersData =
    resArr[1].status === "fulfilled" ? await resArr[1].value.json() : {};
  const newsData =
    resArr[2].status === "fulfilled" ? await resArr[2].value.json() : {};

  const carouselImgArray = data.data.attributes.Carousel.map(
    (img: any) => img.image.data.attributes.url
  );
  const title = data.data.attributes.title;
  const body = data.data.attributes.content;

  const partners: Partners = {};
  const news: News[] = [];

  partnersData.data.forEach((p: any) => {
    partners[p.attributes.type] = p.attributes.image.data.map(
      (i: any) => i.attributes.url
    );
  });

  newsData.data.forEach((n: any) => {
    news.push({
      id: n.id,
      title: n.attributes.title,
      content: n.attributes.content,
      createdAt: n.attributes.createdAt.slice(0, 10),
      imgURL: n.attributes.image.data.attributes.url,
    });
  });
  return {
    props: {
      carouselImgArray,
      title,
      body,
      partners,
      // index,
      news,
      products,
      achievements,
    },
  };
}

export default HomePage;
