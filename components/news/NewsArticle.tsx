import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";
import OutlinedButton from "../OutlinedButton";
import SectionTitle from "../SectionTitle";
import Tag from "../Tag";

import news from "../../data/news";
import { useRouter } from "next/router";

const BottomNavbar = ({ hideLeftRightNav = false }) => (
  <nav className="flex items-center justify-between mt-4">
    {hideLeftRightNav ? <span /> : <CircleArrowLeft />}
    <Link href={"/news#news-all"}>
      <a>
        <OutlinedButton>回到列表</OutlinedButton>
      </a>
    </Link>
    {hideLeftRightNav ? <span /> : <CircleArrowRight />}
  </nav>
);

function NewsArticle() {
  const router = useRouter();
  const nid = router.query.nid;
  let newsItem: typeof news[number] | undefined = news.find(
    (n) => n.id === +nid!
  );

  return (
    <div className="px-32 py-10 sm:px-7" id="news-article-top">
      <div>
        <span className="mr-3 font-medium text-primary-red">
          {newsItem ? newsItem.date : "9999-99-99"}
        </span>
        <Tag>{newsItem ? newsItem.tag : "不存在"}</Tag>
      </div>
      <SectionTitle
        primary={newsItem ? newsItem.title : "標題不存在"}
        size="small"
        className="pt-2 pb-4"
      />

      <div className="grid gap-8 pb-5 text-lg border-t border-b border-solid pt-7 border-silver-spoon text-iron sm:text-xs sm:leading-5">
        <div className="grid gap-6 grid-cols-3 auto-rows-[290px] sm:grid-cols-none sm:auto-rows-[200px]">
          {newsItem ? (
            newsItem.innerPageImgs.map((img, i) => (
              <div className="relative" key={i}>
                <Image src={img} layout="fill" objectFit="cover" />
              </div>
            ))
          ) : (
            <div className="relative">
              <Image
                src={"https://placehold.jp/500x300.png"}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
        {newsItem ? (
          newsItem.body.map((text, i) => <p key={i}>{text}</p>)
        ) : (
          <p>文章不存在</p>
        )}
        <p>
          {newsItem
            ? newsItem.hashTags.map((hashTag, i) => (
                <span key={i}>#{hashTag} </span>
              ))
            : "#不存在"}
        </p>
      </div>
      <BottomNavbar hideLeftRightNav={!newsItem} />
    </div>
  );
}

export default NewsArticle;
