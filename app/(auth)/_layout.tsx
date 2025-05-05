import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Login" />
      <Stack.Screen name="Register" />
    </Stack>
  );
};

export default _layout;
