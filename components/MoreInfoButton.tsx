import React, { forwardRef } from "react";

interface PropsType
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  className?: string;
  size?: "default" | "small";
  color?: "red" | "white";
}

const MoreInfoButton = forwardRef<HTMLAnchorElement, PropsType>(
  (
    {
      className = "",
      size = "default",
      color = "white",
      onClick = () => {},
      href = "",
    },
    ref
  ) => {
    const textColor = color === "red" ? "text-primary-red" : "text-white";
    const borderColor = color === "red" ? "border-primary-red" : "border-white";
    return (
      <a
        className={`border-b ${borderColor} border-solid relative ${className}`}
        onClick={onClick}
        href={href}
        ref={ref}
      >
        <button
          className={`p-1 ${
            size === "default" ? "text-xl" : "text-base"
          } ${textColor}`}
        >
          了解更多
        </button>
        <div
          className={`absolute bottom-0 right-0 w-4 h-4 border-r ${borderColor} border-solid skew-x-[45deg] -translate-x-2`}
        />
      </a>
    );
  }
);

export default MoreInfoButton;
