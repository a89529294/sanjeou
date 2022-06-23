import { useContext } from "react";
import { LanguageContext } from "../contexts/languageContext";

export const useLangContext = () => {
  const value = useContext(LanguageContext);
  if (!value)
    throw new Error(
      "useLangContext cannot be used outside of LanguageContextProvider"
    );
  value;

  return [value[0], value[1]] as const;
};
