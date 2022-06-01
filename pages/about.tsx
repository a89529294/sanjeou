import Image from "next/image";
import React from "react";
import Hero from "../components/about/Hero";

function About() {
  return (
    <div>
      <div className="relative h-96">
        <Image
          layout="fill"
          objectFit="cover"
          src="/img/about/about_hero.png"
        />
      </div>
      <div className="px-32 pt-16 pb-24">
        <Hero />
      </div>
    </div>
  );
}

export default About;
