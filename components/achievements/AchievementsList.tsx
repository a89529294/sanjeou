import Image from "next/image";
import React from "react";
import ItemTitle from "../ItemTitle";

const achievements = [
  {
    img: "https://placehold.jp/500x300.png",
    year: 2022,
    icons: [
      "/img/icons/door1.svg",
      "/img/icons/door2.svg",
      "/img/icons/door3.svg",
      "/img/icons/door4.svg",
      "/img/icons/door5.svg",
      "/img/icons/door6.svg",
      "/img/icons/door7.svg",
    ],
    title: "廠辦大門",
    subText: "造門工藝與烤漆品質提升。",
  },
  {
    img: "https://placehold.jp/500x300.png",
    year: 2019,
    icons: ["/img/icons/door1.svg"],
    title: "台中港西門子歌美颯離岸風力廠房新建工程",
    subText: "柔性門。",
  },
  {
    img: "https://placehold.jp/500x300.png",
    year: 2020,
    icons: ["/img/icons/door3.svg"],
    title: "澳門新濠天地, City of Dreams",
    subText: "UL防火捲門。",
  },
  {
    img: "https://placehold.jp/500x300.png",
    year: 2020,
    icons: [
      "/img/icons/door1.svg",
      "/img/icons/door2.svg",
      "/img/icons/door3.svg",
      "/img/icons/door4.svg",
      "/img/icons/door5.svg",
      "/img/icons/door6.svg",
      "/img/icons/door7.svg",
    ],
    title: "沙烏地阿拉伯YNP 案",
    subText: "超大型防颱捲門。",
  },
];

const AchItem = ({
  img,
  year,
  icons,
  title,
  subText,
}: {
  img: string;
  year: number;
  icons: string[];
  title: string;
  subText: string;
}) => (
  <div className="grid gap-3">
    <div className="aspect-[58/35] relative">
      <Image layout="fill" objectFit="cover" src={img} />
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xl font-medium text-primary-red">{year}</span>
      <div className="flex-1 border-t border-solid border-primary"></div>

      {icons.map((icon, i) => (
        <Image width={22} height={24} src={icon} />
      ))}
    </div>
    <ItemTitle>{title}</ItemTitle>
    <h3 className="-mt-3 text-lg text-bauhaus">{subText}</h3>
  </div>
);

function AchievementsList() {
  return (
    <div className="grid gap-5 px-32 py-7 grid-cols-achievement-grid">
      {achievements.map((ach, i) => (
        <AchItem
          key={i}
          img={ach.img}
          year={ach.year}
          icons={ach.icons}
          title={ach.title}
          subText={ach.subText}
        />
      ))}
    </div>
  );
}

export default AchievementsList;
