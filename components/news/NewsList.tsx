import Image from "next/image";
import React, { useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import InPageNavbar from "../InPageNavbar";
import ItemTitle from "../ItemTitle";
import MoreInfoButton from "../MoreInfoButton";
import Tag from "../Tag";
import TopCircle from "../TopCircle";
import Link from "next/link";
import { News, NewsCategory } from "../../data/types";

const ItemDesc = ({
  children,
  to = "",
}: {
  children: React.ReactNode;
  to?: string;
}) => {
  return to ? (
    <Link href={to}>
      <a>{children}</a>
    </Link>
  ) : (
    <>{children}</>
  );
};

function NewsItem({
  item: { id, title, content, createdAt, imgURLs },
  tag = "",
}: {
  item: News;
  tag: string | undefined;
}) {
  const isMobile = useIsMobile();

  return (
    <div className="flex py-5 border border-solid border-stonewall-gray px-7 gap-9 sm:flex-col sm:gap-4">
      <div className="relative w-96 aspect-[1.3/1] sm:w-full">
        <Image layout="fill" objectFit="cover" src={imgURLs[0]} />
      </div>

      <ItemDesc to={isMobile ? `/news/${id}` : ""}>
        <div className="flex flex-col justify-start flex-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-primary-red sm:text-sm">
              {createdAt}
            </span>
            <Tag>{tag}</Tag>
          </div>
          <ItemTitle size="large">{title}</ItemTitle>
          <p className="mt-3 text-lg text-iron sm:text-sm sm:truncate-text-3 sm:my-2">
            {content}
          </p>
          <MoreInfoButton
            color="red"
            className="mt-auto"
            href={`/news/${id}`}
            disabled
          />
        </div>
      </ItemDesc>
    </div>
  );
}

function NewsList({
  newsCategories,
  news,
}: {
  newsCategories: NewsCategory[];
  news: News[];
}) {
  const [selectedNewsCategory, setSelectedNewsCategory] = useState(0);
  const filteredNews = news.filter((n) => {
    if (!selectedNewsCategory) return true;
    else return n.categoryId === selectedNewsCategory;
  });
  return (
    <div id="news-all">
      <InPageNavbar
        items={[
          { id: 0, name: "全部" },
          ...newsCategories.map((v) => ({ id: v.id, name: v.title })),
        ]}
        selectedId={selectedNewsCategory}
        setSelectedId={setSelectedNewsCategory}
      />
      <div className="relative grid gap-4 px-32 py-7 sm:px-7">
        {filteredNews.map((item) => (
          <NewsItem
            key={item.id}
            item={item}
            tag={newsCategories.find((c) => c.id === item.categoryId)?.title}
          />
        ))}
        <TopCircle to="/news" />
      </div>
    </div>
  );
}

export default NewsList;
