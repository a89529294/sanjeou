import Link from "next/link";
import React from "react";
import { productsSubMenu, subMenu } from "../Footer";

const FooterSectionTitle = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => (
  <Link href={path}>
    <a className="mb-4 text-base font-bold text-bauhaus">{children}</a>
  </Link>
);

const List = ({
  series,
  items,
  gap = false,
  highLightFirstChild = false,
}: {
  series?: string;
  items: { path: string; text: string }[];
  gap?: boolean;
  highLightFirstChild?: boolean;
}) => (
  <ul
    className={`grid gap-3 text-sm font-light text-bauhaus ${
      gap ? "ml-2" : ""
    }`}
  >
    {series ? (
      <li
        className={`${
          highLightFirstChild ? "text-primary-red font-medium" : ""
        }`}
      >
        {series}
      </li>
    ) : null}
    {items.map((item, i) => (
      <li key={i} className={`cursor-pointer text-sm font-light text-bauhaus`}>
        <Link href={item.path}>
          <a>{item.text}</a>
        </Link>
      </li>
    ))}
  </ul>
);

function DesktopFooterNav() {
  return (
    <div className="flex gap-24 pb-10 border-b border-dashed border-primary xl:gap-12 sm:hidden">
      <div>
        <FooterSectionTitle path="/about">公司簡介</FooterSectionTitle>
        <List items={subMenu[0]} />
      </div>
      <div>
        <FooterSectionTitle path="/news">動態資訊</FooterSectionTitle>
        <Link href="/news#news-all">
          <a className="block mb-3 text-sm font-bold text-primary">全部</a>
        </Link>

        <List items={subMenu[1]} gap />
      </div>
      <div className="flex-1">
        <FooterSectionTitle path="/products">產品</FooterSectionTitle>
        <Link href="/products#products-all">
          <a className="block mb-3 text-sm font-bold text-primary">全部</a>
        </Link>

        <div className="grid items-start grid-cols-3">
          <div className="grid gap-6">
            <List
              series={productsSubMenu[0].series}
              items={productsSubMenu[0].items}
              gap
              highLightFirstChild
            />
            <List
              series={productsSubMenu[1].series}
              items={productsSubMenu[1].items}
              gap
              highLightFirstChild
            />
          </div>
          <div className="grid gap-6">
            <List
              series={productsSubMenu[2].series}
              items={productsSubMenu[2].items}
              gap
              highLightFirstChild
            />
            <List
              series={productsSubMenu[3].series}
              items={productsSubMenu[3].items}
              gap
              highLightFirstChild
            />
            <List
              series={productsSubMenu[4].series}
              items={productsSubMenu[4].items}
              gap
              highLightFirstChild
            />
          </div>
          <div className="grid gap-6">
            <List
              series={productsSubMenu[5].series}
              items={productsSubMenu[5].items}
              gap
              highLightFirstChild
            />
            <List
              series={productsSubMenu[6].series}
              items={productsSubMenu[6].items}
              gap
              highLightFirstChild
            />
          </div>
        </div>
      </div>
      <div className="grid content-start gap-16">
        <div>
          <FooterSectionTitle path="/catalog">電子型錄</FooterSectionTitle>
          <List items={subMenu[2]} />
        </div>
        <div>
          <FooterSectionTitle path="/videos">影片</FooterSectionTitle>
          <List items={subMenu[3]} />
        </div>
      </div>
      <div className="grid content-start gap-16">
        <div>
          <FooterSectionTitle path="/achievements">工程實績</FooterSectionTitle>
          <List items={subMenu[4]} />
        </div>
        <div>
          <FooterSectionTitle path="/contact-us">聯繫我們</FooterSectionTitle>
          <List items={subMenu[5]} />
        </div>
      </div>
    </div>
  );
}

export default DesktopFooterNav;
