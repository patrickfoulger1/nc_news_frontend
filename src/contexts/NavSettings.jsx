import { createContext, useState } from "react";

export const NavSettings = createContext();

export const NavSettingsProvider = ({ children }) => {
  const [navSettings, setNavSettings] = useState({
    currentPage: "Home",
    lastArticleIdClicked: undefined,
  });

  return (
    <NavSettings.Provider value={{ navSettings, setNavSettings }}>
      {children}
    </NavSettings.Provider>
  );
};
