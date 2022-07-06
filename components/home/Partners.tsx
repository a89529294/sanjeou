import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import Marquee from "../Marquee";
import MarqueeImage from "../MarqueeImage";

import img1 from "../../assets/台灣高鐵.png";
import img2 from "../../assets/台灣鐵路.png";
import img3 from "../../assets/台北捷運.jpg";
import img4 from "../../assets/桃園捷運.jpg";
import img5 from "../../assets/台中捷運.png";
import img6 from "../../assets/高雄捷運.png";
import img7 from "../../assets/行政院.png";
import img8 from "../../assets/台中市政府.png";
import img9 from "../../assets/國立台灣美術館.png";
import img10 from "../../assets/台電.png";
import img11 from "../../assets/台灣自來水.jpg";

import img12 from "../../assets/台中榮總.png";
import img13 from "../../assets/台中醫院.png";
import img14 from "../../assets/彰化醫院.png";
import img15 from "../../assets/中山醫.png";
import img16 from "../../assets/彰基醫院.png";
import img17 from "../../assets/亞大醫院.png";
import img18 from "../../assets/霧峰澄清醫院.png";
import img19 from "../../assets/勤益大學.jpg";
import img20 from "../../assets/逢甲大學.png";

import img21 from "../../assets/IKEA.png";
import img22 from "../../assets/Decathlon.png";
import img23 from "../../assets/costco.jpg";
import img24 from "../../assets/新光三越.jpg";
import img25 from "../../assets/板橋大遠百.png";
import img26 from "../../assets/微風南山.jpg";
import img27 from "../../assets/遠百信義.jpg";
import img28 from "../../assets/置地廣場.png";
import img29 from "../../assets/賓士.png";
import img30 from "../../assets/板信商銀.png";
import img31 from "../../assets/裕珍馨.png";
import img32 from "../../assets/台中東方文華.jpg";
import img33 from "../../assets/三好.png";
import img34 from "../../assets/7-hotel.jpg";

import img35 from "../../assets/西門子.png";
import img36 from "../../assets/永冠.jpg";
import img37 from "../../assets/永昕生醫.jpg";
import img38 from "../../assets/錩鋼精密.png";
import img39 from "../../assets/研華.png";
import img40 from "../../assets/力積電.jpg";
import img41 from "../../assets/華新麗華.png";
import img42 from "../../assets/車王電子.png";
import img43 from "../../assets/巨庭機械.jpg";
import img44 from "../../assets/達興材料.jpg";
import img45 from "../../assets/先進光電.png";
import img46 from "../../assets/華谷電機.png";
import img47 from "../../assets/玉晶光電.jpg";
import { Partners } from "../../pages";

// const row1 = [
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6,
//   img7,
//   img8,
//   img9,
//   img10,
//   img11,
// ];
// const row2 = [img12, img13, img14, img15, img16, img17, img18, img19, img20];
// const row3 = [
//   img21,
//   img22,
//   img23,
//   img24,
//   img25,
//   img26,
//   img27,
//   img28,
//   img29,
//   img30,
//   img31,
//   img32,
//   img33,
//   img34,
// ];
// const row4 = [
//   img35,
//   img36,
//   img37,
//   img38,
//   img39,
//   img40,
//   img41,
//   img42,
//   img43,
//   img44,
//   img45,
//   img46,
//   img47,
// ];

function Partners({ partners }: { partners: Partners }) {
  const partnerKeys = Object.keys(partners);

  return (
    <div className="relative px-32 pb-6 sm:px-7 sm:pb-1">
      <SectionTitle
        primary="合作廠商"
        secondary="Partners"
        withDivider
        className="pb-6 sm:pb-1"
        withDecoration
      />
      <div className="grid gap-4">
        {partnerKeys.map((p, j) => (
          <Marquee key={p} scrollDir={j % 2 ? "left" : "right"}>
            {partners[p].map((imgStr, i) => (
              <MarqueeImage src={imgStr} key={i} height="h-16" />
            ))}
          </Marquee>
        ))}
        {/* <Marquee>
          {row1.map((imgStr, i) => (
            <MarqueeImage src={imgStr} key={i} height="h-16" />
          ))}
        </Marquee>
        <Marquee scrollDir="right">
          {row2.map((imgStr, i) => (
            <MarqueeImage src={imgStr} key={i} height="h-16" />
          ))}
        </Marquee>
        <Marquee>
          {row3.map((imgStr, i) => (
            <MarqueeImage src={imgStr} key={i} height="h-16" />
          ))}
        </Marquee>
        <Marquee scrollDir="right">
          {row4.map((imgStr, i) => (
            <MarqueeImage src={imgStr} key={i} height="h-16" />
          ))}
        </Marquee> */}
      </div>
    </div>
  );
}

export default Partners;
