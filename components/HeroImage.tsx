import React from "react";
import Image from "next/image";

function HeroImage({ text }: { text: string }) {
  return (
    <div className="relative grid h-96 place-content-center isolate">
      <Image layout="fill" objectFit="cover" src="/img/about/about_hero.png" />
      <h1 className="relative z-10 px-5 py-3 text-4xl font-bold text-white border-t border-b border-white border-solid">
        {text}
      </h1>
    </div>
  );
}

export default HeroImage;
