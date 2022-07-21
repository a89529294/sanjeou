import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ItemTitle from "../ItemTitle";
import TopCircle from "../TopCircle";

import achievements from "../../data/achievements";
import { useDisableScroll } from "../../hooks/useDisableScroll";

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
}) => {
  const [showLightBox, setShowLightBox] = useState(false);
  useDisableScroll(showLightBox);
  const lightBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    showLightBox && lightBoxRef.current?.focus();
  }, [showLightBox]);
  return (
    <div
      className="grid gap-3 cursor-pointer sm:gap-1"
      onClick={() => setShowLightBox(true)}>
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
      {/* <Link href={`/achievements/${id}`}> */}
      {/* <a className="grid gap-3"> */}
      <div className="grid gap-3">
        <ItemTitle size="large">{title}</ItemTitle>
        <h3 className="-mt-3 text-lg text-bauhaus sm:text-xs">{subText}</h3>
      </div>
      {/* </a> */}
      {/* </Link> */}

      {showLightBox ? (
        <div
          ref={lightBoxRef}
          className="fixed top-0 left-0 z-10 grid w-full h-full cursor-auto bg-gray-800/80 place-items-center"
          onClick={(e) => {
            setShowLightBox(false);
            e.stopPropagation();
          }}
          onKeyDown={(e) => {
            e.key === "Escape" && setShowLightBox(false);
          }}
          tabIndex={0}>
          <div
            className="relative w-5/6 h-5/6"
            onClick={(e) => e.stopPropagation()}>
            <Image src={img} layout="fill" objectFit="cover" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

function AchievementsList() {
  return (
    <div
      className="relative grid gap-5 px-32 py-7 grid-cols-achievement-grid sm:px-7"
      id="achievements-all">
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
