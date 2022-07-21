import { NewsType } from "../../data/types";
import { baseURL } from "../urls";

async function getNews() {
  const r = await fetch(
    `${baseURL}/api/informations?populate=*&pagination[start]=0&pagination[limit]=3`
  );
  const data = await r.json();
  const news: NewsType[] = [];

  data.data.forEach((n: any) => {
    news.push({
      id: n.id,
      title: n.attributes.title,
      content: n.attributes.content,
      createdAt: n.attributes.createdAt.slice(0, 10),
      imgURL: n.attributes.image.data.attributes.url,
    });
  });
  return { news };
}

export default getNews;
