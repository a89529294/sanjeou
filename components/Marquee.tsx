import React, { useEffect, useRef, useState } from "react";

interface MarqueeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  scrollDir?: "left" | "right";
}

function Marquee({ children, scrollDir = "left", ...props }: MarqueeProps) {
  return (
    <div
      className={`relative flex overflow-hidden isolate ${
        scrollDir === "left" ? "flex-row" : "flex-row-reverse"
      }`}
      {...props}
    >
      <div className="z-10 h-full marquee-left-shade marquee-right-shade" />
      <MarqueeChild scrollDir={scrollDir}>{children}</MarqueeChild>
      <MarqueeChild scrollDir={scrollDir}>{children}</MarqueeChild>
    </div>
  );
}

const MarqueeChild = ({
  children,
  scrollDir,
}: {
  children: React.ReactNode;
  scrollDir: "left" | "right";
}) => {
  const [animationDuration, setAnimationDuration] = useState(60);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const speed = 40; //40 px/s
    const width = divRef.current?.clientWidth ?? 2500;
    setAnimationDuration(width / speed);
  }, [divRef.current]);
  return (
    <div
      className={`flex ${
        scrollDir === "left" ? "animate-scroll-left" : "animate-scroll-right"
      }`}
      style={{
        animationDuration: `${animationDuration}s`,
      }}
      ref={divRef}
    >
      {children}
    </div>
  );
};

export default Marquee;
