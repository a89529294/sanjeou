import { useEffect, useState } from "react";
import getProducts from "../../utils/data/getProducts";
import getProductTypes from "../../utils/data/getProductTypes";
import fileToBase64 from "../../utils/fileToBase64";
import CirclePlus from "../Icons/CirclePlus";
import FormInput from "./FormInput";
import { ModelElement } from "./types";

export default function ProductSection({
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
    setSelectedProduct(emptyProductOrProductTypeValue);
    setProductSelectKey((k) => ++k);
    selectedProductCategory.value &&
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
        <span className="ml-auto">{fileName}</span>
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

const emptyProductOrProductTypeValue = { value: 0, label: "" };
