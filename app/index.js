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

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      }
    } catch (error) {
      if (email === "nono@airbnb-api.com" && password !== "pass") {
        return setErrorMessage("Password incorrect");
      }
      if (email !== "nono@airbnb-api.com") {
        return setErrorMessage("This email doesn't have an account");
      }
      if (email === "" || password === "") {
        return setErrorMessage("Please fill all field");
      }
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
        <Logo />
        <Title title={"Log in"} />
        {/* -- FORM -- */}
        <SmInput state={email} setState={setEmail} placeholder={"email"} />
        <SmInput
          state={password}
          setState={setPassword}
          placeholder={"password"}
          secure // vrai par défaut
        />
        {errorMessage !== "" && <Text>{errorMessage}</Text>}
        <Button text={"Log in"} onPressFun={handleSubmit} />
        <RedirectButton text={"No account ? Register !"} screen={"/signup"} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
