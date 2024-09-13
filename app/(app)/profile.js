import { View, Text, Pressable } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default Profile = async () => {
  const { logout } = useContext(AuthContext);

  const id = await AsyncStorage.getItem("id");
  const token = await AsyncStorage.getItem("token");

  return (
    <View>
      <Text>Voici la page profile</Text>;
      <Pressable onPress={logout()}>
        <Text>Disconnect</Text>
      </Pressable>
    </View>
  );
};
