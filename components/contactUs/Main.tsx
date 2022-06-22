import Image from "next/image";
import React from "react";
import Chevron from "../Icons/Chevron";
import CirclePlus from "../Icons/CirclePlus";
import OutlinedButton from "../OutlinedButton";
import TopCircle from "../TopCircle";

const FormInput = ({
  label,
  placeholder,
  options,
}: {
  label: string;
  placeholder: string;
  options?: Array<string>;
}) => (
  <label className="flex items-center pb-2 text-xl font-medium border-b border-solid text-bauhaus placeholder:text-lg placeholder:text-stonewall-gray border-primary sm:text-base ">
    <span className="inline-block w-32 sm:w-24">{label}</span>
    <input placeholder={placeholder} />
    {options ? (
      <Chevron
        width={20}
        height={12}
        className="ml-auto text-primary-red"
        type="down"
      />
    ) : null}
  </label>
);

function Main() {
  return (
    <div
      className="relative grid px-32 pt-6 pb-36 gap-9 sm:px-7 sm:py-6"
      id="contact-us-form"
    >
      <div className="flex items-start px-8 border border-solid border-stonewall-gray py-7 sm:flex-col sm:p-0 sm:px-2 sm:gap-8">
        <div className="grid flex-1 gap-[14px] pr-8 border-r border-solid border-stonewall-gray sm:pr-0 sm:w-full sm:pt-[14px] sm:border-0">
          <FormInput label="公司 / 姓名" placeholder="請輸入公司 / 姓名" />
          <FormInput label="聯絡電話" placeholder="請輸入聯絡電話" />
          <FormInput label="電子信箱" placeholder="請輸入電子信箱" />
          <div className="grid gap-3 mt-4 sm:mt-0">
            <h3 className="text-xl font-medium sm:text-base">訊息內容</h3>
            <textarea className="w-full h-32 border border-solid border-primary" />
          </div>
        </div>
        <div className="flex-1 grid gap-[14px] pl-8 sm:pl-0 sm:w-full sm:pb-2">
          <FormInput
            label="諮詢部門"
            placeholder="請選擇諮詢部門"
            options={[]}
          />
          <div className="pl-32 mb-14 sm:grid sm:place-content-center sm:pl-0 sm:mb-6">
            <OutlinedButton>新增型號</OutlinedButton>
          </div>

          <FormInput
            label="捲門系列"
            placeholder="請選擇捲門系列"
            options={[]}
          />
          <FormInput label="捲門" placeholder="請選擇捲門" options={[]} />
          <button className="flex items-center pr-3 text-xl font-medium text-bauhaus sm:text-base sm:pr-0">
            附件檔<span className="ml-1 text-xs">(上限10MB)</span>
            <CirclePlus className="ml-auto text-primary-red sm:w-6" />
          </button>
        </div>
      </div>
      <OutlinedButton className="place-self-center" size="wide">
        送出
      </OutlinedButton>
      <TopCircle to="/contact-us" />
    </div>
  );
}

export default Main;
