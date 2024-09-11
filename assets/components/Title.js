import { Text, StyleSheet } from "react-native";
// J'importe mon fichier colors, qui fonctionne comme un objet avec des pairs clés (nom de la couleur) et valeurs (la propriété de la couleur)
import colors from "../styles/colors";

export const Title = ({ title }) => {
  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    // La couleur que je veux
    color: colors.grey,
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 25,
  },
});
