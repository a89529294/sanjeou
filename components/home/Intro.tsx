import React from "react";
import MoreInfoButton from "../MoreInfoButton";

function Intro() {
  return (
    <div className="relative flex gap-10 px-32 pb-32 overflow-hidden pt-28">
      <video controls className="w-3/5 h-96">
        <source src="/media/cc0-videos/flower.webm" type="video/webm" />
        <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className="relative flex flex-col text-white basis-2/5">
        <h1 className="text-3xl font-bold">三久建材工業股份有限公司</h1>
        <h2 className="mt-1 mb-3 text-xl font-light">About</h2>
        <p className="text-lg">
          三久建材工業股份有限公司成立於1982年，30多年以來，取得多項專利與認證。為一專業之電動防火捲門、阻熱捲門、遮煙捲簾、硬式防颱快速門、圍牆大門、防水閘門及機棚大門製作及施工之責任保證公司。
          本公司秉持著信譽永久、品質永久、服務永久的三個永久為公司的經營宗旨。不敢一日或忘，不管時代變遷、經濟興衰，將永遠以三個永久的精神繼續奮鬥，以不負對三久公司厚愛的使用顧客與工程先進。
        </p>
        <MoreInfoButton className="mt-auto" />
      </div>
      <div className="absolute bottom-0 w-screen rounded-full aspect-square left-1/3 bg-primary -z-10"></div>
    </div>
  );
}

export default Intro;
