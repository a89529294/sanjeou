import React from "react";

interface PropsTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  show: boolean;
  setShow: (arg: boolean) => void;
  className?: string;
}

export const Modal = ({
  children,
  show,
  setShow,
  className,
  ...props
}: PropsTypes) => {
  return show ? (
    <div
      onClick={() => setShow(false)}
      className={`absolute top-0 left-0 z-10 grid w-full h-full bg-zinc-500/60 place-items-center ${className}`}
      {...props}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  ) : null;
};
