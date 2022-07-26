import React from "react";
import Image from "next/image";
import ItemTitle from "../ItemTitle";
import TopCircle from "../TopCircle";
import getVideos from "../../utils/data/getVideos";
import { Video } from "../../data/types";

const videos = [
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
];

const VideoItem = ({ src, title }: { src: string; title: string }) => {
  const idx = src.indexOf("v=");
  const thumbnail =
    idx !== -1
      ? `https://img.youtube.com/vi/${src.slice(idx + 2)}/hqdefault.jpg`
      : `https://picsum.photos/seed/${Math.floor(
          Math.random() * 1000
        )}/500/300`;
  return (
    <a className="grid gap-2" href={src} target="_blank" rel="noopener">
      <div className="relative w-full aspect-video">
        <Image src={thumbnail} layout="fill" objectFit="cover" />
      </div>
      <ItemTitle>{title}</ItemTitle>
    </a>
  );
};

function VideoList({ videos }: { videos: Video[] }) {
  return (
    <div
      className="relative grid px-32 py-7 grid-cols-catalog-grid gap-9 sm:px-7 sm:gap-4"
      id="videos-all">
      {videos.map((v) => (
        <VideoItem key={v.id} src={v.URL} title={v.name} />
      ))}
      <TopCircle to="/videos" />
    </div>
  );
}

export default VideoList;
