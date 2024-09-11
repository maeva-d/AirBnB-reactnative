import { StyleSheet, Pressable, Text } from "react-native";
import { router } from "expo-router";
// J'importe mon fichier colors, qui fonctionne comme un objet avec des pairs clés (nom de la couleur) et valeurs (la propriété de la couleur)
import colors from "../styles/colors";

export const RedirectButton = ({ text, screen }) => {
  return (
    <Pressable
      onPress={() => {
        router.navigate(screen);
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    // La couleur que je veux dans le fichier colors que j'ai importé
    color: colors.grey,
    lineHeight: 50,
  },
});
