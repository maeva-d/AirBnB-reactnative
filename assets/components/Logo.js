import { Image, StyleSheet, View } from "react-native";

// J'importe mon image
import logo from "../../assets/logo.png";

// J'exporte mon composant, mais pas par défaut
export const Logo = () => {
  return (
    <View>
      <Image source={logo} resizeMode="contain" style={styles.mainLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    height: 100,
    width: 100,
    marginVertical: 40,
  },
});
