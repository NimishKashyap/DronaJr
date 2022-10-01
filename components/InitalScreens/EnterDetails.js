// This component is to get name and age from the user and

import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import CheckBox from "expo-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import BackButton from "../BackButton";

export default function EnterDetails({
  setScreenNo,
  name,
  age,
  setName,
  setAge,
}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackButton onPress={() => setScreenNo((prev) => prev - 1)} />
      <TextInput
        value={name}
        onChangeText={(prev) => setName(prev)}
        style={styles.inputView}
        placeholder="Enter name"
      />

      <TextInput
        style={styles.inputView}
        value={age}
        onChangeText={(prev) => setAge(prev)}
        placeholder="Enter age"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          setScreenNo((prev) => prev + 1);
        }}
      >
        <Text style={styles.loginText}>
          On the way! <AntDesign name="rightcircle" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  checkbox: {
    display: "flex",
    flexDirection: "row",
  },
  textStyle: {
    paddingRight: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#eeee",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    paddingHorizontal: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
  loginText: {
    fontWeight: "900",
    fontSize: 20,
    color: "white",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
});
