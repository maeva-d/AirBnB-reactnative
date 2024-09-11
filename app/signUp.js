// REQUETE
import axios from "axios";

// hooks
import { useState } from "react";

// components
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// j'ai besoin d'une des couleurs ici
import colors from "../assets/styles/colors";

// J'importe les components créés plus tôt dans assets dont j'ai besoin, qui sont tous rassemblés dans index.js du dossier component
import {
  Logo,
  Title,
  SmInput,
  LgInput,
  Button,
  RedirectButton,
} from "../assets/components/index";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      if (
        email === "nono@airbnb-api.com" &&
        password === "pass" &&
        confirmPassword === password &&
        description !== ""
      ) {
        setErrorMessage("");
        const response = await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
          {
            email: email,
            password: password,
          }
        );
        console.log(response.data);
        alert("Account created");
      } else if (password !== confirmPassword) {
        return setErrorMessage("Passwords must be the same.");
      } else if (
        email === "" ||
        password === "" ||
        confirmPassword == "" ||
        description === ""
      ) {
        return setErrorMessage("Please fill all fields");
      } else if (email === "nono@airbnb-api.com") {
        return setErrorMessage("This email already has an account");
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
          <Title title={"Sign in"} />
        </View>
        {/* -- FORM -- */}
        <View>
          <SmInput
            state={username}
            setState={setUsername}
            placeholder={"username"}
          />
          <SmInput state={email} setState={setEmail} placeholder={"email"} />
          <LgInput
            state={description}
            setState={setDescription}
            placeholder={"describe yourself"}
          />
          <SmInput
            state={password}
            setState={setPassword}
            placeholder={"password"}
            secure
          />
          <SmInput
            state={confirmPassword}
            setState={setConfirmPassword}
            placeholder={"confirm password"}
            secure
          />
        </View>
        <View style={styles.section}>
          {errorMessage !== "" && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
          <Button text={"Sign up"} onPressFun={handleSubmit} />
          <RedirectButton
            text={"Already have an account ? Login !"}
            screen={"/"}
            //  ^ à compléter plus tard ^
          />
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
