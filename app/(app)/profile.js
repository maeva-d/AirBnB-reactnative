import { View, Text, Pressable } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default Home = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Text>Voici la page profile</Text>;
      <Pressable onPress={{ logout }}>
        <Text>Disconnect</Text>
      </Pressable>
    </View>
  );
};
