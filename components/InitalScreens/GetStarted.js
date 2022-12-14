import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function GetStarted({ screenNo, setScreenNo }) {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
       <LottieView
        autoPlay
        style={{
          position: "absolute",
          width: 630,
          height: 1090,
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={animation}
        source={require("../../assets/animations/background1.json")}
      />
      <Image style={styles.image} source={require("../../assets/logo.png")} />

      <StatusBar style="auto" />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          setScreenNo((prev) => prev + 1);
        }}
      >
        <Text style={styles.loginText}>
          Let's Get Started{" "}
          <AntDesign name="rightcircle" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

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
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderBottomColor: "#46CDCF",
    borderBottomWidth: 8,
    backgroundColor: "#ABEDD8",
  },
  loginText: {
    fontWeight: "900",
    letterSpacing: 3,
    fontSize: 20,
    color: "white",
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
});
