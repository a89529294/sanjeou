import Image from "next/image";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import type { ProductItem } from "../../data/products";
import { shimmer, toBase64 } from "../BlurredImage";
import Circle from "../Circle";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";
import MoreInfoButton from "../MoreInfoButton";
import SectionTitle from "../SectionTitle";

function Product({
  imgPath,
  name,
  id,
}: {
  imgPath: string;
  name: string;
  id: number;
}) {
  return (
    <div className="grid grid-cols-[24px_1fr_24px] grid-rows-[318px_auto_auto_auto] flex-1 sm:grid-cols-[8px_170px_10px] sm:grid-rows-[158px_auto_auto_auto]">
      <div className="relative col-span-2 col-start-2 row-span-2 row-start-1">
        <Image
          layout="fill"
          objectFit="cover"
          src={imgPath}
          className=""
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(500, 500)
          )}`}
        />
      </div>
      <div className="relative col-span-2 col-start-1 row-span-2 row-start-2 px-6 py-3 text-2xl font-medium text-white truncate bg-primary sm:text-base sm:py-2">
        {name}
      </div>
      <MoreInfoButton
        color="red"
        className="col-span-2 col-start-2 row-start-4 mt-4 sm:mt-[6px]"
        href={`/products/${id}`}
      />
    </div>
  );
}

function helper<T>(arg: T[], start: number, length: number): T[] {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const midIdx = start === length - 1 ? 0 : start + 1;
  const endIdx =
    start === length - 2 ? 0 : start === length - 1 ? 1 : start + 2;
  return isTabletOrMobile
    ? [arg[start], arg[midIdx]]
    : [arg[start], arg[midIdx], arg[endIdx]];
}

function Products({ products }: { products: ProductItem["items"] }) {
  const [startingIndex, setStartingIndex] = useState(0);
  const length = products.length;
  const filteredProducts = helper(products, startingIndex, length);

  return (
    <div className="relative px-32 sm:px-7">
      <SectionTitle primary="產品資訊" secondary="Products" withDecoration />
      <div className="flex gap-6 pb-24 pt-9 sm:pt-4 sm:pb-7">
        {filteredProducts.map((p) => (
          <Product
            imgPath={`https://picsum.photos/id/${p.id}/200`}
            name={p.name}
            id={p.id}
            key={p.id}
          />
        ))}
      </div>
      <div className="absolute flex right-48 top-5 gap-7 sm:right-7 sm:top-0">
        <CircleArrowLeft
          onClick={() => {
            setStartingIndex((i) => (--i < 0 ? length - 1 : i));
          }}
        />
        <CircleArrowRight
          onClick={() => {
            setStartingIndex((i) => (++i < length ? i : 0));
          }}
        />
      </div>

      <Circle width={470} className="-right-24 -top-7 sm:hidden" />
      <Circle width={214} className="top-0 -right-16" />
    </div>
  );
}

export default Products;
