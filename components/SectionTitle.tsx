import Image from "next/image";
import React from "react";

function SectionTitle({
  primary,
  secondary,
  withDivider = false,
  className = "",
  size = "default",
  icon,
}: {
  primary: string;
  secondary?: string;
  withDivider?: boolean;
  className?: string;
  size?: "default" | "small";
  icon?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {icon ? <Image width={26} height={28} src={icon} /> : null}
        <h1
          className={`text-primary ${
            size === "default"
              ? "text-[32px] font-bold"
              : "text-[28px] font-medium"
          }`}
        >
          {primary}
        </h1>
        <div
          className={`flex-1 border-t border-solid border-primary-red ${
            withDivider ? "block" : "hidden"
          }`}
        />
      </div>
      {secondary ? (
        <h2 className="text-xl font-light text-primary-red">{secondary}</h2>
      ) : null}
    </div>
  );
}

export default SectionTitle;
