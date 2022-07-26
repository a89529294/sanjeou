import React, { createContext, useState } from "react";
import { News } from "../data/types";

export const dataContext = createContext<{
  news: News[];
  setNews: React.Dispatch<React.SetStateAction<News[]>>;
}>({
  news: [],
  setNews: () => {},
});

function DataContextProdiver({ children }: { children: React.ReactNode }) {
  const [news, setNews] = useState<News[]>([]);

  return (
    <dataContext.Provider
      value={{
        news,
        setNews,
      }}>
      {children}
    </dataContext.Provider>
  );
}

export default DataContextProdiver;
