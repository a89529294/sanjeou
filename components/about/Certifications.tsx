import Image from "next/image";
import React, { useEffect, useReducer, useState } from "react";
import { CompanyInfo } from "../../data/types";
import { useIsMobile } from "../../hooks/useIsMobile";
import { shimmer, toBase64 } from "../BlurredImage";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";
import SectionTitle from "../SectionTitle";

const imgs = [
  ["/img/about/cert-0.jpg", "ISO 9001 管理品質認證"],
  ["/img/about/cert-1.jpg", "UL防火捲門測試報告(含VERSIZE認證)"],
  ["/img/about/cert-2.jpg", "ISO 9001 管理品質認證"],
  ["/img/about/cert-3.jpg", "ISO 9002 管理品質認證"],
  ["/img/about/cert-4.jpg", "ISO 9003 管理品質認證"],
  ["/img/about/cert-5.jpg", "ISO 9004 管理品質認證"],
  ["/img/about/cert-6.jpg", "ISO 9005 管理品質認證"],
  ["/img/about/cert-7.png", "ISO 9006 管理品質認證"],
];

const limit = Math.floor(imgs.length / 2);

function reducer(state: number, action: "left" | "right") {
  if (action === "left") return state + 1 <= limit ? state + 1 : state;
  else if (action === "right") return state - 1 >= 0 ? state - 1 : state;
  throw new Error("Impossible action!");
}

function watchScreen(
  setDistance: (num: number) => void,
  setOffset: (num: number) => void,
  isMobile: boolean
) {
  if (isMobile) {
    setDistance(74);
    setOffset(0);
  } else {
    setDistance(25);
    setOffset(7);
  }
}

function Certifications({ certs }: { certs: CompanyInfo["certs"] }) {
  const [position, setPosition] = useReducer(reducer, 0);
  const [distance, setDistance] = useState(25);
  const [offset, setOffset] = useState(7);
  const isMobile = useIsMobile();

  useEffect(() => {
    watchScreen(setDistance, setOffset, isMobile);
    const fn = () => {
      watchScreen(setDistance, setOffset, isMobile);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [isMobile]);

  return (
    <div className="relative pb-28 sm:pb-6">
      <SectionTitle
        primary="專業認證"
        withDecoration
        id="about-certs"
        size="about-title"
      />
      <div className="overflow-hidden mt-7">
        <div
          className={`flex gap-7 transition-transform`}
          style={{
            transform: `translateX(calc(-${position * distance}% - ${
              position * offset
            }px))`,
          }}>
          {certs.map((c) => (
            <div
              key={c.id}
              className="basis-[calc((100%-84px)/4)] shrink-0 sm:basis-8/12">
              <div className="relative h-80 sm:aspect-square sm:h-auto sm:w-full">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={c.imgURL}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(500, 500)
                  )}`}
                />
              </div>
              <h2 className="text-xl font-medium text-bauhaus sm:text-base">
                {c.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 flex gap-9">
        <CircleArrowLeft onClick={() => setPosition("left")} />
        <CircleArrowRight onClick={() => setPosition("right")} />
      </div>
    </div>
  );
}

export default Certifications;
