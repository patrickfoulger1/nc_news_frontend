import { createContext, useState } from "react";

export const UserAccount = createContext(null);

export const UserAccountProvider = ({ children }) => {
  const [loggedOnUser, setLoggedOnUser] = useState({
    username: "happyamy2016",
    name: "Amy Happy",
    avatar_url:
      "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
  });

  return (
    <UserAccount.Provider value={{ loggedOnUser, setLoggedOnUser }}>
      {children}
    </UserAccount.Provider>
  );
};
