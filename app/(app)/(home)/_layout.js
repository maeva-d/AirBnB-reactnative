import { Stack } from "expo-router";

export default AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "jsp" }} />
    </Stack>
  );
};
