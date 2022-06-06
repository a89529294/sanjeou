import Image from "next/image";
import React from "react";
import InPageNavbar from "../InPageNavbar";
import ItemTitle from "../ItemTitle";
import MoreInfoButton from "../MoreInfoButton";
import Tag from "../Tag";

const news = [
  {
    img: "/img/news/news-0.jpg",
    date: "2022.05.08",
    tag: "活動訊息",
    title: "與勵馨基金會一齊把愛延展到每位需要幫助的女性",
    body: "三久員工們一起體驗製作香氛蠟燭，想要獻給最親愛的媽媽，祝全天下的媽媽們母親節快樂！",
  },
  {
    img: "/img/news/news-1.jpg",
    date: "2022.05.08",
    tag: "活動訊息",
    title: "與勵馨基金會一齊把愛延展到每位需要幫助的女性",
    body: "三久員工們一起體驗製作香氛蠟燭，想要獻給最親愛的媽媽，祝全天下的媽媽們母親節快樂！",
  },
  {
    img: "/img/news/news-2.jpg",
    date: "2022.05.08",
    tag: "活動訊息",
    title: "與勵馨基金會一齊把愛延展到每位需要幫助的女性",
    body: "三久員工們一起體驗製作香氛蠟燭，想要獻給最親愛的媽媽，祝全天下的媽媽們母親節快樂！",
  },
];

function NewsItem({
  item: { img, date, tag, title, body },
}: {
  item: { img: string; date: string; tag: string; title: string; body: string };
}) {
  return (
    <div className="flex py-5 border border-solid border-stonewall-gray px-7 gap-9">
      <Image width={378} height={290} src={img} />
      <div className="flex flex-col justify-start flex-1">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-primary-red">{date}</span>
          <Tag text={tag} />
        </div>
        <ItemTitle size="medium">{title}</ItemTitle>
        <p className="mt-3 text-lg text-iron">{body}</p>
        <MoreInfoButton color="red" className="mt-auto" />
      </div>
    </div>
  );
}

function NewsList() {
  return (
    <div className="">
      <InPageNavbar items={["全部", "活動資訊", "操作教學"]} />
      <div className="grid gap-4 px-32 py-7">
        {news.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
