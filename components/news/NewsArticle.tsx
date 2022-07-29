import Image from "next/image";
import Link from "next/link";
import React, { forwardRef } from "react";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";
import OutlinedButton from "../OutlinedButton";
import SectionTitle from "../SectionTitle";
import Tag from "../Tag";

import { News } from "../../data/types";

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
    onClick={onClick}>
    {children}
  </a>
));

const BottomNavbar = ({
  prevNews,
  nextNews,
}: {
  prevNews: News;
  nextNews: News;
}) => {
  return (
    <nav className="relative flex items-center justify-between mt-4">
      <Link
        href={`/news/${prevNews.id}#news-article-top`}
        passHref
        scroll={false}>
        <CircleLink position="left">
          <CircleArrowLeft />
          {prevNews.title.trim()}
        </CircleLink>
      </Link>

      <div className="flex justify-center flex-1">
        <Link href={"/news#news-all"}>
          <a className="">
            <OutlinedButton>回到列表</OutlinedButton>
          </a>
        </Link>
      </div>

      <Link
        href={`/news/${nextNews.id}#news-article-top`}
        passHref
        scroll={false}>
        <CircleLink position="right">
          {nextNews.title.trim()}
          <CircleArrowRight />
        </CircleLink>
      </Link>
    </nav>
  );
};

function NewsArticle({
  title,
  content,
  imgURLs,
  createdAt,
  category,
  prevNews,
  nextNews,
}: {
  title: string;
  content: string;
  imgURLs: string[];
  createdAt: string;
  category: string;
  prevNews: News;
  nextNews: News;
}) {
  return (
    <div className="px-32 py-10 sm:px-7" id="news-article-top">
      <div>
        <span className="mr-3 font-medium text-primary-red">{createdAt}</span>
        <Tag>{category}</Tag>
      </div>
      <SectionTitle primary={title} size="small" className="pt-2 pb-4" />

      <div className="grid gap-8 pb-5 text-lg border-t border-b border-solid pt-7 border-silver-spoon text-iron sm:text-xs sm:leading-5">
        <div className="grid gap-6 grid-cols-3 auto-rows-[290px] sm:grid-cols-none sm:auto-rows-[200px]">
          {imgURLs.map((url) => (
            <div className="relative">
              <Image src={url} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
        <p>{content}</p>
      </div>
      <BottomNavbar prevNews={prevNews} nextNews={nextNews} />
    </div>
  );
}

export default NewsArticle;
