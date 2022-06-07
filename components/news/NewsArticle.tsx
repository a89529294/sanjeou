import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";
import OutlinedButton from "../OutlinedButton";
import SectionTitle from "../SectionTitle";
import Tag from "../Tag";

const BottomNavbar = () => (
  <nav className="flex items-center justify-between mt-4">
    <CircleArrowLeft />
    <Link href={"/news"}>
      <a>
        <OutlinedButton>回到列表</OutlinedButton>
      </a>
    </Link>
    <CircleArrowRight />
  </nav>
);

function NewsArticle() {
  return (
    <div className="px-32 py-10">
      <div>
        <span className="mr-3 font-medium text-primary-red">2022.05.08</span>
        <Tag>活動訊息</Tag>
      </div>
      <SectionTitle
        primary="造門工藝與烤漆品質更上一層樓的廠辦大門"
        size="small"
        className="pt-2 pb-4"
      />
      <div className="grid gap-8 pb-5 text-lg border-t border-b border-solid pt-7 border-silver-spoon text-iron">
        <div className="grid gap-6 grid-cols-3 auto-rows-[290px]">
          <div className="relative">
            <Image
              src="https://placehold.jp/500x300.png"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="relative">
            <Image
              src="https://placehold.jp/500x300.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative">
            <Image
              src="https://placehold.jp/500x300.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p>
          長度達到17.8米。雙軌道抗風壓結構，具減少磨損的緩啟動及緩停止功能，讓大門既安全又耐用！
          同時透過幾何造型烤漆管料的搭配展現高雅氣派，讓美觀程度直接加倍。三久的造門工藝與烤漆品質更上一層樓。
        </p>
        <p>#門體設計客製化 #為您量身訂做的三久大門</p>
      </div>
      <BottomNavbar />
    </div>
  );
}

export default NewsArticle;
