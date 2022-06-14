import Image from "next/image";
import Link from "next/link";
import React from "react";
import ItemTitle from "../ItemTitle";
import TopCircle from "../TopCircle";

import achievements from "../../data/achievements";

const AchItem = ({
  id,
  img,
  year,
  icons,
  title,
  subText,
}: {
  id: number;
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
        <Image width={22} height={24} src={icon} key={i} />
      ))}
    </div>
    <Link href={`/achievements/${id}`}>
      <a className="grid gap-3">
        <ItemTitle>{title}</ItemTitle>
        <h3 className="-mt-3 text-lg text-bauhaus">{subText}</h3>
      </a>
    </Link>
  </div>
);

function AchievementsList() {
  return (
    <div
      className="relative grid gap-5 px-32 py-7 grid-cols-achievement-grid"
      id="achievements-all"
    >
      {achievements.map((ach) => (
        <AchItem
          key={ach.id}
          img={ach.img}
          year={ach.year}
          icons={ach.icons}
          title={ach.title}
          subText={ach.subText}
          id={ach.id}
        />
      ))}
      <TopCircle to="/achievements" />
    </div>
  );
}

export default AchievementsList;
