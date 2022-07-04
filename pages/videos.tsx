import Head from "next/head";
import React from "react";
import HeroImage from "../components/HeroImage";
import VideoList from "../components/videos/VideoList";

function Videos() {
  return (
    <div>
      <Head>
        <title>影片</title>
      </Head>
      <HeroImage text="影片" />
      <VideoList />
    </div>
  );
}

export default Videos;
