import React from "react";

function Circle({
  className,
  width,
  bgColor,
}: {
  className: string;
  width: string;
  bgColor: string;
}) {
  return (
    <div
      className={`absolute rounded-full aspect-square ${className} ${width} ${bgColor}`}
    ></div>
  );
}

export default Circle;
