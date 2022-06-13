import Image from "next/image";
import Link from "next/link";
import React from "react";
import products from "../data/products";

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
  items,
  gap = false,
  highLightFirstChild = false,
}: {
  items: ({ path: string; text: string } | string)[];
  gap?: boolean;
  highLightFirstChild?: boolean;
}) => (
  <ul className="grid gap-3">
    {items.map((item, i) => (
      <li
        key={i}
        className={`cursor-pointer text-sm font-light text-bauhaus ${
          highLightFirstChild ? "first:text-primary-red first:font-medium" : ""
        } ${gap ? "ml-2" : ""}`}
      >
        {typeof item !== "string" ? (
          <Link href={item.path}>
            <a>{item.text}</a>
          </Link>
        ) : (
          item
        )}
      </li>
    ))}
  </ul>
);

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

function Footer() {
  return (
    <footer className="relative px-32 pt-14 bg-[url('/img/home/footer/bg.png')]">
      <div className="flex gap-24 pb-10 border-b border-dashed border-primary xl:gap-12">
        <div>
          <FooterSectionTitle path="/about">公司簡介</FooterSectionTitle>
          <List
            items={[
              { path: "/about#about-intro", text: "公司介紹" },
              { path: "/about#about-video", text: "影片介紹" },
              { path: "/about#about-certs", text: "專業認證" },
              { path: "/about#about-milestones", text: "公司歷程" },
            ]}
          />
        </div>
        <div>
          <FooterSectionTitle path="/news">動態資訊</FooterSectionTitle>
          <Link href="/news#news-all">
            <a className="block mb-3 text-sm font-bold text-primary">全部</a>
          </Link>

          <List
            items={[
              { path: "/news#activities", text: "活動訊息" },
              { path: "/news#lessons", text: "操作教學" },
            ]}
            gap
          />
        </div>
        <div className="flex-1">
          <FooterSectionTitle path="/products">產品</FooterSectionTitle>
          <Link href="/products#products-all">
            <a className="block mb-3 text-sm font-bold text-primary">全部</a>
          </Link>

          <div className="grid items-start grid-cols-3">
            <div className="grid gap-6">
              <List
                items={[
                  products[0].series,
                  ...products[0].items.map((item) => ({
                    path: `/products/${item.id}#product-details`,
                    text: item.name,
                  })),
                ]}
                gap
                highLightFirstChild
              />
              <List
                items={[
                  products[1].series,
                  ...products[1].items.map((item) => ({
                    path: `/products/${item.id}#product-details`,
                    text: item.name,
                  })),
                ]}
                gap
                highLightFirstChild
              />
            </div>
            <div className="grid gap-6">
              <List
                items={[
                  products[2].series,
                  ...products[2].items.map((item) => ({
                    path: `/products/${item.id}#product-details`,
                    text: item.name,
                  })),
                ]}
                gap
                highLightFirstChild
              />
              <List
                items={[
                  products[3].series,
                  ...products[3].items.map((item) => ({
                    path: `/products/${item.id}#product-details`,
                    text: item.name,
                  })),
                ]}
                gap
                highLightFirstChild
              />
              <List
                items={[
                  products[4].series,
                  ...products[4].items.map((item) => ({
                    path: `/products/${item.id}#product-details`,
                    text: item.name,
                  })),
                ]}
                gap
                highLightFirstChild
              />
            </div>
            <div className="grid gap-6">
              <List
                items={[
                  products[5].series,
                  ...products[5].items.map((item) => ({
                    path: `/products/${item.id}#product-details`,
                    text: item.name,
                  })),
                ]}
                gap
                highLightFirstChild
              />
              <List items={["客製化"]} gap highLightFirstChild />
            </div>
          </div>
        </div>
        <div className="grid content-start gap-16">
          <div>
            <FooterSectionTitle path="/catalog">電子型錄</FooterSectionTitle>
            <List
              items={[{ path: "/catalog#catalog-all", text: "型錄列表" }]}
            />
          </div>
          <div>
            <FooterSectionTitle path="/videos">影片</FooterSectionTitle>
            <List items={[{ path: "/videos#videos-all", text: "影片列表" }]} />
          </div>
        </div>
        <div className="grid content-start gap-16">
          <div>
            <FooterSectionTitle path="/achievements">
              工程實績
            </FooterSectionTitle>
            <List
              items={[
                { path: "/achievements#achievements-all", text: "實績列表" },
              ]}
            />
          </div>
          <div>
            <FooterSectionTitle path="/contact-us">聯繫我們</FooterSectionTitle>
            <List
              items={[
                { path: "/contact-us#contact-us-map", text: "Google Map" },
                { path: "/contact-us#contact-us-form", text: "聯繫表" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex pb-20 pt-9">
        <div className="relative aspect-[56/32] max-w-[224px] flex-1 ">
          <Image
            src="/img/home/footer/logo.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center flex-1 gap-7 min-w-[450px]">
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

        <div className="grid flex-1 max-w-xs gap-3 grid-cols-5 grid-rows-2 place-items-center aspect-[5/2] xl:gap-1">
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
