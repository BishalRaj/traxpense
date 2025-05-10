import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login = () => {

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  return (
    <SafeAreaProvider className="flex-1 h-full items-center justify-center bg-red-300">
      
      <SafeAreaView className="gap-y-2 items-center w-full justify-center flex flex-1 bg-green-300 px-0">
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" className="py-2 border border-red-400 w-full" />
        <TextInput value={password} onChangeText={setPassword} className="py-2 border border-red-400 w-full"  placeholder="Password" />
        <View className="w-full">
        <Button title="Click Me" onPress={()=>{}} />
        </View>
      </SafeAreaView>
     
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({});
