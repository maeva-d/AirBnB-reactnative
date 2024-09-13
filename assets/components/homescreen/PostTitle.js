import { Text, StyleSheet } from "react-native";

export const PostTitle = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    lineHeight: 50,
    fontSize: 30,
  },
});
