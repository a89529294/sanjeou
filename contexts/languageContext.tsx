import * as React from "react";

type AllowedLanguages = "en" | "cn";

type AppContextInterface = [AllowedLanguages, (lang: AllowedLanguages) => void];

export const LanguageContext = React.createContext<AppContextInterface | null>(
  null
);

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = React.useState<AllowedLanguages>("cn");

  return (
    <LanguageContext.Provider value={[lang, setLang]}>
      {children}
    </LanguageContext.Provider>
  );
};
