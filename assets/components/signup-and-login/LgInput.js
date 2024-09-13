import { StyleSheet, TextInput, useWindowDimensions } from "react-native";

// J'importe mon fichier colors, qui fonctionne comme un objet avec des pairs clés (nom de la couleur) et valeurs (la propriété de la couleur)
import colors from "../../styles/colors";

export const LgInput = ({ state, setState, placeholder }) => {
  const styles = useStyle();
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

const useStyle = () => {
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    textInput: {
      // La couleur que je veux
      borderColor: colors.lightPink,
      borderWidth: 2,
      width: width / 1.1,
      marginVertical: 15,
      fontSize: 16,
      height: 100,
      padding: 10, // pour décoler le texte placeholder du bord
    },
  });

  return styles;
};
