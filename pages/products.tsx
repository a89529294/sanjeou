import React from "react";
import Main from "../components/products/Main";
import type { ReactElement } from "react";
import ProductPageLayout from "../components/layouts/ProductPageLayout";
import getProductTypes from "../utils/data/getProductTypes";
import getProducts from "../utils/data/getProducts";

function Products() {
  return <Main />;
}

export default Products;

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProductPageLayout
      productTypes={page.props.productTypes}
      products={page.props.products}>
      {page}
    </ProductPageLayout>
  );
};

export async function getServerSideProps() {
  const productTypes = await getProductTypes();
  const products = await getProducts();
  return {
    props: {
      productTypes,
      products,
    },
  };
}
