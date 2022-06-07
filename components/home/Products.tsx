import Image from "next/image";
import React from "react";
import Circle from "../Circle";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";
import MoreInfoButton from "../MoreInfoButton";
import SectionTitle from "../SectionTitle";

function Product({ imgPath }: { imgPath: string }) {
  return (
    <div className="grid grid-cols-[24px_1fr_24px] grid-rows-[318px_auto_auto_auto] flex-1">
      <div className="relative col-span-2 col-start-2 row-span-2 row-start-1">
        <Image layout="fill" objectFit="cover" src={imgPath} className="" />
      </div>
      <div className="relative col-span-2 col-start-1 row-span-2 row-start-2 px-6 py-3 text-2xl font-medium text-white bg-primary">
        標題
      </div>
      <MoreInfoButton
        color="red"
        className="col-span-2 col-start-2 row-start-4 mt-4"
      />
    </div>
  );
}

function Products({ imgs }: { imgs: string[] }) {
  return (
    <div className="relative px-32">
      <SectionTitle primary="產品資訊" secondary="Products" />
      <div className="flex gap-6 pb-24 pt-9">
        {imgs.map((img) => (
          <Product imgPath={img} key={img} />
        ))}
      </div>
      <div className="absolute flex right-48 top-5 gap-7">
        <CircleArrowLeft />
        <CircleArrowRight />
      </div>

      <Circle width="w-[470px]" className="-right-24 -top-7" />
    </div>
  );
}

export default Products;
