import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Circle from "../../components/Circle";
import HeroImage from "../../components/HeroImage";
import {
  CircleArrowDown,
  CircleArrowUp,
} from "../../components/Icons/CircleArrows";
import ItemTitle from "../../components/ItemTitle";
import TitledParagraphs from "../../components/TitledParagraphs";

const icons = [
  "/img/icons/door1.svg",
  "/img/icons/door2.svg",
  "/img/icons/door3.svg",
  "/img/icons/door4.svg",
  "/img/icons/door5.svg",
  "/img/icons/door6.svg",
  "/img/icons/door7.svg",
];

const Title = ({
  year,
  text,
  icons,
}: {
  year: number;
  text: string;
  icons: Array<string>;
}) => (
  <div className="grid gap-3 sm:gap-1">
    <h4 className="text-xl font-medium text-primary-red sm:text-xs">{year}</h4>
    <ItemTitle size="large">{text}</ItemTitle>
    <div className="flex gap-[14px] sm:gap-2">
      {icons.map((icon, i) => (
        <div className="relative w-6 aspect-square sm:w-4">
          <Image src={icon} layout="fill" objectFit="cover" key={i} />
        </div>
      ))}
    </div>
  </div>
);

function AchievementArticle() {
  const router = useRouter();
  const aid = router.query.aid;

  return (
    <div>
      <HeroImage text="工程實績" />
      <div className="relative grid px-32 pt-6 pb-14 gap-9 sm:px-7 sm:gap-4 sm:py-6">
        <Title
          year={2022}
          text="廠辦大門廠辦大門廠辦大門廠辦大門廠辦大門廠辦大門"
          icons={icons}
        />
        <div className="relative w-8/12 aspect-[1.65/1]">
          <Image
            src="https://placehold.jp/800x500.png"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute grid -translate-x-[150%] -translate-y-1/2 gap-14 top-1/2 sm:-right-4 sm:translate-x-full">
            <CircleArrowUp />
            <CircleArrowDown />
          </div>
        </div>
        <TitledParagraphs title="產品特色">
          <p>
            現今社會時代變遷、氣候異常、天災無情，台灣身處地震帶以及颱風圈第一島鏈，生命、財產更需要穩固的保障。三久建材公司深知肩負重大責任，從一般戶外捲門以至於超大型防颱捲門的研發、製造、安裝及售後服務一條龍的方式，提供給所有鄰近海岸、空曠地、以及配合廠房設計之大開口面積客戶端，更安全及更可靠之產品。
          </p>
          <p>
            三久建材公司所生產之防颱捲門，著重於兩側軌道設計，透過研發部門以及結構技師將兩側門軌深度以及門片饒度帶入計算，取得最大安全係數所設計。
          </p>
        </TitledParagraphs>
        <TitledParagraphs title="產品規格" className="mt-6">
          <p>門片為鋁合金鋁擠型製造，一體成型，可承受較高水壓。</p>
          <p>
            門片單片高度250mm，單片最大使用寬度6m，重量5.8kg/m;寬度6m以上建議分段，加上中柱及背撐進行輔助。
          </p>
          <p>軌道材質為鋁合金，依三久公司圖面尺寸。</p>
          <p>底板材質為不銹鋼，厚度為3.0mm</p>
          <p>中柱及背撐使用不銹鋼方管60*60*2.0mm</p>
        </TitledParagraphs>
        <Circle width={675} className="top-12 -right-16" />
      </div>
    </div>
  );
}

export default AchievementArticle;
