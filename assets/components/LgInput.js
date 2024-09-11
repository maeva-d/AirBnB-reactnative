import { StyleSheet, TextInput } from "react-native";

// J'importe mon fichier colors, qui fonctionne comme un objet avec des pairs clés (nom de la couleur) et valeurs (la propriété de la couleur)
import colors from "../styles/colors";

export const LgInput = ({ state, setState, placeholder }) => {
  return (
    <TextInput
      style={styles.textInput}
      value={state}
      onChangeText={(text) => {
        setState(text);
      }}
      placeholder={placeholder}
      multiline={true}
      numberOfLines={10}
      maxLength={250}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    // La couleur que je veux
    borderColor: colors.lightPink,
    borderWidth: 2,
    width: "100%",
    marginBottom: 30,
    marginTop: 15,
    fontSize: 16,
    height: 100,
    padding: 10,
  },
});
