import { textPrimary } from "@/utils/default";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type NavItem = {
  icon: any;
  name: string;
  route: string;
};

type NavBarProps = {
  data: NavItem[];
};

export default function NavBar({ data }: NavBarProps) {
  const router = useRouter();
  return (
    <View className="w-full flex-row items-center justify-around  bg-background h-fit">
      {data.map((x) => (
        <TouchableOpacity
          onPress={() => router.push(x.route as any)}
          className="py-2 items-center w-1/5"
          key={x.name}
        >
          <View className="items-center bg-none">
            <x.icon className="text-primary" style={{ color: textPrimary }} />

            <Text
              className="text-heading leading-none"
              style={{ fontSize: 10 }}
            >
              {x.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
