import Image from "next/image";
import React from "react";
import Certifications from "../components/about/Certifications";
import Hero from "../components/about/Hero";
import Milestones from "../components/about/Milestones";
import HeroImage from "../components/HeroImage";

function About() {
  return (
    <div>
      <HeroImage text="公司簡介" />
      <div className="px-32 pt-16 pb-24 sm:px-7 sm:pt-4 sm:pb-8">
        <Hero />
        <Certifications />
        <Milestones />
      </div>
    </div>
  );
}

export default About;
