import React from "react";
import Image from "next/image";
import ItemTitle from "../ItemTitle";
import TopCircle from "../TopCircle";

const videos = [
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
];

const VideoItem = ({ src, title }: { src: string; title: string }) => (
  <a className="grid gap-2" href="https://google.com" target="_blank">
    <div className="relative w-full aspect-video">
      <Image
        src={`https://picsum.photos/seed/${Math.floor(
          Math.random() * 1000
        )}/500/300`}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <ItemTitle>{title}</ItemTitle>
  </a>
);

function VideoList() {
  return (
    <div
      className="relative grid px-32 py-7 grid-cols-catalog-grid gap-9 sm:px-7 sm:gap-4"
      id="videos-all"
    >
      {videos.map((video, i) => (
        <VideoItem key={i} src={video.src} title={video.title} />
      ))}
      <TopCircle to="/videos" />
    </div>
  );
}

export default VideoList;
