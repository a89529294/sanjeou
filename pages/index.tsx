import { InferGetStaticPropsType } from "next";

import index from "../data";
import news from "../data/news";
import products, { ProductItem } from "../data/products";

import Carousel from "../components/Carousel";
import Achievements from "../components/home/Achievements";
import Intro from "../components/home/Intro";
import News from "../components/home/News";
import Products from "../components/home/Products";
import Locations from "../components/home/Locations";
import Partners from "../components/home/Partners";
import achievements from "../data/achievements";

const imgArray = [
  "/img/home/carousel-0.jpg",
  "/img/home/carousel-1.jpg",
  "/img/home/carousel-2.jpg",
  "/img/home/carousel-3.jpg",
  "/img/home/carousel-4.jpg",
  "/img/home/carousel-5.jpg",
  "/img/home/carousel-6.jpg",
  "/img/home/carousel-7.jpg",
  "/img/home/carousel-8.jpg",
  "/img/home/carousel-9.jpg",
];

function HomePage({
  index: { about },
  news,
  achievements,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Carousel imgs={imgArray} />
      <Intro title={about.title} body={about.body} />
      <Locations />
      <News newsArticles={news.slice(0, 3)} />
      <Products
        products={products.reduce<ProductItem["items"]>(
          (acc, val) => acc.concat(val.items),
          []
        )}
      />
      <Achievements achievements={achievements} />
      <Partners />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      index,
      news,
      products,
      achievements,
    },
  };
}

export default HomePage;
