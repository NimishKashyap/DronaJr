import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import VerifyOtp from "../components/InitalScreens/VerifyOtp";

export class DemoScreen extends Component {
  render() {
    return (
      //   <View style={styles.background}>
      <View>
        {/* <Image
          style={styles.image}
          source={require("../assets/image/create-contact-1.png")}
        /> */}
        <VerifyOtp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
  },
  image: {
    height: "100%",
    width: undefined,
    resizeMode: "contain",
  },
});

export default DemoScreen;
