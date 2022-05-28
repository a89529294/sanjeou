import Image from "next/image";
import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imgPath: string;
  width: number;
  height: number;
}

const IconButton = ({ imgPath, width, height, ...props }: IconButtonProps) => (
  <button {...props}>
    <Image src={imgPath} width={width} height={height}></Image>
  </button>
);

const Tab = ({
  children,
  withIcon,
}: {
  children: string;
  withIcon?: boolean;
}) => (
  <div className="flex items-center gap-2 text-xl font-medium cursor-pointer">
    {children}
    {withIcon ? (
      <Image
        src="/img/chevron-down.svg"
        layout="fixed"
        width={20}
        height={10}
      />
    ) : null}
  </div>
);

function Navbar() {
  return (
    <div className="grid gap-12 px-32 pb-5 pt-11">
      <div className="flex items-center">
        <Image
          src="/img/SanJeoulogo.svg"
          layout="intrinsic"
          height={55}
          width={411}
        ></Image>
        <span className="font-athelas italic text-primary-red text-[64px] leading-[0.5] self-start ml-4">
          3
        </span>
        <span className="font-athelas italic text-primary-red text-6xl leading-[0.6] self-start">
          0
        </span>
        <span className="font-playfair italic text-[28px] text-primary -translate-x-7 ">
          years
        </span>

        <div className="flex gap-8 ml-auto">
          <IconButton imgPath="/img/fb.svg" width={26} height={26} />
          <IconButton imgPath="/img/youtube.svg" width={30} height={22} />
          <IconButton imgPath="/img/globe.svg" width={22} height={22} />
        </div>
      </div>
      <div className="flex gap-16">
        <Tab>公司簡介</Tab>
        <Tab withIcon>動態資訊</Tab>
        <Tab withIcon>產品</Tab>
        <Tab withIcon>電子型錄</Tab>
        <Tab>影片</Tab>
        <Tab withIcon>工程實績</Tab>
        <Tab>聯繫我們</Tab>
      </div>
    </div>
  );
}

export default Navbar;
