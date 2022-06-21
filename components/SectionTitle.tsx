import Image from "next/image";
import React, { useEffect } from "react";
import VerticalBar from "./VerticalBar";

const sizes = {
  default: "text-[32px] font-bold sm:text-2xl",
  small: "text-[28px] font-medium sm:text-base",
  "product-title": "text-[32px] font-bold sm:text-base",
  "about-title": "text-[32px] font-bold sm:text-xl",
};

function SectionTitle({
  primary,
  secondary,
  withDivider = false,
  className = "",
  size = "default",
  icon,
  withDecoration = false,
  id,
}: {
  primary: string;
  secondary?: string;
  withDivider?: boolean;
  className?: string;
  size?: keyof typeof sizes;
  icon?: string;
  withDecoration?: boolean;
  id?: string;
}) {
  return (
    <div className={`relative ${className} isolate`} id={id}>
      <div className="flex items-center gap-3">
        {icon ? <Image width={26} height={28} src={icon} /> : null}
        <h1 className={`text-primary ${sizes[size]}`}>{primary}</h1>
        <div
          className={`flex-1 border-t border-solid border-primary-red ${
            withDivider ? "block" : "hidden"
          }`}
        />
      </div>
      {secondary ? (
        <h2 className="text-xl font-light text-primary-red sm:text-xs">
          {secondary}
        </h2>
      ) : null}
      {withDecoration ? (
        <VerticalBar className="-translate-x-[82%] -translate-y-[72px] top-0 -z-10 sm:-translate-y-[40px]" />
      ) : null}
    </div>
  );
}

export default SectionTitle;
