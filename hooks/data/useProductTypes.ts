import { useEffect, useState } from "react";
import { allIcons, ProductType } from "../../data/types";
import { baseURL } from "../../utils/urls";

function useProductTypes() {
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  useEffect(() => {
    (async () => {
      const arr: ProductType[] = [];
      const res = await fetch(`${baseURL}/api/product-types`);
      const productTypesData = await res.json();
      productTypesData.data.forEach((p: any) => {
        const id = p.id as keyof typeof allIcons;
        arr.push({
          id: id,
          name: p.attributes.name,
          imgUrl: allIcons[id],
        });
      });
      console.log("productTypes: " + productTypes);
      setProductTypes(arr);
    })();
  }, []);

  return productTypes;
}

export default useProductTypes;
