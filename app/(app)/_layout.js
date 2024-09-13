import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default AppLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Around me",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My profile",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="location-outline"
              size={24}
              color={color}
            ></Ionicons>
          ),
        }}
      />
    </Tabs>
  );
};
