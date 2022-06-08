import Image from "next/image";
import React from "react";

const FooterSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-4 text-base font-bold text-bauhaus">{children}</h2>
);

const List = ({
  items,
  gap = false,
  highLightFirstChild = false,
}: {
  items: string[];
  gap?: boolean;
  highLightFirstChild?: boolean;
}) => (
  <ul className="grid gap-3">
    {items.map((item) => (
      <li
        key={item}
        className={`cursor-pointer text-sm font-light text-bauhaus ${
          highLightFirstChild ? "first:text-primary-red first:font-medium" : ""
        } ${gap ? "ml-2" : ""}`}
      >
        {item}
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
          <FooterSectionTitle>公司簡介</FooterSectionTitle>
          <List items={["公司介紹", "影片介紹", "專業認證", "公司歷程"]} />
        </div>
        <div>
          <FooterSectionTitle>動態資訊</FooterSectionTitle>
          <h3 className="mb-3 text-sm font-bold text-primary">全部</h3>
          <List items={["工程實績", "專業認證", "公司歷程"]} gap />
        </div>
        <div className="flex-1">
          <FooterSectionTitle>產品</FooterSectionTitle>
          <h3 className="mb-3 text-sm font-bold text-primary">全部</h3>
          <div className="grid items-start grid-cols-3">
            <div className="grid gap-6">
              <List
                items={[
                  "防火防煙捲門系列",
                  "防火捲門",
                  "阻熱捲門",
                  "阻熱遮煙捲門",
                  "遮煙捲幕",
                ]}
                gap
                highLightFirstChild
              />
              <List
                items={[
                  "防水防洪門系列",
                  "防水捲門",
                  "新式手動插板水閘門",
                  "電動遊壓水閘門",
                  "扇形水閘門",
                  "手動扇形水密門",
                  "電動扇形水密門",
                  "電動橫移水密門",
                ]}
                gap
                highLightFirstChild
              />
            </div>
            <div className="grid gap-6">
              <List
                items={["防火防煙捲門系列", "防颱捲門", "重型防颱捲門"]}
                gap
                highLightFirstChild
              />
              <List
                items={[
                  "廠辦管制門",
                  "密閉式捲門",
                  "花格式捲門",
                  "側開式 PVC 捲門",
                  "uniflow",
                ]}
                gap
                highLightFirstChild
              />
              <List
                items={["圍牆大門", "單段式大門", "多段式大門", "伸縮大門"]}
                gap
                highLightFirstChild
              />
            </div>
            <div className="grid gap-6">
              <List
                items={["機庫門", "伸縮大門", "橫移式機庫門"]}
                gap
                highLightFirstChild
              />
              <List items={["客製化"]} gap highLightFirstChild />
            </div>
          </div>
        </div>
        <div className="grid content-start gap-16">
          <div>
            <FooterSectionTitle>電子型錄</FooterSectionTitle>
            <List items={["型錄列表"]} />
          </div>
          <div>
            <FooterSectionTitle>影片</FooterSectionTitle>
            <List items={["影片列表"]} />
          </div>
        </div>
        <div className="grid content-start gap-16">
          <div>
            <FooterSectionTitle>工程實績</FooterSectionTitle>
            <List items={["實績列表"]} />
          </div>
          <div>
            <FooterSectionTitle>聯繫我們</FooterSectionTitle>
            <List items={["Google Map", "影片列表"]} />
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
