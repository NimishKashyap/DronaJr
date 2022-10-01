import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

import LottieView from "lottie-react-native";

import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";

export default function Task4({ setPosition }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [timing] = useState(new Animated.Value(0));

  const animation = useRef(null);

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
      {/* <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text>Hello World</Text>
      </Animated.View> */}
      <View
        style={[
          styles.image_container,
          { minHeight: Math.round(windowHeight) + 25 },
        ]}
      >
        <ImageBackground
          style={styles.image}
          source={require("../../assets/Task_1/Phone_3_1.png")}
        ></ImageBackground>

        {/* <View
          style={{
            display: "flex",
            position: "absolute",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            bottom: 525,
            height: 30,
            borderRadius: 5,
          }}
        >
          <TextInput
            returnKeyType="go"
            onSubmitEditing={() => {
              setPosition((curr) => curr + 1);
            }}
            style={{
              width: "65%",
              backgroundColor: "white",
              height: 30,
            }}
          />
        </View> */}
        {/* <View
          style={{
            display: "flex",
            position: "absolute",
            width: "101%",
            justifyContent: "center",
            alignItems: "center",
            bottom: 455,
            paddingHorizontal: 5,
            height: 30,
            borderRadius: 50,
          }}
        >
          <TextInput
            style={{
              width: "65%",
              backgroundColor: "white",
              height: 30,
            }}
          />
        </View> */}
        <TouchableWithoutFeedback
          onPress={() => {
            setPosition((curr) => curr + 1);
          }}
        >
          <LottieView
            autoPlay
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              top: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
            ref={animation}
            source={require("../../assets/animations/tap.json")}
          />
        </TouchableWithoutFeedback>
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
