import { AuthContext, AuthProvider } from "../context/AuthContext";

import NavigationWrapper from "../assets/components/NavigationWrapper";

export default RootLayout = () => {
  return (
    <AuthProvider>
      <NavigationWrapper />
    </AuthProvider>
  );
};
