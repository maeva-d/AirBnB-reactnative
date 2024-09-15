// REQUETE
import axios from "axios";
// hooks
import { useState, useContext } from "react";
// components
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// j'ai besoin d'une des couleurs
import colors from "../../assets/styles/colors";

// J'importe les components créés plus tôt dans assets dont j'ai besoin, qui sont tous rassemblés dans index.js du dossier component
import {
  Logo,
  Title,
  SmInput,
  LgInput,
  Button,
  RedirectButton,
} from "../../assets/components/signup-and-login/index";
import { AuthContext } from "../../context/AuthContext";

import { router } from "expo-router";

export default SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // J'importe la fonction  que je veux utiliser qui se trouve dans mon contexte
  const { login } = useContext(AuthContext);

  /////// Supprimer la ligne du bas plus tard
  // router.replace("/home");

  const handleSubmit = async () => {
    try {
      if (password !== confirmPassword) {
        return setErrorMessage("Passwords must be the same.");
      } else {
        setErrorMessage("");
        const response = await axios.post(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
          {
            email: email,
            username: username,
            description: description,
            password: password,
          }
        );
        alert("Account created");
        login(response.data.id, response.data.token);
      }
    } catch (error) {
      // console.log(error.response.data.error);
      if (error.response.data.error === "Missing parameter(s)") {
        return setErrorMessage("Please fill all fields");
      }
      if (error.response.data.error === "This email already has an account.") {
        return setErrorMessage(error.response.data.error);
      }
      return setErrorMessage(error.response.data.error);
    }
  };

  return (
    <ScrollView>
      {/* -- HEADER -- */}
      <View style={styles.mainView}>
        <View style={styles.section}>
          <Logo />
          <Title title={"Sign up"} />
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
        <View style={[styles.section, { marginVertical: 50 }]}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
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
