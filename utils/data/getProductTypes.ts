import { allIcons, allWhiteIcons, ProductCategory } from "../../data/types";
import { baseURL } from "../../utils/urls";

async function getProductTypes() {
  const productTypes: ProductCategory[] = [];
  const res = await fetch(`${baseURL}/api/product-types`);
  const productTypesData = await res.json();
  productTypesData.data.forEach((p: any) => {
    const id = p.id as keyof typeof allIcons;
    productTypes.push({
      id: id,
      name: p.attributes.name,
      iconURL: allIcons[id] ?? "",
      whiteIconURL: allWhiteIcons[id] ?? "",
    });
  });

  return productTypes;
}

export default getProductTypes;
