import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const PostRatings = ({ numOfRatings }) => {
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= numOfRatings) {
      arr.push(<FontAwesome key={i} name="star" size={22} color="gold" />);
    } else {
      arr.push(<FontAwesome key={i} name="star" size={22} color="lightgrey" />);
    }
  }

  return <View style={styles.ratings}>{arr}</View>;
};

const styles = StyleSheet.create({
  ratings: {
    flexDirection: "row",
    gap: 5,
  },
});
