import Image from "next/image";
import React from "react";
import MoreInfoButton from "../MoreInfoButton";
import SectionTitle from "../SectionTitle";
import Circle from "../Circle";

const Article = ({
  imgPath,
  size = "default",
  className = "",
}: {
  imgPath: string;
  size?: "default" | "small";
  className?: string;
}) => {
  const fontSizes = {
    default: {
      date: "text-xl",
      title: "text-3xl",
      body: "text-lg",
    },
    small: {
      date: "text-base",
      title: "text-lg",
      body: "text-sm",
    },
  };
  const gap = {
    default: "mt-1 mb-4",
    small: "mb-1",
  };
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className={`w-7/12 h-full relative`}>
        <Image layout="fill" objectFit="cover" src={imgPath} />
      </div>
      <div className="flex flex-col w-5/12">
        <h2 className={`font-medium text-primary-red ${fontSizes[size].date}`}>
          YYYY.MM.DD
        </h2>
        <h1
          className={`font-medium text-bauhaus ${fontSizes[size].title} ${gap[size]}`}
        >
          標題
        </h1>
        <p className={`text-iron ${fontSizes[size].body}`}>內文</p>
        <MoreInfoButton className="mt-auto" color="red" size={size} />
      </div>
    </div>
  );
};

function News() {
  return (
    <div className="relative px-32">
      <SectionTitle primary="動態資訊" secondary="News" withDivider />
      <div className="pb-24 pt-9">
        <div className="grid gap-x-5 gap-y-2 h-72 grid-cols-[.57fr_.43fr] grid-rows-[1fr_1fr]">
          <Article imgPath="/img/home/news-0.jpg" className="row-span-2" />
          <Article imgPath="/img/home/news-1.jpg" size="small" />
          <Article imgPath="/img/home/news-2.jpg" size="small" />
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
