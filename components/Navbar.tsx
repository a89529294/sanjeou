import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";
import { useDisableScroll } from "../hooks/useDisableScroll";
import { useLangContext } from "../hooks/useLangContext";
import Burger from "./Icons/Burger";
import Search from "./Icons/Search";
import { Modal } from "./Modal";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imgPath: string;
  width: number;
  height: number;
  showLang?: boolean;
  setShowLang?: (arg: boolean) => void;
}

const IconButton = ({
  imgPath,
  width,
  height,
  className,
  showLang,
  setShowLang,
  // onClick,
  ...props
}: IconButtonProps) => {
  const [lang, setLang] = useLangContext();
  const isEngSelected = lang === "en";
  const isCNSelected = lang === "cn";

  return (
    <button className={`relative ${className}`} {...props}>
      <Image src={imgPath} width={width} height={height} />
      {showLang ? (
        <ul className="absolute flex gap-1 -translate-x-1/2 whitespace-nowrap left-1/2">
          <li
            className={`${isEngSelected ? "text-red-500" : ""}`}
            onClick={(e) => setLang("en")}
          >
            English
          </li>
          <li
            className={`${isCNSelected ? "text-red-500" : ""}`}
            onClick={() => setLang("cn")}
          >
            中文
          </li>
        </ul>
      ) : null}
      {/* <div
        className="fixed top-0 left-0 z-10 w-full h-full cursor-default"
        onClick={() => setShowLang && setShowLang(false)}
      /> */}
    </button>
  );
};

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
          className={`w-max text-bauhaus text-xl font-medium cursor-pointer xl:text-lg`}
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

const MobileTabLink = ({
  to,
  children,
  Icon,
}: {
  to: string;
  children: React.ReactNode;
  Icon?: React.FunctionComponent<{ className: string }>;
}) => (
  <Link href={to}>
    <a className="flex items-center gap-3">
      {Icon ? (
        <Icon className="w-5 aspect-square" />
      ) : (
        <div className="w-5 aspect-square" />
      )}
      {children}
    </a>
  </Link>
);

const MobileTab = ({ children }: { children: React.ReactNode }) => (
  <div className="grid content-center flex-1 px-4 py-2 text-base border-b border-solid text-bauhaus border-petro-blue last:border-none">
    {children}
  </div>
);

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const router = useRouter();

  useDisableScroll(showModal);

  useEffect(() => {
    setShowModal(false);
  }, [router.pathname]);

  return (
    <div className="relative grid gap-12 px-32 bg-white pt-11 sm:px-4 sm:py-5 ">
      <div className="flex items-center">
        <Link href="/">
          <a className="w-[411px] h-[55px] relative sm:w-[181px] sm:h-6">
            <Image
              src="/img/icons/SanJeoulogo.svg"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>

        <span className="font-athelas italic text-primary-red text-[64px] leading-[0.5] self-start ml-4 sm:text-2xl sm:leading-[0.7]">
          4
        </span>
        <span className="font-athelas italic text-primary-red text-6xl leading-[0.6] self-start sm:text-2xl sm:leading-[0.7]">
          0
        </span>
        <span className="font-playfair italic text-[28px] text-primary -translate-x-7 sm:text-xs sm:-translate-x-4 sm:translate-y-1">
          years
        </span>
        <Burger
          className="hidden ml-auto sm:block"
          onClick={() => setShowModal((s) => !s)}
        />

        <div className="flex gap-8 ml-auto sm:hidden">
          <IconButton imgPath="/img/icons/fb.svg" width={26} height={26} />
          <IconButton imgPath="/img/icons/youtube.svg" width={30} height={22} />
          <IconButton
            imgPath="/img/icons/globe.svg"
            width={22}
            height={22}
            onClick={() => setShowLang((s) => !s)}
            showLang={showLang}
            setShowLang={setShowLang}
          />
        </div>
      </div>
      <div className="flex gap-16 sm:hidden text-bauhaus xl:gap-8">
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
        <div className="absolute top-0 right-0 flex flex-col h-screen pt-4 bg-white w-44 text-bauhaus max-h-mobile-menu">
          <MobileTab>
            <div className="flex gap-3">
              <Image src="/img/icons/fb.svg" width={26} height={26} />
              <Image src="/img/icons/youtube.svg" width={26} height={26} />
            </div>
          </MobileTab>
          <MobileTab>
            <MobileTabLink
              to="/"
              Icon={({ className }) => (
                <div className={`relative ${className}`}>
                  <Image
                    src="/img/icons/globe.svg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
            >
              CN
            </MobileTabLink>
          </MobileTab>
          <MobileTab>
            <MobileTabLink
              to="/search"
              Icon={({ className }) => <Search className={className} />}
            >
              搜尋...
            </MobileTabLink>
          </MobileTab>
          <MobileTab>
            <MobileTabLink to="/about">公司簡介</MobileTabLink>
          </MobileTab>
          <MobileTab>
            <MobileTabLink to="/news">動態資訊</MobileTabLink>
          </MobileTab>
          <MobileTab>
            <MobileTabLink to="/products">產品</MobileTabLink>
          </MobileTab>
          <MobileTab>
            <MobileTabLink to="/catalog">電子型錄</MobileTabLink>
          </MobileTab>
          <MobileTab>
            <MobileTabLink to="/videos">影片</MobileTabLink>
          </MobileTab>
          <MobileTab>
            <MobileTabLink to="/achievements">工程實績</MobileTabLink>
          </MobileTab>
          <MobileTab>
            <MobileTabLink to="/contact-us">聯繫我們</MobileTabLink>
          </MobileTab>
          {/* <div className="flex justify-center gap-3 mt-auto ">
            <IconButton imgPath="/img/icons/fb.svg" width={26} height={26} />
            <IconButton
              imgPath="/img/icons/youtube.svg"
              width={30}
              height={22}
            />
            <IconButton imgPath="/img/icons/globe.svg" width={22} height={22} />
          </div> */}
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
