import NavBar from "@/components/home/navBar";
import { navData } from "@/utils/data/nav";
import { router, Stack, useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import { BackHandler, ToastAndroid } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  useFocusEffect(
    useCallback(() => {
      let backPressedOnce = false;

      const onBackPress = () => {
        if (backPressedOnce) {
          BackHandler.exitApp();
          return true;
        }

        backPressedOnce = true;
        router.replace("/home");
        ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);

        const reset = setTimeout(() => {
          backPressedOnce = false;
        }, 2000);

        return true;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  return (
    <SafeAreaProvider className="flex-1">
      <SafeAreaView className="h-full">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <NavBar data={navData} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default _layout;
