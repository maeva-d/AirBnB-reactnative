import { Stack } from "expo-router";

export default AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "jsp" }} />
    </Stack>
  );
};
