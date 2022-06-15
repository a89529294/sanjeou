import React from "react";
import Link from "next/link";

function TopCircle({
  to = "",
  className = "translate-x-full -translate-y-1/2 top-1/2 right-32",
}) {
  return (
    <Link href={to}>
      <a
        className={`absolute flex flex-col items-center justify-center w-24 text-2xl text-white rounded-full hover:bg-hotter-than-hell aspect-square bg-primary-red sm:hidden ${className}`}
      >
        <div className="relative border-r-2 border-white border-solid h-7 before:content-[''] before:block before:w-3 before:border-t-2 before:border-solid before:border-white before:absolute before:skew-y-[45deg] before:top-1 "></div>
        <span>TOP</span>
      </a>
    </Link>
  );
}

export default TopCircle;
