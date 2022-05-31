import React from "react";

interface PropTypes extends React.SVGProps<SVGSVGElement> {}

function ArrowCircle(props: PropTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {props.children}
    </svg>
  );
}

function ArrowCircleRight(props: PropTypes) {
  return (
    <ArrowCircle {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </ArrowCircle>
  );
}

function ArrowCircleLeft(props: PropTypes) {
  return (
    <ArrowCircle {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      />
    </ArrowCircle>
  );
}

export { ArrowCircleRight, ArrowCircleLeft };
