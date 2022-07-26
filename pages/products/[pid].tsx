import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Circle from "../../components/Circle";
import ProductPageLayout from "../../components/layouts/ProductPageLayout";
import SectionTitle from "../../components/SectionTitle";
import Tag from "../../components/Tag";
import TitledParagraphs from "../../components/TitledParagraphs";
import getCatalogs from "../../utils/data/getCatalogs";
import getProducts from "../../utils/data/getProducts";
import getProductTypes from "../../utils/data/getProductTypes";

const TagAndTitle = ({ iconURL, name }: { iconURL: string; name: string }) => (
  <div className="z-20 isolate">
    <Tag icon={iconURL}>{name}</Tag>
    <div className="flex items-center gap-6 sm:mt-4 sm:gap-[10px]">
      <SectionTitle primary="電動防火/防颱捲門" size="product-title" />
      <span className="text-3xl text-primary-red sm:text-xl">|</span>
      <SectionTitle primary="型號:SJ-302" size="product-title" />
    </div>
  </div>
);

const ImgGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="px-2 grid grid-cols-3 auto-rows-[180px] gap-2 isolate z-20 sm:auto-rows-[63px] sm:px-0 sm:gap-1 sm:-mt-4">
    {children}
  </div>
);

const PDF = ({ title, url }: { title: string; url: string }) => (
  <button
    className="shrink-0 sm:basis-full"
    onClick={() => {
      let link: HTMLAnchorElement | null = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      link.click();
      link = null;
    }}>
    <div className="w-96 aspect-[402/178] grid place-items-center font-open-sans font-bold text-5xl bg-pdf mt-5 mb-2">
      PDF
    </div>
    <h3 className="text-2xl font-medium text-primary sm:text-sm">{title}</h3>
  </button>
);
function ProductDetails({
  productTypes,
  products,
  catalogs,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { pid } = router.query;
  if (typeof pid === "object" || !pid) return <h1>Product Not Found</h1>;
  const p = products.find((p) => p.id === +pid);
  if (!p) return <h1>Product Not Found</h1>;
  const pt = productTypes.find((pt) => pt.id === p.product_type);
  const filteredCatalogs = catalogs.filter((c) => p.catalogs.includes(c.id));
  return (
    <div className="relative grid content-start flex-1 gap-8 pl-16 bg-white pt-9 pr-36 pb-7 isolate sm:px-8 sm:pt-4 sm:pb-8 sm:gap-6">
      <TagAndTitle
        iconURL={pt?.whiteIconURL || "/img/icons/product_types/1-white.svg"}
        name={p.name}
      />
      <ImgGrid>
        <div className="relative col-span-3 row-span-3">
          <Image
            layout="fill"
            objectFit="cover"
            src={p.imgURLs[0] || "https://placehold.jp/500x300.png"}
          />
        </div>
        {p.imgURLs.slice(1).map((v, i) => (
          <div className="relative" key={i}>
            <Image layout="fill" objectFit="cover" src={v} />
          </div>
        ))}
      </ImgGrid>
      <TitledParagraphs title="產品特色">{p.feature}</TitledParagraphs>
      <TitledParagraphs title="產品規格">{p.spec}</TitledParagraphs>
      <div>
        <SectionTitle primary="型錄下載" withDivider size="small" />
        <div className="flex flex-wrap gap-5 pr-10 sm:pr-0 xl:pr-5 xl:gap-3 whitespace-nowrap">
          {filteredCatalogs.map((c) => (
            <PDF key={c.id} title={c.name} url={c.pdfURL} />
          ))}
        </div>
      </div>
      <Circle width={587} className="z-10 top-20 -right-14 sm:hidden" />
      <Circle
        width={320}
        className="right-0 hidden translate-x-1/2 sm:block top-14"
      />
    </div>
  );
}

export default ProductDetails;

// TODO getLayout and getServerSideProps here are the same as the ones in products.tsx, find a way to remove duplication
ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProductPageLayout
      productTypes={page.props.productTypes}
      products={page.props.products}>
      {page}
    </ProductPageLayout>
  );
};

export async function getServerSideProps() {
  const productTypes = await getProductTypes();
  const products = await getProducts();
  const catalogs = await getCatalogs();
  return {
    props: {
      productTypes,
      products,
      catalogs,
    },
  };
}
