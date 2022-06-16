import React from "react";
import MoreInfoButton from "../MoreInfoButton";
import VerticalBar from "../VerticalBar";

function Intro({ title = "", body = "" }) {
  return (
    <div className="relative flex gap-10 px-32 pb-32 pt-28 sm:flex-col sm:px-7 sm:pt-2 sm:pb-9">
      <video
        controls
        className="w-3/5 sm:h-auto h-96 sm:order-2 sm:w-full sm:aspect-video"
      >
        <source src="/videos/sample.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className="relative flex flex-col text-white basis-2/5 sm:order-1 sm:isolate">
        <h1 className="text-3xl font-bold sm:text-xl">{title}</h1>
        <h2 className="mt-1 mb-3 text-xl font-light sm:text-[10px] sm:mb-2 sm:leading-3">
          About
        </h2>
        <p className="text-lg sm:text-xs">{body}</p>
        <MoreInfoButton className="mt-auto sm:mt-8" href="/about" />
        <VerticalBar className="-top-32 sm:-left-4 sm:-top-5 sm:-z-10" />
      </div>
      <div className="absolute bottom-0 w-screen rounded-full aspect-square left-1/3 bg-primary -z-10 sm:w-[600px] sm:bottom-[25%] sm:left-1/2 sm:-translate-x-1/2 "></div>
    </div>
  );
}

export default Intro;
