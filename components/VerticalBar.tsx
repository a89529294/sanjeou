import React from "react";

function VerticalBar({ className = "" }) {
  return (
    <div className={`h-24 w-9 bg-primary-red absolute ${className}`}></div>
  );
}

export default VerticalBar;
