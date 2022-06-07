import React from "react";
import Main from "../components/products/Main";
import type { ReactElement } from "react";
import ProductPageLayout from "../components/layouts/ProductPageLayout";

function Products() {
  return <Main />;
}

export default Products;

Products.getLayout = function getLayout(page: ReactElement) {
  return <ProductPageLayout>{page}</ProductPageLayout>;
};
