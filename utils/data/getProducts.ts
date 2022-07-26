import { Product } from "../../data/types";
import { baseURL } from "../urls";

async function getProducts(limit = 100) {
  const r = await fetch(
    `${baseURL}/api/products?populate=*&pagination[start]=0&pagination[limit]=${limit}`
  );
  const data = await r.json();
  const products: Product[] = [];

  data.data.forEach((p: any) => {
    const innerP = p.attributes;
    products.push({
      id: p.id,
      name: innerP.title,
      imgURLs: innerP.image.data.map((img: any) => img.attributes.url),
      product_type: innerP.product_type.data.id,
      feature: innerP.feature,
      spec: innerP.spec,
      catalogs: innerP.catalogs.data.map((c: any) => c.id),
    });
  });
  return products;
}

export default getProducts;
