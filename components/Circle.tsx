import React from "react";

function Circle({
  className,
  width,
  bgColor = "bg-white-smoke",
}: {
  className: string;
  width: number;
  bgColor?: string;
}) {
  return (
    <div
      className={`absolute rounded-full aspect-square ${className} ${bgColor} -z-10`}
      style={{ width: width + "px" }}
    />
  );
}

export default Circle;
