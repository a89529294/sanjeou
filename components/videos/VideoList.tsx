import React from "react";
import ItemTitle from "../ItemTitle";

const videos = [
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
  { src: "/videos/sample.mp4", title: "一般型、防颱型電動捲門" },
];

const VideoItem = ({ src, title }: { src: string; title: string }) => (
  <div className="grid gap-2">
    <video controls className="w-full aspect-video">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <ItemTitle>{title}</ItemTitle>
  </div>
);

function VideoList() {
  return (
    <div
      className="grid px-32 py-7 grid-cols-catalog-grid gap-9"
      id="videos-all"
    >
      {videos.map((video, i) => (
        <VideoItem key={i} src={video.src} title={video.title} />
      ))}
    </div>
  );
}

export default VideoList;
