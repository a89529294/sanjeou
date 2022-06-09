import Image from "next/image";
import React from "react";
import HeroImage from "../components/HeroImage";
import NewsList from "../components/news/NewsList";

function News() {
  return (
    <div>
      <HeroImage text="動態資訊" />
      <NewsList />
    </div>
  );
}

export default News;
