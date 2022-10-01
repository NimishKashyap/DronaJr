import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export class DemoScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image
          style={styles.image}
          source={require("../assets/image/create-contact-1.png")}
        />
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
