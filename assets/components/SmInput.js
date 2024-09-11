import { StyleSheet, TextInput } from "react-native";
// J'importe mon fichier colors, qui fonctionne comme un objet avec des pairs clés (nom de la couleur) et valeurs (la propriété de la couleur)
import colors from "../styles/colors";

export const SmInput = ({ placeholder, secure, state, setState }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      secureTextEntry={secure}
      autoCapitalize="none"
      value={state}
      onChangeText={(text) => {
        setState(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    // J'utilise une clé de mon "objet" colors
    borderBottomColor: colors.lightPink,
    borderBottomWidth: 2,
    width: "80%",
    fontSize: 16,
  },
});
