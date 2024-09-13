import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const login = async (id, token) => {
    setUserID(id);
    setUserToken(token);
    await AsyncStorage.setItem("userToken", token);
    await AsyncStorage.setItem("userID", id);
  };

  const logout = async () => {
    setUserToken(null);
    setUserID(null);
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userID");
    // router.replace("/");
  };

  return (
    <AuthContext.Provider
      value={{ userID, setUserID, userToken, setUserToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
