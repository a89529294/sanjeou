import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Achievement, allIcons } from "../../data/types";
// import { Achievement } from "../../data/achievements";
import { shimmer, toBase64 } from "../BlurredImage";
import Circle from "../Circle";
import { CircleArrowDown, CircleArrowUp } from "../Icons/CircleArrows";
import SectionTitle from "../SectionTitle";
import TopCircle from "../TopCircle";
import VerticalBar from "../VerticalBar";

function Card({
  year,
  title,
  productTypeIds,
  desc,
  className = "",
  id,
}: {
  year: number;
  title: string;
  productTypeIds: (keyof typeof allIcons)[];
  desc: string;
  className?: string;
  id: number;
}) {
  const icons = productTypeIds.map((t) => allIcons[t]);
  return (
    <div className={`flex flex-col justify-end ${className}`}>
      <Link href={`/achievements/${id}`}>
        <a className="sm:flex-col sm:gap-1 sm:flex">
          <h2 className="text-xl text-primary-red sm:text-xs">{year}</h2>
          <h1 className="text-3xl font-medium text-bauhaus sm:truncate sm:text-base">
            {title.length > 6 ? title.slice(0, 7) + "..." : title}
          </h1>
          <div className="flex items-center gap-3 mt-2 mb-4 sm:my-0 sm:gap-1">
            {icons.map((icon, i) => (
              <div
                className="relative w-[22px] h-6 sm:w-[10.3px] sm:h-[11.1px]"
                key={i}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={icon}
                  key={icon}
                />
              </div>
            ))}
            <div className="flex-1 border-t border-solid border-primary sm:hidden" />
          </div>
          <p className="text-lg text-iron sm:text-xs">{desc}</p>
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
    <div className="relative pb-20 pr-32 pl-36 sm:pl-14 sm:pr-7 sm:pb-15">
      <SectionTitle
        primary="工程實績"
        secondary="Achievements"
        className="ml-[52%] sm:ml-[46%] sm:mb-[10px]"
      />
      <div className="relative grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-[125px_1fr] sm:grid-rows-none sm:gap-x-[6px] sm:gap-y-3">
        <div className="relative h-80 sm:h-24">
          <VerticalBar className="-right-3 -top-[70px] sm:-right-1 sm:-top-[50px]" />
          <Image
            layout="fill"
            objectFit="cover"
            src={firstAch.imgURLs[0]}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            key={firstAch.id}
          />
        </div>
        <Card
          year={firstAch.year}
          title={firstAch.title}
          productTypeIds={firstAch.productTypeIds}
          desc={firstAch.subTitle}
          id={firstAch.id}
        />
        <div className="relative h-80 sm:h-24">
          <Image
            layout="fill"
            objectFit="cover"
            src={secondAch.imgURLs[0]}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            key={secondAch.id}
          />
        </div>
        <Card
          year={secondAch.year}
          title={secondAch.title}
          productTypeIds={secondAch.productTypeIds}
          desc={secondAch.subTitle}
          id={secondAch.id}
        />
        <div className="absolute flex flex-col gap-8 -translate-y-1/2 top-1/2 -translate-x-[200%] sm:-translate-x-full sm:-left-[6px]">
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
      <Circle width={580} className="top-3 -left-20 sm:hidden" />
      <Circle width={218} className="top-0 hidden -left-20 sm:block" />
    </div>
  );
}

export default Achievements;
