import { Stack } from "expo-router";
import React from "react";
import { StatusBar, View } from "react-native";

const _layout = () => {
  return (
    <View className="flex-1 h-full p-8 bg-background">
      <StatusBar barStyle="dark-content" backgroundColor="#0C1B2A" />
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
