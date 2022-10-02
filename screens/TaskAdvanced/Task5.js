import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";

import { Audio } from "expo-av";

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

export default function Task5({ setPosition }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [timing] = useState(new Animated.Value(0));
  const [sound, setSound] = useState();

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
      playSound();
    });
  }, []);
  const playSound = async () => {
    console.log("Loading sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/Task1_audio/8th.mp3")
    );
    setSound(sound);
    console.log("playing");
    await sound.playAsync();
  };
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <>
      <View style={[styles.image_container]}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/Task_1/Phone_4.png")}
        ></ImageBackground>
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
    zIndex: 50,
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
    marginTop: 30,
    paddingHorizontal: 10,
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
