import Link from "next/link";
import React, { forwardRef } from "react";

const MoreInfoButton = ({
  className = "",
  size = "default",
  color = "white",
  onClick = () => {},
  href = "",
  disabled = false,
}) => {
  const textColor = color === "red" ? "text-primary-red" : "text-white";
  const borderColor = color === "red" ? "border-primary-red" : "border-white";

  //   const Temp = disabled ? "button" : Link;
  return (
    <Link href={href}>
      <a
        className={`border-b border-solid relative group overflow-hidden ${borderColor} ${className}`}
        onClick={onClick}>
        <button
          className={`p-1 ${
            size === "default" ? "text-xl" : "text-base"
          } ${textColor} sm:text-xs`}>
          了解更多
        </button>
        <div
          className={`absolute bottom-0 right-0 w-4 h-4 border-r ${borderColor} border-solid skew-x-[45deg] -translate-x-2`}
        />
        {/* <div className="absolute top-0 w-1/12 h-full -translate-x-full group-hover:translate-x-[1200%]"></div> */}
      </a>
    </Link>
  );
};

export default MoreInfoButton;
