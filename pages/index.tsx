import Carousel from "../components/Carousel";

const imgArray = [
  "/img/home/carousel-0.jpg",
  "/img/home/carousel-1.jpg",
  "/img/home/carousel-2.jpg",
  "/img/home/carousel-3.jpg",
  // "/img/home/carousel-4.jpg",
  // "/img/home/carousel-5.jpg",
  // "/img/home/carousel-6.jpg",
  // "/img/home/carousel-7.jpg",
  // "/img/home/carousel-8.jpg",
  // "/img/home/carousel-9.jpg",
];

function HomePage() {
  return (
    <div>
      <Carousel imgs={imgArray} />
    </div>
  );
}

export default HomePage;
