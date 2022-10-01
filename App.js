import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Welcome/LoginScreen";
import { Text } from "react-native";
import DemoScreen from "./screens/DemoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={LoginScreen} /> */}
        <Stack.Screen name="demo" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
