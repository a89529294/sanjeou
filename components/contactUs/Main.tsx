import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import { v4 as uuidv4 } from "uuid";
import Chevron from "../Icons/Chevron";
import CirclePlus from "../Icons/CirclePlus";
import OutlinedButton from "../OutlinedButton";
import TopCircle from "../TopCircle";
import getProductTypes from "../../utils/data/getProductTypes";
import { ProductCategory } from "../../data/types";
import getProducts from "../../utils/data/getProducts";
import fileToBase64 from "../../utils/fileToBase64";
import StateManagedSelect from "react-select";

interface GenericFormInput {
  required?: boolean;
}
interface RegInput extends GenericFormInput {
  type: "reg";
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
interface SelectStringInput extends GenericFormInput {
  label: string;
  type: "selectString";
  value: { label: string; value: string };
  setValue: React.Dispatch<
    React.SetStateAction<{
      value: string;
      label: string;
    }>
  >;
  options: { label: string; value: string }[];
  placeholder: string;
}

interface SelectNumberInput extends GenericFormInput {
  label: string;
  type: "selectNumber";
  value: { label: string; value: number };
  setValue: React.Dispatch<
    React.SetStateAction<{
      value: number;
      label: string;
    }>
  >;
  options: { label: string; value: number }[];
  placeholder: string;
}

type ModelElement = {
  product_type: number;
  product: number;
  fileName: string;
  attachment: string;
  id: string;
};

const customStyles = {
  option: (provided: any, state: any) => {
    return {
      ...provided,
      ":active": { backgroundColor: "#eaeaea" },
      backgroundColor: state.isSelected || state.isFocused ? "#eaeaea" : "#fff",
      color: state.isSelected ? "#EA1833" : "#404040",
      border: "none",
    };
  },
  control: (provided: any, state: any) => ({
    opacity: state.isDisabled ? 0.3 : 1,
  }),
  singleValue: (provided: any, state: { isDisabled: any }) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
  input: (provided: any) => {
    return { ...provided, border: "none" };
  },
  indicatorsContainer: () => {
    return { display: "none" };
  },
  menu: (provided: any) => {
    return {
      ...provided,
      marginTop: 0,
      marginBottom: 0,
      minWidth: "200px",
      maxWidth: "max-content",
    };
  },
  menuList: (provided: any) => {
    return {
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
      "&::-webkit-scrollbar": { width: 0, height: 0 },
      scrollbarWidth: "none",
    };
  },
};

const FormInput = (props: RegInput | SelectNumberInput | SelectStringInput) => {
  const isReg = props.type === "reg";
  const isSelectString = props.type === "selectString";
  const isRequired = props.required ? props.required : false;
  //   const selectInputRef = useRef<any>(null);

  //   useEffect(
  //     () =>
  //       !props.value &&
  //       selectInputRef.current?.setValue({ label: "", value: "" }),
  //     [props.value]
  //   );

  return (
    <label className="relative grid grid-cols-[auto_1fr] items-center pb-2 text-xl font-medium border-b border-solid text-bauhaus placeholder:text-lg placeholder:text-stonewall-gray border-primary sm:text-base ">
      <span
        className={`relative w-32 sm:w-24 ${
          isRequired ? asteriskCssString : ""
        }`}>
        {props.label}
      </span>
      {isReg ? (
        <input
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      ) : (
        <>
          {isSelectString ? (
            <Select
              instanceId={"aaaa"}
              options={props.options}
              styles={customStyles}
              placeholder={props.placeholder}
              onChange={(e) => {
                props.setValue(e!);
              }}
              //   ref={selectInputRef}
              value={props.value}
              //   menuIsOpen={true}
            />
          ) : (
            <Select
              isDisabled={!props.options.length}
              instanceId={"bbbb"}
              options={props.options}
              styles={customStyles}
              placeholder={props.placeholder}
              onChange={(e) => {
                props.setValue(e!);
              }}
              // menuIsOpen={true}
            />
          )}
          <Chevron
            type="down"
            className="absolute ml-auto pointer-events-none right-1 stroke-primary-red"
          />
        </>
      )}
    </label>
  );
};

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
          await fetch(
            process.env.NEXT_PUBLIC_REACT_APP_API_HOST + "/api/contactuses",
            {
              method: "POST",
              body: JSON.stringify({
                data: {
                  company: companyOrUserName,
                  phone,
                  email,
                  department,
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
          reRef.current?.reset();
          setReCaptchaToken("");
          setCompanyOrUserName("");
          setPhone("");
          setEmail("");
          setContent("");
          //   setDepartment("");
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
                setDepartment({ label: "", value: "" });
                // setModels((pv) => [...pv, generateEmptyModelElement()]);
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
        disabled={disableSubmit}>
        送出
      </OutlinedButton>
      <TopCircle to="/contact-us" />
    </form>
  );
}

function ProductSection({
  setModels,
  id,
}: {
  setModels: React.Dispatch<React.SetStateAction<ModelElement[]>>;
  id: string;
}) {
  const [productCategories, setProductCategories] = useState<
    { label: string; value: number }[]
  >([]);
  const [selectedProductCategory, setSelectedProductCategory] = useState({
    label: "",
    value: 0,
  });
  const [products, setProducts] = useState<{ label: string; value: number }[]>(
    []
  );
  const [selectedProduct, setSelectedProduct] = useState({
    label: "",
    value: 0,
  });
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [productSelectKey, setProductSelectKey] = useState(0);

  useEffect(() => {
    (async () => {
      const productCategories = await getProductTypes();

      setProductCategories(
        productCategories.map((pc) => ({ value: pc.id, label: pc.name }))
      );
    })();
  }, []);

  useEffect(() => {
    setProducts([]);
    setSelectedProduct({ label: "", value: 0 });
    setProductSelectKey((k) => ++k);
    selectedProductCategory &&
      (async () => {
        const products = await getProducts(100, selectedProductCategory.value);
        setProducts(products.map((p) => ({ label: p.name, value: p.id })));
      })();
    updateModels("product_type", selectedProductCategory.value);
  }, [selectedProductCategory]);

  useEffect(() => {
    updateModels("product", selectedProduct.value);
  }, [selectedProduct]);

  useEffect(() => {
    updateModels("fileName", fileName);
  }, [fileName]);

  useEffect(() => {
    updateModels("attachment", fileContent);
  }, [fileContent]);

  function updateModels(prop: string, value: number | string) {
    setModels((pm) => {
      const elementIdx = pm.findIndex((m) => m.id === id);
      const copyElement = {
        ...pm[elementIdx],
        [prop]: value,
      };
      const copyArray = pm.slice();
      copyArray.splice(elementIdx, 1, copyElement);
      return copyArray;
    });
  }

  return (
    <div className="grid gap-3.5 relative">
      <FormInput
        label="產品系列"
        placeholder="請選擇產品系列"
        options={productCategories}
        value={selectedProductCategory}
        setValue={setSelectedProductCategory}
        type="selectNumber"
      />
      <FormInput
        label="產品"
        placeholder="請選擇產品"
        options={products}
        value={selectedProduct}
        setValue={setSelectedProduct}
        type="selectNumber"
        key={productSelectKey}
      />
      {/* <button className="flex items-center text-xl font-medium text-bauhaus sm:text-base sm:pr-0">
        附件檔<span className="ml-1 text-xs">(上限100MB)</span>
       
      </button> */}
      <label className="flex items-center text-xl font-medium cursor-pointer text-bauhaus sm:text-base sm:pr-0">
        附件檔<span className="ml-1 text-xs">(上限100MB)</span>
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            if (!e.target.files) return;
            const file = e.target.files[0];
            setFileName(file.name);
            fileToBase64(file)
              .then((r) => setFileContent(r))
              .catch((e) => console.log(e));
          }}
        />
        <CirclePlus className="ml-auto text-primary-red sm:w-6" />
      </label>

      <button
        className="text-primary-red"
        onClick={() => {
          setModels((pm) => pm.filter((m) => m.id !== id));
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 stroke-current hover-hover:hover:fill-primary-red fill-transparent hover-hover:hover:stroke-white"
          viewBox="0 0 24 24"
          strokeWidth={1}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
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
const asteriskCssString =
  "before:text-primary-red before:mr-1 before:content-['*']";

export default Main;
