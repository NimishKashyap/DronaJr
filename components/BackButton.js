import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function BackButton({ onPress }) {
  return (
    <View style={styles.back_button}>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="arrowleft" size={24} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  back_button: {
    width: 50,
    height: 50,
    borderRadius: 1000,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 70,
    left: 30,
    backgroundColor: "#eee",
  },
});

export default BackButton;
