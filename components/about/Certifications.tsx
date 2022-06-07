import Image from "next/image";
import React from "react";
import { CircleArrowLeft, CircleArrowRight } from "../Icons/CircleArrows";
import SectionTitle from "../SectionTitle";

const imgs = [
  ["/img/about/cert-0.jpg", "ISO 9001 管理品質認證"],
  ["/img/about/cert-1.jpg", "UL防火捲門測試報告(含VERSIZE認證)"],
  ["/img/about/cert-2.jpg", "ISO 9001 管理品質認證"],
  ["/img/about/cert-3.jpg", "ISO 9001 管理品質認證"],
];

function Certifications() {
  return (
    <div className="relative pb-28">
      <SectionTitle primary="專業認證" />
      <div className="flex gap-7 mt-7">
        {imgs.map((img) => (
          <div key={img[0]} className="flex-1 ">
            <div className="relative h-80">
              <Image layout="fill" objectFit="cover" src={img[0]} />
            </div>
            <h2 className="text-xl font-medium text-bauhaus">{img[1]}</h2>
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 flex gap-9">
        <CircleArrowLeft />
        <CircleArrowRight />
      </div>
    </div>
  );
}

export default Certifications;
