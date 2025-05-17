import { Link, router, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as LocalAuthentication from "expo-local-authentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [biometricAvailable, setBiometricAvailable] = useState(false);

  const checkAvailability = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const enrolled = await LocalAuthentication.isEnrolledAsync();
    const supported =
      await LocalAuthentication.supportedAuthenticationTypesAsync();

    if (
      hasHardware &&
      enrolled &&
      (supported.includes(1) || supported.includes(2))
    ) {
      console.log("Biometric available:", supported);
      setBiometricAvailable(true);
      handleBiometricAuth();
    } else {
      console.log("Biometric not available");
    }
  };

  useEffect(() => {
    checkAvailability();
  }, []);

  const handleBiometricAuth = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to log in",
      fallbackLabel: "Use Passcode",
      disableDeviceFallback: true,
    });

    if (result.success) {
      console.log("Authentication successful ✅");
      router.push("/home" as never);
    } else {
      console.log("Authentication failed ❌", result);
    }
  };

  return (
    <SafeAreaView className="gap-y-10 items-center w-full justify-center flex flex-1 px-0 bg-background">
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
        <View className="flex-row gap-x-4 w-full">
          <Pressable
            onPress={() => {}}
            className="flex-1 py-2 bg-primary text-center rounded-lg"
          >
            <Text className="mx-auto text-heading text-lg font-semibold">
              Login
            </Text>
          </Pressable>
          {biometricAvailable && (
            <Pressable
              onPress={() => handleBiometricAuth()}
              className="overflow-hidden h-12 w-12 rounded-full"
            >
              {/* <Text>click me</Text> */}
              <Image
                source={require("@/assets/images/auth/biometric.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode={
                  "contain" as
                    | "cover"
                    | "contain"
                    | "stretch"
                    | "repeat"
                    | "center"
                }
              />
            </Pressable>
          )}
        </View>

        <Text className="text-primary">Forgot Password?</Text>
      </View>

      <View className=" items-center gap-y-2">
        <Text className="text-heading">Don't have account?</Text>
        <Link href="/register" className="text-heading text-lg">
          Register
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
