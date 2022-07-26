import Image from "next/image";
import React, { useState } from "react";
import { Catalog, Product, ProductCategory } from "../../data/types";
import { PDF } from "../../pages/products/[pid]";
import InPageNavbar from "../InPageNavbar";
import ItemTitle from "../ItemTitle";
import Tag from "../Tag";
import TopCircle from "../TopCircle";

// const all = [
//   {
//     img: "https://placehold.jp/300x230.png",
//     tag: "捲門系列",
//     title: "一般型、防颱型電動捲門",
//   },
//   {
//     img: "https://placehold.jp/300x230.png",
//     tag: "大門系列",
//     title: "一般型、防颱型電動捲門",
//   },
//   {
//     img: "https://placehold.jp/300x230.png",
//     tag: "水閘門系列",
//     title: "一般型、防颱型電動捲門",
//   },
//   {
//     img: "https://placehold.jp/300x230.png",
//     tag: "飛速門系列",
//     title: "一般型、防颱型電動捲門",
//   },
//   {
//     img: "https://placehold.jp/300x230.png",
//     tag: "飛速門系列",
//     title: "一般型、防颱型電動捲門",
//   },
//   {
//     img: "https://placehold.jp/300x230.png",
//     tag: "飛速門系列",
//     title: "一般型、防颱型電動捲門",
//   },
// ];

const CatalogItem = ({
  url,
  tag,
  title,
}: {
  url: string;
  tag: string;
  title: string;
}) => (
  <div className="grid">
    {/* <div className="relative mb-1 aspect-video">
      <Image layout="fill" objectFit="cover" src={img} />
    </div> */}
    <PDF hideTitle url={url} />
    <Tag className="justify-self-start">{tag}</Tag>
    <ItemTitle className="mt-3 sm:mt-1">{title}</ItemTitle>
  </div>
);

function CatalogList({
  productTypes,
  catalogs,
}: {
  productTypes: ProductCategory[];
  catalogs: Catalog[];
}) {
  const [selectedProductId, setSelectedProductId] = useState(0);
  const filteredCatalogs = catalogs.filter((c) => {
    if (!selectedProductId) return true;
    else return c.product_type === selectedProductId;
  });

  return (
    <div id="catalog-all">
      <InPageNavbar
        items={[
          { id: 0, name: "全部文件" },
          ...productTypes.map((t) => ({ name: t.name, id: t.id })),
        ]}
        selectedId={selectedProductId}
        setSelectedId={setSelectedProductId}
      />
      <div className="relative grid px-32 py-7 grid-cols-catalog-grid gap-9 sm:px-7 sm:auto-rows-auto sm:gap-4">
        {filteredCatalogs.map((item) => (
          <CatalogItem
            url={item.pdfURL}
            tag={
              productTypes.find((p) => p.id === item.product_type)?.name ?? ""
            }
            title={item.name}
            key={item.id}
          />
        ))}
        <TopCircle to="/catalog" />
      </div>
    </div>
  );
}

export default CatalogList;
