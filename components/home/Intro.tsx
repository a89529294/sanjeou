import React from "react";
import MoreInfoButton from "../MoreInfoButton";
import VerticalBar from "../VerticalBar";

function Intro({ title = "", body = "" }) {
  return (
    <div className="relative flex gap-10 px-32 pb-32 pt-28">
      <video controls className="w-3/5 h-96">
        <source src="/media/cc0-videos/flower.webm" type="video/webm" />
        <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className="relative flex flex-col text-white basis-2/5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="mt-1 mb-3 text-xl font-light">About</h2>
        <p className="text-lg">{body}</p>
        <MoreInfoButton className="mt-auto" href="/about" />
        <VerticalBar className="-top-32" />
      </div>
      <div className="absolute bottom-0 w-screen rounded-full aspect-square left-1/3 bg-primary -z-10"></div>
    </div>
  );
}

export default Intro;
