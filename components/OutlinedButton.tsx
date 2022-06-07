import React from "react";

function OutlinedButton({
  children,
  onClick = () => {},
  className = "",
  size = "default",
}: {
  children: string;
  onClick?: () => void;
  className?: string;
  size?: "default" | "wide";
}) {
  return (
    <button
      className={`py-2 text-xl border border-solid ${
        size === "wide" ? "px-12" : "px-7"
      } text-primary-red border-primary-red ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default OutlinedButton;
