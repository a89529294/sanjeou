import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import ArrowCircleLeft from "./Icons/ArrowCircleLeft";
import ArrowCircleRight from "./Icons/ArrowCircleRight";

function Carousel({ imgs }: { imgs: string[] }) {
  const [position, setPosition] = useState(0);
  const [inTransition, setInTransition] = useState(false);

  const carouselBodyRef = useRef<HTMLDivElement>(null);

  const transitionStartListener = () => {
    console.log("transition starts");
    setInTransition(true);
  };
  const transitionEndListener = () => {
    console.log("transition ends");
    setInTransition(false);
  };

  useEffect(() => {
    carouselBodyRef.current?.addEventListener(
      "transitionstart",
      transitionStartListener
    );
    carouselBodyRef.current?.addEventListener(
      "transitionend",
      transitionEndListener
    );

    return () => {
      carouselBodyRef.current?.removeEventListener(
        "transitionstart",
        transitionStartListener
      );
      carouselBodyRef.current?.removeEventListener(
        "transitionend",
        transitionEndListener
      );
    };
  }, [carouselBodyRef.current]);

  return (
    <div className="relative w-full h-[640px] overflow-hidden">
      <div
        className={`flex h-full min-w-max transition-transform`}
        style={{ transform: `translateX(${position * -100 + "vw"})` }}
        ref={carouselBodyRef}
      >
        {imgs.map((img, i) => (
          <div
            className="relative w-screen h-full text-white shrink-0"
            key={img}
          >
            <Image
              src={img}
              layout="fill"
              key={img}
              priority
              objectFit="cover"
            ></Image>
          </div>
        ))}
      </div>
      <ArrowCircleLeft
        className="absolute w-12 h-12 text-gray-100 -translate-y-1/2 cursor-pointer top-1/2 left-3"
        onClick={() => {
          if (inTransition) return;
          setPosition((i) => (i >= imgs.length - 1 ? 0 : ++i));
        }}
      />
      <ArrowCircleRight
        className="absolute w-12 h-12 text-gray-100 -translate-y-1/2 cursor-pointer top-1/2 right-3"
        onClick={() => {
          if (inTransition) return;
          setPosition((i) => (i ? --i : imgs.length - 1));
        }}
      />
    </div>
  );
}

export default Carousel;
