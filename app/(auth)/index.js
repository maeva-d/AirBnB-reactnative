// REQUETE
import axios from "axios";
// hooks
import { useContext, useState } from "react";

// components native dont j'ai besoin pour ma page log in
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// J'importe les components créés plus tôt dans assets dont j'ai besoin, qui sont tous rassemblés dans index.js du dossier component
import {
  Logo,
  Title,
  SmInput,
  Button,
  RedirectButton,
} from "../../assets/components/signup-and-login/index";

// J'importe mon contexte !
import { AuthContext } from "../../context/AuthContext";

import colors from "../../assets/styles/colors";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // J'importe la fonction dans mon contexte que je veux utiliser
  const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    // console.log("clicked");
    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      // console.log(response.data);
      // console.log(response.data.token, response.data.id);
      await AsyncStorage.setItem("id", response.data.id);
      await AsyncStorage.setItem("token", response.data.token);
      login(response.data.id, response.data.token); // La redirection sera gérée par NavigationWrapper
    } catch (error) {
      // console.log(error.response.data.error);
      if (error.response.data.error === "This account doesn't exist !") {
        return setErrorMessage(error.response.data.error);
      }
      if (error.response.data.error === "Missing parameter(s)") {
        return setErrorMessage("Please fill all fields");
      }
      if (error.response.data.error === "Unathorized") {
        return setErrorMessage("Your password is not correct");
      }
      return setErrorMessage(error.response.data.error);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
    >
      {/* -- HEADER -- */}
      <View style={styles.mainView}>
        <View style={styles.section}>
          <Logo />
          <Title title={"Log in"} />
        </View>
        {/* -- FORM -- */}
        <View>
          <SmInput state={email} setState={setEmail} placeholder={"email"} />
          <SmInput
            state={password}
            setState={setPassword}
            placeholder={"password"}
            secure // vrai par défaut
          />
        </View>
        <View style={styles.section}>
          {errorMessage !== "" && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
          <Button text={"Log in"} onPressFun={handleSubmit} />
          <RedirectButton text={"No account ? Register !"} screen={"/signUp"} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 25,
  },

  section: {
    justifyContent: "center",
    alignItems: "center",
  },

  errorText: {
    color: colors.pink,
    lineHeight: 45,
  },
});
