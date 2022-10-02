import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Welcome/LoginScreen";
<<<<<<< HEAD
import BeginnersScreen from "./screens/TaskBeginners";
import IntermediateScreen from "./screens/TaskIntermediate";
import { BeginnerVieo } from "./components/BeginnerVideo";
import DashboardScreen from "./screens/Welcome/DashboardScreen";

=======
>>>>>>> 86bff56dc94fa7051a40b4e6c0fe5281a2b54ae4
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={LoginScreen} />
<<<<<<< HEAD
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Beginners" component={BeginnersScreen} />
        <Stack.Screen name="intermediate" component={IntermediateScreen} />
        <Stack.Screen name="beginner_video" component={BeginnerVieo} />
=======
        {/* <Stack.Screen name="module" component={Module} /> */}
        {/* <Stack.Screen name="Beginners" component={BeginnersScreen} /> */}
        {/* <Stack.Screen name="intermediate" component={IntermediateScreen} /> */}
>>>>>>> 86bff56dc94fa7051a40b4e6c0fe5281a2b54ae4
      </Stack.Navigator>
    </NavigationContainer>
  );
}
