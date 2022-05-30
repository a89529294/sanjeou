import Carousel from "../components/Carousel";
import Intro from "../components/home/Intro";
import News from "../components/home/News";
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

function HomePage() {
  return (
    <div>
      <Carousel imgs={imgArray} />
      <Intro />
      <Partners />
      <News />
    </div>
  );
}

export default HomePage;
