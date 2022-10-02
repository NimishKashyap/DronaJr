import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Welcome/LoginScreen";
import BeginnersScreen from "./screens/TaskBeginners";
import IntermediateScreen from "./screens/TaskIntermediate";
import { BeginnerVieo } from "./components/BeginnerVideo";
import DashboardScreen from "./screens/Welcome/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Beginners" component={BeginnersScreen} />
        <Stack.Screen name="intermediate" component={IntermediateScreen} />
        <Stack.Screen name="beginner_video" component={BeginnerVieo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
