import React from "react";
import Circle from "../Circle";
import SectionTitle from "../SectionTitle";

function Hero() {
  return (
    <div className="relative pb-20">
      <SectionTitle primary="三久建材工業股份有限公司" />
      <div className="flex flex-col gap-10 mt-6 mb-10 text-lg text-bauhaus">
        <p>
          三久建材工業股份有限公司成立於1982年，30多年以來，取得多項專利與認證。為一專業之電動防火捲門、阻熱捲門、遮煙捲簾、硬式防颱快速門、圍牆大門、防水閘門及機棚大門製作及施工之責任保證公司。
        </p>
        <p>
          信譽、品質、服務是三久建材工業股份有限公司全體同仁的座右銘，事業之經營必須兼顧社會責任及傳承的責任。因此本公司投入大量資金、人力於新產品、新技術之引進及開發，更為追求高品質的產品而領先同業於1998年取得ISO-9001國際品質系統認證，並由工務部門規劃出定期售後服務計劃，使您在使用三久產品時無後顧之憂。
        </p>
        <p>
          時代變遷、氣候異常、天災無情，生命、財產，毫無保障，三久建材公司肩負責任，從超大型室外防颱門及室內符合CNS、UL、FM以及EN認證之防火捲門、阻熱型捲門。並與國外廠商共同研發多種型式的機庫門、重型門，所有產品均以最高品質生產。
        </p>
        <p>
          本公司秉持著信譽永久、品質永久、服務永久的三個永久為公司的經營宗旨。不敢一日或忘，不管時代變遷、經濟興衰，將永遠以三個永久的精神繼續奮鬥，以不負對三久公司厚愛的使用顧客與工程先進。
        </p>
      </div>
      <video controls className="w-full h-[680px]">
        <source src="/media/cc0-videos/flower.webm" type="video/webm" />
        <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <Circle width="w-[1078px]" className="right-0 top-32 translate-x-[45%]" />
    </div>
  );
}

export default Hero;
