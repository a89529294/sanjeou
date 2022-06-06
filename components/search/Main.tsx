import Image from "next/image";
import React from "react";
import Search from "../Icons/Search";
import X from "../Icons/X";

function Main() {
  return (
    <div>
      <div className="flex gap-4 px-32 pt-12 pb-6">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full h-full text-3xl font-medium border-b border-solid outline-none text-bauhaus border-primary"
          />
          <X className="absolute right-0 -translate-y-1/2 cursor-pointer top-1/2" />
        </div>

        <div className="px-6 pt-5 pb-4 border border-solid cursor-pointer text-primary-red border-primary-red">
          <Search size="large" />
        </div>
      </div>
    </div>
  );
}

export default Main;
