import React from "react";
import SectionTitle from "../SectionTitle";
import Map from "./Map";

function Partners() {
  return (
    <div className="relative px-32 overflow-hidden pb-28">
      <SectionTitle primary="合作夥伴" secondary="Partners" />
      <div className="relative px-11">
        <Map className="w-full mt-4" />
        <div className="w-5 h-5 bg-white absolute left-[18.5%] top-[48.5%] rounded-2xl p-px">
          <div className="grid w-full h-full cursor-pointer rounded-2xl bg-primary-red place-content-center peer">
            <div className="w-[6px] aspect-square bg-white rounded-xl"></div>
          </div>
          <div className="absolute top-0 flex flex-col items-center transition-all duration-300 delay-1000 origin-bottom scale-y-0 -translate-x-1/2 -translate-y-full opacity-0 peer-hover:delay-[0ms] left-1/2 peer-hover:scale-y-100 peer-hover:opacity-100 hover:opacity-100 hover:scale-y-100">
            <div className="pt-5 text-center bg-white border-2 border-solid rounded-full w-44 aspect-square border-primary-red">
              <p className="text-sm font-medium text-primary-red">國家/地區</p>
              <p className="text-lg font-bold text-primary">公司名稱</p>
              <p className="text-sm text-black">聯絡資訊</p>
            </div>
            <div className="h-8 border-l border-solid border-primary-red"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
