import { baseURL } from "../urls";

async function getCarouselAndTitleBody() {
  const r = await fetch(
    `${baseURL}/api/homepage?populate[Carousel][populate]=image`
  );
  const data = await r.json();
  const carouselImgArray = data.data.attributes.Carousel.map(
    (img: any) => img.image.data.attributes.url
  );
  const title = data.data.attributes.title;
  const body = data.data.attributes.content;
  return { carouselImgArray, title, body };
}

export default getCarouselAndTitleBody;
