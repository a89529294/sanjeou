import React from "react";

function Circle({
  className,
  width,
  bgColor = "bg-white-smoke",
}: {
  className: string;
  width: string;
  bgColor?: string;
}) {
  return (
    <div
      className={`absolute rounded-full aspect-square ${className} ${width} ${bgColor} -z-10`}
    />
  );
}

export default Circle;
