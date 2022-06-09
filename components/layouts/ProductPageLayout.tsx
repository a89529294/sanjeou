import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ItemTitle from "../ItemTitle";
import HeroImage from "../HeroImage";
import products from "../../data/products";

const ListItem = ({
  item,
  as = "div",
}: {
  item: { id?: number; name: string };
  as?: "div" | "li";
}) => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(typeof router.query.pid);
  const [selectedId, setSelectedId] = useState(() => {
    if (router.pathname === "/products") return 0;
    else return +router.query.pid!;
  });
  const As = as;

  useEffect(() => {
    setSelectedId((id) => (router.query.pid ? +router.query.pid : id));
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
          onClick={() => router.push("/products")}
        >
          {item.name}
        </span>
      ) : (
        <span
          className={`text-xl ${
            selectedId === item.id ? "text-primary-red" : "text-bauhaus"
          }`}
          onClick={() => router.push(`/products/${item.id}`)}
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
      <HeroImage text="產品" />
      <div className="flex gap-2 bg-white-smoke">
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
    </div>
  );
}

export default ProductPageLayout;
