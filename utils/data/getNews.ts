import { News } from "../../data/types";
import { baseURL } from "../urls";

// TODO Getting 100 news by default, need to ask for clarification on how to handle paginations
async function getNews({ limit = 100, newsCategoryId = 0 }) {
  const r = await fetch(
    `${baseURL}/api/informations?populate=*&pagination[start]=0&pagination[limit]=${limit}${
      newsCategoryId
        ? `&filters[information_type][id][$eq]=${newsCategoryId}`
        : ""
    }`
  );
  const data = await r.json();
  const news: News[] = [];

  data.data.forEach((n: any) => {
    news.push({
      id: n.id,
      title: n.attributes.title,
      content: n.attributes.content,
      createdAt: n.attributes.createdAt.slice(0, 10),
      imgURL: n.attributes.image.data.attributes.url,
      categoryId: n.attributes.information_type.data.id,
    });
  });
  return news;
}

export default getNews;
