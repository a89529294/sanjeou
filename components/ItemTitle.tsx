import React from "react";

function ItemTitle({
  children,
  size = "small",
  className = "",
}: {
  children: string;
  size?: "medium" | "small";
  className?: string;
}) {
  return (
    <h2
      className={`font-medium text-primary ${
        size === "medium" ? "text-[28px]" : "text-2xl"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export default ItemTitle;
