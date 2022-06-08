import Image from "next/image";
import React from "react";
import Circle from "../Circle";
import { CircleArrowDown, CircleArrowUp } from "../Icons/CircleArrows";
import SectionTitle from "../SectionTitle";
import VerticalBar from "../VerticalBar";

function Card({
  year,
  title,
  icons,
  desc,
  className,
}: {
  year: number;
  title: string;
  icons: string[];
  desc: string;
  className: string;
}) {
  return (
    <div className={`flex flex-col justify-end ${className}`}>
      <h2 className="text-xl text-primary-red">{year}</h2>
      <h1 className="text-3xl font-medium text-bauhaus">{title}</h1>
      <div className="flex items-center gap-3 mt-2 mb-4">
        {icons.map((icon) => (
          <Image width={22} height={24} src={icon} key={icon} />
        ))}
        <div className="flex-1 border-t border-solid border-primary" />
      </div>
      <p className="text-lg text-iron">{desc}</p>
    </div>
  );
}

function Achievements({ imgs }: { imgs: string[] }) {
  return (
    <div className="relative pb-20 pr-32 pl-36">
      <SectionTitle
        primary="工程實績"
        secondary="Achievements"
        className="ml-[52%]"
      />
      <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
        <div className="relative h-80">
          <VerticalBar className="-right-5 -top-[70px]" />
          <Image layout="fill" objectFit="cover" src={imgs[0]} />
        </div>
        <Card
          year={2022}
          title="標題"
          icons={[
            "/img/icons/door1.svg",
            "/img/icons/door2.svg",
            "/img/icons/door3.svg",
            "/img/icons/door4.svg",
            "/img/icons/door5.svg",
            "/img/icons/door6.svg",
            "/img/icons/door7.svg",
          ]}
          desc="造門工藝與烤漆品質提升。"
          className=""
        />
        <div className="relative h-80">
          <Image layout="fill" objectFit="cover" src={imgs[1]} />
        </div>

        <Card
          year={2022}
          title="標題"
          icons={["/img/icons/door1.svg"]}
          desc="造門工藝與烤漆品質提升。"
          className=""
        />
        <div className="absolute flex flex-col gap-8 -translate-y-1/2 top-1/2 -translate-x-[200%]">
          <CircleArrowUp />
          <CircleArrowDown />
        </div>
      </div>
      <Circle width={580} className="top-3 -left-20" />
    </div>
  );
}

export default Achievements;
