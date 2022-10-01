import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export class DemoScreen extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={require("../assets/image/create-contact.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: undefined,
  },
});

export default DemoScreen;
