import React from "react";
import Image from "next/image";

function HeroImage({ text }: { text: string }) {
  return (
    <div className="relative grid h-96 place-content-center isolate sm:h-24">
      <Image
        layout="fill"
        objectFit="cover"
        src="/img/about/about_hero.png"
        priority
      />
      <h1 className="relative z-10 px-5 py-3 text-4xl font-bold text-white border-t border-b border-white border-solid sm:p-1 sm:text-base">
        {text}
      </h1>
    </div>
  );
}

export default HeroImage;
