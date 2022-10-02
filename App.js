import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Task from "./screens/Welcome/TaskScreen";
import LoginScreen from "./screens/Welcome/LoginScreen";
import BeginnersScreen from "./screens/TaskBeginners";
import IntermediateScreen from "./screens/TaskIntermediate";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="home" component={LoginScreen} /> */}
        {/* <Stack.Screen name="module" component={Module} /> */}
        {/* <Stack.Screen name="Beginners" component={BeginnersScreen} /> */}
        <Stack.Screen name="intermediate" component={IntermediateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
