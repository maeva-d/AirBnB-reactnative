import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const login = (id, token) => {
    setUserID(id);
    setUserToken(token);
  };

  const logout = () => {
    setUserToken(null);
    setUserID(null);
    router.replace("/");
  };

  return (
    <AuthContext.Provider
      value={{ userID, setUserID, userToken, setUserToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
