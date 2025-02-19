import { createContext, useState } from "react";

export const UserAccount = createContext(null);

export const UserAccountProvider = ({ children }) => {
  const [loggedOnUser, setLoggedOnUser] = useState(null);

  return (
    <UserAccount.Provider value={{ loggedOnUser, setLoggedOnUser }}>
      {children}
    </UserAccount.Provider>
  );
};
