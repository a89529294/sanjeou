import React, { createContext, useState } from "react";

const DataContext = createContext(null);

function DataContextProvider() {
  const [state, setState] = useState();
  return <div>DataContext</div>;
}

export default DataContextProvider;
