import { Text, StyleSheet } from "react-native";

export const PostTitle = ({ text }) => {
  return (
    <Text numberOfLines={1} style={styles.title}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    lineHeight: 40,
    fontSize: 20,
    flex: 1,
    marginRight: 10,
  },
});
