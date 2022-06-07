import Image from "next/image";
import React, { ReactElement } from "react";
import ProductPageLayout from "../../components/layouts/ProductPageLayout";
import SectionTitle from "../../components/SectionTitle";
import Tag from "../../components/Tag";

const TagAndTitle = () => (
  <div>
    <Tag icon="/img/icons/door1_white.svg">防火防煙捲門系列</Tag>
    <div className="flex items-center gap-6">
      <SectionTitle primary="電動防火/防颱捲門" />
      <span className="text-3xl text-primary-red">|</span>
      <SectionTitle primary="型號:SJ-302" />
    </div>{" "}
  </div>
);

const ImgGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="px-2 grid grid-cols-3 auto-rows-[180px] gap-2 ">
    {children}
  </div>
);

const ProductDesc = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="grid gap-3">
    <SectionTitle primary={title} withDivider />
    <div className="grid gap-6 text-lg text-bauhaus">{children}</div>
  </div>
);

const PDF = ({ title }: { title: string }) => (
  <div>
    <div className="w-96 aspect-[402/178] grid place-items-center font-open-sans font-bold text-5xl bg-pdf mt-5 mb-2">
      PDF
    </div>
    <h3 className="text-2xl font-medium text-primary">{title}</h3>
  </div>
);
function ProductDetails() {
  return (
    <div className="grid content-start flex-1 gap-8 pl-16 bg-white pt-9 pr-36 pb-7">
      <TagAndTitle />
      <ImgGrid>
        <div className="relative col-span-3 row-span-3">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://placehold.jp/500x300.png"
          />
        </div>
        <div className="relative ">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://placehold.jp/500x300.png"
          />
        </div>
        <div className="relative ">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://placehold.jp/500x300.png"
          />
        </div>
        <div className="relative ">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://placehold.jp/500x300.png"
          />
        </div>
      </ImgGrid>
      <ProductDesc title="產品特色">
        <p>
          現今社會時代變遷、氣候異常、天災無情，台灣身處地震帶以及颱風圈第一島鏈，生命、財產更需要穩固的保障。三久建材公司深知肩負重大責任，從一般戶外捲門以至於超大型防颱捲門的研發、製造、安裝及售後服務一條龍的方式，提供給所有鄰近海岸、空曠地、以及配合廠房設計之大開口面積客戶端，更安全及更可靠之產品。
        </p>
        <p>
          三久建材公司所生產之防颱捲門，著重於兩側軌道設計，透過研發部門以及結構技師將兩側門軌深度以及門片饒度帶入計算，取得最大安全係數所設計。
        </p>
      </ProductDesc>
      <ProductDesc title="產品規格">
        <p>門片為鋁合金鋁擠型製造，一體成型，可承受較高水壓。</p>
        <p>
          門片單片高度250mm，單片最大使用寬度6m，重量5.8kg/m;寬度6m以上建議分段，加上中柱及背撐進行輔助。
        </p>
        <p>軌道材質為鋁合金，依三久公司圖面尺寸。</p>
        <p>底板材質為不銹鋼，厚度為3.0mm</p>
        <p>中柱及背撐使用不銹鋼方管60*60*2.0mm</p>
      </ProductDesc>
      <div>
        <SectionTitle primary="型錄下載" withDivider />
        <div className="flex gap-5">
          <PDF title="一般型、防颱型電動捲門" />
          <PDF title="一般型、防颱型電動捲門" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return <ProductPageLayout>{page}</ProductPageLayout>;
};
