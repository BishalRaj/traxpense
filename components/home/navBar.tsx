import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

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
          className="py-2 items-center"
          id={x.name}
        >
          <View className="items-center bg-none">
            <Image
              source={x.icon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text className="text-xs text-heading leading-none">{x.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
