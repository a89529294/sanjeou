import { Catalog, Product } from "../../data/types";
import { baseURL } from "../urls";

async function getCatalogs(limit = 100) {
  const r = await fetch(
    `${baseURL}/api/catalogs?populate=pdf&pagination[start]=0&pagination[limit]=100`
  );
  const data = await r.json();
  const products: Catalog[] = [];

  data.data.forEach((c: any) => {
    const innerC = c.attributes;
    products.push({
      id: c.id,
      name: innerC.title,
      pdfURL: innerC.pdf.data.attributes.url,
    });
  });
  return products;
}

export default getCatalogs;
