import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import { ArrowCircleRight, ArrowCircleLeft } from "./Icons/CarouselButton";

const getImages = (i: number, imgs: string[]): number[] => {
  const left = i - 1 < 0 ? imgs.length - 1 : i - 1;
  const right = i + 1 >= imgs.length ? 0 : i + 1;
  return [left, i, right];
};

function Carousel({ imgs }: { imgs: string[] }) {
  const [position, setPosition] = useState(-1);
  const [displayImageIndex, setDisplayImageIndex] = useState(0);
  const [inTransition, setInTransition] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselBodyRef = useRef<HTMLDivElement>(null);

  const swipeLeft = () => {
    if (inTransition) return;
    setPosition(-2);
    setIsAutoPlaying(false);
  };
  const swipeRight = () => {
    if (inTransition) return;
    setPosition(0);
    setIsAutoPlaying(false);
  };
  const imagesArray = getImages(displayImageIndex, imgs);
  const handlers = useSwipeable({
    onSwipedLeft: swipeLeft,
    onSwipedRight: swipeRight,
  });

  const transitionStartListener = () => {
    setInTransition(true);
  };
  const transitionEndListener = () => {
    if (position === -2) {
      setDisplayImageIndex(imagesArray[2]);
      setPosition(-1);
    }
    if (position === 0) {
      setDisplayImageIndex(imagesArray[0]);
      setPosition(-1);
    }
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
  }, [carouselBodyRef.current, displayImageIndex, position]);

  useEffect(() => {
    let intervalTimerId: ReturnType<typeof setInterval>;
    let timeoutTimerId: ReturnType<typeof setTimeout>;
    if (isAutoPlaying)
      intervalTimerId = setInterval(() => {
        setPosition(-2);
      }, 3000);
    else
      timeoutTimerId = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 3000);

    return () => {
      clearInterval(intervalTimerId);
      clearTimeout(timeoutTimerId);
    };
  }, [isAutoPlaying]);

  return (
    <div
      className="relative w-full h-[640px] overflow-hidden sm:h-44"
      {...handlers}
    >
      <div
        className={`flex h-full min-w-max ${
          position === -1
            ? ""
            : "transition-transform duration-1000 sm:duration-500"
        }`}
        style={{ transform: `translateX(${position * 100 + "vw"})` }}
        ref={carouselBodyRef}
      >
        {[imgs[imagesArray[0]], imgs[imagesArray[1]], imgs[imagesArray[2]]].map(
          (img, i) => (
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
          )
        )}
      </div>
      <ArrowCircleLeft
        className="absolute w-12 h-12 text-gray-100 -translate-y-1/2 cursor-pointer top-1/2 left-3 sm:hidden"
        onClick={swipeLeft}
      />
      <ArrowCircleRight
        className="absolute w-12 h-12 text-gray-100 -translate-y-1/2 cursor-pointer top-1/2 right-3 sm:hidden"
        onClick={swipeRight}
      />
    </div>
  );
}

export default Carousel;
