import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ItemTitle from "../ItemTitle";
import HeroImage from "../HeroImage";
import products from "../../data/products";
import Burger from "../Icons/Burger";
import Head from "next/head";

const ListItem = ({
  item,
  as = "div",
}: {
  item: { id?: number; name: string };
  as?: "div" | "li";
}) => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(() => {
    if (router.pathname === "/products") return 0;
    else return +router.query.pid!;
  });
  const As = as;

  useEffect(() => {
    let r;
    if (typeof router.query.pid === "string") r = +router.query.pid ?? 0;
    else r = 0;
    setSelectedId(r);
  }, [router.query.pid]);

  return (
    <As className="flex gap-2 cursor-pointer">
      <div className="flex w-[22px]">
        {selectedId === item.id ? (
          <>
            <div className="flex-1 border-r border-solid border-primary-red" />
            <div className="flex-1 border-l border-solid border-primary-red" />
          </>
        ) : null}
      </div>
      {as === "div" ? (
        <span
          className={`text-2xl font-medium ${
            selectedId === item.id ? "text-primary-red" : "text-primary"
          }`}
          onClick={() => router.push("/products#product-details")}
        >
          {item.name}
        </span>
      ) : (
        <span
          className={`text-xl ${
            selectedId === item.id ? "text-primary-red" : "text-bauhaus"
          }`}
          onClick={() => router.push(`/products/${item.id}#product-details`)}
        >
          {item.name}
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
  items: { id: number; name: string }[];
  icon: string;
}) => (
  <div>
    <div className="flex gap-2">
      <Image width={22} height={24} src={icon} />
      <ItemTitle>{title}</ItemTitle>
    </div>
    <ul className="flex flex-col gap-2 mt-3">
      {items.map((item, i) => (
        <ListItem item={item} as="li" key={i} />
      ))}
    </ul>
  </div>
);

function ProductPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>產品</title>
      </Head>
      <HeroImage text="產品" />
      <div className="flex gap-2 sm:hidden bg-white-smoke" id="product-details">
        <div className="bg-white">
          <div className="grid pb-24 pl-24 gap-9 pr-9 pt-9">
            <ListItem item={{ id: 0, name: "全部" }} />
            {products.map((series, i) => (
              <MenuList
                title={series.series}
                items={series.items}
                icon={series.icon}
                key={i}
              />
            ))}
          </div>
        </div>
        {children}
      </div>
      <div className="hidden sm:block">
        <div className="flex items-center gap-4 px-8 py-4 bg-white-smoke">
          <Burger />
          <h2 className="text-sm font-medium text-bauhaus">商品列表</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ProductPageLayout;
