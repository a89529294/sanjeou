import Image from "next/image";
import Link from "next/link";
import React, { forwardRef } from "react";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";
import OutlinedButton from "../OutlinedButton";
import SectionTitle from "../SectionTitle";
import Tag from "../Tag";

// (property) JSX.IntrinsicElements.a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

import news from "../../data/news";
import { useRouter } from "next/router";

const CircleLink = forwardRef<
  HTMLAnchorElement,
  {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    href?: string;
    position: "left" | "right";
  }
>(({ children, onClick, href, position }, ref) => (
  <a
    className={`absolute flex items-center gap-2 ${
      position === "left" ? "left-0" : "right-0"
    }`}
    ref={ref}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
));

const BottomNavbar = ({
  hideLeftRightNav = false,
  newsId,
}: {
  hideLeftRightNav: boolean;
  newsId: number;
}) => {
  const newsIndex = news.findIndex((newsArticle) => newsArticle.id === newsId);
  const leftIndex = newsIndex > 0 ? newsIndex - 1 : news.length - 1;
  const rightIndex = newsIndex < news.length - 1 ? newsIndex + 1 : 0;
  return (
    <nav className="relative flex items-center justify-between mt-4">
      {hideLeftRightNav ? (
        <span />
      ) : (
        <Link href={`/news/${news[leftIndex].id}`} passHref>
          <CircleLink position="left">
            <CircleArrowLeft />
            {news[leftIndex].title.trim()}
          </CircleLink>
        </Link>
      )}
      <div className="flex justify-center flex-1">
        <Link href={"/news#news-all"}>
          <a className="">
            <OutlinedButton>回到列表</OutlinedButton>
          </a>
        </Link>
      </div>

      {hideLeftRightNav ? (
        <span />
      ) : (
        <Link href={`/news/${news[rightIndex].id}`} passHref>
          <CircleLink position="right">
            {news[rightIndex].title}
            <CircleArrowRight />
          </CircleLink>
        </Link>
      )}
    </nav>
  );
};

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
      <BottomNavbar
        hideLeftRightNav={!newsItem}
        newsId={newsItem ? newsItem.id : news[0].id}
      />
    </div>
  );
}

export default NewsArticle;
