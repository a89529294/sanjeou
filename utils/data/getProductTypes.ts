import { allIcons, ProductType } from "../../data/types";
import { baseURL } from "../../utils/urls";

async function getProductTypes() {
  const productTypes: ProductType[] = [];
  const res = await fetch(`${baseURL}/api/product-types`);
  const productTypesData = await res.json();
  productTypesData.data.forEach((p: any) => {
    const id = p.id as keyof typeof allIcons;
    productTypes.push({
      id: id,
      name: p.attributes.name,
      imgURL: allIcons[id],
    });
  });
  console.log("productTypes: " + productTypes);

  return productTypes;
}

export default getProductTypes;
