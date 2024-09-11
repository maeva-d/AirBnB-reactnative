// REQUETE
import axios from "axios";

// hooks
import { useState } from "react";

// components native dont j'ai besoin pour ma page log in
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// J'importe les components créés plus tôt dans assets dont j'ai besoin, qui sont tous rassemblés dans index.js du dossier component
import {
  Logo,
  Title,
  SmInput,
  Button,
  RedirectButton,
} from "../assets/components/index";

import colors from "../assets/styles/colors";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    // event.preventDefault();
    console.log("clicked");
    try {
      if (email === "nono@airbnb-api.com" && password === "pass") {
        setErrorMessage("");
        const response = await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
          {
            email: email,
            password: password,
          }
        );
        console.log(response.data);
        alert("Connexion succeeded");
      } else if (email === "" || password === "") {
        console.log("clicked 2");
        return setErrorMessage("Please fill all fields");
      } else if (email === "nono@airbnb-api.com" && password !== "pass") {
        console.log("clicked 1");
        return setErrorMessage("Password incorrect");
      } else if (email !== "nono@airbnb-api.com") {
        console.log("clicked 3");
        return setErrorMessage("This email doesn't have an account");
      }
    } catch (error) {
      console.log(error.response.data.error);
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
}

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
