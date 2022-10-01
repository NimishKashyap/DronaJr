import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

import LottieView from "lottie-react-native";

export default function LandingScreen() {
  const animation = useRef(null);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
        source={require("../../assets/animations/task1.json")}
      />
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.greet_text}>
          Welcome to Task 1: Create new Contact
        </Text>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
  greet_text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
