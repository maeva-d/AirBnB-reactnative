import { View, Text, StyleSheet } from "react-native";

export const Price = ({ price }) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.price}>{price} €</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    width: "35%",
    position: "relative",
    bottom: 60,
    left: 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },

  price: {
    fontSize: 22,
    color: "white",
    fontWeight: "light",
  },
});
