import React from "react";
import CatalogList from "../components/catalog/CatalogList";
import HeroImage from "../components/HeroImage";

function Catalog() {
  return (
    <div>
      <HeroImage text="電子型錄" />
      <CatalogList />
    </div>
  );
}

export default Catalog;
