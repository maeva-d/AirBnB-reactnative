// REQUETE
import axios from "axios";

// hooks
import { useState } from "react";

// components
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// j'ai besoin d'une des couleurs ici
import colors from "../assets/styles/colors";

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
      if (password !== confirmPassword) {
        return setErrorMessage("Your passwords must be identical");
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
      <View style={styles.mainView}>
        <Logo />
        <Title title={"Sign up"} />
        <Input
          state={username}
          setState={setUsername}
          placeholder={"username"}
        />
        <Input state={email} setState={setEmail} placeholder={"email"} />
        <LargeInput
          state={description}
          setState={setDescription}
          placeholder={"describe yourself"}
        />
        <Input
          state={password}
          setState={setPassword}
          placeholder={"password"}
          secure
        />
        <Input
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"confirm password"}
          secure
        />
        {errorMessage !== "" && <Text>{errorMessage}</Text>}
        <Button text={"Sign up"} onPressFun={handleSubmit} />
        <RedirectButton
          text={"Already have an account ? Login !"}
          screen={"/"}
          //  ^ à compléter plus tard ^
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.bgColor,
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
});
