import React from "react";

function MoreInfoButton({
  className = "",
  size = "medium",
  color = "white",
}: {
  className: string;
  size?: "medium" | "small";
  color?: "red" | "white";
}) {
  const textColor = color === "red" ? "text-primary-red" : "text-white";
  const borderColor = color === "red" ? "border-primary-red" : "border-white";
  return (
    <div
      className={`border-b ${borderColor} border-solid relative ${className}`}
    >
      <button
        className={`p-1 ${
          size === "medium" ? "text-xl" : "text-base"
        } ${textColor}`}
      >
        了解更多
      </button>
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 border-r ${borderColor} border-solid skew-x-[45deg] -translate-x-2`}
      />
    </div>
  );
}

export default MoreInfoButton;
