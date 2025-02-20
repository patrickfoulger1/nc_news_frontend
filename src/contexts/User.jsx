import { createContext, useState } from "react";

export const UserAccount = createContext(null);

export const UserAccountProvider = ({ children }) => {
  const [loggedOnUser, setLoggedOnUser] = useState({
    username: "jolly",
    name: "Patrick Foulger",
    avatar_url: "https://avatars.githubusercontent.com/u/181989777?v=4",
  });

  return (
    <UserAccount.Provider value={{ loggedOnUser, setLoggedOnUser }}>
      {children}
    </UserAccount.Provider>
  );
};
