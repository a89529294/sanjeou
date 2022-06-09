import Carousel from "../components/Carousel";
import Achievements from "../components/home/Achievements";
import Intro from "../components/home/Intro";
import News from "../components/home/News";
import Products from "../components/home/Products";
import Locations from "../components/home/Locations";
import Partners from "../components/home/Partners";

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

const productsArray = [
  "/img/home/product-0.jpg",
  "/img/home/product-1.jpg",
  "/img/home/product-2.jpg",
];

const achievementsArray = ["/img/home/ach-0.jpg", "/img/home/ach-1.jpg"];

function HomePage() {
  return (
    <div>
      <Carousel imgs={imgArray} />
      <Intro />
      <Locations />
      <News />
      <Products imgs={productsArray} />
      <Achievements imgs={achievementsArray} />
      <Partners />
    </div>
  );
}

export default HomePage;
