import Image from "next/image";
import React from "react";

interface PropsType
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: string;
  icon?: string;
}

function Tag({ children, className = "", icon, ...rest }: PropsType) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 text-base text-white bg-primary font-medium ${className}`}
      {...rest}
    >
      {icon ? (
        <div className="grid place-content-center">
          <Image src={icon} width={22} height={24} />
        </div>
      ) : null}
      <span>{children}</span>
    </span>
  );
}

export default Tag;
