import Image from "next/image";
import React from "react";
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

const ListItem = ({
  text,
  as = "div",
  selected = false,
}: {
  text: string;
  as?: "div" | "li";
  selected?: boolean;
}) => {
  const As = as;
  return (
    <As className="flex gap-2 cursor-pointer">
      <div className="flex w-[22px]">
        {selected ? (
          <>
            <div className="flex-1 border-r border-solid border-primary-red" />
            <div className="flex-1 border-l border-solid border-primary-red" />
          </>
        ) : null}
      </div>
      {as === "div" ? (
        <span
          className={`text-2xl font-medium ${
            selected ? "text-primary-red" : "text-primary"
          }`}
        >
          {text}
        </span>
      ) : (
        <span
          className={`text-xl ${
            selected ? "text-primary-red" : "text-bauhaus"
          }`}
        >
          {text}
        </span>
      )}
    </As>
  );
};

const MenuList = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: string;
}) => (
  <div>
    <div className="flex gap-2 text-2xl font-medium text-primary">
      <Image width={22} height={24} src={icon} />
      <span>{title}</span>
    </div>
    <ul className="flex flex-col gap-2 mt-3">
      {items.map((item, i) => (
        <ListItem text={item} as="li" key={i} />
      ))}
    </ul>
  </div>
);

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
        <div key={i} className="relative aspect-[4/3]">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://placehold.jp/300x230.png"
          />
        </div>
      ))}
    </div>
  </div>
);

function Main() {
  return (
    <div className="flex gap-2 bg-white-smoke">
      <div className="grid pb-24 pl-24 bg-white gap-9 pr-9 pt-9">
        <ListItem text="全部" selected />
        {products.map((series) => (
          <MenuList
            title={series.series}
            items={series.items}
            icon={series.icon}
          />
        ))}
      </div>
      <div className="flex flex-col flex-1 gap-8 bg-white pt-9 pl-11">
        {products.map((series) => (
          <ProductGrid
            title={series.series}
            items={series.items}
            icon={series.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
