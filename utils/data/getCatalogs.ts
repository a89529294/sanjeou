import { Catalog, Product } from "../../data/types";
import { baseURL } from "../urls";

async function getCatalogs(limit = 100) {
  const r = await fetch(
    `${baseURL}/api/catalogs?populate[0]=pdf&populate[1]=product_type&pagination[start]=0&pagination[limit]=100`
  );
  const data = await r.json();
  const catalogs: Catalog[] = [];

  data.data.forEach((c: any) => {
    const innerC = c.attributes;
    catalogs.push({
      id: c.id,
      name: innerC.title,
      pdfURL: innerC.pdf.data.attributes.url,
      product_type: innerC.product_type.data.id,
    });
  });
  return catalogs;
}

export default getCatalogs;
