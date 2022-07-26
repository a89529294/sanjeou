import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import HeroImage from "../components/HeroImage";
import VideoList from "../components/videos/VideoList";
import getVideos from "../utils/data/getVideos";

function Videos({
  videos,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>影片</title>
      </Head>
      <HeroImage text="影片" />
      <VideoList videos={videos} />
    </div>
  );
}

export async function getServerSideProps() {
  const videos = await getVideos();
  return {
    props: {
      videos,
    },
  };
}

export default Videos;
