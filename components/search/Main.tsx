import Image from "next/image";
import React, { useState } from "react";
import Search from "../Icons/Search";
import X from "../Icons/X";

const ListItem = ({
  children,
  selected = false,
}: {
  children: string;
  selected?: boolean;
}) => (
  <li
    className={`text-2xl ${
      selected ? "text-primary-red" : "text-bauhaus"
    } xl:text-lg`}
  >
    {children}
  </li>
);

const SearchBar = ({
  input,
  setInput,
}: {
  input: string;
  setInput: (arg: string) => void;
}) => {
  return (
    <div className="grid px-32 pt-12 pb-6 gap-9 bg-white-smoke">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full h-full text-3xl font-medium border-b border-solid outline-none text-bauhaus border-primary bg-white-smoke"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <X
            className="absolute right-0 -translate-y-1/2 cursor-pointer top-1/2"
            onClick={() => setInput("")}
          />
        </div>

        <div className="px-6 pt-5 pb-4 border border-solid cursor-pointer text-primary-red border-primary-red">
          <Search size="large" />
        </div>
      </div>
      <div className="flex items-center whitespace-nowrap">
        <div className="font-medium text-[28px] text-primary xl:text-xl">
          搜尋結果
        </div>
        <div className="translate-y-[2px] border-r-2 border-solid h-4/6 ml-6 border-primary xl:ml-5" />
        <ul className="flex pl-6 gap-14 xl:pl-5 xl:gap-10">
          <ListItem selected>全部(4)</ListItem>
          <ListItem>動態資訊(0)</ListItem>
          <ListItem>產品(1)</ListItem>
          <ListItem>電子型錄(1)</ListItem>
          <ListItem>影片(1)</ListItem>
          <ListItem>影片(1)</ListItem>
        </ul>
      </div>
    </div>
  );
};

const SearchItem = ({ category, item }: { category: string; item: string }) => (
  <li className="border-b border-solid py-7 border-stonewall-gray">
    {category}｜{item}
  </li>
);

const SearchResult = () => (
  <ul className="px-32 pb-16 text-2xl font-medium text-bauhaus">
    <SearchItem category="產品" item="電動防火/防颱捲門" />
    <SearchItem category="電子型錄" item="廠辦大門" />
    <SearchItem category="影片" item="一般型、防颱型電動捲門" />
    <SearchItem category="工程實績" item="廠辦大門" />
  </ul>
);

function Main() {
  const [input, setInput] = useState("");

  return (
    <div>
      <SearchBar input={input} setInput={setInput} />
      <SearchResult />
    </div>
  );
}

export default Main;
