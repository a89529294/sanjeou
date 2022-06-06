import React from "react";

function ChevronDown({
  stroke = "gray",
  width = 12,
  height = 7,
  className,
}: {
  stroke?: "gray" | "red";
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1L6 6L11 1"
        stroke={stroke === "gray" ? "#404040" : "#EA1833"}
      />
    </svg>
  );
}

export default ChevronDown;
