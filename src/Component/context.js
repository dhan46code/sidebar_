import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);

  const openSidebar = () => {
    return setIsSidebar(true);
  };
  const closeSidebar = () => {
    return setIsSidebar(false);
  };

  return (
    <AppContext.Provider value={{ isSidebar, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobal };
