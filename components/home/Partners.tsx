import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import VerticalBar from "../VerticalBar";

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
const row3 = [
  "/img/home/partners/IKEA.png",
  "/img/home/partners/DECATHLON.png",
  "/img/home/partners/costco.jpg",
  "/img/home/partners/新光三越.jpg",
  "/img/home/partners/板橋大遠百.png",
  "/img/home/partners/微風南山.jpg",
  "/img/home/partners/遠百信義.jpg",
  "/img/home/partners/置地廣場.png",
  "/img/home/partners/賓士.png",
  "/img/home/partners/板信商銀.png",
  "/img/home/partners/裕珍馨.png",
  "/img/home/partners/台中東方文華.jpg",
  "/img/home/partners/三好.png",
  "/img/home/partners/7-hotel.jpg",
];
const row4 = [
  "/img/home/partners/西門子.png",
  "/img/home/partners/永冠.jpg",
  "/img/home/partners/永昕生醫.jpg",
  "/img/home/partners/錩鋼精密.png",
  "/img/home/partners/研華.png",
  "/img/home/partners/力積電.jpg",
  "/img/home/partners/華新麗華.png",
  "/img/home/partners/車王電子.png",
  "/img/home/partners/巨庭機械.jpg",
  "/img/home/partners/達興材料.jpg",
  "/img/home/partners/先進光電.png",
  "/img/home/partners/華谷電機.png",
  "/img/home/partners/玉晶光電.jpg",
];

const imgs = [row1, row2, row3, row4];

function Partners() {
  return (
    <div className="relative px-32 pb-6 sm:px-7 sm:pb-1">
      <SectionTitle
        primary="合作廠商"
        secondary="Partners"
        withDivider
        className="pb-6 sm:pb-1"
        withDecoration
      />

      {imgs.map((row, i) => (
        <div className="flex h-16 sm:h-8" key={i}>
          {row.map((img) => (
            <div key={img} className="relative flex-1">
              <Image src={img} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Partners;
