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

export default function Task6({ setPosition }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [sound, setSound] = useState();
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
      playSound();
    });
  }, []);
  const playSound = async () => {
    console.log("Loading sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/Task1_audio/7th.mp3")
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
      {/* <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text>Hello World</Text>
      </Animated.View> */}
      <View style={[styles.image_container]}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/Task_1/Phone_3.png")}
        ></ImageBackground>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          setPosition((curr) => curr + 1);
        }}
      >
        <LottieView
          autoPlay
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            right: -5,
            top: -5,
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={animation}
          source={require("../../assets/animations/pointer.json")}
        />
      </TouchableWithoutFeedback>
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
    marginTop: 10,
    margin: 5,
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
