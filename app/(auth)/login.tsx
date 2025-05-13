import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaProvider className="flex-1 h-full items-center justify-center">
      <SafeAreaView className="gap-y-10 items-center w-full justify-center flex flex-1 px-0 bg-background">
        <View className="">
          <View className="justify-center items-center w-20 h-20 overflow-hidden mx-auto">
            <Image
              source={require("@/assets/images/logo.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode={
                "contain" as
                  | "cover"
                  | "contain"
                  | "stretch"
                  | "repeat"
                  | "center"
              }
            />
          </View>
          <Text className="text-4xl font-semibold text-heading">Traxpense</Text>
        </View>

        <View className="w-full gap-y-5 items-center">
          <View className="w-full gap-y-3">
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              className="py-4 px-3 border text-heading text-md font-light w-full border-inputBorder rounded-lg active:border-primary hover:border-primary active:ring-0 hover:ring-0 outline-none"
            />
            <View className=" border w-full border-inputBorder rounded-lg overflow-hidden items-center justify-around flex-row active:border-primary hover:border-primary">
              <TextInput
                value={password}
                onChangeText={setPassword}
                className="py-4 px-0 text-heading text-md font-light border-none ring-0 outline-none hover:outline-none hover:border-none hover:ring-0 active:outline-none active:border-none active:ring-0"
                placeholder="Password"
              />
              <Pressable onPress={() => {}}>
                <Text className="text-primary">Show</Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => {}}
            className="w-full py-2 bg-primary text-center rounded-lg"
          >
            <Text className="mx-auto text-heading text-lg font-semibold">
              Sign In
            </Text>
          </Pressable>

          <Text className="text-primary">Forgot Password?</Text>
        </View>

        <View className=" items-center gap-y-2">
          <Text className="text-heading">Don't have account?</Text>
          <Link href="/register" className="text-heading text-lg">
            Sign Up
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({});
