import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

export default function Task4_1({ setPosition }) {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 50,
        display: "none",
        useNativeDriver: true,
      }).start();
    });
  }, []);

  const windowHeight = useWindowDimensions().height;

  return (
    <>
      <View
        style={[
          styles.image_container,
          { minHeight: Math.round(windowHeight) + 25 },
        ]}
      >
        <ImageBackground
          style={styles.image}
          source={require("../../assets/Task_5/news_5.png")}
        ></ImageBackground>
        <View
          style={{
            position: "absolute",
            height: Dimensions.get("screen").height,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setPosition((curr) => curr + 1);
              }}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  backgroundColor: "#ABEDD8",
                  width: "60%",
                  textAlign: "center",
                  paddingVertical: 20,
                  fontWeight: "bold",
                  fontSize: 25,
                  borderRadius: 8,
                  borderBottomColor: "#46CDCF",
                  borderBottomWidth: 8,
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image_container: {
    backgroundColor: "black",
  },
  taskText: {
    position: "absolute",
    zIndex: 10,
    fontSize: 30,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    zIndex: 10,
  },

  image: {
    opacity: 0.6,
    height: "100%",
    padding: 60,
    width: undefined,
    resizeMode: "contain",
    zIndex: -1,
  },
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
//
