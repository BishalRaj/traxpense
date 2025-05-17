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
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="gap-y-10 items-center w-full justify-center flex flex-1 px-0 bg-background"
    >
      <View>
        <View className="justify-center items-center w-20 h-20 overflow-hidden mx-auto">
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode={
              "contain" as "cover" | "contain" | "stretch" | "repeat" | "center"
            }
          />
        </View>
        <Text className="text-4xl font-semibold text-heading">Traxpense</Text>
      </View>

      <View className="w-full gap-y-5 items-center">
        <View className="w-full gap-y-3">
          <TextInput
            value={name}
            onChangeText={setEmail}
            placeholder="Name"
            placeholderTextColor="#A0A0A0"
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
            className={`py-4 px-3 border text-heading text-md font-light w-full  rounded-lg 
                          active:border-primary hover:border-primary active:ring-0 hover:ring-0 outline-none
                          ${
                            nameFocused
                              ? "border-primary ring-0 text-heading"
                              : "border-inputBorder"
                          }
                          `}
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#A0A0A0"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            className={`py-4 px-3 border text-heading text-md font-light w-full  rounded-lg 
                active:border-primary hover:border-primary active:ring-0 hover:ring-0 outline-none
                ${
                  emailFocused
                    ? "border-primary ring-0 text-heading"
                    : "border-inputBorder"
                }
                `}
          />
          <View
            className={`border w-full pr-4 rounded-lg overflow-hidden items-center justify-around flex-row ${
              passwordFocused ? "border-primary" : "border-inputBorder"
            }`}
          >
            <TextInput
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              placeholder="Password"
              className="flex-1 py-4 pl-3 text-md text-heading"
              placeholderTextColor="#A0A0A0"
              underlineColorAndroid="transparent"
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

      <View>
        <Text className="text-heading">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
