import { InferGetStaticPropsType } from "next";
import React from "react";
import { allIcons, ProductType } from "../data/types";
import { baseURL } from "../utils/urls";

const withProductTypes = (Component: React.FC<any>) => {
  const wrappedComponent = (
    props: InferGetStaticPropsType<typeof getStaticProps>
  ) => <Component {...props} />;

  return wrappedComponent;
};

export const getStaticProps = async () => {
  const productTypes: ProductType[] = [];
  const res = await fetch(`${baseURL}/api/product-types`);
  const productTypesData = await res.json();
  productTypesData.data.forEach((p: any) => {
    const id = p.id as keyof typeof allIcons;
    productTypes.push({
      id: id,
      name: p.attributes.name,
      imgUrl: allIcons[id],
    });
  });
  console.log("productTypes: " + productTypes);
  return {
    props: {
      productTypes,
    },
  };
};

export default withProductTypes;
