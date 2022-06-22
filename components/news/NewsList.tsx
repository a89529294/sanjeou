import Image from "next/image";
import React from "react";
import InPageNavbar from "../InPageNavbar";
import ItemTitle from "../ItemTitle";
import MoreInfoButton from "../MoreInfoButton";
import Tag from "../Tag";

import news from "../../data/news";
import TopCircle from "../TopCircle";

function NewsItem({
  item: { mainImg, date, tag, title, desc, id },
}: {
  item: typeof news[number];
}) {
  return (
    <div className="flex py-5 border border-solid border-stonewall-gray px-7 gap-9 sm:flex-col sm:gap-4">
      <div className="relative w-96 aspect-[1.3/1] sm:w-full">
        <Image layout="fill" objectFit="cover" src={mainImg} />
      </div>

      <div className="flex flex-col justify-start flex-1">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-primary-red sm:text-sm">
            {date}
          </span>
          <Tag>{tag}</Tag>
        </div>
        <ItemTitle size="large">{title}</ItemTitle>
        <p className="mt-3 text-lg text-iron sm:text-sm sm:truncate-text-3 sm:my-2">
          {desc}
        </p>
        <MoreInfoButton color="red" className="mt-auto" href={`/news/${id}`} />
      </div>
    </div>
  );
}

function NewsList() {
  return (
    <div id="news-all">
      <InPageNavbar items={["全部", "活動資訊", "操作教學"]} />
      <div className="relative grid gap-4 px-32 py-7 sm:px-7">
        {news.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
        <TopCircle to="/news" />
      </div>
    </div>
  );
}

export default NewsList;
