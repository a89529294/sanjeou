import React from "react";

interface PropsType extends React.SVGProps<SVGSVGElement> {
  size?: "small" | "large";
}

function Search({ size = "small", ...props }: PropsType) {
  const sizeObj = {
    small: "w-6",
    large: "w-7 sm:w-4",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`aspect-square ${sizeObj[size]}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export default Search;
