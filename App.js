import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Welcome/LoginScreen";
import BeginnersScreen from "./screens/TaskBeginners";
import IntermediateScreen from "./screens/TaskIntermediate";
import advancedScreen from "./screens/TaskAdvanced";

import { AdvancedVideo } from "./components/AdvancedVideo";
import { IntermediateVideo } from "./components/IntermediateVideo";
import { BeginnerVideo } from "./components/BeginnerVideo";

import DashboardScreen from "./screens/Welcome/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="home" component={LoginScreen} /> */}
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Beginners" component={BeginnersScreen} />
        <Stack.Screen name="intermediate" component={IntermediateScreen} />
        <Stack.Screen name="beginner_video" component={BeginnerVideo} />
        <Stack.Screen name="intermediate_video" component={IntermediateVideo} />
        <Stack.Screen name="advanced_video" component={AdvancedVideo} />
        <Stack.Screen name="advanced" component={advancedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
