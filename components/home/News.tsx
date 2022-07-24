import Image from "next/image";
import React from "react";
import { News } from "../../data/types";
import MoreInfoButton from "../MoreInfoButton";
import SectionTitle from "../SectionTitle";
import Circle from "../Circle";

const Article = ({
  imgPath,
  date,
  title,
  desc,
  size = "default",
  className = "",
  id,
}: {
  imgPath: string;
  date: string;
  title: string;
  desc: string;
  size?: "default" | "small";
  className?: string;
  id: number;
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
    default: "mt-1 mb-4 sm:mb-1",
    small: "mb-1",
  };
  return (
    <div className={`flex gap-4 ${className} sm:gap-2`}>
      <div className={`w-7/12 h-full relative sm:w-28 sm:h-auto`}>
        <Image layout="fill" objectFit="cover" src={imgPath} />
      </div>
      <div className="flex flex-col w-5/12 sm:flex-1">
        <h2
          className={`font-medium text-primary-red ${fontSizes[size].date} sm:text-xs`}>
          {date.replaceAll("-", ".")}
        </h2>
        <h1
          className={`font-medium text-bauhaus truncate ${fontSizes[size].title} ${gap[size]} sm:text-sm`}>
          {title}
        </h1>
        <p
          className={`text-iron truncate-text-2 ${fontSizes[size].body} sm:text-xs`}>
          {desc}
        </p>
        <MoreInfoButton
          className="mt-auto"
          color="red"
          size={size}
          href={`/news/${id}`}
        />
      </div>
    </div>
  );
};

function News({ newsArticles = [] }: { newsArticles: News[] }) {
  return (
    <div className="relative px-32 sm:px-7 sm:pb-14">
      <SectionTitle primary="動態資訊" secondary="News" withDivider />
      <div className="pb-24 pt-9 sm:pt-4 sm:pb-0">
        <div className="grid gap-x-5 gap-y-2 h-72 grid-cols-[.57fr_.43fr] grid-rows-[1fr_1fr] sm:flex-col sm:flex sm:h-auto">
          {newsArticles.map((n, i) => (
            <Article
              imgPath={n.imgURL}
              date={n.createdAt}
              title={n.title}
              desc={n.content}
              className={!i ? "row-span-2" : ""}
              size={!i ? "default" : "small"}
              key={n.id}
              id={n.id}
            />
          ))}
        </div>
      </div>
      <Circle
        className="top-0 left-0 -translate-y-40 -translate-x-7 -z-10"
        width={244}
        bgColor="bg-white-smoke"
      />
    </div>
  );
}

export default News;
