import { baseURL } from "../urls";

async function getNewsCategories() {
  const r = await fetch(`${baseURL}/api/information-types`);
  const data = await r.json();

  const newsCategories = data.data.map((n: any) => ({
    id: n.id,
    title: n.attributes.title,
  }));

  return newsCategories;
}

export default getNewsCategories;
