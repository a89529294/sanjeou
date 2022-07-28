import React from "react";

function OutlinedButton({
  children,
  onClick = () => {},
  className = "",
  size = "default",
  disabled = false,
}: {
  children: string;
  onClick?: () => void;
  className?: string;
  size?: "default" | "wide";
  disabled?: boolean;
}) {
  return (
    <button
      className={`sm:text-base sm:py-1 py-2 text-xl border border-solid ${
        size === "wide" ? "px-12 sm:px-8" : "px-7 sm:px-5"
      } text-primary-red border-primary-red ${className} ${
        disabled ? "opacity-25 cursor-default" : ""
      }`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default OutlinedButton;
