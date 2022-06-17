import Image from "next/image";
import Link from "next/link";
import React from "react";
import ItemTitle from "../ItemTitle";
import SectionTitle from "../SectionTitle";
import products from "../../data/products";
import TopCircle from "../TopCircle";

const ProductGrid = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: typeof products[number]["items"];
  icon: string;
}) => (
  <div>
    <SectionTitle primary={title} withDivider icon={icon} size="small" />
    <div className="grid mt-6 gap-x-5 gap-y-7 grid-cols-product-grid sm:mt-4 sm:grid-cols-product-grid-mobile sm:gap-2">
      {items.map((item, i) => (
        <div key={i}>
          <Link href={`/products/${item.id}`}>
            <a className="relative aspect-[4/3] block">
              <Image
                layout="fill"
                objectFit="cover"
                src="https://placehold.jp/300x230.png"
              />
            </a>
          </Link>
          <ItemTitle>{item.name}</ItemTitle>
        </div>
      ))}
    </div>
  </div>
);

function Main() {
  return (
    <div
      className="relative flex flex-col flex-1 gap-8 pr-32 bg-white pt-9 pl-11 sm:px-8 sm:pt-4 sm:pb-7 sm:gap-6"
      id="products-all"
    >
      {products.map((series, i) => (
        <ProductGrid
          title={series.series}
          items={series.items}
          icon={series.icon}
          key={i}
        />
      ))}
      <TopCircle to="/products" />
    </div>
  );
}

export default Main;
