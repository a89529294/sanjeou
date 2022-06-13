import React from "react";

function CircleArrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid border border-solid rounded-full cursor-pointer text-primary-red h-9 w-9 border-primary-red place-content-center hover:text-white hover:border-white hover:bg-hotter-than-hell active:bg-primary-red">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        {children}
      </svg>
    </div>
  );
}

function CircleArrowLeft() {
  return (
    <CircleArrow>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </CircleArrow>
  );
}

function CircleArrowRight() {
  return (
    <CircleArrow>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </CircleArrow>
  );
}

function CircleArrowUp() {
  return (
    <CircleArrow>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </CircleArrow>
  );
}

function CircleArrowDown() {
  return (
    <CircleArrow>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </CircleArrow>
  );
}

export { CircleArrowLeft, CircleArrowRight, CircleArrowDown, CircleArrowUp };
