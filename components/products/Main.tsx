import Image from "next/image";
import Link from "next/link";
import React from "react";
import ItemTitle from "../ItemTitle";
import SectionTitle from "../SectionTitle";
import products from "../../data/products";

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
    <SectionTitle primary={title} withDivider icon={icon} />
    <div className="grid mt-6 gap-x-5 gap-y-7 grid-cols-product-grid">
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
    <div className="flex flex-col flex-1 gap-8 pr-32 bg-white pt-9 pl-11">
      {products.map((series, i) => (
        <ProductGrid
          title={series.series}
          items={series.items}
          icon={series.icon}
          key={i}
        />
      ))}
    </div>
  );
}

export default Main;
