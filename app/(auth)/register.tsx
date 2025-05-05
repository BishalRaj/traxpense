import { Text, View } from "react-native";
import React, { Component } from "react";
import { Link } from "expo-router";

export class Register extends Component {
  render() {
    return (
      <View>
        <Text>Register</Text>
        <Link href="/(auth)/login">Go to Login</Link>
      </View>
    );
  }
}

export default Register;
