import Image from "next/image";
import React from "react";
import Certifications from "../components/about/Certifications";
import Hero from "../components/about/Hero";

function About() {
  return (
    <div className="overflow-hidden">
      <div className="relative h-96">
        <Image
          layout="fill"
          objectFit="cover"
          src="/img/about/about_hero.png"
        />
      </div>
      <div className="px-32 pt-16 pb-24">
        <Hero />
        <Certifications />
      </div>
    </div>
  );
}

export default About;
