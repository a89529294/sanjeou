import React from "react";

function SectionTitle({
  primary,
  secondary,
  withDivider = false,
  className = "",
}: {
  primary: string;
  secondary: string;
  withDivider?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-primary ">{primary}</h1>
        <div
          className={`flex-1 border-t border-solid border-primary-red ${
            withDivider ? "block" : "hidden"
          }`}
        />
      </div>
      <h2 className="text-xl font-light text-primary-red">{secondary}</h2>
    </div>
  );
}

export default SectionTitle;
