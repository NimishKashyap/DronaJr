import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, TouchableWithoutFeedback } from "react-native";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
// import SoundPlayer from "react-native-sound-player";
import { Audio } from "expo-av";

import LottieView from "lottie-react-native";

import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";

export default function Task2({ setPosition }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [timing] = useState(new Animated.Value(0));

  const [sound, setSound] = useState();

  const animation = useRef(null);

  const playSound = async () => {
    console.log("Loading sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/Task1_audio/1st.mp3")
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
  useEffect(() => {}, []);

  return (
    <>
      {/* <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text>Hello World</Text>
      </Animated.View> */}
      <GestureRecognizer
        onSwipeUp={(state) => {
          console.log("On swipe up");
          setPosition((curr) => curr + 1);
        }}
      >
        <View style={styles.image_container}>
          <ImageBackground
            style={styles.image}
            source={require("../../assets/Task_1/Phone_1.png")}
          ></ImageBackground>

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
                top: 85,
                left: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              ref={animation}
              source={require("../../assets/animations/tap.json")}
            />
          </TouchableWithoutFeedback>
        </View>
      </GestureRecognizer>
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
    opacity: 0.3,
    height: "100%",
    padding: 20,
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
