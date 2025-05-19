import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 h-full items-center justify-center">
      <Link href="/login">Login</Link>
      <Link href="/register" className="mt-10">
        Register
      </Link>
    </View>
  );
}
