import { Image, StyleSheet } from "react-native";

export const OwnerPicture = ({ owner }) => {
  return <Image source={owner} resizeMode="cover" style={styles.avatar} />;
};

const styles = StyleSheet.create({
  avatar: {
    // borderRadius: "50%",
    height: 70,
    width: 70,
    marginLeft: "auto",
    flex: 1,
  },
});
