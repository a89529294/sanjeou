import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";

const row1 = [
  "/img/home/partners/台灣高鐵.png",
  "/img/home/partners/台灣鐵路.png",
  "/img/home/partners/台北捷運.jpg",
  "/img/home/partners/桃園捷運.jpg",
  "/img/home/partners/台中捷運.png",
  "/img/home/partners/高雄捷運.png",
  "/img/home/partners/行政院.png",
  "/img/home/partners/台中市政府.png",
  "/img/home/partners/國立台灣美術館.png",
  "/img/home/partners/台電.png",
  "/img/home/partners/台灣自來水.jpg",
];
const row2 = [
  "/img/home/partners/台中榮總.png",
  "/img/home/partners/台中醫院.png",
  "/img/home/partners/彰化醫院.png",
  "/img/home/partners/中山醫.png",
  "/img/home/partners/彰基醫院.png",
  "/img/home/partners/亞大醫院.png",
  "/img/home/partners/霧峰澄清醫院.png",
  "/img/home/partners/勤益大學.jpg",
  "/img/home/partners/逢甲大學.png",
];

function Partners() {
  return (
    <div className="px-32">
      <SectionTitle primary="合作廠商" secondary="Partners" withDivider />
      <div className="flex h-16 mt-10">
        {row1.map((img) => (
          <div key={img} className="relative flex-1">
            <Image src={img} layout="fill" objectFit="contain"></Image>
          </div>
        ))}
      </div>
      <div className="flex h-16">
        {row2.map((img) => (
          <div key={img} className="relative flex-1">
            <Image src={img} layout="fill" objectFit="contain"></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
