import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

const _layout = () => {
  return (
    <View className="flex-1 h-full p-10">
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
          <Stack.Screen name="Login" />
          <Stack.Screen name="Register" />
    </Stack>
    </View>
  );
};

export default _layout;
