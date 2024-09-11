import { StyleSheet, Pressable, Text } from "react-native";
// J'importe mon fichier colors, qui fonctionne comme un objet avec des pairs clés (nom de la couleur) et valeurs (la propriété de la couleur)
import colors from "../styles/colors";

export const Button = ({ text, onPressFun }) => {
  return (
    <Pressable style={styles.button} onPress={onPressFun}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // La couleur que je veux
    borderColor: colors.pink,
    borderWidth: 3,
    borderRadius: 60,
  },
  text: {
    color: colors.grey,
    fontWeight: "500",
    fontSize: 18,
  },
});
