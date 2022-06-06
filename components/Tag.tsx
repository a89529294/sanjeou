import React from "react";

interface PropsType
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  text: string;
}

function Tag({ text, className, ...rest }: PropsType) {
  return (
    <span
      className={`px-2 py-1 text-base text-white bg-primary ${className}`}
      {...rest}
    >
      {text}
    </span>
  );
}

export default Tag;
