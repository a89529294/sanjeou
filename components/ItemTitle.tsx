import React from "react";

function ItemTitle({
  children,
  size = "default",
  className = "",
}: {
  children: string;
  size?: "large" | "default";
  className?: string;
}) {
  return (
    <h2
      className={`font-medium text-primary ${
        size === "large" ? "text-[28px]" : "text-2xl"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export default ItemTitle;
