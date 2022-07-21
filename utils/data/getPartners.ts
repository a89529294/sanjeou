import { PartnersType } from "../../data/types";
import { baseURL } from "../urls";

async function getPartners() {
  const r = await fetch(`${baseURL}/api/partners?populate=image`);
  const data = await r.json();
  const partners: PartnersType = {};

  data.data.forEach((p: any) => {
    partners[p.attributes.type] = p.attributes.image.data.map(
      (i: any) => i.attributes.url
    );
  });
  return { partners };
}

export default getPartners;
