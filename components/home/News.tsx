import Image from "next/image";
import React from "react";
import MoreInfoButton from "../MoreInfoButton";
import SectionTitle from "../SectionTitle";
import Circle from "./Circle";

const Article = ({
  imgPath,
  size = "big",
}: {
  imgPath: string;
  size?: "big" | "small";
}) => (
  <div className={`flex gap-4 h-full`}>
    <div className={`w-7/12 h-full relative`}>
      <Image layout="fill" objectFit="cover" src={imgPath} />
    </div>
    <div className="flex flex-col w-5/12">
      <h2 className="text-xl font-medium text-primary-red">YYYY.MM.DD</h2>
      <h1 className="mt-1 mb-4 text-3xl font-medium text-bauhaus">標題</h1>
      <p className="text-lg text-iron">內文</p>
      <MoreInfoButton className="mt-auto" color="red" />
    </div>
  </div>
);

function News() {
  return (
    <div className="relative px-32">
      <SectionTitle primary="動態資訊" secondary="News" />
      <div className="pt-20 pb-24">
        <div className="flex gap-5 h-72">
          <div className="w-7/12 h-full">
            <Article imgPath="/img/home/news-0.jpg" />
          </div>
          <div className="grid w-5/12 h-full">
            <Article imgPath="/img/home/news-1.jpg" size="small" />
            <Article imgPath="/img/home/news-2.jpg" size="small" />
          </div>
        </div>
      </div>
      <Circle
        className="top-0 left-0 -translate-y-40 -translate-x-7 -z-10"
        width="w-[244px]"
        bgColor="bg-white-smoke"
      />
    </div>
  );
}

export default News;
