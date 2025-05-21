import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FileText, ScanQrCode } from "lucide-react-native";
import { useRouter } from "expo-router";
import { textPrimary } from "@/utils/default";

const tracker = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-background gap-y-5">
      <Text className="text-2xl text-primary font-bold">Add Expenses</Text>

      <TouchableOpacity
        onPress={() => router.push("/home")}
        className="items-center justify-center border border-white/20 bg-white/10 w-[85%] h-32 rounded-lg hover:bg-white/20 gap-y-2"
      >
        <FileText
          className="w-12 h-12 text-primary"
          style={{ color: textPrimary }}
          strokeWidth={1.5}
        />
        <Text className="text-white font-semibold text-lg">Enter Manually</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(device)/camera")}
        className="items-center justify-center border border-white/20 bg-white/10 w-[85%] h-32 rounded-lg hover:bg-white/20 gap-y-2"
      >
        <ScanQrCode
          className="w-12 h-12 text-primary"
          style={{ color: textPrimary }}
          strokeWidth={1.5}
        />
        <Text className="text-white font-semibold text-lg">Scan Receipt</Text>
      </TouchableOpacity>
    </View>
  );
};

export default tracker;
