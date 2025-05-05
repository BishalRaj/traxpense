import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Link href="/(auth)/register">Go to register</Link>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
