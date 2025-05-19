import NavBar from "@/components/home/navBar";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import {
  IconAddCircle,
  IconAnalytics,
  IconAvatar,
  IconHome,
  IconTransactions,
} from "@/assets/images/nav";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  const navData = [
    {
      icon: IconHome,
      name: "Home",
      route: "/home" as const,
    },
    {
      icon: IconTransactions,
      name: "Transactions",
      route: "/home/transactions" as const,
    },
    {
      icon: IconAddCircle,
      name: "Add",
      route: "/home/add" as const,
    },
    {
      icon: IconAnalytics,
      name: "Analytics",
      route: "/home/analytics" as const,
    },
    {
      icon: IconAvatar,
      name: "Profile",
      route: "/home/profile" as const,
    },
  ];

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
