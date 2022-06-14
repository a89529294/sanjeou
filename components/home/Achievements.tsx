import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Achievement } from "../../data/achievements";
import Circle from "../Circle";
import { CircleArrowDown, CircleArrowUp } from "../Icons/CircleArrows";
import SectionTitle from "../SectionTitle";
import TopCircle from "../TopCircle";
import VerticalBar from "../VerticalBar";

function Card({
  year,
  title,
  icons,
  desc,
  className = "",
  id,
}: {
  year: number;
  title: string;
  icons: string[];
  desc: string;
  className?: string;
  id: number;
}) {
  return (
    <div className={`flex flex-col justify-end ${className}`}>
      <Link href={`/achievements/${id}`}>
        <a>
          <h2 className="text-xl text-primary-red">{year}</h2>
          <h1 className="text-3xl font-medium text-bauhaus">{title}</h1>
          <div className="flex items-center gap-3 mt-2 mb-4">
            {icons.map((icon) => (
              <Image width={22} height={24} src={icon} key={icon} />
            ))}
            <div className="flex-1 border-t border-solid border-primary" />
          </div>
          <p className="text-lg text-iron">{desc}</p>
        </a>
      </Link>
    </div>
  );
}

function Achievements({ achievements }: { achievements: Achievement[] }) {
  const [startingIndex, setStartingIndex] = useState(0);
  const length = achievements.length;
  const firstAch = achievements[startingIndex];
  const secondAch =
    achievements[startingIndex === length - 1 ? 0 : startingIndex + 1];
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
          <Image layout="fill" objectFit="cover" src={firstAch.img} />
        </div>
        <Card
          year={firstAch.year}
          title={firstAch.title}
          icons={firstAch.icons}
          desc={firstAch.subText}
          id={firstAch.id}
        />
        <div className="relative h-80">
          <Image layout="fill" objectFit="cover" src={secondAch.img} />
        </div>
        <Card
          year={secondAch.year}
          title={secondAch.title}
          icons={secondAch.icons}
          desc={secondAch.subText}
          id={secondAch.id}
        />
        <div className="absolute flex flex-col gap-8 -translate-y-1/2 top-1/2 -translate-x-[200%]">
          <CircleArrowUp
            onClick={() =>
              setStartingIndex((i) => (i > 0 ? i - 1 : length - 1))
            }
          />
          <CircleArrowDown
            onClick={() => setStartingIndex((i) => (i < length - 1 ? ++i : 0))}
          />
        </div>
        <TopCircle
          to="/"
          className="top-0 right-0 translate-x-full translate-y-full"
        />
      </div>
      <Circle width={580} className="top-3 -left-20" />
    </div>
  );
}

export default Achievements;
