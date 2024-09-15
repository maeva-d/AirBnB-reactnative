import { Image, StyleSheet } from "react-native";

export const PostPicture = ({ image }) => {
  return <Image style={styles.img} source={image} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: "100%",
    position: "asbolute",
  },
});
