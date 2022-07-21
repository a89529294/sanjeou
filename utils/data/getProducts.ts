import { ProductType } from "../../data/types";
import { baseURL } from "../urls";

async function getProducts() {
  const r = await fetch(`${baseURL}/api/products?populate=*`);
  const data = await r.json();
  const products: ProductType[] = [];
  console.log(data.data);

  data.data.forEach((p: any) => {
    const innerP = p.attributes;
    products.push({
      id: p.id,
      name: innerP.title,
      imgURL: innerP.image.data[0].attributes.url,
    });
  });
  return { products };
}

export default getProducts;
