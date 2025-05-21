import { Slot } from "expo-router";
import React from "react";
import { StatusBar, View } from "react-native";

const _layout = () => {
  return (
    <View className="flex-1 h-full">
      <StatusBar barStyle="dark-content" backgroundColor="#0C1B2A" />
      <Slot />
    </View>
  );
};

export default _layout;
