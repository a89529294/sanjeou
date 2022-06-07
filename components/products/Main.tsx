import Image from "next/image";
import React from "react";
import ItemTitle from "../ItemTitle";
import SectionTitle from "../SectionTitle";

const products = [
  {
    series: "防火防煙捲門系列",
    items: ["防火捲門", "阻熱捲門", "阻熱遮煙捲門", "遮煙捲幕"],
    icon: "/img/icons/door1.svg",
  },
  {
    series: "防水防洪門系列",
    items: [
      "防水捲門",
      "新式手動插板水閘門",
      "電動油壓水閘門",
      "扇形水閘門",
      "手動扇形水密門",
      "電動扇形水密門",
      "電動橫移水密門",
    ],
    icon: "/img/icons/door2.svg",
  },
  {
    series: "抗風防颱捲門系列",
    items: ["防颱捲門", "重型防颱捲門"],
    icon: "/img/icons/door3.svg",
  },
  {
    series: "廠辦管制門",
    items: ["密閉式捲門", "花格式捲門", "側開式PVC捲門", "uniflow"],

    icon: "/img/icons/door4.svg",
  },
  {
    series: "圍牆大門",
    items: ["單段式大門", "多段式大門", "伸縮大門"],
    icon: "/img/icons/door5.svg",
  },
  {
    series: "機庫門",
    items: ["柔性門", "橫移式機庫門"],
    icon: "/img/icons/door6.svg",
  },
  { series: "客製化", items: [], icon: "/img/icons/door7.svg" },
];

const ProductGrid = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: string;
}) => (
  <div>
    <SectionTitle primary={title} withDivider icon={icon} />
    <div className="grid mt-6 gap-x-5 gap-y-7 grid-cols-product-grid">
      {items.map((item, i) => (
        <div key={i}>
          <div className="relative aspect-[4/3]">
            <Image
              layout="fill"
              objectFit="cover"
              src="https://placehold.jp/300x230.png"
            />
          </div>
          <ItemTitle>{item}</ItemTitle>
        </div>
      ))}
    </div>
  </div>
);

function Main() {
  return (
    <div className="flex flex-col flex-1 gap-8 bg-white pt-9 pl-11">
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
