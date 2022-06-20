import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useReducer } from "react";
import products from "../data/products";
import DesktopFooterNav from "./footer/DesktopFooterNav";
import MobileFooterNav from "./footer/MobileFooterNav";

export const categories = [
  "公司簡介",
  "動態資訊",
  "產品",
  "工程實績",
  "電子型錄",
  "聯繫我們",
  "影片",
] as const;

export type Categories = typeof categories[number];
export type ProductCategories = typeof products[number]["series"];

export const subMenu = [
  [
    { path: "/about#about-intro", text: "公司介紹" },
    { path: "/about#about-video", text: "影片介紹" },
    { path: "/about#about-certs", text: "專業認證" },
    { path: "/about#about-milestones", text: "公司歷程" },
  ],
  [
    { path: "/news#activities", text: "活動訊息" },
    { path: "/news#lessons", text: "操作教學" },
  ],
  [{ path: "/catalog#catalog-all", text: "型錄列表" }],
  [{ path: "/videos#videos-all", text: "影片列表" }],
  [{ path: "/achievements#achievements-all", text: "實績列表" }],
  [
    { path: "/contact-us#contact-us-map", text: "Google Map" },
    { path: "/contact-us#contact-us-form", text: "聯繫表" },
  ],
];

export const productsSubMenu = products.map((p) => ({
  series: p.series,
  items: [
    ...p.items.map((item) => ({
      path: `/products/${item.id}#product-details`,
      text: item.name,
    })),
  ],
}));

const ContactInfoListItem = ({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) => (
  <li className="flex items-center gap-2 text-sm">
    <Image width={14} height={14} src={icon} />
    {children}
  </li>
);

const ContactInfo = ({
  title,
  addr,
  phone,
  fax,
  email,
}: {
  title: string;
  addr: string;
  phone: string;
  fax: string;
  email?: string;
}) => (
  <div className="text-bauhaus">
    <h3 className="mb-1 text-base font-bold ">{title}</h3>
    <ul className="flex flex-col gap-2">
      <ContactInfoListItem icon="/img/icons/footer/address.svg">
        {addr}
      </ContactInfoListItem>
      <ContactInfoListItem icon="/img/icons/footer/phone.svg">
        {phone}
      </ContactInfoListItem>
      <ContactInfoListItem icon="/img/icons/footer/fax.svg">
        {fax}
      </ContactInfoListItem>
      {email ? (
        <ContactInfoListItem icon="/img/icons/footer/email.svg">
          {email}
        </ContactInfoListItem>
      ) : null}
    </ul>
  </div>
);

const reducer = (state: Categories[], category: Categories | "reset") => {
  if (category === "reset") return [];
  const indexOfCategory = state.indexOf(category);
  const newState = state.slice();
  if (indexOfCategory !== -1) {
    newState.splice(indexOfCategory, 1);
    return newState;
  } else return [...state, category];
};

const productCategoryReducer = (
  state: ProductCategories[],
  productCategory: ProductCategories | "reset"
) => {
  if (productCategory === "reset") return [];
  const indexOfCategory = state.indexOf(productCategory);
  const newState = state.slice();
  if (indexOfCategory !== -1) {
    newState.splice(indexOfCategory, 1);
    return newState;
  } else return [...state, productCategory];
};

function Footer() {
  const router = useRouter();
  const [expandedCategories, dispatch] = useReducer(reducer, []);
  const [expandedProductCategories, dispatchProductCategories] = useReducer(
    productCategoryReducer,
    []
  );
  const isCategoryExpanded = (category: Categories) =>
    expandedCategories.indexOf(category) !== -1;
  const isProductCategoryExpanded = (productCategory: ProductCategories) =>
    expandedProductCategories.indexOf(productCategory) !== -1;

  useEffect(() => {
    dispatch("reset");
    dispatchProductCategories("reset");
  }, [router.pathname, router.query]);

  return (
    <footer className="relative px-32 pt-14 bg-[url('/img/home/footer/bg.png')] sm:px-7 sm:pt-0">
      <DesktopFooterNav />
      <MobileFooterNav
        isCategoryExpanded={isCategoryExpanded}
        isProductCategoryExpanded={isProductCategoryExpanded}
        dispatch={dispatch}
        dispatchProductCategories={dispatchProductCategories}
      />
      <div className="flex pb-20 pt-9 sm:flex-col sm:items-center sm:border-t sm:border-dashed sm:border-primary sm:pt-6 sm:gap-9">
        <div className="relative aspect-[56/32] max-w-[224px] flex-1 sm:w-[224px]">
          <Image
            src="/img/home/footer/logo.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center flex-1 gap-7 min-w-[450px] sm:flex-col sm:min-w-full sm:px-7">
          <ContactInfo
            title="總公司工廠"
            addr="41357 台中市霧峰區峰北路666號"
            phone="04-2406-9939(8線)"
            fax="04-2406-9909"
            email="sjtch@ms39.hinet.net"
          />
          <ContactInfo
            title="台北分公司"
            addr="11442 台北市內湖區內湖路一段411巷88號1F"
            phone="02-2658-1508(4線)"
            fax="02-2658-1507"
          />
        </div>

        <div className="grid flex-1 max-w-xs gap-3 grid-cols-5 grid-rows-2 place-items-center aspect-[5/2] xl:gap-1 sm:w-full sm:gap-5 sm:border-t sm:border-primary sm:border-dashed sm:pt-3 ">
          <div className="relative w-full col-span-2 col-start-1 row-span-2 row-start-1 aspect-square">
            <Image
              layout="fill"
              objectFit="contain"
              src="/img/home/footer/2022talentintaiwan.svg"
            />
          </div>
          <div className="relative w-full col-start-3 row-start-1 aspect-square">
            <Image
              layout="fill"
              objectFit="contain"
              src="/img/home/footer/ISO9001_2000.svg"
            />
          </div>
          <div className="relative w-full col-start-4 row-start-1 aspect-square">
            <Image
              layout="fill"
              objectFit="contain"
              src="/img/home/footer/TÜVSÜD.svg"
            />
          </div>
          <div className="relative w-full col-start-5 row-start-1 aspect-square">
            <Image
              layout="fill"
              objectFit="contain"
              src="/img/home/footer/UKAS.svg"
            />
          </div>
          <div className="relative w-full col-start-3 row-start-2 aspect-square">
            <Image
              layout="fill"
              objectFit="contain"
              src="/img/home/footer/UL.svg"
            />
          </div>
          <div className="relative w-full col-span-2 aspect-[2/1]">
            <Image
              layout="fill"
              objectFit="contain"
              src="/img/home/footer/bsi.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full py-3 text-base text-center text-white bg-primary">
        1982 - 2022 © 三久建材工業股份有限公司
      </div>
    </footer>
  );
}

export default Footer;
