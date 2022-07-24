import { Achievement, Partners } from "../../data/types";
import { baseURL } from "../urls";

async function getAchievements() {
  const r = await fetch(`${baseURL}/api/performances?populate=*`);
  const data = await r.json();
  const achievements: Achievement[] = [];

  data.data.forEach((a: any) => {
    const innerA = a.attributes;
    achievements.push({
      id: a.id,
      title: innerA.title,
      subTitle: innerA.content,
      year: innerA.year,
      imgURL: innerA.image.data.attributes.url,
      productTypeIds: innerA.product_types.data.map((e: any) => {
        e.id > 7 &&
          console.warn(
            `There is a new product_type id ${e.id} that doesn"t exit in allIcons!!`
          );
        return e.id;
      }),
    });
  });
  return achievements;
}

export default getAchievements;
