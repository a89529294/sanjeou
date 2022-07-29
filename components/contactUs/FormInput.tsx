import Select from "react-select";
import Chevron from "../Icons/Chevron";
import { asteriskCssString } from "./Main";
import { RegInput, SelectNumberInput, SelectStringInput } from "./types";

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
    return { ...provided, border: "none", color: "transparent" };
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
              value={props.value}
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

export default FormInput;
