import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Burger from "./Icons/Burger";
import Search from "./Icons/Search";
import { Modal } from "./Modal";

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
  to,
}: {
  children: string;
  withIcon?: boolean;
  to: string;
}) => {
  const router = useRouter();
  const selected = router.pathname.indexOf(to);
  return (
    <div className="grid auto-cols-auto auto-rows-auto gap-x-1">
      <Link href={to}>
        <a
          className={`w-max text-bauhaus text-xl font-medium cursor-pointer sm:grid sm:place-content-center sm:py-2 sm:px-4 sm:text-base `}
        >
          {children}
        </a>
      </Link>
      {withIcon ? (
        <div className="col-start-2 row-start-1">
          <Image
            src="/img/icons/chevron-down.svg"
            layout="fixed"
            width={20}
            height={10}
          />
        </div>
      ) : null}
      <div
        className={`h-5 ${
          selected === 0 ? "border-b-4 border-solid border-primary-red" : ""
        }`}
      ></div>
    </div>
  );
};

function Navbar() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="grid gap-12 px-32 bg-white pt-11 sm:px-4 sm:pt-4 sm:pb-4">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <Image
              src="/img/icons/SanJeoulogo.svg"
              layout="intrinsic"
              height={55}
              width={411}
            />
          </a>
        </Link>

        <span className="font-athelas italic text-primary-red text-[64px] leading-[0.5] self-start ml-4 sm:text-3xl sm:leading-[0.7]">
          3
        </span>
        <span className="font-athelas italic text-primary-red text-6xl leading-[0.6] self-start sm:text-3xl sm:leading-[0.7]">
          0
        </span>
        <span className="font-playfair italic text-[28px] text-primary -translate-x-7 sm:text-base sm:-translate-x-4">
          years
        </span>
        <Burger
          className="hidden sm:block"
          onClick={() => setShowModal(true)}
        />

        <div className="flex gap-8 ml-auto sm:hidden">
          <IconButton imgPath="/img/icons/fb.svg" width={26} height={26} />
          <IconButton imgPath="/img/icons/youtube.svg" width={30} height={22} />
          <IconButton imgPath="/img/icons/globe.svg" width={22} height={22} />
        </div>
      </div>
      <div className="flex gap-16 sm:hidden text-bauhaus">
        <Tab to="/about">公司簡介</Tab>
        <Tab to="/news" withIcon>
          動態資訊
        </Tab>
        <Tab to="/products" withIcon>
          產品
        </Tab>
        <Tab to="/catalog" withIcon>
          電子型錄
        </Tab>
        <Tab to="/videos">影片</Tab>
        <Tab to="/achievements" withIcon>
          工程實績
        </Tab>
        <Tab to="/contact-us">聯繫我們</Tab>
        <Link href="/search">
          <a className="ml-auto cursor-pointer">
            <Search />
          </a>
        </Link>
      </div>
      <Modal
        show={showModal}
        setShow={setShowModal}
        className="hidden sm:block"
      >
        <div className="absolute top-0 right-0 flex flex-col content-start h-screen gap-3 py-4 bg-white w-44 text-bauhaus">
          <Tab to="/about">公司簡介</Tab>
          <Tab to="/news">動態資訊</Tab>
          <Tab to="/products">產品</Tab>
          <Tab to="/catalog">電子型錄</Tab>
          <Tab to="/videos">影片</Tab>
          <Tab to="/achievements">工程實績</Tab>
          <Tab to="/contact-us">聯繫我們</Tab>
          <div className="flex justify-center gap-3 mt-auto ">
            <IconButton imgPath="/img/icons/fb.svg" width={26} height={26} />
            <IconButton
              imgPath="/img/icons/youtube.svg"
              width={30}
              height={22}
            />
            <IconButton imgPath="/img/icons/globe.svg" width={22} height={22} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
