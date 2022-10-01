import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task4_1 from "./Task4_1";
import Task5 from "./Task5";

const Home = () => {
  const [position, setPosition] = useState(1);

  return (
    <View>
      {/* <StatusBar style="auto" /> */}
      {/* <Text style={styles.header}>Beginners Task List</Text>
      <View></View>
      <ScrollView style={styles.container}>
        <Text>OMG</Text>
      </ScrollView> */}

      {position === 1 && (
        <Task1 setPosition={setPosition} position={position} />
      )}
      {position === 2 && (
        <Task2 setPosition={setPosition} position={position} />
      )}
      {position === 3 && (
        <Task3 setPosition={setPosition} position={position} />
      )}
      {position === 4 && (
        <Task4 setPosition={setPosition} position={position} />
      )}
      {position === 5 && (
        <Task4_1 setPosition={setPosition} position={position} />
      )}
      {position === 6 && (
        <Task5 setPosition={setPosition} position={position} />
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 5,
  },
});
