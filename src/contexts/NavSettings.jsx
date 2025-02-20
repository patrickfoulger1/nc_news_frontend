import { createContext, useState } from "react";
import StarButton from "../Components/StarButton";

export const NavSettings = createContext();

export const NavSettingsProvider = ({ children }) => {
  const [navSettings, setNavSettings] = useState({
    currentPage: "Home",
    lastArticleIdClicked: "first",
    sortMenuActive: false,
    starButton: null,
  });

  return (
    <NavSettings.Provider value={{ navSettings, setNavSettings }}>
      {children}
    </NavSettings.Provider>
  );
};
