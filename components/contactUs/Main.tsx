import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { v4 as uuidv4 } from "uuid";
import OutlinedButton from "../OutlinedButton";
import TopCircle from "../TopCircle";
import FormInput from "./FormInput";
import { ModelElement } from "./types";
import ProductSection from "./ProductSection";

function Main() {
  const reRef = useRef<ReCAPTCHA>(null);
  const [reCaptchaToken, setReCaptchaToken] = useState("");
  const [companyOrUserName, setCompanyOrUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [department, setDepartment] = useState<
    typeof departmentOptions[number]
  >({ label: "", value: "" });
  //TODO implement a cache for already selected product categories and products

  const [models, setModels] = useState<ModelElement[]>([
    generateEmptyModelElement(),
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const disableSubmit =
    !companyOrUserName.trim() ||
    !reCaptchaToken ||
    !phone.trim() ||
    !email.trim() ||
    !content.trim() ||
    !department ||
    models.some((m) => m.product_type && !m.product);

  return (
    <form
      className="relative grid px-32 pt-6 pb-36 gap-9 sm:px-7 sm:py-6"
      id="contact-us-form"
      onSubmit={async (e) => {
        e.preventDefault();
        if (disableSubmit) return;
        try {
          setIsSubmitting(true);
          await fetch(
            process.env.NEXT_PUBLIC_REACT_APP_API_HOST + "/api/contactuses",
            {
              method: "POST",
              body: JSON.stringify({
                data: {
                  company: companyOrUserName,
                  phone,
                  email,
                  department: department.value,
                  content,
                  token: reCaptchaToken,
                  model: models.map((m) => ({
                    product_type: m.product_type,
                    product: m.product,
                    fileName: m.fileName,
                    attachment: m.attachment,
                  })),
                },
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setIsSubmitting(false);
          reRef.current?.reset();
          setReCaptchaToken("");
          setCompanyOrUserName("");
          setPhone("");
          setEmail("");
          setContent("");
          setDepartment(emptyDepartmentValue);
          setModels([generateEmptyModelElement()]);
        } catch (e) {
          console.log(e);
        }
      }}>
      <div className="flex items-start px-8 border border-solid border-stonewall-gray py-7 sm:flex-col sm:p-0 sm:px-2 sm:gap-8">
        <div className="grid flex-1 gap-3.5 pr-8 border-r border-solid border-stonewall-gray sm:pr-0 sm:w-full sm:pt-[14px] sm:border-0">
          <FormInput
            label="公司 / 姓名"
            placeholder="請輸入公司 / 姓名"
            value={companyOrUserName}
            setValue={setCompanyOrUserName}
            type="reg"
            required
          />
          <FormInput
            label="聯絡電話"
            placeholder="請輸入聯絡電話"
            value={phone}
            setValue={setPhone}
            type="reg"
            required
          />
          <FormInput
            label="電子信箱"
            placeholder="請輸入電子信箱"
            value={email}
            setValue={setEmail}
            type="reg"
            required
          />
          <div className="grid gap-3 mt-4 sm:mt-0">
            <h3
              className={`text-xl font-medium sm:text-base ${asteriskCssString}`}>
              訊息內容
            </h3>
            <textarea
              className="w-full h-32 p-4 text-xl border border-solid border-primary"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="請輸入內容"
            />
          </div>
        </div>
        <div className="flex-1 grid gap-[14px] pl-8 sm:pl-0 sm:w-full sm:pb-2">
          <FormInput
            label="諮詢部門"
            options={departmentOptions}
            type="selectString"
            value={department}
            setValue={setDepartment}
            placeholder="請選擇諮詢部門"
            required
          />
          <div className="pl-32 mb-14 sm:grid sm:place-content-center sm:pl-0 sm:mb-6">
            <OutlinedButton
              onClick={() => {
                setModels((pv) => [...pv, generateEmptyModelElement()]);
              }}>
              新增型號
            </OutlinedButton>
          </div>
          {models.map((m) => (
            <ProductSection key={m.id} setModels={setModels} id={m.id} />
          ))}
        </div>
      </div>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={(token) => {
          console.log(token);
          setReCaptchaToken(token ?? "");
        }}
        ref={reRef}
        className="flex justify-center"
      />

      <OutlinedButton
        className="place-self-center"
        size="wide"
        disabled={disableSubmit || isSubmitting}>
        送出
      </OutlinedButton>
      <TopCircle to="/contact-us" />
    </form>
  );
}

const generateEmptyModelElement = () => ({
  product_type: 0,
  product: 0,
  fileName: "",
  attachment: "",
  id: uuidv4(),
});
const departmentOptions = [
  { value: "業務部", label: "業務部" },
  { value: "工務部", label: "工務部" },
];
const emptyDepartmentValue = { value: "", label: "" };
export const asteriskCssString =
  "before:text-primary-red before:mr-1 before:content-['*']";

export default Main;
