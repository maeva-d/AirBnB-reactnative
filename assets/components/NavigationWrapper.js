import { Slot, router } from "expo-router";
import { AuthContext, AuthProvider } from "../../context/AuthContext";
import { useContext, useEffect } from "react";

export default NavigationWrapper = () => {
  const { userID, userToken } = useContext(AuthContext);

  useEffect(() => {
    if (userID && userToken) {
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [userID, userToken]);

  return <Slot />; // permet de basculer facilement entre les parties authentifiées et non authentifiées de l'application en fonction de l'état d'authentification de l'utilisateur.
};
